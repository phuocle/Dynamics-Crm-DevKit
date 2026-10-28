using DynamicsCrm.DevKit.Shared.Models;
using DynamicsCrm.DevKit.Shared.Templates.Models;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Shared.Templates.T4
{
    /// <summary>
    /// Cross-platform port of the Build*ContextAsync family in
    /// DynamicsCrm.DevKit.Vsix/Lib/T4Helper.cs. Takes ItemTemplateInput +
    /// WorkspaceContext instead of the WPF FormPlugin dialog, so every host
    /// builds identical T4Context instances.
    /// </summary>
    public static class T4ContextFactory
    {
        /// <summary>
        /// Full context for custom templates and message-driven items.
        /// Mirrors T4Helper.BuildContextAsync.
        /// </summary>
        public static T4Context BuildContext(ItemTemplateInput input, WorkspaceContext workspace)
        {
            return new T4Context
            {
                PluginComment = BuildComment(input),
                PluginNameSpace = input.RootNamespace,
                PluginExecution = input.Execution,
                PluginMessage = input.Message,
                PluginStage = input.Stage,
                PluginSchemaName = input.Entity,
                PluginOrder = input.Order,
                Class = BuildClassName(input),
                PluginLogicalName = BuildLogicalName(input),
                PluginSharedNameSpace = workspace?.SharedProjectNameSpace,
                DataSource = input.DataSource,
                EntitySetName = input.Entity,
                TestTargetFullClassName = input.Class,
            };
        }

        /// <summary>
        /// Minimal class-only context (UiTest). Mirrors
        /// T4Helper.BuildClassContextAsync.
        /// </summary>
        public static T4Context BuildClassContext(ItemTemplateInput input, WorkspaceContext workspace)
        {
            return new T4Context
            {
                PluginNameSpace = input.RootNamespace,
                PluginOrder = input.Order,
                Class = BuildClassName(input),
                PluginSharedNameSpace = workspace?.SharedProjectNameSpace,
            };
        }

        /// <summary>
        /// Context for the default Plugin.tt. Mirrors
        /// T4Helper.BuildPluginContextAsync.
        /// </summary>
        public static T4Context BuildPluginContext(ItemTemplateInput input, WorkspaceContext workspace)
        {
            return new T4Context
            {
                PluginComment = BuildComment(input),
                PluginNameSpace = input.RootNamespace,
                PluginExecution = input.Execution,
                PluginMessage = input.Message,
                PluginStage = input.Stage,
                PluginOrder = input.Order,
                Class = BuildClassName(input),
                PluginLogicalName = BuildLogicalName(input),
                PluginSharedNameSpace = workspace?.SharedProjectNameSpace,
            };
        }

        /// <summary>
        /// Context for Test.tt. Mirrors T4Helper.BuildTestContextAsync.
        /// </summary>
        public static T4Context BuildTestContext(ItemTemplateInput input, WorkspaceContext workspace)
        {
            return new T4Context
            {
                PluginNameSpace = input.RootNamespace,
                PluginExecution = input.Execution,
                PluginMessage = input.Message,
                PluginStage = input.Stage,
                PluginSchemaName = input.Entity,
                PluginLogicalName = BuildLogicalName(input),
                PluginOrder = input.Order,
                Class = BuildClassName(input),
                PluginSharedNameSpace = workspace?.SharedProjectNameSpace,
                TestTargetFullClassName = input.Class,
            };
        }

        /// <summary>
        /// Context shared by the 5 DataProvider*.tt templates. Mirrors
        /// T4Helper.BuildDataProviderContextAsync.
        /// </summary>
        public static T4Context BuildDataProviderContext(ItemTemplateInput input, WorkspaceContext workspace)
        {
            return new T4Context
            {
                PluginNameSpace = input.RootNamespace,
                Class = BuildClassName(input),
                DataSource = input.DataSource,
                PluginOrder = 1,
                PluginSharedNameSpace = workspace?.SharedProjectNameSpace,
            };
        }

        private static string BuildClassName(ItemTemplateInput input)
        {
            return !string.IsNullOrEmpty(input.Class) ? input.Class : input.Name;
        }

        private static string BuildLogicalName(ItemTemplateInput input)
        {
            // Entity schema names are PascalCase; the logical name used by
            // the templates is the lowercase form.
            return !string.IsNullOrEmpty(input.Entity) ? input.Entity.ToLowerInvariant() : input.Entity;
        }

        private static string BuildComment(ItemTemplateInput input)
        {
            // The wizard derives the comment from the org (the plugin
            // message's InputParameters/OutputParameters doc); hosts pass it
            // pre-built through Comment — an EMPTY string is a provided
            // "no comment" (offline), null falls back to the legacy
            // Name-when-Class-is-set hosts.
            if (input.Comment != null) return input.Comment;
            return !string.IsNullOrEmpty(input.Class) && !string.IsNullOrEmpty(input.Name) ? input.Name : input.Class ?? input.Name;
        }
    }
}
