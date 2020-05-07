//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace Formmsdyn_invoicelinetransaction_Information {
		interface tab__116CED9D_22A3_4B70_BFBF_9021372780B7_Sections {
			GeneralSection: DevKit.Form.Controls.ControlSection;
			ProjectSection: DevKit.Form.Controls.ControlSection;
			QuantitySection: DevKit.Form.Controls.ControlSection;
			BillingSection: DevKit.Form.Controls.ControlSection;
		}
		interface tab_CorrectionTab_Sections {
			tab_3_section_1: DevKit.Form.Controls.ControlSection;
		}
		interface tab_HiddenFieldsTab_Sections {
			tab_2_section_1: DevKit.Form.Controls.ControlSection;
		}
		interface tab__116CED9D_22A3_4B70_BFBF_9021372780B7 extends DevKit.Form.Controls.IControlTab {
			Section: tab__116CED9D_22A3_4B70_BFBF_9021372780B7_Sections;
		}
		interface tab_CorrectionTab extends DevKit.Form.Controls.IControlTab {
			Section: tab_CorrectionTab_Sections;
		}
		interface tab_HiddenFieldsTab extends DevKit.Form.Controls.IControlTab {
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
			msdyn_AccountCustomer: DevKit.Form.Controls.ControlLookup;
			/** Enter the amount on the transaction. */
			msdyn_Amount: DevKit.Form.Controls.ControlMoney;
			/** Select the name of the amount calculation method. */
			msdyn_AmountMethod: DevKit.Form.Controls.ControlOptionSet;
			msdyn_BasisQuantity: DevKit.Form.Controls.ControlDecimal;
			/** Select whether this transaction will be charged to the customer or not. Only chargeable transactions will add to the invoice total */
			msdyn_BillingType: DevKit.Form.Controls.ControlOptionSet;
			/** Shows the resource. */
			msdyn_bookableresource: DevKit.Form.Controls.ControlLookup;
			/** Select the customer who this invoice will be sent to. */
			msdyn_ContactCustomer: DevKit.Form.Controls.ControlLookup;
			/** Indicates if this transaction is correcting a previous transaction. */
			msdyn_Correction: DevKit.Form.Controls.ControlBoolean;
			/** Select whether the customer was a account or a contact */
			msdyn_CustomerType: DevKit.Form.Controls.ControlOptionSet;
			/** Type a description of the Invoice line transaction. */
			msdyn_description: DevKit.Form.Controls.ControlString;
			/** Enter the date on which this invoice line detail was sent to the customer */
			msdyn_DocumentDate: DevKit.Form.Controls.ControlDate;
			/** Date of invoiced transaction */
			msdyn_EndDateTime: DevKit.Form.Controls.ControlDateTime;
			/** The external description of the invoice line detail */
			msdyn_externaldescription: DevKit.Form.Controls.ControlString;
			/** Unique identifier for Invoice Line associated with Invoice Line Detail. */
			msdyn_InvoiceLineId: DevKit.Form.Controls.ControlLookup;
			/** The original transaction that is being corrected if this is a correction transaction. */
			msdyn_OriginalInvoiceLineDetail: DevKit.Form.Controls.ControlLookup;
			CorrectionQuickView: DevKit.Form.Controls.ControlQuickView;
			/** Enter the price of the transaction. */
			msdyn_Price: DevKit.Form.Controls.ControlMoney;
			/** Select the price list used for defaulting price on this transaction. */
			msdyn_PriceList: DevKit.Form.Controls.ControlLookup;
			/** Select the name of the project on which this transaction was created. */
			msdyn_Project: DevKit.Form.Controls.ControlLookup;
			/** Enter the quantity of the transaction. */
			msdyn_Quantity: DevKit.Form.Controls.ControlDecimal;
			/** Select the role that the user resource who logged this transaction worked as. */
			msdyn_ResourceCategory: DevKit.Form.Controls.ControlLookup;
			/** Select the organizational unit at the time the entry was registered of the resource who performed the work. */
			msdyn_ResourceOrganizationalUnitId: DevKit.Form.Controls.ControlLookup;
			/** Unique identifier for Order Line associated with Invoice Line Detail. */
			msdyn_SalesContractLineId: DevKit.Form.Controls.ControlLookup;
			/** Enter the start date of the transaction. */
			msdyn_StartDateTime: DevKit.Form.Controls.ControlDateTime;
			/** Select the name of the project task for which this transaction was created. */
			msdyn_Task: DevKit.Form.Controls.ControlLookup;
			/** Select the category of the transaction. */
			msdyn_TransactionCategory: DevKit.Form.Controls.ControlLookup;
			/** Transaction classification of the invoice line */
			msdyn_TransactionClassification: DevKit.Form.Controls.ControlOptionSet;
			/** Transaction type of the invoice line */
			msdyn_TransactionTypeCode: DevKit.Form.Controls.ControlOptionSet;
			/** Select the unit of the transaction quantity. */
			msdyn_Unit: DevKit.Form.Controls.ControlLookup;
			/** Select the unit group of the invoice line transaction. */
			msdyn_UnitSchedule: DevKit.Form.Controls.ControlLookup;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
			/** Shows the currency associated with the entity. */
			TransactionCurrencyId: DevKit.Form.Controls.ControlLookup;
		}
	}
	class Formmsdyn_invoicelinetransaction_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_invoicelinetransaction_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form msdyn_invoicelinetransaction_Information */
		Body: LuckyMokey.Formmsdyn_invoicelinetransaction_Information.Body;
	}
	namespace Formmsdyn_invoicelinetransaction_Quick_Create {
		interface tab_tab_1_Sections {
			tab_1_column_1_section_1: DevKit.Form.Controls.ControlSection;
			tab_1_column_2_section_1: DevKit.Form.Controls.ControlSection;
			tab_1_column_3_section_1: DevKit.Form.Controls.ControlSection;
		}
		interface tab_tab_1 extends DevKit.Form.Controls.IControlTab {
			Section: tab_tab_1_Sections;
		}
		interface Tabs {
			tab_1: tab_tab_1;
		}
		interface Body {
			Tab: Tabs;
			msdyn_AccountVendor: DevKit.Form.Controls.ControlLookup;
			/** Select the name of the amount calculation method. */
			msdyn_AmountMethod: DevKit.Form.Controls.ControlOptionSet;
			msdyn_BasisAmount: DevKit.Form.Controls.ControlMoney;
			msdyn_BasisQuantity: DevKit.Form.Controls.ControlDecimal;
			/** Shows the resource. */
			msdyn_bookableresource: DevKit.Form.Controls.ControlLookup;
			msdyn_ContactVendor: DevKit.Form.Controls.ControlLookup;
			/** Enter the date on which this invoice line detail was sent to the customer */
			msdyn_DocumentDate: DevKit.Form.Controls.ControlDate;
			/** Date of invoiced transaction */
			msdyn_EndDateTime: DevKit.Form.Controls.ControlDateTime;
			/** Relevant when amount calculation method on the invoice line transaction is "Multiply basis amount by percent" */
			msdyn_Percent: DevKit.Form.Controls.ControlDecimal;
			/** Enter the price of the transaction. */
			msdyn_Price: DevKit.Form.Controls.ControlMoney;
			/** Select the product on this invoice line transaction. */
			msdyn_Product: DevKit.Form.Controls.ControlLookup;
			/** Select the name of the project on which this transaction was created. */
			msdyn_Project: DevKit.Form.Controls.ControlLookup;
			/** Enter the quantity of the transaction. */
			msdyn_Quantity: DevKit.Form.Controls.ControlDecimal;
			/** Select the role that the user resource who logged this transaction worked as. */
			msdyn_ResourceCategory: DevKit.Form.Controls.ControlLookup;
			/** Enter the start date of the transaction. */
			msdyn_StartDateTime: DevKit.Form.Controls.ControlDateTime;
			/** Select the name of the project task for which this transaction was created. */
			msdyn_Task: DevKit.Form.Controls.ControlLookup;
			/** Select the category of the transaction. */
			msdyn_TransactionCategory: DevKit.Form.Controls.ControlLookup;
			/** Transaction classification of the invoice line */
			msdyn_TransactionClassification: DevKit.Form.Controls.ControlOptionSet;
			/** Transaction type of the invoice line */
			msdyn_TransactionTypeCode: DevKit.Form.Controls.ControlOptionSet;
			msdyn_VendorType: DevKit.Form.Controls.ControlOptionSet;
		}
	}
	class Formmsdyn_invoicelinetransaction_Quick_Create extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_invoicelinetransaction_Quick_Create
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form msdyn_invoicelinetransaction_Quick_Create */
		Body: LuckyMokey.Formmsdyn_invoicelinetransaction_Quick_Create.Body;
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
		/** Select the customer who this invoice will be sent to. */
		msdyn_AccountCustomer: DevKit.WebApi.LookupValue;
		msdyn_AccountingDate_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		msdyn_AccountVendor: DevKit.WebApi.LookupValue;
		/** Enter the amount on the transaction. */
		msdyn_Amount: DevKit.WebApi.MoneyValue;
		/** Value of the Amount in base currency. */
		msdyn_amount_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Select the name of the amount calculation method. */
		msdyn_AmountMethod: DevKit.WebApi.OptionSetValue;
		msdyn_BasisAmount: DevKit.WebApi.MoneyValue;
		/** Value of the Basis Amount in base currency. */
		msdyn_basisamount_Base: DevKit.WebApi.MoneyValueReadonly;
		msdyn_BasisPrice: DevKit.WebApi.MoneyValue;
		/** Value of the Basis Price in base currency. */
		msdyn_basisprice_Base: DevKit.WebApi.MoneyValueReadonly;
		msdyn_BasisQuantity: DevKit.WebApi.DecimalValue;
		/** Select whether this transaction will be charged to the customer or not. Only chargeable transactions will add to the invoice total */
		msdyn_BillingType: DevKit.WebApi.OptionSetValue;
		/** Shows the resource. */
		msdyn_bookableresource: DevKit.WebApi.LookupValue;
		/** Select the customer who this invoice will be sent to. */
		msdyn_ContactCustomer: DevKit.WebApi.LookupValue;
		msdyn_ContactVendor: DevKit.WebApi.LookupValue;
		/** Select the organizational unit in charge of the related contract. */
		msdyn_contractorganizationalunitid: DevKit.WebApi.LookupValue;
		/** Indicates if this transaction is correcting a previous transaction. */
		msdyn_Correction: DevKit.WebApi.BooleanValue;
		/** Select whether the customer was a account or a contact */
		msdyn_CustomerType: DevKit.WebApi.OptionSetValue;
		/** Type a description of the Invoice line transaction. */
		msdyn_description: DevKit.WebApi.StringValue;
		/** Enter the date on which this invoice line detail was sent to the customer */
		msdyn_DocumentDate_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Date of invoiced transaction */
		msdyn_EndDateTime_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		msdyn_ExchangeRateDate_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** The external description of the invoice line detail */
		msdyn_externaldescription: DevKit.WebApi.StringValue;
		/** The invoice to which this invoice line detail belongs. */
		msdyn_Invoice: DevKit.WebApi.LookupValue;
		/** Amount to be invoiced. This is the line amount less the previously invoiced amount when this is a correction. */
		msdyn_InvoiceAmount: DevKit.WebApi.MoneyValueReadonly;
		/** Value of the Invoice Amount in base currency. */
		msdyn_invoiceamount_Base: DevKit.WebApi.MoneyValueReadonly;
		/** (Deprecated) Shows the invoice line that this invoice line transaction is associated to. */
		msdyn_InvoiceLine: DevKit.WebApi.StringValue;
		/** Unique identifier for Invoice Line associated with Invoice Line Detail. */
		msdyn_InvoiceLineId: DevKit.WebApi.LookupValue;
		/** Shows the entity instances. */
		msdyn_invoicelinetransactionId: DevKit.WebApi.GuidValue;
		/** The original transaction that is being corrected if this is a correction transaction. */
		msdyn_OriginalInvoiceLineDetail: DevKit.WebApi.LookupValue;
		/** Relevant when amount calculation method on the invoice line transaction is "Multiply basis amount by percent" */
		msdyn_Percent: DevKit.WebApi.DecimalValue;
		/** Amount that was previously invoiced if this is a correction. */
		msdyn_PreviousAmount: DevKit.WebApi.MoneyValue;
		/** Value of the Previous Amount in base currency. */
		msdyn_previousamount_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Enter the price of the transaction. */
		msdyn_Price: DevKit.WebApi.MoneyValue;
		/** Value of the Price in base currency. */
		msdyn_price_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Select the price list used for defaulting price on this transaction. */
		msdyn_PriceList: DevKit.WebApi.LookupValue;
		/** Select the product on this invoice line transaction. */
		msdyn_Product: DevKit.WebApi.LookupValue;
		/** Select the name of the project on which this transaction was created. */
		msdyn_Project: DevKit.WebApi.LookupValue;
		/** Enter the quantity of the transaction. */
		msdyn_Quantity: DevKit.WebApi.DecimalValue;
		/** Select the role that the user resource who logged this transaction worked as. */
		msdyn_ResourceCategory: DevKit.WebApi.LookupValue;
		/** Select the organizational unit at the time the entry was registered of the resource who performed the work. */
		msdyn_ResourceOrganizationalUnitId: DevKit.WebApi.LookupValue;
		/** Select the name of the project contract that this invoice belongs to. */
		msdyn_SalesContract: DevKit.WebApi.LookupValue;
		/** (Deprecated) Shows the ID of the project contract line for this invoice line */
		msdyn_SalesContractLine: DevKit.WebApi.StringValue;
		/** Unique identifier for Order Line associated with Invoice Line Detail. */
		msdyn_SalesContractLineId: DevKit.WebApi.LookupValue;
		/** Enter the start date of the transaction. */
		msdyn_StartDateTime_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Select the name of the project task for which this transaction was created. */
		msdyn_Task: DevKit.WebApi.LookupValue;
		/** Select the category of the transaction. */
		msdyn_TransactionCategory: DevKit.WebApi.LookupValue;
		/** Transaction classification of the invoice line */
		msdyn_TransactionClassification: DevKit.WebApi.OptionSetValue;
		/** Transaction type of the invoice line */
		msdyn_TransactionTypeCode: DevKit.WebApi.OptionSetValue;
		/** Select the unit of the transaction quantity. */
		msdyn_Unit: DevKit.WebApi.LookupValue;
		/** Select the unit group of the invoice line transaction. */
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
		/** Status of the Invoice Line Detail */
		statecode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the Invoice Line Detail */
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
	namespace msdyn_invoicelinetransaction {
		enum msdyn_AmountMethod {
			/** 690970000 */
			Tax_Calculation,
			/** 192350000 */
			Multiply_Quantity_By_Price,
			/** 192350001 */
			Fixed_Price,
			/** 192350002 */
			Multiply_Basis_Quantity_By_Price,
			/** 192350003 */
			Multiply_Basis_Amount_By_Percent
		}
		enum msdyn_BillingType {
			/** 192350000 */
			Non_Chargeable,
			/** 192350001 */
			Chargeable,
			/** 192350002 */
			Complimentary,
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
			/** 690970000 */
			Commission,
			/** 690970001 */
			Additional,
			/** 690970002 */
			Tax,
			/** 192350000 */
			Time,
			/** 192350001 */
			Expense,
			/** 192350002 */
			Material,
			/** 192350003 */
			Milestone,
			/** 192350004 */
			Fee
		}
		enum msdyn_TransactionTypeCode {
			/** 192350000 */
			Cost,
			/** 192350004 */
			Project_Contract,
			/** 192350005 */
			Unbilled_Sales,
			/** 192350006 */
			Billed_Sales,
			/** 192350007 */
			Resourcing_Unit_Cost,
			/** 192350008 */
			Inter_Organizational_Sales
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
//{'JsForm':['Information','Quick Create'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}