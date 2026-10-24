using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using System;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Shared.Templates.T4
{
    /// <summary>
    /// Cross-platform port of T4Helper.GetT4CodeAsync plus the default
    /// template mapping of VsixHelper.GetDefaultCustomTemplateBodyAsync:
    /// "Default" resolves the built-in .tt resource, anything else resolves
    /// a custom template from DynamicsCrm.DevKit.Cli.json (compressed body).
    /// </summary>
    public static class T4TemplateResolver
    {
        public const string DefaultTemplateTitle = "Default";

        public static async Task<string> GetT4CodeAsync(ItemType itemType, string templateTitle, string subType = null, string configJsonDirectory = null)
        {
            if (string.Equals(templateTitle, DefaultTemplateTitle, StringComparison.Ordinal) || string.IsNullOrWhiteSpace(templateTitle))
            {
                return await GetDefaultTemplateBodyAsync(itemType, subType);
            }

            var customTemplate = await FindCustomTemplateAsync(itemType, templateTitle, configJsonDirectory);
            if (customTemplate == null)
            {
                return await GetDefaultTemplateBodyAsync(itemType, subType);
            }
            return Helper.Decompress(customTemplate.Body);
        }

        public static async Task<string> GetDefaultTemplateBodyAsync(ItemType itemType, string subType = null)
        {
            if (itemType == ItemType.Plugin)
                return await TemplatePayload.ReadSharedResourceAsync("tt.Plugin.tt");
            if (itemType == ItemType.Workflow)
                return await TemplatePayload.ReadSharedResourceAsync("tt.Workflow.tt");
            if (itemType == ItemType.CustomAction)
                return await TemplatePayload.ReadSharedResourceAsync("tt.CustomAction.tt");
            if (itemType == ItemType.CustomApi)
                return await TemplatePayload.ReadSharedResourceAsync("tt.CustomApi.tt");
            if (itemType == ItemType.Test)
                return await TemplatePayload.ReadSharedResourceAsync("tt.Test.tt");
            if (itemType == ItemType.UiTest)
                return await TemplatePayload.ReadSharedResourceAsync("tt.UiTest.tt");
            if (itemType == ItemType.DataProvider)
            {
                if (subType == "Create")
                    return await TemplatePayload.ReadSharedResourceAsync("tt.DataProviderCreate.tt");
                if (subType == "Update")
                    return await TemplatePayload.ReadSharedResourceAsync("tt.DataProviderUpdate.tt");
                if (subType == "Delete")
                    return await TemplatePayload.ReadSharedResourceAsync("tt.DataProviderDelete.tt");
                if (subType == "Retrieve")
                    return await TemplatePayload.ReadSharedResourceAsync("tt.DataProviderRetrieve.tt");
                if (subType == "RetrieveMultiple")
                    return await TemplatePayload.ReadSharedResourceAsync("tt.DataProviderRetrieveMultiple.tt");
            }
            return null;
        }

        private static async Task<CustomTemplate> FindCustomTemplateAsync(ItemType itemType, string templateTitle, string configJsonDirectory)
        {
            var fileName = FindConfigJsonPath(configJsonDirectory);
            if (fileName == null || !File.Exists(fileName)) return null;

            var configJson = JsonHelper.Deserialize<ConfigJson>(await FileHelper.ReadAllTextAsync(fileName));
            var customTemplates = configJson?.CustomTemplates;
            if (customTemplates == null) return null;
            return customTemplates.FirstOrDefault(x =>
                x.Type == $"{itemType}" &&
                string.Equals(x.Title, templateTitle, StringComparison.Ordinal));
        }

        /// <summary>
        /// Walks up from the given directory (or the current directory) to
        /// find DynamicsCrm.DevKit.Cli.json — the file-system equivalent of
        /// VsixHelper.GetDynamicsCrmDevKitConfigJsonFullFileNameAsync.
        /// </summary>
        private static string FindConfigJsonPath(string startDirectory)
        {
            var directory = new DirectoryInfo(string.IsNullOrWhiteSpace(startDirectory)
                ? Directory.GetCurrentDirectory()
                : startDirectory);
            while (directory != null)
            {
                var candidate = Path.Combine(directory.FullName, Const.DynamicsCrmDevKitCliJson);
                if (File.Exists(candidate)) return candidate;
                directory = directory.Parent;
            }
            return null;
        }
    }
}
