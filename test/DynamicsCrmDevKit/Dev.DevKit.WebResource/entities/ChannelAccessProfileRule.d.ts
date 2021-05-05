//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormChannelAccessProfileRule_Information {
		interface Header extends DevKit.Controls.IHeader {
			/** Enter the user or team that owns the channel access profile rule. */
			OwnerId: DevKit.Controls.Lookup;
			/** Select the channel access profile rule's status. */
			StatusCode: DevKit.Controls.OptionSet;
		}
		interface Tabs {
		}
		interface Body {
			notescontrol: DevKit.Controls.Note;
			/** Type a short description for the channel access profile rule. */
			Description: DevKit.Controls.String;
			/** Type a descriptive name for the channel access profile rule. */
			Name: DevKit.Controls.String;
		}
		interface Grid {
			ProfileRuleItems: DevKit.Controls.Grid;
		}
	}
	class FormChannelAccessProfileRule_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form ChannelAccessProfileRule_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form ChannelAccessProfileRule_Information */
		Body: DevKit.FormChannelAccessProfileRule_Information.Body;
		/** The Header section of form ChannelAccessProfileRule_Information */
		Header: DevKit.FormChannelAccessProfileRule_Information.Header;
		/** The Grid of form ChannelAccessProfileRule_Information */
		Grid: DevKit.FormChannelAccessProfileRule_Information.Grid;
	}
	class ChannelAccessProfileRuleApi {
		/**
		* DynamicsCrm.DevKit ChannelAccessProfileRuleApi
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
		/** Unique identifier for entity instances */
		ChannelAccessProfileRuleId: DevKit.WebApi.GuidValue;
		/** Unique identifier of the Channel Access Profile Rule Item used when synchronizing customizations for the Microsoft Dynamics 365 client for Outlook */
		ChannelAccessProfileRuleIdUnique: DevKit.WebApi.GuidValueReadonly;
		/** For internal use only. */
		ComponentState: DevKit.WebApi.OptionSetValueReadonly;
		/** Unique identifier of the user who created the record. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the record. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Type a short description for the channel access profile rule. */
		Description: DevKit.WebApi.StringValue;
		/** Exchange rate for the currency associated with the channel access profile rule with respect to the base currency. */
		ExchangeRate: DevKit.WebApi.DecimalValueReadonly;
		/** Version in which the similarity rule is introduced. */
		IntroducedVersion: DevKit.WebApi.StringValue;
		/** Is Managed */
		IsManaged: DevKit.WebApi.BooleanValueReadonly;
		/** Unique identifier of the user who modified the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who modified the record. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Type a descriptive name for the channel access profile rule. */
		Name: DevKit.WebApi.StringValue;
		/** Date and time when the record was created. */
		OverwriteTime_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValueReadonly;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: DevKit.WebApi.LookupValue;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: DevKit.WebApi.LookupValue;
		/** Unique identifier for the business unit that owns the record */
		OwningBusinessUnit: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier for the team that owns the record. */
		OwningTeam: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier for the user that owns the record. */
		OwningUser: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the associated solution. */
		SolutionId: DevKit.WebApi.GuidValueReadonly;
		/** Shows whether the channel access profile rule is in a draft state or an active state. */
		StateCode: DevKit.WebApi.OptionSetValue;
		/** Select the channel access profile rule's status. */
		StatusCode: DevKit.WebApi.OptionSetValue;
		/** For internal use only. */
		SupportingSolutionId: DevKit.WebApi.GuidValueReadonly;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Exchange rate for the currency associated with the channel access profile rule with respect to the base currency. */
		TransactionCurrencyId: DevKit.WebApi.LookupValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
		/** Shows the workflow for this rule. */
		WorkflowId: DevKit.WebApi.LookupValue;
	}
}
declare namespace OptionSet {
	namespace ChannelAccessProfileRule {
		enum ComponentState {
			/** 2 */
			Deleted,
			/** 3 */
			Deleted_Unpublished,
			/** 0 */
			Published,
			/** 1 */
			Unpublished
		}
		enum StateCode {
			/** 1 */
			Active,
			/** 0 */
			Draft
		}
		enum StatusCode {
			/** 2 */
			Active,
			/** 1 */
			Draft
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
//{'JsForm':['Information'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true,'Version':'2.12.31','JsFormVersion':'v2'}