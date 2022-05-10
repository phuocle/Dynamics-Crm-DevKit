'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormEmailServerProfile_Information = function(executionContext, defaultWebResourceName) {
		var formContext = null;
		if (executionContext !== undefined) {
			if (executionContext.getFormContext === undefined) {
				formContext = executionContext;
			}
			else {
				formContext = executionContext.getFormContext();
			}
		}
		var form = devKit.LoadForm(formContext);
		var body = {
			Description: {},
			EmailServerTypeName: {},
			ExchangeOnlineTenantId: {},
			IncomingAuthenticationProtocol: {},
			IncomingCredentialRetrieval: {},
			IncomingPassword: {},
			IncomingPortNumber: {},
			IncomingServerLocation: {},
			IncomingUseImpersonation: {},
			IncomingUserName: {},
			IncomingUseSSL: {},
			MaxConcurrentConnections: {},
			MinPollingIntervalInMinutes: {},
			MoveUndeliveredEmails: {},
			Name: {},
			notescontrol: {},
			OauthClientId: {},
			OauthClientSecret: {},
			OutgoingAuthenticationProtocol: {},
			OutgoingCredentialRetrieval: {},
			OutgoingPassword: {},
			OutgoingPortNumber: {},
			OutgoingServerLocation: {},
			OutgoingUseImpersonation: {},
			OutgoingUsername: {},
			OutgoingUseSSL: {},
			OwnerId: {},
			ProcessEmailsReceivedAfter: {},
			SendEmailAlert: {},
			ServerType: {},
			TimeoutMailboxConnection: {},
			TimeoutMailboxConnectionAfterAmount: {},
			UseAutoDiscover: {},
			UseDefaultTenantId: {},
			UseSameSettingsForOutgoingConnections: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			tab_3: {
				Section: {
					_2EB17E5B_3A06_43BD_BB50_23F8630CD9F8_SECTION_1: {},
					_2EB17E5B_3A06_43BD_BB50_23F8630CD9F8_SECTION_2: {},
					_2EB17E5B_3A06_43BD_BB50_23F8630CD9F8_SECTION_3: {}
				}
			},
			tab_4: {
				Section: {
					tab_4_section_1: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var footer = {
			StateCode: {}
		};
		devKit.LoadFields(formContext, footer, "footer_");
		form.Footer = footer;
		var process = devKit.LoadProcess(formContext);
		form.Process = process;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.EmailServerProfile = {
		ExchangeVersion : {
			Exchange_2007: 0,
			Exchange_2007_SP1: 1,
			Exchange_2010: 2,
			Exchange_2010_SP1: 3,
			Exchange_2010_SP2: 4,
			Exchange_2013: 5
		},
		IncomingAuthenticationProtocol : {
			Auto_Detect: 0,
			Basic: 3,
			Negotiate: 1,
			NTLM: 2,
			OAuth: 4
		},
		IncomingCredentialRetrieval : {
			Azure_Active_Directory_OAuth: 7,
			Credentials_Specified_by_a_User_or_Queue: 0,
			Credentials_Specified_in_Email_Server_Profile: 1,
			Exchange_Hybrid_Modern_Auth_HMA: 6,
			Gmail_OAuth: 5,
			Server_to_Server_Authentication: 2,
			Windows_Integrated_Authentication: 3,
			Without_Credentials_Anonymous: 4
		},
		LastAuthorizationStatus : {
			Failure: 0,
			Success: 1
		},
		LastTestExecutionStatus : {
			Failure: 0,
			Success: 1,
			Warning: 2
		},
		LastTestValidationStatus : {
			Failure: 0,
			Success: 1
		},
		OutgoingAuthenticationProtocol : {
			Auto_Detect: 0,
			Basic: 3,
			Negotiate: 1,
			NTLM: 2,
			OAuth: 4
		},
		OutgoingCredentialRetrieval : {
			Azure_Active_Directory_OAuth: 7,
			Credentials_Specified_by_a_User_or_Queue: 0,
			Credentials_Specified_in_Email_Server_Profile: 1,
			Exchange_Hybrid_Modern_Auth_HMA: 6,
			Gmail_OAuth: 5,
			Server_to_Server_Authentication: 2,
			Windows_Integrated_Authentication: 3,
			Without_Credentials_Anonymous: 4
		},
		OwnerIdType : {
		},
		ServerType : {
			Exchange_Online_Hybrid: 3,
			Exchange_Server: 0,
			Exchange_Server_Hybrid: 2,
			IMAPSMTP: 4,
			Other_POP3SMTP: 1
		},
		StateCode : {
			Active: 0,
			Inactive: 1
		},
		StatusCode : {
			Active: 1,
			Inactive: 2
		},
		RollupState : {
			NotCalculated: 0,
			Calculated: 1,
			OverflowError: 2,
			OtherError: 3,
			RetryLimitExceeded: 4,
			HierarchicalRecursionLimitReached: 5,
			LoopDetected: 6
		}
	};
})(OptionSet || (OptionSet = {}));