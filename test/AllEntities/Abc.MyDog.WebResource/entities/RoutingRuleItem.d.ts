//@ts-check
///<reference path="devkit.d.ts" />
declare namespace MyDog {
	namespace FormRule_Item {
		interface tab_general_Sections {
			rule_item_information: DevKit.Form.Controls.ControlSection;
		}
		interface tab_RuleCriteria_Sections {
			ConditionControl: DevKit.Form.Controls.ControlSection;
			rule_then_conditions: DevKit.Form.Controls.ControlSection;
		}
		interface tab_notes_Sections {
			notes: DevKit.Form.Controls.ControlSection;
		}
		interface tab_general extends DevKit.Form.Controls.IControlTab {
			Section: tab_general_Sections;
		}
		interface tab_RuleCriteria extends DevKit.Form.Controls.IControlTab {
			Section: tab_RuleCriteria_Sections;
		}
		interface tab_notes extends DevKit.Form.Controls.IControlTab {
			Section: tab_notes_Sections;
		}
		interface Tabs {
			general: tab_general;
			RuleCriteria: tab_RuleCriteria;
			notes: tab_notes;
		}
		interface Body {
			Tab: Tabs;
			notescontrol: DevKit.Form.Controls.ControlNote;
			/** Show who is assigned on item. */
			AssignObjectId: DevKit.Form.Controls.ControlLookup;
			/** Type additional information to describe the rule item. */
			Description: DevKit.Form.Controls.ControlString;
			/** Name of the Routing Rule Item. */
			Name: DevKit.Form.Controls.ControlString;
			/** Choose the Queue that the item is assigned to. */
			RoutedQueueId: DevKit.Form.Controls.ControlLookup;
		}
	}
	class FormRule_Item extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form Rule_Item
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Rule_Item */
		Body: MyDog.FormRule_Item.Body;
	}
	class RoutingRuleItemApi {
		/**
		* DynamicsCrm.DevKit RoutingRuleItemApi
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
		/** Show who is assigned on item. */
		assignobjectid_systemuser: DevKit.WebApi.LookupValue;
		/** Show who is assigned on item. */
		assignobjectid_team: DevKit.WebApi.LookupValue;
		/** Shows the date and time when the item was last assigned to a user. */
		AssignObjectIdModifiedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Assign Object Yomi Name */
		AssignObjectIdYomiName: DevKit.WebApi.StringValue;
		/** For internal use only. */
		ComponentState: DevKit.WebApi.OptionSetValueReadonly;
		/** Condition for Rule item */
		ConditionXml: DevKit.WebApi.StringValue;
		/** Unique identifier of the user who created the record. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the record. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Type additional information to describe the rule item. */
		Description: DevKit.WebApi.StringValue;
		/** Exchange rate for the currency associated with the routing rule item with respect to the base currency. */
		ExchangeRate: DevKit.WebApi.DecimalValueReadonly;
		/** For internal use only. */
		IsManaged: DevKit.WebApi.BooleanValueReadonly;
		/** Unique identifier of the user who modified the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who modified the record. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Name of the Routing Rule Item. */
		Name: DevKit.WebApi.StringValue;
		/** Unique identifier of the organization associated with the routing rule item. */
		OrganizationId: DevKit.WebApi.LookupValueReadonly;
		/** For internal use only. */
		OverwriteTime_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValueReadonly;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: DevKit.WebApi.LookupValue;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: DevKit.WebApi.LookupValue;
		/** Unique identifier for the business unit that owns the record */
		OwningBusinessUnit: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier for the user that owns the record. */
		OwningUser: DevKit.WebApi.LookupValueReadonly;
		/** Choose the Queue that the item is assigned to. */
		RoutedQueueId: DevKit.WebApi.LookupValue;
		/** Unique identifier for Routing Rule associated with Rule Item. */
		RoutingRuleId: DevKit.WebApi.LookupValue;
		/** Unique identifier for entity instances */
		RoutingRuleItemId: DevKit.WebApi.GuidValue;
		/** For internal use only. */
		RoutingRuleItemIdUnique: DevKit.WebApi.GuidValueReadonly;
		/** Sequence number of the routing rule item */
		SequenceNumber: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the associated solution. */
		SolutionId: DevKit.WebApi.GuidValueReadonly;
		/** For internal use only. */
		SupportingSolutionId: DevKit.WebApi.GuidValueReadonly;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the currency associated with the Routing Rule. */
		TransactionCurrencyId: DevKit.WebApi.LookupValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Version number of the Routing Rule Item. */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace RoutingRuleItem {
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
//{'JsForm':['Rule Item'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true,'Version':'2.12.31','JsFormVersion':null}