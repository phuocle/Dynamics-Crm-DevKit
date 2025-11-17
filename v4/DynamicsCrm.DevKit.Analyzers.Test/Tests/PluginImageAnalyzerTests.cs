using System.Threading.Tasks;
using DynamicsCrm.DevKit.Analyzers.CrmAnalyzers;
using DynamicsCrm.DevKit.Analyzers.Test.Verifier;
using Xunit;

namespace DynamicsCrm.DevKit.Analyzers.Test.Tests
{
    public class PluginImageAnalyzerTests
    {
        private const string AttributeStub = @"
using System;

[AttributeUsage(AttributeTargets.Class | AttributeTargets.Method, AllowMultiple = true, Inherited = false)]
public sealed class CrmPluginRegistrationAttribute : Attribute
{
    public CrmPluginRegistrationAttribute(string message = null, object stage = null) { }
    public string Image1Attributes { get; set; }
    public string Image2Attributes { get; set; }
    public string Image3Attributes { get; set; }
    public string Image4Attributes { get; set; }
    public object Image1Type { get; set; }
    public object Image2Type { get; set; }
    public object Image3Type { get; set; }
    public object Image4Type { get; set; }
}
public enum StageEnum { PreValidation, PreOperation, PostOperation }
public enum ImageTypeEnum { PreImage, PostImage }
";

        private static string WrapWithAttribute(string attr) => $@"
{AttributeStub}
public class Sample
{{
    {attr}
    public void Execute() {{ }}
}}
";

        [Fact]
        public async Task PreCreate_With_PreImage_And_PostImage()
        {
            var attr = "[CrmPluginRegistration(\"create\", stage: StageEnum.PreOperation, {|DEVKIT1003:Image1Type = ImageTypeEnum.PreImage|}, Image1Attributes = \"name\", {|DEVKIT1003:Image2Type = ImageTypeEnum.PostImage|}, Image2Attributes = \"name\")]";
            var src = WrapWithAttribute(attr);
            await CSharpAnalyzerVerifier<PluginImageAnalyzer>.VerifyAnalyzerAsync(src);
        }

        [Fact]
        public async Task PostCreate_With_PreImage()
        {
            var attr = "[CrmPluginRegistration(\"create\", stage: StageEnum.PostOperation, {|DEVKIT1003:Image1Type = ImageTypeEnum.PreImage|}, Image1Attributes = \"name\")]";
            var src = WrapWithAttribute(attr);
            await CSharpAnalyzerVerifier<PluginImageAnalyzer>.VerifyAnalyzerAsync(src);
        }

        [Fact]
        public async Task PreUpdate_With_PostImage()
        {
            var attr = "[CrmPluginRegistration(\"update\", stage: StageEnum.PreOperation, {|DEVKIT1003:Image1Type = ImageTypeEnum.PostImage|}, Image1Attributes = \"name\")]";
            var src = WrapWithAttribute(attr);
            await CSharpAnalyzerVerifier<PluginImageAnalyzer>.VerifyAnalyzerAsync(src);
        }

        [Fact]
        public async Task PreDelete_With_PostImage()
        {
            var attr = "[CrmPluginRegistration(\"delete\", stage: StageEnum.PreOperation, {|DEVKIT1003:Image1Type = ImageTypeEnum.PostImage|}, Image1Attributes = \"name\")]";
            var src = WrapWithAttribute(attr);
            await CSharpAnalyzerVerifier<PluginImageAnalyzer>.VerifyAnalyzerAsync(src);
        }

        [Fact]
        public async Task PostDelete_With_PostImage()
        {
            var attr = "[CrmPluginRegistration(\"delete\", stage: StageEnum.PostOperation, {|DEVKIT1003:Image1Type = ImageTypeEnum.PostImage|}, Image1Attributes = \"name\")]";
            var src = WrapWithAttribute(attr);
            await CSharpAnalyzerVerifier<PluginImageAnalyzer>.VerifyAnalyzerAsync(src);
        }

        [Fact]
        public async Task Unsupported_Message_With_Pre_And_Post_Image()
        {
            var attr = "[CrmPluginRegistration(\"Deactivate\", stage: StageEnum.PreOperation, {|DEVKIT1003:Image1Type = ImageTypeEnum.PreImage|}, Image1Attributes = \"name\", {|DEVKIT1003:Image2Type = ImageTypeEnum.PostImage|}, Image2Attributes = \"name\")]";
            var src = WrapWithAttribute(attr);
            await CSharpAnalyzerVerifier<PluginImageAnalyzer>.VerifyAnalyzerAsync(src);
        }

        [Fact]
        public async Task NoDiagnostics_When_No_Images()
        {
            var attr = "[CrmPluginRegistration(\"create\", stage: StageEnum.PreOperation)]";
            var src = WrapWithAttribute(attr);
            await CSharpAnalyzerVerifier<PluginImageAnalyzer>.VerifyAnalyzerAsync(src);
        }
    }
}
