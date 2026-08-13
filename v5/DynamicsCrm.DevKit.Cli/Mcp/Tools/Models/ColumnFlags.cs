using System;
using System.Collections.Generic;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Metadata;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Models
{
    /// <summary>
    /// Resolved flag overrides for a column being created or updated by
    /// <c>manage_column</c>. The SAME class is used for both CREATE and UPDATE
    /// flows (there is no separate ColumnUpdateFlags twin) — each nullable
    /// boolean corresponds to a managed property on <see cref="AttributeMetadata"/>:
    /// <list type="bullet">
    /// <item><see cref="IsAuditEnabled"/>  → <c>attribute.IsAuditEnabled</c></item>
    /// <item><see cref="IsValidForAdvancedFind"/> → <c>attribute.IsValidForAdvancedFind</c></item>
    /// <item><see cref="IsSecured"/> → <c>attribute.IsSecured</c></item>
    /// <item><see cref="IsSortable"/> → <c>attribute.IsSortableEnabled</c></item>
    /// <item><see cref="RequiredLevel"/> → <c>attribute.RequiredLevel</c></item>
    /// </list>
    ///
    /// For the four boolean flags, when the value is <c>null</c> (caller omitted
    /// it) the flag is NOT applied:
    /// <list type="bullet">
    /// <item>On CREATE (<see cref="Apply"/>): Dataverse applies its own defaults
    /// for a brand-new custom column (Audit=true, Sortable=true when supported,
    /// Advanced Find=true, field-level security=false).</item>
    /// <item>On UPDATE (<see cref="TryApplyForUpdate"/>): the existing column
    /// keeps its current value (the flag is simply skipped).</item>
    /// </list>
    ///
    /// <see cref="RequiredLevel"/> is NOT nullable. On CREATE the dispatcher
    /// always parses <c>required_level</c> into a concrete
    /// <see cref="AttributeRequiredLevel"/> (default <c>None</c> when the caller
    /// omits it) AND sets <see cref="RequiredLevelExplicit"/> = true, so every
    /// created column has an explicit required level written via <see cref="Apply"/>.
    /// On UPDATE the dispatcher sets <see cref="RequiredLevelExplicit"/> = true
    /// ONLY when the caller actually supplied <c>required_level</c>; when false,
    /// <see cref="TryApplyForUpdate"/> leaves the stored <c>RequiredLevel</c>
    /// untouched.
    /// </summary>
    internal sealed class ColumnFlags
    {
        public bool? IsAuditEnabled { get; }
        public bool? IsValidForAdvancedFind { get; }
        public bool? IsSecured { get; }
        public bool? IsSortable { get; }

        /// <summary>
        /// Required level for the column (None / Recommended / Required). Always
        /// a concrete <see cref="AttributeRequiredLevel"/> value.
        /// </summary>
        public AttributeRequiredLevel RequiredLevel { get; }

        /// <summary>
        /// Whether the caller EXPLICITLY supplied <c>required_level</c>.
        /// <list type="bullet">
        /// <item>CREATE: always true (the dispatcher parses the supplied or
        /// defaulted None and writes it).</item>
        /// <item>UPDATE: true only when the caller passed <c>required_level</c>;
        /// false when omitted (so <see cref="TryApplyForUpdate"/> leaves the
        /// stored <c>RequiredLevel</c> untouched).</item>
        /// </list>
        /// </summary>
        public bool RequiredLevelExplicit { get; }

        public ColumnFlags(
            AttributeRequiredLevel requiredLevel,
            bool? isAuditEnabled,
            bool? isValidForAdvancedFind,
            bool? isSecured,
            bool? isSortable,
            bool requiredLevelExplicit = true)
        {
            RequiredLevel = requiredLevel;
            RequiredLevelExplicit = requiredLevelExplicit;
            IsAuditEnabled = isAuditEnabled;
            IsValidForAdvancedFind = isValidForAdvancedFind;
            IsSecured = isSecured;
            IsSortable = isSortable;
        }

        /// <summary>
        /// Apply each flag to <paramref name="attribute"/> for a CREATE.
        /// <see cref="RequiredLevel"/> is always written (concrete value, never
        /// null) because <see cref="RequiredLevelExplicit"/> is true on the create
        /// path. The four boolean flags are only set when provided (non-null) so
        /// Dataverse keeps its per-attribute-type create default for any flag the
        /// caller omitted. Use this from every <c>Create*Attribute</c> helper
        /// right after the metadata object is constructed (and after the
        /// description is set) but before the create request is sent.
        /// </summary>
        public void Apply(AttributeMetadata attribute)
        {
            // RequiredLevel: ALWAYS set on CREATE (RequiredLevelExplicit is true
            // here). When the caller omitted required_level, the dispatcher passed
            // None anyway, so the column is explicitly None rather than inheriting
            // whatever Dataverse would have defaulted to.
            attribute.RequiredLevel = new AttributeRequiredLevelManagedProperty(RequiredLevel);

            if (IsAuditEnabled.HasValue)
                attribute.IsAuditEnabled = new BooleanManagedProperty(IsAuditEnabled.Value);
            if (IsValidForAdvancedFind.HasValue)
                attribute.IsValidForAdvancedFind = new BooleanManagedProperty(IsValidForAdvancedFind.Value);
            if (IsSecured.HasValue)
                attribute.IsSecured = IsSecured.Value;
            if (IsSortable.HasValue)
                attribute.IsSortableEnabled = new BooleanManagedProperty(IsSortable.Value);
        }

        /// <summary>
        /// Apply the caller's overrides to an EXISTING attribute for an UPDATE,
        /// recording every real change (old != new) into
        /// <paramref name="changes"/> and <paramref name="structuredChanges"/>.
        /// Returns the number of actual changes written. Skips:
        /// <list type="bullet">
        /// <item>RequiredLevel when <see cref="RequiredLevelExplicit"/> is false
        /// (caller omitted <c>required_level</c>) OR when the new value equals
        /// the current value.</item>
        /// <item>Any of the 4 boolean flags when null (caller omitted) OR when
        /// the new value equals the current value.</item>
        /// </list>
        /// Use this from <see cref="T:DynamicsCrm.DevKit.Cli.Mcp.Tools.ManageColumnTool"/>.<c>UpdateExistingAttribute</c>
        /// for the five flag updates, instead of writing each property inline.
        /// </summary>
        public int TryApplyForUpdate(
            AttributeMetadata attribute,
            List<string> changes,
            Dictionary<string, UpdateAttributeChange> structuredChanges)
        {
            var applied = 0;

            if (RequiredLevelExplicit)
            {
                var oldLevel = attribute.RequiredLevel?.Value.ToString() ?? "None";
                var newLevel = RequiredLevel.ToString();
                if (!string.Equals(oldLevel, newLevel, StringComparison.Ordinal))
                {
                    // CanBeChanged=true is REQUIRED on update — the 1-arg ctor
                    // (new AttributeRequiredLevelManagedProperty(level)) defaults
                    // CanBeChanged=false, which makes Dataverse silently reject the
                    // RequiredLevel change on an existing attribute (the update is
                    // accepted but the property is not written). Setting
                    // CanBeChanged=true explicitly makes the change persist.
                    attribute.RequiredLevel = new AttributeRequiredLevelManagedProperty(RequiredLevel)
                    {
                        CanBeChanged = true
                    };
                    changes.Add($"RequiredLevel: {oldLevel} -> {newLevel}");
                    structuredChanges["requiredLevel"] = new UpdateAttributeChange { OldValue = oldLevel, NewValue = newLevel };
                    applied++;
                }
            }

            if (IsAuditEnabled.HasValue)
            {
                var oldVal = attribute.IsAuditEnabled?.Value == true ? "true" : "false";
                var newVal = IsAuditEnabled.Value.ToString().ToLowerInvariant();
                if (oldVal != newVal)
                {
                    attribute.IsAuditEnabled = new BooleanManagedProperty(IsAuditEnabled.Value);
                    changes.Add($"IsAuditEnabled: {oldVal} -> {newVal}");
                    structuredChanges["isAuditEnabled"] = new UpdateAttributeChange { OldValue = oldVal, NewValue = newVal };
                    applied++;
                }
            }

            if (IsValidForAdvancedFind.HasValue)
            {
                var oldVal = attribute.IsValidForAdvancedFind?.Value == true ? "true" : "false";
                var newVal = IsValidForAdvancedFind.Value.ToString().ToLowerInvariant();
                if (oldVal != newVal)
                {
                    attribute.IsValidForAdvancedFind = new BooleanManagedProperty(IsValidForAdvancedFind.Value);
                    changes.Add($"IsValidForAdvancedFind: {oldVal} -> {newVal}");
                    structuredChanges["isValidForAdvancedFind"] = new UpdateAttributeChange { OldValue = oldVal, NewValue = newVal };
                    applied++;
                }
            }

            if (IsSecured.HasValue)
            {
                var oldVal = attribute.IsSecured == true ? "true" : "false";
                var newVal = IsSecured.Value.ToString().ToLowerInvariant();
                if (oldVal != newVal)
                {
                    attribute.IsSecured = IsSecured.Value;
                    changes.Add($"IsSecured: {oldVal} -> {newVal}");
                    structuredChanges["isSecured"] = new UpdateAttributeChange { OldValue = oldVal, NewValue = newVal };
                    applied++;
                }
            }

            if (IsSortable.HasValue)
            {
                var oldVal = attribute.IsSortableEnabled?.Value == true ? "true" : "false";
                var newVal = IsSortable.Value.ToString().ToLowerInvariant();
                if (oldVal != newVal)
                {
                    attribute.IsSortableEnabled = new BooleanManagedProperty(IsSortable.Value);
                    changes.Add($"IsSortable: {oldVal} -> {newVal}");
                    structuredChanges["isSortable"] = new UpdateAttributeChange { OldValue = oldVal, NewValue = newVal };
                    applied++;
                }
            }

            return applied;
        }
    }
}
