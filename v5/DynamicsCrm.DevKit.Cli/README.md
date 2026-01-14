# DynamicsCrm.DevKit.Cli

A comprehensive CLI tool for Dynamics 365/Dataverse deployment automation and code generation.

---

## Installation

```powershell
dotnet tool install --global DynamicsCrm.DevKit.Cli
```

---

## Commands

| Command               | Description                                      |
| --------------------- | ------------------------------------------------ |
| `server`              | Deploy plugins, workflows, packages to Dataverse |
| `plugin`              | Deploy plugins only                              |
| `workflow`            | Deploy workflows only                            |
| `dataprovider`        | Deploy data providers                            |
| `generator`           | Generate JS/TS/C# code from entity metadata      |
| `webresource`         | Deploy web resources                             |
| `proxytype`           | Generate proxy types using CrmSvcUtil            |
| `solution`            | Extract/Pack solutions using SolutionPackager    |
| `downloadreport`      | Download reports from a solution                 |
| `uploadreport`        | Upload reports to a solution                     |
| `downloadwebresource` | Download web resources from a solution           |
| `datasource`          | Create data source entities                      |

---

## Usage

### Basic Syntax
```powershell
devkit <command> --url "<environment-url>" --auth <auth-type> [auth-options] --json "<path-to-json>" --profile "<profile-name>"
```

### Quick Examples

```powershell
# Deploy server with Interactive authentication (browser login with MFA)
devkit server --url "https://org.crm.dynamics.com" --auth Interactive --json "..\\cli.json" --profile "DEBUG"

# Deploy with FromPac (reuse PAC CLI cached tokens - zero login required!)
devkit server --auth FromPac --pacprofile "DEVKITV4" --json "..\\cli.json" --profile "DEBUG"

# Deploy with ClientSecret (for CI/CD pipelines)
devkit server --url "https://org.crm.dynamics.com" --auth ClientSecret --clientid "app-id" --clientsecret "secret" --json "..\\cli.json" --profile "DEBUG"

# Deploy with --onlyupdateassembly (skip step registration)
devkit server --url "..." --auth ClientSecret --clientid "..." --clientsecret "..." --json "..." --profile "DEBUG" --onlyupdateassembly

# Generate TypeScript forms
devkit generator --url "..." --auth Interactive --json "..." --profile "Account"

# Generate proxy types (auto-detect CrmSdk.CoreTools version)
devkit proxytype --url "..." --auth FromPac --json "..." --profile "ALL"

# Extract solution
devkit solution --url "..." --auth ClientSecret --clientid "..." --clientsecret "..." --json "..." --profile "Extract-Both"

# Pack solution
devkit solution --url "..." --auth FromPac --json "..." --profile "Pack-Both"

# Download reports
devkit downloadreport --url "..." --auth Interactive --json "..." --profile "DEBUG"

# Upload reports
devkit uploadreport --url "..." --auth ClientSecret --clientid "..." --clientsecret "..." --json "..." --profile "DEBUG"

# Deploy web resources
devkit webresource --url "..." --auth DeviceCode --json "..." --profile "DEBUG"

# Create data source entity
devkit datasource --url "..." --auth FromPac --json "..." --profile "DEBUG"
```

---

## 🔐 Connection Types (9 Authentication Methods)

The CLI supports **9 flexible authentication methods** via `--auth`, covering every scenario from local development to enterprise CI/CD pipelines:

### Authentication Methods Overview

| Auth Type                | Best For                              | Recommended |
| ------------------------ | ------------------------------------- | ----------- |
| `FromPac`                | **Developers** - Reuse PAC CLI tokens | ⭐ **Yes**   |
| `Interactive`            | Developers with MFA                   | ⭐ **Yes**   |
| `DeviceCode`             | Headless, SSH, CI containers          | ✅           |
| `ClientSecret`           | CI/CD pipelines, automation           | ⭐ **Yes**   |
| `ClientCertificate`      | High-security production              | ✅           |
| `ManagedIdentity`        | Azure VMs, App Services, Functions    | ⭐ **Yes**   |
| `DefaultAzureCredential` | Flexible Azure SDK chain              | ✅           |
| `OAuth`                  | Legacy username/password              | ⚠️ Legacy    |
| `AD`                     | On-premise Active Directory           | ⚠️ On-prem   |

