'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormApplication_User = function(executionContext, defaultWebResourceName) {
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
			ApplicationId: {},
			ApplicationIdUri: {},
			AzureActiveDirectoryObjectId: {},
			DomainName: {},
			FullName: {},
			InternalEMailAddress: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			SUMMARY_TAB: {
				Section: {
					onpremise_account_information: {},
					user_information: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var footer = {
			IsDisabled: {}
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
	DevKit.FormUser = function(executionContext, defaultWebResourceName) {
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
			AccessMode: {},
			Address1_Composite: {},
			Address1_Fax: {},
			Address1_Telephone1: {},
			Address1_Telephone2: {},
			Address1_Telephone3: {},
			Address2_Composite: {},
			BusinessUnitId: {},
			CALType: {},
			DefaultMailbox: {},
			DirectReports: {},
			DomainName: {},
			FullName: {},
			HomePhone: {},
			InternalEMailAddress: {},
			InviteStatusCode: {},
			MobileAlertEMail: {},
			MobileOfflineProfileId: {},
			MobilePhone: {},
			notescontrol: {},
			ParentSystemUserId: {},
			PersonalEMailAddress: {},
			PositionId: {},
			PreferredAddressCode: {},
			PreferredPhoneCode: {},
			PrivateQueuesSubGrid: {},
			QueueId: {},
			TeamsSubGrid: {},
			Title: {},
			WindowsLiveID: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			SUMMARY_TAB: {
				Section: {
					onpremise_account_information: {},
					online_account_information: {},
					user_information: {},
					SOCIAL_PANE_TAB: {},
					teams_information: {},
					organization_information: {},
					queue_selection: {},
					queue_information: {}
				}
			},
			DETAILS_TAB: {
				Section: {
					user_information_2: {},
					mailing_address: {},
					DirectReports: {}
				}
			},
			ADMINISTRATION_TAB: {
				Section: {
					administration: {},
					e_mail_configuration: {}
				}
			},
			MobileOfflineProfile_TAB: {
				Section: {
					mobileofflineaccessinfo: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var footer = {
			IsDisabled: {}
		};
		devKit.LoadFields(formContext, footer, "footer_");
		form.Footer = footer;
		var quickForm = {

		};
		devKit.LoadQuickForms(formContext, quickForm);
		form.QuickForm = quickForm;
		var grid = {
			TeamsSubGrid: {},
			PrivateQueuesSubGrid: {},
			DirectReports: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {

		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		return form;
	};
	DevKit.FormUser_form_Business = function(executionContext, defaultWebResourceName) {
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
			AccessMode: {},
			Address1_Composite: {},
			Address1_Telephone1: {},
			BusinessUnitId: {},
			CALType: {},
			DefaultMailbox: {},
			DirectReports: {},
			DomainName: {},
			FullName: {},
			InternalEMailAddress: {},
			InviteStatusCode: {},
			MobilePhone: {},
			ParentSystemUserId: {},
			PreferredAddressCode: {},
			TeamsSubGrid: {},
			Title: {},
			WindowsLiveID: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			SUMMARY_TAB: {
				Section: {
					onpremise_account_information: {},
					online_account_information: {},
					user_information: {},
					organization_information: {},
					mailing_address: {},
					TEAMS_TAB: {},
					DirectReports: {}
				}
			},
			ADMINISTRATION_TAB: {
				Section: {
					administration: {},
					e_mail_configuration: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var footer = {
			IsDisabled: {}
		};
		devKit.LoadFields(formContext, footer, "footer_");
		form.Footer = footer;
		var quickForm = {

		};
		devKit.LoadQuickForms(formContext, quickForm);
		form.QuickForm = quickForm;
		var grid = {
			TeamsSubGrid: {},
			DirectReports: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			navTeams: {},
			navRoles: {},
			navFieldSecurityProfiles: {},
			navServices: {},
			navResourceGroups: {},
			navMonthlyCalendar: {},
			navConnections: {},
			navAsyncOperations: {},
			navAudit: {},
			navProcessSessions: {}
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
	OptionSet.SystemUser = {
		AccessMode : {
			Administrative: 1,
			Delegated_Admin: 5,
			Non_interactive: 4,
			Read: 2,
			Read_Write: 0,
			Support_User: 3
		},
		Address1_AddressTypeCode : {
			Default_Value: 1
		},
		Address1_ShippingMethodCode : {
			Default_Value: 1
		},
		Address2_AddressTypeCode : {
			Default_Value: 1
		},
		Address2_ShippingMethodCode : {
			Default_Value: 1
		},
		CALType : {
			Administrative: 1,
			Basic: 2,
			Device_Basic: 4,
			Device_Enterprise: 8,
			Device_Essential: 6,
			Device_Professional: 3,
			Enterprise: 7,
			Essential: 5,
			Field_Service: 11,
			Professional: 0,
			Project_Service: 12,
			Sales: 9,
			Service: 10
		},
		EmailRouterAccessApproval : {
			Approved: 1,
			Empty: 0,
			Pending_Approval: 2,
			Rejected: 3
		},
		IncomingEmailDeliveryMethod : {
			Forward_Mailbox: 3,
			Microsoft_Dynamics_365_for_Outlook: 1,
			None: 0,
			Server_Side_Synchronization_or_Email_Router: 2
		},
		InviteStatusCode : {
			Invitation_Accepted: 4,
			Invitation_Expired: 3,
			Invitation_Near_Expired: 2,
			Invitation_Not_Sent: 0,
			Invitation_Rejected: 5,
			Invitation_Revoked: 6,
			Invited: 1
		},
		OutgoingEmailDeliveryMethod : {
			Microsoft_Dynamics_365_for_Outlook: 1,
			None: 0,
			Server_Side_Synchronization_or_Email_Router: 2
		},
		PreferredAddressCode : {
			Mailing_Address: 1,
			Other_Address: 2
		},
		PreferredEmailCode : {
			Default_Value: 1
		},
		PreferredPhoneCode : {
			Home_Phone: 3,
			Main_Phone: 1,
			Mobile_Phone: 4,
			Other_Phone: 2
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