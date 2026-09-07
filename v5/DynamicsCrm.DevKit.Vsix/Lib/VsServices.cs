using EnvDTE;
using Microsoft.VisualStudio;
using Microsoft.VisualStudio.Shell;
using Microsoft.VisualStudio.Shell.Interop;
using Microsoft.VisualStudio.Threading;
using System;
using System.Collections.Generic;
using System.ComponentModel.Design;
using System.Linq;
using System.Reflection;
using System.Threading;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Lib
{
    internal static class VsServices
    {
        private static AsyncPackage _package;

        internal static void Initialize(AsyncPackage package)
        {
            _package = package ?? throw new ArgumentNullException(nameof(package));
        }

        internal static AsyncPackage Package => _package ?? throw new InvalidOperationException("Visual Studio services have not been initialized.");

        internal static async Task<TInterface> GetServiceAsync<TService, TInterface>()
            where TInterface : class
        {
            await ThreadHelper.JoinableTaskFactory.SwitchToMainThreadAsync();
            return await Package.GetServiceAsync(typeof(TService)) as TInterface;
        }
    }

    public sealed class CommandAttribute : Attribute
    {
        public CommandAttribute(int commandId)
        {
            CommandId = commandId;
        }

        internal int CommandId { get; }
    }

    internal interface ICommandBinding
    {
        void Bind(OleMenuCommand command);
        void Invoke(EventArgs e);
    }

    public abstract class BaseCommand<T> : ICommandBinding where T : BaseCommand<T>
    {
        private OleMenuCommand _command;

        protected OleMenuCommand Command => _command;

        protected abstract Task ExecuteAsync(OleMenuCmdEventArgs e);

        protected virtual void BeforeQueryStatus(EventArgs e)
        {
        }

        private void Bind(OleMenuCommand command)
        {
            _command = command;
            command.BeforeQueryStatus += OnBeforeQueryStatus;
        }

        private void OnBeforeQueryStatus(object sender, EventArgs e)
        {
            BeforeQueryStatus(e);
        }

        private void Invoke(EventArgs e)
        {
            var commandArgs = e as OleMenuCmdEventArgs ?? new OleMenuCmdEventArgs(null, IntPtr.Zero);

            // MenuCommand callbacks are synchronous; detach the async command after handing it to JTF.
#pragma warning disable VSSDK007
            ThreadHelper.JoinableTaskFactory.RunAsync(async () =>
            {
                try
                {
                    await ExecuteAsync(commandArgs);
                }
                catch (Exception ex)
                {
                    ActivityLog.LogError("DynamicsCrm.DevKit", ex.ToString());
                    await VS.MessageBox.ShowErrorAsync(ex.Message);
                }
            }).Task.Forget();
#pragma warning restore VSSDK007
        }

        void ICommandBinding.Bind(OleMenuCommand command) => Bind(command);

        void ICommandBinding.Invoke(EventArgs e) => Invoke(e);
    }

    internal static class CommandRegistrar
    {
        internal static async Task RegisterAsync(AsyncPackage package)
        {
            await ThreadHelper.JoinableTaskFactory.SwitchToMainThreadAsync();

            var commandService = await package.GetServiceAsync(typeof(IMenuCommandService)) as OleMenuCommandService;
            if (commandService == null)
                throw new InvalidOperationException("Visual Studio command service is unavailable.");

            var assembly = typeof(CommandRegistrar).Assembly;
            var commandTypes = assembly.GetTypes()
                .Where(type => !type.IsAbstract && type.GetCustomAttributes(typeof(CommandAttribute), inherit: false).Length > 0)
                .ToArray();

            foreach (var commandType in commandTypes)
            {
                var attribute = (CommandAttribute)commandType.GetCustomAttributes(typeof(CommandAttribute), inherit: false).Single();
                var instance = Activator.CreateInstance(commandType);
                var commandId = new CommandID(PackageGuids.GuidSetDeployWebResource, attribute.CommandId);
                var menuCommand = new OleMenuCommand(
                    (sender, args) => ((ICommandBinding)instance).Invoke(args),
                    commandId);

                ((ICommandBinding)instance).Bind(menuCommand);
                commandService.AddCommand(menuCommand);
            }
        }
    }

    internal enum StatusAnimation
    {
        Deploy
    }

    public enum ProjectStateFilter
    {
        All
    }

    public sealed class SolutionItem
    {
        public string FullPath { get; set; }
    }

    public sealed class SolutionInfo
    {
        public string FullPath { get; set; }
    }

    internal static class VS
    {
        internal static Task<TInterface> GetServiceAsync<TService, TInterface>()
            where TInterface : class => VsServices.GetServiceAsync<TService, TInterface>();

        internal static class StatusBar
        {
            internal static async Task ShowMessageAsync(string message)
            {
                await ThreadHelper.JoinableTaskFactory.SwitchToMainThreadAsync();
                var statusBar = await VsServices.Package.GetServiceAsync(typeof(SVsStatusbar)) as IVsStatusbar;
                statusBar?.SetText(message ?? string.Empty);
            }

            internal static async Task ClearAsync()
            {
                await ThreadHelper.JoinableTaskFactory.SwitchToMainThreadAsync();
                var statusBar = await VsServices.Package.GetServiceAsync(typeof(SVsStatusbar)) as IVsStatusbar;
                statusBar?.Clear();
            }

            internal static async Task StartAnimationAsync(StatusAnimation animation)
            {
                await ThreadHelper.JoinableTaskFactory.SwitchToMainThreadAsync();
                var statusBar = await VsServices.Package.GetServiceAsync(typeof(SVsStatusbar)) as IVsStatusbar;
                if (statusBar == null) return;

                object icon = (short)Microsoft.VisualStudio.Shell.Interop.Constants.SBAI_Build;
                statusBar.Animation(1, ref icon);
            }

            internal static async Task EndAnimationAsync(StatusAnimation animation)
            {
                await ThreadHelper.JoinableTaskFactory.SwitchToMainThreadAsync();
                var statusBar = await VsServices.Package.GetServiceAsync(typeof(SVsStatusbar)) as IVsStatusbar;
                if (statusBar == null) return;

                object icon = (short)Microsoft.VisualStudio.Shell.Interop.Constants.SBAI_Build;
                statusBar.Animation(0, ref icon);
            }
        }

        internal static class MessageBox
        {
            internal static Task ShowErrorAsync(string message, string title = null)
            {
                return ShowAsync(message, title ?? "DynamicsCrm.DevKit", OLEMSGICON.OLEMSGICON_CRITICAL);
            }

            internal static void ShowError(string message, string title = null)
            {
                ThreadHelper.JoinableTaskFactory.Run(() => ShowErrorAsync(message, title));
            }

            internal static async Task ShowAsync(
                string message,
                string title = null,
                OLEMSGICON icon = OLEMSGICON.OLEMSGICON_INFO,
                OLEMSGBUTTON buttons = OLEMSGBUTTON.OLEMSGBUTTON_OK,
                OLEMSGDEFBUTTON defaultButton = OLEMSGDEFBUTTON.OLEMSGDEFBUTTON_FIRST)
            {
                await ThreadHelper.JoinableTaskFactory.SwitchToMainThreadAsync();
                VsShellUtilities.ShowMessageBox(VsServices.Package, message, title ?? "DynamicsCrm.DevKit", icon, buttons, defaultButton);
            }

            internal static async Task<bool> ShowConfirmAsync(string message, string title = null)
            {
                await ThreadHelper.JoinableTaskFactory.SwitchToMainThreadAsync();
                var uiShell = await VsServices.Package.GetServiceAsync(typeof(SVsUIShell)) as IVsUIShell;
                return uiShell != null && VsShellUtilities.PromptYesNo(
                    message,
                    title ?? "DynamicsCrm.DevKit",
                    OLEMSGICON.OLEMSGICON_QUERY,
                    uiShell);
            }
        }

        internal static class Commands
        {
            internal static async Task ExecuteAsync(string command)
            {
                await ThreadHelper.JoinableTaskFactory.SwitchToMainThreadAsync();
                var dte = await GetServiceAsync<DTE, DTE>();
                dte?.ExecuteCommand(command);
            }
        }

        internal static class Solutions
        {
            internal static async Task<SolutionItem> GetActiveItemAsync()
            {
                await ThreadHelper.JoinableTaskFactory.SwitchToMainThreadAsync();
                var dte = await GetServiceAsync<DTE, DTE>();
                var selected = dte?.SelectedItems;
                if (selected != null && selected.Count > 0)
                {
                    var item = selected.Item(1);
                    if (item?.ProjectItem != null)
                        return new SolutionItem { FullPath = GetProjectItemPath(item.ProjectItem) };
                    if (item?.Project != null)
                        return new SolutionItem { FullPath = item.Project.FullName };
                }

                return new SolutionItem { FullPath = dte?.ActiveDocument?.FullName };
            }

            internal static async Task<SolutionInfo> GetCurrentSolutionAsync()
            {
                await ThreadHelper.JoinableTaskFactory.SwitchToMainThreadAsync();
                var dte = await GetServiceAsync<DTE, DTE>();
                return new SolutionInfo { FullPath = dte?.Solution?.FullName };
            }

            internal static async Task<EnvDTE.Project> GetActiveProjectAsync()
            {
                await ThreadHelper.JoinableTaskFactory.SwitchToMainThreadAsync();
                var dte = await GetServiceAsync<DTE, DTE>();
                var projects = dte?.ActiveSolutionProjects as Array;
                return projects?.Length > 0 ? projects.GetValue(0) as EnvDTE.Project : null;
            }

            internal static async Task<IReadOnlyList<EnvDTE.Project>> GetAllProjectsAsync(ProjectStateFilter filter)
            {
                await ThreadHelper.JoinableTaskFactory.SwitchToMainThreadAsync();
                var dte = await GetServiceAsync<DTE, DTE>();
                var result = new List<EnvDTE.Project>();
                if (dte?.Solution?.Projects != null)
                {
                    foreach (EnvDTE.Project project in dte.Solution.Projects)
                        AddProjectTree(project, result);
                }
                return result;
            }

            internal static async Task<bool> ContainsProjectAsync(string projectName)
            {
                if (string.IsNullOrEmpty(projectName)) return false;

                await ThreadHelper.JoinableTaskFactory.SwitchToMainThreadAsync();
                var projects = await GetAllProjectsAsync(ProjectStateFilter.All);
                return HasProjectName(projects, projectName);
            }

            private static bool HasProjectName(IReadOnlyList<EnvDTE.Project> projects, string projectName)
            {
                ThreadHelper.ThrowIfNotOnUIThread();
                foreach (var project in projects)
                {
                    if (string.Equals(project.Name, projectName, StringComparison.Ordinal))
                        return true;
                }
                return false;
            }

            private static void AddProjectTree(EnvDTE.Project project, ICollection<EnvDTE.Project> result)
            {
                ThreadHelper.ThrowIfNotOnUIThread();
                if (project == null) return;
                result.Add(project);
                if (project.ProjectItems == null) return;
                foreach (ProjectItem item in project.ProjectItems)
                {
                    if (item?.SubProject != null)
                        AddProjectTree(item.SubProject, result);
                }
            }

            private static string GetProjectItemPath(ProjectItem item)
            {
                ThreadHelper.ThrowIfNotOnUIThread();
                try
                {
                    for (short i = 1; i <= item.FileCount; i++)
                    {
                        var path = item.FileNames[i];
                        if (!string.IsNullOrWhiteSpace(path)) return path;
                    }
                }
                catch
                {
                }
                return null;
            }
        }
    }
}
