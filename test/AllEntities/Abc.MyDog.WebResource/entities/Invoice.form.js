'use strict';
/** @namespace MyDog */
var MyDog;
(function (MyDog) {
	'use strict';
	MyDog.FormInvoice_Field_Service_Information = function(executionContext, defaultWebResourceName) {
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
			CreatedOn: {},
			CustomerId: {},
			DateDelivered: {},
			Description: {},
			DiscountAmount: {},
			DiscountPercentage: {},
			DueDate: {},
			DynamicPropertiesList_LinkControl: {},
			FreightAmount: {},
			GridInvoicingPeriod: {},
			GridServiceLines: {},
			invoicedetailsGrid: {},
			InvoiceNumber: {},
			IsPriceLocked: {},
			msdyn_InvoiceDate: {},
			msdyn_OrderType: {},
			Name: {},
			notescontrol: {},
			OpportunityId: {},
			PaymentTermsCode: {},
			PriceLevelId: {},
			SalesOrderId: {},
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
			Summary_tab: {
				Section: {
					invoice_information: {},
					Summary_tab_section_11: {},
					dates: {},
					shipping_information: {},
					addresses: {},
					HiddenFields: {},
					Summary_tab_section_13: {},
					ServicingSection: {},
					products: {},
					DynamicProperties: {},
					totals: {},
					Social_Pane: {},
					details_tab_section_3: {},
					InvoicePeriodSection: {}
				}
			},
			details_tab: {
				Section: {
					details_tab_section_4: {}
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
		var _Project_Service_Invoice_Process = {
			CustomerId: {},
			SalesOrderId: {},
			TotalAmount: {}
		}
		devKit.LoadFields(formContext, _Project_Service_Invoice_Process, "header_process_");
		process.Project_Service_Invoice_Process = _Project_Service_Invoice_Process;
		form.Process = process;
		var quickForm = {

		};
		devKit.LoadQuickForms(formContext, quickForm);
		form.QuickForm = quickForm;
		var grid = {
			GridServiceLines: {},
			invoicedetailsGrid: {},
			GridInvoicingPeriod: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			navProducts: {},
			nav_msdyn_invoice_msdyn_agreementinvoicedate_Invoice: {},
			nav_msdyn_invoice_msdyn_paymentdetail_Invoice: {},
			navProcessSessions: {},
			nav_msdyn_invoice_msdyn_orderinvoicingdate_Invoice: {},
			nav_msdyn_invoice_msdyn_orderinvoicingsetupdate_Invoice: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		return form;
	};
	MyDog.FormInvoice_Information = function(executionContext, defaultWebResourceName) {
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
			BillTo_City: {},
			BillTo_Country: {},
			BillTo_Fax: {},
			BillTo_Line1: {},
			BillTo_Line2: {},
			BillTo_Line3: {},
			BillTo_Name: {},
			BillTo_PostalCode: {},
			BillTo_StateOrProvince: {},
			BillTo_Telephone: {},
			CustomerId: {},
			DateDelivered: {},
			Description: {},
			DiscountAmount: {},
			DiscountPercentage: {},
			DueDate: {},
			FreightAmount: {},
			InvoiceNumber: {},
			IsPriceLocked: {},
			Name: {},
			notescontrol: {},
			OpportunityId: {},
			OwnerId: {},
			PaymentTermsCode: {},
			PriceLevelId: {},
			SalesOrderId: {},
			ShippingMethodCode: {},
			ShipTo_City: {},
			ShipTo_Country: {},
			ShipTo_Fax: {},
			ShipTo_Line1: {},
			ShipTo_Line2: {},
			ShipTo_Line3: {},
			ShipTo_Name: {},
			ShipTo_PostalCode: {},
			ShipTo_StateOrProvince: {},
			ShipTo_Telephone: {},
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
			general: {
				Section: {
					invoice_information: {},
					totals: {}
				}
			},
			shipping: {
				Section: {
					dates: {},
					shipping_information: {},
					description: {}
				}
			},
			addresses: {
				Section: {
					bill_to_address: {},
					ship_to_address: {}
				}
			},
			administration: {
				Section: {
					internal_information: {}
				}
			},
			notes: {
				Section: {
					notes: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var process = devKit.LoadProcess(formContext);
		var _Project_Service_Invoice_Process = {
			CustomerId: {},
			SalesOrderId: {},
			TotalAmount: {}
		}
		devKit.LoadFields(formContext, _Project_Service_Invoice_Process, "header_process_");
		process.Project_Service_Invoice_Process = _Project_Service_Invoice_Process;
		form.Process = process;
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
	MyDog.FormInvoice = function(executionContext, defaultWebResourceName) {
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
			DateDelivered: {},
			Description: {},
			DiscountAmount: {},
			DiscountPercentage: {},
			DueDate: {},
			DynamicPropertiesList_LinkControl: {},
			FreightAmount: {},
			invoicedetailsGrid: {},
			InvoiceNumber: {},
			IsPriceLocked: {},
			msdyn_OrderType: {},
			Name: {},
			notescontrol: {},
			OpportunityId: {},
			PaymentTermsCode: {},
			PriceLevelId: {},
			ProductSuggestions_LinkControl: {},
			SalesOrderId: {},
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
			Summary_tab: {
				Section: {
					invoice_information: {},
					dates: {},
					shipping_information: {},
					addresses: {},
					products: {},
					suggestionsection: {},
					DynamicProperties: {},
					totals: {},
					sales_information: {},
					description_section: {}
				}
			},
			details_tab: {
				Section: {
					Social_Pane: {},
					tab_2_section_2: {}
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
		var _Project_Service_Invoice_Process = {
			CustomerId: {},
			SalesOrderId: {},
			TotalAmount: {}
		}
		devKit.LoadFields(formContext, _Project_Service_Invoice_Process, "header_process_");
		process.Project_Service_Invoice_Process = _Project_Service_Invoice_Process;
		form.Process = process;
		var quickForm = {

		};
		devKit.LoadQuickForms(formContext, quickForm);
		form.QuickForm = quickForm;
		var grid = {
			invoicedetailsGrid: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			navProducts: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		return form;
	};
	MyDog.FormProject_Invoice = function(executionContext, defaultWebResourceName) {
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
			BillTo_Name: {},
			CustomerId: {},
			Description: {},
			DiscountAmount: {},
			DiscountPercentage: {},
			DueDate: {},
			FreightAmount: {},
			invoicedetailsGrid: {},
			InvoiceNumber: {},
			msdyn_billtocontactname: {},
			msdyn_OrderType: {},
			Name: {},
			notescontrol: {},
			OpportunityId: {},
			PaymentTermsCode: {},
			PriceLevelId: {},
			ProjectInvoiceLines: {},
			SalesOrderId: {},
			TotalAmount: {},
			TotalAmountLessFreight: {},
			TotalLineItemAmount: {},
			TotalTax: {},
			TransactionCurrencyId: {},
			WillCall: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			Summary_tab_project: {
				Section: {
					tab_5_section_1: {},
					Summary_tab_project_section_3: {},
					tab_5_section_2: {},
					Summary_tab_project_section_5: {},
					tab_4_section_1: {},
					products: {},
					totals: {}
				}
			},
			HiddenLockedFields: {
				Section: {
					tab_5_section_3: {}
				}
			},
			details_tab: {
				Section: {
					Social_Pane: {},
					tab_2_section_2: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			msdyn_projectinvoicestatus: {},
			OwnerId: {},
			StateCode: {},
			TotalAmount: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
		var process = devKit.LoadProcess(formContext);
		var _Project_Service_Invoice_Process = {
			CustomerId: {},
			SalesOrderId: {},
			TotalAmount: {}
		}
		devKit.LoadFields(formContext, _Project_Service_Invoice_Process, "header_process_");
		process.Project_Service_Invoice_Process = _Project_Service_Invoice_Process;
		form.Process = process;
		var quickForm = {

		};
		devKit.LoadQuickForms(formContext, quickForm);
		form.QuickForm = quickForm;
		var grid = {
			ProjectInvoiceLines: {},
			invoicedetailsGrid: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			navProducts: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		return form;
	};
})(MyDog || (MyDog = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.Invoice = {
		msdyn_OrderType : {
			Item_based: 192350000,
			Service_Maintenance_Based: 690970002,
			Work_based: 192350001
		},
		msdyn_projectinvoicestatus : {
			Confirmed: 192350002,
			Draft: 192350000,
			In_Review: 192350001,
			Invoice_Paid: 192350003
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
			Canceled: 3,
			Closed_deprecated: 1,
			Paid: 2
		},
		StatusCode : {
			Billed: 4,
			Booked_applies_to_services: 5,
			Canceled: 100003,
			Canceled_deprecated: 3,
			Complete: 100001,
			Installed_applies_to_services: 6,
			New: 1,
			Paid_in_Full_deprecated: 7,
			Partial: 100002,
			Partially_Shipped: 2
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