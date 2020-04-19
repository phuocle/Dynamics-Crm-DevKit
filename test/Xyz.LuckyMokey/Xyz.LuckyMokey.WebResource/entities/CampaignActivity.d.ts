//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace FormCampaign_Activity {
		interface Header {
			/** Unique identifier of the user or team who owns the activity. */
			OwnerId: DevKit.Form.Controls.ControlLookup;
			/** Select the priority so that preferred customers or critical issues are handled quickly. */
			PriorityCode: DevKit.Form.Controls.ControlOptionSet;
			/** Select the campaign activity's status. */
			StatusCode: DevKit.Form.Controls.ControlOptionSet;
		}
		interface tab_Campaign_Activity_Sections {
			Summary: DevKit.Form.Controls.ControlSection;
			Financials: DevKit.Form.Controls.ControlSection;
			Anti_Spam: DevKit.Form.Controls.ControlSection;
			Marketing_list: DevKit.Form.Controls.ControlSection;
			Social_Pane: DevKit.Form.Controls.ControlSection;
		}
		interface tab_audiences_tab_Sections {
			selected_accounts_section: DevKit.Form.Controls.ControlSection;
			excluded_accounts_section: DevKit.Form.Controls.ControlSection;
			selected_contacts_section: DevKit.Form.Controls.ControlSection;
			excluded_contacts_section: DevKit.Form.Controls.ControlSection;
			selected_leads_section: DevKit.Form.Controls.ControlSection;
			excluded_leads_section: DevKit.Form.Controls.ControlSection;
		}
		interface tab_Campaign_Activity extends DevKit.Form.Controls.IControlTab {
			Section: tab_Campaign_Activity_Sections;
		}
		interface tab_audiences_tab extends DevKit.Form.Controls.IControlTab {
			Section: tab_audiences_tab_Sections;
		}
		interface Tabs {
			Campaign_Activity: tab_Campaign_Activity;
			audiences_tab: tab_audiences_tab;
		}
		interface Body {
			Tab: Tabs;
			marketing_lists_grid: DevKit.Form.Controls.ControlGrid;
			notescontrol: DevKit.Form.Controls.ControlNote;
			selected_accounts: DevKit.Form.Controls.ControlGrid;
			excluded_accounts: DevKit.Form.Controls.ControlGrid;
			selected_contacts: DevKit.Form.Controls.ControlGrid;
			excluded_contacts: DevKit.Form.Controls.ControlGrid;
			selected_leads: DevKit.Form.Controls.ControlGrid;
			excluded_leads: DevKit.Form.Controls.ControlGrid;
			/** Type the actual cost of the campaign activity. The value entered is rolled up to the related campaign in the total cost calculations. */
			ActualCost: DevKit.Form.Controls.ControlMoney;
			/** Enter the date when the campaign activity was actually  completed. */
			ActualEnd: DevKit.Form.Controls.ControlDate;
			/** Enter the actual start date and time for the campaign activity to determine if the campaign activity started on the scheduled time. */
			ActualStart: DevKit.Form.Controls.ControlDate;
			/** Type the allocated budget of the campaign activity for estimated versus actual cost reporting. */
			BudgetedCost: DevKit.Form.Controls.ControlMoney;
			/** Select how communications for this activity will be sent, such as phone, letter, fax, or email. */
			ChannelTypeCode: DevKit.Form.Controls.ControlOptionSet;
			/** Type additional information to describe the campaign activity, such as key talking points, objectives, or details about the target audience. */
			Description: DevKit.Form.Controls.ControlString;
			/** Limits the frequency (in days) of marketing activities directed at any contact. Contacts that have been contacted more recently than this will be excluded from new campaign activity distributions. Enter a value of zero to disable the limit. */
			ExcludeIfContactedInXDays: DevKit.Form.Controls.ControlInteger;
			/** Outsource vendor with which activity is associated. */
			Partners: DevKit.Form.Controls.ControlLookup;
			/** Choose the parent campaign so that the campaign activity costs reflect in the correct campaign for reporting. */
			RegardingObjectId: DevKit.Form.Controls.ControlLookup;
			/** Enter the expected due date and time for the activity to be completed to provide details about the timing of the campaign activity. */
			ScheduledEnd: DevKit.Form.Controls.ControlDate;
			/** Enter the expected start date and time for the activity to provide details about timing of the campaign activity. */
			ScheduledStart: DevKit.Form.Controls.ControlDate;
			/** Select the campaign activity's status. */
			StatusCode: DevKit.Form.Controls.ControlOptionSet;
			/** Type a short description about the objective or primary topic of the campaign activity. */
			Subject: DevKit.Form.Controls.ControlString;
			/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
			TransactionCurrencyId: DevKit.Form.Controls.ControlLookup;
			/** Select the type of campaign activity to indicate the purpose of the activity. */
			TypeCode: DevKit.Form.Controls.ControlOptionSet;
		}
		interface Navigation {
			navActivities: DevKit.Form.Controls.ControlNavigationItem,
			navTargetLists: DevKit.Form.Controls.ControlNavigationItem,
			navAsyncOperations: DevKit.Form.Controls.ControlNavigationItem,
			navProcessSessions: DevKit.Form.Controls.ControlNavigationItem,
			navRelationshipCABulkOperationLogs: DevKit.Form.Controls.ControlNavigationItem
		}
	}
	class FormCampaign_Activity extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form Campaign_Activity
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Campaign_Activity */
		Body: LuckyMokey.FormCampaign_Activity.Body;
		/** The Header section of form Campaign_Activity */
		Header: LuckyMokey.FormCampaign_Activity.Header;
		/** The Navigation of form Campaign_Activity */
		Navigation: LuckyMokey.FormCampaign_Activity.Navigation;
	}
	namespace FormCampaign_Activity_deprecated {
		interface Header {
			/** Unique identifier of the user or team who owns the activity. */
			OwnerId: DevKit.Form.Controls.ControlLookup;
			/** Select the priority so that preferred customers or critical issues are handled quickly. */
			PriorityCode: DevKit.Form.Controls.ControlOptionSet;
			/** Select the campaign activity's status. */
			StatusCode: DevKit.Form.Controls.ControlOptionSet;
		}
		interface tab_Campaign_Activity_Sections {
			Summary: DevKit.Form.Controls.ControlSection;
			Financials: DevKit.Form.Controls.ControlSection;
			Anti_Spam: DevKit.Form.Controls.ControlSection;
			Marketing_list: DevKit.Form.Controls.ControlSection;
			Social_Pane: DevKit.Form.Controls.ControlSection;
		}
		interface tab_FailuresActivities_Sections {
			failures_activities_grid: DevKit.Form.Controls.ControlSection;
		}
		interface tab_Campaign_Activity extends DevKit.Form.Controls.IControlTab {
			Section: tab_Campaign_Activity_Sections;
		}
		interface tab_FailuresActivities extends DevKit.Form.Controls.IControlTab {
			Section: tab_FailuresActivities_Sections;
		}
		interface Tabs {
			Campaign_Activity: tab_Campaign_Activity;
			FailuresActivities: tab_FailuresActivities;
		}
		interface Body {
			Tab: Tabs;
			marketing_lists_grid: DevKit.Form.Controls.ControlGrid;
			notescontrol: DevKit.Form.Controls.ControlNote;
			failuresGrid: DevKit.Form.Controls.ControlGrid;
			/** Type the actual cost of the campaign activity. The value entered is rolled up to the related campaign in the total cost calculations. */
			ActualCost: DevKit.Form.Controls.ControlMoney;
			/** Enter the date when the campaign activity was actually  completed. */
			ActualEnd: DevKit.Form.Controls.ControlDate;
			/** Enter the actual start date and time for the campaign activity to determine if the campaign activity started on the scheduled time. */
			ActualStart: DevKit.Form.Controls.ControlDate;
			/** Type the allocated budget of the campaign activity for estimated versus actual cost reporting. */
			BudgetedCost: DevKit.Form.Controls.ControlMoney;
			/** Select how communications for this activity will be sent, such as phone, letter, fax, or email. */
			ChannelTypeCode: DevKit.Form.Controls.ControlOptionSet;
			/** Type additional information to describe the campaign activity, such as key talking points, objectives, or details about the target audience. */
			Description: DevKit.Form.Controls.ControlString;
			/** Limits the frequency (in days) of marketing activities directed at any contact. Contacts that have been contacted more recently than this will be excluded from new campaign activity distributions. Enter a value of zero to disable the limit. */
			ExcludeIfContactedInXDays: DevKit.Form.Controls.ControlInteger;
			/** Outsource vendor with which activity is associated. */
			Partners: DevKit.Form.Controls.ControlLookup;
			/** Choose the parent campaign so that the campaign activity costs reflect in the correct campaign for reporting. */
			RegardingObjectId: DevKit.Form.Controls.ControlLookup;
			/** Enter the expected due date and time for the activity to be completed to provide details about the timing of the campaign activity. */
			ScheduledEnd: DevKit.Form.Controls.ControlDate;
			/** Enter the expected start date and time for the activity to provide details about timing of the campaign activity. */
			ScheduledStart: DevKit.Form.Controls.ControlDate;
			/** Select the campaign activity's status. */
			StatusCode: DevKit.Form.Controls.ControlOptionSet;
			/** Type a short description about the objective or primary topic of the campaign activity. */
			Subject: DevKit.Form.Controls.ControlString;
			/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
			TransactionCurrencyId: DevKit.Form.Controls.ControlLookup;
			/** Select the type of campaign activity to indicate the purpose of the activity. */
			TypeCode: DevKit.Form.Controls.ControlOptionSet;
		}
		interface Navigation {
			navTargetLists: DevKit.Form.Controls.ControlNavigationItem,
			navActivities: DevKit.Form.Controls.ControlNavigationItem,
			navAsyncOperations: DevKit.Form.Controls.ControlNavigationItem,
			navProcessSessions: DevKit.Form.Controls.ControlNavigationItem
		}
	}
	class FormCampaign_Activity_deprecated extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form Campaign_Activity_deprecated
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Campaign_Activity_deprecated */
		Body: LuckyMokey.FormCampaign_Activity_deprecated.Body;
		/** The Header section of form Campaign_Activity_deprecated */
		Header: LuckyMokey.FormCampaign_Activity_deprecated.Header;
		/** The Navigation of form Campaign_Activity_deprecated */
		Navigation: LuckyMokey.FormCampaign_Activity_deprecated.Navigation;
	}
}
declare namespace OptionSet {
	namespace CampaignActivity {
		enum ChannelTypeCode {
			/** 1 */
			Phone,
			/** 2 */
			Appointment,
			/** 3 */
			Letter,
			/** 4 */
			Letter_via_Mail_Merge,
			/** 5 */
			Fax,
			/** 6 */
			Fax_via_Mail_Merge,
			/** 7 */
			Email,
			/** 8 */
			Email_via_Mail_Merge,
			/** 9 */
			Other
		}
		enum Community {
			/** 1 */
			Facebook,
			/** 2 */
			Twitter,
			/** 0 */
			Other
		}
		enum DeliveryPriorityCode {
			/** 0 */
			Low,
			/** 1 */
			Normal,
			/** 2 */
			High
		}
		enum InstanceTypeCode {
			/** 0 */
			Not_Recurring,
			/** 1 */
			Recurring_Master,
			/** 2 */
			Recurring_Instance,
			/** 3 */
			Recurring_Exception,
			/** 4 */
			Recurring_Future_Exception
		}
		enum PriorityCode {
			/** 0 */
			Low,
			/** 1 */
			Normal,
			/** 2 */
			High
		}
		enum StateCode {
			/** 0 */
			Open,
			/** 1 */
			Closed,
			/** 2 */
			Canceled
		}
		enum StatusCode {
			/** 1 */
			Proposed,
			/** 0 */
			In_Progress,
			/** 2 */
			Closed,
			/** 3 */
			Canceled,
			/** 4 */
			Pending,
			/** 5 */
			System_Aborted,
			/** 6 */
			Completed
		}
		enum TypeCode {
			/** 1 */
			Research,
			/** 2 */
			Content_Preparation,
			/** 3 */
			Target_Marketing_List_Creation,
			/** 4 */
			Lead_Qualification,
			/** 5 */
			Content_Distribution,
			/** 6 */
			Direct_Initial_Contact,
			/** 7 */
			Direct_Follow_Up_Contact,
			/** 8 */
			Reminder_Distribution
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
//{'JsForm':['Campaign Activity','Campaign Activity (deprecated)'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false}