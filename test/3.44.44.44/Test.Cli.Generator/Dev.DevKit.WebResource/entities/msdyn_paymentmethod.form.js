'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdyn_paymentmethod_Information = function(executionContext, defaultWebResourceName) {
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
			msdyn_PaymentType: {},
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
			msdyn_msdyn_paymentmethod_msdyn_payment_PaymentMethod: {},
			msdyn_paymentmethod_adx_inviteredemptions: {},
			msdyn_paymentmethod_adx_portalcomments: {},
			msdyn_paymentmethod_Appointments: {},
			msdyn_paymentmethod_Emails: {},
			msdyn_paymentmethod_msdyn_bookingalerts: {},
			msdyn_paymentmethod_msdyn_copilottranscripts: {},
			msdyn_paymentmethod_msdyn_ocliveworkitems: {},
			msdyn_paymentmethod_msdyn_ocoutboundmessages: {},
			msdyn_paymentmethod_msdyn_ocsessions: {},
			msdyn_paymentmethod_msdyn_ocvoicemails: {},
			msdyn_paymentmethod_msfp_alerts: {},
			msdyn_paymentmethod_msfp_surveyinvites: {},
			msdyn_paymentmethod_msfp_surveyresponses: {},
			msdyn_paymentmethod_PhoneCalls: {},
			msdyn_paymentmethod_ServiceAppointments: {},
			msdyn_paymentmethod_Tasks: {}
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
	OptionSet.msdyn_paymentmethod = {
		msdyn_PaymentType : {
			Cash: 690970000,
			Check: 690970001,
			Credit_Card: 690970002,
			Other: 690970003
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