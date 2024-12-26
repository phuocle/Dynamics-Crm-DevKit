'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormInformation_Enhanced = function(executionContext, defaultWebResourceName) {
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
			adx_assignToAccount: {},
			adx_expiryDate: {},
			adx_invitationCode: {},
			adx_inviteContact: {},
			adx_invitercontact: {},
			adx_maximumRedemptions: {},
			adx_name: {},
			adx_redeemedContact: {},
			adx_redemptions: {},
			adx_redemptionWorkflow: {},
			adx_type: {},
			InviteContacts: {},
			notescontrol: {},
			OwnerId: {},
			PowerPageComponent_AssignToWebRoles: {},
			RedeemedContacts: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			invitation_advanced_tab: {
				Section: {
					_62B474B9_CC48_4B2F_8FD8_B190D697DCE8: {}
				}
			},
			invitation_general_tab: {
				Section: {
					_26C36B89_7F53_4CED_9D97_934A779815E6: {},
					_656F2307_E1F2_4515_AEB4_4F9AF287D4A4_SECTION_5: {},
					invitee_section: {},
					invitees_section: {},
					redemption_section: {},
					redemptions_section: {}
				}
			},
			tab_2: {
				Section: {
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			statuscode: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
		var grid = {
			InviteContacts: {},
			PowerPageComponent_AssignToWebRoles: {},
			RedeemedContacts: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			adx_invitation_adx_inviteredemptions: {},
			adx_invitation_adx_portalcomments: {},
			adx_invitation_Appointments: {},
			adx_invitation_BulkOperations: {},
			adx_invitation_CampaignActivities: {},
			adx_invitation_CampaignResponses: {},
			adx_invitation_Emails: {},
			adx_invitation_IncidentResolutions: {},
			adx_invitation_msdyn_bookingalerts: {},
			adx_invitation_msdyn_copilottranscripts: {},
			adx_invitation_msdyn_ocliveworkitems: {},
			adx_invitation_msdyn_ocoutboundmessages: {},
			adx_invitation_msdyn_ocsessions: {},
			adx_invitation_msdyn_ocvoicemails: {},
			adx_invitation_msfp_alerts: {},
			adx_invitation_msfp_surveyinvites: {},
			adx_invitation_msfp_surveyresponses: {},
			adx_invitation_OpportunityCloses: {},
			adx_invitation_OrderCloses: {},
			adx_invitation_PhoneCalls: {},
			adx_invitation_QuoteCloses: {},
			adx_invitation_ServiceAppointments: {},
			adx_invitation_Tasks: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.adx_invitation = {
		adx_type : {
			Group: 756150001,
			Single: 756150000
		},
		statecode : {
			Active: 0,
			Inactive: 1
		},
		statuscode : {
			Inactive: 2,
			New: 1,
			Redeemed: 756150001,
			Sent: 756150000
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