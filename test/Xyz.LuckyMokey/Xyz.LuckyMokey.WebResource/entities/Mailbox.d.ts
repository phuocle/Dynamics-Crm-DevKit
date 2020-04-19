//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace FormMailbox_Information {
		interface tab_MailboxStatusTab_Sections {
			MailboxStatusTab_section_1: DevKit.Form.Controls.ControlSection;
		}
		interface tab_tab_4_Sections {
			tab_4_section_1: DevKit.Form.Controls.ControlSection;
		}
		interface tab_MailboxStatusTab extends DevKit.Form.Controls.IControlTab {
			Section: tab_MailboxStatusTab_Sections;
		}
		interface tab_tab_4 extends DevKit.Form.Controls.IControlTab {
			Section: tab_tab_4_Sections;
		}
		interface Tabs {
			MailboxStatusTab: tab_MailboxStatusTab;
			tab_4: tab_tab_4;
		}
		interface Body {
			Tab: Tabs;
			notescontrol: DevKit.Form.Controls.ControlNote;
			/** Choose the delivery method for the mailbox for appointments, contacts, and tasks. */
			ACTDeliveryMethod: DevKit.Form.Controls.ControlOptionSet;
			/** Status of the Appointments, Contacts, and Tasks. */
			ACTStatus: DevKit.Form.Controls.ControlOptionSet;
			/** Choose whether to allow the email connector to use credentials. */
			AllowEmailConnectorToUseCredentials: DevKit.Form.Controls.ControlBoolean;
			/** Type the email address of the mailbox. */
			EmailAddress: DevKit.Form.Controls.ControlString;
			/** Select the email server profile of the mailbox. */
			EmailServerProfile: DevKit.Form.Controls.ControlLookup;
			/** Select how incoming email will be delivered to the mailbox. */
			IncomingEmailDeliveryMethod: DevKit.Form.Controls.ControlOptionSet;
			/** Select the status that will be assigned to incoming email messages. */
			IncomingEmailStatus: DevKit.Form.Controls.ControlOptionSet;
			/** Shows the status of approval of the email address by O365 Admin. */
			IsEmailAddressApprovedByO365Admin: DevKit.Form.Controls.ControlBoolean;
			/** Select whether the mailbox is a forward mailbox. */
			IsForwardMailbox: DevKit.Form.Controls.ControlBoolean;
			/** Type the name of the mailbox. */
			Name: DevKit.Form.Controls.ControlString;
			/** Select how outgoing email will be sent from the mailbox. */
			OutgoingEmailDeliveryMethod: DevKit.Form.Controls.ControlOptionSet;
			/** Select the status of outgoing email messages. */
			OutgoingEmailStatus: DevKit.Form.Controls.ControlOptionSet;
			/** Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
			OwnerId: DevKit.Form.Controls.ControlLookup;
			/** Type the password for the mailbox. */
			Password: DevKit.Form.Controls.ControlString;
			/** Select whether to delete emails from the mailbox after processing. */
			ProcessAndDeleteEmails: DevKit.Form.Controls.ControlBoolean;
			/** Choose the user associated to the mailbox. */
			RegardingObjectId: DevKit.Form.Controls.ControlLookup;
			/** Date and time when the last email configuration test was completed for a mailbox record. */
			TestMailboxAccessCompletedOn: DevKit.Form.Controls.ControlDateTime;
			/** Type a user name used for mailbox authentication. */
			Username: DevKit.Form.Controls.ControlString;
		}
		interface Footer {
			/** Shows whether the mailbox is active or inactive. */
			StateCode: DevKit.Form.Controls.ControlOptionSet;
		}
	}
	class FormMailbox_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form Mailbox_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Mailbox_Information */
		Body: LuckyMokey.FormMailbox_Information.Body;
		/** The Footer section of form Mailbox_Information */
		Footer: LuckyMokey.FormMailbox_Information.Footer;
	}
}
declare namespace OptionSet {
	namespace Mailbox {
		enum ACTDeliveryMethod {
			/** 0 */
			Microsoft_Dynamics_365_for_Outlook,
			/** 1 */
			Server_Side_Synchronization,
			/** 2 */
			None
		}
		enum ACTStatus {
			/** 0 */
			Not_Run,
			/** 1 */
			Success,
			/** 2 */
			Failure
		}
		enum EmailRouterAccessApproval {
			/** 0 */
			Empty,
			/** 1 */
			Approved,
			/** 2 */
			Pending_Approval,
			/** 3 */
			Rejected
		}
		enum ExchangeContactsImportStatus {
			/** 0 */
			NotImported,
			/** 1 */
			Imported,
			/** 2 */
			ImportFailed
		}
		enum IncomingEmailDeliveryMethod {
			/** 0 */
			None,
			/** 1 */
			Microsoft_Dynamics_365_for_Outlook,
			/** 2 */
			Server_Side_Synchronization_or_Email_Router,
			/** 3 */
			Forward_Mailbox
		}
		enum IncomingEmailStatus {
			/** 0 */
			Not_Run,
			/** 1 */
			Success,
			/** 2 */
			Failure
		}
		enum MailboxStatus {
			/** 0 */
			Not_Run,
			/** 1 */
			Success,
			/** 2 */
			Failure
		}
		enum OfficeAppsDeploymentStatus {
			/** 0 */
			NotInstalled,
			/** 1 */
			Installed,
			/** 2 */
			InstallFailed,
			/** 3 */
			UninstallFailed,
			/** 4 */
			UpgradeRequired
		}
		enum OutgoingEmailDeliveryMethod {
			/** 0 */
			None,
			/** 1 */
			Microsoft_Dynamics_365_for_Outlook,
			/** 2 */
			Server_Side_Synchronization_or_Email_Router
		}
		enum OutgoingEmailStatus {
			/** 0 */
			Not_Run,
			/** 1 */
			Success,
			/** 2 */
			Failure
		}
		enum StateCode {
			/** 0 */
			Active,
			/** 1 */
			Inactive
		}
		enum StatusCode {
			/** 1 */
			Active,
			/** 2 */
			Inactive
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
//{'JsForm':['Information'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false}