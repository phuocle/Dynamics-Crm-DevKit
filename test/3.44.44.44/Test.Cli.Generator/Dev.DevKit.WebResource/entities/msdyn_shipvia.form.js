'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdyn_shipvia_Information = function(executionContext, defaultWebResourceName) {
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
			msdyn_msdyn_shipvia_msdyn_purchaseorder_ShipVia: {},
			msdyn_msdyn_shipvia_msdyn_purchaseorderreceipt_ShipVia: {},
			msdyn_msdyn_shipvia_msdyn_rma_ShipVia: {},
			msdyn_msdyn_shipvia_msdyn_rmareceipt_ShipVia: {},
			msdyn_msdyn_shipvia_msdyn_rtv_ShipVia: {},
			msdyn_shipvia_adx_inviteredemptions: {},
			msdyn_shipvia_adx_portalcomments: {},
			msdyn_shipvia_Appointments: {},
			msdyn_shipvia_Emails: {},
			msdyn_shipvia_msdyn_bookingalerts: {},
			msdyn_shipvia_msdyn_copilottranscripts: {},
			msdyn_shipvia_msdyn_ocliveworkitems: {},
			msdyn_shipvia_msdyn_ocoutboundmessages: {},
			msdyn_shipvia_msdyn_ocsessions: {},
			msdyn_shipvia_msdyn_ocvoicemails: {},
			msdyn_shipvia_msfp_alerts: {},
			msdyn_shipvia_msfp_surveyinvites: {},
			msdyn_shipvia_msfp_surveyresponses: {},
			msdyn_shipvia_PhoneCalls: {},
			msdyn_shipvia_ServiceAppointments: {},
			msdyn_shipvia_Tasks: {}
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
	OptionSet.msdyn_shipvia = {
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