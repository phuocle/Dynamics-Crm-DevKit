'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdyn_rtvproduct_Information = function(executionContext, defaultWebResourceName) {
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
			msdyn_Description: {},
			msdyn_LineOrder: {},
			msdyn_name: {},
			msdyn_Product: {},
			msdyn_Quantity: {},
			msdyn_RMA: {},
			msdyn_RMAProduct: {},
			msdyn_RTV: {},
			msdyn_TotalCreditAmount: {},
			msdyn_Unit: {},
			msdyn_UnitCreditAmount: {},
			msdyn_Warehouse: {},
			msdyn_WorkOrder: {},
			msdyn_WorkOrderProduct: {},
			notescontrol: {},
			OwnerId: {},
			TransactionCurrencyId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {

		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var navigation = {
			msdyn_msdyn_rtvproduct_msdyn_rmareceiptproduct_RTVProduct: {},
			msdyn_rtvproduct_adx_inviteredemptions: {},
			msdyn_rtvproduct_adx_portalcomments: {},
			msdyn_rtvproduct_Appointments: {},
			msdyn_rtvproduct_Emails: {},
			msdyn_rtvproduct_msdyn_bookingalerts: {},
			msdyn_rtvproduct_msdyn_copilottranscripts: {},
			msdyn_rtvproduct_msdyn_ocliveworkitems: {},
			msdyn_rtvproduct_msdyn_ocoutboundmessages: {},
			msdyn_rtvproduct_msdyn_ocsessions: {},
			msdyn_rtvproduct_msdyn_ocvoicemails: {},
			msdyn_rtvproduct_msfp_alerts: {},
			msdyn_rtvproduct_msfp_surveyinvites: {},
			msdyn_rtvproduct_msfp_surveyresponses: {},
			msdyn_rtvproduct_PhoneCalls: {},
			msdyn_rtvproduct_ServiceAppointments: {},
			msdyn_rtvproduct_Tasks: {}
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
	OptionSet.msdyn_rtvproduct = {
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