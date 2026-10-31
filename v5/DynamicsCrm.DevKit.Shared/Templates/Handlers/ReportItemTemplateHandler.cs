using DynamicsCrm.DevKit.Shared.Services;
using DynamicsCrm.DevKit.Shared.Templates.Models;
using Microsoft.Xrm.Sdk.Metadata;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using System.Xml.Linq;

namespace DynamicsCrm.DevKit.Shared.Templates.Handlers
{
    /// <summary>
    /// Item handler for the Report item template (VSIX 18.
    /// ReportItemTemplate) — the catalog's only template without a
    /// .vstemplate payload: the VSIX registers through the .vsz/.vsdir
    /// pair (DevKitReport.vsz launching ReportItemWizard,
    /// DevKitReportItems.vsdir defaulting the file name to Report.rdl)
    /// and the wizard asks exactly one question — FormItem's entity
    /// combo — then renders {Name}.rdl from the legacy Shared resource
    /// ReportTemplate.rdl. The rendering is ReportTemplateBuilder's
    /// eleven-step LINQ-to-XML rewrite (ConnectString/DataSourceID →
    /// Language → CRM_UILanguageId → CRM_URL → DataSet Name →
    /// QueryParameters → CommandText FetchXml → Fields → the CRM_Filtered*
    /// parameter → the ParameterName layout cells → the MSCRM
    /// CustomProperty filter), serialized with SaveOptions.
    /// DisableFormatting on the PreserveWhitespace-parsed tree — the
    /// template's own layout is kept, appended elements serialize
    /// compactly — and written UTF-8 with BOM (the wizard's
    /// ForceWriteAllTextAsync). The org reads behind the wizard are the
    /// FormItem entity metadata fill and ReportTemplateBuilder.
    /// BuildAsync's language read plus the ServiceClient's
    /// ConnectedUrl/ConnectedOrgUniqueName — the entity behind
    /// ResolveEntityAsync (the XrmHelper cache first, one
    /// ReadEntitiesMetadataAsync(EntityFilters.Entity) fill when a
    /// service can), the rest behind ResolveOrgInfoAsync so tests seed
    /// the language and environment without a ServiceClient (the input
    /// model's service is the concrete class). The wizard fails when the
    /// target file already exists; the CLI regenerates instead —
    /// Unchanged when the content matches modulo the per-generation
    /// rd:DataSourceID GUID the wizard randomizes (Guid.NewGuid) on every
    /// run, Updated otherwise, overwritten only with --force.
    /// Cross-platform port of the VSIX wizard
    /// DynamicsCrm.DevKit.Wizard.ItemTemplates.ReportItemWizard.
    /// </summary>
    public class ReportItemTemplateHandler : ITemplateHandler
    {
        public string TemplateId
        {
            get { return ItemType.Report.ToString(); }
        }

        /// <summary>
        /// The payload declaration: one generated file — the .rdl named by
        /// the report file name (the wizard's NormalizeFileName, the
        /// .vsdir's Report.rdl default) — rendered from the legacy Shared
        /// resource ReportTemplate.rdl (the wizard's
        /// VsixHelper.ReadEmbeddedResourceAsync("ReportTemplate.rdl")).
        /// The mutation is XML rewriting, not token replacement, so the
        /// file carries ReplaceParameters = false.
        /// </summary>
        public static TemplateManifest CreateManifest()
        {
            var manifest = new TemplateManifest
            {
                TemplateId = ItemType.Report.ToString(),
                Kind = TemplateKind.Item,
            };
            manifest.Files.Add(new TemplatePayloadFile { ResourceName = "ReportTemplate.rdl", TargetFileName = "$ReportName$.rdl", ReplaceParameters = false, IsGenerated = true });
            return manifest;
        }

