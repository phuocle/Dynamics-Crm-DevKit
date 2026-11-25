using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Templates;
using DynamicsCrm.DevKit.Shared.Templates.Models;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Runtime.InteropServices;
using System.Security;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using System.Xml.Linq;

namespace DynamicsCrm.DevKit.Shared.Templates.Handlers
{
    internal sealed class DataverseTestProjectHandler : ITemplateHandler
    {
        public string TemplateId => TemplateCatalog.DataverseTestId;
        internal const string Framework = "DataverseFakes.Community";
        internal const string TargetFramework = "net462";
        private static readonly bool IsWindows = RuntimeInformation.IsOSPlatform(OSPlatform.Windows);
        internal static readonly StringComparison PathComparison = IsWindows
            ? StringComparison.OrdinalIgnoreCase : StringComparison.Ordinal;
        private static readonly StringComparer PathComparer = IsWindows ? StringComparer.OrdinalIgnoreCase : StringComparer.Ordinal;

        internal static string GetProjectName(string solutionName, string name = null)
        {
            var qualifier = name?.Trim();
            return string.IsNullOrEmpty(qualifier)
                ? $"{solutionName}.DataverseTests"
                : $"{solutionName}.{qualifier}.DataverseTests";
        }

        internal static TemplateManifest CreateManifest(bool frameworkOnly = false)
        {
            var id = TemplateCatalog.DataverseTestId;
            var prefix = TemplatePayload.Prefix(TemplateKind.Project, id);
            var manifest = new TemplateManifest { Kind = TemplateKind.Project, TemplateId = id };
            if (!frameworkOnly)
            {
                manifest.Files.Add(new TemplatePayloadFile
                {
                    ResourceName = prefix + "ProjectTemplate.csproj.template",
                    TargetFileName = "$SafeProjectName$.csproj",
                    ReplaceParameters = true
                });
                manifest.Files.Add(new TemplatePayloadFile { ResourceName = prefix + "README.md", TargetFileName = "README.md", ReplaceParameters = false });
            }
            foreach (var name in new[] { "PluginTestBase", "PluginRunBuilder", "PluginExecutionDescriptor", "PluginRegistrationInfo" })
            {
                manifest.Files.Add(new TemplatePayloadFile
                {
                    ResourceName = prefix + name + ".cs",
                    TargetFileName = Path.Combine("Framework", name + ".cs"),
                    ReplaceParameters = true
                });
            }
            return manifest;
        }

        public async Task<ScaffoldResult> ScaffoldAsync(ScaffoldRequest request)
        {
            var result = new ScaffoldResult { TemplateId = TemplateId };
            try
            {
                await WriteProjectAsync(request, result);
            }
            catch (Exception ex) when (ex is ArgumentException or IOException or UnauthorizedAccessException or System.Xml.XmlException)
            {
                result.AddError(ex.Message);
                if (result.Files.Count > 0)
                    result.AddError("Created before the error: " + string.Join(", ", result.Files.Select(file => file.FilePath)));
            }
            return result;
        }