### Connection Options Reference

| Option           | Description                                   |
| ---------------- | --------------------------------------------- |
| `--auth`         | Authentication type (see table above)         |
| `--url`          | Dynamics 365 environment URL                  |
| `--clientid`     | Azure AD application (client) ID              |
| `--clientsecret` | Client secret (plain text or DPAPI encrypted) |
| `--cert`         | Path to .pfx certificate file                 |
| `--certpass`     | Certificate password                          |
| `--pacprofile`   | PAC CLI profile name or 1-indexed number      |
| `--user`         | Username (for OAuth/AD)                       |
| `--pass`         | Password (for OAuth/AD)                       |

---

### 1️⃣ FromPac - Reuse PAC CLI Tokens (Recommended for Developers)

**Zero login required!** Reuses cached tokens from Power Platform CLI (`pac auth`).

```powershell
# Use default/active PAC profile
devkit server --auth FromPac --json "cli.json" --profile "DEBUG"

# Use named PAC profile
devkit server --auth FromPac --pacprofile "DEVKITV4" --json "cli.json" --profile "DEBUG"

# Use by index (1-indexed from pac auth list)
devkit server --auth FromPac --pacprofile "11" --json "cli.json" --profile "DEBUG"
```

> [!TIP]
> Run `pac auth list` to see available profiles. Perfect for developers who already use PAC CLI!

---

### 2️⃣ Interactive - Browser Login with MFA

Opens browser for Microsoft login. Full MFA/Conditional Access support.

```powershell
devkit server --url "https://org.crm.dynamics.com" --auth Interactive --json "cli.json" --profile "DEBUG"
```

> [!NOTE]
> Tokens are cached securely. Subsequent runs may not require re-login.

---

### 3️⃣ DeviceCode - Headless/SSH Environments

Displays a code to enter at https://microsoft.com/devicelogin. Perfect for SSH sessions and containers.

```powershell
devkit server --url "https://org.crm.dynamics.com" --auth DeviceCode --json "cli.json" --profile "DEBUG"
```

---

### 4️⃣ ClientSecret - Service Principal (CI/CD Recommended)

Uses Azure AD App Registration with client secret. Ideal for automated pipelines.

```powershell
# Plain text secret
devkit server --url "https://org.crm.dynamics.com" --auth ClientSecret --clientid "1a60a5c2-xxxx-xxxx-xxxx-xxxxxxxxxxxx" --clientsecret "~je8Q~xxxxxxxx" --json "cli.json" --profile "CI"

# DPAPI encrypted secret (Windows only)
devkit server --url "https://org.crm.dynamics.com" --auth ClientSecret --clientid "..." --clientsecret "4Y11hDyKJYQTqXC9cRDXnoJ2DytZDs/jYI1byYwKli57mRfjHcCPu6Qx5sxgtCWQ" --json "cli.json" --profile "CI"
```

> [!IMPORTANT]
> For production, use DPAPI-encrypted secrets or Azure Key Vault.

---

### 5️⃣ ClientCertificate - High-Security Production

Uses client certificate for authentication. Most secure option for production.

```powershell
devkit server --url "https://org.crm.dynamics.com" --auth ClientCertificate --clientid "app-id" --cert "C:\\certs\\app.pfx" --certpass "certificate-password" --json "cli.json" --profile "PROD"
```

> [!CAUTION]
> Protect your certificate files and never commit them to source control.

---

### 6️⃣ ManagedIdentity - Azure Native (Zero Secrets)

Uses Azure Managed Identity. No secrets to manage!

```powershell
# System-assigned managed identity
devkit server --url "https://org.crm.dynamics.com" --auth ManagedIdentity --json "cli.json" --profile "AZURE"

# User-assigned managed identity
devkit server --url "https://org.crm.dynamics.com" --auth ManagedIdentity --clientid "user-assigned-identity-client-id" --json "cli.json" --profile "AZURE"
```

> [!TIP]
> Perfect for Azure VMs, App Services, Functions, and AKS with Pod Identity.

---

### 7️⃣ DefaultAzureCredential - Automatic Chain

Tries multiple auth methods in order: Environment variables → Managed Identity → Azure CLI → Visual Studio → etc.

```powershell
devkit server --url "https://org.crm.dynamics.com" --auth DefaultAzureCredential --json "cli.json" --profile "AUTO"
```

