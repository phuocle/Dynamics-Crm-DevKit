//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyStar {
	namespace FormEmail {
		interface Header {
			/** Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
			OwnerId: DevKit.Form.Controls.ControlLookup;
			/** Select the priority so that preferred customers or critical issues are handled quickly. */
			PriorityCode: DevKit.Form.Controls.ControlOptionSet;
			/** Enter the expected due date and time for the activity to be completed to provide details about when the email will be sent. */
			ScheduledEnd: DevKit.Form.Controls.ControlDateTime;
			/** Select the email's status. */
			StatusCode: DevKit.Form.Controls.ControlOptionSet;
		}
		interface tab_Email_Sections {
			recipient_information: DevKit.Form.Controls.ControlSection;
			email_description: DevKit.Form.Controls.ControlSection;
			Regarding_information: DevKit.Form.Controls.ControlSection;
			attachments: DevKit.Form.Controls.ControlSection;
			emailengagementactions: DevKit.Form.Controls.ControlSection;
			Emailrecipient_section_6: DevKit.Form.Controls.ControlSection;
			tab_4_section_2: DevKit.Form.Controls.ControlSection;
		}
		interface tab_Email extends DevKit.Form.Controls.IControlTab {
			Section: tab_Email_Sections;
		}
		interface Tabs {
			Email: tab_Email;
		}
		interface Body {
			Tab: Tabs;
			attachmentsGrid: DevKit.Form.Controls.ControlGrid;
			emailengagementactionscontrol: DevKit.Form.Controls.ControlEmailEngagement;
			emailrecipientactivitycontrol: DevKit.Form.Controls.ControlEmailRecipient;
			/** Type the number of minutes spent creating and sending the email. The duration is used in reporting. */
			ActualDurationMinutes: DevKit.Form.Controls.ControlInteger;
			/** Enter the recipients that are included on the email distribution, but are not displayed to other recipients. */
			bcc: DevKit.Form.Controls.ControlLookup;
			/** Enter the recipients that should be copied on the email. */
			cc: DevKit.Form.Controls.ControlLookup;
			/** Type the greeting and message text of the email. */
			Description: DevKit.Form.Controls.ControlString;
			/** Enter the sender of the email. */
			from: DevKit.Form.Controls.ControlLookup;
			/** Choose the record that the email relates to. */
			RegardingObjectId: DevKit.Form.Controls.ControlLookup;
			/** Type a short description about the objective or primary topic of the email. */
			Subject: DevKit.Form.Controls.ControlString;
			/** Enter the account, contact, lead, queue, or user recipients for the email. */
			to: DevKit.Form.Controls.ControlLookup;
		}
		interface Footer {
			/** For internal use only. Shows whether this email is followed. This is evaluated state which overrides user selection of follow email. */
			IsEmailFollowed: DevKit.Form.Controls.ControlBoolean;
			/** For internal use only. Shows whether this email Reminder is Set. */
			IsEmailReminderSet: DevKit.Form.Controls.ControlBoolean;
		}
	}
	class FormEmail extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form Email
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Email */
		Body: LuckyStar.FormEmail.Body;
		/** The Footer section of form Email */
		Footer: LuckyStar.FormEmail.Footer;
		/** The Header section of form Email */
		Header: LuckyStar.FormEmail.Header;
	}
	namespace FormEmail_for_Interactive_experience {
		interface Header {
			/** Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
			OwnerId: DevKit.Form.Controls.ControlLookup;
			/** Select the priority so that preferred customers or critical issues are handled quickly. */
			PriorityCode: DevKit.Form.Controls.ControlOptionSet;
			/** Enter the expected due date and time for the activity to be completed to provide details about when the email will be sent. */
			ScheduledEnd: DevKit.Form.Controls.ControlDateTime;
			/** Select the email's status. */
			StatusCode: DevKit.Form.Controls.ControlOptionSet;
		}
		interface tab_tab_2_Sections {
			tab_2_section_5: DevKit.Form.Controls.ControlSection;
			tab_2_section_2: DevKit.Form.Controls.ControlSection;
			tab_2_section_3: DevKit.Form.Controls.ControlSection;
		}
		interface tab_tab_2 extends DevKit.Form.Controls.IControlTab {
			Section: tab_tab_2_Sections;
		}
		interface Tabs {
			tab_2: tab_tab_2;
		}
		interface Body {
			Tab: Tabs;
			attachmentsGrid: DevKit.Form.Controls.ControlGrid;
			/** Enter the recipients that are included on the email distribution, but are not displayed to other recipients. */
			bcc: DevKit.Form.Controls.ControlLookup;
			/** Enter the recipients that should be copied on the email. */
			cc: DevKit.Form.Controls.ControlLookup;
			/** Type the greeting and message text of the email. */
			Description: DevKit.Form.Controls.ControlString;
			/** Enter the sender of the email. */
			from: DevKit.Form.Controls.ControlLookup;
			/** Choose the record that the email relates to. */
			RegardingObjectId: DevKit.Form.Controls.ControlLookup;
			/** Type a short description about the objective or primary topic of the email. */
			Subject: DevKit.Form.Controls.ControlString;
			/** Enter the account, contact, lead, queue, or user recipients for the email. */
			to: DevKit.Form.Controls.ControlLookup;
		}
	}
	class FormEmail_for_Interactive_experience extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form Email_for_Interactive_experience
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Email_for_Interactive_experience */
		Body: LuckyStar.FormEmail_for_Interactive_experience.Body;
		/** The Header section of form Email_for_Interactive_experience */
		Header: LuckyStar.FormEmail_for_Interactive_experience.Header;
	}
	namespace FormEmail_Wizard {
		interface Header {
			/** Select the priority so that preferred customers or critical issues are handled quickly. */
			PriorityCode: DevKit.Form.Controls.ControlOptionSet;
			/** Enter the expected due date and time for the activity to be completed to provide details about when the email will be sent. */
			ScheduledEnd: DevKit.Form.Controls.ControlDateTime;
		}
		interface tab_Email_Sections {
			recipient_information: DevKit.Form.Controls.ControlSection;
			Hidden_Section: DevKit.Form.Controls.ControlSection;
			attachments: DevKit.Form.Controls.ControlSection;
			email_description: DevKit.Form.Controls.ControlSection;
			Regarding_information: DevKit.Form.Controls.ControlSection;
		}
		interface tab_Email extends DevKit.Form.Controls.IControlTab {
			Section: tab_Email_Sections;
		}
		interface Tabs {
			Email: tab_Email;
		}
		interface Body {
			Tab: Tabs;
			attachmentsGrid: DevKit.Form.Controls.ControlGrid;
			/** Type the number of minutes spent creating and sending the email. The duration is used in reporting. */
			ActualDurationMinutes: DevKit.Form.Controls.ControlInteger;
			/** Enter the recipients that are included on the email distribution, but are not displayed to other recipients. */
			bcc: DevKit.Form.Controls.ControlLookup;
			/** Enter the recipients that should be copied on the email. */
			cc: DevKit.Form.Controls.ControlLookup;
			/** Type the greeting and message text of the email. */
			Description: DevKit.Form.Controls.ControlString;
			/** Enter the sender of the email. */
			from: DevKit.Form.Controls.ControlLookup;
			/** Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
			OwnerId: DevKit.Form.Controls.ControlLookup;
			/** Choose the record that the email relates to. */
			RegardingObjectId: DevKit.Form.Controls.ControlLookup;
			/** Select the email's status. */
			StatusCode: DevKit.Form.Controls.ControlOptionSet;
			/** Type a short description about the objective or primary topic of the email. */
			Subject: DevKit.Form.Controls.ControlString;
			/** Enter the account, contact, lead, queue, or user recipients for the email. */
			to: DevKit.Form.Controls.ControlLookup;
		}
	}
	class FormEmail_Wizard extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form Email_Wizard
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Email_Wizard */
		Body: LuckyStar.FormEmail_Wizard.Body;
		/** The Header section of form Email_Wizard */
		Header: LuckyStar.FormEmail_Wizard.Header;
	}
}
declare namespace OptionSet {
	namespace Email {
		enum CorrelationMethod {
			/** 0 */
			None,
			/** 1 */
			Skipped,
			/** 2 */
			XHeader,
			/** 3 */
			InReplyTo,
			/** 4 */
			TrackingToken,
			/** 5 */
			ConversationIndex,
			/** 6 */
			SmartMatching,
			/** 7 */
			CustomCorrelation
		}
		enum DeliveryPriorityCode {
			/** 0 */
			Low,
			/** 1 */
			Normal,
			/** 2 */
			High
		}
		enum EmailReminderStatus {
			/** 0 */
			NotSet,
			/** 1 */
			ReminderSet,
			/** 2 */
			ReminderExpired,
			/** 3 */
			ReminderInvalid
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
			/** 0 */
			Low,
			/** 1 */
			Normal,
			/** 2 */
			High
		}
		enum StateCode {
			/** 0 */
			Open,
			/** 1 */
			Completed,
			/** 2 */
			Canceled
		}
		enum StatusCode {
			/** 1 */
			Draft,
			/** 2 */
			Completed,
			/** 3 */
			Sent,
			/** 4 */
			Received,
			/** 5 */
			Canceled,
			/** 6 */
			Pending_Send,
			/** 7 */
			Sending,
			/** 8 */
			Failed
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
//{'JsForm':['Email','Email for Interactive experience','Wizard'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false}