/**
 * Email.webapi.ts - Email WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Email WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IEmailApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<IEmailApi, 'FormattedValue'>]: string };
	/** The Entity that Accepted the Email */
	AcceptingEntityId: DevKit.Guid | null;
	/** For internal use only. */
	ActivityAdditionalParams: string | null;
	/** Unique identifier of the email activity. */
	ActivityId: DevKit.Guid | null;
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
	ConversationTrackingId: DevKit.Guid | null;
	/** Correlated Activity Id */
	CorrelatedActivityId: DevKit.Guid | null;
	/** Indicates if the subject changed compared to the subject of the correlated email */
	correlatedsubjectchanged: boolean | null;
	/** Shows how an email is correlated to an existing email in Microsoft Dynamics 365. XHeader and CustomCorrelation are not used. For system use only. */
	readonly CorrelationMethod: number | null;
	/** Shows who created the record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Shows who created the record on behalf of another user. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Enter the expected date and time when email will be sent. */
	DelayedEmailSendTime_UtcDateAndTime: Date | null;
	/** Shows the count of the number of attempts made to send the email. The count is used as an indicator of email routing issues. */
	DeliveryAttempts: number | null;
	/** Select the priority of delivery of the email to the email server. */
	DeliveryPriorityCode: number | null;
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
	readonly EmailReminderStatus: number | null;
	/** For internal use only. */
	EmailReminderText: string | null;
	/** Shows the type of the email reminder. */
	EmailReminderType: number | null;
	/** Shows the sender of the email. */
	readonly EmailSender: DevKit.Guid | null;
	/** Email Tracking Id. */
	EmailTrackingId: DevKit.Guid | null;
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
	MessageIdDupCheck: DevKit.Guid | null;
	/** MIME type of the email message data. */
	MimeType: string | null;
	/** Shows who last updated the record. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Shows who last updated the record on behalf of another user. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Select the notification code to identify issues with the email recipients or attachments, such as blocked attachments. */
	Notifications: number | null;
	/** Shows how long, in minutes, that the record was on hold. */
	readonly OnHoldTime: number | null;
	/** Shows the number of times an email has been opened. */
	OpenCount: number | null;
	/** Date and time that the record was migrated. */
	OverriddenCreatedOn_UtcDateOnly: Date | null;
	/** Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
	OwnerId: DevKit.Guid | null;
	/** Unique identifier of the business unit that owns the email activity. */
	readonly OwningBusinessUnit: DevKit.Guid | null;
	/** Unique identifier of the team who owns the email activity. */
	readonly OwningTeam: DevKit.Guid | null;
	/** Unique identifier of the user who owns the email activity. */
	readonly OwningUser: DevKit.Guid | null;
	/** Select the activity that the email is associated with. */
	ParentActivityId: DevKit.Guid | null;
	/** For internal use only. */
	readonly ParentSensitivityLabelId: DevKit.Guid | null;
	/** For internal use only. */
	readonly PostponeEmailProcessingUntil_UtcDateAndTime: Date | null;
	/** Select the priority so that preferred customers or critical issues are handled quickly. */
	PriorityCode: number | null;
	/** Shows the ID of the process. */
	ProcessId: DevKit.Guid | null;
	/** Purview Rights */
	PurviewRights: string | null;
	/** Indicates that a read receipt is requested. */
	ReadReceiptRequested: boolean | null;
	/** The Mailbox that Received the Email. */
	ReceivingMailboxId: DevKit.Guid | null;
	/** Choose the record that the email relates to. */
	RegardingObjectId: DevKit.Guid | null;
	/** Reminder Action Card Id. */
	ReminderActionCardId: DevKit.Guid | null;
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
	readonly SenderMailboxId: DevKit.Guid | null;
	/** Shows the parent account of the sender of the email. */
	readonly SendersAccount: DevKit.Guid | null;
	/** The sensitivity label assigned to the Email. */
	SensitivityLabelId: DevKit.Guid | null;
	/** For internal use only. */
	SensitivityLabelInfo: string | null;
	/** Shows the date and time that the email was sent. */
	readonly SentOn_UtcDateAndTime: Date | null;
	/** Choose the service level agreement (SLA) that you want to apply to the email record. */
	SLAId: DevKit.Guid | null;
	/** Last SLA that was applied to this email. This field is for internal use only. */
	readonly SLAInvokedId: DevKit.Guid | null;
	/** Shows the date and time by which the activities are sorted. */
	SortDate_UtcDateAndTime: Date | null;
	/** Shows the ID of the stage. */
	StageId: DevKit.Guid | null;
	/** Shows whether the email is open, completed, or canceled. Completed and canceled email is read-only and can't be edited. */
	StateCode: number | null;
	/** Select the email's status. */
	StatusCode: number | null;
	/** Type a subcategory to identify the email type and relate the activity to a specific product, sales region, business group, or other function. */
	Subcategory: string | null;
	/** Type a short description about the objective or primary topic of the email. */
	Subject: string | null;
	/** Shows the Microsoft Office Outlook account for the user who submitted the email to Microsoft Dynamics 365. */
	SubmittedBy: string | null;
	/** For internal use only. ID for template used in email. */
	TemplateId: DevKit.Guid | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** Shows the email addresses corresponding to the recipients. */
	ToRecipients: string | null;
	/** Shows the tracking token assigned to the email to make sure responses are automatically tracked in Microsoft Dynamics 365. */
	TrackingToken: string | null;
	/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
	TransactionCurrencyId: DevKit.Guid | null;
	/** For internal use only. */
	TraversedPath: string | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
	/** Version number of the email message. */
	readonly VersionNumber: number | null;
}

