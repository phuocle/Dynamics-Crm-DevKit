using System.Collections.Generic;

namespace DynamicsCrm.DevKit.Shared.ConnectionBuilder.Metadata
{
    /// <summary>
    /// Defines a field in the connection form with its display properties.
    /// </summary>
    public class ConnectionFieldDefinition
    {
        /// <summary>
        /// The property name in CrmConnection (e.g., "ClientId", "Url").
        /// </summary>
        public string FieldName { get; set; }

        /// <summary>
        /// Display label shown in the UI (e.g., "Client ID", "Dynamics 365 URL").
        /// </summary>
        public string Label { get; set; }

        /// <summary>
        /// Whether this field is required for the connection.
        /// </summary>
        public bool IsRequired { get; set; }

        /// <summary>
        /// If true, uses PasswordBox instead of TextBox.
        /// </summary>
        public bool IsPassword { get; set; }

        /// <summary>
        /// Placeholder text shown when field is empty.
        /// </summary>
        public string Placeholder { get; set; }

        /// <summary>
        /// Order in which fields appear in the form (lower = first).
        /// </summary>
        public int DisplayOrder { get; set; }
    }

    /// <summary>
    /// Interface for connection type metadata.
    /// Each connection type (ClientSecret, Interactive, etc.) implements this
    /// to define its display properties and required fields.
    /// </summary>
    public interface IConnectionTypeMetadata
    {
        /// <summary>
        /// The connection type identifier (e.g., "ClientSecret", "Interactive").
        /// Must match the Type property in CrmConnection and ConnectionBuilderFactory.
        /// </summary>
        string Type { get; }

        /// <summary>
        /// User-friendly display name (e.g., "Client Secret (Service Principal)").
        /// </summary>
        string DisplayName { get; }

        /// <summary>
        /// Description shown as tooltip or help text.
        /// </summary>
        string Description { get; }

        /// <summary>
        /// Whether this connection type is supported in the VSIX UI.
        /// Some types (like ManagedIdentity) only work in Azure and shouldn't appear in VSIX.
        /// </summary>
        bool SupportedInVsix { get; }

        /// <summary>
        /// List of fields to display for this connection type.
        /// FormConnection will generate UI based on these definitions.
        /// </summary>
        IReadOnlyList<ConnectionFieldDefinition> Fields { get; }
    }
}
