'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdyn_inventorytransfer_Information = function(executionContext, defaultWebResourceName) {
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
			inventorytransferGrid: {},
			msdyn_Description: {},
			msdyn_DestinationWarehouse: {},
			msdyn_name: {},
			msdyn_SourceWarehouse: {},
			msdyn_TransferredByResource: {},
			msdyn_TransferTime: {},
			notescontrol: {},
			OwnerId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {

		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var grid = {
			inventorytransferGrid: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			msdyn_inventorytransfer_adx_inviteredemptions: {},
			msdyn_inventorytransfer_adx_portalcomments: {},
			msdyn_inventorytransfer_Appointments: {},
			msdyn_inventorytransfer_Emails: {},
			msdyn_inventorytransfer_msdyn_bookingalerts: {},
			msdyn_inventorytransfer_msdyn_copilottranscripts: {},
			msdyn_inventorytransfer_msdyn_ocliveworkitems: {},
			msdyn_inventorytransfer_msdyn_ocoutboundmessages: {},
			msdyn_inventorytransfer_msdyn_ocsessions: {},
			msdyn_inventorytransfer_msdyn_ocvoicemails: {},
			msdyn_inventorytransfer_msfp_alerts: {},
			msdyn_inventorytransfer_msfp_surveyinvites: {},
			msdyn_inventorytransfer_msfp_surveyresponses: {},
			msdyn_inventorytransfer_PhoneCalls: {},
			msdyn_inventorytransfer_QueueItems: {},
			msdyn_inventorytransfer_ServiceAppointments: {},
			msdyn_inventorytransfer_Tasks: {},
			msdyn_msdyn_inventorytransfer_msdyn_inventoryadjustmentproduct_InventoryTransfer: {}
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
	OptionSet.msdyn_inventorytransfer = {
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