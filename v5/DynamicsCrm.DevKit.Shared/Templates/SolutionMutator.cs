using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using System;
using System.IO;
using System.Linq;
using System.Text.Json;
using System.Text.Json.Serialization;
using System.Threading.Tasks;
using System.Xml.Linq;

namespace DynamicsCrm.DevKit.Shared.Templates
{
    /// <summary>
    /// Pure text/XML solution mutation used by the cross-platform
    /// scaffolding engine: adding projects to .sln/.slnx (including
    /// .shproj entries that "dotnet sln add" refuses), adding Compile
    /// items to .projitems and ensuring DynamicsCrm.DevKit.Cli.json
    /// exists. Replaces the EnvDTE operations of VsixHelper.
    /// </summary>
    public static class SolutionMutator
    {
        public const string SdkCSharpProjectTypeGuid = "{9A19103F-16F7-4668-BE54-9A1E7A4F7556}";
        public const string SharedProjectTypeGuid = "{D954291E-2A0B-460D-934E-DC6B0785DB48}";
        /// <summary>
        /// The Visual Studio project factory of Reporting Services projects
        /// (.rptproj) — the type GUID of the Project entry a .sln carries
        /// for them (evidence: v4 TestAllInOne/Dev.AllInOne.2019.sln).
        /// </summary>
        public const string ReportProjectTypeGuid = "{F14B399A-7131-4C87-9E4B-1186C45EF12D}";
        private const string DefaultAnyCpu = "Debug|Any CPU.ActiveCfg = Debug|Any CPU";

        /// <summary>
        /// Adds a project (.csproj/.shproj) to a .sln or .slnx file.
        /// Returns false when the file is missing or the project is
        /// already referenced. When the project consumes one or more
        /// shared projects (imports their .projitems), pass the shared
        /// project files so the .sln also gains one
        /// GlobalSection(SharedMSBuildProjectFiles) consumer line per
        /// import, the way Visual Studio writes them —
        /// "{path}.projitems*{project-guid-lowercase}*SharedItemsImports = 5"
        /// (the .slnx format has no such section).
        /// </summary>
        public static async Task<bool> AddProjectToSolutionAsync(string solutionFile, string projectFile, params string[] sharedProjectFiles)
        {
            if (string.IsNullOrEmpty(solutionFile) || !File.Exists(solutionFile)) return false;
            if (string.IsNullOrEmpty(projectFile) || !File.Exists(projectFile)) return false;

            var projectTypeGuid = string.Equals(Path.GetExtension(projectFile), ".shproj", StringComparison.OrdinalIgnoreCase)
                ? SharedProjectTypeGuid
                : SdkCSharpProjectTypeGuid;

            if (IsSlnx(solutionFile))
            {
                return AddProjectToSlnx(solutionFile, projectFile, null);
            }

            // The consumer line must carry the GUID of the solution entry;
            // reuse the GUID of an existing entry or mint the one the new
            // entry below will use (SDK-style csproj files store no
            // ProjectGuid of their own).
            var projectGuid = ReadProjectGuidFromSolution(solutionFile, projectFile) ?? Guid.NewGuid().ToString("D");
            var added = await AddProjectToSlnAsync(solutionFile, projectFile, projectTypeGuid, projectGuid, includeConfigurationEntries: true);
            var consumerAdded = false;
            if (sharedProjectFiles != null)
            {
                foreach (var sharedProjectFile in sharedProjectFiles)
                {
                    if (!string.IsNullOrEmpty(sharedProjectFile) && File.Exists(sharedProjectFile))
                    {
                        consumerAdded |= EnsureSharedMsBuildConsumerLine(solutionFile, projectFile, sharedProjectFile, projectGuid);
                    }
                }
            }
            return added || consumerAdded;
        }

