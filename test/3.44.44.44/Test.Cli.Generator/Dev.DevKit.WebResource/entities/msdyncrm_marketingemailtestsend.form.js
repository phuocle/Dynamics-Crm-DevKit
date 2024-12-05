'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdyncrm_marketingemailtestsend_Information = function(executionContext, defaultWebResourceName) {
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
			msdyncrm_subject: {},
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
			msdyncrm_marketingemailtestsend_adx_inviteredemptions: {},
			msdyncrm_marketingemailtestsend_adx_portalcomments: {},
			msdyncrm_marketingemailtestsend_Appointments: {},
			msdyncrm_marketingemailtestsend_Emails: {},
			msdyncrm_marketingemailtestsend_Feedback: {},
			msdyncrm_marketingemailtestsend_msdyn_bookingalerts: {},
			msdyncrm_marketingemailtestsend_msdyn_copilottranscripts: {},
			msdyncrm_marketingemailtestsend_msdyn_ocliveworkitems: {},
			msdyncrm_marketingemailtestsend_msdyn_ocoutboundmessages: {},
			msdyncrm_marketingemailtestsend_msdyn_ocsessions: {},
			msdyncrm_marketingemailtestsend_msdyn_ocvoicemails: {},
			msdyncrm_marketingemailtestsend_msfp_alerts: {},
			msdyncrm_marketingemailtestsend_msfp_surveyinvites: {},
			msdyncrm_marketingemailtestsend_msfp_surveyresponses: {},
			msdyncrm_marketingemailtestsend_PhoneCalls: {},
			msdyncrm_marketingemailtestsend_ServiceAppointments: {},
			msdyncrm_marketingemailtestsend_Tasks: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.Formmsdyncrm_marketingemailtestsend_New_Form = function(executionContext, defaultWebResourceName) {
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
			msdyncrm_abtestid: {},
			msdyncrm_abtestvariantid: {},
			msdyncrm_emailid: {},
			msdyncrm_testcontactid: {},
			msdyncrm_testcontentsettingsid: {},
			msdyncrm_testsendemailaddress: {}
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
	OptionSet.msdyncrm_marketingemailtestsend = {
		msdyncrm_email_contenttype : {
			Confirmation_request: 1,
			Default: 0
		},
		msdyncrm_messagedesignation : {
			Commercial: 0,
			Transactional: 1
		},
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