using Community.VisualStudio.Toolkit;
using DynamicsCrm.DevKit.Lib.Forms;
using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.VisualStudio.TextTemplating;
using Microsoft.VisualStudio.TextTemplating.VSHost;
using System.Linq;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Lib
{
    internal class T4Helper
    {
        public static async Task<string> GetT4CodeAsync(ItemType itemType, string templateTitle, string subType = null)
        {
            var customTempaltes = await VsixHelper.GetCustomTemplatesAsync(itemType);
            var found = customTempaltes.FirstOrDefault(x => x.Type == itemType.ToString() && x.Title == templateTitle);
            if (found == null) return await VsixHelper.GetDefaultCustomTemplateBodyAsync(itemType, subType);
            return Helper.Decompress(found.Body);            
        }     

        public static async Task<string> ProcessTemplateAsync(string t4code, T4Context context)
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

        internal static async Task<T4Context> BuildContextAsync(FormPlugin form)
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
}
