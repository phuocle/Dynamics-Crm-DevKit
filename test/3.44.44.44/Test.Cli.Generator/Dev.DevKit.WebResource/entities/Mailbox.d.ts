﻿//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormMailbox_Information {
		interface tab_MailboxStatusTab_Sections {
			MailboxStatusTab_section_1: DevKit.Controls.Section;
		}
		interface tab_tab_4_Sections {
			tab_4_section_1: DevKit.Controls.Section;
		}
		interface tab_MailboxStatusTab extends DevKit.Controls.ITab {
			Section: tab_MailboxStatusTab_Sections;
		}
		interface tab_tab_4 extends DevKit.Controls.ITab {
			Section: tab_tab_4_Sections;
		}
		interface Tabs {
			MailboxStatusTab: tab_MailboxStatusTab;
			tab_4: tab_tab_4;
		}
		interface Body {
			Tab: Tabs;
			/** Choose the delivery method for the mailbox for appointments, contacts, and tasks. */
			ACTDeliveryMethod: DevKit.Controls.OptionSet;
			/** Status of the Appointments, Contacts, and Tasks. */
			ACTStatus: DevKit.Controls.OptionSet;
			/** Choose whether to allow the email connector to use credentials. */
			AllowEmailConnectorToUseCredentials: DevKit.Controls.Boolean;
			/** Type the email address of the mailbox. */
			EmailAddress: DevKit.Controls.String;
			/** Select the email server profile of the mailbox. */
			EmailServerProfile: DevKit.Controls.Lookup;
			/** Select how incoming email will be delivered to the mailbox. */
			IncomingEmailDeliveryMethod: DevKit.Controls.OptionSet;
			/** Select the status that will be assigned to incoming email messages. */
			IncomingEmailStatus: DevKit.Controls.OptionSet;
			/** Shows the status of approval of the email address by O365 Admin. */
			IsEmailAddressApprovedByO365Admin: DevKit.Controls.Boolean;
			/** Select whether the mailbox is a forward mailbox. */
			IsForwardMailbox: DevKit.Controls.Boolean;
			/** Type the name of the mailbox. */
			Name: DevKit.Controls.String;
			notescontrol: DevKit.Controls.Note;
			/** Type the Oauth access token for the mailbox. */
			OauthAccessToken: DevKit.Controls.String;
			/** Select how outgoing email will be sent from the mailbox. */
			OutgoingEmailDeliveryMethod: DevKit.Controls.OptionSet;
			/** Select the status of outgoing email messages. */
			OutgoingEmailStatus: DevKit.Controls.OptionSet;
			/** Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
			OwnerId: DevKit.Controls.Lookup;
			/** Type the password for the mailbox. */
			Password: DevKit.Controls.String;
			/** Select whether to delete emails from the mailbox after processing. */
			ProcessAndDeleteEmails: DevKit.Controls.Boolean;
			/** Choose the user associated to the mailbox. */
			RegardingObjectId: DevKit.Controls.Lookup;
			/** Date and time when the last email configuration test was completed for a mailbox record. */
			TestMailboxAccessCompletedOn: DevKit.Controls.DateTime;
			/** Type a user name used for mailbox authentication. */
			Username: DevKit.Controls.String;
		}
		interface Navigation {
			mailbox_email_ReceivingMailboxId: DevKit.Controls.NavigationItem,
			queue_defaultmailbox_mailbox: DevKit.Controls.NavigationItem,
			systemuser_defaultmailbox_mailbox: DevKit.Controls.NavigationItem,
			tracelog_Mailbox: DevKit.Controls.NavigationItem
		}
	}
	class FormMailbox_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Mailbox_Information */
		Body: DevKit.FormMailbox_Information.Body;
		/** The Navigation of form Mailbox_Information */
		Navigation: DevKit.FormMailbox_Information.Navigation;
		/** The SidePanes of form Mailbox_Information */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormMailbox {
		interface tab_MailboxStatusTab_Sections {
			MailboxStatusTab_section_1: DevKit.Controls.Section;
		}
		interface tab_tab_4_Sections {
			tab_4_section_1: DevKit.Controls.Section;
		}
		interface tab_MailboxStatusTab extends DevKit.Controls.ITab {
			Section: tab_MailboxStatusTab_Sections;
		}
		interface tab_tab_4 extends DevKit.Controls.ITab {
			Section: tab_tab_4_Sections;
		}
		interface Tabs {
			MailboxStatusTab: tab_MailboxStatusTab;
			tab_4: tab_tab_4;
		}
		interface Body {
			Tab: Tabs;
			/** Choose the delivery method for the mailbox for appointments, contacts, and tasks. */
			ACTDeliveryMethod: DevKit.Controls.OptionSet;
			/** Status of the Appointments, Contacts, and Tasks. */
			ACTStatus: DevKit.Controls.OptionSet;
			/** Choose whether to allow the email connector to use credentials. */
			AllowEmailConnectorToUseCredentials: DevKit.Controls.Boolean;
			/** Type the email address of the mailbox. */
			EmailAddress: DevKit.Controls.String;
			/** Select the email server profile of the mailbox. */
			EmailServerProfile: DevKit.Controls.Lookup;
			/** Select how incoming email will be delivered to the mailbox. */
			IncomingEmailDeliveryMethod: DevKit.Controls.OptionSet;
			/** Select the status that will be assigned to incoming email messages. */
			IncomingEmailStatus: DevKit.Controls.OptionSet;
			/** Shows the status of approval of the email address by O365 Admin. */
			IsEmailAddressApprovedByO365Admin: DevKit.Controls.Boolean;
			/** Select whether the mailbox is a forward mailbox. */
			IsForwardMailbox: DevKit.Controls.Boolean;
			/** Type the name of the mailbox. */
			Name: DevKit.Controls.String;
			/** Type the name of the mailbox. */
			Name1: DevKit.Controls.String;
			notescontrol: DevKit.Controls.Note;
			/** Type the Oauth access token for the mailbox. */
			OauthAccessToken: DevKit.Controls.String;
			/** Select how outgoing email will be sent from the mailbox. */
			OutgoingEmailDeliveryMethod: DevKit.Controls.OptionSet;
			/** Select the status of outgoing email messages. */
			OutgoingEmailStatus: DevKit.Controls.OptionSet;
			/** Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
			OwnerId: DevKit.Controls.Lookup;
			/** Type the password for the mailbox. */
			Password: DevKit.Controls.String;
			/** Select whether to delete emails from the mailbox after processing. */
			ProcessAndDeleteEmails: DevKit.Controls.Boolean;
			/** Choose the user associated to the mailbox. */
			RegardingObjectId: DevKit.Controls.Lookup;
			/** Date and time when the last email configuration test was completed for a mailbox record. */
			TestMailboxAccessCompletedOn: DevKit.Controls.DateTime;
			/** Type a user name used for mailbox authentication. */
			Username: DevKit.Controls.String;
		}
		interface Navigation {
			mailbox_email_ReceivingMailboxId: DevKit.Controls.NavigationItem,
			queue_defaultmailbox_mailbox: DevKit.Controls.NavigationItem,
			systemuser_defaultmailbox_mailbox: DevKit.Controls.NavigationItem,
			tracelog_Mailbox: DevKit.Controls.NavigationItem
		}
		interface Grid {
			Subgrid_new_1: DevKit.Controls.Grid;
		}
	}
	class FormMailbox extends DevKit.IForm {
		/**
		* Mailbox [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Mailbox */
		Body: DevKit.FormMailbox.Body;
		/** The Navigation of form Mailbox */
		Navigation: DevKit.FormMailbox.Navigation;
		/** The Grid of form Mailbox */
		Grid: DevKit.FormMailbox.Grid;
		/** The SidePanes of form Mailbox */
		SidePanes: DevKit.SidePanes;
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
		/** Choose the delivery method for the mailbox for appointments, contacts, and tasks. */
		ACTDeliveryMethod: OptionSet.Mailbox.ACTDeliveryMethod;
		/** Status of the Appointments, Contacts, and Tasks. */
		ACTStatus: OptionSet.Mailbox.ACTStatus;
		/** Choose whether to allow the email connector to use credentials. */
		AllowEmailConnectorToUseCredentials: boolean;
		/** Mailbox Total Duration in Average */
		readonly AverageTotalDuration: number;
		/** Shows who created the record. */
		readonly CreatedBy: string;
		/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Shows who created the record on behalf of another user. */
		readonly CreatedOnBehalfBy: string;
		/** Type the email address of the mailbox. */
		EmailAddress: string;
		/** The user who approved the email address for synchronization. */
		readonly EmailAddressApprovedBy: string;
		/** Date and time the mailbox's email address was approved. */
		readonly EmailAddressApprovedOn_UtcDateAndTime: Date;
		/** Shows the status of the email address. */
		EmailRouterAccessApproval: OptionSet.Mailbox.EmailRouterAccessApproval;
		/** Select the email server profile of the mailbox. */
		EmailServerProfile: string;
		/** Indicates whether the mailbox is enabled for Appointments, Contacts, and Tasks. */
		EnabledForACT: boolean;
		/** Choose whether the mailbox is enabled for receiving email. */
		EnabledForIncomingEmail: boolean;
		/** Choose whether the mailbox is enabled for sending email. */
		EnabledForOutgoingEmail: boolean;
		/** The default image for the entity. */
		EntityImage: string;
		EntityImage_Timestamp: number;
		EntityImage_URL: string;
		/** For internal use only. */
		readonly EntityImageId: string;
		/** Exchange web services endpoint URL for the mailbox. */
		EWSURL: string;
		/** Date and time when the exchange contacts import was last completed for a mailbox record. */
		readonly ExchangeContactsImportCompletedOn_UtcDateAndTime: Date;
		/** Indicates the exchange contacts import status for a mailbox record. */
		ExchangeContactsImportStatus: OptionSet.Mailbox.ExchangeContactsImportStatus;
		/** Contains the exchange synchronization state in XML format. */
		ExchangeSyncStateXml: string;
		/** Reference to the ExchangeSyncStateXml file on Azure. */
		readonly ExchangeSyncStateXmlFileRef_name: string;
		/** Holds the hierarchy of folders under inbox in XML format. */
		FolderHierarchy: string;
		/** For internal use only */
		readonly ForcedUnlockCount: number;
		/** Unique identifier of the async host that is processing this mailbox. */
		readonly HostId: string;
		/** Select how incoming email will be delivered to the mailbox. */
		IncomingEmailDeliveryMethod: OptionSet.Mailbox.IncomingEmailDeliveryMethod;
		/** Select the status that will be assigned to incoming email messages. */
		IncomingEmailStatus: OptionSet.Mailbox.IncomingEmailStatus;
		/** Set the current organization as the synchronization organization. */
		IsACTSyncOrgFlagSet: boolean;
		/** Shows the status of approval of the email address by O365 Admin. */
		IsEmailAddressApprovedByO365Admin: boolean;
		/** Is Exchange Contacts Import Scheduled. */
		readonly IsExchangeContactsImportScheduled: boolean;
		/** Select whether the mailbox is a forward mailbox. */
		readonly IsForwardMailbox: boolean;
		readonly IsOauthAccessTokenSet: boolean;
		readonly IsOauthRefreshTokenSet: boolean;
		readonly IsPasswordSet: boolean;
		/** Select whether the mailbox corresponds to one for the service account. */
		readonly IsServiceAccount: boolean;
		/** For internal use only. */
		ItemsFailedForLastSync: number;
		/** For internal use only. */
		ItemsProcessedForLastSync: number;
		/** For internal use only. */
		readonly LastActiveOn_UtcDateAndTime: Date;
		/** Shows the date and time when the Exchange web services URL was last discovered using the AutoDiscover service. */
		LastAutoDiscoveredOn_UtcDateAndTime: Date;
		/** Last Duration for the mailbox */
		readonly LastDuration: number;
		/** The timestamp when last set of incoming emails were requested from external email server. For internal use only. */
		LastIncomingEmailsRequestedFromEmailServerOn_UtcDateAndTime: Date;
		/** For internal use only. */
		readonly LastMailboxForcedUnlockOccurredOn_UtcDateAndTime: Date;
		/** Unique identifier of the last message. */
		LastMessageId: string;
		/** Last Successful Sync Time */
		LastSuccessfulSyncCompletedOn_UtcDateAndTime: Date;
		/** For internal use only. */
		LastSyncError: string;
		/** For internal use only. */
		LastSyncErrorCode: number;
		/** For internal use only */
		LastSyncErrorCount: number;
		/** For internal use only. */
		LastSyncErrorMachineName: string;
		/** For internal use only. */
		LastSyncErrorOccurredOn_UtcDateAndTime: Date;
		/** Last Sync Start Time */
		readonly LastSyncStartedOn_UtcDateAndTime: Date;
		/** Identifies the timestamp when tagging last completed. For internal use only. */
		LastTagCompletedOn_UtcDateAndTime: Date;
		/** Identifies the last MessageId that has been processed for tagging in the remote system. */
		LastTaggedMessageId: string;
		/** Indicates if the last tagging cycle processed the maximum number of items. For internal use only. */
		LastTagProcessedMaxItems: boolean;
		/** Unique identifier of the mailbox. */
		MailboxId: string;
		/** For internal use only. */
		MailboxProcessingContext: number;
		/** Last Sync Status for Outgoing, Incoming and ACT as a whole. */
		readonly MailboxStatus: OptionSet.Mailbox.MailboxStatus;
		/** Shows who last updated the record. */
		readonly ModifiedBy: string;
		/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Shows who last updated the record on behalf of another user. */
		readonly ModifiedOnBehalfBy: string;
		/** Type the name of the mailbox. */
		Name: string;
		/** The next scheduled ACT sync delay, in seconds, to apply to the mailbox. */
		readonly NextScheduledACTSyncInSeconds: number;
		/** For internal use only. */
		readonly NoACTCount: number;
		/** For internal use only. */
		readonly NoEmailCount: number;
		/** Type the Oauth access token for the mailbox. */
		OauthAccessToken: string;
		/** Type the Oauth refresh token for the mailbox. */
		OauthRefreshToken: string;
		/** Date and time when the Oauth token will expire */
		OauthTokenExpiresOn_UtcDateAndTime: Date;
		/** Date and time when the last office apps deployment was completed for a mailbox record. */
		readonly OfficeAppsDeploymentCompleteOn_UtcDateAndTime: Date;
		/** The Office Apps deployment error. */
		readonly OfficeAppsDeploymentError: string;
		/** Indicates if the office apps deployment has been scheduled for a mailbox record. */
		OfficeAppsDeploymentScheduled: boolean;
		/** Indicates the office apps deployment type for a mailbox record. */
		OfficeAppsDeploymentStatus: OptionSet.Mailbox.OfficeAppsDeploymentStatus;
		/** Unique identifier of the organization associated with the record. */
		readonly OrganizationId: string;
		/** Indicates if the crm org is to be marked as primary syncing org for the mailbox record. */
		OrgMarkedAsPrimaryForExchangeSync: boolean;
		/** Select how outgoing email will be sent from the mailbox. */
		OutgoingEmailDeliveryMethod: OptionSet.Mailbox.OutgoingEmailDeliveryMethod;
		/** Select the status of outgoing email messages. */
		OutgoingEmailStatus: OptionSet.Mailbox.OutgoingEmailStatus;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Select the business unit that owns the record. */
		readonly OwningBusinessUnit: string;
		/** Unique identifier for the team that owns the record. */
		readonly OwningTeam: string;
		/** Unique identifier for the user that owns the record. */
		readonly OwningUser: string;
		/** Type the password for the mailbox. */
		Password: string;
		/** Shows the date and time when processing will begin on this mailbox. */
		PostponeMailboxProcessingUntil_UtcDateOnly: Date;
		/** Shows the date and time when the next outlook mail app install will be run for a mailbox record. */
		PostponeOfficeAppsDeploymentUntil_UtcDateAndTime: Date;
		/** Shows the date and time when the mailbox can start sending emails. */
		PostponeSendingUntil_UtcDateOnly: Date;
		/** Shows the date and time when the next email configuration test will be run for a mailbox record. */
		PostponeTestEmailConfigurationUntil_UtcDateAndTime: Date;
		/** Select whether to delete emails from the mailbox after processing. */
		ProcessAndDeleteEmails: boolean;
		/** The number of times mailbox has processed */
		readonly ProcessedTimes: number;
		/** Shows the date and time to start processing email received by the mailbox. */
		ProcessEmailReceivedAfter_UtcDateOnly: Date;
		/** Date and time when the processing of the mailbox was last attempted. */
		ProcessingLastAttemptedOn_UtcDateAndTime: Date;
		/** Information that indicates whether email will be processed for this mailbox */
		readonly ProcessingStateCode: number;
		/** For internal use only. */
		readonly ReceivingPostponedUntil_UtcDateOnly: Date;
		/** For internal use only. */
		readonly ReceivingPostponedUntilForACT_UtcDateOnly: Date;
		/** Choose the user associated to the mailbox. */
		readonly regardingobjectid_queue: string;
		/** Choose the user associated to the mailbox. */
		readonly regardingobjectid: string;
		/** Shows whether the mailbox is active or inactive. */
		StateCode: OptionSet.Mailbox.StateCode;
		/** Select the mailbox's status. */
		StatusCode: OptionSet.Mailbox.StatusCode;
		/** Identifies the timestamp after for which emails should be tagged in the remote system. */
		TagEmailsAfter_UtcDateOnly: Date;
		/** The user who last attempted to Test and Enable the mailbox. */
		readonly TestAndEnableLastAttemptedBy: string;
		/** The date and time of the last test and enable attempt. */
		readonly TestAndEnableLastAttemptedOn_UtcDateAndTime: Date;
		/** Shows the number of times an email configuration test has been performed. */
		TestEmailConfigurationRetryCount: number;
		/** Indicates if the email configuration test has been scheduled for a mailbox record. */
		TestEmailConfigurationScheduled: boolean;
		/** Date and time when the last email configuration test was completed for a mailbox record. */
		TestMailboxAccessCompletedOn_UtcDateAndTime: Date;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Concatenation of transient failure counts of all mailbox operations. */
		readonly TransientFailureCount: number;
		/** Shows the ID of the Undeliverable folder in the mailbox managed by Microsoft Exchange. */
		UndeliverableFolder: string;
		/** Type a user name used for mailbox authentication. */
		Username: string;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Indicates if verbose tracing needs to be enabled for this mailbox. */
		VerboseLoggingEnabled: number;
		/** Version number of the mailbox. */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Choose the delivery method for the mailbox for appointments, contacts, and tasks. */
			readonly ACTDeliveryMethod: string;
			/** Status of the Appointments, Contacts, and Tasks. */
			readonly ACTStatus: string;
			/** Choose whether to allow the email connector to use credentials. */
			readonly AllowEmailConnectorToUseCredentials: string;
			/** Mailbox Total Duration in Average */
			readonly AverageTotalDuration: string;
			/** Shows who created the record. */
			readonly CreatedBy: string;
			/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Shows who created the record on behalf of another user. */
			readonly CreatedOnBehalfBy: string;
			/** Type the email address of the mailbox. */
			readonly EmailAddress: string;
			/** The user who approved the email address for synchronization. */
			readonly EmailAddressApprovedBy: string;
			/** Date and time the mailbox's email address was approved. */
			readonly EmailAddressApprovedOn_UtcDateAndTime: string;
			/** Shows the status of the email address. */
			readonly EmailRouterAccessApproval: string;
			/** Select the email server profile of the mailbox. */
			readonly EmailServerProfile: string;
			/** Indicates whether the mailbox is enabled for Appointments, Contacts, and Tasks. */
			readonly EnabledForACT: string;
			/** Choose whether the mailbox is enabled for receiving email. */
			readonly EnabledForIncomingEmail: string;
			/** Choose whether the mailbox is enabled for sending email. */
			readonly EnabledForOutgoingEmail: string;
			/** The default image for the entity. */
			readonly EntityImage: string;
			readonly EntityImage_Timestamp: string;
			readonly EntityImage_URL: string;
			/** For internal use only. */
			readonly EntityImageId: string;
			/** Exchange web services endpoint URL for the mailbox. */
			readonly EWSURL: string;
			/** Date and time when the exchange contacts import was last completed for a mailbox record. */
			readonly ExchangeContactsImportCompletedOn_UtcDateAndTime: string;
			/** Indicates the exchange contacts import status for a mailbox record. */
			readonly ExchangeContactsImportStatus: string;
			/** Contains the exchange synchronization state in XML format. */
			readonly ExchangeSyncStateXml: string;
			/** Reference to the ExchangeSyncStateXml file on Azure. */
			readonly ExchangeSyncStateXmlFileRef_name: string;
			/** Holds the hierarchy of folders under inbox in XML format. */
			readonly FolderHierarchy: string;
			/** For internal use only */
			readonly ForcedUnlockCount: string;
			/** Unique identifier of the async host that is processing this mailbox. */
			readonly HostId: string;
			/** Select how incoming email will be delivered to the mailbox. */
			readonly IncomingEmailDeliveryMethod: string;
			/** Select the status that will be assigned to incoming email messages. */
			readonly IncomingEmailStatus: string;
			/** Set the current organization as the synchronization organization. */
			readonly IsACTSyncOrgFlagSet: string;
			/** Shows the status of approval of the email address by O365 Admin. */
			readonly IsEmailAddressApprovedByO365Admin: string;
			/** Is Exchange Contacts Import Scheduled. */
			readonly IsExchangeContactsImportScheduled: string;
			/** Select whether the mailbox is a forward mailbox. */
			readonly IsForwardMailbox: string;
			readonly IsOauthAccessTokenSet: string;
			readonly IsOauthRefreshTokenSet: string;
			readonly IsPasswordSet: string;
			/** Select whether the mailbox corresponds to one for the service account. */
			readonly IsServiceAccount: string;
			/** For internal use only. */
			readonly ItemsFailedForLastSync: string;
			/** For internal use only. */
			readonly ItemsProcessedForLastSync: string;
			/** For internal use only. */
			readonly LastActiveOn_UtcDateAndTime: string;
			/** Shows the date and time when the Exchange web services URL was last discovered using the AutoDiscover service. */
			readonly LastAutoDiscoveredOn_UtcDateAndTime: string;
			/** Last Duration for the mailbox */
			readonly LastDuration: string;
			/** The timestamp when last set of incoming emails were requested from external email server. For internal use only. */
			readonly LastIncomingEmailsRequestedFromEmailServerOn_UtcDateAndTime: string;
			/** For internal use only. */
			readonly LastMailboxForcedUnlockOccurredOn_UtcDateAndTime: string;
			/** Unique identifier of the last message. */
			readonly LastMessageId: string;
			/** Last Successful Sync Time */
			readonly LastSuccessfulSyncCompletedOn_UtcDateAndTime: string;
			/** For internal use only. */
			readonly LastSyncError: string;
			/** For internal use only. */
			readonly LastSyncErrorCode: string;
			/** For internal use only */
			readonly LastSyncErrorCount: string;
			/** For internal use only. */
			readonly LastSyncErrorMachineName: string;
			/** For internal use only. */
			readonly LastSyncErrorOccurredOn_UtcDateAndTime: string;
			/** Last Sync Start Time */
			readonly LastSyncStartedOn_UtcDateAndTime: string;
			/** Identifies the timestamp when tagging last completed. For internal use only. */
			readonly LastTagCompletedOn_UtcDateAndTime: string;
			/** Identifies the last MessageId that has been processed for tagging in the remote system. */
			readonly LastTaggedMessageId: string;
			/** Indicates if the last tagging cycle processed the maximum number of items. For internal use only. */
			readonly LastTagProcessedMaxItems: string;
			/** Unique identifier of the mailbox. */
			readonly MailboxId: string;
			/** For internal use only. */
			readonly MailboxProcessingContext: string;
			/** Last Sync Status for Outgoing, Incoming and ACT as a whole. */
			readonly MailboxStatus: string;
			/** Shows who last updated the record. */
			readonly ModifiedBy: string;
			/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Shows who last updated the record on behalf of another user. */
			readonly ModifiedOnBehalfBy: string;
			/** Type the name of the mailbox. */
			readonly Name: string;
			/** The next scheduled ACT sync delay, in seconds, to apply to the mailbox. */
			readonly NextScheduledACTSyncInSeconds: string;
			/** For internal use only. */
			readonly NoACTCount: string;
			/** For internal use only. */
			readonly NoEmailCount: string;
			/** Type the Oauth access token for the mailbox. */
			readonly OauthAccessToken: string;
			/** Type the Oauth refresh token for the mailbox. */
			readonly OauthRefreshToken: string;
			/** Date and time when the Oauth token will expire */
			readonly OauthTokenExpiresOn_UtcDateAndTime: string;
			/** Date and time when the last office apps deployment was completed for a mailbox record. */
			readonly OfficeAppsDeploymentCompleteOn_UtcDateAndTime: string;
			/** The Office Apps deployment error. */
			readonly OfficeAppsDeploymentError: string;
			/** Indicates if the office apps deployment has been scheduled for a mailbox record. */
			readonly OfficeAppsDeploymentScheduled: string;
			/** Indicates the office apps deployment type for a mailbox record. */
			readonly OfficeAppsDeploymentStatus: string;
			/** Unique identifier of the organization associated with the record. */
			readonly OrganizationId: string;
			/** Indicates if the crm org is to be marked as primary syncing org for the mailbox record. */
			readonly OrgMarkedAsPrimaryForExchangeSync: string;
			/** Select how outgoing email will be sent from the mailbox. */
			readonly OutgoingEmailDeliveryMethod: string;
			/** Select the status of outgoing email messages. */
			readonly OutgoingEmailStatus: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Select the business unit that owns the record. */
			readonly OwningBusinessUnit: string;
			/** Unique identifier for the team that owns the record. */
			readonly OwningTeam: string;
			/** Unique identifier for the user that owns the record. */
			readonly OwningUser: string;
			/** Type the password for the mailbox. */
			readonly Password: string;
			/** Shows the date and time when processing will begin on this mailbox. */
			readonly PostponeMailboxProcessingUntil_UtcDateOnly: string;
			/** Shows the date and time when the next outlook mail app install will be run for a mailbox record. */
			readonly PostponeOfficeAppsDeploymentUntil_UtcDateAndTime: string;
			/** Shows the date and time when the mailbox can start sending emails. */
			readonly PostponeSendingUntil_UtcDateOnly: string;
			/** Shows the date and time when the next email configuration test will be run for a mailbox record. */
			readonly PostponeTestEmailConfigurationUntil_UtcDateAndTime: string;
			/** Select whether to delete emails from the mailbox after processing. */
			readonly ProcessAndDeleteEmails: string;
			/** The number of times mailbox has processed */
			readonly ProcessedTimes: string;
			/** Shows the date and time to start processing email received by the mailbox. */
			readonly ProcessEmailReceivedAfter_UtcDateOnly: string;
			/** Date and time when the processing of the mailbox was last attempted. */
			readonly ProcessingLastAttemptedOn_UtcDateAndTime: string;
			/** Information that indicates whether email will be processed for this mailbox */
			readonly ProcessingStateCode: string;
			/** For internal use only. */
			readonly ReceivingPostponedUntil_UtcDateOnly: string;
			/** For internal use only. */
			readonly ReceivingPostponedUntilForACT_UtcDateOnly: string;
			/** Choose the user associated to the mailbox. */
			readonly regardingobjectid_queue: string;
			/** Choose the user associated to the mailbox. */
			readonly regardingobjectid: string;
			/** Shows whether the mailbox is active or inactive. */
			readonly StateCode: string;
			/** Select the mailbox's status. */
			readonly StatusCode: string;
			/** Identifies the timestamp after for which emails should be tagged in the remote system. */
			readonly TagEmailsAfter_UtcDateOnly: string;
			/** The user who last attempted to Test and Enable the mailbox. */
			readonly TestAndEnableLastAttemptedBy: string;
			/** The date and time of the last test and enable attempt. */
			readonly TestAndEnableLastAttemptedOn_UtcDateAndTime: string;
			/** Shows the number of times an email configuration test has been performed. */
			readonly TestEmailConfigurationRetryCount: string;
			/** Indicates if the email configuration test has been scheduled for a mailbox record. */
			readonly TestEmailConfigurationScheduled: string;
			/** Date and time when the last email configuration test was completed for a mailbox record. */
			readonly TestMailboxAccessCompletedOn_UtcDateAndTime: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Concatenation of transient failure counts of all mailbox operations. */
			readonly TransientFailureCount: string;
			/** Shows the ID of the Undeliverable folder in the mailbox managed by Microsoft Exchange. */
			readonly UndeliverableFolder: string;
			/** Type a user name used for mailbox authentication. */
			readonly Username: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Indicates if verbose tracing needs to be enabled for this mailbox. */
			readonly VerboseLoggingEnabled: string;
			/** Version number of the mailbox. */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace Mailbox {
		enum ACTDeliveryMethod {
			/** 0 */
			Microsoft_Dynamics_365_for_Outlook,
			/** 2 */
			None,
			/** 1 */
			Server_Side_Synchronization
		}
		enum ACTStatus {
			/** 2 */
			Failure,
			/** 0 */
			Not_Run,
			/** 1 */
			Success
		}
		enum EmailRouterAccessApproval {
			/** 1 */
			Approved,
			/** 0 */
			Empty,
			/** 2 */
			Pending_Approval,
			/** 3 */
			Rejected
		}
		enum ExchangeContactsImportStatus {
			/** 1 */
			Imported,
			/** 2 */
			ImportFailed,
			/** 0 */
			NotImported
		}
		enum IncomingEmailDeliveryMethod {
			/** 3 */
			Forward_Mailbox,
			/** 1 */
			Microsoft_Dynamics_365_for_Outlook,
			/** 0 */
			None,
			/** 2 */
			Server_Side_Synchronization
		}
		enum IncomingEmailStatus {
			/** 2 */
			Failure,
			/** 0 */
			Not_Run,
			/** 1 */
			Success
		}
		enum MailboxStatus {
			/** 2 */
			Failure,
			/** 0 */
			Not_Run,
			/** 1 */
			Success
		}
		enum OfficeAppsDeploymentStatus {
			/** 1 */
			Installed,
			/** 2 */
			InstallFailed,
			/** 0 */
			NotInstalled,
			/** 3 */
			UninstallFailed,
			/** 4 */
			UpgradeRequired
		}
		enum OutgoingEmailDeliveryMethod {
			/** 1 */
			Microsoft_Dynamics_365_for_Outlook,
			/** 0 */
			None,
			/** 2 */
			Server_Side_Synchronization
		}
		enum OutgoingEmailStatus {
			/** 2 */
			Failure,
			/** 0 */
			Not_Run,
			/** 1 */
			Success
		}
		enum RegardingObjectTypeCode {
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.44.44.44'}