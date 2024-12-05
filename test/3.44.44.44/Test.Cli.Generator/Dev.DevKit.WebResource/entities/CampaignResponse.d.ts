//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormCampaign_Response {
		interface Header extends DevKit.Controls.IHeader {
			/** Unique identifier of the user or team who owns the activity. */
			OwnerId: DevKit.Controls.Lookup;
			/** Choose the parent campaign so that the campaign's response rate is tracked correctly. */
			RegardingObjectId: DevKit.Controls.Lookup;
			/** Select the type of response from the prospect or customer to indicate their interest in the campaign. */
			ResponseCode: DevKit.Controls.OptionSet;
			/** Shows whether the campaign response is open, closed, or canceled. Closed and canceled campaign responses are read-only and can't be edited. */
			StateCode: DevKit.Controls.OptionSet;
		}
		interface tab_campaign_response_Sections {
			description: DevKit.Controls.Section;
			details: DevKit.Controls.Section;
			received_from: DevKit.Controls.Section;
			summary: DevKit.Controls.Section;
		}
		interface tab_campaign_response extends DevKit.Controls.ITab {
			Section: tab_campaign_response_Sections;
		}
		interface Tabs {
			campaign_response: tab_campaign_response;
		}
		interface Body {
			Tab: Tabs;
			/** Select how the response was received, such as phone, letter, fax, or email. */
			ChannelTypeCode: DevKit.Controls.OptionSet;
			/** Type the name of the company if the campaign response was received from a new prospect or customer. */
			CompanyName: DevKit.Controls.String;
			/** Enter the account, contact, or lead that submitted the campaign response, if it was received from an existing prospect or customer. */
			Customer: DevKit.Controls.Lookup;
			/** Type additional information to describe the campaign response, such as key discussion points or objectives. */
			Description: DevKit.Controls.String;
			/** Type the responder's email address. */
			EMailAddress: DevKit.Controls.String;
			/** Type the responder's first name if the campaign response was received from a new prospect or customer. */
			FirstName: DevKit.Controls.String;
			/** Type the responder's last name if the campaign response was received from a new prospect or customer. */
			LastName: DevKit.Controls.String;
			/** Unique identifier of the user or team who owns the activity. */
			OwnerId: DevKit.Controls.Lookup;
			/** Enter the vendor account or contact to capture any third-party used to obtain the campaign response. */
			Partner: DevKit.Controls.Lookup;
			/** Select the priority so that preferred customers or critical issues are handled quickly. */
			PriorityCode: DevKit.Controls.OptionSet;
			/** Type a promotional code to track sales related to the campaign response or to allow the responder to redeem a discount offer. */
			PromotionCodeName: DevKit.Controls.String;
			/** Enter the date when the campaign response was received. */
			ReceivedOn: DevKit.Controls.Date;
			/** Choose the parent campaign so that the campaign's response rate is tracked correctly. */
			RegardingObjectId: DevKit.Controls.Lookup;
			/** Select the type of response from the prospect or customer to indicate their interest in the campaign. */
			ResponseCode: DevKit.Controls.OptionSet;
			/** Enter the expected due date and time for the activity to be completed to provide details about the timing of the campaign response. */
			ScheduledEnd: DevKit.Controls.Date;
			/** Type a short description about the objective or primary topic of the campaign response. */
			Subject: DevKit.Controls.String;
			/** Type the responder's primary phone number. */
			Telephone: DevKit.Controls.String;
		}
		interface Navigation {
			CampaignResponse_Lead: DevKit.Controls.NavigationItem,
			CampaignResponse_QueueItem: DevKit.Controls.NavigationItem
		}
	}
	class FormCampaign_Response extends DevKit.IForm {
		/**
		* Campaign Response [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Campaign_Response */
		Body: DevKit.FormCampaign_Response.Body;
		/** The Header section of form Campaign_Response */
		Header: DevKit.FormCampaign_Response.Header;
		/** The Navigation of form Campaign_Response */
		Navigation: DevKit.FormCampaign_Response.Navigation;
		/** The SidePanes of form Campaign_Response */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormCampaign_Response2 {
		interface tab_new_campaign_response_Sections {
			description: DevKit.Controls.Section;
			details: DevKit.Controls.Section;
			summary: DevKit.Controls.Section;
		}
		interface tab_new_campaign_response extends DevKit.Controls.ITab {
			Section: tab_new_campaign_response_Sections;
		}
		interface Tabs {
			new_campaign_response: tab_new_campaign_response;
		}
		interface Body {
			Tab: Tabs;
			/** Enter the account, contact, or lead that submitted the campaign response, if it was received from an existing prospect or customer. */
			Customer: DevKit.Controls.Lookup;
			/** Type additional information to describe the campaign response, such as key discussion points or objectives. */
			Description: DevKit.Controls.String;
			/** Choose the parent campaign so that the campaign's response rate is tracked correctly. */
			RegardingObjectId: DevKit.Controls.Lookup;
			/** Select the type of response from the prospect or customer to indicate their interest in the campaign. */
			ResponseCode: DevKit.Controls.OptionSet;
			/** Type a short description about the objective or primary topic of the campaign response. */
			Subject: DevKit.Controls.String;
		}
	}
	class FormCampaign_Response2 extends DevKit.IForm {
		/**
		* Campaign Response [Quick Create]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Campaign_Response2 */
		Body: DevKit.FormCampaign_Response2.Body;
	}
	class CampaignResponseApi {
		/**
		* DynamicsCrm.DevKit CampaignResponseApi
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
		/** For internal use only. */
		ActivityAdditionalParams: string;
		/** Unique identifier of the campaign response. */
		ActivityId: string;
		/** Type the number of minutes spent on this activity. The duration is used in reporting. */
		ActualDurationMinutes: number;
		/** Enter the date when the campaign response was actually completed. */
		ActualEnd_UtcDateOnly: Date;
		/** Enter the actual start date and time for the campaign response. */
		ActualStart_UtcDateOnly: Date;
		/** Type a category to identify the campaign response type, such as new business development or customer retention, to tie the campaign response to a business group or function. */
		Category: string;
		/** Select how the response was received, such as phone, letter, fax, or email. */
		ChannelTypeCode: OptionSet.CampaignResponse.ChannelTypeCode;
		/** Shows how contact about the social activity originated, such as from Twitter or Facebook. This field is read-only. */
		Community: OptionSet.CampaignResponse.Community;
		/** Type the name of the company if the campaign response was received from a new prospect or customer. */
		CompanyName: string;
		/** Unique identifier of the user who created the activity. */
		readonly CreatedBy: string;
		/** Date and time when the activity was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the activitypointer. */
		readonly CreatedOnBehalfBy: string;
		/** Date and time when the delivery of the activity was last attempted. */
		readonly DeliveryLastAttemptedOn_UtcDateAndTime: Date;
		/** Priority of delivery of the activity to the email server. */
		DeliveryPriorityCode: OptionSet.CampaignResponse.DeliveryPriorityCode;
		/** Type additional information to describe the campaign response, such as key discussion points or objectives. */
		Description: string;
		/** Type the responder's email address. */
		EMailAddress: string;
		/** The message id of activity which is returned from Exchange Server. */
		ExchangeItemId: string;
		/** Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency. */
		readonly ExchangeRate: number;
		/** Shows the web link of Activity of type email. */
		ExchangeWebLink: string;
		/** Type the responder's fax number. */
		Fax: string;
		/** Type the responder's first name if the campaign response was received from a new prospect or customer. */
		FirstName: string;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Type of instance of a recurring series. */
		readonly InstanceTypeCode: OptionSet.CampaignResponse.InstanceTypeCode;
		/** Specifies whether the campaign response was billed as part of resolving a case. */
		IsBilled: boolean;
		/** For internal use only. */
		IsMapiPrivate: boolean;
		/** Information regarding whether the activity is a regular activity type or event type. */
		readonly IsRegularActivity: boolean;
		/** Specifies whether the campaign response is created by a workflow rule. */
		IsWorkflowCreated: boolean;
		/** Type the responder's last name if the campaign response was received from a new prospect or customer. */
		LastName: string;
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
		/** Choose the phone call, email, fax, letter, or appointment activity that led the prospect or customer to respond to the campaign. */
		originatingactivityid_appointment: string;
		/** Choose the phone call, email, fax, letter, or appointment activity that led the prospect or customer to respond to the campaign. */
		originatingactivityid_email: string;
		/** Choose the phone call, email, fax, letter, or appointment activity that led the prospect or customer to respond to the campaign. */
		originatingactivityid_fax: string;
		/** Choose the phone call, email, fax, letter, or appointment activity that led the prospect or customer to respond to the campaign. */
		originatingactivityid_letter: string;
		/** Choose the phone call, email, fax, letter, or appointment activity that led the prospect or customer to respond to the campaign. */
		originatingactivityid_phonecall: string;
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
		PriorityCode: OptionSet.CampaignResponse.PriorityCode;
		/** Unique identifier of the Process. */
		ProcessId: string;
		/** Type a promotional code to track sales related to the campaign response or to allow the responder to redeem a discount offer. */
		PromotionCodeName: string;
		/** Enter the date when the campaign response was received. */
		ReceivedOn_UtcDateOnly: Date;
		/** Choose the parent campaign so that the campaign's response rate is tracked correctly. */
		regardingobjectid_bulkoperation_campaignresponse: string;
		/** Choose the parent campaign so that the campaign's response rate is tracked correctly. */
		regardingobjectid_campaign_campaignresponse: string;
		/** Select the type of response from the prospect or customer to indicate their interest in the campaign. */
		ResponseCode: OptionSet.CampaignResponse.ResponseCode;
		/** Scheduled duration of the campaign response in minutes. */
		readonly ScheduledDurationMinutes: number;
		/** Enter the expected due date and time for the activity to be completed to provide details about the timing of the campaign response. */
		ScheduledEnd_UtcDateOnly: Date;
		/** Enter the expected start date and time for the activity to provide details about the timing of the campaign response. */
		ScheduledStart_UtcDateOnly: Date;
		/** Unique identifier of the mailbox associated with the sender of the email message. */
		readonly SenderMailboxId: string;
		/** Date and time when the activity was sent. */
		readonly SentOn_UtcDateAndTime: Date;
		/** Uniqueidentifier specifying the id of recurring series of an instance. */
		readonly SeriesId: string;
		/** Unique identifier for the associated service. */
		ServiceId: string;
		/** Choose the service level agreement (SLA) that you want to apply to the case record. */
		SLAId: string;
		/** Last SLA that was applied to this case. This field is for internal use only. */
		readonly SLAInvokedId: string;
		/** Shows the date and time by which the activities are sorted. */
		SortDate_UtcDateAndTime: Date;
		/** Unique identifier of the Stage. */
		StageId: string;
		/** Shows whether the campaign response is open, closed, or canceled. Closed and canceled campaign responses are read-only and can't be edited. */
		StateCode: OptionSet.CampaignResponse.StateCode;
		/** Select the campaign response's status. */
		StatusCode: OptionSet.CampaignResponse.StatusCode;
		/** Type a subcategory to identify the campaign response type and relate the activity to a specific product, sales region, business group, or other function. */
		Subcategory: string;
		/** Type a short description about the objective or primary topic of the campaign response. */
		Subject: string;
		/** Type the responder's primary phone number. */
		Telephone: string;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
		TransactionCurrencyId: string;
		/** For internal use only. */
		TraversedPath: string;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version number of the activity. */
		readonly VersionNumber: number;
		/** Type the phonetic spelling of the company name, if specified in Japanese, to make sure the name is pronounced correctly in phone calls and other communications. */
		YomiCompanyName: string;
		/** Type the phonetic spelling of the campaign responder's first name, if specified in Japanese, to make sure the name is pronounced correctly in phone calls and other communications. */
		YomiFirstName: string;
		/** Type the phonetic spelling of the campaign responder's last name, if specified in Japanese, to make sure the name is pronounced correctly in phone calls and other communications. */
		YomiLastName: string;
		/** The array of object that can cast object to ActivityPartyApi class */
		ActivityParties: Array<unknown>;
		readonly FormattedValue: {
			/** For internal use only. */
			readonly ActivityAdditionalParams: string;
			/** Unique identifier of the campaign response. */
			readonly ActivityId: string;
			/** Type the number of minutes spent on this activity. The duration is used in reporting. */
			readonly ActualDurationMinutes: string;
			/** Enter the date when the campaign response was actually completed. */
			readonly ActualEnd_UtcDateOnly: string;
			/** Enter the actual start date and time for the campaign response. */
			readonly ActualStart_UtcDateOnly: string;
			/** Type a category to identify the campaign response type, such as new business development or customer retention, to tie the campaign response to a business group or function. */
			readonly Category: string;
			/** Select how the response was received, such as phone, letter, fax, or email. */
			readonly ChannelTypeCode: string;
			/** Shows how contact about the social activity originated, such as from Twitter or Facebook. This field is read-only. */
			readonly Community: string;
			/** Type the name of the company if the campaign response was received from a new prospect or customer. */
			readonly CompanyName: string;
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
			/** Type additional information to describe the campaign response, such as key discussion points or objectives. */
			readonly Description: string;
			/** Type the responder's email address. */
			readonly EMailAddress: string;
			/** The message id of activity which is returned from Exchange Server. */
			readonly ExchangeItemId: string;
			/** Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency. */
			readonly ExchangeRate: string;
			/** Shows the web link of Activity of type email. */
			readonly ExchangeWebLink: string;
			/** Type the responder's fax number. */
			readonly Fax: string;
			/** Type the responder's first name if the campaign response was received from a new prospect or customer. */
			readonly FirstName: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Type of instance of a recurring series. */
			readonly InstanceTypeCode: string;
			/** Specifies whether the campaign response was billed as part of resolving a case. */
			readonly IsBilled: string;
			/** For internal use only. */
			readonly IsMapiPrivate: string;
			/** Information regarding whether the activity is a regular activity type or event type. */
			readonly IsRegularActivity: string;
			/** Specifies whether the campaign response is created by a workflow rule. */
			readonly IsWorkflowCreated: string;
			/** Type the responder's last name if the campaign response was received from a new prospect or customer. */
			readonly LastName: string;
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
			/** Choose the phone call, email, fax, letter, or appointment activity that led the prospect or customer to respond to the campaign. */
			readonly originatingactivityid_appointment: string;
			/** Choose the phone call, email, fax, letter, or appointment activity that led the prospect or customer to respond to the campaign. */
			readonly originatingactivityid_email: string;
			/** Choose the phone call, email, fax, letter, or appointment activity that led the prospect or customer to respond to the campaign. */
			readonly originatingactivityid_fax: string;
			/** Choose the phone call, email, fax, letter, or appointment activity that led the prospect or customer to respond to the campaign. */
			readonly originatingactivityid_letter: string;
			/** Choose the phone call, email, fax, letter, or appointment activity that led the prospect or customer to respond to the campaign. */
			readonly originatingactivityid_phonecall: string;
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
			/** Type a promotional code to track sales related to the campaign response or to allow the responder to redeem a discount offer. */
			readonly PromotionCodeName: string;
			/** Enter the date when the campaign response was received. */
			readonly ReceivedOn_UtcDateOnly: string;
			/** Choose the parent campaign so that the campaign's response rate is tracked correctly. */
			readonly regardingobjectid_bulkoperation_campaignresponse: string;
			/** Choose the parent campaign so that the campaign's response rate is tracked correctly. */
			readonly regardingobjectid_campaign_campaignresponse: string;
			/** Select the type of response from the prospect or customer to indicate their interest in the campaign. */
			readonly ResponseCode: string;
			/** Scheduled duration of the campaign response in minutes. */
			readonly ScheduledDurationMinutes: string;
			/** Enter the expected due date and time for the activity to be completed to provide details about the timing of the campaign response. */
			readonly ScheduledEnd_UtcDateOnly: string;
			/** Enter the expected start date and time for the activity to provide details about the timing of the campaign response. */
			readonly ScheduledStart_UtcDateOnly: string;
			/** Unique identifier of the mailbox associated with the sender of the email message. */
			readonly SenderMailboxId: string;
			/** Date and time when the activity was sent. */
			readonly SentOn_UtcDateAndTime: string;
			/** Uniqueidentifier specifying the id of recurring series of an instance. */
			readonly SeriesId: string;
			/** Unique identifier for the associated service. */
			readonly ServiceId: string;
			/** Choose the service level agreement (SLA) that you want to apply to the case record. */
			readonly SLAId: string;
			/** Last SLA that was applied to this case. This field is for internal use only. */
			readonly SLAInvokedId: string;
			/** Shows the date and time by which the activities are sorted. */
			readonly SortDate_UtcDateAndTime: string;
			/** Unique identifier of the Stage. */
			readonly StageId: string;
			/** Shows whether the campaign response is open, closed, or canceled. Closed and canceled campaign responses are read-only and can't be edited. */
			readonly StateCode: string;
			/** Select the campaign response's status. */
			readonly StatusCode: string;
			/** Type a subcategory to identify the campaign response type and relate the activity to a specific product, sales region, business group, or other function. */
			readonly Subcategory: string;
			/** Type a short description about the objective or primary topic of the campaign response. */
			readonly Subject: string;
			/** Type the responder's primary phone number. */
			readonly Telephone: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
			readonly TransactionCurrencyId: string;
			/** For internal use only. */
			readonly TraversedPath: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version number of the activity. */
			readonly VersionNumber: string;
			/** Type the phonetic spelling of the company name, if specified in Japanese, to make sure the name is pronounced correctly in phone calls and other communications. */
			readonly YomiCompanyName: string;
			/** Type the phonetic spelling of the campaign responder's first name, if specified in Japanese, to make sure the name is pronounced correctly in phone calls and other communications. */
			readonly YomiFirstName: string;
			/** Type the phonetic spelling of the campaign responder's last name, if specified in Japanese, to make sure the name is pronounced correctly in phone calls and other communications. */
			readonly YomiLastName: string;
		}
	}
}
declare namespace OptionSet {
	namespace CampaignResponse {
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
			/** 5 */
			Appointment,
			/** 1 */
			Email,
			/** 3 */
			Fax,
			/** 4 */
			Letter,
			/** 6 */
			Others,
			/** 2 */
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
		enum OriginatingActivityIdTypeCode {
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
		enum ResponseCode {
			/** 3 */
			Do_Not_Send_Marketing_Materials,
			/** 4 */
			Error,
			/** 1 */
			Interested,
			/** 2 */
			Not_Interested
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
			/** 1 */
			Open
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