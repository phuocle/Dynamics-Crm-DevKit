'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdyncrm_linkedinfieldmapping_Information = function(executionContext, defaultWebResourceName) {
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
			msdyncrm_leadfieldlookup: {},
			msdyncrm_name: {},
			OwnerId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {

		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var navigation = {
			msdyncrm_linkedinfieldmapping_adx_inviteredemptions: {},
			msdyncrm_linkedinfieldmapping_adx_portalcomments: {},
			msdyncrm_linkedinfieldmapping_Appointments: {},
			msdyncrm_linkedinfieldmapping_Emails: {},
			msdyncrm_linkedinfieldmapping_Feedback: {},
			msdyncrm_linkedinfieldmapping_msdyn_bookingalerts: {},
			msdyncrm_linkedinfieldmapping_msdyn_copilottranscripts: {},
			msdyncrm_linkedinfieldmapping_msdyn_ocliveworkitems: {},
			msdyncrm_linkedinfieldmapping_msdyn_ocoutboundmessages: {},
			msdyncrm_linkedinfieldmapping_msdyn_ocsessions: {},
			msdyncrm_linkedinfieldmapping_msdyn_ocvoicemails: {},
			msdyncrm_linkedinfieldmapping_msfp_alerts: {},
			msdyncrm_linkedinfieldmapping_msfp_surveyinvites: {},
			msdyncrm_linkedinfieldmapping_msfp_surveyresponses: {},
			msdyncrm_linkedinfieldmapping_PhoneCalls: {},
			msdyncrm_linkedinfieldmapping_ServiceAppointments: {},
			msdyncrm_linkedinfieldmapping_Tasks: {},
			msdyncrm_msdyncrm_linkedinfieldmapping_msdyncrm_linkedinformquestion_LinkedInPredefinedField: {}
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
	OptionSet.msdyncrm_linkedinfieldmapping = {
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