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
			campaignactivity_adx_inviteredemptions: DevKit.Controls.NavigationItem,
			campaignactivity_adx_portalcomments: DevKit.Controls.NavigationItem,
			CampaignActivity_Appointments: DevKit.Controls.NavigationItem,
			campaignactivity_CampaignResponses: DevKit.Controls.NavigationItem,
			CampaignActivity_Emails: DevKit.Controls.NavigationItem,
			campaignactivity_IncidentResolutions: DevKit.Controls.NavigationItem,
			CampaignActivity_logs: DevKit.Controls.NavigationItem,
			campaignactivity_msdyn_bookingalerts: DevKit.Controls.NavigationItem,
			campaignactivity_msdyn_copilottranscripts: DevKit.Controls.NavigationItem,
			campaignactivity_msdyn_ocliveworkitems: DevKit.Controls.NavigationItem,
			campaignactivity_msdyn_ocoutboundmessages: DevKit.Controls.NavigationItem,
			campaignactivity_msdyn_ocsessions: DevKit.Controls.NavigationItem,
			campaignactivity_msdyn_ocvoicemails: DevKit.Controls.NavigationItem,
			campaignactivity_msfp_alerts: DevKit.Controls.NavigationItem,
			campaignactivity_msfp_surveyinvites: DevKit.Controls.NavigationItem,
			campaignactivity_msfp_surveyresponses: DevKit.Controls.NavigationItem,
			campaignactivity_OpportunityCloses: DevKit.Controls.NavigationItem,
			campaignactivity_OrderCloses: DevKit.Controls.NavigationItem,
			CampaignActivity_Phonecalls: DevKit.Controls.NavigationItem,
			CampaignActivity_QueueItem: DevKit.Controls.NavigationItem,
			campaignactivity_QuoteCloses: DevKit.Controls.NavigationItem,
			campaignactivity_ServiceAppointments: DevKit.Controls.NavigationItem,
			CampaignActivity_Tasks: DevKit.Controls.NavigationItem
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
		* Campaign Activity [Main Form]
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
			campaignactivity_adx_inviteredemptions: DevKit.Controls.NavigationItem,
			campaignactivity_adx_portalcomments: DevKit.Controls.NavigationItem,
			CampaignActivity_Appointments: DevKit.Controls.NavigationItem,
			campaignactivity_CampaignResponses: DevKit.Controls.NavigationItem,
			CampaignActivity_Emails: DevKit.Controls.NavigationItem,
			campaignactivity_IncidentResolutions: DevKit.Controls.NavigationItem,
			CampaignActivity_logs: DevKit.Controls.NavigationItem,
			campaignactivity_msdyn_bookingalerts: DevKit.Controls.NavigationItem,
			campaignactivity_msdyn_copilottranscripts: DevKit.Controls.NavigationItem,
			campaignactivity_msdyn_ocliveworkitems: DevKit.Controls.NavigationItem,
			campaignactivity_msdyn_ocoutboundmessages: DevKit.Controls.NavigationItem,
			campaignactivity_msdyn_ocsessions: DevKit.Controls.NavigationItem,
			campaignactivity_msdyn_ocvoicemails: DevKit.Controls.NavigationItem,
			campaignactivity_msfp_alerts: DevKit.Controls.NavigationItem,
			campaignactivity_msfp_surveyinvites: DevKit.Controls.NavigationItem,
			campaignactivity_msfp_surveyresponses: DevKit.Controls.NavigationItem,
			campaignactivity_OpportunityCloses: DevKit.Controls.NavigationItem,
			campaignactivity_OrderCloses: DevKit.Controls.NavigationItem,
			CampaignActivity_Phonecalls: DevKit.Controls.NavigationItem,
			CampaignActivity_QueueItem: DevKit.Controls.NavigationItem,
			campaignactivity_QuoteCloses: DevKit.Controls.NavigationItem,
			campaignactivity_ServiceAppointments: DevKit.Controls.NavigationItem,
			CampaignActivity_Tasks: DevKit.Controls.NavigationItem
		}
		interface Grid {
			failuresGrid: DevKit.Controls.Grid;
			marketing_lists_grid: DevKit.Controls.Grid;
		}
	}
	class FormCampaign_Activity_deprecated extends DevKit.IForm {
		/**
		* Campaign Activity (deprecated) [Main Form]
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
		/** The entity object for Create/Update */
		Entity: unknown;
		/** The OData entity object */
		ODataEntity: unknown;
		/** The entity name */
		EntityName: string;
		/** The entity collection name */
		EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependant on the fields that are retrieved */
		"@odata.etag": string;
		/** Additional information provided by the external application as JSON. For internal use only. */
		ActivityAdditionalParams: string;
		/** Unique identifier of the campaign activity. */
		ActivityId: string;
		/** Type the actual cost of the campaign activity. The value entered is rolled up to the related campaign in the total cost calculations. */
		ActualCost: number;
		/** Value of the Actual Cost in base currency. */
		readonly ActualCost_Base: number;
		/** Shows the value selected in the Duration field on the campaign activity. The duration is used to report the time spent on the activity. */
		ActualDurationMinutes: number;
		/** Enter the date when the campaign activity was actually  completed. */
		ActualEnd_UtcDateOnly: Date;
		/** Enter the actual start date and time for the campaign activity to determine if the campaign activity started on the scheduled time. */
		ActualStart_UtcDateOnly: Date;
		/** Type the allocated budget of the campaign activity for estimated versus actual cost reporting. */
		BudgetedCost: number;
		/** Value of the Budget Allocated in base currency. */
		readonly BudgetedCost_Base: number;
		/** Type a category to identify the campaign activity type, such as new business development or customer retention, to tie the campaign activity to a business group or function. */
		Category: string;
		/** Select how communications for this activity will be sent, such as phone, letter, fax, or email. */
		ChannelTypeCode: OptionSet.CampaignActivity.ChannelTypeCode;
		/** Shows how contact about the social activity originated, such as from Twitter or Facebook. This field is read-only. */
		Community: OptionSet.CampaignActivity.Community;
		/** Unique identifier of the user who created the activity. */
		readonly CreatedBy: string;
		/** Date and time when the activity was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the activitypointer. */
		readonly CreatedOnBehalfBy: string;
		/** Date and time when the delivery of the activity was last attempted. */
		readonly DeliveryLastAttemptedOn_UtcDateAndTime: Date;
		/** Priority of delivery of the activity to the email server. */
		DeliveryPriorityCode: OptionSet.CampaignActivity.DeliveryPriorityCode;
		/** Type additional information to describe the campaign activity, such as key talking points, objectives, or details about the target audience. */
		Description: string;
		/** Select whether to override the opt-out settings on leads, contacts, and accounts for the members of the target marketing lists of the campaign activity. If No is selected, marketing materials will be sent to members who have opted out. */
		DoNotSendOnOptOut: boolean;
		/** The message id of activity which is returned from Exchange Server. */
		ExchangeItemId: string;
		/** Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency. */
		readonly ExchangeRate: number;
		/** Shows the web link of Activity of type email. */
		ExchangeWebLink: string;
		/** Limits the frequency (in days) of marketing activities directed at any contact. Contacts that have been contacted more recently than this will be excluded from new campaign activity distributions. Enter a value of zero to disable the limit. */
		ExcludeIfContactedInXDays: number;
		/** Select whether inactive marketing list members will be excluded from the campaign activity distribution. */
		IgnoreInactiveListMembers: boolean;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Type of instance of a recurring series. */
		readonly InstanceTypeCode: OptionSet.CampaignActivity.InstanceTypeCode;
		/** Information regarding whether the campaign activity was billed as part of resolving a case. */
		IsBilled: boolean;
		/** For internal use only. */
		IsMapiPrivate: boolean;
		/** Information regarding whether the activity is a regular activity type or event type. */
		readonly IsRegularActivity: boolean;
		/** Information about whether the campaign activity is created by a workflow rule. */
		IsWorkflowCreated: boolean;
		/** Contains the date and time stamp of the last on hold time. */
		LastOnHoldTime_UtcDateAndTime: Date;
		/** Left the voice mail */
		LeftVoiceMail: boolean;
		/** Unique identifier of user who last modified the activity. */
		readonly ModifiedBy: string;
		/** Date and time when activity was last modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who last modified the activitypointer. */
		readonly ModifiedOnBehalfBy: string;
		/** Shows how long, in minutes, that the record was on hold. */
		readonly OnHoldTime: number;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Unique identifier of the business unit that owns the activity. */
		readonly OwningBusinessUnit: string;
		/** Unique identifier of the team that owns the activity. */
		readonly OwningTeam: string;
		/** Unique identifier of the user that owns the activity. */
		readonly OwningUser: string;
		/** For internal use only. */
		readonly PostponeActivityProcessingUntil_UtcDateAndTime: Date;
		/** Select the priority so that preferred customers or critical issues are handled quickly. */
		PriorityCode: OptionSet.CampaignActivity.PriorityCode;
		/** Unique identifier of the Process. */
		ProcessId: string;
		/** Choose the parent campaign so that the campaign activity costs reflect in the correct campaign for reporting. */
		RegardingObjectId: string;
		/** Scheduled duration, specified in minutes, of the campaign activity. */
		readonly ScheduledDurationMinutes: number;
		/** Enter the expected due date and time for the activity to be completed to provide details about the timing of the campaign activity. */
		ScheduledEnd_UtcDateOnly: Date;
		/** Enter the expected start date and time for the activity to provide details about timing of the campaign activity. */
		ScheduledStart_UtcDateOnly: Date;
		/** Unique identifier of the mailbox associated with the sender of the email message. */
		readonly SenderMailboxId: string;
		/** Date and time when the activity was sent. */
		readonly SentOn_UtcDateAndTime: Date;
		/** Uniqueidentifier specifying the id of recurring series of an instance. */
		readonly SeriesId: string;
		/** Unique identifier of the associated service. */
		ServiceId: string;
		/** Choose the service level agreement (SLA) that you want to apply to the case record. */
		SLAId: string;
		/** Last SLA that was applied to this case. This field is for internal use only. */
		readonly SLAInvokedId: string;
		/** Shows the date and time by which the activities are sorted. */
		SortDate_UtcDateAndTime: Date;
		/** Unique identifier of the Stage. */
		StageId: string;
		/** Shows whether the campaign activity is open, completed, or canceled. Completed and canceled campaign activities are read-only and can't be edited. */
		StateCode: OptionSet.CampaignActivity.StateCode;
		/** Select the campaign activity's status. */
		StatusCode: OptionSet.CampaignActivity.StatusCode;
		/** Type a subcategory to identify the campaign activity type and relate the activity to a specific product, sales region, business group, or other function. */
		Subcategory: string;
		/** Type a short description about the objective or primary topic of the campaign activity. */
		Subject: string;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
		readonly TransactionCurrencyId: string;
		/** For internal use only. */
		TraversedPath: string;
		/** Select the type of campaign activity to indicate the purpose of the activity. */
		TypeCode: OptionSet.CampaignActivity.TypeCode;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version number of the activity. */
		readonly VersionNumber: number;
		/** The array of object that can cast object to ActivityPartyApi class */
		ActivityParties: Array<unknown>;
		readonly FormattedValue: {
			/** Additional information provided by the external application as JSON. For internal use only. */
			readonly ActivityAdditionalParams: string;
			/** Unique identifier of the campaign activity. */
			readonly ActivityId: string;
			/** Type the actual cost of the campaign activity. The value entered is rolled up to the related campaign in the total cost calculations. */
			readonly ActualCost: string;
			/** Value of the Actual Cost in base currency. */
			readonly ActualCost_Base: string;
			/** Shows the value selected in the Duration field on the campaign activity. The duration is used to report the time spent on the activity. */
			readonly ActualDurationMinutes: string;
			/** Enter the date when the campaign activity was actually  completed. */
			readonly ActualEnd_UtcDateOnly: string;
			/** Enter the actual start date and time for the campaign activity to determine if the campaign activity started on the scheduled time. */
			readonly ActualStart_UtcDateOnly: string;
			/** Type the allocated budget of the campaign activity for estimated versus actual cost reporting. */
			readonly BudgetedCost: string;
			/** Value of the Budget Allocated in base currency. */
			readonly BudgetedCost_Base: string;
			/** Type a category to identify the campaign activity type, such as new business development or customer retention, to tie the campaign activity to a business group or function. */
			readonly Category: string;
			/** Select how communications for this activity will be sent, such as phone, letter, fax, or email. */
			readonly ChannelTypeCode: string;
			/** Shows how contact about the social activity originated, such as from Twitter or Facebook. This field is read-only. */
			readonly Community: string;
			/** Unique identifier of the user who created the activity. */
			readonly CreatedBy: string;
			/** Date and time when the activity was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the activitypointer. */
			readonly CreatedOnBehalfBy: string;
			/** Date and time when the delivery of the activity was last attempted. */
			readonly DeliveryLastAttemptedOn_UtcDateAndTime: string;
			/** Priority of delivery of the activity to the email server. */
			readonly DeliveryPriorityCode: string;
			/** Type additional information to describe the campaign activity, such as key talking points, objectives, or details about the target audience. */
			readonly Description: string;
			/** Select whether to override the opt-out settings on leads, contacts, and accounts for the members of the target marketing lists of the campaign activity. If No is selected, marketing materials will be sent to members who have opted out. */
			readonly DoNotSendOnOptOut: string;
			/** The message id of activity which is returned from Exchange Server. */
			readonly ExchangeItemId: string;
			/** Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency. */
			readonly ExchangeRate: string;
			/** Shows the web link of Activity of type email. */
			readonly ExchangeWebLink: string;
			/** Limits the frequency (in days) of marketing activities directed at any contact. Contacts that have been contacted more recently than this will be excluded from new campaign activity distributions. Enter a value of zero to disable the limit. */
			readonly ExcludeIfContactedInXDays: string;
			/** Select whether inactive marketing list members will be excluded from the campaign activity distribution. */
			readonly IgnoreInactiveListMembers: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Type of instance of a recurring series. */
			readonly InstanceTypeCode: string;
			/** Information regarding whether the campaign activity was billed as part of resolving a case. */
			readonly IsBilled: string;
			/** For internal use only. */
			readonly IsMapiPrivate: string;
			/** Information regarding whether the activity is a regular activity type or event type. */
			readonly IsRegularActivity: string;
			/** Information about whether the campaign activity is created by a workflow rule. */
			readonly IsWorkflowCreated: string;
			/** Contains the date and time stamp of the last on hold time. */
			readonly LastOnHoldTime_UtcDateAndTime: string;
			/** Left the voice mail */
			readonly LeftVoiceMail: string;
			/** Unique identifier of user who last modified the activity. */
			readonly ModifiedBy: string;
			/** Date and time when activity was last modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who last modified the activitypointer. */
			readonly ModifiedOnBehalfBy: string;
			/** Shows how long, in minutes, that the record was on hold. */
			readonly OnHoldTime: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Unique identifier of the business unit that owns the activity. */
			readonly OwningBusinessUnit: string;
			/** Unique identifier of the team that owns the activity. */
			readonly OwningTeam: string;
			/** Unique identifier of the user that owns the activity. */
			readonly OwningUser: string;
			/** For internal use only. */
			readonly PostponeActivityProcessingUntil_UtcDateAndTime: string;
			/** Select the priority so that preferred customers or critical issues are handled quickly. */
			readonly PriorityCode: string;
			/** Unique identifier of the Process. */
			readonly ProcessId: string;
			/** Choose the parent campaign so that the campaign activity costs reflect in the correct campaign for reporting. */
			readonly RegardingObjectId: string;
			/** Scheduled duration, specified in minutes, of the campaign activity. */
			readonly ScheduledDurationMinutes: string;
			/** Enter the expected due date and time for the activity to be completed to provide details about the timing of the campaign activity. */
			readonly ScheduledEnd_UtcDateOnly: string;
			/** Enter the expected start date and time for the activity to provide details about timing of the campaign activity. */
			readonly ScheduledStart_UtcDateOnly: string;
			/** Unique identifier of the mailbox associated with the sender of the email message. */
			readonly SenderMailboxId: string;
			/** Date and time when the activity was sent. */
			readonly SentOn_UtcDateAndTime: string;
			/** Uniqueidentifier specifying the id of recurring series of an instance. */
			readonly SeriesId: string;
			/** Unique identifier of the associated service. */
			readonly ServiceId: string;
			/** Choose the service level agreement (SLA) that you want to apply to the case record. */
			readonly SLAId: string;
			/** Last SLA that was applied to this case. This field is for internal use only. */
			readonly SLAInvokedId: string;
			/** Shows the date and time by which the activities are sorted. */
			readonly SortDate_UtcDateAndTime: string;
			/** Unique identifier of the Stage. */
			readonly StageId: string;
			/** Shows whether the campaign activity is open, completed, or canceled. Completed and canceled campaign activities are read-only and can't be edited. */
			readonly StateCode: string;
			/** Select the campaign activity's status. */
			readonly StatusCode: string;
			/** Type a subcategory to identify the campaign activity type and relate the activity to a specific product, sales region, business group, or other function. */
			readonly Subcategory: string;
			/** Type a short description about the objective or primary topic of the campaign activity. */
			readonly Subject: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
			readonly TransactionCurrencyId: string;
			/** For internal use only. */
			readonly TraversedPath: string;
			/** Select the type of campaign activity to indicate the purpose of the activity. */
			readonly TypeCode: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version number of the activity. */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace CampaignActivity {
		enum ActivityTypeCode {
			/** 4201 */
			Appointment,
			/** 11000 */
			Booking_Alert,
			/** 4402 */
			Campaign_Activity,
			/** 4401 */
			Campaign_Response,
			/** 4206 */
			Case_Resolution,
			/** 10691 */
			Conversation,
			/** 10877 */
			Copilot_Transcript,
			/** 10600 */
			Customer_Voice_alert,
			/** 10610 */
			Customer_Voice_survey_invite,
			/** 10612 */
			Customer_Voice_survey_response,
			/** 4202 */
			Email,
			/** 4204 */
			Fax,
			/** 10310 */
			Invite_Redemption,
			/** 4207 */
			Letter,
			/** 4208 */
			Opportunity_Close,
			/** 4209 */
			Order_Close,
			/** 11063 */
			Outbound_message,
			/** 4210 */
			Phone_Call,
			/** 10311 */
			Portal_Comment,
			/** 4406 */
			Quick_Campaign,
			/** 4211 */
			Quote_Close,
			/** 4251 */
			Recurring_Appointment,
			/** 4214 */
			Service_Activity,
			/** 10708 */
			Session,
			/** 4212 */
			Task,
			/** 10185 */
			Teams_chat,
			/** 11070 */
			Voicemail
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
			/** 16 */
			Apple_Messages_For_Business,
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
			/** 17 */
			Googles_Business_Messages,
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
		enum RegardingObjectTypeCode {
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.44.44.44'}