//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyStar {
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
		Body: LuckyStar.FormMailbox_Information.Body;
		/** The Footer section of form Mailbox_Information */
		Footer: LuckyStar.FormMailbox_Information.Footer;
	}
	class MailboxApi {
		/**
		* DynamicsCrm.DevKit MailboxApi
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
		/** The entity object */
		Entity: any;
		/** The entity name */
		EntityName: string;
		/** The entity collection name */
		EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependant on the fields that are retrieved */
		"@odata.etag": string;
		/** Choose the delivery method for the mailbox for appointments, contacts, and tasks. */
		ACTDeliveryMethod: DevKit.WebApi.OptionSetValue;
		/** Status of the Appointments, Contacts, and Tasks. */
		ACTStatus: DevKit.WebApi.OptionSetValue;
		/** Choose whether to allow the email connector to use credentials. */
		AllowEmailConnectorToUseCredentials: DevKit.WebApi.BooleanValue;
		/** Mailbox Total Duration in Average */
		AverageTotalDuration: DevKit.WebApi.IntegerValueReadonly;
		/** Shows who created the record. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows who created the record on behalf of another user. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Type the email address of the mailbox. */
		EmailAddress: DevKit.WebApi.StringValue;
		/** Shows the status of the email address. */
		EmailRouterAccessApproval: DevKit.WebApi.OptionSetValue;
		/** Select the email server profile of the mailbox. */
		EmailServerProfile: DevKit.WebApi.LookupValue;
		/** Indicates whether the mailbox is enabled for Appointments, Contacts, and Tasks. */
		EnabledForACT: DevKit.WebApi.BooleanValue;
		/** Choose whether the mailbox is enabled for receiving email. */
		EnabledForIncomingEmail: DevKit.WebApi.BooleanValue;
		/** Choose whether the mailbox is enabled for sending email. */
		EnabledForOutgoingEmail: DevKit.WebApi.BooleanValue;
		/** The default image for the entity. */
		EntityImage: DevKit.WebApi.StringValue;
		EntityImage_Timestamp: DevKit.WebApi.BigIntValueReadonly;
		EntityImage_URL: DevKit.WebApi.StringValueReadonly;
		/** For internal use only. */
		EntityImageId: DevKit.WebApi.GuidValueReadonly;
		/** Exchange web services endpoint URL for the mailbox. */
		EWSURL: DevKit.WebApi.StringValue;
		/** Date and time when the exchange contacts import was last completed for a mailbox record. */
		ExchangeContactsImportCompletedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Indicates the exchange contacts import status for a mailbox record. */
		ExchangeContactsImportStatus: DevKit.WebApi.OptionSetValue;
		/** Contains the exchange synchronization state in XML format. */
		ExchangeSyncStateXml: DevKit.WebApi.StringValue;
		/** Holds the hierarchy of folders under inbox in XML format. */
		FolderHierarchy: DevKit.WebApi.StringValue;
		/** For internal use only */
		ForcedUnlockCount: DevKit.WebApi.IntegerValueReadonly;
		/** Unique identifier of the async host that is processing this mailbox. */
		HostId: DevKit.WebApi.StringValueReadonly;
		/** Select how incoming email will be delivered to the mailbox. */
		IncomingEmailDeliveryMethod: DevKit.WebApi.OptionSetValue;
		/** Select the status that will be assigned to incoming email messages. */
		IncomingEmailStatus: DevKit.WebApi.OptionSetValue;
		/** Set the current organization as the synchronization organization. */
		IsACTSyncOrgFlagSet: DevKit.WebApi.BooleanValue;
		/** Shows the status of approval of the email address by O365 Admin. */
		IsEmailAddressApprovedByO365Admin: DevKit.WebApi.BooleanValue;
		/** Is Exchange Contacts Import Scheduled. */
		IsExchangeContactsImportScheduled: DevKit.WebApi.BooleanValueReadonly;
		/** Select whether the mailbox is a forward mailbox. */
		IsForwardMailbox: DevKit.WebApi.BooleanValueReadonly;
		IsPasswordSet: DevKit.WebApi.BooleanValueReadonly;
		/** Select whether the mailbox corresponds to one for the service account. */
		IsServiceAccount: DevKit.WebApi.BooleanValueReadonly;
		/** For internal use only. */
		ItemsFailedForLastSync: DevKit.WebApi.IntegerValue;
		/** For internal use only. */
		ItemsProcessedForLastSync: DevKit.WebApi.IntegerValue;
		/** For internal use only. */
		LastActiveOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows the date and time when the Exchange web services URL was last discovered using the AutoDiscover service. */
		LastAutoDiscoveredOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Last Duration for the mailbox */
		LastDuration: DevKit.WebApi.IntegerValueReadonly;
		/** For internal use only. */
		LastMailboxForcedUnlockOccurredOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the last message. */
		LastMessageId: DevKit.WebApi.StringValueReadonly;
		/** Last Successful Sync Time */
		LastSuccessfulSyncCompletedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** For internal use only. */
		LastSyncError: DevKit.WebApi.StringValue;
		/** For internal use only. */
		LastSyncErrorCode: DevKit.WebApi.IntegerValue;
		/** For internal use only */
		LastSyncErrorCount: DevKit.WebApi.IntegerValue;
		/** For internal use only. */
		LastSyncErrorMachineName: DevKit.WebApi.StringValue;
		/** For internal use only. */
		LastSyncErrorOccurredOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Last Sync Start Time */
		LastSyncStartedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the mailbox. */
		MailboxId: DevKit.WebApi.GuidValue;
		/** For internal use only. */
		MailboxProcessingContext: DevKit.WebApi.IntegerValue;
		/** Last Sync Status for Outgoing, Incoming and ACT as a whole. */
		MailboxStatus: DevKit.WebApi.OptionSetValueReadonly;
		/** Shows who last updated the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows who last updated the record on behalf of another user. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Type the name of the mailbox. */
		Name: DevKit.WebApi.StringValue;
		/** For internal use only. */
		NoACTCount: DevKit.WebApi.IntegerValueReadonly;
		/** For internal use only. */
		NoEmailCount: DevKit.WebApi.IntegerValueReadonly;
		/** Date and time when the last office apps deployment was completed for a mailbox record. */
		OfficeAppsDeploymentCompleteOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** The Office Apps deployment error. */
		OfficeAppsDeploymentError: DevKit.WebApi.StringValueReadonly;
		/** Indicates if the office apps deployment has been scheduled for a mailbox record. */
		OfficeAppsDeploymentScheduled: DevKit.WebApi.BooleanValue;
		/** Indicates the office apps deployment type for a mailbox record. */
		OfficeAppsDeploymentStatus: DevKit.WebApi.OptionSetValue;
		/** Unique identifier of the organization associated with the record. */
		OrganizationId: DevKit.WebApi.LookupValueReadonly;
		/** Indicates if the crm org is to be marked as primary syncing org for the mailbox record. */
		OrgMarkedAsPrimaryForExchangeSync: DevKit.WebApi.BooleanValue;
		/** Select how outgoing email will be sent from the mailbox. */
		OutgoingEmailDeliveryMethod: DevKit.WebApi.OptionSetValue;
		/** Select the status of outgoing email messages. */
		OutgoingEmailStatus: DevKit.WebApi.OptionSetValue;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: DevKit.WebApi.LookupValue;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: DevKit.WebApi.LookupValue;
		/** Select the business unit that owns the record. */
		OwningBusinessUnit: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier for the team that owns the record. */
		OwningTeam: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier for the user that owns the record. */
		OwningUser: DevKit.WebApi.LookupValueReadonly;
		/** Type the password for the mailbox. */
		Password: DevKit.WebApi.StringValue;
		/** Shows the date and time when processing will begin on this mailbox. */
		PostponeMailboxProcessingUntil_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Shows the date and time when the next outlook mail app install will be run for a mailbox record. */
		PostponeOfficeAppsDeploymentUntil_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Shows the date and time when the mailbox can start sending emails. */
		PostponeSendingUntil_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Shows the date and time when the next email configuration test will be run for a mailbox record. */
		PostponeTestEmailConfigurationUntil_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Select whether to delete emails from the mailbox after processing. */
		ProcessAndDeleteEmails: DevKit.WebApi.BooleanValue;
		/** The number of times mailbox has processed */
		ProcessedTimes: DevKit.WebApi.IntegerValueReadonly;
		/** Shows the date and time to start processing email received by the mailbox. */
		ProcessEmailReceivedAfter_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Date and time when the processing of the mailbox was last attempted. */
		ProcessingLastAttemptedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Information that indicates whether email will be processed for this mailbox */
		ProcessingStateCode: DevKit.WebApi.IntegerValueReadonly;
		/** For internal use only. */
		ReceivingPostponedUntil_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValueReadonly;
		/** For internal use only. */
		ReceivingPostponedUntilForACT_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValueReadonly;
		/** Choose the user associated to the mailbox. */
		regardingobjectid_queue: DevKit.WebApi.LookupValueReadonly;
		/** Choose the user associated to the mailbox. */
		regardingobjectid: DevKit.WebApi.LookupValueReadonly;
		/** Shows whether the mailbox is active or inactive. */
		StateCode: DevKit.WebApi.OptionSetValue;
		/** Select the mailbox's status. */
		StatusCode: DevKit.WebApi.OptionSetValue;
		/** Shows the number of times an email configuration test has been performed. */
		TestEmailConfigurationRetryCount: DevKit.WebApi.IntegerValue;
		/** Indicates if the email configuration test has been scheduled for a mailbox record. */
		TestEmailConfigurationScheduled: DevKit.WebApi.BooleanValue;
		/** Date and time when the last email configuration test was completed for a mailbox record. */
		TestMailboxAccessCompletedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Concatenation of transient failure counts of all mailbox operations. */
		TransientFailureCount: DevKit.WebApi.IntegerValueReadonly;
		/** Shows the ID of the Undeliverable folder in the mailbox managed by Microsoft Exchange. */
		UndeliverableFolder: DevKit.WebApi.StringValue;
		/** Type a user name used for mailbox authentication. */
		Username: DevKit.WebApi.StringValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Indicates if verbose tracing needs to be enabled for this mailbox. */
		VerboseLoggingEnabled: DevKit.WebApi.IntegerValue;
		/** Version number of the mailbox. */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
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
//{'JsForm':['Information'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}