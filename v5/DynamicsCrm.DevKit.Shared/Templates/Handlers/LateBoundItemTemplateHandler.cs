using DynamicsCrm.DevKit.Shared.Logic;
using DynamicsCrm.DevKit.Shared.Services;
using DynamicsCrm.DevKit.Shared.Templates.Models;
using Microsoft.Xrm.Sdk.Metadata;
using Microsoft.Xrm.Sdk.Query;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Shared.Templates.Handlers
{
    /// <summary>
    /// Item handler for the LateBound item template (VSIX 01.
    /// LateBoundItemTemplate — the wizard the I.* work units model on):
    /// generates the user partial class {Entity}.cs from
    /// Helper.GetDefaultFileWithCs and the generated late-bound class
    /// {Entity}.generated.cs from CSharpLateBound.GetCsCode, both off live
    /// entity metadata. Cross-platform port of the VSIX wizard
    /// DynamicsCrm.DevKit.Wizard.ItemTemplates.LateBound.
    /// </summary>
    public sealed class LateBoundItemTemplateHandler : ITemplateHandler
    {
        public string TemplateId
        {
            get { return ItemType.LateBound.ToString(); }
        }

        /// <summary>
        /// The payload declaration, mirroring the file entries of
        /// CSharpLateBoundItemTemplate.vstemplate: both payload stubs are
        /// single $token$ files ($Class$ / $GeneratedClass$) with
        /// ReplaceParameters on, named by $SchemaName$. The .generated.cs is
        /// the generated twin — rewritten whenever its real content changed;
        /// the .cs is the user file — never overwritten unless force.
        /// </summary>
        public static TemplateManifest CreateManifest()
        {
            var manifest = new TemplateManifest
            {
                TemplateId = ItemType.LateBound.ToString(),
                Kind = TemplateKind.Item,
            };
            var prefix = TemplatePayload.Prefix(TemplateKind.Item, ItemType.LateBound.ToString());
            manifest.Files.Add(new TemplatePayloadFile { ResourceName = prefix + "Class.cs", TargetFileName = "$SchemaName$.cs", ReplaceParameters = true });
            manifest.Files.Add(new TemplatePayloadFile { ResourceName = prefix + "GeneratedClass.cs", TargetFileName = "$SchemaName$.generated.cs", ReplaceParameters = true, IsGenerated = true });
            return manifest;
        }

        public async Task<ScaffoldResult> ScaffoldAsync(ScaffoldRequest request)
        {
            var result = new ScaffoldResult { TemplateId = TemplateId };
            var input = request?.ItemInput;
            if (input == null)
            {
                result.AddError("input: required");
                return result;
            }
            var workspace = request.Workspace ?? WorkspaceContext.Empty(input.OutputDirectory);
            var entity = !string.IsNullOrWhiteSpace(input.Entity) ? input.Entity : input.Name;

            var metadata = await ResolveEntityMetadataAsync(input, entity, result);
            if (metadata == null) return result;

            // The wizard names the files after metadata.SchemaName — the
            // typed value may be the logical name ("account") while the
            // class and files are "Account".
            var schemaName = metadata.SchemaName;
            request.Tokens["$SchemaName$"] = schemaName;

            var outputDirectory = ResolveOutputDirectory(input.OutputDirectory);
            Directory.CreateDirectory(outputDirectory);
            var rootNamespace = ResolveRootNamespace(workspace, input.RootNamespace, outputDirectory);
            request.Tokens["$rootnamespace$"] = rootNamespace;

            // VSIX: items added to the Shared project itself pass null
            // (EntityBase compiles into the same assembly); every other
            // target qualifies EntityBase with the Shared project namespace.
            var insideSharedProject = IsInsideSharedProject(workspace, outputDirectory);
            var sharedNamespace = insideSharedProject ? null : workspace.SharedProjectNameSpace;
            if (!insideSharedProject && string.IsNullOrWhiteSpace(sharedNamespace))
            {
                result.AddWarning("No Shared project found in the workspace — the generated class derives EntityBase unqualified.");
            }

            request.Tokens["$Class$"] = Helper.GetDefaultFileWithCs(metadata, rootNamespace);
            request.Tokens["$GeneratedClass$"] = CSharpLateBound.GetCsCode(input.ServiceClient, metadata, rootNamespace, sharedNamespace);

            var prefix = TemplatePayload.Prefix(TemplateKind.Item, ItemType.LateBound.ToString());

            // The user file ({Entity}.cs): created when missing, never
            // overwritten unless --force (VSIX ShouldAddProjectItem), then
            // normalized public partial → internal partial (VSIX
            // NormalizeExistingCustomFileAsync).
            var classAction = await WritePayloadFileAsync(prefix + "Class.cs", $"{schemaName}.cs", request.Tokens, outputDirectory, input.Force, isUserFile: true, result: result);
            var normalized = await NormalizeCustomFileAsync(Path.Combine(outputDirectory, $"{schemaName}.cs"), schemaName);
            if (normalized && classAction == "Skipped")
            {
                classAction = "Updated";
            }
            result.Files.Add(new ScaffoldFileResult($"{schemaName}.cs", Path.Combine(outputDirectory, $"{schemaName}.cs"), classAction));

            // The generated file ({Entity}.generated.cs): created when
            // missing, updated only when the real content differs — compared
            // from line 6 on (the header carries the Last Modified stamp, so
            // a full-text compare would rewrite every run — VSIX
            // UpdateExistingGeneratedFileAsync).
            var generatedAction = await WritePayloadFileAsync(prefix + "GeneratedClass.cs", $"{schemaName}.generated.cs", request.Tokens, outputDirectory, input.Force, isUserFile: false, result: result);
            result.Files.Add(new ScaffoldFileResult($"{schemaName}.generated.cs", Path.Combine(outputDirectory, $"{schemaName}.generated.cs"), generatedAction));

            // Visual Studio adds the item to the project — for a shared
            // project target the .projitems gains the matching Compile
            // entries (SDK-style csproj targets auto-include the files).
            if (insideSharedProject)
            {
                AddCompileItemsToSharedProject(workspace, outputDirectory, schemaName, result);
            }

            return result;
        }

        /// <summary>
        /// Resolves the entity metadata. Looks the entity up in the
        /// XrmHelper cache first (by schema or logical name); when missing
        /// and a service is available, reads the org's entity metadata once
        /// into the cache (attributes included — the same call the generator
        /// makes) and looks again. The wizard's FormItem fills the cache
        /// with EntityFilters.Entity and GetCsCode then upgrades it with a
        /// per-entity EntityFilters.All fetch — mirror that upgrade when a
        /// service exists so the lookup docs carry the relationship names.
        /// </summary>
        private static async Task<EntityMetadata> ResolveEntityMetadataAsync(ItemTemplateInput input, string entity, ScaffoldResult result)
        {
            var metadata = FindEntityMetadata(entity);
            if (metadata == null && input.ServiceClient != null)
            {
                await new MetadataService(input.ServiceClient).ReadEntitiesMetadataAsync(EntityFilters.Attributes);
                metadata = FindEntityMetadata(entity);
            }
            if (metadata == null)
            {
                if (input.ServiceClient == null && XrmHelper.EntitiesMetadata.Count == 0)
                {
                    // Nothing to look the entity up in: without a service and
                    // without a cached metadata read the entity is unknowable.
                    result.AddError("template 'LateBound': requires a Dataverse connection to read entity metadata. Run without --offline and pass --auth/--conn (or run from a folder with a project .env).");
                }
                else
                {
                    result.AddError($"--entity '{entity}': entity not found in the current instance.");
                }
                return null;
            }
            if (input.ServiceClient == null) return metadata;
            return await new MetadataService(input.ServiceClient).FetchEntityMetadataAsync(metadata.LogicalName);
        }

        private static EntityMetadata FindEntityMetadata(string entity)
        {
            if (string.IsNullOrWhiteSpace(entity)) return null;
            return XrmHelper.EntitiesMetadata.FirstOrDefault(x =>
                string.Equals(x.SchemaName, entity, StringComparison.OrdinalIgnoreCase) ||
                string.Equals(x.LogicalName, entity, StringComparison.OrdinalIgnoreCase));
        }

        /// <summary>
        /// Renders one payload stub with the tokens and writes it. Returns
        /// the action taken: Created, Updated, Skipped (user file exists,
        /// no force) or Unchanged (generated file, same content from line 6
        /// on). Byte-faithful to Visual Studio: the stubs carry a BOM and
        /// the wizard writes one.
        /// </summary>
        private static async Task<string> WritePayloadFileAsync(string resourceName, string targetFileName, Dictionary<string, string> tokens, string outputDirectory, bool force, bool isUserFile, ScaffoldResult result)
        {
            var payload = await TemplatePayload.ReadContentAsync(resourceName);
            if (payload == null)
            {
                throw new InvalidOperationException($"resource not found: {resourceName}");
            }
            var content = TokenEngine.ApplyReplacements(payload.Content, tokens);
            var fullPath = Path.Combine(outputDirectory, targetFileName);

            var exists = File.Exists(fullPath);
            if (exists && isUserFile && !force)
            {
                return "Skipped";
            }
            if (exists && !isUserFile)
            {
                var oldCode = await FileHelper.ReadAllTextFromLine6Async(fullPath);
                var newCode = await Helper.ReadContentFromLine6Async(content);
                if (Helper.IsTheSame(oldCode, newCode))
                {
                    return "Unchanged";
                }
            }
            if (payload.HasBom)
            {
                await FileHelper.ForceWriteAllTextAsync(fullPath, content);
            }
            else
            {
                await FileHelper.ForceWriteAllTextWithoutUTF8Async(fullPath, content);
            }
            return exists ? "Updated" : "Created";
        }

        /// <summary>
        /// Port of the wizard NormalizeExistingCustomFileAsync / the
        /// generator MigratePublicToInternalAsync: older custom files
        /// declaring the class public partial are rewritten internal
        /// partial. Returns true when the file changed.
        /// </summary>
        private static async Task<bool> NormalizeCustomFileAsync(string customFile, string className)
        {
            if (!File.Exists(customFile)) return false;
            var content = await FileHelper.ReadAllTextAsync(customFile);
            var oldDeclaration = $"public partial class {className}";
            if (!content.Contains(oldDeclaration)) return false;
            await FileHelper.ForceWriteAllTextAsync(customFile, content.Replace(oldDeclaration, $"internal partial class {className}"));
            return true;
        }

        private static void AddCompileItemsToSharedProject(WorkspaceContext workspace, string outputDirectory, string schemaName, ScaffoldResult result)
        {
            var projitemsPath = Path.ChangeExtension(workspace.SharedProjectFile, ".projitems");
            var sharedDirectory = Path.GetDirectoryName(Path.GetFullPath(workspace.SharedProjectFile));
            var changed = false;
            foreach (var fileName in new[] { $"{schemaName}.cs", $"{schemaName}.generated.cs" })
            {
                var relative = GetRelativePath(sharedDirectory, Path.Combine(outputDirectory, fileName));
                if (SolutionMutator.AddCompileItemToProjitems(projitemsPath, relative))
                {
                    changed = true;
                }
            }
            result.Files.Add(new ScaffoldFileResult(Path.GetFileName(projitemsPath), projitemsPath, changed ? "Updated" : "Unchanged"));
        }

        /// <summary>
        /// Visual Studio composes $rootnamespace$ = the project default
        /// namespace + the target folder path inside the project (the
        /// TestAllInOne reference carries Dev.AllInOne.Shared.Entities).
        /// The scanner yields the project default namespace — append the
        /// same suffix for targets nested under the containing project.
        /// </summary>
        private static string ResolveRootNamespace(WorkspaceContext workspace, string rootNamespace, string outputDirectory)
        {
            var ns = !string.IsNullOrWhiteSpace(rootNamespace) ? rootNamespace : workspace?.RootNamespace;
            if (string.IsNullOrWhiteSpace(ns)) return ns;
            var projectRoot = FindProjectRoot(outputDirectory);
            if (projectRoot == null) return ns;
            var relative = GetRelativePath(projectRoot, outputDirectory);
            if (string.IsNullOrWhiteSpace(relative)) return ns;
            var suffix = relative.Replace(Path.DirectorySeparatorChar, '.').Replace(Path.AltDirectorySeparatorChar, '.').TrimEnd('.');
            if (suffix.Length == 0) return ns;
            return $"{ns}.{suffix}";
        }

        /// <summary>
        /// The nearest directory at or above the target holding a project
        /// file (SDK-style .csproj or a shared .shproj) — the same walk the
        /// scanner's FindRootNamespace makes.
        /// </summary>
        private static string FindProjectRoot(string startDirectory)
        {
            var directory = new DirectoryInfo(startDirectory);
            while (directory != null)
            {
                if (Directory.GetFiles(directory.FullName, "*.csproj").Length > 0 ||
                    Directory.GetFiles(directory.FullName, "*.shproj").Length > 0)
                {
                    return directory.FullName;
                }
                directory = directory.Parent;
            }
            return null;
        }

        private static bool IsInsideSharedProject(WorkspaceContext workspace, string outputDirectory)
        {
            var sharedProjectFile = workspace?.SharedProjectFile;
            if (string.IsNullOrEmpty(sharedProjectFile)) return false;
            var sharedDirectory = Path.GetDirectoryName(Path.GetFullPath(sharedProjectFile));
            if (string.IsNullOrEmpty(sharedDirectory)) return false;
            var root = sharedDirectory.TrimEnd(Path.DirectorySeparatorChar, Path.AltDirectorySeparatorChar) + Path.DirectorySeparatorChar;
            return outputDirectory.StartsWith(root, StringComparison.OrdinalIgnoreCase);
        }

        private static string ResolveOutputDirectory(string outputDirectory)
        {
            return string.IsNullOrWhiteSpace(outputDirectory)
                ? Directory.GetCurrentDirectory()
                : Path.GetFullPath(outputDirectory);
        }

        /// <summary>
        /// Path.GetRelativePath does not exist on net48 (SolutionMutator
        /// carries its own) — both inputs are full paths, path sits under
        /// relativeTo.
        /// </summary>
        private static string GetRelativePath(string relativeTo, string path)
        {
            var root = relativeTo.TrimEnd(Path.DirectorySeparatorChar, Path.AltDirectorySeparatorChar)
                       + Path.DirectorySeparatorChar;
            return path.StartsWith(root, StringComparison.OrdinalIgnoreCase)
                ? path.Substring(root.Length)
                : path;
        }
    }
}
