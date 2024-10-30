using Dev.DevKit.ProxyTypes;
using FakeXrmEasy;
using FakeXrmEasy.CodeActivities;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.Reflection;

namespace Dev.DevKit.WorkflowAccount.Test
{
    [TestClass]
    public class SendEmailTest
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
            //Plugin.SetDebugContext(json);
            //run
            //Context.ExecutePluginWith<SendEmail>(Plugin);
            //result
            Assert.IsTrue(true);
        }
    }
}