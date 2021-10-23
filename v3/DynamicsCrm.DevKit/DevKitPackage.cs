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
    [Guid(PackageGuids.SingleFileGeneratorString)]
    [ProvideUIContextRule(PackageGuids.CommandVisisiblityString,
        name: "Sass files",
        expression: " js | html | css",
        termNames: new[] { "js", "html", "css" },
        termValues: new[] { "HierSingleSelectionName:.js$", "HierSingleSelectionName:.html$", "HierSingleSelectionName:.css$" })]
    public sealed partial class DevKitPackage : ToolkitPackage
    {
        protected override async Task InitializeAsync(CancellationToken cancellationToken, IProgress<ServiceProgressData> progress)
        {
            await JoinableTaskFactory.SwitchToMainThreadAsync(cancellationToken);

            await this.RegisterCommandsAsync();
        }
    }
}
