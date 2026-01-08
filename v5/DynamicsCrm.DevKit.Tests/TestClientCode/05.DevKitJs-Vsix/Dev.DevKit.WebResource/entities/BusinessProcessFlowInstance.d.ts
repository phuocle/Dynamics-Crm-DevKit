//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	export class BusinessProcessFlowInstanceApi {
		/**
		* DynamicsCrm.DevKit BusinessProcessFlowInstanceApi
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
		/** Date and time when the active stage was started. */
		readonly ActiveStageStartedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the business process flow instance. */
		BusinessProcessFlowInstanceId: string | null;
		/** Date and time when the process completed. */
		readonly CompletedOn_UtcDateAndTime: Date | null;
		/** Shows who created the record. */
		readonly CreatedBy: string | null;
		/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Shows who created the record on behalf of another user. */
		readonly CreatedOnBehalfBy: string | null;
		/** Unique identifier of the first entity instance. */
		Entity1Id: string | null;
		/** Unique identifier of the second entity instance. */
		Entity2Id: string | null;
		/** Unique identifier of the third entity instance. */
		Entity3Id: string | null;
		/** Unique identifier of the fourth entity instance. */
		Entity4Id: string | null;
		/** Unique identifier of the fifth entity instance. */
		Entity5Id: string | null;
		/** Shows who last updated the record. */
		readonly ModifiedBy: string | null;
		/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Shows who created the record on behalf of another user. */
		readonly ModifiedOnBehalfBy: string | null;
		/** Type a descriptive name for the instance. */
		Name: string | null;
		/** Unique identifier of the business process flow. */
		ProcessId: string | null;
		/** Unique identifier of active stage in the business process flow instance. */
		ProcessStageId: string | null;
		/** Shows whether the business process flow instance is active or inactive. */
		StateCode: OptionSet.BusinessProcessFlowInstance.StateCode | null;
		/** Business process flow instance's status. */
		StatusCode: OptionSet.BusinessProcessFlowInstance.StatusCode | null;
		/** For internal use only. */
		TraversedPath: string | null;
		/** Version number of the business process flow instance. */
		readonly VersionNumber: number | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			/** Date and time when the active stage was started. */
			readonly ActiveStageStartedOn_UtcDateAndTime: string;
			/** Unique identifier of the business process flow instance. */
			readonly BusinessProcessFlowInstanceId: string;
			/** Date and time when the process completed. */
			readonly CompletedOn_UtcDateAndTime: string;
			/** Shows who created the record. */
			readonly CreatedBy: string;
			/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Shows who created the record on behalf of another user. */
			readonly CreatedOnBehalfBy: string;
			/** Unique identifier of the first entity instance. */
			readonly Entity1Id: string;
			/** Unique identifier of the second entity instance. */
			readonly Entity2Id: string;
			/** Unique identifier of the third entity instance. */
			readonly Entity3Id: string;
			/** Unique identifier of the fourth entity instance. */
			readonly Entity4Id: string;
			/** Unique identifier of the fifth entity instance. */
			readonly Entity5Id: string;
			/** Shows who last updated the record. */
			readonly ModifiedBy: string;
			/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Shows who created the record on behalf of another user. */
			readonly ModifiedOnBehalfBy: string;
			/** Type a descriptive name for the instance. */
			readonly Name: string;
			/** Unique identifier of the business process flow. */
			readonly ProcessId: string;
			/** Unique identifier of active stage in the business process flow instance. */
			readonly ProcessStageId: string;
			/** Shows whether the business process flow instance is active or inactive. */
			readonly StateCode: string;
			/** Business process flow instance's status. */
			readonly StatusCode: string;
			/** For internal use only. */
			readonly TraversedPath: string;
			/** Version number of the business process flow instance. */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace BusinessProcessFlowInstance {
		enum Entity1ObjectTypeCode {
		}
		enum Entity2ObjectTypeCode {
		}
		enum Entity3ObjectTypeCode {
		}
		enum Entity4ObjectTypeCode {
		}
		enum Entity5ObjectTypeCode {
		}
		enum StateCode {
			/** Active = 0*/
			Active = 0,
			/** Inactive = 1*/
			Inactive = 1
		}
		enum StatusCode {
			/** Aborted = 3*/
			Aborted = 3,
			/** Active = 1*/
			Active = 1,
			/** Finished = 2*/
			Finished = 2
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