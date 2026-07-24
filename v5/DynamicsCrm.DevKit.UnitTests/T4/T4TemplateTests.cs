using DynamicsCrm.DevKit.Shared.Models;

namespace DynamicsCrm.DevKit.UnitTests.T4;

[TestClass]
public class T4TemplateTests
{
    private static T4Context CreatePluginContext(
        string message = "Update",
        string stage = "PostOperation",
        string execution = "Synchronous",
        int order = 1,
        string logicalName = "account",
        string schemaName = "Account",
        string ns = "Dev.DevKit.Server",
        string sharedNs = "Dev.DevKit.Shared",
        string className = "PostAccountUpdate")
    {
        return new T4Context
        {
            PluginMessage = message,
            PluginStage = stage,
            PluginExecution = execution,
            PluginOrder = order,
            PluginLogicalName = logicalName,
            PluginSchemaName = schemaName,
            PluginNameSpace = ns,
            PluginSharedNameSpace = sharedNs,
            Class = className,
            PluginComment = "  Plugin comment here",
            DataSource = "dev_datasource",
        };
    }

    private static string LoadTemplate(string fileName)
    {
        var ttFolder = FindTtFolder();
        return File.ReadAllText(Path.Combine(ttFolder, fileName));
    }

    private static string FindTtFolder()
    {
        var dir = new DirectoryInfo(AppContext.BaseDirectory);
        while (dir != null)
        {
            var candidate = Path.Combine(dir.FullName, "DynamicsCrm.DevKit.Shared", "Resources", "tt");
            if (Directory.Exists(candidate)) return candidate;
            dir = dir.Parent;
        }
        var fallback = Path.GetFullPath(Path.Combine(AppContext.BaseDirectory, "..", "..", "..", "..", "DynamicsCrm.DevKit.Shared", "Resources", "tt"));
        if (Directory.Exists(fallback)) return fallback;
        throw new DirectoryNotFoundException("Cannot find tt folder");
    }

    #region Plugin.tt

    [TestMethod]
    public void PluginTt_CreateMessage_ContainsTargetEntity()
    {
        var ctx = CreatePluginContext(message: "Create", stage: "PreOperation");
        var template = LoadTemplate("Plugin.tt");
        var output = SimpleT4Processor.Process(template, ctx);

        Assert.IsTrue(output.Contains("var targetEntity = context.InputParameterOrDefault<Entity>(\"Target\");"));
        Assert.IsFalse(output.Contains("var targetEntityReference"));
        Assert.IsFalse(output.Contains("var targetEntities"));
    }

    [TestMethod]
    public void PluginTt_ContainsTemplateMarker()
    {
        var ctx = CreatePluginContext();
        var template = LoadTemplate("Plugin.tt");
        var output = SimpleT4Processor.Process(template, ctx);

        Assert.IsTrue(output.Contains("[CrmPluginRegistration("));
        Assert.IsTrue(output.Contains("public class"));
    }

    [TestMethod]
    public void PluginTt_UpdateMessage_ContainsTargetEntity()
    {
        var ctx = CreatePluginContext(message: "Update");
        var template = LoadTemplate("Plugin.tt");
        var output = SimpleT4Processor.Process(template, ctx);

        Assert.IsTrue(output.Contains("var targetEntity = context.InputParameterOrDefault<Entity>(\"Target\");"));
    }

    [TestMethod]
    public void PluginTt_DeleteMessage_ContainsTargetEntityReference()
    {
        var ctx = CreatePluginContext(message: "Delete");
        var template = LoadTemplate("Plugin.tt");
        var output = SimpleT4Processor.Process(template, ctx);

        Assert.IsTrue(output.Contains("var targetEntityReference = context.InputParameterOrDefault<EntityReference>(\"Target\");"));
        Assert.IsFalse(output.Contains("var targetEntity = context.InputParameterOrDefault<Entity>"));
    }

