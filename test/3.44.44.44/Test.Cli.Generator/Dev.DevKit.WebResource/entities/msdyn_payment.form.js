'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdyn_payment_Information = function(executionContext, defaultWebResourceName) {
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
			msdyn_Account: {},
			msdyn_Amount: {},
			msdyn_CheckNumber: {},
			msdyn_Date: {},
			msdyn_name: {},
			msdyn_PaymentMethod: {},
			msdyn_PaymentType: {},
			msdyn_UnappliedAmount: {},
			msdyn_WorkOrder: {},
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
			msdyn_msdyn_payment_msdyn_paymentdetail_Payment: {},
			msdyn_payment_adx_inviteredemptions: {},
			msdyn_payment_adx_portalcomments: {},
			msdyn_payment_Appointments: {},
			msdyn_payment_Emails: {},
			msdyn_payment_msdyn_bookingalerts: {},
			msdyn_payment_msdyn_copilottranscripts: {},
			msdyn_payment_msdyn_ocliveworkitems: {},
			msdyn_payment_msdyn_ocoutboundmessages: {},
			msdyn_payment_msdyn_ocsessions: {},
			msdyn_payment_msdyn_ocvoicemails: {},
			msdyn_payment_msfp_alerts: {},
			msdyn_payment_msfp_surveyinvites: {},
			msdyn_payment_msfp_surveyresponses: {},
			msdyn_payment_PhoneCalls: {},
			msdyn_payment_ServiceAppointments: {},
			msdyn_payment_Tasks: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormPayment_Mobile = function(executionContext, defaultWebResourceName) {
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
			msdyn_Account: {},
			msdyn_Amount: {},
			msdyn_CheckNumber: {},
			msdyn_Date: {},
			msdyn_name: {},
			msdyn_PaymentMethod: {},
			msdyn_PaymentType: {},
			msdyn_UnappliedAmount: {},
			msdyn_WorkOrder: {},
			notescontrol: {},
			OwnerId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			fstab_general: {
				Section: {
					fstab_general_section_2: {},
					fstab_general_section_3: {},
					fstab_general_section_general: {}
				}
			},
			fstab_other: {
				Section: {
					tab_3_section_1: {},
					tab_3_section_2: {},
					tab_3_section_3: {}
				}
			},
			fstab_sub_grids: {
				Section: {
					fstab_related_entities_section_2: {},
					fstab_related_entities_section_3: {},
					fstab_sub_grids_section: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var navigation = {
			msdyn_msdyn_payment_msdyn_paymentdetail_Payment: {},
			msdyn_payment_adx_inviteredemptions: {},
			msdyn_payment_adx_portalcomments: {},
			msdyn_payment_Appointments: {},
			msdyn_payment_Emails: {},
			msdyn_payment_msdyn_bookingalerts: {},
			msdyn_payment_msdyn_copilottranscripts: {},
			msdyn_payment_msdyn_ocliveworkitems: {},
			msdyn_payment_msdyn_ocoutboundmessages: {},
			msdyn_payment_msdyn_ocsessions: {},
			msdyn_payment_msdyn_ocvoicemails: {},
			msdyn_payment_msfp_alerts: {},
			msdyn_payment_msfp_surveyinvites: {},
			msdyn_payment_msfp_surveyresponses: {},
			msdyn_payment_PhoneCalls: {},
			msdyn_payment_ServiceAppointments: {},
			msdyn_payment_Tasks: {}
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
	OptionSet.msdyn_payment = {
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