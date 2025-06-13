using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Extensions;
using Microsoft.Xrm.Sdk.PluginTelemetry;
using Microsoft.Xrm.Tooling.Connector;
using NSubstitute;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.IO;
using System.IO.Compression;
using System.Linq;
using System.Runtime.Serialization;
using System.Runtime.Serialization.Json;
using System.Text;

namespace $NameSpace$.Debug
{
    public static class Helper
    {
        private const string DateTimeFormat = "yyyy-MM-ddTHH:mm:ss.fffZ";
        private const string DefaultName = "(No Name)";

        private static RemoteExecutionContext DeserializeRemoteExecutionContext(string jsonString)
        {
            var settings = new DataContractJsonSerializerSettings { DateTimeFormat = new DateTimeFormat("yyyy'-'MM'-'dd'T'HH':'mm':'ss'.'fff'Z'") };
            var obj = Activator.CreateInstance<RemoteExecutionContext>();

            using (var ms = new MemoryStream(Encoding.Unicode.GetBytes(jsonString)))
            {
                var serializer = new DataContractJsonSerializer(obj.GetType(), settings);
                obj = (RemoteExecutionContext)serializer.ReadObject(ms);
            }

            return obj;
        }

        /// <summary>
        /// Creates a service provider for debugging purposes with context from JSON
        /// </summary>
        /// <param name="json">The JSON containing the execution context data</param>
        /// <param name="service">The CRM service client</param>
        /// <returns>A service provider with all required services for plugin execution</returns>
        public static IServiceProvider GetServiceProvider(string json, CrmServiceClient service)
        {
            // Deserialize and fix the plugin execution context
            var pluginExecutionContext = DeserializeRemoteExecutionContext(json);
            FixPluginExecutionContext(pluginExecutionContext);

            // Create and configure the service provider
            var serviceProvider = Substitute.For<IServiceProvider>();
            serviceProvider.Get<IPluginExecutionContext>().Returns(pluginExecutionContext);
            serviceProvider.Get<IServiceEndpointNotificationService>().Returns(Substitute.For<IServiceEndpointNotificationService>());
            serviceProvider.Get<IExecutionContext>().Returns(Substitute.For<IExecutionContext>());
            serviceProvider.Get<ITracingService>().Returns(Substitute.For<TracingServiceFake>());
            serviceProvider.Get<ILogger>().Returns(Substitute.For<ILogger>());

            // Configure the organization service factory
            var factory = Substitute.For<IOrganizationServiceFactory>();
            factory.CreateOrganizationService(Arg.Any<Guid?>()).Returns(callInfo =>
            {
                var userId = callInfo.ArgAt<Guid?>(0);
                if (userId.HasValue)
                {
                    var clone = service.Clone();
                    clone.CallerId = userId.Value;
                    return clone;
                }
                return service;
            });

            serviceProvider.Get<IOrganizationServiceFactory>().Returns(factory);
            return serviceProvider;
        }

        /// <summary>
        /// Fix all parts of the plugin execution context
        /// </summary>
        private static void FixPluginExecutionContext(RemoteExecutionContext context)
        {
            if (context == null) return;

            FixParameterCollection(context.InputParameters);
            FixParameterCollection(context.SharedVariables);
            FixParameterCollection(context.OutputParameters);
            FixEntityImageCollection(context.PreEntityImages);
            FixEntityImageCollection(context.PostEntityImages);
        }

        /// <summary>
        /// Fix the parameter collection by converting string values to their proper types
        /// </summary>
        private static void FixParameterCollection(ParameterCollection parameters)
        {
            if (parameters == null) return;

            foreach (var key in parameters.Keys.ToList())
            {
                if (!parameters.Contains(key)) continue;

                switch (parameters[key])
                {
                    case Entity entity:
                        FixEntity(entity);
                        break;

                    case EntityCollection entities:
                        foreach (var entity in entities.Entities)
                            FixEntity(entity);
                        break;

                    case string stringValue:
                        ConvertStringToProperType(parameters, key, stringValue);
                        break;

                    case EntityReference entityRef:
                        if (entityRef != null && entityRef.Name == null)
                            entityRef.Name = DefaultName;
                        break;

                    case Array array:
                        ProcessArray(parameters, key, array);
                        break;
                }
            }
        }

