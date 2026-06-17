using Microsoft.Xrm.Sdk;
using System.Collections.Generic;
using System.IO;
using System.Linq;

namespace Dev.DevKit.Shared.Test
{
    /// <summary>
    /// Loads Entity test data from DevKitJson JSON strings or files into FakeXrmEasy.
    /// JSON format uses DevKitJson <c>__type</c> markers for Dataverse types
    /// (Entity, EntityReference, Money, OptionSetValue, etc.).
    ///
    /// <example>
    /// From JSON string:
    /// <code>
    /// var json = @"[{""__type"":""Entity"",""LogicalName"":""contact"",""Id"":""..."",""Attributes"":{...}}]";
    /// var entities = TestDataLoader.FromJson(json);
    /// </code>
    /// </example>
    ///
    /// <example>
    /// From file:
    /// <code>
    /// var entities = TestDataLoader.FromJsonFile("TestData\\contacts.json");
    /// </code>
    /// </example>
    ///
    /// <example>
    /// Multiple sources combined:
    /// <code>
    /// var entities = TestDataLoader.FromJsonFiles("TestData\\contacts.json", "TestData\\accounts.json");
    /// </code>
    /// </example>
    /// </summary>
    public static class TestDataLoader
    {
        /// <summary>
        /// Deserialize a DevKitJson JSON string into a list of Entity objects.
        /// Supports JSON array of entities, single entity, or EntityCollection format.
        /// </summary>
        public static List<Entity> FromJson(string json)
        {
            if (string.IsNullOrWhiteSpace(json)) return new List<Entity>();
            var result = DevKitJson.Deserialize(json);
            return ExtractEntities(result);
        }

        /// <summary>
        /// Deserialize multiple DevKitJson JSON strings and merge into a single list.
        /// </summary>
        public static List<Entity> FromJson(params string[] jsonStrings)
        {
            var entities = new List<Entity>();
            if (jsonStrings == null) return entities;
            foreach (var json in jsonStrings)
                entities.AddRange(FromJson(json));
            return entities;
        }

        /// <summary>
        /// Load entities from a DevKitJson JSON file.
        /// </summary>
        public static List<Entity> FromJsonFile(string filePath)
        {
            var json = File.ReadAllText(filePath);
            return FromJson(json);
        }

        /// <summary>
        /// Load entities from multiple DevKitJson JSON files and merge into a single list.
        /// </summary>
        public static List<Entity> FromJsonFiles(params string[] filePaths)
        {
            var entities = new List<Entity>();
            if (filePaths == null) return entities;
            foreach (var filePath in filePaths)
                entities.AddRange(FromJsonFile(filePath));
            return entities;
        }

        private static List<Entity> ExtractEntities(object result)
        {
            var entities = new List<Entity>();
            if (result == null) return entities;

            if (result is Entity entity)
            {
                entities.Add(entity);
            }
            else if (result is EntityCollection ec)
            {
                entities.AddRange(ec.Entities);
            }
            else if (result is List<object> list)
            {
                entities.AddRange(list.OfType<Entity>());
            }

            return entities;
        }
    }
}
