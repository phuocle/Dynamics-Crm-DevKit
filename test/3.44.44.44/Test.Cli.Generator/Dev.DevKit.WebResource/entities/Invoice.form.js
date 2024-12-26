﻿'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormInvoice_Field_Service_Information = function(executionContext, defaultWebResourceName) {
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
			details_tab: {
				Section: {
					details_tab_section_4: {}
				}
			},
			Summary_tab: {
				Section: {
					addresses: {},
					dates: {},
					details_tab_section_3: {},
					DynamicProperties: {},
					HiddenFields: {},
					invoice_information: {},
					InvoicePeriodSection: {},
					products: {},
					ServicingSection: {},
					shipping_information: {},
					Social_Pane: {},
					Summary_tab_section_11: {},
					Summary_tab_section_13: {},
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
		var grid = {
			GridInvoicingPeriod: {},
			GridServiceLines: {},
			invoicedetailsGrid: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			invoice_adx_inviteredemptions: {},
			invoice_adx_portalcomments: {},
			Invoice_Appointments: {},
			invoice_details: {},
			Invoice_Emails: {},
			invoice_msdyn_bookingalerts: {},
			invoice_msdyn_copilottranscripts: {},
			invoice_msdyn_ocliveworkitems: {},
			invoice_msdyn_ocoutboundmessages: {},
			invoice_msdyn_ocsessions: {},
			invoice_msdyn_ocvoicemails: {},
			invoice_msfp_alerts: {},
			invoice_msfp_surveyinvites: {},
			invoice_msfp_surveyresponses: {},
			Invoice_Phonecalls: {},
			Invoice_ServiceAppointments: {},
			Invoice_Tasks: {},
			msdyn_invoice_msdyn_actual_Invoice: {},
			msdyn_invoice_msdyn_agreementinvoicedate_Invoice: {},
			msdyn_invoice_msdyn_orderinvoicingdate_Invoice: {},
			msdyn_invoice_msdyn_orderinvoicingsetupdate_Invoice: {},
			msdyn_invoice_msdyn_paymentdetail_Invoice: {},
			msdyn_playbookinstance_invoice: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormInvoice_Information = function(executionContext, defaultWebResourceName) {
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
			general: {
				Section: {
					invoice_information: {},
					totals: {}
				}
			},
			notes: {
				Section: {
					notes: {}
				}
			},
			shipping: {
				Section: {
					dates: {},
					description: {},
					shipping_information: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var navigation = {
			invoice_adx_inviteredemptions: {},
			invoice_adx_portalcomments: {},
			Invoice_Appointments: {},
			invoice_details: {},
			Invoice_Emails: {},
			invoice_msdyn_bookingalerts: {},
			invoice_msdyn_copilottranscripts: {},
			invoice_msdyn_ocliveworkitems: {},
			invoice_msdyn_ocoutboundmessages: {},
			invoice_msdyn_ocsessions: {},
			invoice_msdyn_ocvoicemails: {},
			invoice_msfp_alerts: {},
			invoice_msfp_surveyinvites: {},
			invoice_msfp_surveyresponses: {},
			Invoice_Phonecalls: {},
			Invoice_ServiceAppointments: {},
			Invoice_Tasks: {},
			msdyn_invoice_msdyn_actual_Invoice: {},
			msdyn_invoice_msdyn_agreementinvoicedate_Invoice: {},
			msdyn_invoice_msdyn_orderinvoicingdate_Invoice: {},
			msdyn_invoice_msdyn_orderinvoicingsetupdate_Invoice: {},
			msdyn_invoice_msdyn_paymentdetail_Invoice: {},
			msdyn_playbookinstance_invoice: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormInvoice = function(executionContext, defaultWebResourceName) {
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
			details_tab: {
				Section: {
					Social_Pane: {},
					tab_2_section_2: {}
				}
			},
			Summary_tab: {
				Section: {
					addresses: {},
					dates: {},
					description_section: {},
					DynamicProperties: {},
					invoice_information: {},
					products: {},
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
			OwnerId: {},
			StateCode: {},
			StatusCode: {},
			TotalAmount: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
		var grid = {
			invoicedetailsGrid: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			invoice_adx_inviteredemptions: {},
			invoice_adx_portalcomments: {},
			Invoice_Appointments: {},
			invoice_details: {},
			Invoice_Emails: {},
			invoice_msdyn_bookingalerts: {},
			invoice_msdyn_copilottranscripts: {},
			invoice_msdyn_ocliveworkitems: {},
			invoice_msdyn_ocoutboundmessages: {},
			invoice_msdyn_ocsessions: {},
			invoice_msdyn_ocvoicemails: {},
			invoice_msfp_alerts: {},
			invoice_msfp_surveyinvites: {},
			invoice_msfp_surveyresponses: {},
			Invoice_Phonecalls: {},
			Invoice_ServiceAppointments: {},
			Invoice_Tasks: {},
			msdyn_invoice_msdyn_actual_Invoice: {},
			msdyn_invoice_msdyn_agreementinvoicedate_Invoice: {},
			msdyn_invoice_msdyn_orderinvoicingdate_Invoice: {},
			msdyn_invoice_msdyn_orderinvoicingsetupdate_Invoice: {},
			msdyn_invoice_msdyn_paymentdetail_Invoice: {},
			msdyn_playbookinstance_invoice: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormInvoice2 = function(executionContext, defaultWebResourceName) {
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
			SalesOrderId: {},
			StatusCode: {},
			TransactionCurrencyId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			newInvoice: {
				Section: {
					quickInvoice_salesinformation: {},
					quickInvoice_summary: {}
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
	OptionSet.Invoice = {
		CustomerIdType : {
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