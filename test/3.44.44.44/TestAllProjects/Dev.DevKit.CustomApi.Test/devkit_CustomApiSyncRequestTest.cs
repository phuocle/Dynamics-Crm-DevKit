using Dev.DevKit.CustomApi;
using Dev.DevKit.ProxyTypes;
using Dev.DevKit.Shared;
using Dev.DevKit.Shared.Test;
using FakeXrmEasy.Plugins;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using System.Linq;

namespace Dev.DevKit.CustomApiTest
{
    [TestClass]
    public class devkit_CustomApiSyncRequestTest : FakeXrmEasyTestBase
    {
        private const StageEnum PLUGIN_STAGE = StageEnum.PostOperation;
        private const string PLUGIN_MESSAGE = "devkit_CustomApiSyncRequest";
        private const string PLUGIN_ENTITY_LOGICAL_NAME = "devkit_CustomApiSync";
        private const ExecutionModeEnum PLUGIN_EXECUTION_MODE = ExecutionModeEnum.Asynchronous;

        [TestMethod]
        public void devkit_CustomApiSyncRequestTest_00()
        {
            var pluginContext = _context.GetDefaultPluginContext();
            Assert.ThrowsException<InvalidPluginExecutionException>(() =>
            {
                _context.ExecutePluginWith<devkit_CustomApiSyncRequest>(pluginContext);
            }, $"Stage does not equals {PLUGIN_STAGE.ToString()}");
            pluginContext.Stage = (int)PLUGIN_STAGE;
            pluginContext.PrimaryEntityName = string.Empty;
            Assert.ThrowsException<InvalidPluginExecutionException>(() =>
            {
                _context.ExecutePluginWith<devkit_CustomApiSyncRequest>(pluginContext);
            }, $"PrimaryEntityName does not equals {PLUGIN_ENTITY_LOGICAL_NAME}");
            pluginContext.PrimaryEntityName = PLUGIN_ENTITY_LOGICAL_NAME;
            pluginContext.MessageName = string.Empty;
            Assert.ThrowsException<InvalidPluginExecutionException>(() =>
            {
                _context.ExecutePluginWith<devkit_CustomApiSyncRequest>(pluginContext);
            }, $"MessageName does not equals  {PLUGIN_MESSAGE}");
            pluginContext.MessageName = PLUGIN_MESSAGE;
            pluginContext.Mode = -1;
            Assert.ThrowsException<InvalidPluginExecutionException>(() =>
            {
                _context.ExecutePluginWith<devkit_CustomApiSyncRequest>(pluginContext);
            }, $"Execution does not equals  {PLUGIN_EXECUTION_MODE.ToString()}");
            pluginContext.Mode = (int)PLUGIN_EXECUTION_MODE;
            var @class = new devkit_CustomApiSyncRequest();
            var registeredPlugins = TestHelper.GetRegisteredPlugins(@class);
            Assert.IsTrue(registeredPlugins.Any(x => x.EntityLogicalName == PLUGIN_ENTITY_LOGICAL_NAME && x.Message == PLUGIN_MESSAGE && x.ExecutionMode == PLUGIN_EXECUTION_MODE && x.Stage == PLUGIN_STAGE));
        }

        [TestMethod]
        public void devkit_CustomApiSyncRequestTest_01()
        {
            ////setup
            //var json = @"";
            //var remote = TestHelper.DeserializeRemoteExecutionContext(json);
            //var pluginContext = _context.GetDefaultPluginContext();
            //pluginContext.SetXrmFakedContextPlugin(remote);
            ////run
            //_context.ExecutePluginWith<devkit_CustomApiSyncRequest> (pluginContext);
            ////result
            Assert.IsTrue(true);
        }
    }
}