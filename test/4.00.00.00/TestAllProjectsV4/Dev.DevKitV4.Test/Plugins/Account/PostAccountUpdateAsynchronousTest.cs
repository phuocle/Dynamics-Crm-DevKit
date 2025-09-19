using Dev.DevKitV4.Shared;
using Dev.DevKitV4.Shared.Test;
using FakeXrmEasy.Plugins;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using System.Linq;

namespace Dev.DevKitV4.Test.Plugins.Account
{
    [TestClass]
    public class PostAccountUpdateAsynchronousTest : FakeXrmEasyTestBase
    {
        private const StageEnum PLUGIN_STAGE = StageEnum.PostOperation;
        private const string PLUGIN_MESSAGE = "Update";
        private const string PLUGIN_ENTITY_LOGICAL_NAME = "account";
        private const ExecutionModeEnum PLUGIN_EXECUTION_MODE = ExecutionModeEnum.Asynchronous;

        [TestMethod]
        public void PostAccountUpdateAsynchronousTest_00()
        {
            var pluginContext = _context.GetDefaultPluginContext();

            Assert.ThrowsExactly<InvalidPluginExecutionException>(() =>
            {
                _context.ExecutePluginWith <Dev.DevKitV4.Server.Plugins.Account.PostAccountUpdateAsynchronous> (pluginContext);
            }, $"Stage does not equals {PLUGIN_STAGE}");

            pluginContext.Stage = (int)PLUGIN_STAGE;
            pluginContext.MessageName = string.Empty;
            Assert.ThrowsExactly<InvalidPluginExecutionException>(() =>
            {
                _context.ExecutePluginWith <Dev.DevKitV4.Server.Plugins.Account.PostAccountUpdateAsynchronous> (pluginContext);
            }, $"MessageName does not equals {PLUGIN_MESSAGE}");

            pluginContext.MessageName = PLUGIN_MESSAGE;
            pluginContext.PrimaryEntityName = string.Empty;
            Assert.ThrowsExactly<InvalidPluginExecutionException>(() =>
            {
                _context.ExecutePluginWith <Dev.DevKitV4.Server.Plugins.Account.PostAccountUpdateAsynchronous> (pluginContext);
            }, $"PrimaryEntityName does not equals {PLUGIN_ENTITY_LOGICAL_NAME}");

            pluginContext.PrimaryEntityName = PLUGIN_ENTITY_LOGICAL_NAME;
            pluginContext.Mode = -1;
            Assert.ThrowsExactly<InvalidPluginExecutionException>(() =>
            {
                _context.ExecutePluginWith <Dev.DevKitV4.Server.Plugins.Account.PostAccountUpdateAsynchronous> (pluginContext);
            }, $"Execution does not equals {PLUGIN_EXECUTION_MODE}");

            pluginContext.Mode = (int)PLUGIN_EXECUTION_MODE;
            _context.ExecutePluginWith<Dev.DevKitV4.Server.Plugins.Account.PostAccountUpdateAsynchronous>(pluginContext);
            Assert.IsTrue(true);
        }

        [TestMethod]
        public void PostAccountUpdateAsynchronousTest_01()
        {
            ////setup
            //var json = @"";
            //var remote = TestHelper.DeserializeRemoteExecutionContext(json);
            //var pluginContext = _context.GetDefaultPluginContext();
            //pluginContext.SetXrmFakedContextPlugin(remote);
            ////run
            //_context.ExecutePluginWith<???> (pluginContext);
            ////result
            Assert.IsTrue(true);
        }
    }
}