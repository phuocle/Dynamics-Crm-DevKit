using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using DynamicsCrm.DevKit.Shared.Templates;
using DynamicsCrm.DevKit.Shared.Templates.Models;
using DynamicsCrm.DevKit.Shared.Templates.T4;
using System;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Linq;
using static DynamicsCrm.DevKit.Shared.Templates.Handlers.DataverseTestProjectHandler;

namespace DynamicsCrm.DevKit.Shared.Templates.Handlers
{
    internal sealed class DataverseTestItemHandler : ITemplateHandler
    {
        private static readonly Encoding ItemEncoding = new UTF8Encoding(encoderShouldEmitUTF8Identifier: true);

        public string TemplateId => TemplateCatalog.DataverseTestId;

        public async Task<ScaffoldResult> ScaffoldAsync(ScaffoldRequest request)
        {
            var result = new ScaffoldResult { TemplateId = TemplateId };
            try
            {
                await WriteItemAsync(request, result);
            }
            catch (Exception ex) when (ex is ArgumentException or IOException or
                                       UnauthorizedAccessException or InvalidOperationException or System.Xml.XmlException)
            {
                result.AddError(ex.Message);
            }
            return result;
        }

        private async Task WriteItemAsync(ScaffoldRequest request, ScaffoldResult result)
        {
            var item = await PrepareItemAsync(request.ItemInput, request.ProjectFile, request.Workspace);
            if (File.Exists(item.Path))
            {
                CheckExistingFile(item.Path, item.Marker, result);
                return;
            }

            var transformer = request.ItemInput.Transformer;
            Require(transformer != null, "DataverseTest requires a T4 transformer.");
            var code = await transformer.TransformAsync(item.Template, item.Context);
            var content = GetItemContent(item.Marker, code, request.ItemInput);
            Directory.CreateDirectory(Path.GetDirectoryName(item.Path));
            FileStream stream;
            try
            {
                stream = new FileStream(item.Path, FileMode.CreateNew, FileAccess.Write, FileShare.Read);
            }
            catch (IOException) when (File.Exists(item.Path))
            {
                CheckExistingFile(item.Path, item.Marker, result);
                return;
            }
            using (stream)
                WriteItemContent(stream, content);
            result.Files.Add(new ScaffoldFileResult(Path.GetFileName(item.Path), item.Path, "Created"));
        }

        internal static string GetItemContent(string marker, string code, ItemTemplateInput input)
        {
            var normalized = code.Replace("\r\n", "\n").Replace('\r', '\n');
            if (IsDefault(input.TemplateTitle) && string.IsNullOrWhiteSpace(input.T4Path))
                normalized = FormatDefaultItem(normalized);
            return marker + "\n" + normalized.TrimEnd('\n') + "\n";
        }

        private static string FormatDefaultItem(string code)
        {
            // Standalone T4 control blocks may emit blank lines in one engine only.
            // Restore the built-in scaffold layout without rewriting custom template content.
            var lines = code.Split('\n').Where(line => !string.IsNullOrWhiteSpace(line)).ToArray();
            var importCount = lines.TakeWhile(line => line.StartsWith("using ", StringComparison.Ordinal)).Count();
            var output = new StringBuilder();
            foreach (var import in lines.Take(importCount)
                .OrderBy(line => line.Contains(" = "))
                .ThenBy(line => line.TrimEnd(';'), StringComparer.OrdinalIgnoreCase))
            {
                output.Append(import).Append('\n');
            }
            if (importCount > 0)
                output.Append('\n');

            for (var i = importCount; i < lines.Length; i++)
            {
                var line = lines[i];
                if (i > importCount && line.TrimStart() == "[TestMethod]" && lines[i - 1].Trim() == "}")
                    output.Append('\n');
                output.Append(line).Append('\n');
            }
            return output.ToString();
        }

        internal static void WriteItemContent(Stream stream, string content)
        {
            using var writer = new StreamWriter(stream, ItemEncoding, 1024, leaveOpen: true);
            writer.Write(content);
        }

