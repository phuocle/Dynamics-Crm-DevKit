//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace FormQuote {
		interface Header {
			/** Enter the date when the quote pricing is effective or was first communicated to the customer. */
			EffectiveFrom: DevKit.Form.Controls.ControlDate;
			/** Enter the expiration date or last day the quote pricing is effective for the customer. */
			EffectiveTo: DevKit.Form.Controls.ControlDate;
			/** Shows whether the quote is draft, active, won, or closed. Only draft quotes can be edited. */
			StateCode: DevKit.Form.Controls.ControlOptionSet;
			/** Shows the total amount due, calculated as the sum of the products, discounts, freight, and taxes for the quote. */
			TotalAmount: DevKit.Form.Controls.ControlMoney;
		}
		interface tab_Summary_tab_Sections {
			quote_information: DevKit.Form.Controls.ControlSection;
			shipping_information: DevKit.Form.Controls.ControlSection;
			addresses: DevKit.Form.Controls.ControlSection;
			products: DevKit.Form.Controls.ControlSection;
			DynamicProperties: DevKit.Form.Controls.ControlSection;
			totals: DevKit.Form.Controls.ControlSection;
			suggestionsection: DevKit.Form.Controls.ControlSection;
			sales_information: DevKit.Form.Controls.ControlSection;
			description_section: DevKit.Form.Controls.ControlSection;
		}
		interface tab_details_tab_Sections {
			Social_Pane: DevKit.Form.Controls.ControlSection;
			tab_2_section_2: DevKit.Form.Controls.ControlSection;
		}
		interface tab_Summary_tab extends DevKit.Form.Controls.IControlTab {
			Section: tab_Summary_tab_Sections;
		}
		interface tab_details_tab extends DevKit.Form.Controls.IControlTab {
			Section: tab_details_tab_Sections;
		}
		interface Tabs {
			Summary_tab: tab_Summary_tab;
			details_tab: tab_details_tab;
		}
		interface Body {
			Tab: Tabs;
			quotedetailsGrid: DevKit.Form.Controls.ControlGrid;
			notescontrol: DevKit.Form.Controls.ControlNote;
			/** Shows the complete Bill To address. */
			BillTo_Composite: DevKit.Form.Controls.ControlString;
			/** Select the customer account or contact to provide a quick link to additional customer details, such as account information, activities, and opportunities. */
			CustomerId: DevKit.Form.Controls.ControlLookup;
			/** Type additional information to describe the quote, such as the products or services offered or details about the customer's product preferences. */
			Description: DevKit.Form.Controls.ControlString;
			/** Type the discount amount for the quote if the customer is eligible for special savings. */
			DiscountAmount: DevKit.Form.Controls.ControlMoney;
			/** Type the discount rate that should be applied to the Detail Amount field to include additional savings for the customer in the quote. */
			DiscountPercentage: DevKit.Form.Controls.ControlDecimal;
			/** Type the cost of freight or shipping for the products included in the quote for use in calculating the Total Amount field. */
			FreightAmount: DevKit.Form.Controls.ControlMoney;
			/** Select the freight terms to make sure shipping charges are processed correctly. */
			FreightTermsCode: DevKit.Form.Controls.ControlOptionSet;
			/** Internal use only. */
			msdyn_OrderType: DevKit.Form.Controls.ControlOptionSet;
			/** Type a descriptive name for the quote. */
			Name: DevKit.Form.Controls.ControlString;
			/** Choose the opportunity that the quote is related to for reporting and analytics. */
			OpportunityId: DevKit.Form.Controls.ControlLookup;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
			/** Select the payment terms to indicate when the customer needs to pay the total amount. */
			PaymentTermsCode: DevKit.Form.Controls.ControlOptionSet;
			/** Choose the price list associated with this record to make sure the products associated with the campaign are offered at the correct prices. */
			PriceLevelId: DevKit.Form.Controls.ControlLookup;
			/** Shows the quote number for customer reference and searching capabilities. The number cannot be modified. */
			QuoteNumber: DevKit.Form.Controls.ControlString;
			/** Shows the version number of the quote for revision history tracking. */
			RevisionNumber: DevKit.Form.Controls.ControlInteger;
			/** Select a shipping method for deliveries sent to this address. */
			ShippingMethodCode: DevKit.Form.Controls.ControlOptionSet;
			/** Shows the complete Ship To address. */
			ShipTo_Composite: DevKit.Form.Controls.ControlString;
			/** Shows the total amount due, calculated as the sum of the products, discounts, freight, and taxes for the quote. */
			TotalAmount: DevKit.Form.Controls.ControlMoney;
			/** Shows the total product amount for the quote, minus any discounts. This value is added to freight and tax amounts in the calculation for the total amount due for the quote. */
			TotalAmountLessFreight: DevKit.Form.Controls.ControlMoney;
			/** Shows the sum of all existing and write-in products included on the quote, based on the specified price list and quantities. */
			TotalLineItemAmount: DevKit.Form.Controls.ControlMoney;
			/** Shows the total of the Tax amounts specified on all products included in the quote, included in the Total Amount due calculation for the quote. */
			TotalTax: DevKit.Form.Controls.ControlMoney;
			/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
			TransactionCurrencyId: DevKit.Form.Controls.ControlLookup;
			/** Select whether the products included in the quote should be shipped to the specified address or held until the customer calls with further pick up or delivery instructions. */
			WillCall: DevKit.Form.Controls.ControlBoolean;
		}
		interface Navigation {
			navProducts: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_quote_msdyn_quotebookingincident_Quote: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_quote_msdyn_quotebookingproduct_Quote: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_quote_msdyn_quotebookingservice_Quote: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_quote_msdyn_quotebookingservicetask_Quote: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_quote_msdyn_quotebookingsetup_Quote: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_quote_msdyn_quoteinvoicingsetup_Quote: DevKit.Form.Controls.ControlNavigationItem
		}
	}
	class FormQuote extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form Quote
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Quote */
		Body: LuckyMokey.FormQuote.Body;
		/** The Header section of form Quote */
		Header: LuckyMokey.FormQuote.Header;
		/** The Navigation of form Quote */
		Navigation: LuckyMokey.FormQuote.Navigation;
	}
	namespace FormQuote {
		interface tab_newQuote_Sections {
			quickQuote_summary: DevKit.Form.Controls.ControlSection;
			quickQuote_salesinformation: DevKit.Form.Controls.ControlSection;
		}
		interface tab_newQuote extends DevKit.Form.Controls.IControlTab {
			Section: tab_newQuote_Sections;
		}
		interface Tabs {
			newQuote: tab_newQuote;
		}
		interface Body {
			Tab: Tabs;
			/** Select the customer account or contact to provide a quick link to additional customer details, such as account information, activities, and opportunities. */
			CustomerId: DevKit.Form.Controls.ControlLookup;
			/** Type additional information to describe the quote, such as the products or services offered or details about the customer's product preferences. */
			Description: DevKit.Form.Controls.ControlString;
			/** Type a descriptive name for the quote. */
			Name: DevKit.Form.Controls.ControlString;
			/** Choose the opportunity that the quote is related to for reporting and analytics. */
			OpportunityId: DevKit.Form.Controls.ControlLookup;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
			/** Choose the price list associated with this record to make sure the products associated with the campaign are offered at the correct prices. */
			PriceLevelId: DevKit.Form.Controls.ControlLookup;
			/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
			TransactionCurrencyId: DevKit.Form.Controls.ControlLookup;
		}
	}
	class FormQuote extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form Quote
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Quote */
		Body: LuckyMokey.FormQuote.Body;
	}
	class QuoteApi {
		/**
		* DynamicsCrm.DevKit QuoteApi
		* @param entity The entity object
		*/
		constructor(entity?: any);
		/**
		 * Get the value of alias
		 * @param alias the alias value
		 * @param isMultiOptionSet true if the alias is multi OptionSet
		 */
		getAliasedValue(alias: string, isMultiOptionSet?: boolean): any;
		/**
		 * Get the formatted value of alias
		 * @param alias the alias value
		 * @param isMultiOptionSet true if the alias is multi OptionSet
		 */
		getAliasedFormattedValue(alias: string, isMultiOptionSet?: boolean): string;
		/** The entity object */
		Entity: any;
		/** The entity name */
		EntityName: string;
		/** The entity collection name */
		EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependant on the fields that are retrieved */
		"@odata.etag": string;
		/** Unique identifier of the account with which the quote is associated. */
		AccountId: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the billing address. */
		BillTo_AddressId: DevKit.WebApi.GuidValue;
		/** Type the city for the customer's billing address. */
		BillTo_City: DevKit.WebApi.StringValue;
		/** Shows the complete Bill To address. */
		BillTo_Composite: DevKit.WebApi.StringValueReadonly;
		/** Type the primary contact name at the customer's billing address. */
		BillTo_ContactName: DevKit.WebApi.StringValue;
		/** Type the country or region for the customer's billing address. */
		BillTo_Country: DevKit.WebApi.StringValue;
		/** Type the fax number for the customer's billing address. */
		BillTo_Fax: DevKit.WebApi.StringValue;
		/** Type the first line of the customer's billing address. */
		BillTo_Line1: DevKit.WebApi.StringValue;
		/** Type the second line of the customer's billing address. */
		BillTo_Line2: DevKit.WebApi.StringValue;
		/** Type the third line of the billing address. */
		BillTo_Line3: DevKit.WebApi.StringValue;
		/** Type a name for the customer's billing address, such as "Headquarters" or "Field office", to identify the address. */
		BillTo_Name: DevKit.WebApi.StringValue;
		/** Type the ZIP Code or postal code for the billing address. */
		BillTo_PostalCode: DevKit.WebApi.StringValue;
		/** Type the state or province for the billing address. */
		BillTo_StateOrProvince: DevKit.WebApi.StringValue;
		/** Type the phone number for the customer's billing address. */
		BillTo_Telephone: DevKit.WebApi.StringValue;
		/** Shows the campaign that the order was created from. */
		CampaignId: DevKit.WebApi.LookupValue;
		/** Enter the date when the quote was closed to indicate the expiration, revision, or cancellation date. */
		ClosedOn_DateOnly: DevKit.WebApi.DateOnlyValue;
		/** Unique identifier of the contact associated with the quote. */
		ContactId: DevKit.WebApi.LookupValueReadonly;
		/** Shows who created the record. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows who created the record on behalf of another user. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		customerid_account: DevKit.WebApi.LookupValue;
		customerid_contact: DevKit.WebApi.LookupValue;
		/** Type additional information to describe the quote, such as the products or services offered or details about the customer's product preferences. */
		Description: DevKit.WebApi.StringValue;
		/** Type the discount amount for the quote if the customer is eligible for special savings. */
		DiscountAmount: DevKit.WebApi.MoneyValue;
		/** Value of the Quote Discount Amount in base currency. */
		DiscountAmount_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Type the discount rate that should be applied to the Detail Amount field to include additional savings for the customer in the quote. */
		DiscountPercentage: DevKit.WebApi.DecimalValue;
		/** Enter the date when the quote pricing is effective or was first communicated to the customer. */
		EffectiveFrom_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Enter the expiration date or last day the quote pricing is effective for the customer. */
		EffectiveTo_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** The primary email address for the entity. */
		EmailAddress: DevKit.WebApi.StringValue;
		/** Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency. */
		ExchangeRate: DevKit.WebApi.DecimalValueReadonly;
		/** Enter the date a decision or order is due from the customer to indicate the expiration date of the quote. */
		ExpiresOn_DateOnly: DevKit.WebApi.DateOnlyValue;
		/** Type the cost of freight or shipping for the products included in the quote for use in calculating the Total Amount field. */
		FreightAmount: DevKit.WebApi.MoneyValue;
		/** Value of the Freight Amount in base currency. */
		FreightAmount_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Select the freight terms to make sure shipping charges are processed correctly. */
		FreightTermsCode: DevKit.WebApi.OptionSetValue;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Contains the date time stamp of the last on hold time. */
		LastOnHoldTime_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Shows who last updated the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows who last updated the record on behalf of another user. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Customer Account associated with this Quote */
		msdyn_Account: DevKit.WebApi.LookupValue;
		/** Account manager responsible for the quote. */
		msdyn_AccountManagerId: DevKit.WebApi.LookupValue;
		/** Shows the estimated gross margin after accounting for non-chargeable components. */
		msdyn_AdjustedGrossMargin: DevKit.WebApi.DecimalValueReadonly;
		/** Shows how the quote estimation of sales value and schedule compare to customer expectations on those parameters. Possible values are 1: Within Customer expectations, 2: Not Within Customer expectations, and 0: Customer expectations Not Available. */
		msdyn_Competitive: DevKit.WebApi.OptionSetValueReadonly;
		/** The organizational unit in charge of the contract. */
		msdyn_ContractOrganizationalUnitId: DevKit.WebApi.LookupValue;
		/** Shows the total customer budget for the quote, computed from all the quote lines. */
		msdyn_CustomerBudgetRollUp: DevKit.WebApi.MoneyValueReadonly;
		/** Shows the value of the customer budget in the base currency. */
		msdyn_customerbudgetrollup_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Last Updated time of rollup field Customer Budget. */
		msdyn_CustomerBudgetRollUp_Date_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** State of rollup field Customer Budget. */
		msdyn_CustomerBudgetRollUp_State: DevKit.WebApi.IntegerValueReadonly;
		/** Shows how the estimated sales value on the quote compares to customer budgets. Possible values are 1: Within Customer Budget, 2: Exceeds Customer Budget, 0: Budget Estimate Not Available */
		msdyn_EstimatedBudget: DevKit.WebApi.OptionSetValueReadonly;
		/** Estimated completion date, computed from the details of each quote line. */
		msdyn_EstimatedCompletionRollUp_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValueReadonly;
		/** Last Updated time of rollup field Estimated Completion. */
		msdyn_EstimatedCompletionRollUp_Date_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** State of rollup field Estimated Completion. */
		msdyn_EstimatedCompletionRollUp_State: DevKit.WebApi.IntegerValueReadonly;
		/** The estimated cost of this quote */
		msdyn_EstimatedCost: DevKit.WebApi.MoneyValue;
		/** Value of the Estimated Cost in base currency. */
		msdyn_estimatedcost_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Estimated Margin of this quote */
		msdyn_EstimatedQuoteMargin: DevKit.WebApi.DecimalValueReadonly;
		/** Shows how the estimated schedule on the quote compares to customer expectations. Possible values are 1: Estimated To Finish Early, 2: Estimated To Finish Late, 3: Estimated To Finish On Schedule, and 0: Schedule Not Available. */
		msdyn_EstimatedSchedule: DevKit.WebApi.OptionSetValueReadonly;
		/** Shows how the quote estimation compares to project estimation. Possible values are 0: Feasibility Not Available, 1: Feasible, and 2: Not Feasible. */
		msdyn_feasible: DevKit.WebApi.OptionSetValue;
		/** Shows the estimated gross margin without accounting for non-chargeable components. */
		msdyn_GrossMargin: DevKit.WebApi.DecimalValueReadonly;
		/** The totals of all assigned Invoice Setups */
		msdyn_InvoiceSetupTotals: DevKit.WebApi.MoneyValue;
		/** Value of the Invoice Setup Totals in base currency. */
		msdyn_invoicesetuptotals_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Internal use only. */
		msdyn_OrderType: DevKit.WebApi.OptionSetValue;
		/** Shows the estimated profitability of the quote. Possible values are Profitable, Not Profitable, and Profitability not available. */
		msdyn_Profitability: DevKit.WebApi.OptionSetValueReadonly;
		/** The latest end date of all associated quote lines */
		msdyn_QuoteLineEndDate_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** The earliest Start Date of all Quote Lines that are associated to this quote */
		msdyn_QuoteLineStartDate_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		msdyn_TotalAmount: DevKit.WebApi.MoneyValueReadonly;
		/** Value of the TotalAmount in base currency. */
		msdyn_totalamount_Base: DevKit.WebApi.MoneyValueReadonly;
		msdyn_TotalChargeableCostRollup: DevKit.WebApi.MoneyValueReadonly;
		/** Value of the Total Chargeable Cost in base currency. */
		msdyn_totalchargeablecostrollup_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Last Updated time of rollup field Total Chargeable Cost. */
		msdyn_TotalChargeableCostRollup_Date_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** State of rollup field Total Chargeable Cost. */
		msdyn_TotalChargeableCostRollup_State: DevKit.WebApi.IntegerValueReadonly;
		msdyn_TotalNonchargeableCostRollup: DevKit.WebApi.MoneyValueReadonly;
		/** Value of the Total Non-chargeable Cost in base currency. */
		msdyn_totalnonchargeablecostrollup_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Last Updated time of rollup field Total Non-chargeable Cost. */
		msdyn_TotalNonchargeableCostRollup_Date_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** State of rollup field Total Non-chargeable Cost. */
		msdyn_TotalNonchargeableCostRollup_State: DevKit.WebApi.IntegerValueReadonly;
		/** Type a descriptive name for the quote. */
		Name: DevKit.WebApi.StringValue;
		/** Shows the duration in minutes for which the quote was on hold. */
		OnHoldTime: DevKit.WebApi.IntegerValueReadonly;
		/** Choose the opportunity that the quote is related to for reporting and analytics. */
		OpportunityId: DevKit.WebApi.LookupValue;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: DevKit.WebApi.LookupValue;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: DevKit.WebApi.LookupValue;
		/** Unique identifier for the business unit that owns the record */
		OwningBusinessUnit: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier for the team that owns the record. */
		OwningTeam: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier for the user that owns the record. */
		OwningUser: DevKit.WebApi.LookupValueReadonly;
		/** Select the payment terms to indicate when the customer needs to pay the total amount. */
		PaymentTermsCode: DevKit.WebApi.OptionSetValue;
		/** Choose the price list associated with this record to make sure the products associated with the campaign are offered at the correct prices. */
		PriceLevelId: DevKit.WebApi.LookupValue;
		/** Pricing error for the quote. */
		PricingErrorCode: DevKit.WebApi.OptionSetValue;
		/** Contains the id of the process associated with the entity. */
		ProcessId: DevKit.WebApi.GuidValue;
		/** Unique identifier of the quote. */
		QuoteId: DevKit.WebApi.GuidValue;
		/** Shows the quote number for customer reference and searching capabilities. The number cannot be modified. */
		QuoteNumber: DevKit.WebApi.StringValue;
		/** Enter the delivery date requested by the customer for all products in the quote. */
		RequestDeliveryBy_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Shows the version number of the quote for revision history tracking. */
		RevisionNumber: DevKit.WebApi.IntegerValueReadonly;
		/** Select a shipping method for deliveries sent to this address. */
		ShippingMethodCode: DevKit.WebApi.OptionSetValue;
		/** Unique identifier of the shipping address. */
		ShipTo_AddressId: DevKit.WebApi.GuidValue;
		/** Type the city for the customer's shipping address. */
		ShipTo_City: DevKit.WebApi.StringValue;
		/** Shows the complete Ship To address. */
		ShipTo_Composite: DevKit.WebApi.StringValueReadonly;
		/** Type the primary contact name at the customer's shipping address. */
		ShipTo_ContactName: DevKit.WebApi.StringValue;
		/** Type the country or region for the customer's shipping address. */
		ShipTo_Country: DevKit.WebApi.StringValue;
		/** Type the fax number for the customer's shipping address. */
		ShipTo_Fax: DevKit.WebApi.StringValue;
		/** Select the freight terms to make sure shipping orders are processed correctly. */
		ShipTo_FreightTermsCode: DevKit.WebApi.OptionSetValue;
		/** Type the first line of the customer's shipping address. */
		ShipTo_Line1: DevKit.WebApi.StringValue;
		/** Type the second line of the customer's shipping address. */
		ShipTo_Line2: DevKit.WebApi.StringValue;
		/** Type the third line of the shipping address. */
		ShipTo_Line3: DevKit.WebApi.StringValue;
		/** Type a name for the customer's shipping address, such as "Headquarters" or "Field office",  to identify the address. */
		ShipTo_Name: DevKit.WebApi.StringValue;
		/** Type the ZIP Code or postal code for the shipping address. */
		ShipTo_PostalCode: DevKit.WebApi.StringValue;
		/** Type the state or province for the shipping address. */
		ShipTo_StateOrProvince: DevKit.WebApi.StringValue;
		/** Type the phone number for the customer's shipping address. */
		ShipTo_Telephone: DevKit.WebApi.StringValue;
		/** Skip Price Calculation (For Internal use) */
		SkipPriceCalculation: DevKit.WebApi.OptionSetValue;
		/** Choose the service level agreement (SLA) that you want to apply to the quote record. */
		SLAId: DevKit.WebApi.LookupValue;
		/** Last SLA that was applied to this quote. This field is for internal use only. */
		SLAInvokedId: DevKit.WebApi.LookupValueReadonly;
		SLAName: DevKit.WebApi.StringValueReadonly;
		/** Contains the id of the stage where the entity is located. */
		StageId: DevKit.WebApi.GuidValue;
		/** Shows whether the quote is draft, active, won, or closed. Only draft quotes can be edited. */
		StateCode: DevKit.WebApi.OptionSetValue;
		/** Select the quote's status. */
		StatusCode: DevKit.WebApi.OptionSetValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Shows the total amount due, calculated as the sum of the products, discounts, freight, and taxes for the quote. */
		TotalAmount: DevKit.WebApi.MoneyValue;
		/** Value of the Total Amount in base currency. */
		TotalAmount_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Shows the total product amount for the quote, minus any discounts. This value is added to freight and tax amounts in the calculation for the total amount due for the quote. */
		TotalAmountLessFreight: DevKit.WebApi.MoneyValue;
		/** Value of the Total Pre-Freight Amount in base currency. */
		TotalAmountLessFreight_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Shows the total discount amount, based on the discount price and rate entered on the quote. */
		TotalDiscountAmount: DevKit.WebApi.MoneyValue;
		/** Value of the Total Discount Amount in base currency. */
		TotalDiscountAmount_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Shows the sum of all existing and write-in products included on the quote, based on the specified price list and quantities. */
		TotalLineItemAmount: DevKit.WebApi.MoneyValue;
		/** Value of the Total Detail Amount in base currency. */
		TotalLineItemAmount_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Shows the total of the Manual Discount amounts specified on all products included in the quote. This value is reflected in the Detail Amount field on the quote and is added to any discount amount or rate specified on the quote */
		TotalLineItemDiscountAmount: DevKit.WebApi.MoneyValue;
		/** Value of the Total Line Item Discount Amount in base currency. */
		TotalLineItemDiscountAmount_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Shows the total of the Tax amounts specified on all products included in the quote, included in the Total Amount due calculation for the quote. */
		TotalTax: DevKit.WebApi.MoneyValue;
		/** Value of the Total Tax in base currency. */
		TotalTax_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
		TransactionCurrencyId: DevKit.WebApi.LookupValue;
		/** A comma separated list of string values representing the unique identifiers of stages in a Business Process Flow Instance in the order that they occur. */
		TraversedPath: DevKit.WebApi.StringValue;
		/** For internal use only. */
		UniqueDscId: DevKit.WebApi.GuidValueReadonly;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Version Number */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
		/** Select whether the products included in the quote should be shipped to the specified address or held until the customer calls with further pick up or delivery instructions. */
		WillCall: DevKit.WebApi.BooleanValue;
	}
}
declare namespace OptionSet {
	namespace Quote {
		enum FreightTermsCode {
			/** 1 */
			FOB,
			/** 2 */
			No_Charge
		}
		enum msdyn_Competitive {
			/** 192350000 */
			Customer_Budget_Not_Available,
			/** 192350001 */
			Within_Customer_Expectations,
			/** 192350002 */
			Outside_Customer_Expectations
		}
		enum msdyn_EstimatedBudget {
			/** 192350000 */
			Budget_Estimate_Not_Available,
			/** 192350001 */
			Within_Customer_Budget,
			/** 192350002 */
			Exceeds_Customer_Budget
		}
		enum msdyn_EstimatedSchedule {
			/** 192350000 */
			Schedule_Not_Available,
			/** 192350001 */
			Estimated_To_Finish_Early,
			/** 192350002 */
			Estimated_To_Finish_Late,
			/** 192350003 */
			Estimated_To_Finish_On_Schedule
		}
		enum msdyn_feasible {
			/** 192350000 */
			Feasibility_Not_Available,
			/** 192350001 */
			Feasible,
			/** 192350002 */
			Not_Feasible
		}
		enum msdyn_OrderType {
			/** 192350001 */
			Work_based,
			/** 192350000 */
			Item_based,
			/** 690970002 */
			Service_Maintenance_Based
		}
		enum msdyn_Profitability {
			/** 192350000 */
			Profitability_Not_Available,
			/** 192350001 */
			Profitable,
			/** 192350002 */
			Not_Profitable
		}
		enum PaymentTermsCode {
			/** 1 */
			Net_30,
			/** 2 */
			_2_10_Net_30,
			/** 3 */
			Net_45,
			/** 4 */
			Net_60
		}
		enum PricingErrorCode {
			/** 0 */
			None,
			/** 1 */
			Detail_Error,
			/** 2 */
			Missing_Price_Level,
			/** 3 */
			Inactive_Price_Level,
			/** 4 */
			Missing_Quantity,
			/** 5 */
			Missing_Unit_Price,
			/** 6 */
			Missing_Product,
			/** 7 */
			Invalid_Product,
			/** 8 */
			Missing_Pricing_Code,
			/** 9 */
			Invalid_Pricing_Code,
			/** 10 */
			Missing_UOM,
			/** 11 */
			Product_Not_In_Price_Level,
			/** 12 */
			Missing_Price_Level_Amount,
			/** 13 */
			Missing_Price_Level_Percentage,
			/** 14 */
			Missing_Price,
			/** 15 */
			Missing_Current_Cost,
			/** 16 */
			Missing_Standard_Cost,
			/** 17 */
			Invalid_Price_Level_Amount,
			/** 18 */
			Invalid_Price_Level_Percentage,
			/** 19 */
			Invalid_Price,
			/** 20 */
			Invalid_Current_Cost,
			/** 21 */
			Invalid_Standard_Cost,
			/** 22 */
			Invalid_Rounding_Policy,
			/** 23 */
			Invalid_Rounding_Option,
			/** 24 */
			Invalid_Rounding_Amount,
			/** 25 */
			Price_Calculation_Error,
			/** 26 */
			Invalid_Discount_Type,
			/** 27 */
			Discount_Type_Invalid_State,
			/** 28 */
			Invalid_Discount,
			/** 29 */
			Invalid_Quantity,
			/** 30 */
			Invalid_Pricing_Precision,
			/** 31 */
			Missing_Product_Default_UOM,
			/** 32 */
			Missing_Product_UOM_Schedule_,
			/** 33 */
			Inactive_Discount_Type,
			/** 34 */
			Invalid_Price_Level_Currency,
			/** 35 */
			Price_Attribute_Out_Of_Range,
			/** 36 */
			Base_Currency_Attribute_Overflow,
			/** 37 */
			Base_Currency_Attribute_Underflow,
			/** 38 */
			Transaction_currency_is_not_set_for_the_product_price_list_item
		}
		enum ShippingMethodCode {
			/** 1 */
			Airborne,
			/** 2 */
			DHL,
			/** 3 */
			FedEx,
			/** 4 */
			UPS,
			/** 5 */
			Postal_Mail,
			/** 6 */
			Full_Load,
			/** 7 */
			Will_Call
		}
		enum ShipTo_FreightTermsCode {
			/** 1 */
			Default_Value
		}
		enum SkipPriceCalculation {
			/** 0 */
			DoPriceCalcAlways,
			/** 1 */
			SkipPriceCalcOnRetrieve
		}
		enum StateCode {
			/** 0 */
			Draft,
			/** 1 */
			Active,
			/** 2 */
			Won,
			/** 3 */
			Closed
		}
		enum StatusCode {
			/** 2,1 */
			In_Progress,
			/** 3 */
			Open,
			/** 4 */
			Won,
			/** 5 */
			Lost,
			/** 6 */
			Canceled,
			/** 7 */
			Revised
		}
        enum RollupState {
            /** 0 - Attribute value is yet to be calculated */
            NotCalculated,
            /** 1 - Attribute value has been calculated per the last update time in <AttributeSchemaName>_Date attribute */
            Calculated,
            /** 2 - Attribute value calculation lead to overflow error */
            OverflowError,
            /** 3 - Attribute value calculation failed due to an internal error, next run of calculation job will likely fix it */
            OtherError,
            /** 4 - Attribute value calculation failed because the maximum number of retry attempts to calculate the value were exceeded likely due to high number of concurrency and locking conflicts */
            RetryLimitExceeded,
            /** 5 - Attribute value calculation failed because maximum hierarchy depth limit for calculation was reached */
            HierarchicalRecursionLimitReached,
            /** 6 - Attribute value calculation failed because a recursive loop was detected in the hierarchy of the record */
            LoopDetected
        }
	}
}
//{'JsForm':['Quote','Quote'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}