using Dev.DevKit.Shared;
using Dev.DevKit.Shared.Test;
using FakeXrmEasy.Plugins;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using Dev.DevKit.Server.Plugins.Account;

namespace Dev.DevKit.Test.Plugins.Account
{
    [TestClass]
    public class PostAccountCreateAsynchronousTest : FakeXrmEasyTestBase
    {
        private const StageEnum PLUGIN_STAGE = StageEnum.PostOperation;
        private const string PLUGIN_MESSAGE = "???";
        private const string PLUGIN_ENTITY_LOGICAL_NAME = "???";
        private const ExecutionModeEnum PLUGIN_EXECUTION_MODE = ExecutionModeEnum.Synchronous;

        [TestMethod]
        public void PostAccountCreateAsynchronousTest_00()
        {
            var pluginContext = _context.GetDefaultPluginContext();

            Assert.ThrowsExactly<InvalidPluginExecutionException>(() =>
            {
                _context.ExecutePluginWith <PostAccountCreateAsynchronous> (pluginContext);
            }, $"Stage does not equals {PLUGIN_STAGE}");

            pluginContext.Stage = (int)PLUGIN_STAGE;
            pluginContext.MessageName = string.Empty;
            Assert.ThrowsExactly<InvalidPluginExecutionException>(() =>
            {
                _context.ExecutePluginWith <PostAccountCreateAsynchronous> (pluginContext);
            }, $"MessageName does not equals {PLUGIN_MESSAGE}");

            pluginContext.MessageName = PLUGIN_MESSAGE;
            pluginContext.PrimaryEntityName = string.Empty;
            Assert.ThrowsExactly<InvalidPluginExecutionException>(() =>
            {
                _context.ExecutePluginWith <PostAccountCreateAsynchronous> (pluginContext);
            }, $"PrimaryEntityName does not equals {PLUGIN_ENTITY_LOGICAL_NAME}");

            pluginContext.PrimaryEntityName = PLUGIN_ENTITY_LOGICAL_NAME;
            pluginContext.Mode = -1;
            Assert.ThrowsExactly<InvalidPluginExecutionException>(() =>
            {
                _context.ExecutePluginWith <PostAccountCreateAsynchronous> (pluginContext);
            }, $"Execution does not equals {PLUGIN_EXECUTION_MODE}");

            pluginContext.Mode = (int)PLUGIN_EXECUTION_MODE;
            _context.ExecutePluginWith <PostAccountCreateAsynchronous> (pluginContext);
            Assert.IsTrue(true);
        }

        [TestMethod]
        public void PostAccountCreateAsynchronousTest_01()
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