        public async Task<ScaffoldResult> ScaffoldAsync(ScaffoldRequest request)
        {
            var result = new ScaffoldResult { TemplateId = TemplateId };
            var input = request?.ItemInput;
            if (input == null)
            {
                result.AddError("input: required");
                return result;
            }
            var entityName = input.Entity;
            if (string.IsNullOrWhiteSpace(entityName))
            {
                result.AddError("--entity: required — the entity the report's FetchXml reads.");
                return result;
            }

            var metadata = await ResolveEntityAsync(input, entityName, result);
            if (metadata == null) return result;

            var orgInfo = await ResolveOrgInfoAsync(input, result);
            if (orgInfo == null) return result;

            // The wizard's template read: the legacy Shared resource the
            // VSIX loads as DynamicsCrm.DevKit.Resources.ReportTemplate.rdl.
            var template = await TemplatePayload.ReadSharedResourceAsync("ReportTemplate.rdl");
            if (string.IsNullOrWhiteSpace(template))
            {
                throw new InvalidOperationException("resource not found: ReportTemplate.rdl");
            }

            var report = Build(template, new ReportOrgContext
            {
                EntityLogicalName = metadata.LogicalName,
                EntitySchemaName = metadata.SchemaName,
                EntityDisplayCollectionName = GetDisplayCollectionName(metadata),
                PrimaryIdAttribute = metadata.PrimaryIdAttribute,
                PrimaryNameAttribute = metadata.PrimaryNameAttribute,
                EnvironmentBaseUrl = orgInfo.EnvironmentBaseUrl,
                OrganizationUniqueName = orgInfo.OrganizationUniqueName,
                LanguageCode = orgInfo.LanguageCode,
            });
            var fileName = NormalizeFileName(input.Name);
            request.Tokens["$ReportName$"] = fileName;

            var outputDirectory = ResolveOutputDirectory(input.OutputDirectory);
            Directory.CreateDirectory(outputDirectory);
            var fullPath = Path.Combine(outputDirectory, fileName);

            // The wizard fails when the file exists; the CLI regenerates —
            // Unchanged when the content matches modulo the per-generation
            // rd:DataSourceID GUID (the wizard's Guid.NewGuid every run),
            // Updated otherwise, overwritten only with --force.
            var exists = File.Exists(fullPath);
            var action = "Created";
            if (exists)
            {
                if (input.Force)
                {
                    action = "Updated";
                }
                else
                {
                    var oldReport = await FileHelper.ReadAllTextAsync(fullPath);
                    if (string.Equals(WithoutDataSourceId(oldReport), WithoutDataSourceId(report), StringComparison.Ordinal))
                    {
                        result.Files.Add(new ScaffoldFileResult(fileName, fullPath, "Unchanged"));
                        return result;
                    }
                    action = "Updated";
                }
            }
            await FileHelper.ForceWriteAllTextAsync(fullPath, report);
            result.AddWarning("Use 'devkit uploadreport' to upload the report to Dataverse.");
            result.Files.Add(new ScaffoldFileResult(fileName, fullPath, action));
            return result;
        }

        /// <summary>
        /// Resolves the picked entity: the wizard's FormItem pick resolved
        /// through the XrmHelper cache first — by schema or logical name,
        /// case-insensitively like the entity combo's list — then one
        /// ReadEntitiesMetadataAsync(EntityFilters.Entity) when a service
        /// can fill the cache (the wizard's FormItem read). A missing
        /// entity without a cache and without a service is the wizard's
        /// unreachable state (it always runs connected) — the CLI refuses
        /// with the connection error instead.
        /// </summary>
        protected virtual async Task<EntityMetadata> ResolveEntityAsync(ItemTemplateInput input, string entityName, ScaffoldResult result)
        {
            var metadata = FindEntityMetadata(entityName);
            if (metadata == null && input.ServiceClient != null)
            {
                await new MetadataService(input.ServiceClient).ReadEntitiesMetadataAsync(EntityFilters.Entity);
                metadata = FindEntityMetadata(entityName);
            }
            if (metadata == null)
            {
                if (input.ServiceClient == null && XrmHelper.EntitiesMetadata.Count == 0)
                {
                    result.AddError("template 'Report': requires a Dataverse connection to read entity metadata. Run without --offline and pass --auth/--conn (or run from a folder with a project .env).");
                }
                else
                {
                    result.AddError($"--entity '{entityName}': entity not found in the current instance.");
                }
                return null;
            }
            return metadata;
        }

        /// <summary>
        /// The org info behind ReportTemplateBuilder.BuildAsync: the org's
        /// language code (MetadataService.GetLanguageCodeAsync) and the
        /// ServiceClient's ConnectedUrl/ConnectedOrgUniqueName the
        /// ConnectString is built from. There is no offline stand-in (the
        /// wizard always runs connected), so a service-less scaffold
        /// refuses up front.
        /// </summary>
        protected virtual async Task<ReportOrgInfo> ResolveOrgInfoAsync(ItemTemplateInput input, ScaffoldResult result)
        {
            if (input.ServiceClient == null)
            {
                result.AddError("template 'Report': requires a Dataverse connection to read the org's language and environment. Run without --offline and pass --auth/--conn (or run from a folder with a project .env).");
                return null;
            }
            return new ReportOrgInfo
            {
                LanguageCode = await new MetadataService(input.ServiceClient).GetLanguageCodeAsync(),
                EnvironmentBaseUrl = input.ServiceClient.ConnectedUrl(),
                OrganizationUniqueName = input.ServiceClient.ConnectedOrgUniqueName,
            };
        }

