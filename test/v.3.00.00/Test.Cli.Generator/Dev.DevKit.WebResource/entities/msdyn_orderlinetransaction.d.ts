//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_orderlinetransaction_Project_Information {
		interface tab__8C79EFB9_B8BB_4A4A_B617_0CE1C5C65186_Sections {
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
		interface tab__8C79EFB9_B8BB_4A4A_B617_0CE1C5C65186 extends DevKit.Controls.ITab {
			Section: tab__8C79EFB9_B8BB_4A4A_B617_0CE1C5C65186_Sections;
		}
		interface tab_SummaryTab extends DevKit.Controls.ITab {
			Section: tab_SummaryTab_Sections;
		}
		interface Tabs {
			_8C79EFB9_B8BB_4A4A_B617_0CE1C5C65186: tab__8C79EFB9_B8BB_4A4A_B617_0CE1C5C65186;
			SummaryTab: tab_SummaryTab;
		}
		interface Body {
			Tab: Tabs;
			/** Select the customer who this contract belongs to.  */
			msdyn_AccountCustomer: DevKit.Controls.Lookup;
			msdyn_AccountVendor: DevKit.Controls.Lookup;
			/** Enter the amount on the project contract line estimate. */
			msdyn_Amount: DevKit.Controls.Money;
			/** Enter the amount on the project contract line estimate. */
			msdyn_Amount1: DevKit.Controls.Money;
			msdyn_amount_after_tax: DevKit.Controls.Money;
			/** Select the amount calculation method used for this project contract estimate line. Valid values are: 
0: Multiply Quantity By Price
1: Fixed Price
2: Multiply Basis Quantity By Price
3: Multiply Basis Amount By Percent  */
			msdyn_AmountMethod: DevKit.Controls.OptionSet;
			msdyn_BasisAmount: DevKit.Controls.Money;
			msdyn_BasisQuantity: DevKit.Controls.Decimal;
			/** Select whether this project contract line estimate will be charged to the customer or not. Only chargeable project contract line estimates will add to the invoice total */
			msdyn_BillingType: DevKit.Controls.OptionSet;
			/** Select whether this project contract line estimate will be charged to the customer or not. Only chargeable project contract line estimates will add to the invoice total */
			msdyn_BillingType1: DevKit.Controls.OptionSet;
			/** Shows the resource. */
			msdyn_bookableresource: DevKit.Controls.Lookup;
			/** Select the customer contact of this Project Contract. */
			msdyn_ContactCustomer: DevKit.Controls.Lookup;
			msdyn_ContactVendor: DevKit.Controls.Lookup;
			/** Select whether the customer was a account or a contact */
			msdyn_CustomerType: DevKit.Controls.OptionSet;
			/** Type a description of the project contract line estimate */
			msdyn_description: DevKit.Controls.String;
			/** Type a description of the project contract line estimate */
			msdyn_description1: DevKit.Controls.String;
			/** Enter the document date. */
			msdyn_DocumentDate: DevKit.Controls.Date;
			/** Enter the end date on the project contract line estimate. */
			msdyn_EndDateTime: DevKit.Controls.Date;
			/** Enter the end date on the project contract line estimate. */
			msdyn_EndDateTime1: DevKit.Controls.Date;
			/** Foreign key to the detail line that originated this entry. For example, revenue line points to it's related cost line. */
			msdyn_Origin: DevKit.Controls.Lookup;
			/** Relevant when amount calculation method on the Project Contract line transactions is "Multiply basis amount by percent" */
			msdyn_Percent: DevKit.Controls.Decimal;
			/** Enter the price on the project contract line estimate. */
			msdyn_Price: DevKit.Controls.Money;
			/** Enter the price on the project contract line estimate. */
			msdyn_Price1: DevKit.Controls.Money;
			/** Select the price list used for defaulting price on this project contract line estimate. */
			msdyn_PriceList: DevKit.Controls.Lookup;
			/** Select the price list used for defaulting price on this project contract line estimate. */
			msdyn_PriceList1: DevKit.Controls.Lookup;
			/** Select the product on this project contract line estimate. */
			msdyn_Product: DevKit.Controls.Lookup;
			/** Select the name of the project on the project contract estimate line. */
			msdyn_Project: DevKit.Controls.Lookup;
			/** Enter the quantity of the project contract line estimate. */
			msdyn_Quantity: DevKit.Controls.Decimal;
			/** Enter the quantity of the project contract line estimate. */
			msdyn_Quantity1: DevKit.Controls.Decimal;
			/** Select the name of the role that is estimated to perform this work. */
			msdyn_ResourceCategory: DevKit.Controls.Lookup;
			/** Select the name of the role that is estimated to perform this work. */
			msdyn_ResourceCategory1: DevKit.Controls.Lookup;
			/** Select the organizational unit of the resource who is estimated to perform the work. */
			msdyn_ResourceOrganizationalUnitId: DevKit.Controls.Lookup;
			/** Select the project contract that this estimate line is for. */
			msdyn_SalesContract: DevKit.Controls.Lookup;
			/** Select the project contract that this estimate line is for. */
			msdyn_SalesContract1: DevKit.Controls.Lookup;
			/** Unique identifier for Project Contract Line associated with Project Contract Line Detail. */
			msdyn_SalesContractLineId: DevKit.Controls.Lookup;
			/** Enter the estimate start date of the portion of work that is being estimated on the project contract estimate line. */
			msdyn_StartDateTime: DevKit.Controls.Date;
			/** Enter the estimate start date of the portion of work that is being estimated on the project contract estimate line. */
			msdyn_StartDateTime1: DevKit.Controls.Date;
			/** Select the name of the work breakdown structure (WBS) task on the project contract line estimate. */
			msdyn_Task: DevKit.Controls.Lookup;
			msdyn_tax: DevKit.Controls.Money;
			/** Select the transaction category on the project contract line estimate. */
			msdyn_TransactionCategory: DevKit.Controls.Lookup;
			/** Select the transaction category on the project contract line estimate. */
			msdyn_TransactionCategory1: DevKit.Controls.Lookup;
			/** Transaction classification of the Project Contract line transaction */
			msdyn_TransactionClassification: DevKit.Controls.OptionSet;
			/** Transaction classification of the Project Contract line transaction */
			msdyn_TransactionClassification1: DevKit.Controls.OptionSet;
			/** Transaction type of the Project Contract line transaction */
			msdyn_TransactionTypeCode: DevKit.Controls.OptionSet;
			/** Transaction type of the Project Contract line transaction */
			msdyn_TransactionTypeCode1: DevKit.Controls.OptionSet;
			/** Select the unit on the project contract line estimate. */
			msdyn_Unit: DevKit.Controls.Lookup;
			/** Select the unit on the project contract line estimate. */
			msdyn_Unit1: DevKit.Controls.Lookup;
			/** Select the unit schedule of the project contract line estimate. */
			msdyn_UnitSchedule: DevKit.Controls.Lookup;
			msdyn_VendorType: DevKit.Controls.OptionSet;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Shows the currency associated with the entity. */
			TransactionCurrencyId: DevKit.Controls.Lookup;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class Formmsdyn_orderlinetransaction_Project_Information extends DevKit.IForm {
		/**
		* Project Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_orderlinetransaction_Project_Information */
		Body: DevKit.Formmsdyn_orderlinetransaction_Project_Information.Body;
		/** The Process of form msdyn_orderlinetransaction_Project_Information */
		Process: DevKit.Formmsdyn_orderlinetransaction_Project_Information.Process;
		/** The SidePanes of form msdyn_orderlinetransaction_Project_Information */
		SidePanes: DevKit.SidePanes;
	}
	namespace Formmsdyn_orderlinetransaction_Project_Quick_Create {
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
			/** Enter the amount on the project contract line estimate. */
			msdyn_Amount: DevKit.Controls.Money;
			/** Type a description of the project contract line estimate */
			msdyn_description: DevKit.Controls.String;
			/** Enter the end date on the project contract line estimate. */
			msdyn_EndDateTime: DevKit.Controls.Date;
			/** Enter the price on the project contract line estimate. */
			msdyn_Price: DevKit.Controls.Money;
			/** Enter the quantity of the project contract line estimate. */
			msdyn_Quantity: DevKit.Controls.Decimal;
			/** Select the name of the role that is estimated to perform this work. */
			msdyn_ResourceCategory: DevKit.Controls.Lookup;
			/** Select the organizational unit of the resource who is estimated to perform the work. */
			msdyn_ResourceOrganizationalUnitId: DevKit.Controls.Lookup;
			/** Select the project contract that this estimate line is for. */
			msdyn_SalesContract: DevKit.Controls.Lookup;
			/** Enter the estimate start date of the portion of work that is being estimated on the project contract estimate line. */
			msdyn_StartDateTime: DevKit.Controls.Date;
			msdyn_tax: DevKit.Controls.Money;
			/** Select the transaction category on the project contract line estimate. */
			msdyn_TransactionCategory: DevKit.Controls.Lookup;
			/** Transaction classification of the Project Contract line transaction */
			msdyn_TransactionClassification: DevKit.Controls.OptionSet;
			/** Transaction type of the Project Contract line transaction */
			msdyn_TransactionTypeCode: DevKit.Controls.OptionSet;
			/** Select the unit on the project contract line estimate. */
			msdyn_Unit: DevKit.Controls.Lookup;
			/** Select the unit schedule of the project contract line estimate. */
			msdyn_UnitSchedule: DevKit.Controls.Lookup;
		}
	}
	class Formmsdyn_orderlinetransaction_Project_Quick_Create extends DevKit.IForm {
		/**
		* Project Quick Create [Quick Create]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_orderlinetransaction_Project_Quick_Create */
		Body: DevKit.Formmsdyn_orderlinetransaction_Project_Quick_Create.Body;
	}
	class msdyn_orderlinetransactionApi {
		/**
		* DynamicsCrm.DevKit msdyn_orderlinetransactionApi
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
		/** Select the customer who this contract belongs to.  */
		msdyn_AccountCustomer: DevKit.WebApi.LookupValue;
		msdyn_AccountingDate_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		msdyn_AccountVendor: DevKit.WebApi.LookupValue;
		/** Enter the amount on the project contract line estimate. */
		msdyn_Amount: DevKit.WebApi.MoneyValue;
		msdyn_amount_after_tax: DevKit.WebApi.MoneyValueReadonly;
		/** Value of the amount_after_tax in base currency. */
		msdyn_amount_after_tax_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Value of the Amount in base currency. */
		msdyn_amount_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Select the amount calculation method used for this project contract estimate line. Valid values are: 
0: Multiply Quantity By Price
1: Fixed Price
2: Multiply Basis Quantity By Price
3: Multiply Basis Amount By Percent  */
		msdyn_AmountMethod: DevKit.WebApi.OptionSetValue;
		msdyn_BasisAmount: DevKit.WebApi.MoneyValue;
		/** Value of the Basis Amount in base currency. */
		msdyn_basisamount_Base: DevKit.WebApi.MoneyValueReadonly;
		msdyn_BasisPrice: DevKit.WebApi.MoneyValue;
		/** Value of the Basis Price in base currency. */
		msdyn_basisprice_Base: DevKit.WebApi.MoneyValueReadonly;
		msdyn_BasisQuantity: DevKit.WebApi.DecimalValue;
		/** Select whether this project contract line estimate will be charged to the customer or not. Only chargeable project contract line estimates will add to the invoice total */
		msdyn_BillingType: DevKit.WebApi.OptionSetValue;
		/** Shows the resource. */
		msdyn_bookableresource: DevKit.WebApi.LookupValue;
		/** Select the customer contact of this Project Contract. */
		msdyn_ContactCustomer: DevKit.WebApi.LookupValue;
		msdyn_ContactVendor: DevKit.WebApi.LookupValue;
		/** Select whether the customer was a account or a contact */
		msdyn_CustomerType: DevKit.WebApi.OptionSetValue;
		/** Type a description of the project contract line estimate */
		msdyn_description: DevKit.WebApi.StringValue;
		/** Enter the document date. */
		msdyn_DocumentDate_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Enter the end date on the project contract line estimate. */
		msdyn_EndDateTime_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		msdyn_ExchangeRateDate_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Shows the project contract line that this estimate line belongs to. */
		msdyn_orderlinetransactionId: DevKit.WebApi.GuidValue;
		/** Foreign key to the detail line that originated this entry. For example, revenue line points to it's related cost line. */
		msdyn_Origin: DevKit.WebApi.LookupValue;
		/** Relevant when amount calculation method on the Project Contract line transactions is "Multiply basis amount by percent" */
		msdyn_Percent: DevKit.WebApi.DecimalValue;
		/** Enter the price on the project contract line estimate. */
		msdyn_Price: DevKit.WebApi.MoneyValue;
		/** Value of the Price in base currency. */
		msdyn_price_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Select the price list used for defaulting price on this project contract line estimate. */
		msdyn_PriceList: DevKit.WebApi.LookupValue;
		/** Select the product on this project contract line estimate. */
		msdyn_Product: DevKit.WebApi.LookupValue;
		/** Select the name of the project on the project contract estimate line. */
		msdyn_Project: DevKit.WebApi.LookupValue;
		/** Enter the quantity of the project contract line estimate. */
		msdyn_Quantity: DevKit.WebApi.DecimalValue;
		/** Unique identifier for Quote Line Detail that Order Line Detail is created from. */
		msdyn_QuoteLineTransactionId: DevKit.WebApi.LookupValue;
		/** Select the name of the role that is estimated to perform this work. */
		msdyn_ResourceCategory: DevKit.WebApi.LookupValue;
		/** Select the organizational unit of the resource who is estimated to perform the work. */
		msdyn_ResourceOrganizationalUnitId: DevKit.WebApi.LookupValue;
		/** Select the project contract that this estimate line is for. */
		msdyn_SalesContract: DevKit.WebApi.LookupValue;
		/** (Deprecated) Shows the project contract line that this project contract line estimate will be mapped to for operating margin calculations. */
		msdyn_SalesContractLine: DevKit.WebApi.StringValue;
		/** Unique identifier for Project Contract Line associated with Project Contract Line Detail. */
		msdyn_SalesContractLineId: DevKit.WebApi.LookupValue;
		/** Enter the estimate start date of the portion of work that is being estimated on the project contract estimate line. */
		msdyn_StartDateTime_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Select the name of the work breakdown structure (WBS) task on the project contract line estimate. */
		msdyn_Task: DevKit.WebApi.LookupValue;
		msdyn_tax: DevKit.WebApi.MoneyValue;
		/** Value of the tax in base currency. */
		msdyn_tax_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Select the transaction category on the project contract line estimate. */
		msdyn_TransactionCategory: DevKit.WebApi.LookupValue;
		/** Transaction classification of the Project Contract line transaction */
		msdyn_TransactionClassification: DevKit.WebApi.OptionSetValue;
		/** Transaction type of the Project Contract line transaction */
		msdyn_TransactionTypeCode: DevKit.WebApi.OptionSetValue;
		/** Select the unit on the project contract line estimate. */
		msdyn_Unit: DevKit.WebApi.LookupValue;
		/** Select the unit schedule of the project contract line estimate. */
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
		/** Status of the Estimate Details */
		statecode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the Estimate Details */
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
	namespace msdyn_orderlinetransaction {
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.00.00'}