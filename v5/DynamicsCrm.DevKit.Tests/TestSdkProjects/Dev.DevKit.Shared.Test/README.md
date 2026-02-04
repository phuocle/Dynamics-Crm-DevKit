```text
  ____                              _           ____                  ____             _  ___ _     ____ _ _
 |  _ \ _   _ _ __   __ _ _ __ ___ (_) ___ ___ / ___|_ __ _ __ ___   |  _ \  _____   _| |/ (_) |_  / ___| (_)
 | | | | | | | '_ \ / _` | '_ ` _ \| |/ __/ __| |   | '__| '_ ` _ \  | | | |/ _ \ \ / / ' /| | __|| |   | | |
 | |_| | |_| | | | | (_| | | | | | | | (__\__ \ |___| |  | | | | | |_| |_| |  __/\ V /| . \| | |_ | |___| | |
 |____/ \__, |_| |_|\__,_|_| |_| |_|_|\___|___/\____|_|  |_| |_| |_(_)____/ \___| \_/ |_|\_\_|\__(_)____|_|_|
        |___/            https://github.com/phuocle/Dynamics-Crm-DevKit 4.12.34.56 Build: 03.02.2026 17:45:57

```

# DynamicsCrm.DevKit Shared Test Project

A shared project template for collaborative unit testing in Dataverse development, pre-configured with FakeXrmEasy framework utilities, test helpers, and common test infrastructure that can be reused across multiple test projects.

## Features

* Shared project structure for test code reusability
* FakeXrmEasyTestBase for test base class
* FakerHelper for generating test data with Bogus
* TestHelper for common test operations
* Extension methods for testing
* Guids utility class for consistent test GUIDs
* CalculateRollupFieldRequestExecutor for rollup field testing
* Pre-configured folder structure (Lib, Executor)

## Requirements

This is a foundational shared test project that other test templates depend on.

## Key Components

* **FakeXrmEasyTestBase.cs** - Base class for FakeXrmEasy tests
* **FakerHelper.cs** - Utilities for generating fake test data using Bogus
* **TestHelper.cs** - Common test helper methods
* **Extension.cs** - Extension methods for testing
* **Guids.cs** - Centralized GUID management for tests
* **CalculateRollupFieldRequestExecutor.cs** - Custom executor for rollup field calculations

## Usage

Add this shared test project to your solution and reference it from:
* Test Projects (Unit Tests, Integration Tests)

## References

* [Shared Test Project Template Wiki](https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/Shared-Test-Project-Template)
* [Test automation](https://learn.microsoft.com/en-us/power-platform/alm/test-automation)
* [Unit testing best practices](https://learn.microsoft.com/en-us/dotnet/core/testing/unit-testing-best-practices)