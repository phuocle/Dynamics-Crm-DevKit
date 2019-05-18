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
		ActivityAdditionalParams: DevKit.WebApi.StringValue;
		/** Unique identifier of the email activity. */
		ActivityId: DevKit.WebApi.GuidValue;
		/** Type the number of minutes spent creating and sending the email. The duration is used in reporting. */
		ActualDurationMinutes: DevKit.WebApi.IntegerValue;
		/** Enter the actual end date and time of the email. By default, it displays the date and time when the activity was completed or canceled, but can be edited to capture the actual time to create and send the email. */
		ActualEnd_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Enter the actual start date and time for the email. By default, it displays the date and time when the activity was created, but can be edited to capture the actual time to create and send the email. */
		ActualStart_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** ReadOnly - Shows the umber of attachments of the email message. */
		AttachmentCount: DevKit.WebApi.IntegerValue;
		/** Shows the number of times an email attachment has been viewed. */
		AttachmentOpenCount: DevKit.WebApi.IntegerValue;
		/** Hash of base of conversation index. */
		BaseConversationIndexHash: DevKit.WebApi.IntegerValue;
		/** Type a category to identify the email type, such as lead outreach, customer follow-up, or service alert, to tie the email to a business group or function. */
		Category: DevKit.WebApi.StringValue;
		/** ReadOnly - Indicates if the body is compressed. */
		Compressed: DevKit.WebApi.BooleanValue;
		/** ReadOnly - Identifier for all the email responses for this conversation. */
		ConversationIndex: DevKit.WebApi.StringValue;
		/** Conversation Tracking Id. */
		ConversationTrackingId: DevKit.WebApi.GuidValue;
		/** ReadOnly - Shows how an email is matched to an existing email in Microsoft Dynamics 365. For system use only. */
		CorrelationMethod: DevKit.WebApi.OptionSetValue;
		/** ReadOnly - Shows who created the record. */
		CreatedBy: DevKit.WebApi.LookupValue;
		/** ReadOnly - Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** ReadOnly - Shows who created the record on behalf of another user. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValue;
		/** Enter the expected date and time when email will be sent. */
		DelayedEmailSendTime_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Shows the count of the number of attempts made to send the email. The count is used as an indicator of email routing issues. */
		DeliveryAttempts: DevKit.WebApi.IntegerValue;
		/** Select the priority of delivery of the email to the email server. */
		DeliveryPriorityCode: DevKit.WebApi.OptionSetValue;
		/** Select whether the sender should receive confirmation that the email was delivered. */
		DeliveryReceiptRequested: DevKit.WebApi.BooleanValue;
		/** Type the greeting and message text of the email. */
		Description: DevKit.WebApi.StringValue;
		/** Select the direction of the email as incoming or outbound. */
		DirectionCode: DevKit.WebApi.BooleanValue;
		/** Shows the date and time when an email reminder expires. */
		EmailReminderExpiryTime_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** ReadOnly - Shows the status of the email reminder. */
		EmailReminderStatus: DevKit.WebApi.OptionSetValue;
		/** For internal use only. */
		EmailReminderText: DevKit.WebApi.StringValue;
		/** Shows the type of the email reminder. */
		EmailReminderType: DevKit.WebApi.OptionSetValue;
		/** ReadOnly - Shows the sender of the email. */
		emailsender_account: DevKit.WebApi.LookupValue;
		/** ReadOnly - Shows the sender of the email. */
		emailsender_contact: DevKit.WebApi.LookupValue;
		/** ReadOnly - Shows the sender of the email. */
		emailsender_queue: DevKit.WebApi.LookupValue;
		/** ReadOnly - Shows the sender of the email. */
		emailsender_systemuser: DevKit.WebApi.LookupValue;
		/** Email Tracking Id. */
		EmailTrackingId: DevKit.WebApi.GuidValue;
		/** ReadOnly - Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency. */
		ExchangeRate: DevKit.WebApi.DecimalValue;
		/** Select whether the email allows following recipient activities sent from Microsoft Dynamics 365.This is user preference state which can be overridden by system evaluated state. */
		FollowEmailUserPreference: DevKit.WebApi.BooleanValue;
		/** Unique identifier of the data import or data migration that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** ReadOnly - Type the ID of the email message that this email activity is a response to. */
		InReplyTo: DevKit.WebApi.StringValue;
		/** Information regarding whether the email activity was billed as part of resolving a case. */
		IsBilled: DevKit.WebApi.BooleanValue;
		/** ReadOnly - For internal use only. Shows whether this email is followed. This is evaluated state which overrides user selection of follow email. */
		IsEmailFollowed: DevKit.WebApi.BooleanValue;
		/** ReadOnly - For internal use only. Shows whether this email Reminder is Set. */
		IsEmailReminderSet: DevKit.WebApi.BooleanValue;
		/** ReadOnly - Information regarding whether the activity is a regular activity type or event type. */
		IsRegularActivity: DevKit.WebApi.BooleanValue;
		/** ReadOnly - For internal use only. */
		IsUnsafe: DevKit.WebApi.IntegerValue;
		/** Indication if the email was created by a workflow rule. */
		IsWorkflowCreated: DevKit.WebApi.BooleanValue;
		/** Contains the date and time stamp of the last on hold time. */
		LastOnHoldTime_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Shows the latest date and time when email was opened. */
		LastOpenedTime_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Shows the number of times a link in an email has been clicked. */
		LinksClickedCount: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the email message. Used only for email that is received. */
		MessageId: DevKit.WebApi.StringValue;
		/** MIME type of the email message data. */
		MimeType: DevKit.WebApi.StringValue;
		/** ReadOnly - Shows who last updated the record. */
		ModifiedBy: DevKit.WebApi.LookupValue;
		/** ReadOnly - Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** ReadOnly - Shows who last updated the record on behalf of another user. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValue;
		/** Select the notification code to identify issues with the email recipients or attachments, such as blocked attachments. */
		Notifications: DevKit.WebApi.OptionSetValue;
		/** ReadOnly - Shows how long, in minutes, that the record was on hold. */
		OnHoldTime: DevKit.WebApi.IntegerValue;
		/** Shows the number of times an email has been opened. */
		OpenCount: DevKit.WebApi.IntegerValue;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
		OwnerId_systemuser: DevKit.WebApi.LookupValue;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team. */
		OwnerId_team: DevKit.WebApi.LookupValue;
		/** ReadOnly - Unique identifier of the business unit that owns the email activity. */
		OwningBusinessUnit: DevKit.WebApi.LookupValue;
		/** ReadOnly - Unique identifier of the team who owns the email activity. */
		OwningTeam: DevKit.WebApi.LookupValue;
		/** ReadOnly - Unique identifier of the user who owns the email activity. */
		OwningUser: DevKit.WebApi.LookupValue;
		/** Select the activity that the email is associated with. */
		ParentActivityId: DevKit.WebApi.LookupValue;
		/** ReadOnly - For internal use only. */
		PostponeEmailProcessingUntil_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Select the priority so that preferred customers or critical issues are handled quickly. */
		PriorityCode: DevKit.WebApi.OptionSetValue;
		/** Shows the ID of the process. */
		ProcessId: DevKit.WebApi.GuidValue;
		/** Indicates that a read receipt is requested. */
		ReadReceiptRequested: DevKit.WebApi.BooleanValue;
		/** Choose the record that the email relates to. */
		regardingobjectid_account_email: DevKit.WebApi.LookupValue;
		/** Choose the record that the email relates to. */
		regardingobjectid_asyncoperation: DevKit.WebApi.LookupValue;
		/** Choose the record that the email relates to. */
		regardingobjectid_contact_email: DevKit.WebApi.LookupValue;
		/** Choose the record that the email relates to. */
		regardingobjectid_knowledgearticle_email: DevKit.WebApi.LookupValue;
		/** Choose the record that the email relates to. */
		regardingobjectid_knowledgebaserecord_email: DevKit.WebApi.LookupValue;
		/** Reminder Action Card Id. */
		ReminderActionCardId: DevKit.WebApi.GuidValue;
		/** ReadOnly - Shows the number of replies received for an email. */
		ReplyCount: DevKit.WebApi.IntegerValue;
		/** ReadOnly - Safe body text of the e-mail. */
		SafeDescription: DevKit.WebApi.StringValue;
		/** ReadOnly - Scheduled duration of the email activity, specified in minutes. */
		ScheduledDurationMinutes: DevKit.WebApi.IntegerValue;
		/** Enter the expected due date and time for the activity to be completed to provide details about when the email will be sent. */
		ScheduledEnd_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Enter the expected start date and time for the activity to provide details about the tentative time when the email activity must be initiated. */
		ScheduledStart_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Sender of the email. */
		Sender: DevKit.WebApi.StringValue;
		/** ReadOnly - Select the mailbox associated with the sender of the email message. */
		SenderMailboxId: DevKit.WebApi.LookupValue;
		/** ReadOnly - Shows the parent account of the sender of the email. */
		SendersAccount: DevKit.WebApi.LookupValue;
		/** ReadOnly - Shows the date and time that the email was sent. */
		SentOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Choose the service level agreement (SLA) that you want to apply to the email record. */
		SLAId: DevKit.WebApi.LookupValue;
		/** ReadOnly - Last SLA that was applied to this email. This field is for internal use only. */
		SLAInvokedId: DevKit.WebApi.LookupValue;
		/** ReadOnly */
		SLAName: DevKit.WebApi.StringValue;
		/** Shows the date and time by which the activities are sorted. */
		SortDate_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Shows the ID of the stage. */
		StageId: DevKit.WebApi.GuidValue;
		/** Shows whether the email is open, completed, or canceled. Completed and canceled email is read-only and can't be edited. */
		StateCode: DevKit.WebApi.OptionSetValue;
		/** Select the email's status. */
		StatusCode: DevKit.WebApi.OptionSetValue;
		/** Type a subcategory to identify the email type and relate the activity to a specific product, sales region, business group, or other function. */
		Subcategory: DevKit.WebApi.StringValue;
		/** Type a short description about the objective or primary topic of the email. */
		Subject: DevKit.WebApi.StringValue;
		/** Shows the Microsoft Office Outlook account for the user who submitted the email to Microsoft Dynamics 365. */
		SubmittedBy: DevKit.WebApi.StringValue;
		/** For internal use only. ID for template used in email. */
		TemplateId: DevKit.WebApi.LookupValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Shows the email addresses corresponding to the recipients. */
		ToRecipients: DevKit.WebApi.StringValue;
		/** Shows the tracking token assigned to the email to make sure responses are automatically tracked in Microsoft Dynamics 365. */
		TrackingToken: DevKit.WebApi.StringValue;
		/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
		TransactionCurrencyId: DevKit.WebApi.LookupValue;
		/** For internal use only. */
		TraversedPath: DevKit.WebApi.StringValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** ReadOnly - Version number of the email message. */
		VersionNumber: DevKit.WebApi.BigIntValue;
		/** The array of object that can cast object to ActivityPartyApi class */
		ActivityParties: Array<object>;
	}
}
//{'JsForm':['Email'],'JsWebApi':true,'IsDebugForm':false,'IsDebugWebApi':true}