        private static async Task WriteProjectAsync(ScaffoldRequest request, ScaffoldResult result)
        {
            var input = request.ProjectInput;
            var solution = request.Workspace.SolutionFile;
            Require(!string.IsNullOrEmpty(solution), "--solution: required for DataverseTest.");
            Require(IsNamespace(input.ProjectName), $"--name '{input.ProjectName}': use a dotted C# project name.");
            var solutionDirectory = Path.GetDirectoryName(solution);
            var output = string.IsNullOrWhiteSpace(input.OutputDirectory) ? solutionDirectory : Path.GetFullPath(input.OutputDirectory);
            var directory = Path.Combine(output, input.ProjectName);
            var projectFile = Path.Combine(directory, input.ProjectName + ".csproj");
            using var solutionReservation = Reserve(solution + ".devkit-dataverse-test.lock");
            var members = ReadSolutionProjects(solution);
            Require(!File.Exists(directory) && (!Directory.Exists(directory) || !Directory.EnumerateFileSystemEntries(directory).Any()) &&
                    !members.Any(path => HasName(path, input.ProjectName)),
                $"--name '{input.ProjectName}': project already exists. Choose a different name.");

            var shared = SetDependencyTokens(solution, directory, input.ServerProjectFile, request.Tokens, members);

            var manifest = CreateManifest();
            foreach (var file in manifest.Files)
                Require(await TemplatePayload.ReadContentAsync(file.ResourceName) != null, $"Missing embedded template resource '{file.ResourceName}'.");

            Directory.CreateDirectory(output);
            using var outputReservation = Reserve(directory + ".devkit-dataverse-test.lock");
            Require(!File.Exists(directory) && (!Directory.Exists(directory) || !Directory.EnumerateFileSystemEntries(directory).Any()),
                $"--name '{input.ProjectName}': project already exists. Choose a different name.");
            await ScaffoldingEngine.RenderManifestFilesAsync(manifest, request.Tokens, directory, false, result);
            if (!result.Success)
                return;

            var changed = await SolutionMutator.AddProjectToSolutionAsync(solution, projectFile, shared);
            result.Files.Add(new ScaffoldFileResult(Path.GetFileName(solution), solution, changed ? "Updated" : "Unchanged"));
        }

        internal static string SetDependencyTokens(string solution, string directory, string serverSelection,
            Dictionary<string, string> tokens, List<string> members = null)
        {
            members ??= ReadSolutionProjects(solution);
            var solutionDirectory = Path.GetDirectoryName(solution);
            var servers = FindServerProjects(members);
            var server = ResolveServer(servers, Path.GetFileNameWithoutExtension(solution), serverSelection, solutionDirectory);
            var serverProject = XDocument.Load(server);
            var imports = ProductionImports(server, serverProject).Where(File.Exists).ToArray();
            var sharedItems = SinglePath(imports, $"a production Shared.projitems imported by '{server}'");
            var shared = Path.ChangeExtension(sharedItems, ".shproj");
            Require(File.Exists(shared) && members.Contains(shared, PathComparer),
                $"The production Shared project '{shared}' must exist and belong to the solution.");
            Require(File.Exists(Path.Combine(Path.GetDirectoryName(shared), "Lib", "PluginCore.cs")) &&
                    File.Exists(Path.Combine(Path.GetDirectoryName(shared), "Lib", "EntityBase.cs")),
                $"'{sharedItems}' does not contain the DevKit production Shared payload.");
            var sharedNamespace = Value(XDocument.Load(sharedItems), "Import_RootNamespace");
            Require(IsNamespace(sharedNamespace), $"Cannot resolve the Shared namespace from '{sharedItems}'.");

            var proxies = members.Where(path => IsCSharpProject(path) && File.Exists(path))
                .Select(path => (Path: path, Namespace: ProxyNamespace(path)))
                .Where(candidate => IsNamespace(candidate.Namespace)).ToArray();
            var preferredProxies = proxies.Where(candidate => HasName(candidate.Path, $"{Path.GetFileNameWithoutExtension(solution)}.ProxyTypes")).ToArray();
            var proxyPath = SinglePath((preferredProxies.Length > 0 ? preferredProxies : proxies).Select(candidate => candidate.Path),
                "a ProxyTypes project with the ProxyTypesAssembly marker in the solution");
            var proxyNamespace = proxies.Single(candidate => candidate.Path == proxyPath).Namespace;
            Require(!members.Where(IsCSharpProject).Any(path => ContainsDirectory(Path.GetDirectoryName(path), directory)),
                "--out: the new test project must be outside the folders of existing C# projects.");

            tokens["$DataverseServerReference$"] = XmlPath(directory, server);
            tokens["$DataverseProxyReference$"] = XmlPath(directory, proxyPath);
            tokens["$DataverseSharedImport$"] = XmlPath(directory, sharedItems);
            tokens["$DataverseProxyNamespace$"] = proxyNamespace;
            tokens["$DataverseSharedNamespace$"] = sharedNamespace;
            return shared;
        }

