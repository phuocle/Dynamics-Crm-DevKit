using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Metadata;
using System.Collections.Generic;
using System.Text.Json;
using System.Xml.Linq;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Form
{
    internal sealed class FormXmlBuilder
    {
        private readonly IOrganizationService _orgService;

        public FormXmlBuilder(IOrganizationService orgService)
        {
            _orgService = orgService;
        }

        public XElement BuildSectionElement(string name, string label, int sectionColumns,
            List<JsonElement> fields, Dictionary<string, AttributeMetadata> attrMap,
            Dictionary<string, string> classIdMap, bool showLabel, bool visible,
            bool hideOnPhone, System.Collections.Generic.HashSet<string> existingControlIds)
        {
            var section = new XElement("section",
                new XAttribute("name", name),
                new XAttribute("showlabel", showLabel ? "true" : "false"),
                new XAttribute("id", FormXmlHelpers.NewGuid()),
                new XAttribute("columns", sectionColumns.ToString()),
                new XAttribute("celllabelposition", "Left"),
                new XAttribute("labelwidth", "115"));

            if (!visible) section.Add(new XAttribute("visible", "false"));
            if (hideOnPhone) section.Add(new XAttribute("availableforphone", "false"));

            section.Add(new XElement("labels",
                new XElement("label",
                    new XAttribute("description", label),
                    new XAttribute("languagecode", McpHelper.GetBaseLanguageCode(_orgService).ToString()))));

            var rowsElement = new XElement("rows");

            if (fields.Count > 0)
            {
                var cells = new System.Collections.Generic.List<XElement>();
                foreach (var fieldEl in fields)
                {
                    var (fieldName, fieldLabel, disabled, fieldVisible, colspan, rowspan, fieldShowlabel, hideOnPhoneField) = FormFieldMetadata.ParseFieldSpec(fieldEl);
                    var attr = attrMap[fieldName];
                    fieldName = FormXmlHelpers.CorrectFieldName(fieldName, attr);
                    var classid = FormXmlHelpers.ResolveClassId(attr);
                    classIdMap[fieldName] = classid;

                    var resolvedLabel = fieldLabel
                        ?? attr.DisplayName?.UserLocalizedLabel?.Label
                        ?? fieldName;

                    var controlId = FormXmlHelpers.DeduplicateControlId(fieldName, existingControlIds);
                    cells.Add(BuildCellElement(controlId, fieldName, resolvedLabel, classid, disabled, fieldVisible, colspan, rowspan, fieldShowlabel, hideOnPhoneField));
                }

                var rows = FormXmlHelpers.BuildRows(cells, sectionColumns);
                foreach (var row in rows)
                    rowsElement.Add(row);
            }

            section.Add(rowsElement);
            return section;
        }

        public XElement BuildCellElement(string controlId, string fieldName, string label, string classid,
            bool disabled, bool visible, int colspan, int rowspan, bool showlabel, bool hideOnPhone)
        {
            var cell = new XElement("cell",
                new XAttribute("id", FormXmlHelpers.NewGuid()),
                new XAttribute("showlabel", showlabel ? "true" : "false"),
                new XAttribute("locklevel", "0"));

            if (!visible)
                cell.Add(new XAttribute("visible", "false"));
            if (hideOnPhone)
                cell.Add(new XAttribute("availableforphone", "false"));
            if (colspan > 1)
                cell.Add(new XAttribute("colspan", colspan.ToString()));
            if (rowspan > 1)
                cell.Add(new XAttribute("rowspan", rowspan.ToString()));

            cell.Add(new XElement("labels",
                new XElement("label",
                    new XAttribute("description", label),
                    new XAttribute("languagecode", McpHelper.GetBaseLanguageCode(_orgService).ToString()))));

            var control = new XElement("control",
                new XAttribute("id", controlId),
                new XAttribute("classid", $"{{{classid}}}"),
                new XAttribute("datafieldname", fieldName));

            if (disabled)
                control.Add(new XAttribute("disabled", "true"));

            cell.Add(control);
            return cell;
        }
    }
}
