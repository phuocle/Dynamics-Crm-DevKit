//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formretentioncleanupoperation_Information {
		interface Tabs {
		}
		interface Body {
			/** The name of the custom entity. */
			Name: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Navigation {

		}
	}
	class Formretentioncleanupoperation_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form retentioncleanupoperation_Information */
		Body: DevKit.Formretentioncleanupoperation_Information.Body;
		/** The Navigation of form retentioncleanupoperation_Information */
		Navigation: DevKit.Formretentioncleanupoperation_Information.Navigation;
		/** The SidePanes of form retentioncleanupoperation_Information */
		SidePanes: DevKit.SidePanes;
	}
	class retentioncleanupoperationApi {
		/**
		* DynamicsCrm.DevKit retentioncleanupoperationApi
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
		/** Criteria */
		Criteria: string;
		/** End time of the operation. */
		EndTime_UtcDateAndTime: Date;
		/** Table name on which cleanup operation is going on. */
		EntityLogicalName1: string;
		/** Failed records in cleanup operation. */
		FailedCount: number;
		/** Version number from where cleanup should happen. */
		FromVersion: number;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Message. */
		Message: string;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string;
		/** The name of the custom entity. */
		Name: string;
		/** Operation name. */
		OperationName: OptionSet.retentioncleanupoperation.OperationName;
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
		/** Record count of cleanup operation. */
		RecordCount: number;
		/** Unique identifier for entity instances */
		retentioncleanupoperationId: string;
		/** Start time of the operation. */
		StartTime_UtcDateAndTime: Date;
		/** Status of the retentioncleanupoperation */
		statecode: OptionSet.retentioncleanupoperation.statecode;
		/** Reason for the status of the retentioncleanupoperation */
		statuscode: OptionSet.retentioncleanupoperation.statuscode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** version number till cleanup should happen. */
		ToVersion: number;
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
			/** Criteria */
			readonly Criteria: string;
			/** End time of the operation. */
			readonly EndTime_UtcDateAndTime: string;
			/** Table name on which cleanup operation is going on. */
			readonly EntityLogicalName1: string;
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
			/** 10 */
			Purge,
			/** 20 */
			Reconcile
		}
		enum statecode {
			/** 2 */
			Completed,
			/** 1 */
			InProgress,
			/** 0 */
			Waiting
		}
		enum statuscode {
			/** 31 */
			Failed,
			/** 20 */
			InProgress,
			/** 33 */
			PartialRecordsIdentified,
			/** 10 */
			Scheduled,
			/** 30 */
			Succeeded
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