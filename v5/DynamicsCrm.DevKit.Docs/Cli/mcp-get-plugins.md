# Download plugin DLLs and NuGet packages with get_plugins

`get_plugins` lists plugin assemblies, types, steps and images. To download one assembly DLL, set `download=true`:

```json
{"assembly_name":"AccountPlugin","download":true}
```

`assembly_name` uses the existing contains search and must match exactly one assembly. For duplicate or overlapping names, call `get_plugins` without filters, then use the returned `assemblyId`:

```json
{"assembly_id":"f1d70fba-6342-e911-a82b-000d3a17ce77","download":true}
```

Choose either `assembly_name` or `assembly_id`. Entity and step filters cannot be combined with download. `max_records=1` does not force an ambiguous match to download.

Files are saved under:

```text
{workspace}/.devkit/get_plugins/{assemblyId:N}/{sanitizedAssemblyName}_{yyyyMMddHHmmssfff}.dll
```

The workspace comes from MCP roots, falling back to the server working directory, as with other MCP tools. Existing files are preserved. The response returns `mode="download"`, `assemblies`, `savedPath`, `fileName`, `sizeBytes`, and `sha256`, plus a success summary with the file path. DLL content is not included in the MCP response.

Downloads support database assemblies and assemblies in plugin packages. Package content is read from Dataverse and only the selected DLL is copied locally; dependencies are not exported. If more than one package entry has the DLL name, the registered assembly path must resolve the match. Empty/malformed content or missing/ambiguous package entries return an error before writing a file. Disk, external and system assemblies may not expose downloadable content.

## Download the original .nupkg

To download the entire plugin package, including its dependencies and NuGet metadata, use a package selector instead of an assembly selector:

```json
{"package_name":"all_Dev.AllInOne.Package2","download":true}
```

Alternatively, pass `package_id` using the `packageId` from the `packages` array in list mode. `package_name` uses a contains search and must match exactly one package, even when `max_records=1`. Choose exactly one package or assembly selector; they cannot be combined.

An assembly selector reads `pluginassembly.content` first. A package selector reads `pluginpackage` storage; it does not rebuild a package from the assembly DLL.

The original package bytes are saved without extracting or repacking:

```text
{workspace}/.devkit/get_plugins/packages/{packageId:N}/{sanitizedPackageName}_{yyyyMMddHHmmssfff}.nupkg
```

The result returns `mode="download"`, `packages` metadata, `savedPath`, `fileName`, `sizeBytes`, and `sha256`. Package content can come from the Dataverse `content` column or the `package` / `fileid` file columns, using the existing block-download helper. Empty or malformed archives return an error before writing a file. Existing files are preserved.

Without `download=true`, existing list/detail/steps behavior is unchanged. The tool reads Dataverse and writes the local download only; it does not update registrations.
