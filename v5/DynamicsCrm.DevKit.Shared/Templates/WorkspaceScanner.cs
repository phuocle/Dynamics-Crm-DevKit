using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Templates.Models;
using System;
using System.IO;
using System.Linq;
using System.Xml.Linq;

namespace DynamicsCrm.DevKit.Shared.Templates
{
    /// <summary>
    /// File-system discovery of workspace facts: walks up from a target
    /// directory to find the .sln/.slnx, derives the solution name,
    /// locates the Shared project (.shproj) and resolves the root
    /// namespace from the nearest .csproj. Replaces the EnvDTE-based
    /// lookups of VsixHelper (GetSolutionNameAsync, GetSharedProjectAsync).
    /// </summary>
    public static class WorkspaceScanner
    {
        public static WorkspaceContext Scan(string startDirectory)
        {
            var context = WorkspaceContext.Empty(startDirectory);
            if (string.IsNullOrEmpty(startDirectory) || !Directory.Exists(startDirectory)) return context;

            var directory = new DirectoryInfo(startDirectory);
            while (directory != null)
            {
                // Prefer .slnx (the modern Visual Studio default) over .sln
                // when both sit in the same folder — mixed folders usually
                // keep the live solution in .slnx and a stale .sln behind.
                var solution = Directory.GetFiles(directory.FullName, "*.slnx").FirstOrDefault();
                if (solution == null)
                {
                    solution = Directory.GetFiles(directory.FullName, "*.sln").FirstOrDefault();
                }
                if (solution != null)
                {
                    context.SolutionFile = solution;
                    context.SolutionName = Path.GetFileNameWithoutExtension(solution);
                    context.SolutionDirectory = directory.FullName;
                    break;
                }
                directory = directory.Parent;
            }

            context.SharedProjectName = FindSharedProjectName(context);
            context.SharedProjectNameSpace = context.SharedProjectName;
            context.SharedTestProjectName = $"{context.SolutionName}.{ProjectType.Shared}.{ProjectType.Test}";
            context.ProxyTypesProjectName = $"{context.SolutionName}.{ProjectType.ProxyTypes}";
            context.RootNamespace = FindRootNamespace(startDirectory);
            return context;
        }

        private static string FindSharedProjectName(WorkspaceContext context)
        {
            if (!context.HasSolution) return string.Empty;

            var shprojFiles = Directory.GetFiles(context.SolutionDirectory, "*.shproj", SearchOption.AllDirectories)
                .Where(path => path.IndexOf("\\bin\\", StringComparison.OrdinalIgnoreCase) < 0
                    && path.IndexOf("\\obj\\", StringComparison.OrdinalIgnoreCase) < 0)
                .ToList();
            if (shprojFiles.Count == 0) return string.Empty;

            var preferred = $"{context.SolutionName}.{ProjectType.Shared}";
            var preferredFile = shprojFiles.FirstOrDefault(path =>
                string.Equals(Path.GetFileNameWithoutExtension(path), preferred, StringComparison.OrdinalIgnoreCase));
            var chosen = preferredFile ?? shprojFiles.OrderBy(path => path.Length).First();
            return Path.GetFileNameWithoutExtension(chosen);
        }

        private static string FindRootNamespace(string startDirectory)
        {
            if (string.IsNullOrEmpty(startDirectory)) return string.Empty;

            var directory = new DirectoryInfo(startDirectory);
            while (directory != null)
            {
                var csproj = Directory.GetFiles(directory.FullName, "*.csproj").FirstOrDefault();
                if (csproj != null)
                {
                    var rootNamespace = ReadRootNamespace(csproj);
                    if (!string.IsNullOrEmpty(rootNamespace)) return rootNamespace;
                    return Path.GetFileNameWithoutExtension(csproj);
                }

                var shproj = Directory.GetFiles(directory.FullName, "*.shproj").FirstOrDefault();
                if (shproj != null)
                {
                    return Path.GetFileNameWithoutExtension(shproj);
                }

                directory = directory.Parent;
            }
            return string.Empty;
        }

        private static string ReadRootNamespace(string csprojPath)
        {
            try
            {
                var document = XDocument.Load(csprojPath);
                var rootNamespace = document.Root?
                    .Descendants("RootNamespace")
                    .FirstOrDefault(element => !element.HasElements)?
                    .Value?
                    .Trim();
                return rootNamespace;
            }
            catch
            {
                return null;
            }
        }
    }
}
