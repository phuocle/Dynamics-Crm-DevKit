///<reference path='devkit.d.ts' />
declare namespace Rocket {
	interface EmailOptionSet {
		RollupState: {
			/** 0 - Attribute value is yet to be calculated */
			NotCalculated: number,
			/** 1 - Attribute value has been calculated per the last update time in <AttributeSchemaName>_Date attribute */
			Calculated: number,
			/** 2 - Attribute value calculation lead to overflow error */
			OverflowError: number,
			/** 3 - Attribute value calculation failed due to an internal error, next run of calculation job will likely fix it */
			OtherError: number,
			/** 4 - Attribute value calculation failed because the maximum number of retry attempts to calculate the value were exceeded likely due to high number of concurrency and locking conflicts */
			RetryLimitExceeded: number,
			/** 5 - Attribute value calculation failed because maximum hierarchy depth limit for calculation was reached */
			HierarchicalRecursionLimitReached: number,
			/** 6 - Attribute value calculation failed because a recursive loop was detected in the hierarchy of the record */
			LoopDetected: number
		},
		CorrelationMethod: {
			/** 0 */
			None: number,
			/** 1 */
			Skipped: number,
			/** 2 */
			XHeader: number,
			/** 3 */
			InReplyTo: number,
			/** 4 */
			TrackingToken: number,
			/** 5 */
			ConversationIndex: number,
			/** 6 */
			SmartMatching: number,
			/** 7 */
			CustomCorrelation: number
		},
		DeliveryPriorityCode: {
			/** 0 */
			Low: number,
			/** 1 */
			Normal: number,
			/** 2 */
			High: number
		},
		EmailReminderStatus: {
			/** 0 */
			NotSet: number,
			/** 1 */
			ReminderSet: number,
			/** 2 */
			ReminderExpired: number,
			/** 3 */
			ReminderInvalid: number
		},
		EmailReminderType: {
			/** 0 */
			If_I_do_not_receive_a_reply_by: number,
			/** 1 */
			If_the_email_is_not_opened_by: number,
			/** 2 */
			Remind_me_anyways_at: number
		},
		Notifications: {
			/** 0 */
			None: number,
			/** 1 */
			The_message_was_saved_as_a_Microsoft_Dynamics_365_email_record_but_not_all_the_attachments_could_be_saved_with_it_An_attachment_cannot_be_saved_if_it_is_blocked_or_if_its_file_type_is_invalid: number,
			/** 2 */
			Truncated_body: number
		},
		PriorityCode: {
			/** 0 */
			Low: number,
			/** 1 */
			Normal: number,
			/** 2 */
			High: number
		},
		StateCode: {
			/** 0 */
			Open: number,
			/** 1 */
			Completed: number,
			/** 2 */
			Canceled: number
		},
		StatusCode: {
			/** 1 */
			Draft: number,
			/** 2 */
			Completed: number,
			/** 3 */
			Sent: number,
			/** 4 */
			Received: number,
			/** 5 */
			Canceled: number,
			/** 6 */
			Pending_Send: number,
			/** 7 */
			Sending: number,
			/** 8 */
			Failed: number
		}
	}
	class EmailApi {
		constructor(entity?: object);
		/**
		 * Get the value of alias
		 * @param alias the alias value
		 * @param isMultiOptionSet true if the alias is multi optionset
		 */
		getAliasedValue(alias: string, isMultiOptionSet?: boolean): object;
		/**
		 * Get the formatted value of alias
		 * @param alias the alias value
		 * @param isMultiOptionSet true if the alias is multi optionset
		 */
		getAliasedFormattedValue(alias: string, isMultiOptionSet?: boolean): string;
		/** The entity of ODATA */
		Entity: object;
		/** The entity name */
		EntityName: string;
		/** The entity collection name */
		EntityCollectionName: string;
		/** A collection OptionSet of Email enttiy */
		OptionSet: EmailOptionSet;
		/** The @odata.etag is then used to build a cache of the response that is dependant on the fields that are retrieved */
		"@odata.etag": string;
		/** For internal use only. */
		ActivityAdditionalParams: WebApi.StringValue;
		/** Unique identifier of the email activity. */
		ActivityId: WebApi.GuidValue;
		/** Type the number of minutes spent creating and sending the email. The duration is used in reporting. */
		ActualDurationMinutes: WebApi.IntegerValue;
		/** Enter the actual end date and time of the email. By default, it displays the date and time when the activity was completed or canceled, but can be edited to capture the actual time to create and send the email. */
		ActualEnd_UtcDateOnly: WebApi.UtcDateOnlyValue;
		/** Enter the actual start date and time for the email. By default, it displays the date and time when the activity was created, but can be edited to capture the actual time to create and send the email. */
		ActualStart_UtcDateOnly: WebApi.UtcDateOnlyValue;
		/** ReadOnly - Shows the umber of attachments of the email message. */
		AttachmentCount: WebApi.IntegerValue;
		/** Shows the number of times an email attachment has been viewed. */
		AttachmentOpenCount: WebApi.IntegerValue;
		/** Hash of base of conversation index. */
		BaseConversationIndexHash: WebApi.IntegerValue;
		/** Type a category to identify the email type, such as lead outreach, customer follow-up, or service alert, to tie the email to a business group or function. */
		Category: WebApi.StringValue;
		/** ReadOnly - Indicates if the body is compressed. */
		Compressed: WebApi.BooleanValue;
		/** ReadOnly - Identifier for all the email responses for this conversation. */
		ConversationIndex: WebApi.StringValue;
		/** Conversation Tracking Id. */
		ConversationTrackingId: WebApi.GuidValue;
		/** ReadOnly - Shows how an email is matched to an existing email in Microsoft Dynamics 365. For system use only. */
		CorrelationMethod: WebApi.OptionSetValue;
		/** ReadOnly - Shows who created the record. */
		CreatedBy: WebApi.LookupValue;
		/** ReadOnly */
		CreatedByName: WebApi.StringValue;
		/** ReadOnly */
		CreatedByYomiName: WebApi.StringValue;
		/** ReadOnly - Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		CreatedOn_UtcDateAndTime: WebApi.UtcDateAndTimeValue;
		/** ReadOnly - Shows who created the record on behalf of another user. */
		CreatedOnBehalfBy: WebApi.LookupValue;
		/** ReadOnly */
		CreatedOnBehalfByName: WebApi.StringValue;
		/** ReadOnly */
		CreatedOnBehalfByYomiName: WebApi.StringValue;
		/** Enter the expected date and time when email will be sent. */
		DelayedEmailSendTime_UtcDateAndTime: WebApi.UtcDateAndTimeValue;
		/** Shows the count of the number of attempts made to send the email. The count is used as an indicator of email routing issues. */
		DeliveryAttempts: WebApi.IntegerValue;
		/** Select the priority of delivery of the email to the email server. */
		DeliveryPriorityCode: WebApi.OptionSetValue;
		/** Select whether the sender should receive confirmation that the email was delivered. */
		DeliveryReceiptRequested: WebApi.BooleanValue;
		/** Type the greeting and message text of the email. */
		Description: WebApi.StringValue;
		/** Select the direction of the email as incoming or outbound. */
		DirectionCode: WebApi.BooleanValue;
		/** Shows the date and time when an email reminder expires. */
		EmailReminderExpiryTime_UtcDateAndTime: WebApi.UtcDateAndTimeValue;
		/** ReadOnly - Shows the status of the email reminder. */
		EmailReminderStatus: WebApi.OptionSetValue;
		/** For internal use only. */
		EmailReminderText: WebApi.StringValue;
		/** Shows the type of the email reminder. */
		EmailReminderType: WebApi.OptionSetValue;
		/** ReadOnly - Shows the sender of the email. */
		EmailSender: WebApi.LookupValue;
		/** Shows the name of the sender of the email. */
		EmailSenderName: WebApi.StringValue;
		/** ReadOnly - Shows the yomi name of the email sender */
		EmailSenderYomiName: WebApi.StringValue;
		/** Email Tracking Id. */
		EmailTrackingId: WebApi.GuidValue;
		/** ReadOnly - Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency. */
		ExchangeRate: WebApi.DecimalValue;
		/** Select whether the email allows following recipient activities sent from Microsoft Dynamics 365.This is user preference state which can be overridden by system evaluated state. */
		FollowEmailUserPreference: WebApi.BooleanValue;
		/** Unique identifier of the data import or data migration that created this record. */
		ImportSequenceNumber: WebApi.IntegerValue;
		/** ReadOnly - Type the ID of the email message that this email activity is a response to. */
		InReplyTo: WebApi.StringValue;
		/** Information regarding whether the email activity was billed as part of resolving a case. */
		IsBilled: WebApi.BooleanValue;
		/** ReadOnly - For internal use only. Shows whether this email is followed. This is evaluated state which overrides user selection of follow email. */
		IsEmailFollowed: WebApi.BooleanValue;
		/** ReadOnly - For internal use only. Shows whether this email Reminder is Set. */
		IsEmailReminderSet: WebApi.BooleanValue;
		/** ReadOnly - Information regarding whether the activity is a regular activity type or event type. */
		IsRegularActivity: WebApi.BooleanValue;
		/** ReadOnly - For internal use only. */
		IsUnsafe: WebApi.IntegerValue;
		/** Indication if the email was created by a workflow rule. */
		IsWorkflowCreated: WebApi.BooleanValue;
		/** Contains the date and time stamp of the last on hold time. */
		LastOnHoldTime_UtcDateAndTime: WebApi.UtcDateAndTimeValue;
		/** Shows the latest date and time when email was opened. */
		LastOpenedTime_UtcDateAndTime: WebApi.UtcDateAndTimeValue;
		/** Shows the number of times a link in an email has been clicked. */
		LinksClickedCount: WebApi.IntegerValue;
		/** Unique identifier of the email message. Used only for email that is received. */
		MessageId: WebApi.StringValue;
		/** For internal use only. */
		MessageIdDupCheck: WebApi.GuidValue;
		/** MIME type of the email message data. */
		MimeType: WebApi.StringValue;
		/** ReadOnly - Shows who last updated the record. */
		ModifiedBy: WebApi.LookupValue;
		/** ReadOnly */
		ModifiedByName: WebApi.StringValue;
		/** ReadOnly */
		ModifiedByYomiName: WebApi.StringValue;
		/** ReadOnly - Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		ModifiedOn_UtcDateAndTime: WebApi.UtcDateAndTimeValue;
		/** ReadOnly - Shows who last updated the record on behalf of another user. */
		ModifiedOnBehalfBy: WebApi.LookupValue;
		/** ReadOnly */
		ModifiedOnBehalfByName: WebApi.StringValue;
		/** ReadOnly */
		ModifiedOnBehalfByYomiName: WebApi.StringValue;
		/** Select the notification code to identify issues with the email recipients or attachments, such as blocked attachments. */
		Notifications: WebApi.OptionSetValue;
		/** ReadOnly - Shows how long, in minutes, that the record was on hold. */
		OnHoldTime: WebApi.IntegerValue;
		/** Shows the number of times an email has been opened. */
		OpenCount: WebApi.IntegerValue;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: WebApi.UtcDateOnlyValue;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
		OwnerId_systemuser: WebApi.LookupValue;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team. */
		OwnerId_team: WebApi.LookupValue;
		/** ReadOnly */
		OwnerIdName: WebApi.StringValue;
		/** ReadOnly */
		OwnerIdYomiName: WebApi.StringValue;
		/** ReadOnly - Unique identifier of the business unit that owns the email activity. */
		OwningBusinessUnit: WebApi.LookupValue;
		/** ReadOnly - Unique identifier of the team who owns the email activity. */
		OwningTeam: WebApi.LookupValue;
		/** ReadOnly - Unique identifier of the user who owns the email activity. */
		OwningUser: WebApi.LookupValue;
		/** Select the activity that the email is associated with. */
		ParentActivityId: WebApi.LookupValue;
		/** ReadOnly - Parent Activity Name */
		ParentActivityIdName: WebApi.StringValue;
		/** ReadOnly - For internal use only. */
		PostponeEmailProcessingUntil_UtcDateAndTime: WebApi.UtcDateAndTimeValue;
		/** Select the priority so that preferred customers or critical issues are handled quickly. */
		PriorityCode: WebApi.OptionSetValue;
		/** Shows the ID of the process. */
		ProcessId: WebApi.GuidValue;
		/** Indicates that a read receipt is requested. */
		ReadReceiptRequested: WebApi.BooleanValue;
		/** Choose the record that the email relates to. */
		RegardingObjectId: WebApi.LookupValue;
		/** ReadOnly */
		RegardingObjectIdName: WebApi.StringValue;
		/** ReadOnly */
		RegardingObjectIdYomiName: WebApi.StringValue;
		/** Reminder Action Card Id. */
		ReminderActionCardId: WebApi.GuidValue;
		/** ReadOnly - Shows the number of replies received for an email. */
		ReplyCount: WebApi.IntegerValue;
		/** ReadOnly - Safe body text of the e-mail. */
		SafeDescription: WebApi.StringValue;
		/** ReadOnly - Scheduled duration of the email activity, specified in minutes. */
		ScheduledDurationMinutes: WebApi.IntegerValue;
		/** Enter the expected due date and time for the activity to be completed to provide details about when the email will be sent. */
		ScheduledEnd_UtcDateAndTime: WebApi.UtcDateAndTimeValue;
		/** Enter the expected start date and time for the activity to provide details about the tentative time when the email activity must be initiated. */
		ScheduledStart_UtcDateAndTime: WebApi.UtcDateAndTimeValue;
		/** Sender of the email. */
		Sender: WebApi.StringValue;
		/** ReadOnly - Select the mailbox associated with the sender of the email message. */
		SenderMailboxId: WebApi.LookupValue;
		/** ReadOnly */
		SenderMailboxIdName: WebApi.StringValue;
		/** ReadOnly - Shows the parent account of the sender of the email. */
		SendersAccount: WebApi.LookupValue;
		/** Shows the name of the sender account of the email. */
		SendersAccountName: WebApi.StringValue;
		/** ReadOnly - Shows the name of the sender account yomi name  */
		SendersAccountYomiName: WebApi.StringValue;
		/** ReadOnly - Shows the date and time that the email was sent. */
		SentOn_UtcDateAndTime: WebApi.UtcDateAndTimeValue;
		/** Choose the service level agreement (SLA) that you want to apply to the email record. */
		SLAId: WebApi.LookupValue;
		/** ReadOnly - Last SLA that was applied to this email. This field is for internal use only. */
		SLAInvokedId: WebApi.LookupValue;
		/** ReadOnly */
		SLAInvokedIdName: WebApi.StringValue;
		/** ReadOnly */
		SLAName: WebApi.StringValue;
		/** Shows the date and time by which the activities are sorted. */
		SortDate_UtcDateAndTime: WebApi.UtcDateAndTimeValue;
		/** Shows the ID of the stage. */
		StageId: WebApi.GuidValue;
		/** Shows whether the email is open, completed, or canceled. Completed and canceled email is read-only and can't be edited. */
		StateCode: WebApi.OptionSetValue;
		/** Select the email's status. */
		StatusCode: WebApi.OptionSetValue;
		/** Type a subcategory to identify the email type and relate the activity to a specific product, sales region, business group, or other function. */
		Subcategory: WebApi.StringValue;
		/** Type a short description about the objective or primary topic of the email. */
		Subject: WebApi.StringValue;
		/** Shows the Microsoft Office Outlook account for the user who submitted the email to Microsoft Dynamics 365. */
		SubmittedBy: WebApi.StringValue;
		/** For internal use only. ID for template used in email. */
		TemplateId: WebApi.LookupValue;
		/** ReadOnly */
		TemplateIdName: WebApi.StringValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: WebApi.IntegerValue;
		/** Shows the email addresses corresponding to the recipients. */
		ToRecipients: WebApi.StringValue;
		/** Shows the tracking token assigned to the email to make sure responses are automatically tracked in Microsoft Dynamics 365. */
		TrackingToken: WebApi.StringValue;
		/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
		TransactionCurrencyId: WebApi.LookupValue;
		/** ReadOnly */
		TransactionCurrencyIdName: WebApi.StringValue;
		/** For internal use only. */
		TraversedPath: WebApi.StringValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: WebApi.IntegerValue;
		/** ReadOnly - Version number of the email message. */
		VersionNumber: WebApi.BigIntValue;
        /** The array of object that can cast object to ActivityPartyApi class */
		ActivityParties: Array<object>;
	}
}
//{'JsForm':['Email'],'JsWebApi':true,'IsDebugForm':false,'IsDebugWebApi':true}