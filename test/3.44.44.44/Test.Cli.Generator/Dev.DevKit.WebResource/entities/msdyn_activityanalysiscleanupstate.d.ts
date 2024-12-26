//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_activityanalysiscleanupstate_Information {
		interface Tabs {
		}
		interface Body {
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
		}
		interface Navigation {

		}
	}
	class Formmsdyn_activityanalysiscleanupstate_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_activityanalysiscleanupstate_Information */
		Body: DevKit.Formmsdyn_activityanalysiscleanupstate_Information.Body;
		/** The Navigation of form msdyn_activityanalysiscleanupstate_Information */
		Navigation: DevKit.Formmsdyn_activityanalysiscleanupstate_Information.Navigation;
		/** The SidePanes of form msdyn_activityanalysiscleanupstate_Information */
		SidePanes: DevKit.SidePanes;
	}
	namespace Formmsdyn_activityanalysiscleanupstate_Information2 {
		interface Tabs {
		}
		interface Body {
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
		}
		interface Navigation {

		}
	}
	class Formmsdyn_activityanalysiscleanupstate_Information2 extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_activityanalysiscleanupstate_Information2 */
		Body: DevKit.Formmsdyn_activityanalysiscleanupstate_Information2.Body;
		/** The Navigation of form msdyn_activityanalysiscleanupstate_Information2 */
		Navigation: DevKit.Formmsdyn_activityanalysiscleanupstate_Information2.Navigation;
		/** The SidePanes of form msdyn_activityanalysiscleanupstate_Information2 */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_activityanalysiscleanupstateApi {
		/**
		* DynamicsCrm.DevKit msdyn_activityanalysiscleanupstateApi
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
		/** Shows the Cleanup batch number of the Account KPI record. */
		msdyn_AccountKPICleanUpBatchNum: number;
		msdyn_AccountKPICleanUpStatus: OptionSet.msdyn_activityanalysiscleanupstate.msdyn_AccountKPICleanUpStatus;
		/** Unique identifier for entity instances. */
		msdyn_activityanalysiscleanupstateId: string;
		/** Shows the Cleanup batch number of the Contact KPI record. */
		msdyn_ContactKPICleanUpBatchNum: number;
		msdyn_ContactKPICleanUpStatus: OptionSet.msdyn_activityanalysiscleanupstate.msdyn_ContactKPICleanUpStatus;
		/** Shows the Cleanup batch number of the Lead KPI record. */
		msdyn_LeadKPICleanUpBatchNum: number;
		msdyn_LeadKPICleanUpStatus: OptionSet.msdyn_activityanalysiscleanupstate.msdyn_LeadKPICleanUpStatus;
		/** The name of the custom entity. */
		msdyn_name: string;
		/** Shows the Cleanup batch number of the Opportunity KPI record. */
		msdyn_OpportunityKPICleanUpBatchNum: number;
		msdyn_OpportunityKPICleanUpStatus: OptionSet.msdyn_activityanalysiscleanupstate.msdyn_OpportunityKPICleanUpStatus;
		/** Unique identifier for the organization. */
		readonly OrganizationId: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Status of the ActivityAnalysisCleanUpState */
		statecode: OptionSet.msdyn_activityanalysiscleanupstate.statecode;
		/** Reason for the status of the ActivityAnalysisCleanUpState */
		statuscode: OptionSet.msdyn_activityanalysiscleanupstate.statuscode;
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
			/** Shows the Cleanup batch number of the Account KPI record. */
			readonly msdyn_AccountKPICleanUpBatchNum: string;
			readonly msdyn_AccountKPICleanUpStatus: string;
			/** Unique identifier for entity instances. */
			readonly msdyn_activityanalysiscleanupstateId: string;
			/** Shows the Cleanup batch number of the Contact KPI record. */
			readonly msdyn_ContactKPICleanUpBatchNum: string;
			readonly msdyn_ContactKPICleanUpStatus: string;
			/** Shows the Cleanup batch number of the Lead KPI record. */
			readonly msdyn_LeadKPICleanUpBatchNum: string;
			readonly msdyn_LeadKPICleanUpStatus: string;
			/** The name of the custom entity. */
			readonly msdyn_name: string;
			/** Shows the Cleanup batch number of the Opportunity KPI record. */
			readonly msdyn_OpportunityKPICleanUpBatchNum: string;
			readonly msdyn_OpportunityKPICleanUpStatus: string;
			/** Unique identifier for the organization. */
			readonly OrganizationId: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Status of the ActivityAnalysisCleanUpState */
			readonly statecode: string;
			/** Reason for the status of the ActivityAnalysisCleanUpState */
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
	namespace msdyn_activityanalysiscleanupstate {
		enum msdyn_AccountKPICleanUpStatus {
			/** 2 */
			Completed,
			/** 1 */
			InProgress,
			/** 0 */
			None
		}
		enum msdyn_ContactKPICleanUpStatus {
			/** 2 */
			Completed,
			/** 1 */
			InProgress,
			/** 0 */
			None
		}
		enum msdyn_LeadKPICleanUpStatus {
			/** 2 */
			Completed,
			/** 1 */
			InProgress,
			/** 0 */
			None
		}
		enum msdyn_OpportunityKPICleanUpStatus {
			/** 2 */
			Completed,
			/** 1 */
			InProgress,
			/** 0 */
			None
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