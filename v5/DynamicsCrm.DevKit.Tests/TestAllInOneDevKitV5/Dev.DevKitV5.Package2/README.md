```text
  ____                              _           ____                  ____             _  ___ _     ____ _ _
 |  _ \ _   _ _ __   __ _ _ __ ___ (_) ___ ___ / ___|_ __ _ __ ___   |  _ \  _____   _| |/ (_) |_  / ___| (_)
 | | | | | | | '_ \ / _` | '_ ` _ \| |/ __/ __| |   | '__| '_ ` _ \  | | | |/ _ \ \ / / ' /| | __|| |   | | |
 | |_| | |_| | | | | (_| | | | | | | | (__\__ \ |___| |  | | | | | |_| |_| |  __/\ V /| . \| | |_ | |___| | |
 |____/ \__, |_| |_|\__,_|_| |_| |_|_|\___|___/\____|_|  |_| |_| |_(_)____/ \___| \_/ |_|\_\_|\__(_)____|_|_|
        |___/            https://github.com/phuocle/Dynamics-Crm-DevKit 4.12.34.56 Build: 30.06.2026 23:59:59

```

# DynamicsCrm.DevKit Package Project

Enables Dataverse plugin development with dependent assemblies using NuGet packages, allowing you to leverage third-party libraries and manage dependencies efficiently for complex plugin scenarios.

## Features

* NuGet package support for dependent assemblies
* Pre-configured for .NET Framework 4.6.2
* Automated deployment scripts (deploy.debug.bat, deploy.debug.only.bat)
* Support for plugins with external dependencies
* Reference to Shared Project for common code
* DynamicsCrm.DevKit.Analyzers for code quality

## Requirements

Before creating this project, ensure you have:

1. **DynamicsCrm.DevKit Shared Project** - Required for shared code
2. **DynamicsCrm.DevKit CLI** - Required for deployment

## Package Dependencies

* Microsoft.CrmSdk.CoreAssemblies
* Microsoft.CrmSdk.Workflow
* DynamicsCrm.DevKit.Analyzers

## Key Components

* **deploy.debug.bat** - Build, merge, and deploy package plugin
* **deploy.debug.only.bat** - Deploy only (without building)
* **README.md** - This file (included in NuGet package metadata)

## Usage

Add your NuGet package dependencies in the .csproj file. The deployment script will automatically merge them with your plugin assembly.

```bash
# Build, merge dependencies, and deploy
deploy.debug.bat

# Deploy only
deploy.debug.only.bat
```

## References

* [Package Project Template Wiki](https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/Package-Project-Template)
* [Create packages for Package Deployer](https://learn.microsoft.com/en-us/power-platform/alm/package-deployer-tool)
* [Package Deployer tool](https://learn.microsoft.com/en-us/power-platform/alm/package-deployer-tool)