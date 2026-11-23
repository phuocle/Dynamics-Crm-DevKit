using DynamicsCrm.DevKit.Shared.Templates;
using DynamicsCrm.DevKit.Shared.Templates.Models;
using DynamicsCrm.DevKit.Cli.Templates;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Collections.Generic;
using System.IO;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Templates;

/// <summary>
/// Drives every item-template handler's validation ladder: bare request, request
/// without entity, request without name, and a fully-filled offline request.
/// </summary>
[TestClass]
[DoNotParallelize]
public sealed class HandlerValidationLadderWave3Tests
{
    private string _directory = null!;

    [TestInitialize]
    public void Setup() => _directory = Path.Combine(Path.GetTempPath(), "devkit-ladder-" + Guid.NewGuid().ToString("N"));

    [TestCleanup]
    public void Cleanup() => try_del();

    private void try_del()
    {
        try { Directory.Delete(_directory, true); } catch { }
    }

    private static readonly (Type Handler, string TemplateId)[] Handlers =
    [
        (typeof(DynamicsCrm.DevKit.Shared.Templates.Handlers.CustomActionItemTemplateHandler), "CustomAction"),
        (typeof(DynamicsCrm.DevKit.Shared.Templates.Handlers.TestItemTemplateHandler), "Test"),
        (typeof(DynamicsCrm.DevKit.Shared.Templates.Handlers.CustomApiItemTemplateHandler), "CustomApi"),
        (typeof(DynamicsCrm.DevKit.Shared.Templates.Handlers.WorkflowItemTemplateHandler), "Workflow"),
        (typeof(DynamicsCrm.DevKit.Shared.Templates.Handlers.DataProviderItemTemplateHandler), "DataProvider"),
        (typeof(DynamicsCrm.DevKit.Shared.Templates.Handlers.UiTestItemTemplateHandler), "UiTest"),
        (typeof(DynamicsCrm.DevKit.Shared.Templates.Handlers.ReportItemTemplateHandler), "Report"),
        (typeof(DynamicsCrm.DevKit.Shared.Templates.Handlers.BatFileItemTemplateHandler), "BatFile"),
        (typeof(DynamicsCrm.DevKit.Shared.Templates.Handlers.LateBoundItemTemplateHandler), "LateBound"),
        (typeof(DynamicsCrm.DevKit.Shared.Templates.Handlers.TsFormItemTemplateHandler), "TsForm"),
        (typeof(DynamicsCrm.DevKit.Shared.Templates.Handlers.TsWebApiItemTemplateHandler), "TsWebApi"),
        (typeof(DynamicsCrm.DevKit.Shared.Templates.Handlers.ResourceStringItemTemplateHandler), "ResourceString"),
        (typeof(DynamicsCrm.DevKit.Shared.Templates.Handlers.TsDialogItemTemplateHandler), "TsDialog"),
        (typeof(DynamicsCrm.DevKit.Shared.Templates.Handlers.JsDialogItemTemplateHandler), "JsDialog"),
        (typeof(DynamicsCrm.DevKit.Shared.Templates.Handlers.PluginItemTemplateHandler), "Plugin"),
        (typeof(DynamicsCrm.DevKit.Shared.Templates.Handlers.JsFormItemTemplateHandler), "JsForm"),
        (typeof(DynamicsCrm.DevKit.Shared.Templates.Handlers.JsWebApiItemTemplateHandler), "JsWebApi"),
    ];

    [TestMethod]
    public async Task Every_Handler_Rejects_Bare_Request()
    {
        foreach (var (handlerType, _) in Handlers)
        {
            var handler = Activator.CreateInstance(handlerType)!;
            var scaffold = Invoke(handler, new ScaffoldRequest());
            Assert.IsFalse(scaffold.Success, handlerType.Name + " accepted a bare request.");
            Assert.IsTrue(scaffold.Errors.Count > 0, handlerType.Name + " produced no error text.");
        }
    }

    [TestMethod]
    public async Task Every_Handler_Gates_Missing_Entity_And_Name()
    {
        foreach (var (handlerType, templateId) in Handlers)
        {
            var handler = Activator.CreateInstance(handlerType)!;

            var noEntity = Invoke(handler, Request(templateId, entity: "", name: "Thing", @class: "Thing"));
            Assert.IsFalse(noEntity.Success, handlerType.Name + " accepted an empty entity.");

            var noName = Invoke(handler, Request(templateId, entity: "account", name: "", @class: ""));
            Assert.IsFalse(noName.Success, handlerType.Name + " accepted an empty name.");

            try_del();
        }
    }

    [TestMethod]
    public async Task Every_Handler_Accepts_Or_Gracesfully_Fails_Filled_Offline_Request()
    {
        foreach (var (handlerType, templateId) in Handlers)
        {
            var handler = Activator.CreateInstance(handlerType)!;
            var filled = Request(templateId, entity: "account", name: "Account Thing", @class: "AccountThing");
            var result = Invoke(handler, filled);
            Assert.IsNotNull(result, handlerType.Name + " returned null.");
            try_del();
        }
    }

    private static DynamicsCrm.DevKit.Shared.Templates.Models.ScaffoldResult Invoke(object handler, ScaffoldRequest request)
    {
        var method = handler.GetType().GetMethod("ScaffoldAsync", new[] { typeof(ScaffoldRequest) })
            ?? throw new InvalidOperationException("ScaffoldAsync not found on " + handler.GetType().Name);
        var task = (Task<ScaffoldResult>)method.Invoke(handler, new object[] { request })!;
        return task.GetAwaiter().GetResult();
    }

    private ScaffoldRequest Request(string templateId, string entity, string name, string @class)
    {
        return new ScaffoldRequest
        {
            ItemInput = new ItemTemplateInput
            {
                TemplateId = templateId,
                Entity = entity,
                Name = name,
                Class = @class,
                Message = "Create",
                Stage = "PostOperation",
                Execution = "Synchronous",
                Order = 1,
                OutputDirectory = _directory,
                Offline = true,
                RootNamespace = "Dev.Contoso.Server",
                Transformer = new DynamicsCrm.DevKit.Cli.Templates.MonoTextTransformer()
            },
            Tokens = new Dictionary<string, string>()
        };
    }
}
