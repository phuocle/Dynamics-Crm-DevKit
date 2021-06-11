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
	}
	class FormMigration_Tracker extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form Migration_Tracker
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Migration_Tracker */
		Body: DevKit.FormMigration_Tracker.Body;
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
//{'JsForm':['Migration Tracker'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false,'Version':'2.12.31','JsFormVersion':'v2'}