//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	export class msdyn_entityrefreshhistoryApi {
		/**
		* DynamicsCrm.DevKit msdyn_entityrefreshhistoryApi
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
		msdyn_DataflowHistoryLookup: string | null;
		msdyn_DataflowId: string | null;
		msdyn_DataflowName: string | null;
		msdyn_EndTime_UtcDateAndTime: Date | null;
		msdyn_EntityName: string | null;
		/** Unique identifier for entity instances */
		msdyn_entityrefreshhistoryId: string | null;
		msdyn_ErrorCount: number | null;
		msdyn_ErrorInfoErrorCode: string | null;
		msdyn_ErrorInfoErrorMessage: string | null;
		msdyn_ErrorInfoEvaluationResultJson: string | null;
		msdyn_ErrorInfoEvaluationResultJsonMemo: string | null;
		msdyn_ErrorInfoLoadToCdsErrorInfoJson: string | null;
		msdyn_ErrorInfoLoadToCdsErrorInfoJsonMemo: string | null;
		msdyn_InsertCount: number | null;
		/** Required name field */
		msdyn_Name: string | null;
		msdyn_RefreshStatus: string | null;
		msdyn_StartTime_UtcDateAndTime: Date | null;
		msdyn_TransactionId: string | null;
		msdyn_UpsertCount: number | null;
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
		/** Status of the EntityRefreshHistory */
		statecode: OptionSet.msdyn_entityrefreshhistory.statecode | null;
		/** Reason for the status of the EntityRefreshHistory */
		statuscode: OptionSet.msdyn_entityrefreshhistory.statuscode | null;
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
			readonly msdyn_DataflowHistoryLookup: string;
			readonly msdyn_DataflowId: string;
			readonly msdyn_DataflowName: string;
			readonly msdyn_EndTime_UtcDateAndTime: string;
			readonly msdyn_EntityName: string;
			/** Unique identifier for entity instances */
			readonly msdyn_entityrefreshhistoryId: string;
			readonly msdyn_ErrorCount: string;
			readonly msdyn_ErrorInfoErrorCode: string;
			readonly msdyn_ErrorInfoErrorMessage: string;
			readonly msdyn_ErrorInfoEvaluationResultJson: string;
			readonly msdyn_ErrorInfoEvaluationResultJsonMemo: string;
			readonly msdyn_ErrorInfoLoadToCdsErrorInfoJson: string;
			readonly msdyn_ErrorInfoLoadToCdsErrorInfoJsonMemo: string;
			readonly msdyn_InsertCount: string;
			/** Required name field */
			readonly msdyn_Name: string;
			readonly msdyn_RefreshStatus: string;
			readonly msdyn_StartTime_UtcDateAndTime: string;
			readonly msdyn_TransactionId: string;
			readonly msdyn_UpsertCount: string;
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
			/** Status of the EntityRefreshHistory */
			readonly statecode: string;
			/** Reason for the status of the EntityRefreshHistory */
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
	namespace msdyn_entityrefreshhistory {
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