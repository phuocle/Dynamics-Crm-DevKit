using Microsoft.Xrm.Sdk;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Dev.DevKit.Shared
{
    public class DebugContext
    {
        public Guid? BusinessUnitId { get; set; }
        public Guid? CorrelationId { get; set; }
        public int? Depth { get; set; }
        public Guid? InitiatingUserId { get; set; }
        public bool? IsExecutingOffline { get; set; }
        public bool? IsInTransaction { get; set; }
        public bool? IsOfflinePlayback { get; set; }
        public int? IsolationMode { get; set; }
        public string MessageName { get; set; }
        public int? Mode { get; set; }
        public DateTime? OperationCreatedOn { get; set; }
        public Guid? OperationId { get; set; }
        public Guid? OrganizationId { get; set; }
        public string OrganizationName { get; set; }
        public DebugEntityReference OwningExtension { get; set; }
        public Guid? PrimaryEntityId { get; set; }
        public string PrimaryEntityName { get; set; }
        public Guid? RequestId { get; set; }
        public string SecondaryEntityName { get; set; }
        public ParameterCollection SharedVariables { get; set; }
        public Guid? UserId { get; set; }
        public Dictionary<string, object> InputParameters { get; set; }
        public Dictionary<string, object> OutputParameters { get; set; }
        public Dictionary<string, object> PostEntityImages { get; set; }
        public Dictionary<string, object> PreEntityImages { get; set; }
    }
    public class DebugEntity
    {
        public List<DebugAttributeValue> Attributes { get; set; }
        public Dictionary<string, string> FormattedValues { get; set; }
        public List<DebugAttributeValue> KeyAttributes { get; set; }
        public Guid? EntityId { get; set; }
        public string LogicalName { get; set; }
        public string RowVersion { get; set; }
    }
    public class DebugEntityReference
    {
        public Guid? EntityReferenceId { get; set; }
        public string LogicalName { get; set; }
    }
    public class DebugAttributeValue
    {
        public string LogicalName { get; set; }
        public string Type { get; set; }
        public object Value { get; set; }
        public string EntityLogicalName { get; set; }
    }
    [System.Diagnostics.DebuggerNonUserCode()]
    public static class Debug
    {
        public static DebugAttributeValue AttributeValue(string key, object value)
        {
            if (value == null) return null;
            if (value is EntityReference er)
                return new DebugAttributeValue { LogicalName = key, Type = nameof(EntityReference), Value = er.Id, EntityLogicalName = er.LogicalName };
            else if (value is OptionSetValue osv)
                return new DebugAttributeValue { LogicalName = key, Type = nameof(OptionSetValue), Value = osv.Value };
            else if (value is int i)
                return new DebugAttributeValue { LogicalName = key, Type = "int", Value = i };
            else if (value is bool b)
                return new DebugAttributeValue { LogicalName = key, Type = "bool", Value = b };
            else if (value is double d)
                return new DebugAttributeValue { LogicalName = key, Type = "double", Value = d };
            else if (value is decimal de)
                return new DebugAttributeValue { LogicalName = key, Type = "decimal", Value = de };
            else if (value is Money m)
                return new DebugAttributeValue { LogicalName = key, Type = nameof(Money), Value = m.Value };
            else if (value is DateTime dt)
                return new DebugAttributeValue { LogicalName = key, Type = nameof(DateTime), Value = dt };
            else if (value is Guid g)
                return new DebugAttributeValue { LogicalName = key, Type = nameof(Guid), Value = g };
            else if (value is string s)
                return new DebugAttributeValue { LogicalName = key, Type = "string", Value = s };
            else if (value is byte[] by)
                return null;
            else if (value is long l)
                return new DebugAttributeValue { LogicalName = key, Type = "long", Value = l };
            else if (value is OptionSetValueCollection ovc)
                return new DebugAttributeValue { LogicalName = key, Type = nameof(OptionSetValueCollection), Value = string.Join(",", ovc.Select(x => x.Value).ToList()) };
            else if (value is EntityCollection ec)
                return null;
            return new DebugAttributeValue { LogicalName = key, Type = "???", Value = value };
        }
        public static DebugEntity EntityToObject(Entity x)
        {
            return new DebugEntity
            {
                Attributes = x?.Attributes.Select(a => AttributeValue(a.Key, a.Value)).Where(b => b != null).ToList(),
                FormattedValues = x?.FormattedValues.ToDictionary(a => a.Key, a => a.Value),
                KeyAttributes = x?.KeyAttributes.Select(a => AttributeValue(a.Key, a.Value)).Where(b => b != null).ToList(),
                EntityId = x?.Id,
                LogicalName = x?.LogicalName,
                RowVersion = x?.RowVersion
            };
        }
        public static DebugEntityReference EntityReferenceToObject(EntityReference x)
        {
            return new DebugEntityReference
            {
                EntityReferenceId = x?.Id,
                LogicalName = x?.LogicalName
            };
        }
        public static string DebugContext(IExecutionContext context)
        {
            var preEntityImages = new Dictionary<string, object>();
            foreach (var key in context?.PreEntityImages?.Keys)
                preEntityImages.Add(key, EntityToObject(context?.PreEntityImages?[key]));
            var postEntityImages = new Dictionary<string, object>();
            foreach (var key in context?.PostEntityImages?.Keys)
                postEntityImages.Add(key, EntityToObject(context?.PostEntityImages?[key]));
            var inputParameters = new Dictionary<string, object>();
            foreach (var key in context?.InputParameters?.Keys)
                if (context?.InputParameters?[key] is Entity x)
                    inputParameters.Add(key, EntityToObject(x));
                else if (context?.InputParameters?[key] is EntityReference er)
                    inputParameters.Add(key, EntityReferenceToObject(er));
                else
                    inputParameters.Add(key, context?.InputParameters?[key]);
            var outputParameters = new Dictionary<string, object>();
            foreach (var key in context?.OutputParameters?.Keys)
                if (context?.OutputParameters?[key] is Entity x)
                    outputParameters.Add(key, EntityToObject(x));
                else if (context?.OutputParameters?[key] is EntityReference er)
                    outputParameters.Add(key, EntityReferenceToObject(er));
                else
                    outputParameters.Add(key, context?.OutputParameters?[key]);
            var debug = new DebugContext
            {
                BusinessUnitId = context?.BusinessUnitId,
                CorrelationId = context?.CorrelationId,
                Depth = context?.Depth,
                InitiatingUserId = context?.InitiatingUserId,
                IsExecutingOffline = context?.IsExecutingOffline,
                IsInTransaction = context?.IsInTransaction,
                IsOfflinePlayback = context?.IsOfflinePlayback,
                IsolationMode = context?.IsolationMode,
                MessageName = context?.MessageName,
                Mode = context?.Mode,
                OperationCreatedOn = context?.OperationCreatedOn,
                OperationId = context?.OperationId,
                OrganizationId = context?.OrganizationId,
                OrganizationName = context?.OrganizationName,
                OwningExtension = EntityReferenceToObject(context?.OwningExtension),
                PrimaryEntityId = context?.PrimaryEntityId,
                PrimaryEntityName = context?.PrimaryEntityName,
                RequestId = context?.RequestId,
                SecondaryEntityName = context?.SecondaryEntityName,
                SharedVariables = context?.SharedVariables,
                UserId = context?.UserId,
                InputParameters = inputParameters,
                OutputParameters = outputParameters,
                PostEntityImages = postEntityImages,
                PreEntityImages = preEntityImages,
            };
            var json = SimpleJson.SerializeObject(debug);
            json = json
                .Replace("\"", "'")
                .Replace(":{}", ":null")
                .Replace(",'EntityLogicalName':null", "")
                ;
            return json;
        }
        public static DebugContext JsonToDebugContext(string json)
        {
            json = json.Replace("'", "\"");
            var debugContext = SimpleJson.DeserializeObject<DebugContext>(json);
            debugContext.InputParameters = ConvertToEntityAndEntityReference(debugContext.InputParameters);
            debugContext.OutputParameters = ConvertToEntityAndEntityReference(debugContext.OutputParameters);
            debugContext.PreEntityImages = ConvertToEntityAndEntityReference(debugContext.PreEntityImages);
            debugContext.PostEntityImages = ConvertToEntityAndEntityReference(debugContext.PostEntityImages);
            return debugContext;
        }
        private static Dictionary<string, object> ConvertToEntityAndEntityReference(Dictionary<string, object> items)
        {
            var values = new Dictionary<string, object>();
            if (items == null) return values;
            foreach (var key in items.Keys)
            {
                try
                {
                    var json = items[key].ToString();
                    var er = SimpleJson.DeserializeObject<DebugEntityReference>(json);
                    if (er != null && er.EntityReferenceId != null)
                        values.Add(key, new EntityReference(er.LogicalName, er.EntityReferenceId.Value));
                    else
                    {
                        var e = SimpleJson.DeserializeObject<DebugEntity>(json);
                        values.Add(key, ConvertDebugEntityToEntity(e));
                    }
                }
                catch
                {
                    values.Add(key, items[key]);
                }
            }
            return values;
        }
        private static Entity ConvertDebugEntityToEntity(DebugEntity e)
        {
            var entity = new Entity(e.LogicalName, e.EntityId.Value);
            foreach (var attribute in e.Attributes)
            {
                if (attribute.Value == null) continue;
                if (attribute.Type == nameof(EntityReference))
                    entity[attribute.LogicalName] = new EntityReference(attribute.LogicalName, Guid.Parse(attribute.Value.ToString()));
                else if (attribute.Type == nameof(OptionSetValue))
                    entity[attribute.LogicalName] = new OptionSetValue(int.Parse(attribute.Value.ToString()));
                else if (attribute.Type == "int")
                    entity[attribute.LogicalName] = int.Parse(attribute.Value.ToString());
                else if (attribute.Type == "bool")
                    entity[attribute.LogicalName] = bool.Parse(attribute.Value.ToString());
                else if (attribute.Type == "double")
                    entity[attribute.LogicalName] = double.Parse(attribute.Value.ToString());
                else if (attribute.Type == "decimal")
                    entity[attribute.LogicalName] = decimal.Parse(attribute.Value.ToString());
                else if (attribute.Type == nameof(Money))
                    entity[attribute.LogicalName] = new Money(decimal.Parse(attribute.Value.ToString()));
                else if (attribute.Type == nameof(DateTime))
                    entity[attribute.LogicalName] = DateTime.Parse(attribute.Value.ToString());
                else if (attribute.Type == nameof(Guid))
                    entity[attribute.LogicalName] = Guid.Parse(attribute.Value.ToString());
                else if (attribute.Type == "string")
                    entity[attribute.LogicalName] = attribute.Value.ToString();
                else if (attribute.Type == "byte[]")
                    continue;
                else if (attribute.Type == "long")
                    entity[attribute.LogicalName] = long.Parse(attribute.Value.ToString());
                else if (attribute.Type == nameof(OptionSetValueCollection))
                {
                    var osvc = new OptionSetValueCollection();
                    var items = attribute.Value.ToString().Split(",".ToCharArray());
                    foreach (var item in items) osvc.Add(new OptionSetValue(int.Parse(item)));
                    entity[attribute.LogicalName] = osvc;
                }
                else if (attribute.Type == nameof(EntityCollection))
                    continue;
            }
            return entity;
        }
    }
}
