//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace FormCampaign {
		interface Header {
			/** Type the expected revenue for the campaign for return on investment projections and post-campaign reporting. */
			ExpectedRevenue: DevKit.Form.Controls.ControlMoney;
			/** Select whether the campaign is a template that can be copied when you create future campaigns. */
			IsTemplate: DevKit.Form.Controls.ControlBoolean;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
			/** Select the campaign's status. */
			StatusCode: DevKit.Form.Controls.ControlOptionSet;
		}
		interface tab_SUMMARY_Sections {
			CAMPAIGN: DevKit.Form.Controls.ControlSection;
			SCHEDULES: DevKit.Form.Controls.ControlSection;
			OFFER: DevKit.Form.Controls.ControlSection;
			RELATED_PANE: DevKit.Form.Controls.ControlSection;
			LISTS: DevKit.Form.Controls.ControlSection;
			LEADS: DevKit.Form.Controls.ControlSection;
			CAMPAIGN_ACTIVITIES: DevKit.Form.Controls.ControlSection;
		}
		interface tab_DETAILS_Sections {
			FINANCIALS: DevKit.Form.Controls.ControlSection;
			ADMINISTRATION: DevKit.Form.Controls.ControlSection;
			RESPONSES: DevKit.Form.Controls.ControlSection;
			DESCRIPTION: DevKit.Form.Controls.ControlSection;
		}
		interface tab_SUMMARY extends DevKit.Form.Controls.IControlTab {
			Section: tab_SUMMARY_Sections;
		}
		interface tab_DETAILS extends DevKit.Form.Controls.IControlTab {
			Section: tab_DETAILS_Sections;
		}
		interface Tabs {
			SUMMARY: tab_SUMMARY;
			DETAILS: tab_DETAILS;
		}
		interface Body {
			Tab: Tabs;
			notescontrol: DevKit.Form.Controls.ControlNote;
			Lists: DevKit.Form.Controls.ControlGrid;
			Leads: DevKit.Form.Controls.ControlGrid;
			Activities: DevKit.Form.Controls.ControlGrid;
			Responses: DevKit.Form.Controls.ControlGrid;
			/** Enter the date when the campaign was closed or completed. */
			ActualEnd: DevKit.Form.Controls.ControlDate;
			/** Enter the actual start date and time for the campaign. */
			ActualStart: DevKit.Form.Controls.ControlDate;
			/** Type the amount budgeted for the campaign to define a limit for how much you can spend. */
			BudgetedCost: DevKit.Form.Controls.ControlMoney;
			/** Type a number or other tracking code to identify the campaign. If no value is entered, a code will be generated automatically. */
			CodeName: DevKit.Form.Controls.ControlString;
			/** Date and time when the record was created. */
			CreatedOn: DevKit.Form.Controls.ControlDateTime;
			/** Type additional information to describe the campaign, such as the products or services offered or the targeted audience. */
			Description: DevKit.Form.Controls.ControlString;
			/** Type the expected response rate for the campaign as a full number between 0 and 100. */
			ExpectedResponse: DevKit.Form.Controls.ControlInteger;
			/** Shows who last updated the record. */
			ModifiedBy: DevKit.Form.Controls.ControlLookup;
			/** Date and time when the record was modified. */
			ModifiedOn: DevKit.Form.Controls.ControlDateTime;
			/** Type a name for the campaign so that it is identified correctly in lists. */
			Name: DevKit.Form.Controls.ControlString;
			/** Type the objective of the campaign, including products, services, discounts, and pricing. */
			Objective: DevKit.Form.Controls.ControlString;
			/** Type the sum of any miscellaneous campaign costs not included in the campaign activities to make sure the actual cost of the campaign is calculated correctly. */
			OtherCost: DevKit.Form.Controls.ControlMoney;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
			/** Enter the date when the campaign is scheduled to end. */
			ProposedEnd: DevKit.Form.Controls.ControlDate;
			/** Enter the date when the campaign is scheduled to start. */
			ProposedStart: DevKit.Form.Controls.ControlDate;
			TmpRegardingObjectId: DevKit.Form.Controls.ControlString;
			/** Shows the sum of the amounts entered in the Total Cost of Campaign Activities and Miscellaneous Costs fields. */
			TotalActualCost: DevKit.Form.Controls.ControlMoney;
			/** Shows the sum of the values entered in the Actual Cost field on all campaign activities related to the campaign. */
			TotalCampaignActivityActualCost: DevKit.Form.Controls.ControlMoney;
			/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
			TransactionCurrencyId: DevKit.Form.Controls.ControlLookup;
			/** Select the type of the campaign. */
			TypeCode: DevKit.Form.Controls.ControlOptionSet;
		}
	}
	class FormCampaign extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form Campaign
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Campaign */
		Body: LuckyMokey.FormCampaign.Body;
		/** The Header section of form Campaign */
		Header: LuckyMokey.FormCampaign.Header;
	}
	class CampaignApi {
		/**
		* DynamicsCrm.DevKit CampaignApi
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
		/** Enter the date when the campaign was closed or completed. */
		ActualEnd_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Enter the actual start date and time for the campaign. */
		ActualStart_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Type the amount budgeted for the campaign to define a limit for how much you can spend. */
		BudgetedCost: DevKit.WebApi.MoneyValue;
		/** Value of the Budget Allocated in base currency. */
		BudgetedCost_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Unique identifier of the campaign. */
		CampaignId: DevKit.WebApi.GuidValue;
		/** Type a number or other tracking code to identify the campaign. If no value is entered, a code will be generated automatically. */
		CodeName: DevKit.WebApi.StringValue;
		/** Shows who created the record. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows who created the record on behalf of another user. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Type additional information to describe the campaign, such as the products or services offered or the targeted audience. */
		Description: DevKit.WebApi.StringValue;
		/** The primary email address for the entity. */
		EmailAddress: DevKit.WebApi.StringValue;
		/** The default image for the entity. */
		EntityImage: DevKit.WebApi.StringValue;
		EntityImage_Timestamp: DevKit.WebApi.BigIntValueReadonly;
		EntityImage_URL: DevKit.WebApi.StringValueReadonly;
		EntityImageId: DevKit.WebApi.GuidValueReadonly;
		/** Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency. */
		ExchangeRate: DevKit.WebApi.DecimalValueReadonly;
		/** Type the expected response rate for the campaign as a full number between 0 and 100. */
		ExpectedResponse: DevKit.WebApi.IntegerValue;
		/** Type the expected revenue for the campaign for return on investment projections and post-campaign reporting. */
		ExpectedRevenue: DevKit.WebApi.MoneyValue;
		/** Value of the Estimated Revenue in base currency. */
		ExpectedRevenue_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Select whether the campaign is a template that can be copied when you create future campaigns. */
		IsTemplate: DevKit.WebApi.BooleanValue;
		/** Type the promotional message or marketing copy for the campaign. */
		Message: DevKit.WebApi.StringValue;
		/** Shows who last updated the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows who created the record on behalf of another user. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Type a name for the campaign so that it is identified correctly in lists. */
		Name: DevKit.WebApi.StringValue;
		/** Type the objective of the campaign, including products, services, discounts, and pricing. */
		Objective: DevKit.WebApi.StringValue;
		/** Type the sum of any miscellaneous campaign costs not included in the campaign activities to make sure the actual cost of the campaign is calculated correctly. */
		OtherCost: DevKit.WebApi.MoneyValue;
		/** Value of the Miscellaneous Costs in base currency. */
		OtherCost_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
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
		/** Choose the price list associated with this item to make sure the products associated with the campaign are offered at the correct prices. */
		PriceListId: DevKit.WebApi.LookupValue;
		PriceListName: DevKit.WebApi.StringValueReadonly;
		/** Contains the id of the process associated with the entity. */
		ProcessId: DevKit.WebApi.GuidValue;
		/** Type a promotional code to track sales related to the campaign or allow customers to redeem a discount offer. */
		PromotionCodeName: DevKit.WebApi.StringValue;
		/** Enter the date when the campaign is scheduled to end. */
		ProposedEnd_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Enter the date when the campaign is scheduled to start. */
		ProposedStart_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Contains the id of the stage where the entity is located. */
		StageId: DevKit.WebApi.GuidValue;
		/** Shows the status of the campaign. By default, campaigns are active and can't be deactivated. */
		StateCode: DevKit.WebApi.OptionSetValue;
		/** Select the campaign's status. */
		StatusCode: DevKit.WebApi.OptionSetValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		TmpRegardingObjectId: DevKit.WebApi.StringValue;
		/** Shows the sum of the amounts entered in the Total Cost of Campaign Activities and Miscellaneous Costs fields. */
		TotalActualCost: DevKit.WebApi.MoneyValueReadonly;
		/** Value of the Total Cost of Campaign in base currency. */
		TotalActualCost_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Shows the sum of the values entered in the Actual Cost field on all campaign activities related to the campaign. */
		TotalCampaignActivityActualCost: DevKit.WebApi.MoneyValueReadonly;
		/** Value of the Total Cost of Campaign Activities in base currency. */
		TotalCampaignActivityActualCost_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
		TransactionCurrencyId: DevKit.WebApi.LookupValue;
		/** A comma separated list of string values representing the unique identifiers of stages in a Business Process Flow Instance in the order that they occur. */
		TraversedPath: DevKit.WebApi.StringValue;
		/** Select the type of the campaign. */
		TypeCode: DevKit.WebApi.OptionSetValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Version Number */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace Campaign {
		enum StateCode {
			/** 0 */
			Active,
			/** 1 */
			Inactive
		}
		enum StatusCode {
			/** 0 */
			Proposed,
			/** 1 */
			Ready_To_Launch,
			/** 2 */
			Launched,
			/** 3 */
			Completed,
			/** 4 */
			Canceled,
			/** 5 */
			Suspended,
			/** 6 */
			Inactive
		}
		enum TypeCode {
			/** 1 */
			Advertisement,
			/** 2 */
			Direct_Marketing,
			/** 3 */
			Event,
			/** 4 */
			Co_branding,
			/** 5 */
			Other
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
//{'JsForm':['Campaign'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}