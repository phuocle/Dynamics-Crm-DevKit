//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	export class PickListMappingApi {
		/**
		* DynamicsCrm.DevKit PickListMappingApi
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
		/** Unique identifier of the column mapping with which this list value mapping is associated. */
		ColumnMappingId: string | null;
		/** For internal use only. */
		readonly ComponentState: OptionSet.PickListMapping.ComponentState | null;
		/** Unique identifier of the user who created the list value mapping. */
		readonly CreatedBy: string | null;
		/** Date and time when the list value mapping was created. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who created the picklistmapping. */
		readonly CreatedOnBehalfBy: string | null;
		/** Version in which the component is introduced. */
		IntroducedVersion: string | null;
		/** Information that specifies whether this component is managed. */
		readonly IsManaged: boolean | null;
		/** Unique identifier of the user who last modified the list value mapping. */
		readonly ModifiedBy: string | null;
		/** Date and time when the list value mapping was last modified. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who last modified the picklistmapping. */
		readonly ModifiedOnBehalfBy: string | null;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateOnly: Date | null;
		/** Unique identifier of the picklist mapping. */
		PickListMappingId: string | null;
		/** Unique identifier of the Pick List Mapping. */
		readonly PickListMappingIdUnique: string | null;
		/** Information about whether the list value mapping needs to be processed. */
		ProcessCode: OptionSet.PickListMapping.ProcessCode | null;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string | null;
		/** Source value to be replaced. */
		SourceValue: string | null;
		/** Status of the picklist mapping. */
		readonly StateCode: OptionSet.PickListMapping.StateCode | null;
		/** Reason for the status of the picklist mapping. */
		StatusCode: OptionSet.PickListMapping.StatusCode | null;
		/** For internal use only. */
		readonly SupportingSolutionId: string | null;
		/** Microsoft Dynamics 365 list value with which to replace the source value. */
		TargetValue: number | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			/** Unique identifier of the column mapping with which this list value mapping is associated. */
			readonly ColumnMappingId: string;
			/** For internal use only. */
			readonly ComponentState: string;
			/** Unique identifier of the user who created the list value mapping. */
			readonly CreatedBy: string;
			/** Date and time when the list value mapping was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the picklistmapping. */
			readonly CreatedOnBehalfBy: string;
			/** Version in which the component is introduced. */
			readonly IntroducedVersion: string;
			/** Information that specifies whether this component is managed. */
			readonly IsManaged: string;
			/** Unique identifier of the user who last modified the list value mapping. */
			readonly ModifiedBy: string;
			/** Date and time when the list value mapping was last modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who last modified the picklistmapping. */
			readonly ModifiedOnBehalfBy: string;
			/** For internal use only. */
			readonly OverwriteTime_UtcDateOnly: string;
			/** Unique identifier of the picklist mapping. */
			readonly PickListMappingId: string;
			/** Unique identifier of the Pick List Mapping. */
			readonly PickListMappingIdUnique: string;
			/** Information about whether the list value mapping needs to be processed. */
			readonly ProcessCode: string;
			/** Unique identifier of the associated solution. */
			readonly SolutionId: string;
			/** Source value to be replaced. */
			readonly SourceValue: string;
			/** Status of the picklist mapping. */
			readonly StateCode: string;
			/** Reason for the status of the picklist mapping. */
			readonly StatusCode: string;
			/** For internal use only. */
			readonly SupportingSolutionId: string;
			/** Microsoft Dynamics 365 list value with which to replace the source value. */
			readonly TargetValue: string;
		}
	}
}
declare namespace OptionSet {
	namespace PickListMapping {
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
		enum ProcessCode {
			/** Ignore = 2*/
			Ignore = 2,
			/** Internal = 3*/
			Internal = 3,
			/** Process = 1*/
			Process = 1,
			/** Unmapped = 4*/
			Unmapped = 4
		}
		enum StateCode {
			/** Active = 0*/
			Active = 0
		}
		enum StatusCode {
			/** Active = 0*/
			Active = 0
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