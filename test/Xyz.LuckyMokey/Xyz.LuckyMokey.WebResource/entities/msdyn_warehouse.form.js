'use strict';
/** @namespace LuckyMokey */
var LuckyMokey;
(function (LuckyMokey) {
	'use strict';
	LuckyMokey.Formmsdyn_warehouse_Information = function(executionContext, defaultWebResourceName) {
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
		var footer = {
			statecode: {}
		};
		devKit.LoadFields(formContext, footer, "footer_");
		form.Footer = footer;
		var quickForm = {

		};
		devKit.LoadQuickForms(formContext, quickForm);
		form.QuickForm = quickForm;
		var navigation = {
			nav_msdyn_msdyn_warehouse_msdyn_productinventory_Warehouse: {},
			navProcessSessions: {},
			nav_msdyn_msdyn_warehouse_msdyn_fieldservicesetting_DefaultWarehouse: {},
			nav_msdyn_msdyn_warehouse_bookableresource_Warehouse: {},
			nav_msdyn_msdyn_warehouse_msdyn_inventoryadjustment_Warehouse: {},
			nav_msdyn_msdyn_warehouse_msdyn_inventoryjournal_Warehouse: {},
			nav_msdyn_msdyn_warehouse_msdyn_inventorytransfer_DestinationWarehouse: {},
			nav_msdyn_msdyn_warehouse_msdyn_inventorytransfer_SourceWarehouse: {},
			nav_msdyn_msdyn_warehouse_msdyn_purchaseorderreceiptproduct_AssociateToWarehouse: {},
			nav_msdyn_msdyn_warehouse_msdyn_purchaseorder_ReceivetoWarehouse: {},
			nav_msdyn_msdyn_warehouse_msdyn_purchaseorderproduct_AssociateToWarehouse: {},
			nav_msdyn_msdyn_warehouse_msdyn_workorderproduct_Warehouse: {},
			nav_msdyn_msdyn_warehouse_businessunit_Warehouse: {},
			nav_msdyn_msdyn_warehouse_msdyn_rtvproduct_Warehouse: {},
			nav_msdyn_msdyn_warehouse_msdyn_rmaproduct_ReturntoWarehouse: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		return form;
	};
})(LuckyMokey || (LuckyMokey = {}));
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