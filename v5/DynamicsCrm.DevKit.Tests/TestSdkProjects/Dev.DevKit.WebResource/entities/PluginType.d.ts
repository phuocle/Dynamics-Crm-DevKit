//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	export class PluginTypeApi {
		/**
		* DynamicsCrm.DevKit PluginTypeApi
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
		/** Full path name of the plug-in assembly. */
		readonly AssemblyName: string | null;
		/** For internal use only. */
		readonly ComponentState: OptionSet.PluginType.ComponentState | null;
		/** Unique identifier of the user who created the plug-in type. */
		readonly CreatedBy: string | null;
		/** Date and time when the plug-in type was created. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who created the plugintype. */
		readonly CreatedOnBehalfBy: string | null;
		/** Culture code for the plug-in assembly. */
		readonly Culture: string | null;
		/** Customization level of the plug-in type. */
		readonly CustomizationLevel: number | null;
		/** Serialized Custom Activity Type information, including required arguments. For more information, see SandboxCustomActivityInfo. */
		readonly CustomWorkflowActivityInfo: string | null;
		/** Description of the plug-in type. */
		Description: string | null;
		/** User friendly name for the plug-in. */
		FriendlyName: string | null;
		readonly IsManaged: boolean | null;
		/** Indicates if the plug-in is a custom activity for workflows. */
		readonly IsWorkflowActivity: boolean | null;
		/** Major of the version number of the assembly for the plug-in type. */
		readonly Major: number | null;
		/** Minor of the version number of the assembly for the plug-in type. */
		readonly Minor: number | null;
		/** Unique identifier of the user who last modified the plug-in type. */
		readonly ModifiedBy: string | null;
		/** Date and time when the plug-in type was last modified. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who last modified the plugintype. */
		readonly ModifiedOnBehalfBy: string | null;
		/** Name of the plug-in type. */
		Name: string | null;
		/** Unique identifier of the organization with which the plug-in type is associated. */
		readonly OrganizationId: string | null;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateOnly: Date | null;
		/** Unique identifier of the plug-in assembly that contains this plug-in type. */
		PluginAssemblyId: string | null;
		/** Uniquely identifies the plug-in type associated with a plugin package when exporting a solution. */
		PluginTypeExportKey: string | null;
		/** Unique identifier of the plug-in type. */
		PluginTypeId: string | null;
		/** Unique identifier of the plug-in type. */
		readonly PluginTypeIdUnique: string | null;
		/** Public key token of the assembly for the plug-in type. */
		readonly PublicKeyToken: string | null;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string | null;
		/** For internal use only. */
		readonly SupportingSolutionId: string | null;
		/** Fully qualified type name of the plug-in type. */
		TypeName: string | null;
		/** Version number of the assembly for the plug-in type. */
		readonly Version: string | null;
		readonly VersionNumber: number | null;
		/** Group name of workflow custom activity. */
		WorkflowActivityGroupName: string | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
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
			/** Uniquely identifies the plug-in type associated with a plugin package when exporting a solution. */
			readonly PluginTypeExportKey: string;
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
			/** Deleted = 2*/
			Deleted = 2,
			/** Deleted_Unpublished = 3*/
			Deleted_Unpublished = 3,
			/** Published = 0*/
			Published = 0,
			/** Unpublished = 1*/
			Unpublished = 1
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