```text
  ____                              _           ____                  ____             _  ___ _     ____ _ _
 |  _ \ _   _ _ __   __ _ _ __ ___ (_) ___ ___ / ___|_ __ _ __ ___   |  _ \  _____   _| |/ (_) |_  / ___| (_)
 | | | | | | | '_ \ / _` | '_ ` _ \| |/ __/ __| |   | '__| '_ ` _ \  | | | |/ _ \ \ / / ' /| | __|| |   | | |
 | |_| | |_| | | | | (_| | | | | | | | (__\__ \ |___| |  | | | | | |_| |_| |  __/\ V /| . \| | |_ | |___| | |
 |____/ \__, |_| |_|\__,_|_| |_| |_|_|\___|___/\____|_|  |_| |_| |_(_)____/ \___| \_/ |_|\_\_|\__(_)____|_|_|
        |___/            https://github.com/phuocle/Dynamics-Crm-DevKit 4.44.44.44 Build: xxxx.yy.zz HH.mm.ss

```

# DynamicsCrm.DevKit Console Core Project

Modern console application template targeting .NET 10.0 with Microsoft.PowerPlatform.Dataverse.Client for building cross-platform Dataverse automation tools, data migration utilities, and administrative scripts with the latest .NET features.

## Features

* Pre-configured for .NET 10.0 (cross-platform)
* Microsoft.PowerPlatform.Dataverse.Client integration
* Helper class for common Dataverse operations
* TracingServiceFake for debugging
* App.cs structure for organized code
* AppSettings.json for configuration management
* Empty AppSettings.json connection values can be resolved from the project `.env` file created by DynamicsCrm.DevKit
* Modern async/await patterns

## Requirements

Before creating this project, ensure you have:

1. **DynamicsCrm.DevKit Shared Project** - Required for shared code
2. **.NET 10.0 SDK** - Required for building and running

## Package Dependencies

* Microsoft.PowerPlatform.Dataverse.Client
* Microsoft.Extensions.Configuration
* Microsoft.Extensions.Configuration.Json
* DynamicsCrm.DevKit.Analyzers

## Key Components

* **Program.cs** - Entry point for console application
* **App.cs** - Main application logic
* **Helper.cs** - Utility methods for Dataverse operations
* **TracingServiceFake.cs** - Mock tracing service for debugging
* **AppSettings.json** - Configuration file for connection strings

## Connection Configuration

When this project is created from a connection that uses **Use project .env**, private `DEVKIT_*` values are stored in the solution-level `.env` file. Leave the matching `AppSettings.json` values empty to read from `.env`; commit `.env.example`, but keep `.env` local.

## References

* [Console Core Project Template Wiki](https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/Console-Core-Project-Template)
* [Use the SDK for .NET](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/org-service/overview)
* [ServiceClient Class](https://learn.microsoft.com/en-us/dotnet/api/microsoft.powerplatform.dataverse.client.serviceclient)
