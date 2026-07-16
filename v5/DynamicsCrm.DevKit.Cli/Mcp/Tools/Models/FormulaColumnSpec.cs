using System;
using System.Reflection;
using Microsoft.Xrm.Sdk.Metadata;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Models
{
    /// <summary>
    /// Resolved formula definition to attach to an attribute during create, so a column
    /// becomes a Power Fx / Calculated / Rollup column instead of a plain Simple field.
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

        /// <summary>
        /// Attach SourceType + FormulaDefinition to <paramref name="attribute"/> via reflection.
        /// <c>FormulaDefinition</c> is not on the public <see cref="AttributeMetadata"/> base
        /// type surface used here, so it is set reflectively (same contract the Web API and
        /// the get_tables reader rely on). <c>SourceType</c> is a public property and is set
        /// directly when present.
        public void Apply(AttributeMetadata attribute)
        {
            attribute.SourceType = SourceType;

            var propInfo = attribute.GetType().GetProperty(
                "FormulaDefinition",
                BindingFlags.Instance | BindingFlags.Public | BindingFlags.NonPublic);
            if (propInfo != null && propInfo.CanWrite)
            {
                propInfo.SetValue(attribute, FormulaDefinition);
            }
        }
    }
}
