//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormLeadToOpportunitySalesProcesses {
		interface tab_general_Sections {
			leadtoopportunitysalesprocessinformation: DevKit.Controls.Section;
		}
		interface tab_general extends DevKit.Controls.ITab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			general: tab_general;
		}
		interface Body {
			Tab: Tabs;
			/** Process Name. */
			Name: DevKit.Controls.String;
		}
		interface Navigation {
			lk_leadtoopportunitysalesprocess_workflowlogs: DevKit.Controls.NavigationItem
		}
	}
	class FormLeadToOpportunitySalesProcesses extends DevKit.IForm {
		/**
		* LeadToOpportunitySalesProcesses [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form LeadToOpportunitySalesProcesses */
		Body: DevKit.FormLeadToOpportunitySalesProcesses.Body;
		/** The Navigation of form LeadToOpportunitySalesProcesses */
		Navigation: DevKit.FormLeadToOpportunitySalesProcesses.Navigation;
		/** The SidePanes of form LeadToOpportunitySalesProcesses */
		SidePanes: DevKit.SidePanes;
	}
	class LeadToOpportunitySalesProcessApi {
		/**
		* DynamicsCrm.DevKit LeadToOpportunitySalesProcessApi
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
		/** Unique identifier of the active stage for the Business Process Flow instance. */
		ActiveStageId: string;
		/** Date and time when current active stage is started. */
		ActiveStageStartedOn_UtcDateOnly: Date;
		/** Unique identifier for Lead To Opportunity Sales Process bpf entity instances */
		BusinessProcessFlowInstanceId: string;
		/** Date and time when Business Process Flow instance is completed */
		CompletedOn_UtcDateOnly: Date;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string;
		/** Duration between completed on and started on, used by business process flow. */
		readonly Duration: number;
		/** Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency. */
		readonly ExchangeRate: number;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Unique identifier of the workflow associated to the Business Process Flow instance. */
		LeadId: string;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string;
		/** Process Name. */
		Name: string;
		/** Unique identifier of the workflow associated to the Business Process Flow instance. */
		OpportunityId: string;
		/** Unique identifier for the organization */
		readonly OrganizationId: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Unique identifier of the workflow associated to the Business Process Flow instance. */
		ProcessId: string;
		/** Shows whether the Delve action record is pending, completed, or tracking. */
		StateCode: OptionSet.LeadToOpportunitySalesProcess.StateCode;
		/** Select the delve action record status. */
		StatusCode: OptionSet.LeadToOpportunitySalesProcess.StatusCode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
		TransactionCurrencyId: string;
		/** Comma delimited string of process stage ids that represent visited stages of the Business Process Flow instance. */
		TraversedPath: string;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Unique identifier of the active stage for the Business Process Flow instance. */
			readonly ActiveStageId: string;
			/** Date and time when current active stage is started. */
			readonly ActiveStageStartedOn_UtcDateOnly: string;
			/** Unique identifier for Lead To Opportunity Sales Process bpf entity instances */
			readonly BusinessProcessFlowInstanceId: string;
			/** Date and time when Business Process Flow instance is completed */
			readonly CompletedOn_UtcDateOnly: string;
			/** Unique identifier of the user who created the record. */
			readonly CreatedBy: string;
			/** Date and time when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the record. */
			readonly CreatedOnBehalfBy: string;
			/** Duration between completed on and started on, used by business process flow. */
			readonly Duration: string;
			/** Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency. */
			readonly ExchangeRate: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Unique identifier of the workflow associated to the Business Process Flow instance. */
			readonly LeadId: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			/** Process Name. */
			readonly Name: string;
			/** Unique identifier of the workflow associated to the Business Process Flow instance. */
			readonly OpportunityId: string;
			/** Unique identifier for the organization */
			readonly OrganizationId: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Unique identifier of the workflow associated to the Business Process Flow instance. */
			readonly ProcessId: string;
			/** Shows whether the Delve action record is pending, completed, or tracking. */
			readonly StateCode: string;
			/** Select the delve action record status. */
			readonly StatusCode: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
			readonly TransactionCurrencyId: string;
			/** Comma delimited string of process stage ids that represent visited stages of the Business Process Flow instance. */
			readonly TraversedPath: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace LeadToOpportunitySalesProcess {
		enum StateCode {
			/** 0 */
			Active,
			/** 1 */
			Inactive
		}
		enum StatusCode {
			/** 3 */
			Aborted,
			/** 1 */
			Active,
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