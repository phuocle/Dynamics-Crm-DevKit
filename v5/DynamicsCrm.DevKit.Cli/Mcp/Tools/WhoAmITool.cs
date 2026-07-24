using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.Crm.Sdk.Messages;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;
using ModelContextProtocol.Protocol;
using ModelContextProtocol.Server;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Diagnostics;
using System.IO;
using System.Reflection;
using System.Security.Cryptography;
using System.Text;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Models;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools
{
    [McpServerToolType]
    public class WhoAmITool : McpToolBase
    {
        private readonly ServiceClient _serviceClient;

        public WhoAmITool(ServiceClient serviceClient)
        {
            _serviceClient = serviceClient;
        }

        [McpServerTool(Name = "whoami", Title = "Get current user and environment info",
            Idempotent = true, Destructive = false, ReadOnly = true,
            UseStructuredContent = true, OutputSchemaType = typeof(WhoAmIResult)),
        Description(
            "Get current user and environment information. Returns structured JSON including user identity, organization details, security roles, and DevKit runtime version.\n\n" +

            "OUTPUT:\n" +
            "- User: ID, full name, domain name, email.\n" +
            "- Organization: URL, version, friendly name, unique name, tenant/env IDs.\n" +
            "- Settings: language, currency, fiscal start, audit enabled.\n" +
            "- Roles: list of security roles assigned to the current user.\n" +
            "- DevKit runtime: version, build, assembly SHA, process info.\n\n" +

            "PARAMETERS:\n" +
            "- include_token: include OAuth access token in the response (default false).\n\n" +

            "WHEN TO USE:\n" +
            "- Confirm connected user/environment.\n" +
            "- Verify the DevKit CLI build/runtime after installation or restart.\n" +
            "- Troubleshoot security roles.\n" +
            "- Get user ID for FetchXML owner filters.")]
        public CallToolResult whoami(
            [Description(
                "Include OAuth access token (~400 tokens extra). For direct Web API calls only."
            )] bool include_token = false)
        {
            try
            {
                var response = (WhoAmIResponse)_serviceClient.Execute(new WhoAmIRequest());

                var structured = new WhoAmIResult
                {
                    UserId = response.UserId.ToString(),
                    BusinessUnitId = response.BusinessUnitId.ToString(),
                    OrganizationId = response.OrganizationId.ToString(),
                    EnvironmentUrl = GetBaseUrl(_serviceClient.ConnectedOrgUriActual),
                    Version = _serviceClient.ConnectedOrgVersion?.ToString(),
                    OrgFriendlyName = _serviceClient.ConnectedOrgFriendlyName,
                    OrgUniqueName = _serviceClient.ConnectedOrgUniqueName,
                    TenantId = _serviceClient.TenantId.ToString(),
                    EnvironmentId = _serviceClient.EnvironmentId.ToString(),
                    DevKit = BuildDevKitRuntimeInfo()
                };

                // User details
                PopulateUserDetails(structured, response.UserId);

                // Organization details
                PopulateOrgDetails(structured);

                // Access token (optional). If the getter throws, leave AccessToken null;
                // the caller can detect the missing token and request re-auth if needed.
                if (include_token)
                    structured.AccessToken = _serviceClient.CurrentAccessToken;

                // Security roles
                PopulateRoles(structured, response.UserId);

                // Build compact text
                var text = BuildCompactText(structured);

                return Success(text, structured);
            }
            catch (Exception ex)
            {
                return ThrowException(ex);
            }
        }

        private void PopulateUserDetails(WhoAmIResult result, Guid userId)
        {
            var user = _serviceClient.Retrieve("systemuser", userId,
                new ColumnSet("fullname", "domainname", "internalemailaddress"));
            result.FullName = user.GetAttributeValue<string>("fullname") ?? "";
            result.DomainName = user.GetAttributeValue<string>("domainname") ?? "";
            result.Email = user.GetAttributeValue<string>("internalemailaddress") ?? "";
        }

        private void PopulateOrgDetails(WhoAmIResult result)
        {
            var query = new QueryExpression("organization")
            {
                ColumnSet = new ColumnSet(
                    "name", "languagecode", "basecurrencyid",
                    "fiscalcalendarstart", "isauditenabled"),
                TopCount = 1
            };

            var qResult = _serviceClient.RetrieveMultiple(query);
            if (qResult.Entities.Count == 0) return;

            var org = qResult.Entities[0];

            var languageCode = org.GetAttributeValue<int?>("languagecode");
            if (languageCode.HasValue)
                result.Language = $"{languageCode} ({GetLanguageName(languageCode.Value)})";

            var currency = org.GetAttributeValue<EntityReference>("basecurrencyid");
            if (currency != null)
                result.Currency = currency.Name ?? currency.Id.ToString();

            var fiscalStart = org.GetAttributeValue<DateTime?>("fiscalcalendarstart");
            if (fiscalStart.HasValue)
                result.FiscalStart = fiscalStart.Value.ToString("yyyy-MM-dd");

            result.AuditEnabled = org.GetAttributeValue<bool?>("isauditenabled");
        }

        private void PopulateRoles(WhoAmIResult result, Guid userId)
        {
            var fetchXml = $@"
                <fetch>
                    <entity name='role'>
                        <attribute name='name'/>
                        <attribute name='roleid'/>
                        <link-entity name='systemuserroles' from='roleid' to='roleid'>
                            <filter>
                                <condition attribute='systemuserid' operator='eq' value='{userId}'/>
                            </filter>
                        </link-entity>
                        <order attribute='name'/>
                    </entity>
                </fetch>";

            var qResult = _serviceClient.RetrieveMultiple(new FetchExpression(fetchXml));
            foreach (var role in qResult.Entities)
            {
                var name = role.GetAttributeValue<string>("name") ?? "";
                var roleId = role.GetAttributeValue<Guid>("roleid");
                if (!string.IsNullOrEmpty(name))
                    result.Roles.Add(new Models.RoleInfo { Name = name, RoleId = roleId.ToString() });
            }
        }

        private static string BuildCompactText(WhoAmIResult r)
        {
            var sb = new StringBuilder(256);

            var identity = !string.IsNullOrEmpty(r.FullName)
                ? r.FullName
                : (!string.IsNullOrEmpty(r.DomainName) ? r.DomainName : r.UserId);

            var org = !string.IsNullOrEmpty(r.OrgFriendlyName)
                ? r.OrgFriendlyName
                : r.OrgUniqueName;

            sb.Append($"Connected to {org}");
            if (!string.IsNullOrEmpty(r.EnvironmentUrl))
                sb.Append($" at {r.EnvironmentUrl}");
            sb.Append($" as {identity}");
            if (!string.IsNullOrEmpty(r.Version))
                sb.Append($". Dataverse {r.Version}");
            if (r.DevKit != null && !string.IsNullOrEmpty(r.DevKit.Version))
            {
                sb.Append($". DevKit {r.DevKit.Version}");
                if (!string.IsNullOrEmpty(r.DevKit.Build))
                    sb.Append($" build {r.DevKit.Build}");
            }
            if (r.Roles.Count > 0)
                sb.Append($". {r.Roles.Count} security role(s)");
            if (r.Warnings is { Count: > 0 })
                sb.Append($". {r.Warnings.Count} warning(s)");
            sb.Append('.');

            return sb.ToString();
        }

        private static DevKitRuntimeInfo BuildDevKitRuntimeInfo()
        {
            var assembly = Assembly.GetExecutingAssembly();
            var assemblyPath = assembly.Location;
            FileVersionInfo fileVersionInfo = null;
            if (!string.IsNullOrEmpty(assemblyPath) && File.Exists(assemblyPath))
                fileVersionInfo = FileVersionInfo.GetVersionInfo(assemblyPath);

            using var process = Process.GetCurrentProcess();

            return new DevKitRuntimeInfo
            {
                Version = DynamicsCrm.DevKit.Shared.Const.Version,
                Build = DynamicsCrm.DevKit.Shared.Const.Build,
                AssemblyVersion = assembly.GetName().Version?.ToString(),
                FileVersion = fileVersionInfo?.FileVersion,
                InformationalVersion = assembly.GetCustomAttribute<AssemblyInformationalVersionAttribute>()?.InformationalVersion,
                ProcessId = process.Id,
                ProcessStartTime = new DateTimeOffset(process.StartTime).ToString("o"),
                AssemblyPath = assemblyPath,
                AssemblySha256 = ComputeSha256(assemblyPath)
            };
        }

        private static string ComputeSha256(string path)
        {
            if (string.IsNullOrEmpty(path) || !File.Exists(path)) return null;

            using var stream = File.OpenRead(path);
            using var sha256 = SHA256.Create();
            return Convert.ToHexString(sha256.ComputeHash(stream));
        }

        private static string GetBaseUrl(Uri uri)
        {
            if (uri == null) return null;
            return $"{uri.Scheme}://{uri.Host}";
        }

        private static string GetLanguageName(int lcid) => lcid switch
        {
            1078 => "Afrikaans-South Africa",
            1052 => "Albanian-Albania",
            5121 => "Arabic-Algeria",
            15361 => "Arabic-Bahrain",
            3073 => "Arabic-Egypt",
            2049 => "Arabic-Iraq",
            11265 => "Arabic-Jordan",
            13313 => "Arabic-Kuwait",
            12289 => "Arabic-Lebanon",
            4097 => "Arabic-Libya",
            6145 => "Arabic-Morocco",
            8193 => "Arabic-Oman",
            16385 => "Arabic-Qatar",
            1025 => "Arabic",
            10241 => "Arabic-Syria",
            7169 => "Arabic-Tunisia",
            14337 => "Arabic-U.A.E.",
            9217 => "Arabic-Yemen",
            1067 => "Armenian-Armenia",
            2092 => "Azeri (Cyrillic)-Azerbaijan",
            1068 => "Azeri (Latin)-Azerbaijan",
            1069 => "Basque-Spain",
            1059 => "Belarusian-Belarus",
            1026 => "Bulgarian-Bulgaria",
            1027 => "Catalan-Spain",
            3076 => "Chinese-Hong Kong S.A.R.",
            5124 => "Chinese-Macau S.A.R.",
            2052 => "Chinese (Simplified)",
            4100 => "Chinese-Singapore",
            1028 => "Chinese (Traditional)",
            1050 => "Croatian-Croatia",
            1029 => "Czech-Czech Republic",
            1030 => "Danish-Denmark",
            1125 => "Divehi-Maldives",
            2067 => "Dutch-Belgium",
            1043 => "Dutch-Netherlands",
            3081 => "English-Australia",
            10249 => "English-Belize",
            4105 => "English-Canada",
            9225 => "English-Caribbean",
            6153 => "English-Ireland",
            8201 => "English-Jamaica",
            5129 => "English-New Zealand",
            13321 => "English-Republic of the Philippines",
            7177 => "English-South Africa",
            11273 => "English-Trinidad and Tobago",
            2057 => "English-United Kingdom",
            1033 => "English",
            12297 => "English-Zimbabwe",
            1061 => "Estonian-Estonia",
            1080 => "Faroese-Faeroe Islands",
            1065 => "Farsi-Iran",
            1035 => "Finnish-Finland",
            2060 => "French-Belgium",
            3084 => "French-Canada",
            1036 => "French",
            5132 => "French-Luxembourg",
            6156 => "French-Principality of Monaco",
            4108 => "French-Switzerland",
            1071 => "FYRO Macedonian-Former Yugoslav Republic of Macedonia",
            1110 => "Galician-Spain",
            1079 => "Georgian-Georgia",
            3079 => "German-Austria",
            1031 => "German",
            5127 => "German-Liechtenstein",
            4103 => "German-Luxembourg",
            2055 => "German-Switzerland",
            1032 => "Greek-Greece",
            1095 => "Gujarati-India",
            1037 => "Hebrew-Israel",
            1081 => "Hindi-India",
            1038 => "Hungarian-Hungary",
            1039 => "Icelandic-Iceland",
            1057 => "Indonesian-Indonesia",
            1040 => "Italian-Italy",
            2064 => "Italian-Switzerland",
            1041 => "Japanese",
            1099 => "Kannada-India",
            1087 => "Kazakh-Kazakhstan",
            1111 => "Konkani-India",
            1042 => "Korean",
            1088 => "Kyrgyz-Kyrgyzstan",
            1062 => "Latvian-Latvia",
            1063 => "Lithuanian-Lithuania",
            2110 => "Malay-Brunei Darussalam",
            1086 => "Malay-Malaysia",
            1102 => "Marathi-India",
            1104 => "Mongolian-Mongolia",
            1044 => "Norwegian (Bokmål)-Norway",
            2068 => "Norwegian (Nynorsk)-Norway",
            1045 => "Polish-Poland",
            1046 => "Portuguese (Brazil)",
            2070 => "Portuguese-Portugal",
            1094 => "Punjabi-India",
            1048 => "Romanian-Romania",
            1049 => "Russian",
            1103 => "Sanskrit-India",
            3098 => "Serbian (Cyrillic)-Serbia and Montenegro",
            2074 => "Serbian (Latin)-Serbia and Montenegro",
            1051 => "Slovak-Slovakia",
            1060 => "Slovenian-Slovenia",
            11274 => "Spanish-Argentina",
            16394 => "Spanish-Bolivia",
            13322 => "Spanish-Chile",
            9226 => "Spanish-Colombia",
            5130 => "Spanish-Costa Rica",
            7178 => "Spanish-Dominican Republic",
            12298 => "Spanish-Ecuador",
            17418 => "Spanish-El Salvador",
            4106 => "Spanish-Guatemala",
            18442 => "Spanish-Honduras",
            2058 => "Spanish-Mexico",
            19466 => "Spanish-Nicaragua",
            6154 => "Spanish-Panama",
            15370 => "Spanish-Paraguay",
            10250 => "Spanish-Peru",
            20490 => "Spanish-Puerto Rico",
            1034 => "Spanish",
            14346 => "Spanish-Uruguay",
            8202 => "Spanish-Venezuela",
            3082 => "Spanish - Modern Sort-Spain",
            1089 => "Swahili-Kenya",
            2077 => "Swedish-Finland",
            1053 => "Swedish-Sweden",
            1114 => "Syriac-Syria",
            1097 => "Tamil-India",
            1092 => "Tatar-Tatarstan",
            1098 => "Telugu-India",
            1054 => "Thai-Thailand",
            1055 => "Turkish-Turkey",
            1058 => "Ukrainian-Ukraine",
            1056 => "Urdu-Islamic Republic of Pakistan",
            2115 => "Uzbek (Cyrillic)-Uzbekistan",
            1091 => "Uzbek (Latin)-Uzbekistan",
            1066 => "Vietnamese",
            1106 => "Welsh-United Kingdom",
            _ => $"LCID {lcid}"
        };
    }
}
