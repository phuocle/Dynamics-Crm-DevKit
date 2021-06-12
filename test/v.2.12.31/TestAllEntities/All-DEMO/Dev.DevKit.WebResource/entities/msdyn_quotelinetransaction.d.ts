//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_quotelinetransaction_Project_Information {
		interface tab__1C4A4B53_14D2_4079_9D6A_4FD07D7E8A2B_Sections {
			AmountSection: DevKit.Controls.Section;
			BillingSection: DevKit.Controls.Section;
			DateSection: DevKit.Controls.Section;
			GeneralSection: DevKit.Controls.Section;
			ProductResourceSection: DevKit.Controls.Section;
			ProjectSection: DevKit.Controls.Section;
			QuantitySection: DevKit.Controls.Section;
			VendorSection: DevKit.Controls.Section;
		}
		interface tab_SummaryTab_Sections {
			SummaryTab_section_2: DevKit.Controls.Section;
			SummaryTab_section_3: DevKit.Controls.Section;
			tab_2_section_1: DevKit.Controls.Section;
		}
		interface tab__1C4A4B53_14D2_4079_9D6A_4FD07D7E8A2B extends DevKit.Controls.ITab {
			Section: tab__1C4A4B53_14D2_4079_9D6A_4FD07D7E8A2B_Sections;
		}
		interface tab_SummaryTab extends DevKit.Controls.ITab {
			Section: tab_SummaryTab_Sections;
		}
		interface Tabs {
			_1C4A4B53_14D2_4079_9D6A_4FD07D7E8A2B: tab__1C4A4B53_14D2_4079_9D6A_4FD07D7E8A2B;
			SummaryTab: tab_SummaryTab;
		}
		interface Body {
			Tab: Tabs;
			/** Select the name of the customer account. */
			msdyn_AccountCustomer: DevKit.Controls.Lookup;
			msdyn_AccountVendor: DevKit.Controls.Lookup;
			/** Enter the amount on the quote line estimate. */
			msdyn_Amount: DevKit.Controls.Money;
			/** Enter the amount on the quote line estimate. */
			msdyn_Amount_1: DevKit.Controls.Money;
			msdyn_amount_after_tax: DevKit.Controls.Money;
			/** Select the calculation method used for the amount on the estimate line. Valid methods are: Multiply Quantity By Price, Fixed Price, Multiply Basis Quantity By Price, Multiply Basis Amount By Percent */
			msdyn_AmountMethod: DevKit.Controls.OptionSet;
			msdyn_BasisAmount: DevKit.Controls.Money;
			msdyn_BasisQuantity: DevKit.Controls.Decimal;
			/** Select whether this quote line estimate will be charged to the customer or not. Only chargeable transactions will add to the invoice total */
			msdyn_BillingType: DevKit.Controls.OptionSet;
			/** Select whether this quote line estimate will be charged to the customer or not. Only chargeable transactions will add to the invoice total */
			msdyn_BillingType_1: DevKit.Controls.OptionSet;
			/** Shows the resource. */
			msdyn_bookableresource: DevKit.Controls.Lookup;
			/** Select the contact customer on the quote. */
			msdyn_ContactCustomer: DevKit.Controls.Lookup;
			msdyn_ContactVendor: DevKit.Controls.Lookup;
			/** Select whether the customer is an account or a contact  */
			msdyn_CustomerType: DevKit.Controls.OptionSet;
			/** Type the name of the custom entity. */
			msdyn_description: DevKit.Controls.String;
			/** Type the name of the custom entity. */
			msdyn_description_1: DevKit.Controls.String;
			/** Enter the date that the invoice is sent to the customer. Only relevant on invoice and invoice line transactions */
			msdyn_DocumentDate: DevKit.Controls.Date;
			/** Enter the end date of the work being estimated on the quote line estimate. */
			msdyn_EndDateTime: DevKit.Controls.Date;
			/** Enter the end date of the work being estimated on the quote line estimate. */
			msdyn_EndDateTime_1: DevKit.Controls.Date;
			/** Points to the quote line detail that originated an entry. For example, a revenue entry points to its related cost entry. */
			msdyn_Origin: DevKit.Controls.Lookup;
			/** Enter the amount, in percent, to multiply the basis by. This field is relevant when the amount calculation method is "Multiply basis amount by percent." */
			msdyn_Percent: DevKit.Controls.Decimal;
			/** Enter the price on the quote line estimate. */
			msdyn_Price: DevKit.Controls.Money;
			/** Enter the price on the quote line estimate. */
			msdyn_Price_1: DevKit.Controls.Money;
			/** Select the price List used to default price on the estimate line. */
			msdyn_PriceList: DevKit.Controls.Lookup;
			/** Select the price List used to default price on the estimate line. */
			msdyn_PriceList_1: DevKit.Controls.Lookup;
			/** Select the product on the quote line estimate. */
			msdyn_Product: DevKit.Controls.Lookup;
			/** Select the project being referenced by the quote line estimate. */
			msdyn_Project: DevKit.Controls.Lookup;
			/** Enter the quantity on the quote line estimate. */
			msdyn_Quantity: DevKit.Controls.Decimal;
			/** Enter the quantity on the quote line estimate. */
			msdyn_Quantity_1: DevKit.Controls.Decimal;
			/** Select the denormalized reference to the quote. This is used for performance improvements and to allow the use of Power BI on a quote. */
			msdyn_QuoteId: DevKit.Controls.Lookup;
			/** Select the denormalized reference to the quote. This is used for performance improvements and to allow the use of Power BI on a quote. */
			msdyn_QuoteId_1: DevKit.Controls.Lookup;
			/** Unique identifier for Quote Line to which this estimate line belongs to. */
			msdyn_quotelineid: DevKit.Controls.Lookup;
			/** Select the role on the quote line estimate. */
			msdyn_ResourceCategory: DevKit.Controls.Lookup;
			/** Select the role on the quote line estimate. */
			msdyn_ResourceCategory_1: DevKit.Controls.Lookup;
			/** Select the organizational unit of the resource who should perform the work. */
			msdyn_ResourceOrganizationalUnitId: DevKit.Controls.Lookup;
			/** Enter the estimated start of the work being estimated on the quote line estimate. */
			msdyn_StartDateTime: DevKit.Controls.Date;
			/** Enter the estimated start of the work being estimated on the quote line estimate. */
			msdyn_StartDateTime_1: DevKit.Controls.Date;
			/** Select the project work breakdown structure (WBS) task referenced by the quote line estimate. */
			msdyn_Task: DevKit.Controls.Lookup;
			msdyn_tax: DevKit.Controls.Money;
			/** Select the category on the quote line estimate. */
			msdyn_TransactionCategory: DevKit.Controls.Lookup;
			/** Select the category on the quote line estimate. */
			msdyn_TransactionCategory_1: DevKit.Controls.Lookup;
			/** Transaction classification for the quote line */
			msdyn_TransactionClassification: DevKit.Controls.OptionSet;
			/** Transaction classification for the quote line */
			msdyn_TransactionClassification_1: DevKit.Controls.OptionSet;
			/** Shows the transaction type for this quote line. */
			msdyn_TransactionTypeCode: DevKit.Controls.OptionSet;
			/** Shows the transaction type for this quote line. */
			msdyn_TransactionTypeCode_1: DevKit.Controls.OptionSet;
			/** Select the unit that the quantity is estimated in on this quote line estimate. */
			msdyn_Unit: DevKit.Controls.Lookup;
			/** Select the unit that the quantity is estimated in on this quote line estimate. */
			msdyn_Unit_1: DevKit.Controls.Lookup;
			/** Select the unit schedule associated with the estimate line. */
			msdyn_UnitSchedule: DevKit.Controls.Lookup;
			msdyn_VendorType: DevKit.Controls.OptionSet;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Shows the currency associated with the entity. */
			TransactionCurrencyId: DevKit.Controls.Lookup;
		}
	}
	class Formmsdyn_quotelinetransaction_Project_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_quotelinetransaction_Project_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_quotelinetransaction_Project_Information */
		Body: DevKit.Formmsdyn_quotelinetransaction_Project_Information.Body;
	}
	namespace Formmsdyn_quotelinetransaction_Project_Quick_Create {
		interface tab_tab_1_Sections {
			tab_1_column_1_section_1: DevKit.Controls.Section;
			tab_1_column_2_section_1: DevKit.Controls.Section;
			tab_1_column_3_section_1: DevKit.Controls.Section;
		}
		interface tab_tab_1 extends DevKit.Controls.ITab {
			Section: tab_tab_1_Sections;
		}
		interface Tabs {
			tab_1: tab_tab_1;
		}
		interface Body {
			Tab: Tabs;
			/** Enter the amount on the quote line estimate. */
			msdyn_Amount: DevKit.Controls.Money;
			/** Type the name of the custom entity. */
			msdyn_description: DevKit.Controls.String;
			/** Enter the end date of the work being estimated on the quote line estimate. */
			msdyn_EndDateTime: DevKit.Controls.Date;
			/** Enter the price on the quote line estimate. */
			msdyn_Price: DevKit.Controls.Money;
			/** Enter the quantity on the quote line estimate. */
			msdyn_Quantity: DevKit.Controls.Decimal;
			/** Select the denormalized reference to the quote. This is used for performance improvements and to allow the use of Power BI on a quote. */
			msdyn_QuoteId: DevKit.Controls.Lookup;
			/** Select the role on the quote line estimate. */
			msdyn_ResourceCategory: DevKit.Controls.Lookup;
			/** Select the organizational unit of the resource who should perform the work. */
			msdyn_ResourceOrganizationalUnitId: DevKit.Controls.Lookup;
			/** Enter the estimated start of the work being estimated on the quote line estimate. */
			msdyn_StartDateTime: DevKit.Controls.Date;
			msdyn_tax: DevKit.Controls.Money;
			/** Select the category on the quote line estimate. */
			msdyn_TransactionCategory: DevKit.Controls.Lookup;
			/** Transaction classification for the quote line */
			msdyn_TransactionClassification: DevKit.Controls.OptionSet;
			/** Shows the transaction type for this quote line. */
			msdyn_TransactionTypeCode: DevKit.Controls.OptionSet;
			/** Select the unit that the quantity is estimated in on this quote line estimate. */
			msdyn_Unit: DevKit.Controls.Lookup;
			/** Select the unit schedule associated with the estimate line. */
			msdyn_UnitSchedule: DevKit.Controls.Lookup;
		}
	}
	class Formmsdyn_quotelinetransaction_Project_Quick_Create extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_quotelinetransaction_Project_Quick_Create
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_quotelinetransaction_Project_Quick_Create */
		Body: DevKit.Formmsdyn_quotelinetransaction_Project_Quick_Create.Body;
	}
	class msdyn_quotelinetransactionApi {
		/**
		* DynamicsCrm.DevKit msdyn_quotelinetransactionApi
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
		/** Unique identifier of the user who created the record. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the record. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Exchange rate for the currency associated with the entity with respect to the base currency. */
		ExchangeRate: DevKit.WebApi.DecimalValueReadonly;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the user who modified the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who modified the record. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Select the name of the customer account. */
		msdyn_AccountCustomer: DevKit.WebApi.LookupValue;
		msdyn_AccountingDate_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		msdyn_AccountVendor: DevKit.WebApi.LookupValue;
		/** Enter the amount on the quote line estimate. */
		msdyn_Amount: DevKit.WebApi.MoneyValue;
		msdyn_amount_after_tax: DevKit.WebApi.MoneyValueReadonly;
		/** Value of the amount_after_tax in base currency. */
		msdyn_amount_after_tax_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Value of the Amount in base currency. */
		msdyn_amount_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Select the calculation method used for the amount on the estimate line. Valid methods are: Multiply Quantity By Price, Fixed Price, Multiply Basis Quantity By Price, Multiply Basis Amount By Percent */
		msdyn_AmountMethod: DevKit.WebApi.OptionSetValue;
		msdyn_BasisAmount: DevKit.WebApi.MoneyValue;
		/** Value of the Basis Amount in base currency. */
		msdyn_basisamount_Base: DevKit.WebApi.MoneyValueReadonly;
		msdyn_BasisPrice: DevKit.WebApi.MoneyValue;
		/** Value of the Basis Price in base currency. */
		msdyn_basisprice_Base: DevKit.WebApi.MoneyValueReadonly;
		msdyn_BasisQuantity: DevKit.WebApi.DecimalValue;
		/** Select whether this quote line estimate will be charged to the customer or not. Only chargeable transactions will add to the invoice total */
		msdyn_BillingType: DevKit.WebApi.OptionSetValue;
		/** Shows the resource. */
		msdyn_bookableresource: DevKit.WebApi.LookupValue;
		/** Select the contact customer on the quote. */
		msdyn_ContactCustomer: DevKit.WebApi.LookupValue;
		msdyn_ContactVendor: DevKit.WebApi.LookupValue;
		/** Select whether the customer is an account or a contact  */
		msdyn_CustomerType: DevKit.WebApi.OptionSetValue;
		/** Type the name of the custom entity. */
		msdyn_description: DevKit.WebApi.StringValue;
		/** Enter the date that the invoice is sent to the customer. Only relevant on invoice and invoice line transactions */
		msdyn_DocumentDate_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Enter the end date of the work being estimated on the quote line estimate. */
		msdyn_EndDateTime_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		msdyn_ExchangeRateDate_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Indicates if this record was created via import. It's purpose is to support data import. */
		msdyn_isdataimport: DevKit.WebApi.BooleanValue;
		/** Points to the quote line detail that originated an entry. For example, a revenue entry points to its related cost entry. */
		msdyn_Origin: DevKit.WebApi.LookupValue;
		/** Enter the amount, in percent, to multiply the basis by. This field is relevant when the amount calculation method is "Multiply basis amount by percent." */
		msdyn_Percent: DevKit.WebApi.DecimalValue;
		/** Enter the price on the quote line estimate. */
		msdyn_Price: DevKit.WebApi.MoneyValue;
		/** Value of the Price in base currency. */
		msdyn_price_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Select the price List used to default price on the estimate line. */
		msdyn_PriceList: DevKit.WebApi.LookupValue;
		/** Select the product on the quote line estimate. */
		msdyn_Product: DevKit.WebApi.LookupValue;
		/** Select the project being referenced by the quote line estimate. */
		msdyn_Project: DevKit.WebApi.LookupValue;
		/** Enter the quantity on the quote line estimate. */
		msdyn_Quantity: DevKit.WebApi.DecimalValue;
		/** Select the denormalized reference to the quote. This is used for performance improvements and to allow the use of Power BI on a quote. */
		msdyn_QuoteId: DevKit.WebApi.LookupValue;
		/** (Deprecated) Type the quote line to which this estimate line belongs to. */
		msdyn_QuoteLine: DevKit.WebApi.StringValue;
		/** Unique identifier for Quote Line to which this estimate line belongs to. */
		msdyn_quotelineid: DevKit.WebApi.LookupValue;
		/** Unique identifier for entity instances */
		msdyn_quotelinetransactionId: DevKit.WebApi.GuidValue;
		/** Select the role on the quote line estimate. */
		msdyn_ResourceCategory: DevKit.WebApi.LookupValue;
		/** Select the organizational unit of the resource who should perform the work. */
		msdyn_ResourceOrganizationalUnitId: DevKit.WebApi.LookupValue;
		/** Enter the estimated start of the work being estimated on the quote line estimate. */
		msdyn_StartDateTime_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Select the project work breakdown structure (WBS) task referenced by the quote line estimate. */
		msdyn_Task: DevKit.WebApi.LookupValue;
		msdyn_tax: DevKit.WebApi.MoneyValue;
		/** Value of the tax in base currency. */
		msdyn_tax_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Select the category on the quote line estimate. */
		msdyn_TransactionCategory: DevKit.WebApi.LookupValue;
		/** Transaction classification for the quote line */
		msdyn_TransactionClassification: DevKit.WebApi.OptionSetValue;
		/** Shows the transaction type for this quote line. */
		msdyn_TransactionTypeCode: DevKit.WebApi.OptionSetValue;
		/** Select the unit that the quantity is estimated in on this quote line estimate. */
		msdyn_Unit: DevKit.WebApi.LookupValue;
		/** Select the unit schedule associated with the estimate line. */
		msdyn_UnitSchedule: DevKit.WebApi.LookupValue;
		msdyn_VendorType: DevKit.WebApi.OptionSetValue;
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
		/** Status of the Quote Line Detail */
		statecode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the Quote Line Detail */
		statuscode: DevKit.WebApi.OptionSetValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Shows the currency associated with the entity. */
		TransactionCurrencyId: DevKit.WebApi.LookupValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Version Number */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace msdyn_quotelinetransaction {
		enum msdyn_AmountMethod {
			/** 192350001 */
			Fixed_Price,
			/** 192350003 */
			Multiply_Basis_Amount_By_Percent,
			/** 192350002 */
			Multiply_Basis_Quantity_By_Price,
			/** 192350000 */
			Multiply_Quantity_By_Price,
			/** 690970000 */
			Tax_Calculation
		}
		enum msdyn_BillingType {
			/** 192350001 */
			Chargeable,
			/** 192350002 */
			Complimentary,
			/** 192350000 */
			Non_Chargeable,
			/** 192350003 */
			Not_Available
		}
		enum msdyn_CustomerType {
			/** 192350001 */
			Account,
			/** 192350002 */
			Contact
		}
		enum msdyn_TransactionClassification {
			/** 690970001 */
			Additional,
			/** 690970000 */
			Commission,
			/** 192350001 */
			Expense,
			/** 192350004 */
			Fee,
			/** 192350002 */
			Material,
			/** 192350003 */
			Milestone,
			/** 690970002 */
			Tax,
			/** 192350000 */
			Time
		}
		enum msdyn_TransactionTypeCode {
			/** 192350006 */
			Billed_Sales,
			/** 192350000 */
			Cost,
			/** 192350008 */
			Inter_Organizational_Sales,
			/** 192350004 */
			Project_Contract,
			/** 192350007 */
			Resourcing_Unit_Cost,
			/** 192350005 */
			Unbilled_Sales
		}
		enum msdyn_VendorType {
			/** 192350001 */
			Account,
			/** 192350002 */
			Contact
		}
		enum statecode {
			/** 0 */
			Active,
			/** 1 */
			Inactive
		}
		enum statuscode {
			/** 1 */
			Active,
			/** 2 */
			Inactive
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
//{'JsForm':['Project Information','Quick Create'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true,'Version':'2.12.31','JsFormVersion':'v2'}