    [TestMethod]
    public void PluginTt_CreateMultipleMessage_ContainsTargetEntities()
    {
        var ctx = CreatePluginContext(message: "CreateMultiple", stage: "PreOperation");
        var template = LoadTemplate("Plugin.tt");
        var output = SimpleT4Processor.Process(template, ctx);

        Assert.IsTrue(output.Contains("var targetEntities = context.InputParameterOrDefault<EntityCollection>(\"Targets\");"));
    }

    [TestMethod]
    public void PluginTt_UpdateMultipleMessage_ContainsTargetEntities()
    {
        var ctx = CreatePluginContext(message: "UpdateMultiple");
        var template = LoadTemplate("Plugin.tt");
        var output = SimpleT4Processor.Process(template, ctx);

        Assert.IsTrue(output.Contains("var targetEntities = context.InputParameterOrDefault<EntityCollection>(\"Targets\");"));
    }

    [TestMethod]
    public void PluginTt_OtherMessage_ContainsCommentedInputSample()
    {
        var ctx = CreatePluginContext(message: "Assign", stage: "PostOperation");
        var template = LoadTemplate("Plugin.tt");
        var output = SimpleT4Processor.Process(template, ctx);

        Assert.IsTrue(output.Contains("//var input = context.InputParameterOrDefault<Entity>(\"Target\");"));
        Assert.IsFalse(output.Contains("???"));
    }

    [TestMethod]
    public void PluginTt_Asynchronous_ContainsDeleteAsyncOperation()
    {
        var ctx = CreatePluginContext(execution: "Asynchronous");
        var template = LoadTemplate("Plugin.tt");
        var output = SimpleT4Processor.Process(template, ctx);

        Assert.IsTrue(output.Contains("DeleteAsyncOperation = true"));
    }

    [TestMethod]
    public void PluginTt_Synchronous_NoDeleteAsyncOperation()
    {
        var ctx = CreatePluginContext(execution: "Synchronous");
        var template = LoadTemplate("Plugin.tt");
        var output = SimpleT4Processor.Process(template, ctx);

        Assert.IsFalse(output.Contains("DeleteAsyncOperation"));
    }

    [TestMethod]
    public void PluginTt_UpdatePostOp_HasBothImages()
    {
        var ctx = CreatePluginContext(message: "Update", stage: "PostOperation");
        var template = LoadTemplate("Plugin.tt");
        var output = SimpleT4Processor.Process(template, ctx);

        Assert.IsTrue(output.Contains("Image1Name = \"PreImage\""));
        Assert.IsTrue(output.Contains("Image2Name = \"PostImage\""));
        Assert.IsTrue(output.Contains("PreEntityImages.TryGetValue(\"PreImage\""));
        Assert.IsTrue(output.Contains("PostEntityImages.TryGetValue(\"PostImage\""));
    }

    [TestMethod]
    public void PluginTt_CreatePostOp_HasPostImageOnly()
    {
        var ctx = CreatePluginContext(message: "Create", stage: "PostOperation");
        var template = LoadTemplate("Plugin.tt");
        var output = SimpleT4Processor.Process(template, ctx);

        Assert.IsFalse(output.Contains("Image1Name = \"PreImage\""));
        Assert.IsTrue(output.Contains("Image1Name = \"PostImage\""));
        Assert.IsTrue(output.Contains("PostEntityImages.TryGetValue(\"PostImage\""));
    }

    [TestMethod]
    public void PluginTt_CreatePreOp_NoImages()
    {
        var ctx = CreatePluginContext(message: "Create", stage: "PreOperation");
        var template = LoadTemplate("Plugin.tt");
        var output = SimpleT4Processor.Process(template, ctx);

        Assert.IsFalse(output.Contains("Image1Name"));
        Assert.IsFalse(output.Contains("Image2Name"));
        Assert.IsFalse(output.Contains("PreEntityImages"));
        Assert.IsFalse(output.Contains("PostEntityImages"));
    }

