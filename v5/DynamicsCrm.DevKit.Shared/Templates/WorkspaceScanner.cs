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

            ApplyDerived(context, startDirectory);
            return context;
        }

        /// <summary>
        /// Builds the workspace context anchored at an explicitly named
        /// solution file (the --solution argument of 'devkit new'): the
        /// solution directory becomes the project parent and the Shared
        /// lookup root, regardless of which solution the walk-up scan
        /// would have picked. Callers validate existence first; a missing
        /// file yields the plain context of Scan.
        /// </summary>
        public static WorkspaceContext FromSolution(string solutionFile, string startDirectory)
        {
            var context = WorkspaceContext.Empty(startDirectory);
            if (string.IsNullOrEmpty(solutionFile) || !File.Exists(solutionFile))
            {
                ApplyDerived(context, startDirectory);
                return context;
            }

            context.SolutionFile = Path.GetFullPath(solutionFile);
            context.SolutionName = Path.GetFileNameWithoutExtension(context.SolutionFile);
            context.SolutionDirectory = Path.GetDirectoryName(context.SolutionFile);
            ApplyDerived(context, startDirectory);
            return context;
        }

        private static void ApplyDerived(WorkspaceContext context, string startDirectory)
        {
            // Without a solution the start directory doubles as the search
            // root — a create-only scaffold (no --solution) still finds a
            // Shared project scaffolded earlier at the same root.
            context.SharedProjectFile = FindSharedProjectFile(context);
            context.SharedProjectName = string.IsNullOrEmpty(context.SharedProjectFile)
                ? string.Empty
                : Path.GetFileNameWithoutExtension(context.SharedProjectFile);
            context.SharedProjectNameSpace = context.SharedProjectName;
            context.SharedTestProjectName = JoinNonEmpty(context.SolutionName, ProjectType.Shared.ToString(), ProjectType.Test.ToString());
            context.ProxyTypesProjectName = JoinNonEmpty(context.SolutionName, ProjectType.ProxyTypes.ToString());
            context.RootNamespace = FindRootNamespace(startDirectory);
        }

        /// <summary>
        /// Joins non-empty name parts with '.' so workspace-derived names
        /// never start with a stray dot when no solution is in play
        /// ("Contoso.Shared.Test" with a solution, "Shared.Test" without).
        /// </summary>
        private static string JoinNonEmpty(params string[] parts)
        {
            return string.Join(".", parts.Where(part => !string.IsNullOrEmpty(part)));
        }

        /// <summary>
        /// Locates the shared project (.shproj) of the workspace: the one
        /// named {SolutionName}.Shared when present, else the shallowest
        /// match. Returns the full path, or null when no shared project is
        /// around.
        /// </summary>
        private static string FindSharedProjectFile(WorkspaceContext context)
        {
            if (string.IsNullOrEmpty(context.SolutionDirectory) || !Directory.Exists(context.SolutionDirectory)) return null;

            var shprojFiles = Directory.GetFiles(context.SolutionDirectory, "*.shproj", SearchOption.AllDirectories)
                .Where(path => path.IndexOf("\\bin\\", StringComparison.OrdinalIgnoreCase) < 0
                    && path.IndexOf("\\obj\\", StringComparison.OrdinalIgnoreCase) < 0)
                .ToList();
            if (shprojFiles.Count == 0) return null;

            var preferred = $"{context.SolutionName}.{ProjectType.Shared}";
            var preferredFile = shprojFiles.FirstOrDefault(path =>
                string.Equals(Path.GetFileNameWithoutExtension(path), preferred, StringComparison.OrdinalIgnoreCase));
            return preferredFile ?? shprojFiles.OrderBy(path => path.Length).First();
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
