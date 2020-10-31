'use strict';
/** @namespace LuckyMokey */
var LuckyMokey;
(function (LuckyMokey) {
	'use strict';
	LuckyMokey.FormInvoiceDetail_Information = function(executionContext, defaultWebResourceName) {
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
			ActualDeliveryOn: {},
			BaseAmount: {},
			Description: {},
			ExtendedAmount: {},
			IsPriceOverridden: {},
			IsProductOverridden: {},
			ManualDiscountAmount: {},
			msdyn_Agreement: {},
			msdyn_AgreementInvoiceProduct: {},
			msdyn_LineOrder: {},
			msdyn_WorkOrderId: {},
			msdyn_WorkOrderProductId: {},
			msdyn_WorkOrderServiceId: {},
			PricePerUnit: {},
			ProductDescription: {},
			ProductId: {},
			PropertyConfigurationStatus: {},
			Quantity: {},
			QuantityBackordered: {},
			QuantityCancelled: {},
			QuantityShipped: {},
			SalesRepId: {},
			ShipTo_City: {},
			ShipTo_Country: {},
			ShipTo_Fax: {},
			ShipTo_FreightTermsCode: {},
			ShipTo_Line1: {},
			ShipTo_Line2: {},
			ShipTo_Line3: {},
			ShipTo_Name: {},
			ShipTo_PostalCode: {},
			ShipTo_StateOrProvince: {},
			ShipTo_Telephone: {},
			Tax: {},
			UoMId: {},
			VolumeDiscountAmount: {},
			WillCall: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			general: {
				Section: {
					invoice_detail_information: {},
					pricing: {}
				}
			},
			delivery: {
				Section: {
					delivery_information: {},
					fulfillment: {}
				}
			},
			address: {
				Section: {
					ship_to_address: {}
				}
			},
			FieldService: {
				Section: {
					tab_4_section_2: {}
				}
			},
			editproductpropertiesinlinetab: {
				Section: {
					productpropertiessection: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var quickForm = {

		};
		devKit.LoadQuickForms(formContext, quickForm);
		form.QuickForm = quickForm;
		var navigation = {

		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		return form;
	};
	LuckyMokey.FormProject = function(executionContext, defaultWebResourceName) {
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
			ActualDeliveryOn: {},
			BaseAmount: {},
			BaseAmount_1: {},
			ChargeableTransactionsGrid: {},
			ComplimentaryTransactionsGrid: {},
			ExtendedAmount: {},
			IsPriceOverridden: {},
			IsProductOverridden: {},
			ManualDiscountAmount: {},
			MilestonesGrid: {},
			msdyn_BillingMethod: {},
			msdyn_chargeableamount: {},
			msdyn_complimentaryamount: {},
			msdyn_contractlineamount: {},
			msdyn_invoicedtilldate: {},
			msdyn_nonchargeableamount: {},
			msdyn_Project: {},
			NonChargeableTransactionsGrid: {},
			PricePerUnit: {},
			ProductDescription: {},
			ProductDescription_1: {},
			ProductId: {},
			ProductTypeCode: {},
			Quantity: {},
			QuantityBackordered: {},
			QuantityCancelled: {},
			QuantityShipped: {},
			SalesOrderDetailId: {},
			SalesRepId: {},
			ShipTo_City: {},
			ShipTo_Country: {},
			ShipTo_Fax: {},
			ShipTo_FreightTermsCode: {},
			ShipTo_Line1: {},
			ShipTo_Line2: {},
			ShipTo_Line3: {},
			ShipTo_Name: {},
			ShipTo_PostalCode: {},
			ShipTo_StateOrProvince: {},
			ShipTo_Telephone: {},
			Tax: {},
			TransactionCurrencyId: {},
			UoMId: {},
			VolumeDiscountAmount: {},
			WillCall: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			ProjectTab: {
				Section: {
					tab_4_section_1: {}
				}
			},
			MilestonesTab: {
				Section: {
					tab_9_section_1: {}
				}
			},
			ChargeableTransactionsTab: {
				Section: {
					TransactionsSection: {}
				}
			},
			ComplimentaryTransactionsTab: {
				Section: {
					tab_6_section_1: {}
				}
			},
			NonChargeableTransactionsTab: {
				Section: {
					tab_7_section_1: {}
				}
			},
			ProductTab: {
				Section: {
					invoice_detail_information: {},
					pricing: {}
				}
			},
			HiddenFields: {
				Section: {
					tab_8_section_1: {}
				}
			},
			delivery: {
				Section: {
					delivery_information: {},
					fulfillment: {}
				}
			},
			address: {
				Section: {
					ship_to_address: {}
				}
			},
			HiddenTab_Deprecated: {
				Section: {
					HiddenTab_section_1: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var quickForm = {

		};
		devKit.LoadQuickForms(formContext, quickForm);
		form.QuickForm = quickForm;
		var navigation = {

		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		return form;
	};
	LuckyMokey.FormInvoiceDetail = function(executionContext, defaultWebResourceName) {
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
			ActualDeliveryOn: {},
			InvoiceId: {},
			IsPriceOverridden: {},
			IsProductOverridden: {},
			ManualDiscountAmount: {},
			PricePerUnit: {},
			ProductDescription: {},
			ProductId: {},
			Quantity: {},
			QuantityBackordered: {},
			QuantityCancelled: {},
			QuantityShipped: {},
			SalesRepId: {},
			ShipTo_City: {},
			ShipTo_Country: {},
			ShipTo_Fax: {},
			ShipTo_FreightTermsCode: {},
			ShipTo_Line1: {},
			ShipTo_Name: {},
			ShipTo_PostalCode: {},
			ShipTo_StateOrProvince: {},
			ShipTo_Telephone: {},
			Tax: {},
			UoMId: {},
			WillCall: {}
		}
		devKit.LoadFields(formContext, body);
		var tab = {
			general: {
				Section: {
					invoice_detail_information: {},
					pricing: {},
					delivery_information: {}
				}
			}
		}
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		return form;
	}
})(LuckyMokey || (LuckyMokey = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.InvoiceDetail = {
		InvoiceStateCode : {
		},
		msdyn_BillingMethod : {
			Time_and_Material: 192350000,
			Fixed_Price: 192350001
		},
		msdyn_LineType : {
			Project_Service_Line: 690970000,
			Field_Service_Line: 690970001
		},
		PricingErrorCode : {
			None: 0,
			Detail_Error: 1,
			Missing_Price_Level: 2,
			Inactive_Price_Level: 3,
			Missing_Quantity: 4,
			Missing_Unit_Price: 5,
			Missing_Product: 6,
			Invalid_Product: 7,
			Missing_Pricing_Code: 8,
			Invalid_Pricing_Code: 9,
			Missing_UOM: 10,
			Product_Not_In_Price_Level: 11,
			Missing_Price_Level_Amount: 12,
			Missing_Price_Level_Percentage: 13,
			Missing_Price: 14,
			Missing_Current_Cost: 15,
			Missing_Standard_Cost: 16,
			Invalid_Price_Level_Amount: 17,
			Invalid_Price_Level_Percentage: 18,
			Invalid_Price: 19,
			Invalid_Current_Cost: 20,
			Invalid_Standard_Cost: 21,
			Invalid_Rounding_Policy: 22,
			Invalid_Rounding_Option: 23,
			Invalid_Rounding_Amount: 24,
			Price_Calculation_Error: 25,
			Invalid_Discount_Type: 26,
			Discount_Type_Invalid_State: 27,
			Invalid_Discount: 28,
			Invalid_Quantity: 29,
			Invalid_Pricing_Precision: 30,
			Missing_Product_Default_UOM: 31,
			Missing_Product_UOM_Schedule_: 32,
			Inactive_Discount_Type: 33,
			Invalid_Price_Level_Currency: 34,
			Price_Attribute_Out_Of_Range: 35,
			Base_Currency_Attribute_Overflow: 36,
			Base_Currency_Attribute_Underflow: 37,
			Transaction_currency_is_not_set_for_the_product_price_list_item: 38
		},
		ProductTypeCode : {
			Product: 1,
			Bundle: 2,
			Required_Bundle_Product: 3,
			Optional_Bundle_Product: 4,
			Project_based_Service: 5
		},
		PropertyConfigurationStatus : {
			Edit: 0,
			Rectify: 1,
			Not_Configured: 2
		},
		ShipTo_FreightTermsCode : {
			FOB: 1,
			No_Charge: 2
		},
		SkipPriceCalculation : {
			DoPriceCalcAlways: 0,
			SkipPriceCalcOnCreate: 1,
			SkipPriceCalcOnUpdate: 2
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