    [TestMethod]
    public void PluginTt_Order2_ClassNameHasOrder()
    {
        var ctx = CreatePluginContext(order: 2);
        var template = LoadTemplate("Plugin.tt");
        var output = SimpleT4Processor.Process(template, ctx);

        Assert.IsTrue(output.Contains("public class PostAccountUpdate2 : IPlugin"));
    }

    [TestMethod]
    public void PluginTt_Order1_ClassNameNoOrder()
    {
        var ctx = CreatePluginContext(order: 1);
        var template = LoadTemplate("Plugin.tt");
        var output = SimpleT4Processor.Process(template, ctx);

        Assert.IsTrue(output.Contains("public class PostAccountUpdate : IPlugin"));
        Assert.IsFalse(output.Contains("PostAccountUpdate1"));
    }

    [TestMethod]
    public void PluginTt_ContainsNamespace()
    {
        var ctx = CreatePluginContext();
        var template = LoadTemplate("Plugin.tt");
        var output = SimpleT4Processor.Process(template, ctx);

        Assert.IsTrue(output.Contains("namespace Dev.DevKit.Server"));
        Assert.IsTrue(output.Contains("using Dev.DevKit.Shared;"));
    }

    [TestMethod]
    public void PluginTt_ContainsRegistrationName()
    {
        var ctx = CreatePluginContext();
        var template = LoadTemplate("Plugin.tt");
        var output = SimpleT4Processor.Process(template, ctx);

        Assert.IsTrue(output.Contains("\"Dev.DevKit.Server.PostAccountUpdate\""));
    }

    [TestMethod]
    public void PluginTt_ContainsStageAndMessage()
    {
        var ctx = CreatePluginContext();
        var template = LoadTemplate("Plugin.tt");
        var output = SimpleT4Processor.Process(template, ctx);

        Assert.IsTrue(output.Contains("StageEnum.PostOperation"));
        Assert.IsTrue(output.Contains("\"Update\""));
        Assert.IsTrue(output.Contains("\"account\""));
    }

    #endregion

    #region Plugin.pac.tt

    [TestMethod]
    public void PluginPacTt_InheritsPluginBase()
    {
        var ctx = CreatePluginContext();
        var template = LoadTemplate("Plugin.pac.tt");
        var output = SimpleT4Processor.Process(template, ctx);

        Assert.IsTrue(output.Contains("public class PostAccountUpdate : PluginBase"));
        Assert.IsTrue(output.Contains("public abstract class PluginBase : IPlugin"));
    }

    [TestMethod]
    public void PluginPacTt_HasConstructorWithBase()
    {
        var ctx = CreatePluginContext();
        var template = LoadTemplate("Plugin.pac.tt");
        var output = SimpleT4Processor.Process(template, ctx);

        Assert.IsTrue(output.Contains("public PostAccountUpdate(string unsecureConfiguration, string secureConfiguration)"));
        Assert.IsTrue(output.Contains(": base(typeof(PostAccountUpdate))"));
    }

    [TestMethod]
    public void PluginPacTt_HasExecuteDataversePlugin()
    {
        var ctx = CreatePluginContext();
        var template = LoadTemplate("Plugin.pac.tt");
        var output = SimpleT4Processor.Process(template, ctx);

        Assert.IsTrue(output.Contains("protected override void ExecuteDataversePlugin(ILocalPluginContext localPluginContext)"));
    }

    [TestMethod]
    public void PluginPacTt_HasILogger()
    {
        var ctx = CreatePluginContext();
        var template = LoadTemplate("Plugin.pac.tt");
        var output = SimpleT4Processor.Process(template, ctx);

        Assert.IsTrue(output.Contains("using Microsoft.Xrm.Sdk.PluginTelemetry;"));
        Assert.IsTrue(output.Contains("ILogger Logger"));
        Assert.IsTrue(output.Contains("localPluginContext.Logger"));
    }

    [TestMethod]
    public void PluginPacTt_HasLocalTracingService()
    {
        var ctx = CreatePluginContext();
        var template = LoadTemplate("Plugin.pac.tt");
        var output = SimpleT4Processor.Process(template, ctx);

        Assert.IsTrue(output.Contains("public class LocalTracingService : ITracingService"));
        Assert.IsTrue(output.Contains("deltaMilliseconds"));
    }

