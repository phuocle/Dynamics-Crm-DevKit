'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdyn_rmareceiptproduct_Information = function(executionContext, defaultWebResourceName) {
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
			msdyn_Quantity: {},
			msdyn_RMA: {},
			msdyn_RMAProduct: {},
			msdyn_RMAReceipt: {},
			msdyn_RTV: {},
			msdyn_RTVProduct: {},
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
			msdyn_msdyn_rmareceiptproduct_msdyn_inventoryjournal_RMAReceiptProduct: {},
			msdyn_rmareceiptproduct_adx_inviteredemptions: {},
			msdyn_rmareceiptproduct_adx_portalcomments: {},
			msdyn_rmareceiptproduct_Appointments: {},
			msdyn_rmareceiptproduct_Emails: {},
			msdyn_rmareceiptproduct_msdyn_bookingalerts: {},
			msdyn_rmareceiptproduct_msdyn_copilottranscripts: {},
			msdyn_rmareceiptproduct_msdyn_ocliveworkitems: {},
			msdyn_rmareceiptproduct_msdyn_ocoutboundmessages: {},
			msdyn_rmareceiptproduct_msdyn_ocsessions: {},
			msdyn_rmareceiptproduct_msdyn_ocvoicemails: {},
			msdyn_rmareceiptproduct_msfp_alerts: {},
			msdyn_rmareceiptproduct_msfp_surveyinvites: {},
			msdyn_rmareceiptproduct_msfp_surveyresponses: {},
			msdyn_rmareceiptproduct_PhoneCalls: {},
			msdyn_rmareceiptproduct_ServiceAppointments: {},
			msdyn_rmareceiptproduct_Tasks: {}
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
	OptionSet.msdyn_rmareceiptproduct = {
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