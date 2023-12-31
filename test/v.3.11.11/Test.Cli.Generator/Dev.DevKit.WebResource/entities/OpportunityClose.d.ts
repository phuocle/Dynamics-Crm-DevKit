//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormOpportunityClose_Information {
		interface tab_resolution_Sections {
			information: DevKit.Controls.Section;
		}
		interface tab_resolution extends DevKit.Controls.ITab {
			Section: tab_resolution_Sections;
		}
		interface Tabs {
			resolution: tab_resolution;
		}
		interface Body {
			Tab: Tabs;
			/** Actual end time of the opportunity close activity. */
			ActualEnd: DevKit.Controls.Date;
			/** Actual revenue generated for the opportunity. */
			ActualRevenue: DevKit.Controls.Money;
			/** Unique identifier of the competitor with which the opportunity close activity is associated. */
			CompetitorId: DevKit.Controls.Lookup;
			/** Activity that is created automatically when an opportunity is closed, containing information such as the description of the closing and actual revenue. */
			Description: DevKit.Controls.String;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class FormOpportunityClose_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form OpportunityClose_Information */
		Body: DevKit.FormOpportunityClose_Information.Body;
		/** The Process of form OpportunityClose_Information */
		Process: DevKit.FormOpportunityClose_Information.Process;
		/** The SidePanes of form OpportunityClose_Information */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormOpportunity_Close {
		interface tab_OpportunityClose_Sections {
			quickOpportunityClose_column1_section1: DevKit.Controls.Section;
			quickOpportunityClose_column2_section1: DevKit.Controls.Section;
			quickOpportunityClose_column3_section1: DevKit.Controls.Section;
		}
		interface tab_OpportunityClose extends DevKit.Controls.ITab {
			Section: tab_OpportunityClose_Sections;
		}
		interface Tabs {
			OpportunityClose: tab_OpportunityClose;
		}
		interface Body {
			Tab: Tabs;
			/** Actual end time of the opportunity close activity. */
			ActualEnd: DevKit.Controls.Date;
			/** Actual revenue generated for the opportunity. */
			ActualRevenue: DevKit.Controls.Money;
			/** Unique identifier of the competitor with which the opportunity close activity is associated. */
			CompetitorId: DevKit.Controls.Lookup;
			/** Activity that is created automatically when an opportunity is closed, containing information such as the description of the closing and actual revenue. */
			Description: DevKit.Controls.String;
			/** Unique identifier of the opportunity closed. */
			OpportunityId: DevKit.Controls.Lookup;
			/** Status of the opportunity. */
			OpportunityStateCode: DevKit.Controls.OptionSet;
			/** Status reason of the opportunity. */
			OpportunityStatusCode: DevKit.Controls.OptionSet;
			/** Subject associated with the opportunity close activity. */
			Subject: DevKit.Controls.String;
			/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
			TransactionCurrencyId: DevKit.Controls.Lookup;
		}
	}
	class FormOpportunity_Close extends DevKit.IForm {
		/**
		* Opportunity Close [Quick Create]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Opportunity_Close */
		Body: DevKit.FormOpportunity_Close.Body;
	}
	class OpportunityCloseApi {
		/**
		* DynamicsCrm.DevKit OpportunityCloseApi
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
		/** Unique identifier of the opportunity close activity. */
		ActivityId: string;
		/** Actual duration of the opportunity close activity in minutes. */
		ActualDurationMinutes: number;
		/** Actual end time of the opportunity close activity. */
		ActualEnd_UtcDateOnly: Date;
		/** Actual revenue generated for the opportunity. */
		ActualRevenue: number;
		/** Value of the Actual Revenue in base currency. */
		readonly ActualRevenue_Base: number;
		/** Actual start time of the opportunity close activity. */
		ActualStart_UtcDateOnly: Date;
		/** Category of the opportunity close activity. */
		Category: string;
		/** Shows how contact about the social activity originated, such as from Twitter or Facebook. This field is read-only. */
		Community: OptionSet.OpportunityClose.Community;
		/** Unique identifier of the competitor with which the opportunity close activity is associated. */
		CompetitorId: string;
		/** Unique identifier of the user who created the opportunity close activity. */
		readonly CreatedBy: string;
		/** Shows the external party who created the record. */
		readonly CreatedByExternalParty: string;
		/** Date and time when the opportunity close activity was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the opportunityclose. */
		readonly CreatedOnBehalfBy: string;
		/** Date and time when the delivery of the activity was last attempted. */
		readonly DeliveryLastAttemptedOn_UtcDateAndTime: Date;
		/** Priority of delivery of the activity to the email server. */
		DeliveryPriorityCode: OptionSet.OpportunityClose.DeliveryPriorityCode;
		/** Activity that is created automatically when an opportunity is closed, containing information such as the description of the closing and actual revenue. */
		Description: string;
		/** The message id of activity which is returned from Exchange Server. */
		ExchangeItemId: string;
		/** Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency. */
		readonly ExchangeRate: number;
		/** Shows the web link of Activity of type email. */
		ExchangeWebLink: string;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Type of instance of a recurring series. */
		readonly InstanceTypeCode: OptionSet.OpportunityClose.InstanceTypeCode;
		/** Information about whether the opportunity close activity was billed as part of resolving a case. */
		IsBilled: boolean;
		/** For internal use only. */
		IsMapiPrivate: boolean;
		/** Information regarding whether the activity is a regular activity type or event type. */
		readonly IsRegularActivity: boolean;
		/** Information that specifies if the opportunity close activity was created from a workflow rule. */
		IsWorkflowCreated: boolean;
		/** Contains the date and time stamp of the last on hold time. */
		LastOnHoldTime_UtcDateAndTime: Date;
		/** Left the voice mail */
		LeftVoiceMail: boolean;
		/** Unique identifier of the user who last modified the opportunity close activity. */
		readonly ModifiedBy: string;
		/** Shows the external party who modified the record. */
		readonly ModifiedByExternalParty: string;
		/** Date and time when the opportunity close activity was last modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who last modified the opportunityclose. */
		readonly ModifiedOnBehalfBy: string;
		/** Shows how long, in minutes, that the record was on hold. */
		readonly OnHoldTime: number;
		/** Unique identifier of the opportunity closed. */
		OpportunityId: string;
		/** Status of the opportunity. */
		OpportunityStateCode: OptionSet.OpportunityClose.OpportunityStateCode;
		/** Status reason of the opportunity. */
		OpportunityStatusCode: OptionSet.OpportunityClose.OpportunityStatusCode;
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
		/** Priority of the activity. */
		PriorityCode: OptionSet.OpportunityClose.PriorityCode;
		/** Unique identifier of the Process. */
		ProcessId: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_account_opportunityclose: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_bookableresourcebooking_opportunityclose: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_bookableresourcebookingheader_opportunityclose: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_bulkoperation_opportunityclose: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_campaign_opportunityclose: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_campaignactivity_opportunityclose: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_entitlement_opportunityclose: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_entitlementtemplate_opportunityclose: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_incident_opportunityclose: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_new_interactionforemail_opportunityclose: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_knowledgearticle_opportunityclose: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_knowledgebaserecord_opportunityclose: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_lead_opportunityclose: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_customerasset_opportunityclose: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_playbookinstance_opportunityclose: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_opportunity_opportunityclose: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_site_opportunityclose: string;
		/** Scheduled duration of the opportunity close activity, specified in minutes. */
		readonly ScheduledDurationMinutes: number;
		/** Scheduled end time of the opportunity close activity. */
		ScheduledEnd_UtcDateOnly: Date;
		/** Scheduled start time of the opportunity close activity. */
		ScheduledStart_UtcDateOnly: Date;
		/** Unique identifier of the mailbox associated with the sender of the email message. */
		readonly SenderMailboxId: string;
		/** Date and time when the activity was sent. */
		readonly SentOn_UtcDateAndTime: Date;
		/** Uniqueidentifier specifying the id of recurring series of an instance. */
		readonly SeriesId: string;
		/** Unique identifier of the service with which the opportunity close activity is associated. */
		ServiceId: string;
		/** Choose the service level agreement (SLA) that you want to apply to the case record. */
		SLAId: string;
		/** Last SLA that was applied to this case. This field is for internal use only. */
		readonly SLAInvokedId: string;
		/** Shows the date and time by which the activities are sorted. */
		SortDate_UtcDateAndTime: Date;
		/** Unique identifier of the Stage. */
		StageId: string;
		/** Shows whether the opportunity close activity is open, completed, or canceled.  By default, opportunity close activities are completed unless the opportunity is reactivated,  which updates them to canceled. */
		StateCode: OptionSet.OpportunityClose.StateCode;
		/** Reason for the status of the opportunity close activity. */
		StatusCode: OptionSet.OpportunityClose.StatusCode;
		/** Subcategory of the opportunity close activity. */
		Subcategory: string;
		/** Subject associated with the opportunity close activity. */
		Subject: string;
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
		/** The array of object that can cast object to ActivityPartyApi class */
		ActivityParties: Array<unknown>;
		readonly FormattedValue: {
			/** Additional information provided by the external application as JSON. For internal use only. */
			readonly ActivityAdditionalParams: string;
			/** Unique identifier of the opportunity close activity. */
			readonly ActivityId: string;
			/** Actual duration of the opportunity close activity in minutes. */
			readonly ActualDurationMinutes: string;
			/** Actual end time of the opportunity close activity. */
			readonly ActualEnd_UtcDateOnly: string;
			/** Actual revenue generated for the opportunity. */
			readonly ActualRevenue: string;
			/** Value of the Actual Revenue in base currency. */
			readonly ActualRevenue_Base: string;
			/** Actual start time of the opportunity close activity. */
			readonly ActualStart_UtcDateOnly: string;
			/** Category of the opportunity close activity. */
			readonly Category: string;
			/** Shows how contact about the social activity originated, such as from Twitter or Facebook. This field is read-only. */
			readonly Community: string;
			/** Unique identifier of the competitor with which the opportunity close activity is associated. */
			readonly CompetitorId: string;
			/** Unique identifier of the user who created the opportunity close activity. */
			readonly CreatedBy: string;
			/** Shows the external party who created the record. */
			readonly CreatedByExternalParty: string;
			/** Date and time when the opportunity close activity was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the opportunityclose. */
			readonly CreatedOnBehalfBy: string;
			/** Date and time when the delivery of the activity was last attempted. */
			readonly DeliveryLastAttemptedOn_UtcDateAndTime: string;
			/** Priority of delivery of the activity to the email server. */
			readonly DeliveryPriorityCode: string;
			/** Activity that is created automatically when an opportunity is closed, containing information such as the description of the closing and actual revenue. */
			readonly Description: string;
			/** The message id of activity which is returned from Exchange Server. */
			readonly ExchangeItemId: string;
			/** Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency. */
			readonly ExchangeRate: string;
			/** Shows the web link of Activity of type email. */
			readonly ExchangeWebLink: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Type of instance of a recurring series. */
			readonly InstanceTypeCode: string;
			/** Information about whether the opportunity close activity was billed as part of resolving a case. */
			readonly IsBilled: string;
			/** For internal use only. */
			readonly IsMapiPrivate: string;
			/** Information regarding whether the activity is a regular activity type or event type. */
			readonly IsRegularActivity: string;
			/** Information that specifies if the opportunity close activity was created from a workflow rule. */
			readonly IsWorkflowCreated: string;
			/** Contains the date and time stamp of the last on hold time. */
			readonly LastOnHoldTime_UtcDateAndTime: string;
			/** Left the voice mail */
			readonly LeftVoiceMail: string;
			/** Unique identifier of the user who last modified the opportunity close activity. */
			readonly ModifiedBy: string;
			/** Shows the external party who modified the record. */
			readonly ModifiedByExternalParty: string;
			/** Date and time when the opportunity close activity was last modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who last modified the opportunityclose. */
			readonly ModifiedOnBehalfBy: string;
			/** Shows how long, in minutes, that the record was on hold. */
			readonly OnHoldTime: string;
			/** Unique identifier of the opportunity closed. */
			readonly OpportunityId: string;
			/** Status of the opportunity. */
			readonly OpportunityStateCode: string;
			/** Status reason of the opportunity. */
			readonly OpportunityStatusCode: string;
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
			/** Priority of the activity. */
			readonly PriorityCode: string;
			/** Unique identifier of the Process. */
			readonly ProcessId: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_account_opportunityclose: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_bookableresourcebooking_opportunityclose: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_bookableresourcebookingheader_opportunityclose: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_bulkoperation_opportunityclose: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_campaign_opportunityclose: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_campaignactivity_opportunityclose: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_entitlement_opportunityclose: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_entitlementtemplate_opportunityclose: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_incident_opportunityclose: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_new_interactionforemail_opportunityclose: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_knowledgearticle_opportunityclose: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_knowledgebaserecord_opportunityclose: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_lead_opportunityclose: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_customerasset_opportunityclose: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_playbookinstance_opportunityclose: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_opportunity_opportunityclose: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_site_opportunityclose: string;
			/** Scheduled duration of the opportunity close activity, specified in minutes. */
			readonly ScheduledDurationMinutes: string;
			/** Scheduled end time of the opportunity close activity. */
			readonly ScheduledEnd_UtcDateOnly: string;
			/** Scheduled start time of the opportunity close activity. */
			readonly ScheduledStart_UtcDateOnly: string;
			/** Unique identifier of the mailbox associated with the sender of the email message. */
			readonly SenderMailboxId: string;
			/** Date and time when the activity was sent. */
			readonly SentOn_UtcDateAndTime: string;
			/** Uniqueidentifier specifying the id of recurring series of an instance. */
			readonly SeriesId: string;
			/** Unique identifier of the service with which the opportunity close activity is associated. */
			readonly ServiceId: string;
			/** Choose the service level agreement (SLA) that you want to apply to the case record. */
			readonly SLAId: string;
			/** Last SLA that was applied to this case. This field is for internal use only. */
			readonly SLAInvokedId: string;
			/** Shows the date and time by which the activities are sorted. */
			readonly SortDate_UtcDateAndTime: string;
			/** Unique identifier of the Stage. */
			readonly StageId: string;
			/** Shows whether the opportunity close activity is open, completed, or canceled.  By default, opportunity close activities are completed unless the opportunity is reactivated,  which updates them to canceled. */
			readonly StateCode: string;
			/** Reason for the status of the opportunity close activity. */
			readonly StatusCode: string;
			/** Subcategory of the opportunity close activity. */
			readonly Subcategory: string;
			/** Subject associated with the opportunity close activity. */
			readonly Subject: string;
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
		}
	}
}
declare namespace OptionSet {
	namespace OpportunityClose {
		enum ActivityTypeCode {
			/** 10088 */
			Activity_record_for_the_Teams_chat,
			/** 4201 */
			Appointment,
			/** 10473 */
			Booking_Alert,
			/** 4402 */
			Campaign_Activity,
			/** 4401 */
			Campaign_Response,
			/** 4206 */
			Case_Resolution,
			/** 10743 */
			Conversation,
			/** 10330 */
			Customer_Voice_alert,
			/** 10340 */
			Customer_Voice_survey_invite,
			/** 10342 */
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
			/** 10857 */
			Outbound_message,
			/** 4210 */
			Phone_Call,
			/** 10489 */
			Project_Service_Approval,
			/** 4406 */
			Quick_Campaign,
			/** 4211 */
			Quote_Close,
			/** 4251 */
			Recurring_Appointment,
			/** 4214 */
			Service_Activity,
			/** 10760 */
			Session,
			/** 4212 */
			Task
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
		enum OpportunityIdType {
		}
		enum OpportunityStateCode {
			/** 2 */
			Lost,
			/** 0 */
			Open,
			/** 1 */
			Won
		}
		enum OpportunityStatusCode {
			/** 4 */
			Canceled,
			/** 1 */
			In_Progress,
			/** 2 */
			On_Hold,
			/** 5 */
			Out_Sold,
			/** 3 */
			Won
		}
		enum OwnerIdType {
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
			Completed,
			/** 0 */
			Open
		}
		enum StatusCode {
			/** 3 */
			Canceled,
			/** 2 */
			Completed,
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.11.11','WebApiVersion':'2'}