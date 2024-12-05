'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdyn_bookingrule_Information = function(executionContext, defaultWebResourceName) {
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
			msdyn_MethodName: {},
			msdyn_name: {},
			msdyn_WebResource: {},
			notescontrol: {},
			OwnerId: {},
			WebResource_lookup: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {

		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var navigation = {
			msdyn_bookingrule_adx_inviteredemptions: {},
			msdyn_bookingrule_adx_portalcomments: {},
			msdyn_bookingrule_Appointments: {},
			msdyn_bookingrule_Emails: {},
			msdyn_bookingrule_msdyn_bookingalerts: {},
			msdyn_bookingrule_msdyn_copilottranscripts: {},
			msdyn_bookingrule_msdyn_ocliveworkitems: {},
			msdyn_bookingrule_msdyn_ocoutboundmessages: {},
			msdyn_bookingrule_msdyn_ocsessions: {},
			msdyn_bookingrule_msdyn_ocvoicemails: {},
			msdyn_bookingrule_msfp_alerts: {},
			msdyn_bookingrule_msfp_surveyinvites: {},
			msdyn_bookingrule_msfp_surveyresponses: {},
			msdyn_bookingrule_PhoneCalls: {},
			msdyn_bookingrule_ServiceAppointments: {},
			msdyn_bookingrule_Tasks: {}
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
	OptionSet.msdyn_bookingrule = {
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