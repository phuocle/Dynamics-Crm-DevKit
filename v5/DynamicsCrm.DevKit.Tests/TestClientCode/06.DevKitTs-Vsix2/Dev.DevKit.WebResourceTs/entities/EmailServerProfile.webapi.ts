/**
 * EmailServerProfile.webapi.ts - EmailServerProfile WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * EmailServerProfile WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IEmailServerProfileApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<IEmailServerProfileApi, 'FormattedValue'>]: string };
	/** Microsoft Entra resource ID used for OAuth athentication scheme */
	AadResourceId: string | null;
	/** The name of the email service resource associated with the Azure Communication Service. */
	ACSEmailServiceName: string | null;
	/** Determines if ACS integration should be enabled for outgoing email synchronization. */
	ACSEnabledForOutgoingEmail: boolean | null;
	/** ACS Endpoint Url */
	ACSEndpointUrl: string | null;
	/** Unique identifier for managed identity associated with emailserverprofile for ACS integration. */
	ACSManagedIdentityId: DevKit.Guid | null;
	/** The name of the resource group associated with the Email Communication Service. The name is case insensitive. */
	ACSResourceGroupName: string | null;
	/** The ID of the target Azure subscription associated with the Email Communication Service. */
	ACSSubscriptionId: DevKit.Guid | null;
	/** Shows who created the record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Shows who created the record on behalf of another user. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Type the default location of the server. */
	DefaultServerLocation: string | null;
	/** Type additional information that describes the email server profile. */
	Description: string | null;
	/** Unique identifier of the email server profile. */
	EmailServerProfileId: DevKit.Guid | null;
	/** Email Server Type Name */
	readonly EmailServerTypeName: string | null;
	/** Indicates the code page to use when encoding email content. */
	EncodingCodePage: string | null;
	/** The default image for the entity. */
	EntityImage: string | null;
	/** For internal use only. */
	readonly EntityImageId: DevKit.Guid | null;
	/** Type the tenant ID of Exchange Online. */
	ExchangeOnlineTenantId: string | null;
	/** Select the version of Exchange that is on the email server. */
	ExchangeVersion: number | null;
	/** Select the incoming email authentication protocol that is used for connecting to the email server. */
	IncomingAuthenticationProtocol: number | null;
	/** Select how credentials will be retrieved for incoming email. */
	IncomingCredentialRetrieval: number | null;
	/** Indicates the incoming partner application. */
	readonly IncomingPartnerApplication: DevKit.Guid | null;
	/** Type the password for incoming email. */
	IncomingPassword: string | null;
	/** Type the Exchange port number for incoming mail. */
	IncomingPortNumber: number | null;
	/** Type the location of the server for incoming email. */
	IncomingServerLocation: string | null;
	/** Select whether to use impersonation to access the mailbox to process incoming emails. */
	IncomingUseImpersonation: boolean | null;
	/** Type the user name for incoming email. */
	IncomingUserName: string | null;
	/** Select whether to use the Secure Sockets Layer (SSL) protocol for incoming email. */
	IncomingUseSSL: boolean | null;
	readonly IsIncomingPasswordSet: boolean | null;
	readonly IsOauthClientSecretSet: boolean | null;
	readonly IsOutgoingPasswordSet: boolean | null;
	/** The Azure Key Vault reference id */
	keyvaultreferenceid: DevKit.Guid | null;
	/** Shows the last test authorization status of email server profile */
	LastAuthorizationStatus: number | null;
	/** Shows the Dynamics 365 message obtained during the Last Test */
	LastCrmMessage: string | null;
	/** Shows the last test Execution status of email server profile */
	LastTestExecutionStatus: number | null;
	/** Shows the EWS Request created during the Last Test */
	LastTestRequest: string | null;
	/** Shows the EWS Response obtained during the Last Test */
	LastTestResponse: string | null;
	/** Shows the Last Test Start date and time */
	LastTestStartTime_UtcDateAndTime: Date | null;
	/** Shows the Time taken while running the last test */
	LastTestTotalExecutionTime: number | null;
	/** Shows the last test Validation status of email server profile */
	LastTestValidationStatus: number | null;
	/** The managed identity id */
	managedidentityid: DevKit.Guid | null;
	/** Maximum number of concurrent connections allowed to the email server per authenticated user. */
	MaxConcurrentConnections: number | null;
	/** Minimum polling interval, in minutes, for mailboxes that are associated with this email server profile. */
	MinPollingIntervalInMinutes: number | null;
	/** Shows who last updated the record. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Shows who last updated the record on behalf of another user. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Indicates whether to move undelivered incoming emails to the Undeliverable folder in Microsoft Exchange. */
	MoveUndeliveredEmails: boolean | null;
	/** Type a meaningful name for the email server profile. This name is displayed when you need to select an email server profile. */
	Name: string | null;
	/** ClientId used for OAuth athentication scheme */
	OauthClientId: string | null;
	/** Client secret used for the OAuth authentication scheme */
	OauthClientSecret: string | null;
	/** Unique identifier of the organization associated with the record. */
	readonly OrganizationId: DevKit.Guid | null;
	/** Select the outgoing email authentication protocol that is used for connecting to the email server. */
	OutgoingAuthenticationProtocol: number | null;
	/** Indicates whether the email connector will grant delegate access permissions to the accessing user when required while processing outgoing emails. */
	OutgoingAutoGrantDelegateAccess: boolean | null;
	/** Select how credentials will be retrieved for outgoing email. */
	OutgoingCredentialRetrieval: number | null;
	/** Indicates the outgoing partner application. */
	readonly OutgoingPartnerApplication: DevKit.Guid | null;
	/** Type the password for outgoing email. */
	OutgoingPassword: string | null;
	/** Type the Exchange port number for outgoing mail. */
	OutgoingPortNumber: number | null;
	/** Type the location of the server for outgoing email. */
	OutgoingServerLocation: string | null;
	/** Select whether to use impersonation for accessing the mailbox to process outgoing emails. */
	OutgoingUseImpersonation: boolean | null;
	/** Type the user name for outgoing email. */
	OutgoingUsername: string | null;
	/** Select whether to use the Secure Sockets Layer (SSL) protocol for outgoing email. */
	OutgoingUseSSL: boolean | null;
	/** Email Server Profile Owner's email address */
	OwnerEmailAddress: string | null;
	/** Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
	OwnerId: DevKit.Guid | null;
	/** Select the business unit that owns the record. */
	readonly OwningBusinessUnit: DevKit.Guid | null;
	/** Unique identifier for the team that owns the record. */
	readonly OwningTeam: DevKit.Guid | null;
	/** Unique identifier for the user that owns the record. */
	readonly OwningUser: DevKit.Guid | null;
	/** Shows the date and time after which email messages that are received will be processed for mailboxes associated with the email server profile. */
	ProcessEmailsReceivedAfter_UtcDateAndTime: Date | null;
	/** Unique identifier for managed identity associated with emailserverprofile for Purview integration. */
	PurviewManagedIdentityId: DevKit.Guid | null;
	/** Select whether to send an email alert if more than 50% of the mailboxes in this email server profile failed to synchronize in an hour period. */
	SendEmailAlert: boolean | null;
	/** Select the authority for the email server. */
	ServerAuthority: number | null;
	/** Select the profile's email server type. */
	ServerType: number | null;
	/** Shows whether the email server profile is active or inactive. */
	StateCode: number | null;
	/** Select the email server profile's status. */
	StatusCode: number | null;
	/** Select whether to timeout a single mailbox. */
	TimeoutMailboxConnection: boolean | null;
	/** Type the number of milliseconds to timeout a single mailbox. The upper limit is 100 seconds. */
	TimeoutMailboxConnectionAfterAmount: number | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** Select whether to automatically discover the server location */
	UseAutoDiscover: boolean | null;
	/** Select whether to use the Exchange Online Tenant ID obtained from running Microsoft Azure PowerShell cmdlets (highly recommended). If you select No, you can edit this field manually */
	UseDefaultTenantId: boolean | null;
	/** Select whether to use the same settings for incoming and outgoing connections. */
	UseSameSettingsForOutgoingConnections: boolean | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
	/** Version number of the email server profile. */
	readonly VersionNumber: number | null;
}

