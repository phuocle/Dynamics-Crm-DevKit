# devkit generator

Generate or refresh JavaScript, TypeScript, or C# late-bound entity code from Dataverse metadata. Connection options and project `.env` work as with other CLI commands.

Run `devkit generator list` to see the available types and an example. The list does not require a connection or configuration file.

Use a profile from a JSON file:

```sh
devkit generator --json DynamicsCrm.DevKit.Cli.json --profile JS-FORM
```

Or provide the generator settings directly, without a JSON file or profile:

```sh
devkit generator --type JsForm --entities account,contact --out entities --rootnamespace Contoso
devkit generator --type TsWebApi --entities account --out entities
devkit generator --type CSharp --entities folder --out Entities --rootnamespace Contoso --namespace Models
```

`--type` accepts `JsForm`, `JsWebApi`, `TsForm`, `TsWebApi`, and `CSharp`. `--out` must be an existing directory, relative to the current directory or absolute. `--entities` accepts comma-separated names, `all`/`*`, or `folder`; the default `folder` selects entities from existing generated files in the output directory. `--rootnamespace` is required for JavaScript and C#; `--namespace` is optional for C#. Direct options and profile mode cannot be combined. Generation and file-update behavior is the same as the corresponding profile type.
