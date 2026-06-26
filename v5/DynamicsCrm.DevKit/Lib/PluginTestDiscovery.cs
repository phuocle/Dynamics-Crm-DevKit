using Community.VisualStudio.Toolkit;
using Microsoft.VisualStudio.Shell;
using System;
using System.Collections.Concurrent;
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
        private static readonly Regex ClassRegex = new Regex(@"\b(?<modifiers>(?:(?:public|internal|private|protected|abstract|sealed|partial|static)\s+)*)class\s+(?<name>[A-Za-z_][A-Za-z0-9_]*)(?:\s*:\s*(?<bases>[^{]+))?", RegexOptions.Compiled);
        private static readonly Regex RegistrationRegex = new Regex(@"\[CrmPluginRegistration\((?<args>[\s\S]*?)\)\]", RegexOptions.Compiled);
        private static readonly ConcurrentDictionary<string, List<ClassDeclaration>> ReferencedClassCache = new ConcurrentDictionary<string, List<ClassDeclaration>>();

        internal static async Task<List<PluginTestCandidate>> GetTestCandidatesAsync(EnvDTE.Project testProject)
        {
            using (ItemTemplateTelemetry.Start(nameof(PluginTestDiscovery), "test", "GetTestCandidates"))
            {
                var solutionFolder = await VsixHelper.GetSolutionFolderAsync();
                if (string.IsNullOrWhiteSpace(solutionFolder) || !Directory.Exists(solutionFolder))
                    return new List<PluginTestCandidate>();

                await ThreadHelper.JoinableTaskFactory.SwitchToMainThreadAsync();
                var referencedProjectFolders = GetReferencedProjectFolders(testProject);
                if (referencedProjectFolders.Count == 0)
                    return new List<PluginTestCandidate>();
                var testProjectFolder = GetProjectFolder(testProject);

                return await Task.Run(() =>
                {
                    var sourceFiles = referencedProjectFolders.SelectMany(GetCSharpFiles).Distinct(StringComparer.OrdinalIgnoreCase).ToList();
                    var classes = GetReferencedClasses(sourceFiles);
                    var testClassNames = GetTestClassNames(testProjectFolder);
                    var classMap = classes
                        .GroupBy(@class => @class.FullClassName, StringComparer.Ordinal)
                        .ToDictionary(group => group.Key, group => group.First(), StringComparer.Ordinal);

                    return classes
                        .Where(@class => !@class.IsAbstract)
                        .Where(@class => InheritsFrom(@class, classMap, "IPlugin", "Microsoft.Xrm.Sdk.IPlugin") ||
                                         InheritsFrom(@class, classMap, "CodeActivity", "System.Activities.CodeActivity"))
                        .Select(CreateCandidate)
                        .Where(candidate => !HasConventionTestClass(candidate, testClassNames))
                        .OrderBy(candidate => candidate.FullClassName)
                        .ToList();
                });
            }
        }

        private static List<ClassDeclaration> GetReferencedClasses(List<string> sourceFiles)
        {
            using (ItemTemplateTelemetry.Start(nameof(PluginTestDiscovery), "test", "ReadReferencedClasses", $"files={sourceFiles.Count}"))
            {
                var cacheKey = GetSourceFilesCacheKey(sourceFiles);
                if (ReferencedClassCache.TryGetValue(cacheKey, out var cachedClasses))
                {
                    ItemTemplateTelemetry.Log(nameof(PluginTestDiscovery), "test", "ReadReferencedClasses", $"cacheHit classes={cachedClasses.Count}");
                    return cachedClasses;
                }

                var classes = sourceFiles.SelectMany(ReadClassDeclarations).ToList();
                ReferencedClassCache[cacheKey] = classes;
                return classes;
            }
        }

        private static string GetSourceFilesCacheKey(List<string> sourceFiles)
        {
            long latestWriteUtc = 0;
            long totalLength = 0;
            foreach (var sourceFile in sourceFiles)
            {
                try
                {
                    var info = new FileInfo(sourceFile);
                    latestWriteUtc = Math.Max(latestWriteUtc, info.LastWriteTimeUtc.Ticks);
                    totalLength += info.Length;
                }
                catch
                {
                }
            }

            return $"{sourceFiles.Count}:{latestWriteUtc}:{totalLength}:{string.Join("|", sourceFiles.OrderBy(path => path, StringComparer.OrdinalIgnoreCase))}";
        }

        private static string GetProjectFolder(EnvDTE.Project project)
        {
            ThreadHelper.ThrowIfNotOnUIThread();
            var projectFile = project?.FullName;
            return !string.IsNullOrWhiteSpace(projectFile) && File.Exists(projectFile)
                ? Path.GetDirectoryName(projectFile)
                : null;
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

        private static HashSet<string> GetTestClassNames(string testProjectFolder)
        {
            if (string.IsNullOrWhiteSpace(testProjectFolder) || !Directory.Exists(testProjectFolder))
                return new HashSet<string>(StringComparer.Ordinal);

            return GetCSharpFiles(testProjectFolder)
                .SelectMany(ReadClassDeclarations)
                .Select(@class => @class.ClassName)
                .ToHashSet(StringComparer.Ordinal);
        }

        private static bool HasConventionTestClass(PluginTestCandidate candidate, HashSet<string> testClassNames)
        {
            if (candidate == null || string.IsNullOrWhiteSpace(candidate.ClassName)) return false;
            return testClassNames.Contains($"{candidate.ClassName}Test");
        }

        private static IEnumerable<ClassDeclaration> ReadClassDeclarations(string sourceFile)
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

            foreach (Match classMatch in ClassRegex.Matches(source))
            {
                var className = classMatch.Groups["name"].Value;
                var ns = FindNamespaceBeforeClass(source, classMatch.Index);
                if (string.IsNullOrWhiteSpace(ns)) continue;

                yield return new ClassDeclaration
                {
                    BaseTypes = SplitBaseTypes(classMatch.Groups["bases"].Value).ToList(),
                    ClassName = className,
                    FullClassName = $"{ns}.{className}",
                    IsAbstract = classMatch.Groups["modifiers"].Value.IndexOf("abstract", StringComparison.Ordinal) >= 0,
                    Namespace = ns,
                    RegistrationArgs = FindRegistrationBeforeClass(source, classMatch.Index)?.Groups["args"].Value,
                    SourceFile = sourceFile
                };
            }
        }

        private static PluginTestCandidate CreateCandidate(ClassDeclaration @class)
        {
            var args = @class.RegistrationArgs ?? string.Empty;
            var message = ReadStringArgument(args, 0);
            var entityLogicalName = ReadStringArgument(args, 1);
            var stage = ReadEnumValue(args, "StageEnum");
            var executionMode = ReadEnumValue(args, "ExecutionModeEnum");
            var supportsGuardTest =
                !string.IsNullOrWhiteSpace(message) &&
                !string.IsNullOrWhiteSpace(entityLogicalName) &&
                !string.IsNullOrWhiteSpace(stage) &&
                !string.IsNullOrWhiteSpace(executionMode);

            var candidate = new PluginTestCandidate
            {
                ClassName = @class.ClassName,
                EntityLogicalName = entityLogicalName,
                EntitySchemaName = entityLogicalName,
                ExecutionMode = executionMode,
                FullClassName = @class.FullClassName,
                HasPostImage = args.IndexOf("ImageTypeEnum.PostImage", StringComparison.Ordinal) >= 0,
                HasPreImage = args.IndexOf("ImageTypeEnum.PreImage", StringComparison.Ordinal) >= 0,
                MessageName = message,
                Namespace = @class.Namespace,
                SourceFile = @class.SourceFile,
                Stage = stage,
                SupportsGuardTest = supportsGuardTest
            };
            candidate.DisplayName = supportsGuardTest
                ? $"{candidate.FullClassName} ({candidate.Stage}, {candidate.MessageName}, {candidate.EntityLogicalName}, {candidate.ExecutionMode})"
                : candidate.FullClassName;
            return candidate;
        }

        private static Match FindRegistrationBeforeClass(string source, int classIndex)
        {
            Match found = null;
            foreach (Match match in RegistrationRegex.Matches(source))
            {
                if (match.Index > classIndex) break;
                var between = source.Substring(match.Index + match.Length, classIndex - match.Index - match.Length);
                if (Regex.IsMatch(between, @"\bclass\b")) continue;
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

        private static IEnumerable<string> SplitBaseTypes(string bases)
        {
            if (string.IsNullOrWhiteSpace(bases)) yield break;

            var depth = 0;
            var start = 0;
            for (var i = 0; i <= bases.Length; i++)
            {
                if (i == bases.Length || (bases[i] == ',' && depth == 0))
                {
                    var baseType = NormalizeTypeName(bases.Substring(start, i - start));
                    if (!string.IsNullOrWhiteSpace(baseType))
                        yield return baseType;
                    start = i + 1;
                    continue;
                }

                if (bases[i] == '<') depth++;
                else if (bases[i] == '>' && depth > 0) depth--;
            }
        }

        private static string NormalizeTypeName(string typeName)
        {
            var normalized = (typeName ?? string.Empty).Trim();
            var genericIndex = normalized.IndexOf("<", StringComparison.Ordinal);
            if (genericIndex >= 0)
                normalized = normalized.Substring(0, genericIndex).Trim();
            if (normalized.StartsWith("global::", StringComparison.Ordinal))
                normalized = normalized.Substring("global::".Length);
            return normalized;
        }

        private static bool InheritsFrom(ClassDeclaration @class, Dictionary<string, ClassDeclaration> classMap, string shortName, string fullName)
        {
            return InheritsFrom(@class, classMap, shortName, fullName, new HashSet<string>(StringComparer.Ordinal));
        }

        private static bool InheritsFrom(ClassDeclaration @class, Dictionary<string, ClassDeclaration> classMap, string shortName, string fullName, HashSet<string> visited)
        {
            if (@class == null || !visited.Add(@class.FullClassName)) return false;
            foreach (var baseType in @class.BaseTypes)
            {
                if (IsSameType(baseType, shortName, fullName)) return true;
                if (TryGetClassDeclaration(baseType, @class.Namespace, classMap, out var baseClass) &&
                    InheritsFrom(baseClass, classMap, shortName, fullName, visited))
                {
                    return true;
                }
            }
            return false;
        }

        private static bool IsSameType(string typeName, string shortName, string fullName)
        {
            return string.Equals(typeName, shortName, StringComparison.Ordinal) ||
                   string.Equals(typeName, fullName, StringComparison.Ordinal) ||
                   typeName.EndsWith($".{shortName}", StringComparison.Ordinal);
        }

        private static bool TryGetClassDeclaration(string typeName, string currentNamespace, Dictionary<string, ClassDeclaration> classMap, out ClassDeclaration declaration)
        {
            declaration = null;
            if (classMap.TryGetValue(typeName, out declaration)) return true;
            if (!typeName.Contains(".") &&
                !string.IsNullOrWhiteSpace(currentNamespace) &&
                classMap.TryGetValue($"{currentNamespace}.{typeName}", out declaration))
            {
                return true;
            }

            var matches = classMap.Values
                .Where(@class => string.Equals(@class.ClassName, typeName, StringComparison.Ordinal))
                .Take(2)
                .ToList();
            if (matches.Count == 1)
            {
                declaration = matches[0];
                return true;
            }
            return false;
        }

        private static string ReadStringArgument(string args, int index)
        {
            var matches = Regex.Matches(args ?? string.Empty, @"""(?<value>[^""]*)""");
            return matches.Count > index ? matches[index].Groups["value"].Value : string.Empty;
        }

        private static string ReadEnumValue(string args, string enumName)
        {
            var match = Regex.Match(args ?? string.Empty, $@"\b{Regex.Escape(enumName)}\.(?<value>[A-Za-z_][A-Za-z0-9_]*)");
            return match.Success ? match.Groups["value"].Value : string.Empty;
        }

        private sealed class ClassDeclaration
        {
            public List<string> BaseTypes { get; set; } = new List<string>();
            public string ClassName { get; set; }
            public string FullClassName { get; set; }
            public bool IsAbstract { get; set; }
            public string Namespace { get; set; }
            public string RegistrationArgs { get; set; }
            public string SourceFile { get; set; }
        }
    }
}
