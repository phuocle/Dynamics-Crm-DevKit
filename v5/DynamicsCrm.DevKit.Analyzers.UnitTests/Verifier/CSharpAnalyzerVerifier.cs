using System.Threading;
using System.Threading.Tasks;
using System.Collections.Immutable;
using Microsoft.CodeAnalysis;
using Microsoft.CodeAnalysis.Testing;
using Microsoft.CodeAnalysis.CSharp.Testing;
using Microsoft.CodeAnalysis.Diagnostics;
namespace DynamicsCrm.DevKit.Analyzers.UnitTests.Verifier
{
    public static class CSharpAnalyzerVerifier<TAnalyzer>
        where TAnalyzer : DiagnosticAnalyzer, new()
    {
        public static DiagnosticResult Diagnostic(string diagnosticId)
            => new DiagnosticResult(diagnosticId, DiagnosticSeverity.Warning);

        public static DiagnosticResult Diagnostic(DiagnosticDescriptor descriptor)
            => new DiagnosticResult(descriptor);

        public static async Task VerifyAnalyzerAsync(string source, params DiagnosticResult[] expected)
        {
            var test = new Test { TestCode = source };
            // Keep Roslyn's reference-assembly resolver aligned with the package
            // already restored by this test project. The built-in Net48.Default
            // pins 1.0.2 and downloads it to %TEMP%\test-packages; a partial
            // extraction there can make PackageFolderReader fail with a missing
            // nuspec. Version 1.0.3 is the project's explicit dependency and is
            // restored before tests run.
            test.ReferenceAssemblies = new ReferenceAssemblies(
                "net48",
                new PackageIdentity("Microsoft.NETFramework.ReferenceAssemblies.net48", "1.0.3"),
                "build/.NETFramework/v4.8")
                .WithAssemblies(ImmutableArray.Create(
                    "mscorlib", "System", "System.Core", "System.Data",
                    "System.Data.DataSetExtensions", "System.Net.Http", "System.Xml", "System.Xml.Linq"));
            test.MarkupOptions = MarkupOptions.UseFirstDescriptor;
            test.SolutionTransforms.Add((solution, projectId) =>
            {
                var project = solution.GetProject(projectId)!;
                project = project.WithParseOptions(((Microsoft.CodeAnalysis.CSharp.CSharpParseOptions)project.ParseOptions!)
                    .WithLanguageVersion(Microsoft.CodeAnalysis.CSharp.LanguageVersion.Preview));
                return project.Solution;
            });

            test.ExpectedDiagnostics.AddRange(expected);
            await test.RunAsync(CancellationToken.None);
        }

        private class Test : CSharpAnalyzerTest<TAnalyzer, DefaultVerifier>
        {
        }
    }
}
