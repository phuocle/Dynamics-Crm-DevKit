//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class msdyn_entityrefreshhistoryApi {
		/**
		* DynamicsCrm.DevKit msdyn_entityrefreshhistoryApi
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
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string;
		msdyn_DataflowHistoryLookup: string;
		msdyn_DataflowId: string;
		msdyn_DataflowName: string;
		msdyn_EndTime_UtcDateAndTime: Date;
		msdyn_EntityName: string;
		/** Unique identifier for entity instances */
		msdyn_entityrefreshhistoryId: string;
		msdyn_ErrorCount: number;
		msdyn_ErrorInfoErrorCode: string;
		msdyn_ErrorInfoErrorMessage: string;
		msdyn_ErrorInfoEvaluationResultJson: string;
		msdyn_ErrorInfoEvaluationResultJsonMemo: string;
		msdyn_ErrorInfoLoadToCdsErrorInfoJson: string;
		msdyn_ErrorInfoLoadToCdsErrorInfoJsonMemo: string;
		msdyn_InsertCount: number;
		/** Required name field */
		msdyn_Name: string;
		msdyn_RefreshStatus: string;
		msdyn_StartTime_UtcDateAndTime: Date;
		msdyn_TransactionId: string;
		msdyn_UpsertCount: number;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Unique identifier for the business unit that owns the record */
		readonly OwningBusinessUnit: string;
		/** Unique identifier for the team that owns the record. */
		readonly OwningTeam: string;
		/** Unique identifier for the user that owns the record. */
		readonly OwningUser: string;
		/** Status of the EntityRefreshHistory */
		statecode: OptionSet.msdyn_entityrefreshhistory.statecode;
		/** Reason for the status of the EntityRefreshHistory */
		statuscode: OptionSet.msdyn_entityrefreshhistory.statuscode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
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
			/** 0 */
			Active,
			/** 1 */
			Inactive
		}
		enum statuscode {
			/** 1 */
			Active,
			/** 2 */
			Inactive
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.33.33.33'}