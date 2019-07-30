using System;
using System.IO;
using System.Linq;
using System.ServiceModel.Description;
using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using DynamicsCrm.DevKit.Shared.Models.Cli;
using EnvDTE;
using Microsoft.Xrm.Sdk.Client;

namespace DynamicsCrm.DevKit.Package
{
    public class UtilityPackage
    {
        public static object GetGlobal(string globalName, DTE dte)
        {
            var globals = dte.Globals;
            return globals.VariableExists[globalName] ? globals[globalName] : null;
        }

        public static void SetGlobal(string globalName, object value, DTE dte)
        {
            var globals = dte.Globals;
            globals[globalName] = value;
        }

        public static VisualStudioConfig IsValid(DTE dte)
        {
            var activeDocument = dte.ActiveDocument;
            var solutionFullName = dte.Solution.FullName;
            var currentSolutionDirectory = Path.GetDirectoryName(solutionFullName);
            var jsonFile = Path.Combine(currentSolutionDirectory, "DynamicsCrm.DevKit.Cli.json");
            var configFile = Path.Combine(currentSolutionDirectory, "DynamicsCrm.DevKit.json");
            if (!File.Exists(configFile))
            {
                SetDTEStatusBar(dte, " !!! Failed when reading DynamicsCrm.DevKit.json config !!! ", true);
                return null;
            }
            var vs = SimpleJson.DeserializeObject<Json>(File.ReadAllText(jsonFile)).visualstudio;
            if (vs == null)
            {
                SetDTEStatusBar(dte, " !!! Failed when reading DynamicsCrm.DevKit.Cli.json config !!! ", true);
                return null;
            }
            if (vs.connection.Length == 0 || vs.connection == "???")
            {
                SetDTEStatusBar(dte, " !!! Failed when reading DynamicsCrm.DevKit.Cli.json connection config !!! ", true);
                return null;
            }
            var crmConnection = SimpleJson.DeserializeObject<DevKitCrmConfig>(File.ReadAllText(configFile))
                                          .CrmConnections.FirstOrDefault(x => x.Name == vs.connection);
            if (crmConnection == null)
            {
                SetDTEStatusBar(dte, " !!! Failed when reading DynamicsCrm.DevKit.json connection config !!! ", true);
                return null;
            }
            if (vs.webresourceprofile.Length == 0 || vs.webresourceprofile == "???")
            {
                SetDTEStatusBar(dte, " !!! Failed when reading DynamicsCrm.DevKit.Cli.json webresourceprofile config !!! ", true);
                return null;
            }
            var jsonWebResource = SimpleJson.DeserializeObject<Json>(File.ReadAllText(jsonFile))
                .webresources.FirstOrDefault(x => x.profile == vs.webresourceprofile);
            if (jsonWebResource == null)
            {
                SetDTEStatusBar(dte, " !!! Failed when reading DynamicsCrm.DevKit.Cli.json webresourceprofile config !!! ", true);
                return null;
            }
            return new VisualStudioConfig
            {
                CrmConnection = crmConnection,
                JsonWebResource = jsonWebResource
            };
        }

        public static void SetDTEStatusBar(DTE dte, string text, bool isStopAnimate = false)
        {
            if (isStopAnimate)
            {
                dte.StatusBar.Animate(false, vsStatusAnimation.vsStatusAnimationDeploy);
            }
            dte.StatusBar.Text = text;
        }

        public static OrganizationServiceProxy IsConnection(CrmConnection crmConnection)
        {
            try
            {
                var uri = new Uri(crmConnection.Url);
                var clientCredentials = new ClientCredentials();
                clientCredentials.UserName.UserName = crmConnection.UserName;
                clientCredentials.UserName.Password = Utility.TryDecryptPassword(crmConnection.Password);
                var connection = new OrganizationServiceProxy(uri, null, clientCredentials, null);
                return connection;
            }
            catch
            {
                return null;
            }
        }
    }
}
