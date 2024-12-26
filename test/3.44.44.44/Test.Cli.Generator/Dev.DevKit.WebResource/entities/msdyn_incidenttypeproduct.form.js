'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdyn_incidenttypeproduct_Information = function(executionContext, defaultWebResourceName) {
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
			msdyn_Description: {},
			msdyn_IncidentType: {},
			msdyn_InternalDescription: {},
			msdyn_LineOrder: {},
			msdyn_name: {},
			msdyn_Product: {},
			msdyn_Quantity: {},
			msdyn_Unit: {},
			notescontrol: {},
			OwnerId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {

		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var navigation = {
			msdyn_incidenttypeproduct_adx_inviteredemptions: {},
			msdyn_incidenttypeproduct_adx_portalcomments: {},
			msdyn_incidenttypeproduct_Appointments: {},
			msdyn_incidenttypeproduct_Emails: {},
			msdyn_incidenttypeproduct_msdyn_bookingalerts: {},
			msdyn_incidenttypeproduct_msdyn_copilottranscripts: {},
			msdyn_incidenttypeproduct_msdyn_ocliveworkitems: {},
			msdyn_incidenttypeproduct_msdyn_ocoutboundmessages: {},
			msdyn_incidenttypeproduct_msdyn_ocsessions: {},
			msdyn_incidenttypeproduct_msdyn_ocvoicemails: {},
			msdyn_incidenttypeproduct_msfp_alerts: {},
			msdyn_incidenttypeproduct_msfp_surveyinvites: {},
			msdyn_incidenttypeproduct_msfp_surveyresponses: {},
			msdyn_incidenttypeproduct_PhoneCalls: {},
			msdyn_incidenttypeproduct_ServiceAppointments: {},
			msdyn_incidenttypeproduct_Tasks: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormIncident_Type_Product_Quick_Create = function(executionContext, defaultWebResourceName) {
		var formContext = null;
		if (executionContext !== undefined)
		{
			if (executionContext.getFormContext === undefined) {
				formContext = executionContext;
			}
			else {
				formContext = executionContext.getFormContext();
			}
		}
		var form = devKit.LoadForm(formContext);
		var body = {
			msdyn_Description: {},
			msdyn_IncidentType: {},
			msdyn_InternalDescription: {},
			msdyn_LineOrder: {},
			msdyn_name: {},
			msdyn_Product: {},
			msdyn_Quantity: {},
			msdyn_Unit: {},
			OwnerId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			tab_1: {
				Section: {
					tab_1_column_1_section_1: {},
					tab_1_column_2_section_1: {},
					tab_1_column_3_section_1: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_incidenttypeproduct = {
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