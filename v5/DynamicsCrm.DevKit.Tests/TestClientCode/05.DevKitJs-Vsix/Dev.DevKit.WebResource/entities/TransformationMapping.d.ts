//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	export class TransformationMappingApi {
		/**
		* DynamicsCrm.DevKit TransformationMappingApi
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
		/** For internal use only. */
		readonly ComponentState: OptionSet.TransformationMapping.ComponentState | null;
		/** Unique identifier of the user who created the transformation mapping. */
		readonly CreatedBy: string | null;
		/** Date and time when the transformation mapping was created. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who created the transformationmapping. */
		readonly CreatedOnBehalfBy: string | null;
		/** Unique identifier of the associated data map. */
		ImportMapId: string | null;
		/** Version in which the component is introduced. */
		IntroducedVersion: string | null;
		/** Information that specifies whether this component is managed. */
		readonly IsManaged: boolean | null;
		/** Unique identifier of the user who last modified the mapping. */
		readonly ModifiedBy: string | null;
		/** Date and time when the transformation mapping was last modified. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who last modified the transformationmapping. */
		readonly ModifiedOnBehalfBy: string | null;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateOnly: Date | null;
		/** Information about whether the transformation mapping needs to be processed. */
		ProcessCode: OptionSet.TransformationMapping.ProcessCode | null;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string | null;
		/** Name of the source entity. */
		SourceEntityName: string | null;
		/** Status of the transformation mapping. */
		readonly StateCode: OptionSet.TransformationMapping.StateCode | null;
		/** Reason for the status of the transformation mapping. */
		StatusCode: OptionSet.TransformationMapping.StatusCode | null;
		/** For internal use only. */
		readonly SupportingSolutionId: string | null;
		/** Name of the Microsoft Dynamics 365 entity. */
		TargetEntityName: string | null;
		/** Unique identifier of the transformation mapping. */
		TransformationMappingId: string | null;
		/** Unique identifier of the Transformation Mapping. */
		readonly TransformationMappingIdUnique: string | null;
		/** Type of transformation. */
		TransformationTypeName: string | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			/** For internal use only. */
			readonly ComponentState: string;
			/** Unique identifier of the user who created the transformation mapping. */
			readonly CreatedBy: string;
			/** Date and time when the transformation mapping was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the transformationmapping. */
			readonly CreatedOnBehalfBy: string;
			/** Unique identifier of the associated data map. */
			readonly ImportMapId: string;
			/** Version in which the component is introduced. */
			readonly IntroducedVersion: string;
			/** Information that specifies whether this component is managed. */
			readonly IsManaged: string;
			/** Unique identifier of the user who last modified the mapping. */
			readonly ModifiedBy: string;
			/** Date and time when the transformation mapping was last modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who last modified the transformationmapping. */
			readonly ModifiedOnBehalfBy: string;
			/** For internal use only. */
			readonly OverwriteTime_UtcDateOnly: string;
			/** Information about whether the transformation mapping needs to be processed. */
			readonly ProcessCode: string;
			/** Unique identifier of the associated solution. */
			readonly SolutionId: string;
			/** Name of the source entity. */
			readonly SourceEntityName: string;
			/** Status of the transformation mapping. */
			readonly StateCode: string;
			/** Reason for the status of the transformation mapping. */
			readonly StatusCode: string;
			/** For internal use only. */
			readonly SupportingSolutionId: string;
			/** Name of the Microsoft Dynamics 365 entity. */
			readonly TargetEntityName: string;
			/** Unique identifier of the transformation mapping. */
			readonly TransformationMappingId: string;
			/** Unique identifier of the Transformation Mapping. */
			readonly TransformationMappingIdUnique: string;
			/** Type of transformation. */
			readonly TransformationTypeName: string;
		}
	}
}
declare namespace OptionSet {
	namespace TransformationMapping {
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