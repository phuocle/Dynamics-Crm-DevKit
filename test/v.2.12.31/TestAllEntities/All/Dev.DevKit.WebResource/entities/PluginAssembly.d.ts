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
		/** The entity object */
		Entity: any;
		/** The entity name */
		EntityName: string;
		/** The entity collection name */
		EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependant on the fields that are retrieved */
		"@odata.etag": string;
		/** Specifies mode of authentication with web sources like WebApp */
		AuthType: DevKit.WebApi.OptionSetValue;
		/** For internal use only. */
		ComponentState: DevKit.WebApi.OptionSetValueReadonly;
		/** Bytes of the assembly, in Base64 format. */
		Content: DevKit.WebApi.StringValue;
		/** Unique identifier of the user who created the plug-in assembly. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the plug-in assembly was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the pluginassembly. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Culture code for the plug-in assembly. */
		Culture: DevKit.WebApi.StringValue;
		/** Customization Level. */
		CustomizationLevel: DevKit.WebApi.IntegerValueReadonly;
		/** Description of the plug-in assembly. */
		Description: DevKit.WebApi.StringValue;
		/** Version in which the form is introduced. */
		IntroducedVersion: DevKit.WebApi.StringValue;
		/** Information that specifies whether this component can be customized. */
		IsCustomizable: DevKit.WebApi.ManagedPropertyValue;
		/** Information that specifies whether this component should be hidden. */
		IsHidden: DevKit.WebApi.ManagedPropertyValue;
		/** Information that specifies whether this component is managed. */
		IsManaged: DevKit.WebApi.BooleanValueReadonly;
		/** Information about how the plugin assembly is to be isolated at execution time; None / Sandboxed. */
		IsolationMode: DevKit.WebApi.OptionSetValue;
		IsPasswordSet: DevKit.WebApi.BooleanValueReadonly;
		/** Major of the assembly version. */
		Major: DevKit.WebApi.IntegerValueReadonly;
		/** Unique identifier for managedidentity associated with pluginassembly. */
		ManagedIdentityId: DevKit.WebApi.LookupValue;
		/** Minor of the assembly version. */
		Minor: DevKit.WebApi.IntegerValueReadonly;
		/** Unique identifier of the user who last modified the plug-in assembly. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the plug-in assembly was last modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who last modified the pluginassembly. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Name of the plug-in assembly. */
		Name: DevKit.WebApi.StringValue;
		/** Unique identifier of the organization with which the plug-in assembly is associated. */
		OrganizationId: DevKit.WebApi.LookupValueReadonly;
		/** For internal use only. */
		OverwriteTime_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValueReadonly;
		/** Unique identifier for Plugin Package associated with Plug-in Assembly. */
		PackageId: DevKit.WebApi.LookupValue;
		/** User Password */
		Password: DevKit.WebApi.StringValue;
		/** File name of the plug-in assembly. Used when the source type is set to 1. */
		Path: DevKit.WebApi.StringValue;
		/** Unique identifier of the plug-in assembly. */
		PluginAssemblyId: DevKit.WebApi.GuidValue;
		/** Unique identifier of the plug-in assembly. */
		PluginAssemblyIdUnique: DevKit.WebApi.GuidValueReadonly;
		/** Public key token of the assembly. This value can be obtained from the assembly by using reflection. */
		PublicKeyToken: DevKit.WebApi.StringValue;
		/** Unique identifier of the associated solution. */
		SolutionId: DevKit.WebApi.GuidValueReadonly;
		/** Hash of the source of the assembly. */
		SourceHash: DevKit.WebApi.StringValue;
		/** Location of the assembly, for example 0=database, 1=on-disk. */
		SourceType: DevKit.WebApi.OptionSetValue;
		/** For internal use only. */
		SupportingSolutionId: DevKit.WebApi.GuidValueReadonly;
		/** Web Url */
		Url: DevKit.WebApi.StringValue;
		/** User Name */
		UserName: DevKit.WebApi.StringValue;
		/** Version number of the assembly. The value can be obtained from the assembly through reflection. */
		Version: DevKit.WebApi.StringValue;
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
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
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':false,'IsDebugWebApi':true,'Version':'2.12.31','JsFormVersion':'v2'}