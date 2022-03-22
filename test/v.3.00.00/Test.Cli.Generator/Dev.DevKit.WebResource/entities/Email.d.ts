﻿//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormBulk_Email {
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
			Email_MainSection: DevKit.Controls.Section;
			Email_PreviewSection: DevKit.Controls.Section;
		}
		interface tab_Email_Engagement_Sections {
			Email_Engagement_column_3_section_1: DevKit.Controls.Section;
			emailengagementactions: DevKit.Controls.Section;
			Emailrecipient_section_6: DevKit.Controls.Section;
		}
		interface tab_Email extends DevKit.Controls.ITab {
			Section: tab_Email_Sections;
		}
		interface tab_Email_Engagement extends DevKit.Controls.ITab {
			Section: tab_Email_Engagement_Sections;
		}
		interface Tabs {
			Email: tab_Email;
			Email_Engagement: tab_Email_Engagement;
		}
		interface Body {
			Tab: Tabs;
			/** Type the greeting and message text of the email. */
			Description: DevKit.Controls.String;
			/** Type the greeting and message text of the email. */
			Description1: DevKit.Controls.String;
			emailengagementactionscontrol: DevKit.Controls.EmailEngagement;
			emailrecipientactivitycontrol: DevKit.Controls.EmailRecipient;
			/** Enter the sender of the email. */
			from: DevKit.Controls.Lookup;
			/** Individual email will be sent to each recipient. */
			msdyn_RecipientList: DevKit.Controls.String;
			/** Unique identifier of the object with which the e-mail is associated. */
			RegardingObjectId: DevKit.Controls.Lookup;
			/** Type a short description about the objective or primary topic of the email. */
			Subject: DevKit.Controls.String;
			/** Type a short description about the objective or primary topic of the email. */
			Subject1: DevKit.Controls.String;
			/** Enter the account, contact, lead, queue, or user recipients for the email. */
			to: DevKit.Controls.Lookup;
		}
		interface Footer extends DevKit.Controls.IFooter {
			/** For internal use only. Shows whether this email is followed. This is evaluated state which overrides user selection of follow email. */
			IsEmailFollowed: DevKit.Controls.Boolean;
			/** For internal use only. Shows whether this email Reminder is Set. */
			IsEmailReminderSet: DevKit.Controls.Boolean;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
		interface Grid {
			attachmentsGrid: DevKit.Controls.Grid;
		}
	}
	class FormBulk_Email extends DevKit.IForm {
		/**
		* Bulk Email [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Bulk_Email */
		Body: DevKit.FormBulk_Email.Body;
		/** The Footer section of form Bulk_Email */
		Footer: DevKit.FormBulk_Email.Footer;
		/** The Header section of form Bulk_Email */
		Header: DevKit.FormBulk_Email.Header;
		/** The Process of form Bulk_Email */
		Process: DevKit.FormBulk_Email.Process;
		/** The Grid of form Bulk_Email */
		Grid: DevKit.FormBulk_Email.Grid;
		/** The SidePanes of form Bulk_Email */
		SidePanes: DevKit.SidePanes;
	}
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
			attachments: DevKit.Controls.Section;
			email_description: DevKit.Controls.Section;
			emailengagementactions: DevKit.Controls.Section;
			Emailrecipient_section_6: DevKit.Controls.Section;
			recipient_information: DevKit.Controls.Section;
			Regarding_information: DevKit.Controls.Section;
			tab_4_section_2: DevKit.Controls.Section;
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
			emailengagementactionscontrol: DevKit.Controls.EmailEngagement;
			emailrecipientactivitycontrol: DevKit.Controls.EmailRecipient;
			/** Enter the sender of the email. */
			from: DevKit.Controls.Lookup;
			/** Unique identifier of the object with which the e-mail is associated. */
			RegardingObjectId: DevKit.Controls.Lookup;
			/** Type a short description about the objective or primary topic of the email. */
			Subject: DevKit.Controls.String;
			/** Enter the account, contact, lead, queue, or user recipients for the email. */
			to: DevKit.Controls.Lookup;
		}
		interface Footer extends DevKit.Controls.IFooter {
			/** For internal use only. Shows whether this email is followed. This is evaluated state which overrides user selection of follow email. */
			IsEmailFollowed: DevKit.Controls.Boolean;
			/** For internal use only. Shows whether this email Reminder is Set. */
			IsEmailReminderSet: DevKit.Controls.Boolean;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
		interface Grid {
			attachmentsGrid: DevKit.Controls.Grid;
		}
	}
	class FormEmail extends DevKit.IForm {
		/**
		* Email [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Email */
		Body: DevKit.FormEmail.Body;
		/** The Footer section of form Email */
		Footer: DevKit.FormEmail.Footer;
		/** The Header section of form Email */
		Header: DevKit.FormEmail.Header;
		/** The Process of form Email */
		Process: DevKit.FormEmail.Process;
		/** The Grid of form Email */
		Grid: DevKit.FormEmail.Grid;
		/** The SidePanes of form Email */
		SidePanes: DevKit.SidePanes;
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
			tab_2_section_2: DevKit.Controls.Section;
			tab_2_section_3: DevKit.Controls.Section;
			tab_2_section_5: DevKit.Controls.Section;
		}
		interface tab_tab_2 extends DevKit.Controls.ITab {
			Section: tab_tab_2_Sections;
		}
		interface Tabs {
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
			/** Unique identifier of the object with which the e-mail is associated. */
			RegardingObjectId: DevKit.Controls.Lookup;
			/** Type a short description about the objective or primary topic of the email. */
			Subject: DevKit.Controls.String;
			/** Enter the account, contact, lead, queue, or user recipients for the email. */
			to: DevKit.Controls.Lookup;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
		interface Grid {
			attachmentsGrid: DevKit.Controls.Grid;
		}
	}
	class FormEmail_for_Interactive_experience extends DevKit.IForm {
		/**
		* Email for Interactive experience [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Email_for_Interactive_experience */
		Body: DevKit.FormEmail_for_Interactive_experience.Body;
		/** The Header section of form Email_for_Interactive_experience */
		Header: DevKit.FormEmail_for_Interactive_experience.Header;
		/** The Process of form Email_for_Interactive_experience */
		Process: DevKit.FormEmail_for_Interactive_experience.Process;
		/** The Grid of form Email_for_Interactive_experience */
		Grid: DevKit.FormEmail_for_Interactive_experience.Grid;
		/** The SidePanes of form Email_for_Interactive_experience */
		SidePanes: DevKit.SidePanes;
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
			recipient_information: DevKit.Controls.Section;
			Regarding_information: DevKit.Controls.Section;
		}
		interface tab_Email_Engagement_Sections {
			emailengagementactions: DevKit.Controls.Section;
			Emailrecipient_section_6: DevKit.Controls.Section;
		}
		interface tab_Email extends DevKit.Controls.ITab {
			Section: tab_Email_Sections;
		}
		interface tab_Email_Engagement extends DevKit.Controls.ITab {
			Section: tab_Email_Engagement_Sections;
		}
		interface Tabs {
			Email: tab_Email;
			Email_Engagement: tab_Email_Engagement;
		}
		interface Body {
			Tab: Tabs;
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
			/** Unique identifier of the object with which the e-mail is associated. */
			RegardingObjectId: DevKit.Controls.Lookup;
			/** Type a short description about the objective or primary topic of the email. */
			Subject: DevKit.Controls.String;
			/** Enter the account, contact, lead, queue, or user recipients for the email. */
			to: DevKit.Controls.Lookup;
		}
		interface Footer extends DevKit.Controls.IFooter {
			/** For internal use only. Shows whether this email is followed. This is evaluated state which overrides user selection of follow email. */
			IsEmailFollowed: DevKit.Controls.Boolean;
			/** For internal use only. Shows whether this email Reminder is Set. */
			IsEmailReminderSet: DevKit.Controls.Boolean;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
		interface Grid {
			attachmentsGrid: DevKit.Controls.Grid;
		}
	}
	class FormEnhanced_Email extends DevKit.IForm {
		/**
		* Enhanced Email [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Enhanced_Email */
		Body: DevKit.FormEnhanced_Email.Body;
		/** The Footer section of form Enhanced_Email */
		Footer: DevKit.FormEnhanced_Email.Footer;
		/** The Header section of form Enhanced_Email */
		Header: DevKit.FormEnhanced_Email.Header;
		/** The Process of form Enhanced_Email */
		Process: DevKit.FormEnhanced_Email.Process;
		/** The Grid of form Enhanced_Email */
		Grid: DevKit.FormEnhanced_Email.Grid;
		/** The SidePanes of form Enhanced_Email */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormEmail_Wizard {
		interface Header extends DevKit.Controls.IHeader {
			/** Select the priority so that preferred customers or critical issues are handled quickly. */
			PriorityCode: DevKit.Controls.OptionSet;
			/** Enter the expected due date and time for the activity to be completed to provide details about when the email will be sent. */
			ScheduledEnd: DevKit.Controls.DateTime;
		}
		interface tab_Email_Sections {
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
			/** Unique identifier of the object with which the e-mail is associated. */
			RegardingObjectId: DevKit.Controls.Lookup;
			/** Select the email's status. */
			StatusCode: DevKit.Controls.OptionSet;
			/** Type a short description about the objective or primary topic of the email. */
			Subject: DevKit.Controls.String;
			/** Enter the account, contact, lead, queue, or user recipients for the email. */
			to: DevKit.Controls.Lookup;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
		interface Grid {
			attachmentsGrid: DevKit.Controls.Grid;
		}
	}
	class FormEmail_Wizard extends DevKit.IForm {
		/**
		* Wizard [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Email_Wizard */
		Body: DevKit.FormEmail_Wizard.Body;
		/** The Header section of form Email_Wizard */
		Header: DevKit.FormEmail_Wizard.Header;
		/** The Process of form Email_Wizard */
		Process: DevKit.FormEmail_Wizard.Process;
		/** The Grid of form Email_Wizard */
		Grid: DevKit.FormEmail_Wizard.Grid;
		/** The SidePanes of form Email_Wizard */
		SidePanes: DevKit.SidePanes;
	}
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
		readonly emailsender_equipment: string;
		/** Shows the sender of the email. */
		readonly emailsender_lead: string;
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
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_account_email: string;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_asyncoperation: string;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_bookableresourcebooking_email: string;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_bookableresourcebookingheader_email: string;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_bulkoperation_email: string;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_campaign_email: string;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_campaignactivity_email: string;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_contact_email: string;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_contract_email: string;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_entitlement_email: string;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_entitlementtemplate_email: string;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_incident_email: string;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_invoice_email: string;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_knowledgearticle_email: string;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_knowledgebaserecord_email: string;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_lead_email: string;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_msdyn_agreement_email: string;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_msdyn_agreementbookingdate_email: string;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_msdyn_agreementbookingincident_email: string;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_msdyn_agreementbookingproduct_email: string;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_msdyn_agreementbookingservice_email: string;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_msdyn_agreementbookingservicetask_email: string;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_msdyn_agreementbookingsetup_email: string;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_msdyn_agreementinvoicedate_email: string;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_msdyn_agreementinvoiceproduct_email: string;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_msdyn_agreementinvoicesetup_email: string;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_msdyn_bookingalertstatus_email: string;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_msdyn_bookingrule_email: string;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_msdyn_bookingtimestamp_email: string;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_msdyn_customerasset_email: string;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_msdyn_fieldservicesetting_email: string;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_msdyn_incidenttypecharacteristic_email: string;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_msdyn_incidenttypeproduct_email: string;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_msdyn_incidenttypeservice_email: string;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_msdyn_inventoryadjustment_email: string;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_msdyn_inventoryadjustmentproduct_email: string;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_msdyn_inventoryjournal_email: string;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_msdyn_inventorytransfer_email: string;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_msdyn_payment_email: string;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_msdyn_paymentdetail_email: string;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_msdyn_paymentmethod_email: string;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_msdyn_paymentterm_email: string;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_msdyn_playbookinstance_email: string;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_msdyn_postalbum_email: string;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_msdyn_postalcode_email: string;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_msdyn_processnotes_email: string;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_msdyn_productinventory_email: string;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_msdyn_projectteam_email: string;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_msdyn_purchaseorder_email: string;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_msdyn_purchaseorderbill_email: string;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_msdyn_purchaseorderproduct_email: string;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_msdyn_purchaseorderreceipt_email: string;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_msdyn_purchaseorderreceiptproduct_email: string;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_msdyn_purchaseordersubstatus_email: string;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_msdyn_quotebookingincident_email: string;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_msdyn_quotebookingproduct_email: string;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_msdyn_quotebookingservice_email: string;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_msdyn_quotebookingservicetask_email: string;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_msdyn_resourceterritory_email: string;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_msdyn_rma_email: string;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_msdyn_rmaproduct_email: string;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_msdyn_rmareceipt_email: string;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_msdyn_rmareceiptproduct_email: string;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_msdyn_rmasubstatus_email: string;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_msdyn_rtv_email: string;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_msdyn_rtvproduct_email: string;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_msdyn_rtvsubstatus_email: string;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_msdyn_salessuggestion_email: string;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_msdyn_shipvia_email: string;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_msdyn_systemuserschedulersetting_email: string;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_msdyn_timegroup_email: string;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_msdyn_timegroupdetail_email: string;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_msdyn_timeoffrequest_email: string;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_msdyn_warehouse_email: string;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_msdyn_workorder_email: string;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_msdyn_workordercharacteristic_email: string;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_msdyn_workorderincident_email: string;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_msdyn_workorderproduct_email: string;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_msdyn_workorderresourcerestriction_email: string;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_msdyn_workorderservice_email: string;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_msdyn_workorderservicetask_email: string;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_opportunity_email: string;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_quote_email: string;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_salesorder_email: string;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_site_email: string;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_uii_action_email: string;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_uii_hostedapplication_email: string;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_uii_nonhostedapplication_email: string;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_uii_option_email: string;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_uii_savedsession_email: string;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_uii_workflow_email: string;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_uii_workflowstep_email: string;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_uii_workflow_workflowstep_mapping_email: string;
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
		/** Unique identifier for the associated service. */
		ServiceId: string;
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
	}
}
declare namespace OptionSet {
	namespace Email {
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.00.00','WebApiVersion':'2'}