        /// <summary>
        /// Adds a Reporting Services project (.rptproj) to a .sln or .slnx
        /// file the way Visual Studio does — the .rptproj IS the project
        /// (the bootstrap csproj of the wizard is gone by then): the .sln
        /// entry carries the Reporting Services type GUID and per-solution
        /// configuration entries whose platform is Debug/Release with a
        /// Deploy.0 line; the .slnx entry is
        /// "&lt;Project Path="...rptproj"&gt;&lt;Deploy /&gt;&lt;/Project&gt;"
        /// (the slnx counterpart of the Deploy.0 lines). Returns false when
        /// the file is missing or the project is already referenced.
        /// </summary>
        public static async Task<bool> AddReportProjectToSolutionAsync(string solutionFile, string rptprojFile)
        {
            if (string.IsNullOrEmpty(solutionFile) || !File.Exists(solutionFile)) return false;
            if (string.IsNullOrEmpty(rptprojFile) || !File.Exists(rptprojFile)) return false;

            if (IsSlnx(solutionFile))
            {
                return AddReportProjectToSlnx(solutionFile, rptprojFile);
            }

            var projectGuid = ReadProjectGuidFromSolution(solutionFile, rptprojFile) ?? Guid.NewGuid().ToString("D");
            return await AddProjectToSlnAsync(solutionFile, rptprojFile, ReportProjectTypeGuid, projectGuid, includeConfigurationEntries: true, reportConfigurationEntries: true);
        }

        /// <summary>
        /// Adds a shared project (.shproj) to a .sln file the way Visual
        /// Studio does: a Project entry reusing the ProjectGuid stored in
        /// the .shproj (shared projects get no ProjectConfigurationPlatforms
        /// entries) plus the owner line of GlobalSection(
        /// SharedMSBuildProjectFiles) —
        /// "{path}.projitems*{guid-lowercase}*SharedItemsImports = 13".
        /// "dotnet sln add" does not support .shproj.
        /// </summary>
        public static async Task<bool> AddSharedProjectToSolutionAsync(string solutionFile, string shprojFile)
        {
            if (string.IsNullOrEmpty(solutionFile) || !File.Exists(solutionFile)) return false;
            if (string.IsNullOrEmpty(shprojFile) || !File.Exists(shprojFile)) return false;

            var projectGuid = ReadProjectGuid(shprojFile) ?? Guid.NewGuid().ToString("D");
            if (IsSlnx(solutionFile))
            {
                return AddProjectToSlnx(solutionFile, shprojFile, projectGuid);
            }

            // The Project entry may already exist (for example when the
            // solution template wrote it) — the SharedMSBuildProjectFiles
            // section still has to be ensured.
            var added = await AddProjectToSlnAsync(solutionFile, shprojFile, SharedProjectTypeGuid, projectGuid, includeConfigurationEntries: false);
            var sectionAdded = EnsureSharedMsBuildProjectFiles(solutionFile, shprojFile, projectGuid);
            return added || sectionAdded;
        }

        /// <summary>
        /// Ensures the GlobalSection(SharedMSBuildProjectFiles) owner line
        /// for a shared project exists in the solution file. Returns true
        /// when the section or the line was added.
        /// </summary>
        private static bool EnsureSharedMsBuildProjectFiles(string solutionFile, string shprojFile, string projectGuid)
        {
            var solutionDirectory = Path.GetDirectoryName(solutionFile);
            var relativeProjitems = SolutionMutator.GetRelativePath(solutionDirectory, shprojFile).Replace('/', '\\');
            relativeProjitems = Path.ChangeExtension(relativeProjitems, ".projitems");

            var guidLower = "{" + projectGuid.Trim('{', '}').ToLowerInvariant() + "}";
            var ownerEntry = $"\t\t{relativeProjitems}*{guidLower}*SharedItemsImports = 13";
            return EnsureSharedMsBuildProjectFileEntry(solutionFile, ownerEntry);
        }

        /// <summary>
        /// Ensures the GlobalSection(SharedMSBuildProjectFiles) consumer
        /// line for a project that imports a shared project's .projitems:
        /// "{path}.projitems*{project-guid-lowercase}*SharedItemsImports = 5".
        /// Returns true when the section or the line was added.
        /// </summary>
        private static bool EnsureSharedMsBuildConsumerLine(string solutionFile, string projectFile, string sharedProjectFile, string projectGuid)
        {
            var solutionDirectory = Path.GetDirectoryName(solutionFile);
            var relativeProjitems = SolutionMutator.GetRelativePath(solutionDirectory, sharedProjectFile).Replace('/', '\\');
            relativeProjitems = Path.ChangeExtension(relativeProjitems, ".projitems");

            var guidLower = "{" + projectGuid.Trim('{', '}').ToLowerInvariant() + "}";
            var consumerEntry = $"\t\t{relativeProjitems}*{guidLower}*SharedItemsImports = 5";
            return EnsureSharedMsBuildProjectFileEntry(solutionFile, consumerEntry);
        }

