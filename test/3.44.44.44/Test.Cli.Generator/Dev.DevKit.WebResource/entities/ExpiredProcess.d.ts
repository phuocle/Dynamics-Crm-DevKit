//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormExpiredProcess {
		interface tab_general_Sections {
			expiredprocessinformation: DevKit.Controls.Section;
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
			lk_expiredprocess_workflowlogs: DevKit.Controls.NavigationItem
		}
	}
	class FormExpiredProcess extends DevKit.IForm {
		/**
		* ExpiredProcess [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form ExpiredProcess */
		Body: DevKit.FormExpiredProcess.Body;
		/** The Navigation of form ExpiredProcess */
		Navigation: DevKit.FormExpiredProcess.Navigation;
		/** The SidePanes of form ExpiredProcess */
		SidePanes: DevKit.SidePanes;
	}
	class ExpiredProcessApi {
		/**
		* DynamicsCrm.DevKit ExpiredProcessApi
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
		/** Unique identifier for Expired Process bpf entity instances */
		BusinessProcessFlowInstanceId: string;
		/** Date and time when Business Process Flow instance is completed. */
		CompletedOn_UtcDateOnly: Date;
		/** Shows who created the record. */
		readonly CreatedBy: string;
		/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics CRM options. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Shows who created the record on behalf of another user. */
		readonly CreatedOnBehalfBy: string;
		/** Duration the business process flow was active. */
		readonly Duration: number;
		/** Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency. */
		readonly ExchangeRate: number;
		/** Unique identifier of the data import or data migration that created this record. */
		ImportSequenceNumber: number;
		/** Unique identifier of the workflow associated to the Business Process Flow instance. */
		KnowledgeArticleId: string;
		/** Shows who last updated the record. */
		readonly ModifiedBy: string;
		/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics CRM options. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Shows who last updated the record on behalf of another user. */
		readonly ModifiedOnBehalfBy: string;
		/** Process Name. */
		Name: string;
		/** Unique identifier of the organization with which the SDK message request is associated. */
		readonly OrganizationId: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Unique identifier of the workflow associated to the Business Process Flow instance. */
		ProcessId: string;
		/** Shows whether the Delve action record is pending, completed, or tracking. */
		StateCode: OptionSet.ExpiredProcess.StateCode;
		/** Select the delve action record status. */
		StatusCode: OptionSet.ExpiredProcess.StatusCode;
		/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
		TransactionCurrencyId: string;
		/** Traversed Path */
		TraversedPath: string;
		/** Version number of the business process instance. */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Unique identifier of the active stage for the Business Process Flow instance. */
			readonly ActiveStageId: string;
			/** Date and time when current active stage is started. */
			readonly ActiveStageStartedOn_UtcDateOnly: string;
			/** Unique identifier for Expired Process bpf entity instances */
			readonly BusinessProcessFlowInstanceId: string;
			/** Date and time when Business Process Flow instance is completed. */
			readonly CompletedOn_UtcDateOnly: string;
			/** Shows who created the record. */
			readonly CreatedBy: string;
			/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics CRM options. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Shows who created the record on behalf of another user. */
			readonly CreatedOnBehalfBy: string;
			/** Duration the business process flow was active. */
			readonly Duration: string;
			/** Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency. */
			readonly ExchangeRate: string;
			/** Unique identifier of the data import or data migration that created this record. */
			readonly ImportSequenceNumber: string;
			/** Unique identifier of the workflow associated to the Business Process Flow instance. */
			readonly KnowledgeArticleId: string;
			/** Shows who last updated the record. */
			readonly ModifiedBy: string;
			/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics CRM options. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Shows who last updated the record on behalf of another user. */
			readonly ModifiedOnBehalfBy: string;
			/** Process Name. */
			readonly Name: string;
			/** Unique identifier of the organization with which the SDK message request is associated. */
			readonly OrganizationId: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Unique identifier of the workflow associated to the Business Process Flow instance. */
			readonly ProcessId: string;
			/** Shows whether the Delve action record is pending, completed, or tracking. */
			readonly StateCode: string;
			/** Select the delve action record status. */
			readonly StatusCode: string;
			/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
			readonly TransactionCurrencyId: string;
			/** Traversed Path */
			readonly TraversedPath: string;
			/** Version number of the business process instance. */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace ExpiredProcess {
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