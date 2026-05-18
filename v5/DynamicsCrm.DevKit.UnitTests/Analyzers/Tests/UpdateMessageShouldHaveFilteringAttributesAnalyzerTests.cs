using System.Threading.Tasks;
using DynamicsCrm.DevKit.Analyzers.CrmAnalyzers;
using DynamicsCrm.DevKit.Analyzers;
using DynamicsCrm.DevKit.UnitTests.Analyzers.Verifier;
using Microsoft.CodeAnalysis.Testing;
using Xunit;

namespace DynamicsCrm.DevKit.UnitTests.Analyzers.Tests
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

        #region Non-diagnostic tests

        [Fact]
        public async Task NoDiagnostics_When_NotCrmPluginRegistration()
        {
            var src = WrapInClass("[SomeOtherAttribute(\"anything\")] ");
            await CSharpAnalyzerVerifier<UpdateMessageShouldHaveFilteringAttributesAnalyzer>.VerifyAnalyzerAsync(src);
        }

        [Fact]
        public async Task NoDiagnostics_When_NoArguments()
        {
            var src = WrapInClass("[CrmPluginRegistration]");
            await CSharpAnalyzerVerifier<UpdateMessageShouldHaveFilteringAttributesAnalyzer>.VerifyAnalyzerAsync(src);
        }

        [Fact]
        public async Task NoDiagnostics_When_Update_Missing_FilteringAttributes()
        {
            var src = WrapInClass("[CrmPluginRegistration(\"update\")] ");
            await CSharpAnalyzerVerifier<UpdateMessageShouldHaveFilteringAttributesAnalyzer>.VerifyAnalyzerAsync(src);
        }

        [Fact]
        public async Task NoDiagnostics_When_Update_FilteringAttributes_NonEmpty()
        {
            var src = WrapInClass("[CrmPluginRegistration(\"update\", null, 0, \"account\", \"firstname,lastname\")] ");
            await CSharpAnalyzerVerifier<UpdateMessageShouldHaveFilteringAttributesAnalyzer>.VerifyAnalyzerAsync(src);
        }

        [Fact]
        public async Task NoDiagnostics_When_Create_FilteringAttributes_NonEmpty()
        {
            var src = WrapInClass("[CrmPluginRegistration(\"create\", null, 0, \"account\", \"firstname,lastname\")] ");
            await CSharpAnalyzerVerifier<UpdateMessageShouldHaveFilteringAttributesAnalyzer>.VerifyAnalyzerAsync(src);
        }

        [Fact]
        public async Task NoDiagnostics_When_Message_Not_CreateOrUpdateFamily()
        {
            // Delete, Retrieve, RetrieveMultiple should not trigger
            var src = WrapInClass("[CrmPluginRegistration(\"delete\", null, 0, \"account\", \"\")] ");
            await CSharpAnalyzerVerifier<UpdateMessageShouldHaveFilteringAttributesAnalyzer>.VerifyAnalyzerAsync(src);
        }

        #endregion

        #region Create messages - Warning severity

        [Fact]
        public async Task Diagnostic_When_Create_FilteringAttributes_Empty()
        {
            var src = WrapInClass("[CrmPluginRegistration(\"create\", null, 0, \"account\", \"\")] ");
            var expected = CSharpAnalyzerVerifier<UpdateMessageShouldHaveFilteringAttributesAnalyzer>
                .Diagnostic(DiagnosticDescriptors.CreateMessageShouldHaveFilteringAttributes)
                .WithSpan(23, 58, 23, 60);
            await CSharpAnalyzerVerifier<UpdateMessageShouldHaveFilteringAttributesAnalyzer>.VerifyAnalyzerAsync(src, expected);
        }

        [Fact]
        public async Task Diagnostic_When_Create_FilteringAttributes_All_Asterisk()
        {
            var src = WrapInClass("[CrmPluginRegistration(\"create\", null, 0, \"account\", \"*\")] ");
            var expected = CSharpAnalyzerVerifier<UpdateMessageShouldHaveFilteringAttributesAnalyzer>
                .Diagnostic(DiagnosticDescriptors.CreateMessageShouldNotUseAllAttributes)
                .WithSpan(23, 58, 23, 61);
            await CSharpAnalyzerVerifier<UpdateMessageShouldHaveFilteringAttributesAnalyzer>.VerifyAnalyzerAsync(src, expected);
        }

        [Fact]
        public async Task Diagnostic_When_CreateMultiple_FilteringAttributes_Empty()
        {
            var src = WrapInClass("[CrmPluginRegistration(\"createmultiple\", null, 0, \"account\", \"\")] ");
            var expected = CSharpAnalyzerVerifier<UpdateMessageShouldHaveFilteringAttributesAnalyzer>
                .Diagnostic(DiagnosticDescriptors.CreateMessageShouldHaveFilteringAttributes)
                .WithSpan(23, 66, 23, 68);
            await CSharpAnalyzerVerifier<UpdateMessageShouldHaveFilteringAttributesAnalyzer>.VerifyAnalyzerAsync(src, expected);
        }

        [Fact]
        public async Task Diagnostic_When_OnExternalCreated_FilteringAttributes_Empty()
        {
            var src = WrapInClass("[CrmPluginRegistration(\"onexternalcreated\", null, 0, \"account\", \"\")] ");
            var expected = CSharpAnalyzerVerifier<UpdateMessageShouldHaveFilteringAttributesAnalyzer>
                .Diagnostic(DiagnosticDescriptors.CreateMessageShouldHaveFilteringAttributes)
                .WithSpan(23, 69, 23, 71);
            await CSharpAnalyzerVerifier<UpdateMessageShouldHaveFilteringAttributesAnalyzer>.VerifyAnalyzerAsync(src, expected);
        }

        #endregion

        #region Update messages - Error severity

        [Fact]
        public async Task Diagnostic_When_Update_FilteringAttributes_Empty()
        {
            var src = WrapInClass("[CrmPluginRegistration(\"update\", null, 0, \"account\", \"\")] ");
            var expected = CSharpAnalyzerVerifier<UpdateMessageShouldHaveFilteringAttributesAnalyzer>
                .Diagnostic(DiagnosticDescriptors.UpdateMessageShouldHaveFilteringAttributes)
                .WithSpan(23, 58, 23, 60);
            await CSharpAnalyzerVerifier<UpdateMessageShouldHaveFilteringAttributesAnalyzer>.VerifyAnalyzerAsync(src, expected);
        }

        [Fact]
        public async Task Diagnostic_When_Update_FilteringAttributes_All_Asterisk()
        {
            var src = WrapInClass("[CrmPluginRegistration(\"update\", null, 0, \"account\", \"*\")] ");
            var expected = CSharpAnalyzerVerifier<UpdateMessageShouldHaveFilteringAttributesAnalyzer>
                .Diagnostic(DiagnosticDescriptors.UpdateMessageShouldNotUseAllAttributes)
                .WithSpan(23, 58, 23, 61);
            await CSharpAnalyzerVerifier<UpdateMessageShouldHaveFilteringAttributesAnalyzer>.VerifyAnalyzerAsync(src, expected);
        }

        [Fact]
        public async Task Diagnostic_When_UpdateMultiple_FilteringAttributes_Empty()
        {
            var src = WrapInClass("[CrmPluginRegistration(\"updatemultiple\", null, 0, \"account\", \"\")] ");
            var expected = CSharpAnalyzerVerifier<UpdateMessageShouldHaveFilteringAttributesAnalyzer>
                .Diagnostic(DiagnosticDescriptors.UpdateMessageShouldHaveFilteringAttributes)
                .WithSpan(23, 66, 23, 68);
            await CSharpAnalyzerVerifier<UpdateMessageShouldHaveFilteringAttributesAnalyzer>.VerifyAnalyzerAsync(src, expected);
        }

        [Fact]
        public async Task Diagnostic_When_UpdateMultiple_FilteringAttributes_All_Asterisk()
        {
            var src = WrapInClass("[CrmPluginRegistration(\"updatemultiple\", null, 0, \"account\", \"*\")] ");
            var expected = CSharpAnalyzerVerifier<UpdateMessageShouldHaveFilteringAttributesAnalyzer>
                .Diagnostic(DiagnosticDescriptors.UpdateMessageShouldNotUseAllAttributes)
                .WithSpan(23, 66, 23, 69);
            await CSharpAnalyzerVerifier<UpdateMessageShouldHaveFilteringAttributesAnalyzer>.VerifyAnalyzerAsync(src, expected);
        }

        [Fact]
        public async Task Diagnostic_When_OnExternalUpdated_FilteringAttributes_Empty()
        {
            var src = WrapInClass("[CrmPluginRegistration(\"onexternalupdated\", null, 0, \"account\", \"\")] ");
            var expected = CSharpAnalyzerVerifier<UpdateMessageShouldHaveFilteringAttributesAnalyzer>
                .Diagnostic(DiagnosticDescriptors.UpdateMessageShouldHaveFilteringAttributes)
                .WithSpan(23, 69, 23, 71);
            await CSharpAnalyzerVerifier<UpdateMessageShouldHaveFilteringAttributesAnalyzer>.VerifyAnalyzerAsync(src, expected);
        }

        #endregion

        #region Named Argument Tests

        [Fact]
        public async Task Diagnostic_When_Update_NamedArgs_FilteringAttributes_Empty()
        {
            var src = WrapInClass("[CrmPluginRegistration(message: \"update\", [|filteringAttributes: \"\"|])]");
            await CSharpAnalyzerVerifier<UpdateMessageShouldHaveFilteringAttributesAnalyzer>.VerifyAnalyzerAsync(src);
        }

        [Fact]
        public async Task Diagnostic_When_Create_NamedArgs_FilteringAttributes_Asterisk()
        {
            var src = WrapInClass("[CrmPluginRegistration(message: \"create\", [|filteringAttributes: \"*\"|])]");
            await CSharpAnalyzerVerifier<UpdateMessageShouldHaveFilteringAttributesAnalyzer>.VerifyAnalyzerAsync(src);
        }

        [Fact]
        public async Task NoDiagnostics_When_Message_Uses_Nameof_Fallback()
        {
            var src = $@"
{AttributeStub}
public class PluginSample
{{
    [CrmPluginRegistration(message: nameof(update), filteringAttributes: """")]
    public void Execute() {{ }}

    private void update() {{ }}
}}
";
            await CSharpAnalyzerVerifier<UpdateMessageShouldHaveFilteringAttributesAnalyzer>.VerifyAnalyzerAsync(src);
        }

        #endregion
    }
}