const EmailServerProfileFieldConfig: DevKit.IWebApiFieldConfigMap = {
	AadResourceId: { logicalName: 'aadresourceid' },
	ACSEmailServiceName: { logicalName: 'acsemailservicename' },
	ACSEnabledForOutgoingEmail: { logicalName: 'acsenabledforoutgoingemail', type: 'Boolean' },
	ACSEndpointUrl: { logicalName: 'acsendpointurl' },
	ACSManagedIdentityId: { schemaName: 'ACSManagedIdentityId', logicalName: '_acsmanagedidentityid_value', entityCollectionName: 'managedidentities', entityLogicalName: 'managedidentity' },
	ACSResourceGroupName: { logicalName: 'acsresourcegroupname' },
	ACSSubscriptionId: { logicalName: 'acssubscriptionid' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	DefaultServerLocation: { logicalName: 'defaultserverlocation' },
	Description: { logicalName: 'description' },
	EmailServerProfileId: { logicalName: 'emailserverprofileid' },
	EmailServerTypeName: { logicalName: 'emailservertypename', readOnly: true },
	EncodingCodePage: { logicalName: 'encodingcodepage' },
	EntityImage: { logicalName: 'entityimage' },
	EntityImageId: { logicalName: 'entityimageid', readOnly: true },
	ExchangeOnlineTenantId: { logicalName: 'exchangeonlinetenantid' },
	ExchangeVersion: { logicalName: 'exchangeversion', type: 'Integer' },
	IncomingAuthenticationProtocol: { logicalName: 'incomingauthenticationprotocol', type: 'Integer' },
	IncomingCredentialRetrieval: { logicalName: 'incomingcredentialretrieval', type: 'Integer' },
	IncomingPartnerApplication: { schemaName: 'IncomingPartnerApplication', logicalName: '_incomingpartnerapplication_value', readOnly: true, entityCollectionName: 'partnerapplications', entityLogicalName: 'partnerapplication' },
	IncomingPassword: { logicalName: 'incomingpassword' },
	IncomingPortNumber: { logicalName: 'incomingportnumber', type: 'Integer' },
	IncomingServerLocation: { logicalName: 'incomingserverlocation' },
	IncomingUseImpersonation: { logicalName: 'incominguseimpersonation', type: 'Boolean' },
	IncomingUserName: { logicalName: 'incomingusername' },
	IncomingUseSSL: { logicalName: 'incomingusessl', type: 'Boolean' },
	IsIncomingPasswordSet: { logicalName: 'isincomingpasswordset', readOnly: true, type: 'Boolean' },
	IsOauthClientSecretSet: { logicalName: 'isoauthclientsecretset', readOnly: true, type: 'Boolean' },
	IsOutgoingPasswordSet: { logicalName: 'isoutgoingpasswordset', readOnly: true, type: 'Boolean' },
	keyvaultreferenceid: { schemaName: 'keyvaultreferenceid', logicalName: '_keyvaultreferenceid_value', entityCollectionName: 'keyvaultreferences', entityLogicalName: 'keyvaultreference' },
	LastAuthorizationStatus: { logicalName: 'lastauthorizationstatus', type: 'Integer' },
	LastCrmMessage: { logicalName: 'lastcrmmessage' },
	LastTestExecutionStatus: { logicalName: 'lasttestexecutionstatus', type: 'Integer' },
	LastTestRequest: { logicalName: 'lasttestrequest' },
	LastTestResponse: { logicalName: 'lasttestresponse' },
	LastTestStartTime_UtcDateAndTime: { logicalName: 'lastteststarttime', type: 'DateTime' },
	LastTestTotalExecutionTime: { logicalName: 'lasttesttotalexecutiontime', type: 'Integer' },
	LastTestValidationStatus: { logicalName: 'lasttestvalidationstatus', type: 'Integer' },
	managedidentityid: { schemaName: 'managedidentityid', logicalName: '_managedidentityid_value', entityCollectionName: 'managedidentities', entityLogicalName: 'managedidentity' },
	MaxConcurrentConnections: { logicalName: 'maxconcurrentconnections', type: 'Integer' },
	MinPollingIntervalInMinutes: { logicalName: 'minpollingintervalinminutes', type: 'Integer' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	MoveUndeliveredEmails: { logicalName: 'moveundeliveredemails', type: 'Boolean' },
	Name: { logicalName: 'name' },
	OauthClientId: { logicalName: 'oauthclientid' },
	OauthClientSecret: { logicalName: 'oauthclientsecret' },
	OrganizationId: { schemaName: 'OrganizationId', logicalName: '_organizationid_value', readOnly: true, entityCollectionName: 'organizations', entityLogicalName: 'organization' },
	OutgoingAuthenticationProtocol: { logicalName: 'outgoingauthenticationprotocol', type: 'Integer' },
	OutgoingAutoGrantDelegateAccess: { logicalName: 'outgoingautograntdelegateaccess', type: 'Boolean' },
	OutgoingCredentialRetrieval: { logicalName: 'outgoingcredentialretrieval', type: 'Integer' },
	OutgoingPartnerApplication: { schemaName: 'OutgoingPartnerApplication', logicalName: '_outgoingpartnerapplication_value', readOnly: true, entityCollectionName: 'partnerapplications', entityLogicalName: 'partnerapplication' },
	OutgoingPassword: { logicalName: 'outgoingpassword' },
	OutgoingPortNumber: { logicalName: 'outgoingportnumber', type: 'Integer' },
	OutgoingServerLocation: { logicalName: 'outgoingserverlocation' },
	OutgoingUseImpersonation: { logicalName: 'outgoinguseimpersonation', type: 'Boolean' },
	OutgoingUsername: { logicalName: 'outgoingusername' },
	OutgoingUseSSL: { logicalName: 'outgoingusessl', type: 'Boolean' },
	OwnerEmailAddress: { logicalName: 'owneremailaddress' },
	OwnerId: { schemaName: 'OwnerId', logicalName: '_ownerid_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OwningBusinessUnit: { schemaName: 'OwningBusinessUnit', logicalName: '_owningbusinessunit_value', readOnly: true, entityCollectionName: 'businessunits', entityLogicalName: 'businessunit' },
	OwningTeam: { schemaName: 'OwningTeam', logicalName: '_owningteam_value', readOnly: true, entityCollectionName: 'teams', entityLogicalName: 'team' },
	OwningUser: { logicalName: 'owninguser', readOnly: true },
	ProcessEmailsReceivedAfter_UtcDateAndTime: { logicalName: 'processemailsreceivedafter', type: 'DateTime' },
	PurviewManagedIdentityId: { schemaName: 'PurviewManagedIdentityId', logicalName: '_purviewmanagedidentityid_value', entityCollectionName: 'managedidentities', entityLogicalName: 'managedidentity' },
	SendEmailAlert: { logicalName: 'sendemailalert', type: 'Boolean' },
	ServerAuthority: { logicalName: 'serverauthority', type: 'Integer' },
	ServerType: { logicalName: 'servertype', type: 'Integer' },
	StateCode: { logicalName: 'statecode', type: 'Integer' },
	StatusCode: { logicalName: 'statuscode', type: 'Integer' },
	TimeoutMailboxConnection: { logicalName: 'timeoutmailboxconnection', type: 'Boolean' },
	TimeoutMailboxConnectionAfterAmount: { logicalName: 'timeoutmailboxconnectionafteramount', type: 'Integer' },
	TimeZoneRuleVersionNumber: { logicalName: 'timezoneruleversionnumber', type: 'Integer' },
	UseAutoDiscover: { logicalName: 'useautodiscover', type: 'Boolean' },
	UseDefaultTenantId: { logicalName: 'usedefaulttenantid', type: 'Boolean' },
	UseSameSettingsForOutgoingConnections: { logicalName: 'usesamesettingsforoutgoingconnections', type: 'Boolean' },
	UTCConversionTimeZoneCode: { logicalName: 'utcconversiontimezonecode', type: 'Integer' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * EmailServerProfile WebApi class for early-bound style coding
 * Usage: const emailServerProfile = new EmailServerProfileApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class EmailServerProfileApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IEmailServerProfileApi>(entity, 'emailserverprofile', 'emailserverprofiles', EmailServerProfileFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface EmailServerProfileApi extends IEmailServerProfileApi { }
