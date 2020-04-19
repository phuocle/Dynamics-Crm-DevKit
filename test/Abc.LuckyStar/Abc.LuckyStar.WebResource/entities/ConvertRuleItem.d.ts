//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyStar {
	namespace FormRecord_Creation_and_Update_Rule_Item {
		interface tab_general_Sections {
			Name: DevKit.Form.Controls.ControlSection;
			ConditionControl: DevKit.Form.Controls.ControlSection;
			CaseProperties: DevKit.Form.Controls.ControlSection;
			RegardingSettingsection: DevKit.Form.Controls.ControlSection;
			primaryactionsection: DevKit.Form.Controls.ControlSection;
			secondaryactionsection: DevKit.Form.Controls.ControlSection;
		}
		interface tab_general extends DevKit.Form.Controls.IControlTab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			general: tab_general;
		}
		interface Body {
			Tab: Tabs;
			/** Type a name or title of the rule item that is used for automatic record creation and update. */
			Name: DevKit.Form.Controls.ControlString;
		}
	}
	class FormRecord_Creation_and_Update_Rule_Item extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form Record_Creation_and_Update_Rule_Item
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Record_Creation_and_Update_Rule_Item */
		Body: LuckyStar.FormRecord_Creation_and_Update_Rule_Item.Body;
	}
	class ConvertRuleItemApi {
		/**
		* DynamicsCrm.DevKit ConvertRuleItemApi
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
		/** For internal use only. */
		ComponentState: DevKit.WebApi.OptionSetValueReadonly;
		/** Identifies the step of the associated workflow */
		ConditionId: DevKit.WebApi.LookupValue;
		/** Condition for convert rule item */
		ConditionXml: DevKit.WebApi.StringValue;
		/** Unique identifier of the convert rule associated with the convert rule item. */
		ConvertRuleId: DevKit.WebApi.LookupValue;
		/** Unique identifier for entity instances */
		ConvertRuleItemId: DevKit.WebApi.GuidValue;
		/** For internal use only. */
		ConvertRuleItemIdUnique: DevKit.WebApi.GuidValueReadonly;
		/** Unique identifier of the user who created the record. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows who created the record on behalf of another user. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Type additional information to describe the rule item for automatic record creation. */
		Description: DevKit.WebApi.StringValue;
		/** Exchange rate for the currency associated with the queue with respect to the base currency. */
		ExchangeRate: DevKit.WebApi.DecimalValueReadonly;
		/** For internal use only. */
		IsManaged: DevKit.WebApi.BooleanValueReadonly;
		/** Unique identifier of the user who modified the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows who created the record on behalf of another user. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Type a name or title of the rule item that is used for automatic record creation and update. */
		Name: DevKit.WebApi.StringValue;
		/** For internal use only. */
		OverwriteTime_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValueReadonly;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: DevKit.WebApi.LookupValue;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: DevKit.WebApi.LookupValue;
		/** Shows the business unit that the convert rule item owner belongs to. */
		OwningBusinessUnit: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the user who owns the Convert Rule Item. */
		OwningUser: DevKit.WebApi.LookupValueReadonly;
		/** Set properties xml for convert rule item */
		PropertiesXml: DevKit.WebApi.StringValue;
		/** Choose the queue that the rule is assigned to. */
		QueueId: DevKit.WebApi.LookupValue;
		/** Sequence number of the convert rule item */
		SequenceNumber: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the associated solution. */
		SolutionId: DevKit.WebApi.GuidValueReadonly;
		/** For internal use only. */
		SupportingSolutionId: DevKit.WebApi.GuidValueReadonly;
		/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
		TransactionCurrencyId: DevKit.WebApi.LookupValueReadonly;
		/** Version number of the Covert Rule Item. */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
		/** Workflow associated with the Convert Rule Item. */
		WorkflowId: DevKit.WebApi.LookupValue;
	}
}
declare namespace OptionSet {
	namespace ConvertRuleItem {
		enum ComponentState {
			/** 0 */
			Published,
			/** 1 */
			Unpublished,
			/** 2 */
			Deleted,
			/** 3 */
			Deleted_Unpublished
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
//{'JsForm':['Record Creation and Update Rule Item'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}