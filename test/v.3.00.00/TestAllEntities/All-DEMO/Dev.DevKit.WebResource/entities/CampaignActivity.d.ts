//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormCampaign_Activity {
		interface Header extends DevKit.Controls.IHeader {
			/** Unique identifier of the user or team who owns the activity. */
			OwnerId: DevKit.Controls.Lookup;
			/** Select the priority so that preferred customers or critical issues are handled quickly. */
			PriorityCode: DevKit.Controls.OptionSet;
			/** Select the campaign activity's status. */
			StatusCode: DevKit.Controls.OptionSet;
		}
		interface tab_audiences_tab_Sections {
			excluded_accounts_section: DevKit.Controls.Section;
			excluded_contacts_section: DevKit.Controls.Section;
			excluded_leads_section: DevKit.Controls.Section;
			selected_accounts_section: DevKit.Controls.Section;
			selected_contacts_section: DevKit.Controls.Section;
			selected_leads_section: DevKit.Controls.Section;
		}
		interface tab_Campaign_Activity_Sections {
			Anti_Spam: DevKit.Controls.Section;
			Financials: DevKit.Controls.Section;
			Marketing_list: DevKit.Controls.Section;
			Social_Pane: DevKit.Controls.Section;
			Summary: DevKit.Controls.Section;
		}
		interface tab_audiences_tab extends DevKit.Controls.ITab {
			Section: tab_audiences_tab_Sections;
		}
		interface tab_Campaign_Activity extends DevKit.Controls.ITab {
			Section: tab_Campaign_Activity_Sections;
		}
		interface Tabs {
			audiences_tab: tab_audiences_tab;
			Campaign_Activity: tab_Campaign_Activity;
		}
		interface Body {
			Tab: Tabs;
			/** Type the actual cost of the campaign activity. The value entered is rolled up to the related campaign in the total cost calculations. */
			ActualCost: DevKit.Controls.Money;
			/** Enter the date when the campaign activity was actually  completed. */
			ActualEnd: DevKit.Controls.Date;
			/** Enter the actual start date and time for the campaign activity to determine if the campaign activity started on the scheduled time. */
			ActualStart: DevKit.Controls.Date;
			/** Type the allocated budget of the campaign activity for estimated versus actual cost reporting. */
			BudgetedCost: DevKit.Controls.Money;
			/** Select how communications for this activity will be sent, such as phone, letter, fax, or email. */
			ChannelTypeCode: DevKit.Controls.OptionSet;
			/** Type additional information to describe the campaign activity, such as key talking points, objectives, or details about the target audience. */
			Description: DevKit.Controls.String;
			/** Limits the frequency (in days) of marketing activities directed at any contact. Contacts that have been contacted more recently than this will be excluded from new campaign activity distributions. Enter a value of zero to disable the limit. */
			ExcludeIfContactedInXDays: DevKit.Controls.Integer;
			notescontrol: DevKit.Controls.Note;
			/** Outsource vendor with which activity is associated. */
			Partners: DevKit.Controls.Lookup;
			/** Choose the parent campaign so that the campaign activity costs reflect in the correct campaign for reporting. */
			RegardingObjectId: DevKit.Controls.Lookup;
			/** Enter the expected due date and time for the activity to be completed to provide details about the timing of the campaign activity. */
			ScheduledEnd: DevKit.Controls.Date;
			/** Enter the expected start date and time for the activity to provide details about timing of the campaign activity. */
			ScheduledStart: DevKit.Controls.Date;
			/** Select the campaign activity's status. */
			StatusCode: DevKit.Controls.OptionSet;
			/** Type a short description about the objective or primary topic of the campaign activity. */
			Subject: DevKit.Controls.String;
			/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
			TransactionCurrencyId: DevKit.Controls.Lookup;
			/** Select the type of campaign activity to indicate the purpose of the activity. */
			TypeCode: DevKit.Controls.OptionSet;
		}
		interface Navigation {
			navActivities: DevKit.Controls.NavigationItem,
			navAsyncOperations: DevKit.Controls.NavigationItem,
			navProcessSessions: DevKit.Controls.NavigationItem,
			navRelationshipCABulkOperationLogs: DevKit.Controls.NavigationItem,
			navTargetLists: DevKit.Controls.NavigationItem
		}
		interface Grid {
			excluded_accounts: DevKit.Controls.Grid;
			excluded_contacts: DevKit.Controls.Grid;
			excluded_leads: DevKit.Controls.Grid;
			marketing_lists_grid: DevKit.Controls.Grid;
			selected_accounts: DevKit.Controls.Grid;
			selected_contacts: DevKit.Controls.Grid;
			selected_leads: DevKit.Controls.Grid;
		}
	}
	class FormCampaign_Activity extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form Campaign_Activity Main Form
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Campaign_Activity */
		Body: DevKit.FormCampaign_Activity.Body;
		/** The Header section of form Campaign_Activity */
		Header: DevKit.FormCampaign_Activity.Header;
		/** The Navigation of form Campaign_Activity */
		Navigation: DevKit.FormCampaign_Activity.Navigation;
		/** The Grid of form Campaign_Activity */
		Grid: DevKit.FormCampaign_Activity.Grid;
		/** The SidePanes of form Campaign_Activity */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormCampaign_Activity_deprecated {
		interface Header extends DevKit.Controls.IHeader {
			/** Unique identifier of the user or team who owns the activity. */
			OwnerId: DevKit.Controls.Lookup;
			/** Select the priority so that preferred customers or critical issues are handled quickly. */
			PriorityCode: DevKit.Controls.OptionSet;
			/** Select the campaign activity's status. */
			StatusCode: DevKit.Controls.OptionSet;
		}
		interface tab_Campaign_Activity_Sections {
			Anti_Spam: DevKit.Controls.Section;
			Financials: DevKit.Controls.Section;
			Marketing_list: DevKit.Controls.Section;
			Social_Pane: DevKit.Controls.Section;
			Summary: DevKit.Controls.Section;
		}
		interface tab_FailuresActivities_Sections {
			failures_activities_grid: DevKit.Controls.Section;
		}
		interface tab_Campaign_Activity extends DevKit.Controls.ITab {
			Section: tab_Campaign_Activity_Sections;
		}
		interface tab_FailuresActivities extends DevKit.Controls.ITab {
			Section: tab_FailuresActivities_Sections;
		}
		interface Tabs {
			Campaign_Activity: tab_Campaign_Activity;
			FailuresActivities: tab_FailuresActivities;
		}
		interface Body {
			Tab: Tabs;
			/** Type the actual cost of the campaign activity. The value entered is rolled up to the related campaign in the total cost calculations. */
			ActualCost: DevKit.Controls.Money;
			/** Enter the date when the campaign activity was actually  completed. */
			ActualEnd: DevKit.Controls.Date;
			/** Enter the actual start date and time for the campaign activity to determine if the campaign activity started on the scheduled time. */
			ActualStart: DevKit.Controls.Date;
			/** Type the allocated budget of the campaign activity for estimated versus actual cost reporting. */
			BudgetedCost: DevKit.Controls.Money;
			/** Select how communications for this activity will be sent, such as phone, letter, fax, or email. */
			ChannelTypeCode: DevKit.Controls.OptionSet;
			/** Type additional information to describe the campaign activity, such as key talking points, objectives, or details about the target audience. */
			Description: DevKit.Controls.String;
			/** Limits the frequency (in days) of marketing activities directed at any contact. Contacts that have been contacted more recently than this will be excluded from new campaign activity distributions. Enter a value of zero to disable the limit. */
			ExcludeIfContactedInXDays: DevKit.Controls.Integer;
			notescontrol: DevKit.Controls.Note;
			/** Outsource vendor with which activity is associated. */
			Partners: DevKit.Controls.Lookup;
			/** Choose the parent campaign so that the campaign activity costs reflect in the correct campaign for reporting. */
			RegardingObjectId: DevKit.Controls.Lookup;
			/** Enter the expected due date and time for the activity to be completed to provide details about the timing of the campaign activity. */
			ScheduledEnd: DevKit.Controls.Date;
			/** Enter the expected start date and time for the activity to provide details about timing of the campaign activity. */
			ScheduledStart: DevKit.Controls.Date;
			/** Select the campaign activity's status. */
			StatusCode: DevKit.Controls.OptionSet;
			/** Type a short description about the objective or primary topic of the campaign activity. */
			Subject: DevKit.Controls.String;
			/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
			TransactionCurrencyId: DevKit.Controls.Lookup;
			/** Select the type of campaign activity to indicate the purpose of the activity. */
			TypeCode: DevKit.Controls.OptionSet;
		}
		interface Navigation {
			navActivities: DevKit.Controls.NavigationItem,
			navAsyncOperations: DevKit.Controls.NavigationItem,
			navProcessSessions: DevKit.Controls.NavigationItem,
			navTargetLists: DevKit.Controls.NavigationItem
		}
		interface Grid {
			failuresGrid: DevKit.Controls.Grid;
			marketing_lists_grid: DevKit.Controls.Grid;
		}
	}
	class FormCampaign_Activity_deprecated extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form Campaign_Activity_deprecated Main Form
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Campaign_Activity_deprecated */
		Body: DevKit.FormCampaign_Activity_deprecated.Body;
		/** The Header section of form Campaign_Activity_deprecated */
		Header: DevKit.FormCampaign_Activity_deprecated.Header;
		/** The Navigation of form Campaign_Activity_deprecated */
		Navigation: DevKit.FormCampaign_Activity_deprecated.Navigation;
		/** The Grid of form Campaign_Activity_deprecated */
		Grid: DevKit.FormCampaign_Activity_deprecated.Grid;
		/** The SidePanes of form Campaign_Activity_deprecated */
		SidePanes: DevKit.SidePanes;
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
		enum ActivityTypeCode {
			/** 4201 */
			Appointment,
			/** 10386 */
			Booking_Alert,
			/** 4402 */
			Campaign_Activity,
			/** 4401 */
			Campaign_Response,
			/** 4206 */
			Case_Resolution,
			/** 10673 */
			Conversation,
			/** 10283 */
			Customer_Voice_alert,
			/** 10293 */
			Customer_Voice_survey_invite,
			/** 10295 */
			Customer_Voice_survey_response,
			/** 4202 */
			Email,
			/** 4204 */
			Fax,
			/** 4207 */
			Letter,
			/** 4208 */
			Opportunity_Close,
			/** 4209 */
			Order_Close,
			/** 10781 */
			Outbound_message,
			/** 4210 */
			Phone_Call,
			/** 10416 */
			Project_Service_Approval,
			/** 4406 */
			Quick_Campaign,
			/** 4211 */
			Quote_Close,
			/** 4251 */
			Recurring_Appointment,
			/** 4214 */
			Service_Activity,
			/** 10688 */
			Session,
			/** 4212 */
			Task
		}
		enum ChannelTypeCode {
			/** 2 */
			Appointment,
			/** 7 */
			Email,
			/** 8 */
			Email_via_Mail_Mergedeprecated,
			/** 5 */
			Fax,
			/** 6 */
			Fax_via_Mail_Mergedeprecated,
			/** 3 */
			Letter,
			/** 4 */
			Letter_via_Mail_Mergedeprecated,
			/** 9 */
			Other,
			/** 1 */
			Phone
		}
		enum Community {
			/** 5 */
			Cortana,
			/** 6 */
			Direct_Line,
			/** 8 */
			Direct_Line_Speech,
			/** 9 */
			Email,
			/** 1 */
			Facebook,
			/** 10 */
			GroupMe,
			/** 11 */
			Kik,
			/** 3 */
			Line,
			/** 7 */
			Microsoft_Teams,
			/** 0 */
			Other,
			/** 13 */
			Skype,
			/** 14 */
			Slack,
			/** 12 */
			Telegram,
			/** 2 */
			Twitter,
			/** 4 */
			Wechat,
			/** 15 */
			WhatsApp
		}
		enum DeliveryPriorityCode {
			/** 2 */
			High,
			/** 0 */
			Low,
			/** 1 */
			Normal
		}
		enum InstanceTypeCode {
			/** 0 */
			Not_Recurring,
			/** 3 */
			Recurring_Exception,
			/** 4 */
			Recurring_Future_Exception,
			/** 2 */
			Recurring_Instance,
			/** 1 */
			Recurring_Master
		}
		enum PriorityCode {
			/** 2 */
			High,
			/** 0 */
			Low,
			/** 1 */
			Normal
		}
		enum StateCode {
			/** 2 */
			Canceled,
			/** 1 */
			Closed,
			/** 0 */
			Open
		}
		enum StatusCode {
			/** 3 */
			Canceled,
			/** 2 */
			Closed,
			/** 6 */
			Completed,
			/** 0 */
			In_Progress,
			/** 4 */
			Pending,
			/** 1 */
			Proposed,
			/** 5 */
			System_Aborted
		}
		enum TypeCode {
			/** 5 */
			Content_Distribution,
			/** 2 */
			Content_Preparation,
			/** 7 */
			Direct_Follow_Up_Contact,
			/** 6 */
			Direct_Initial_Contact,
			/** 4 */
			Lead_Qualification,
			/** 8 */
			Reminder_Distribution,
			/** 1 */
			Research,
			/** 3 */
			Target_Marketing_List_Creation
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.00.00'}