const EmailFieldConfig: DevKit.IWebApiFieldConfigMap = {
	AcceptingEntityId: { schemaName: 'AcceptingEntityId', logicalName: '_acceptingentityid_value', entityCollectionName: 'queues', entityLogicalName: 'queue' },
	ActivityAdditionalParams: { logicalName: 'activityadditionalparams' },
	ActivityId: { logicalName: 'activityid' },
	ActualDurationMinutes: { logicalName: 'actualdurationminutes', type: 'Integer' },
	ActualEnd_UtcDateOnly: { logicalName: 'actualend', type: 'DateTime' },
	ActualStart_UtcDateOnly: { logicalName: 'actualstart', type: 'DateTime' },
	AttachmentCount: { logicalName: 'attachmentcount', readOnly: true, type: 'Integer' },
	AttachmentOpenCount: { logicalName: 'attachmentopencount', type: 'Integer' },
	BaseConversationIndexHash: { logicalName: 'baseconversationindexhash', type: 'Integer' },
	Category: { logicalName: 'category' },
	Compressed: { logicalName: 'compressed', readOnly: true, type: 'Boolean' },
	ConversationIndex: { logicalName: 'conversationindex', readOnly: true },
	ConversationTrackingId: { logicalName: 'conversationtrackingid' },
	CorrelatedActivityId: { schemaName: 'CorrelatedActivityId', logicalName: '_correlatedactivityid_value', entityCollectionName: 'emails', entityLogicalName: 'email' },
	correlatedsubjectchanged: { logicalName: 'correlatedsubjectchanged', type: 'Boolean' },
	CorrelationMethod: { logicalName: 'correlationmethod', readOnly: true, type: 'Integer' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	DelayedEmailSendTime_UtcDateAndTime: { logicalName: 'delayedemailsendtime', type: 'DateTime' },
	DeliveryAttempts: { logicalName: 'deliveryattempts', type: 'Integer' },
	DeliveryPriorityCode: { logicalName: 'deliveryprioritycode', type: 'Integer' },
	DeliveryReceiptRequested: { logicalName: 'deliveryreceiptrequested', type: 'Boolean' },
	Description: { logicalName: 'description' },
	DescriptionBlobId_name: { logicalName: 'descriptionblobid', readOnly: true },
	DirectionCode: { logicalName: 'directioncode', type: 'Boolean' },
	EmailReminderExpiryTime_UtcDateAndTime: { logicalName: 'emailreminderexpirytime', type: 'DateTime' },
	EmailReminderStatus: { logicalName: 'emailreminderstatus', readOnly: true, type: 'Integer' },
	EmailReminderText: { logicalName: 'emailremindertext' },
	EmailReminderType: { logicalName: 'emailremindertype', type: 'Integer' },
	EmailSender: { schemaName: 'EmailSender', logicalName: '_emailsender_value', readOnly: true, entityCollectionName: 'accounts', entityLogicalName: 'account' },
	EmailTrackingId: { logicalName: 'emailtrackingid' },
	ExchangeRate: { logicalName: 'exchangerate', readOnly: true, type: 'Number' },
	FollowEmailUserPreference: { logicalName: 'followemailuserpreference', type: 'Boolean' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	InReplyTo: { logicalName: 'inreplyto', readOnly: true },
	InternetMessageHeaders: { logicalName: 'internetmessageheaders' },
	IsBilled: { logicalName: 'isbilled', type: 'Boolean' },
	IsDuplicateSenderUnresolved: { logicalName: 'isduplicatesenderunresolved', type: 'Boolean' },
	IsEmailFollowed: { logicalName: 'isemailfollowed', readOnly: true, type: 'Boolean' },
	IsEmailReminderSet: { logicalName: 'isemailreminderset', readOnly: true, type: 'Boolean' },
	IsRegularActivity: { logicalName: 'isregularactivity', readOnly: true, type: 'Boolean' },
	IsSafeDescriptionTruncated: { logicalName: 'issafedescriptiontruncated', readOnly: true, type: 'Integer' },
	IsUnsafe: { logicalName: 'isunsafe', readOnly: true, type: 'Integer' },
	IsWorkflowCreated: { logicalName: 'isworkflowcreated', type: 'Boolean' },
	LastOnHoldTime_UtcDateAndTime: { logicalName: 'lastonholdtime', type: 'DateTime' },
	LastOpenedTime_UtcDateAndTime: { logicalName: 'lastopenedtime', type: 'DateTime' },
	LinksClickedCount: { logicalName: 'linksclickedcount', type: 'Integer' },
	MessageId: { logicalName: 'messageid' },
	MessageIdDupCheck: { logicalName: 'messageiddupcheck' },
	MimeType: { logicalName: 'mimetype' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Notifications: { logicalName: 'notifications', type: 'Integer' },
	OnHoldTime: { logicalName: 'onholdtime', readOnly: true, type: 'Integer' },
	OpenCount: { logicalName: 'opencount', type: 'Integer' },
	OverriddenCreatedOn_UtcDateOnly: { logicalName: 'overriddencreatedon', type: 'DateTime' },
	OwnerId: { schemaName: 'OwnerId', logicalName: '_ownerid_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OwningBusinessUnit: { schemaName: 'OwningBusinessUnit', logicalName: '_owningbusinessunit_value', readOnly: true, entityCollectionName: 'businessunits', entityLogicalName: 'businessunit' },
	OwningTeam: { schemaName: 'OwningTeam', logicalName: '_owningteam_value', readOnly: true, entityCollectionName: 'teams', entityLogicalName: 'team' },
	OwningUser: { schemaName: 'OwningUser', logicalName: '_owninguser_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ParentActivityId: { schemaName: 'ParentActivityId', logicalName: '_parentactivityid_value', entityCollectionName: 'emails', entityLogicalName: 'email' },
	ParentSensitivityLabelId: { logicalName: 'parentsensitivitylabelid', readOnly: true },
	PostponeEmailProcessingUntil_UtcDateAndTime: { logicalName: 'postponeemailprocessinguntil', readOnly: true, type: 'DateTime' },
	PriorityCode: { logicalName: 'prioritycode', type: 'Integer' },
	ProcessId: { logicalName: 'processid' },
	PurviewRights: { logicalName: 'purviewrights' },
	ReadReceiptRequested: { logicalName: 'readreceiptrequested', type: 'Boolean' },
	ReceivingMailboxId: { schemaName: 'ReceivingMailboxId', logicalName: '_receivingmailboxid_value', entityCollectionName: 'mailboxes', entityLogicalName: 'mailbox' },
	RegardingObjectId: { schemaName: 'RegardingObjectId', logicalName: '_regardingobjectid_value', entityCollectionName: 'accounts', entityLogicalName: 'account' },
	ReminderActionCardId: { logicalName: 'reminderactioncardid' },
	ReplyCount: { logicalName: 'replycount', readOnly: true, type: 'Integer' },
	ReservedForInternalUse: { logicalName: 'reservedforinternaluse' },
	ScheduledDurationMinutes: { logicalName: 'scheduleddurationminutes', readOnly: true, type: 'Integer' },
	ScheduledEnd_UtcDateAndTime: { logicalName: 'scheduledend', type: 'DateTime' },
	ScheduledStart_UtcDateAndTime: { logicalName: 'scheduledstart', type: 'DateTime' },
	Sender: { logicalName: 'sender' },
	SenderMailboxId: { schemaName: 'SenderMailboxId', logicalName: '_sendermailboxid_value', readOnly: true, entityCollectionName: 'mailboxes', entityLogicalName: 'mailbox' },
	SendersAccount: { schemaName: 'SendersAccount', logicalName: '_sendersaccount_value', readOnly: true, entityCollectionName: 'accounts', entityLogicalName: 'account' },
	SensitivityLabelId: { schemaName: 'SensitivityLabelId', logicalName: '_sensitivitylabelid_value', entityCollectionName: 'sensitivitylabels', entityLogicalName: 'sensitivitylabel' },
	SensitivityLabelInfo: { logicalName: 'sensitivitylabelinfo' },
	SentOn_UtcDateAndTime: { logicalName: 'senton', readOnly: true, type: 'DateTime' },
	SLAId: { schemaName: 'SLAId', logicalName: '_slaid_value', entityCollectionName: 'slas', entityLogicalName: 'sla' },
	SLAInvokedId: { schemaName: 'SLAInvokedId', logicalName: '_slainvokedid_value', readOnly: true, entityCollectionName: 'slas', entityLogicalName: 'sla' },
	SortDate_UtcDateAndTime: { logicalName: 'sortdate', type: 'DateTime' },
	StageId: { logicalName: 'stageid' },
	StateCode: { logicalName: 'statecode', type: 'Integer' },
	StatusCode: { logicalName: 'statuscode', type: 'Integer' },
	Subcategory: { logicalName: 'subcategory' },
	Subject: { logicalName: 'subject' },
	SubmittedBy: { logicalName: 'submittedby' },
	TemplateId: { schemaName: 'TemplateId', logicalName: '_templateid_value', entityCollectionName: 'templates', entityLogicalName: 'template' },
	TimeZoneRuleVersionNumber: { logicalName: 'timezoneruleversionnumber', type: 'Integer' },
	ToRecipients: { logicalName: 'torecipients' },
	TrackingToken: { logicalName: 'trackingtoken' },
	TransactionCurrencyId: { schemaName: 'TransactionCurrencyId', logicalName: '_transactioncurrencyid_value', entityCollectionName: 'transactioncurrencies', entityLogicalName: 'transactioncurrency' },
	TraversedPath: { logicalName: 'traversedpath' },
	UTCConversionTimeZoneCode: { logicalName: 'utcconversiontimezonecode', type: 'Integer' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * Email WebApi class for early-bound style coding
 * Usage: const email = new EmailApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class EmailApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IEmailApi>(entity, 'email', 'emails', EmailFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface EmailApi extends IEmailApi { }
