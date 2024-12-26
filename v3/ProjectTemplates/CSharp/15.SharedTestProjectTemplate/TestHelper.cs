using Microsoft.Xrm.Sdk;
using System;
using System.Collections.Generic;
using System.IO;
using System.IO.Compression;
using System.Linq;
using System.Runtime.Serialization;
using System.Runtime.Serialization.Json;
using System.Text;

namespace $NameSpace$
{
    public static class TestHelper
    {

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
        public static RemoteExecutionContext DeserializeRemoteExecutionContext(string jsonString)
        {
            var settings = new DataContractJsonSerializerSettings() { DateTimeFormat = new DateTimeFormat("yyyy'-'MM'-'dd'T'HH':'mm':'ss'.'fff'Z'") };
            var obj = Activator.CreateInstance<RemoteExecutionContext>();
            MemoryStream ms = new MemoryStream(Encoding.Unicode.GetBytes(jsonString));
            System.Runtime.Serialization.Json.DataContractJsonSerializer serializer = new System.Runtime.Serialization.Json.DataContractJsonSerializer(obj.GetType(), settings);
            obj = (RemoteExecutionContext)serializer.ReadObject(ms);
            ms.Close();
            FixDataAfterDeserialize(obj);
            return obj;
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

        internal static List<CrmPluginRegistrationAttribute> GetRegisteredPlugins(object obj)
        {
            var registeredPlugins = new List<CrmPluginRegistrationAttribute>();
            foreach (var attribute in System.Attribute.GetCustomAttributes(obj.GetType()))
            {
                if (attribute.GetType().Equals(typeof(CrmPluginRegistrationAttribute)))
                {
                    var registeredPlugin = attribute as CrmPluginRegistrationAttribute;
                    registeredPlugins.Add(registeredPlugin);
                }
            }
            return registeredPlugins;
        }

        public static string GetRandomString(int minLen, int maxLen)
        {
            char[] Alphabet = ("ABCDEFGHIJKLMNOPQRSTUVWXYZabcefghijklmnopqrstuvwxyz0123456789").ToCharArray();
            Random m_randomInstance = new Random();
            Object m_randLock = new object();
            int alphabetLength = Alphabet.Length;
            int stringLength;
            lock (m_randLock) { stringLength = m_randomInstance.Next(minLen, maxLen); }
            char[] str = new char[stringLength];
            int randomizerLength = (stringLength > 5) ? 5 : stringLength;
            int[] rndInts = new int[randomizerLength];
            int[] rndIncrements = new int[randomizerLength];
            for (int i = 0; i < randomizerLength; i++)
            {
                int rnd = m_randomInstance.Next(alphabetLength);
                rndInts[i] = rnd;
                rndIncrements[i] = rnd;
            }
            for (int i = 0; i < stringLength; i++)
            {
                int indexRnd = i % randomizerLength;
                int indexAlphabet = rndInts[indexRnd] % alphabetLength;
                str[i] = Alphabet[indexAlphabet];
                rndInts[indexRnd] += rndIncrements[indexRnd];
            }
            return (new string(str));
        }
    }
}