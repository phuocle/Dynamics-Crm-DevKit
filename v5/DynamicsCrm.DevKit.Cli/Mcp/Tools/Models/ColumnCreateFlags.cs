using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Metadata;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Models
{
    /// <summary>
    /// Resolved create-time flag overrides for a column being created by
    /// <c>upsert_column</c>. Each nullable boolean corresponds to a managed
    /// property on <see cref="AttributeMetadata"/>:
    /// <list type="bullet">
    /// <item><see cref="IsAuditEnabled"/>  → <c>attribute.IsAuditEnabled</c></item>
    /// <item><see cref="IsValidForAdvancedFind"/> → <c>attribute.IsValidForAdvancedFind</c></item>
    /// <item><see cref="IsSecured"/> → <c>attribute.IsSecured</c></item>
    /// <item><see cref="IsSortable"/> → <c>attribute.IsSortableEnabled</c></item>
    /// <item><see cref="RequiredLevel"/> → <c>attribute.RequiredLevel</c></item>
    /// </list>
    ///
    /// For the four boolean flags, when the value is <c>null</c> (caller omitted
    /// it), <see cref="Apply"/> does NOT set the property and Dataverse applies
    /// its own defaults for a brand-new custom column:
    /// <list type="bullet">
    /// <item>Audit       = true</item>
    /// <item>Sortable    = true (when the attribute type supports sorting)</item>
    /// <item>Advanced Find = true</item>
    /// <item>Field-level security = false</item>
    /// </list>
    ///
    /// <see cref="RequiredLevel"/> is NOT nullable: the dispatcher always parses
    /// <c>required_level</c> into a concrete <see cref="AttributeRequiredLevel"/>
    /// (default <c>None</c> when the caller omits it) and assigns it here, so every
    /// created column has the explicit required level set instead of inheriting a
    /// default. Only override the Dataverse-default booleans when the caller
    /// explicitly passes the flag — typically when cloning a column from another
    /// entity so the clone matches the source column's flags in a single create.
    /// </summary>
    internal sealed class ColumnCreateFlags
    {
        public bool? IsAuditEnabled { get; }
        public bool? IsValidForAdvancedFind { get; }
        public bool? IsSecured { get; }
        public bool? IsSortable { get; }

        /// <summary>
        /// Required level for the column (None / Recommended / Required). Always
        /// populated by the dispatcher (defaults to <see cref="AttributeRequiredLevel.None"/>
        /// when the caller omits <c>required_level</c>), and always written by
        /// <see cref="Apply"/> so a created column has an explicit required level.
        /// </summary>
        public AttributeRequiredLevel RequiredLevel { get; }

        public ColumnCreateFlags(
            AttributeRequiredLevel requiredLevel,
            bool? isAuditEnabled,
            bool? isValidForAdvancedFind,
            bool? isSecured,
            bool? isSortable)
        {
            RequiredLevel = requiredLevel;
            IsAuditEnabled = isAuditEnabled;
            IsValidForAdvancedFind = isValidForAdvancedFind;
            IsSecured = isSecured;
            IsSortable = isSortable;
        }

        /// <summary>
        /// Apply each flag to <paramref name="attribute"/>. <see cref="RequiredLevel"/>
        /// is always set (concrete value, never null). The four boolean flags are
        /// only set when provided (non-null) so Dataverse keeps its per-attribute-type
        /// create default for any flag the caller omitted. Use this from every
        /// <c>Create*Attribute</c> helper right after the metadata object is
        /// constructed (and after the description is set) but before the create
        /// request is sent.
        /// </summary>
        public void Apply(AttributeMetadata attribute)
        {
            // RequiredLevel: ALWAYS set (concrete value from dispatcher). When the
            // caller omitted required_level, the dispatcher passed None anyway, so
            // the column is explicitly None rather than inheriting whatever Dataverse
            // would have defaulted to.
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
    }
}
