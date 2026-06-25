using System;
using System.Collections.Generic;
using System.IO;

namespace DynamicsCrm.DevKit.Shared
{
    public static class TypeScriptBuildPathHelper
    {
        public static bool IsDeployableTypeScript(string filePath)
        {
            if (string.IsNullOrEmpty(filePath)) return false;

            var fileName = Path.GetFileName(filePath).ToLowerInvariant();
            var extension = Path.GetExtension(filePath).ToLowerInvariant();

            if (extension != ".ts") return false;

            return !fileName.EndsWith(".form.ts") &&
                   !fileName.EndsWith(".webapi.ts") &&
                   fileName != "optionset.ts";
        }

        public static string FindProjectRoot(string filePath)
        {
            var directory = Path.GetDirectoryName(filePath);
            while (!string.IsNullOrEmpty(directory))
            {
                if (File.Exists(Path.Combine(directory, "package.json"))) return directory;
                directory = Path.GetDirectoryName(directory);
            }

            return null;
        }

        public static string ResolveBuiltJavaScriptFile(string tsFilePath, string projectRoot)
        {
            foreach (var candidate in GetBuiltJavaScriptCandidates(tsFilePath, projectRoot))
            {
                if (File.Exists(candidate)) return candidate;
            }

            return null;
        }

        public static IEnumerable<string> GetBuiltJavaScriptCandidates(string tsFilePath, string projectRoot)
        {
            var fileNameWithoutExtension = Path.GetFileNameWithoutExtension(tsFilePath);
            var relativeTsPath = GetRelativePath(projectRoot, tsFilePath);
            if (!string.IsNullOrEmpty(relativeTsPath) && !relativeTsPath.StartsWith(".."))
            {
                yield return Path.Combine(projectRoot, "build", Path.ChangeExtension(relativeTsPath, ".js"));
            }

            // Backward compatibility for projects created before build output preserved source folders.
            yield return Path.Combine(projectRoot, "build", fileNameWithoutExtension + ".js");

            // Legacy fallback for older hand-written build scripts.
            yield return Path.ChangeExtension(tsFilePath, ".js");
        }

        public static List<string> GetWebResourcePathCandidates(string sourceFilePath, string deployFilePath, string solutionFolder)
        {
            var candidates = new List<string>();
            AddRelativeCandidate(candidates, deployFilePath, solutionFolder);

            if (IsDeployableTypeScript(sourceFilePath))
            {
                var projectRoot = FindProjectRoot(sourceFilePath);
                if (!string.IsNullOrEmpty(projectRoot))
                {
                    var legacyPath = Path.Combine(projectRoot, "build", Path.GetFileNameWithoutExtension(sourceFilePath) + ".js");
                    AddRelativeCandidate(candidates, legacyPath, solutionFolder);
                }
            }

            return candidates;
        }

        public static string GetRelativePath(string rootPath, string filePath)
        {
            if (string.IsNullOrEmpty(rootPath) || string.IsNullOrEmpty(filePath)) return null;

            var root = Path.GetFullPath(rootPath);
            if (!root.EndsWith(Path.DirectorySeparatorChar.ToString()) &&
                !root.EndsWith(Path.AltDirectorySeparatorChar.ToString()))
            {
                root += Path.DirectorySeparatorChar;
            }

            var rootUri = new Uri(root);
            var fileUri = new Uri(Path.GetFullPath(filePath));
            if (!string.Equals(rootUri.Scheme, fileUri.Scheme, StringComparison.OrdinalIgnoreCase))
            {
                return null;
            }

            return Uri.UnescapeDataString(rootUri.MakeRelativeUri(fileUri).ToString())
                .Replace('/', Path.DirectorySeparatorChar);
        }

        private static void AddRelativeCandidate(List<string> candidates, string filePath, string solutionFolder)
        {
            if (string.IsNullOrEmpty(filePath) || string.IsNullOrEmpty(solutionFolder)) return;
            if (!filePath.StartsWith(solutionFolder, StringComparison.OrdinalIgnoreCase)) return;

            var relativePath = filePath.Substring(solutionFolder.Length);
            if (candidates.Exists(candidate => string.Equals(candidate, relativePath, StringComparison.OrdinalIgnoreCase))) return;

            candidates.Add(relativePath);
        }
    }
}
