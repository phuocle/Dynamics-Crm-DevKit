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
//{'JsForm':['Campaign'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false}