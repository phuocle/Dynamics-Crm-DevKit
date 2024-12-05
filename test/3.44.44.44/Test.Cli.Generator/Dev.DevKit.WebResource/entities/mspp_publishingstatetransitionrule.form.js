'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmspp_publishingstatetransitionrule_Information = function(executionContext, defaultWebResourceName) {
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
			grid_webroles: {},
			mspp_fromstate_publishingstateid: {},
			mspp_name: {},
			mspp_tostate_publishingstateid: {},
			mspp_websiteid: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			tab_webroles: {
				Section: {
					tab_4_section_1: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var grid = {
			grid_webroles: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			mspp_publishingstatetransitionrule_adx_inviteredemptions: {},
			mspp_publishingstatetransitionrule_adx_portalcomments: {},
			mspp_publishingstatetransitionrule_Appointments: {},
			mspp_publishingstatetransitionrule_BulkOperations: {},
			mspp_publishingstatetransitionrule_CampaignActivities: {},
			mspp_publishingstatetransitionrule_CampaignResponses: {},
			mspp_publishingstatetransitionrule_Emails: {},
			mspp_publishingstatetransitionrule_IncidentResolutions: {},
			mspp_publishingstatetransitionrule_msdyn_bookingalerts: {},
			mspp_publishingstatetransitionrule_msdyn_copilottranscripts: {},
			mspp_publishingstatetransitionrule_msdyn_ocliveworkitems: {},
			mspp_publishingstatetransitionrule_msdyn_ocoutboundmessages: {},
			mspp_publishingstatetransitionrule_msdyn_ocsessions: {},
			mspp_publishingstatetransitionrule_msdyn_ocvoicemails: {},
			mspp_publishingstatetransitionrule_msfp_alerts: {},
			mspp_publishingstatetransitionrule_msfp_surveyinvites: {},
			mspp_publishingstatetransitionrule_msfp_surveyresponses: {},
			mspp_publishingstatetransitionrule_OpportunityCloses: {},
			mspp_publishingstatetransitionrule_OrderCloses: {},
			mspp_publishingstatetransitionrule_PhoneCalls: {},
			mspp_publishingstatetransitionrule_QuoteCloses: {},
			mspp_publishingstatetransitionrule_ServiceAppointments: {},
			mspp_publishingstatetransitionrule_Tasks: {}
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
	OptionSet.mspp_publishingstatetransitionrule = {
		statecode : {
			Active: 0,
			Inactive: 1
		},
		statuscode : {
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