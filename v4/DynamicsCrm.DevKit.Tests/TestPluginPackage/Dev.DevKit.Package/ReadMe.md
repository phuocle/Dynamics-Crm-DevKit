```text
  ____                              _           ____                  ____             _  ___ _     ____ _ _
 |  _ \ _   _ _ __   __ _ _ __ ___ (_) ___ ___ / ___|_ __ _ __ ___   |  _ \  _____   _| |/ (_) |_  / ___| (_)
 | | | | | | | '_ \ / _` | '_ ` _ \| |/ __/ __| |   | '__| '_ ` _ \  | | | |/ _ \ \ / / ' /| | __|| |   | | |
 | |_| | |_| | | | | (_| | | | | | | | (__\__ \ |___| |  | | | | | |_| |_| |  __/\ V /| . \| | |_ | |___| | |
 |____/ \__, |_| |_|\__,_|_| |_| |_|_|\___|___/\____|_|  |_| |_| |_(_)____/ \___| \_/ |_|\_\_|\__(_)____|_|_|
        |___/            https://github.com/phuocle/Dynamics-Crm-DevKit 4.00.00.00 Build: 31.12.2025 23:59:59

```

# DynamicsCrm.DevKit dependent assembly plugins project

* [Package Project Template](https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/Package-Project-Template)
* [Dependent Assembly plug-ins](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/dependent-assembly-plugins)

# [Let’s try Dataverse Dependent Assemblies for Plug-ins](https://temmyraharjo.wordpress.com/2022/08/07/lets-try-dataverse-dependent-assemblies-for-plug-ins/)

1. Add a new project to the solution using the DynamicsCrm.DevKit Vsix, "05. Package Project" template
2. Add nuget Niam.XRM.Framework to the project
3. Add plugin class and update T4 code Niam.XRM.Framework.t4 as custom template
4. Update your code and update DynamicsCrm.DevKit.Cli.json with: Dev.DevKitV4.Package.*.nupkg
5. Build and deploy with DynamicsCrm.DevKit.Cli