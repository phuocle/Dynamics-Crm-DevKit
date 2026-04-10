# MCP Cloud Deployment Plan

> **Goal**: Tách MCP tool code ra `DynamicsCrm.DevKit.Mcp.Shared`, tạo `DynamicsCrm.DevKit.Mcp` project cho cloud (Azure App Service). CLI vẫn giữ nguyên, cả 2 project cùng reference shared MCP code.

---

## 1. Nguyên Tac

| Rule | Detail |
|---|---|
| **Single source of MCP code** | Tool/Resource/Helper/Model code chi ton tai o 1 cho duy nhat: `Mcp.Shared` |
| **CLI giu nguyen** | `devkit mcp` (stdio) van chay binh thuong, chi doi reference |
| **Cloud project chi la host** | `DynamicsCrm.DevKit.Mcp` chi chua ASP.NET Core startup + auth middleware |
| **Khong duplicate code** | Khong copy tool code, khong fork, khong #if directive |

---

## 2. Project Structure

```
v5/
├── DynamicsCrm.DevKit.Cli/              # CLI (giu nguyen)
│   ├── Mcp/
│   │   └── McpServerHost.cs             # GIU LAI - stdio host, reference Mcp.Shared
│   ├── Commands/
│   ├── Tasks/
│   └── ...
│
├── DynamicsCrm.DevKit.Mcp.Shared/       # MOI - shared library cho MCP code
│   ├── DynamicsCrm.DevKit.Mcp.Shared.csproj  # net10.0, class library
│   ├── McpDryRunOptions.cs              # DI CHUYEN tu Cli/Mcp/
│   ├── McpToolCategoryMap.cs            # MOI - tach tu McpServerHost.cs
│   ├── Tools/                           # DI CHUYEN tu Cli/Mcp/Tools/
│   │   ├── WhoAmITool.cs
│   │   ├── GetTablesTool.cs
│   │   ├── ManageFormTool.cs
│   │   ├── ... (31 tool files)
│   │   ├── Helper/                      # DI CHUYEN tu Cli/Mcp/Tools/Helper/
│   │   │   ├── CompactFormatter.cs
│   │   │   ├── DataverseValueFormatter.cs
│   │   │   ├── ... (10 helper files)
│   │   └── Models/                      # DI CHUYEN tu Cli/Mcp/Tools/Models/
│   │       └── StructuredResults.cs
│   └── Resources/                       # DI CHUYEN tu Cli/Mcp/Resources/
│       ├── InstructionResources.cs
│       └── SchemaResources.cs
│
├── DynamicsCrm.DevKit.Mcp/             # MOI - cloud MCP server
│   ├── DynamicsCrm.DevKit.Mcp.csproj   # net10.0, ASP.NET Core web app
│   ├── Program.cs                       # Streamable HTTP host
│   ├── appsettings.json                 # Dataverse connection config
│   └── Dockerfile                       # Optional: container deploy
│
├── DynamicsCrm.DevKit.Shared/          # GIU NGUYEN
│   └── ... (MetadataService, Models, XSD, etc.)
│
└── DynamicsCrm.DevKit.AllInOne.slnx    # Them 2 project moi
```

---

## 3. Reference Graph

```
DynamicsCrm.DevKit.Cli
    ├── references → DynamicsCrm.DevKit.Mcp.Shared
    └── imports   → DynamicsCrm.DevKit.Shared (.shproj)

DynamicsCrm.DevKit.Mcp
    ├── references → DynamicsCrm.DevKit.Mcp.Shared
    └── imports   → DynamicsCrm.DevKit.Shared (.shproj)

DynamicsCrm.DevKit.Mcp.Shared
    └── imports   → DynamicsCrm.DevKit.Shared (.shproj)
```

---

## 4. Files Di Chuyen (Move)

### Tu `Cli/Mcp/` sang `Mcp.Shared/`

| Source (Cli/Mcp/) | Destination (Mcp.Shared/) | Files |
|---|---|---|
| `McpServerOptions.cs` | `McpDryRunOptions.cs` | 1 |
| `Tools/*.cs` | `Tools/*.cs` | 31 |
| `Tools/Helper/*.cs` | `Tools/Helper/*.cs` | 10 |
| `Tools/Models/*.cs` | `Tools/Models/*.cs` | 1 |
| `Resources/*.cs` | `Resources/*.cs` | 2 |
| **Total** | | **45 files** |

### Giu Lai o `Cli/Mcp/`

