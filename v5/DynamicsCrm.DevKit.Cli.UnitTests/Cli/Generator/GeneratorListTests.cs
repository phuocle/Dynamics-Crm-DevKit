using DynamicsCrm.DevKit.Shared;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.IO;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli.Generator;

[TestClass]
[DoNotParallelize]
public class GeneratorListTests
{
    [TestMethod]
    public async Task List_ShowsTypesWithoutConnecting()
    {
        var previous = Console.Out;
        using var output = new StringWriter();
        try
        {
            Console.SetOut(output);
            var exit = await Program.Main(new[] { "generator", "list", "--plain" });
            Assert.AreEqual(0, exit);
            var text = output.ToString();
            foreach (var type in new[] { "JsForm", "JsWebApi", "TsForm", "TsWebApi", "CSharp" })
                StringAssert.Contains(text, type);
            StringAssert.Contains(text, "devkit generator --type");
            Assert.IsFalse(text.Contains("Connecting"));
        }
        finally
        {
            Console.SetOut(previous);
            SpectreLog.IsPlain = false;
        }
    }
}
