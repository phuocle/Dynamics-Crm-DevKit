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
			InternalEMailAddress: {},
			msdyn_AgentType: {},
			msdyn_BotApplicationId: {}
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
			Address1_Latitude: {},
			Address1_Latitude_1: {},
			Address1_Line1: {},
			Address1_Longitude: {},
			Address1_Longitude_1: {},
			Address1_Telephone1: {},
			Address1_Telephone2: {},
			Address1_Telephone3: {},
			Address2_Composite: {},
			Address2_Line1: {},
			ApplicationId: {},
			AzureActiveDirectoryObjectId: {},
			BookableResources: {},
			BusinessUnitId: {},
			CALType: {},
			CapacityProfilesSubgrid: {},
			DefaultMailbox: {},
			DomainName: {},
			FullName: {},
			FullName_1: {},
			HomePhone: {},
			InternalEMailAddress: {},
			InviteStatusCode: {},
			LiveEngagementQueues: {},
			mapcontrol: {},
			MobileAlertEMail: {},
			MobilePhone: {},
			msdyn_AgentType: {},
			msdyn_BotApplicationId: {},
			msdyn_BotDescription: {},
			msdyn_BotProvider: {},
			msdyn_Capacity: {},
			msdyn_Capacity_1: {},
			msdyn_DefaultPresenceIdUser: {},
			msdyusd_USDConfigurationId: {},
			NickName: {},
			notescontrol: {},
			OmnichannelQueues: {},
			ParentSystemUserId: {},
			PersonalEMailAddress: {},
			PreferredAddressCode: {},
			PreferredPhoneCode: {},
			QueueId: {},
			SiteId: {},
			TeamsSubGrid: {},
			TerritoryId: {},
			Title: {},
			WindowsLiveID: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			ADMINISTRATION_TAB: {
				Section: {
					administration: {},
					Email_configuration: {}
				}
			},
			DETAILS_TAB: {
				Section: {
					mailing_address: {},
					MapSection: {},
					user_information_2: {}
				}
			},
			SUMMARY_TAB: {
				Section: {
					online_account_information: {},
					onpremise_account_information: {},
					organization_information: {},
					queue_selection: {},
					SOCIAL_PANE_TAB: {},
					teams_information: {},
					user_information: {}
				}
			},
			tab_6: {
				Section: {
					SECTION_Skills: {},
					tab_6_section_2: {},
					tab_6_section_4: {},
					tab_6_section_5: {}
				}
			},
			usrstab: {
				Section: {
					tab_5_section_2: {},
					tab_5_section_3: {},
					urstab_section_general: {}
				}
			},
			VirtualAgentDetailsTab: {
				Section: {
					tab_8_section_1: {}
				}
			},
			VirtualAgentSummaryTab: {
				Section: {
					tab_7_section_1: {},
					tab_7_section_2: {}
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
			OmnichannelQueues: {},
			TeamsSubGrid: {},
			LiveEngagementQueues: {},
			BookableResources: {},
			CapacityProfilesSubgrid: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			nav_msdyn_accountmanager_opportunity: {},
			nav_msdyn_accountmanager_quote: {},
			nav_msdyn_accountmanager_salesorder: {},
			nav_msdyn_systemuser_msdyn_agreement_SalesPerson: {},
			nav_msdyn_systemuser_msdyn_expense_manager: {},
			nav_msdyn_systemuser_msdyn_fieldservicesystemjob_OwnerId: {},
			nav_msdyn_systemuser_msdyn_project_projectmanager: {},
			nav_msdyn_systemuser_msdyn_projectapproval_ApprovedBy: {},
			nav_msdyn_systemuser_msdyn_projectapproval_Manager: {},
			nav_msdyn_systemuser_msdyn_purchaseorder_ApprovedRejectedBy: {},
			nav_msdyn_systemuser_msdyn_purchaseorder_OrderedBy: {},
			nav_msdyn_systemuser_msdyn_purchaseorderreceipt_ReceivedBy: {},
			nav_msdyn_systemuser_msdyn_resourcerequest_claimedby: {},
			nav_msdyn_systemuser_msdyn_resourcerequest_requestedby: {},
			nav_msdyn_systemuser_msdyn_rma_ApprovedBy: {},
			nav_msdyn_systemuser_msdyn_rmareceipt_ReceivedBy: {},
			nav_msdyn_systemuser_msdyn_rtv_ApprovedDeclinedBy: {},
			nav_msdyn_systemuser_msdyn_rtv_ReturnedBy: {},
			nav_msdyn_systemuser_msdyn_systemuserschedulersetting_User: {},
			nav_msdyn_systemuser_msdyn_timeentry_manager: {},
			nav_msdyn_systemuser_msdyn_timeoffrequest_Approvedby: {},
			nav_msdyn_systemuser_msdyn_workorder_ClosedBy: {},
			nav_msdyn_systemuser_msdyn_workorder_DispatchedBy: {},
			nav_msdyn_systemuser_msdyn_workorder_SalesPerson: {},
			navAudit: {},
			navFieldSecurityProfiles: {},
			navMonthlyCalendar: {},
			navResourceGroups: {},
			navRoles: {},
			navServices: {},
			navTeams: {}
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
			ADMINISTRATION_TAB: {
				Section: {
					administration: {},
					e_mail_configuration: {}
				}
			},
			SUMMARY_TAB: {
				Section: {
					DirectReports: {},
					mailing_address: {},
					online_account_information: {},
					onpremise_account_information: {},
					organization_information: {},
					TEAMS_TAB: {},
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
		var grid = {
			TeamsSubGrid: {},
			DirectReports: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			navAsyncOperations: {},
			navAudit: {},
			navConnections: {},
			navFieldSecurityProfiles: {},
			navMonthlyCalendar: {},
			navProcessSessions: {},
			navResourceGroups: {},
			navRoles: {},
			navServices: {},
			navTeams: {}
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
		msdyn_AgentType : {
			Application_user: 192350000,
			Bot_application_user: 192350001
		},
		msdyn_BotProvider : {
			None: 192350002,
			Other: 192350001,
			Virtual_Agent: 192350000
		},
		msdyn_UserType : {
			BOT_User: 192350001,
			CRM_User: 192350000
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