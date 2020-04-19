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
//{'JsForm':['Information','Quick Create'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false}