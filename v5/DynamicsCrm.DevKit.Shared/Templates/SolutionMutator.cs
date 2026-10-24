using DynamicsCrm.DevKit.Shared;
using System;
using System.IO;
using System.Linq;
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
        private const string DefaultAnyCpu = "Debug|Any CPU.ActiveCfg = Debug|Any CPU";

        /// <summary>
        /// Adds a project (.csproj/.shproj) to a .sln or .slnx file.
        /// Returns false when the file is missing or the project is
        /// already referenced.
        /// </summary>
        public static async Task<bool> AddProjectToSolutionAsync(string solutionFile, string projectFile)
        {
            if (string.IsNullOrEmpty(solutionFile) || !File.Exists(solutionFile)) return false;
            if (string.IsNullOrEmpty(projectFile) || !File.Exists(projectFile)) return false;

            var projectTypeGuid = string.Equals(Path.GetExtension(projectFile), ".shproj", StringComparison.OrdinalIgnoreCase)
                ? SharedProjectTypeGuid
                : SdkCSharpProjectTypeGuid;

            if (IsSlnx(solutionFile))
            {
                return AddProjectToSlnx(solutionFile, projectFile, projectTypeGuid);
            }

            return await AddProjectToSlnAsync(solutionFile, projectFile, projectTypeGuid);
        }

        /// <summary>
        /// Adds a shared project (.shproj) to a .sln file including the
        /// GlobalSection(SharedMSBuildProjectFiles) entries that Visual
        /// Studio requires ("dotnet sln add" does not support .shproj).
        /// </summary>
        public static async Task<bool> AddSharedProjectToSolutionAsync(string solutionFile, string shprojFile)
        {
            if (string.IsNullOrEmpty(solutionFile) || !File.Exists(solutionFile)) return false;
            if (string.IsNullOrEmpty(shprojFile) || !File.Exists(shprojFile)) return false;

            // The Project entry may already exist (for example when the
            // solution template wrote it) — the SharedMSBuildProjectFiles
            // section still has to be ensured.
            await AddProjectToSolutionAsync(solutionFile, shprojFile);
            if (IsSlnx(solutionFile)) return true;

            var solutionDirectory = Path.GetDirectoryName(solutionFile);
            var relativePath = SolutionMutator.GetRelativePath(solutionDirectory, shprojFile).Replace('/', '\\');
            var projectGuid = FindProjectGuid(solutionFile, shprojFile);
            if (projectGuid == null) return false;

            var projitemsName = Path.GetFileNameWithoutExtension(shprojFile) + ".projitems";
            var projitemsRelative = Path.ChangeExtension(relativePath, ".projitems");
            var entry = $"\t\t{projectGuid}*{projitemsName}*{projitemsRelative} = {projitemsRelative}";

            var lines = File.ReadAllLines(solutionFile).ToList();
            if (lines.Any(line => line.Trim().StartsWith($"{projectGuid}*", StringComparison.OrdinalIgnoreCase)))
            {
                return true;
            }

            var sectionStart = lines.FindIndex(line => line.Trim().StartsWith("GlobalSection(SharedMSBuildProjectFiles)", StringComparison.OrdinalIgnoreCase));
            if (sectionStart < 0)
            {
                var globalIndex = lines.FindIndex(line => line.Trim() == "Global");
                var insertAt = globalIndex + 1;
                lines.Insert(insertAt, "\tGlobalSection(SharedMSBuildProjectFiles) = preSolution");
                lines.Insert(insertAt + 1, entry);
                lines.Insert(insertAt + 2, "\tEndGlobalSection");
            }
            else
            {
                var endSection = lines.FindIndex(sectionStart, line => line.Trim() == "EndGlobalSection");
                lines.Insert(endSection, entry);
            }

            File.WriteAllLines(solutionFile, lines);
            return true;
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
        /// directory, creating it from the embedded resource. Returns the
        /// full path. Port of VsixHelper.AddDynamicsCrmDevKitCliJsonAsync.
        /// </summary>
        public static async Task<string> EnsureDevKitCliJsonAsync(string solutionDirectory)
        {
            if (string.IsNullOrEmpty(solutionDirectory)) return null;
            var path = Path.Combine(solutionDirectory, Const.DynamicsCrmDevKitCliJson);
            if (File.Exists(path)) return path;

            var content = await TemplatePayload.ReadSharedResourceAsync(Const.DynamicsCrmDevKitCliJson);
            if (string.IsNullOrEmpty(content)) return null;
            Directory.CreateDirectory(solutionDirectory);
            await FileHelper.ForceWriteAllTextAsync(path, content);
            return path;
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

        private static async Task<bool> AddProjectToSlnAsync(string solutionFile, string projectFile, string projectTypeGuid)
        {
            var solutionDirectory = Path.GetDirectoryName(solutionFile);
            var relativePath = SolutionMutator.GetRelativePath(solutionDirectory, projectFile).Replace('/', '\\');
            var projectName = Path.GetFileNameWithoutExtension(projectFile);

            var lines = File.ReadAllLines(solutionFile).ToList();
            if (lines.Any(line => line.IndexOf(relativePath, StringComparison.OrdinalIgnoreCase) >= 0))
            {
                return false;
            }

            var projectGuid = $"{{{Guid.NewGuid().ToString().ToUpperInvariant()}}}";
            var projectBlock = new[]
            {
                $"Project(\"{projectTypeGuid}\") = \"{projectName}\", \"{relativePath}\", \"{projectGuid}\"",
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
                lines.Add($"\t\t{projectGuid}.Debug|Any CPU.ActiveCfg = Debug|Any CPU");
                lines.Add($"\t\t{projectGuid}.Debug|Any CPU.Build.0 = Debug|Any CPU");
                lines.Add($"\t\t{projectGuid}.Release|Any CPU.ActiveCfg = Release|Any CPU");
                lines.Add($"\t\t{projectGuid}.Release|Any CPU.Build.0 = Release|Any CPU");
                lines.Add("\tEndGlobalSection");
                lines.Add("EndGlobal");
            }
            else
            {
                lines.InsertRange(globalIndex, projectBlock);
                AddConfigurationEntries(lines, projectGuid);
            }

            await FileHelper.ForceWriteAllTextAsync(solutionFile, string.Join(Environment.NewLine, lines) + Environment.NewLine);
            return true;
        }

        private static void AddConfigurationEntries(System.Collections.Generic.List<string> lines, string projectGuid)
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
            var entries = new[]
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

        private static bool AddProjectToSlnx(string solutionFile, string projectFile, string projectTypeGuid)
        {
            var solutionDirectory = Path.GetDirectoryName(solutionFile);
            var relativePath = SolutionMutator.GetRelativePath(solutionDirectory, projectFile).Replace('\\', '/');

            var document = XDocument.Load(solutionFile);
            var projectElement = document.Root
                .Elements("Project")
                .FirstOrDefault(element => string.Equals((string)element.Attribute("Path"), relativePath, StringComparison.OrdinalIgnoreCase));
            if (projectElement != null) return false;

            projectElement = new XElement("Project",
                new XAttribute("Type", projectTypeGuid),
                new XAttribute("Id", Guid.NewGuid().ToString().ToUpperInvariant()),
                new XAttribute("Path", relativePath));
            document.Root.Add(projectElement);
            document.Save(solutionFile);
            return true;
        }

        private static string FindProjectGuid(string solutionFile, string projectFile)
        {
            var solutionDirectory = Path.GetDirectoryName(solutionFile);
            var relativePath = SolutionMutator.GetRelativePath(solutionDirectory, projectFile).Replace('/', '\\');
            foreach (var line in File.ReadAllLines(solutionFile))
            {
                if (line.Trim().StartsWith("Project(", StringComparison.Ordinal) &&
                    line.IndexOf(relativePath, StringComparison.OrdinalIgnoreCase) >= 0)
                {
                    var parts = line.Split(',');
                    if (parts.Length == 3)
                    {
                        return parts[2].Trim().Trim('"');
                    }
                }
            }
            return null;
        }
    }
}