| File | Ly Do |
|---|---|
| `McpServerHost.cs` | Chua stdio transport logic, category filtering, CLI-specific DI |

### Tach tu `McpServerHost.cs`

| Code Block | Di Chuyen Sang | Ly Do |
|---|---|---|
| `ToolCategoryMap` dictionary | `Mcp.Shared/McpToolCategoryMap.cs` | Ca 2 host can dung |
| `CategoryLevel` dictionary | `Mcp.Shared/McpToolCategoryMap.cs` | Ca 2 host can dung |
| `GetFilteredToolTypeNames()` | `Mcp.Shared/McpToolCategoryMap.cs` | Logic loc tool theo category |
| `GetToolCount()` | `Mcp.Shared/McpToolCategoryMap.cs` | Helper |

---

## 5. Namespace Changes

| Hien Tai | Sau Khi Tach |
|---|---|
| `DynamicsCrm.DevKit.Cli.Mcp` | `DynamicsCrm.DevKit.Mcp.Shared` |
| `DynamicsCrm.DevKit.Cli.Mcp.Tools` | `DynamicsCrm.DevKit.Mcp.Shared.Tools` |
| `DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper` | `DynamicsCrm.DevKit.Mcp.Shared.Tools.Helper` |
| `DynamicsCrm.DevKit.Cli.Mcp.Tools.Models` | `DynamicsCrm.DevKit.Mcp.Shared.Tools.Models` |
| `DynamicsCrm.DevKit.Cli.Mcp.Resources` | `DynamicsCrm.DevKit.Mcp.Shared.Resources` |

---

## 6. Project File Details

### 6.1 DynamicsCrm.DevKit.Mcp.Shared.csproj

```xml
<Project Sdk="Microsoft.NET.Sdk">
  <PropertyGroup>
    <TargetFramework>net10.0</TargetFramework>
    <RootNamespace>DynamicsCrm.DevKit.Mcp.Shared</RootNamespace>
    <ImplicitUsings>enable</ImplicitUsings>
  </PropertyGroup>

  <ItemGroup>
    <!-- MCP SDK - tools, resources, attributes -->
    <PackageReference Include="ModelContextProtocol" Version="1.2.0" />

    <!-- Dataverse SDK - ServiceClient used by all tools -->
    <PackageReference Include="Microsoft.PowerPlatform.Dataverse.Client" Version="1.2.10" />
  </ItemGroup>

  <!-- Shared project (MetadataService, Models, XSD resources) -->
  <Import Project="..\DynamicsCrm.DevKit.Shared\DynamicsCrm.DevKit.Shared.projitems"
          Label="Shared" />
</Project>
```

### 6.2 DynamicsCrm.DevKit.Mcp.csproj (Cloud)

```xml
<Project Sdk="Microsoft.NET.Sdk.Web">
  <PropertyGroup>
    <TargetFramework>net10.0</TargetFramework>
    <RootNamespace>DynamicsCrm.DevKit.Mcp</RootNamespace>
  </PropertyGroup>

  <ItemGroup>
    <!-- ASP.NET Core MCP transport -->
    <PackageReference Include="ModelContextProtocol.AspNetCore" Version="1.2.0" />

    <!-- Auth -->
    <PackageReference Include="Microsoft.Identity.Web" Version="3.8.0" />

    <!-- Dataverse connection -->
    <PackageReference Include="Microsoft.PowerPlatform.Dataverse.Client" Version="1.2.10" />
  </ItemGroup>

  <ItemGroup>
    <!-- Shared MCP tools/resources -->
    <ProjectReference Include="..\DynamicsCrm.DevKit.Mcp.Shared\DynamicsCrm.DevKit.Mcp.Shared.csproj" />
  </ItemGroup>
</Project>
```

### 6.3 DynamicsCrm.DevKit.Cli.csproj (Update)

```xml
<!-- THEM DONG NAY -->
<ItemGroup>
  <ProjectReference Include="..\DynamicsCrm.DevKit.Mcp.Shared\DynamicsCrm.DevKit.Mcp.Shared.csproj" />
</ItemGroup>

<!-- BO DONG NAY (da chuyen sang Mcp.Shared.csproj) -->
<!-- PackageReference Include="ModelContextProtocol" co the giu hoac bo, tuy vao stdio transport -->
```

> **Luu y**: CLI van can `ModelContextProtocol` package vi `McpServerHost.cs` dung `.WithStdioServerTransport()` truc tiep. Hoac co the tach transport registration sang extension method trong Mcp.Shared.

