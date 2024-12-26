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
		var grid = {
			quotedetailsGrid: {},
			servicesGrid: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			lk_opportunitysalesprocess_quoteid: {},
			msdyn_playbookinstance_quote: {},
			msdyn_quote_msdyn_quotebookingincident_Quote: {},
			msdyn_quote_msdyn_quotebookingproduct_Quote: {},
			msdyn_quote_msdyn_quotebookingservice_Quote: {},
			msdyn_quote_msdyn_quotebookingservicetask_Quote: {},
			msdyn_quote_msdyn_quotebookingsetup_Quote: {},
			msdyn_quote_msdyn_quoteinvoicingsetup_Quote: {},
			quote_adx_inviteredemptions: {},
			quote_adx_portalcomments: {},
			Quote_Appointments: {},
			quote_details: {},
			Quote_Emails: {},
			quote_msdyn_bookingalerts: {},
			quote_msdyn_copilottranscripts: {},
			quote_msdyn_ocliveworkitems: {},
			quote_msdyn_ocoutboundmessages: {},
			quote_msdyn_ocsessions: {},
			quote_msdyn_ocvoicemails: {},
			quote_msfp_alerts: {},
			quote_msfp_surveyinvites: {},
			quote_msfp_surveyresponses: {},
			quote_orders: {},
			Quote_Phonecalls: {},
			Quote_QuoteClose: {},
			quote_QuoteCloses: {},
			Quote_ServiceAppointments: {},
			Quote_Tasks: {}
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
		var grid = {
			quotedetailsGrid: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			lk_opportunitysalesprocess_quoteid: {},
			msdyn_playbookinstance_quote: {},
			msdyn_quote_msdyn_quotebookingincident_Quote: {},
			msdyn_quote_msdyn_quotebookingproduct_Quote: {},
			msdyn_quote_msdyn_quotebookingservice_Quote: {},
			msdyn_quote_msdyn_quotebookingservicetask_Quote: {},
			msdyn_quote_msdyn_quotebookingsetup_Quote: {},
			msdyn_quote_msdyn_quoteinvoicingsetup_Quote: {},
			quote_adx_inviteredemptions: {},
			quote_adx_portalcomments: {},
			Quote_Appointments: {},
			quote_details: {},
			Quote_Emails: {},
			quote_msdyn_bookingalerts: {},
			quote_msdyn_copilottranscripts: {},
			quote_msdyn_ocliveworkitems: {},
			quote_msdyn_ocoutboundmessages: {},
			quote_msdyn_ocsessions: {},
			quote_msdyn_ocvoicemails: {},
			quote_msfp_alerts: {},
			quote_msfp_surveyinvites: {},
			quote_msfp_surveyresponses: {},
			quote_orders: {},
			Quote_Phonecalls: {},
			Quote_QuoteClose: {},
			quote_QuoteCloses: {},
			Quote_ServiceAppointments: {},
			Quote_Tasks: {}
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
		CustomerIdType : {
		},
		FreightTermsCode : {
			FOB: 1,
			No_Charge: 2
		},
		msdyn_OrderType : {
			Item_based: 192350000,
			Service_Maintenance_Based: 690970002
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
		QuoteCreationMethod : {
			Revision: 776160001,
			Unknown: 776160000
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