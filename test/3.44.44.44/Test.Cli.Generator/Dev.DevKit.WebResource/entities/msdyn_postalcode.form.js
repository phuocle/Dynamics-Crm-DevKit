'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdyn_postalcode_Information = function(executionContext, defaultWebResourceName) {
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
			msdyn_Country: {},
			msdyn_name: {},
			msdyn_ServiceTerritory: {},
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
			msdyn_postalcode_adx_inviteredemptions: {},
			msdyn_postalcode_adx_portalcomments: {},
			msdyn_postalcode_Appointments: {},
			msdyn_postalcode_Emails: {},
			msdyn_postalcode_msdyn_bookingalerts: {},
			msdyn_postalcode_msdyn_copilottranscripts: {},
			msdyn_postalcode_msdyn_ocliveworkitems: {},
			msdyn_postalcode_msdyn_ocoutboundmessages: {},
			msdyn_postalcode_msdyn_ocsessions: {},
			msdyn_postalcode_msdyn_ocvoicemails: {},
			msdyn_postalcode_msfp_alerts: {},
			msdyn_postalcode_msfp_surveyinvites: {},
			msdyn_postalcode_msfp_surveyresponses: {},
			msdyn_postalcode_PhoneCalls: {},
			msdyn_postalcode_ServiceAppointments: {},
			msdyn_postalcode_Tasks: {}
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
	OptionSet.msdyn_postalcode = {
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