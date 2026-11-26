using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;

namespace Dev.AllInOne.DataverseTests.Framework
{
    internal sealed class PluginRegistrationInfo
    {
        internal string Message { get; private set; }
        internal string Entity { get; private set; }
        internal int Stage { get; private set; }
        internal int Mode { get; private set; }
        internal int IsolationMode { get; private set; }
        internal int Rank { get; private set; }
        internal string[] FilteringAttributes { get; private set; }
        internal IReadOnlyList<ImageRegistration> Images { get; private set; }

        internal static PluginRegistrationInfo Resolve(Type plugin, int? index)
        {
            // Server compiles its own copy of the Shared source, including the attribute.
            var registrations = plugin.GetCustomAttributes(false)
                .Where(attribute => attribute.GetType().FullName == "Dev.AllInOne.Shared.CrmPluginRegistrationAttribute")
                .Select(Read).ToArray();
            if (index.HasValue)
            {
                if (index.Value < 0 || index.Value >= registrations.Length)
                    throw new ArgumentOutOfRangeException(nameof(index), $"'{plugin.FullName}' has {registrations.Length} registration(s).");
                return registrations[index.Value];
            }

            if (registrations.Length > 1)
                throw new InvalidOperationException($"'{plugin.FullName}' has {registrations.Length} registrations. Supply a zero-based registration index or an explicit context.");
            return registrations.SingleOrDefault();
        }

        private static PluginRegistrationInfo Read(object attribute)
        {
            var images = new List<ImageRegistration>();
            for (int image = 1; image <= 4; image++)
            {
                var alias = Text(attribute, $"Image{image}Alias");
                if (string.IsNullOrEmpty(alias))
                    alias = Text(attribute, $"Image{image}Name");
                if (!string.IsNullOrEmpty(alias))
                    images.Add(new ImageRegistration { Alias = alias, Type = Number(attribute, $"Image{image}Type") });
            }
            return new PluginRegistrationInfo
            {
                Message = Text(attribute, "Message"),
                Entity = Text(attribute, "EntityLogicalName"),
                Stage = Number(attribute, "Stage"),
                Mode = Number(attribute, "ExecutionMode"),
                IsolationMode = Number(attribute, "IsolationMode"),
                Rank = Number(attribute, "ExecutionOrder"),
                FilteringAttributes = Text(attribute, "FilteringAttributes").Split(',')
                    .Select(value => value.Trim()).Where(value => value.Length > 0).ToArray(),
                Images = images
            };
        }

        internal sealed class ImageRegistration
        {
            internal string Alias { get; set; }
            internal int Type { get; set; }
        }

        private static object Value(object attribute, string name)
        {
            var property = attribute.GetType().GetProperty(name, BindingFlags.Instance | BindingFlags.Public);
            if (property == null)
                throw new InvalidOperationException($"Registration '{attribute.GetType().FullName}' lacks property '{name}'.");
            return property.GetValue(attribute);
        }

        private static string Text(object attribute, string name) => Value(attribute, name) as string ?? string.Empty;
        private static int Number(object attribute, string name) => Convert.ToInt32(Value(attribute, name));
    }
}
