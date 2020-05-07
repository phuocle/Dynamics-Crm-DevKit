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
	class CampaignActivityApi {
		/**
		* DynamicsCrm.DevKit CampaignActivityApi
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
		/** Additional information provided by the external application as JSON. For internal use only. */
		ActivityAdditionalParams: DevKit.WebApi.StringValue;
		/** Unique identifier of the campaign activity. */
		ActivityId: DevKit.WebApi.GuidValue;
		/** Type the actual cost of the campaign activity. The value entered is rolled up to the related campaign in the total cost calculations. */
		ActualCost: DevKit.WebApi.MoneyValue;
		/** Value of the Actual Cost in base currency. */
		ActualCost_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Shows the value selected in the Duration field on the campaign activity. The duration is used to report the time spent on the activity. */
		ActualDurationMinutes: DevKit.WebApi.IntegerValue;
		/** Enter the date when the campaign activity was actually  completed. */
		ActualEnd_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Enter the actual start date and time for the campaign activity to determine if the campaign activity started on the scheduled time. */
		ActualStart_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Type the allocated budget of the campaign activity for estimated versus actual cost reporting. */
		BudgetedCost: DevKit.WebApi.MoneyValue;
		/** Value of the Budget Allocated in base currency. */
		BudgetedCost_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Type a category to identify the campaign activity type, such as new business development or customer retention, to tie the campaign activity to a business group or function. */
		Category: DevKit.WebApi.StringValue;
		/** Select how communications for this activity will be sent, such as phone, letter, fax, or email. */
		ChannelTypeCode: DevKit.WebApi.OptionSetValue;
		/** Shows how contact about the social activity originated, such as from Twitter or Facebook. This field is read-only. */
		Community: DevKit.WebApi.OptionSetValue;
		/** Unique identifier of the user who created the activity. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the activity was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the activitypointer. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the delivery of the activity was last attempted. */
		DeliveryLastAttemptedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Priority of delivery of the activity to the email server. */
		DeliveryPriorityCode: DevKit.WebApi.OptionSetValue;
		/** Type additional information to describe the campaign activity, such as key talking points, objectives, or details about the target audience. */
		Description: DevKit.WebApi.StringValue;
		/** Select whether to override the opt-out settings on leads, contacts, and accounts for the members of the target marketing lists of the campaign activity. If No is selected, marketing materials will be sent to members who have opted out. */
		DoNotSendOnOptOut: DevKit.WebApi.BooleanValue;
		/** The message id of activity which is returned from Exchange Server. */
		ExchangeItemId: DevKit.WebApi.StringValue;
		/** Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency. */
		ExchangeRate: DevKit.WebApi.DecimalValueReadonly;
		/** Shows the web link of Activity of type email. */
		ExchangeWebLink: DevKit.WebApi.StringValue;
		/** Limits the frequency (in days) of marketing activities directed at any contact. Contacts that have been contacted more recently than this will be excluded from new campaign activity distributions. Enter a value of zero to disable the limit. */
		ExcludeIfContactedInXDays: DevKit.WebApi.IntegerValue;
		/** Select whether inactive marketing list members will be excluded from the campaign activity distribution. */
		IgnoreInactiveListMembers: DevKit.WebApi.BooleanValue;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Type of instance of a recurring series. */
		InstanceTypeCode: DevKit.WebApi.OptionSetValueReadonly;
		/** Information regarding whether the campaign activity was billed as part of resolving a case. */
		IsBilled: DevKit.WebApi.BooleanValue;
		/** For internal use only. */
		IsMapiPrivate: DevKit.WebApi.BooleanValue;
		/** Information regarding whether the activity is a regular activity type or event type. */
		IsRegularActivity: DevKit.WebApi.BooleanValueReadonly;
		/** Information about whether the campaign activity is created by a workflow rule. */
		IsWorkflowCreated: DevKit.WebApi.BooleanValue;
		/** Contains the date and time stamp of the last on hold time. */
		LastOnHoldTime_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Left the voice mail */
		LeftVoiceMail: DevKit.WebApi.BooleanValue;
		/** Unique identifier of user who last modified the activity. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when activity was last modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who last modified the activitypointer. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows how long, in minutes, that the record was on hold. */
		OnHoldTime: DevKit.WebApi.IntegerValueReadonly;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: DevKit.WebApi.LookupValue;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: DevKit.WebApi.LookupValue;
		/** Unique identifier of the business unit that owns the activity. */
		OwningBusinessUnit: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the team that owns the activity. */
		OwningTeam: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the user that owns the activity. */
		OwningUser: DevKit.WebApi.LookupValueReadonly;
		/** For internal use only. */
		PostponeActivityProcessingUntil_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Select the priority so that preferred customers or critical issues are handled quickly. */
		PriorityCode: DevKit.WebApi.OptionSetValue;
		/** Unique identifier of the Process. */
		ProcessId: DevKit.WebApi.GuidValue;
		/** Choose the parent campaign so that the campaign activity costs reflect in the correct campaign for reporting. */
		RegardingObjectId: DevKit.WebApi.LookupValue;
		/** Scheduled duration, specified in minutes, of the campaign activity. */
		ScheduledDurationMinutes: DevKit.WebApi.IntegerValueReadonly;
		/** Enter the expected due date and time for the activity to be completed to provide details about the timing of the campaign activity. */
		ScheduledEnd_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Enter the expected start date and time for the activity to provide details about timing of the campaign activity. */
		ScheduledStart_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Unique identifier of the mailbox associated with the sender of the email message. */
		SenderMailboxId: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the activity was sent. */
		SentOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Uniqueidentifier specifying the id of recurring series of an instance. */
		SeriesId: DevKit.WebApi.GuidValueReadonly;
		/** Unique identifier of the associated service. */
		ServiceId: DevKit.WebApi.LookupValue;
		/** Choose the service level agreement (SLA) that you want to apply to the case record. */
		SLAId: DevKit.WebApi.LookupValue;
		/** Last SLA that was applied to this case. This field is for internal use only. */
		SLAInvokedId: DevKit.WebApi.LookupValueReadonly;
		SLAName: DevKit.WebApi.StringValueReadonly;
		/** Shows the date and time by which the activities are sorted. */
		SortDate_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Unique identifier of the Stage. */
		StageId: DevKit.WebApi.GuidValue;
		/** Shows whether the campaign activity is open, completed, or canceled. Completed and canceled campaign activities are read-only and can't be edited. */
		StateCode: DevKit.WebApi.OptionSetValue;
		/** Select the campaign activity's status. */
		StatusCode: DevKit.WebApi.OptionSetValue;
		/** Type a subcategory to identify the campaign activity type and relate the activity to a specific product, sales region, business group, or other function. */
		Subcategory: DevKit.WebApi.StringValue;
		/** Type a short description about the objective or primary topic of the campaign activity. */
		Subject: DevKit.WebApi.StringValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
		TransactionCurrencyId: DevKit.WebApi.LookupValueReadonly;
		/** For internal use only. */
		TraversedPath: DevKit.WebApi.StringValue;
		/** Select the type of campaign activity to indicate the purpose of the activity. */
		TypeCode: DevKit.WebApi.OptionSetValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Version number of the activity. */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
		/** The array of object that can cast object to ActivityPartyApi class */
		ActivityParties: Array<any>;
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
//{'JsForm':['Campaign Activity','Campaign Activity (deprecated)'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}