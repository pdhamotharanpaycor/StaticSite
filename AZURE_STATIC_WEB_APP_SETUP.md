# Azure Static Web Apps Deployment Setup

## 🎯 **Your Azure Static Web App Details**
- **App Name**: technova
- **Resource Group**: palspoc
- **Region**: Central US
- **Deployment Token**: `84b324d165ce42becda477f8ec8246e3d4d443e67d33f2728e73874880e4599802-1e3f2c8c-dd96-4823-a069-bf6234f7ec0b01028130d1450410`

## 🔐 **Step 1: Configure GitHub Secret**

1. **Go to your GitHub repository**: https://github.com/pdhamotharanpaycor/StaticSite
2. **Click "Settings"** (in the repository navigation)
3. **Click "Secrets and variables"** → **"Actions"**
4. **Click "New repository secret"**
5. **Add the secret:**
   - **Name**: `AZURE_STATIC_WEB_APPS_API_TOKEN`
   - **Value**: `84b324d165ce42becda477f8ec8246e3d4d443e67d33f2728e73874880e4599802-1e3f2c8c-dd96-4823-a069-bf6234f7ec0b01028130d1450410`
6. **Click "Add secret"**

## 🚀 **Step 2: Trigger Deployment**

Once the secret is added, the deployment will automatically trigger when you:
- Push to the `main` branch
- Create a pull request

## 🌐 **Your Website URLs**

After successful deployment, your TechNova website will be available at:
- **Primary URL**: `https://technova-[random-string].centralus.staticwebapps.azure.com`
- **Custom Domain**: Can be configured in Azure Portal

## ✅ **Verification Steps**

1. **Check GitHub Actions**:
   - Go to your repo → "Actions" tab
   - Look for "Azure Static Web Apps CI/CD" workflow
   - Verify it runs successfully

2. **Check Azure Portal**:
   - Navigate to your "technova" Static Web App
   - Check the "GitHub" tab for deployment status
   - Get the live URL from the "Overview" page

## 🔧 **Troubleshooting**

If deployment fails:
1. Check the GitHub Actions logs
2. Verify the secret is correctly set
3. Ensure the workflow file is in `.github/workflows/`
4. Check Azure Static Web App logs in Azure Portal

## 📋 **Next Steps**

After successful deployment:
1. **Custom Domain**: Configure in Azure Portal → Static Web App → Custom domains
2. **SSL Certificate**: Automatically provided by Azure
3. **Environment Variables**: Can be set in Azure Portal if needed
4. **Analytics**: Enable in Azure Portal for usage insights

---

## 🎉 **Ready to Deploy!**

Your configuration is complete. Push any changes to the `main` branch to trigger automatic deployment to your Azure Static Web App!