        private static EntityMetadata FindEntityMetadata(string entity)
        {
            if (string.IsNullOrWhiteSpace(entity)) return null;
            return XrmHelper.EntitiesMetadata.FirstOrDefault(x =>
                string.Equals(x.SchemaName, entity, StringComparison.OrdinalIgnoreCase) ||
                string.Equals(x.LogicalName, entity, StringComparison.OrdinalIgnoreCase));
        }

        /// <summary>
        /// The wizard's NormalizeFileName: the typed name is a file name
        /// (the VS Add New Item dialog's name box) — any directory part is
        /// stripped, an empty/dot name falls back to the .vsdir's
        /// Report.rdl and a missing .rdl extension is appended.
        /// </summary>
        private static string NormalizeFileName(string value)
        {
            value = Path.GetFileName(string.IsNullOrWhiteSpace(value) ? "Report.rdl" : value.Trim());
            if (string.IsNullOrWhiteSpace(value) || value == "." || value == "..")
                value = "Report.rdl";
            if (!value.EndsWith(".rdl", StringComparison.OrdinalIgnoreCase))
                value += ".rdl";
            return value;
        }

        /// <summary>
        /// The idempotency compare: the wizard regenerates rd:DataSourceID
        /// with a fresh Guid.NewGuid on every run, so the ordinal compare
        /// sees that one element through a fixed placeholder.
        /// </summary>
        private static string WithoutDataSourceId(string report)
        {
            return Regex.Replace(report, "<rd:DataSourceID>[^<]*</rd:DataSourceID>", "<rd:DataSourceID>-</rd:DataSourceID>");
        }

        private static string ResolveOutputDirectory(string outputDirectory)
        {
            return string.IsNullOrWhiteSpace(outputDirectory)
                ? Directory.GetCurrentDirectory()
                : Path.GetFullPath(outputDirectory);
        }

        /// <summary>
        /// The port of the VSIX ReportTemplateBuilder — the same eleven
        /// mutations in the same order on the same template, serialized
        /// the same way, so the CLI output matches the wizard's byte for
        /// byte except the per-generation rd:DataSourceID GUID.
        /// </summary>
        private static string Build(string template, ReportOrgContext context)
        {
            if (string.IsNullOrWhiteSpace(template)) throw new ArgumentException("The report template is empty.", nameof(template));
            if (context == null) throw new ArgumentNullException(nameof(context));

            var logicalName = RequireValue(context.EntityLogicalName, "entity logical name");
            var schemaName = RequireValue(context.EntitySchemaName, "entity schema name");
            var primaryId = RequireValue(context.PrimaryIdAttribute, "primary id attribute");
            var datasetName = SanitizeIdentifier(schemaName);
            var parameterName = $"CRM_Filtered{schemaName}";
            var displayName = RequireValue(context.EntityDisplayCollectionName, schemaName);

            var document = XDocument.Parse(template, LoadOptions.PreserveWhitespace);
            var rdlNamespace = document.Root?.Name.Namespace ?? XNamespace.None;
            var report = document.Root ?? throw new InvalidOperationException("Report template has no root element.");

            SetConnectionValues(report, rdlNamespace, context);
            SetReportLanguage(report, rdlNamespace, GetCultureName(context.LanguageCode));
            SetReportParameter(report, rdlNamespace, "CRM_UILanguageId", context.LanguageCode.ToString(CultureInfo.InvariantCulture));
            SetReportParameter(report, rdlNamespace, "CRM_URL", context.EnvironmentBaseUrl);

            var dataSet = report.Descendants(rdlNamespace + "DataSet").FirstOrDefault()
                ?? throw new InvalidOperationException("Report template does not contain a DataSet.");
            dataSet.SetAttributeValue("Name", datasetName);

            var query = dataSet.Element(rdlNamespace + "Query")
                ?? throw new InvalidOperationException("Report template DataSet does not contain Query.");
            var queryParameters = query.Element(rdlNamespace + "QueryParameters");
            if (queryParameters == null)
            {
                queryParameters = new XElement(rdlNamespace + "QueryParameters");
                query.AddFirst(queryParameters);
            }
            foreach (var queryParameter in queryParameters.Elements(rdlNamespace + "QueryParameter").ToList())
                queryParameter.Remove();
            queryParameters.Add(new XElement(rdlNamespace + "QueryParameter",
                new XAttribute("Name", parameterName),
                new XElement(rdlNamespace + "Value", $"=Parameters!{parameterName}.Value")));

            var commandText = query.Element(rdlNamespace + "CommandText")
                ?? throw new InvalidOperationException("Report template DataSet does not contain CommandText.");
            commandText.Value = BuildPrimaryFetchXml(commandText.Value, logicalName, primaryId, context.PrimaryNameAttribute, parameterName);

            var fields = dataSet.Element(rdlNamespace + "Fields");
            if (fields == null)
            {
                fields = new XElement(rdlNamespace + "Fields");
                dataSet.Add(fields);
            }
            foreach (var field in fields.Elements(rdlNamespace + "Field").ToList()) field.Remove();
            AddField(fields, rdlNamespace, context.PrimaryNameAttribute);
            AddField(fields, rdlNamespace, primaryId);

            ReplaceFilteredReportParameter(report, rdlNamespace, logicalName, primaryId, parameterName, displayName);
            ReplaceParameterLayout(report, rdlNamespace, parameterName);
            ReplaceCustomReportFilter(report, rdlNamespace, logicalName, primaryId, parameterName, displayName);

            var output = SerializeDocument(document);
            ValidateResult(output, parameterName, logicalName, primaryId);
            return output;
        }

