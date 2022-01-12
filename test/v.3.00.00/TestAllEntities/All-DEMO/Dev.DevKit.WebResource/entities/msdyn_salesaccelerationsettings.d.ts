//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_salesaccelerationsettings_Information {
		interface Tabs {
		}
		interface Body {
			/** The name of the Sales Acceleration settings instance. */
			msdyn_name: DevKit.Controls.String;
		}
	}
	class Formmsdyn_salesaccelerationsettings_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_salesaccelerationsettings_Information Main Form
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_salesaccelerationsettings_Information */
		Body: DevKit.Formmsdyn_salesaccelerationsettings_Information.Body;
		/** The SidePanes of form msdyn_salesaccelerationsettings_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_salesaccelerationsettingsApi {
		/**
		* DynamicsCrm.DevKit msdyn_salesaccelerationsettingsApi
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
		/** Type of calendar to honour availability */
		msdyn_CalendarType: DevKit.WebApi.OptionSetValue;
		/** Indicates whether when Mark Complete is done on a step/manual activity, is the WQ to be refreshed or not */
		msdyn_DisableWQAutoRefreshOnMarkComplete: DevKit.WebApi.BooleanValue;
		/** Entity configuration for the work queue */
		msdyn_EntityConfiguration: DevKit.WebApi.StringValue;
		/** Indicates whether automatic creation of phonecall activity record is enabled. */
		msdyn_IsAutoCreatePhoneCallEnabled: DevKit.WebApi.BooleanValue;
		/** Indicates whether receiving notifications from signalR is enabled or not. */
		msdyn_IsSignalRNotificationEnabled: DevKit.WebApi.BooleanValue;
		/** Indicates whether work schedule setting is enabled. */
		msdyn_IsWorkScheduleEnabled: DevKit.WebApi.BooleanValue;
		/** Indicates whether sequence step should be linked to activity created from it. */
		msdyn_LinkSequenceStepToActivity: DevKit.WebApi.BooleanValue;
		/** Status of Migration */
		msdyn_MigrationStatus: DevKit.WebApi.StringValue;
		/** The name of the Sales Acceleration settings instance. */
		msdyn_name: DevKit.WebApi.StringValue;
		/** Unique identifier for Sales Acceleration settings instance */
		msdyn_salesaccelerationsettingsId: DevKit.WebApi.GuidValue;
		/** Security roles enabled for the settings instance */
		msdyn_SecurityRoles: DevKit.WebApi.StringValue;
		/** Security roles list for assignment rules */
		msdyn_SecurityRolesAssignmentRules: DevKit.WebApi.StringValue;
		/** Security roles (new) enabled for the settings instance */
		msdyn_SecurityRolesNew: DevKit.WebApi.StringValue;
		/** Unique identifier for the organization */
		OrganizationId: DevKit.WebApi.LookupValueReadonly;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Status of the Sales Acceleration settings */
		statecode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the Sales Acceleration settings */
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
	namespace msdyn_salesaccelerationsettings {
		enum msdyn_CalendarType {
			/** 0 */
			CRM,
			/** 1 */
			Outlook
		}
		enum statecode {
			/** 1 */
			Closed,
			/** 0 */
			Open
		}
		enum statuscode {
			/** 3 */
			Assignment_Rules_Published,
			/** 2 */
			Published,
			/** 1 */
			Saved
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