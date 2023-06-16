using FakeXrmEasy.Plugins;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using System.Linq;
using $SharedNameSpace$;
using $SharedNameSpace$.Test;
using $ProjectProxyTypes$;

namespace $NameSpace$
{
    [TestClass]
    public class $class$Test : FakeXrmEasyTestBase
    {
        private const StageEnum PLUGIN_STAGE = StageEnum.$stage_string$;
        private const string PLUGIN_MESSAGE = $message$;
        private const string PLUGIN_ENTITY_LOGICAL_NAME = $logicalname$;
        private const ExecutionModeEnum PLUGIN_EXECUTION_MODE = ExecutionModeEnum.$execution$;

        [TestMethod]
        public void $class$Test_00()
        {
            var pluginContext = _context.GetDefaultPluginContext();
            Assert.ThrowsException<InvalidPluginExecutionException>(() =>
            {
                _context.ExecutePluginWith<$NameSpaceWithoutTest$.$class$>(pluginContext);
            }, $"Stage does not equals {PLUGIN_STAGE.ToString()}");
            pluginContext.Stage = (int)PLUGIN_STAGE;
            pluginContext.PrimaryEntityName = string.Empty;
            Assert.ThrowsException<InvalidPluginExecutionException>(() =>
            {
                _context.ExecutePluginWith<$NameSpaceWithoutTest$.$class$>(pluginContext);
            }, $"PrimaryEntityName does not equals {PLUGIN_ENTITY_LOGICAL_NAME}");
            pluginContext.PrimaryEntityName = PLUGIN_ENTITY_LOGICAL_NAME;
            pluginContext.MessageName = string.Empty;
            Assert.ThrowsException<InvalidPluginExecutionException>(() =>
            {
                _context.ExecutePluginWith<$NameSpaceWithoutTest$.$class$>(pluginContext);
            }, $"MessageName does not equals  {PLUGIN_MESSAGE}");
            pluginContext.MessageName = PLUGIN_MESSAGE;
            pluginContext.Mode = -1;
            Assert.ThrowsException<InvalidPluginExecutionException>(() =>
            {
                _context.ExecutePluginWith<$NameSpaceWithoutTest$.$class$>(pluginContext);
            }, $"Execution does not equals  {PLUGIN_EXECUTION_MODE.ToString()}");
            pluginContext.Mode = (int)PLUGIN_EXECUTION_MODE;
            var @class = new $NameSpaceWithoutTest$.$class$();
            var registeredPlugins = TestHelper.GetRegisteredPlugins(@class);
            Assert.IsTrue(registeredPlugins.Any(x => x.EntityLogicalName == PLUGIN_ENTITY_LOGICAL_NAME && x.Message == PLUGIN_MESSAGE && x.ExecutionMode == PLUGIN_EXECUTION_MODE && x.Stage == PLUGIN_STAGE));
        }

        [TestMethod]
        public void $class$Test_01()
        {
            ///setup
            //var json = @"";
            //var remote = TestHelper.DeserializeRemoteExecutionContext(json);
            //var pluginContext = _context.GetDefaultPluginContext();
            //pluginContext.SetXrmFakedContextPlugin(remote);
            ///run
            //_context.ExecutePluginWith<$NameSpaceWithoutTest$.$class$> (pluginContext);
            ///result
            Assert.IsTrue(true);
        }
    }
}