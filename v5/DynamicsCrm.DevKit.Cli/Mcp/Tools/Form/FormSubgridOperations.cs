using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.Xrm.Sdk.Query;
using System;
using System.Linq;
using System.Text.Json;
using System.Xml.Linq;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Form
{
    internal sealed class FormSubgridOperations
    {
        private readonly ServiceClient _serviceClient;

        public FormSubgridOperations(ServiceClient serviceClient)
        {
            _serviceClient = serviceClient;
        }

        public string ExecuteAddSubgrid(XDocument formDoc, JsonElement op)
        {
            var tabName = FormXmlHelpers.GetStringProp(op, "tab")
                ?? throw new InvalidOperationException("add_subgrid requires 'tab'.");
            var sectionName = FormXmlHelpers.GetStringProp(op, "section")
                ?? throw new InvalidOperationException("add_subgrid requires 'section'.");
            var label = FormXmlHelpers.GetStringProp(op, "label")
                ?? throw new InvalidOperationException("add_subgrid requires 'label'.");
            var controlId = FormXmlHelpers.GetStringProp(op, "control_id")
                ?? throw new InvalidOperationException("add_subgrid requires 'control_id'.");
            var relationshipName = FormXmlHelpers.GetStringProp(op, "relationship_name")
                ?? throw new InvalidOperationException("add_subgrid requires 'relationship_name'.");
            var targetEntity = FormXmlHelpers.GetStringProp(op, "target_entity")
                ?? throw new InvalidOperationException("add_subgrid requires 'target_entity'.");
            var viewId = NormalizeViewId(FormXmlHelpers.GetStringProp(op, "view_id") ?? ResolveDefaultViewId(targetEntity));
            var rowsPerPage = FormXmlHelpers.GetIntProp(op, "rows_per_page", 10);
            var rowspan = FormXmlHelpers.GetIntProp(op, "rowspan", 10);
            var enableViewPicker = FormXmlHelpers.GetBoolProp(op, "enable_view_picker", false);
            var enableQuickFind = FormXmlHelpers.GetBoolProp(op, "enable_quick_find", false);
            var position = FormXmlHelpers.GetStringProp(op, "position") ?? "last";

            if (FormXmlHelpers.CollectExistingControlIds(formDoc).Contains(controlId))
                throw new InvalidOperationException($"Subgrid control_id '{controlId}' already exists on the form.");

            var tabElement = FormXmlHelpers.FindTab(formDoc, tabName);
            if (tabElement == null)
                throw new InvalidOperationException(
                    $"Tab '{tabName}' not found. Available tabs: {string.Join(", ", FormXmlHelpers.GetTabNames(formDoc))}");

            var sectionElement = FormXmlHelpers.FindSection(tabElement, sectionName);
            if (sectionElement == null)
                throw new InvalidOperationException(
                    $"Section '{sectionName}' not found in tab '{tabName}'. Available sections: {string.Join(", ", FormXmlHelpers.GetSectionNames(tabElement))}");

            var rowsElement = sectionElement.Element("rows");
            if (rowsElement == null)
            {
                rowsElement = new XElement("rows");
                sectionElement.Add(rowsElement);
            }

            var row = new XElement("row",
                BuildSubgridCell(label, controlId, relationshipName, targetEntity, viewId, rowsPerPage, rowspan, enableViewPicker, enableQuickFind));
            InsertSubgridRow(rowsElement, row, position);

            return $"add_subgrid: \"{label}\" ({controlId}) in section \"{sectionName}\" in tab \"{tabName}\"";
        }

        public static string ExecuteUpdateSubgrid(XDocument formDoc, JsonElement op)
        {
            var controlId = FormXmlHelpers.GetStringProp(op, "control_id")
                ?? throw new InvalidOperationException("update_subgrid requires 'control_id'.");
            var control = FindSubgridControl(formDoc, controlId);
            var cell = control.Ancestors("cell").First();

            if (op.TryGetProperty("label", out var labelProp) && labelProp.ValueKind == JsonValueKind.String)
            {
                var labelEl = cell.Element("labels")?.Element("label");
                if (labelEl != null)
                    labelEl.SetAttributeValue("description", labelProp.GetString());
            }

            if (op.TryGetProperty("visible", out var visibleProp))
            {
                if (visibleProp.ValueKind == JsonValueKind.True)
                    cell.Attribute("visible")?.Remove();
                else if (visibleProp.ValueKind == JsonValueKind.False)
                    cell.SetAttributeValue("visible", "false");
            }

            var parameters = control.Element("parameters") ?? new XElement("parameters");
            if (parameters.Parent == null)
                control.Add(parameters);

            if (op.TryGetProperty("rows_per_page", out var rowsProp) && rowsProp.ValueKind == JsonValueKind.Number)
                SetParameter(parameters, "RecordsPerPage", rowsProp.GetInt32().ToString());
            if (op.TryGetProperty("enable_view_picker", out var viewPickerProp))
                SetParameter(parameters, "EnableViewPicker", BoolToXml(viewPickerProp.ValueKind == JsonValueKind.True));
            if (op.TryGetProperty("enable_quick_find", out var quickFindProp))
                SetParameter(parameters, "EnableQuickFind", BoolToXml(quickFindProp.ValueKind == JsonValueKind.True));

            return $"update_subgrid: \"{controlId}\" updated";
        }

        public static string ExecuteRemoveSubgrid(XDocument formDoc, JsonElement op)
        {
            var controlId = FormXmlHelpers.GetStringProp(op, "control_id")
                ?? throw new InvalidOperationException("remove_subgrid requires 'control_id'.");
            var control = FindSubgridControl(formDoc, controlId);
            var cell = control.Ancestors("cell").First();
            cell.Remove();

            return $"remove_subgrid: \"{controlId}\" removed";
        }

        private static XElement BuildSubgridCell(string label, string controlId, string relationshipName,
            string targetEntity, string viewId, int rowsPerPage, int rowspan, bool enableViewPicker, bool enableQuickFind)
        {
            return new XElement("cell",
                new XAttribute("id", FormXmlHelpers.NewGuid()),
                new XAttribute("showlabel", "true"),
                new XAttribute("locklevel", "0"),
                new XAttribute("rowspan", rowspan.ToString()),
                new XAttribute("colspan", "1"),
                new XAttribute("auto", "false"),
                new XElement("labels",
                    new XElement("label",
                        new XAttribute("description", label),
                        new XAttribute("languagecode", "1033"))),
                new XElement("control",
                    new XAttribute("id", controlId),
                    new XAttribute("classid", $"{{{ControlClassId.SUB_GRID}}}"),
                    new XElement("parameters",
                        new XElement("TargetEntityType", targetEntity),
                        new XElement("ViewId", viewId),
                        new XElement("ViewIds", viewId),
                        new XElement("RelationshipName", relationshipName),
                        new XElement("EnableViewPicker", BoolToXml(enableViewPicker)),
                        new XElement("EnableQuickFind", BoolToXml(enableQuickFind)),
                        new XElement("RecordsPerPage", rowsPerPage.ToString()),
                        new XElement("AutoExpand", "Fixed"),
                        new XElement("ChartGridMode", "Grid"))));
        }

        private string ResolveDefaultViewId(string targetEntity)
        {
            if (_serviceClient == null)
                throw new InvalidOperationException("view_id is required when no Dataverse service client is available.");

            var query = new QueryExpression("savedquery")
            {
                ColumnSet = new ColumnSet("savedqueryid", "name", "isdefault"),
                TopCount = 1
            };
            query.Criteria.AddCondition("returnedtypecode", ConditionOperator.Equal, targetEntity);
            query.Criteria.AddCondition("querytype", ConditionOperator.Equal, 0);
            query.Criteria.AddCondition("statecode", ConditionOperator.Equal, 0);
            query.AddOrder("isdefault", OrderType.Descending);
            query.AddOrder("name", OrderType.Ascending);

            var result = _serviceClient.RetrieveMultiple(query);
            var view = result.Entities.FirstOrDefault()
                ?? throw new InvalidOperationException($"No active public view found for target_entity '{targetEntity}'. Provide view_id explicitly.");

            return view.Id.ToString();
        }

        private static string NormalizeViewId(string viewId)
        {
            var trimmed = viewId?.Trim().Trim('{', '}');
            if (!Guid.TryParse(trimmed, out var parsed))
                throw new InvalidOperationException($"view_id '{viewId}' is not a valid GUID.");

            return $"{{{parsed}}}";
        }

        private static void InsertSubgridRow(XElement rowsElement, XElement row, string position)
        {
            if (position.StartsWith("after:", StringComparison.OrdinalIgnoreCase))
            {
                var target = FindRowByControlOrField(rowsElement, position.Substring(6).Trim());
                if (target != null) target.AddAfterSelf(row);
                else rowsElement.Add(row);
            }
            else if (position.StartsWith("before:", StringComparison.OrdinalIgnoreCase))
            {
                var target = FindRowByControlOrField(rowsElement, position.Substring(7).Trim());
                if (target != null) target.AddBeforeSelf(row);
                else rowsElement.Add(row);
            }
            else if (string.Equals(position, "first", StringComparison.OrdinalIgnoreCase))
            {
                var first = rowsElement.Elements("row").FirstOrDefault();
                if (first != null) first.AddBeforeSelf(row);
                else rowsElement.Add(row);
            }
            else
            {
                rowsElement.Add(row);
            }
        }

        private static XElement FindRowByControlOrField(XElement rowsElement, string id)
        {
            return rowsElement.Elements("row").FirstOrDefault(row =>
                row.Descendants("control").Any(c =>
                    string.Equals(c.Attribute("id")?.Value, id, StringComparison.OrdinalIgnoreCase) ||
                    string.Equals(c.Attribute("datafieldname")?.Value, id, StringComparison.OrdinalIgnoreCase)));
        }

        private static XElement FindSubgridControl(XDocument formDoc, string controlId)
        {
            var control = formDoc.Descendants("control").FirstOrDefault(c =>
                string.Equals(c.Attribute("id")?.Value, controlId, StringComparison.OrdinalIgnoreCase));
            if (control == null)
                throw new InvalidOperationException($"Subgrid control_id '{controlId}' not found.");

            return control;
        }

        private static void SetParameter(XElement parameters, string name, string value)
        {
            var el = parameters.Element(name);
            if (el == null)
                parameters.Add(new XElement(name, value));
            else
                el.Value = value;
        }

        private static string BoolToXml(bool value) => value ? "true" : "false";
    }
}