        /// <summary>
        /// Inserts one GlobalSection(SharedMSBuildProjectFiles) line,
        /// creating the section right after Global when missing. Idempotent
        /// per line.
        /// </summary>
        private static bool EnsureSharedMsBuildProjectFileEntry(string solutionFile, string entryLine)
        {
            var lines = File.ReadAllLines(solutionFile).ToList();
            if (lines.Any(line => line.IndexOf(entryLine, StringComparison.OrdinalIgnoreCase) >= 0))
            {
                return false;
            }

            var sectionStart = lines.FindIndex(line => line.Trim().StartsWith("GlobalSection(SharedMSBuildProjectFiles)", StringComparison.OrdinalIgnoreCase));
            if (sectionStart < 0)
            {
                var globalIndex = lines.FindIndex(line => line.Trim() == "Global");
                var insertAt = globalIndex + 1;
                lines.Insert(insertAt, "\tGlobalSection(SharedMSBuildProjectFiles) = preSolution");
                lines.Insert(insertAt + 1, entryLine);
                lines.Insert(insertAt + 2, "\tEndGlobalSection");
            }
            else
            {
                var endSection = lines.FindIndex(sectionStart, line => line.Trim() == "EndGlobalSection");
                lines.Insert(endSection, entryLine);
            }

            File.WriteAllLines(solutionFile, lines);
            return true;
        }

        /// <summary>
        /// Reads the project GUID a .sln already uses for a project entry
        /// (the value between the braces of the third field). Returns null
        /// when the project is not referenced yet.
        /// </summary>
        private static string ReadProjectGuidFromSolution(string solutionFile, string projectFile)
        {
            var solutionDirectory = Path.GetDirectoryName(solutionFile);
            var relativePath = SolutionMutator.GetRelativePath(solutionDirectory, projectFile).Replace('/', '\\');

            foreach (var line in File.ReadAllLines(solutionFile))
            {
                var trimmed = line.Trim();
                if (!trimmed.StartsWith("Project(", StringComparison.Ordinal)) continue;
                var fields = trimmed.Split(',');
                if (fields.Length < 3) continue;
                var pathField = fields[1].Trim().Trim('"');
                if (!string.Equals(pathField, relativePath, StringComparison.OrdinalIgnoreCase)) continue;
                var guidField = fields[2].Trim().Trim('"').Trim('{', '}');
                return guidField;
            }
            return null;
        }

        /// <summary>
        /// Reads the ProjectGuid of a .shproj (the same value the payload
        /// uses for SharedGUID in the matching .projitems). Returns null
        /// when the file has no readable ProjectGuid.
        /// </summary>
        private static string ReadProjectGuid(string shprojFile)
        {
            try
            {
                var document = XDocument.Load(shprojFile);
                var ns = document.Root.Name.Namespace;
                var projectGuid = document.Root
                    .Descendants(ns + "ProjectGuid")
                    .FirstOrDefault()?.Value?.Trim()
                    .Trim('{', '}');
                return string.IsNullOrEmpty(projectGuid) ? null : projectGuid;
            }
            catch
            {
                return null;
            }
        }

