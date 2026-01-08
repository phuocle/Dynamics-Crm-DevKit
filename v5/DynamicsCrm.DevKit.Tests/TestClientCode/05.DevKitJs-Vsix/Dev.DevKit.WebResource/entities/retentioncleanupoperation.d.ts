//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	export class retentioncleanupoperationApi {
		/**
		* DynamicsCrm.DevKit retentioncleanupoperationApi
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
		/** Criteria */
		Criteria: string | null;
		/** End time of the operation. */
		EndTime_UtcDateAndTime: Date | null;
		/** Table name on which cleanup operation is going on. */
		EntityLogicalName: string | null;
		/** Failed records in cleanup operation. */
		FailedCount: number | null;
		/** Version number from where cleanup should happen. */
		FromVersion: number | null;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number | null;
		/** Message. */
		Message: string | null;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string | null;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string | null;
		/** The name of the custom entity. */
		Name: string | null;
		/** Operation name. */
		OperationName: OptionSet.retentioncleanupoperation.OperationName | null;
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
		/** Record count of cleanup operation. */
		RecordCount: number | null;
		/** Unique identifier for entity instances */
		retentioncleanupoperationId: string | null;
		/** Start time of the operation. */
		StartTime_UtcDateAndTime: Date | null;
		/** Status of the retentioncleanupoperation */
		statecode: OptionSet.retentioncleanupoperation.statecode | null;
		/** Reason for the status of the retentioncleanupoperation */
		statuscode: OptionSet.retentioncleanupoperation.statuscode | null;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number | null;
		/** version number till cleanup should happen. */
		ToVersion: number | null;
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
			/** Criteria */
			readonly Criteria: string;
			/** End time of the operation. */
			readonly EndTime_UtcDateAndTime: string;
			/** Table name on which cleanup operation is going on. */
			readonly EntityLogicalName: string;
			/** Failed records in cleanup operation. */
			readonly FailedCount: string;
			/** Version number from where cleanup should happen. */
			readonly FromVersion: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Message. */
			readonly Message: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			/** The name of the custom entity. */
			readonly Name: string;
			/** Operation name. */
			readonly OperationName: string;
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
			/** Record count of cleanup operation. */
			readonly RecordCount: string;
			/** Unique identifier for entity instances */
			readonly retentioncleanupoperationId: string;
			/** Start time of the operation. */
			readonly StartTime_UtcDateAndTime: string;
			/** Status of the retentioncleanupoperation */
			readonly statecode: string;
			/** Reason for the status of the retentioncleanupoperation */
			readonly statuscode: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** version number till cleanup should happen. */
			readonly ToVersion: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace retentioncleanupoperation {
		enum OperationName {
			/** Purge = 10*/
			Purge = 10,
			/** Reconcile = 20*/
			Reconcile = 20
		}
		enum statecode {
			/** Completed = 2*/
			Completed = 2,
			/** InProgress = 1*/
			InProgress = 1,
			/** Waiting = 0*/
			Waiting = 0
		}
		enum statuscode {
			/** Failed = 31*/
			Failed = 31,
			/** InProgress = 20*/
			InProgress = 20,
			/** PartialRecordsIdentified = 33*/
			PartialRecordsIdentified = 33,
			/** Scheduled = 10*/
			Scheduled = 10,
			/** Succeeded = 30*/
			Succeeded = 30
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