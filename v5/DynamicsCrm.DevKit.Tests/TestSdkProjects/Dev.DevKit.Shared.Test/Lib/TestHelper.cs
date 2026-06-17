using Microsoft.Xrm.Sdk;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.IO;
using System.IO.Compression;
using System.Linq;
using System.Text;

namespace Dev.DevKit.Shared.Test
{
    public static class TestHelper
    {
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
            var length = new Random().Next(minLen, maxLen);
            return FakerHelper.GenerateTemplateCode().Substring(0, Math.Min(length, 15));
        }

        public static RemoteExecutionContext DeserializeRemoteExecutionContext(string jsonString)
        {
            // DevKitJson auto-detects both full and compact JSON formats
            // DevKitJson automatically sets EntityReference.Name = "(No Name)" when null
            return DevKitJson.Deserialize<RemoteExecutionContext>(jsonString);
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