        internal static async Task<(string Path, string Marker, string Template, T4Context Context)> PrepareItemAsync(
            ItemTemplateInput input, string projectFile, WorkspaceContext workspace = null)
        {
            var project = ReadTestProject(projectFile);
            var projectDirectory = Path.GetDirectoryName(projectFile);
            var output = string.IsNullOrWhiteSpace(input.OutputDirectory) ? projectDirectory : Path.GetFullPath(input.OutputDirectory);
            Require(ContainsDirectory(projectDirectory, output), $"--out '{output}': must be inside '{projectDirectory}'.");
            var relative = RelativePath(projectDirectory, output);
            var folderParts = relative == "." ? Array.Empty<string>() : relative.Split(Path.DirectorySeparatorChar);
            Require(!folderParts.Any(part => part.Equals("bin", StringComparison.OrdinalIgnoreCase) || part.Equals("obj", StringComparison.OrdinalIgnoreCase)),
                "--out: use a source folder outside bin and obj.");
            var currentDirectory = projectDirectory;
            foreach (var part in folderParts)
            {
                currentDirectory = Path.Combine(currentDirectory, part);
                var folder = new DirectoryInfo(currentDirectory);
                Require(!folder.Exists || (folder.Attributes & FileAttributes.ReparsePoint) == 0,
                    "--out: use a source folder without directory links.");
            }

            var projectNamespace = Value(project, "RootNamespace") ?? Path.GetFileNameWithoutExtension(projectFile);
            var itemNamespace = !string.IsNullOrWhiteSpace(input.RootNamespace)
                ? input.RootNamespace
                : string.Join(".", new[] { projectNamespace }.Concat(folderParts));
            Require(IsNamespace(projectNamespace) && IsNamespace(itemNamespace),
                "--namespace: use a dotted C# namespace. Supply --namespace when an output folder name is not an identifier.");
            Require(input.Order > 0, $"--order '{input.Order}': use a positive integer.");

            var candidates = await PluginTestDiscovery.GetDataverseTestCandidatesAsync(projectFile);
            var target = input.TestTarget?.Trim();
            PluginTestCandidate candidate = null;
            if (!string.IsNullOrEmpty(target))
            {
                var matches = candidates.Where(value => string.Equals(value.FullClassName, target, StringComparison.OrdinalIgnoreCase)).ToArray();
                Require(matches.Length == 1, $"--test-target '{target}': {(matches.Length == 0 ? "not found in the project references" : "ambiguous in the project references")}.");
                candidate = matches[0];
            }
            else
            {
                Require(candidates.Count == 0, "--test-target: required. Use the full class name of a server class in the project references.");
            }

            var name = (string.IsNullOrWhiteSpace(input.Class) ? input.Name : input.Class)?.Trim();
            if (string.IsNullOrWhiteSpace(name))
                name = candidate?.ClassName;
            Require(!string.IsNullOrWhiteSpace(name), "--name: required when the project has no testable targets.");
            if (name.Length > 4 && name.EndsWith("Test", StringComparison.OrdinalIgnoreCase))
                name = name.Substring(0, name.Length - 4);
            Require(name.IndexOf('.') < 0 && IsNamespace(name), $"--name '{name}': use a valid C# class identifier.");

            input.Class = name;
            input.RootNamespace = itemNamespace;
            input.TestTarget = candidate?.FullClassName;
            input.Message = string.IsNullOrWhiteSpace(input.Message) ? candidate?.MessageName : input.Message;
            input.Entity = string.IsNullOrWhiteSpace(input.Entity) ? candidate?.EntityLogicalName : input.Entity;
            input.Stage = string.IsNullOrWhiteSpace(input.Stage) ? candidate?.Stage : input.Stage;
            input.Execution = string.IsNullOrWhiteSpace(input.Execution) ? candidate?.ExecutionMode : input.Execution;
            var context = T4ContextFactory.BuildTestContext(input, workspace);
            context.DataverseTestFacadeNamespace = projectNamespace + ".Framework";
            context.DataverseTestComponentKind = candidate?.ComponentKind;
            context.HasDataverseTestGuards = candidate?.SupportsGuardTest == true;
            context.HasConstructibleDataverseTestTarget = candidate?.CanConstruct == true;
            var fileName = context.ClassWithOrder + "Test.cs";
            var path = Path.Combine(output, fileName);

            var template = await ReadTemplateAsync(input, output);
            var marker = "// DevKit DataverseTest target: " + (candidate?.FullClassName ?? "(none)");
            return (path, marker, template, context);
        }

        private static void CheckExistingFile(string path, string marker, ScaffoldResult result)
        {
            using var reader = new StreamReader(path);
            var firstLine = reader.ReadLine();
            Require(firstLine == marker || firstLine?.StartsWith("// DevKit DataverseTest target: ", StringComparison.Ordinal) != true,
                $"'{path}' already tests a different target. Use --name or choose another output folder.");
            result.Files.Add(new ScaffoldFileResult(Path.GetFileName(path), path, "Skipped"));
        }

        internal static XDocument ReadTestProject(string path)
        {
            Require(path?.EndsWith(".csproj", StringComparison.OrdinalIgnoreCase) == true && File.Exists(path),
                $"DataverseTest expects a C# test project. Project: '{path}'.");
            var project = XDocument.Load(path);
            Require(Value(project, "DevKitTestFramework") == Framework && Value(project, "TargetFramework") == TargetFramework &&
                    Elements(project, "PackageReference").Any(reference => (string)reference.Attribute("Include") == Framework),
                $"'{path}' is not a DataverseTest project. Create one with devkit new-project --type DataverseTest.");
            return project;
        }

        private static async Task<string> ReadTemplateAsync(ItemTemplateInput input, string output)
        {
            var customTitle = !IsDefault(input.TemplateTitle);
            if (!string.IsNullOrWhiteSpace(input.T4Path))
            {
                Require(!customTitle, "--t4 and --template: use one custom T4 source.");
                var path = Path.GetFullPath(input.T4Path);
                Require(File.Exists(path), $"--t4 '{path}': file not found.");
                return await FileHelper.ReadAllTextAsync(path);
            }
            if (customTitle)
            {
                var custom = await T4TemplateResolver.FindCustomTemplateAsync(TemplateCatalog.DataverseTestId, input.TemplateTitle, WorkspaceScanner.ExistingDirectory(output));
                Require(custom != null, $"--template '{input.TemplateTitle}': no DataverseTest template with this title in DynamicsCrm.DevKit.Cli.json.");
                return Helper.Decompress(custom.Body);
            }
            var template = await TemplatePayload.ReadAsync(TemplatePayload.Prefix(TemplateKind.Item, TemplateCatalog.DataverseTestId) + "DataverseTest.tt");
            Require(template != null, "Missing embedded DataverseTest.tt template.");
            return template;
        }

        internal static bool IsDefault(string title)
            => string.IsNullOrWhiteSpace(title) || string.Equals(title, T4TemplateResolver.DefaultTemplateTitle, StringComparison.Ordinal);
    }
}
