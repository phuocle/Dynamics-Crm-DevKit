//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace FormEmailServerProfile_Information {
		interface tab_tab_3_Sections {
			_2EB17E5B_3A06_43BD_BB50_23F8630CD9F8_SECTION_1: DevKit.Form.Controls.ControlSection;
			_2EB17E5B_3A06_43BD_BB50_23F8630CD9F8_SECTION_2: DevKit.Form.Controls.ControlSection;
			_2EB17E5B_3A06_43BD_BB50_23F8630CD9F8_SECTION_3: DevKit.Form.Controls.ControlSection;
		}
		interface tab_tab_4_Sections {
			tab_4_section_1: DevKit.Form.Controls.ControlSection;
		}
		interface tab_tab_3 extends DevKit.Form.Controls.IControlTab {
			Section: tab_tab_3_Sections;
		}
		interface tab_tab_4 extends DevKit.Form.Controls.IControlTab {
			Section: tab_tab_4_Sections;
		}
		interface Tabs {
			tab_3: tab_tab_3;
			tab_4: tab_tab_4;
		}
		interface Body {
			Tab: Tabs;
			notescontrol: DevKit.Form.Controls.ControlNote;
			/** Type additional information that describes the email server profile. */
			Description: DevKit.Form.Controls.ControlString;
			/** Email Server Type Name */
			EmailServerTypeName: DevKit.Form.Controls.ControlString;
			/** Type the tenant ID of Exchange Online. */
			ExchangeOnlineTenantId: DevKit.Form.Controls.ControlString;
			/** Select the incoming email authentication protocol that is used for connecting to the email server. */
			IncomingAuthenticationProtocol: DevKit.Form.Controls.ControlOptionSet;
			/** Select how credentials will be retrieved for incoming email. */
			IncomingCredentialRetrieval: DevKit.Form.Controls.ControlOptionSet;
			/** Type the password for incoming email. */
			IncomingPassword: DevKit.Form.Controls.ControlString;
			/** Type the Exchange port number for incoming mail. */
			IncomingPortNumber: DevKit.Form.Controls.ControlInteger;
			/** Type the location of the server for incoming email. */
			IncomingServerLocation: DevKit.Form.Controls.ControlString;
			/** Select whether to use impersonation to access the mailbox to process incoming emails. */
			IncomingUseImpersonation: DevKit.Form.Controls.ControlBoolean;
			/** Type the user name for incoming email. */
			IncomingUserName: DevKit.Form.Controls.ControlString;
			/** Select whether to use the Secure Sockets Layer (SSL) protocol for incoming email. */
			IncomingUseSSL: DevKit.Form.Controls.ControlBoolean;
			/** Maximum number of concurrent connections allowed to the email server per authenticated user. */
			MaxConcurrentConnections: DevKit.Form.Controls.ControlInteger;
			/** Minimum polling interval, in minutes, for mailboxes that are associated with this email server profile. */
			MinPollingIntervalInMinutes: DevKit.Form.Controls.ControlInteger;
			/** Indicates whether to move undelivered incoming emails to the Undeliverable folder in Microsoft Exchange. */
			MoveUndeliveredEmails: DevKit.Form.Controls.ControlBoolean;
			/** Type a meaningful name for the email server profile. This name is displayed when you need to select an email server profile. */
			Name: DevKit.Form.Controls.ControlString;
			/** Select the outgoing email authentication protocol that is used for connecting to the email server. */
			OutgoingAuthenticationProtocol: DevKit.Form.Controls.ControlOptionSet;
			/** Select how credentials will be retrieved for outgoing email. */
			OutgoingCredentialRetrieval: DevKit.Form.Controls.ControlOptionSet;
			/** Type the password for outgoing email. */
			OutgoingPassword: DevKit.Form.Controls.ControlString;
			/** Type the Exchange port number for outgoing mail. */
			OutgoingPortNumber: DevKit.Form.Controls.ControlInteger;
			/** Type the location of the server for outgoing email. */
			OutgoingServerLocation: DevKit.Form.Controls.ControlString;
			/** Select whether to use impersonation for accessing the mailbox to process outgoing emails. */
			OutgoingUseImpersonation: DevKit.Form.Controls.ControlBoolean;
			/** Type the user name for outgoing email. */
			OutgoingUsername: DevKit.Form.Controls.ControlString;
			/** Select whether to use the Secure Sockets Layer (SSL) protocol for outgoing email. */
			OutgoingUseSSL: DevKit.Form.Controls.ControlBoolean;
			/** Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
			OwnerId: DevKit.Form.Controls.ControlLookup;
			/** Shows the date and time after which email messages that are received will be processed for mailboxes associated with the email server profile. */
			ProcessEmailsReceivedAfter: DevKit.Form.Controls.ControlDateTime;
			/** Select whether to send an email alert if more than 50% of the mailboxes in this email server profile failed to synchronize in an hour period. */
			SendEmailAlert: DevKit.Form.Controls.ControlBoolean;
			/** Select the profile's email server type. */
			ServerType: DevKit.Form.Controls.ControlOptionSet;
			/** Select whether to timeout a single mailbox. */
			TimeoutMailboxConnection: DevKit.Form.Controls.ControlBoolean;
			/** Type the number of milliseconds to timeout a single mailbox. The upper limit is 100 seconds. */
			TimeoutMailboxConnectionAfterAmount: DevKit.Form.Controls.ControlInteger;
			/** Select whether to automatically discover the server location */
			UseAutoDiscover: DevKit.Form.Controls.ControlBoolean;
			/** Select whether to use the Exchange Online Tenant ID obtained from running Microsoft Azure PowerShell cmdlets (highly recommended). If you select No, you can edit this field manually */
			UseDefaultTenantId: DevKit.Form.Controls.ControlBoolean;
			/** Select whether to use the same settings for incoming and outgoing connections. */
			UseSameSettingsForOutgoingConnections: DevKit.Form.Controls.ControlBoolean;
		}
		interface Footer {
			/** Shows whether the email server profile is active or inactive. */
			StateCode: DevKit.Form.Controls.ControlOptionSet;
		}
	}
	class FormEmailServerProfile_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form EmailServerProfile_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form EmailServerProfile_Information */
		Body: LuckyMokey.FormEmailServerProfile_Information.Body;
		/** The Footer section of form EmailServerProfile_Information */
		Footer: LuckyMokey.FormEmailServerProfile_Information.Footer;
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
		/** The entity object */
		Entity: any;
		/** The entity name */
		EntityName: string;
		/** The entity collection name */
		EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependant on the fields that are retrieved */
		"@odata.etag": string;
		/** Shows who created the record. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows who created the record on behalf of another user. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Type the default location of the server. */
		DefaultServerLocation: DevKit.WebApi.StringValue;
		/** Type additional information that describes the email server profile. */
		Description: DevKit.WebApi.StringValue;
		/** Unique identifier of the email server profile. */
		EmailServerProfileId: DevKit.WebApi.GuidValue;
		/** Email Server Type Name */
		EmailServerTypeName: DevKit.WebApi.StringValueReadonly;
		/** Indicates the code page to use when encoding email content. */
		EncodingCodePage: DevKit.WebApi.StringValue;
		/** The default image for the entity. */
		EntityImage: DevKit.WebApi.StringValue;
		EntityImage_Timestamp: DevKit.WebApi.BigIntValueReadonly;
		EntityImage_URL: DevKit.WebApi.StringValueReadonly;
		/** For internal use only. */
		EntityImageId: DevKit.WebApi.GuidValueReadonly;
		/** Type the tenant ID of Exchange Online. */
		ExchangeOnlineTenantId: DevKit.WebApi.StringValue;
		/** Select the version of Exchange that is on the email server. */
		ExchangeVersion: DevKit.WebApi.OptionSetValue;
		/** Select the incoming email authentication protocol that is used for connecting to the email server. */
		IncomingAuthenticationProtocol: DevKit.WebApi.OptionSetValue;
		/** Select how credentials will be retrieved for incoming email. */
		IncomingCredentialRetrieval: DevKit.WebApi.OptionSetValue;
		/** Indicates the incoming partner application. */
		IncomingPartnerApplication: DevKit.WebApi.LookupValueReadonly;
		/** Type the password for incoming email. */
		IncomingPassword: DevKit.WebApi.StringValue;
		/** Type the Exchange port number for incoming mail. */
		IncomingPortNumber: DevKit.WebApi.IntegerValue;
		/** Type the location of the server for incoming email. */
		IncomingServerLocation: DevKit.WebApi.StringValue;
		/** Select whether to use impersonation to access the mailbox to process incoming emails. */
		IncomingUseImpersonation: DevKit.WebApi.BooleanValue;
		/** Type the user name for incoming email. */
		IncomingUserName: DevKit.WebApi.StringValue;
		/** Select whether to use the Secure Sockets Layer (SSL) protocol for incoming email. */
		IncomingUseSSL: DevKit.WebApi.BooleanValue;
		IsIncomingPasswordSet: DevKit.WebApi.BooleanValueReadonly;
		IsOutgoingPasswordSet: DevKit.WebApi.BooleanValueReadonly;
		/** Shows the last test authorization status of email server profile */
		LastAuthorizationStatus: DevKit.WebApi.OptionSetValue;
		/** Shows the Dynamics 365 message obtained during the Last Test */
		LastCrmMessage: DevKit.WebApi.StringValue;
		/** Shows the last test Execution status of email server profile */
		LastTestExecutionStatus: DevKit.WebApi.OptionSetValue;
		/** Shows the EWS Request created during the Last Test */
		LastTestRequest: DevKit.WebApi.StringValue;
		/** Shows the EWS Response obtained during the Last Test */
		LastTestResponse: DevKit.WebApi.StringValue;
		/** Shows the Last Test Start date and time */
		LastTestStartTime_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Shows the Time taken while running the last test */
		LastTestTotalExecutionTime: DevKit.WebApi.BigIntValue;
		/** Shows the last test Validation status of email server profile */
		LastTestValidationStatus: DevKit.WebApi.OptionSetValue;
		/** Maximum number of concurrent connections allowed to the email server per authenticated user. */
		MaxConcurrentConnections: DevKit.WebApi.IntegerValue;
		/** Minimum polling interval, in minutes, for mailboxes that are associated with this email server profile. */
		MinPollingIntervalInMinutes: DevKit.WebApi.IntegerValue;
		/** Shows who last updated the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows who last updated the record on behalf of another user. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Indicates whether to move undelivered incoming emails to the Undeliverable folder in Microsoft Exchange. */
		MoveUndeliveredEmails: DevKit.WebApi.BooleanValue;
		/** Type a meaningful name for the email server profile. This name is displayed when you need to select an email server profile. */
		Name: DevKit.WebApi.StringValue;
		/** Unique identifier of the organization associated with the record. */
		OrganizationId: DevKit.WebApi.LookupValueReadonly;
		/** Select the outgoing email authentication protocol that is used for connecting to the email server. */
		OutgoingAuthenticationProtocol: DevKit.WebApi.OptionSetValue;
		/** Indicates whether the email connector will grant delegate access permissions to the accessing user when required while processing outgoing emails. */
		OutgoingAutoGrantDelegateAccess: DevKit.WebApi.BooleanValue;
		/** Select how credentials will be retrieved for outgoing email. */
		OutgoingCredentialRetrieval: DevKit.WebApi.OptionSetValue;
		/** Indicates the outgoing partner application. */
		OutgoingPartnerApplication: DevKit.WebApi.LookupValueReadonly;
		/** Type the password for outgoing email. */
		OutgoingPassword: DevKit.WebApi.StringValue;
		/** Type the Exchange port number for outgoing mail. */
		OutgoingPortNumber: DevKit.WebApi.IntegerValue;
		/** Type the location of the server for outgoing email. */
		OutgoingServerLocation: DevKit.WebApi.StringValue;
		/** Select whether to use impersonation for accessing the mailbox to process outgoing emails. */
		OutgoingUseImpersonation: DevKit.WebApi.BooleanValue;
		/** Type the user name for outgoing email. */
		OutgoingUsername: DevKit.WebApi.StringValue;
		/** Select whether to use the Secure Sockets Layer (SSL) protocol for outgoing email. */
		OutgoingUseSSL: DevKit.WebApi.BooleanValue;
		/** Email Server Profile Owner's email address */
		OwnerEmailAddress: DevKit.WebApi.StringValue;
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
		/** Shows the date and time after which email messages that are received will be processed for mailboxes associated with the email server profile. */
		ProcessEmailsReceivedAfter_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Select whether to send an email alert if more than 50% of the mailboxes in this email server profile failed to synchronize in an hour period. */
		SendEmailAlert: DevKit.WebApi.BooleanValue;
		/** Select the profile's email server type. */
		ServerType: DevKit.WebApi.OptionSetValue;
		/** Shows whether the email server profile is active or inactive. */
		StateCode: DevKit.WebApi.OptionSetValue;
		/** Select the email server profile's status. */
		StatusCode: DevKit.WebApi.OptionSetValue;
		/** Select whether to timeout a single mailbox. */
		TimeoutMailboxConnection: DevKit.WebApi.BooleanValue;
		/** Type the number of milliseconds to timeout a single mailbox. The upper limit is 100 seconds. */
		TimeoutMailboxConnectionAfterAmount: DevKit.WebApi.IntegerValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Select whether to automatically discover the server location */
		UseAutoDiscover: DevKit.WebApi.BooleanValue;
		/** Select whether to use the Exchange Online Tenant ID obtained from running Microsoft Azure PowerShell cmdlets (highly recommended). If you select No, you can edit this field manually */
		UseDefaultTenantId: DevKit.WebApi.BooleanValue;
		/** Select whether to use the same settings for incoming and outgoing connections. */
		UseSameSettingsForOutgoingConnections: DevKit.WebApi.BooleanValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Version number of the email server profile. */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
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
			/** 1 */
			Negotiate,
			/** 2 */
			NTLM,
			/** 3 */
			Basic
		}
		enum IncomingCredentialRetrieval {
			/** 0 */
			Credentials_Specified_by_a_User_or_Queue,
			/** 1 */
			Credentials_Specified_in_Email_Server_Profile,
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
			/** 1 */
			Negotiate,
			/** 2 */
			NTLM,
			/** 3 */
			Basic
		}
		enum OutgoingCredentialRetrieval {
			/** 0 */
			Credentials_Specified_by_a_User_or_Queue,
			/** 1 */
			Credentials_Specified_in_Email_Server_Profile,
			/** 2 */
			Server_to_Server_Authentication,
			/** 3 */
			Windows_Integrated_Authentication,
			/** 4 */
			Without_Credentials_Anonymous
		}
		enum ServerType {
			/** 0 */
			Exchange_Server,
			/** 1 */
			Other_POP3SMTP,
			/** 2 */
			Exchange_Server_Hybrid,
			/** 3 */
			Exchange_Online_Hybrid,
			/** 4 */
			IMAPSMTP
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