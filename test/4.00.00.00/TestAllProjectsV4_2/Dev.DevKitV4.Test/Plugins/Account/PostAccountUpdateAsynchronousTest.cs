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
            //setup
            var json = TestHelper.Decompress("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");
            var remote = TestHelper.DeserializeRemoteExecutionContext(json);
            var pluginContext = _context.GetDefaultPluginContext();
            pluginContext.SetXrmFakedContextPlugin(remote);
            //run
            _context.ExecutePluginWith <Dev.DevKitV4.Server.Plugins.Account.PostAccountUpdateAsynchronous> (pluginContext);
            //result
            Assert.IsTrue(true);
        }
    }
}