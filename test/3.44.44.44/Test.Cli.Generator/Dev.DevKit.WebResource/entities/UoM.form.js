'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormUoM_Information = function(executionContext, defaultWebResourceName) {
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
			BaseUoM: {},
			Name: {},
			Quantity: {},
			UoMScheduleId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			general: {
				Section: {
					unit_of_measure_information: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var navigation = {
			msdyn_uom_msdyn_actual_Unit: {},
			msdyn_uom_msdyn_agreementbookingproduct_Unit: {},
			msdyn_uom_msdyn_agreementbookingservice_Unit: {},
			msdyn_uom_msdyn_agreementinvoiceproduct_Unit: {},
			msdyn_uom_msdyn_geofencingsettings_DistanceUnit: {},
			msdyn_uom_msdyn_incidenttypeproduct_Unit: {},
			msdyn_uom_msdyn_incidenttyperecommendationresult_Unit: {},
			msdyn_uom_msdyn_incidenttypeservice_Unit: {},
			msdyn_uom_msdyn_inventoryadjustmentproduct_Unit: {},
			msdyn_uom_msdyn_inventoryjournal_Unit: {},
			msdyn_uom_msdyn_orderinvoicingproduct_Unit: {},
			msdyn_uom_msdyn_productinventory_Unit: {},
			msdyn_uom_msdyn_purchaseorderproduct_Unit: {},
			msdyn_uom_msdyn_quotebookingproduct_Unit: {},
			msdyn_uom_msdyn_quotebookingservice_Unit: {},
			msdyn_uom_msdyn_quoteinvoicingproduct_Unit: {},
			msdyn_uom_msdyn_rmaproduct_Unit: {},
			msdyn_uom_msdyn_rtvproduct_Unit: {},
			msdyn_uom_msdyn_workorderproduct_Unit: {},
			msdyn_uom_msdyn_workorderservice_Unit: {},
			unit_of_measurement_base_unit: {},
			unit_of_measurement_contract_line_items: {},
			unit_of_measurement_invoice_details: {},
			unit_of_measurement_opportunity_products: {},
			unit_of_measurement_order_details: {},
			unit_of_measurement_product_price_levels: {},
			unit_of_measurement_productassociation: {},
			unit_of_measurement_products: {},
			unit_of_measurement_quote_details: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormUnit_of_Measure_Quick_Create = function(executionContext, defaultWebResourceName) {
		var formContext = null;
		if (executionContext !== undefined)
		{
			if (executionContext.getFormContext === undefined) {
				formContext = executionContext;
			}
			else {
				formContext = executionContext.getFormContext();
			}
		}
		var form = devKit.LoadForm(formContext);
		var body = {
			BaseUoM: {},
			Name: {},
			Quantity: {},
			UoMScheduleId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			general: {
				Section: {
					unit_of_measure_information: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.UoM = {
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