//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
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
		/** Full path name of the plug-in assembly. */
		readonly AssemblyName: string;
		/** For internal use only. */
		readonly ComponentState: OptionSet.PluginType.ComponentState;
		/** Unique identifier of the user who created the plug-in type. */
		readonly CreatedBy: string;
		/** Date and time when the plug-in type was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the plugintype. */
		readonly CreatedOnBehalfBy: string;
		/** Culture code for the plug-in assembly. */
		readonly Culture: string;
		/** Customization level of the plug-in type. */
		readonly CustomizationLevel: number;
		/** Serialized Custom Activity Type information, including required arguments. For more information, see SandboxCustomActivityInfo. */
		readonly CustomWorkflowActivityInfo: string;
		/** Description of the plug-in type. */
		Description: string;
		/** User friendly name for the plug-in. */
		FriendlyName: string;
		readonly IsManaged: boolean;
		/** Indicates if the plug-in is a custom activity for workflows. */
		readonly IsWorkflowActivity: boolean;
		/** Major of the version number of the assembly for the plug-in type. */
		readonly Major: number;
		/** Minor of the version number of the assembly for the plug-in type. */
		readonly Minor: number;
		/** Unique identifier of the user who last modified the plug-in type. */
		readonly ModifiedBy: string;
		/** Date and time when the plug-in type was last modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who last modified the plugintype. */
		readonly ModifiedOnBehalfBy: string;
		/** Name of the plug-in type. */
		Name: string;
		/** Unique identifier of the organization with which the plug-in type is associated. */
		readonly OrganizationId: string;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateOnly: Date;
		/** Unique identifier of the plug-in assembly that contains this plug-in type. */
		PluginAssemblyId: string;
		/** Unique identifier of the plug-in type. */
		PluginTypeId: string;
		/** Unique identifier of the plug-in type. */
		readonly PluginTypeIdUnique: string;
		/** Public key token of the assembly for the plug-in type. */
		readonly PublicKeyToken: string;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string;
		/** For internal use only. */
		readonly SupportingSolutionId: string;
		/** Fully qualified type name of the plug-in type. */
		TypeName: string;
		/** Version number of the assembly for the plug-in type. */
		readonly Version: string;
		readonly VersionNumber: number;
		/** Group name of workflow custom activity. */
		WorkflowActivityGroupName: string;
		readonly FormattedValue: {
			/** Full path name of the plug-in assembly. */
			readonly AssemblyName: string;
			/** For internal use only. */
			readonly ComponentState: string;
			/** Unique identifier of the user who created the plug-in type. */
			readonly CreatedBy: string;
			/** Date and time when the plug-in type was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the plugintype. */
			readonly CreatedOnBehalfBy: string;
			/** Culture code for the plug-in assembly. */
			readonly Culture: string;
			/** Customization level of the plug-in type. */
			readonly CustomizationLevel: string;
			/** Serialized Custom Activity Type information, including required arguments. For more information, see SandboxCustomActivityInfo. */
			readonly CustomWorkflowActivityInfo: string;
			/** Description of the plug-in type. */
			readonly Description: string;
			/** User friendly name for the plug-in. */
			readonly FriendlyName: string;
			readonly IsManaged: string;
			/** Indicates if the plug-in is a custom activity for workflows. */
			readonly IsWorkflowActivity: string;
			/** Major of the version number of the assembly for the plug-in type. */
			readonly Major: string;
			/** Minor of the version number of the assembly for the plug-in type. */
			readonly Minor: string;
			/** Unique identifier of the user who last modified the plug-in type. */
			readonly ModifiedBy: string;
			/** Date and time when the plug-in type was last modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who last modified the plugintype. */
			readonly ModifiedOnBehalfBy: string;
			/** Name of the plug-in type. */
			readonly Name: string;
			/** Unique identifier of the organization with which the plug-in type is associated. */
			readonly OrganizationId: string;
			/** For internal use only. */
			readonly OverwriteTime_UtcDateOnly: string;
			/** Unique identifier of the plug-in assembly that contains this plug-in type. */
			readonly PluginAssemblyId: string;
			/** Unique identifier of the plug-in type. */
			readonly PluginTypeId: string;
			/** Unique identifier of the plug-in type. */
			readonly PluginTypeIdUnique: string;
			/** Public key token of the assembly for the plug-in type. */
			readonly PublicKeyToken: string;
			/** Unique identifier of the associated solution. */
			readonly SolutionId: string;
			/** For internal use only. */
			readonly SupportingSolutionId: string;
			/** Fully qualified type name of the plug-in type. */
			readonly TypeName: string;
			/** Version number of the assembly for the plug-in type. */
			readonly Version: string;
			readonly VersionNumber: string;
			/** Group name of workflow custom activity. */
			readonly WorkflowActivityGroupName: string;
		}
	}
}
declare namespace OptionSet {
	namespace PluginType {
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