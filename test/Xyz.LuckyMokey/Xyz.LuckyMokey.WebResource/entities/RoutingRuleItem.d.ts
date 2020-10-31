//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace FormRule_Item {
		interface Header {
			/** Unique identifier for Routing Rule associated with Rule Item. */
			RoutingRuleId: DevKit.Form.Controls.ControlLookup;
		}
		interface tab_General_Sections {
			Rule_Item_Information: DevKit.Form.Controls.ControlSection;
			ConditionControl: DevKit.Form.Controls.ControlSection;
			Then_Condition: DevKit.Form.Controls.ControlSection;
		}
		interface tab_notes_Sections {
			notes: DevKit.Form.Controls.ControlSection;
		}
		interface tab_General extends DevKit.Form.Controls.IControlTab {
			Section: tab_General_Sections;
		}
		interface tab_notes extends DevKit.Form.Controls.IControlTab {
			Section: tab_notes_Sections;
		}
		interface Tabs {
			General: tab_General;
			notes: tab_notes;
		}
		interface Body {
			Tab: Tabs;
			appConditionBuilder_uc: DevKit.Form.Controls.ControlActionCards;
			notescontrol: DevKit.Form.Controls.ControlNote;
			/** Look for user/team records or create a new record. */
			AssignObjectId: DevKit.Form.Controls.ControlLookup;
			/** Provide a description for the rule item. */
			Description: DevKit.Form.Controls.ControlString;
			/** Choose if you want to route the record to queue or user/team. */
			msdyn_routeto: DevKit.Form.Controls.ControlOptionSet;
			/** Provide a name for the rule item. */
			Name: DevKit.Form.Controls.ControlString;
			/** Look for a queue or create a new queue. */
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
		Body: LuckyMokey.FormRule_Item.Body;
		/** The Header section of form Rule_Item */
		Header: LuckyMokey.FormRule_Item.Header;
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
		/** Look for user/team records or create a new record. */
		assignobjectid_systemuser: DevKit.WebApi.LookupValue;
		/** Look for user/team records or create a new record. */
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
		/** Provide a description for the rule item. */
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
		/** Choose if you want to route the record to queue or user/team. */
		msdyn_routeto: DevKit.WebApi.OptionSetValue;
		/** Provide a name for the rule item. */
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
		/** Look for a queue or create a new queue. */
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
		enum msdyn_routeto {
			/** 1 */
			Queue,
			/** 2 */
			UserTeam
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
//{'JsForm':['Rule Item'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}