'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdyn_incidenttypecharacteristic_Information = function(executionContext, defaultWebResourceName) {
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
			msdyn_Characteristic: {},
			msdyn_IncidentType: {},
			msdyn_name: {},
			msdyn_RatingValue: {},
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
			msdyn_incidenttypecharacteristic_adx_inviteredemptions: {},
			msdyn_incidenttypecharacteristic_adx_portalcomments: {},
			msdyn_incidenttypecharacteristic_Appointments: {},
			msdyn_incidenttypecharacteristic_Emails: {},
			msdyn_incidenttypecharacteristic_msdyn_bookingalerts: {},
			msdyn_incidenttypecharacteristic_msdyn_copilottranscripts: {},
			msdyn_incidenttypecharacteristic_msdyn_ocliveworkitems: {},
			msdyn_incidenttypecharacteristic_msdyn_ocoutboundmessages: {},
			msdyn_incidenttypecharacteristic_msdyn_ocsessions: {},
			msdyn_incidenttypecharacteristic_msdyn_ocvoicemails: {},
			msdyn_incidenttypecharacteristic_msfp_alerts: {},
			msdyn_incidenttypecharacteristic_msfp_surveyinvites: {},
			msdyn_incidenttypecharacteristic_msfp_surveyresponses: {},
			msdyn_incidenttypecharacteristic_PhoneCalls: {},
			msdyn_incidenttypecharacteristic_ServiceAppointments: {},
			msdyn_incidenttypecharacteristic_Tasks: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormIncident_Type_Characteristic_Quick_Create = function(executionContext, defaultWebResourceName) {
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
			msdyn_Characteristic: {},
			msdyn_IncidentType: {},
			msdyn_RatingValue: {},
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
	OptionSet.msdyn_incidenttypecharacteristic = {
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