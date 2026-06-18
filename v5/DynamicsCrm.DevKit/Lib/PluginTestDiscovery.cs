using Community.VisualStudio.Toolkit;
using Microsoft.VisualStudio.Shell;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Lib
{
    internal static class PluginTestDiscovery
    {
        private static readonly Regex NamespaceRegex = new Regex(@"\bnamespace\s+(?<name>[A-Za-z_][A-Za-z0-9_.]*)", RegexOptions.Compiled);
        private static readonly Regex ClassRegex = new Regex(@"\bclass\s+(?<name>[A-Za-z_][A-Za-z0-9_]*)\s*:\s*(?<bases>[^{]+)", RegexOptions.Compiled);
        private static readonly Regex RegistrationRegex = new Regex(@"\[CrmPluginRegistration\((?<args>[\s\S]*?)\)\]", RegexOptions.Compiled);

        internal static async Task<List<PluginTestCandidate>> GetMissingGuardTestsAsync(EnvDTE.Project testProject)
        {
            var solutionFolder = await VsixHelper.GetSolutionFolderAsync();
            if (string.IsNullOrWhiteSpace(solutionFolder) || !Directory.Exists(solutionFolder))
                return new List<PluginTestCandidate>();

            await ThreadHelper.JoinableTaskFactory.SwitchToMainThreadAsync();
            var referencedProjectFolders = GetReferencedProjectFolders(testProject);
            if (referencedProjectFolders.Count == 0)
                return new List<PluginTestCandidate>();

            var testProjectFolder = testProject?.FullName != null ? Path.GetDirectoryName(testProject.FullName) : null;
            var testProjectFolders = new[] { testProjectFolder }
                .Where(path => !string.IsNullOrWhiteSpace(path) && Directory.Exists(path))
                .Distinct(StringComparer.OrdinalIgnoreCase)
                .ToList();

            return await Task.Run(() =>
            {
                var sourceFiles = referencedProjectFolders.SelectMany(GetCSharpFiles).Distinct(StringComparer.OrdinalIgnoreCase).ToList();
                var plugins = sourceFiles
                    .SelectMany(ReadPluginCandidates)
                    .OrderBy(candidate => candidate.FullClassName)
                    .ToList();

                var testSources = GetTestSources(solutionFolder, testProjectFolders);
                return plugins
                    .Where(plugin => !HasGuardTest(plugin, testSources))
                    .ToList();
            });
        }

        private static List<string> GetReferencedProjectFolders(EnvDTE.Project testProject)
        {
            ThreadHelper.ThrowIfNotOnUIThread();
            var folders = new List<string>();
            var testProjectFile = testProject?.FullName;
            if (string.IsNullOrWhiteSpace(testProjectFile) || !File.Exists(testProjectFile))
                return folders;

            var projectFolder = Path.GetDirectoryName(testProjectFile);
            try
            {
                var content = File.ReadAllText(testProjectFile);
                foreach (Match match in Regex.Matches(content, @"<ProjectReference\s+Include=""(?<include>[^""]+)""", RegexOptions.IgnoreCase))
                {
                    var include = match.Groups["include"].Value;
                    var projectPath = Path.GetFullPath(Path.Combine(projectFolder, include));
                    var referencedFolder = Path.GetDirectoryName(projectPath);
                    if (!string.IsNullOrWhiteSpace(referencedFolder) && Directory.Exists(referencedFolder))
                        folders.Add(referencedFolder);
                }
            }
            catch
            {
            }

            return folders.Distinct(StringComparer.OrdinalIgnoreCase).ToList();
        }

        private static IEnumerable<string> GetCSharpFiles(string solutionFolder)
        {
            return Directory.EnumerateFiles(solutionFolder, "*.cs", SearchOption.AllDirectories)
                .Where(path => !IsIgnoredPath(path))
                .ToList();
        }

        private static bool IsIgnoredPath(string path)
        {
            var normalized = path.Replace(Path.AltDirectorySeparatorChar, Path.DirectorySeparatorChar);
            return normalized.IndexOf($"{Path.DirectorySeparatorChar}bin{Path.DirectorySeparatorChar}", StringComparison.OrdinalIgnoreCase) >= 0 ||
                   normalized.IndexOf($"{Path.DirectorySeparatorChar}obj{Path.DirectorySeparatorChar}", StringComparison.OrdinalIgnoreCase) >= 0 ||
                   normalized.IndexOf($"{Path.DirectorySeparatorChar}.vs{Path.DirectorySeparatorChar}", StringComparison.OrdinalIgnoreCase) >= 0 ||
                   normalized.IndexOf($"{Path.DirectorySeparatorChar}packages{Path.DirectorySeparatorChar}", StringComparison.OrdinalIgnoreCase) >= 0;
        }

        private static IEnumerable<PluginTestCandidate> ReadPluginCandidates(string sourceFile)
        {
            string source;
            try
            {
                source = File.ReadAllText(sourceFile);
            }
            catch
            {
                yield break;
            }

            if (source.IndexOf("CrmPluginRegistration", StringComparison.Ordinal) < 0 ||
                source.IndexOf("IPlugin", StringComparison.Ordinal) < 0)
            {
                yield break;
            }

            foreach (Match classMatch in ClassRegex.Matches(source))
            {
                var bases = classMatch.Groups["bases"].Value;
                if (bases.IndexOf("IPlugin", StringComparison.Ordinal) < 0) continue;

                var registration = FindRegistrationBeforeClass(source, classMatch.Index);
                if (registration == null) continue;

                var args = registration.Groups["args"].Value;
                if (args.IndexOf("PluginType.Plugin", StringComparison.Ordinal) < 0) continue;

                var message = ReadStringArgument(args, 0);
                var entityLogicalName = ReadStringArgument(args, 1);
                var stage = ReadEnumValue(args, "StageEnum");
                var executionMode = ReadEnumValue(args, "ExecutionModeEnum");

                if (string.IsNullOrWhiteSpace(message) ||
                    string.IsNullOrWhiteSpace(entityLogicalName) ||
                    string.IsNullOrWhiteSpace(stage) ||
                    string.IsNullOrWhiteSpace(executionMode))
                {
                    continue;
                }

                var className = classMatch.Groups["name"].Value;
                var ns = FindNamespaceBeforeClass(source, classMatch.Index);
                if (string.IsNullOrWhiteSpace(ns)) continue;

                var candidate = new PluginTestCandidate
                {
                    ClassName = className,
                    EntityLogicalName = entityLogicalName,
                    EntitySchemaName = entityLogicalName,
                    ExecutionMode = executionMode,
                    FullClassName = $"{ns}.{className}",
                    HasPostImage = args.IndexOf("ImageTypeEnum.PostImage", StringComparison.Ordinal) >= 0,
                    HasPreImage = args.IndexOf("ImageTypeEnum.PreImage", StringComparison.Ordinal) >= 0,
                    IsPluginTtTemplate = source.IndexOf("DynamicsCrm.DevKit.Template: Plugin.tt", StringComparison.Ordinal) >= 0,
                    MessageName = message,
                    Namespace = ns,
                    SourceFile = sourceFile,
                    Stage = stage
                };
                candidate.DisplayName = $"{candidate.FullClassName} ({candidate.Stage}, {candidate.MessageName}, {candidate.EntityLogicalName}, {candidate.ExecutionMode})";
                yield return candidate;
            }
        }

        private static Match FindRegistrationBeforeClass(string source, int classIndex)
        {
            Match found = null;
            foreach (Match match in RegistrationRegex.Matches(source))
            {
                if (match.Index > classIndex) break;
                found = match;
            }
            return found;
        }

        private static string FindNamespaceBeforeClass(string source, int classIndex)
        {
            Match found = null;
            foreach (Match match in NamespaceRegex.Matches(source))
            {
                if (match.Index > classIndex) break;
                found = match;
            }
            return found?.Groups["name"].Value;
        }

        private static string ReadStringArgument(string args, int index)
        {
            var matches = Regex.Matches(args, @"""(?<value>[^""]*)""");
            return matches.Count > index ? matches[index].Groups["value"].Value : string.Empty;
        }

        private static string ReadEnumValue(string args, string enumName)
        {
            var match = Regex.Match(args, $@"\b{Regex.Escape(enumName)}\.(?<value>[A-Za-z_][A-Za-z0-9_]*)");
            return match.Success ? match.Groups["value"].Value : string.Empty;
        }

        private static List<string> GetTestSources(string solutionFolder, List<string> testProjectFolders)
        {
            var folders = testProjectFolders.Count > 0 ? testProjectFolders : new List<string> { solutionFolder };
            var sources = new List<string>();
            foreach (var folder in folders)
            {
                if (!Directory.Exists(folder)) continue;
                foreach (var file in Directory.EnumerateFiles(folder, "*.cs", SearchOption.AllDirectories).Where(path => !IsIgnoredPath(path)))
                {
                    try
                    {
                        sources.Add(File.ReadAllText(file));
                    }
                    catch
                    {
                    }
                }
            }
            return sources;
        }

        private static bool HasGuardTest(PluginTestCandidate plugin, IEnumerable<string> testSources)
        {
            return testSources.Any(source =>
                source.IndexOf(plugin.FullClassName, StringComparison.Ordinal) >= 0 &&
                source.IndexOf("AssertInvalidPluginContext", StringComparison.Ordinal) >= 0);
        }
    }
}
