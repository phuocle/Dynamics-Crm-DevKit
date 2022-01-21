//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormMigration_Tracker {
		interface Tabs {
		}
		interface Body {
			/** Indicates if the migration was successfully completed or not */
			msdyn_IsMigrationComplete: DevKit.Controls.Boolean;
			/** Id of the legacy ARC rule to be migrated */
			msdyn_LegacyConvertRuleId: DevKit.Controls.Lookup;
			/** Id of the legacy ARC item to be migrated */
			msdyn_LegacyConvertRuleItemId: DevKit.Controls.Lookup;
			/** Id of the legacy SLA to be migrated */
			msdyn_LegacySLAId: DevKit.Controls.Lookup;
			/** Id of the legacy SLA item to be migrated */
			msdyn_LegacySLAItemId: DevKit.Controls.Lookup;
			/** The overall status of a migration process */
			msdyn_MigrationStatus: DevKit.Controls.OptionSet;
			/** The exception of a certain status */
			msdyn_MigrationStatusException: DevKit.Controls.String;
			/** The reason of a certain status */
			msdyn_MigrationStatusReason: DevKit.Controls.String;
			/** Indicates whether the request is a pre-validation check or an actual migration run */
			msdyn_MigrationType: DevKit.Controls.OptionSet;
			/** Id of the Uci ARC rule created post migration */
			msdyn_ModernConvertRuleId: DevKit.Controls.Lookup;
			/** Id of the Uci ARC item created post migration */
			msdyn_ModernConvertRuleItemId: DevKit.Controls.Lookup;
			/** Id of the Uci SLA created post migration */
			msdyn_ModernSLAId: DevKit.Controls.Lookup;
			/** Id of the Uci SLA item created post migration */
			msdyn_ModernSLAItemId: DevKit.Controls.Lookup;
			/** The name of the custom entity. */
			msdyn_Name: DevKit.Controls.String;
			/** Object type code */
			msdyn_Objecttypecode: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Status of the Migration tracker */
			statecode: DevKit.Controls.OptionSet;
			/** Reason for the status of the Migration tracker */
			statuscode: DevKit.Controls.OptionSet;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class FormMigration_Tracker extends DevKit.IForm {
		/**
		* Migration Tracker [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Migration_Tracker */
		Body: DevKit.FormMigration_Tracker.Body;
		/** The Process of form Migration_Tracker */
		Process: DevKit.FormMigration_Tracker.Process;
		/** The SidePanes of form Migration_Tracker */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_migrationtrackerApi {
		/**
		* DynamicsCrm.DevKit msdyn_migrationtrackerApi
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
		/** The entity object */
		Entity: any;
		/** The entity name */
		EntityName: string;
		/** The entity collection name */
		EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependant on the fields that are retrieved */
		"@odata.etag": string;
		/** Unique identifier to distinguish each batch of migration(Deprecated) */
		CorrelationId: DevKit.WebApi.StringValue;
		/** Unique identifier of the user who created the record. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the record. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the user who modified the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who modified the record. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier to distinguish each batch of migration */
		msdyn_CorrelationId: DevKit.WebApi.StringValue;
		/** Indicates if the migration was successfully completed or not */
		msdyn_IsMigrationComplete: DevKit.WebApi.BooleanValue;
		/** Id of the legacy ARC rule to be migrated */
		msdyn_LegacyConvertRuleId: DevKit.WebApi.LookupValue;
		/** Id of the legacy ARC item to be migrated */
		msdyn_LegacyConvertRuleItemId: DevKit.WebApi.LookupValue;
		msdyn_LegacyRuleIdName: DevKit.WebApi.StringValueReadonly;
		msdyn_LegacyRuleItemIdName: DevKit.WebApi.StringValueReadonly;
		/** Id of the legacy SLA to be migrated */
		msdyn_LegacySLAId: DevKit.WebApi.LookupValue;
		/** Id of the legacy SLA item to be migrated */
		msdyn_LegacySLAItemId: DevKit.WebApi.LookupValue;
		/** The overall status of a migration process */
		msdyn_MigrationStatus: DevKit.WebApi.OptionSetValue;
		/** The exception of a certain status */
		msdyn_MigrationStatusException: DevKit.WebApi.StringValue;
		/** The reason of a certain status */
		msdyn_MigrationStatusReason: DevKit.WebApi.StringValue;
		/** Unique identifier for entity instances */
		msdyn_migrationtrackerId: DevKit.WebApi.GuidValue;
		/** Indicates whether the request is a pre-validation check or an actual migration run */
		msdyn_MigrationType: DevKit.WebApi.OptionSetValue;
		/** Id of the Uci ARC rule created post migration */
		msdyn_ModernConvertRuleId: DevKit.WebApi.LookupValue;
		/** Id of the Uci ARC item created post migration */
		msdyn_ModernConvertRuleItemId: DevKit.WebApi.LookupValue;
		msdyn_ModernRuleIdName: DevKit.WebApi.StringValueReadonly;
		msdyn_ModernRuleItemIdName: DevKit.WebApi.StringValueReadonly;
		/** Id of the Uci SLA created post migration */
		msdyn_ModernSLAId: DevKit.WebApi.LookupValue;
		/** Id of the Uci SLA item created post migration */
		msdyn_ModernSLAItemId: DevKit.WebApi.LookupValue;
		/** The name of the custom entity. */
		msdyn_Name: DevKit.WebApi.StringValue;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: DevKit.WebApi.LookupValue;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: DevKit.WebApi.LookupValue;
		/** Unique identifier for the business unit that owns the record */
		OwningBusinessUnit: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier for the team that owns the record. */
		OwningTeam: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier for the user that owns the record. */
		OwningUser: DevKit.WebApi.LookupValueReadonly;
		/** Status of the Migration tracker */
		statecode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the Migration tracker */
		statuscode: DevKit.WebApi.OptionSetValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Version Number */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace msdyn_migrationtracker {
		enum msdyn_MigrationStatus {
			/** 0 */
			In_Progress,
			/** 2 */
			Incomplete,
			/** 1 */
			Migrated
		}
		enum msdyn_MigrationType {
			/** 0 */
			Migration,
			/** 1 */
			PreValidation
		}
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.00.00'}