# Test ManagedIdentity với Azure App Service (Free Tier)

> **Mục đích**: Hướng dẫn deploy CLI lên Azure App Service để test Profile 27 (ManagedIdentity)
> **Yêu cầu**: Azure CLI đã login (`az login`)

---

## Bước 1: Tạo Resource Group (nếu chưa có)

```bash
# Tạo resource group
az group create --name rg-devkit-test --location southeastasia
```

---

## Bước 2: Tạo App Service Plan (Free Tier)

```bash
# Tạo App Service Plan F1 (Free)
az appservice plan create \
  --name asp-devkit-test \
  --resource-group rg-devkit-test \
  --sku F1 \
  --is-linux
```

> **Lưu ý**: Free tier có giới hạn 60 phút CPU/ngày

---

## Bước 3: Tạo Web App

```bash
# Tạo Web App với .NET 8 runtime
az webapp create \
  --name devkit-mi-test \
  --resource-group rg-devkit-test \
  --plan asp-devkit-test \
  --runtime "DOTNETCORE:8.0"
```

---

## Bước 4: Enable System-Assigned Managed Identity

```bash
# Enable Managed Identity
az webapp identity assign \
  --name devkit-mi-test \
  --resource-group rg-devkit-test

# Output sẽ có principalId - GHI LẠI
```

**Output mẫu:**
```json
{
  "principalId": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
  "tenantId": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
  "type": "SystemAssigned"
}
```

---

## Bước 5: Cấp quyền Dataverse cho Managed Identity

1. Vào [Power Platform Admin Center](https://admin.powerplatform.microsoft.com/)
2. Chọn Environment → **dynamics-crm-devkit-v4**
3. **Settings** → **Users + permissions** → **Application users**
4. Click **+ New app user**
5. **+ Add an app** → Tìm bằng `principalId` từ Bước 4
6. Chọn **Business Unit** và **Security Role** (ít nhất `System Administrator`)
7. **Create**

---

## Bước 6: Publish CLI lên App Service

### Option A: Publish bằng Visual Studio

1. Right-click project `DynamicsCrm.DevKit.Cli` → **Publish**
2. Chọn **Azure** → **Azure App Service (Linux)**
3. Chọn `devkit-mi-test`
4. **Publish**

### Option B: Publish bằng CLI

```bash
# Publish project
cd D:\github\Dynamics-Crm-DevKit\v5\DynamicsCrm.DevKit.Cli
dotnet publish -c Release -o ./publish

# Deploy zip
cd publish
Compress-Archive -Path * -DestinationPath ../app.zip -Force
az webapp deployment source config-zip \
  --name devkit-mi-test \
  --resource-group rg-devkit-test \
  --src ../app.zip
```

---

## Bước 7: Test ManagedIdentity

### Sử dụng Kudu Console

1. Vào Azure Portal → App Service `devkit-mi-test`
2. **Development Tools** → **Advanced Tools** → **Go**
3. **Debug console** → **CMD**
4. Navigate đến `/home/site/wwwroot`
5. Chạy:

```bash
./DynamicsCrm.DevKit.Cli server \
  --url "https://dynamics-crm-devkit-v4.crm.dynamics.com" \
  --auth ManagedIdentity \
  --json "./DynamicsCrm.DevKit.Cli.json" \
  --profile "DEBUG"
```

**Expected Output:**
```
Connected: https://dynamics-crm-devkit-v4.crm.dynamics.com
```

---

## Bước 8: Cleanup (Optional)

```bash
# Xóa resource group khi test xong
az group delete --name rg-devkit-test --yes --no-wait
```

---

## Troubleshooting

### Lỗi: "ManagedIdentityCredential authentication unavailable"
- Kiểm tra Managed Identity đã enable chưa
- Đợi vài phút sau khi enable

### Lỗi: "User does not have permission"
- Kiểm tra đã thêm Application User trong Power Platform Admin Center
- Kiểm tra Security Role đã assign

### Lỗi: "Invalid URL"
- Kiểm tra URL Dynamics 365 đúng format

---

**Document Version**: 1.0  
**Created**: 2026-01-13  
**Purpose**: Hướng dẫn test ManagedIdentity với Azure App Service Free Tier