        /// <summary>
        /// Convert string value to appropriate type (Guid or DateTime) if possible
        /// </summary>
        private static void ConvertStringToProperType(ParameterCollection parameters, string key, string stringValue)
        {
            if (Guid.TryParse(stringValue, out var guid))
            {
                parameters[key] = guid;
            }
            else if (DateTime.TryParseExact(stringValue, DateTimeFormat, CultureInfo.InvariantCulture,
                DateTimeStyles.AdjustToUniversal, out var dateTime))
            {
                parameters[key] = dateTime;
            }
        }

        /// <summary>
        /// Process array values by converting them to appropriate collection types
        /// </summary>
        private static void ProcessArray(ParameterCollection parameters, string key, Array array)
        {
            if (array == null || array.Length == 0) return;

            var entityReferenceCollection = new EntityReferenceCollection();
            var stringList = new List<string>();

            foreach (var item in array)
            {
                if (item is EntityReference entityRef)
                    entityReferenceCollection.Add(entityRef);
                else if (item is string stringItem)
                    stringList.Add(stringItem);
            }

            if (entityReferenceCollection.Count > 0)
                parameters[key] = entityReferenceCollection;
            else if (stringList.Count > 0)
                parameters[key] = stringList.ToArray();
        }

        /// <summary>
        /// Fix entity images by applying fixes to each entity
        /// </summary>
        private static void FixEntityImageCollection(EntityImageCollection images)
        {
            if (images == null) return;

            foreach (var image in images)
                FixEntity(image.Value);
        }

        /// <summary>
        /// Fix all aspects of an entity
        /// </summary>
        private static void FixEntity(Entity entity)
        {
            if (entity == null) return;

            FixEntityReferences(entity);
            FixDateTimeValues(entity);
            FixGuidValues(entity);
            FixOptionSetValues(entity);
        }

        /// <summary>
        /// Fix entity reference properties
        /// </summary>
        private static void FixEntityReferences(Entity entity)
        {
            foreach (var key in entity.Attributes.Keys.ToList())
            {
                // Use GetAttributeValue safely - it returns default if conversion fails
                var entityRef = entity.GetAttributeValue<EntityReference>(key);
                if (entityRef != null && entityRef.Name == null)
                    entityRef.Name = DefaultName;
            }
        }

        /// <summary>
        /// Fix string values that should be DateTime
        /// </summary>
        private static void FixDateTimeValues(Entity entity)
        {
            foreach (var key in entity.Attributes.Keys.ToList())
            {
                try
                {
                    var stringValue = entity.GetAttributeValue<string>(key);
                    if (stringValue != null && DateTime.TryParseExact(stringValue, DateTimeFormat,
                        CultureInfo.InvariantCulture, DateTimeStyles.AdjustToUniversal, out var dateTime))
                    {
                        entity.Attributes[key] = dateTime;
                    }
                }
                catch { /* Ignore parsing errors */ }
            }
        }

        /// <summary>
        /// Fix string values that should be Guid
        /// </summary>
        private static void FixGuidValues(Entity entity)
        {
            foreach (var key in entity.Attributes.Keys.ToList())
            {
                try
                {
                    var stringValue = entity.GetAttributeValue<string>(key);
                    if (stringValue != null && Guid.TryParse(stringValue, out var guid))
                    {
                        entity.Attributes[key] = guid;
                    }
                }
                catch { /* Ignore parsing errors */ }
            }
        }

        /// <summary>
        /// Fix option set value collections
        /// </summary>
        private static void FixOptionSetValues(Entity entity)
        {
            foreach (var key in entity.Attributes.Keys.ToList())
            {
                try
                {
                    var array = entity.GetAttributeValue<object[]>(key);
                    if (array != null && array.Length > 0)
                    {
                        var optionSetValues = array
                            .OfType<OptionSetValue>()
                            .ToList();

                        if (optionSetValues.Any())
                        {
                            var collection = new OptionSetValueCollection(optionSetValues);
                            entity.Attributes[key] = collection;
                        }
                    }
                }
                catch { /* Ignore conversion errors */ }
            }
        }

        public static string Decompress(string compressedString)
        {
            byte[] decompressedBytes;
            var compressedStream = new MemoryStream(Convert.FromBase64String(compressedString));
            using (var decompressorStream = new DeflateStream(compressedStream, CompressionMode.Decompress))
            {
                using (var decompressedStream = new MemoryStream())
                {
                    decompressorStream.CopyTo(decompressedStream);
                    decompressedBytes = decompressedStream.ToArray();
                }
            }
            return Encoding.UTF8.GetString(decompressedBytes);
        }
    }
}
