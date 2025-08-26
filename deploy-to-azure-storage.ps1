# Azure Storage Static Website Deployment Script
# Run this script after updating the variables below

# Configuration - UPDATE THESE VALUES
$storageAccountName = "your-storage-account-name"  # Replace with your storage account name
$resourceGroup = "your-resource-group-name"        # Replace with your resource group name

Write-Host "🚀 Starting Azure Storage Static Website Deployment" -ForegroundColor Green

# Step 1: Build the React application
Write-Host "📦 Building React application..." -ForegroundColor Yellow
npm run build

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Build completed successfully" -ForegroundColor Green
} else {
    Write-Host "❌ Build failed" -ForegroundColor Red
    exit 1
}

# Step 2: Check if Azure CLI is logged in
Write-Host "🔐 Checking Azure CLI authentication..." -ForegroundColor Yellow
$account = az account show 2>$null
if (-not $account) {
    Write-Host "Please login to Azure CLI first: az login" -ForegroundColor Red
    exit 1
}

# Step 3: Enable static website on storage account
Write-Host "🌐 Enabling static website on storage account..." -ForegroundColor Yellow
az storage blob service-properties update `
    --account-name $storageAccountName `
    --static-website `
    --404-document "index.html" `
    --index-document "index.html"

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Static website enabled" -ForegroundColor Green
} else {
    Write-Host "❌ Failed to enable static website" -ForegroundColor Red
    exit 1
}

# Step 4: Upload built files to Azure Storage
Write-Host "📤 Uploading files to Azure Storage..." -ForegroundColor Yellow
az storage blob upload-batch `
    --account-name $storageAccountName `
    --auth-mode key `
    --source "./build" `
    --destination '$web' `
    --overwrite

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Files uploaded successfully" -ForegroundColor Green
} else {
    Write-Host "❌ Failed to upload files" -ForegroundColor Red
    exit 1
}

# Step 5: Get the website URL
Write-Host "🔗 Getting website URL..." -ForegroundColor Yellow
$websiteUrl = az storage account show `
    --name $storageAccountName `
    --resource-group $resourceGroup `
    --query "primaryEndpoints.web" `
    --output tsv

Write-Host "🎉 Deployment completed successfully!" -ForegroundColor Green
Write-Host "🌐 Your website is available at: $websiteUrl" -ForegroundColor Cyan
Write-Host "📝 Note: It may take a few minutes for changes to propagate" -ForegroundColor Yellow
