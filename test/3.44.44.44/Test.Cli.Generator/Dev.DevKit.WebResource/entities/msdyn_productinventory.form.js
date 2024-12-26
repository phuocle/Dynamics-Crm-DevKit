'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdyn_productinventory_Information = function(executionContext, defaultWebResourceName) {
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
			msdyn_Bin: {},
			msdyn_name: {},
			msdyn_Product: {},
			msdyn_QtyAllocated: {},
			msdyn_QtyAvailable: {},
			msdyn_QtyOnHand: {},
			msdyn_QtyOnOrder: {},
			msdyn_ReorderPoint: {},
			msdyn_Row: {},
			msdyn_Unit: {},
			msdyn_Warehouse: {},
			notescontrol: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {

		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var navigation = {
			msdyn_productinventory_adx_inviteredemptions: {},
			msdyn_productinventory_adx_portalcomments: {},
			msdyn_productinventory_Appointments: {},
			msdyn_productinventory_Emails: {},
			msdyn_productinventory_msdyn_bookingalerts: {},
			msdyn_productinventory_msdyn_copilottranscripts: {},
			msdyn_productinventory_msdyn_ocliveworkitems: {},
			msdyn_productinventory_msdyn_ocoutboundmessages: {},
			msdyn_productinventory_msdyn_ocsessions: {},
			msdyn_productinventory_msdyn_ocvoicemails: {},
			msdyn_productinventory_msfp_alerts: {},
			msdyn_productinventory_msfp_surveyinvites: {},
			msdyn_productinventory_msfp_surveyresponses: {},
			msdyn_productinventory_PhoneCalls: {},
			msdyn_productinventory_ServiceAppointments: {},
			msdyn_productinventory_Tasks: {}
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
	OptionSet.msdyn_productinventory = {
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