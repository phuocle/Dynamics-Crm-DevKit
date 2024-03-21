using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Extensions;
using Microsoft.Xrm.Sdk.PluginTelemetry;
using Microsoft.Xrm.Tooling.Connector;
using NSubstitute;
using System;
using System.Collections.Generic;
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
        private static RemoteExecutionContext DeserializeRemoteExecutionContext(string jsonString)
        {
            var settings = new DataContractJsonSerializerSettings() { DateTimeFormat = new DateTimeFormat("yyyy'-'MM'-'dd'T'HH':'mm':'ss'.'fff'Z'") };
            var obj = Activator.CreateInstance<RemoteExecutionContext>();
            MemoryStream ms = new MemoryStream(Encoding.Unicode.GetBytes(jsonString));
            System.Runtime.Serialization.Json.DataContractJsonSerializer serializer = new System.Runtime.Serialization.Json.DataContractJsonSerializer(obj.GetType(), settings);
            obj = (RemoteExecutionContext)serializer.ReadObject(ms);
            ms.Close();
            return obj;
        }

        public static IServiceProvider GetServiceProvider(string json, CrmServiceClient service)
        {
            var pluginExecutionContext = DeserializeRemoteExecutionContext(json);
            FixDataAfterDeserialize(pluginExecutionContext);
            var serviceProvider = Substitute.For<IServiceProvider>();
            serviceProvider.Get<IPluginExecutionContext>().Returns(pluginExecutionContext);
            serviceProvider.Get<IServiceEndpointNotificationService>().Returns(Substitute.For<IServiceEndpointNotificationService>());
            serviceProvider.Get<IExecutionContext>().Returns(Substitute.For<IExecutionContext>());
            serviceProvider.Get<ITracingService>().Returns(Substitute.For<TracingServiceFake>());
            serviceProvider.Get<ILogger>().Returns(Substitute.For<ILogger>());
            var factory = Substitute.For<IOrganizationServiceFactory>();
            factory.CreateOrganizationService(Arg.Any<Guid?>()).Returns((param) =>
            {
                var userId = param.ArgAt<Guid?>(0);
                if (userId != null) service.CallerId = userId.GetValueOrDefault();
                return service;
            });
            serviceProvider.Get<IOrganizationServiceFactory>().Returns(factory);
            return serviceProvider;
        }

        private static void FixDataAfterDeserialize(RemoteExecutionContext pluginExecutionContext)
        {
            var entities = new List<Entity>();
            entities.AddRange(pluginExecutionContext.InputParameters.Where(x => x.Value is Entity).Select(x => (Entity)x.Value).ToList());
            entities.AddRange(pluginExecutionContext.SharedVariables.Where(x => x.Value is Entity).Select(x => (Entity)x.Value).ToList());
            entities.AddRange(pluginExecutionContext.OutputParameters.Where(x => x.Value is Entity).Select(x => (Entity)x.Value).ToList());
            entities.AddRange(pluginExecutionContext.PostEntityImages.Select(x => (Entity)x.Value).ToList());
            entities.AddRange(pluginExecutionContext.PreEntityImages.Select(x => (Entity)x.Value).ToList());
            FixDateTime(entities);
            FixOptionSetValueCollection(entities);
            FixGuid(entities);
            FixLookup(entities);
            FixEntityReferenceCollection(pluginExecutionContext.InputParameters);
            FixEntityReferenceCollection(pluginExecutionContext.SharedVariables);
            FixEntityReferenceCollection(pluginExecutionContext.OutputParameters);
        }

        private static void FixEntityReferenceCollection(ParameterCollection parameterCollection)
        {
            foreach (var key in parameterCollection.Keys.ToList())
            {
                if (parameterCollection[key] is Array array)
                {
                    var fixCollection = new EntityReferenceCollection();
                    foreach (var item in array)
                    {
                        if (item is EntityReference entityReference)
                        {
                            fixCollection.Add(entityReference);
                        }
                    }
                    if (fixCollection.Count > 0)
                    {
                        parameterCollection[key] = fixCollection;
                    }
                }
            }
        }

        private static void FixOptionSetValueCollection(List<Entity> entities)
        {
            foreach (var entity in entities)
            {
                foreach (var key in entity.Attributes.Keys.ToList())
                {
                    try
                    {
                        var array = entity.GetAttributeValue<object[]>(key);
                        if (array != null)
                        {
                            var collection = new OptionSetValueCollection();
                            foreach (var item in array)
                                collection.Add(item as OptionSetValue);
                            entity.Attributes[key] = collection;
                        }
                    }
                    catch { }
                }
            }
        }

        private static void FixDateTime(List<Entity> entities)
        {
            foreach (var entity in entities)
            {
                foreach (var key in entity.Attributes.Keys.ToList())
                {
                    try
                    {
                        var str = entity.GetAttributeValue<string>(key);
                        if (str != null && DateTime.TryParse(str, out var dateTime))
                        {
                            entity.Attributes[key] = dateTime;
                        }
                    }
                    catch { }
                }
            }
        }

        private static void FixGuid(List<Entity> entities)
        {
            foreach (var entity in entities)
            {
                foreach (var key in entity.Attributes.Keys.ToList())
                {
                    try
                    {
                        var str = entity.GetAttributeValue<string>(key);
                        if (str != null && Guid.TryParse(str, out var guid))
                        {
                            entity.Attributes[key] = guid;
                        }
                    }
                    catch { }
                }
            }
        }

        private static void FixLookup(List<Entity> entities)
        {
            foreach (var entity in entities)
            {
                foreach (var key in entity.Attributes.Keys.ToList())
                {
                    try
                    {
                        var er = entity.GetAttributeValue<EntityReference>(key);
                        if (er != null && er.Name == null)
                        {
                            er.Name = "(No Name)";
                        }
                    }
                    catch { }
                }
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
