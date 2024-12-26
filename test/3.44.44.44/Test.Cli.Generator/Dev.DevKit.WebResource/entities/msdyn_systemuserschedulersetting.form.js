'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdyn_systemuserschedulersetting_Information = function(executionContext, defaultWebResourceName) {
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
			msdyn_name: {},
			msdyn_ScheduleSettings: {},
			msdyn_User: {},
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
			msdyn_systemuserschedulersetting_adx_inviteredemptions: {},
			msdyn_systemuserschedulersetting_adx_portalcomments: {},
			msdyn_systemuserschedulersetting_Appointments: {},
			msdyn_systemuserschedulersetting_Emails: {},
			msdyn_systemuserschedulersetting_msdyn_bookingalerts: {},
			msdyn_systemuserschedulersetting_msdyn_copilottranscripts: {},
			msdyn_systemuserschedulersetting_msdyn_ocliveworkitems: {},
			msdyn_systemuserschedulersetting_msdyn_ocoutboundmessages: {},
			msdyn_systemuserschedulersetting_msdyn_ocsessions: {},
			msdyn_systemuserschedulersetting_msdyn_ocvoicemails: {},
			msdyn_systemuserschedulersetting_msfp_alerts: {},
			msdyn_systemuserschedulersetting_msfp_surveyinvites: {},
			msdyn_systemuserschedulersetting_msfp_surveyresponses: {},
			msdyn_systemuserschedulersetting_PhoneCalls: {},
			msdyn_systemuserschedulersetting_ServiceAppointments: {},
			msdyn_systemuserschedulersetting_Tasks: {}
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
	OptionSet.msdyn_systemuserschedulersetting = {
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