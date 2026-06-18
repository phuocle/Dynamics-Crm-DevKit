using Dev.DevKit.Shared;
using Dev.DevKit.Shared.Test;
using FakeXrmEasy.Plugins;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using TargetPlugin = Dev.DevKit.Server.Plugins.Task.PostTaskCreateAsynchronous;

namespace Dev.DevKit.Test.Plugins.Task
{
    [TestClass]
    public class PostTaskCreateAsynchronousTest : FakeXrmEasyTestBase
    {

        private const StageEnum PLUGIN_STAGE = StageEnum.PostOperation;
        private const string PLUGIN_MESSAGE = "Create";
        private const string PLUGIN_ENTITY_LOGICAL_NAME = "task";
        private const ExecutionModeEnum PLUGIN_EXECUTION_MODE = ExecutionModeEnum.Asynchronous;

        [TestMethod]
        public void PostTaskCreateAsynchronousTest_00()
        {
            AssertInvalidPluginContext<TargetPlugin>(
                pluginContext => pluginContext.Stage = -1,
                $"Stage does not equals {PLUGIN_STAGE}",
                PLUGIN_STAGE,
                PLUGIN_MESSAGE,
                PLUGIN_ENTITY_LOGICAL_NAME,
                PLUGIN_EXECUTION_MODE);

            AssertInvalidPluginContext<TargetPlugin>(
                pluginContext => pluginContext.MessageName = string.Empty,
                $"MessageName does not equals {PLUGIN_MESSAGE}",
                PLUGIN_STAGE,
                PLUGIN_MESSAGE,
                PLUGIN_ENTITY_LOGICAL_NAME,
                PLUGIN_EXECUTION_MODE);

            AssertInvalidPluginContext<TargetPlugin>(
                pluginContext => pluginContext.PrimaryEntityName = string.Empty,
                $"PrimaryEntityName does not equals {PLUGIN_ENTITY_LOGICAL_NAME}",
                PLUGIN_STAGE,
                PLUGIN_MESSAGE,
                PLUGIN_ENTITY_LOGICAL_NAME,
                PLUGIN_EXECUTION_MODE);

            AssertInvalidPluginContext<TargetPlugin>(
                pluginContext => pluginContext.Mode = -1,
                $"Execution does not equals {PLUGIN_EXECUTION_MODE}",
                PLUGIN_STAGE,
                PLUGIN_MESSAGE,
                PLUGIN_ENTITY_LOGICAL_NAME,
                PLUGIN_EXECUTION_MODE);
        }


        [TestMethod]
        public void PostTaskCreateAsynchronousTest_01()
        {
            ////setup
            //var json = @"";
            //var remote = TestHelper.DeserializeRemoteExecutionContext(json);
            //var pluginContext = _context.GetDefaultPluginContext();
            //pluginContext.SetXrmFakedContextPlugin(remote);
            ////run

            //_context.ExecutePluginWith<TargetPlugin>(pluginContext);

            ////result
            Assert.IsTrue(true);
        }

    }
}
