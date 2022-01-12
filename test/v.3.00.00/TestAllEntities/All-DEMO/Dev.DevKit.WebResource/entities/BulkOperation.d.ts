//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormQuick_Campaign {
		interface Header extends DevKit.Controls.IHeader {
			/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			CreatedOn: DevKit.Controls.DateTime;
			/** Choose the activity to create that determines how target prospects or customers in this quick campaign are contacted. */
			CreatedRecordTypeCode: DevKit.Controls.OptionSet;
			/** Select the quick campaign's status. */
			StatusCode: DevKit.Controls.OptionSet;
			/** Select the type of records targeted in the quick campaign to identify the target audience. */
			TargetedRecordTypeCode: DevKit.Controls.OptionSet;
		}
		interface tab_Responses_Sections {
			Responses: DevKit.Controls.Section;
		}
		interface tab_Summary_Sections {
			excludedMembers: DevKit.Controls.Section;
			Information: DevKit.Controls.Section;
			RELATED_PANE: DevKit.Controls.Section;
			selectedMembers: DevKit.Controls.Section;
		}
		interface tab_Responses extends DevKit.Controls.ITab {
			Section: tab_Responses_Sections;
		}
		interface tab_Summary extends DevKit.Controls.ITab {
			Section: tab_Summary_Sections;
		}
		interface Tabs {
			Responses: tab_Responses;
			Summary: tab_Summary;
		}
		interface Body {
			Tab: Tabs;
			/** Type additional information to describe the quick campaign, such as the products or services offered. */
			Description: DevKit.Controls.String;
			/** Number of records which failed in the bulk operation. */
			FailureCount: DevKit.Controls.Integer;
			notescontrol: DevKit.Controls.Note;
			/** Unique identifier of the user or team who owns the activity. */
			OwnerId: DevKit.Controls.Lookup;
			/** Type a short description about the objective or primary topic of the quick campaign. */
			Subject: DevKit.Controls.String;
			/** Number of records which succeeded in the bulk operation. */
			SuccessCount: DevKit.Controls.Integer;
		}
		interface Navigation {
			navRelationshipActivities: DevKit.Controls.NavigationItem,
			navRelationshipBulkOperationLogs: DevKit.Controls.NavigationItem
		}
		interface Grid {
			excluded_accounts: DevKit.Controls.Grid;
			excluded_contacts: DevKit.Controls.Grid;
			excluded_leads: DevKit.Controls.Grid;
			Responses: DevKit.Controls.Grid;
			selected_accounts: DevKit.Controls.Grid;
			selected_contacts: DevKit.Controls.Grid;
			selected_leads: DevKit.Controls.Grid;
		}
	}
	class FormQuick_Campaign extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form Quick_Campaign Main Form
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Quick_Campaign */
		Body: DevKit.FormQuick_Campaign.Body;
		/** The Header section of form Quick_Campaign */
		Header: DevKit.FormQuick_Campaign.Header;
		/** The Navigation of form Quick_Campaign */
		Navigation: DevKit.FormQuick_Campaign.Navigation;
		/** The Grid of form Quick_Campaign */
		Grid: DevKit.FormQuick_Campaign.Grid;
		/** The SidePanes of form Quick_Campaign */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormQuick_Campaign_deprecated {
		interface Header extends DevKit.Controls.IHeader {
			/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			CreatedOn: DevKit.Controls.DateTime;
			/** Choose the activity to create that determines how target prospects or customers in this quick campaign are contacted. */
			CreatedRecordTypeCode: DevKit.Controls.OptionSet;
			/** Select the quick campaign's status. */
			StatusCode: DevKit.Controls.OptionSet;
			/** Select the type of records targeted in the quick campaign to identify the target audience. */
			TargetedRecordTypeCode: DevKit.Controls.OptionSet;
		}
		interface tab_Responses_Sections {
			Responses: DevKit.Controls.Section;
		}
		interface tab_Summary_Sections {
			excludedMembers: DevKit.Controls.Section;
			Information: DevKit.Controls.Section;
			RELATED_PANE: DevKit.Controls.Section;
			selectedMembers: DevKit.Controls.Section;
		}
		interface tab_Responses extends DevKit.Controls.ITab {
			Section: tab_Responses_Sections;
		}
		interface tab_Summary extends DevKit.Controls.ITab {
			Section: tab_Summary_Sections;
		}
		interface Tabs {
			Responses: tab_Responses;
			Summary: tab_Summary;
		}
		interface Body {
			Tab: Tabs;
			/** Type additional information to describe the quick campaign, such as the products or services offered. */
			Description: DevKit.Controls.String;
			/** Number of records which failed in the bulk operation. */
			FailureCount: DevKit.Controls.Integer;
			notescontrol: DevKit.Controls.Note;
			/** Unique identifier of the user or team who owns the activity. */
			OwnerId: DevKit.Controls.Lookup;
			/** Type a short description about the objective or primary topic of the quick campaign. */
			Subject: DevKit.Controls.String;
			/** Number of records which succeeded in the bulk operation. */
			SuccessCount: DevKit.Controls.Integer;
		}
		interface Navigation {
			navRelationshipActivities: DevKit.Controls.NavigationItem,
			navRelationshipBulkOperationLogs: DevKit.Controls.NavigationItem
		}
		interface Grid {
			accounts: DevKit.Controls.Grid;
			accounts_uci: DevKit.Controls.Grid;
			contacts: DevKit.Controls.Grid;
			contacts_uci: DevKit.Controls.Grid;
			excluded_accounts_uci: DevKit.Controls.Grid;
			excluded_contacts_uci: DevKit.Controls.Grid;
			excluded_leads_uci: DevKit.Controls.Grid;
			leads: DevKit.Controls.Grid;
			leads_uci: DevKit.Controls.Grid;
			Responses: DevKit.Controls.Grid;
		}
	}
	class FormQuick_Campaign_deprecated extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form Quick_Campaign_deprecated Main Form
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Quick_Campaign_deprecated */
		Body: DevKit.FormQuick_Campaign_deprecated.Body;
		/** The Header section of form Quick_Campaign_deprecated */
		Header: DevKit.FormQuick_Campaign_deprecated.Header;
		/** The Navigation of form Quick_Campaign_deprecated */
		Navigation: DevKit.FormQuick_Campaign_deprecated.Navigation;
		/** The Grid of form Quick_Campaign_deprecated */
		Grid: DevKit.FormQuick_Campaign_deprecated.Grid;
		/** The SidePanes of form Quick_Campaign_deprecated */
		SidePanes: DevKit.SidePanes;
	}
	class BulkOperationApi {
		/**
		* DynamicsCrm.DevKit BulkOperationApi
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
		/** Unique identifier of the bulk operation. */
		ActivityId: DevKit.WebApi.GuidValue;
		/** Actual duration of the bulk operation in minutes. */
		ActualDurationMinutes: DevKit.WebApi.IntegerValueReadonly;
		/** Shows the date and time when the quick campaign was completed or canceled. */
		ActualEnd_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Shows the date and time when the activity was started or created. */
		ActualStart_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows the number for the quick campaign record, used to identify the quick campaign. */
		BulkOperationNumber: DevKit.WebApi.StringValueReadonly;
		/** Shows how contact about the social activity originated, such as from Twitter or Facebook. This field is read-only. */
		Community: DevKit.WebApi.OptionSetValue;
		/** Shows who created the record. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the bulk operation. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Choose the activity to create that determines how target prospects or customers in this quick campaign are contacted. */
		CreatedRecordTypeCode: DevKit.WebApi.OptionSetValue;
		/** Date and time when the delivery of the activity was last attempted. */
		DeliveryLastAttemptedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Priority of delivery of the activity to the email server. */
		DeliveryPriorityCode: DevKit.WebApi.OptionSetValue;
		/** Type additional information to describe the quick campaign, such as the products or services offered. */
		Description: DevKit.WebApi.StringValueReadonly;
		/** Shows the error code that is used to troubleshoot issues in the quick campaign. */
		ErrorNumber: DevKit.WebApi.IntegerValue;
		/** The message id of activity which is returned from Exchange Server. */
		ExchangeItemId: DevKit.WebApi.StringValue;
		/** Exchange rate for the currency associated with the activitypointer with respect to the base currency. */
		ExchangeRate: DevKit.WebApi.DecimalValueReadonly;
		/** Shows the web link of Activity of type email. */
		ExchangeWebLink: DevKit.WebApi.StringValue;
		/** Number of records which failed in the bulk operation. */
		FailureCount: DevKit.WebApi.IntegerValue;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Type of instance of a recurring series. */
		InstanceTypeCode: DevKit.WebApi.OptionSetValueReadonly;
		/** For internal use only. */
		IsBilled: DevKit.WebApi.BooleanValueReadonly;
		/** For internal use only. */
		IsMapiPrivate: DevKit.WebApi.BooleanValue;
		/** Information regarding whether the activity is a regular activity type or event type. */
		IsRegularActivity: DevKit.WebApi.BooleanValueReadonly;
		/** Specifies if the bulk operation was created from a workflow rule. */
		IsWorkflowCreated: DevKit.WebApi.BooleanValueReadonly;
		/** Contains the date and time stamp of the last on hold time. */
		LastOnHoldTime_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Left the voice mail */
		LeftVoiceMail: DevKit.WebApi.BooleanValue;
		/** Shows who last updated the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the bulk operation was last modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who last modified the bulk operation. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows how long, in minutes, that the record was on hold. */
		OnHoldTime: DevKit.WebApi.IntegerValueReadonly;
		/** Select the type of bulk operation process, such as quick campaign or campaign activity distribution. */
		OperationTypeCode: DevKit.WebApi.OptionSetValue;
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
		/** XML string that contains the parameters to the bulk operation. */
		Parameters: DevKit.WebApi.StringValue;
		/** For internal use only. */
		PostponeActivityProcessingUntil_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Priority of the activity. */
		PriorityCode: DevKit.WebApi.OptionSetValue;
		/** Unique identifier of the Process. */
		ProcessId: DevKit.WebApi.GuidValue;
		/** Choose the campaign from which the campaign activities were bulk-distributed. */
		regardingobjectid_campaignactivity_bulkoperation: DevKit.WebApi.LookupValue;
		/** Choose the campaign from which the campaign activities were bulk-distributed. */
		regardingobjectid_list: DevKit.WebApi.LookupValue;
		/** Scheduled duration of the bulk operation, specified in minutes. */
		ScheduledDurationMinutes: DevKit.WebApi.IntegerValueReadonly;
		/** Scheduled end date and time of the bulk operation. */
		ScheduledEnd_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValueReadonly;
		/** Scheduled start date and time of the bulk operation. */
		ScheduledStart_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValueReadonly;
		/** Unique identifier of the mailbox associated with the sender of the email message. */
		SenderMailboxId: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the activity was sent. */
		SentOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Uniqueidentifier specifying the id of recurring series of an instance. */
		SeriesId: DevKit.WebApi.GuidValueReadonly;
		/** Choose the service level agreement (SLA) that you want to apply to the case record. */
		SLAId: DevKit.WebApi.LookupValue;
		/** Last SLA that was applied to this case. This field is for internal use only. */
		SLAInvokedId: DevKit.WebApi.LookupValueReadonly;
		/** Shows the date and time by which the activities are sorted. */
		SortDate_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Unique identifier of the Stage. */
		StageId: DevKit.WebApi.GuidValue;
		/** Shows whether the quick campaign is open, closed, or canceled.  Closed or canceled quick campaigns are read-only and can't be edited. */
		StateCode: DevKit.WebApi.OptionSetValueReadonly;
		/** Select the quick campaign's status. */
		StatusCode: DevKit.WebApi.OptionSetValue;
		/** Type a short description about the objective or primary topic of the quick campaign. */
		Subject: DevKit.WebApi.StringValue;
		/** Number of records which succeeded in the bulk operation. */
		SuccessCount: DevKit.WebApi.IntegerValue;
		/** Select the type of records targeted in the quick campaign to identify the target audience. */
		TargetedRecordTypeCode: DevKit.WebApi.OptionSetValue;
		/** Number of members to target. */
		TargetMembersCount: DevKit.WebApi.IntegerValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the currency associated with the activitypointer. */
		TransactionCurrencyId: DevKit.WebApi.LookupValue;
		/** For internal use only. */
		TraversedPath: DevKit.WebApi.StringValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Version number of the activity. */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
		/** Information for bulk operation workflow. */
		WorkflowInfo: DevKit.WebApi.StringValue;
		/** The array of object that can cast object to ActivityPartyApi class */
		ActivityParties: Array<any>;
	}
}
declare namespace OptionSet {
	namespace BulkOperation {
		enum ActivityTypeCode {
			/** 4201 */
			Appointment,
			/** 10357 */
			Booking_Alert,
			/** 4402 */
			Campaign_Activity,
			/** 4401 */
			Campaign_Response,
			/** 4206 */
			Case_Resolution,
			/** 10644 */
			Conversation,
			/** 10261 */
			Customer_Voice_alert,
			/** 10271 */
			Customer_Voice_survey_invite,
			/** 10273 */
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
			/** 10752 */
			Outbound_message,
			/** 4210 */
			Phone_Call,
			/** 10387 */
			Project_Service_Approval,
			/** 4406 */
			Quick_Campaign,
			/** 4211 */
			Quote_Close,
			/** 4251 */
			Recurring_Appointment,
			/** 4214 */
			Service_Activity,
			/** 10659 */
			Session,
			/** 4212 */
			Task
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
		enum CreatedRecordTypeCode {
			/** 5 */
			Appointment,
			/** 4 */
			Email,
			/** 2 */
			Fax,
			/** 3 */
			Letter,
			/** 1 */
			Phone_Call,
			/** 6 */
			Send_Direct_Email
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
		enum OperationTypeCode {
			/** 2 */
			Create_Activities,
			/** 1 */
			Create_Opportunities,
			/** 4 */
			Distribute,
			/** 5 */
			Execute,
			/** 7 */
			Quick_Campaign,
			/** 3 */
			Send_Direct_Mail
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
			Aborted,
			/** 5 */
			Canceled,
			/** 4 */
			Completed,
			/** 2 */
			In_Progress,
			/** 1 */
			Pending
		}
		enum TargetedRecordTypeCode {
			/** 1 */
			Account,
			/** 2 */
			Contact,
			/** 4 */
			Lead
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