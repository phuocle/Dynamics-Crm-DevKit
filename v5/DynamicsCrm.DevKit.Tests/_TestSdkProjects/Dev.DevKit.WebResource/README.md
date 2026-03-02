```text
  ____                              _           ____                  ____             _  ___ _     ____ _ _
 |  _ \ _   _ _ __   __ _ _ __ ___ (_) ___ ___ / ___|_ __ _ __ ___   |  _ \  _____   _| |/ (_) |_  / ___| (_)
 | | | | | | | '_ \ / _` | '_ ` _ \| |/ __/ __| |   | '__| '_ ` _ \  | | | |/ _ \ \ / / ' /| | __|| |   | | |
 | |_| | |_| | | | | (_| | | | | | | | (__\__ \ |___| |  | | | | | |_| |_| |  __/\ V /| . \| | |_ | |___| | |
 |____/ \__, |_| |_|\__,_|_| |_| |_|_|\___|___/\____|_|  |_| |_| |_(_)____/ \___| \_/ |_|\_\_|\__(_)____|_|_|
        |___/            https://github.com/phuocle/Dynamics-Crm-DevKit 4.12.34.56 Build: 03.02.2026 17:45:57

```

# DynamicsCrm.DevKit WebResource Project

Streamlines Dataverse web resource development with devkit.js library, providing type-safe form scripting, automated deployment, and code generation for forms and Web API entities using pure JavaScript.

## Features

* devkit.js library for type-safe form development
* devkit.d.ts TypeScript definitions
* Form code generator (generator.form.bat)
* Web API code generator (generator.webapi.bat)
* Automated deployment script (deploy.debug.bat)
* Pre-configured folder structure (entities, lib, js, html, css, images, resources)
* jsconfig.json for IntelliSense support
* package.json for npm dependencies

## Requirements

Before creating this project, ensure you have:

1. **Node.js and npm** - Required for package management
2. **DynamicsCrm.DevKit CLI** - Required for code generation and deployment

## Folder Structure

* **entities/** - Generated form and Web API code
* **lib/** - devkit.js library and dependencies
* **js/** - Custom JavaScript files
* **html/** - HTML web resources
* **css/** - CSS stylesheets
* **images/** - Image resources
* **resources/** - Other resources (RESX, data files)

## Key Components

* **devkit.js** - Core library for Dataverse form scripting
* **devkit.d.ts** - TypeScript definitions for IntelliSense
* **generator.form.bat** - Generate typed form code
* **generator.webapi.bat** - Generate Web API client code
* **deploy.debug.bat** - Deploy web resources to Dataverse

## References

* [WebResource Project Template Wiki](https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/WebResource-Project-Template)
* [Web resources in model-driven apps](https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/web-resources)
* [Client API reference](https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference)