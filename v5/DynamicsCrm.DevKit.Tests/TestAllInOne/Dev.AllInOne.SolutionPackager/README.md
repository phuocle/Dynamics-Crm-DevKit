```text
  ____                              _           ____                  ____             _  ___ _     ____ _ _
 |  _ \ _   _ _ __   __ _ _ __ ___ (_) ___ ___ / ___|_ __ _ __ ___   |  _ \  _____   _| |/ (_) |_  / ___| (_)
 | | | | | | | '_ \ / _` | '_ ` _ \| |/ __/ __| |   | '__| '_ ` _ \  | | | |/ _ \ \ / / ' /| | __|| |   | | |
 | |_| | |_| | | | | (_| | | | | | | | (__\__ \ |___| |  | | | | | |_| |_| |  __/\ V /| . \| | |_ | |___| | |
 |____/ \__, |_| |_|\__,_|_| |_| |_|_|\___|___/\____|_|  |_| |_| |_(_)____/ \___| \_/ |_|\_\_|\__(_)____|_|_|
        |___/            https://github.com/phuocle/Dynamics-Crm-DevKit 4.12.34.56 Build: 30.06.2026 23:59:59

```

# DynamicsCrm.DevKit Solution Packager Project

Streamlines Dataverse solution management for Application Lifecycle Management (ALM) scenarios, providing automated extraction and packing of solutions with customizable mapping for source control integration.

## Features

* Extract-Both.bat for unpacking solutions
* Pack-Both.bat for packing solutions
* mapping.xml for customizing file mappings
* Pre-configured for both managed and unmanaged solutions
* Integration with source control systems
* Support for solution layering and segmentation

## Requirements

Before creating this project, ensure you have:

1. **DynamicsCrm.DevKit CLI** - Required for solution operations
2. **Dataverse solution file** - .zip file of the solution to extract/pack

## Folder Structure

After extraction, the following folders will be created:
* **Managed/** - Managed solution extracted files
* **Unmanaged/** - Unmanaged solution extracted files
* **Original/** - Original solution zip files

## Key Components

* **mapping.xml** - Customizes how solution components map to files and folders
* **Extract-Both.bat** - Extracts both managed and unmanaged solutions
* **Pack-Both.bat** - Packs both managed and unmanaged solutions

## Usage

1. Place your solution .zip files in the project directory
2. Run `Extract-Both.bat` to extract solution components to source control
3. Modify solution components as needed
4. Run `Pack-Both.bat` to repack solutions for deployment

## References

* [Solution Packager Project Template Wiki](https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/Solution-Packager-Project-Template)
* [SolutionPackager tool](https://learn.microsoft.com/en-us/power-platform/alm/solution-packager-tool)
* [Use source control with solution files](https://learn.microsoft.com/en-us/power-platform/alm/use-source-control-solution-files)