        /// <summary>
        /// Appends a Compile item to a .projitems file using
        /// $(MSBuildThisFileDirectory) so it resolves from the shared
        /// project location. Returns false when the item already exists.
        /// </summary>
        public static bool AddCompileItemToProjitems(string projitemsPath, string relativeFilePath)
        {
            if (string.IsNullOrEmpty(projitemsPath) || !File.Exists(projitemsPath)) return false;
            var normalized = relativeFilePath.Replace('/', '\\');
            var include = $"$(MSBuildThisFileDirectory){normalized}";

            var document = XDocument.Load(projitemsPath);
            var ns = document.Root.Name.Namespace;
            var itemGroups = document.Root.Elements(ns + "ItemGroup").ToList();
            var compileGroup = itemGroups.FirstOrDefault(group => group.Elements(ns + "Compile").Any());
            if (compileGroup == null)
            {
                compileGroup = new XElement(ns + "ItemGroup");
                document.Root.Add(compileGroup);
            }

            if (compileGroup.Elements(ns + "Compile").Any(compile =>
                string.Equals((string)compile.Attribute("Include"), include, StringComparison.OrdinalIgnoreCase)))
            {
                return false;
            }

            compileGroup.Add(new XElement(ns + "Compile", new XAttribute("Include", include)));
            document.Save(projitemsPath);
            return true;
        }

        /// <summary>
        /// Ensures DynamicsCrm.DevKit.Cli.json exists in the solution
        /// directory, creating it from the embedded resource (with the
        /// ??? file patterns bound to the solution name) and ensuring the
        /// .env/.env.example project environment files. Returns the full
        /// path, or null when the directory is empty. Port of
        /// VsixHelper.AddDynamicsCrmDevKitCliJsonAsync.
        /// </summary>
        public static async Task<string> EnsureDevKitCliJsonAsync(string solutionDirectory, string solutionName = null)
        {
            if (string.IsNullOrEmpty(solutionDirectory)) return null;
            var path = Path.Combine(solutionDirectory, Const.DynamicsCrmDevKitCliJson);
            if (File.Exists(path))
            {
                ProjectEnvironment.EnsureFile(solutionDirectory);
                return path;
            }

            var content = await TemplatePayload.ReadSharedResourceAsync(Const.DynamicsCrmDevKitCliJson);
            if (string.IsNullOrEmpty(content)) return null;
            if (!string.IsNullOrEmpty(solutionName))
            {
                content = content
                    .Replace("???.Plugin.*.dll", $"{solutionName}.Plugin.*.dll")
                    .Replace("???.Plugin.*.nupkg", $"{solutionName}.Plugin.*.nupkg")
                    .Replace("???.CustomAction.*.dll", $"{solutionName}.CustomAction.*.dll")
                    .Replace("???.CustomApi.*.dll", $"{solutionName}.CustomApi.*.dll")
                    .Replace("???.Workflow.*.dll", $"{solutionName}.Workflow.*.dll")
                    .Replace("???.DataProvider.*.dll", $"{solutionName}.DataProvider.*.dll")
                    .Replace("???.*.Test.dll", $"{solutionName}.*.Test.dll");
            }
            Directory.CreateDirectory(solutionDirectory);
            await FileHelper.ForceWriteAllTextAsync(path, content);
            ProjectEnvironment.EnsureFile(solutionDirectory);
            return path;
        }

        /// <summary>
        /// Ensures DynamicsCrm.DevKit.json (the VSIX connection store) exists
        /// in the solution directory, so opening the solution in Visual
        /// Studio already offers a working connection. When no connection is
        /// passed, the connection is derived from the project .env
        /// (DEVKIT_AUTH_TYPE) with UseProjectEnvironment=true — secrets are
        /// never written to this file, they are read from .env at connect
        /// time. Secrets of an explicitly passed connection are encrypted
        /// with Helper.EncryptString like the VSIX form does. An existing
        /// file is never touched.
        /// </summary>
        public static async Task<string> EnsureDevKitJsonAsync(string solutionDirectory, CrmConnection crmConnection = null)
        {
            if (string.IsNullOrEmpty(solutionDirectory)) return null;
            var path = Path.Combine(solutionDirectory, Const.DynamicsCrmDevKitJson);
            if (File.Exists(path)) return path;

            var connection = crmConnection ?? ConnectionFromProjectEnvironment(solutionDirectory);
            var connections = new DevKitConnections
            {
                CrmConnections = new System.Collections.Generic.List<CrmConnection>(),
            };
            if (connection != null)
            {
                if (!string.IsNullOrEmpty(connection.Password)) connection.Password = Helper.EncryptString(connection.Password);
                if (!string.IsNullOrEmpty(connection.ClientSecret)) connection.ClientSecret = Helper.EncryptString(connection.ClientSecret);
                connections.CrmConnections.Add(connection);
                connections.DefaultCrmConnection = connection.Name;
            }

            var options = new JsonSerializerOptions
            {
                WriteIndented = true,
                DefaultIgnoreCondition = JsonIgnoreCondition.WhenWritingNull,
            };
            var json = JsonSerializer.Serialize(connections, options);
            Directory.CreateDirectory(solutionDirectory);
            await FileHelper.ForceWriteAllTextAsync(path, json);
            return path;
        }

