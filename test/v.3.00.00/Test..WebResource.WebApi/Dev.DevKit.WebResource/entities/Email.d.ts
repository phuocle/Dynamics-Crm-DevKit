//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class EmailApi {
		/**
		* DynamicsCrm.DevKit EmailApi
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
		/** The Entity that Accepted the Email */
		acceptingentityid_queue: string;
		/** The Entity that Accepted the Email */
		acceptingentityid_systemuser: string;
		/** For internal use only. */
		ActivityAdditionalParams: string;
		/** Unique identifier of the email activity. */
		ActivityId: string;
		/** Type the number of minutes spent creating and sending the email. The duration is used in reporting. */
		ActualDurationMinutes: number;
		/** Enter the actual end date and time of the email. By default, it displays the date and time when the activity was completed or canceled, but can be edited to capture the actual time to create and send the email. */
		ActualEnd_UtcDateOnly: Date;
		/** Enter the actual start date and time for the email. By default, it displays the date and time when the activity was created, but can be edited to capture the actual time to create and send the email. */
		ActualStart_UtcDateOnly: Date;
		/** Shows the umber of attachments of the email message. */
		readonly AttachmentCount: number;
		/** Shows the number of times an email attachment has been viewed. */
		AttachmentOpenCount: number;
		/** Hash of base of conversation index. */
		BaseConversationIndexHash: number;
		/** Type a category to identify the email type, such as lead outreach, customer follow-up, or service alert, to tie the email to a business group or function. */
		Category: string;
		/** Indicates if the body is compressed. */
		readonly Compressed: boolean;
		/** Identifier for all the email responses for this conversation. */
		readonly ConversationIndex: string;
		/** Conversation Tracking Id. */
		ConversationTrackingId: string;
		/** Correlated Activity Id */
		CorrelatedActivityId: string;
		/** Shows how an email is matched to an existing email in Microsoft Dynamics 365. For system use only. */
		readonly CorrelationMethod: OptionSet.Email.CorrelationMethod;
		/** Shows who created the record. */
		readonly CreatedBy: string;
		/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Shows who created the record on behalf of another user. */
		readonly CreatedOnBehalfBy: string;
		/** Enter the expected date and time when email will be sent. */
		DelayedEmailSendTime_UtcDateAndTime: Date;
		/** Shows the count of the number of attempts made to send the email. The count is used as an indicator of email routing issues. */
		DeliveryAttempts: number;
		/** Select the priority of delivery of the email to the email server. */
		DeliveryPriorityCode: OptionSet.Email.DeliveryPriorityCode;
		/** Select whether the sender should receive confirmation that the email was delivered. */
		DeliveryReceiptRequested: boolean;
		/** Type the greeting and message text of the email. */
		Description: string;
		/** Select the direction of the email as incoming or outbound. */
		DirectionCode: boolean;
		/** Shows the date and time when an email reminder expires. */
		EmailReminderExpiryTime_UtcDateAndTime: Date;
		/** Shows the status of the email reminder. */
		readonly EmailReminderStatus: OptionSet.Email.EmailReminderStatus;
		/** For internal use only. */
		EmailReminderText: string;
		/** Shows the type of the email reminder. */
		EmailReminderType: OptionSet.Email.EmailReminderType;
		/** Shows the sender of the email. */
		readonly emailsender_account: string;
		/** Shows the sender of the email. */
		readonly emailsender_contact: string;
		/** Shows the sender of the email. */
		readonly emailsender_queue: string;
		/** Shows the sender of the email. */
		readonly emailsender_systemuser: string;
		/** Email Tracking Id. */
		EmailTrackingId: string;
		/** Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency. */
		readonly ExchangeRate: number;
		/** Select whether the email allows following recipient activities sent from Microsoft Dynamics 365.This is user preference state which can be overridden by system evaluated state. */
		FollowEmailUserPreference: boolean;
		/** Unique identifier of the data import or data migration that created this record. */
		ImportSequenceNumber: number;
		/** Type the ID of the email message that this email activity is a response to. */
		readonly InReplyTo: string;
		/** Information regarding whether the email activity was billed as part of resolving a case. */
		IsBilled: boolean;
		/** For internal use only. Shows whether this email is followed. This is evaluated state which overrides user selection of follow email. */
		readonly IsEmailFollowed: boolean;
		/** For internal use only. Shows whether this email Reminder is Set. */
		readonly IsEmailReminderSet: boolean;
		/** Information regarding whether the activity is a regular activity type or event type. */
		readonly IsRegularActivity: boolean;
		/** For internal use only. */
		readonly IsUnsafe: number;
		/** Indication if the email was created by a workflow rule. */
		IsWorkflowCreated: boolean;
		/** Contains the date and time stamp of the last on hold time. */
		LastOnHoldTime_UtcDateAndTime: Date;
		/** Shows the latest date and time when email was opened. */
		LastOpenedTime_UtcDateAndTime: Date;
		/** Shows the number of times a link in an email has been clicked. */
		LinksClickedCount: number;
		/** Unique identifier of the email message. Used only for email that is received. */
		MessageId: string;
		/** For internal use only. */
		MessageIdDupCheck: string;
		/** MIME type of the email message data. */
		MimeType: string;
		/** Shows who last updated the record. */
		readonly ModifiedBy: string;
		/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Shows who last updated the record on behalf of another user. */
		readonly ModifiedOnBehalfBy: string;
		/** Individual email will be sent to each recipient. */
		msdyn_RecipientList: string;
		/** Select the notification code to identify issues with the email recipients or attachments, such as blocked attachments. */
		Notifications: OptionSet.Email.Notifications;
		/** Shows how long, in minutes, that the record was on hold. */
		readonly OnHoldTime: number;
		/** Shows the number of times an email has been opened. */
		OpenCount: number;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Unique identifier of the business unit that owns the email activity. */
		readonly OwningBusinessUnit: string;
		/** Unique identifier of the team who owns the email activity. */
		readonly OwningTeam: string;
		/** Unique identifier of the user who owns the email activity. */
		readonly OwningUser: string;
		/** Select the activity that the email is associated with. */
		ParentActivityId: string;
		/** For internal use only. */
		readonly PostponeEmailProcessingUntil_UtcDateAndTime: Date;
		/** Select the priority so that preferred customers or critical issues are handled quickly. */
		PriorityCode: OptionSet.Email.PriorityCode;
		/** Shows the ID of the process. */
		ProcessId: string;
		/** Indicates that a read receipt is requested. */
		ReadReceiptRequested: boolean;
		/** The Mailbox that Received the Email. */
		ReceivingMailboxId: string;
		/** Choose the record that the email relates to. */
		regardingobjectid_account_email: string;
		/** Choose the record that the email relates to. */
		regardingobjectid_asyncoperation: string;
		/** Choose the record that the email relates to. */
		regardingobjectid_contact_email: string;
		/** Choose the record that the email relates to. */
		regardingobjectid_knowledgearticle_email: string;
		/** Choose the record that the email relates to. */
		regardingobjectid_knowledgebaserecord_email: string;
		/** Reminder Action Card Id. */
		ReminderActionCardId: string;
		/** Shows the number of replies received for an email. */
		readonly ReplyCount: number;
		/** For internal use only */
		ReservedForInternalUse: string;
		/** Scheduled duration of the email activity, specified in minutes. */
		readonly ScheduledDurationMinutes: number;
		/** Enter the expected due date and time for the activity to be completed to provide details about when the email will be sent. */
		ScheduledEnd_UtcDateAndTime: Date;
		/** Enter the expected start date and time for the activity to provide details about the tentative time when the email activity must be initiated. */
		ScheduledStart_UtcDateAndTime: Date;
		/** Sender of the email. */
		Sender: string;
		/** Select the mailbox associated with the sender of the email message. */
		readonly SenderMailboxId: string;
		/** Shows the parent account of the sender of the email. */
		readonly SendersAccount: string;
		/** Shows the date and time that the email was sent. */
		readonly SentOn_UtcDateAndTime: Date;
		/** Choose the service level agreement (SLA) that you want to apply to the email record. */
		SLAId: string;
		/** Last SLA that was applied to this email. This field is for internal use only. */
		readonly SLAInvokedId: string;
		/** Shows the date and time by which the activities are sorted. */
		SortDate_UtcDateAndTime: Date;
		/** Shows the ID of the stage. */
		StageId: string;
		/** Shows whether the email is open, completed, or canceled. Completed and canceled email is read-only and can't be edited. */
		StateCode: OptionSet.Email.StateCode;
		/** Select the email's status. */
		StatusCode: OptionSet.Email.StatusCode;
		/** Type a subcategory to identify the email type and relate the activity to a specific product, sales region, business group, or other function. */
		Subcategory: string;
		/** Type a short description about the objective or primary topic of the email. */
		Subject: string;
		/** Shows the Microsoft Office Outlook account for the user who submitted the email to Microsoft Dynamics 365. */
		SubmittedBy: string;
		/** For internal use only. ID for template used in email. */
		TemplateId: string;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Shows the email addresses corresponding to the recipients. */
		ToRecipients: string;
		/** Shows the tracking token assigned to the email to make sure responses are automatically tracked in Microsoft Dynamics 365. */
		TrackingToken: string;
		/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
		TransactionCurrencyId: string;
		/** For internal use only. */
		TraversedPath: string;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version number of the email message. */
		readonly VersionNumber: number;
		/** The array of object that can cast object to ActivityPartyApi class */
		ActivityParties: Array<unknown>;
		readonly FormattedValue: {
			/** The Entity that Accepted the Email */
			readonly acceptingentityid_queue: string;
			/** The Entity that Accepted the Email */
			readonly acceptingentityid_systemuser: string;
			/** For internal use only. */
			readonly ActivityAdditionalParams: string;
			/** Unique identifier of the email activity. */
			readonly ActivityId: string;
			/** Type the number of minutes spent creating and sending the email. The duration is used in reporting. */
			readonly ActualDurationMinutes: string;
			/** Enter the actual end date and time of the email. By default, it displays the date and time when the activity was completed or canceled, but can be edited to capture the actual time to create and send the email. */
			readonly ActualEnd_UtcDateOnly: string;
			/** Enter the actual start date and time for the email. By default, it displays the date and time when the activity was created, but can be edited to capture the actual time to create and send the email. */
			readonly ActualStart_UtcDateOnly: string;
			/** Shows the umber of attachments of the email message. */
			readonly AttachmentCount: string;
			/** Shows the number of times an email attachment has been viewed. */
			readonly AttachmentOpenCount: string;
			/** Hash of base of conversation index. */
			readonly BaseConversationIndexHash: string;
			/** Type a category to identify the email type, such as lead outreach, customer follow-up, or service alert, to tie the email to a business group or function. */
			readonly Category: string;
			/** Indicates if the body is compressed. */
			readonly Compressed: string;
			/** Identifier for all the email responses for this conversation. */
			readonly ConversationIndex: string;
			/** Conversation Tracking Id. */
			readonly ConversationTrackingId: string;
			/** Correlated Activity Id */
			readonly CorrelatedActivityId: string;
			/** Shows how an email is matched to an existing email in Microsoft Dynamics 365. For system use only. */
			readonly CorrelationMethod: string;
			/** Shows who created the record. */
			readonly CreatedBy: string;
			/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Shows who created the record on behalf of another user. */
			readonly CreatedOnBehalfBy: string;
			/** Enter the expected date and time when email will be sent. */
			readonly DelayedEmailSendTime_UtcDateAndTime: string;
			/** Shows the count of the number of attempts made to send the email. The count is used as an indicator of email routing issues. */
			readonly DeliveryAttempts: string;
			/** Select the priority of delivery of the email to the email server. */
			readonly DeliveryPriorityCode: string;
			/** Select whether the sender should receive confirmation that the email was delivered. */
			readonly DeliveryReceiptRequested: string;
			/** Type the greeting and message text of the email. */
			readonly Description: string;
			/** Select the direction of the email as incoming or outbound. */
			readonly DirectionCode: string;
			/** Shows the date and time when an email reminder expires. */
			readonly EmailReminderExpiryTime_UtcDateAndTime: string;
			/** Shows the status of the email reminder. */
			readonly EmailReminderStatus: string;
			/** For internal use only. */
			readonly EmailReminderText: string;
			/** Shows the type of the email reminder. */
			readonly EmailReminderType: string;
			/** Shows the sender of the email. */
			readonly emailsender_account: string;
			/** Shows the sender of the email. */
			readonly emailsender_contact: string;
			/** Shows the sender of the email. */
			readonly emailsender_queue: string;
			/** Shows the sender of the email. */
			readonly emailsender_systemuser: string;
			/** Email Tracking Id. */
			readonly EmailTrackingId: string;
			/** Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency. */
			readonly ExchangeRate: string;
			/** Select whether the email allows following recipient activities sent from Microsoft Dynamics 365.This is user preference state which can be overridden by system evaluated state. */
			readonly FollowEmailUserPreference: string;
			/** Unique identifier of the data import or data migration that created this record. */
			readonly ImportSequenceNumber: string;
			/** Type the ID of the email message that this email activity is a response to. */
			readonly InReplyTo: string;
			/** Information regarding whether the email activity was billed as part of resolving a case. */
			readonly IsBilled: string;
			/** For internal use only. Shows whether this email is followed. This is evaluated state which overrides user selection of follow email. */
			readonly IsEmailFollowed: string;
			/** For internal use only. Shows whether this email Reminder is Set. */
			readonly IsEmailReminderSet: string;
			/** Information regarding whether the activity is a regular activity type or event type. */
			readonly IsRegularActivity: string;
			/** For internal use only. */
			readonly IsUnsafe: string;
			/** Indication if the email was created by a workflow rule. */
			readonly IsWorkflowCreated: string;
			/** Contains the date and time stamp of the last on hold time. */
			readonly LastOnHoldTime_UtcDateAndTime: string;
			/** Shows the latest date and time when email was opened. */
			readonly LastOpenedTime_UtcDateAndTime: string;
			/** Shows the number of times a link in an email has been clicked. */
			readonly LinksClickedCount: string;
			/** Unique identifier of the email message. Used only for email that is received. */
			readonly MessageId: string;
			/** For internal use only. */
			readonly MessageIdDupCheck: string;
			/** MIME type of the email message data. */
			readonly MimeType: string;
			/** Shows who last updated the record. */
			readonly ModifiedBy: string;
			/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Shows who last updated the record on behalf of another user. */
			readonly ModifiedOnBehalfBy: string;
			/** Individual email will be sent to each recipient. */
			readonly msdyn_RecipientList: string;
			/** Select the notification code to identify issues with the email recipients or attachments, such as blocked attachments. */
			readonly Notifications: string;
			/** Shows how long, in minutes, that the record was on hold. */
			readonly OnHoldTime: string;
			/** Shows the number of times an email has been opened. */
			readonly OpenCount: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Unique identifier of the business unit that owns the email activity. */
			readonly OwningBusinessUnit: string;
			/** Unique identifier of the team who owns the email activity. */
			readonly OwningTeam: string;
			/** Unique identifier of the user who owns the email activity. */
			readonly OwningUser: string;
			/** Select the activity that the email is associated with. */
			readonly ParentActivityId: string;
			/** For internal use only. */
			readonly PostponeEmailProcessingUntil_UtcDateAndTime: string;
			/** Select the priority so that preferred customers or critical issues are handled quickly. */
			readonly PriorityCode: string;
			/** Shows the ID of the process. */
			readonly ProcessId: string;
			/** Indicates that a read receipt is requested. */
			readonly ReadReceiptRequested: string;
			/** The Mailbox that Received the Email. */
			readonly ReceivingMailboxId: string;
			/** Choose the record that the email relates to. */
			readonly regardingobjectid_account_email: string;
			/** Choose the record that the email relates to. */
			readonly regardingobjectid_asyncoperation: string;
			/** Choose the record that the email relates to. */
			readonly regardingobjectid_contact_email: string;
			/** Choose the record that the email relates to. */
			readonly regardingobjectid_knowledgearticle_email: string;
			/** Choose the record that the email relates to. */
			readonly regardingobjectid_knowledgebaserecord_email: string;
			/** Reminder Action Card Id. */
			readonly ReminderActionCardId: string;
			/** Shows the number of replies received for an email. */
			readonly ReplyCount: string;
			/** For internal use only */
			readonly ReservedForInternalUse: string;
			/** Scheduled duration of the email activity, specified in minutes. */
			readonly ScheduledDurationMinutes: string;
			/** Enter the expected due date and time for the activity to be completed to provide details about when the email will be sent. */
			readonly ScheduledEnd_UtcDateAndTime: string;
			/** Enter the expected start date and time for the activity to provide details about the tentative time when the email activity must be initiated. */
			readonly ScheduledStart_UtcDateAndTime: string;
			/** Sender of the email. */
			readonly Sender: string;
			/** Select the mailbox associated with the sender of the email message. */
			readonly SenderMailboxId: string;
			/** Shows the parent account of the sender of the email. */
			readonly SendersAccount: string;
			/** Shows the date and time that the email was sent. */
			readonly SentOn_UtcDateAndTime: string;
			/** Choose the service level agreement (SLA) that you want to apply to the email record. */
			readonly SLAId: string;
			/** Last SLA that was applied to this email. This field is for internal use only. */
			readonly SLAInvokedId: string;
			/** Shows the date and time by which the activities are sorted. */
			readonly SortDate_UtcDateAndTime: string;
			/** Shows the ID of the stage. */
			readonly StageId: string;
			/** Shows whether the email is open, completed, or canceled. Completed and canceled email is read-only and can't be edited. */
			readonly StateCode: string;
			/** Select the email's status. */
			readonly StatusCode: string;
			/** Type a subcategory to identify the email type and relate the activity to a specific product, sales region, business group, or other function. */
			readonly Subcategory: string;
			/** Type a short description about the objective or primary topic of the email. */
			readonly Subject: string;
			/** Shows the Microsoft Office Outlook account for the user who submitted the email to Microsoft Dynamics 365. */
			readonly SubmittedBy: string;
			/** For internal use only. ID for template used in email. */
			readonly TemplateId: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Shows the email addresses corresponding to the recipients. */
			readonly ToRecipients: string;
			/** Shows the tracking token assigned to the email to make sure responses are automatically tracked in Microsoft Dynamics 365. */
			readonly TrackingToken: string;
			/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
			readonly TransactionCurrencyId: string;
			/** For internal use only. */
			readonly TraversedPath: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version number of the email message. */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace Email {
		enum ActivityTypeCode {
			/** 10268 */
			Activity_record_for_the_Teams_chat,
			/** 4201 */
			Appointment,
			/** 4202 */
			Email,
			/** 4204 */
			Fax,
			/** 4207 */
			Letter,
			/** 4210 */
			Phone_Call,
			/** 4251 */
			Recurring_Appointment,
			/** 4212 */
			Task
		}
		enum CorrelationMethod {
			/** 5 */
			ConversationIndex,
			/** 7 */
			CustomCorrelation,
			/** 3 */
			InReplyTo,
			/** 0 */
			None,
			/** 1 */
			Skipped,
			/** 6 */
			SmartMatching,
			/** 4 */
			TrackingToken,
			/** 2 */
			XHeader
		}
		enum DeliveryPriorityCode {
			/** 2 */
			High,
			/** 0 */
			Low,
			/** 1 */
			Normal
		}
		enum EmailReminderStatus {
			/** 0 */
			NotSet,
			/** 2 */
			ReminderExpired,
			/** 3 */
			ReminderInvalid,
			/** 1 */
			ReminderSet
		}
		enum EmailReminderType {
			/** 0 */
			If_I_do_not_receive_a_reply_by,
			/** 1 */
			If_the_email_is_not_opened_by,
			/** 2 */
			Remind_me_anyways_at
		}
		enum Notifications {
			/** 0 */
			None,
			/** 1 */
			The_message_was_saved_as_a_Microsoft_Dynamics_365_email_record_but_not_all_the_attachments_could_be_saved_with_it_An_attachment_cannot_be_saved_if_it_is_blocked_or_if_its_file_type_is_invalid,
			/** 2 */
			Truncated_body
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
			Completed,
			/** 0 */
			Open
		}
		enum StatusCode {
			/** 5 */
			Canceled,
			/** 2 */
			Completed,
			/** 1 */
			Draft,
			/** 8 */
			Failed,
			/** 6 */
			Pending_Send,
			/** 4 */
			Received,
			/** 7 */
			Sending,
			/** 3 */
			Sent
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
//{'UseForm':false,'UseWebApi':true,'Version':'3.00.00','WebApiVersion':'2'}