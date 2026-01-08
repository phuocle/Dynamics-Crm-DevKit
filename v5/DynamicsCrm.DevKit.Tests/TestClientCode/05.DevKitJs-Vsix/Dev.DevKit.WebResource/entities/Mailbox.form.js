'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormMailbox_Information = function(executionContext, defaultWebResourceName) {
		const form = {
			body: ["ACTDeliveryMethod", "ACTStatus", "AllowEmailConnectorToUseCredentials", "EmailAddress", "EmailServerProfile", "IncomingEmailDeliveryMethod", "IncomingEmailStatus", "IsEmailAddressApprovedByO365Admin", "IsForwardMailbox", "Name", "notescontrol", "OauthAccessToken", "OutgoingEmailDeliveryMethod", "OutgoingEmailStatus", "OwnerId", "Password", "ProcessAndDeleteEmails", "RegardingObjectId", "TestMailboxAccessCompletedOn", "Username"],
			bpf: [],
			dialog: [],
			grid: [],
			header: [],
			navigation: [],
			quick: [],
			tab: ["MailboxStatusTab___MailboxStatusTab_section_1", "tab_4___tab_4_section_1"]
		};
		return devKit.LoadFormV2(executionContext, defaultWebResourceName, form);
	};
	DevKit.FormMailbox = function(executionContext, defaultWebResourceName) {
		const form = {
			body: ["ACTDeliveryMethod", "ACTStatus", "AllowEmailConnectorToUseCredentials", "EmailAddress", "EmailAddressApprovedBy", "EmailAddressApprovedOn", "EmailServerProfile", "IncomingEmailDeliveryMethod", "IncomingEmailStatus", "IsEmailAddressApprovedByO365Admin", "IsForwardMailbox", "Name", "Name1", "notescontrol", "OauthAccessToken", "OutgoingEmailDeliveryMethod", "OutgoingEmailStatus", "OwnerId", "Password", "ProcessAndDeleteEmails", "RegardingObjectId", "Subgrid_new_1", "TestAndEnableLastAttemptedBy", "TestAndEnableLastAttemptedOn", "TestMailboxAccessCompletedOn", "Username"],
			bpf: [],
			dialog: [],
			grid: ["Subgrid_new_1"],
			header: [],
			navigation: [],
			quick: [],
			tab: ["GeneralTab____6540EA4F_4803_4411_80D0_54AEC63A1698", "GeneralTab____C46AA141_19BF_4677_BD94_2BB61073779E_SECTION_3", "GeneralTab____C46AA141_19BF_4677_BD94_2BB61073779E_SECTION_4", "GeneralTab___configuration_test_result_section", "GeneralTab___mailbox_notifications", "mailbox_alerts___mailbox_alerts_section_1", "MailboxStatusTab___MailboxStatusTab_section_1"]
		};
		return devKit.LoadFormV2(executionContext, defaultWebResourceName, form);
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.Mailbox = {
		ACSOutgoingEmailStatus: { Failure: 2, Not_Run: 0, Success: 1 },
		ACTDeliveryMethod: { Microsoft_Dynamics_365_for_Outlook: 0, None: 2, Server_Side_Synchronization: 1 },
		ACTStatus: { Failure: 2, Not_Run: 0, Success: 1 },
		EmailRouterAccessApproval: { Approved: 1, Empty: 0, Pending_Approval: 2, Rejected: 3 },
		ExchangeContactsImportStatus: { Imported: 1, ImportFailed: 2, NotImported: 0 },
		IncomingEmailDeliveryMethod: { Forward_Mailbox: 3, Microsoft_Dynamics_365_for_Outlook: 1, None: 0, Server_Side_Synchronization: 2 },
		IncomingEmailStatus: { Failure: 2, Not_Run: 0, Success: 1 },
		MailboxStatus: { Failure: 2, Not_Run: 0, Success: 1 },
		OfficeAppsDeploymentStatus: { Installed: 1, InstallFailed: 2, NotInstalled: 0, UninstallFailed: 3, UpgradeRequired: 4 },
		OutgoingEmailDeliveryMethod: { Microsoft_Dynamics_365_for_Outlook: 1, None: 0, Server_Side_Synchronization: 2 },
		OutgoingEmailStatus: { Failure: 2, Not_Run: 0, Success: 1 },
		RegardingObjectTypeCode: { },
		StateCode: { Active: 0, Inactive: 1 },
		StatusCode: { Active: 1, Inactive: 2 },
		RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
	};
})(OptionSet || (OptionSet = {}));