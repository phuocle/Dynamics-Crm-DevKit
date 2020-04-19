//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyStar {
	class PluginTypeApi {
		/**
		* DynamicsCrm.DevKit PluginTypeApi
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
		/** Full path name of the plug-in assembly. */
		AssemblyName: DevKit.WebApi.StringValueReadonly;
		/** For internal use only. */
		ComponentState: DevKit.WebApi.OptionSetValueReadonly;
		/** Unique identifier of the user who created the plug-in type. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the plug-in type was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the plugintype. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Culture code for the plug-in assembly. */
		Culture: DevKit.WebApi.StringValueReadonly;
		/** Customization level of the plug-in type. */
		CustomizationLevel: DevKit.WebApi.IntegerValueReadonly;
		/** Serialized Custom Activity Type information, including required arguments. For more information, see SandboxCustomActivityInfo. */
		CustomWorkflowActivityInfo: DevKit.WebApi.StringValueReadonly;
		/** Description of the plug-in type. */
		Description: DevKit.WebApi.StringValue;
		/** User friendly name for the plug-in. */
		FriendlyName: DevKit.WebApi.StringValue;
		IsManaged: DevKit.WebApi.BooleanValueReadonly;
		/** Indicates if the plug-in is a custom activity for workflows. */
		IsWorkflowActivity: DevKit.WebApi.BooleanValueReadonly;
		/** Major of the version number of the assembly for the plug-in type. */
		Major: DevKit.WebApi.IntegerValueReadonly;
		/** Minor of the version number of the assembly for the plug-in type. */
		Minor: DevKit.WebApi.IntegerValueReadonly;
		/** Unique identifier of the user who last modified the plug-in type. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the plug-in type was last modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who last modified the plugintype. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Name of the plug-in type. */
		Name: DevKit.WebApi.StringValue;
		/** Unique identifier of the organization with which the plug-in type is associated. */
		OrganizationId: DevKit.WebApi.LookupValueReadonly;
		/** For internal use only. */
		OverwriteTime_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValueReadonly;
		/** Unique identifier of the plug-in assembly that contains this plug-in type. */
		PluginAssemblyId: DevKit.WebApi.LookupValue;
		/** Unique identifier of the plug-in type. */
		PluginTypeId: DevKit.WebApi.GuidValue;
		/** Unique identifier of the plug-in type. */
		PluginTypeIdUnique: DevKit.WebApi.GuidValueReadonly;
		/** Public key token of the assembly for the plug-in type. */
		PublicKeyToken: DevKit.WebApi.StringValueReadonly;
		/** Unique identifier of the associated solution. */
		SolutionId: DevKit.WebApi.GuidValueReadonly;
		/** For internal use only. */
		SupportingSolutionId: DevKit.WebApi.GuidValueReadonly;
		/** Fully qualified type name of the plug-in type. */
		TypeName: DevKit.WebApi.StringValue;
		/** Version number of the assembly for the plug-in type. */
		Version: DevKit.WebApi.StringValueReadonly;
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
		/** Group name of workflow custom activity. */
		WorkflowActivityGroupName: DevKit.WebApi.StringValue;
	}
}
declare namespace OptionSet {
	namespace PluginType {
		enum ComponentState {
			/** 0 */
			Published,
			/** 1 */
			Unpublished,
			/** 2 */
			Deleted,
			/** 3 */
			Deleted_Unpublished
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
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':false,'IsDebugWebApi':true}