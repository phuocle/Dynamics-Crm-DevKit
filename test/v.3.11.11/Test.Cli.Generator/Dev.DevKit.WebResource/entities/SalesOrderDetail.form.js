﻿'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormSalesOrderDetail_Field_Service_Information = function(executionContext, defaultWebResourceName) {
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
			BaseAmount: {},
			ExtendedAmount: {},
			IsPriceOverridden: {},
			IsProductOverridden: {},
			ManualDiscountAmount: {},
			msdyn_agreement: {},
			msdyn_LineType: {},
			PricePerUnit: {},
			ProductDescription: {},
			ProductId: {},
			Quantity: {},
			QuantityBackordered: {},
			QuantityCancelled: {},
			QuantityShipped: {},
			RequestDeliveryBy: {},
			SalesRepId: {},
			ShipTo_City: {},
			ShipTo_ContactName: {},
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
			general: {
				Section: {
					pricing: {},
					sales_order_detail_information: {}
				}
			},
			servicemaintenanceline: {
				Section: {
					servicemaintenanceline: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var process = devKit.LoadProcess(formContext);
		form.Process = process;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormSalesOrderDetail_Information = function(executionContext, defaultWebResourceName) {
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
			BaseAmount: {},
			ExtendedAmount: {},
			IsPriceOverridden: {},
			IsProductOverridden: {},
			ManualDiscountAmount: {},
			msdyn_LineType: {},
			PricePerUnit: {},
			ProductDescription: {},
			ProductId: {},
			PropertyConfigurationStatus: {},
			Quantity: {},
			QuantityBackordered: {},
			QuantityCancelled: {},
			QuantityShipped: {},
			RequestDeliveryBy: {},
			SalesOrderId: {},
			SalesOrderId1: {},
			SalesRepId: {},
			ShipTo_City: {},
			ShipTo_ContactName: {},
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
			general: {
				Section: {
					pricing: {},
					sales_order_detail_information: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var process = devKit.LoadProcess(formContext);
		form.Process = process;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormSalesOrderDetail_Project_Information = function(executionContext, defaultWebResourceName) {
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
			BaseAmount: {},
			ChargeableCategoriesGrid: {},
			ChargeableRolesGrid: {},
			ContractLineDetails: {},
			ExtendedAmount: {},
			ExtendedAmount1: {},
			ExtendedAmount2: {},
			InvoiceScheduleGrid: {},
			IsPriceOverridden: {},
			IsProductOverridden: {},
			IsProductOverridden1: {},
			ManualDiscountAmount: {},
			MilestonesGrid: {},
			msdyn_BillingMethod: {},
			msdyn_BillingStartDate: {},
			msdyn_BillingStatus: {},
			msdyn_BudgetAmount: {},
			msdyn_BudgetAmount1: {},
			msdyn_CostAmount: {},
			msdyn_CostPricePerUnit: {},
			msdyn_IncludeExpense: {},
			msdyn_IncludeFee: {},
			msdyn_IncludeTime: {},
			msdyn_invoicefrequency: {},
			msdyn_LineType: {},
			msdyn_Project: {},
			PricePerUnit: {},
			PricePerUnit1: {},
			PricePerUnit2: {},
			ProductDescription: {},
			ProductDescription1: {},
			ProductDescription2: {},
			ProductId: {},
			ProductId1: {},
			ProductTypeCode: {},
			ProductTypeCode1: {},
			ProductTypeCode2: {},
			ProductTypeCode3: {},
			Quantity: {},
			Quantity1: {},
			QuantityBackordered: {},
			QuantityCancelled: {},
			QuantityShipped: {},
			RequestDeliveryBy: {},
			RequestDeliveryBy1: {},
			SalesOrderId: {},
			SalesOrderId1: {},
			SalesOrderId2: {},
			SalesOrderId3: {},
			SalesRepId: {},
			ShipTo_City: {},
			ShipTo_ContactName: {},
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
			Tax1: {},
			Tax2: {},
			TransactionCurrencyId: {},
			UoMId: {},
			UoMId1: {},
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
			ChargeableCategoriesTab: {
				Section: {
					ChargeableCategories: {}
				}
			},
			ChargeableRolesTab: {
				Section: {
					ChargeableRoles: {}
				}
			},
			delivery: {
				Section: {
					delivery_information: {},
					fulfillment: {}
				}
			},
			general: {
				Section: {
					pricing: {},
					sales_order_detail_information: {}
				}
			},
			GeneralProductTab: {
				Section: {
					CostSection: {},
					ProductSection: {},
					SalesSection: {}
				}
			},
			GeneralProjectTab: {
				Section: {
					AmountSection: {},
					ProjectSection: {},
					TransactionTypesSection: {}
				}
			},
			InvoiceScheduleTab: {
				Section: {
					InvoiceScheduleSection: {},
					InvoiceScheduleTab_Header: {},
					MilestoneSection: {}
				}
			},
			ProductTypeTab: {
				Section: {
					ProductTypeTab_section_2: {},
					ProductTypeTab_section_3: {},
					tab_8_section_1: {}
				}
			},
			TransactionsTab: {
				Section: {
					TransactionsSection: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var process = devKit.LoadProcess(formContext);
		form.Process = process;
		var grid = {
			ChargeableCategoriesGrid: {},
			ChargeableRolesGrid: {},
			ContractLineDetails: {},
			InvoiceScheduleGrid: {},
			MilestonesGrid: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormSalesOrderDetail = function(executionContext, defaultWebResourceName) {
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
			IsPriceOverridden: {},
			IsProductOverridden: {},
			ManualDiscountAmount: {},
			PricePerUnit: {},
			ProductDescription: {},
			ProductId: {},
			Quantity: {},
			RequestDeliveryBy: {},
			SalesOrderId: {},
			SalesRepId: {},
			ShipTo_City: {},
			ShipTo_ContactName: {},
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
					delivery: {},
					pricing: {},
					sales_order_detail_information: {}
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
	OptionSet.SalesOrderDetail = {
		msdyn_BillingMethod : {
			Fixed_Price: 192350001,
			Time_and_Material: 192350000
		},
		msdyn_BillingStatus : {
			Canceled: 192350003,
			Customer_Invoice_Created: 192350001,
			Customer_Invoice_Posted: 192350002,
			Ready_to_Invoice: 192350004,
			Unbilled_Sales_Created: 192350000,
			Work_order_closed_posted: 690970000
		},
		msdyn_LineType : {
			Field_Service_Line: 690970001,
			Project_Service_Line: 690970000
		},
		OwnerIdType : {
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
		SalesOrderStateCode : {
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