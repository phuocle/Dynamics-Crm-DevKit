'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormPrice_Level = function(executionContext, defaultWebResourceName) {
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
			BeginDate: {},
			Description: {},
			EndDate: {},
			msdyn_BreakHoursBillable: {},
			Name: {},
			pricelistitemsgrid: {},
			RelatedTerritoriesGrid: {},
			TransactionCurrencyId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			General: {
				Section: {
					Description: {},
					price_level_information: {}
				}
			},
			Price_List_Items: {
				Section: {
					pricelistbyproduct: {}
				}
			},
			TERRITORYRELATIONSHIP_TAB: {
				Section: {
					service_settings: {},
					Territories: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			StatusCode: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
		var grid = {
			pricelistitemsgrid: {},
			RelatedTerritoriesGrid: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			msdyn_pricelevel_entitlement_PriceListToApply: {},
			msdyn_pricelevel_msdyn_actual_PriceList: {},
			msdyn_pricelevel_msdyn_agreement_PriceList: {},
			msdyn_pricelevel_msdyn_agreementbookingproduct_PriceList: {},
			msdyn_pricelevel_msdyn_agreementbookingservice_PriceList: {},
			msdyn_pricelevel_msdyn_agreementinvoiceproduct_PriceList: {},
			msdyn_pricelevel_msdyn_fieldservicepricelistitem_PriceList: {},
			msdyn_pricelevel_msdyn_quotebookingproduct_PriceList: {},
			msdyn_pricelevel_msdyn_quotebookingservice_PriceList: {},
			msdyn_pricelevel_msdyn_rma_PriceList: {},
			msdyn_pricelevel_msdyn_rmaproduct_PriceList: {},
			msdyn_pricelevel_msdyn_workorder_PriceList: {},
			msdyn_pricelevel_msdyn_workorderproduct_PriceList: {},
			msdyn_pricelevel_msdyn_workorderservice_PriceList: {},
			msdyn_pricelevel_msdyn_workordertype_PriceList: {},
			msdyn_pricelevel_opportunityproduct_PriceList: {},
			msdyn_pricelevel_quotedetail_PriceList: {},
			price_level_accounts: {},
			price_level_contacts: {},
			price_level_invoices: {},
			price_level_opportunties: {},
			price_level_orders: {},
			price_level_product_price_levels: {},
			price_level_products: {},
			price_level_quotes: {},
			PriceList_Campaigns: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormPrice_List_Quick_Create_5x5 = function(executionContext, defaultWebResourceName) {
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
			BeginDate: {},
			Description: {},
			EndDate: {},
			Name: {},
			TransactionCurrencyId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			tab_1: {
				Section: {
					tab_1_column_1_section_1: {},
					tab_1_column_2_section_1: {},
					tab_1_column_3_section_1: {}
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
	OptionSet.PriceLevel = {
		FreightTermsCode : {
			Default_Value: 1
		},
		PaymentMethodCode : {
			Default_Value: 1
		},
		ShippingMethodCode : {
			Default_Value: 1
		},
		StateCode : {
			Active: 0,
			Inactive: 1
		},
		StatusCode : {
			Active: 100001,
			Inactive: 100002
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