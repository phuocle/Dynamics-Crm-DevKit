using System;
using System.Collections.Immutable;
using System.Linq;
using System.Reflection;
using System.Threading;
using DynamicsCrm.DevKit.Analyzers.CrmAnalyzers;
using Microsoft.CodeAnalysis;
using Microsoft.CodeAnalysis.CSharp;
using Microsoft.CodeAnalysis.CSharp.Syntax;
using Microsoft.CodeAnalysis.Diagnostics;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace DynamicsCrm.DevKit.Analyzers.UnitTests.Tests
{
    /// <summary>
    /// Covers the remaining defensive/edge branches of the CRM analyzers that the
    /// verifier-based tests cannot reach (null context, missing semantic model,
    /// unresolved types, missing variables/blocks, attribute argument shapes).
    /// </summary>
    [TestClass]
    public class AnalyzerBranchCoverageTests
    {
        [TestMethod]
        public void Initialize_Throws_ArgumentNull_For_Null_Context()
        {
            var analyzerTypes = new[]
            {
                typeof(AppDomainEventAnalyzer),
                typeof(BatchRequestInPluginAnalyzer),
                typeof(ConsoleOutputAnalyzer),
                typeof(DataProviderDataSourceAnalyzer),
                typeof(DeprecatedAnalyzer),
                typeof(EntityReferenceMaybeNullAnalyzer),
                typeof(FileIOAnalyzer),
                typeof(GetAwaiterGetResultAnalyzer),
                typeof(HttpTimeoutAnalyzer),
                typeof(InvalidPluginExecutionExceptionAnalyzer),
                typeof(KeepAliveFalseAnalyzer),
                typeof(PluginDepthAnalyzer),
                typeof(PluginImageAnalyzer),
                typeof(RetrieveAsIfPublishedAnalyzer),
                typeof(RetrieveMultiplePluginAnalyzer),
                typeof(StatelessPluginAnalyzer),
                typeof(TracingServiceAnalyzer),
                typeof(UpdateMessageShouldHaveFilteringAttributesAnalyzer)
            };

            foreach (var analyzerType in analyzerTypes)
            {
                var analyzer = (DiagnosticAnalyzer)Activator.CreateInstance(analyzerType);
                var thrown = Catch<ArgumentNullException>(() => analyzer.Initialize((AnalysisContext)null));
                Assert.IsNotNull(thrown, analyzerType.Name + " should reject a null AnalysisContext");
            }
        }

        [TestMethod]
        public void AnalyzeCallbacks_Return_When_SemanticModel_Missing()
        {
            var assignment = (AssignmentExpressionSyntax)SyntaxFactory.ParseExpression("value.UnhandledException += handler");
            InvokeInstance(new AppDomainEventAnalyzer(), "AnalyzeEventSubscription", CreateContext(assignment, null));

            var objectCreation = (ObjectCreationExpressionSyntax)SyntaxFactory.ParseExpression("new Microsoft.Xrm.Sdk.Messages.ExecuteMultipleRequest()");
            InvokeInstance(new BatchRequestInPluginAnalyzer(), "AnalyzeBatchRequest", CreateContext(objectCreation, null));

            var invocation = (InvocationExpressionSyntax)SyntaxFactory.ParseExpression("Console.WriteLine()");
            InvokeInstance(new ConsoleOutputAnalyzer(), "AnalyzeInvocation", CreateContext(invocation, null));
            InvokeInstance(new FileIOAnalyzer(), "AnalyzeInvocation", CreateContext(invocation, null));
            InvokeInstance(new ParallelExecutionInPluginAnalyzer(), "AnalyzeInvocation", CreateContext(invocation, null));
            InvokeInstance(new GetAwaiterGetResultAnalyzer(), "AnalyzeInvocation", CreateContext(invocation, null));

            var httpCreation = (ObjectCreationExpressionSyntax)SyntaxFactory.ParseExpression("new System.Net.Http.HttpClient()");
            InvokeInstance(new FileIOAnalyzer(), "AnalyzeObjectCreation", CreateContext(httpCreation, null));
            InvokeInstance(new HttpTimeoutAnalyzer(), "AnalyzeObjectCreation", CreateContext(httpCreation, null));
            InvokeInstance(new KeepAliveFalseAnalyzer(), "AnalyzeObjectCreation", CreateContext(httpCreation, null));
            InvokeInstance(new ParallelExecutionInPluginAnalyzer(), "AnalyzeObjectCreation", CreateContext(httpCreation, null));
            InvokeInstance(new NotUseColumnSetTrueAnalyzer(), "AnalyzeObjectCreation", CreateContext(httpCreation, null));
            InvokeInstance(new RetrieveAsIfPublishedAnalyzer(), "AnalyzeObjectInitializer", CreateContext(httpCreation, null));

            var attribute = SyntaxFactory.Attribute(SyntaxFactory.ParseName("CrmPluginRegistration"));
            InvokeInstance(new DataProviderDataSourceAnalyzer(), "AnalyzeAttribute", CreateContext(attribute, null));
            InvokeInstance(new RetrieveMultiplePluginAnalyzer(), "AnalyzeAttribute", CreateContext(attribute, null));
            InvokeInstance(new DeprecatedAnalyzer(), "AnalyzeDeprecatedUsage", CreateContext(attribute, null));
            InvokeInstance(new PluginImageAnalyzer(), "AnalyzePluginImage", CreateContext(attribute, null));

            var columnAssignment = (AssignmentExpressionSyntax)SyntaxFactory.ParseExpression("columnSet.AllColumns = true");
            InvokeInstance(new NotUseColumnSetTrueAnalyzer(), "AnalyzeAssignment", CreateContext(columnAssignment, null));
            InvokeInstance(new RetrieveAsIfPublishedAnalyzer(), "AnalyzeAssignment", CreateContext((AssignmentExpressionSyntax)SyntaxFactory.ParseExpression("request.RetrieveAsIfPublished = true"), null));
            InvokeInstance(new StatelessPluginAnalyzer(), "AnalyzeAssignment", CreateContext((AssignmentExpressionSyntax)SyntaxFactory.ParseExpression("this.value = 5"), null));

            var resultAccess = (MemberAccessExpressionSyntax)SyntaxFactory.ParseExpression("task.Result");
            InvokeInstance(new GetAwaiterGetResultAnalyzer(), "AnalyzeMemberAccess", CreateContext(resultAccess, null));

            InvokeInstance(
                new InvalidPluginExecutionExceptionAnalyzer(),
                "AnalyzeThrowExpression",
                CreateContext(SyntaxFactory.IdentifierName("value"), null),
                (ExpressionSyntax)SyntaxFactory.ParseExpression("new System.Exception()"),
                SyntaxFactory.Token(SyntaxKind.ThrowKeyword));
        }

        [TestMethod]
        public void AnalyzeCallbacks_Return_When_Type_Cannot_Be_Resolved()
        {
            var source = PluginSource(@"
public class TestPlugin : Microsoft.Xrm.Sdk.IPlugin
{
    public void Execute(System.IServiceProvider serviceProvider)
    {
        Handler(null, null);
        System.Console.WriteLine(""step"");
        System.IO.File.GetAttributes(""x"");
        System.IO.File.ReadAllText(""path"");
        System.IO.FileStream stream = new MissingType();
        MissingType.UnhandledException += Handler;
    }

    private void Handler(object sender, System.UnhandledExceptionEventArgs e) { }
}");
            var model = CreateSemanticModel(source);

            var pluginInvocation = FindNode<InvocationExpressionSyntax>(model, node => node.Expression.ToString() == "Handler");
            InvokeInstance(new ConsoleOutputAnalyzer(), "AnalyzeInvocation", CreateContext(pluginInvocation, model));

            var consoleInvocation = FindNode<InvocationExpressionSyntax>(model, node => node.Expression.ToString() == "System.Console.WriteLine");
            InvokeInstance(new FileIOAnalyzer(), "AnalyzeInvocation", CreateContext(consoleInvocation, model));

            var fileGetAttributes = FindNode<InvocationExpressionSyntax>(model, node => node.Expression.ToString() == "System.IO.File.GetAttributes");
            InvokeInstance(new FileIOAnalyzer(), "AnalyzeInvocation", CreateContext(fileGetAttributes, model));

            var fileReadAllText = FindNode<InvocationExpressionSyntax>(model, node => node.Expression.ToString() == "System.IO.File.ReadAllText");
            InvokeInstance(new FileIOAnalyzer(), "AnalyzeInvocation", CreateContext(fileReadAllText, model));

            var missingCreation = FindNode<ObjectCreationExpressionSyntax>(model, node => node.Type.ToString() == "MissingType");
            InvokeInstance(new BatchRequestInPluginAnalyzer(), "AnalyzeBatchRequest", CreateContext(missingCreation, model));
            InvokeInstance(new FileIOAnalyzer(), "AnalyzeObjectCreation", CreateContext(missingCreation, model));
            InvokeInstance(new HttpTimeoutAnalyzer(), "AnalyzeObjectCreation", CreateContext(missingCreation, model));
            InvokeInstance(new KeepAliveFalseAnalyzer(), "AnalyzeObjectCreation", CreateContext(missingCreation, model));
            InvokeInstance(new ParallelExecutionInPluginAnalyzer(), "AnalyzeObjectCreation", CreateContext(missingCreation, model));
            InvokeInstance(new NotUseColumnSetTrueAnalyzer(), "AnalyzeObjectCreation", CreateContext(missingCreation, model));
            InvokeInstance(new RetrieveAsIfPublishedAnalyzer(), "AnalyzeObjectInitializer", CreateContext(missingCreation, model));

            var appDomainAssignment = FindNode<AssignmentExpressionSyntax>(model, node => node.Left.ToString() == "MissingType.UnhandledException");
            InvokeInstance(new AppDomainEventAnalyzer(), "AnalyzeEventSubscription", CreateContext(appDomainAssignment, model));
        }

        [TestMethod]
        public void PrivateHelpers_Cover_Syntax_And_Symbol_Shapes()
        {
            Assert.AreEqual("Unknown", InvokeStatic(typeof(FileIOAnalyzer), "GetShortTypeName", new object[] { null }));
            Assert.AreEqual("NoDot", InvokeStatic(typeof(FileIOAnalyzer), "GetShortTypeName", "NoDot"));
            Assert.AreEqual("File", InvokeStatic(typeof(FileIOAnalyzer), "GetShortTypeName", "System.IO.File"));

            Assert.IsFalse((bool)InvokeStatic(typeof(ParallelExecutionInPluginAnalyzer), "IsParallelExecutionMethod", new object[] { null, "Run" }));
            Assert.IsTrue((bool)InvokeStatic(typeof(ParallelExecutionInPluginAnalyzer), "IsParallelExecutionMethod", "System.Threading.Tasks.Task", "Run"));
            Assert.IsTrue((bool)InvokeStatic(typeof(ParallelExecutionInPluginAnalyzer), "IsParallelExecutionMethod", "System.Threading.Tasks.Task", "StartNew"));
            Assert.IsFalse((bool)InvokeStatic(typeof(ParallelExecutionInPluginAnalyzer), "IsParallelExecutionMethod", "System.Threading.Tasks.Task", "Wait"));
            Assert.IsTrue((bool)InvokeStatic(typeof(ParallelExecutionInPluginAnalyzer), "IsParallelExecutionMethod", "System.Threading.Tasks.TaskFactory", "StartNew"));
            Assert.IsFalse((bool)InvokeStatic(typeof(ParallelExecutionInPluginAnalyzer), "IsParallelExecutionMethod", "System.Threading.Tasks.TaskFactory", "Run"));
            Assert.IsTrue((bool)InvokeStatic(typeof(ParallelExecutionInPluginAnalyzer), "IsParallelExecutionMethod", "System.Threading.Tasks.Parallel", "For"));
            Assert.IsTrue((bool)InvokeStatic(typeof(ParallelExecutionInPluginAnalyzer), "IsParallelExecutionMethod", "System.Threading.Tasks.Parallel", "ForEach"));
            Assert.IsTrue((bool)InvokeStatic(typeof(ParallelExecutionInPluginAnalyzer), "IsParallelExecutionMethod", "System.Threading.Tasks.Parallel", "Invoke"));
            Assert.IsFalse((bool)InvokeStatic(typeof(ParallelExecutionInPluginAnalyzer), "IsParallelExecutionMethod", "System.Threading.Tasks.Parallel", "WaitAll"));
            Assert.IsTrue((bool)InvokeStatic(typeof(ParallelExecutionInPluginAnalyzer), "IsParallelExecutionMethod", "System.Threading.ThreadPool", "QueueUserWorkItem"));
            Assert.IsFalse((bool)InvokeStatic(typeof(ParallelExecutionInPluginAnalyzer), "IsParallelExecutionMethod", "System.Threading.ThreadPool", "RegisterWaitForSingleObject"));

            Assert.AreEqual("Task.Run()", InvokeStatic(typeof(ParallelExecutionInPluginAnalyzer), "GetParallelPatternName", "System.Threading.Tasks.Task", "Run"));
            Assert.AreEqual("Task.Factory.StartNew()", InvokeStatic(typeof(ParallelExecutionInPluginAnalyzer), "GetParallelPatternName", "System.Threading.Tasks.TaskFactory", "StartNew"));
            Assert.AreEqual("Parallel.For()", InvokeStatic(typeof(ParallelExecutionInPluginAnalyzer), "GetParallelPatternName", "System.Threading.Tasks.Parallel", "For"));
            Assert.AreEqual("ThreadPool.QueueUserWorkItem()", InvokeStatic(typeof(ParallelExecutionInPluginAnalyzer), "GetParallelPatternName", "System.Threading.ThreadPool", "QueueUserWorkItem"));
        }

        [TestMethod]
        public void GetAwaiter_IsGenericTaskType_Returns_False_For_Generic_NonTask_Type()
        {
            var model = CreateSemanticModel("class C { void M() { var x = (Missing<int>)null; } }");
            var cast = FindNode<CastExpressionSyntax>(model, null);
            var errorType = model.GetTypeInfo(cast).Type;

            Assert.IsNotNull(errorType);
            Assert.IsFalse((bool)InvokeStatic(typeof(GetAwaiterGetResultAnalyzer), "IsGenericTaskType", errorType));
            Assert.IsFalse((bool)InvokeStatic(typeof(GetAwaiterGetResultAnalyzer), "IsTaskType", errorType));

            var compilation = (CSharpCompilation)model.Compilation;
            var arrayType = compilation.CreateArrayTypeSymbol(compilation.GetSpecialType(SpecialType.System_Int32));
            Assert.IsFalse((bool)InvokeStatic(typeof(GetAwaiterGetResultAnalyzer), "IsGenericTaskType", arrayType));

            var intType = compilation.GetSpecialType(SpecialType.System_Int32);
            Assert.IsFalse((bool)InvokeStatic(typeof(GetAwaiterGetResultAnalyzer), "IsGenericTaskType", intType));
        }

        [TestMethod]
        public void HttpTimeout_And_KeepAlive_Helpers_Handle_Missing_Variable_And_Block()
        {
            var standaloneCreation = (ObjectCreationExpressionSyntax)SyntaxFactory.ParseExpression("new System.Net.Http.HttpClient()");
            var httpTimeout = new HttpTimeoutAnalyzer();
            var keepAlive = new KeepAliveFalseAnalyzer();

            Assert.IsFalse((bool)InvokeInstance(httpTimeout, "IsTimeoutSet", standaloneCreation));
            Assert.IsFalse((bool)InvokeInstance(keepAlive, "IsConnectionCloseSetToTrue", standaloneCreation));
            Assert.IsFalse((bool)InvokeInstance(keepAlive, "IsKeepAliveSetToFalse", standaloneCreation));

            var fieldInitModel = CreateSemanticModel("class C { System.Net.Http.HttpClient client = new System.Net.Http.HttpClient(); }");
            var fieldInitCreation = FindNode<ObjectCreationExpressionSyntax>(fieldInitModel, null);

            Assert.IsFalse((bool)InvokeInstance(httpTimeout, "IsTimeoutSet", fieldInitCreation));
            Assert.IsFalse((bool)InvokeInstance(keepAlive, "IsConnectionCloseSetToTrue", fieldInitCreation));
            Assert.IsFalse((bool)InvokeInstance(keepAlive, "IsKeepAliveSetToFalse", fieldInitCreation));
        }

        [TestMethod]
        public void NotUseColumnSetTrue_Covers_Argument_And_Initializer_Variants()
        {
            var source = @"
namespace Microsoft.Xrm.Sdk.Query
{
    public class ColumnSet
    {
        public ColumnSet() { }
        public ColumnSet(bool allColumns) { }
        public bool AllColumns { get; set; }
    }
}
class Holder
{
    public bool Flag;
}
class C
{
    void M(bool parameter, Holder holder)
    {
        var first = new Microsoft.Xrm.Sdk.Query.ColumnSet(parameter);
        var second = new Microsoft.Xrm.Sdk.Query.ColumnSet(false);
        var fourth = new Microsoft.Xrm.Sdk.Query.ColumnSet { AllColumns = false };
        var fifth = new Microsoft.Xrm.Sdk.Query.ColumnSet { AllColumns = parameter };
        holder.Flag = true;
    }
}";
            var model = CreateSemanticModel(source);
            var analyzer = new NotUseColumnSetTrueAnalyzer();

            var nonLiteralArgument = FindNode<ObjectCreationExpressionSyntax>(model, node =>
                node.ArgumentList?.Arguments.Count == 1 && node.ArgumentList.Arguments[0].ToString() == "parameter");
            InvokeInstance(analyzer, "AnalyzeObjectCreation", CreateContext(nonLiteralArgument, model));

            var falseArgument = FindNode<ObjectCreationExpressionSyntax>(model, node =>
                node.ArgumentList?.Arguments.Count == 1 && node.ArgumentList.Arguments[0].ToString() == "false");
            InvokeInstance(analyzer, "AnalyzeObjectCreation", CreateContext(falseArgument, model));

            var falseInitializer = FindNode<ObjectCreationExpressionSyntax>(model, node =>
                node.Initializer != null && node.Initializer.ToString().Contains("AllColumns = false"));
            InvokeInstance(analyzer, "AnalyzeObjectCreation", CreateContext(falseInitializer, model));

            var nonLiteralInitializer = FindNode<ObjectCreationExpressionSyntax>(model, node =>
                node.Initializer != null && node.Initializer.ToString().Contains("AllColumns = parameter"));
            InvokeInstance(analyzer, "AnalyzeObjectCreation", CreateContext(nonLiteralInitializer, model));

            var holderAssignment = FindNode<AssignmentExpressionSyntax>(model, node => node.Left.ToString() == "holder.Flag");
            InvokeInstance(analyzer, "AnalyzeAssignment", CreateContext(holderAssignment, model));
        }

        [TestMethod]
        public void DeprecatedAnalyzer_Covers_Cast_As_And_NonAs_Binary_Shapes()
        {
            var source = @"
namespace Microsoft.Crm.Sdk.Messages
{
    public class ExecuteFetchRequest { }
}
class C
{
    void M(object response)
    {
        var first = (Microsoft.Crm.Sdk.Messages.ExecuteFetchRequest)response;
        var second = response as Microsoft.Crm.Sdk.Messages.ExecuteFetchRequest;
        var third = (MissingType)response;
        var fourth = (string)response;
        var fifth = 1 + 2;
    }
}";
            var model = CreateSemanticModel(source);
            var analyzer = new DeprecatedAnalyzer();

            var deprecatedCast = FindNode<CastExpressionSyntax>(model, node => node.Type.ToString().Contains("ExecuteFetchRequest"));
            InvokeInstance(analyzer, "AnalyzeDeprecatedUsage", CreateContext(deprecatedCast, model));

            var asExpression = FindNode<BinaryExpressionSyntax>(model, node => node.IsKind(SyntaxKind.AsExpression));
            InvokeInstance(analyzer, "AnalyzeDeprecatedUsage", CreateContext(asExpression, model));

            var unresolvedCast = FindNode<CastExpressionSyntax>(model, node => node.Type.ToString() == "MissingType");
            InvokeInstance(analyzer, "AnalyzeDeprecatedUsage", CreateContext(unresolvedCast, model));

            var stringCast = FindNode<CastExpressionSyntax>(model, node => node.Type.ToString() == "string");
            InvokeInstance(analyzer, "AnalyzeDeprecatedUsage", CreateContext(stringCast, model));

            var addition = FindNode<BinaryExpressionSyntax>(model, node => node.IsKind(SyntaxKind.AddExpression));
            InvokeInstance(analyzer, "AnalyzeDeprecatedUsage", CreateContext(addition, model));

            var nonMatchedNode = SyntaxFactory.LiteralExpression(SyntaxKind.NumericLiteralExpression, SyntaxFactory.Literal(1));
            InvokeInstance(analyzer, "AnalyzeDeprecatedUsage", CreateContext(nonMatchedNode, model));
        }

        [TestMethod]
        public void EntityReference_Analyze_Covers_NonEntity_And_NonTarget_Conversions()
        {
            var source = @"
namespace Microsoft.Xrm.Sdk
{
    public class EntityReference { public object Id { get { return null; } } }
}
class C
{
    void M()
    {
        var entityRef = new Microsoft.Xrm.Sdk.EntityReference();
        var missing = missingRef.Id;
        var other = otherRef.Name;
        object converted = entityRef.Id;
    }
}";
            var model = CreateSemanticModel(source);
            var analyzer = new EntityReferenceMaybeNullAnalyzer();

            var missingAccess = FindNode<MemberAccessExpressionSyntax>(model, node => node.Expression.ToString() == "missingRef");
            InvokeInstance(analyzer, "AnalyzeEntityReferenceAccess", CreateContext(missingAccess, model));

            var nonEntityAccess = FindNode<MemberAccessExpressionSyntax>(model, node => node.Expression.ToString() == "otherRef");
            InvokeInstance(analyzer, "AnalyzeEntityReferenceAccess", CreateContext(nonEntityAccess, model));

            var convertedAccess = FindNode<MemberAccessExpressionSyntax>(model, node => node.Expression.ToString() == "entityRef");
            InvokeInstance(analyzer, "AnalyzeEntityReferenceAccess", CreateContext(convertedAccess, model));
        }

        [TestMethod]
        public void RetrieveAsIfPublished_AnalyzeAssignment_Covers_All_Symbol_Kinds()
        {
            var source = @"
namespace Microsoft.Xrm.Sdk.Messages
{
    public class RetrieveEntityRequest { public bool RetrieveAsIfPublished { get; set; } }
    public class OtherRequest { public bool RetrieveAsIfPublished { get; set; } }
}
class C
{
    private Microsoft.Xrm.Sdk.Messages.RetrieveEntityRequest fieldRequest;
    public Microsoft.Xrm.Sdk.Messages.RetrieveEntityRequest PropertyRequest { get; set; }
    private bool otherFlag;

    void M(Microsoft.Xrm.Sdk.Messages.RetrieveEntityRequest parameterRequest, bool flag)
    {
        var localRequest = new Microsoft.Xrm.Sdk.Messages.RetrieveEntityRequest();
        localRequest.RetrieveAsIfPublished = true;
        fieldRequest.RetrieveAsIfPublished = true;
        PropertyRequest.RetrieveAsIfPublished = true;
        parameterRequest.RetrieveAsIfPublished = true;
        parameterRequest.RetrieveAsIfPublished = otherFlag;
        var other = new Microsoft.Xrm.Sdk.Messages.OtherRequest();
        other.RetrieveAsIfPublished = true;
        Missing.RetrieveAsIfPublished = true;
    }
}";
            var model = CreateSemanticModel(source);
            var analyzer = new RetrieveAsIfPublishedAnalyzer();

            var assignments = model.SyntaxTree.GetRoot()
                .DescendantNodes()
                .OfType<AssignmentExpressionSyntax>()
                .Where(node => node.Left.ToString().EndsWith("RetrieveAsIfPublished"));

            foreach (var assignment in assignments)
            {
                InvokeInstance(analyzer, "AnalyzeAssignment", CreateContext(assignment, model));
            }
        }

        [TestMethod]
        public void PluginImage_AnalyzeImageConfiguration_Covers_Message_Stage_Combinations()
        {
            var source = AttributeSource(@"
[CrmPluginRegistration(""Update"", Image1Type = ImageTypeEnum.PreImage, Image1Attributes = ""name"")]
public class PluginOne { }

[CrmPluginRegistration(""Create"", Image1Attributes = ""name"")]
public class PluginTwo { }

[CrmPluginRegistration(""Delete"", Image1Type = ImageTypeEnum.PostImage)]
public class PluginThree { }
");
            var model = CreateSemanticModel(source);
            var analyzer = new PluginImageAnalyzer();

            var preImageList = GetConfiguredImages(model, "PluginOne");
            var typelessList = GetConfiguredImages(model, "PluginTwo");
            var attributelessList = GetConfiguredImages(model, "PluginThree");

            var context = CreateContext(SyntaxFactory.IdentifierName("value"), model);
            InvokeInstance(analyzer, "AnalyzeImageConfiguration", context, "Update", null, preImageList);
            InvokeInstance(analyzer, "AnalyzeImageConfiguration", context, "Create", null, preImageList);
            InvokeInstance(analyzer, "AnalyzeImageConfiguration", context, "Delete", null, preImageList);
            InvokeInstance(analyzer, "AnalyzeImageConfiguration", context, "Assign", null, preImageList);
            InvokeInstance(analyzer, "AnalyzeImageConfiguration", context, "Foo", null, preImageList);
            InvokeInstance(analyzer, "AnalyzeImageConfiguration", context, "Foo", null, typelessList);
            InvokeInstance(analyzer, "AnalyzeImageConfiguration", context, "Create", "StageEnum.PostOperation", preImageList);
            InvokeInstance(analyzer, "AnalyzeImageConfiguration", context, "Create", "Whatever", preImageList);
            InvokeInstance(analyzer, "AnalyzeImageConfiguration", context, "Update", "StageEnum.PreValidation", preImageList);
            InvokeInstance(analyzer, "AnalyzeImageConfiguration", context, "Update", "StageEnum.PreOperation", preImageList);
            InvokeInstance(analyzer, "AnalyzeImageConfiguration", context, "Update", "Whatever", preImageList);
            InvokeInstance(analyzer, "AnalyzeImageConfiguration", context, "Delete", "StageEnum.PreValidation", preImageList);
            InvokeInstance(analyzer, "AnalyzeImageConfiguration", context, "Delete", "StageEnum.PostOperation", preImageList);
            InvokeInstance(analyzer, "AnalyzeImageConfiguration", context, "Delete", "Whatever", preImageList);
            InvokeInstance(analyzer, "AnalyzeImageConfiguration", context, "Foo", null, attributelessList);
        }

        [TestMethod]
        public void PluginImage_AnalyzePluginImage_Covers_NonRegistration_Attribute()
        {
            var model = CreateSemanticModel("[OtherAttribute(\"X\")]" + Environment.NewLine + "class C { }");
            var attribute = FindNode<AttributeSyntax>(model, null);
            InvokeInstance(new PluginImageAnalyzer(), "AnalyzePluginImage", CreateContext(attribute, model));
        }

        [TestMethod]
        public void BatchRequest_Covers_Initializer_Only_Creation_Inside_Plugin()
        {
            var source = PluginSource(@"
namespace Microsoft.Xrm.Sdk.Messages
{
    public class ExecuteMultipleRequest { }
}
public class TestPlugin : Microsoft.Xrm.Sdk.IPlugin
{
    public void Execute(System.IServiceProvider serviceProvider)
    {
        var request = new Microsoft.Xrm.Sdk.Messages.ExecuteMultipleRequest { };
    }
}");
            var model = CreateSemanticModel(source);
            var initializerOnlyCreation = FindNode<ObjectCreationExpressionSyntax>(model, node => node.ArgumentList == null);
            Assert.IsNotNull(initializerOnlyCreation);
            InvokeInstance(new BatchRequestInPluginAnalyzer(), "AnalyzeBatchRequest", CreateContext(initializerOnlyCreation, model));
        }

        [TestMethod]
        public void AnalyzeCallbacks_Treat_Namespace_Expressions_As_Typeless()
        {
            var source = PluginSource(@"
class C
{
    void M()
    {
        var probe = System.Id;
    }
}
public class TestPlugin : Microsoft.Xrm.Sdk.IPlugin
{
    public void Execute(System.IServiceProvider serviceProvider)
    {
        System.UnhandledException += Handler;
    }

    private void Handler(object sender, System.UnhandledExceptionEventArgs e) { }
}");
            var model = CreateSemanticModel(source);

            var namespaceMemberAccess = FindNode<MemberAccessExpressionSyntax>(model, node => node.Expression.ToString() == "System" && node.Name.Identifier.Text == "Id");
            InvokeInstance(new EntityReferenceMaybeNullAnalyzer(), "AnalyzeEntityReferenceAccess", CreateContext(namespaceMemberAccess, model));

            var namespaceAssignment = FindNode<AssignmentExpressionSyntax>(model, node => node.Left.ToString() == "System.UnhandledException");
            InvokeInstance(new AppDomainEventAnalyzer(), "AnalyzeEventSubscription", CreateContext(namespaceAssignment, model));
        }

        [TestMethod]
        public void PluginImage_AnalyzePluginImage_Dispatches_Attribute_Shapes()
        {
            var source = AttributeSource(@"
[CrmPluginRegistration(""Update"", Image1Type = ImageTypeEnum.PreImage, Image1Attributes = ""name"")]
public class PluginOne { }

[CrmPluginRegistration(""Create"", Image1Attributes = ""name"")]
public class PluginTwo { }

[CrmPluginRegistration(""Delete"", Image1Type = ImageTypeEnum.PostImage)]
public class PluginThree { }
");
            var model = CreateSemanticModel(source);
            var analyzer = new PluginImageAnalyzer();

            foreach (var className in new[] { "PluginOne", "PluginTwo", "PluginThree" })
            {
                var attribute = FindAttributeOfClass(model, className);
                InvokeInstance(analyzer, "AnalyzePluginImage", CreateContext(attribute, model));
            }
        }

        [TestMethod]
        public void Stateless_AnalyzeAssignment_Returns_For_Field_Initializer_Assignment()
        {
            var source = PluginSource(@"
public class TestPlugin : Microsoft.Xrm.Sdk.IPlugin
{
    private int first;
    private int second = (first = 5);

    public void Execute(System.IServiceProvider serviceProvider) { }
}");
            var model = CreateSemanticModel(source);
            var initializerAssignment = FindNode<AssignmentExpressionSyntax>(model, node => node.Left.ToString() == "first");
            InvokeInstance(new StatelessPluginAnalyzer(), "AnalyzeAssignment", CreateContext(initializerAssignment, model));
        }

        [TestMethod]
        public void TracingServiceInCatch_Covers_Invocation_Shapes()
        {
            var source = PluginSource(@"
public class MyTracer : System.IDisposable, Microsoft.Xrm.Sdk.ITracingService
{
    public void Trace(string message) { }
    public void Dispose() { }
}
public class TestPlugin : Microsoft.Xrm.Sdk.IPlugin
{
    public void Execute(System.IServiceProvider serviceProvider)
    {
        try { System.Console.WriteLine(""work""); }
        catch (System.Exception) { PlainTrace(""identifier invocation""); }

        try { }
        catch (System.Exception) { other.Method(); }

        try { }
        catch (System.Exception) { Missing.Trace(); }

        try { }
        catch (System.Exception)
        {
            var tracer = new MyTracer();
            tracer.Trace(""via class"");
        }
    }

    private void PlainTrace(string message) { }
}");
            var model = CreateSemanticModel(source);
            var analyzer = new TracingServiceInCatchAnalyzer();

            foreach (var catchClause in model.SyntaxTree.GetRoot().DescendantNodes().OfType<CatchClauseSyntax>())
            {
                InvokeInstance(analyzer, "AnalyzeCatchClause", CreateContext(catchClause, model));
            }

            Assert.IsFalse((bool)InvokeStatic(typeof(TracingServiceInCatchAnalyzer), "IsITracingService", new object[] { null }));
        }

        [TestMethod]
        public void PluginDepth_Covers_NonXrm_And_NonPlugin_Interfaces()
        {
            var source = @"
namespace Other
{
    public interface IPlugin
    {
        void Execute(System.IServiceProvider serviceProvider);
    }
}
public class OtherPlugin : Other.IPlugin
{
    public void Execute(System.IServiceProvider serviceProvider) { }
}
public class DisposablePlugin : System.IDisposable
{
    public void Dispose() { }
}";
            var model = CreateSemanticModel(source);
            var analyzer = new PluginDepthAnalyzer();

            var otherPlugin = FindNode<ClassDeclarationSyntax>(model, node => node.Identifier.Text == "OtherPlugin");
            InvokeInstance(analyzer, "AnalyzeClassDeclaration", CreateContext(otherPlugin, model));

            var disposablePlugin = FindNode<ClassDeclarationSyntax>(model, node => node.Identifier.Text == "DisposablePlugin");
            InvokeInstance(analyzer, "AnalyzeClassDeclaration", CreateContext(disposablePlugin, model));
        }

        [TestMethod]
        public void Stateless_And_AttributeAnalyzers_Cover_Early_Return_Shapes()
        {
            var noClassModel = CreateSemanticModel("class C { void M() { value = 5; } }");
            var noClassAssignment = FindNode<AssignmentExpressionSyntax>(noClassModel, node => node.Left.ToString() == "value");
            InvokeInstance(new StatelessPluginAnalyzer(), "AnalyzeAssignment", CreateContext(noClassAssignment, noClassModel));

            var dataProviderModel = CreateSemanticModel("[CrmPluginRegistration]" + Environment.NewLine + "class C { }");
            var bareAttribute = FindNode<AttributeSyntax>(dataProviderModel, null);
            InvokeInstance(new DataProviderDataSourceAnalyzer(), "AnalyzeAttribute", CreateContext(bareAttribute, dataProviderModel));

            var updateModel = CreateSemanticModel("[Other]" + Environment.NewLine + "class C { }");
            var otherAttribute = FindNode<AttributeSyntax>(updateModel, null);
            InvokeInstance(new UpdateMessageShouldHaveFilteringAttributesAnalyzer(), "AnalyzeAttribute", CreateContext(otherAttribute, updateModel));

            var pluginModel = CreateSemanticModel(PluginSource(@"
public class TestPlugin : Microsoft.Xrm.Sdk.IPlugin
{
    public void Execute(System.IServiceProvider serviceProvider) { }
}"));
            var noMethodAssignment = (AssignmentExpressionSyntax)SyntaxFactory.ParseExpression("field = 5");
            InvokeInstance(new StatelessPluginAnalyzer(), "AnalyzeAssignment", CreateContext(noMethodAssignment, pluginModel));
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
            var diagnostics = new System.Collections.Generic.List<Diagnostic>();
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
                "BranchCoverageTests",
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

        private static object GetConfiguredImages(SemanticModel semanticModel, string className)
        {
            return InvokeStatic(typeof(PluginImageAnalyzer), "GetConfiguredImages", FindAttributeOfClass(semanticModel, className).ArgumentList);
        }

        private static AttributeSyntax FindAttributeOfClass(SemanticModel semanticModel, string className)
        {
            return semanticModel.SyntaxTree.GetRoot()
                .DescendantNodes()
                .OfType<AttributeSyntax>()
                .Single(node =>
                {
                    var classDeclaration = node.FirstAncestorOrSelf<ClassDeclarationSyntax>();
                    return classDeclaration != null && classDeclaration.Identifier.Text == className;
                });
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
    public interface ITracingService
    {
        void Trace(string message);
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

        private static TException Catch<TException>(Action action)
            where TException : Exception
        {
            try
            {
                action();
                return null;
            }
            catch (TException exception)
            {
                return exception;
            }
        }
    }
}