        /// <summary>
        /// Derives a connection entry from the project .env: name and type
        /// come from DEVKIT_AUTH_TYPE and secrets stay in .env
        /// (UseProjectEnvironment=true) — the same shape the VSIX connection
        /// dialog saves. Returns null when no .env or no DEVKIT_AUTH_TYPE is
        /// found. Shared with the template handlers so non-interactive hosts
        /// (CLI/AI/CI, MCP later) resolve the same fallback connection.
        /// </summary>
        public static CrmConnection ConnectionFromProjectEnvironment(string solutionDirectory)
        {
            var envFile = ProjectEnvironment.FindFile(solutionDirectory);
            if (envFile == null) return null;
            var values = ProjectEnvironment.Read(envFile);
            var type = ProjectEnvironment.GetValue(values, ProjectEnvironment.AuthType);
            if (string.IsNullOrEmpty(type)) return null;

            var now = DateTime.UtcNow;
            return new CrmConnection
            {
                Name = type,
                Type = type,
                UseProjectEnvironment = true,
                CreatedAt = now,
                ModifiedAt = now,
            };
        }

        private static bool IsSlnx(string solutionFile)
        {
            return string.Equals(Path.GetExtension(solutionFile), ".slnx", StringComparison.OrdinalIgnoreCase);
        }

        /// <summary>
        /// Path.GetRelativePath replacement: .NET Framework 4.8 does not
        /// provide it, and this file compiles into both net48 (VSIX) and
        /// net10 (CLI) hosts. Handles the solution/project layout (same
        /// volume, project inside or beside the solution directory).
        /// </summary>
        private static string GetRelativePath(string relativeTo, string path)
        {
            var fromChunks = NormalizeChunks(relativeTo);
            var toChunks = NormalizeChunks(path);

            var common = 0;
            while (common < fromChunks.Length && common < toChunks.Length &&
                   string.Equals(fromChunks[common], toChunks[common], StringComparison.OrdinalIgnoreCase))
            {
                common++;
            }

            var parts = new System.Collections.Generic.List<string>();
            for (var i = common; i < fromChunks.Length; i++)
            {
                parts.Add("..");
            }
            for (var i = common; i < toChunks.Length; i++)
            {
                parts.Add(toChunks[i]);
            }
            return string.Join("\\", parts);
        }

        private static string[] NormalizeChunks(string path)
        {
            var fullPath = Path.GetFullPath(path);
            return fullPath.Split(new[] { Path.DirectorySeparatorChar, Path.AltDirectorySeparatorChar }, System.StringSplitOptions.RemoveEmptyEntries);
        }

