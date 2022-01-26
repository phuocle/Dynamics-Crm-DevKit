'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormQuoteDetail_Field_Service_Information = function(executionContext, defaultWebResourceName) {
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
			CreatedOn: {},
			IsPriceOverridden: {},
			IsPriceOverridden1: {},
			IsProductOverridden: {},
			IsProductOverridden1: {},
			ManualDiscountAmount: {},
			msdyn_Agreement: {},
			msdyn_Duration: {},
			msdyn_EndDate: {},
			msdyn_EstimatedCost: {},
			msdyn_EstimatedMargin: {},
			msdyn_ImportDetailsFromAgreement: {},
			msdyn_LineType: {},
			msdyn_PriceList: {},
			msdyn_SalesTaxCode: {},
			msdyn_ServiceAccount: {},
			msdyn_ServiceTerritory: {},
			msdyn_StartDate: {},
			msdyn_Taxable: {},
			PricePerUnit: {},
			ProductDescription: {},
			ProductId: {},
			ProductTypeCode: {},
			Quantity: {},
			Quantity1: {},
			QuoteBookingSetups: {},
			QuoteId: {},
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
					address_section_2: {},
					ship_to_address: {}
				}
			},
			general: {
				Section: {
					pricing: {},
					quote_detail_information: {}
				}
			},
			quote_booking_setup_tab: {
				Section: {
					tab_4_section_1: {}
				}
			},
			tab_3: {
				Section: {
					tab_3_section_1: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var process = devKit.LoadProcess(formContext);
		form.Process = process;
		var grid = {
			QuoteBookingSetups: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormQuoteDetail_Information = function(executionContext, defaultWebResourceName) {
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
			QuoteId: {},
			QuoteId1: {},
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
					delivery_information: {}
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
					quote_detail_information: {}
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
	DevKit.FormQuoteDetail_Project_Information = function(executionContext, defaultWebResourceName) {
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
			EstimationLines: {},
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
			Quantity: {},
			Quantity1: {},
			QuoteId: {},
			QuoteId1: {},
			QuoteId2: {},
			QuoteId3: {},
			RequestDeliveryBy: {},
			RequestDeliveryBy1: {},
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
					delivery_information: {}
				}
			},
			general: {
				Section: {
					pricing: {},
					quote_detail_information: {}
				}
			},
			GeneralProductTab: {
				Section: {
					GeneralCostSection: {},
					GeneralProductSection: {},
					GeneralSalesSection: {}
				}
			},
			GeneralProjectTab: {
				Section: {
					AmountsSection: {},
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
					tab_8_section_1: {}
				}
			},
			TransactionsTab: {
				Section: {
					TransactionSection: {}
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
			EstimationLines: {},
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
	DevKit.FormQuoteDetail = function(executionContext, defaultWebResourceName) {
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
			QuoteId: {},
			RequestDeliveryBy: {},
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
					delivery_information: {},
					pricing: {},
					quote_detail_information: {}
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
	OptionSet.QuoteDetail = {
		msdyn_BillingMethod : {
			Fixed_Price: 192350001,
			Time_and_Material: 192350000
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