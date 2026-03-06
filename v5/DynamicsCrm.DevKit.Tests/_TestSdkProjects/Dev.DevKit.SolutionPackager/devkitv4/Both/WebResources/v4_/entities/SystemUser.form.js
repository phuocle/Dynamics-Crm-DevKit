'use strict';
/** @namespace DevKit */
// @ts-ignore
var DevKit;
(function (/** @type {any} */ DevKit) {
	'use strict';
	DevKit.FormApplication_User = function(executionContext, defaultWebResourceName) {
		const form = {
			body: ["ApplicationId", "ApplicationIdUri", "AzureActiveDirectoryObjectId", "DomainName", "FullName", "InternalEMailAddress"],
			bpf: [],
			dialog: [],
			grid: [],
			header: [],
			navigation: ["navActivities"],
			quick: [],
			tab: ["SUMMARY_TAB___onpremise_account_information", "SUMMARY_TAB___user_information"]
		};
		return devKit.LoadFormV2(executionContext, defaultWebResourceName, form);
	};
	DevKit.FormUser = function(executionContext, defaultWebResourceName) {
		const form = {
			body: ["AccessMode", "Address1_Composite", "Address1_Fax", "Address1_Telephone1", "Address1_Telephone2", "Address1_Telephone3", "Address2_Composite", "BusinessUnitId", "CALType", "DefaultMailbox", "DirectReports", "DomainName", "FullName", "HomePhone", "InternalEMailAddress", "InviteStatusCode", "MobileAlertEMail", "MobileOfflineProfileId", "MobilePhone", "notescontrol", "ParentSystemUserId", "PersonalEMailAddress", "PositionId", "PreferredAddressCode", "PreferredPhoneCode", "PrivateQueuesSubGrid", "QueueId", "TeamsSubGrid", "Title", "WindowsLiveID"],
			bpf: [],
			dialog: [],
			grid: ["DirectReports", "PrivateQueuesSubGrid", "TeamsSubGrid"],
			header: [],
			navigation: ["navActivities"],
			quick: [],
			tab: ["ADMINISTRATION_TAB___administration", "ADMINISTRATION_TAB___e_mail_configuration", "DETAILS_TAB___DirectReports", "DETAILS_TAB___mailing_address", "DETAILS_TAB___user_information_2", "MobileOfflineProfile_TAB___mobileofflineaccessinfo", "SUMMARY_TAB___online_account_information", "SUMMARY_TAB___onpremise_account_information", "SUMMARY_TAB___organization_information", "SUMMARY_TAB___queue_information", "SUMMARY_TAB___queue_selection", "SUMMARY_TAB___SOCIAL_PANE_TAB", "SUMMARY_TAB___teams_information", "SUMMARY_TAB___user_information"]
		};
		return devKit.LoadFormV2(executionContext, defaultWebResourceName, form);
	};
	DevKit.FormUser_form_Business = function(executionContext, defaultWebResourceName) {
		const form = {
			body: ["AccessMode", "Address1_Composite", "Address1_Telephone1", "BusinessUnitId", "CALType", "DefaultMailbox", "DirectReports", "DomainName", "FullName", "InternalEMailAddress", "InviteStatusCode", "MobilePhone", "ParentSystemUserId", "PreferredAddressCode", "TeamsSubGrid", "Title", "WindowsLiveID"],
			bpf: [],
			dialog: [],
			grid: ["DirectReports", "TeamsSubGrid"],
			header: [],
			navigation: ["navActivities", "navAsyncOperations", "navAudit", "navConnections", "navFieldSecurityProfiles", "navMonthlyCalendar", "navProcessSessions", "navResourceGroups", "navRoles", "navServices", "navTeams"],
			quick: [],
			tab: ["ADMINISTRATION_TAB___administration", "ADMINISTRATION_TAB___e_mail_configuration", "SUMMARY_TAB___DirectReports", "SUMMARY_TAB___mailing_address", "SUMMARY_TAB___online_account_information", "SUMMARY_TAB___onpremise_account_information", "SUMMARY_TAB___organization_information", "SUMMARY_TAB___TEAMS_TAB", "SUMMARY_TAB___user_information"]
		};
		return devKit.LoadFormV2(executionContext, defaultWebResourceName, form);
	};
})(DevKit || (DevKit = /** @type {any} */ ({})));
/** @namespace OptionSet */
// @ts-ignore
var OptionSet;
(function (/** @type {any} */ OptionSet) {
	OptionSet.SystemUser = {
		AccessMode: { Administrative: 1, Delegated_Admin: 5, Non_interactive: 4, Read: 2, Read_Write: 0, Support_User: 3 },
		Address1_AddressTypeCode: { Default_Value: 1 },
		Address1_ShippingMethodCode: { Default_Value: 1 },
		Address2_AddressTypeCode: { Default_Value: 1 },
		Address2_ShippingMethodCode: { Default_Value: 1 },
		AzureState: { Exists: 0, Not_found_or_hard_deleted: 2, Soft_deleted: 1 },
		CALType: { Administrative: 1, Basic: 2, Device_Basic: 4, Device_Enterprise: 8, Device_Essential: 6, Device_Professional: 3, Enterprise: 7, Essential: 5, Field_Service: 11, Professional: 0, Project_Service: 12, Sales: 9, Service: 10 },
		DeletedState: { Not_deleted: 0, Soft_deleted: 1 },
		EmailRouterAccessApproval: { Approved: 1, Empty: 0, Pending_Approval: 2, Rejected: 3 },
		IncomingEmailDeliveryMethod: { Forward_Mailbox: 3, Microsoft_Dynamics_365_for_Outlook: 1, None: 0, Server_Side_Synchronization_or_Email_Router: 2 },
		InviteStatusCode: { Invitation_Accepted: 4, Invitation_Expired: 3, Invitation_Near_Expired: 2, Invitation_Not_Sent: 0, Invitation_Rejected: 5, Invitation_Revoked: 6, Invited: 1 },
		OutgoingEmailDeliveryMethod: { Microsoft_Dynamics_365_for_Outlook: 1, None: 0, Server_Side_Synchronization_or_Email_Router: 2 },
		PreferredAddressCode: { Mailing_Address: 1, Other_Address: 2 },
		PreferredEmailCode: { Default_Value: 1 },
		PreferredPhoneCode: { Home_Phone: 3, Main_Phone: 1, Mobile_Phone: 4, Other_Phone: 2 },
		SystemManagedUserType: { Agentic_User: 3, C2_User: 1, Entra_User: 0, Impersonable_Stub_User: 2 },
		RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
	};
})(OptionSet || (OptionSet = /** @type {any} */ ({})));