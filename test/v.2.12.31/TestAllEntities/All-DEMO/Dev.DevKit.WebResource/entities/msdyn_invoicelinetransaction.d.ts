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
			msdyn_InvoiceLineId_1: DevKit.Controls.Lookup;
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
	}
	class Formmsdyn_invoicelinetransaction_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_invoicelinetransaction_Information
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
		* DynamicsCrm.DevKit form msdyn_invoicelinetransaction_Quick_Create
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_invoicelinetransaction_Quick_Create */
		Body: DevKit.Formmsdyn_invoicelinetransaction_Quick_Create.Body;
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
//{'JsForm':['Information','Quick Create'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false,'Version':'2.12.31','JsFormVersion':'v2'}