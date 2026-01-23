```text
  ____                              _           ____                  ____             _  ___ _     ____ _ _
 |  _ \ _   _ _ __   __ _ _ __ ___ (_) ___ ___ / ___|_ __ _ __ ___   |  _ \  _____   _| |/ (_) |_  / ___| (_)
 | | | | | | | '_ \ / _` | '_ ` _ \| |/ __/ __| |   | '__| '_ ` _ \  | | | |/ _ \ \ / / ' /| | __|| |   | | |
 | |_| | |_| | | | | (_| | | | | | | | (__\__ \ |___| |  | | | | | |_| |_| |  __/\ V /| . \| | |_ | |___| | |
 |____/ \__, |_| |_|\__,_|_| |_| |_|_|\___|___/\____|_|  |_| |_| |_(_)____/ \___| \_/ |_|\_\_|\__(_)____|_|_|
        |___/            https://github.com/phuocle/Dynamics-Crm-DevKit 4.12.34.56 Build: 23.01.2026 06:12:15

```

# DynamicsCrm.DevKit Report Project

Streamlines Dataverse report development using SQL Server Data Tools (SSDT) and Report Authoring Extension, enabling creation, modification, and deployment of SSRS reports for Dynamics 365 / Power Apps model-driven apps.

## Features

* Pre-configured for Dynamics 365 Report Authoring
* Integration with SQL Server Reporting Services (SSRS)
* FetchXML-based data sources
* Report Designer with Dynamics 365 extensions
* Support for paginated reports
* Integration with DynamicsCrm.DevKit CLI for deployment

## Requirements

**IMPORTANT:** Install components in this exact order:

1. **[Install SSDT with Visual Studio 2019](https://learn.microsoft.com/en-us/sql/ssdt/download-sql-server-data-tools-ssdt?view=sql-server-ver15#install-ssdt-with-visual-studio-2019)**
   - SQL Server Data Tools for Visual Studio

2. **[Install Microsoft Reporting Services Projects Extension](https://marketplace.visualstudio.com/items?itemName=ProBITools.MicrosoftReportProjectsforVisualStudio)**
   - Visual Studio extension for report projects

3. **[Install Dynamics 365 Report Authoring Extension](https://www.microsoft.com/en-us/download/details.aspx?id=56973)**
   - Version 9.0.26.7 or later
   - Includes FetchXML support and Dataverse-specific features

## Key Components

* **.rdl files** - Report Definition Language files
* **Shared Data Sources** - Connection to Dataverse
* **FetchXML Queries** - Data retrieval from Dataverse

## Development Workflow

1. Create reports using Report Designer
2. Use FetchXML for data queries
3. Test reports locally
4. Deploy to Dataverse using DynamicsCrm.DevKit CLI

## Deployment

```bash
# Upload report to Dataverse
devkit uploadreport /report:"YourReport.rdl"

# Download report from Dataverse
devkit downloadreport /report:"Report Name"
```

## References

* [Report Project Template Wiki](https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/Report-Project-Template)
* [Create reports with FetchXML](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/report-writing-environment-using-fetchxml)
* [Reporting and analytics guide](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/reporting-analytics-guide)