    [TestMethod]
    public void PluginPacTt_HasILocalPluginContext()
    {
        var ctx = CreatePluginContext();
        var template = LoadTemplate("Plugin.pac.tt");
        var output = SimpleT4Processor.Process(template, ctx);

        Assert.IsTrue(output.Contains("public interface ILocalPluginContext"));
        Assert.IsTrue(output.Contains("public class LocalPluginContext : ILocalPluginContext"));
    }

    [TestMethod]
    public void PluginPacTt_UpdateMessage_ContainsTargetEntity()
    {
        var ctx = CreatePluginContext(message: "Update");
        var template = LoadTemplate("Plugin.pac.tt");
        var output = SimpleT4Processor.Process(template, ctx);

        Assert.IsTrue(output.Contains("var targetEntity = context.InputParameterOrDefault<Entity>(\"Target\");"));
    }

    [TestMethod]
    public void PluginPacTt_DeleteMessage_ContainsTargetEntityReference()
    {
        var ctx = CreatePluginContext(message: "Delete");
        var template = LoadTemplate("Plugin.pac.tt");
        var output = SimpleT4Processor.Process(template, ctx);

        Assert.IsTrue(output.Contains("var targetEntityReference = context.InputParameterOrDefault<EntityReference>(\"Target\");"));
    }

    [TestMethod]
    public void PluginPacTt_Asynchronous_ContainsDeleteAsyncOperation()
    {
        var ctx = CreatePluginContext(execution: "Asynchronous");
        var template = LoadTemplate("Plugin.pac.tt");
        var output = SimpleT4Processor.Process(template, ctx);

        Assert.IsTrue(output.Contains("DeleteAsyncOperation = true"));
    }

    [TestMethod]
    public void PluginPacTt_HasFaultExceptionHandling()
    {
        var ctx = CreatePluginContext();
        var template = LoadTemplate("Plugin.pac.tt");
        var output = SimpleT4Processor.Process(template, ctx);

        Assert.IsTrue(output.Contains("FaultException<OrganizationServiceFault>"));
        Assert.IsTrue(output.Contains("OrganizationServiceFault"));
    }

    #endregion

    #region CustomAction.tt

    [TestMethod]
    public void CustomActionTt_ContainsPluginTypeCustomAction()
    {
        var ctx = CreatePluginContext(message: "dev_MyAction", className: "PostAccountdev_MyAction");
        var template = LoadTemplate("CustomAction.tt");
        var output = SimpleT4Processor.Process(template, ctx);

        Assert.IsTrue(output.Contains("PluginType = PluginType.CustomAction"));
    }

    [TestMethod]
    public void CustomActionTt_ContainsOutputParameters()
    {
        var ctx = CreatePluginContext(message: "dev_MyAction", className: "PostAccountdev_MyAction");
        var template = LoadTemplate("CustomAction.tt");
        var output = SimpleT4Processor.Process(template, ctx);

        Assert.IsTrue(output.Contains("ExecuteCustomAction"));
        Assert.IsTrue(output.Contains("ParameterCollection"));
        Assert.IsTrue(output.Contains("context.OutputParameters"));
    }

    [TestMethod]
    public void CustomActionTt_Asynchronous_ContainsDeleteAsyncOperation()
    {
        var ctx = CreatePluginContext(message: "dev_MyAction", execution: "Asynchronous", className: "PostAccountdev_MyAction");
        var template = LoadTemplate("CustomAction.tt");
        var output = SimpleT4Processor.Process(template, ctx);

        Assert.IsTrue(output.Contains("DeleteAsyncOperation = true"));
    }

    #endregion

    #region CustomApi.tt

    [TestMethod]
    public void CustomApiTt_ContainsPluginTypeCustomApi()
    {
        var ctx = CreatePluginContext(message: "dev_MyApi", logicalName: "account", className: "dev_MyApi");
        var template = LoadTemplate("CustomApi.tt");
        var output = SimpleT4Processor.Process(template, ctx);

        Assert.IsTrue(output.Contains("PluginType.CustomApi"));
    }

