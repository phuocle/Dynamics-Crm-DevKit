# DevKitTs-Vsix

TypeScript project simulating the output of the DevKit VSIX template.

## Project Structure

```
06.DevKitTs-Vsix/
├── Dev.DevKit.WebResourceTs/
│   ├── entities/
│   │   ├── Account.ts          # Main form logic
│   │   ├── Account.form.ts     # Form implementation (generated)
│   │   └── Account.webapi.ts   # WebAPI implementation (generated)
│   │   └── OptionSet.ts        # OptionSet definitions
│   └── lib/
│       ├── devkit.ts           # Core DevKit library
│       └── devkit.d.ts         # Type definitions
└── DynamicsCrm.DevKit.Cli.json # CLI Configuration
```

## Quick Start

```powershell
# From TestClientCode folder:
.\01.Clean-All.ps1      # Clean
.\02.Install-All.ps1    # Install npm packages
.\03.Generate-All.ps1   # Generate entity files from CRM
.\04.Sync-All.ps1       # Sync source of truth files
.\05.Check-Build-Test.ps1 # Run checks, builds, and tests
```

## Description

This project represents the default structure created when using the "TypeScript WebResource" template from the Visual Studio Extension (VSIX). It validates the TypeScript configuration (`tsconfig.json`), build scripts, and scaffolding.
