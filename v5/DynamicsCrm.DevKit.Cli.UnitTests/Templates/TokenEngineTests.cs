using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using DynamicsCrm.DevKit.Shared.Templates;
using DynamicsCrm.DevKit.Shared.Templates.Models;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.Collections.Generic;
using System.IO;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Templates
{
    [TestClass]
    public class TokenEngineTests
    {
        private WorkspaceContext Workspace(string solutionName = "Contoso")
        {
            return new WorkspaceContext
            {
                SolutionName = solutionName,
                SolutionDirectory = Path.Combine(Path.GetTempPath(), "devkit-token-tests"),
                SharedProjectName = $"{solutionName}.Shared",
            };
        }

        [TestMethod]
        public void AddCommonTokens_FillsSolutionDerivedTokens()
        {
            var replacements = new Dictionary<string, string>();
            TokenEngine.AddCommonTokens(replacements, Workspace());
            Assert.AreEqual("Contoso.Shared", replacements["$SharedNameSpace$"]);
            Assert.AreEqual("Contoso.Shared", replacements["$SharedProject$"]);
            Assert.AreEqual("Contoso.Shared.Test", replacements["$SharedTestProject$"]);
            Assert.AreEqual("Contoso.ProxyTypes", replacements["$ProjectProxyTypes$"]);
            Assert.IsTrue(replacements["$DevKitVersion$"].StartsWith("v."));
        }

        [TestMethod]
        public void AddCommonTokens_FallsBackToSolutionSharedName()
        {
            var replacements = new Dictionary<string, string>();
            TokenEngine.AddCommonTokens(replacements, WorkspaceContext.Empty(null));
            Assert.AreEqual(".Shared", replacements["$SharedProject$"]);
        }

        [TestMethod]
        public async Task AddProjectTokensAsync_FillsProjectAndNuGetTokens()
        {
            var outputDirectory = Path.Combine(Path.GetTempPath(), "devkit-token-tests", "out");
            var workspace = Workspace();
            var replacements = new Dictionary<string, string>();
            await TokenEngine.AddProjectTokensAsync(replacements, new ProjectTemplateInput
            {
                TemplateId = "Server",
                ProjectName = "Contoso.Plugin",
                OutputDirectory = outputDirectory,
            }, workspace);

            Assert.AreEqual("Contoso.Plugin", replacements["$ProjectName$"]);
            Assert.AreEqual("contoso.plugin", replacements["$LogicalProjectName$"]);
            Assert.AreEqual("Contoso.Plugin", replacements["$SafeProjectName$"]);
            Assert.AreEqual("Contoso.Plugin", replacements["$NameSpace$"]);
            // Projects land under the solution directory (VSIX semantics).
            Assert.AreEqual(Path.Combine(workspace.SolutionDirectory, "Contoso.Plugin"), replacements["$destinationdirectory$"]);

            // NuGet tokens resolve offline through the DefaultVersions table.
            Assert.AreEqual("9.0.2.60", replacements["$Microsoft.CrmSdk.CoreAssemblies.Version$"]);
            Assert.IsFalse(string.IsNullOrEmpty(replacements["$Microsoft.CrmSdk.CoreAssemblies.XmlPackage$"]));
        }

        [TestMethod]
        public void SetConnectionValues_FillsValuesAndEnvComments()
        {
            var replacements = new Dictionary<string, string>();
            TokenEngine.SetConnectionValues(replacements, new CrmConnection
            {
                Type = "ClientSecret",
                Url = "https://contoso.crm.dynamics.com",
                ClientId = "00000000-0000-0000-0000-000000000000",
                UseProjectEnvironment = true,
            });

            Assert.AreEqual("ClientSecret", replacements["$AuthTypeValue$"]);
            Assert.AreEqual("https://contoso.crm.dynamics.com", replacements["$UrlValue$"]);
            Assert.AreEqual("00000000-0000-0000-0000-000000000000", replacements["$ClientIdValue$"]);
            Assert.IsTrue(replacements["$UrlConfigComment$"].Contains(".env"));
            Assert.IsTrue(replacements["$PasswordConfigComment$"].Contains(".env"));
        }

        [TestMethod]
        public async Task SetEmbeddedResourceTokensAsync_ReadsSharedResources()
        {
            var replacements = new Dictionary<string, string>();
            await TokenEngine.SetEmbeddedResourceTokensAsync(replacements, null);

            Assert.IsFalse(string.IsNullOrEmpty(replacements["$devkit.js$"]));
            Assert.IsFalse(string.IsNullOrEmpty(replacements["$devkit.d.ts$"]));
            Assert.IsFalse(string.IsNullOrEmpty(replacements["$Helper.cs$"]));
            Assert.IsFalse(string.IsNullOrEmpty(replacements["$Runtime$"]));

            // With no connection the bat resources must not keep the CLI
            // connection placeholder.
            Assert.IsFalse(replacements["$deploy.debug.bat$"].Contains("$CliConnectionArgs$"));
            Assert.IsFalse(replacements["$deploy.debug.bat$"].Contains(" $CliConnectionArgs$"));
        }

        [TestMethod]
        public async Task SetEmbeddedResourceTokensAsync_ConnectionTypeVariants()
        {
            var replacements = new Dictionary<string, string>();
            await TokenEngine.SetEmbeddedResourceTokensAsync(replacements, new CrmConnection { Type = "ClientSecret", Url = "https://x" });

            Assert.IsFalse(string.IsNullOrEmpty(replacements["$App.cs$"]));
            Assert.IsFalse(string.IsNullOrEmpty(replacements["$App.config$"]));
            Assert.IsFalse(string.IsNullOrEmpty(replacements["$AppCore.cs$"]));
            Assert.IsFalse(string.IsNullOrEmpty(replacements["$AppSettings.json$"]));
        }

        [TestMethod]
        public void ApplyReplacements_ReplacesAllTokens()
        {
            var replacements = new Dictionary<string, string>
            {
                ["$ProjectName$"] = "Contoso",
                ["$LogicalProjectName$"] = "contoso",
            };
            var content = "<Project>$ProjectName$-$LogicalProjectName$-keep</Project>";
            Assert.AreEqual("<Project>Contoso-contoso-keep</Project>", TokenEngine.ApplyReplacements(content, replacements));
        }

        [TestMethod]
        public void ApplyCliConnectionArgs_RemovesPlaceholderWithoutConnection()
        {
            var content = "devkit server --profile P $CliConnectionArgs$";
            Assert.AreEqual("devkit server --profile P", TokenEngine.ApplyCliConnectionArgs(content, null));
        }

        [TestMethod]
        public void AddItemTokens_FillsSchemaNameAndRootNamespace()
        {
            var replacements = new Dictionary<string, string>();
            TokenEngine.AddItemTokens(replacements, new ItemTemplateInput
            {
                TemplateId = "LateBound",
                Entity = "Account",
                RootNamespace = "Contoso.Plugin",
            }, Workspace());

            Assert.AreEqual("Account", replacements["$SchemaName$"]);
            Assert.AreEqual("Contoso.Plugin", replacements["$rootnamespace$"]);
        }
    }
}
