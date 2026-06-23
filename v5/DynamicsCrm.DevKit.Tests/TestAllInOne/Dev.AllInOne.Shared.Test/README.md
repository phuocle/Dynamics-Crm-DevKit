```text
  ____                              _           ____                  ____             _  ___ _     ____ _ _
 |  _ \ _   _ _ __   __ _ _ __ ___ (_) ___ ___ / ___|_ __ _ __ ___   |  _ \  _____   _| |/ (_) |_  / ___| (_)
 | | | | | | | '_ \ / _` | '_ ` _ \| |/ __/ __| |   | '__| '_ ` _ \  | | | |/ _ \ \ / / ' /| | __|| |   | | |
 | |_| | |_| | | | | (_| | | | | | | | (__\__ \ |___| |  | | | | | |_| |_| |  __/\ V /| . \| | |_ | |___| | |
 |____/ \__, |_| |_|\__,_|_| |_| |_|_|\___|___/\____|_|  |_| |_| |_(_)____/ \___| \_/ |_|\_\_|\__(_)____|_|_|
        |___/            https://github.com/phuocle/Dynamics-Crm-DevKit 4.12.34.56 Build: 30.06.2026 23:59:59

```

# DynamicsCrm.DevKit Shared Test Project

A shared project template for collaborative unit testing in Dataverse development, pre-configured with FakeXrmEasy framework utilities, test helpers, and common test infrastructure that can be reused across multiple test projects.

## Features

* Shared project structure for test code reusability
* FakeXrmEasyTestBase for test base class
* PluginContextBuilder for fluent plugin context creation (auto-detect from CrmPluginRegistrationAttribute or hydrate from Plugin Trace Log JSON)
* FakerHelper for generating test data with Bogus
* TestHelper for common test operations (deserialization, decompression, plugin registration)
* TestTracingService for capturing trace output in unit tests
* TestDataLoader for loading test data from DevKitJson JSON strings or files into FakeXrmEasy
* Extension methods for testing (ExecutePluginFromJson, ExecutePluginFromCompressedJson)
* Guids utility class for consistent test GUIDs
* CalculateRollupFieldRequestExecutor for rollup field testing
* Pre-configured folder structure (Lib, Executor)

## Requirements

This is a foundational shared test project that other test templates depend on.

## Key Components

* **FakeXrmEasyTestBase.cs** - Base class for FakeXrmEasy tests
* **PluginContextBuilder.cs** - Fluent builder for XrmFakedPluginExecutionContext with auto-detection and Plugin Trace Log support
* **FakerHelper.cs** - Utilities for generating fake test data using Bogus
* **TestHelper.cs** - Common test helper methods (deserialization, decompression, plugin registration)
* **TestTracingService.cs** - ITracingService mock with log capture for assertions
* **TestDataLoader.cs** - Load test data from DevKitJson JSON (strings or files) into FakeXrmEasy
* **Extension.cs** - Extension methods (SetXrmFakedContextPlugin, ExecutePluginFromJson, ExecutePluginFromCompressedJson)
* **Guids.cs** - Centralized GUID management for tests
* **CalculateRollupFieldRequestExecutor.cs** - Custom executor for rollup field calculations

## Usage

Add this shared test project to your solution and reference it from:
* Test Projects (Unit Tests, Integration Tests)

## References

* [Shared Test Project Template Wiki](https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/Shared-Test-Project-Template)
* [Test automation](https://learn.microsoft.com/en-us/power-platform/alm/test-automation)
* [Unit testing best practices](https://learn.microsoft.com/en-us/dotnet/core/testing/unit-testing-best-practices)