        internal static List<string> FindServerProjects(string solution)
            => FindServerProjects(ReadSolutionProjects(solution));

        private static List<string> FindServerProjects(IEnumerable<string> members)
        {
            var servers = new List<string>();
            foreach (var path in members.Where(path => IsCSharpProject(path) && File.Exists(path)))
            {
                var project = XDocument.Load(path);
                if (Value(project, "TargetFramework") == TargetFramework &&
                    !string.Equals(Value(project, "IsTestProject"), "true", StringComparison.OrdinalIgnoreCase) &&
                    (string.Equals(Value(project, "SignAssembly"), "true", StringComparison.OrdinalIgnoreCase) ||
                     Elements(project, "PackageReference").Any(reference => (string)reference.Attribute("Include") == "Microsoft.CrmSdk.Workflow")) &&
                    ProductionImports(path, project).Any())
                {
                    servers.Add(path);
                }
            }
            return servers;
        }

        private static string ResolveServer(List<string> servers, string solutionName, string selection, string directory)
        {
            if (!string.IsNullOrWhiteSpace(selection))
            {
                var selected = ResolvePath(directory, selection.Trim());
                var server = servers.FirstOrDefault(path => string.Equals(path, selected, PathComparison));
                Require(server != null, $"--server-project '{selection}': expected a Dataverse Server project that belongs to this solution. {Candidates(servers)}");
                return server;
            }
            var preferred = servers.Where(path => HasName(path, solutionName + ".Server")).ToArray();
            if (preferred.Length == 1)
                return preferred[0];
            Require(servers.Count == 1,
                $"DataverseTest requires one Server project. Use --server-project <path.csproj> to select a project in this solution. {Candidates(servers)}");
            return servers[0];
        }

        private static string Candidates(IEnumerable<string> paths)
            => "Candidates: " + (paths.Any() ? string.Join(", ", paths) : "(none)");

        private static string SinglePath(IEnumerable<string> paths, string description)
        {
            var matches = paths.ToArray();
            Require(matches.Length == 1, $"DataverseTest requires {description}. {Candidates(matches)}");
            return matches[0];
        }

        private static IEnumerable<string> ProductionImports(string projectFile, XDocument project)
        {
            var directory = Path.GetDirectoryName(projectFile);
            return Elements(project, "Import")
                .Select(element => (string)element.Attribute("Project"))
                .Where(path => !string.IsNullOrWhiteSpace(path) && path.EndsWith(".projitems", StringComparison.OrdinalIgnoreCase))
                .Select(path => Regex.Replace(path, @"\$\(MSBuildThisFileDirectory\)", _ => directory + Path.DirectorySeparatorChar, RegexOptions.IgnoreCase))
                .Where(path => path.IndexOf("$(", StringComparison.Ordinal) < 0)
                .Select(path => ResolvePath(directory, path))
                .Where(path => !Path.GetFileNameWithoutExtension(path).EndsWith(".Test", StringComparison.OrdinalIgnoreCase))
                .Distinct(PathComparer);
        }

        private static string ProxyNamespace(string projectFile)
        {
            var marker = Path.Combine(Path.GetDirectoryName(projectFile), "ProxyTypesAssembly.cs");
            if (!File.Exists(marker))
                return null;
            var source = File.ReadAllText(marker);
            if (!Regex.IsMatch(source, @"\bpublic\s+(?:static\s+)?class\s+ProxyTypesAssembly\b"))
                return null;
            var match = Regex.Match(source, @"\bnamespace\s+(?<name>[\w.]+)\s*[{;]");
            return match.Success ? match.Groups["name"].Value : null;
        }