        private static string SerializeDocument(XDocument document)
        {
            var body = document.ToString(SaveOptions.DisableFormatting).TrimStart('\r', '\n');
            if (document.Declaration == null)
                return body;

            return document.Declaration + Environment.NewLine + body;
        }

        private static void SetConnectionValues(XElement report, XNamespace rdlNamespace, ReportOrgContext context)
        {
            var connectString = report.Descendants(rdlNamespace + "ConnectString").FirstOrDefault();
            if (connectString == null) throw new InvalidOperationException("Report template does not contain a connection string.");
            connectString.Value = $"{RequireValue(context.EnvironmentBaseUrl, "environment URL")}/;{RequireValue(context.OrganizationUniqueName, "organization unique name")}";

            var dataSourceId = report.Descendants().FirstOrDefault(x => x.Name.LocalName == "DataSourceID");
            if (dataSourceId != null) dataSourceId.Value = Guid.NewGuid().ToString("D");
        }

        private static void SetReportLanguage(XElement report, XNamespace rdlNamespace, string cultureName)
        {
            var language = report.Element(rdlNamespace + "Language");
            if (language != null) language.Value = string.IsNullOrWhiteSpace(cultureName) ? "en-US" : cultureName;
        }

        private static void SetReportParameter(XElement report, XNamespace rdlNamespace, string parameterName, string value)
        {
            var parameter = report.Descendants(rdlNamespace + "ReportParameter")
                .FirstOrDefault(x => string.Equals((string)x.Attribute("Name"), parameterName, StringComparison.OrdinalIgnoreCase));
            if (parameter == null) return;

            var defaultValue = parameter.Descendants(rdlNamespace + "Value").FirstOrDefault();
            if (defaultValue == null)
            {
                var values = parameter.Element(rdlNamespace + "DefaultValue")?.Element(rdlNamespace + "Values");
                if (values == null)
                {
                    var defaultElement = parameter.Element(rdlNamespace + "DefaultValue") ?? new XElement(rdlNamespace + "DefaultValue");
                    var valuesElement = new XElement(rdlNamespace + "Values");
                    defaultElement.Add(valuesElement);
                    parameter.AddFirst(defaultElement);
                    values = valuesElement;
                }
                defaultValue = new XElement(rdlNamespace + "Value");
                values.Add(defaultValue);
            }

            defaultValue.Attribute(XsiNamespace + "nil")?.Remove();
            defaultValue.Value = value ?? string.Empty;
        }

