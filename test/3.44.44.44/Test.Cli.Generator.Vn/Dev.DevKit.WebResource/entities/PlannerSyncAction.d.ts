//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class PlannerSyncActionApi {
		/**
		* DynamicsCrm.DevKit PlannerSyncActionApi
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
		Assignments: string;
		/** Date and time when the planner task is due. */
		DueDateTime_TimezoneDateAndTime: Date;
		ExternalBucketId: string;
		ExternalReferences: string;
		GroupId: string;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** For internal use only. Date and time when the action was last attempted. */
		LastAttemptedOn_TimezoneDateAndTime: Date;
		LastSyncError: string;
		Notes: string;
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
		/** The attempts available for processing the planner sync action. */
		PendingAttempts: number;
		/** The percentage of completion for the planner task. */
		PercentComplete: number;
		/** Id of the Business Scenario in Planner. */
		PlannerBusinessScenarioId: string;
		/** Planner Sync Action Id */
		PlannerSyncActionId: string;
		/** The priority of the planner task. */
		Priority: number;
		/** For internal use only. Date and time when the action was queued. */
		QueuedOn_TimezoneDateAndTime: Date;
		SourceRecordEntityLogicalName: string;
		SourceRecordId: string;
		/** Date and time when the planner task was started. */
		StartDateTime_TimezoneDateAndTime: Date;
		/** Status of the Planner Sync Action */
		statecode: OptionSet.PlannerSyncAction.statecode;
		/** Reason for the status of the Planner Sync Action */
		statuscode: OptionSet.PlannerSyncAction.statuscode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		Title: string;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			readonly Assignments: string;
			/** Date and time when the planner task is due. */
			readonly DueDateTime_TimezoneDateAndTime: string;
			readonly ExternalBucketId: string;
			readonly ExternalReferences: string;
			readonly GroupId: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** For internal use only. Date and time when the action was last attempted. */
			readonly LastAttemptedOn_TimezoneDateAndTime: string;
			readonly LastSyncError: string;
			readonly Notes: string;
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
			/** The attempts available for processing the planner sync action. */
			readonly PendingAttempts: string;
			/** The percentage of completion for the planner task. */
			readonly PercentComplete: string;
			/** Id of the Business Scenario in Planner. */
			readonly PlannerBusinessScenarioId: string;
			/** Planner Sync Action Id */
			readonly PlannerSyncActionId: string;
			/** The priority of the planner task. */
			readonly Priority: string;
			/** For internal use only. Date and time when the action was queued. */
			readonly QueuedOn_TimezoneDateAndTime: string;
			readonly SourceRecordEntityLogicalName: string;
			readonly SourceRecordId: string;
			/** Date and time when the planner task was started. */
			readonly StartDateTime_TimezoneDateAndTime: string;
			/** Status of the Planner Sync Action */
			readonly statecode: string;
			/** Reason for the status of the Planner Sync Action */
			readonly statuscode: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			readonly Title: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace PlannerSyncAction {
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