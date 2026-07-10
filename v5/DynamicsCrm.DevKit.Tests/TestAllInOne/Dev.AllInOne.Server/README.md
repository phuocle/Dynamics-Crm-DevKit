```text
  ____                              _           ____                  ____             _  ___ _     ____ _ _
 |  _ \ _   _ _ __   __ _ _ __ ___ (_) ___ ___ / ___|_ __ _ __ ___   |  _ \  _____   _| |/ (_) |_  / ___| (_)
 | | | | | | | '_ \ / _` | '_ ` _ \| |/ __/ __| |   | '__| '_ ` _ \  | | | |/ _ \ \ / / ' /| | __|| |   | | |
 | |_| | |_| | | | | (_| | | | | | | | (__\__ \ |___| |  | | | | | |_| |_| |  __/\ V /| . \| | |_ | |___| | |
 |____/ \__, |_| |_|\__,_|_| |_| |_|_|\___|___/\____|_|  |_| |_| |_(_)____/ \___| \_/ |_|\_\_|\__(_)____|_|_|
        |___/            https://github.com/phuocle/Dynamics-Crm-DevKit 4.44.44.44 Build: 30.06.2026 23:59:59

```

# DynamicsCrm.DevKit Server Project

Accelerates Dataverse server-side development for plugins, workflows, custom actions, custom API, and data providers with pre-configured project structure, automated deployment scripts, and strong-name key signing.

## Features

* Pre-configured for .NET Framework 4.6.2
* Strong-name key (SNK) file for assembly signing
* Automated deployment scripts (deploy.debug.bat, deploy.debug.only.bat)
* Support for plugins, workflows, custom actions
* Support for custom API and data providers
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

* **key.snk** - Strong-name key for assembly signing
* **deploy.debug.bat** - Deploy and register server-side components
* **deploy.debug.only.bat** - Deploy only (without building)

## Deployment

```bash
# Build and deploy
deploy.debug.bat

# Deploy only
deploy.debug.only.bat
```

## References

* [Server Project Template Wiki](https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/Server-Project-Template)
* [Write a plug-in](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/plug-ins)
* [Workflow extensions](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/workflow/workflow-extensions)