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
        public Microsoft.Xrm.Sdk.ParameterCollection SharedVariables { get; set; }
        public Guid? UserId { get; set; }
        public Dictionary<string, object> InputParameters { get; set; }
        public Dictionary<string, object> OutputParameters { get; set; }
        public Dictionary<string, object> PostEntityImages { get; set; }
        public Dictionary<string, object> PreEntityImages { get; set; }
    }
    public class DebugEntity
    {
        public Dictionary<string, DebugAttributeValue> Attributes { get; set; }
        public Dictionary<string, string> FormattedValues { get; set; }
        public Dictionary<string, DebugAttributeValue> KeyAttributes { get; set; }
        public Guid? Id { get; set; }
        public string LogicalName { get; set; }
        public string RowVersion { get; set; }
    }
    public class DebugEntityReference
    {
        public Guid? Id { get; set; }
        public string LogicalName { get; set; }
    }
    public class DebugAttributeValue
    {
        public string Type { get; set; }
        public object Value { get; set; }
        public string EntityLogicalName { get; set; }
    }
    public static class Debug
    {
        public static DebugAttributeValue AttributeValue(object value)
        {
            if (value is EntityReference er)
            {
                return new DebugAttributeValue
                {
                    Type = nameof(EntityReference),
                    Value = er.Id,
                    EntityLogicalName = er.LogicalName
                };
            }
            else if (value is OptionSetValue osv)
            {
                return new DebugAttributeValue
                {
                    Type = nameof(OptionSetValue),
                    Value = osv.Value
                };
            }
            else if (value is int i)
            {
                return new DebugAttributeValue
                {
                    Type = "int",
                    Value = i
                };
            }
            else if (value is bool b)
            {
                return new DebugAttributeValue
                {
                    Type = "bool",
                    Value = b
                };
            }
            else if (value is double d)
            {
                return new DebugAttributeValue
                {
                    Type = "double",
                    Value = d
                };
            }
            else if (value is decimal de)
            {
                return new DebugAttributeValue
                {
                    Type = "decimal",
                    Value = de
                };
            }
            else if (value is Money m)
            {
                return new DebugAttributeValue
                {
                    Type = nameof(Money),
                    Value = m.Value
                };
            }
            else if (value is DateTime dt)
            {
                return new DebugAttributeValue
                {
                    Type = nameof(DateTime),
                    Value = dt
                };
            }
            else if (value is Guid g)
            {
                return new DebugAttributeValue
                {
                    Type = nameof(Guid),
                    Value = g
                };
            }
            else if (value is string s)
            {
                return new DebugAttributeValue
                {
                    Type = "string",
                    Value = s
                };
            }
            else if (value is byte[] by)
            {
                return new DebugAttributeValue
                {
                    Type = "byte[]",
                    Value = by
                };
            }
            else if (value is long l)
            {
                return new DebugAttributeValue
                {
                    Type = "long",
                    Value = l
                };
            }
            else if (value is OptionSetValueCollection ovc)
            {
                return new DebugAttributeValue
                {
                    Type = nameof(OptionSetValueCollection),
                    Value = ovc.Select(x => x.Value).ToList()
                };
            }
            else if (value is EntityCollection ec)
            {
                return new DebugAttributeValue
                {
                    Type = nameof(EntityCollection),
                    Value = ec.Entities.Select(x => EntityToObject(x)).ToList()
                };
            }
            return new DebugAttributeValue
            {
                Type = "???",
                Value = value
            };
        }
        public static DebugEntity EntityToObject(Entity x)
        {
            return new DebugEntity
            {
                Attributes = x?.Attributes.ToDictionary(a => a.Key, a => AttributeValue(a.Value)),
                FormattedValues = x?.FormattedValues.ToDictionary(a => a.Key, a => a.Value),
                KeyAttributes = x?.KeyAttributes.ToDictionary(a => a.Key, a => AttributeValue(a.Value)),
                Id = x?.Id,
                LogicalName = x?.LogicalName,
                RowVersion = x?.RowVersion
            };
        }
        public static DebugEntityReference EntityReferenceToObject(EntityReference x)
        {
            return new DebugEntityReference
            {
                Id = x?.Id,
                LogicalName = x?.LogicalName
            };
        }
        public static string DebugContext(IExecutionContext context)
        {
            var preEntityImages = new Dictionary<string, object>();
            foreach (var key in context?.PreEntityImages?.Keys)
            {
                preEntityImages.Add(key, EntityToObject(context?.PreEntityImages?[key]));
            }
            var postEntityImages = new Dictionary<string, object>();
            foreach (var key in context?.PostEntityImages?.Keys)
            {
                postEntityImages.Add(key, EntityToObject(context?.PostEntityImages?[key]));
            }
            var inputParameters = new Dictionary<string, object>();
            foreach (var key in context?.InputParameters?.Keys)
            {
                if (context?.InputParameters?[key] is Entity x)
                {
                    inputParameters.Add(key, EntityToObject(x));
                }
                else if (context?.InputParameters?[key] is EntityReference er)
                {
                    inputParameters.Add(key, EntityReferenceToObject(er));
                }
                else
                {
                    inputParameters.Add(key, context?.InputParameters?[key]);
                }
            }
            var outputParameters = new Dictionary<string, object>();
            foreach (var key in context?.OutputParameters?.Keys)
            {
                if (context?.OutputParameters?[key] is Entity x)
                {
                    outputParameters.Add(key, EntityToObject(x));
                }
                else if (context?.OutputParameters?[key] is EntityReference er)
                {
                    outputParameters.Add(key, EntityReferenceToObject(er));
                }
                else
                {
                    outputParameters.Add(key, context?.OutputParameters?[key]);
                }
            }
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
            json = json.Replace("\"", "'").Replace(":{}", ":null").Replace(": {}", ": null").Replace(",'EntityLogicalName':null", "");
            return json;
        }
    }
}
