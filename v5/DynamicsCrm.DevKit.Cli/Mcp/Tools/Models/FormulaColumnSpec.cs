using System;
using System.Reflection;
using Microsoft.Xrm.Sdk.Metadata;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Models
{
    /// <summary>
    /// Resolved formula definition to attach to an attribute during create or update.
    ///
    /// <see cref="SourceType"/> matches <c>AttributeMetadata.SourceType</c>:
    /// 1 = Calculated, 2 = Rollup, 3 = Power Fx.
    /// <see cref="FormulaDefinition"/> is the RAW formula payload Dataverse expects
    /// (plain Power Fx text for PowerFx; XAML workflow definition for Calculated/Rollup).
    /// </summary>
    internal sealed class FormulaColumnSpec
    {
        /// <summary>1=Calculated, 2=Rollup, 3=PowerFx.</summary>
        public int SourceType { get; }

        /// <summary>Raw formula text/XAML to hand to Dataverse.</summary>
        public string FormulaDefinition { get; }

        /// <summary>Human-readable kind name (powerfx/calculated/rollup) for logging.</summary>
        public string KindName { get; }

        public FormulaColumnSpec(int sourceType, string formulaDefinition, string kindName)
        {
            SourceType = sourceType;
            FormulaDefinition = formulaDefinition;
            KindName = kindName;
        }

        private static PropertyInfo GetFormulaProperty(AttributeMetadata attribute) =>
            attribute?.GetType().GetProperty("FormulaDefinition",
                BindingFlags.Instance | BindingFlags.Public | BindingFlags.NonPublic);

        public static string ReadDefinition(AttributeMetadata attribute) =>
            GetFormulaProperty(attribute)?.GetValue(attribute) as string;

        /// <summary>
        /// Attach SourceType + FormulaDefinition to <paramref name="attribute"/> via reflection.
        /// <c>FormulaDefinition</c> is not on the public <see cref="AttributeMetadata"/> base
        /// type surface used here, so it is set reflectively (same contract the Web API and
        /// the get_tables reader rely on). <c>SourceType</c> is a public property and is set
        /// directly when present.
        public void Apply(AttributeMetadata attribute)
        {
            attribute.SourceType = SourceType;

            var propInfo = GetFormulaProperty(attribute);
            if (propInfo == null || !propInfo.CanWrite)
                throw new InvalidOperationException(
                    $"Cannot set FormulaDefinition on attribute metadata type '{attribute.GetType().FullName}'.");

            propInfo.SetValue(attribute, FormulaDefinition);
        }
    }
}
