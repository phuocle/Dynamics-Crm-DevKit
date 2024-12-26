﻿'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdyn_warehouse_Information = function(executionContext, defaultWebResourceName) {
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
			msdyn_msdyn_warehouse_bookableresource_Warehouse: {},
			msdyn_msdyn_warehouse_businessunit_Warehouse: {},
			msdyn_msdyn_warehouse_msdyn_actual_Warehouse: {},
			msdyn_msdyn_warehouse_msdyn_fieldservicesetting_DefaultWarehouse: {},
			msdyn_msdyn_warehouse_msdyn_inventoryadjustment_Warehouse: {},
			msdyn_msdyn_warehouse_msdyn_inventoryjournal_Warehouse: {},
			msdyn_msdyn_warehouse_msdyn_inventorytransfer_DestinationWarehouse: {},
			msdyn_msdyn_warehouse_msdyn_inventorytransfer_SourceWarehouse: {},
			msdyn_msdyn_warehouse_msdyn_productinventory_Warehouse: {},
			msdyn_msdyn_warehouse_msdyn_purchaseorder_ReceivetoWarehouse: {},
			msdyn_msdyn_warehouse_msdyn_purchaseorderproduct_AssociateToWarehouse: {},
			msdyn_msdyn_warehouse_msdyn_purchaseorderreceiptproduct_AssociateToWarehouse: {},
			msdyn_msdyn_warehouse_msdyn_rmaproduct_ReturntoWarehouse: {},
			msdyn_msdyn_warehouse_msdyn_rtvproduct_Warehouse: {},
			msdyn_msdyn_warehouse_msdyn_workorderproduct_Warehouse: {},
			msdyn_warehouse_adx_inviteredemptions: {},
			msdyn_warehouse_adx_portalcomments: {},
			msdyn_warehouse_Appointments: {},
			msdyn_warehouse_Emails: {},
			msdyn_warehouse_msdyn_bookingalerts: {},
			msdyn_warehouse_msdyn_copilottranscripts: {},
			msdyn_warehouse_msdyn_ocliveworkitems: {},
			msdyn_warehouse_msdyn_ocoutboundmessages: {},
			msdyn_warehouse_msdyn_ocsessions: {},
			msdyn_warehouse_msdyn_ocvoicemails: {},
			msdyn_warehouse_msfp_alerts: {},
			msdyn_warehouse_msfp_surveyinvites: {},
			msdyn_warehouse_msfp_surveyresponses: {},
			msdyn_warehouse_PhoneCalls: {},
			msdyn_warehouse_ServiceAppointments: {},
			msdyn_warehouse_Tasks: {}
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
	OptionSet.msdyn_warehouse = {
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