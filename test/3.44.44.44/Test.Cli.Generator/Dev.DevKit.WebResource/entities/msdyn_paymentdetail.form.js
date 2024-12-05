'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdyn_paymentdetail_Information = function(executionContext, defaultWebResourceName) {
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
			msdyn_Invoice: {},
			msdyn_name: {},
			msdyn_Payment: {},
			msdyn_PaymentAmount: {},
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
			msdyn_paymentdetail_adx_inviteredemptions: {},
			msdyn_paymentdetail_adx_portalcomments: {},
			msdyn_paymentdetail_Appointments: {},
			msdyn_paymentdetail_Emails: {},
			msdyn_paymentdetail_msdyn_bookingalerts: {},
			msdyn_paymentdetail_msdyn_copilottranscripts: {},
			msdyn_paymentdetail_msdyn_ocliveworkitems: {},
			msdyn_paymentdetail_msdyn_ocoutboundmessages: {},
			msdyn_paymentdetail_msdyn_ocsessions: {},
			msdyn_paymentdetail_msdyn_ocvoicemails: {},
			msdyn_paymentdetail_msfp_alerts: {},
			msdyn_paymentdetail_msfp_surveyinvites: {},
			msdyn_paymentdetail_msfp_surveyresponses: {},
			msdyn_paymentdetail_PhoneCalls: {},
			msdyn_paymentdetail_ServiceAppointments: {},
			msdyn_paymentdetail_Tasks: {}
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
	OptionSet.msdyn_paymentdetail = {
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