    [TestMethod]
    public void CustomApiTt_WithEntity_ContainsEntityLogicalName()
    {
        var ctx = CreatePluginContext(message: "dev_MyApi", logicalName: "account", className: "dev_MyApi");
        var template = LoadTemplate("CustomApi.tt");
        var output = SimpleT4Processor.Process(template, ctx);

        Assert.IsTrue(output.Contains("EntityLogicalName = \"account\""));
    }

    [TestMethod]
    public void CustomApiTt_NoneEntity_NoEntityLogicalName()
    {
        var ctx = CreatePluginContext(message: "dev_MyApi", logicalName: "none", className: "dev_MyApi");
        var template = LoadTemplate("CustomApi.tt");
        var output = SimpleT4Processor.Process(template, ctx);

        Assert.IsFalse(output.Contains("EntityLogicalName = "));
    }

    [TestMethod]
    public void CustomApiTt_ContainsExecuteCustomApi()
    {
        var ctx = CreatePluginContext(message: "dev_MyApi", className: "dev_MyApi");
        var template = LoadTemplate("CustomApi.tt");
        var output = SimpleT4Processor.Process(template, ctx);

        Assert.IsTrue(output.Contains("ExecuteCustomApi"));
        Assert.IsTrue(output.Contains("ParameterCollection"));
    }

    #endregion

    #region Workflow.tt

    [TestMethod]
    public void WorkflowTt_ContainsCodeActivity()
    {
        var ctx = CreatePluginContext(className: "MyWorkflow");
        ctx.PluginNameSpace = "Dev.DevKit.Server";
        var template = LoadTemplate("Workflow.tt");
        var output = SimpleT4Processor.Process(template, ctx);

        Assert.IsTrue(output.Contains("public class MyWorkflow : CodeActivity"));
        Assert.IsTrue(output.Contains("using System.Activities;"));
    }

    [TestMethod]
    public void WorkflowTt_ContainsCrmPluginRegistration()
    {
        var ctx = CreatePluginContext(className: "MyWorkflow");
        var template = LoadTemplate("Workflow.tt");
        var output = SimpleT4Processor.Process(template, ctx);

        Assert.IsTrue(output.Contains("PluginType = PluginType.Workflow"));
    }

    [TestMethod]
    public void WorkflowTt_ContainsExecuteWorkflow()
    {
        var ctx = CreatePluginContext(className: "MyWorkflow");
        var template = LoadTemplate("Workflow.tt");
        var output = SimpleT4Processor.Process(template, ctx);

        Assert.IsTrue(output.Contains("ExecuteWorkflow"));
        Assert.IsTrue(output.Contains("IWorkflowContext"));
    }

    #endregion

    #region UiTest.tt

    [TestMethod]
    public void UiTestTt_ContainsTestClass()
    {
        var ctx = CreatePluginContext(className: "AccountTest");
        var template = LoadTemplate("UiTest.tt");
        var output = SimpleT4Processor.Process(template, ctx);

        Assert.IsTrue(output.Contains("[TestClass]"));
        Assert.IsTrue(output.Contains("public class AccountTest"));
    }

    [TestMethod]
    public void UiTestTt_ContainsXrmApp()
    {
        var ctx = CreatePluginContext(className: "AccountTest");
        var template = LoadTemplate("UiTest.tt");
        var output = SimpleT4Processor.Process(template, ctx);

        Assert.IsTrue(output.Contains("XrmApp"));
        Assert.IsTrue(output.Contains("OnlineLogin.Login"));
    }

    #endregion

    #region DataProvider templates

