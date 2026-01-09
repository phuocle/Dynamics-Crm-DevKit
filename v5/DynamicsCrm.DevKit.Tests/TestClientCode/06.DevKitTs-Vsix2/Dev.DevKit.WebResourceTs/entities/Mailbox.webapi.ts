/**
 * Mailbox.webapi.ts - Mailbox WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Mailbox WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IMailboxApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<IMailboxApi, 'FormattedValue'>]: string };
	/** Determines if ACS integration should be enabled for outgoing email synchronization. */
	ACSEnabledForOutgoingEmail: boolean | null;
	/** For internal use only. */
	ACSMailFromCreated: boolean | null;
	/** The status of ACS outgoing email synchronization. */
	ACSOutgoingEmailStatus: number | null;
	/** Choose the delivery method for the mailbox for appointments, contacts, and tasks. */
	ACTDeliveryMethod: number | null;
	/** Status of the Appointments, Contacts, and Tasks. */
	ACTStatus: number | null;
	/** Choose whether to allow the email connector to use credentials. */
	AllowEmailConnectorToUseCredentials: boolean | null;
	/** Mailbox Total Duration in Average */
	readonly AverageTotalDuration: number | null;
	/** Shows who created the record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Shows who created the record on behalf of another user. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Type the email address of the mailbox. */
	EmailAddress: string | null;
	/** The user who approved the email address for synchronization. */
	readonly EmailAddressApprovedBy: DevKit.Guid | null;
	/** Date and time the mailbox's email address was approved. */
	readonly EmailAddressApprovedOn_UtcDateAndTime: Date | null;
	/** Shows the status of the email address. */
	EmailRouterAccessApproval: number | null;
	/** Select the email server profile of the mailbox. */
	EmailServerProfile: DevKit.Guid | null;
	/** Indicates whether the mailbox is enabled for Appointments, Contacts, and Tasks. */
	EnabledForACT: boolean | null;
	/** Choose whether the mailbox is enabled for receiving email. */
	EnabledForIncomingEmail: boolean | null;
	/** Choose whether the mailbox is enabled for sending email. */
	EnabledForOutgoingEmail: boolean | null;
	/** The default image for the entity. */
	EntityImage: string | null;
	/** For internal use only. */
	readonly EntityImageId: DevKit.Guid | null;
	/** Exchange web services endpoint URL for the mailbox. */
	EWSURL: string | null;
	/** Date and time when the exchange contacts import was last completed for a mailbox record. */
	readonly ExchangeContactsImportCompletedOn_UtcDateAndTime: Date | null;
	/** Indicates the exchange contacts import status for a mailbox record. */
	ExchangeContactsImportStatus: number | null;
	/** Contains the exchange synchronization state in XML format. */
	ExchangeSyncStateXml: string | null;
	/** Reference to the ExchangeSyncStateXml file on Azure. */
	readonly ExchangeSyncStateXmlFileRef_name: string | null;
	/** Holds the hierarchy of folders under inbox in XML format. */
	FolderHierarchy: string | null;
	/** For internal use only */
	readonly ForcedUnlockCount: number | null;
	/** Unique identifier of the async host that is processing this mailbox. */
	readonly HostId: string | null;
	/** Select how incoming email will be delivered to the mailbox. */
	IncomingEmailDeliveryMethod: number | null;
	/** Select the status that will be assigned to incoming email messages. */
	IncomingEmailStatus: number | null;
	/** Set the current organization as the synchronization organization. */
	IsACTSyncOrgFlagSet: boolean | null;
	/** Shows the status of approval of the email address by O365 Admin. */
	IsEmailAddressApprovedByO365Admin: boolean | null;
	/** Is Exchange Contacts Import Scheduled. */
	readonly IsExchangeContactsImportScheduled: boolean | null;
	/** Select whether the mailbox is a forward mailbox. */
	readonly IsForwardMailbox: boolean | null;
	readonly IsOauthAccessTokenSet: boolean | null;
	readonly IsOauthRefreshTokenSet: boolean | null;
	readonly IsPasswordSet: boolean | null;
	/** Select whether the mailbox corresponds to one for the service account. */
	readonly IsServiceAccount: boolean | null;
	/** For internal use only. */
	ItemsFailedForLastSync: number | null;
	/** For internal use only. */
	ItemsProcessedForLastSync: number | null;
	/** For internal use only. */
	readonly LastActiveOn_UtcDateAndTime: Date | null;
	/** Shows the date and time when the Exchange web services URL was last discovered using the AutoDiscover service. */
	LastAutoDiscoveredOn_UtcDateAndTime: Date | null;
	/** Last Duration for the mailbox */
	readonly LastDuration: number | null;
	/** The timestamp when last set of incoming emails were requested from external email server. For internal use only. */
	LastIncomingEmailsRequestedFromEmailServerOn_UtcDateAndTime: Date | null;
	/** For internal use only. */
	readonly LastMailboxForcedUnlockOccurredOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the last message. */
	LastMessageId: string | null;
	/** Last Successful Sync Time */
	LastSuccessfulSyncCompletedOn_UtcDateAndTime: Date | null;
	/** For internal use only. */
	LastSyncError: string | null;
	/** For internal use only. */
	LastSyncErrorCode: number | null;
	/** For internal use only */
	LastSyncErrorCount: number | null;
	/** For internal use only. */
	LastSyncErrorMachineName: string | null;
	/** For internal use only. */
	LastSyncErrorOccurredOn_UtcDateAndTime: Date | null;
	/** Last Sync Start Time */
	readonly LastSyncStartedOn_UtcDateAndTime: Date | null;
	/** Identifies the timestamp when tagging last completed. For internal use only. */
	LastTagCompletedOn_UtcDateAndTime: Date | null;
	/** Identifies the last MessageId that has been processed for tagging in the remote system. */
	LastTaggedMessageId: string | null;
	/** Indicates if the last tagging cycle processed the maximum number of items. For internal use only. */
	LastTagProcessedMaxItems: boolean | null;
	/** Unique identifier of the mailbox. */
	MailboxId: DevKit.Guid | null;
	/** For internal use only. */
	MailboxProcessingContext: number | null;
	/** Last Sync Status for Outgoing, Incoming and ACT as a whole. */
	readonly MailboxStatus: number | null;
	/** Shows who last updated the record. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Shows who last updated the record on behalf of another user. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Type the name of the mailbox. */
	Name: string | null;
	/** The next scheduled ACT sync delay, in seconds, to apply to the mailbox. */
	readonly NextScheduledACTSyncInSeconds: number | null;
	/** For internal use only. */
	readonly NoACTCount: number | null;
	/** For internal use only. */
	readonly NoEmailCount: number | null;
	/** Type the Oauth access token for the mailbox. */
	OauthAccessToken: string | null;
	/** Type the Oauth refresh token for the mailbox. */
	OauthRefreshToken: string | null;
	/** Date and time when the Oauth token will expire */
	OauthTokenExpiresOn_UtcDateAndTime: Date | null;
	/** Date and time when the last office apps deployment was completed for a mailbox record. */
	readonly OfficeAppsDeploymentCompleteOn_UtcDateAndTime: Date | null;
	/** The Office Apps deployment error. */
	readonly OfficeAppsDeploymentError: string | null;
	/** Indicates if the office apps deployment has been scheduled for a mailbox record. */
	OfficeAppsDeploymentScheduled: boolean | null;
	/** Indicates the office apps deployment type for a mailbox record. */
	OfficeAppsDeploymentStatus: number | null;
	/** Unique identifier of the organization associated with the record. */
	readonly OrganizationId: DevKit.Guid | null;
	/** Indicates if the crm org is to be marked as primary syncing org for the mailbox record. */
	OrgMarkedAsPrimaryForExchangeSync: boolean | null;
	/** Select how outgoing email will be sent from the mailbox. */
	OutgoingEmailDeliveryMethod: number | null;
	/** Select the status of outgoing email messages. */
	OutgoingEmailStatus: number | null;
	/** Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
	OwnerId: DevKit.Guid | null;
	/** Select the business unit that owns the record. */
	readonly OwningBusinessUnit: DevKit.Guid | null;
	/** Unique identifier for the team that owns the record. */
	readonly OwningTeam: DevKit.Guid | null;
	/** Unique identifier for the user that owns the record. */
	readonly OwningUser: DevKit.Guid | null;
	/** Type the password for the mailbox. */
	Password: string | null;
	/** Shows the date and time when processing will begin on this mailbox. */
	PostponeMailboxProcessingUntil_UtcDateOnly: Date | null;
	/** Shows the date and time when the next outlook mail app install will be run for a mailbox record. */
	PostponeOfficeAppsDeploymentUntil_UtcDateAndTime: Date | null;
	/** Shows the date and time when the mailbox can start sending emails. */
	PostponeSendingUntil_UtcDateOnly: Date | null;
	/** Shows the date and time when the next email configuration test will be run for a mailbox record. */
	PostponeTestEmailConfigurationUntil_UtcDateAndTime: Date | null;
	/** Select whether to delete emails from the mailbox after processing. */
	ProcessAndDeleteEmails: boolean | null;
	/** The number of times mailbox has processed */
	readonly ProcessedTimes: number | null;
	/** Shows the date and time to start processing email received by the mailbox. */
	ProcessEmailReceivedAfter_UtcDateOnly: Date | null;
	/** Date and time when the processing of the mailbox was last attempted. */
	ProcessingLastAttemptedOn_UtcDateAndTime: Date | null;
	/** Information that indicates whether email will be processed for this mailbox */
	readonly ProcessingStateCode: number | null;
	/** For internal use only. */
	readonly ReceivingPostponedUntil_UtcDateOnly: Date | null;
	/** For internal use only. */
	readonly ReceivingPostponedUntilForACT_UtcDateOnly: Date | null;
	/** Choose the user associated to the mailbox. */
	readonly RegardingObjectId: DevKit.Guid | null;
	/** Shows whether the mailbox is active or inactive. */
	StateCode: number | null;
	/** Select the mailbox's status. */
	StatusCode: number | null;
	/** Identifies the timestamp after for which emails should be tagged in the remote system. */
	TagEmailsAfter_UtcDateOnly: Date | null;
	/** The user who last attempted to Test and Enable the mailbox. */
	readonly TestAndEnableLastAttemptedBy: DevKit.Guid | null;
	/** The date and time of the last test and enable attempt. */
	readonly TestAndEnableLastAttemptedOn_UtcDateAndTime: Date | null;
	/** Shows the number of times an email configuration test has been performed. */
	TestEmailConfigurationRetryCount: number | null;
	/** Indicates if the email configuration test has been scheduled for a mailbox record. */
	TestEmailConfigurationScheduled: boolean | null;
	/** Date and time when the last email configuration test was completed for a mailbox record. */
	TestMailboxAccessCompletedOn_UtcDateAndTime: Date | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** Concatenation of transient failure counts of all mailbox operations. */
	readonly TransientFailureCount: number | null;
	/** Shows the ID of the Undeliverable folder in the mailbox managed by Microsoft Exchange. */
	UndeliverableFolder: string | null;
	/** Type a user name used for mailbox authentication. */
	Username: string | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
	/** Indicates if verbose tracing needs to be enabled for this mailbox. */
	VerboseLoggingEnabled: number | null;
	/** Version number of the mailbox. */
	readonly VersionNumber: number | null;
}

