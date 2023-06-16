using Dev.DevKit.ProxyTypes;
using Dev.DevKit.Shared;
using Dev.DevKit.Shared.Test;
using FakeXrmEasy.Plugins;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using System.Linq;

namespace Dev.DevKit.Plugin.Account.Test
{
    [TestClass]
    public class PreValidationAccountCreateSynchronousTest : FakeXrmEasyTestBase
    {
        private const StageEnum PLUGIN_STAGE = StageEnum.PreValidation;
        private const string PLUGIN_MESSAGE = "Create";
        private const string PLUGIN_ENTITY_LOGICAL_NAME = "account";
        private const ExecutionModeEnum PLUGIN_EXECUTION_MODE = ExecutionModeEnum.Synchronous;

        [TestMethod]
        public void PreValidationAccountCreateSynchronousTest_00()
        {
            var pluginContext = _context.GetDefaultPluginContext();
            Assert.ThrowsException<InvalidPluginExecutionException>(() =>
            {
                _context.ExecutePluginWith<Dev.DevKit.PluginAccount.PreValidationAccountCreateSynchronous>(pluginContext);
            }, $"Stage does not equals {PLUGIN_STAGE.ToString()}");
            pluginContext.Stage = (int)PLUGIN_STAGE;
            pluginContext.PrimaryEntityName = string.Empty;
            Assert.ThrowsException<InvalidPluginExecutionException>(() =>
            {
                _context.ExecutePluginWith<Dev.DevKit.PluginAccount.PreValidationAccountCreateSynchronous>(pluginContext);
            }, $"PrimaryEntityName does not equals {PLUGIN_ENTITY_LOGICAL_NAME}");
            pluginContext.PrimaryEntityName = PLUGIN_ENTITY_LOGICAL_NAME;
            pluginContext.MessageName = string.Empty;
            Assert.ThrowsException<InvalidPluginExecutionException>(() =>
            {
                _context.ExecutePluginWith<Dev.DevKit.PluginAccount.PreValidationAccountCreateSynchronous>(pluginContext);
            }, $"MessageName does not equals  {PLUGIN_MESSAGE}");
            pluginContext.MessageName = PLUGIN_MESSAGE;
            pluginContext.Mode = -1;
            Assert.ThrowsException<InvalidPluginExecutionException>(() =>
            {
                _context.ExecutePluginWith<Dev.DevKit.PluginAccount.PreValidationAccountCreateSynchronous>(pluginContext);
            }, $"Execution does not equals  {PLUGIN_EXECUTION_MODE.ToString()}");
            pluginContext.Mode = (int)PLUGIN_EXECUTION_MODE;
            var @class = new Dev.DevKit.PluginAccount.PreValidationAccountCreateSynchronous();
            var registeredPlugins = TestHelper.GetRegisteredPlugins(@class);
            Assert.IsTrue(registeredPlugins.Any(x => x.EntityLogicalName == PLUGIN_ENTITY_LOGICAL_NAME && x.Message == PLUGIN_MESSAGE && x.ExecutionMode == PLUGIN_EXECUTION_MODE && x.Stage == PLUGIN_STAGE));
        }

        [TestMethod]
        public void PreValidationAccountCreateSynchronousTest_01()
        {
            ///setup
            //var json = @"";
            //var remote = TestHelper.DeserializeRemoteExecutionContext(json);
            //var pluginContext = _context.GetDefaultPluginContext();
            //pluginContext.SetXrmFakedContextPlugin(remote);
            ///run
            //_context.ExecutePluginWith<Dev.DevKit.PluginAccount.PreValidationAccountCreateSynchronous> (pluginContext);
            ///result
            Assert.IsTrue(true);
        }
    }
}