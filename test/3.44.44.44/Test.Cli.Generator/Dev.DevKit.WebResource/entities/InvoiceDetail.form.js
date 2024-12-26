﻿'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormInvoiceDetail_Information = function(executionContext, defaultWebResourceName) {
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
			address: {
				Section: {
					ship_to_address: {}
				}
			},
			delivery: {
				Section: {
					delivery_information: {},
					fulfillment: {}
				}
			},
			editproductpropertiesinlinetab: {
				Section: {
					productpropertiessection: {}
				}
			},
			FieldService: {
				Section: {
					tab_4_section_2: {}
				}
			},
			general: {
				Section: {
					invoice_detail_information: {},
					pricing: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var navigation = {
			InvoiceDetail_Dynamicpropertyinstance: {},
			invoicedetail_parent_invoicedetail: {},
			invoicedetail_parentref_invoicedetail: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormInvoiceDetail = function(executionContext, defaultWebResourceName) {
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
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			general: {
				Section: {
					delivery_information: {},
					invoice_detail_information: {},
					pricing: {}
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
	OptionSet.InvoiceDetail = {
		InvoiceStateCode : {
		},
		msdyn_LineType : {
			Field_Service_Line: 690970001,
			Project_Service_Line: 690970000
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
		ProductTypeCode : {
			Bundle: 2,
			Optional_Bundle_Product: 4,
			Product: 1,
			Project_based_Service: 5,
			Required_Bundle_Product: 3
		},
		PropertyConfigurationStatus : {
			Edit: 0,
			Not_Configured: 2,
			Rectify: 1
		},
		ShipTo_FreightTermsCode : {
			FOB: 1,
			No_Charge: 2
		},
		SkipPriceCalculation : {
			DoPriceCalcAlways: 0,
			SkipPriceCalcOnCreate: 1,
			SkipPriceCalcOnUpdate: 2,
			SkipPriceCalcOnUpSert: 3
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