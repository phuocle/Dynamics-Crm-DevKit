using FakeXrmEasy;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.Collections.Generic;

namespace Wooow.Kool.Workflow
{
    [TestClass]
    public class WooowKoolWorkflowContact_ValidateRegexTest
    {
        public static XrmFakedContext Context { get; set; }
        public static XrmFakedWorkflowContext WorkflowContext { get; set; }

        [ClassInitialize()]
        public static void ClassInit(TestContext context)
        {
            Context = new XrmFakedContext();
            WorkflowContext = Context.GetDefaultWorkflowContext();
        }

        [TestMethod]
        public void WooowKoolWorkflowContact_ValidateRegex_Return_True()
        {
            //setup 
            var inputs = new Dictionary<string, object>() {
                { "StringToValidate", "334-867-5309" },
                { "MatchPattern", @"^[2-9]\d{2}-\d{3}-\d{4}$" }
            };
            //run
            var result = Context.ExecuteCodeActivity<WooowKoolWorkflowContact_ValidateRegex>(WorkflowContext, inputs);

            //result
            Assert.AreEqual(result["Valid"], "1");
        }

        [TestMethod]
        public void WooowKoolWorkflowContact_ValidateRegex_Return_False()
        {
            //setup 
            var inputs = new Dictionary<string, object>() {
                { "StringToValidate", "A334-867-5309" },
                { "MatchPattern", @"^[2-9]\d{2}-\d{3}-\d{4}$" }
            };
            //run
            var result = Context.ExecuteCodeActivity<WooowKoolWorkflowContact_ValidateRegex>(WorkflowContext, inputs);

            //result
            Assert.AreEqual(result["Valid"], "0");
        }
    }
}
