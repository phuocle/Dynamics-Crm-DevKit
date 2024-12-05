'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdyn_paymentterm_Information = function(executionContext, defaultWebResourceName) {
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
			msdyn_msdyn_paymentterm_msdyn_purchaseorder_PaymentTerm: {},
			msdyn_msdyn_paymentterm_msdyn_purchaseorderbill_PaymentTerm: {},
			msdyn_paymentterm_adx_inviteredemptions: {},
			msdyn_paymentterm_adx_portalcomments: {},
			msdyn_paymentterm_Appointments: {},
			msdyn_paymentterm_Emails: {},
			msdyn_paymentterm_msdyn_bookingalerts: {},
			msdyn_paymentterm_msdyn_copilottranscripts: {},
			msdyn_paymentterm_msdyn_ocliveworkitems: {},
			msdyn_paymentterm_msdyn_ocoutboundmessages: {},
			msdyn_paymentterm_msdyn_ocsessions: {},
			msdyn_paymentterm_msdyn_ocvoicemails: {},
			msdyn_paymentterm_msfp_alerts: {},
			msdyn_paymentterm_msfp_surveyinvites: {},
			msdyn_paymentterm_msfp_surveyresponses: {},
			msdyn_paymentterm_PhoneCalls: {},
			msdyn_paymentterm_ServiceAppointments: {},
			msdyn_paymentterm_Tasks: {}
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
	OptionSet.msdyn_paymentterm = {
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