        private static async Task<bool> AddProjectToSlnAsync(string solutionFile, string projectFile, string projectTypeGuid, string projectGuid, bool includeConfigurationEntries, bool reportConfigurationEntries = false)
        {
            var solutionDirectory = Path.GetDirectoryName(solutionFile);
            var relativePath = SolutionMutator.GetRelativePath(solutionDirectory, projectFile).Replace('/', '\\');
            var projectName = Path.GetFileNameWithoutExtension(projectFile);

            var lines = File.ReadAllLines(solutionFile).ToList();
            if (lines.Any(line => line.IndexOf(relativePath, StringComparison.OrdinalIgnoreCase) >= 0))
            {
                return false;
            }

            var guid = string.IsNullOrEmpty(projectGuid)
                ? Guid.NewGuid().ToString("D")
                : projectGuid.Trim('{', '}');
            var projectGuidToken = $"{{{guid.ToUpperInvariant()}}}";
            var projectBlock = new[]
            {
                $"Project(\"{projectTypeGuid}\") = \"{projectName}\", \"{relativePath}\", \"{projectGuidToken}\"",
                "EndProject"
            };

            var globalIndex = lines.FindIndex(line => line.Trim() == "Global");
            if (globalIndex < 0)
            {
                lines.Add("Microsoft Visual Studio Solution File, Format Version 12.00");
                lines.Add("# Visual Studio Version 17");
                lines.Add("VisualStudioVersion = 17.0.31903.59");
                lines.Add("MinimumVisualStudioVersion = 10.0.40219.1");
                lines.AddRange(projectBlock);
                lines.Add("Global");
                lines.Add("\tGlobalSection(SolutionConfigurationPlatforms) = preSolution");
                lines.Add("\t\tDebug|Any CPU = Debug|Any CPU");
                lines.Add("\t\tRelease|Any CPU = Release|Any CPU");
                lines.Add("\tEndGlobalSection");
                lines.Add("\tGlobalSection(ProjectConfigurationPlatforms) = postSolution");
                if (includeConfigurationEntries)
                {
                    if (reportConfigurationEntries)
                    {
                        lines.AddRange(ReportConfigurationEntries(projectGuidToken));
                    }
                    else
                    {
                        lines.Add($"\t\t{projectGuidToken}.Debug|Any CPU.ActiveCfg = Debug|Any CPU");
                        lines.Add($"\t\t{projectGuidToken}.Debug|Any CPU.Build.0 = Debug|Any CPU");
                        lines.Add($"\t\t{projectGuidToken}.Release|Any CPU.ActiveCfg = Release|Any CPU");
                        lines.Add($"\t\t{projectGuidToken}.Release|Any CPU.Build.0 = Release|Any CPU");
                    }
                }
                lines.Add("\tEndGlobalSection");
                lines.Add("EndGlobal");
            }
            else
            {
                lines.InsertRange(globalIndex, projectBlock);
                if (includeConfigurationEntries)
                {
                    AddConfigurationEntries(lines, projectGuidToken, reportConfigurationEntries);
                }
            }

            await FileHelper.ForceWriteAllTextAsync(solutionFile, string.Join(Environment.NewLine, lines) + Environment.NewLine);
            return true;
        }

        private static void AddConfigurationEntries(System.Collections.Generic.List<string> lines, string projectGuid, bool reportConfigurationEntries = false)
        {
            var sectionStart = lines.FindIndex(line => line.Trim().StartsWith("GlobalSection(ProjectConfigurationPlatforms)", StringComparison.Ordinal));
            if (sectionStart < 0)
            {
                var globalIndex = lines.FindIndex(line => line.Trim() == "Global");
                lines.Insert(globalIndex + 1, "\tGlobalSection(ProjectConfigurationPlatforms) = postSolution");
                lines.Insert(globalIndex + 2, "\tEndGlobalSection");
                sectionStart = globalIndex + 1;
            }

            var endSection = lines.FindIndex(sectionStart, line => line.Trim() == "EndGlobalSection");
            var entries = reportConfigurationEntries
                ? ReportConfigurationEntries(projectGuid)
                : new[]
                {
                    $"\t\t{projectGuid}.Debug|Any CPU.ActiveCfg = Debug|Any CPU",
                    $"\t\t{projectGuid}.Debug|Any CPU.Build.0 = Debug|Any CPU",
                    $"\t\t{projectGuid}.Release|Any CPU.ActiveCfg = Release|Any CPU",
                    $"\t\t{projectGuid}.Release|Any CPU.Build.0 = Release|Any CPU"
                };

            for (var i = 0; i < entries.Length; i++)
            {
                lines.Insert(endSection + i, entries[i]);
            }
        }

        /// <summary>
        /// The per-solution configuration entries Visual Studio writes for
        /// Reporting Services projects: the platform of the project is
        /// Debug/Release (not "Any CPU") and each configuration carries a
        /// Deploy.0 line (v4 TestAllInOne/Dev.AllInOne.2019.sln evidence) —
        /// the .sln shape behind the .slnx "&lt;Deploy /&gt;" child element.
        /// </summary>
        private static string[] ReportConfigurationEntries(string projectGuid)
        {
            return new[]
            {
                $"\t\t{projectGuid}.Debug|Any CPU.ActiveCfg = Debug",
                $"\t\t{projectGuid}.Debug|Any CPU.Build.0 = Debug",
                $"\t\t{projectGuid}.Debug|Any CPU.Deploy.0 = Debug",
                $"\t\t{projectGuid}.Release|Any CPU.ActiveCfg = Release",
                $"\t\t{projectGuid}.Release|Any CPU.Build.0 = Release",
                $"\t\t{projectGuid}.Release|Any CPU.Deploy.0 = Release"
            };
        }

