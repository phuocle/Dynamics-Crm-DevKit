//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	export class PluginAssemblyApi {
		/**
		* DynamicsCrm.DevKit PluginAssemblyApi
		* @param entity The entity object from OData response
		*/
		constructor(entity?: Record<string, any>)
		/**
		 * Get the raw value of an aliased field
		 * @param alias The alias field name
		 * @param isMultiOptionSet True if the field is a multi-option set
		 * @returns The raw value or null if not found
		 */
		getAliasedValue(alias: string, isMultiOptionSet?: boolean): any;
		/**
		 * Get the formatted value of an aliased field
		 * @param alias The alias field name
		 * @param isMultiOptionSet True if the field is a multi-option set
		 * @returns The formatted value or empty string if not found
		 */
		getAliasedFormattedValue(alias: string, isMultiOptionSet?: boolean): string | string[];
		/** The entity object for Create/Update operations*/
		readonly Entity: Record<string, any>;
		/** The OData entity object containing raw data*/
		readonly ODataEntity: Record<string, any>;
		/** The entity name */
		readonly EntityName: string;
		/** The entity collection name */
		readonly EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependent on the fields that are retrieved */
		readonly "@odata.etag": string;
		/** Specifies mode of authentication with web sources like WebApp */
		AuthType: OptionSet.PluginAssembly.AuthType | null;
		/** For internal use only. */
		readonly ComponentState: OptionSet.PluginAssembly.ComponentState | null;
		/** Bytes of the assembly, in Base64 format. */
		Content: string | null;
		/** Unique identifier of the user who created the plug-in assembly. */
		readonly CreatedBy: string | null;
		/** Date and time when the plug-in assembly was created. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who created the pluginassembly. */
		readonly CreatedOnBehalfBy: string | null;
		/** Culture code for the plug-in assembly. */
		Culture: string | null;
		/** Customization Level. */
		readonly CustomizationLevel: number | null;
		/** Description of the plug-in assembly. */
		Description: string | null;
		/** Version in which the form is introduced. */
		IntroducedVersion: string | null;
		/** Information that specifies whether this component can be customized. */
		IsCustomizable: string | null;
		/** Information that specifies whether this component should be hidden. */
		IsHidden: string | null;
		/** Information that specifies whether this component is managed. */
		readonly IsManaged: boolean | null;
		/** Information about how the plugin assembly is to be isolated at execution time; None / Sandboxed. */
		IsolationMode: OptionSet.PluginAssembly.IsolationMode | null;
		readonly IsPasswordSet: boolean | null;
		/** Major of the assembly version. */
		readonly Major: number | null;
		/** Unique identifier for managedidentity associated with pluginassembly. */
		ManagedIdentityId: string | null;
		/** Minor of the assembly version. */
		readonly Minor: number | null;
		/** Unique identifier of the user who last modified the plug-in assembly. */
		readonly ModifiedBy: string | null;
		/** Date and time when the plug-in assembly was last modified. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who last modified the pluginassembly. */
		readonly ModifiedOnBehalfBy: string | null;
		/** Name of the plug-in assembly. */
		Name: string | null;
		/** Unique identifier of the organization with which the plug-in assembly is associated. */
		readonly OrganizationId: string | null;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateOnly: Date | null;
		/** Unique identifier for Plugin Package associated with Plug-in Assembly. */
		PackageId: string | null;
		/** User Password */
		Password: string | null;
		/** File name of the plug-in assembly. Used when the source type is set to 1. */
		Path: string | null;
		/** Unique identifier of the plug-in assembly. */
		PluginAssemblyId: string | null;
		/** Unique identifier of the plug-in assembly. */
		readonly PluginAssemblyIdUnique: string | null;
		/** Public key token of the assembly. This value can be obtained from the assembly by using reflection. */
		PublicKeyToken: string | null;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string | null;
		/** Hash of the source of the assembly. */
		SourceHash: string | null;
		/** Location of the assembly, for example 0=database, 1=on-disk. */
		SourceType: OptionSet.PluginAssembly.SourceType | null;
		/** For internal use only. */
		readonly SupportingSolutionId: string | null;
		/** Web Url */
		Url: string | null;
		/** User Name */
		UserName: string | null;
		/** Version number of the assembly. The value can be obtained from the assembly through reflection. */
		Version: string | null;
		readonly VersionNumber: number | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			/** Specifies mode of authentication with web sources like WebApp */
			readonly AuthType: string;
			/** For internal use only. */
			readonly ComponentState: string;
			/** Bytes of the assembly, in Base64 format. */
			readonly Content: string;
			/** Unique identifier of the user who created the plug-in assembly. */
			readonly CreatedBy: string;
			/** Date and time when the plug-in assembly was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the pluginassembly. */
			readonly CreatedOnBehalfBy: string;
			/** Culture code for the plug-in assembly. */
			readonly Culture: string;
			/** Customization Level. */
			readonly CustomizationLevel: string;
			/** Description of the plug-in assembly. */
			readonly Description: string;
			/** Version in which the form is introduced. */
			readonly IntroducedVersion: string;
			/** Information that specifies whether this component can be customized. */
			readonly IsCustomizable: string;
			/** Information that specifies whether this component should be hidden. */
			readonly IsHidden: string;
			/** Information that specifies whether this component is managed. */
			readonly IsManaged: string;
			/** Information about how the plugin assembly is to be isolated at execution time; None / Sandboxed. */
			readonly IsolationMode: string;
			readonly IsPasswordSet: string;
			/** Major of the assembly version. */
			readonly Major: string;
			/** Unique identifier for managedidentity associated with pluginassembly. */
			readonly ManagedIdentityId: string;
			/** Minor of the assembly version. */
			readonly Minor: string;
			/** Unique identifier of the user who last modified the plug-in assembly. */
			readonly ModifiedBy: string;
			/** Date and time when the plug-in assembly was last modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who last modified the pluginassembly. */
			readonly ModifiedOnBehalfBy: string;
			/** Name of the plug-in assembly. */
			readonly Name: string;
			/** Unique identifier of the organization with which the plug-in assembly is associated. */
			readonly OrganizationId: string;
			/** For internal use only. */
			readonly OverwriteTime_UtcDateOnly: string;
			/** Unique identifier for Plugin Package associated with Plug-in Assembly. */
			readonly PackageId: string;
			/** User Password */
			readonly Password: string;
			/** File name of the plug-in assembly. Used when the source type is set to 1. */
			readonly Path: string;
			/** Unique identifier of the plug-in assembly. */
			readonly PluginAssemblyId: string;
			/** Unique identifier of the plug-in assembly. */
			readonly PluginAssemblyIdUnique: string;
			/** Public key token of the assembly. This value can be obtained from the assembly by using reflection. */
			readonly PublicKeyToken: string;
			/** Unique identifier of the associated solution. */
			readonly SolutionId: string;
			/** Hash of the source of the assembly. */
			readonly SourceHash: string;
			/** Location of the assembly, for example 0=database, 1=on-disk. */
			readonly SourceType: string;
			/** For internal use only. */
			readonly SupportingSolutionId: string;
			/** Web Url */
			readonly Url: string;
			/** User Name */
			readonly UserName: string;
			/** Version number of the assembly. The value can be obtained from the assembly through reflection. */
			readonly Version: string;
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace PluginAssembly {
		enum AuthType {
			/** BasicAuth = 0*/
			BasicAuth = 0
		}
		enum ComponentState {
			/** Deleted = 2*/
			Deleted = 2,
			/** Deleted_Unpublished = 3*/
			Deleted_Unpublished = 3,
			/** Published = 0*/
			Published = 0,
			/** Unpublished = 1*/
			Unpublished = 1
		}
		enum IsolationMode {
			/** External = 3*/
			External = 3,
			/** None = 1*/
			None = 1,
			/** Sandbox = 2*/
			Sandbox = 2
		}
		enum SourceType {
			/** AzureWebApp = 3*/
			AzureWebApp = 3,
			/** Database = 0*/
			Database = 0,
			/** Disk = 1*/
			Disk = 1,
			/** File_Store = 4*/
			File_Store = 4,
			/** Normal = 2*/
			Normal = 2
		}
		enum RollupState {
			/** NotCalculated = 0 - Attribute value is yet to be calculated */
			NotCalculated,
			/** Calculated = 1 - Attribute value has been calculated per the last update time in <AttributeSchemaName>_Date attribute */
			Calculated,
			/** OverflowError = 2 - Attribute value calculation lead to overflow error */
			OverflowError,
			/** OtherError = 3 - Attribute value calculation failed due to an internal error, next run of calculation job will likely fix it */
			OtherError,
			/** RetryLimitExceeded = 4 - Attribute value calculation failed because the maximum number of retry attempts to calculate the value were exceeded likely due to high number of concurrency and locking conflicts */
			RetryLimitExceeded,
			/** HierarchicalRecursionLimitReached = 5 - Attribute value calculation failed because maximum hierarchy depth limit for calculation was reached */
			HierarchicalRecursionLimitReached,
			/** LoopDetected = 6 - Attribute value calculation failed because a recursive loop was detected in the hierarchy of the record */
			LoopDetected
		}
	}
}