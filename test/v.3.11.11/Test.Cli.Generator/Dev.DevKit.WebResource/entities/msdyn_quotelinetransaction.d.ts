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
			msdyn_Amount1: DevKit.Controls.Money;
			msdyn_amount_after_tax: DevKit.Controls.Money;
			/** Select the calculation method used for the amount on the estimate line. Valid methods are: Multiply Quantity By Price, Fixed Price, Multiply Basis Quantity By Price, Multiply Basis Amount By Percent */
			msdyn_AmountMethod: DevKit.Controls.OptionSet;
			msdyn_BasisAmount: DevKit.Controls.Money;
			msdyn_BasisQuantity: DevKit.Controls.Decimal;
			/** Select whether this quote line estimate will be charged to the customer or not. Only chargeable transactions will add to the invoice total */
			msdyn_BillingType: DevKit.Controls.OptionSet;
			/** Select whether this quote line estimate will be charged to the customer or not. Only chargeable transactions will add to the invoice total */
			msdyn_BillingType1: DevKit.Controls.OptionSet;
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
			msdyn_description1: DevKit.Controls.String;
			/** Enter the date that the invoice is sent to the customer. Only relevant on invoice and invoice line transactions */
			msdyn_DocumentDate: DevKit.Controls.Date;
			/** Enter the end date of the work being estimated on the quote line estimate. */
			msdyn_EndDateTime: DevKit.Controls.Date;
			/** Enter the end date of the work being estimated on the quote line estimate. */
			msdyn_EndDateTime1: DevKit.Controls.Date;
			/** Points to the quote line detail that originated an entry. For example, a revenue entry points to its related cost entry. */
			msdyn_Origin: DevKit.Controls.Lookup;
			/** Enter the amount, in percent, to multiply the basis by. This field is relevant when the amount calculation method is "Multiply basis amount by percent." */
			msdyn_Percent: DevKit.Controls.Decimal;
			/** Enter the price on the quote line estimate. */
			msdyn_Price: DevKit.Controls.Money;
			/** Enter the price on the quote line estimate. */
			msdyn_Price1: DevKit.Controls.Money;
			/** Select the price List used to default price on the estimate line. */
			msdyn_PriceList: DevKit.Controls.Lookup;
			/** Select the price List used to default price on the estimate line. */
			msdyn_PriceList1: DevKit.Controls.Lookup;
			/** Select the product on the quote line estimate. */
			msdyn_Product: DevKit.Controls.Lookup;
			/** Select the project being referenced by the quote line estimate. */
			msdyn_Project: DevKit.Controls.Lookup;
			/** Enter the quantity on the quote line estimate. */
			msdyn_Quantity: DevKit.Controls.Decimal;
			/** Enter the quantity on the quote line estimate. */
			msdyn_Quantity1: DevKit.Controls.Decimal;
			/** Select the denormalized reference to the quote. This is used for performance improvements and to allow the use of Power BI on a quote. */
			msdyn_QuoteId: DevKit.Controls.Lookup;
			/** Select the denormalized reference to the quote. This is used for performance improvements and to allow the use of Power BI on a quote. */
			msdyn_QuoteId1: DevKit.Controls.Lookup;
			/** Unique identifier for Quote Line to which this estimate line belongs to. */
			msdyn_quotelineid: DevKit.Controls.Lookup;
			/** Select the role on the quote line estimate. */
			msdyn_ResourceCategory: DevKit.Controls.Lookup;
			/** Select the role on the quote line estimate. */
			msdyn_ResourceCategory1: DevKit.Controls.Lookup;
			/** Select the organizational unit of the resource who should perform the work. */
			msdyn_ResourceOrganizationalUnitId: DevKit.Controls.Lookup;
			/** Enter the estimated start of the work being estimated on the quote line estimate. */
			msdyn_StartDateTime: DevKit.Controls.Date;
			/** Enter the estimated start of the work being estimated on the quote line estimate. */
			msdyn_StartDateTime1: DevKit.Controls.Date;
			/** Select the project work breakdown structure (WBS) task referenced by the quote line estimate. */
			msdyn_Task: DevKit.Controls.Lookup;
			msdyn_tax: DevKit.Controls.Money;
			/** Select the category on the quote line estimate. */
			msdyn_TransactionCategory: DevKit.Controls.Lookup;
			/** Select the category on the quote line estimate. */
			msdyn_TransactionCategory1: DevKit.Controls.Lookup;
			/** Transaction classification for the quote line */
			msdyn_TransactionClassification: DevKit.Controls.OptionSet;
			/** Transaction classification for the quote line */
			msdyn_TransactionClassification1: DevKit.Controls.OptionSet;
			/** Shows the transaction type for this quote line. */
			msdyn_TransactionTypeCode: DevKit.Controls.OptionSet;
			/** Shows the transaction type for this quote line. */
			msdyn_TransactionTypeCode1: DevKit.Controls.OptionSet;
			/** Select the unit that the quantity is estimated in on this quote line estimate. */
			msdyn_Unit: DevKit.Controls.Lookup;
			/** Select the unit that the quantity is estimated in on this quote line estimate. */
			msdyn_Unit1: DevKit.Controls.Lookup;
			/** Select the unit schedule associated with the estimate line. */
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
	class Formmsdyn_quotelinetransaction_Project_Information extends DevKit.IForm {
		/**
		* Project Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_quotelinetransaction_Project_Information */
		Body: DevKit.Formmsdyn_quotelinetransaction_Project_Information.Body;
		/** The Process of form msdyn_quotelinetransaction_Project_Information */
		Process: DevKit.Formmsdyn_quotelinetransaction_Project_Information.Process;
		/** The SidePanes of form msdyn_quotelinetransaction_Project_Information */
		SidePanes: DevKit.SidePanes;
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
		* Project Quick Create [Quick Create]
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
		/** The entity object for Create/Update */
		Entity: unknown;
		/** The OData entity object */
		ODataEntity: unknown;
		/** The entity name */
		EntityName: string;
		/** The entity collection name */
		EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependant on the fields that are retrieved */
		"@odata.etag": string;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string;
		/** Exchange rate for the currency associated with the entity with respect to the base currency. */
		readonly ExchangeRate: number;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string;
		/** Select the name of the customer account. */
		msdyn_AccountCustomer: string;
		msdyn_AccountingDate_UtcDateOnly: Date;
		msdyn_AccountVendor: string;
		/** Enter the amount on the quote line estimate. */
		msdyn_Amount: number;
		readonly msdyn_amount_after_tax: number;
		/** Value of the amount_after_tax in base currency. */
		readonly msdyn_amount_after_tax_Base: number;
		/** Value of the Amount in base currency. */
		readonly msdyn_amount_Base: number;
		/** Select the calculation method used for the amount on the estimate line. Valid methods are: Multiply Quantity By Price, Fixed Price, Multiply Basis Quantity By Price, Multiply Basis Amount By Percent */
		msdyn_AmountMethod: OptionSet.msdyn_quotelinetransaction.msdyn_AmountMethod;
		msdyn_BasisAmount: number;
		/** Value of the Basis Amount in base currency. */
		readonly msdyn_basisamount_Base: number;
		msdyn_BasisPrice: number;
		/** Value of the Basis Price in base currency. */
		readonly msdyn_basisprice_Base: number;
		msdyn_BasisQuantity: number;
		/** Select whether this quote line estimate will be charged to the customer or not. Only chargeable transactions will add to the invoice total */
		msdyn_BillingType: OptionSet.msdyn_quotelinetransaction.msdyn_BillingType;
		/** Shows the resource. */
		msdyn_bookableresource: string;
		/** Select the contact customer on the quote. */
		msdyn_ContactCustomer: string;
		msdyn_ContactVendor: string;
		/** Select whether the customer is an account or a contact  */
		msdyn_CustomerType: OptionSet.msdyn_quotelinetransaction.msdyn_CustomerType;
		/** Type the name of the custom entity. */
		msdyn_description: string;
		/** Enter the date that the invoice is sent to the customer. Only relevant on invoice and invoice line transactions */
		msdyn_DocumentDate_UtcDateOnly: Date;
		/** Enter the end date of the work being estimated on the quote line estimate. */
		msdyn_EndDateTime_UtcDateOnly: Date;
		msdyn_ExchangeRateDate_UtcDateOnly: Date;
		/** Indicates if this record was created via import. It's purpose is to support data import. */
		msdyn_isdataimport: boolean;
		/** Points to the quote line detail that originated an entry. For example, a revenue entry points to its related cost entry. */
		msdyn_Origin: string;
		/** Enter the amount, in percent, to multiply the basis by. This field is relevant when the amount calculation method is "Multiply basis amount by percent." */
		msdyn_Percent: number;
		/** Enter the price on the quote line estimate. */
		msdyn_Price: number;
		/** Value of the Price in base currency. */
		readonly msdyn_price_Base: number;
		/** Select the price List used to default price on the estimate line. */
		msdyn_PriceList: string;
		/** Select the product on the quote line estimate. */
		msdyn_Product: string;
		/** Select the project being referenced by the quote line estimate. */
		msdyn_Project: string;
		/** Enter the quantity on the quote line estimate. */
		msdyn_Quantity: number;
		/** Select the denormalized reference to the quote. This is used for performance improvements and to allow the use of Power BI on a quote. */
		msdyn_QuoteId: string;
		/** (Deprecated) Type the quote line to which this estimate line belongs to. */
		msdyn_QuoteLine: string;
		/** Unique identifier for Quote Line to which this estimate line belongs to. */
		msdyn_quotelineid: string;
		/** Unique identifier for entity instances */
		msdyn_quotelinetransactionId: string;
		/** Select the role on the quote line estimate. */
		msdyn_ResourceCategory: string;
		/** Select the organizational unit of the resource who should perform the work. */
		msdyn_ResourceOrganizationalUnitId: string;
		/** Enter the estimated start of the work being estimated on the quote line estimate. */
		msdyn_StartDateTime_UtcDateOnly: Date;
		/** Select the project work breakdown structure (WBS) task referenced by the quote line estimate. */
		msdyn_Task: string;
		msdyn_tax: number;
		/** Value of the tax in base currency. */
		readonly msdyn_tax_Base: number;
		/** Select the category on the quote line estimate. */
		msdyn_TransactionCategory: string;
		/** Transaction classification for the quote line */
		msdyn_TransactionClassification: OptionSet.msdyn_quotelinetransaction.msdyn_TransactionClassification;
		/** Shows the transaction type for this quote line. */
		msdyn_TransactionTypeCode: OptionSet.msdyn_quotelinetransaction.msdyn_TransactionTypeCode;
		/** Select the unit that the quantity is estimated in on this quote line estimate. */
		msdyn_Unit: string;
		/** Select the unit schedule associated with the estimate line. */
		msdyn_UnitSchedule: string;
		msdyn_VendorType: OptionSet.msdyn_quotelinetransaction.msdyn_VendorType;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Unique identifier for the business unit that owns the record */
		readonly OwningBusinessUnit: string;
		/** Unique identifier for the team that owns the record. */
		readonly OwningTeam: string;
		/** Unique identifier for the user that owns the record. */
		readonly OwningUser: string;
		/** Status of the Quote Line Detail */
		statecode: OptionSet.msdyn_quotelinetransaction.statecode;
		/** Reason for the status of the Quote Line Detail */
		statuscode: OptionSet.msdyn_quotelinetransaction.statuscode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Shows the currency associated with the entity. */
		TransactionCurrencyId: string;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Unique identifier of the user who created the record. */
			readonly CreatedBy: string;
			/** Date and time when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the record. */
			readonly CreatedOnBehalfBy: string;
			/** Exchange rate for the currency associated with the entity with respect to the base currency. */
			readonly ExchangeRate: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			/** Select the name of the customer account. */
			readonly msdyn_AccountCustomer: string;
			readonly msdyn_AccountingDate_UtcDateOnly: string;
			readonly msdyn_AccountVendor: string;
			/** Enter the amount on the quote line estimate. */
			readonly msdyn_Amount: string;
			readonly msdyn_amount_after_tax: string;
			/** Value of the amount_after_tax in base currency. */
			readonly msdyn_amount_after_tax_Base: string;
			/** Value of the Amount in base currency. */
			readonly msdyn_amount_Base: string;
			/** Select the calculation method used for the amount on the estimate line. Valid methods are: Multiply Quantity By Price, Fixed Price, Multiply Basis Quantity By Price, Multiply Basis Amount By Percent */
			readonly msdyn_AmountMethod: string;
			readonly msdyn_BasisAmount: string;
			/** Value of the Basis Amount in base currency. */
			readonly msdyn_basisamount_Base: string;
			readonly msdyn_BasisPrice: string;
			/** Value of the Basis Price in base currency. */
			readonly msdyn_basisprice_Base: string;
			readonly msdyn_BasisQuantity: string;
			/** Select whether this quote line estimate will be charged to the customer or not. Only chargeable transactions will add to the invoice total */
			readonly msdyn_BillingType: string;
			/** Shows the resource. */
			readonly msdyn_bookableresource: string;
			/** Select the contact customer on the quote. */
			readonly msdyn_ContactCustomer: string;
			readonly msdyn_ContactVendor: string;
			/** Select whether the customer is an account or a contact  */
			readonly msdyn_CustomerType: string;
			/** Type the name of the custom entity. */
			readonly msdyn_description: string;
			/** Enter the date that the invoice is sent to the customer. Only relevant on invoice and invoice line transactions */
			readonly msdyn_DocumentDate_UtcDateOnly: string;
			/** Enter the end date of the work being estimated on the quote line estimate. */
			readonly msdyn_EndDateTime_UtcDateOnly: string;
			readonly msdyn_ExchangeRateDate_UtcDateOnly: string;
			/** Indicates if this record was created via import. It's purpose is to support data import. */
			readonly msdyn_isdataimport: string;
			/** Points to the quote line detail that originated an entry. For example, a revenue entry points to its related cost entry. */
			readonly msdyn_Origin: string;
			/** Enter the amount, in percent, to multiply the basis by. This field is relevant when the amount calculation method is "Multiply basis amount by percent." */
			readonly msdyn_Percent: string;
			/** Enter the price on the quote line estimate. */
			readonly msdyn_Price: string;
			/** Value of the Price in base currency. */
			readonly msdyn_price_Base: string;
			/** Select the price List used to default price on the estimate line. */
			readonly msdyn_PriceList: string;
			/** Select the product on the quote line estimate. */
			readonly msdyn_Product: string;
			/** Select the project being referenced by the quote line estimate. */
			readonly msdyn_Project: string;
			/** Enter the quantity on the quote line estimate. */
			readonly msdyn_Quantity: string;
			/** Select the denormalized reference to the quote. This is used for performance improvements and to allow the use of Power BI on a quote. */
			readonly msdyn_QuoteId: string;
			/** (Deprecated) Type the quote line to which this estimate line belongs to. */
			readonly msdyn_QuoteLine: string;
			/** Unique identifier for Quote Line to which this estimate line belongs to. */
			readonly msdyn_quotelineid: string;
			/** Unique identifier for entity instances */
			readonly msdyn_quotelinetransactionId: string;
			/** Select the role on the quote line estimate. */
			readonly msdyn_ResourceCategory: string;
			/** Select the organizational unit of the resource who should perform the work. */
			readonly msdyn_ResourceOrganizationalUnitId: string;
			/** Enter the estimated start of the work being estimated on the quote line estimate. */
			readonly msdyn_StartDateTime_UtcDateOnly: string;
			/** Select the project work breakdown structure (WBS) task referenced by the quote line estimate. */
			readonly msdyn_Task: string;
			readonly msdyn_tax: string;
			/** Value of the tax in base currency. */
			readonly msdyn_tax_Base: string;
			/** Select the category on the quote line estimate. */
			readonly msdyn_TransactionCategory: string;
			/** Transaction classification for the quote line */
			readonly msdyn_TransactionClassification: string;
			/** Shows the transaction type for this quote line. */
			readonly msdyn_TransactionTypeCode: string;
			/** Select the unit that the quantity is estimated in on this quote line estimate. */
			readonly msdyn_Unit: string;
			/** Select the unit schedule associated with the estimate line. */
			readonly msdyn_UnitSchedule: string;
			readonly msdyn_VendorType: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Unique identifier for the business unit that owns the record */
			readonly OwningBusinessUnit: string;
			/** Unique identifier for the team that owns the record. */
			readonly OwningTeam: string;
			/** Unique identifier for the user that owns the record. */
			readonly OwningUser: string;
			/** Status of the Quote Line Detail */
			readonly statecode: string;
			/** Reason for the status of the Quote Line Detail */
			readonly statuscode: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Shows the currency associated with the entity. */
			readonly TransactionCurrencyId: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
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
		enum OwnerIdType {
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.11.11','WebApiVersion':'2'}