```text
  ____                              _           ____                  ____             _  ___ _     ____ _ _
 |  _ \ _   _ _ __   __ _ _ __ ___ (_) ___ ___ / ___|_ __ _ __ ___   |  _ \  _____   _| |/ (_) |_  / ___| (_)
 | | | | | | | '_ \ / _` | '_ ` _ \| |/ __/ __| |   | '__| '_ ` _ \  | | | |/ _ \ \ / / ' /| | __|| |   | | |
 | |_| | |_| | | | | (_| | | | | | | | (__\__ \ |___| |  | | | | | |_| |_| |  __/\ V /| . \| | |_ | |___| | |
 |____/ \__, |_| |_|\__,_|_| |_| |_|_|\___|___/\____|_|  |_| |_| |_(_)____/ \___| \_/ |_|\_\_|\__(_)____|_|_|
        |___/            https://github.com/phuocle/Dynamics-Crm-DevKit 4.44.44.44 Build: xxxx.yy.zz HH.mm.ss

```

# DynamicsCrm.DevKit Report Project

This is an empty Reporting Services project (`.rptproj`) for Dynamics 365 and Dataverse FetchXML reports. The project template no longer creates a sample `ReportTemplate.rdl`; add each report with the **DevKit Report** item template so it is generated for the Dataverse table you select.

## Requirements

1. Install [DynamicsCrm.DevKit](https://marketplace.visualstudio.com/items?itemName=PhuocLe.DynamicsCrmDevKit) in a supported Visual Studio version.
2. Install [Microsoft Reporting Services Projects](https://marketplace.visualstudio.com/items?itemName=ProBITools.MicrosoftReportProjectsforVisualStudio2022) so Visual Studio can load `.rptproj` projects and open Report Designer.
3. Have access to the target Dynamics 365 or Dataverse environment.

The main DynamicsCrm.DevKit VSIX includes the report project template, the **DevKit Report** item template, and the **Manage Datasets...** command. The separate `DynamicsCrm.DevKit.2019` VSIX is a lightweight upload-only extension for legacy Visual Studio 2019 report-authoring workflows; it does not provide these newer report creation and dataset-management features.

The Dynamics 365 Report Authoring Extension remains tied to Visual Studio 2019-era tooling. Install it only when your workflow needs its legacy FetchXML designer or preview integration. DevKit can create a FetchXML report and manage its datasets without that extension.

## Create a Report

1. Right-click the report project or its **Reports** node, then select **Add > New Item...**.
2. Select the **DynamicsCrm.DevKit** category.
3. Select **DevKit Report**, enter an `.rdl` file name, and select **Add**.
4. Connect to Dynamics 365 or Dataverse and select the table for the report.
5. Confirm the dialog. DevKit generates the `.rdl`, adds it to this project, and opens Report Designer.

The generated report includes a Dataverse data source, an initial FetchXML dataset, table metadata, and the Dynamics pre-filtering artifacts required for the selected table.

## Manage FetchXML Datasets

Right-click an `.rdl` file in Solution Explorer and select **DynamicsCrm.DevKit > Manage Datasets...**. The VSIX can:

* Inspect the report's existing FetchXML datasets.
* Add a dataset or update its FetchXML.
* Validate FetchXML against Dataverse metadata and refresh the RDL field definitions.
* Configure pre-filtering for root and linked tables.
* Preserve the existing data-source reference and save a backup before replacing the local RDL.

Dataset changes are made only to the local `.rdl`. Deploy the report separately after reviewing the changes.

## Deploy and Download Reports

For an `.rdl` selected in Solution Explorer, use the DynamicsCrm.DevKit context menu:

* **Deploy New Report** creates the Dataverse report and adds it to a solution.
* **Deploy Report** updates an existing mapped report.

The generated batch files remain available for profile-based CLI workflows:

```bat
download.reports.bat
upload.reports.bat
```

## References

* [Report Project Template](https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/Report-Project-Template)
* [DevKit Report Item Template](https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/DevKit-Report-Item-Template)
* [Manage Report Datasets](https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/Manage-Report-Datasets)
* [DynamicsCrm.DevKit GitHub Releases](https://github.com/phuocle/Dynamics-Crm-DevKit/releases)
* [Add reporting to your model-driven app](https://learn.microsoft.com/en-us/power-apps/maker/model-driven-apps/add-reporting-to-app)
* [Dynamics 365 Report Authoring Extension](https://www.microsoft.com/en-us/download/details.aspx?id=56973)
