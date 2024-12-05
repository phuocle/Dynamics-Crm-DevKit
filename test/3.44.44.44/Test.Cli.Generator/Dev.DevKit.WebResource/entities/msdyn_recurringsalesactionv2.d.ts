//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_recurringsalesactionv2_Information {
		interface Tabs {
		}
		interface Body {
			/** The name of the custom entity. */
			msdyn_TriggerName: DevKit.Controls.String;
		}
		interface Navigation {

		}
	}
	class Formmsdyn_recurringsalesactionv2_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_recurringsalesactionv2_Information */
		Body: DevKit.Formmsdyn_recurringsalesactionv2_Information.Body;
		/** The Navigation of form msdyn_recurringsalesactionv2_Information */
		Navigation: DevKit.Formmsdyn_recurringsalesactionv2_Information.Navigation;
		/** The SidePanes of form msdyn_recurringsalesactionv2_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_recurringsalesactionv2Api {
		/**
		* DynamicsCrm.DevKit msdyn_recurringsalesactionv2Api
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
		msdyn_CustomActionName: string;
		/** Failure Count is used while recreating the missing jobs. */
		msdyn_FailureCount: number;
		msdyn_FeatureName: OptionSet.msdyn_recurringsalesactionv2.msdyn_FeatureName;
		/** Indicates whether the schedule is of Recurrence Pattern type. */
		msdyn_IsRecurrencePatternSchedule: boolean;
		msdyn_LastExecutionInfo: string;
		/** Input Data for the Custom Action */
		msdyn_Payload: string;
		/** State of the record with respect to Jobs Service */
		msdyn_RecordState: OptionSet.msdyn_recurringsalesactionv2.msdyn_RecordState;
		/** Unique identifier for entity instances */
		msdyn_recurringsalesactionv2Id: string;
		/** Retry Count is used to track the retry of job. */
		msdyn_RetryCount: number;
		msdyn_Schedule: string;
		msdyn_StartDate_TimezoneDateAndTime: Date;
		/** The name of the custom entity. */
		msdyn_TriggerName: string;
		/** The name of the custom entity. */
		msdyn_WorkloadName: string;
		/** Unique identifier for the organization */
		readonly OrganizationId: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Status of the Recurring Sales Action V2 */
		statecode: OptionSet.msdyn_recurringsalesactionv2.statecode;
		/** Reason for the status of the Recurring Sales Action V2 */
		statuscode: OptionSet.msdyn_recurringsalesactionv2.statuscode;
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
			readonly msdyn_CustomActionName: string;
			/** Failure Count is used while recreating the missing jobs. */
			readonly msdyn_FailureCount: string;
			readonly msdyn_FeatureName: string;
			/** Indicates whether the schedule is of Recurrence Pattern type. */
			readonly msdyn_IsRecurrencePatternSchedule: string;
			readonly msdyn_LastExecutionInfo: string;
			/** Input Data for the Custom Action */
			readonly msdyn_Payload: string;
			/** State of the record with respect to Jobs Service */
			readonly msdyn_RecordState: string;
			/** Unique identifier for entity instances */
			readonly msdyn_recurringsalesactionv2Id: string;
			/** Retry Count is used to track the retry of job. */
			readonly msdyn_RetryCount: string;
			readonly msdyn_Schedule: string;
			readonly msdyn_StartDate_TimezoneDateAndTime: string;
			/** The name of the custom entity. */
			readonly msdyn_TriggerName: string;
			/** The name of the custom entity. */
			readonly msdyn_WorkloadName: string;
			/** Unique identifier for the organization */
			readonly OrganizationId: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Status of the Recurring Sales Action V2 */
			readonly statecode: string;
			/** Reason for the status of the Recurring Sales Action V2 */
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
	namespace msdyn_recurringsalesactionv2 {
		enum msdyn_FeatureName {
			/** 22 */
			Check_Azure_Storage_for_Sales_Skill_Usage_Data,
			/** 13 */
			Digital_selling_task_maintenance_job,
			/** 18 */
			Manual_Forecasting,
			/** 14 */
			OOB_Suggestions_Athena_Sync_Status,
			/** 21 */
			Opportunities_to_focus,
			/** 16 */
			Predictive_Forecasting,
			/** 3 */
			Recurrent_Assignment,
			/** 4 */
			Recurrent_Duplicate_Detection,
			/** 15 */
			Relationship_Analytics,
			/** 8 */
			Restore_Missing_RSA_Triggers,
			/** 5 */
			Sales_Accelerator_Mail_Notification_to_Admin,
			/** 12 */
			Sales_analytics_provisioning_trigger,
			/** 11 */
			Sales_Cxp_provisioning_trigger,
			/** 1 */
			Scheduled_Assignment,
			/** 7 */
			Scheduled_DataHygiene_Validation,
			/** 6 */
			Scheduled_DataHygiene_Validation_Trigger,
			/** 2 */
			Scheduled_Maintenance,
			/** 0 */
			Scheduled_Scoring,
			/** 19 */
			Similar_opportunities,
			/** 20 */
			Stalled_opportunities,
			/** 10 */
			Sync_CRUD_Data_to_CDS,
			/** 9 */
			Sync_CRUD_Data_to_CDS_Validation,
			/** 23 */
			Sync_sales_skill_usage_data_from_azure_storage_to_CDS,
			/** 17 */
			Work_assignment_user_membership_trigger
		}
		enum msdyn_RecordState {
			/** 0 */
			Created,
			/** 1 */
			Missing
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
			Inactive,
			/** 3 */
			Missing
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.44.44.44'}