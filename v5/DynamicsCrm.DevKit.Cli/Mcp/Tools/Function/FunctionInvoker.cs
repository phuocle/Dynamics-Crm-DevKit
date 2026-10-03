using Microsoft.Xrm.Sdk;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Text.Json;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Function
{
    /// <summary>
    /// Builds and executes the SDK invocation of a resolved function:
    /// OrganizationRequest(uniquename) with arguments converted to CLR types per
    /// the Custom API signature metadata. Entity-bound functions receive a
    /// Target EntityReference. All execution goes through the mutation boundary
    /// — the invoker itself never bypasses the fail-closed gateway.
    /// </summary>
    internal static class FunctionInvoker
    {
        internal sealed class InvocationPlan
        {
            public string UniqueName { get; set; }
            public string BindingType { get; set; }
            public string BoundEntity { get; set; }
            public Guid? TargetRecordId { get; set; }
            public Dictionary<string, object> ConvertedArguments { get; set; } = new(StringComparer.Ordinal);
            public List<string> Warnings { get; } = [];
        }

        /// <summary>
        /// Parse arguments_json as a JSON object and convert each entry to the CLR
        /// type the Custom API signature declares. Unknown names and missing
        /// required parameters are rejected; declared but absent optional
        /// parameters are simply left out.
        /// </summary>
        internal static InvocationPlan BuildPlan(
            string uniqueName,
            string bindingType,
            string boundEntity,
            List<Entity> requestParameters,
            string argumentsJson,
            string recordId)
        {
            var plan = new InvocationPlan { UniqueName = uniqueName, BindingType = bindingType, BoundEntity = boundEntity };

            var args = ParseArguments(argumentsJson);

            if (bindingType == "Entity")
            {
                if (string.IsNullOrWhiteSpace(recordId))
                    throw new ArgumentException(
                        "record_id is required to invoke this entity-bound function (bindingtype=Entity).");
                if (!Guid.TryParse(recordId.Trim(), out var targetId))
                    throw new ArgumentException($"record_id '{recordId.Trim()}' is not a valid GUID.");
                plan.TargetRecordId = targetId;
            }
            else if (!string.IsNullOrWhiteSpace(recordId))
            {
                plan.Warnings.Add("record_id is ignored: this function is not entity-bound.");
            }

            var supplied = new HashSet<string>(args.Keys, StringComparer.Ordinal);
            foreach (var parameter in requestParameters
                         .Select(ToParameter)
                         .OrderBy(p => p.Name, StringComparer.Ordinal))
            {
                var hasValue = supplied.Contains(parameter.Name);
                if (!hasValue)
                {
                    if (parameter.IsOptional) continue;
                    throw new ArgumentException(
                        $"Missing required argument '{parameter.Name}' ({parameter.Type}).");
                }

                if (!FunctionMetadataReader.InvokableTypes.Contains(parameter.Type))
                    throw new ArgumentException(
                        $"Argument '{parameter.Name}' has type '{parameter.Type}', which manage_function cannot convert. Invokable types: {string.Join(", ", FunctionMetadataReader.InvokableTypes.OrderBy(t => t, StringComparer.Ordinal))}.");

                plan.ConvertedArguments[parameter.Name] = ConvertValue(parameter.Name, parameter.Type, args[parameter.Name]);
                supplied.Remove(parameter.Name);
            }

            if (supplied.Count > 0)
                throw new ArgumentException(
                    $"Unknown argument(s) {string.Join(", ", supplied.OrderBy(n => n, StringComparer.Ordinal).Select(n => $"'{n}'"))}. Declared inputs: {(requestParameters.Count == 0 ? "(none)" : string.Join(", ", requestParameters.Select(e => e.GetAttributeValue<string>("uniquename")).OrderBy(n => n, StringComparer.Ordinal)))}.");

            return plan;
        }

        /// <summary>
        /// Build the OrganizationRequest from the plan. Global functions invoke by
        /// unique name; entity-bound functions carry a Target EntityReference.
        /// </summary>
        internal static OrganizationRequest BuildRequest(InvocationPlan plan)
        {
            var request = new OrganizationRequest(plan.UniqueName);
            foreach (var pair in plan.ConvertedArguments)
                request[pair.Key] = pair.Value;
            if (plan.TargetRecordId.HasValue)
                request["Target"] = new EntityReference(plan.BoundEntity, plan.TargetRecordId.Value);
            return request;
        }

        /// <summary>
        /// Map an OrganizationResponse into a plain JSON-friendly dictionary.
        /// Entity values become attribute dictionaries; EntityReference values
        /// become id/name pairs; everything else passes through.
        /// </summary>
        internal static Dictionary<string, object> MapResponse(OrganizationResponse response)
        {
            var outputs = new Dictionary<string, object>(StringComparer.Ordinal);
            if (response == null) return outputs;

            foreach (var key in response.Results.Keys)
            {
                if (key == "Target") continue;
                outputs[key] = FormatValue(response.Results[key]);
            }
            return outputs;
        }

        private static object FormatValue(object value) => value switch
        {
            null => null,
            Entity entity => entity.Attributes.ToDictionary(
                a => a.Key, a => FormatValue(a.Value), StringComparer.Ordinal),
            EntityReference reference => new Dictionary<string, object>(StringComparer.Ordinal)
            {
                ["id"] = reference.Id.ToString(),
                ["name"] = reference.Name,
                ["logicalName"] = reference.LogicalName
            },
            OptionSetValue option => option.Value,
            Money money => money.Value,
            _ => value
        };

        internal sealed class ParameterInfo
        {
            public string Name { get; init; }
            public string Type { get; init; }
            public bool IsOptional { get; init; }
        }

        internal static ParameterInfo ToParameter(Entity row) => new()
        {
            Name = row.GetAttributeValue<string>("uniquename")
                   ?? row.GetAttributeValue<string>("name")
                   ?? "",
            Type = FunctionMetadataReader.MapParameterType(
                row.GetAttributeValue<OptionSetValue>("type")?.Value ?? -1),
            IsOptional = row.GetAttributeValue<bool?>("isoptional") ?? false
        };

        private static Dictionary<string, JsonElement> ParseArguments(string argumentsJson)
        {
            if (string.IsNullOrWhiteSpace(argumentsJson))
                return new Dictionary<string, JsonElement>(StringComparer.Ordinal);

            JsonDocument document;
            try
            {
                document = JsonDocument.Parse(argumentsJson);
            }
            catch (JsonException ex)
            {
                throw new ArgumentException($"arguments_json is not valid JSON: {ex.Message}");
            }

            using (document)
            {
                if (document.RootElement.ValueKind != JsonValueKind.Object)
                    throw new ArgumentException("arguments_json must be a JSON object of {\"inputName\": value}.");

                var result = new Dictionary<string, JsonElement>(StringComparer.Ordinal);
                foreach (var property in document.RootElement.EnumerateObject())
                    result[property.Name] = property.Value.Clone();
                return result;
            }
        }

        /// <summary>
        /// Convert one JSON value to the CLR type the Custom API parameter type
        /// declares. Conversions are strict — the doc forbids coercing arbitrary
        /// strings into primitives or losing decimal precision through double.
        /// </summary>
        internal static object ConvertValue(string name, string type, JsonElement value)
        {
            switch (type)
            {
                case "Boolean":
                    if (value.ValueKind == JsonValueKind.True) return true;
                    if (value.ValueKind == JsonValueKind.False) return false;
                    throw new ArgumentException($"Argument '{name}' expects a JSON boolean (true/false).");
                case "Integer":
                    if (value.ValueKind != JsonValueKind.Number || !value.TryGetInt64(out var longValue))
                        throw new ArgumentException($"Argument '{name}' expects a whole number without a fractional part.");
                    if (longValue < int.MinValue || longValue > int.MaxValue)
                        throw new ArgumentException($"Argument '{name}' is outside the Int32 range.");
                    return (int)longValue;
                case "Decimal":
                    if (value.ValueKind != JsonValueKind.Number)
                        throw new ArgumentException($"Argument '{name}' expects a JSON number.");
                    return value.GetDecimal();
                case "Float":
                    if (value.ValueKind != JsonValueKind.Number)
                        throw new ArgumentException($"Argument '{name}' expects a JSON number.");
                    return value.GetDouble();
                case "String":
                    if (value.ValueKind is not (JsonValueKind.String or JsonValueKind.Number or JsonValueKind.True or JsonValueKind.False))
                        throw new ArgumentException($"Argument '{name}' expects a JSON string (or scalar).");
                    return value.ToString();
                case "DateTime":
                    if (value.ValueKind != JsonValueKind.String ||
                        !DateTimeOffset.TryParse(value.GetString(), CultureInfo.InvariantCulture,
                            DateTimeStyles.None, out var offset))
                        throw new ArgumentException(
                            $"Argument '{name}' expects an ISO 8601 date-time string with offset (e.g. 2026-01-31T12:00:00Z).");
                    return offset.UtcDateTime;
                default:
                    throw new ArgumentException(
                        $"Argument '{name}' has unsupported type '{type}'. Invokable types: {string.Join(", ", FunctionMetadataReader.InvokableTypes.OrderBy(t => t, StringComparer.Ordinal))}.");
            }
        }
    }
}