    [TestMethod]
    public void DataProviderCreateTt_ContainsDataSource()
    {
        var ctx = CreatePluginContext();
        var template = LoadTemplate("DataProviderCreate.tt");
        var output = SimpleT4Processor.Process(template, ctx);

        Assert.IsTrue(output.Contains("DataSource = \"dev_datasource\""));
        Assert.IsTrue(output.Contains("PluginType.DataProvider"));
        Assert.IsTrue(output.Contains("context.OutputParameters[\"id\"] = id;"));
    }

    [TestMethod]
    public void DataProviderDeleteTt_ContainsEntityReference()
    {
        var ctx = CreatePluginContext();
        var template = LoadTemplate("DataProviderDelete.tt");
        var output = SimpleT4Processor.Process(template, ctx);

        Assert.IsTrue(output.Contains("DataSource = \"dev_datasource\""));
        Assert.IsTrue(output.Contains("InputParameterOrDefault<EntityReference>(\"Target\")"));
    }

    [TestMethod]
    public void DataProviderRetrieveTt_ContainsBusinessEntity()
    {
        var ctx = CreatePluginContext();
        var template = LoadTemplate("DataProviderRetrieve.tt");
        var output = SimpleT4Processor.Process(template, ctx);

        Assert.IsTrue(output.Contains("DataSource = \"dev_datasource\""));
        Assert.IsTrue(output.Contains("context.OutputParameters[\"BusinessEntity\"] = entity;"));
    }

    [TestMethod]
    public void DataProviderRetrieveMultipleTt_ContainsBusinessEntityCollection()
    {
        var ctx = CreatePluginContext();
        var template = LoadTemplate("DataProviderRetrieveMultiple.tt");
        var output = SimpleT4Processor.Process(template, ctx);

        Assert.IsTrue(output.Contains("DataSource = \"dev_datasource\""));
        Assert.IsTrue(output.Contains("context.OutputParameters[\"BusinessEntityCollection\"] = entities;"));
        Assert.IsTrue(output.Contains("QueryExpression"));
        Assert.IsTrue(output.Contains("FetchExpression"));
    }

    [TestMethod]
    public void DataProviderUpdateTt_ContainsTargetEntity()
    {
        var ctx = CreatePluginContext();
        var template = LoadTemplate("DataProviderUpdate.tt");
        var output = SimpleT4Processor.Process(template, ctx);

        Assert.IsTrue(output.Contains("DataSource = \"dev_datasource\""));
        Assert.IsTrue(output.Contains("InputParameterOrDefault<Entity>(\"Target\")"));
    }

    [TestMethod]
    public void DataProviderTemplates_AllHaveDataSourceRetriever()
    {
        var ctx = CreatePluginContext();
        var templates = new[] { "DataProviderCreate.tt", "DataProviderDelete.tt", "DataProviderRetrieve.tt", "DataProviderRetrieveMultiple.tt", "DataProviderUpdate.tt" };

        foreach (var templateName in templates)
        {
            var template = LoadTemplate(templateName);
            var output = SimpleT4Processor.Process(template, ctx);

            Assert.IsTrue(output.Contains("IEntityDataSourceRetrieverService"), $"{templateName} should contain IEntityDataSourceRetrieverService");
            Assert.IsTrue(output.Contains("retriever.RetrieveEntityDataSource()"), $"{templateName} should contain RetrieveEntityDataSource");
        }
    }

    #endregion

    #region Test templates

    [TestMethod]
    public void TestTt_ContainsFakeXrmEasy()
    {
        var ctx = CreatePluginContext(className: "PostAccountUpdate");
        var template = LoadTemplate("Test.tt");
        var output = SimpleT4Processor.Process(template, ctx);

        Assert.IsTrue(output.Contains("FakeXrmEasyTestBase"));
        Assert.IsTrue(output.Contains("public class PostAccountUpdateTest"));
        Assert.IsTrue(output.Contains("PostAccountUpdateTest_00"));
        Assert.IsTrue(output.Contains("PostAccountUpdateTest_01"));
    }

