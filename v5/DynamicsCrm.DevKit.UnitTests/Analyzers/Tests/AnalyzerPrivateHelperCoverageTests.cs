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

            InvokeInstance(new PluginDepthAnalyzer(), "AnalyzeClassDeclaration", CreateContext(wrongNode, semanticModel));
            InvokeInstance(new TracingServiceAnalyzer(), "AnalyzePluginClass", CreateContext(wrongNode, semanticModel));
            InvokeInstance(new TracingServiceInCatchAnalyzer(), "AnalyzeCatchClause", CreateContext(wrongNode, semanticModel));
            InvokeInstance(new NotUseColumnSetTrueAnalyzer(), "AnalyzeObjectCreation", CreateContext(wrongNode, semanticModel));
            InvokeInstance(new NotUseColumnSetTrueAnalyzer(), "AnalyzeAssignment", CreateContext(wrongNode, semanticModel));
            InvokeInstance(new NotUseColumnSetTrueAnalyzer(), "AnalyzeFetchXmlString", CreateContext(SyntaxFactory.IdentifierName("s"), semanticModel));
            InvokeInstance(new NotUseColumnSetTrueAnalyzer(), "AnalyzeFetchXmlInterpolated", CreateContext(wrongNode, semanticModel));
            InvokeInstance(new ParallelExecutionInPluginAnalyzer(), "AnalyzeInvocation", CreateContext(wrongNode, semanticModel));
            InvokeInstance(new ParallelExecutionInPluginAnalyzer(), "AnalyzeObjectCreation", CreateContext(wrongNode, semanticModel));
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
    }
}
