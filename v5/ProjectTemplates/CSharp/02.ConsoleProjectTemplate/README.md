```text
  ____                              _           ____                  ____             _  ___ _     ____ _ _
 |  _ \ _   _ _ __   __ _ _ __ ___ (_) ___ ___ / ___|_ __ _ __ ___   |  _ \  _____   _| |/ (_) |_  / ___| (_)
 | | | | | | | '_ \ / _` | '_ ` _ \| |/ __/ __| |   | '__| '_ ` _ \  | | | |/ _ \ \ / / ' /| | __|| |   | | |
 | |_| | |_| | | | | (_| | | | | | | | (__\__ \ |___| |  | | | | | |_| |_| |  __/\ V /| . \| | |_ | |___| | |
 |____/ \__, |_| |_|\__,_|_| |_| |_|_|\___|___/\____|_|  |_| |_| |_(_)____/ \___| \_/ |_|\_\_|\__(_)____|_|_|
        |___/            https://github.com/phuocle/Dynamics-Crm-DevKit x.xx.xx.xx Build: xxxx.yy.zz HH.mm.ss

```

# DynamicsCrm.DevKit Console Project

Accelerates Dataverse console application development targeting .NET Framework 4.6.2 with Microsoft.PowerPlatform.Dataverse.Client for building automation tools, data migration utilities, and administrative scripts.

## Features

* Pre-configured for .NET Framework 4.6.2
* Microsoft.PowerPlatform.Dataverse.Client integration
* Helper class for common Dataverse operations
* TracingServiceFake for debugging
* App.cs structure for organized code
* Connection string configuration via App.config

## Requirements

Before creating this project, ensure you have:

1. **DynamicsCrm.DevKit Shared Project** - Required for shared code

## Package Dependencies

* Microsoft.PowerPlatform.Dataverse.Client
* Microsoft.CrmSdk.CoreAssemblies
* Microsoft.IdentityModel
* DynamicsCrm.DevKit.Analyzers

## Key Components

* **Program.cs** - Entry point for console application
* **App.cs** - Main application logic
* **Helper.cs** - Utility methods for Dataverse operations
* **TracingServiceFake.cs** - Mock tracing service for debugging

## References

* [Console Project Template Wiki](https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/Console-Project-Template)
* [Quickstart: Organization service console app](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/org-service/quick-start-org-service-console-app)
* [Connection Strings](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/xrm-tooling/use-connection-strings-xrm-tooling-connect)