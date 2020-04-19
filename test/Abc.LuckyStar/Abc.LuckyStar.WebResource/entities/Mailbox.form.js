'use strict';
/** @namespace LuckyStar */
var LuckyStar;
(function (LuckyStar) {
	'use strict';
	LuckyStar.FormMailbox_Information = function(executionContext, defaultWebResourceName) {
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
			},
			: {
				Section: {
					_6540EA4F_4803_4411_80D0_54AEC63A1698: {},
					_C46AA141_19BF_4677_BD94_2BB61073779E_SECTION_3: {},
					_C46AA141_19BF_4677_BD94_2BB61073779E_SECTION_4: {}
				}
			},
			: {
				Section: {
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
		return form;
	};
})(LuckyStar || (LuckyStar = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.Mailbox = {
		ACTDeliveryMethod : {
			Microsoft_Dynamics_365_for_Outlook: 0,
			Server_Side_Synchronization: 1,
			None: 2
		},
		ACTStatus : {
			Not_Run: 0,
			Success: 1,
			Failure: 2
		},
		EmailRouterAccessApproval : {
			Empty: 0,
			Approved: 1,
			Pending_Approval: 2,
			Rejected: 3
		},
		ExchangeContactsImportStatus : {
			NotImported: 0,
			Imported: 1,
			ImportFailed: 2
		},
		IncomingEmailDeliveryMethod : {
			None: 0,
			Microsoft_Dynamics_365_for_Outlook: 1,
			Server_Side_Synchronization_or_Email_Router: 2,
			Forward_Mailbox: 3
		},
		IncomingEmailStatus : {
			Not_Run: 0,
			Success: 1,
			Failure: 2
		},
		MailboxStatus : {
			Not_Run: 0,
			Success: 1,
			Failure: 2
		},
		OfficeAppsDeploymentStatus : {
			NotInstalled: 0,
			Installed: 1,
			InstallFailed: 2,
			UninstallFailed: 3,
			UpgradeRequired: 4
		},
		OutgoingEmailDeliveryMethod : {
			None: 0,
			Microsoft_Dynamics_365_for_Outlook: 1,
			Server_Side_Synchronization_or_Email_Router: 2
		},
		OutgoingEmailStatus : {
			Not_Run: 0,
			Success: 1,
			Failure: 2
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