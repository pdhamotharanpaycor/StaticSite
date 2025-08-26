# Azure Storage Static Website Deployment Guide

## Prerequisites
- Azure Storage Account with Static Website enabled
- Azure CLI installed locally

## Step 1: Build the React Application
```bash
npm run build
```

## Step 2: Enable Static Website on Storage Account
```bash
# Replace with your storage account details
STORAGE_ACCOUNT_NAME="yourstorageaccount"
RESOURCE_GROUP="palspoc"

# Enable static website
az storage blob service-properties update \
    --account-name $STORAGE_ACCOUNT_NAME \
    --static-website \
    --404-document "index.html" \
    --index-document "index.html"
```

## Step 3: Upload Built Files
```bash
# Upload all files from build directory
az storage blob upload-batch \
    --account-name $STORAGE_ACCOUNT_NAME \
    --auth-mode key \
    --source "./build" \
    --destination '$web' \
    --overwrite
```

## Step 4: Get Website URL
```bash
# Get the static website URL
az storage account show \
    --name $STORAGE_ACCOUNT_NAME \
    --resource-group $RESOURCE_GROUP \
    --query "primaryEndpoints.web" \
    --output tsv
```

## PowerShell Version (Windows)
```powershell
# Build the application
npm run build

# Set variables
$storageAccountName = "yourstorageaccount"
$resourceGroup = "palspoc"

# Enable static website
az storage blob service-properties update `
    --account-name $storageAccountName `
    --static-website `
    --404-document "index.html" `
    --index-document "index.html"

# Upload files
az storage blob upload-batch `
    --account-name $storageAccountName `
    --auth-mode key `
    --source "./build" `
    --destination '$web' `
    --overwrite

# Get website URL
az storage account show `
    --name $storageAccountName `
    --resource-group "palspoc" `
    --query "primaryEndpoints.web" `
    --output tsv
```

## Important Notes:
1. Both index.html and 404-document are set to "index.html" for SPA routing
2. The '$web' container is automatically created for static websites
3. Make sure your storage account allows public access for static websites
