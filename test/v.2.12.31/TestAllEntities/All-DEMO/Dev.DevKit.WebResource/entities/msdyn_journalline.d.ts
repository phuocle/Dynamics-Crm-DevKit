//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_journalline_Information {
		interface tab__377EDB6B_6882_42DC_8F9A_23BBD5CE31A7_Sections {
			_377EDB6B_6882_42DC_8F9A_23BBD5CE31A7_SECTION_2: DevKit.Controls.Section;
			_377EDB6B_6882_42DC_8F9A_23BBD5CE31A7_SECTION_3: DevKit.Controls.Section;
			_377EDB6B_6882_42DC_8F9A_23BBD5CE31A7_SECTION_4: DevKit.Controls.Section;
			_377EDB6B_6882_42DC_8F9A_23BBD5CE31A7_SECTION_5: DevKit.Controls.Section;
			_377EDB6B_6882_42DC_8F9A_23BBD5CE31A7_SECTION_6: DevKit.Controls.Section;
			_377EDB6B_6882_42DC_8F9A_23BBD5CE31A7_SECTION_7: DevKit.Controls.Section;
			_377EDB6B_6882_42DC_8F9A_23BBD5CE31A7_SECTION_8: DevKit.Controls.Section;
		}
		interface tab__377EDB6B_6882_42DC_8F9A_23BBD5CE31A7 extends DevKit.Controls.ITab {
			Section: tab__377EDB6B_6882_42DC_8F9A_23BBD5CE31A7_Sections;
		}
		interface Tabs {
			_377EDB6B_6882_42DC_8F9A_23BBD5CE31A7: tab__377EDB6B_6882_42DC_8F9A_23BBD5CE31A7;
		}
		interface Body {
			Tab: Tabs;
			/** Shows the customer for the journal line. */
			msdyn_AccountCustomer: DevKit.Controls.Lookup;
			msdyn_AccountingDate: DevKit.Controls.Date;
			msdyn_AccountVendor: DevKit.Controls.Lookup;
			/** Shows the amount of the journal line. */
			msdyn_Amount: DevKit.Controls.Money;
			/** Select the calculation method for the amount. */
			msdyn_AmountMethod: DevKit.Controls.OptionSet;
			/** Enter the basis amount of the journal line. */
			msdyn_BasisAmount: DevKit.Controls.Money;
			/** Enter the basis quantity of the journal line. */
			msdyn_BasisQuantity: DevKit.Controls.Decimal;
			/** Select the billing type for the journal line. */
			msdyn_BillingType: DevKit.Controls.OptionSet;
			/** Shows the resource. */
			msdyn_bookableresource: DevKit.Controls.Lookup;
			msdyn_ContactCustomer: DevKit.Controls.Lookup;
			msdyn_ContactVendor: DevKit.Controls.Lookup;
			/** Shows the type of customer. */
			msdyn_CustomerType: DevKit.Controls.OptionSet;
			/** The name of the custom entity. */
			msdyn_description: DevKit.Controls.String;
			/** Enter the transaction date of the journal line. */
			msdyn_DocumentDate: DevKit.Controls.Date;
			/** Enter the end date and time. */
			msdyn_EndDateTime: DevKit.Controls.DateTime;
			/** The external description of the journal line. */
			msdyn_externaldescription: DevKit.Controls.String;
			/** Enter the percent. */
			msdyn_Percent: DevKit.Controls.Decimal;
			/** Enter the price. */
			msdyn_Price: DevKit.Controls.Money;
			/** Shows the price list used for the journal line. */
			msdyn_PriceList: DevKit.Controls.Lookup;
			/** Select the product. */
			msdyn_Product: DevKit.Controls.Lookup;
			/** Select the project. */
			msdyn_Project: DevKit.Controls.Lookup;
			/** Enter the quantity. */
			msdyn_Quantity: DevKit.Controls.Decimal;
			/** Select the resource role. */
			msdyn_ResourceCategory: DevKit.Controls.Lookup;
			/** Enter the start date and time. */
			msdyn_StartDateTime: DevKit.Controls.DateTime;
			/** Select the project task. */
			msdyn_Task: DevKit.Controls.Lookup;
			/** Select the transaction category. */
			msdyn_TransactionCategory: DevKit.Controls.Lookup;
			/** Select the transaction class. */
			msdyn_TransactionClassification: DevKit.Controls.OptionSet;
			msdyn_TransactionTypeCode: DevKit.Controls.OptionSet;
			/** Shows the unit of measurement. */
			msdyn_Unit: DevKit.Controls.Lookup;
			/** Shows the unit schedule. */
			msdyn_UnitSchedule: DevKit.Controls.Lookup;
			msdyn_VendorType: DevKit.Controls.OptionSet;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Shows the currency associated with the entity. */
			TransactionCurrencyId: DevKit.Controls.Lookup;
		}
	}
	class Formmsdyn_journalline_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_journalline_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_journalline_Information */
		Body: DevKit.Formmsdyn_journalline_Information.Body;
	}
	namespace Formmsdyn_journalline_Quick_Create {
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
			msdyn_AccountingDate: DevKit.Controls.Date;
			/** Select the calculation method for the amount. */
			msdyn_AmountMethod: DevKit.Controls.OptionSet;
			/** Enter the basis amount of the journal line. */
			msdyn_BasisAmount: DevKit.Controls.Money;
			/** Enter the basis quantity of the journal line. */
			msdyn_BasisQuantity: DevKit.Controls.Decimal;
			/** Select the billing type for the journal line. */
			msdyn_BillingType: DevKit.Controls.OptionSet;
			/** Shows the resource. */
			msdyn_bookableresource: DevKit.Controls.Lookup;
			/** The name of the custom entity. */
			msdyn_description: DevKit.Controls.String;
			/** Enter the transaction date of the journal line. */
			msdyn_DocumentDate: DevKit.Controls.Date;
			/** Enter the end date and time. */
			msdyn_EndDateTime: DevKit.Controls.DateTime;
			/** The external description of the journal line. */
			msdyn_externaldescription: DevKit.Controls.String;
			/** Enter the percent. */
			msdyn_Percent: DevKit.Controls.Decimal;
			/** Enter the price. */
			msdyn_Price: DevKit.Controls.Money;
			/** Select the product. */
			msdyn_Product: DevKit.Controls.Lookup;
			/** Select the project. */
			msdyn_Project: DevKit.Controls.Lookup;
			/** Enter the quantity. */
			msdyn_Quantity: DevKit.Controls.Decimal;
			/** Select the resource role. */
			msdyn_ResourceCategory: DevKit.Controls.Lookup;
			/** Enter the start date and time. */
			msdyn_StartDateTime: DevKit.Controls.DateTime;
			/** Select the project task. */
			msdyn_Task: DevKit.Controls.Lookup;
			/** Select the transaction category. */
			msdyn_TransactionCategory: DevKit.Controls.Lookup;
			/** Select the transaction class. */
			msdyn_TransactionClassification: DevKit.Controls.OptionSet;
			msdyn_TransactionTypeCode: DevKit.Controls.OptionSet;
			/** Shows the unit of measurement. */
			msdyn_Unit: DevKit.Controls.Lookup;
			/** Shows the unit schedule. */
			msdyn_UnitSchedule: DevKit.Controls.Lookup;
			/** Shows the currency associated with the entity. */
			TransactionCurrencyId: DevKit.Controls.Lookup;
		}
	}
	class Formmsdyn_journalline_Quick_Create extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_journalline_Quick_Create
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_journalline_Quick_Create */
		Body: DevKit.Formmsdyn_journalline_Quick_Create.Body;
	}
}
declare namespace OptionSet {
	namespace msdyn_journalline {
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
		enum msdyn_BillingStatus {
			/** 192350003 */
			Canceled,
			/** 192350001 */
			Customer_Invoice_Created,
			/** 192350002 */
			Customer_Invoice_Posted,
			/** 192350004 */
			Ready_to_Invoice,
			/** 192350000 */
			Unbilled_Sales_Created,
			/** 690970000 */
			Work_order_closed_posted
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