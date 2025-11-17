using System.Threading.Tasks;
using DynamicsCrm.DevKit.Analyzers.CrmAnalyzers;
using DynamicsCrm.DevKit.Analyzers;
using DynamicsCrm.DevKit.Analyzers.Test.Verifier;
using Microsoft.CodeAnalysis.Testing;
using Xunit;

namespace DynamicsCrm.DevKit.Analyzers.Test.Tests
{
    public class UpdateMessageShouldHaveFilteringAttributesAnalyzerTests
    {
        private const string AttributeStub = @"
using System;

[AttributeUsage(AttributeTargets.Class | AttributeTargets.Method, AllowMultiple = true, Inherited = false)]
public sealed class CrmPluginRegistrationAttribute : Attribute
{
    public CrmPluginRegistrationAttribute() { }

    public CrmPluginRegistrationAttribute(string message, string stage = null, int order = 0, string entity = null, string filteringAttributes = null) { }

    public string FilteringAttributes { get; set; }
}

[AttributeUsage(AttributeTargets.Class | AttributeTargets.Method, AllowMultiple = true, Inherited = false)]
public sealed class SomeOtherAttribute : Attribute
{
    public SomeOtherAttribute(string any) { }
}
";

        private static string WrapInClass(string attributeLine) => $@"
{AttributeStub}
public class PluginSample
{{
    {attributeLine}
    public void Execute() {{ }}
}}
";

        [Fact]
        public async Task NoDiagnostics_When_NotCrmPluginRegistration()
        {
            var src = WrapInClass(@"[SomeOtherAttribute(\"anything\")] ");
            await CSharpAnalyzerVerifier<UpdateMessageShouldHaveFilteringAttributesAnalyzer>.VerifyAnalyzerAsync(src);
        }

        [Fact]
        public async Task NoDiagnostics_When_NoArguments()
        {
            var src = WrapInClass(@"[CrmPluginRegistration]");
            await CSharpAnalyzerVerifier<UpdateMessageShouldHaveFilteringAttributesAnalyzer>.VerifyAnalyzerAsync(src);
        }

        [Fact]
        public async Task NoDiagnostics_When_Message_Not_UpdateFamily()
        {
            var src = WrapInClass(@"[CrmPluginRegistration(\"create\", null, 0, \"account\", \"\")] ");
            await CSharpAnalyzerVerifier<UpdateMessageShouldHaveFilteringAttributesAnalyzer>.VerifyAnalyzerAsync(src);
        }

        [Fact]
        public async Task NoDiagnostics_When_Update_Missing_FilteringAttributes()
        {
            var src = WrapInClass(@"[CrmPluginRegistration(\"update\")] ");
            await CSharpAnalyzerVerifier<UpdateMessageShouldHaveFilteringAttributesAnalyzer>.VerifyAnalyzerAsync(src);
        }

        [Fact]
        public async Task Diagnostic_When_Update_FilteringAttributes_Empty()
        {
            var src = WrapInClass(@"[CrmPluginRegistration(\"update\", null, 0, \"account\", [|\"\"\|\])] ");
            var expected = CSharpAnalyzerVerifier<UpdateMessageShouldHaveFilteringAttributesAnalyzer>
                .Diagnostic(DiagnosticDescriptors.UpdateMessageShouldHaveFilteringAttributes);
            await CSharpAnalyzerVerifier<UpdateMessageShouldHaveFilteringAttributesAnalyzer>.VerifyAnalyzerAsync(src, expected);
        }

        [Fact]
        public async Task Diagnostic_When_Update_FilteringAttributes_All_Asterisk()
        {
            var src = WrapInClass(@"[CrmPluginRegistration(\"update\", null, 0, \"account\", [|\"*\"|])] ");
            var expected = CSharpAnalyzerVerifier<UpdateMessageShouldHaveFilteringAttributesAnalyzer>
                .Diagnostic(DiagnosticDescriptors.UpdateMessageShouldNotUseAllAttributes);
            await CSharpAnalyzerVerifier<UpdateMessageShouldHaveFilteringAttributesAnalyzer>.VerifyAnalyzerAsync(src, expected);
        }

        [Fact]
        public async Task NoDiagnostics_When_Update_FilteringAttributes_NonEmpty()
        {
            var src = WrapInClass(@"[CrmPluginRegistration(\"update\", null, 0, \"account\", \"firstname,lastname\")] ");
            await CSharpAnalyzerVerifier<UpdateMessageShouldHaveFilteringAttributesAnalyzer>.VerifyAnalyzerAsync(src);
        }

        [Fact]
        public async Task Diagnostic_When_UpdateMultiple_FilteringAttributes_Empty()
        {
            var src = WrapInClass(@"[CrmPluginRegistration(\"updatemultiple\", null, 0, \"account\", [|\"\"\|\])] ");
            var expected = CSharpAnalyzerVerifier<UpdateMessageShouldHaveFilteringAttributesAnalyzer>
                .Diagnostic(DiagnosticDescriptors.UpdateMessageShouldHaveFilteringAttributes);
            await CSharpAnalyzerVerifier<UpdateMessageShouldHaveFilteringAttributesAnalyzer>.VerifyAnalyzerAsync(src, expected);
        }

        [Fact]
        public async Task Diagnostic_When_UpdateMultiple_FilteringAttributes_All_Asterisk()
        {
            var src = WrapInClass(@"[CrmPluginRegistration(\"updatemultiple\", null, 0, \"account\", [|\"*\"|])] ");
            var expected = CSharpAnalyzerVerifier<UpdateMessageShouldHaveFilteringAttributesAnalyzer>
                .Diagnostic(DiagnosticDescriptors.UpdateMessageShouldNotUseAllAttributes);
            await CSharpAnalyzerVerifier<UpdateMessageShouldHaveFilteringAttributesAnalyzer>.VerifyAnalyzerAsync(src, expected);
        }

        [Fact]
        public async Task Diagnostic_When_OnExternalUpdated_FilteringAttributes_Empty()
        {
            var src = WrapInClass(@"[CrmPluginRegistration(\"onexternalupdated\", null, 0, \"account\", [|\"\"\|\])] ");
            var expected = CSharpAnalyzerVerifier<UpdateMessageShouldHaveFilteringAttributesAnalyzer>
                .Diagnostic(DiagnosticDescriptors.UpdateMessageShouldHaveFilteringAttributes);
            await CSharpAnalyzerVerifier<UpdateMessageShouldHaveFilteringAttributesAnalyzer>.VerifyAnalyzerAsync(src, expected);
        }
    }
}
