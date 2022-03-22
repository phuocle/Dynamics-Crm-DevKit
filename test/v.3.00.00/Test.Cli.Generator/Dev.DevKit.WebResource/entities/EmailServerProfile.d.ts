//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormEmailServerProfile_Information {
		interface tab_tab_3_Sections {
			_2EB17E5B_3A06_43BD_BB50_23F8630CD9F8_SECTION_1: DevKit.Controls.Section;
			_2EB17E5B_3A06_43BD_BB50_23F8630CD9F8_SECTION_2: DevKit.Controls.Section;
			_2EB17E5B_3A06_43BD_BB50_23F8630CD9F8_SECTION_3: DevKit.Controls.Section;
		}
		interface tab_tab_4_Sections {
			tab_4_section_1: DevKit.Controls.Section;
		}
		interface tab_tab_3 extends DevKit.Controls.ITab {
			Section: tab_tab_3_Sections;
		}
		interface tab_tab_4 extends DevKit.Controls.ITab {
			Section: tab_tab_4_Sections;
		}
		interface Tabs {
			tab_3: tab_tab_3;
			tab_4: tab_tab_4;
		}
		interface Body {
			Tab: Tabs;
			/** Type additional information that describes the email server profile. */
			Description: DevKit.Controls.String;
			/** Email Server Type Name */
			EmailServerTypeName: DevKit.Controls.String;
			/** Type the tenant ID of Exchange Online. */
			ExchangeOnlineTenantId: DevKit.Controls.String;
			/** Select the incoming email authentication protocol that is used for connecting to the email server. */
			IncomingAuthenticationProtocol: DevKit.Controls.OptionSet;
			/** Select how credentials will be retrieved for incoming email. */
			IncomingCredentialRetrieval: DevKit.Controls.OptionSet;
			/** Type the password for incoming email. */
			IncomingPassword: DevKit.Controls.String;
			/** Type the Exchange port number for incoming mail. */
			IncomingPortNumber: DevKit.Controls.Integer;
			/** Type the location of the server for incoming email. */
			IncomingServerLocation: DevKit.Controls.String;
			/** Select whether to use impersonation to access the mailbox to process incoming emails. */
			IncomingUseImpersonation: DevKit.Controls.Boolean;
			/** Type the user name for incoming email. */
			IncomingUserName: DevKit.Controls.String;
			/** Select whether to use the Secure Sockets Layer (SSL) protocol for incoming email. */
			IncomingUseSSL: DevKit.Controls.Boolean;
			/** Maximum number of concurrent connections allowed to the email server per authenticated user. */
			MaxConcurrentConnections: DevKit.Controls.Integer;
			/** Minimum polling interval, in minutes, for mailboxes that are associated with this email server profile. */
			MinPollingIntervalInMinutes: DevKit.Controls.Integer;
			/** Indicates whether to move undelivered incoming emails to the Undeliverable folder in Microsoft Exchange. */
			MoveUndeliveredEmails: DevKit.Controls.Boolean;
			/** Type a meaningful name for the email server profile. This name is displayed when you need to select an email server profile. */
			Name: DevKit.Controls.String;
			notescontrol: DevKit.Controls.Note;
			/** ClientId used for OAuth athentication scheme */
			OauthClientId: DevKit.Controls.String;
			/** Client secret used for the OAuth authentication scheme */
			OauthClientSecret: DevKit.Controls.String;
			/** Select the outgoing email authentication protocol that is used for connecting to the email server. */
			OutgoingAuthenticationProtocol: DevKit.Controls.OptionSet;
			/** Select how credentials will be retrieved for outgoing email. */
			OutgoingCredentialRetrieval: DevKit.Controls.OptionSet;
			/** Type the password for outgoing email. */
			OutgoingPassword: DevKit.Controls.String;
			/** Type the Exchange port number for outgoing mail. */
			OutgoingPortNumber: DevKit.Controls.Integer;
			/** Type the location of the server for outgoing email. */
			OutgoingServerLocation: DevKit.Controls.String;
			/** Select whether to use impersonation for accessing the mailbox to process outgoing emails. */
			OutgoingUseImpersonation: DevKit.Controls.Boolean;
			/** Type the user name for outgoing email. */
			OutgoingUsername: DevKit.Controls.String;
			/** Select whether to use the Secure Sockets Layer (SSL) protocol for outgoing email. */
			OutgoingUseSSL: DevKit.Controls.Boolean;
			/** Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
			OwnerId: DevKit.Controls.Lookup;
			/** Shows the date and time after which email messages that are received will be processed for mailboxes associated with the email server profile. */
			ProcessEmailsReceivedAfter: DevKit.Controls.DateTime;
			/** Select whether to send an email alert if more than 50% of the mailboxes in this email server profile failed to synchronize in an hour period. */
			SendEmailAlert: DevKit.Controls.Boolean;
			/** Select the profile's email server type. */
			ServerType: DevKit.Controls.OptionSet;
			/** Select whether to timeout a single mailbox. */
			TimeoutMailboxConnection: DevKit.Controls.Boolean;
			/** Type the number of milliseconds to timeout a single mailbox. The upper limit is 100 seconds. */
			TimeoutMailboxConnectionAfterAmount: DevKit.Controls.Integer;
			/** Select whether to automatically discover the server location */
			UseAutoDiscover: DevKit.Controls.Boolean;
			/** Select whether to use the Exchange Online Tenant ID obtained from running Microsoft Azure PowerShell cmdlets (highly recommended). If you select No, you can edit this field manually */
			UseDefaultTenantId: DevKit.Controls.Boolean;
			/** Select whether to use the same settings for incoming and outgoing connections. */
			UseSameSettingsForOutgoingConnections: DevKit.Controls.Boolean;
		}
		interface Footer extends DevKit.Controls.IFooter {
			/** Shows whether the email server profile is active or inactive. */
			StateCode: DevKit.Controls.OptionSet;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class FormEmailServerProfile_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form EmailServerProfile_Information */
		Body: DevKit.FormEmailServerProfile_Information.Body;
		/** The Footer section of form EmailServerProfile_Information */
		Footer: DevKit.FormEmailServerProfile_Information.Footer;
		/** The Process of form EmailServerProfile_Information */
		Process: DevKit.FormEmailServerProfile_Information.Process;
		/** The SidePanes of form EmailServerProfile_Information */
		SidePanes: DevKit.SidePanes;
	}
	class EmailServerProfileApi {
		/**
		* DynamicsCrm.DevKit EmailServerProfileApi
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
		/** AAD ResourceId used for OAuth athentication scheme */
		AadResourceId: string;
		/** Shows who created the record. */
		readonly CreatedBy: string;
		/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Shows who created the record on behalf of another user. */
		readonly CreatedOnBehalfBy: string;
		/** Type the default location of the server. */
		DefaultServerLocation: string;
		/** Type additional information that describes the email server profile. */
		Description: string;
		/** Unique identifier of the email server profile. */
		EmailServerProfileId: string;
		/** Email Server Type Name */
		readonly EmailServerTypeName: string;
		/** Indicates the code page to use when encoding email content. */
		EncodingCodePage: string;
		/** The default image for the entity. */
		EntityImage: string;
		EntityImage_Timestamp: number;
		EntityImage_URL: string;
		/** For internal use only. */
		readonly EntityImageId: string;
		/** Type the tenant ID of Exchange Online. */
		ExchangeOnlineTenantId: string;
		/** Select the version of Exchange that is on the email server. */
		ExchangeVersion: OptionSet.EmailServerProfile.ExchangeVersion;
		/** Select the incoming email authentication protocol that is used for connecting to the email server. */
		IncomingAuthenticationProtocol: OptionSet.EmailServerProfile.IncomingAuthenticationProtocol;
		/** Select how credentials will be retrieved for incoming email. */
		IncomingCredentialRetrieval: OptionSet.EmailServerProfile.IncomingCredentialRetrieval;
		/** Indicates the incoming partner application. */
		readonly IncomingPartnerApplication: string;
		/** Type the password for incoming email. */
		IncomingPassword: string;
		/** Type the Exchange port number for incoming mail. */
		IncomingPortNumber: number;
		/** Type the location of the server for incoming email. */
		IncomingServerLocation: string;
		/** Select whether to use impersonation to access the mailbox to process incoming emails. */
		IncomingUseImpersonation: boolean;
		/** Type the user name for incoming email. */
		IncomingUserName: string;
		/** Select whether to use the Secure Sockets Layer (SSL) protocol for incoming email. */
		IncomingUseSSL: boolean;
		readonly IsIncomingPasswordSet: boolean;
		readonly IsOauthClientSecretSet: boolean;
		readonly IsOutgoingPasswordSet: boolean;
		/** The Azure Key Vault reference id */
		keyvaultreferenceid: string;
		/** Shows the last test authorization status of email server profile */
		LastAuthorizationStatus: OptionSet.EmailServerProfile.LastAuthorizationStatus;
		/** Shows the Dynamics 365 message obtained during the Last Test */
		LastCrmMessage: string;
		/** Shows the last test Execution status of email server profile */
		LastTestExecutionStatus: OptionSet.EmailServerProfile.LastTestExecutionStatus;
		/** Shows the EWS Request created during the Last Test */
		LastTestRequest: string;
		/** Shows the EWS Response obtained during the Last Test */
		LastTestResponse: string;
		/** Shows the Last Test Start date and time */
		LastTestStartTime_UtcDateAndTime: Date;
		/** Shows the Time taken while running the last test */
		LastTestTotalExecutionTime: number;
		/** Shows the last test Validation status of email server profile */
		LastTestValidationStatus: OptionSet.EmailServerProfile.LastTestValidationStatus;
		/** The managed identity id */
		managedidentityid: string;
		/** Maximum number of concurrent connections allowed to the email server per authenticated user. */
		MaxConcurrentConnections: number;
		/** Minimum polling interval, in minutes, for mailboxes that are associated with this email server profile. */
		MinPollingIntervalInMinutes: number;
		/** Shows who last updated the record. */
		readonly ModifiedBy: string;
		/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Shows who last updated the record on behalf of another user. */
		readonly ModifiedOnBehalfBy: string;
		/** Indicates whether to move undelivered incoming emails to the Undeliverable folder in Microsoft Exchange. */
		MoveUndeliveredEmails: boolean;
		/** Type a meaningful name for the email server profile. This name is displayed when you need to select an email server profile. */
		Name: string;
		/** ClientId used for OAuth athentication scheme */
		OauthClientId: string;
		/** Client secret used for the OAuth authentication scheme */
		OauthClientSecret: string;
		/** Unique identifier of the organization associated with the record. */
		readonly OrganizationId: string;
		/** Select the outgoing email authentication protocol that is used for connecting to the email server. */
		OutgoingAuthenticationProtocol: OptionSet.EmailServerProfile.OutgoingAuthenticationProtocol;
		/** Indicates whether the email connector will grant delegate access permissions to the accessing user when required while processing outgoing emails. */
		OutgoingAutoGrantDelegateAccess: boolean;
		/** Select how credentials will be retrieved for outgoing email. */
		OutgoingCredentialRetrieval: OptionSet.EmailServerProfile.OutgoingCredentialRetrieval;
		/** Indicates the outgoing partner application. */
		readonly OutgoingPartnerApplication: string;
		/** Type the password for outgoing email. */
		OutgoingPassword: string;
		/** Type the Exchange port number for outgoing mail. */
		OutgoingPortNumber: number;
		/** Type the location of the server for outgoing email. */
		OutgoingServerLocation: string;
		/** Select whether to use impersonation for accessing the mailbox to process outgoing emails. */
		OutgoingUseImpersonation: boolean;
		/** Type the user name for outgoing email. */
		OutgoingUsername: string;
		/** Select whether to use the Secure Sockets Layer (SSL) protocol for outgoing email. */
		OutgoingUseSSL: boolean;
		/** Email Server Profile Owner's email address */
		OwnerEmailAddress: string;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Select the business unit that owns the record. */
		readonly OwningBusinessUnit: string;
		/** Unique identifier for the team that owns the record. */
		readonly OwningTeam: string;
		/** Shows the date and time after which email messages that are received will be processed for mailboxes associated with the email server profile. */
		ProcessEmailsReceivedAfter_UtcDateAndTime: Date;
		/** Select whether to send an email alert if more than 50% of the mailboxes in this email server profile failed to synchronize in an hour period. */
		SendEmailAlert: boolean;
		/** Select the profile's email server type. */
		ServerType: OptionSet.EmailServerProfile.ServerType;
		/** Shows whether the email server profile is active or inactive. */
		StateCode: OptionSet.EmailServerProfile.StateCode;
		/** Select the email server profile's status. */
		StatusCode: OptionSet.EmailServerProfile.StatusCode;
		/** Select whether to timeout a single mailbox. */
		TimeoutMailboxConnection: boolean;
		/** Type the number of milliseconds to timeout a single mailbox. The upper limit is 100 seconds. */
		TimeoutMailboxConnectionAfterAmount: number;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Select whether to automatically discover the server location */
		UseAutoDiscover: boolean;
		/** Select whether to use the Exchange Online Tenant ID obtained from running Microsoft Azure PowerShell cmdlets (highly recommended). If you select No, you can edit this field manually */
		UseDefaultTenantId: boolean;
		/** Select whether to use the same settings for incoming and outgoing connections. */
		UseSameSettingsForOutgoingConnections: boolean;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version number of the email server profile. */
		readonly VersionNumber: number;
	}
}
declare namespace OptionSet {
	namespace EmailServerProfile {
		enum ExchangeVersion {
			/** 0 */
			Exchange_2007,
			/** 1 */
			Exchange_2007_SP1,
			/** 2 */
			Exchange_2010,
			/** 3 */
			Exchange_2010_SP1,
			/** 4 */
			Exchange_2010_SP2,
			/** 5 */
			Exchange_2013
		}
		enum IncomingAuthenticationProtocol {
			/** 0 */
			Auto_Detect,
			/** 3 */
			Basic,
			/** 1 */
			Negotiate,
			/** 2 */
			NTLM,
			/** 4 */
			OAuth
		}
		enum IncomingCredentialRetrieval {
			/** 7 */
			Azure_Active_Directory_OAuth,
			/** 0 */
			Credentials_Specified_by_a_User_or_Queue,
			/** 1 */
			Credentials_Specified_in_Email_Server_Profile,
			/** 6 */
			Exchange_Hybrid_Modern_Auth_HMA,
			/** 5 */
			Gmail_OAuth,
			/** 2 */
			Server_to_Server_Authentication,
			/** 3 */
			Windows_Integrated_Authentication,
			/** 4 */
			Without_Credentials_Anonymous
		}
		enum LastAuthorizationStatus {
			/** 0 */
			Failure,
			/** 1 */
			Success
		}
		enum LastTestExecutionStatus {
			/** 0 */
			Failure,
			/** 1 */
			Success,
			/** 2 */
			Warning
		}
		enum LastTestValidationStatus {
			/** 0 */
			Failure,
			/** 1 */
			Success
		}
		enum OutgoingAuthenticationProtocol {
			/** 0 */
			Auto_Detect,
			/** 3 */
			Basic,
			/** 1 */
			Negotiate,
			/** 2 */
			NTLM,
			/** 4 */
			OAuth
		}
		enum OutgoingCredentialRetrieval {
			/** 7 */
			Azure_Active_Directory_OAuth,
			/** 0 */
			Credentials_Specified_by_a_User_or_Queue,
			/** 1 */
			Credentials_Specified_in_Email_Server_Profile,
			/** 6 */
			Exchange_Hybrid_Modern_Auth_HMA,
			/** 5 */
			Gmail_OAuth,
			/** 2 */
			Server_to_Server_Authentication,
			/** 3 */
			Windows_Integrated_Authentication,
			/** 4 */
			Without_Credentials_Anonymous
		}
		enum ServerType {
			/** 3 */
			Exchange_Online_Hybrid,
			/** 0 */
			Exchange_Server,
			/** 2 */
			Exchange_Server_Hybrid,
			/** 4 */
			IMAPSMTP,
			/** 1 */
			Other_POP3SMTP
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.00.00','WebApiVersion':'2'}