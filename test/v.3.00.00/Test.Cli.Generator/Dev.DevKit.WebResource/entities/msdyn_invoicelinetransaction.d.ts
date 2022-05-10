//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_invoicelinetransaction_Information {
		interface tab__116CED9D_22A3_4B70_BFBF_9021372780B7_Sections {
			BillingSection: DevKit.Controls.Section;
			GeneralSection: DevKit.Controls.Section;
			ProjectSection: DevKit.Controls.Section;
			QuantitySection: DevKit.Controls.Section;
		}
		interface tab_CorrectionTab_Sections {
			tab_3_section_1: DevKit.Controls.Section;
		}
		interface tab_HiddenFieldsTab_Sections {
			tab_2_section_1: DevKit.Controls.Section;
		}
		interface tab__116CED9D_22A3_4B70_BFBF_9021372780B7 extends DevKit.Controls.ITab {
			Section: tab__116CED9D_22A3_4B70_BFBF_9021372780B7_Sections;
		}
		interface tab_CorrectionTab extends DevKit.Controls.ITab {
			Section: tab_CorrectionTab_Sections;
		}
		interface tab_HiddenFieldsTab extends DevKit.Controls.ITab {
			Section: tab_HiddenFieldsTab_Sections;
		}
		interface Tabs {
			_116CED9D_22A3_4B70_BFBF_9021372780B7: tab__116CED9D_22A3_4B70_BFBF_9021372780B7;
			CorrectionTab: tab_CorrectionTab;
			HiddenFieldsTab: tab_HiddenFieldsTab;
		}
		interface Body {
			Tab: Tabs;
			/** Select the customer who this invoice will be sent to. */
			msdyn_AccountCustomer: DevKit.Controls.Lookup;
			/** Enter the amount on the transaction. */
			msdyn_Amount: DevKit.Controls.Money;
			/** Select the name of the amount calculation method. */
			msdyn_AmountMethod: DevKit.Controls.OptionSet;
			msdyn_BasisQuantity: DevKit.Controls.Decimal;
			/** Select whether this transaction will be charged to the customer or not. Only chargeable transactions will add to the invoice total */
			msdyn_BillingType: DevKit.Controls.OptionSet;
			/** Shows the resource. */
			msdyn_bookableresource: DevKit.Controls.Lookup;
			/** Select the customer who this invoice will be sent to. */
			msdyn_ContactCustomer: DevKit.Controls.Lookup;
			/** Indicates if this transaction is correcting a previous transaction. */
			msdyn_Correction: DevKit.Controls.Boolean;
			/** Select whether the customer was a account or a contact */
			msdyn_CustomerType: DevKit.Controls.OptionSet;
			/** Type a description of the Invoice line transaction. */
			msdyn_description: DevKit.Controls.String;
			/** Enter the date on which this invoice line detail was sent to the customer */
			msdyn_DocumentDate: DevKit.Controls.Date;
			/** Date of invoiced transaction */
			msdyn_EndDateTime: DevKit.Controls.DateTime;
			/** The external description of the invoice line detail */
			msdyn_externaldescription: DevKit.Controls.String;
			/** Unique identifier for Invoice Line associated with Invoice Line Detail. */
			msdyn_InvoiceLineId: DevKit.Controls.Lookup;
			/** Unique identifier for Invoice Line associated with Invoice Line Detail. */
			msdyn_InvoiceLineId1: DevKit.Controls.Lookup;
			/** The original transaction that is being corrected if this is a correction transaction. */
			msdyn_OriginalInvoiceLineDetail: DevKit.Controls.Lookup;
			/** Enter the price of the transaction. */
			msdyn_Price: DevKit.Controls.Money;
			/** Select the price list used for defaulting price on this transaction. */
			msdyn_PriceList: DevKit.Controls.Lookup;
			/** Select the name of the project on which this transaction was created. */
			msdyn_Project: DevKit.Controls.Lookup;
			/** Enter the quantity of the transaction. */
			msdyn_Quantity: DevKit.Controls.Decimal;
			/** Select the role that the user resource who logged this transaction worked as. */
			msdyn_ResourceCategory: DevKit.Controls.Lookup;
			/** Select the organizational unit at the time the entry was registered of the resource who performed the work. */
			msdyn_ResourceOrganizationalUnitId: DevKit.Controls.Lookup;
			/** Unique identifier for Order Line associated with Invoice Line Detail. */
			msdyn_SalesContractLineId: DevKit.Controls.Lookup;
			/** Enter the start date of the transaction. */
			msdyn_StartDateTime: DevKit.Controls.DateTime;
			/** Select the name of the project task for which this transaction was created. */
			msdyn_Task: DevKit.Controls.Lookup;
			/** Select the category of the transaction. */
			msdyn_TransactionCategory: DevKit.Controls.Lookup;
			/** Transaction classification of the invoice line */
			msdyn_TransactionClassification: DevKit.Controls.OptionSet;
			/** Transaction type of the invoice line */
			msdyn_TransactionTypeCode: DevKit.Controls.OptionSet;
			/** Select the unit of the transaction quantity. */
			msdyn_Unit: DevKit.Controls.Lookup;
			/** Select the unit group of the invoice line transaction. */
			msdyn_UnitSchedule: DevKit.Controls.Lookup;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Shows the currency associated with the entity. */
			TransactionCurrencyId: DevKit.Controls.Lookup;
		}
		interface quickForm_CorrectionQuickView_Body {
			msdyn_Amount: DevKit.Controls.QuickView;
			msdyn_BillingType: DevKit.Controls.QuickView;
			msdyn_description: DevKit.Controls.QuickView;
			msdyn_Price: DevKit.Controls.QuickView;
			msdyn_Quantity: DevKit.Controls.QuickView;
		}
		interface quickForm_CorrectionQuickView extends DevKit.Controls.IQuickView {
			Body: quickForm_CorrectionQuickView_Body;
		}
		interface QuickForm {
			CorrectionQuickView: quickForm_CorrectionQuickView;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class Formmsdyn_invoicelinetransaction_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_invoicelinetransaction_Information */
		Body: DevKit.Formmsdyn_invoicelinetransaction_Information.Body;
		/** The QuickForm of form msdyn_invoicelinetransaction_Information */
		QuickForm: DevKit.Formmsdyn_invoicelinetransaction_Information.QuickForm;
		/** The Process of form msdyn_invoicelinetransaction_Information */
		Process: DevKit.Formmsdyn_invoicelinetransaction_Information.Process;
		/** The SidePanes of form msdyn_invoicelinetransaction_Information */
		SidePanes: DevKit.SidePanes;
	}
	namespace Formmsdyn_invoicelinetransaction_Quick_Create {
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
			msdyn_AccountVendor: DevKit.Controls.Lookup;
			/** Select the name of the amount calculation method. */
			msdyn_AmountMethod: DevKit.Controls.OptionSet;
			msdyn_BasisAmount: DevKit.Controls.Money;
			msdyn_BasisQuantity: DevKit.Controls.Decimal;
			/** Shows the resource. */
			msdyn_bookableresource: DevKit.Controls.Lookup;
			msdyn_ContactVendor: DevKit.Controls.Lookup;
			/** Enter the date on which this invoice line detail was sent to the customer */
			msdyn_DocumentDate: DevKit.Controls.Date;
			/** Date of invoiced transaction */
			msdyn_EndDateTime: DevKit.Controls.DateTime;
			/** Relevant when amount calculation method on the invoice line transaction is "Multiply basis amount by percent" */
			msdyn_Percent: DevKit.Controls.Decimal;
			/** Enter the price of the transaction. */
			msdyn_Price: DevKit.Controls.Money;
			/** Select the product on this invoice line transaction. */
			msdyn_Product: DevKit.Controls.Lookup;
			/** Select the name of the project on which this transaction was created. */
			msdyn_Project: DevKit.Controls.Lookup;
			/** Enter the quantity of the transaction. */
			msdyn_Quantity: DevKit.Controls.Decimal;
			/** Select the role that the user resource who logged this transaction worked as. */
			msdyn_ResourceCategory: DevKit.Controls.Lookup;
			/** Enter the start date of the transaction. */
			msdyn_StartDateTime: DevKit.Controls.DateTime;
			/** Select the name of the project task for which this transaction was created. */
			msdyn_Task: DevKit.Controls.Lookup;
			/** Select the category of the transaction. */
			msdyn_TransactionCategory: DevKit.Controls.Lookup;
			/** Transaction classification of the invoice line */
			msdyn_TransactionClassification: DevKit.Controls.OptionSet;
			/** Transaction type of the invoice line */
			msdyn_TransactionTypeCode: DevKit.Controls.OptionSet;
			msdyn_VendorType: DevKit.Controls.OptionSet;
		}
	}
	class Formmsdyn_invoicelinetransaction_Quick_Create extends DevKit.IForm {
		/**
		* Quick Create [Quick Create]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_invoicelinetransaction_Quick_Create */
		Body: DevKit.Formmsdyn_invoicelinetransaction_Quick_Create.Body;
	}
	class msdyn_invoicelinetransactionApi {
		/**
		* DynamicsCrm.DevKit msdyn_invoicelinetransactionApi
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
		/** Select the customer who this invoice will be sent to. */
		msdyn_AccountCustomer: string;
		msdyn_AccountingDate_UtcDateOnly: Date;
		msdyn_AccountVendor: string;
		/** Enter the amount on the transaction. */
		msdyn_Amount: number;
		/** Value of the Amount in base currency. */
		readonly msdyn_amount_Base: number;
		/** Select the name of the amount calculation method. */
		msdyn_AmountMethod: OptionSet.msdyn_invoicelinetransaction.msdyn_AmountMethod;
		msdyn_BasisAmount: number;
		/** Value of the Basis Amount in base currency. */
		readonly msdyn_basisamount_Base: number;
		msdyn_BasisPrice: number;
		/** Value of the Basis Price in base currency. */
		readonly msdyn_basisprice_Base: number;
		msdyn_BasisQuantity: number;
		/** Select whether this transaction will be charged to the customer or not. Only chargeable transactions will add to the invoice total */
		msdyn_BillingType: OptionSet.msdyn_invoicelinetransaction.msdyn_BillingType;
		/** Shows the resource. */
		msdyn_bookableresource: string;
		/** Select the customer who this invoice will be sent to. */
		msdyn_ContactCustomer: string;
		msdyn_ContactVendor: string;
		/** Select the organizational unit in charge of the related contract. */
		msdyn_contractorganizationalunitid: string;
		/** Indicates if this transaction is correcting a previous transaction. */
		msdyn_Correction: boolean;
		/** Select whether the customer was a account or a contact */
		msdyn_CustomerType: OptionSet.msdyn_invoicelinetransaction.msdyn_CustomerType;
		/** Type a description of the Invoice line transaction. */
		msdyn_description: string;
		/** Enter the date on which this invoice line detail was sent to the customer */
		msdyn_DocumentDate_UtcDateOnly: Date;
		/** Date of invoiced transaction */
		msdyn_EndDateTime_UtcDateAndTime: Date;
		msdyn_ExchangeRateDate_UtcDateOnly: Date;
		/** The external description of the invoice line detail */
		msdyn_externaldescription: string;
		/** The invoice to which this invoice line detail belongs. */
		msdyn_Invoice: string;
		/** Amount to be invoiced. This is the line amount less the previously invoiced amount when this is a correction. */
		readonly msdyn_InvoiceAmount: number;
		/** Value of the Invoice Amount in base currency. */
		readonly msdyn_invoiceamount_Base: number;
		/** (Deprecated) Shows the invoice line that this invoice line transaction is associated to. */
		msdyn_InvoiceLine: string;
		/** Unique identifier for Invoice Line associated with Invoice Line Detail. */
		msdyn_InvoiceLineId: string;
		/** Shows the entity instances. */
		msdyn_invoicelinetransactionId: string;
		/** The original transaction that is being corrected if this is a correction transaction. */
		msdyn_OriginalInvoiceLineDetail: string;
		/** Relevant when amount calculation method on the invoice line transaction is "Multiply basis amount by percent" */
		msdyn_Percent: number;
		/** Amount that was previously invoiced if this is a correction. */
		msdyn_PreviousAmount: number;
		/** Value of the Previous Amount in base currency. */
		readonly msdyn_previousamount_Base: number;
		/** Enter the price of the transaction. */
		msdyn_Price: number;
		/** Value of the Price in base currency. */
		readonly msdyn_price_Base: number;
		/** Select the price list used for defaulting price on this transaction. */
		msdyn_PriceList: string;
		/** Select the product on this invoice line transaction. */
		msdyn_Product: string;
		/** Select the name of the project on which this transaction was created. */
		msdyn_Project: string;
		/** Enter the quantity of the transaction. */
		msdyn_Quantity: number;
		/** Select the role that the user resource who logged this transaction worked as. */
		msdyn_ResourceCategory: string;
		/** Select the organizational unit at the time the entry was registered of the resource who performed the work. */
		msdyn_ResourceOrganizationalUnitId: string;
		/** Select the name of the project contract that this invoice belongs to. */
		msdyn_SalesContract: string;
		/** (Deprecated) Shows the ID of the project contract line for this invoice line */
		msdyn_SalesContractLine: string;
		/** Unique identifier for Order Line associated with Invoice Line Detail. */
		msdyn_SalesContractLineId: string;
		/** Enter the start date of the transaction. */
		msdyn_StartDateTime_UtcDateAndTime: Date;
		/** Select the name of the project task for which this transaction was created. */
		msdyn_Task: string;
		/** Select the category of the transaction. */
		msdyn_TransactionCategory: string;
		/** Transaction classification of the invoice line */
		msdyn_TransactionClassification: OptionSet.msdyn_invoicelinetransaction.msdyn_TransactionClassification;
		/** Transaction type of the invoice line */
		msdyn_TransactionTypeCode: OptionSet.msdyn_invoicelinetransaction.msdyn_TransactionTypeCode;
		/** Select the unit of the transaction quantity. */
		msdyn_Unit: string;
		/** Select the unit group of the invoice line transaction. */
		msdyn_UnitSchedule: string;
		msdyn_VendorType: OptionSet.msdyn_invoicelinetransaction.msdyn_VendorType;
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
		/** Status of the Invoice Line Detail */
		statecode: OptionSet.msdyn_invoicelinetransaction.statecode;
		/** Reason for the status of the Invoice Line Detail */
		statuscode: OptionSet.msdyn_invoicelinetransaction.statuscode;
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
			/** Select the customer who this invoice will be sent to. */
			readonly msdyn_AccountCustomer: string;
			readonly msdyn_AccountingDate_UtcDateOnly: string;
			readonly msdyn_AccountVendor: string;
			/** Enter the amount on the transaction. */
			readonly msdyn_Amount: string;
			/** Value of the Amount in base currency. */
			readonly msdyn_amount_Base: string;
			/** Select the name of the amount calculation method. */
			readonly msdyn_AmountMethod: string;
			readonly msdyn_BasisAmount: string;
			/** Value of the Basis Amount in base currency. */
			readonly msdyn_basisamount_Base: string;
			readonly msdyn_BasisPrice: string;
			/** Value of the Basis Price in base currency. */
			readonly msdyn_basisprice_Base: string;
			readonly msdyn_BasisQuantity: string;
			/** Select whether this transaction will be charged to the customer or not. Only chargeable transactions will add to the invoice total */
			readonly msdyn_BillingType: string;
			/** Shows the resource. */
			readonly msdyn_bookableresource: string;
			/** Select the customer who this invoice will be sent to. */
			readonly msdyn_ContactCustomer: string;
			readonly msdyn_ContactVendor: string;
			/** Select the organizational unit in charge of the related contract. */
			readonly msdyn_contractorganizationalunitid: string;
			/** Indicates if this transaction is correcting a previous transaction. */
			readonly msdyn_Correction: string;
			/** Select whether the customer was a account or a contact */
			readonly msdyn_CustomerType: string;
			/** Type a description of the Invoice line transaction. */
			readonly msdyn_description: string;
			/** Enter the date on which this invoice line detail was sent to the customer */
			readonly msdyn_DocumentDate_UtcDateOnly: string;
			/** Date of invoiced transaction */
			readonly msdyn_EndDateTime_UtcDateAndTime: string;
			readonly msdyn_ExchangeRateDate_UtcDateOnly: string;
			/** The external description of the invoice line detail */
			readonly msdyn_externaldescription: string;
			/** The invoice to which this invoice line detail belongs. */
			readonly msdyn_Invoice: string;
			/** Amount to be invoiced. This is the line amount less the previously invoiced amount when this is a correction. */
			readonly msdyn_InvoiceAmount: string;
			/** Value of the Invoice Amount in base currency. */
			readonly msdyn_invoiceamount_Base: string;
			/** (Deprecated) Shows the invoice line that this invoice line transaction is associated to. */
			readonly msdyn_InvoiceLine: string;
			/** Unique identifier for Invoice Line associated with Invoice Line Detail. */
			readonly msdyn_InvoiceLineId: string;
			/** Shows the entity instances. */
			readonly msdyn_invoicelinetransactionId: string;
			/** The original transaction that is being corrected if this is a correction transaction. */
			readonly msdyn_OriginalInvoiceLineDetail: string;
			/** Relevant when amount calculation method on the invoice line transaction is "Multiply basis amount by percent" */
			readonly msdyn_Percent: string;
			/** Amount that was previously invoiced if this is a correction. */
			readonly msdyn_PreviousAmount: string;
			/** Value of the Previous Amount in base currency. */
			readonly msdyn_previousamount_Base: string;
			/** Enter the price of the transaction. */
			readonly msdyn_Price: string;
			/** Value of the Price in base currency. */
			readonly msdyn_price_Base: string;
			/** Select the price list used for defaulting price on this transaction. */
			readonly msdyn_PriceList: string;
			/** Select the product on this invoice line transaction. */
			readonly msdyn_Product: string;
			/** Select the name of the project on which this transaction was created. */
			readonly msdyn_Project: string;
			/** Enter the quantity of the transaction. */
			readonly msdyn_Quantity: string;
			/** Select the role that the user resource who logged this transaction worked as. */
			readonly msdyn_ResourceCategory: string;
			/** Select the organizational unit at the time the entry was registered of the resource who performed the work. */
			readonly msdyn_ResourceOrganizationalUnitId: string;
			/** Select the name of the project contract that this invoice belongs to. */
			readonly msdyn_SalesContract: string;
			/** (Deprecated) Shows the ID of the project contract line for this invoice line */
			readonly msdyn_SalesContractLine: string;
			/** Unique identifier for Order Line associated with Invoice Line Detail. */
			readonly msdyn_SalesContractLineId: string;
			/** Enter the start date of the transaction. */
			readonly msdyn_StartDateTime_UtcDateAndTime: string;
			/** Select the name of the project task for which this transaction was created. */
			readonly msdyn_Task: string;
			/** Select the category of the transaction. */
			readonly msdyn_TransactionCategory: string;
			/** Transaction classification of the invoice line */
			readonly msdyn_TransactionClassification: string;
			/** Transaction type of the invoice line */
			readonly msdyn_TransactionTypeCode: string;
			/** Select the unit of the transaction quantity. */
			readonly msdyn_Unit: string;
			/** Select the unit group of the invoice line transaction. */
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
			/** Status of the Invoice Line Detail */
			readonly statecode: string;
			/** Reason for the status of the Invoice Line Detail */
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
	namespace msdyn_invoicelinetransaction {
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