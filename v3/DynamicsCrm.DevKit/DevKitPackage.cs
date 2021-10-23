using Community.VisualStudio.Toolkit;
using Microsoft.VisualStudio.Shell;
using System;
using System.Runtime.InteropServices;
using System.Threading;
using Task = System.Threading.Tasks.Task;

namespace DynamicsCrm.DevKit
{
    [PackageRegistration(UseManagedResourcesOnly = true, AllowsBackgroundLoading = true)]
    [InstalledProductRegistration(Vsix.Name, Vsix.Description, Vsix.Version)]
    [ProvideMenuResource("Menus.ctmenu", 1)]
    [Guid(PackageGuids.DynamicsCrmDevKitString)]
    [ProvideUIContextRule(PackageGuids.CommandVisisiblityDeployWebResourceString,
        name: "Dynamics Dataverse Web Resource Files",
        expression: " html | js | png | gif | jpg | css | ico | xml | xsl | xap | resx | svg ",
        termNames: new[] { "html", "js", "png", "gif", "jpg", "css", "ico", "xml", "xsl", "xap", "resx", "svg" },
        termValues: new[] { "HierSingleSelectionName:.html$", "HierSingleSelectionName:.js$", "HierSingleSelectionName:.png$", "HierSingleSelectionName:.gif$", "HierSingleSelectionName:.jpg$", "HierSingleSelectionName:.css$", "HierSingleSelectionName:.ico$", "HierSingleSelectionName:.xml$", "HierSingleSelectionName:.xsl$", "HierSingleSelectionName:.xap$", "HierSingleSelectionName:.resx$", "HierSingleSelectionName:.svg$", })]
    public sealed partial class DevKitPackage : ToolkitPackage
    {
        protected override async Task InitializeAsync(CancellationToken cancellationToken, IProgress<ServiceProgressData> progress)
        {
            await JoinableTaskFactory.SwitchToMainThreadAsync(cancellationToken);

            await this.RegisterCommandsAsync();
        }
    }
}
