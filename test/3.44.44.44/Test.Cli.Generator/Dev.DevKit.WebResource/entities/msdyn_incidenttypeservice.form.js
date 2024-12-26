'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdyn_incidenttypeservice_Information = function(executionContext, defaultWebResourceName) {
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
			msdyn_Duration: {},
			msdyn_IncidentType: {},
			msdyn_InternalDescription: {},
			msdyn_LineOrder: {},
			msdyn_name: {},
			msdyn_Service: {},
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
			msdyn_incidenttypeservice_adx_inviteredemptions: {},
			msdyn_incidenttypeservice_adx_portalcomments: {},
			msdyn_incidenttypeservice_Appointments: {},
			msdyn_incidenttypeservice_Emails: {},
			msdyn_incidenttypeservice_msdyn_bookingalerts: {},
			msdyn_incidenttypeservice_msdyn_copilottranscripts: {},
			msdyn_incidenttypeservice_msdyn_ocliveworkitems: {},
			msdyn_incidenttypeservice_msdyn_ocoutboundmessages: {},
			msdyn_incidenttypeservice_msdyn_ocsessions: {},
			msdyn_incidenttypeservice_msdyn_ocvoicemails: {},
			msdyn_incidenttypeservice_msfp_alerts: {},
			msdyn_incidenttypeservice_msfp_surveyinvites: {},
			msdyn_incidenttypeservice_msfp_surveyresponses: {},
			msdyn_incidenttypeservice_PhoneCalls: {},
			msdyn_incidenttypeservice_ServiceAppointments: {},
			msdyn_incidenttypeservice_Tasks: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormIncident_Type_Service_Quick_Create = function(executionContext, defaultWebResourceName) {
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
			msdyn_Duration: {},
			msdyn_IncidentType: {},
			msdyn_InternalDescription: {},
			msdyn_LineOrder: {},
			msdyn_name: {},
			msdyn_Service: {},
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
	OptionSet.msdyn_incidenttypeservice = {
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