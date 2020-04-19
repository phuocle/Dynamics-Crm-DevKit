//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyStar {
	namespace FormChannelAccessProfileRuleItem_Information {
		interface tab_RuleCriteria_Sections {
			ConditionControl: DevKit.Form.Controls.ControlSection;
			rule_then_conditions: DevKit.Form.Controls.ControlSection;
		}
		interface tab_notes_Sections {
			notes: DevKit.Form.Controls.ControlSection;
		}
		interface tab_RuleCriteria extends DevKit.Form.Controls.IControlTab {
			Section: tab_RuleCriteria_Sections;
		}
		interface tab_notes extends DevKit.Form.Controls.IControlTab {
			Section: tab_notes_Sections;
		}
		interface Tabs {
			RuleCriteria: tab_RuleCriteria;
			notes: tab_notes;
		}
		interface Body {
			Tab: Tabs;
			notescontrol: DevKit.Form.Controls.ControlNote;
			/** Choose the channel access profile that the item is assigned to. */
			AssociatedChannelAccessProfile: DevKit.Form.Controls.ControlLookup;
			/** Type additional information to describe the channel access profile rule item. */
			Description: DevKit.Form.Controls.ControlString;
			/** Type a descriptive name for the channel access profile rule item. */
			Name: DevKit.Form.Controls.ControlString;
		}
	}
	class FormChannelAccessProfileRuleItem_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form ChannelAccessProfileRuleItem_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form ChannelAccessProfileRuleItem_Information */
		Body: LuckyStar.FormChannelAccessProfileRuleItem_Information.Body;
	}
	class ChannelAccessProfileRuleItemApi {
		/**
		* DynamicsCrm.DevKit ChannelAccessProfileRuleItemApi
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
		/** Choose the channel access profile that the item is assigned to. */
		AssociatedChannelAccessProfile: DevKit.WebApi.LookupValue;
		/** Shows the channel access profile rule associated with this channel access profile rule item. */
		ChannelAccessProfileRuleId: DevKit.WebApi.LookupValue;
		/** Unique identifier for entity instances */
		ChannelAccessProfileRuleItemId: DevKit.WebApi.GuidValue;
		/** Unique identifier of the channel access profile rule item. */
		ChannelAccessProfileRuleItemIdUnique: DevKit.WebApi.GuidValueReadonly;
		/** For internal use only. */
		ComponentState: DevKit.WebApi.OptionSetValueReadonly;
		/** Condition for Rule item */
		ConditionXml: DevKit.WebApi.StringValue;
		/** Shows who created the record. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows who created the record on behalf of another user. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Type additional information to describe the channel access profile rule item. */
		Description: DevKit.WebApi.StringValue;
		/** Exchange rate for the currency associated with the channel access profile rule item with respect to the base currency. */
		ExchangeRate: DevKit.WebApi.DecimalValueReadonly;
		/** Version in which the channel access profile rule item is introduced. */
		IntroducedVersion: DevKit.WebApi.StringValue;
		/** Is Managed */
		IsManaged: DevKit.WebApi.BooleanValueReadonly;
		/** Shows who last updated the record */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows who last updated the record on behalf of another user. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Type a descriptive name for the channel access profile rule item. */
		Name: DevKit.WebApi.StringValue;
		/** Date and time when the record was created. */
		OverwriteTime_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValueReadonly;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: DevKit.WebApi.LookupValue;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: DevKit.WebApi.LookupValue;
		/** Unique identifier for the business unit that owns the record */
		OwningBusinessUnit: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier for the user that owns the record. */
		OwningUser: DevKit.WebApi.LookupValueReadonly;
		/** Sequence number of the Channel access profile rule item */
		SequenceNumber: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the associated solution. */
		SolutionId: DevKit.WebApi.GuidValueReadonly;
		/** For internal use only. */
		SupportingSolutionId: DevKit.WebApi.GuidValueReadonly;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Exchange rate for the currency associated with the channel access profile rule item with respect to the base currency. */
		TransactionCurrencyId: DevKit.WebApi.LookupValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace ChannelAccessProfileRuleItem {
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
//{'JsForm':['Information'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}