//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyncrm_leadtoopportunity_Information {
		interface Tabs {
		}
		interface Body {
			/** Description */
			msdyncrm_name: DevKit.Controls.String;
		}
		interface Navigation {
			msdyncrm_leadtoopportunity_WorkflowLogs: DevKit.Controls.NavigationItem
		}
	}
	class Formmsdyncrm_leadtoopportunity_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyncrm_leadtoopportunity_Information */
		Body: DevKit.Formmsdyncrm_leadtoopportunity_Information.Body;
		/** The Navigation of form msdyncrm_leadtoopportunity_Information */
		Navigation: DevKit.Formmsdyncrm_leadtoopportunity_Information.Navigation;
		/** The SidePanes of form msdyncrm_leadtoopportunity_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyncrm_leadtoopportunityApi {
		/**
		* DynamicsCrm.DevKit msdyncrm_leadtoopportunityApi
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
		/** Unique ID of the active stage for the business-process-flow instance */
		ActiveStageId: string;
		/** Date and time active stage was started */
		ActiveStageStartedOn_UtcDateOnly: Date;
		bpf_leadid: string;
		/** Unique ID for entity instances */
		BusinessProcessFlowInstanceId: string;
		/** Date and time business process flow was completed */
		CompletedOn_UtcDateOnly: Date;
		/** Indicates the person who created this. */
		readonly CreatedBy: string;
		/** Date and time when the record was created */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Indicates the person who created this for another person. */
		readonly CreatedOnBehalfBy: string;
		/** Sequence number of the import that created this record */
		ImportSequenceNumber: number;
		/** Indicates the person who modified this. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Indicates the person who modified this for another person. */
		readonly ModifiedOnBehalfBy: string;
		/** Duration of business process flow */
		readonly msdyncrm_Duration: number;
		/** Description */
		msdyncrm_name: string;
		msdyncrm_opportunityid: string;
		/** Unique ID of the organization */
		readonly OrganizationId: string;
		/** Date and time that the record was migrated */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Unique ID of the workflow associated to the business-process-flow instance. */
		ProcessId: string;
		/** Status of the lead-to-opportunity */
		statecode: OptionSet.msdyncrm_leadtoopportunity.statecode;
		/** Lead-to-opportunity status reason */
		statuscode: OptionSet.msdyncrm_leadtoopportunity.statuscode;
		/** For internal use only */
		TimeZoneRuleVersionNumber: number;
		/** Comma-delimited string of process-stage IDs that represent visited stages of the business-process-flow instance */
		TraversedPath: string;
		/** Time-zone code that was in use when the record was created */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Unique ID of the active stage for the business-process-flow instance */
			readonly ActiveStageId: string;
			/** Date and time active stage was started */
			readonly ActiveStageStartedOn_UtcDateOnly: string;
			readonly bpf_leadid: string;
			/** Unique ID for entity instances */
			readonly BusinessProcessFlowInstanceId: string;
			/** Date and time business process flow was completed */
			readonly CompletedOn_UtcDateOnly: string;
			/** Indicates the person who created this. */
			readonly CreatedBy: string;
			/** Date and time when the record was created */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Indicates the person who created this for another person. */
			readonly CreatedOnBehalfBy: string;
			/** Sequence number of the import that created this record */
			readonly ImportSequenceNumber: string;
			/** Indicates the person who modified this. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Indicates the person who modified this for another person. */
			readonly ModifiedOnBehalfBy: string;
			/** Duration of business process flow */
			readonly msdyncrm_Duration: string;
			/** Description */
			readonly msdyncrm_name: string;
			readonly msdyncrm_opportunityid: string;
			/** Unique ID of the organization */
			readonly OrganizationId: string;
			/** Date and time that the record was migrated */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Unique ID of the workflow associated to the business-process-flow instance. */
			readonly ProcessId: string;
			/** Status of the lead-to-opportunity */
			readonly statecode: string;
			/** Lead-to-opportunity status reason */
			readonly statuscode: string;
			/** For internal use only */
			readonly TimeZoneRuleVersionNumber: string;
			/** Comma-delimited string of process-stage IDs that represent visited stages of the business-process-flow instance */
			readonly TraversedPath: string;
			/** Time-zone code that was in use when the record was created */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace msdyncrm_leadtoopportunity {
		enum statecode {
			/** 0 */
			Active,
			/** 1 */
			Inactive
		}
		enum statuscode {
			/** 1 */
			Active,
			/** 3 */
			Canceled,
			/** 2 */
			Finished
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