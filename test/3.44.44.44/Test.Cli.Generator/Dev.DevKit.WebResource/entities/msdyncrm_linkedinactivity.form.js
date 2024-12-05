'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdyncrm_linkedinactivity_Information = function(executionContext, defaultWebResourceName) {
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
			msdyncrm_activityadditionalparams: {},
			msdyncrm_durationmillisecond: {},
			msdyncrm_name: {},
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
			msdyncrm_linkedinactivity_adx_inviteredemptions: {},
			msdyncrm_linkedinactivity_adx_portalcomments: {},
			msdyncrm_linkedinactivity_Appointments: {},
			msdyncrm_linkedinactivity_Emails: {},
			msdyncrm_linkedinactivity_Feedback: {},
			msdyncrm_linkedinactivity_msdyn_bookingalerts: {},
			msdyncrm_linkedinactivity_msdyn_copilottranscripts: {},
			msdyncrm_linkedinactivity_msdyn_ocliveworkitems: {},
			msdyncrm_linkedinactivity_msdyn_ocoutboundmessages: {},
			msdyncrm_linkedinactivity_msdyn_ocsessions: {},
			msdyncrm_linkedinactivity_msdyn_ocvoicemails: {},
			msdyncrm_linkedinactivity_msfp_alerts: {},
			msdyncrm_linkedinactivity_msfp_surveyinvites: {},
			msdyncrm_linkedinactivity_msfp_surveyresponses: {},
			msdyncrm_linkedinactivity_PhoneCalls: {},
			msdyncrm_linkedinactivity_ServiceAppointments: {},
			msdyncrm_linkedinactivity_Tasks: {}
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
	OptionSet.msdyncrm_linkedinactivity = {
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