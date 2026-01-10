//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	export class msdyn_AITestRunBatchApi {
		/**
		* DynamicsCrm.DevKit msdyn_AITestRunBatchApi
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
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string | null;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string | null;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number | null;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string | null;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string | null;
		msdyn_AccuracyScore: number | null;
		/** Unique identifier for AIObject associated with AITestCase. */
		msdyn_AIObjectId: string | null;
		/** The Object type. */
		msdyn_AIObjectType: string | null;
		/** Unique identifier for entity instances */
		msdyn_AITestRunBatchId: string | null;
		msdyn_BatchRunStatus: OptionSet.msdyn_AITestRunBatch.msdyn_BatchRunStatus | null;
		/** Date and time when the batch run was completed. */
		msdyn_CompletedOn_UtcDateAndTime: Date | null;
		/** The description of the test run batch. */
		msdyn_Description: string | null;
		/** The error message of the batch run. */
		msdyn_ErrorMessage: string | null;
		/** Date and time when the batch run was last reviewed. */
		msdyn_LastReviewedOn_UtcDateAndTime: Date | null;
		/** The name of the AI test run batch. */
		msdyn_Name: string | null;
		msdyn_RunDuration: number | null;
		/** Date and time when the batch run was started. */
		msdyn_StartedOn_UtcDateAndTime: Date | null;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date | null;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string | null;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string | null;
		/** Unique identifier for the business unit that owns the record */
		readonly OwningBusinessUnit: string | null;
		/** Unique identifier for the team that owns the record. */
		readonly OwningTeam: string | null;
		/** Unique identifier for the user that owns the record. */
		readonly OwningUser: string | null;
		/** Status of the AI Test Run Batch */
		statecode: OptionSet.msdyn_AITestRunBatch.statecode | null;
		/** Reason for the status of the AI Test Run Batch */
		statuscode: OptionSet.msdyn_AITestRunBatch.statuscode | null;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number | null;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number | null;
		/** Version Number */
		readonly VersionNumber: number | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			/** Unique identifier of the user who created the record. */
			readonly CreatedBy: string;
			/** Date and time when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the record. */
			readonly CreatedOnBehalfBy: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			readonly msdyn_AccuracyScore: string;
			/** Unique identifier for AIObject associated with AITestCase. */
			readonly msdyn_AIObjectId: string;
			/** The Object type. */
			readonly msdyn_AIObjectType: string;
			/** Unique identifier for entity instances */
			readonly msdyn_AITestRunBatchId: string;
			readonly msdyn_BatchRunStatus: string;
			/** Date and time when the batch run was completed. */
			readonly msdyn_CompletedOn_UtcDateAndTime: string;
			/** The description of the test run batch. */
			readonly msdyn_Description: string;
			/** The error message of the batch run. */
			readonly msdyn_ErrorMessage: string;
			/** Date and time when the batch run was last reviewed. */
			readonly msdyn_LastReviewedOn_UtcDateAndTime: string;
			/** The name of the AI test run batch. */
			readonly msdyn_Name: string;
			readonly msdyn_RunDuration: string;
			/** Date and time when the batch run was started. */
			readonly msdyn_StartedOn_UtcDateAndTime: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Unique identifier for the business unit that owns the record */
			readonly OwningBusinessUnit: string;
			/** Unique identifier for the team that owns the record. */
			readonly OwningTeam: string;
			/** Unique identifier for the user that owns the record. */
			readonly OwningUser: string;
			/** Status of the AI Test Run Batch */
			readonly statecode: string;
			/** Reason for the status of the AI Test Run Batch */
			readonly statuscode: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace msdyn_AITestRunBatch {
		enum msdyn_BatchRunStatus {
			/** Blocked = 3*/
			Blocked = 3,
			/** Canceled = 6*/
			Canceled = 6,
			/** Created = 0*/
			Created = 0,
			/** Failed = 5*/
			Failed = 5,
			/** InProgress = 1*/
			InProgress = 1,
			/** Paused = 2*/
			Paused = 2,
			/** Succeeded = 4*/
			Succeeded = 4
		}
		enum statecode {
			/** Active = 0*/
			Active = 0,
			/** Inactive = 1*/
			Inactive = 1
		}
		enum statuscode {
			/** Active = 1*/
			Active = 1,
			/** Inactive = 2*/
			Inactive = 2
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