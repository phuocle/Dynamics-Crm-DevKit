# manage_report: SSRS reports and RDL datasets

`list`, `detail`, and `download` read Dataverse. `update` writes an existing unmanaged report. `create`, `add_dataset`, and `update_dataset` work on local RDL files only; deploy new reports through VSIX or CLI.

## Local files
- `create` uses the embedded ReportTemplate.rdl normalized for the connected organization, or the contents of `file_path`. The output name defaults to `name`, then the file name, then `Report Template`. Existing output files cause an error. Default folder: `.devkit/manage_report/`.
- `download` saves the report body to `.devkit/manage_report/downloads/{languageCode}/{report}.rdl` and returns its path and SHA-256.
- `output_folder` overrides the default for create/download. If it contains exactly one `.rptproj`, the RDL is added as a Report item when missing; with zero or multiple project files no project is changed. Relative paths resolve from the MCP workspace.

## Update and language
- `update` replaces RDL `bodytext` and/or description of an existing unmanaged report; it does not need publish. Managed reports cannot be updated.
- When `report_id` is a name, `language` chooses the language copy; the default is the organization's base language. Language is ignored for a GUID.
- If the supplied RDL contains a ReportFilter, update synchronizes `report.defaultfilter` with it. New reports require VSIX/CLI deployment.

## Local datasets
- `add_dataset` and `update_dataset` require `file_path`, `dataset_name`, and `fetchxml`; a system view name as `fetchxml` additionally requires `entity_name`. They save a pre-change backup under `.devkit/manage_report/backups`.
- FetchXML supports explicit or `<all-attributes/>` fields, aggregate/group-by aliases, nested linked entities with explicit aliases, and FetchXML parameters. MSCRMFETCH does not support MultiSelectPicklist, File, or Image attributes. Generated fields include formatted strings and typed companions.
- `prefilter` applies to the root entity only, not linked entities.
