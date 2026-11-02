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

        [TestMethod]
        public async Task TransformAsync_SortsLeadingUsingsLikeTheVsHost()
        {
            // The VS T4 host organizes the leading using directives of its
            // output alphabetically (I.4 wizard compare) — the CLI engine
            // mirrors that.
            var transformer = new MonoTextTransformer();
            var template = "using System;\r\nusing Microsoft.Xrm.Sdk;\r\nusing <#= Context.PluginSharedNameSpace #>;\r\n\r\nnamespace X { }\r\n";
            var output = await transformer.TransformAsync(template, new T4Context { PluginSharedNameSpace = "Dev.AllInOne.Shared" });
            Assert.AreEqual(
                "using Dev.AllInOne.Shared;\r\nusing Microsoft.Xrm.Sdk;\r\nusing System;\r\n\r\nnamespace X { }\r\n",
                output);
        }

        [TestMethod]
        public async Task TransformAsync_SingleLeadingUsing_StaysPut()
        {
            var transformer = new MonoTextTransformer();
            var output = await transformer.TransformAsync("using System;\r\nnamespace X { }\r\n", new T4Context());
            Assert.AreEqual("using System;\r\nnamespace X { }\r\n", output);
        }

        [TestMethod]
        public async Task TransformAsync_CollapsesWhitespaceOnlyLinesLikeTheVsHost()
        {
            // The VS T4 host removes a template line whose control blocks
            // emit nothing, leaving the NEXT (empty) template line as the
            // only break (I.6 wizard compare — the unbound CustomApi guard
            // line of CustomApi.tt). Mono instead emits the template line's
            // literal indentation, which merges with the empty line's
            // newline into a whitespace-only output line. The transform
            // collapses that back to the empty line the VS host produces;
            // content lines keep their indentation.
            var transformer = new MonoTextTransformer();
            var template = "            <#if (Context.PluginLogicalName != \"none\") { #>if (guard) throw;<# } #>\r\n\r\n            tracing?.DebugContext(context);\r\n";

            var unbound = await transformer.TransformAsync(template, new T4Context { PluginLogicalName = "none" });
            Assert.AreEqual("\r\n            tracing?.DebugContext(context);\r\n", unbound);

            // Bound: both hosts swallow the empty template line after the
            // block-ended guard line — the render was already byte-
            // identical there (the transform must not touch it).
            var bound = await transformer.TransformAsync(template, new T4Context { PluginLogicalName = "account" });
            Assert.AreEqual("            if (guard) throw;\r\n            tracing?.DebugContext(context);\r\n", bound);
        }
    }
}
