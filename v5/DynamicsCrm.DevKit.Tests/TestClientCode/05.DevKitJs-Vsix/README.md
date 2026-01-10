# DevKitJs-Vsix

JavaScript project simulating the output of the DevKit VSIX template.

## Project Structure

```
05.DevKitJs-Vsix/
├── Dev.DevKit.WebResource/
│   ├── entities/
│   │   ├── Account.js          # Main form logic
│   │   ├── Account.form.js     # Form implementation (generated)
│   │   └── Account.webapi.js   # WebAPI implementation (generated)
│   └── lib/
│       └── devkit.js           # Core DevKit library
└── DynamicsCrm.DevKit.Cli.json # CLI Configuration
```

## Quick Start

```powershell
# From TestClientCode folder:
.\01.Clean-All.ps1      # Clean
.\02.Install-All.ps1    # Install npm packages
.\03.Generate-All.ps1   # Generate entity files from CRM
.\04.Sync-All.ps1       # Sync source of truth files
.\05.Check-Build-Test.ps1 # Run checks (Note: No specific tests for this project)
```

## Description

This project represents the default structure created when using the "JavaScript WebResource" template from the Visual Studio Extension (VSIX). It is used to verify that the template output works correctly with the DevKit CLI and core libraries.