    [TestMethod]
    public void TestTt_BasicOutput_IsCompileReady()
    {
        var ctx = CreatePluginContext(className: "PostAccountUpdate");
        var template = LoadTemplate("Test.tt");
        var output = SimpleT4Processor.Process(template, ctx);

        Assert.IsFalse(output.Contains("???"));
        Assert.IsTrue(output.Contains("Assert.IsTrue(true);"));
        Assert.IsFalse(output.Contains("ExecutePluginWith<???>"));
        Assert.IsFalse(output.Contains("using TargetPlugin ="));
    }

    [TestMethod]
    public void TestTt_GuardOutput_FillsPluginRegistrationConstants()
    {
        var ctx = CreatePluginContext(
            message: "Create",
            stage: "PostOperation",
            execution: "Asynchronous",
            logicalName: "task",
            schemaName: "Task",
            ns: "Dev.DevKit.Test.Plugins.Task",
            className: "PostTaskCreateAsynchronousError");
        ctx.TestTargetFullClassName = "Dev.DevKit.Server.Plugins.Task.PostTaskCreateAsynchronous";

        var template = LoadTemplate("Test.tt");
        var output = SimpleT4Processor.Process(template, ctx);

        Assert.IsFalse(output.Contains("???"));
        Assert.IsTrue(output.Contains("using TargetPlugin = Dev.DevKit.Server.Plugins.Task.PostTaskCreateAsynchronous;"));
        Assert.IsTrue(output.Contains("private const StageEnum PLUGIN_STAGE = StageEnum.PostOperation;"));
        Assert.IsTrue(output.Contains("private const string PLUGIN_MESSAGE = \"Create\";"));
        Assert.IsTrue(output.Contains("private const string PLUGIN_ENTITY_LOGICAL_NAME = \"task\";"));
        Assert.IsTrue(output.Contains("private const ExecutionModeEnum PLUGIN_EXECUTION_MODE = ExecutionModeEnum.Asynchronous;"));
        Assert.IsTrue(output.Contains("AssertInvalidPluginContext<TargetPlugin>("));
        Assert.IsFalse(output.Contains("CreateExecutablePluginContext("));
    }

    [TestMethod]
    public void TestTt_WorkflowStyleBasicOutput_IsCompileReady()
    {
        var ctx = CreatePluginContext(className: "MyWorkflow");
        var template = LoadTemplate("Test.tt");
        var output = SimpleT4Processor.Process(template, ctx);

        Assert.IsTrue(output.Contains("FakeXrmEasyTestBase"));
        Assert.IsTrue(output.Contains("public class MyWorkflowTest"));
        Assert.IsTrue(output.Contains("Assert.IsTrue(true);"));
        Assert.IsFalse(output.Contains("using TargetPlugin ="));
        Assert.IsFalse(output.Contains("???"));
    }

    [TestMethod]
    public void TestTt_CustomActionStyleBasicOutput_IsCompileReady()
    {
        var ctx = CreatePluginContext(className: "PostAccountdev_MyAction");
        var template = LoadTemplate("Test.tt");
        var output = SimpleT4Processor.Process(template, ctx);

        Assert.IsTrue(output.Contains("FakeXrmEasyTestBase"));
        Assert.IsTrue(output.Contains("public class PostAccountdev_MyActionTest"));
        Assert.IsTrue(output.Contains("Assert.IsTrue(true);"));
        Assert.IsFalse(output.Contains("using TargetPlugin ="));
        Assert.IsFalse(output.Contains("???"));
    }

    [TestMethod]
    public void TestTt_CustomApiStyleBasicOutput_IsCompileReady()
    {
        var ctx = CreatePluginContext(className: "dev_MyApi");
        var template = LoadTemplate("Test.tt");
        var output = SimpleT4Processor.Process(template, ctx);

        Assert.IsTrue(output.Contains("FakeXrmEasyTestBase"));
        Assert.IsTrue(output.Contains("public class dev_MyApiTest"));
        Assert.IsTrue(output.Contains("Assert.IsTrue(true);"));
        Assert.IsFalse(output.Contains("using TargetPlugin ="));
        Assert.IsFalse(output.Contains("???"));
    }

    #endregion
}
