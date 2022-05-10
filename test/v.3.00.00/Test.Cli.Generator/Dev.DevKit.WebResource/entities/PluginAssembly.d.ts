//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class PluginAssemblyApi {
		/**
		* DynamicsCrm.DevKit PluginAssemblyApi
		* @param entity The entity object
		*/
		constructor(entity?: any);
		/**
		 * Get the value of alias
		 * @param alias the alias value
		 * @param isMultiOptionSet true if the alias is multi OptionSet
		 */
		getAliasedValue(alias: string, isMultiOptionSet?: boolean): any;
		/**
		 * Get the formatted value of alias
		 * @param alias the alias value
		 * @param isMultiOptionSet true if the alias is multi OptionSet
		 */
		getAliasedFormattedValue(alias: string, isMultiOptionSet?: boolean): string;
		/** The entity object for Create/Update */
		Entity: unknown;
		/** The OData entity object */
		ODataEntity: unknown;
		/** The entity name */
		EntityName: string;
		/** The entity collection name */
		EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependant on the fields that are retrieved */
		"@odata.etag": string;
		/** Specifies mode of authentication with web sources like WebApp */
		AuthType: OptionSet.PluginAssembly.AuthType;
		/** For internal use only. */
		readonly ComponentState: OptionSet.PluginAssembly.ComponentState;
		/** Bytes of the assembly, in Base64 format. */
		Content: string;
		/** Unique identifier of the user who created the plug-in assembly. */
		readonly CreatedBy: string;
		/** Date and time when the plug-in assembly was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the pluginassembly. */
		readonly CreatedOnBehalfBy: string;
		/** Culture code for the plug-in assembly. */
		Culture: string;
		/** Customization Level. */
		readonly CustomizationLevel: number;
		/** Description of the plug-in assembly. */
		Description: string;
		/** Version in which the form is introduced. */
		IntroducedVersion: string;
		/** Information that specifies whether this component can be customized. */
		IsCustomizable: string;
		/** Information that specifies whether this component should be hidden. */
		IsHidden: string;
		/** Information that specifies whether this component is managed. */
		readonly IsManaged: boolean;
		/** Information about how the plugin assembly is to be isolated at execution time; None / Sandboxed. */
		IsolationMode: OptionSet.PluginAssembly.IsolationMode;
		readonly IsPasswordSet: boolean;
		/** Major of the assembly version. */
		readonly Major: number;
		/** Unique identifier for managedidentity associated with pluginassembly. */
		ManagedIdentityId: string;
		/** Minor of the assembly version. */
		readonly Minor: number;
		/** Unique identifier of the user who last modified the plug-in assembly. */
		readonly ModifiedBy: string;
		/** Date and time when the plug-in assembly was last modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who last modified the pluginassembly. */
		readonly ModifiedOnBehalfBy: string;
		/** Name of the plug-in assembly. */
		Name: string;
		/** Unique identifier of the organization with which the plug-in assembly is associated. */
		readonly OrganizationId: string;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateOnly: Date;
		/** Unique identifier for Plugin Package associated with Plug-in Assembly. */
		PackageId: string;
		/** User Password */
		Password: string;
		/** File name of the plug-in assembly. Used when the source type is set to 1. */
		Path: string;
		/** Unique identifier of the plug-in assembly. */
		PluginAssemblyId: string;
		/** Unique identifier of the plug-in assembly. */
		readonly PluginAssemblyIdUnique: string;
		/** Public key token of the assembly. This value can be obtained from the assembly by using reflection. */
		PublicKeyToken: string;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string;
		/** Hash of the source of the assembly. */
		SourceHash: string;
		/** Location of the assembly, for example 0=database, 1=on-disk. */
		SourceType: OptionSet.PluginAssembly.SourceType;
		/** For internal use only. */
		readonly SupportingSolutionId: string;
		/** Web Url */
		Url: string;
		/** User Name */
		UserName: string;
		/** Version number of the assembly. The value can be obtained from the assembly through reflection. */
		Version: string;
		readonly VersionNumber: number;
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
			/** 0 */
			BasicAuth
		}
		enum ComponentState {
			/** 2 */
			Deleted,
			/** 3 */
			Deleted_Unpublished,
			/** 0 */
			Published,
			/** 1 */
			Unpublished
		}
		enum IsolationMode {
			/** 3 */
			External,
			/** 1 */
			None,
			/** 2 */
			Sandbox
		}
		enum SourceType {
			/** 3 */
			AzureWebApp,
			/** 0 */
			Database,
			/** 1 */
			Disk,
			/** 4 */
			File_Store,
			/** 2 */
			Normal
		}
		enum RollupState {
			/** 0 - Attribute value is yet to be calculated */
			NotCalculated,
			/** 1 - Attribute value has been calculated per the last update time in <AttributeSchemaName>_Date attribute */
			Calculated,
			/** 2 - Attribute value calculation lead to overflow error */
			OverflowError,
			/** 3 - Attribute value calculation failed due to an internal error, next run of calculation job will likely fix it */
			OtherError,
			/** 4 - Attribute value calculation failed because the maximum number of retry attempts to calculate the value were exceeded likely due to high number of concurrency and locking conflicts */
			RetryLimitExceeded,
			/** 5 - Attribute value calculation failed because maximum hierarchy depth limit for calculation was reached */
			HierarchicalRecursionLimitReached,
			/** 6 - Attribute value calculation failed because a recursive loop was detected in the hierarchy of the record */
			LoopDetected
		}
	}
}
//{'UseForm':false,'UseWebApi':true,'Version':'3.11.11','WebApiVersion':'2'}