---

### 8️⃣ OAuth - Legacy Username/Password

Traditional username/password authentication. Not recommended for new implementations.

```powershell
devkit server --url "https://org.crm.dynamics.com" --auth OAuth --user "user@domain.onmicrosoft.com" --pass "password" --json "cli.json" --profile "DEBUG"
```

> [!WARNING]
> Username/password auth is less secure and may not work with MFA-enabled accounts.

---

### 9️⃣ AD - On-Premise Active Directory

For on-premise Dynamics CRM with Active Directory authentication.

```powershell
devkit server --url "https://crm.yourdomain.com" --auth AD --user "DOMAIN\\username" --pass "password" --json "cli.json" --profile "ONPREM"
```

---

## Command Options

| Option                 | Description                                              |
| ---------------------- | -------------------------------------------------------- |
| `--json`               | Path to `DynamicsCrm.DevKit.Cli.json` configuration file |
| `--profile`            | Profile name defined in the JSON file                    |
| `--version`            | CoreTools version (optional, auto-detected)              |
| `--onlyupdateassembly` | Skip step registration, update assembly only             |

---

## Features

### Server Deployment (server/plugin/workflow/dataprovider)
- **4 Pre/Post Images** support (Image1-4)
- **Managed Identity** support with auto-signing
- **Custom API** registration
- **Data Provider** registration
- **Package Deployment** (.nupkg)
- **Step ID tracking** for idempotent deployments
- **RunAs** user impersonation
- **Source types**: Database, Disk, AzureWebApp, FileStore
- **OnlyUpdateAssembly**: Skip step registration for faster deployment

### Code Generation (generator)
- **JsForm** - JavaScript form IntelliSense
- **JsWebApi** - JavaScript WebAPI client
- **TsForm** - TypeScript form definitions
- **TsWebApi** - TypeScript WebAPI client
- **CSharp** - C# late-bound helpers

### Proxy Types (proxytype)
- **CrmSvcUtil** integration
- **Version auto-detect** from packages folder
- **Entity filtering** support

### Solution Packager (solution)
- **Extract** - Export and extract solution to source control
- **Pack** - Pack solution from source for import
- **Solution types**: Managed, Unmanaged, Both
- **Version auto-detect** from packages folder
- **Map file** support

### Web Resources (webresource)
- **Pattern-based deployment** with include/exclude filters
- **Dependency management** for web resource libraries
- **Auto-publish** after deployment
- **All file types**: JS, CSS, HTML, images, XML, RESX, SVG

### Reports (downloadreport/uploadreport)
- **Solution-based download/upload**
- **Multi-language support**
- **RDL file handling**

### Download Web Resources (downloadwebresource)
- **Solution-based download**
- **Preserves folder structure**
- **Binary file support**

### Data Source (datasource)
- **Create virtual entities** for external data
- **Auto-naming** with solution prefix
- **Full metadata configuration**

---

## Configuration File

Create `DynamicsCrm.DevKit.Cli.json` in your project:

```json
{
  "servers": [
    {
      "profile": "DEBUG",
      "solution": "YourSolution",
      "folder": "bin\\Debug",
      "includefiles": ["*.dll"],
      "excludefiles": []
    }
  ],
  "generators": [
    {
      "profile": "Account",
      "type": "JsForm",
      "rootfolder": "WebResources",
      "rootnamespace": "YourNamespace",
      "entities": "Account,Contact"
    }
  ],
  "proxytypes": [
    {
      "profile": "ALL",
      "namespace": "YourNamespace",
      "output": "ProxyTypes.cs",
      "entities": "*"
    }
  ],
  "solutionpackagers": [
    {
      "profile": "Extract-Both",
      "solution": "YourSolution",
      "solutiontype": "Both",
      "folder": "Solutions",
      "type": "Extract"
    }
  ],
  "webresources": [
    {
      "profile": "DEBUG",
      "solution": "YourSolution",
      "rootfolder": "WebResources",
      "includefiles": ["**/*.js", "**/*.css"],
      "excludefiles": ["**/*.ts"]
    }
  ]
}
```

---

## Support

- GitHub: https://github.com/phuocle/Dynamics-Crm-DevKit
- Issues: https://github.com/phuocle/Dynamics-Crm-DevKit/issues
