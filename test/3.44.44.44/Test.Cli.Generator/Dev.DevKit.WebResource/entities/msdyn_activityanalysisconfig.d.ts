//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_activityanalysisconfig_Information {
		interface Tabs {
		}
		interface Body {
			/** Shows the name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
		}
		interface Navigation {

		}
	}
	class Formmsdyn_activityanalysisconfig_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_activityanalysisconfig_Information */
		Body: DevKit.Formmsdyn_activityanalysisconfig_Information.Body;
		/** The Navigation of form msdyn_activityanalysisconfig_Information */
		Navigation: DevKit.Formmsdyn_activityanalysisconfig_Information.Navigation;
		/** The SidePanes of form msdyn_activityanalysisconfig_Information */
		SidePanes: DevKit.SidePanes;
	}
	namespace Formmsdyn_activityanalysisconfig_Information2 {
		interface Tabs {
		}
		interface Body {
			/** Shows the name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
		}
		interface Navigation {

		}
	}
	class Formmsdyn_activityanalysisconfig_Information2 extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_activityanalysisconfig_Information2 */
		Body: DevKit.Formmsdyn_activityanalysisconfig_Information2.Body;
		/** The Navigation of form msdyn_activityanalysisconfig_Information2 */
		Navigation: DevKit.Formmsdyn_activityanalysisconfig_Information2.Navigation;
		/** The SidePanes of form msdyn_activityanalysisconfig_Information2 */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_activityanalysisconfigApi {
		/**
		* DynamicsCrm.DevKit msdyn_activityanalysisconfigApi
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
		/** Unique identifier for entity instances. */
		msdyn_activityanalysisconfigId: string;
		msdyn_communicationfrequency: OptionSet.msdyn_activityanalysisconfig.msdyn_communicationfrequency;
		msdyn_currentstatus: OptionSet.msdyn_activityanalysisconfig.msdyn_currentstatus;
		msdyn_datasource: OptionSet.msdyn_activityanalysisconfig.msdyn_datasource;
		/** Shows weight of email activity type. */
		msdyn_emailweight: number;
		/** Status of Exchange-Mars Connector */
		msdyn_exchangemarsstatus: OptionSet.msdyn_activityanalysisconfig.msdyn_exchangemarsstatus;
		/** Health Feature Status */
		msdyn_healthfeaturestatus: OptionSet.msdyn_activityanalysisconfig.msdyn_healthfeaturestatus;
		msdyn_ignoreexchangeoptincheck: boolean;
		/** Shows weight of InMails activity type. */
		msdyn_inmailweight: number;
		msdyn_isaprilpreviewenabled: boolean;
		msdyn_islinkedinenabled: boolean;
		msdyn_isorgsettingenable: boolean;
		/** Status of LinkedIn Analytics */
		msdyn_linkedinstatus: OptionSet.msdyn_activityanalysisconfig.msdyn_linkedinstatus;
		/** Shows weight of meeting activity type. */
		msdyn_meetingweight: number;
		/** Shows the name of the custom entity. */
		msdyn_name: string;
		msdyn_oneclickactivityanalysisprovisioning: boolean;
		/** Organization Type Suffix Set By Connector */
		msdyn_orgtypesuffix: string;
		/** Shows the weight of default activity type. */
		msdyn_otheractivites: string;
		/** Shows the Contact, Opportunity, Lead, and Account entities which have exceeded the scale limit for Relationship Insights. */
		msdyn_overflowentitylist: string;
		/** Shows the weight of phone call activity type. */
		msdyn_phonecallweight: number;
		/** Shows the weight of task activity type. */
		msdyn_taskweight: number;
		/** Shows activities to include on the relationship trend timeline. */
		msdyn_timelineactivites: string;
		/** Unique identifier for the organization. */
		readonly OrganizationId: string;
		/** Shows the date and time the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Status of the Relationship Analytics Config */
		statecode: OptionSet.msdyn_activityanalysisconfig.statecode;
		/** Reason for the status of the Relationship Analytics Config */
		statuscode: OptionSet.msdyn_activityanalysisconfig.statuscode;
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
			/** Unique identifier for entity instances. */
			readonly msdyn_activityanalysisconfigId: string;
			readonly msdyn_communicationfrequency: string;
			readonly msdyn_currentstatus: string;
			readonly msdyn_datasource: string;
			/** Shows weight of email activity type. */
			readonly msdyn_emailweight: string;
			/** Status of Exchange-Mars Connector */
			readonly msdyn_exchangemarsstatus: string;
			/** Health Feature Status */
			readonly msdyn_healthfeaturestatus: string;
			readonly msdyn_ignoreexchangeoptincheck: string;
			/** Shows weight of InMails activity type. */
			readonly msdyn_inmailweight: string;
			readonly msdyn_isaprilpreviewenabled: string;
			readonly msdyn_islinkedinenabled: string;
			readonly msdyn_isorgsettingenable: string;
			/** Status of LinkedIn Analytics */
			readonly msdyn_linkedinstatus: string;
			/** Shows weight of meeting activity type. */
			readonly msdyn_meetingweight: string;
			/** Shows the name of the custom entity. */
			readonly msdyn_name: string;
			readonly msdyn_oneclickactivityanalysisprovisioning: string;
			/** Organization Type Suffix Set By Connector */
			readonly msdyn_orgtypesuffix: string;
			/** Shows the weight of default activity type. */
			readonly msdyn_otheractivites: string;
			/** Shows the Contact, Opportunity, Lead, and Account entities which have exceeded the scale limit for Relationship Insights. */
			readonly msdyn_overflowentitylist: string;
			/** Shows the weight of phone call activity type. */
			readonly msdyn_phonecallweight: string;
			/** Shows the weight of task activity type. */
			readonly msdyn_taskweight: string;
			/** Shows activities to include on the relationship trend timeline. */
			readonly msdyn_timelineactivites: string;
			/** Unique identifier for the organization. */
			readonly OrganizationId: string;
			/** Shows the date and time the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Status of the Relationship Analytics Config */
			readonly statecode: string;
			/** Reason for the status of the Relationship Analytics Config */
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
	namespace msdyn_activityanalysisconfig {
		enum msdyn_communicationfrequency {
			/** 1 */
			Once_a_day,
			/** 5 */
			Once_a_month,
			/** 3 */
			Once_a_week,
			/** 4 */
			Once_every_couple_of_weeks,
			/** 2 */
			Once_every_few_days
		}
		enum msdyn_currentstatus {
			/** 3 */
			ActivationCompleted,
			/** 4 */
			ActivationFailed,
			/** 2 */
			ActivationInProgress,
			/** 6 */
			DeactivationCompleted,
			/** 7 */
			DeactivationFailed,
			/** 5 */
			DeactivationInProgress,
			/** 1 */
			None
		}
		enum msdyn_datasource {
			/** 3 */
			Both,
			/** 1 */
			CRM,
			/** 2 */
			MARS
		}
		enum msdyn_exchangemarsstatus {
			/** 3 */
			ActivationCompleted,
			/** 4 */
			ActivationFailed,
			/** 401 */
			ActivationFailedDueToOptin_401,
			/** 5 */
			ActivationFailedDueToOptin_5,
			/** 402 */
			ActivationFailedDueToOptinAccess,
			/** 2 */
			ActivationInProgress,
			/** 7 */
			DeactivationCompleted,
			/** 6 */
			DeactivationInProgress,
			/** 1 */
			None
		}
		enum msdyn_healthfeaturestatus {
			/** 2 */
			Disabled,
			/** 1 */
			Enabled
		}
		enum msdyn_linkedinstatus {
			/** 3 */
			ActivationCompleted,
			/** 4 */
			ActivationFailed,
			/** 2 */
			ActivationInProgress,
			/** 6 */
			DeactivationCompleted,
			/** 7 */
			DeactivationFailed,
			/** 5 */
			DeactivationInProgress,
			/** 1 */
			None,
			/** 10 */
			UpgradeFailed,
			/** 9 */
			UpgradeInProgress,
			/** 8 */
			UpgradePending,
			/** 11 */
			UpgradeSucceeded
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.44.44.44'}