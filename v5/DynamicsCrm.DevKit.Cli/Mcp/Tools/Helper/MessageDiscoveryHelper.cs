using DynamicsCrm.DevKit.Shared.Services;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper
{
    internal static class MessageDiscoveryHelper
    {
        public static async Task<string> GetMessageMarkdownAsync(
            MetadataService metadataService,
            string scope,
            bool includeCustomActions)
        {
            var normalizedScope = NormalizeScope(scope);
            var isNoneScope = normalizedScope == "none";

            var sdkMessages = isNoneScope
                ? await metadataService.GetSdkMessagesNoneAsync()
                : await metadataService.GetSdkMessagesAsync(normalizedScope);

            var customActions = includeCustomActions
                ? (isNoneScope ? await metadataService.GetCustomActionsAsync() : await metadataService.GetCustomActionsAsync(normalizedScope))
                : [];

            var customActionNames = customActions.Select(x => x.Name);
            if (isNoneScope)
            {
                var customApis = await metadataService.GetCustomApisAsync(normalizedScope);
                if (customApis.Count > 0)
                {
                    var apiNames = new HashSet<string>(customApis.Select(x => x.Name));
                    customActionNames = customActionNames.Where(x => !apiNames.Contains(x));
                }
            }

            return CompactFormatter.FormatMessages(
                normalizedScope,
                sdkMessages.Select(x => x.Name),
                customActionNames);
        }

        public static string NormalizeScope(string scope)
        {
            if (string.IsNullOrWhiteSpace(scope))
                return "none";

            var normalized = scope.Trim().ToLowerInvariant();
            return normalized == "global" ? "none" : normalized;
        }
    }
}
