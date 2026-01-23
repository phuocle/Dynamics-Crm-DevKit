```text
  ____                              _           ____                  ____             _  ___ _     ____ _ _
 |  _ \ _   _ _ __   __ _ _ __ ___ (_) ___ ___ / ___|_ __ _ __ ___   |  _ \  _____   _| |/ (_) |_  / ___| (_)
 | | | | | | | '_ \ / _` | '_ ` _ \| |/ __/ __| |   | '__| '_ ` _ \  | | | |/ _ \ \ / / ' /| | __|| |   | | |
 | |_| | |_| | | | | (_| | | | | | | | (__\__ \ |___| |  | | | | | |_| |_| |  __/\ V /| . \| | |_ | |___| | |
 |____/ \__, |_| |_|\__,_|_| |_| |_|_|\___|___/\____|_|  |_| |_| |_(_)____/ \___| \_/ |_|\_\_|\__(_)____|_|_|
        |___/            https://github.com/phuocle/Dynamics-Crm-DevKit x.xx.xx.xx Build: xxxx.yy.zz HH.mm.ss

```

# DynamicsCrm.DevKit Test Project

Accelerates Dataverse development by providing a robust test project template, pre-configured with **FakeXrmEasy** for seamless unit testing and mocking of Dataverse plugins, workflows, and custom logic.

## Features

* Pre-configured with FakeXrmEasy v9 framework
* MSTest integration for unit testing
* Bogus library for test data generation
* NSubstitute for mocking
* Reference to ProxyTypes project
* Shared test project integration
* DynamicsCrm.DevKit.Analyzers for code quality

## Requirements

Before creating this project, ensure you have:

1. **DynamicsCrm.DevKit Shared Project** - Required for shared code
2. **DynamicsCrm.DevKit ProxyTypes Project** - Required for early-bound entities
3. **DynamicsCrm.DevKit Shared Test Project** - Required for shared test utilities

## Package Dependencies

* FakeXrmEasy.v9 (2.8.0)
* FakeXrmEasy.Core.v9 (2.8.0)
* FakeXrmEasy.Plugins.v9 (2.8.1)
* FakeXrmEasy.CodeActivities.v9 (2.6.1)
* MSTest.TestAdapter
* MSTest.TestFramework
* Bogus (35.6.5)
* NSubstitute
* DynamicsCrm.DevKit.Analyzers

## References

* [Test Project Template Wiki](https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/Test-Project-Template)
* [FakeXrmEasy Documentation](https://dynamicsvalue.github.io/fake-xrm-easy-docs/)
* [Unit Testing Plugins](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/test-plug-ins)
