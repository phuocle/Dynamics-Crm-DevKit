using Community.VisualStudio.Toolkit;
using DynamicsCrm.DevKit.Lib.Forms;
using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.VisualStudio.TextTemplating;
using Microsoft.VisualStudio.TextTemplating.VSHost;
using System;
using System.Linq;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Lib
{
    internal class T4Helper
    {
        internal const string DefaultTemplateTitle = "Default";

        public static async Task<string> GetT4CodeAsync(ItemType itemType, string templateTitle, string subType = null)
        {
            using (ItemTemplateTelemetry.Start(itemType.ToString(), "t4", "GetT4Code", $"title={templateTitle}; subType={subType}"))
            {
                if (string.Equals(templateTitle, DefaultTemplateTitle, StringComparison.Ordinal))
                    return await VsixHelper.GetDefaultCustomTemplateBodyAsync(itemType, subType);

                var customTempaltes = await VsixHelper.GetCustomTemplatesAsync(itemType);
                var found = customTempaltes.FirstOrDefault(x => x.Type == itemType.ToString() && x.Title == templateTitle);
                if (found == null) return await VsixHelper.GetDefaultCustomTemplateBodyAsync(itemType, subType);
                return Helper.Decompress(found.Body);
            }
        }     

        public static async Task<string> ProcessTemplateAsync(string t4code, T4Context context)
        {
            using (ItemTemplateTelemetry.Start(context?.Class, "t4", "ProcessTemplate"))
            {
                T4Callback cb = new T4Callback();
                var t4 = await VS.GetServiceAsync<STextTemplating, ITextTemplating>();
                ITextTemplatingSessionHost sessionHost = t4 as ITextTemplatingSessionHost;
                sessionHost.Session = sessionHost.CreateSession();
                sessionHost.Session["Context"] = context;
                t4code = "<#@ parameter type=\"DynamicsCrm.DevKit.Shared.Models.T4Context\" name=\"Context\"#>" + t4code;
                var code = t4.ProcessTemplate("", t4code, cb);
                if (cb.errorMessages.Count > 0) return string.Join("\r\n", cb.errorMessages);
                return code;
            }
        }

        internal static async Task<T4Context> BuildContextAsync(FormPlugin form)
        {
            using (ItemTemplateTelemetry.Start(form?.GetType().Name, "t4", "BuildContext"))
            {
                var t4Context = new T4Context
                {
                    PluginComment = form.PluginComment,
                    PluginNameSpace = form.PluginNameSpace,
                    PluginExecution = form.PluginExecution,
                    PluginMessage = form.PluginMessage,
                    PluginStage = form.PluginStage,
                    PluginSchemaName = form.PluginSchemaName,
                    PluginOrder = form.PluginOrder,
                    Class = form.Class,
                    PluginLogicalName = form.PluginLogicalName,
                    PluginSharedNameSpace = await VsixHelper.GetSharedProjectAsync(),
                    DataSource = form.DataSource,
                    EntityDisplayName = form.EntityDisplayName,
                    EntitySetName = form.EntitySetName,
                    EntityTypeCode = form.EntityTypeCode,
                    IsCustomEntity = form.IsCustomEntity,
                    TestTargetFullClassName = form.TestTargetFullClassName,
                };
                return t4Context;
            }
        }

        internal static async Task<T4Context> BuildClassContextAsync(FormPlugin form)
        {
            using (ItemTemplateTelemetry.Start(form?.GetType().Name, "t4", "BuildClassContext"))
            {
                return new T4Context
                {
                    PluginNameSpace = form.PluginNameSpace,
                    PluginOrder = form.PluginOrder,
                    Class = form.Class,
                    PluginSharedNameSpace = await VsixHelper.GetSharedProjectAsync(),
                };
            }
        }

        internal static async Task<T4Context> BuildTestContextAsync(FormPlugin form)
        {
            using (ItemTemplateTelemetry.Start(form?.GetType().Name, "t4", "BuildTestContext"))
            {
                return new T4Context
                {
                    PluginNameSpace = form.PluginNameSpace,
                    PluginExecution = form.PluginExecution,
                    PluginMessage = form.PluginMessage,
                    PluginStage = form.PluginStage,
                    PluginSchemaName = form.PluginSchemaName,
                    PluginLogicalName = form.PluginLogicalName,
                    PluginOrder = form.PluginOrder,
                    Class = form.Class,
                    PluginSharedNameSpace = await VsixHelper.GetSharedProjectAsync(),
                    TestTargetFullClassName = form.TestTargetFullClassName,
                };
            }
        }
    }
}
