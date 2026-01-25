```text
  ____                              _           ____                  ____             _  ___ _     ____ _ _
 |  _ \ _   _ _ __   __ _ _ __ ___ (_) ___ ___ / ___|_ __ _ __ ___   |  _ \  _____   _| |/ (_) |_  / ___| (_)
 | | | | | | | '_ \ / _` | '_ ` _ \| |/ __/ __| |   | '__| '_ ` _ \  | | | |/ _ \ \ / / ' /| | __|| |   | | |
 | |_| | |_| | | | | (_| | | | | | | | (__\__ \ |___| |  | | | | | |_| |_| |  __/\ V /| . \| | |_ | |___| | |
 |____/ \__, |_| |_|\__,_|_| |_| |_|_|\___|___/\____|_|  |_| |_| |_(_)____/ \___| \_/ |_|\_\_|\__(_)____|_|_|
        |___/            https://github.com/phuocle/Dynamics-Crm-DevKit 4.12.34.56 Build: 25.01.2026 16:22:10

```

# DynamicsCrm.DevKit ProxyTypes Project

Generates and maintains early-bound proxy types for Dataverse entities, providing strongly-typed classes for entity definitions, attributes, and relationships that are essential for FakeXrmEasy unit testing and type-safe development.

## Features

* Early-bound entity class generation
* Strong typing for entities, attributes, and relationships
* ProxyTypesAssembly for test initialization
* run.bat script for regenerating proxy types
* Compatible with FakeXrmEasy framework
* Pre-configured with required SDK assemblies

## Requirements

Before creating this project, ensure you have:

1. **DynamicsCrm.DevKit CLI** - Required for proxy type generation
2. **Dataverse connection** - Required for retrieving entity metadata

## Package Dependencies

* Microsoft.CrmSdk.CoreAssemblies
* Microsoft.CrmSdk.Workflow

## Key Components

* **GeneratedCode.cs** - Container for generated entity classes
* **ProxyTypesAssembly.cs** - Assembly attribute for FakeXrmEasy test initialization
* **run.bat** - Script to regenerate proxy types from Dataverse metadata

## Usage

1. Run `run.bat` to generate proxy types from your Dataverse environment
2. Reference this project from:
   * Server Projects (for early-bound entity access)
   * Console Projects
   * Test Projects (required by FakeXrmEasy)

## References

* [ProxyTypes Project Template Wiki](https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/ProxyTypes-Project-Template)