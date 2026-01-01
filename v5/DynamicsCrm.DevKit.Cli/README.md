# DynamicsCrm.DevKit.Cli

Command-line interface for Dynamics 365 / Power Platform deployment automation.

## Tasks

| Task | Description |
|------|-------------|
| `generator` | Generate entity classes, forms, and web resources |
| `proxytypes` | Generate early-bound proxy types |
| `webresource` | Deploy web resources to CRM |
| `server` | Start local development server |
| `solutionpackager` | Pack/unpack CRM solutions |
| `datasource` | Configure virtual entity data sources |
| `downloadwebresource` | Download web resources from CRM |
| `downloadreport` | Download SSRS reports from CRM |
| `uploadreport` | Upload SSRS reports to CRM |

## Usage

```powershell
# Generate proxy types
DynamicsCrm.DevKit.Cli.exe /task:proxytypes /config:DynamicsCrm.DevKit.Cli.json

# Deploy web resources
DynamicsCrm.DevKit.Cli.exe /task:webresource /config:DynamicsCrm.DevKit.Cli.json

# Pack solution
DynamicsCrm.DevKit.Cli.exe /task:solutionpackager /config:DynamicsCrm.DevKit.Cli.json /action:pack
```

## Configuration

Create `DynamicsCrm.DevKit.Cli.json` in your project root:

```json
{
  "connection": {
    "type": "ClientSecret",
    "url": "https://your-org.crm.dynamics.com"
  },
  "tasks": [
    {
      "task": "webresource",
      "profile": "default"
    }
  ]
}
```

## Requirements

- .NET Framework 4.6.2+ or .NET 6.0+
- Dynamics 365 / Power Platform environment access