        internal static List<string> ReadSolutionProjects(string solution)
        {
            var directory = Path.GetDirectoryName(solution);
            IEnumerable<string> paths;
            switch (Path.GetExtension(solution).ToLowerInvariant())
            {
                case ".slnx":
                    paths = Elements(XDocument.Load(solution), "Project").Select(project => (string)project.Attribute("Path"));
                    break;
                case ".sln":
                    paths = Regex.Matches(File.ReadAllText(solution), @"(?m)^\s*Project\(""[^""]+""\)\s*=\s*""[^""]+"",\s*""(?<path>[^""]+)""")
                        .Cast<Match>()
                        .Select(match => match.Groups["path"].Value);
                    break;
                default:
                    throw new ArgumentException("--solution: use a .sln or .slnx file for DataverseTest.");
            }
            return paths.Where(path => !string.IsNullOrWhiteSpace(path))
                .Select(path => ResolvePath(directory, path))
                .Distinct(PathComparer)
                .ToList();
        }

        internal static string ResolvePath(string directory, string path)
        {
            path = path.Replace('\\', Path.DirectorySeparatorChar).Replace('/', Path.DirectorySeparatorChar);
            if (IsWindows)
            {
                var root = Path.GetPathRoot(path);
                // Anchor partially rooted Windows paths to the project or solution directory.
                if (root == "\\")
                    return Path.GetFullPath(Path.Combine(Path.GetPathRoot(directory), path.Substring(root.Length)));
                if (root?.Length == 2 && root[1] == ':')
                {
                    var baseDirectory = directory.StartsWith(root, PathComparison) ? directory : root + Path.DirectorySeparatorChar;
                    return Path.GetFullPath(Path.Combine(baseDirectory, path.Substring(root.Length)));
                }
            }
            return Path.GetFullPath(Path.Combine(directory, path));
        }

        internal static string RelativePath(string directory, string file)
        {
            if (!string.Equals(Path.GetPathRoot(directory), Path.GetPathRoot(file), PathComparison))
                return file;
            var relative = SolutionMutator.GetRelativePath(directory, file, PathComparison, Path.DirectorySeparatorChar.ToString());
            return string.IsNullOrEmpty(relative) ? "." : relative;
        }

        internal static bool HasName(string path, string name)
            => string.Equals(Path.GetFileNameWithoutExtension(path), name, StringComparison.OrdinalIgnoreCase);

        internal static bool ContainsDirectory(string root, string directory)
            => string.Equals(root, directory, PathComparison) ||
               directory.StartsWith(root.TrimEnd(Path.DirectorySeparatorChar, Path.AltDirectorySeparatorChar) + Path.DirectorySeparatorChar, PathComparison);

        internal static bool IsNamespace(string value)
            => !string.IsNullOrWhiteSpace(value) && IsCSharpNamespace(value);

        private static bool IsCSharpNamespace(string value)
        {
            using var provider = new Microsoft.CSharp.CSharpCodeProvider();
            return value.Split('.').All(part => !part.StartsWith("@", StringComparison.Ordinal) && provider.IsValidIdentifier(part));
        }

        internal static IEnumerable<XElement> Elements(XDocument project, string name)
            => project.Descendants().Where(element => element.Name.LocalName == name);

        internal static string Value(XDocument project, string name)
            => Elements(project, name).FirstOrDefault()?.Value.Trim();

        private static bool IsCSharpProject(string path)
            => path.EndsWith(".csproj", StringComparison.OrdinalIgnoreCase);

        private static string XmlPath(string directory, string file)
            => SecurityElement.Escape(RelativePath(directory, file).Replace('\\', '/'));

        private static FileStream Reserve(string path)
        {
            try
            {
                return new FileStream(path, FileMode.CreateNew, FileAccess.Write, FileShare.None, 4096, FileOptions.DeleteOnClose);
            }
            catch (IOException) when (File.Exists(path))
            {
                throw new IOException($"A DataverseTest scaffold already holds '{path}'. Retry after it finishes.");
            }
        }

        internal static void Require(bool valid, string message)
        {
            if (!valid)
                throw new ArgumentException(message);
        }
    }
}