const MailboxFieldConfig: DevKit.IWebApiFieldConfigMap = {
	ACSEnabledForOutgoingEmail: { logicalName: 'acsenabledforoutgoingemail', type: 'Boolean' },
	ACSMailFromCreated: { logicalName: 'acsmailfromcreated', type: 'Boolean' },
	ACSOutgoingEmailStatus: { logicalName: 'acsoutgoingemailstatus', type: 'Integer' },
	ACTDeliveryMethod: { logicalName: 'actdeliverymethod', type: 'Integer' },
	ACTStatus: { logicalName: 'actstatus', type: 'Integer' },
	AllowEmailConnectorToUseCredentials: { logicalName: 'allowemailconnectortousecredentials', type: 'Boolean' },
	AverageTotalDuration: { logicalName: 'averagetotalduration', readOnly: true, type: 'Integer' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	EmailAddress: { logicalName: 'emailaddress' },
	EmailAddressApprovedBy: { schemaName: 'EmailAddressApprovedBy', logicalName: '_emailaddressapprovedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	EmailAddressApprovedOn_UtcDateAndTime: { logicalName: 'emailaddressapprovedon', readOnly: true, type: 'DateTime' },
	EmailRouterAccessApproval: { logicalName: 'emailrouteraccessapproval', type: 'Integer' },
	EmailServerProfile: { schemaName: 'EmailServerProfile', logicalName: '_emailserverprofile_value', entityCollectionName: 'emailserverprofiles', entityLogicalName: 'emailserverprofile' },
	EnabledForACT: { logicalName: 'enabledforact', type: 'Boolean' },
	EnabledForIncomingEmail: { logicalName: 'enabledforincomingemail', type: 'Boolean' },
	EnabledForOutgoingEmail: { logicalName: 'enabledforoutgoingemail', type: 'Boolean' },
	EntityImage: { logicalName: 'entityimage' },
	EntityImageId: { logicalName: 'entityimageid', readOnly: true },
	EWSURL: { logicalName: 'ewsurl' },
	ExchangeContactsImportCompletedOn_UtcDateAndTime: { logicalName: 'exchangecontactsimportcompletedon', readOnly: true, type: 'DateTime' },
	ExchangeContactsImportStatus: { logicalName: 'exchangecontactsimportstatus', type: 'Integer' },
	ExchangeSyncStateXml: { logicalName: 'exchangesyncstatexml' },
	ExchangeSyncStateXmlFileRef_name: { logicalName: 'exchangesyncstatexmlfileref', readOnly: true },
	FolderHierarchy: { logicalName: 'folderhierarchy' },
	ForcedUnlockCount: { logicalName: 'forcedunlockcount', readOnly: true, type: 'Integer' },
	HostId: { logicalName: 'hostid', readOnly: true },
	IncomingEmailDeliveryMethod: { logicalName: 'incomingemaildeliverymethod', type: 'Integer' },
	IncomingEmailStatus: { logicalName: 'incomingemailstatus', type: 'Integer' },
	IsACTSyncOrgFlagSet: { logicalName: 'isactsyncorgflagset', type: 'Boolean' },
	IsEmailAddressApprovedByO365Admin: { logicalName: 'isemailaddressapprovedbyo365admin', type: 'Boolean' },
	IsExchangeContactsImportScheduled: { logicalName: 'isexchangecontactsimportscheduled', readOnly: true, type: 'Boolean' },
	IsForwardMailbox: { logicalName: 'isforwardmailbox', readOnly: true, type: 'Boolean' },
	IsOauthAccessTokenSet: { logicalName: 'isoauthaccesstokenset', readOnly: true, type: 'Boolean' },
	IsOauthRefreshTokenSet: { logicalName: 'isoauthrefreshtokenset', readOnly: true, type: 'Boolean' },
	IsPasswordSet: { logicalName: 'ispasswordset', readOnly: true, type: 'Boolean' },
	IsServiceAccount: { logicalName: 'isserviceaccount', readOnly: true, type: 'Boolean' },
	ItemsFailedForLastSync: { logicalName: 'itemsfailedforlastsync', type: 'Integer' },
	ItemsProcessedForLastSync: { logicalName: 'itemsprocessedforlastsync', type: 'Integer' },
	LastActiveOn_UtcDateAndTime: { logicalName: 'lastactiveon', readOnly: true, type: 'DateTime' },
	LastAutoDiscoveredOn_UtcDateAndTime: { logicalName: 'lastautodiscoveredon', type: 'DateTime' },
	LastDuration: { logicalName: 'lastduration', readOnly: true, type: 'Integer' },
	LastIncomingEmailsRequestedFromEmailServerOn_UtcDateAndTime: { logicalName: 'lastincomingemailsrequestedfromemailserveron', type: 'DateTime' },
	LastMailboxForcedUnlockOccurredOn_UtcDateAndTime: { logicalName: 'lastmailboxforcedunlockoccurredon', readOnly: true, type: 'DateTime' },
	LastMessageId: { logicalName: 'lastmessageid' },
	LastSuccessfulSyncCompletedOn_UtcDateAndTime: { logicalName: 'lastsuccessfulsynccompletedon', type: 'DateTime' },
	LastSyncError: { logicalName: 'lastsyncerror' },
	LastSyncErrorCode: { logicalName: 'lastsyncerrorcode', type: 'Integer' },
	LastSyncErrorCount: { logicalName: 'lastsyncerrorcount', type: 'Integer' },
	LastSyncErrorMachineName: { logicalName: 'lastsyncerrormachinename' },
	LastSyncErrorOccurredOn_UtcDateAndTime: { logicalName: 'lastsyncerroroccurredon', type: 'DateTime' },
	LastSyncStartedOn_UtcDateAndTime: { logicalName: 'lastsyncstartedon', readOnly: true, type: 'DateTime' },
	LastTagCompletedOn_UtcDateAndTime: { logicalName: 'lasttagcompletedon', type: 'DateTime' },
	LastTaggedMessageId: { logicalName: 'lasttaggedmessageid' },
	LastTagProcessedMaxItems: { logicalName: 'lasttagprocessedmaxitems', type: 'Boolean' },
	MailboxId: { logicalName: 'mailboxid' },
	MailboxProcessingContext: { logicalName: 'mailboxprocessingcontext', type: 'Integer' },
	MailboxStatus: { logicalName: 'mailboxstatus', readOnly: true, type: 'Integer' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Name: { logicalName: 'name' },
	NextScheduledACTSyncInSeconds: { logicalName: 'nextscheduledactsyncinseconds', readOnly: true, type: 'Integer' },
	NoACTCount: { logicalName: 'noactcount', readOnly: true, type: 'Integer' },
	NoEmailCount: { logicalName: 'noemailcount', readOnly: true, type: 'Integer' },
	OauthAccessToken: { logicalName: 'oauthaccesstoken' },
	OauthRefreshToken: { logicalName: 'oauthrefreshtoken' },
	OauthTokenExpiresOn_UtcDateAndTime: { logicalName: 'oauthtokenexpireson', type: 'DateTime' },
	OfficeAppsDeploymentCompleteOn_UtcDateAndTime: { logicalName: 'officeappsdeploymentcompleteon', readOnly: true, type: 'DateTime' },
	OfficeAppsDeploymentError: { logicalName: 'officeappsdeploymenterror', readOnly: true },
	OfficeAppsDeploymentScheduled: { logicalName: 'officeappsdeploymentscheduled', type: 'Boolean' },
	OfficeAppsDeploymentStatus: { logicalName: 'officeappsdeploymentstatus', type: 'Integer' },
	OrganizationId: { schemaName: 'OrganizationId', logicalName: '_organizationid_value', readOnly: true, entityCollectionName: 'organizations', entityLogicalName: 'organization' },
	OrgMarkedAsPrimaryForExchangeSync: { logicalName: 'orgmarkedasprimaryforexchangesync', type: 'Boolean' },
	OutgoingEmailDeliveryMethod: { logicalName: 'outgoingemaildeliverymethod', type: 'Integer' },
	OutgoingEmailStatus: { logicalName: 'outgoingemailstatus', type: 'Integer' },
	OwnerId: { schemaName: 'OwnerId', logicalName: '_ownerid_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OwningBusinessUnit: { schemaName: 'OwningBusinessUnit', logicalName: '_owningbusinessunit_value', readOnly: true, entityCollectionName: 'businessunits', entityLogicalName: 'businessunit' },
	OwningTeam: { schemaName: 'OwningTeam', logicalName: '_owningteam_value', readOnly: true, entityCollectionName: 'teams', entityLogicalName: 'team' },
	OwningUser: { schemaName: 'OwningUser', logicalName: '_owninguser_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Password: { logicalName: 'password' },
	PostponeMailboxProcessingUntil_UtcDateOnly: { logicalName: 'postponemailboxprocessinguntil', type: 'DateTime' },
	PostponeOfficeAppsDeploymentUntil_UtcDateAndTime: { logicalName: 'postponeofficeappsdeploymentuntil', type: 'DateTime' },
	PostponeSendingUntil_UtcDateOnly: { logicalName: 'postponesendinguntil', type: 'DateTime' },
	PostponeTestEmailConfigurationUntil_UtcDateAndTime: { logicalName: 'postponetestemailconfigurationuntil', type: 'DateTime' },
	ProcessAndDeleteEmails: { logicalName: 'processanddeleteemails', type: 'Boolean' },
	ProcessedTimes: { logicalName: 'processedtimes', readOnly: true, type: 'Integer' },
	ProcessEmailReceivedAfter_UtcDateOnly: { logicalName: 'processemailreceivedafter', type: 'DateTime' },
	ProcessingLastAttemptedOn_UtcDateAndTime: { logicalName: 'processinglastattemptedon', type: 'DateTime' },
	ProcessingStateCode: { logicalName: 'processingstatecode', readOnly: true, type: 'Integer' },
	ReceivingPostponedUntil_UtcDateOnly: { logicalName: 'receivingpostponeduntil', readOnly: true, type: 'DateTime' },
	ReceivingPostponedUntilForACT_UtcDateOnly: { logicalName: 'receivingpostponeduntilforact', readOnly: true, type: 'DateTime' },
	RegardingObjectId: { schemaName: 'RegardingObjectId', logicalName: '_regardingobjectid_value', readOnly: true, entityCollectionName: 'queues', entityLogicalName: 'queue' },
	StateCode: { logicalName: 'statecode', type: 'Integer' },
	StatusCode: { logicalName: 'statuscode', type: 'Integer' },
	TagEmailsAfter_UtcDateOnly: { logicalName: 'tagemailsafter', type: 'DateTime' },
	TestAndEnableLastAttemptedBy: { schemaName: 'TestAndEnableLastAttemptedBy', logicalName: '_testandenablelastattemptedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	TestAndEnableLastAttemptedOn_UtcDateAndTime: { logicalName: 'testandenablelastattemptedon', readOnly: true, type: 'DateTime' },
	TestEmailConfigurationRetryCount: { logicalName: 'testemailconfigurationretrycount', type: 'Integer' },
	TestEmailConfigurationScheduled: { logicalName: 'testemailconfigurationscheduled', type: 'Boolean' },
	TestMailboxAccessCompletedOn_UtcDateAndTime: { logicalName: 'testmailboxaccesscompletedon', type: 'DateTime' },
	TimeZoneRuleVersionNumber: { logicalName: 'timezoneruleversionnumber', type: 'Integer' },
	TransientFailureCount: { logicalName: 'transientfailurecount', readOnly: true, type: 'Integer' },
	UndeliverableFolder: { logicalName: 'undeliverablefolder' },
	Username: { logicalName: 'username' },
	UTCConversionTimeZoneCode: { logicalName: 'utcconversiontimezonecode', type: 'Integer' },
	VerboseLoggingEnabled: { logicalName: 'verboseloggingenabled', type: 'Integer' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * Mailbox WebApi class for early-bound style coding
 * Usage: const mailbox = new MailboxApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class MailboxApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IMailboxApi>(entity, 'mailbox', 'mailboxes', MailboxFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface MailboxApi extends IMailboxApi { }
