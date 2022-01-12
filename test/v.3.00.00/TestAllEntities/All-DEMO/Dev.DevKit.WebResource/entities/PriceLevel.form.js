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
			CategoryGrid: {},
			Description: {},
			EndDate: {},
			msdyn_BreakHoursBillable: {},
			msdyn_CopiedFromPriceLevel: {},
			msdyn_Module: {},
			msdyn_TimeUnit: {},
			Name: {},
			pricelistitemsgrid: {},
			RelatedTerritoriesGrid: {},
			ResourceCategoryGrid: {},
			ResourceCategoryMarkupGrid: {},
			TransactionCurrencyId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			CategoryTab: {
				Section: {
					CategorySection: {}
				}
			},
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
			ResourceCategoryMarkupTab: {
				Section: {
					ResourceCategoryMarkupSection: {}
				}
			},
			ResourceCategoryTab: {
				Section: {
					ResourceCategorySection: {}
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
		var process = devKit.LoadProcess(formContext);
		form.Process = process;
		var quickForm = {

		};
		devKit.LoadQuickForms(formContext, quickForm);
		form.QuickForm = quickForm;
		var grid = {
			CategoryGrid: {},
			pricelistitemsgrid: {},
			RelatedTerritoriesGrid: {},
			ResourceCategoryGrid: {},
			ResourceCategoryMarkupGrid: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			nav_msdyn_pricelevel_msdyn_agreement_PriceList: {},
			nav_msdyn_pricelevel_msdyn_agreementbookingproduct_PriceList: {},
			nav_msdyn_pricelevel_msdyn_agreementbookingservice_PriceList: {},
			nav_msdyn_pricelevel_msdyn_agreementinvoiceproduct_PriceList: {},
			nav_msdyn_pricelevel_msdyn_fieldservicepricelistitem_PriceList: {},
			nav_msdyn_pricelevel_msdyn_resourcecategorymarkuppricelevel_PriceList: {},
			nav_msdyn_pricelevel_msdyn_resourcecategorypricelevel_PriceList: {},
			nav_msdyn_pricelevel_msdyn_rma_PriceList: {},
			nav_msdyn_pricelevel_msdyn_rmaproduct_PriceList: {},
			nav_msdyn_pricelevel_msdyn_transactioncategorypricelevel_PriceList: {},
			nav_msdyn_pricelevel_msdyn_workorder_PriceList: {},
			nav_msdyn_pricelevel_msdyn_workorderproduct_PriceList: {},
			nav_msdyn_pricelevel_msdyn_workorderservice_PriceList: {},
			nav_msdyn_pricelevel_msdyn_workordertype_PriceList: {},
			nav_msdyn_pricelevel_pricelevel_CopiedFromPriceLevel: {},
			navItems: {},
			navProcessSessions: {}
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
		msdyn_Entity : {
			Customer: 192350001,
			Organization: 192350000,
			Project: 192350003,
			Sales_document: 192350002
		},
		msdyn_Module : {
			Cost: 192350000,
			Purchase: 192350001,
			Sales: 192350002
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