        private static string BuildPrimaryFetchXml(string encodedFetchXml, string logicalName, string primaryId, string primaryName, string parameterName)
        {
            var fetch = XDocument.Parse(encodedFetchXml, LoadOptions.PreserveWhitespace);
            var entity = fetch.Descendants().FirstOrDefault(x => x.Name.LocalName == "entity")
                ?? throw new InvalidOperationException("Report template FetchXML does not contain an entity.");
            entity.SetAttributeValue("name", logicalName);
            entity.SetAttributeValue("enableprefiltering", "1");
            entity.SetAttributeValue("prefilterparametername", parameterName);

            foreach (var attribute in entity.Elements().Where(x => x.Name.LocalName == "attribute").ToList()) attribute.Remove();
            if (!string.IsNullOrWhiteSpace(primaryName))
            {
                entity.Add(new XElement(entity.Name.Namespace + "attribute",
                    new XAttribute("name", primaryName),
                    new XAttribute("alias", primaryName)));
            }
            entity.Add(new XElement(entity.Name.Namespace + "attribute", new XAttribute("name", primaryId)));
            return fetch.Root?.ToString(SaveOptions.DisableFormatting) ?? encodedFetchXml;
        }

        private static void AddField(XElement fields, XNamespace rdlNamespace, string fieldName)
        {
            if (string.IsNullOrWhiteSpace(fieldName)) return;
            var rdNamespace = "http://schemas.microsoft.com/SQLServer/reporting/reportdesigner";
            fields.Add(new XElement(rdlNamespace + "Field",
                new XAttribute("Name", fieldName),
                new XElement(rdlNamespace + "DataField", fieldName),
                new XElement(XNamespace.Get(rdNamespace) + "TypeName", "System.String")));
        }

        private static void ReplaceFilteredReportParameter(XElement report, XNamespace rdlNamespace, string logicalName, string primaryId, string parameterName, string displayName)
        {
            var parameter = report.Descendants(rdlNamespace + "ReportParameter")
                .FirstOrDefault(x => ((string)x.Attribute("Name"))?.StartsWith("CRM_Filtered", StringComparison.OrdinalIgnoreCase) == true);
            if (parameter == null) throw new InvalidOperationException("Report template does not contain a filtered report parameter.");
            parameter.SetAttributeValue("Name", parameterName);
            var prompt = parameter.Element(rdlNamespace + "Prompt");
            if (prompt != null) prompt.Value = displayName;
            var defaultValue = parameter.Descendants(rdlNamespace + "Value").FirstOrDefault();
            if (defaultValue != null) defaultValue.Value = BuildDefaultFilterFetchXml(logicalName, primaryId);
        }

        private static string BuildDefaultFilterFetchXml(string logicalName, string primaryId)
        {
            var fetch = new XElement("fetch",
                new XAttribute("version", "1.0"),
                new XAttribute("output-format", "xml-platform"),
                new XAttribute("mapping", "logical"),
                new XAttribute("distinct", "false"),
                new XElement("entity",
                    new XAttribute("name", logicalName),
                    new XElement("all-attributes"),
                    new XElement("filter",
                        new XAttribute("type", "and"),
                        new XElement("condition",
                            new XAttribute("attribute", primaryId),
                            new XAttribute("operator", "not-null")))));
            return fetch.ToString(SaveOptions.DisableFormatting);
        }

        private static void ReplaceParameterLayout(XElement report, XNamespace rdlNamespace, string parameterName)
        {
            foreach (var parameterNameElement in report.Descendants(rdlNamespace + "ParameterName"))
            {
                if (((string)parameterNameElement).StartsWith("CRM_Filtered", StringComparison.OrdinalIgnoreCase))
                    parameterNameElement.Value = parameterName;
            }
        }

        private static void ReplaceCustomReportFilter(XElement report, XNamespace rdlNamespace, string logicalName, string primaryId, string parameterName, string displayName)
        {
            var customValue = report.Descendants(rdlNamespace + "CustomProperty")
                .Where(x => string.Equals((string)x.Element(rdlNamespace + "Name"), "Custom", StringComparison.OrdinalIgnoreCase))
                .Select(x => x.Element(rdlNamespace + "Value"))
                .FirstOrDefault();
            if (customValue == null || string.IsNullOrWhiteSpace(customValue.Value)) return;

            var mscrm = XDocument.Parse(customValue.Value, LoadOptions.PreserveWhitespace);
            var encodedFilter = mscrm.Root?.Value;
            if (string.IsNullOrWhiteSpace(encodedFilter)) return;
            var filter = XDocument.Parse(encodedFilter, LoadOptions.PreserveWhitespace);
            var reportEntity = filter.Descendants().FirstOrDefault(x => x.Name.LocalName == "ReportEntity");
            if (reportEntity == null) return;
            reportEntity.SetAttributeValue("paramname", parameterName);
            reportEntity.SetAttributeValue("displayname", displayName);
            var entity = reportEntity.Descendants().FirstOrDefault(x => x.Name.LocalName == "entity");
            if (entity != null)
            {
                entity.SetAttributeValue("name", logicalName);
                var condition = entity.Descendants().FirstOrDefault(x => x.Name.LocalName == "condition");
                if (condition != null) condition.SetAttributeValue("attribute", primaryId);
            }
            mscrm.Root.ReplaceNodes(filter.ToString(SaveOptions.DisableFormatting));
            customValue.Value = mscrm.ToString(SaveOptions.DisableFormatting);
        }

