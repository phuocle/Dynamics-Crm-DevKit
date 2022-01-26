'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormQuote_Field_Service_Information = function(executionContext, defaultWebResourceName) {
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
			Description: {},
			DiscountAmount: {},
			DiscountPercentage: {},
			EffectiveFrom: {},
			EffectiveTo: {},
			FreightAmount: {},
			FreightTermsCode: {},
			msdyn_Account: {},
			msdyn_EstimatedCost: {},
			msdyn_EstimatedQuoteMargin: {},
			msdyn_InvoiceSetupTotals: {},
			msdyn_OrderType: {},
			msdyn_TotalAmount: {},
			Name: {},
			notescontrol: {},
			OpportunityId: {},
			PaymentTermsCode: {},
			PriceLevelId: {},
			ProductSuggestions_LinkControl: {},
			quotedetailsGrid: {},
			QuoteNumber: {},
			RevisionNumber: {},
			servicesGrid: {},
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
			Summary_tab: {
				Section: {
					quote_information: {},
					shipping_information: {},
					Summary_tab_section_3: {}
				}
			},
			tab_3: {
				Section: {
					products: {},
					ServiceLinesSection: {},
					suggestionsection: {},
					totals: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			EffectiveFrom: {},
			EffectiveTo: {},
			msdyn_TotalAmount: {},
			OwnerId: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
		var process = devKit.LoadProcess(formContext);
		var _Project_Service_Project_Stages = {

		}
		devKit.LoadFields(formContext, _Project_Service_Project_Stages, "header_process_");
		process.Project_Service_Project_Stages = _Project_Service_Project_Stages;
		form.Process = process;
		var grid = {
			quotedetailsGrid: {},
			servicesGrid: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			nav_msdyn_quote_msdyn_quotebookingincident_Quote: {},
			nav_msdyn_quote_msdyn_quotebookingproduct_Quote: {},
			nav_msdyn_quote_msdyn_quotebookingservice_Quote: {},
			nav_msdyn_quote_msdyn_quotebookingservicetask_Quote: {},
			nav_msdyn_quote_msdyn_quotebookingsetup_Quote: {},
			nav_msdyn_quote_msdyn_quoteinvoicingsetup_Quote: {},
			navProducts: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormQuote_Project_Information = function(executionContext, defaultWebResourceName) {
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
			costRevenueDistribution: {},
			CustomerId: {},
			Description: {},
			DynamicPropertiesList_LinkControl: {},
			EffectiveFrom: {},
			EffectiveTo: {},
			ExpiresOn: {},
			FreightTermsCode: {},
			msdyn_AccountManagerId: {},
			msdyn_AdjustedGrossMargin: {},
			msdyn_AdjustedGrossMargin1: {},
			msdyn_Competitive: {},
			msdyn_Competitive1: {},
			msdyn_ContractOrganizationalUnitId: {},
			msdyn_CustomerBudgetRollUp: {},
			msdyn_EstimatedBudget: {},
			msdyn_EstimatedBudget1: {},
			msdyn_EstimatedCompletionRollUp: {},
			msdyn_EstimatedSchedule: {},
			msdyn_EstimatedSchedule1: {},
			msdyn_GrossMargin: {},
			msdyn_GrossMargin1: {},
			msdyn_OrderType: {},
			msdyn_Profitability: {},
			msdyn_Profitability1: {},
			msdyn_TotalChargeableCostRollup: {},
			msdyn_TotalNonchargeableCostRollup: {},
			Name: {},
			notescontrol: {},
			OpportunityId: {},
			PaymentTermsCode: {},
			PriceLevelId: {},
			ProjectPriceListsSubGrid: {},
			ProjectQuoteLines: {},
			quotedetailsGrid: {},
			quoteLineComparisonGrid: {},
			quoteLineDetailAnalysis: {},
			QuoteNumber: {},
			RequestDeliveryBy: {},
			RequestDeliveryBy1: {},
			RevisionNumber: {},
			ShippingMethodCode: {},
			ShipTo_Composite: {},
			StatusCode: {},
			TotalAmount: {},
			TotalAmount1: {},
			TotalAmount_Base: {},
			totalQuoteAmountComparisonGrid: {},
			TransactionCurrencyId: {},
			WillCall: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			competive_analysis_tab: {
				Section: {
					analytics_tab_section_5: {},
					Summary_tab_section_10: {}
				}
			},
			profitability_analytics_tab: {
				Section: {
					analyticResultSection: {},
					analyticsChartDetailsSection: {}
				}
			},
			ProjectPriceListsTab: {
				Section: {
					ProjectPriceListsSection: {}
				}
			},
			quoteAnaylsis_tab: {
				Section: {
					tab_6_section_1: {},
					tab_6_section_2: {},
					tab_6_section_3: {}
				}
			},
			QuoteLinesTab: {
				Section: {
					DynamicProperties: {},
					ProductLinesSection: {},
					ProjectLinesSection: {}
				}
			},
			Summary_tab: {
				Section: {
					addresses: {},
					description_section: {},
					quote_information: {},
					shipping_information: {},
					Summary_tab_section_8: {},
					Summary_tab_section_9: {}
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
		var _Project_Service_Project_Stages = {

		}
		devKit.LoadFields(formContext, _Project_Service_Project_Stages, "header_process_");
		process.Project_Service_Project_Stages = _Project_Service_Project_Stages;
		form.Process = process;
		var grid = {
			costRevenueDistribution: {},
			ProjectPriceListsSubGrid: {},
			ProjectQuoteLines: {},
			quotedetailsGrid: {},
			quoteLineComparisonGrid: {},
			quoteLineDetailAnalysis: {},
			totalQuoteAmountComparisonGrid: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			nav_msdyn_quote_msdyn_quotelineanalyticsbreakdown_Quote: {},
			nav_msdyn_quote_msdyn_quotelinetransaction: {},
			nav_msdyn_quote_msdyn_quotepricelist_Quote: {},
			navAudit: {},
			navConnections: {},
			navDocument: {},
			navOrders: {},
			navProcessSessions: {},
			navProducts: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormQuote = function(executionContext, defaultWebResourceName) {
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
			Description: {},
			DiscountAmount: {},
			DiscountPercentage: {},
			DynamicPropertiesList_LinkControl: {},
			FreightAmount: {},
			FreightTermsCode: {},
			msdyn_OrderType: {},
			Name: {},
			notescontrol: {},
			OpportunityId: {},
			OwnerId: {},
			PaymentTermsCode: {},
			PriceLevelId: {},
			ProductSuggestions_LinkControl: {},
			quotedetailsGrid: {},
			QuoteNumber: {},
			RevisionNumber: {},
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
			details_tab: {
				Section: {
					Social_Pane: {},
					tab_2_section_2: {}
				}
			},
			Summary_tab: {
				Section: {
					addresses: {},
					description_section: {},
					DynamicProperties: {},
					products: {},
					quote_information: {},
					sales_information: {},
					shipping_information: {},
					suggestionsection: {},
					totals: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			EffectiveFrom: {},
			EffectiveTo: {},
			StatusCode: {},
			TotalAmount: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
		var process = devKit.LoadProcess(formContext);
		var _Project_Service_Project_Stages = {

		}
		devKit.LoadFields(formContext, _Project_Service_Project_Stages, "header_process_");
		process.Project_Service_Project_Stages = _Project_Service_Project_Stages;
		form.Process = process;
		var grid = {
			quotedetailsGrid: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			nav_msdyn_quote_msdyn_quotebookingincident_Quote: {},
			nav_msdyn_quote_msdyn_quotebookingproduct_Quote: {},
			nav_msdyn_quote_msdyn_quotebookingservice_Quote: {},
			nav_msdyn_quote_msdyn_quotebookingservicetask_Quote: {},
			nav_msdyn_quote_msdyn_quotebookingsetup_Quote: {},
			nav_msdyn_quote_msdyn_quoteinvoicingsetup_Quote: {},
			navProducts: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormQuote2 = function(executionContext, defaultWebResourceName) {
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
			TransactionCurrencyId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			newQuote: {
				Section: {
					quickQuote_salesinformation: {},
					quickQuote_summary: {}
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
	OptionSet.Quote = {
		FreightTermsCode : {
			FOB: 1,
			No_Charge: 2
		},
		msdyn_Competitive : {
			Customer_Budget_Not_Available: 192350000,
			Outside_Customer_Expectations: 192350002,
			Within_Customer_Expectations: 192350001
		},
		msdyn_EstimatedBudget : {
			Budget_Estimate_Not_Available: 192350000,
			Exceeds_Customer_Budget: 192350002,
			Within_Customer_Budget: 192350001
		},
		msdyn_EstimatedSchedule : {
			Estimated_To_Finish_Early: 192350001,
			Estimated_To_Finish_Late: 192350002,
			Estimated_To_Finish_On_Schedule: 192350003,
			Schedule_Not_Available: 192350000
		},
		msdyn_feasible : {
			Feasibility_Not_Available: 192350000,
			Feasible: 192350001,
			Not_Feasible: 192350002
		},
		msdyn_OrderType : {
			Item_based: 192350000,
			Service_Maintenance_Based: 690970002,
			Work_based: 192350001
		},
		msdyn_Profitability : {
			Not_Profitable: 192350002,
			Profitability_Not_Available: 192350000,
			Profitable: 192350001
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
			Active: 1,
			Closed: 3,
			Draft: 0,
			Won: 2
		},
		StatusCode : {
			Canceled: 6,
			In_Progress_1: 1,
			In_Progress_2: 2,
			Lost: 5,
			Open: 3,
			Revised: 7,
			Won: 4
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