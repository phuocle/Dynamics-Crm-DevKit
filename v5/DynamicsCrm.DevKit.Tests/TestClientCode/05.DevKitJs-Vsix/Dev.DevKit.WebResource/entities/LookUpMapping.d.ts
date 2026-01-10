//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	export class LookUpMappingApi {
		/**
		* DynamicsCrm.DevKit LookUpMappingApi
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
		/** Unique identifier of the column mapping with which this lookup mapping is associated. */
		ColumnMappingId: string | null;
		/** For internal use only. */
		readonly ComponentState: OptionSet.LookUpMapping.ComponentState | null;
		/** Unique identifier of the user who created the lookup mapping. */
		readonly CreatedBy: string | null;
		/** Date and time when the lookup mapping was created. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who created the lookupmapping. */
		readonly CreatedOnBehalfBy: string | null;
		/** Version in which the component is introduced. */
		IntroducedVersion: string | null;
		/** Information that specifies whether this component is managed. */
		readonly IsManaged: boolean | null;
		/** Name of the field with which the lookup is associated. */
		LookUpAttributeName: string | null;
		/** Name of the entity with which the lookup is associated. */
		LookUpEntityName: string | null;
		/** Unique identifier of the lookup mapping. */
		LookUpMappingId: string | null;
		/** Unique identifier of the LookUp Mapping. */
		readonly LookUpMappingIdUnique: string | null;
		/** Lookup source code for lookup mapping. */
		LookUpSourceCode: OptionSet.LookUpMapping.LookUpSourceCode | null;
		/** Unique identifier of the user who last modified the lookup mapping. */
		readonly ModifiedBy: string | null;
		/** Date and time when the lookup mapping was last modified. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who last modified the lookupmapping. */
		readonly ModifiedOnBehalfBy: string | null;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateOnly: Date | null;
		/** Information about whether the lookup mapping has to be processed. */
		ProcessCode: OptionSet.LookUpMapping.ProcessCode | null;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string | null;
		/** Status of the lookup mapping. */
		readonly StateCode: OptionSet.LookUpMapping.StateCode | null;
		/** Reason for the status of the lookup mapping. */
		StatusCode: OptionSet.LookUpMapping.StatusCode | null;
		/** For internal use only. */
		readonly SupportingSolutionId: string | null;
		/** Unique identifier of the transformation parameter mapping with which this lookup mapping is associated. */
		TransformationParameterMappingId: string | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			/** Unique identifier of the column mapping with which this lookup mapping is associated. */
			readonly ColumnMappingId: string;
			/** For internal use only. */
			readonly ComponentState: string;
			/** Unique identifier of the user who created the lookup mapping. */
			readonly CreatedBy: string;
			/** Date and time when the lookup mapping was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the lookupmapping. */
			readonly CreatedOnBehalfBy: string;
			/** Version in which the component is introduced. */
			readonly IntroducedVersion: string;
			/** Information that specifies whether this component is managed. */
			readonly IsManaged: string;
			/** Name of the field with which the lookup is associated. */
			readonly LookUpAttributeName: string;
			/** Name of the entity with which the lookup is associated. */
			readonly LookUpEntityName: string;
			/** Unique identifier of the lookup mapping. */
			readonly LookUpMappingId: string;
			/** Unique identifier of the LookUp Mapping. */
			readonly LookUpMappingIdUnique: string;
			/** Lookup source code for lookup mapping. */
			readonly LookUpSourceCode: string;
			/** Unique identifier of the user who last modified the lookup mapping. */
			readonly ModifiedBy: string;
			/** Date and time when the lookup mapping was last modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who last modified the lookupmapping. */
			readonly ModifiedOnBehalfBy: string;
			/** For internal use only. */
			readonly OverwriteTime_UtcDateOnly: string;
			/** Information about whether the lookup mapping has to be processed. */
			readonly ProcessCode: string;
			/** Unique identifier of the associated solution. */
			readonly SolutionId: string;
			/** Status of the lookup mapping. */
			readonly StateCode: string;
			/** Reason for the status of the lookup mapping. */
			readonly StatusCode: string;
			/** For internal use only. */
			readonly SupportingSolutionId: string;
			/** Unique identifier of the transformation parameter mapping with which this lookup mapping is associated. */
			readonly TransformationParameterMappingId: string;
		}
	}
}
declare namespace OptionSet {
	namespace LookUpMapping {
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
		enum LookUpSourceCode {
			/** Source = 0*/
			Source = 0,
			/** System = 1*/
			System = 1
		}
		enum ProcessCode {
			/** Ignore = 2*/
			Ignore = 2,
			/** Internal = 3*/
			Internal = 3,
			/** Process = 1*/
			Process = 1
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