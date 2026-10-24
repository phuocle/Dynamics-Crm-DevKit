using DynamicsCrm.DevKit.Cli.Templates;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Templates
{
    [TestClass]
    public class MonoTextTransformerTests
    {
        [TestMethod]
        public async Task TransformAsync_RendersContextExpression()
        {
            var transformer = new MonoTextTransformer();
            var context = new T4Context { Class = "PreAccountUpdate" };
            var output = await transformer.TransformAsync("<#= Context.Class #>", context);
            Assert.AreEqual("PreAccountUpdate", output.Trim());
        }

        [TestMethod]
        public async Task TransformAsync_SupportsControlBlocks()
        {
            // Mirrors the real DevKit .tt usage: <#= #> expressions and
            // <#if ... { #> ... <# } #> statement blocks (none of the
            // built-in templates use <#+ #> class feature blocks).
            var transformer = new MonoTextTransformer();
            var template = "order=<#= Context.PluginOrder #><#if (Context.PluginOrder > 1) { #>(extra)<# } #>";

            var withOrder = await transformer.TransformAsync(template, new T4Context { PluginOrder = 3 });
            Assert.AreEqual("order=3(extra)", withOrder.Trim());

            var withoutOrder = await transformer.TransformAsync(template, new T4Context { PluginOrder = 1 });
            Assert.AreEqual("order=1", withoutOrder.Trim());
        }

        [TestMethod]
        public async Task TransformAsync_ThrowsOnBrokenTemplate()
        {
            var transformer = new MonoTextTransformer();
            await Assert.ThrowsExactlyAsync<InvalidOperationException>(() =>
                transformer.TransformAsync("<#= ThisDoesNotExist #>", new T4Context()));
        }
    }
}
