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
		interface Navigation {
			msdyn_worklistviewconfig_salesaccelerationsettingsid: DevKit.Controls.NavigationItem
		}
	}
	class Formmsdyn_salesaccelerationsettings_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_salesaccelerationsettings_Information */
		Body: DevKit.Formmsdyn_salesaccelerationsettings_Information.Body;
		/** The Navigation of form msdyn_salesaccelerationsettings_Information */
		Navigation: DevKit.Formmsdyn_salesaccelerationsettings_Information.Navigation;
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
		/** Type of calendar to honour availability */
		msdyn_CalendarType: OptionSet.msdyn_salesaccelerationsettings.msdyn_CalendarType;
		/** Indicates whether when Mark Complete is done on a step/manual activity, is the WQ to be refreshed or not */
		msdyn_DisableWQAutoRefreshOnMarkComplete: boolean;
		/** Entity configuration for the work queue */
		msdyn_EntityConfiguration: string;
		/** Indicates whether automatic creation of phonecall activity record is enabled. */
		msdyn_IsAutoCreatePhoneCallEnabled: boolean;
		/** Indicates whether the settings record is default. */
		msdyn_IsDefaultSetting: boolean;
		/** Indicates whether FCC enabled. */
		msdyn_IsFCCEnabled: boolean;
		/** Indicates whether receiving notifications from signalR is enabled or not. */
		msdyn_IsSignalRNotificationEnabled: boolean;
		/** Indicates whether wait time computation setting is enabled to honor seller availability based on bussiness days. */
		msdyn_iswaittimecomputationenabled: boolean;
		/** Indicates whether work schedule setting is enabled. */
		msdyn_IsWorkScheduleEnabled: boolean;
		/** Admin configuration of linking between sequence step and activities */
		msdyn_linkingconfiguration: string;
		/** Indicates whether sequence step should be linked to activity created from it. */
		msdyn_LinkSequenceStepToActivity: boolean;
		/** Status of Migration */
		msdyn_MigrationStatus: string;
		/** The name of the Sales Acceleration settings instance. */
		msdyn_name: string;
		/** Suggestion Security roles enabled for the settings instance */
		msdyn_RecommendationSecurityRoles: string;
		/** Unique identifier for Sales Acceleration settings instance */
		msdyn_salesaccelerationsettingsId: string;
		/** Security roles enabled for the settings instance */
		msdyn_SecurityRoles: string;
		/** Security roles list for assignment rules */
		msdyn_SecurityRolesAssignmentRules: string;
		/** Security roles (new) enabled for the settings instance */
		msdyn_SecurityRolesNew: string;
		/** Sequence configurations */
		msdyn_SequenceConfiguration: string;
		/** Unique identifier for the organization */
		readonly OrganizationId: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Status of the Sales Acceleration settings */
		statecode: OptionSet.msdyn_salesaccelerationsettings.statecode;
		/** Reason for the status of the Sales Acceleration settings */
		statuscode: OptionSet.msdyn_salesaccelerationsettings.statuscode;
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
			/** Type of calendar to honour availability */
			readonly msdyn_CalendarType: string;
			/** Indicates whether when Mark Complete is done on a step/manual activity, is the WQ to be refreshed or not */
			readonly msdyn_DisableWQAutoRefreshOnMarkComplete: string;
			/** Entity configuration for the work queue */
			readonly msdyn_EntityConfiguration: string;
			/** Indicates whether automatic creation of phonecall activity record is enabled. */
			readonly msdyn_IsAutoCreatePhoneCallEnabled: string;
			/** Indicates whether the settings record is default. */
			readonly msdyn_IsDefaultSetting: string;
			/** Indicates whether FCC enabled. */
			readonly msdyn_IsFCCEnabled: string;
			/** Indicates whether receiving notifications from signalR is enabled or not. */
			readonly msdyn_IsSignalRNotificationEnabled: string;
			/** Indicates whether wait time computation setting is enabled to honor seller availability based on bussiness days. */
			readonly msdyn_iswaittimecomputationenabled: string;
			/** Indicates whether work schedule setting is enabled. */
			readonly msdyn_IsWorkScheduleEnabled: string;
			/** Admin configuration of linking between sequence step and activities */
			readonly msdyn_linkingconfiguration: string;
			/** Indicates whether sequence step should be linked to activity created from it. */
			readonly msdyn_LinkSequenceStepToActivity: string;
			/** Status of Migration */
			readonly msdyn_MigrationStatus: string;
			/** The name of the Sales Acceleration settings instance. */
			readonly msdyn_name: string;
			/** Suggestion Security roles enabled for the settings instance */
			readonly msdyn_RecommendationSecurityRoles: string;
			/** Unique identifier for Sales Acceleration settings instance */
			readonly msdyn_salesaccelerationsettingsId: string;
			/** Security roles enabled for the settings instance */
			readonly msdyn_SecurityRoles: string;
			/** Security roles list for assignment rules */
			readonly msdyn_SecurityRolesAssignmentRules: string;
			/** Security roles (new) enabled for the settings instance */
			readonly msdyn_SecurityRolesNew: string;
			/** Sequence configurations */
			readonly msdyn_SequenceConfiguration: string;
			/** Unique identifier for the organization */
			readonly OrganizationId: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Status of the Sales Acceleration settings */
			readonly statecode: string;
			/** Reason for the status of the Sales Acceleration settings */
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.44.44.44'}