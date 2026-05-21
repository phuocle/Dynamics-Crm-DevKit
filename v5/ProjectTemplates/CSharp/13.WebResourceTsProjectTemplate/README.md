```text
  ____                              _           ____                  ____             _  ___ _     ____ _ _
 |  _ \ _   _ _ __   __ _ _ __ ___ (_) ___ ___ / ___|_ __ _ __ ___   |  _ \  _____   _| |/ (_) |_  / ___| (_)
 | | | | | | | '_ \ / _` | '_ ` _ \| |/ __/ __| |   | '__| '_ ` _ \  | | | |/ _ \ \ / / ' /| | __|| |   | | |
 | |_| | |_| | | | | (_| | | | | | | | (__\__ \ |___| |  | | | | | |_| |_| |  __/\ V /| . \| | |_ | |___| | |
 |____/ \__, |_| |_|\__,_|_| |_| |_|_|\___|___/\____|_|  |_| |_| |_(_)____/ \___| \_/ |_|\_\_|\__(_)____|_|_|
        |___/            https://github.com/phuocle/Dynamics-Crm-DevKit 4.99.99.99 Build: xxxx.yy.zz HH.mm.ss

```

# DynamicsCrm.DevKit WebResource TypeScript Project

Modern web resource development template using TypeScript, esbuild bundler, and devkit.ts library for type-safe Dataverse form scripting with automated build, bundling, and deployment workflows.

## Features

* TypeScript for type-safe development
* devkit.ts library with full TypeScript support
* devkitts.d.ts TypeScript definitions
* esbuild for fast bundling and minification
* Form code generator (generator.form.bat)
* Web API code generator (generator.webapi.bat)
* Automated deployment script (deploy.debug.bat)
* Pre-configured folder structure (entities, lib, build, html, css, images, resources)
* tsconfig.json for TypeScript compilation
* package.json with build scripts
* build.js for custom build configuration

## Requirements

Before creating this project, ensure you have:

1. **Node.js and npm** - Required for package management and build tools
2. **TypeScript** - Installed globally or via package.json
3. **DynamicsCrm.DevKit CLI** - Required for code generation and deployment

## Folder Structure

* **entities/** - Generated form and Web API code
* **lib/** - devkit.ts library and TypeScript definitions
* **build/** - Compiled and bundled output files
* **html/** - HTML web resources
* **css/** - CSS stylesheets
* **images/** - Image resources
* **resources/** - Other resources (RESX, data files)

## Key Components

* **devkit.ts** - Core TypeScript library for Dataverse form scripting
* **devkitts.d.ts** - TypeScript definitions for IntelliSense and type checking
* **build.js** - esbuild configuration for bundling
* **tsconfig.json** - TypeScript compiler configuration
* **generator.form.bat** - Generate typed form code
* **generator.webapi.bat** - Generate Web API client code
* **deploy.debug.bat** - Deploy web resources to Dataverse

## Build Process

```bash
# Install dependencies
npm install

# Build TypeScript files
npm run build

# Watch mode for development
npm run watch
```

## References

* [WebResource TypeScript Project Template Wiki](https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/WebResource-TypeScript-Project-Template)
* [Client API Best Practices](https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/client-scripting-best-practices)
* [Client API Reference](https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference)