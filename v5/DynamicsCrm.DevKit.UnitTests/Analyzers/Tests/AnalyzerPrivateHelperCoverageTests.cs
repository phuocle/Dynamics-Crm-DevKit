using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using System.Reflection;
using System.Threading;
using DynamicsCrm.DevKit.Analyzers.CrmAnalyzers;
using Microsoft.CodeAnalysis;
using Microsoft.CodeAnalysis.CSharp;
using Microsoft.CodeAnalysis.CSharp.Syntax;
using Microsoft.CodeAnalysis.Diagnostics;
using Microsoft.CodeAnalysis.Text;
using Xunit;

namespace DynamicsCrm.DevKit.UnitTests.Analyzers.Tests
{
    public class AnalyzerPrivateHelperCoverageTests
    {
        [Fact]
        public void GetAwaiterGetResult_PrivateHelpers_Handle_Null_And_NonMember_Shapes()
        {
            var analyzerType = typeof(GetAwaiterGetResultAnalyzer);

            Assert.False((bool)InvokeStatic(
                analyzerType,
                "IsTaskType",
                new object[] { null }));

            Assert.False((bool)InvokeStatic(
                analyzerType,
                "IsGenericTaskType",
                new object[] { null }));

            Assert.False((bool)InvokeStatic(
                analyzerType,
                "IsGetAwaiterCall",
                SyntaxFactory.IdentifierName("value"),
                null,
                CancellationToken.None));

            Assert.False((bool)InvokeStatic(
                analyzerType,
                "IsGetAwaiterCall",
                SyntaxFactory.ParseExpression("GetAwaiter()"),
                null,
                CancellationToken.None));
        }

        [Fact]
        public void PluginImage_PrivateHelpers_Handle_Missing_And_NonLiteral_Arguments()
        {
            var analyzerType = typeof(PluginImageAnalyzer);

            var imageConfig = InvokeStatic(analyzerType, "GetImageConfig", null, 1);
            Assert.NotNull(imageConfig);

            Assert.Null(InvokeStatic(analyzerType, "GetStringValue", new object[] { null }));
            Assert.Null(InvokeStatic(analyzerType, "GetExpressionStringValue", new object[] { null }));

            var argument = SyntaxFactory.AttributeArgument(SyntaxFactory.IdentifierName("MessageName"));
            Assert.Equal("essageNam", InvokeStatic(analyzerType, "GetStringValue", argument));

            Assert.Equal("mageColumn", InvokeStatic(
                analyzerType,
                "GetExpressionStringValue",
                SyntaxFactory.IdentifierName("ImageColumns")));
        }

        [Fact]
        public void HttpTimeout_PrivateHelper_Returns_Null_For_Unparented_Creation()
        {
            var analyzer = new HttpTimeoutAnalyzer();
            var objectCreation = (ObjectCreationExpressionSyntax)SyntaxFactory.ParseExpression("new System.Net.Http.HttpClient()");

            Assert.Null(InvokeInstance(analyzer, "GetVariableName", objectCreation));
        }

        [Fact]
        public void KeepAlive_PrivateHelper_Returns_Null_For_Unparented_Creation()
        {
            var analyzer = new KeepAliveFalseAnalyzer();
            var objectCreation = (ObjectCreationExpressionSyntax)SyntaxFactory.ParseExpression("new System.Net.Http.HttpClient()");

            Assert.Null(InvokeInstance(analyzer, "GetVariableName", objectCreation));
        }

        [Fact]
        public void ParallelExecution_PrivateHelpers_Return_Defaults_For_Unknown_Methods()
        {
            var analyzerType = typeof(ParallelExecutionInPluginAnalyzer);

            Assert.False((bool)InvokeStatic(
                analyzerType,
                "IsParallelExecutionMethod",
                "Contoso.Worker",
                "Run"));

            Assert.Equal("Run()", InvokeStatic(
                analyzerType,
                "GetParallelPatternName",
                "Contoso.Worker",
                "Run"));
        }

        [Fact]
        public void ConsoleOutput_PrivateHelpers_Return_Defaults_For_NonConsole_Methods()
        {
            var analyzerType = typeof(ConsoleOutputAnalyzer);

            Assert.False((bool)InvokeStatic(
                analyzerType,
                "IsConsoleOutputMethod",
                "Contoso.Console",
                "WriteLine"));

            Assert.False((bool)InvokeStatic(
                analyzerType,
                "IsConsoleOutputMethod",
                "System.Console",
                "ReadLine"));

            Assert.Equal("Console.ReadLine()", InvokeStatic(
                analyzerType,
                "GetConsoleMethodName",
                "ReadLine"));
        }

        [Fact]
        public void InvalidPluginExecutionException_PrivateHelper_Returns_False_For_Null_Type()
        {
            Assert.False((bool)InvokeStatic(
                typeof(InvalidPluginExecutionExceptionAnalyzer),
                "IsInvalidPluginExecutionException",
                new object[] { null }));
        }

        [Fact]
        public void EntityReferenceMaybeNull_PrivateHelpers_Handle_Unassigned_MemberAccess()
        {
            var analyzerType = typeof(EntityReferenceMaybeNullAnalyzer);
            var memberAccess = (MemberAccessExpressionSyntax)SyntaxFactory.ParseExpression("entityRef.Id");

            Assert.False((bool)InvokeStatic(
                analyzerType,
                "IsLeftSideOfAssignment",
                memberAccess));

            Assert.False((bool)InvokeStatic(
                analyzerType,
                "IsInsideBinaryOrInterpolation",
                memberAccess));
        }

        [Fact]
        public void TracingServiceInCatch_PrivateHelper_Returns_False_For_Missing_Block()
        {
            Assert.False((bool)InvokeStatic(
                typeof(TracingServiceInCatchAnalyzer),
                "UsesTracingServiceInCatch",
                SyntaxFactory.CatchClause(),
                null));
        }

        [Fact]
        public void RetrieveMultiple_PrivateHelper_Returns_Null_For_NonConstant_Argument()
        {
            var syntaxTree = CSharpSyntaxTree.ParseText("[A(typeof(string))] class C { }");
            var argument = syntaxTree.GetRoot()
                .DescendantNodes()
                .OfType<AttributeArgumentSyntax>()
                .Single();
            var compilation = CSharpCompilation.Create(
                "Test",
                new[] { syntaxTree },
                new[] { MetadataReference.CreateFromFile(typeof(object).Assembly.Location) });
            var semanticModel = compilation.GetSemanticModel(syntaxTree);

            Assert.Null(InvokeInstance(
                new RetrieveMultiplePluginAnalyzer(),
                "GetArgumentValue",
                argument,
                semanticModel,
                CancellationToken.None));
        }

        [Fact]
        public void UpdateFilteringAttributes_PrivateHelper_Returns_Null_For_Null_Argument()
        {
            Assert.Null(InvokeStatic(
                typeof(UpdateMessageShouldHaveFilteringAttributesAnalyzer),
                "GetArgumentStringValue",
                new object[] { null }));
        }

        [Fact]
        public void AnalyzeCallbacks_Return_When_Dispatched_With_Unexpected_Node_Kinds()
        {
            var semanticModel = CreateSemanticModel("class C { void M() { int x = 0; } }");
            var wrongNode = SyntaxFactory.LiteralExpression(SyntaxKind.NumericLiteralExpression, SyntaxFactory.Literal(1));

            InvokeInstance(new EntityReferenceMaybeNullAnalyzer(), "AnalyzeEntityReferenceAccess", CreateContext(wrongNode, semanticModel));
            InvokeInstance(new GetAwaiterGetResultAnalyzer(), "AnalyzeInvocation", CreateContext(wrongNode, semanticModel));
            InvokeInstance(new GetAwaiterGetResultAnalyzer(), "AnalyzeMemberAccess", CreateContext(wrongNode, semanticModel));
            InvokeInstance(new PluginDepthAnalyzer(), "AnalyzeClassDeclaration", CreateContext(wrongNode, semanticModel));
            InvokeInstance(new TracingServiceAnalyzer(), "AnalyzePluginClass", CreateContext(wrongNode, semanticModel));
            InvokeInstance(new TracingServiceInCatchAnalyzer(), "AnalyzeCatchClause", CreateContext(wrongNode, semanticModel));
            InvokeInstance(new NotUseColumnSetTrueAnalyzer(), "AnalyzeObjectCreation", CreateContext(wrongNode, semanticModel));
            InvokeInstance(new NotUseColumnSetTrueAnalyzer(), "AnalyzeAssignment", CreateContext(wrongNode, semanticModel));
            InvokeInstance(new NotUseColumnSetTrueAnalyzer(), "AnalyzeFetchXmlString", CreateContext(SyntaxFactory.IdentifierName("s"), semanticModel));
            InvokeInstance(new NotUseColumnSetTrueAnalyzer(), "AnalyzeFetchXmlInterpolated", CreateContext(wrongNode, semanticModel));
            InvokeInstance(new ParallelExecutionInPluginAnalyzer(), "AnalyzeInvocation", CreateContext(wrongNode, semanticModel));
            InvokeInstance(new ParallelExecutionInPluginAnalyzer(), "AnalyzeObjectCreation", CreateContext(wrongNode, semanticModel));
            InvokeInstance(new StatelessPluginAnalyzer(), "AnalyzeAssignment", CreateContext(wrongNode, semanticModel));
            InvokeInstance(new ConsoleOutputAnalyzer(), "AnalyzeInvocation", CreateContext(wrongNode, semanticModel));
            InvokeInstance(new InvalidPluginExecutionExceptionAnalyzer(), "AnalyzeThrowStatement", CreateContext(wrongNode, semanticModel));
            InvokeInstance(new InvalidPluginExecutionExceptionAnalyzer(), "AnalyzeThrowExpression", CreateContext(wrongNode, semanticModel));
            InvokeInstance(new AppDomainEventAnalyzer(), "AnalyzeEventSubscription", CreateContext(wrongNode, semanticModel));
            InvokeInstance(new BatchRequestInPluginAnalyzer(), "AnalyzeBatchRequest", CreateContext(wrongNode, semanticModel));
            InvokeInstance(new FileIOAnalyzer(), "AnalyzeInvocation", CreateContext(wrongNode, semanticModel));
            InvokeInstance(new FileIOAnalyzer(), "AnalyzeObjectCreation", CreateContext(wrongNode, semanticModel));
            InvokeInstance(new HttpTimeoutAnalyzer(), "AnalyzeObjectCreation", CreateContext(wrongNode, semanticModel));
            InvokeInstance(new KeepAliveFalseAnalyzer(), "AnalyzeObjectCreation", CreateContext(wrongNode, semanticModel));
            InvokeInstance(new RetrieveMultiplePluginAnalyzer(), "AnalyzeAttribute", CreateContext(wrongNode, semanticModel));
            InvokeInstance(new DataProviderDataSourceAnalyzer(), "AnalyzeAttribute", CreateContext(wrongNode, semanticModel));
            InvokeInstance(new PluginImageAnalyzer(), "AnalyzePluginImage", CreateContext(wrongNode, semanticModel));
            InvokeInstance(new RetrieveAsIfPublishedAnalyzer(), "AnalyzeAssignment", CreateContext(wrongNode, semanticModel));
            InvokeInstance(new RetrieveAsIfPublishedAnalyzer(), "AnalyzeObjectInitializer", CreateContext(wrongNode, semanticModel));
            InvokeInstance(new UpdateMessageShouldHaveFilteringAttributesAnalyzer(), "AnalyzeAttribute", CreateContext(wrongNode, semanticModel));
        }

        [Fact]
        public void AnalyzeCallbacks_Return_When_SemanticModel_Is_Missing()
        {
            var classNode = SyntaxFactory.ClassDeclaration("C");
            var catchNode = SyntaxFactory.CatchClause();

            InvokeInstance(new PluginDepthAnalyzer(), "AnalyzeClassDeclaration", CreateContext(classNode, null));
            InvokeInstance(new TracingServiceAnalyzer(), "AnalyzePluginClass", CreateContext(classNode, null));
            InvokeInstance(new TracingServiceInCatchAnalyzer(), "AnalyzeCatchClause", CreateContext(catchNode, null));
        }

