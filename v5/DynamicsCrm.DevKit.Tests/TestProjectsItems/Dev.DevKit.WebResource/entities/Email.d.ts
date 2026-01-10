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
			/** Choose the record that the email relates to. */
			RegardingObjectId: DevKit.Controls.Lookup;
			/** Type a short description about the objective or primary topic of the email. */
			Subject: DevKit.Controls.String;
			/** Enter the account, contact, lead, queue, or user recipients for the email. */
			to: DevKit.Controls.Lookup;
		}
		interface Grid {
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
			/** Choose the record that the email relates to. */
			RegardingObjectId: DevKit.Controls.Lookup;
			/** Type a short description about the objective or primary topic of the email. */
			Subject: DevKit.Controls.String;
			/** Enter the account, contact, lead, queue, or user recipients for the email. */
			to: DevKit.Controls.Lookup;
		}
		interface Grid {
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