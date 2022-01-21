'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormSalesOrder_Field_Service_Information = function(executionContext, defaultWebResourceName) {
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
			BillTo_Composite: {},
			BillTo_ContactName: {},
			CustomerId: {},
			DateFulfilled: {},
			Description: {},
			DiscountAmount: {},
			DiscountPercentage: {},
			FreightAmount: {},
			FreightTermsCode: {},
			IsPriceLocked: {},
			msdyn_Account: {},
			msdyn_ordertype: {},
			Name: {},
			notescontrol: {},
			OpportunityId: {},
			OrderNumber: {},
			OrderServicesGrid: {},
			PaymentTermsCode: {},
			PriceLevelId: {},
			QuoteId: {},
			RequestDeliveryBy: {},
			salesorderdetailsGrid: {},
			ShippingMethodCode: {},
			ShipTo_Composite: {},
			StateCode: {},
			StatusCode: {},
			TotalAmount: {},
			TotalAmountLessFreight: {},
			TotalLineItemAmount: {},
			TotalTax: {},
			TransactionCurrencyId: {},
			WillCall: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			order_line_items: {
				Section: {
					ProductLinesSection: {},
					ServiceLinesSection: {},
					totals: {}
				}
			},
			summary_tab: {
				Section: {
					BillingPrintSetup: {},
					order_line_items_section_4: {},
					SocialPanTab: {},
					Summary: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			OwnerId: {},
			StateCode: {},
			StatusCode: {},
			TotalAmount: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
		var process = devKit.LoadProcess(formContext);
		form.Process = process;
		var grid = {
			OrderServicesGrid: {},
			salesorderdetailsGrid: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			nav_msdyn_salesorder_msdyn_orderinvoicingdate_Order: {},
			nav_msdyn_salesorder_msdyn_orderinvoicingsetup_Order: {},
			nav_msdyn_salesorder_msdyn_orderinvoicingsetupdate_Order: {},
			navProducts: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormOrder = function(executionContext, defaultWebResourceName) {
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
			BillTo_Composite: {},
			CustomerId: {},
			DateFulfilled: {},
			Description: {},
			DiscountAmount: {},
			DiscountPercentage: {},
			DynamicPropertiesList_LinkControl: {},
			FreightAmount: {},
			FreightTermsCode: {},
			IsPriceLocked: {},
			msdyn_ordertype: {},
			Name: {},
			notescontrol: {},
			OpportunityId: {},
			OrderNumber: {},
			PaymentTermsCode: {},
			PriceLevelId: {},
			ProductSuggestions_LinkControl: {},
			QuoteId: {},
			RequestDeliveryBy: {},
			salesorderdetailsGrid: {},
			ShippingMethodCode: {},
			ShipTo_Composite: {},
			TotalAmount: {},
			TotalAmountLessFreight: {},
			TotalLineItemAmount: {},
			TotalTax: {},
			TransactionCurrencyId: {},
			WillCall: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			summary_tab: {
				Section: {
					addresses: {},
					description_section: {},
					DynamicProperties: {},
					order_information: {},
					products: {},
					sales_information: {},
					shipping_dates: {},
					shipping_information: {},
					Social_Pane: {},
					suggestionsection: {},
					totals: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			OwnerId: {},
			StateCode: {},
			StatusCode: {},
			TotalAmount: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
		var process = devKit.LoadProcess(formContext);
		form.Process = process;
		var grid = {
			salesorderdetailsGrid: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			nav_msdyn_salesorder_msdyn_orderinvoicingdate_Order: {},
			nav_msdyn_salesorder_msdyn_orderinvoicingsetup_Order: {},
			nav_msdyn_salesorder_msdyn_orderinvoicingsetupdate_Order: {},
			navProducts: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormSalesOrder_Project_Information = function(executionContext, defaultWebResourceName) {
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
			BillTo_Composite: {},
			BillTo_ContactName: {},
			BillTo_Name: {},
			ContractPerformance_ContractLines: {},
			ContractPerformance_ProductContractLines: {},
			CustomerId: {},
			DynamicPropertiesList_LinkControl: {},
			FreightTermsCode: {},
			IsPriceLocked: {},
			msdyn_AccountManagerId: {},
			msdyn_ContractOrganizationalUnitId: {},
			msdyn_ordertype: {},
			msdyn_PSAStatusReason: {},
			Name: {},
			notescontrol: {},
			OpportunityId: {},
			OrderNumber: {},
			PaymentTermsCode: {},
			PriceLevelId: {},
			ProductSuggestions_LinkControl: {},
			ProjectContractLines: {},
			ProjectPriceListsSubGrid: {},
			QuoteId: {},
			RequestDeliveryBy: {},
			salesorderdetailsGrid: {},
			ShippingMethodCode: {},
			ShipTo_Composite: {},
			StateCode: {},
			TransactionCurrencyId: {},
			WebResource_ContractPerformance: {},
			WillCall: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			LinesTab: {
				Section: {
					DynamicProperties: {},
					ProductLinesSection: {},
					ProjectLinesSection: {}
				}
			},
			ProjectPriceListsTab: {
				Section: {
					ProjectPriceListsSection: {}
				}
			},
			summary_tab: {
				Section: {
					addresses: {},
					BillingPrintSetup: {},
					shipping_information: {},
					Social_Pane: {},
					suggestionsection: {},
					Summary: {}
				}
			},
			tab_ContractPerformance: {
				Section: {
					tab_ContractPerformance_section_2: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			msdyn_PSAState: {},
			msdyn_PSAStatusReason: {},
			OwnerId: {},
			TotalAmount: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
		var process = devKit.LoadProcess(formContext);
		form.Process = process;
		var grid = {
			ContractPerformance_ContractLines: {},
			ContractPerformance_ProductContractLines: {},
			ProjectContractLines: {},
			ProjectPriceListsSubGrid: {},
			salesorderdetailsGrid: {},
			WebResource_ContractPerformance: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			nav_msdyn_salesorder_msdyn_actual_SalesContract: {},
			nav_msdyn_salesorder_msdyn_contractlinescheduleofvalue_contract: {},
			nav_msdyn_salesorder_msdyn_contractperformance_salesorderid: {},
			nav_msdyn_salesorder_msdyn_orderpricelist_Contract: {},
			nav_msdyn_salesorder_msdyn_project_salesorderid: {},
			navConnections: {},
			navInvoices: {},
			navProducts: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormOrder2 = function(executionContext, defaultWebResourceName) {
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
			CustomerId: {},
			Description: {},
			Name: {},
			OpportunityId: {},
			OwnerId: {},
			PriceLevelId: {},
			QuoteId: {},
			StatusCode: {},
			TransactionCurrencyId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			newSalesOrder: {
				Section: {
					quickOrder_salesinformation: {},
					quickOrder_summary: {}
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
	DevKit.FormSalesOrder_Project_Quick_Create = function(executionContext, defaultWebResourceName) {
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
			CustomerId: {},
			Description: {},
			msdyn_ordertype: {},
			Name: {},
			OrderNumber: {},
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
	OptionSet.SalesOrder = {
		FreightTermsCode : {
			FOB: 1,
			No_Charge: 2
		},
		msdyn_ordertype : {
			Item_based: 192350000,
			Service_Maintenance_Based: 690970002,
			Work_based: 192350001
		},
		msdyn_PSAState : {
			Active: 192350002,
			Closed: 192350003,
			Draft: 192350000,
			On_hold: 192350001
		},
		msdyn_PSAStatusReason : {
			Abandoned: 192350006,
			Completed: 192350004,
			Confirmed: 192350003,
			Draft: 192350000,
			In_review: 192350001,
			Lost: 192350005,
			On_hold: 192350002
		},
		PaymentTermsCode : {
			_2_10_Net_30: 2,
			Net_30: 1,
			Net_45: 3,
			Net_60: 4
		},
		PricingErrorCode : {
			Base_Currency_Attribute_Overflow: 36,
			Base_Currency_Attribute_Underflow: 37,
			Detail_Error: 1,
			Discount_Type_Invalid_State: 27,
			Inactive_Discount_Type: 33,
			Inactive_Price_Level: 3,
			Invalid_Current_Cost: 20,
			Invalid_Discount: 28,
			Invalid_Discount_Type: 26,
			Invalid_Price: 19,
			Invalid_Price_Level_Amount: 17,
			Invalid_Price_Level_Currency: 34,
			Invalid_Price_Level_Percentage: 18,
			Invalid_Pricing_Code: 9,
			Invalid_Pricing_Precision: 30,
			Invalid_Product: 7,
			Invalid_Quantity: 29,
			Invalid_Rounding_Amount: 24,
			Invalid_Rounding_Option: 23,
			Invalid_Rounding_Policy: 22,
			Invalid_Standard_Cost: 21,
			Missing_Current_Cost: 15,
			Missing_Price: 14,
			Missing_Price_Level: 2,
			Missing_Price_Level_Amount: 12,
			Missing_Price_Level_Percentage: 13,
			Missing_Pricing_Code: 8,
			Missing_Product: 6,
			Missing_Product_Default_UOM: 31,
			Missing_Product_UOM_Schedule: 32,
			Missing_Quantity: 4,
			Missing_Standard_Cost: 16,
			Missing_Unit_Price: 5,
			Missing_UOM: 10,
			None: 0,
			Price_Attribute_Out_Of_Range: 35,
			Price_Calculation_Error: 25,
			Product_Not_In_Price_Level: 11,
			Transaction_currency_is_not_set_for_the_product_price_list_item: 38
		},
		PriorityCode : {
			Default_Value: 1
		},
		ShippingMethodCode : {
			Airborne: 1,
			DHL: 2,
			FedEx: 3,
			Full_Load: 6,
			Postal_Mail: 5,
			UPS: 4,
			Will_Call: 7
		},
		ShipTo_FreightTermsCode : {
			Default_Value: 1
		},
		SkipPriceCalculation : {
			DoPriceCalcAlways: 0,
			SkipPriceCalcOnRetrieve: 1
		},
		StateCode : {
			Active: 0,
			Canceled: 2,
			Fulfilled: 3,
			Invoiced: 4,
			Submitted: 1
		},
		StatusCode : {
			Complete: 100001,
			In_Progress: 3,
			Invoiced: 100003,
			New: 1,
			No_Money: 4,
			On_hold: 690970000,
			Partial: 100002,
			Pending: 2
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