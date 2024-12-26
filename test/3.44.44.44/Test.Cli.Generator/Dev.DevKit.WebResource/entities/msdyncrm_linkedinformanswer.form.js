'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdyncrm_linkedinformanswer_Information = function(executionContext, defaultWebResourceName) {
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
			msdyncrm_AnswerFormat: {},
			msdyncrm_AnswerText: {},
			msdyncrm_linkedinformquestion: {},
			msdyncrm_linkedinquestionid: {},
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
			msdyncrm_linkedinformanswer_adx_inviteredemptions: {},
			msdyncrm_linkedinformanswer_adx_portalcomments: {},
			msdyncrm_linkedinformanswer_Appointments: {},
			msdyncrm_linkedinformanswer_Emails: {},
			msdyncrm_linkedinformanswer_Feedback: {},
			msdyncrm_linkedinformanswer_msdyn_bookingalerts: {},
			msdyncrm_linkedinformanswer_msdyn_copilottranscripts: {},
			msdyncrm_linkedinformanswer_msdyn_ocliveworkitems: {},
			msdyncrm_linkedinformanswer_msdyn_ocoutboundmessages: {},
			msdyncrm_linkedinformanswer_msdyn_ocsessions: {},
			msdyncrm_linkedinformanswer_msdyn_ocvoicemails: {},
			msdyncrm_linkedinformanswer_msfp_alerts: {},
			msdyncrm_linkedinformanswer_msfp_surveyinvites: {},
			msdyncrm_linkedinformanswer_msfp_surveyresponses: {},
			msdyncrm_linkedinformanswer_PhoneCalls: {},
			msdyncrm_linkedinformanswer_ServiceAppointments: {},
			msdyncrm_linkedinformanswer_Tasks: {}
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
	OptionSet.msdyncrm_linkedinformanswer = {
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