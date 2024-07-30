//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class flowrunApi {
		/**
		* DynamicsCrm.DevKit flowrunApi
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
		/** Duration of the run in milliseconds */
		DurationInMs: number;
		/** The date and time at which the flow run ended. */
		EndTime_UtcDateAndTime: Date;
		/** Error code when flow run fails */
		ErrorCode: string;
		/** Error message when flow run fails */
		ErrorMessage: string;
		/** Unique identifier of flow run */
		flowrunId: string;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Primary run record indicator */
		IsPrimary: OptionSet.flowrun.IsPrimary;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string;
		/** The name of the custom entity. */
		name: string;
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
		/** Unique identifier of the parent run that triggered this run */
		parentRunId: string;
		/** Logical partition id. A logical partition consists of a set of records with same partition id. */
		PartitionId: string;
		/** Unique identifier of the runtime resource */
		resourceId: string;
		/** The date and time at which the flow run started */
		StartTime_UtcDateAndTime: Date;
		/** Status of the flow run */
		Status: string;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Type of trigger in the flow run */
		TriggerType: string;
		/** Time to live in seconds. */
		TTLInSeconds: number;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		/** Unique identifier of the workflow with which the flow run is associated. */
		Workflow: string;
		/** Unique identifier of the workflow associated with this run */
		WorkflowId: string;
		readonly FormattedValue: {
			/** Unique identifier of the user who created the record. */
			readonly CreatedBy: string;
			/** Date and time when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the record. */
			readonly CreatedOnBehalfBy: string;
			/** Duration of the run in milliseconds */
			readonly DurationInMs: string;
			/** The date and time at which the flow run ended. */
			readonly EndTime_UtcDateAndTime: string;
			/** Error code when flow run fails */
			readonly ErrorCode: string;
			/** Error message when flow run fails */
			readonly ErrorMessage: string;
			/** Unique identifier of flow run */
			readonly flowrunId: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Primary run record indicator */
			readonly IsPrimary: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			/** The name of the custom entity. */
			readonly name: string;
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
			/** Unique identifier of the parent run that triggered this run */
			readonly parentRunId: string;
			/** Logical partition id. A logical partition consists of a set of records with same partition id. */
			readonly PartitionId: string;
			/** Unique identifier of the runtime resource */
			readonly resourceId: string;
			/** The date and time at which the flow run started */
			readonly StartTime_UtcDateAndTime: string;
			/** Status of the flow run */
			readonly Status: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Type of trigger in the flow run */
			readonly TriggerType: string;
			/** Time to live in seconds. */
			readonly TTLInSeconds: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
			/** Unique identifier of the workflow with which the flow run is associated. */
			readonly Workflow: string;
			/** Unique identifier of the workflow associated with this run */
			readonly WorkflowId: string;
		}
	}
}
declare namespace OptionSet {
	namespace flowrun {
		enum IsPrimary {
			/** 0 */
			_false,
			/** 1 */
			_true
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