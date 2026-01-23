//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormEmail {
		interface Header extends DevKit.Controls.IHeader {
			/** Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
			OwnerId: DevKit.Controls.Lookup;
			/** Select the priority so that preferred customers or critical issues are handled quickly. */
			PriorityCode: DevKit.Controls.OptionSet;
			/** Enter the expected due date and time for the activity to be completed to provide details about when the email will be sent. */
			ScheduledEnd: DevKit.Controls.DateTime;
			/** Select the email's status. */
			StatusCode: DevKit.Controls.OptionSet;
		}
		interface tab_Email_Sections {
			/** Attachments */
			attachments: DevKit.Controls.Section;
			/** E-mail Description */
			email_description: DevKit.Controls.Section;
			/** EMAIL ENGAGEMENT */
			emailengagementactions: DevKit.Controls.Section;
			/** RECIPIENT ACTIVITY */
			Emailrecipient_section_6: DevKit.Controls.Section;
			/** Recipient Information */
			recipient_information: DevKit.Controls.Section;
			Regarding_information: DevKit.Controls.Section;
			/** Section */
			tab_4_section_2: DevKit.Controls.Section;
		}
		/** Email */
		interface tab_Email extends DevKit.Controls.ITab {
			Section: tab_Email_Sections;
		}
		interface Tabs {
			/** Email */
			Email: tab_Email;
		}
		interface Body {
			Tab: Tabs;
			/** Type the number of minutes spent creating and sending the email. The duration is used in reporting. */
			ActualDurationMinutes: DevKit.Controls.Integer;
			/** Enter the recipients that are included on the email distribution, but are not displayed to other recipients. */
			bcc: DevKit.Controls.Lookup;
			/** Enter the recipients that should be copied on the email. */
			cc: DevKit.Controls.Lookup;
			/** Type the greeting and message text of the email. */
			Description: DevKit.Controls.String;
			emailengagementactionscontrol: DevKit.Controls.EmailEngagement;
			emailrecipientactivitycontrol: DevKit.Controls.EmailRecipient;
			/** Enter the sender of the email. */
			from: DevKit.Controls.Lookup;
			/** Choose the record that the email relates to. */
			RegardingObjectId: DevKit.Controls.Lookup;
			/** Type a short description about the objective or primary topic of the email. */
			Subject: DevKit.Controls.String;
			/** Enter the account, contact, lead, queue, or user recipients for the email. */
			to: DevKit.Controls.Lookup;
		}
		interface Grid {
			/** Attachment */
			attachmentsGrid: DevKit.Controls.Grid;
		}
	}
	export class FormEmail extends DevKit.IForm {
		/**
		* Email [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** The Body section of form Email */
		Body: DevKit.FormEmail.Body;
		/** The Header section of form Email */
		Header: DevKit.FormEmail.Header;
		/** The Grid of form Email */
		Grid: DevKit.FormEmail.Grid;
	}
	namespace FormEmail_for_Interactive_experience {
		interface Header extends DevKit.Controls.IHeader {
			/** Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
			OwnerId: DevKit.Controls.Lookup;
			/** Select the priority so that preferred customers or critical issues are handled quickly. */
			PriorityCode: DevKit.Controls.OptionSet;
			/** Enter the expected due date and time for the activity to be completed to provide details about when the email will be sent. */
			ScheduledEnd: DevKit.Controls.DateTime;
			/** Select the email's status. */
			StatusCode: DevKit.Controls.OptionSet;
		}
		interface tab_tab_2_Sections {
			/** DETAILS */
			tab_2_section_2: DevKit.Controls.Section;
			/** ATTACHMENTS */
			tab_2_section_3: DevKit.Controls.Section;
			/** REGARDING */
			tab_2_section_5: DevKit.Controls.Section;
		}
		/** Email */
		interface tab_tab_2 extends DevKit.Controls.ITab {
			Section: tab_tab_2_Sections;
		}
		interface Tabs {
			/** Email */
			tab_2: tab_tab_2;
		}
		interface Body {
			Tab: Tabs;
			/** Enter the recipients that are included on the email distribution, but are not displayed to other recipients. */
			bcc: DevKit.Controls.Lookup;
			/** Enter the recipients that should be copied on the email. */
			cc: DevKit.Controls.Lookup;
			/** Type the greeting and message text of the email. */
			Description: DevKit.Controls.String;
			/** Enter the sender of the email. */
			from: DevKit.Controls.Lookup;
			/** Choose the record that the email relates to. */
			RegardingObjectId: DevKit.Controls.Lookup;
			/** Type a short description about the objective or primary topic of the email. */
			Subject: DevKit.Controls.String;
			/** Enter the account, contact, lead, queue, or user recipients for the email. */
			to: DevKit.Controls.Lookup;
		}
		interface Grid {
			/** ATTACHMENTS */
			attachmentsGrid: DevKit.Controls.Grid;
		}
	}
	export class FormEmail_for_Interactive_experience extends DevKit.IForm {
		/**
		* Email for Interactive experience [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** The Body section of form Email_for_Interactive_experience */
		Body: DevKit.FormEmail_for_Interactive_experience.Body;
		/** The Header section of form Email_for_Interactive_experience */
		Header: DevKit.FormEmail_for_Interactive_experience.Header;
		/** The Grid of form Email_for_Interactive_experience */
		Grid: DevKit.FormEmail_for_Interactive_experience.Grid;
	}
	namespace FormEnhanced_Email {
		interface Header extends DevKit.Controls.IHeader {
			/** Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
			OwnerId: DevKit.Controls.Lookup;
			/** Select the priority so that preferred customers or critical issues are handled quickly. */
			PriorityCode: DevKit.Controls.OptionSet;
			/** Enter the expected due date and time for the activity to be completed to provide details about when the email will be sent. */
			ScheduledEnd: DevKit.Controls.DateTime;
			/** Select the email's status. */
			StatusCode: DevKit.Controls.OptionSet;
		}
		interface tab_Email_Sections {
			/** Recipient information */
			recipient_information: DevKit.Controls.Section;
			Regarding_information: DevKit.Controls.Section;
		}
		/** Email */
		interface tab_Email extends DevKit.Controls.ITab {
			Section: tab_Email_Sections;
		}
		interface Tabs {
			/** Email */
			Email: tab_Email;
		}
		interface Body {
			Tab: Tabs;
			/** Enter the recipients that are included on the email distribution, but are not displayed to other recipients. */
			bcc: DevKit.Controls.Lookup;
			/** Enter the recipients that should be copied on the email. */
			cc: DevKit.Controls.Lookup;
			/** Type the greeting and message text of the email. */
			Description: DevKit.Controls.String;
			/** Enter the sender of the email. */
			from: DevKit.Controls.Lookup;
			/** Choose the record that the email relates to. */
			RegardingObjectId: DevKit.Controls.Lookup;
			/** Type a short description about the objective or primary topic of the email. */
			Subject: DevKit.Controls.String;
			/** Enter the account, contact, lead, queue, or user recipients for the email. */
			to: DevKit.Controls.Lookup;
		}
		interface Grid {
			/** Attachment */
			attachmentsGrid: DevKit.Controls.Grid;
		}
	}
	export class FormEnhanced_Email extends DevKit.IForm {
		/**
		* Enhanced Email [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** The Body section of form Enhanced_Email */
		Body: DevKit.FormEnhanced_Email.Body;
		/** The Header section of form Enhanced_Email */
		Header: DevKit.FormEnhanced_Email.Header;
		/** The Grid of form Enhanced_Email */
		Grid: DevKit.FormEnhanced_Email.Grid;
	}
	namespace FormEmail_Wizard {
		interface Header extends DevKit.Controls.IHeader {
			/** Select the priority so that preferred customers or critical issues are handled quickly. */
			PriorityCode: DevKit.Controls.OptionSet;
			/** Enter the expected due date and time for the activity to be completed to provide details about when the email will be sent. */
			ScheduledEnd: DevKit.Controls.DateTime;
		}
		interface tab_Email_Sections {
			/** Attachments */
			attachments: DevKit.Controls.Section;
			email_description: DevKit.Controls.Section;
			Hidden_Section: DevKit.Controls.Section;
			recipient_information: DevKit.Controls.Section;
			Regarding_information: DevKit.Controls.Section;
		}
		interface tab_Email extends DevKit.Controls.ITab {
			Section: tab_Email_Sections;
		}
		interface Tabs {
			Email: tab_Email;
		}
		interface Body {
			Tab: Tabs;
			/** Type the number of minutes spent creating and sending the email. The duration is used in reporting. */
			ActualDurationMinutes: DevKit.Controls.Integer;
			/** Enter the recipients that are included on the email distribution, but are not displayed to other recipients. */
			bcc: DevKit.Controls.Lookup;
			/** Enter the recipients that should be copied on the email. */
			cc: DevKit.Controls.Lookup;
			/** Type the greeting and message text of the email. */
			Description: DevKit.Controls.String;
			/** Enter the sender of the email. */
			from: DevKit.Controls.Lookup;
			/** Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
			OwnerId: DevKit.Controls.Lookup;
			/** Choose the record that the email relates to. */
			RegardingObjectId: DevKit.Controls.Lookup;
			/** Select the email's status. */
			StatusCode: DevKit.Controls.OptionSet;
			/** Type a short description about the objective or primary topic of the email. */
			Subject: DevKit.Controls.String;
			/** Enter the account, contact, lead, queue, or user recipients for the email. */
			to: DevKit.Controls.Lookup;
		}
		interface Grid {
			/** Attachment */
			attachmentsGrid: DevKit.Controls.Grid;
		}
	}
	export class FormEmail_Wizard extends DevKit.IForm {
		/**
		* Wizard [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** The Body section of form Email_Wizard */
		Body: DevKit.FormEmail_Wizard.Body;
		/** The Header section of form Email_Wizard */
		Header: DevKit.FormEmail_Wizard.Header;
		/** The Grid of form Email_Wizard */
		Grid: DevKit.FormEmail_Wizard.Grid;
	}
	export class EmailApi {
		/**
		* DynamicsCrm.DevKit EmailApi
		* @param entity The entity object from OData response
		*/
		constructor(entity?: Record<string, any>)
		/**
		 * Get the raw value of an aliased field
		 * @param alias The alias field name
		 * @param isMultiOptionSet True if the field is a multi-option set
		 * @returns The raw value or null if not found
		 */
		getAliasedValue(alias: string, isMultiOptionSet?: boolean): any;
		/**
		 * Get the formatted value of an aliased field
		 * @param alias The alias field name
		 * @param isMultiOptionSet True if the field is a multi-option set
		 * @returns The formatted value or empty string if not found
		 */
		getAliasedFormattedValue(alias: string, isMultiOptionSet?: boolean): string | string[];
		/** The entity object for Create/Update operations*/
		readonly Entity: Record<string, any>;
		/** The OData entity object containing raw data*/
		readonly ODataEntity: Record<string, any>;
		/** The entity name */
		readonly EntityName: string;
		/** The entity collection name */
		readonly EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependent on the fields that are retrieved */
		readonly "@odata.etag": string;
		/** The Entity that Accepted the Email */
		acceptingentityid_queue: string | null;
		/** The Entity that Accepted the Email */
		acceptingentityid_systemuser: string | null;
		/** For internal use only. */
		ActivityAdditionalParams: string | null;
		/** Unique identifier of the email activity. */
		ActivityId: string | null;
		/** Type the number of minutes spent creating and sending the email. The duration is used in reporting. */
		ActualDurationMinutes: number | null;
		/** Enter the actual end date and time of the email. By default, it displays the date and time when the activity was completed or canceled, but can be edited to capture the actual time to create and send the email. */
		ActualEnd_UtcDateOnly: Date | null;
		/** Enter the actual start date and time for the email. By default, it displays the date and time when the activity was created, but can be edited to capture the actual time to create and send the email. */
		ActualStart_UtcDateOnly: Date | null;
		/** Shows the umber of attachments of the email message. */
		readonly AttachmentCount: number | null;
		/** Shows the number of times an email attachment has been viewed. */
		AttachmentOpenCount: number | null;
		/** Hash of base of conversation index. */
		BaseConversationIndexHash: number | null;
		/** Type a category to identify the email type, such as lead outreach, customer follow-up, or service alert, to tie the email to a business group or function. */
		Category: string | null;
		/** Indicates if the body is compressed. */
		readonly Compressed: boolean | null;
		/** Identifier for all the email responses for this conversation. */
		readonly ConversationIndex: string | null;
		/** Conversation Tracking Id. */
		ConversationTrackingId: string | null;
		/** Correlated Activity Id */
		CorrelatedActivityId: string | null;
		/** Indicates if the subject changed compared to the subject of the correlated email */
		correlatedsubjectchanged: boolean | null;
		/** Shows how an email is correlated to an existing email in Microsoft Dynamics 365. XHeader and CustomCorrelation are not used. For system use only. */
		readonly CorrelationMethod: OptionSet.Email.CorrelationMethod | null;
		/** Shows who created the record. */
		readonly CreatedBy: string | null;
		/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Shows who created the record on behalf of another user. */
		readonly CreatedOnBehalfBy: string | null;
		/** Enter the expected date and time when email will be sent. */
		DelayedEmailSendTime_UtcDateAndTime: Date | null;
		/** Shows the count of the number of attempts made to send the email. The count is used as an indicator of email routing issues. */
		DeliveryAttempts: number | null;
		/** Select the priority of delivery of the email to the email server. */
		DeliveryPriorityCode: OptionSet.Email.DeliveryPriorityCode | null;
		/** Select whether the sender should receive confirmation that the email was delivered. */
		DeliveryReceiptRequested: boolean | null;
		/** Type the greeting and message text of the email. */
		Description: string | null;
		/** File that contains description content. */
		readonly DescriptionBlobId_name: string | null;
		/** Select the direction of the email as incoming or outbound. */
		DirectionCode: boolean | null;
		/** Shows the date and time when an email reminder expires. */
		EmailReminderExpiryTime_UtcDateAndTime: Date | null;
		/** Shows the status of the email reminder. */
		readonly EmailReminderStatus: OptionSet.Email.EmailReminderStatus | null;
		/** For internal use only. */
		EmailReminderText: string | null;
		/** Shows the type of the email reminder. */
		EmailReminderType: OptionSet.Email.EmailReminderType | null;
		/** Email Tracking Id. */
		EmailTrackingId: string | null;
		/** Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency. */
		readonly ExchangeRate: number | null;
		/** Select whether the email allows following recipient activities sent from Microsoft Dynamics 365.This is user preference state which can be overridden by system evaluated state. */
		FollowEmailUserPreference: boolean | null;
		/** Unique identifier of the data import or data migration that created this record. */
		ImportSequenceNumber: number | null;
		/** Type the ID of the email message that this email activity is a response to. */
		readonly InReplyTo: string | null;
		/** Contains a set of internet headers associated to the email message in json format */
		InternetMessageHeaders: string | null;
		/** Information regarding whether the email activity was billed as part of resolving a case. */
		IsBilled: boolean | null;
		/** Indicates if the sender of the email is unresolved in case of multiple match */
		IsDuplicateSenderUnresolved: boolean | null;
		/** For internal use only. Shows whether this email is followed. This is evaluated state which overrides user selection of follow email. */
		readonly IsEmailFollowed: boolean | null;
		/** For internal use only. Shows whether this email Reminder is Set. */
		readonly IsEmailReminderSet: boolean | null;
		/** Information regarding whether the activity is a regular activity type or event type. */
		readonly IsRegularActivity: boolean | null;
		/** For internal use only. */
		readonly IsSafeDescriptionTruncated: number | null;
		/** For internal use only. */
		readonly IsUnsafe: number | null;
		/** Indication if the email was created by a workflow rule. */
		IsWorkflowCreated: boolean | null;
		/** Contains the date and time stamp of the last on hold time. */
		LastOnHoldTime_UtcDateAndTime: Date | null;
		/** Shows the latest date and time when email was opened. */
		LastOpenedTime_UtcDateAndTime: Date | null;
		/** Shows the number of times a link in an email has been clicked. */
		LinksClickedCount: number | null;
		/** Unique identifier of the email message. Used only for email that is received. */
		MessageId: string | null;
		/** For internal use only. */
		MessageIdDupCheck: string | null;
		/** MIME type of the email message data. */
		MimeType: string | null;
		/** Shows who last updated the record. */
		readonly ModifiedBy: string | null;
		/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Shows who last updated the record on behalf of another user. */
		readonly ModifiedOnBehalfBy: string | null;
		/** Name of the agent which associated the activity. */
		msdyn_associatedagentname: string | null;
		/** Select the notification code to identify issues with the email recipients or attachments, such as blocked attachments. */
		Notifications: OptionSet.Email.Notifications | null;
		/** Shows how long, in minutes, that the record was on hold. */
		readonly OnHoldTime: number | null;
		/** Shows the number of times an email has been opened. */
		OpenCount: number | null;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date | null;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string | null;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string | null;
		/** Unique identifier of the business unit that owns the email activity. */
		readonly OwningBusinessUnit: string | null;
		/** Unique identifier of the team who owns the email activity. */
		readonly OwningTeam: string | null;
		/** Unique identifier of the user who owns the email activity. */
		readonly OwningUser: string | null;
		/** Select the activity that the email is associated with. */
		ParentActivityId: string | null;
		/** For internal use only. */
		readonly ParentSensitivityLabelId: string | null;
		/** For internal use only. */
		readonly PostponeEmailProcessingUntil_UtcDateAndTime: Date | null;
		/** Select the priority so that preferred customers or critical issues are handled quickly. */
		PriorityCode: OptionSet.Email.PriorityCode | null;
		/** Shows the ID of the process. */
		ProcessId: string | null;
		/** Purview Rights */
		PurviewRights: string | null;
		/** Indicates that a read receipt is requested. */
		ReadReceiptRequested: boolean | null;
		/** The Mailbox that Received the Email. */
		ReceivingMailboxId: string | null;
		/** Reminder Action Card Id. */
		ReminderActionCardId: string | null;
		/** Shows the number of replies received for an email. */
		readonly ReplyCount: number | null;
		/** For internal use only */
		ReservedForInternalUse: string | null;
		/** Scheduled duration of the email activity, specified in minutes. */
		readonly ScheduledDurationMinutes: number | null;
		/** Enter the expected due date and time for the activity to be completed to provide details about when the email will be sent. */
		ScheduledEnd_UtcDateAndTime: Date | null;
		/** Enter the expected start date and time for the activity to provide details about the tentative time when the email activity must be initiated. */
		ScheduledStart_UtcDateAndTime: Date | null;
		/** Sender of the email. */
		Sender: string | null;
		/** Select the mailbox associated with the sender of the email message. */
		readonly SenderMailboxId: string | null;
		/** Shows the parent account of the sender of the email. */
		readonly SendersAccount: string | null;
		/** The sensitivity label assigned to the Email. */
		SensitivityLabelId: string | null;
		/** For internal use only. */
		SensitivityLabelInfo: string | null;
		/** Shows the date and time that the email was sent. */
		readonly SentOn_UtcDateAndTime: Date | null;
		/** Choose the service level agreement (SLA) that you want to apply to the email record. */
		SLAId: string | null;
		/** Last SLA that was applied to this email. This field is for internal use only. */
		readonly SLAInvokedId: string | null;
		/** Shows the date and time by which the activities are sorted. */
		SortDate_UtcDateAndTime: Date | null;
		/** Shows the ID of the stage. */
		StageId: string | null;
		/** Shows whether the email is open, completed, or canceled. Completed and canceled email is read-only and can't be edited. */
		StateCode: OptionSet.Email.StateCode | null;
		/** Select the email's status. */
		StatusCode: OptionSet.Email.StatusCode | null;
		/** Type a subcategory to identify the email type and relate the activity to a specific product, sales region, business group, or other function. */
		Subcategory: string | null;
		/** Type a short description about the objective or primary topic of the email. */
		Subject: string | null;
		/** Shows the Microsoft Office Outlook account for the user who submitted the email to Microsoft Dynamics 365. */
		SubmittedBy: string | null;
		/** For internal use only. ID for template used in email. */
		TemplateId: string | null;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number | null;
		/** Shows the email addresses corresponding to the recipients. */
		ToRecipients: string | null;
		/** Shows the tracking token assigned to the email to make sure responses are automatically tracked in Microsoft Dynamics 365. */
		TrackingToken: string | null;
		/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
		TransactionCurrencyId: string | null;
		/** For internal use only. */
		TraversedPath: string | null;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number | null;
		/** Version number of the email message. */
		readonly VersionNumber: number | null;
		/** The array of object that can cast object to ActivityPartyApi class */
		ActivityParties: Array<Record<string, any>> | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
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
			/** Indicates if the subject changed compared to the subject of the correlated email */
			readonly correlatedsubjectchanged: string;
			/** Shows how an email is correlated to an existing email in Microsoft Dynamics 365. XHeader and CustomCorrelation are not used. For system use only. */
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
			/** File that contains description content. */
			readonly DescriptionBlobId_name: string;
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
			/** Contains a set of internet headers associated to the email message in json format */
			readonly InternetMessageHeaders: string;
			/** Information regarding whether the email activity was billed as part of resolving a case. */
			readonly IsBilled: string;
			/** Indicates if the sender of the email is unresolved in case of multiple match */
			readonly IsDuplicateSenderUnresolved: string;
			/** For internal use only. Shows whether this email is followed. This is evaluated state which overrides user selection of follow email. */
			readonly IsEmailFollowed: string;
			/** For internal use only. Shows whether this email Reminder is Set. */
			readonly IsEmailReminderSet: string;
			/** Information regarding whether the activity is a regular activity type or event type. */
			readonly IsRegularActivity: string;
			/** For internal use only. */
			readonly IsSafeDescriptionTruncated: string;
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
			/** Name of the agent which associated the activity. */
			readonly msdyn_associatedagentname: string;
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
			readonly ParentSensitivityLabelId: string;
			/** For internal use only. */
			readonly PostponeEmailProcessingUntil_UtcDateAndTime: string;
			/** Select the priority so that preferred customers or critical issues are handled quickly. */
			readonly PriorityCode: string;
			/** Shows the ID of the process. */
			readonly ProcessId: string;
			/** Purview Rights */
			readonly PurviewRights: string;
			/** Indicates that a read receipt is requested. */
			readonly ReadReceiptRequested: string;
			/** The Mailbox that Received the Email. */
			readonly ReceivingMailboxId: string;
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
			/** The sensitivity label assigned to the Email. */
			readonly SensitivityLabelId: string;
			/** For internal use only. */
			readonly SensitivityLabelInfo: string;
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
		enum AcceptingEntityTypeCode {
		}
		enum ActivityTypeCode {
			/** Appointment = 4201*/
			Appointment = 4201,
			/** Email = 4202*/
			Email = 4202,
			/** Fax = 4204*/
			Fax = 4204,
			/** Invite_Redemption = 10407*/
			Invite_Redemption = 10407,
			/** Letter = 4207*/
			Letter = 4207,
			/** Phone_Call = 4210*/
			Phone_Call = 4210,
			/** Portal_Comment = 10408*/
			Portal_Comment = 10408,
			/** Recurring_Appointment = 4251*/
			Recurring_Appointment = 4251,
			/** Task = 4212*/
			Task = 4212,
			/** Teams_chat = 10253*/
			Teams_chat = 10253
		}
		enum CorrelationMethod {
			/** ConversationIndex = 5*/
			ConversationIndex = 5,
			/** CustomCorrelation = 7*/
			CustomCorrelation = 7,
			/** InReplyTo = 3*/
			InReplyTo = 3,
			/** None = 0*/
			None = 0,
			/** Skipped = 1*/
			Skipped = 1,
			/** SmartMatching = 6*/
			SmartMatching = 6,
			/** TrackingToken = 4*/
			TrackingToken = 4,
			/** XHeader = 2*/
			XHeader = 2
		}
		enum DeliveryPriorityCode {
			/** High = 2*/
			High = 2,
			/** Low = 0*/
			Low = 0,
			/** Normal = 1*/
			Normal = 1
		}
		enum EmailReminderStatus {
			/** NotSet = 0*/
			NotSet = 0,
			/** ReminderExpired = 2*/
			ReminderExpired = 2,
			/** ReminderInvalid = 3*/
			ReminderInvalid = 3,
			/** ReminderSet = 1*/
			ReminderSet = 1
		}
		enum EmailReminderType {
			/** If_I_do_not_receive_a_reply_by = 0*/
			If_I_do_not_receive_a_reply_by = 0,
			/** If_the_email_is_not_opened_by = 1*/
			If_the_email_is_not_opened_by = 1,
			/** Remind_me_anyways_at = 2*/
			Remind_me_anyways_at = 2
		}
		enum EmailSenderObjectTypeCode {
		}
		enum Notifications {
			/** None = 0*/
			None = 0,
			/** The_message_was_saved_as_a_Microsoft_Dynamics_365_email_record_but_not_all_the_attachments_could_be_saved_with_it_An_attachment_cannot_be_saved_if_it_is_blocked_or_if_its_file_type_is_invalid = 1*/
			The_message_was_saved_as_a_Microsoft_Dynamics_365_email_record_but_not_all_the_attachments_could_be_saved_with_it_An_attachment_cannot_be_saved_if_it_is_blocked_or_if_its_file_type_is_invalid = 1,
			/** Truncated_body = 2*/
			Truncated_body = 2
		}
		enum PriorityCode {
			/** High = 2*/
			High = 2,
			/** Low = 0*/
			Low = 0,
			/** Normal = 1*/
			Normal = 1
		}
		enum RegardingObjectTypeCode {
		}
		enum SendersAccountObjectTypeCode {
		}
		enum StateCode {
			/** Canceled = 2*/
			Canceled = 2,
			/** Completed = 1*/
			Completed = 1,
			/** Open = 0*/
			Open = 0
		}
		enum StatusCode {
			/** Canceled = 5*/
			Canceled = 5,
			/** Completed = 2*/
			Completed = 2,
			/** Draft = 1*/
			Draft = 1,
			/** Failed = 8*/
			Failed = 8,
			/** Pending_Send = 6*/
			Pending_Send = 6,
			/** Received = 4*/
			Received = 4,
			/** Sending = 7*/
			Sending = 7,
			/** Sent = 3*/
			Sent = 3
		}
		enum RollupState {
			/** NotCalculated = 0 - Attribute value is yet to be calculated */
			NotCalculated,
			/** Calculated = 1 - Attribute value has been calculated per the last update time in <AttributeSchemaName>_Date attribute */
			Calculated,
			/** OverflowError = 2 - Attribute value calculation lead to overflow error */
			OverflowError,
			/** OtherError = 3 - Attribute value calculation failed due to an internal error, next run of calculation job will likely fix it */
			OtherError,
			/** RetryLimitExceeded = 4 - Attribute value calculation failed because the maximum number of retry attempts to calculate the value were exceeded likely due to high number of concurrency and locking conflicts */
			RetryLimitExceeded,
			/** HierarchicalRecursionLimitReached = 5 - Attribute value calculation failed because maximum hierarchy depth limit for calculation was reached */
			HierarchicalRecursionLimitReached,
			/** LoopDetected = 6 - Attribute value calculation failed because a recursive loop was detected in the hierarchy of the record */
			LoopDetected
		}
	}
}