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

namespace Dev.DevKit.Console._2.Debug
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
            FixPluginExecutionContext();
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
                if (userId != null)
                {
                    var clone = service.Clone();
                    clone.CallerId = userId.GetValueOrDefault();
                    return clone;
                }
                return service;
            });
            serviceProvider.Get<IOrganizationServiceFactory>().Returns(factory);
            return serviceProvider;
            void FixPluginExecutionContext()
            {
                FixParameterCollection(pluginExecutionContext.InputParameters);
                FixParameterCollection(pluginExecutionContext.SharedVariables);
                FixParameterCollection(pluginExecutionContext.OutputParameters);
                FixEntityImageCollection(pluginExecutionContext.PreEntityImages);
                FixEntityImageCollection(pluginExecutionContext.PostEntityImages);
            }
            void FixParameterCollection(ParameterCollection parameters)
            {
                foreach (var key in parameters.Keys.ToList())
                {
                    switch (parameters[key])
                    {
                        case Entity entity:
                            FixEntity(entity);
                            break;
                        case EntityCollection entities:
                            foreach (var entity in entities.Entities)
                                FixEntity(entity);
                            break;
                        case string @string:
                            if (Guid.TryParse(@string, out var guid))
                                parameters[key] = guid;
                            else if (DateTime.TryParseExact(@string, "yyyy-MM-ddTHH:mm:ss.fffZ", CultureInfo.InvariantCulture, DateTimeStyles.AdjustToUniversal, out var dateTime))
                                parameters[key] = dateTime;
                            break;
                        case EntityReference entityReference:
                            if (entityReference.Name == null)
                                entityReference.Name = "(No Name)";
                            break;
                        case Array array:
                            var entityReferenceCollection = new EntityReferenceCollection();
                            var listString = new List<string>();
                            foreach (var item in array)
                            {
                                if (item is EntityReference entityReference)
                                    entityReferenceCollection.Add(entityReference);
                                else if (item is string @string)
                                    listString.Add(@string);
                            }
                            if (entityReferenceCollection.Count > 0) parameters[key] = entityReferenceCollection;
                            if (listString.Count > 0) parameters[key] = listString.ToArray();
                            break;
                    }
                }
            }
            void FixEntityImageCollection(EntityImageCollection images)
            {
                foreach (var image in images)
                    FixEntity(image.Value);
            }
            void FixEntity(Entity entity)
            {
                FixLookup();
                FixDateTime();
                FixGuid();
                FixOptionSetValueCollection();
                void FixLookup()
                {
                    foreach (var key in entity.Attributes.Keys.ToList())
                    {
                        try
                        {
                            var er = entity.GetAttributeValue<EntityReference>(key);
                            if (er != null && er?.Name == null)
                                er.Name = "(No Name)";
                        }
                        catch { }
                    }
                }
                void FixDateTime()
                {
                    foreach (var key in entity.Attributes.Keys.ToList())
                    {
                        try
                        {
                            var @string = entity.GetAttributeValue<string>(key);
                            if (@string != null && DateTime.TryParseExact(@string, "yyyy-MM-ddTHH:mm:ss.fffZ", CultureInfo.InvariantCulture, DateTimeStyles.AdjustToUniversal, out var dateTime))
                                entity.Attributes[key] = dateTime;
                        }
                        catch { }
                    }
                }
                void FixGuid()
                {
                    foreach (var key in entity.Attributes.Keys.ToList())
                    {
                        try
                        {
                            var str = entity.GetAttributeValue<string>(key);
                            if (str != null && Guid.TryParse(str, out var guid))
                                entity.Attributes[key] = guid;
                        }
                        catch { }
                    }
                }
                void FixOptionSetValueCollection()
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
                                    if (item is OptionSetValue optionSetValue) collection.Add(optionSetValue);
                                entity.Attributes[key] = collection;
                            }
                        }
                        catch { }
                    }
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
