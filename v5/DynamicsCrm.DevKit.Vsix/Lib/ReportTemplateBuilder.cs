using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Services;
using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.Xrm.Sdk.Metadata;
using System;
using System.Globalization;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Linq;

namespace DynamicsCrm.DevKit.Lib
{
    internal static class ReportTemplateBuilder
    {
        private static readonly XNamespace XsiNamespace = "http://www.w3.org/2001/XMLSchema-instance";

        internal static async Task<string> BuildAsync(string template, ServiceClient serviceClient, EntityMetadata entityMetadata)
        {
            if (serviceClient == null) throw new ArgumentNullException(nameof(serviceClient));
            if (entityMetadata == null) throw new ArgumentNullException(nameof(entityMetadata));

            var languageCode = await new MetadataService(serviceClient).GetLanguageCodeAsync();
            var cultureName = GetCultureName(languageCode);
            var context = new ReportTemplateContext
            {
                EnvironmentBaseUrl = serviceClient.ConnectedUrl(),
                OrganizationUniqueName = serviceClient.ConnectedOrgUniqueName,
                LanguageCode = languageCode,
                CultureName = cultureName,
                EntityLogicalName = entityMetadata.LogicalName,
                EntitySchemaName = entityMetadata.SchemaName,
                EntityDisplayCollectionName = GetDisplayCollectionName(entityMetadata),
                PrimaryIdAttribute = entityMetadata.PrimaryIdAttribute,
                PrimaryNameAttribute = entityMetadata.PrimaryNameAttribute
            };

            return Build(template, context);
        }

        internal static string Build(string template, ReportTemplateContext context)
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
            SetReportLanguage(report, rdlNamespace, context.CultureName);
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

        private static void SetConnectionValues(XElement report, XNamespace rdlNamespace, ReportTemplateContext context)
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
    }

    internal sealed class ReportTemplateContext
    {
        internal string EnvironmentBaseUrl { get; set; }
        internal string OrganizationUniqueName { get; set; }
        internal int LanguageCode { get; set; }
        internal string CultureName { get; set; }
        internal string EntityLogicalName { get; set; }
        internal string EntitySchemaName { get; set; }
        internal string EntityDisplayCollectionName { get; set; }
        internal string PrimaryIdAttribute { get; set; }
        internal string PrimaryNameAttribute { get; set; }
    }
}
