```text
  ____                              _           ____                  ____             _  ___ _     ____ _ _
 |  _ \ _   _ _ __   __ _ _ __ ___ (_) ___ ___ / ___|_ __ _ __ ___   |  _ \  _____   _| |/ (_) |_  / ___| (_)
 | | | | | | | '_ \ / _` | '_ ` _ \| |/ __/ __| |   | '__| '_ ` _ \  | | | |/ _ \ \ / / ' /| | __|| |   | | |
 | |_| | |_| | | | | (_| | | | | | | | (__\__ \ |___| |  | | | | | |_| |_| |  __/\ V /| . \| | |_ | |___| | |
 |____/ \__, |_| |_|\__,_|_| |_| |_|_|\___|___/\____|_|  |_| |_| |_(_)____/ \___| \_/ |_|\_\_|\__(_)____|_|_|
        |___/            https://github.com/phuocle/Dynamics-Crm-DevKit 4.12.34.56 Build: 03.02.2026 17:45:57

```

# DynamicsCrm.DevKit UI Test Project

Accelerates Dataverse UI automation testing with the EasyRepro framework, enabling automated testing of model-driven apps, forms, business processes, and user workflows in a browser environment.

## Features

* Pre-configured with EasyRepro framework
* MSTest integration for test execution
* TestSettings class for configuration
* UiTest.runsettings for test configuration
* App.cs structure for organized test code
* Browser automation support (Chrome, Edge, Firefox)
* Support for parallel test execution

## Requirements

Before creating this project, ensure you have:

1. **Web browser drivers** - ChromeDriver, EdgeDriver, or GeckoDriver
2. **Dataverse test environment** - Required for UI testing
3. **Valid test credentials** - User accounts with appropriate permissions

## Package Dependencies

* Microsoft.Dynamics365.UIAutomation.Api
* Microsoft.Dynamics365.UIAutomation.Browser
* Selenium.WebDriver
* Selenium.Support
* MSTest.TestAdapter
* MSTest.TestFramework
* DynamicsCrm.DevKit.Analyzers

## Key Components

* **App.cs** - Main test logic and test methods
* **TestSettings.cs** - Configuration for browser, credentials, and environment
* **UiTest.runsettings** - Test execution settings
* **App.config** - Application configuration

## References

* [UI Test Project Template Wiki](https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/Ui-Test-Project-Template)
* [EasyRepro](https://github.com/microsoft/EasyRepro)