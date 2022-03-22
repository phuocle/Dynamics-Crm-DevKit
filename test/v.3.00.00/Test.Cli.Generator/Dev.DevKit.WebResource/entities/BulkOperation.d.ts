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
		interface Process extends DevKit.Controls.IProcess {
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
		* Quick Campaign [Main Form]
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
		/** The Process of form Quick_Campaign */
		Process: DevKit.FormQuick_Campaign.Process;
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
		interface Process extends DevKit.Controls.IProcess {
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
		* Quick Campaign (deprecated) [Main Form]
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
		/** The Process of form Quick_Campaign_deprecated */
		Process: DevKit.FormQuick_Campaign_deprecated.Process;
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
		/** Unique identifier of the bulk operation. */
		ActivityId: string;
		/** Actual duration of the bulk operation in minutes. */
		readonly ActualDurationMinutes: number;
		/** Shows the date and time when the quick campaign was completed or canceled. */
		ActualEnd_UtcDateAndTime: Date;
		/** Shows the date and time when the activity was started or created. */
		readonly ActualStart_UtcDateAndTime: Date;
		/** Shows the number for the quick campaign record, used to identify the quick campaign. */
		readonly BulkOperationNumber: string;
		/** Shows how contact about the social activity originated, such as from Twitter or Facebook. This field is read-only. */
		Community: OptionSet.BulkOperation.Community;
		/** Shows who created the record. */
		readonly CreatedBy: string;
		/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the bulk operation. */
		readonly CreatedOnBehalfBy: string;
		/** Choose the activity to create that determines how target prospects or customers in this quick campaign are contacted. */
		CreatedRecordTypeCode: OptionSet.BulkOperation.CreatedRecordTypeCode;
		/** Date and time when the delivery of the activity was last attempted. */
		readonly DeliveryLastAttemptedOn_UtcDateAndTime: Date;
		/** Priority of delivery of the activity to the email server. */
		DeliveryPriorityCode: OptionSet.BulkOperation.DeliveryPriorityCode;
		/** Type additional information to describe the quick campaign, such as the products or services offered. */
		readonly Description: string;
		/** Shows the error code that is used to troubleshoot issues in the quick campaign. */
		ErrorNumber: number;
		/** The message id of activity which is returned from Exchange Server. */
		ExchangeItemId: string;
		/** Exchange rate for the currency associated with the activitypointer with respect to the base currency. */
		readonly ExchangeRate: number;
		/** Shows the web link of Activity of type email. */
		ExchangeWebLink: string;
		/** Number of records which failed in the bulk operation. */
		FailureCount: number;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Type of instance of a recurring series. */
		readonly InstanceTypeCode: OptionSet.BulkOperation.InstanceTypeCode;
		/** For internal use only. */
		readonly IsBilled: boolean;
		/** For internal use only. */
		IsMapiPrivate: boolean;
		/** Information regarding whether the activity is a regular activity type or event type. */
		readonly IsRegularActivity: boolean;
		/** Specifies if the bulk operation was created from a workflow rule. */
		readonly IsWorkflowCreated: boolean;
		/** Contains the date and time stamp of the last on hold time. */
		LastOnHoldTime_UtcDateAndTime: Date;
		/** Left the voice mail */
		LeftVoiceMail: boolean;
		/** Shows who last updated the record. */
		readonly ModifiedBy: string;
		/** Date and time when the bulk operation was last modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who last modified the bulk operation. */
		readonly ModifiedOnBehalfBy: string;
		/** Shows how long, in minutes, that the record was on hold. */
		readonly OnHoldTime: number;
		/** Select the type of bulk operation process, such as quick campaign or campaign activity distribution. */
		OperationTypeCode: OptionSet.BulkOperation.OperationTypeCode;
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
		/** XML string that contains the parameters to the bulk operation. */
		Parameters: string;
		/** For internal use only. */
		readonly PostponeActivityProcessingUntil_UtcDateAndTime: Date;
		/** Priority of the activity. */
		PriorityCode: OptionSet.BulkOperation.PriorityCode;
		/** Unique identifier of the Process. */
		ProcessId: string;
		/** Choose the campaign from which the campaign activities were bulk-distributed. */
		regardingobjectid_campaignactivity_bulkoperation: string;
		/** Choose the campaign from which the campaign activities were bulk-distributed. */
		regardingobjectid_list: string;
		/** Scheduled duration of the bulk operation, specified in minutes. */
		readonly ScheduledDurationMinutes: number;
		/** Scheduled end date and time of the bulk operation. */
		readonly ScheduledEnd_UtcDateOnly: Date;
		/** Scheduled start date and time of the bulk operation. */
		readonly ScheduledStart_UtcDateOnly: Date;
		/** Unique identifier of the mailbox associated with the sender of the email message. */
		readonly SenderMailboxId: string;
		/** Date and time when the activity was sent. */
		readonly SentOn_UtcDateAndTime: Date;
		/** Uniqueidentifier specifying the id of recurring series of an instance. */
		readonly SeriesId: string;
		/** Choose the service level agreement (SLA) that you want to apply to the case record. */
		SLAId: string;
		/** Last SLA that was applied to this case. This field is for internal use only. */
		readonly SLAInvokedId: string;
		/** Shows the date and time by which the activities are sorted. */
		SortDate_UtcDateAndTime: Date;
		/** Unique identifier of the Stage. */
		StageId: string;
		/** Shows whether the quick campaign is open, closed, or canceled.  Closed or canceled quick campaigns are read-only and can't be edited. */
		readonly StateCode: OptionSet.BulkOperation.StateCode;
		/** Select the quick campaign's status. */
		StatusCode: OptionSet.BulkOperation.StatusCode;
		/** Type a short description about the objective or primary topic of the quick campaign. */
		Subject: string;
		/** Number of records which succeeded in the bulk operation. */
		SuccessCount: number;
		/** Select the type of records targeted in the quick campaign to identify the target audience. */
		TargetedRecordTypeCode: OptionSet.BulkOperation.TargetedRecordTypeCode;
		/** Number of members to target. */
		TargetMembersCount: number;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Unique identifier of the currency associated with the activitypointer. */
		TransactionCurrencyId: string;
		/** For internal use only. */
		TraversedPath: string;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version number of the activity. */
		readonly VersionNumber: number;
		/** Information for bulk operation workflow. */
		WorkflowInfo: string;
		/** The array of object that can cast object to ActivityPartyApi class */
		ActivityParties: Array<unknown>;
	}
}
declare namespace OptionSet {
	namespace BulkOperation {
		enum ActivityTypeCode {
			/** 10086 */
			Activity_record_for_the_Teams_chat,
			/** 4201 */
			Appointment,
			/** 10404 */
			Booking_Alert,
			/** 4402 */
			Campaign_Activity,
			/** 4401 */
			Campaign_Response,
			/** 4206 */
			Case_Resolution,
			/** 10707 */
			Conversation,
			/** 10313 */
			Customer_Voice_alert,
			/** 10323 */
			Customer_Voice_survey_invite,
			/** 10325 */
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
			/** 10817 */
			Outbound_message,
			/** 4210 */
			Phone_Call,
			/** 10434 */
			Project_Service_Approval,
			/** 4406 */
			Quick_Campaign,
			/** 4211 */
			Quote_Close,
			/** 4251 */
			Recurring_Appointment,
			/** 4214 */
			Service_Activity,
			/** 10721 */
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.00.00','WebApiVersion':'2'}