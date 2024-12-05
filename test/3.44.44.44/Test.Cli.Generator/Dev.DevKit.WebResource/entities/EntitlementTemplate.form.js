'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormEntitlement_Template = function(executionContext, defaultWebResourceName) {
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
			AllocationTypeCode: {},
			DecreaseRemainingOn: {},
			Description: {},
			editableEntitlementChannelGridControl: {},
			EndDate: {},
			grid_EntitlementChannel: {},
			grid_EntitlementProducts: {},
			Name: {},
			RestrictCaseCreation: {},
			SLAId: {},
			StartDate: {},
			TotalTerms: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			general: {
				Section: {
					entitlementtemplateterms: {},
					entitlementtemplatetermsInUCI: {},
					entitlementterms: {},
					information: {},
					products: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var grid = {
			editableEntitlementChannelGridControl: {},
			grid_EntitlementChannel: {},
			grid_EntitlementProducts: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			entitlementtemplate_adx_inviteredemptions: {},
			entitlementtemplate_adx_portalcomments: {},
			entitlementtemplate_Appointments: {},
			entitlementtemplate_Emails: {},
			entitlementtemplate_entitlementchannel_entitlementtemplateid: {},
			entitlementtemplate_IncidentResolutions: {},
			entitlementtemplate_msdyn_bookingalerts: {},
			entitlementtemplate_msdyn_copilottranscripts: {},
			entitlementtemplate_msdyn_ocliveworkitems: {},
			entitlementtemplate_msdyn_ocoutboundmessages: {},
			entitlementtemplate_msdyn_ocsessions: {},
			entitlementtemplate_msdyn_ocvoicemails: {},
			entitlementtemplate_msfp_alerts: {},
			entitlementtemplate_msfp_surveyinvites: {},
			entitlementtemplate_msfp_surveyresponses: {},
			entitlementtemplate_OpportunityCloses: {},
			entitlementtemplate_OrderCloses: {},
			entitlementtemplate_PhoneCalls: {},
			entitlementtemplate_QuoteCloses: {},
			entitlementtemplate_ServiceAppointments: {},
			entitlementtemplate_Tasks: {},
			entitlementtemplateid_RelationShip: {}
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
	OptionSet.EntitlementTemplate = {
		AllocationTypeCode : {
			Number_of_cases: 0,
			Number_of_hours: 1
		},
		DecreaseRemainingOn : {
			Case_Creation: 1,
			Case_Resolution: 0
		},
		entitytype : {
			Case: 0,
			Work_Order: 192350000
		},
		KbAccessLevel : {
			None: 2,
			Premium: 1,
			Standard: 0
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