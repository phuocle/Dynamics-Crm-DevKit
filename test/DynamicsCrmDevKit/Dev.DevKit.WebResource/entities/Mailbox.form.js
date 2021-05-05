'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormMailbox_Information = function(executionContext, defaultWebResourceName) {
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
			ACTDeliveryMethod: {},
			ACTStatus: {},
			AllowEmailConnectorToUseCredentials: {},
			EmailAddress: {},
			EmailServerProfile: {},
			IncomingEmailDeliveryMethod: {},
			IncomingEmailStatus: {},
			IsEmailAddressApprovedByO365Admin: {},
			IsForwardMailbox: {},
			Name: {},
			notescontrol: {},
			OauthAccessToken: {},
			OutgoingEmailDeliveryMethod: {},
			OutgoingEmailStatus: {},
			OwnerId: {},
			Password: {},
			ProcessAndDeleteEmails: {},
			RegardingObjectId: {},
			TestMailboxAccessCompletedOn: {},
			Username: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			MailboxStatusTab: {
				Section: {
					MailboxStatusTab_section_1: {}
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
		var quickForm = {

		};
		devKit.LoadQuickForms(formContext, quickForm);
		form.QuickForm = quickForm;
		var navigation = {

		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		return form;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.Mailbox = {
		ACTDeliveryMethod : {
			Microsoft_Dynamics_365_for_Outlook: 0,
			None: 2,
			Server_Side_Synchronization: 1
		},
		ACTStatus : {
			Failure: 2,
			Not_Run: 0,
			Success: 1
		},
		EmailRouterAccessApproval : {
			Approved: 1,
			Empty: 0,
			Pending_Approval: 2,
			Rejected: 3
		},
		ExchangeContactsImportStatus : {
			Imported: 1,
			ImportFailed: 2,
			NotImported: 0
		},
		IncomingEmailDeliveryMethod : {
			Forward_Mailbox: 3,
			Microsoft_Dynamics_365_for_Outlook: 1,
			None: 0,
			Server_Side_Synchronization_or_Email_Router: 2
		},
		IncomingEmailStatus : {
			Failure: 2,
			Not_Run: 0,
			Success: 1
		},
		MailboxStatus : {
			Failure: 2,
			Not_Run: 0,
			Success: 1
		},
		OfficeAppsDeploymentStatus : {
			Installed: 1,
			InstallFailed: 2,
			NotInstalled: 0,
			UninstallFailed: 3,
			UpgradeRequired: 4
		},
		OutgoingEmailDeliveryMethod : {
			Microsoft_Dynamics_365_for_Outlook: 1,
			None: 0,
			Server_Side_Synchronization_or_Email_Router: 2
		},
		OutgoingEmailStatus : {
			Failure: 2,
			Not_Run: 0,
			Success: 1
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