        /// <summary>
        /// Adds a project to a .slnx solution the way Visual Studio does:
        /// csproj entries carry only the Path; shared projects (.shproj)
        /// additionally carry Id — the ProjectGuid of the .shproj in lower
        /// case. No project-type attribute exists in the slnx format. The
        /// file keeps its original shape (XML declaration and BOM state).
        /// </summary>
        private static bool AddProjectToSlnx(string solutionFile, string projectFile, string projectGuid)
        {
            var solutionDirectory = Path.GetDirectoryName(solutionFile);
            var relativePath = SolutionMutator.GetRelativePath(solutionDirectory, projectFile).Replace('\\', '/');

            var document = XDocument.Load(solutionFile);
            var projectElement = document.Root
                .Elements("Project")
                .FirstOrDefault(element => string.Equals((string)element.Attribute("Path"), relativePath, StringComparison.OrdinalIgnoreCase));
            if (projectElement != null) return false;

            projectElement = new XElement("Project",
                new XAttribute("Path", relativePath));
            if (!string.IsNullOrEmpty(projectGuid))
            {
                projectElement.SetAttributeValue("Id", projectGuid.Trim('{', '}').ToLowerInvariant());
            }
            document.Root.Add(projectElement);

            SaveSlnxPreservingShape(document, solutionFile);
            return true;
        }

        /// <summary>
        /// Adds a Reporting Services project (.rptproj) to a .slnx solution
        /// the way Visual Studio does:
        /// "&lt;Project Path="...rptproj"&gt;&lt;Deploy /&gt;&lt;/Project&gt;"
        /// — no Id (the .rptproj stores no project GUID of its own) and the
        /// empty Deploy child element (the slnx counterpart of the Deploy.0
        /// configuration entries the .sln shape writes).
        /// </summary>
        private static bool AddReportProjectToSlnx(string solutionFile, string rptprojFile)
        {
            var solutionDirectory = Path.GetDirectoryName(solutionFile);
            var relativePath = SolutionMutator.GetRelativePath(solutionDirectory, rptprojFile).Replace('\\', '/');

            var document = XDocument.Load(solutionFile);
            var projectElement = document.Root
                .Elements("Project")
                .FirstOrDefault(element => string.Equals((string)element.Attribute("Path"), relativePath, StringComparison.OrdinalIgnoreCase));
            if (projectElement != null) return false;

            document.Root.Add(new XElement("Project",
                new XAttribute("Path", relativePath),
                new XElement("Deploy")));

            SaveSlnxPreservingShape(document, solutionFile);
            return true;
        }

        /// <summary>
        /// Saves a .slnx document keeping the original file shape (XML
        /// declaration and BOM state).
        /// </summary>
        private static void SaveSlnxPreservingShape(XDocument document, string solutionFile)
        {
            var hadDeclaration = document.Declaration != null;
            var head = new byte[3];
            using (var existing = File.OpenRead(solutionFile))
            {
                // Inexact-read safe loop (netstandard2.0 has no ReadExactly).
                for (var read = 0; read < head.Length;)
                {
                    var count = existing.Read(head, read, head.Length - read);
                    if (count <= 0) break;
                    read += count;
                }
            }
            var hadBom = head[0] == 0xEF && head[1] == 0xBB && head[2] == 0xBF;
            var settings = new System.Xml.XmlWriterSettings
            {
                OmitXmlDeclaration = !hadDeclaration,
                Indent = true,
                Encoding = new System.Text.UTF8Encoding(hadBom)
            };
            using (var writer = System.Xml.XmlWriter.Create(solutionFile, settings))
            {
                document.Save(writer);
            }
        }
    }
}