---

## 7. Cloud Host Code

### DynamicsCrm.DevKit.Mcp/Program.cs

```csharp
using DynamicsCrm.DevKit.Mcp.Shared;
using DynamicsCrm.DevKit.Mcp.Shared.Tools;
using DynamicsCrm.DevKit.Shared.Services;
using Microsoft.PowerPlatform.Dataverse.Client;

var builder = WebApplication.CreateBuilder(args);

// --- Dataverse Connection ---
var connectionString = builder.Configuration["Dataverse:ConnectionString"]
    ?? builder.Configuration.GetConnectionString("Dataverse");

var serviceClient = new ServiceClient(connectionString);
if (!serviceClient.IsReady)
    throw new InvalidOperationException($"Dataverse connection failed: {serviceClient.LastError}");

ServiceClient.MaxConnectionTimeout = TimeSpan.FromHours(1);

builder.Services.AddSingleton(serviceClient);
builder.Services.AddSingleton(new MetadataService(serviceClient));
builder.Services.AddSingleton(new McpDryRunOptions { DryRun = false });

// --- Auth Middleware (Azure AD / Entra ID) ---
// builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
//     .AddMicrosoftIdentityWebApi(builder.Configuration.GetSection("AzureAd"));

// --- MCP Server (Streamable HTTP) ---
builder.Services
    .AddMcpServer(options =>
    {
        options.ServerInfo = new()
        {
            Name = "DynamicsCrm.DevKit (cloud)",
            Version = DynamicsCrm.DevKit.Shared.Const.Version
        };
        options.ServerInstructions =
            $"Connected to Dataverse: {serviceClient.ConnectedOrgUriActual} | " +
            $"Org: {serviceClient.ConnectedOrgFriendlyName} ({serviceClient.ConnectedOrgUniqueName}) | " +
            $"Version: {serviceClient.ConnectedOrgVersion}";
    })
    .WithHttpTransport()
    .WithToolsFromAssembly(typeof(WhoAmITool).Assembly)       // Load tu Mcp.Shared
    .WithResourcesFromAssembly(typeof(WhoAmITool).Assembly);  // Load tu Mcp.Shared

var app = builder.Build();

// app.UseAuthentication();
// app.UseAuthorization();
app.MapMcp("/mcp");

app.Run();
```

> **Quan trong**: `.WithToolsFromAssembly(typeof(WhoAmITool).Assembly)` — phai chi dinh assembly cua `Mcp.Shared`, khong dung `GetExecutingAssembly()` (vi no se lay assembly cua cloud project).

### DynamicsCrm.DevKit.Mcp/appsettings.json

```json
{
  "Dataverse": {
    "ConnectionString": "AuthType=ClientSecret;Url=https://xxx.crm.dynamics.com;ClientId=xxx;ClientSecret=xxx"
  },
  "AzureAd": {
    "Instance": "https://login.microsoftonline.com/",
    "TenantId": "xxx",
    "ClientId": "xxx",
    "Audience": "api://devkit-mcp"
  }
}
```

---

## 8. CLI Host Code (Updated McpServerHost.cs)

```csharp
// Chi thay doi:
// 1. using moi (namespace cua Mcp.Shared)
// 2. ToolCategoryMap / CategoryLevel goi tu McpToolCategoryMap (Mcp.Shared)
// 3. Tool discovery dung typeof(WhoAmITool).Assembly thay vi GetExecutingAssembly()

using DynamicsCrm.DevKit.Mcp.Shared;
using DynamicsCrm.DevKit.Mcp.Shared.Tools;
// ...

public class McpServerHost
{
    // ToolCategoryMap, CategoryLevel -> dung McpToolCategoryMap static class
    // GetFilteredToolTypeNames -> dung McpToolCategoryMap.GetFilteredToolTypeNames()

    // .WithToolsFromAssembly(typeof(WhoAmITool).Assembly)
    // .WithResourcesFromAssembly(typeof(WhoAmITool).Assembly)
}
```

---

## 9. Azure App Service Deployment

### 9.1 Tai Sao Azure App Service

| Tieu Chi | Azure App Service |
|---|---|
| SSE Streaming | OK (ho tro) |
| Chi phi | ~$13/thang (B1 plan) hoac Free tier cho dev |
| Do phuc tap | Thap nhat — `dotnet publish` -> deploy |
| CI/CD | GitHub Actions tich hop san |
| Custom domain / SSL | Co san |
| Managed Identity | Ho tro — khong can luu Client Secret |

