```text
  ____                              _           ____                  ____             _  ___ _     ____ _ _
 |  _ \ _   _ _ __   __ _ _ __ ___ (_) ___ ___ / ___|_ __ _ __ ___   |  _ \  _____   _| |/ (_) |_  / ___| (_)
 | | | | | | | '_ \ / _` | '_ ` _ \| |/ __/ __| |   | '__| '_ ` _ \  | | | |/ _ \ \ / / ' /| | __|| |   | | |
 | |_| | |_| | | | | (_| | | | | | | | (__\__ \ |___| |  | | | | | |_| |_| |  __/\ V /| . \| | |_ | |___| | |
 |____/ \__, |_| |_|\__,_|_| |_| |_|_|\___|___/\____|_|  |_| |_| |_(_)____/ \___| \_/ |_|\_\_|\__(_)____|_|_|
        |___/            https://github.com/phuocle/Dynamics-Crm-DevKit 4.12.34.56 Build: xxxx.yy.zz HH.mm.ss

```

# DynamicsCrm.DevKit Shared Project

Provides a foundational structure for Dataverse development with core utility classes, extension methods, and reusable components that can be shared across multiple projects in your solution.

## Features

* Shared project structure for code reusability
* Core utility classes (Date, Extension, EntityBase)
* PluginCore base class for plugin development
* DevKitJson handler for lightweight JSON operations
* Generator batch file for entity code generation
* Pre-configured folder structure (Lib, Entities)

## Requirements

This is a foundational shared project that other templates depend on.

## Key Components

* **PluginCore.cs** - Base class for plugin development with common functionality
* **Extension.cs** - Extension methods for common Dataverse operations
* **EntityBase.cs** - Base class for entity operations
* **DevKitJson.cs** - Lightweight JSON serialization/deserialization
* **Date.cs** - Date utility functions
* **generator.bat** - Code generation script for entities

## Usage

Add this shared project to your solution and reference it from:
* Server Projects (Plugins, Workflows, Custom Actions, Custom Apis)
* Console Projects
* Test Projects

## References

* [Shared Project Template Wiki](https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/Shared-Project-Template)
* [Shared Projects in Visual Studio](https://learn.microsoft.com/en-us/visualstudio/ide/solutions-and-projects-in-visual-studio)
* [Use the Organization Service](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/org-service/overview)