        [Fact]
        public void EntityReference_Analyze_Returns_For_NullSemanticModel_And_NonEntityReferenceType()
        {
            var memberAccess = (MemberAccessExpressionSyntax)SyntaxFactory.ParseExpression("entityRef.Id");
            InvokeInstance(new EntityReferenceMaybeNullAnalyzer(), "AnalyzeEntityReferenceAccess", CreateContext(memberAccess, null));

            var semanticModel = CreateSemanticModel(@"
class Other
{
    public int Id { get; }
}
class C
{
    void M()
    {
        var entityRef = new Other();
        var value = entityRef.Id;
    }
}");
            var idAccess = FindNode<MemberAccessExpressionSyntax>(
                semanticModel,
                node => node.Name.Identifier.Text == "Id");

            InvokeInstance(new EntityReferenceMaybeNullAnalyzer(), "AnalyzeEntityReferenceAccess", CreateContext(idAccess, semanticModel));
        }

        [Fact]
        public void AnalyzeCallbacks_Return_For_Unresolved_Symbols_And_NonPlugin_ObjectCreation()
        {
            var unresolvedInvocationModel = CreateSemanticModel(PluginSource(@"
public class TestPlugin : Microsoft.Xrm.Sdk.IPlugin
{
    public void Execute(System.IServiceProvider serviceProvider)
    {
        Missing();
    }
}"));
            var missingInvocation = FindNode<InvocationExpressionSyntax>(
                unresolvedInvocationModel,
                node => node.Expression.ToString() == "Missing");

            InvokeInstance(new ConsoleOutputAnalyzer(), "AnalyzeInvocation", CreateContext(missingInvocation, unresolvedInvocationModel));
            InvokeInstance(new FileIOAnalyzer(), "AnalyzeInvocation", CreateContext(missingInvocation, unresolvedInvocationModel));
            InvokeInstance(new ParallelExecutionInPluginAnalyzer(), "AnalyzeInvocation", CreateContext(missingInvocation, unresolvedInvocationModel));

            var threadModel = CreateSemanticModel("class C { void M() { var thread = new System.Threading.Thread(() => { }); } }");
            var threadCreation = FindNode<ObjectCreationExpressionSyntax>(
                threadModel,
                node => node.Type.ToString().Contains("Thread"));

            InvokeInstance(new FileIOAnalyzer(), "AnalyzeObjectCreation", CreateContext(threadCreation, threadModel));
            InvokeInstance(new ParallelExecutionInPluginAnalyzer(), "AnalyzeObjectCreation", CreateContext(threadCreation, threadModel));
        }

        [Fact]
        public void AttributeAnalyzers_Return_For_Missing_Empty_Or_NonConstant_Arguments()
        {
            var pluginImageMissingMessageModel = CreateSemanticModel(AttributeSource(@"
[CrmPluginRegistration]
public class PluginWithoutMessage { }"));
            InvokeInstance(
                new PluginImageAnalyzer(),
                "AnalyzePluginImage",
                CreateContext(FindNode<AttributeSyntax>(pluginImageMissingMessageModel, null), pluginImageMissingMessageModel));

            var pluginImageEmptyMessageModel = CreateSemanticModel(AttributeSource(@"
[CrmPluginRegistration("""", Image1Type = ImageTypeEnum.PreImage, Image1Attributes = ""name"")]
public class PluginWithEmptyMessage { }"));
            InvokeInstance(
                new PluginImageAnalyzer(),
                "AnalyzePluginImage",
                CreateContext(FindNode<AttributeSyntax>(pluginImageEmptyMessageModel, null), pluginImageEmptyMessageModel));

            var retrieveMultipleModel = CreateSemanticModel(AttributeSource(@"
public static class Messages { public static string Name = ""Retrieve""; }
[CrmPluginRegistration(Messages.Name)]
public class RetrievePlugin { }"));
            InvokeInstance(
                new RetrieveMultiplePluginAnalyzer(),
                "AnalyzeAttribute",
                CreateContext(FindNode<AttributeSyntax>(retrieveMultipleModel, null), retrieveMultipleModel));

            var updateMessageModel = CreateSemanticModel(AttributeSource(@"
[CrmPluginRegistration("""", filteringAttributes = """")]
public class EmptyMessagePlugin { }"));
            InvokeInstance(
                new UpdateMessageShouldHaveFilteringAttributesAnalyzer(),
                "AnalyzeAttribute",
                CreateContext(FindNode<AttributeSyntax>(updateMessageModel, null), updateMessageModel));
        }

        [Fact]
        public void RetrieveAsIfPublished_ObjectInitializer_Skips_NonAssignment_Expressions()
        {
            var semanticModel = CreateSemanticModel(@"
namespace Microsoft.Xrm.Sdk.Messages
{
    public class RetrieveEntityRequest
    {
        public bool RetrieveAsIfPublished { get; set; }
    }
}
class C
{
    void M()
    {
        var request = new Microsoft.Xrm.Sdk.Messages.RetrieveEntityRequest
        {
            RetrieveAsIfPublished
        };
    }
}");
            var objectCreation = FindNode<ObjectCreationExpressionSyntax>(
                semanticModel,
                node => node.Type.ToString().Contains("RetrieveEntityRequest"));

            InvokeInstance(new RetrieveAsIfPublishedAnalyzer(), "AnalyzeObjectInitializer", CreateContext(objectCreation, semanticModel));
        }

        [Fact]
        public void Stateless_AnalyzeAssignment_Returns_For_Property_Without_Setter()
        {
            var semanticModel = CreateSemanticModel(PluginSource(@"
public class TestPlugin : Microsoft.Xrm.Sdk.IPlugin
{
    public string Value { get; }

    public void Execute(System.IServiceProvider serviceProvider)
    {
        Value = ""assigned"";
    }
}"));
            var assignment = FindNode<AssignmentExpressionSyntax>(
                semanticModel,
                node => node.Left.ToString() == "Value");

            InvokeInstance(new StatelessPluginAnalyzer(), "AnalyzeAssignment", CreateContext(assignment, semanticModel));
        }

        [Fact]
        public void PluginDepth_AnalyzeClass_Returns_For_Abstract_Execute_Method()
        {
            var semanticModel = CreateSemanticModel(PluginSource(@"
public abstract class TestPlugin : Microsoft.Xrm.Sdk.IPlugin
{
    public abstract void Execute(System.IServiceProvider serviceProvider);
}"));
            var classDeclaration = FindNode<ClassDeclarationSyntax>(
                semanticModel,
                node => node.Identifier.Text == "TestPlugin");

            InvokeInstance(new PluginDepthAnalyzer(), "AnalyzeClassDeclaration", CreateContext(classDeclaration, semanticModel));
        }

        [Fact]
        public void AppDomain_AnalyzeEventSubscription_Returns_For_NonMember_Assignment_Left()
        {
            var semanticModel = CreateSemanticModel(PluginSource(@"
public class TestPlugin : Microsoft.Xrm.Sdk.IPlugin
{
    private int value;

    public void Execute(System.IServiceProvider serviceProvider)
    {
        value += 1;
    }
}"));
            var assignment = FindNode<AssignmentExpressionSyntax>(
                semanticModel,
                node => node.Kind() == SyntaxKind.AddAssignmentExpression);

            InvokeInstance(new AppDomainEventAnalyzer(), "AnalyzeEventSubscription", CreateContext(assignment, semanticModel));
        }

        [Fact]
        public void InvalidPluginExecutionException_AnalyzeThrow_Returns_For_Unresolved_Exception_Type()
        {
            var semanticModel = CreateSemanticModel(PluginSource(@"
public class TestPlugin : Microsoft.Xrm.Sdk.IPlugin
{
    public void Execute(System.IServiceProvider serviceProvider)
    {
        throw null;
    }
}"));
            var throwStatement = FindNode<ThrowStatementSyntax>(semanticModel, null);

            InvokeInstance(new InvalidPluginExecutionExceptionAnalyzer(), "AnalyzeThrowStatement", CreateContext(throwStatement, semanticModel));
        }

        [Fact]
        public void DataProvider_PrivateStringHelper_Returns_Null_For_NonConstant_Argument()
        {
            var syntaxTree = CSharpSyntaxTree.ParseText("[A(Value)] class C { public static string Value = \"\"; }");
            var argument = syntaxTree.GetRoot()
                .DescendantNodes()
                .OfType<AttributeArgumentSyntax>()
                .Single();
            var compilation = CSharpCompilation.Create(
                "DataProviderStringValue",
                new[] { syntaxTree },
                new[] { MetadataReference.CreateFromFile(typeof(object).Assembly.Location) });
            var semanticModel = compilation.GetSemanticModel(syntaxTree);

            Assert.Null(InvokeInstance(
                new DataProviderDataSourceAnalyzer(),
                "GetStringValue",
                argument,
                semanticModel,
                CancellationToken.None));
        }

        [Fact]
        public void NotUseColumnSetTrue_PrivateReporter_Ignores_Empty_Text_Or_Missing_Tree()
        {
            var semanticModel = CreateSemanticModel("class C { }");
            var context = CreateContext(SyntaxFactory.LiteralExpression(SyntaxKind.StringLiteralExpression, SyntaxFactory.Literal("")), semanticModel);

            InvokeStatic(
                typeof(NotUseColumnSetTrueAnalyzer),
                "ReportAllAttributesLocation",
                context,
                "",
                Location.None,
                null);
        }

        private static object InvokeStatic(Type type, string name, params object[] args)
        {
            return type.GetMethod(name, BindingFlags.NonPublic | BindingFlags.Static)
                .Invoke(null, args);
        }

        private static object InvokeInstance(object instance, string name, params object[] args)
        {
            return instance.GetType()
                .GetMethods(BindingFlags.NonPublic | BindingFlags.Instance)
                .Single(method => method.Name == name && method.GetParameters().Length == args.Length)
                .Invoke(instance, args);
        }

#pragma warning disable CS0618
        private static SyntaxNodeAnalysisContext CreateContext(SyntaxNode node, SemanticModel semanticModel)
        {
            var diagnostics = new List<Diagnostic>();
            return new SyntaxNodeAnalysisContext(
                node,
                semanticModel,
                new AnalyzerOptions(ImmutableArray<AdditionalText>.Empty),
                diagnostics.Add,
                _ => true,
                CancellationToken.None);
        }
#pragma warning restore CS0618

        private static SemanticModel CreateSemanticModel(string source)
        {
            var syntaxTree = CSharpSyntaxTree.ParseText(source);
            var compilation = CSharpCompilation.Create(
                "GuardTests",
                new[] { syntaxTree },
                new[] { MetadataReference.CreateFromFile(typeof(object).Assembly.Location) });
            return compilation.GetSemanticModel(syntaxTree);
        }

        private static TNode FindNode<TNode>(SemanticModel semanticModel, Func<TNode, bool> predicate)
            where TNode : SyntaxNode
        {
            var nodes = semanticModel.SyntaxTree.GetRoot()
                .DescendantNodes()
                .OfType<TNode>();

            if (predicate != null)
            {
                nodes = nodes.Where(predicate);
            }

            return nodes.Single();
        }

        private static string PluginSource(string source)
        {
            return @"
namespace Microsoft.Xrm.Sdk
{
    public interface IPlugin
    {
        void Execute(System.IServiceProvider serviceProvider);
    }
}
" + source;
        }

        private static string AttributeSource(string source)
        {
            return @"
public enum ImageTypeEnum
{
    PreImage,
    PostImage
}
public class CrmPluginRegistrationAttribute : System.Attribute
{
    public CrmPluginRegistrationAttribute() { }
    public CrmPluginRegistrationAttribute(string message) { }
    public string filteringAttributes { get; set; }
    public ImageTypeEnum Image1Type { get; set; }
    public string Image1Attributes { get; set; }
}
" + source;
        }
    }
}