### 9.2 Deploy Steps

```bash
# 1. Publish
dotnet publish DynamicsCrm.DevKit.Mcp -c Release -o ./publish

# 2. Deploy (Azure CLI)
az webapp deploy --resource-group rg-devkit --name devkit-mcp --src-path ./publish

# 3. Config (Managed Identity cho Dataverse)
az webapp identity assign --name devkit-mcp --resource-group rg-devkit
```

### 9.3 Managed Identity (Production)

Thay vi `ClientSecret` trong `appsettings.json`, dung Azure Managed Identity:

```csharp
var connectionString = "AuthType=ManagedIdentity;Url=https://xxx.crm.dynamics.com";
var serviceClient = new ServiceClient(connectionString);
```

---

## 10. Security

| Layer | Solution |
|---|---|
| Client -> MCP Server | OAuth 2.0 Bearer token (Azure AD / Entra ID) |
| MCP Server -> Dataverse | Managed Identity (production) / ClientSecret (dev) |
| Secrets | Azure Key Vault (khong luu trong appsettings.json) |
| Network | App Service VNET integration (optional) |

---

## 11. Implementation Phases

### Phase 1: Tach Mcp.Shared (1-2 ngay)

- [ ] Tao project `DynamicsCrm.DevKit.Mcp.Shared` (.csproj, folder structure)
- [ ] Di chuyen 45 files tu `Cli/Mcp/` sang `Mcp.Shared/`
- [ ] Tach `McpToolCategoryMap.cs` tu `McpServerHost.cs`
- [ ] Update namespaces: `DynamicsCrm.DevKit.Cli.Mcp.*` -> `DynamicsCrm.DevKit.Mcp.Shared.*`
- [ ] Update `DynamicsCrm.DevKit.Cli.csproj` — them ProjectReference den Mcp.Shared
- [ ] Update `McpServerHost.cs` (CLI) — dung `typeof(WhoAmITool).Assembly`
- [ ] Build CLI (`/build-cli`) — dam bao khong break
- [ ] Test `devkit mcp` chay binh thuong

### Phase 2: Tao Cloud Project (1 ngay)

- [ ] Tao project `DynamicsCrm.DevKit.Mcp` (ASP.NET Core Web)
- [ ] Them `ModelContextProtocol.AspNetCore` package
- [ ] Viet `Program.cs` voi Streamable HTTP transport
- [ ] Them `appsettings.json` voi Dataverse connection
- [ ] Test local: `dotnet run` + curl POST http://localhost:5000/mcp
- [ ] Them vao solution `DynamicsCrm.DevKit.AllInOne.slnx`

### Phase 3: Deploy Azure App Service (1 ngay)

- [ ] Tao Azure App Service (B1 plan hoac Free)
- [ ] Config Managed Identity
- [ ] Deploy `DynamicsCrm.DevKit.Mcp`
- [ ] Test endpoint: `https://devkit-mcp.azurewebsites.net/mcp`
- [ ] Config Azure Key Vault cho secrets

### Phase 4: Auth + Production (1-2 ngay)

- [ ] Them Azure AD authentication middleware
- [ ] Config OAuth 2.0 cho MCP clients
- [ ] Application Insights monitoring
- [ ] Rate limiting
- [ ] CI/CD pipeline (GitHub Actions)

---

## 12. Chi Phi Uoc Tinh

| Component | Cost/Month |
|---|---|
| Azure App Service (B1) | ~$13 |
| Azure Key Vault | ~$0.03 |
| Application Insights | Free tier |
| **Total** | **~$13/month** |

> Dev/test: dung Free tier App Service ($0) — gioi han 60 min CPU/day, du cho testing.

---

## 13. Checklist Cuoi Cung

- [ ] `DynamicsCrm.DevKit.Mcp.Shared` tao thanh cong, build OK
- [ ] `DynamicsCrm.DevKit.Cli` van build + `devkit mcp` chay dung (stdio)
- [ ] `DynamicsCrm.DevKit.Mcp` build + chay local (HTTP)
- [ ] 31 tools + 8 resources hoat dong o ca 2 host
- [ ] Deploy Azure App Service thanh cong
- [ ] AI client goi duoc `https://devkit-mcp.azurewebsites.net/mcp`
- [ ] Khong co code MCP duplicate giua 2 project
