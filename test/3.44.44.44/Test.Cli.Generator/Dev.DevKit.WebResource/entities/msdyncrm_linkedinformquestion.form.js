'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdyncrm_linkedinformquestion_Information = function(executionContext, defaultWebResourceName) {
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
			msdyncrm_DisplayName: {},
			msdyncrm_isconsentcheckbox: {},
			msdyncrm_iscustomquestion: {},
			msdyncrm_LinkedinForm: {},
			msdyncrm_LinkedinID: {},
			msdyncrm_LinkedInPredefinedField: {},
			msdyncrm_name: {},
			msdyncrm_ResponseEditable: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {

		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			OwnerId: {},
			statecode: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
		var navigation = {
			msdyncrm_linkedinformanswer_linkedinformquestion_relation: {},
			msdyncrm_linkedinformquestion_adx_inviteredemptions: {},
			msdyncrm_linkedinformquestion_adx_portalcomments: {},
			msdyncrm_linkedinformquestion_Appointments: {},
			msdyncrm_linkedinformquestion_Emails: {},
			msdyncrm_linkedinformquestion_Feedback: {},
			msdyncrm_linkedinformquestion_msdyn_bookingalerts: {},
			msdyncrm_linkedinformquestion_msdyn_copilottranscripts: {},
			msdyncrm_linkedinformquestion_msdyn_ocliveworkitems: {},
			msdyncrm_linkedinformquestion_msdyn_ocoutboundmessages: {},
			msdyncrm_linkedinformquestion_msdyn_ocsessions: {},
			msdyncrm_linkedinformquestion_msdyn_ocvoicemails: {},
			msdyncrm_linkedinformquestion_msfp_alerts: {},
			msdyncrm_linkedinformquestion_msfp_surveyinvites: {},
			msdyncrm_linkedinformquestion_msfp_surveyresponses: {},
			msdyncrm_linkedinformquestion_PhoneCalls: {},
			msdyncrm_linkedinformquestion_ServiceAppointments: {},
			msdyncrm_linkedinformquestion_Tasks: {}
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
	OptionSet.msdyncrm_linkedinformquestion = {
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