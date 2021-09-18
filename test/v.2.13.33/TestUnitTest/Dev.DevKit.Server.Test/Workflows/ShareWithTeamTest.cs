using Dev.DevKit.ProxyTypes;
using Dev.DevKit.Server.Workflows;
using FakeXrmEasy;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.Collections.Generic;
using System.Reflection;

namespace Dev.DevKit.Server.Test.Workflows
{
    [TestClass]
    public class ShareWithTeamTest
    {
        public static XrmFakedContext Context { get; set; }
        public static XrmFakedWorkflowContext Workflow { get; set; }

        [ClassInitialize()]
        public static void ClassInit(TestContext context)
        {
            Context = new XrmFakedContext();
            Context.ProxyTypesAssembly = Assembly.GetAssembly(typeof(ProxyTypesAssembly));
            Workflow = Context.GetDefaultWorkflowContext();
        }

        [TestMethod]
        public void _01_ExecuteWorkflow()
        {
            //setup
            //var json = "";
            //var debugContext = Debug.JsonToDebugContext(json);
            //Plugin.InputParameters["???"] = (???)debugContext.InputParameters["???"];
            var inputs = new Dictionary<string, object>() { };
            //run
            var outputs = Context.ExecuteCodeActivity<ShareWithTeam>(inputs);
            //result
            Assert.IsTrue(true);
        }
    }
}
