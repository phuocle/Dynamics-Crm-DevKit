'use strict';
/** @namespace MyDog */
var MyDog;
(function (MyDog) {
	'use strict';
	MyDog.FormQuoteDetail_Field_Service_Information = function(executionContext, defaultWebResourceName) {
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
			IsPriceOverridden_1: {},
			IsProductOverridden: {},
			IsProductOverridden_1: {},
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
			Quantity_1: {},
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
			tab_3: {
				Section: {
					tab_3_section_1: {}
				}
			},
			quote_booking_setup_tab: {
				Section: {
					tab_4_section_1: {}
				}
			},
			general: {
				Section: {
					quote_detail_information: {},
					pricing: {}
				}
			},
			address: {
				Section: {
					ship_to_address: {},
					address_section_2: {}
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
		var grid = {
			QuoteBookingSetups: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {

		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		return form;
	};
	MyDog.FormQuoteDetail_Information = function(executionContext, defaultWebResourceName) {
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
			QuoteId_1: {},
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
			general: {
				Section: {
					quote_detail_information: {},
					pricing: {}
				}
			},
			delivery: {
				Section: {
					delivery_information: {}
				}
			},
			address: {
				Section: {
					ship_to_address: {}
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
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		return form;
	};
	MyDog.FormQuoteDetail_Project_Information = function(executionContext, defaultWebResourceName) {
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
			ExtendedAmount_1: {},
			ExtendedAmount_2: {},
			InvoiceScheduleGrid: {},
			IsPriceOverridden: {},
			IsProductOverridden: {},
			IsProductOverridden_1: {},
			ManualDiscountAmount: {},
			MilestonesGrid: {},
			msdyn_BillingMethod: {},
			msdyn_BillingStartDate: {},
			msdyn_BudgetAmount: {},
			msdyn_BudgetAmount_1: {},
			msdyn_CostAmount: {},
			msdyn_CostPricePerUnit: {},
			msdyn_IncludeExpense: {},
			msdyn_IncludeFee: {},
			msdyn_IncludeTime: {},
			msdyn_invoicefrequency: {},
			msdyn_LineType: {},
			msdyn_Project: {},
			PricePerUnit: {},
			PricePerUnit_1: {},
			PricePerUnit_2: {},
			ProductDescription: {},
			ProductDescription_1: {},
			ProductDescription_2: {},
			ProductId: {},
			ProductId_1: {},
			ProductTypeCode: {},
			ProductTypeCode_1: {},
			Quantity: {},
			Quantity_1: {},
			QuoteId: {},
			QuoteId_1: {},
			QuoteId_2: {},
			QuoteId_3: {},
			RequestDeliveryBy: {},
			RequestDeliveryBy_1: {},
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
			Tax_1: {},
			Tax_2: {},
			TransactionCurrencyId: {},
			UoMId: {},
			UoMId_1: {},
			VolumeDiscountAmount: {},
			WillCall: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			ProductTypeTab: {
				Section: {
					tab_8_section_1: {}
				}
			},
			GeneralProjectTab: {
				Section: {
					ProjectSection: {},
					TransactionTypesSection: {},
					AmountsSection: {}
				}
			},
			GeneralProductTab: {
				Section: {
					GeneralProductSection: {},
					GeneralCostSection: {},
					GeneralSalesSection: {}
				}
			},
			ChargeableRolesTab: {
				Section: {
					ChargeableRoles: {}
				}
			},
			ChargeableCategoriesTab: {
				Section: {
					ChargeableCategories: {}
				}
			},
			TransactionsTab: {
				Section: {
					TransactionSection: {}
				}
			},
			InvoiceScheduleTab: {
				Section: {
					InvoiceScheduleTab_Header: {},
					InvoiceScheduleSection: {},
					MilestoneSection: {}
				}
			},
			general: {
				Section: {
					quote_detail_information: {},
					pricing: {}
				}
			},
			delivery: {
				Section: {
					delivery_information: {}
				}
			},
			address: {
				Section: {
					ship_to_address: {}
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
		var grid = {
			ChargeableRolesGrid: {},
			ChargeableCategoriesGrid: {},
			EstimationLines: {},
			InvoiceScheduleGrid: {},
			MilestonesGrid: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {

		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		return form;
	};
	MyDog.FormQuoteDetail = function(executionContext, defaultWebResourceName) {
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
		}
		devKit.LoadFields(formContext, body);
		var tab = {
			general: {
				Section: {
					quote_detail_information: {},
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
})(MyDog || (MyDog = {}));
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
			Missing_Product_UOM_Schedule_: 32,
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
		QuoteStateCode : {
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