        private static void ValidateResult(string output, string parameterName, string logicalName, string primaryId)
        {
            var document = XDocument.Parse(output, LoadOptions.PreserveWhitespace);
            var commandText = document.Descendants()
                .FirstOrDefault(x => x.Name.LocalName == "CommandText")?.Value;
            if (string.IsNullOrWhiteSpace(commandText))
                throw new InvalidOperationException("Generated report does not contain a FetchXML command.");

            XDocument fetch;
            try
            {
                fetch = XDocument.Parse(commandText, LoadOptions.PreserveWhitespace);
            }
            catch (Exception ex)
            {
                throw new InvalidOperationException("Generated report contains invalid FetchXML.", ex);
            }

            var entity = fetch.Descendants().FirstOrDefault(x => x.Name.LocalName == "entity");
            if (entity == null || !string.Equals((string)entity.Attribute("name"), logicalName, StringComparison.OrdinalIgnoreCase))
                throw new InvalidOperationException("Generated report does not contain the selected entity.");
            if (!string.Equals((string)entity.Attribute("prefilterparametername"), parameterName, StringComparison.OrdinalIgnoreCase))
                throw new InvalidOperationException("Generated report prefilter parameter is inconsistent.");
            if (!document.Descendants().Any(x => x.Name.LocalName == "Field" && string.Equals((string)x.Attribute("Name"), primaryId, StringComparison.OrdinalIgnoreCase)))
                throw new InvalidOperationException("Generated report does not contain the primary id field.");
        }

        private static string GetDisplayCollectionName(EntityMetadata metadata)
        {
            return metadata.DisplayCollectionName?.UserLocalizedLabel?.Label
                ?? metadata.DisplayCollectionName?.LocalizedLabels?.FirstOrDefault()?.Label
                ?? metadata.SchemaName;
        }

        private static string GetCultureName(int languageCode)
        {
            try
            {
                return CultureInfo.GetCultureInfo(languageCode).Name;
            }
            catch (CultureNotFoundException)
            {
                return "en-US";
            }
        }

        private static string RequireValue(string value, string description)
        {
            if (string.IsNullOrWhiteSpace(value)) throw new InvalidOperationException($"Missing {description}.");
            return value.Trim();
        }

        private static string SanitizeIdentifier(string value)
        {
            var builder = new StringBuilder(value ?? string.Empty);
            for (var index = 0; index < builder.Length; index++)
            {
                var character = builder[index];
                if (!(char.IsLetterOrDigit(character) || character == '_')) builder[index] = '_';
            }
            if (builder.Length == 0) return "Report";
            if (char.IsDigit(builder[0])) builder.Insert(0, '_');
            return builder.ToString();
        }

        private static readonly XNamespace XsiNamespace = "http://www.w3.org/2001/XMLSchema-instance";
    }

    /// <summary>
    /// The org's connected-environment info behind
    /// ReportItemTemplateHandler.ResolveOrgInfoAsync — the language code
    /// and the ServiceClient's ConnectedUrl/ConnectedOrgUniqueName.
    /// </summary>
    public sealed class ReportOrgInfo
    {
        public int LanguageCode { get; set; }
        public string EnvironmentBaseUrl { get; set; }
        public string OrganizationUniqueName { get; set; }
    }

    /// <summary>
    /// Everything ReportItemTemplateHandler's build needs from the org
    /// beyond the template itself — the picked entity's metadata fields
    /// and the connected environment's URL, unique name and language code
    /// (the port of the VSIX ReportTemplateContext).
    /// </summary>
    public sealed class ReportOrgContext
    {
        public string EnvironmentBaseUrl { get; set; }
        public string OrganizationUniqueName { get; set; }
        public int LanguageCode { get; set; }
        public string EntityLogicalName { get; set; }
        public string EntitySchemaName { get; set; }
        public string EntityDisplayCollectionName { get; set; }
        public string PrimaryIdAttribute { get; set; }
        public string PrimaryNameAttribute { get; set; }
    }
}
