﻿//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace Formmsdyn_journalline_Information {
		interface tab__377EDB6B_6882_42DC_8F9A_23BBD5CE31A7_Sections {
			_377EDB6B_6882_42DC_8F9A_23BBD5CE31A7_SECTION_3: DevKit.Form.Controls.ControlSection;
			_377EDB6B_6882_42DC_8F9A_23BBD5CE31A7_SECTION_4: DevKit.Form.Controls.ControlSection;
			_377EDB6B_6882_42DC_8F9A_23BBD5CE31A7_SECTION_5: DevKit.Form.Controls.ControlSection;
			_377EDB6B_6882_42DC_8F9A_23BBD5CE31A7_SECTION_2: DevKit.Form.Controls.ControlSection;
			_377EDB6B_6882_42DC_8F9A_23BBD5CE31A7_SECTION_6: DevKit.Form.Controls.ControlSection;
			_377EDB6B_6882_42DC_8F9A_23BBD5CE31A7_SECTION_7: DevKit.Form.Controls.ControlSection;
			_377EDB6B_6882_42DC_8F9A_23BBD5CE31A7_SECTION_8: DevKit.Form.Controls.ControlSection;
		}
		interface tab__377EDB6B_6882_42DC_8F9A_23BBD5CE31A7 extends DevKit.Form.Controls.IControlTab {
			Section: tab__377EDB6B_6882_42DC_8F9A_23BBD5CE31A7_Sections;
		}
		interface Tabs {
			_377EDB6B_6882_42DC_8F9A_23BBD5CE31A7: tab__377EDB6B_6882_42DC_8F9A_23BBD5CE31A7;
		}
		interface Body {
			Tab: Tabs;
			/** Shows the customer for the journal line. */
			msdyn_AccountCustomer: DevKit.Form.Controls.ControlLookup;
			msdyn_AccountingDate: DevKit.Form.Controls.ControlDate;
			msdyn_AccountVendor: DevKit.Form.Controls.ControlLookup;
			/** Shows the amount of the journal line. */
			msdyn_Amount: DevKit.Form.Controls.ControlMoney;
			/** Select the calculation method for the amount. */
			msdyn_AmountMethod: DevKit.Form.Controls.ControlOptionSet;
			/** Enter the basis amount of the journal line. */
			msdyn_BasisAmount: DevKit.Form.Controls.ControlMoney;
			/** Enter the basis quantity of the journal line. */
			msdyn_BasisQuantity: DevKit.Form.Controls.ControlDecimal;
			/** Select the billing type for the journal line. */
			msdyn_BillingType: DevKit.Form.Controls.ControlOptionSet;
			/** Shows the resource. */
			msdyn_bookableresource: DevKit.Form.Controls.ControlLookup;
			msdyn_ContactCustomer: DevKit.Form.Controls.ControlLookup;
			msdyn_ContactVendor: DevKit.Form.Controls.ControlLookup;
			/** Shows the type of customer. */
			msdyn_CustomerType: DevKit.Form.Controls.ControlOptionSet;
			/** The name of the custom entity. */
			msdyn_description: DevKit.Form.Controls.ControlString;
			/** Enter the transaction date of the journal line. */
			msdyn_DocumentDate: DevKit.Form.Controls.ControlDate;
			/** Enter the end date and time. */
			msdyn_EndDateTime: DevKit.Form.Controls.ControlDateTime;
			/** The external description of the journal line. */
			msdyn_externaldescription: DevKit.Form.Controls.ControlString;
			/** Enter the percent. */
			msdyn_Percent: DevKit.Form.Controls.ControlDecimal;
			/** Enter the price. */
			msdyn_Price: DevKit.Form.Controls.ControlMoney;
			/** Shows the price list used for the journal line. */
			msdyn_PriceList: DevKit.Form.Controls.ControlLookup;
			/** Select the product. */
			msdyn_Product: DevKit.Form.Controls.ControlLookup;
			/** Select the project. */
			msdyn_Project: DevKit.Form.Controls.ControlLookup;
			/** Enter the quantity. */
			msdyn_Quantity: DevKit.Form.Controls.ControlDecimal;
			/** Select the resource role. */
			msdyn_ResourceCategory: DevKit.Form.Controls.ControlLookup;
			/** Enter the start date and time. */
			msdyn_StartDateTime: DevKit.Form.Controls.ControlDateTime;
			/** Select the project task. */
			msdyn_Task: DevKit.Form.Controls.ControlLookup;
			/** Select the transaction category. */
			msdyn_TransactionCategory: DevKit.Form.Controls.ControlLookup;
			/** Select the transaction class. */
			msdyn_TransactionClassification: DevKit.Form.Controls.ControlOptionSet;
			msdyn_TransactionTypeCode: DevKit.Form.Controls.ControlOptionSet;
			/** Shows the unit of measurement. */
			msdyn_Unit: DevKit.Form.Controls.ControlLookup;
			/** Shows the unit schedule. */
			msdyn_UnitSchedule: DevKit.Form.Controls.ControlLookup;
			msdyn_VendorType: DevKit.Form.Controls.ControlOptionSet;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
			/** Shows the currency associated with the entity. */
			TransactionCurrencyId: DevKit.Form.Controls.ControlLookup;
		}
	}
	class Formmsdyn_journalline_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_journalline_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form msdyn_journalline_Information */
		Body: LuckyMokey.Formmsdyn_journalline_Information.Body;
	}
	namespace Formmsdyn_journalline_Quick_Create {
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
			msdyn_AccountingDate: DevKit.Form.Controls.ControlDate;
			/** Select the calculation method for the amount. */
			msdyn_AmountMethod: DevKit.Form.Controls.ControlOptionSet;
			/** Enter the basis amount of the journal line. */
			msdyn_BasisAmount: DevKit.Form.Controls.ControlMoney;
			/** Enter the basis quantity of the journal line. */
			msdyn_BasisQuantity: DevKit.Form.Controls.ControlDecimal;
			/** Select the billing type for the journal line. */
			msdyn_BillingType: DevKit.Form.Controls.ControlOptionSet;
			/** Shows the resource. */
			msdyn_bookableresource: DevKit.Form.Controls.ControlLookup;
			/** The name of the custom entity. */
			msdyn_description: DevKit.Form.Controls.ControlString;
			/** Enter the transaction date of the journal line. */
			msdyn_DocumentDate: DevKit.Form.Controls.ControlDate;
			/** Enter the end date and time. */
			msdyn_EndDateTime: DevKit.Form.Controls.ControlDateTime;
			/** The external description of the journal line. */
			msdyn_externaldescription: DevKit.Form.Controls.ControlString;
			/** Enter the percent. */
			msdyn_Percent: DevKit.Form.Controls.ControlDecimal;
			/** Enter the price. */
			msdyn_Price: DevKit.Form.Controls.ControlMoney;
			/** Select the product. */
			msdyn_Product: DevKit.Form.Controls.ControlLookup;
			/** Select the project. */
			msdyn_Project: DevKit.Form.Controls.ControlLookup;
			/** Enter the quantity. */
			msdyn_Quantity: DevKit.Form.Controls.ControlDecimal;
			/** Select the resource role. */
			msdyn_ResourceCategory: DevKit.Form.Controls.ControlLookup;
			/** Enter the start date and time. */
			msdyn_StartDateTime: DevKit.Form.Controls.ControlDateTime;
			/** Select the project task. */
			msdyn_Task: DevKit.Form.Controls.ControlLookup;
			/** Select the transaction category. */
			msdyn_TransactionCategory: DevKit.Form.Controls.ControlLookup;
			/** Select the transaction class. */
			msdyn_TransactionClassification: DevKit.Form.Controls.ControlOptionSet;
			msdyn_TransactionTypeCode: DevKit.Form.Controls.ControlOptionSet;
			/** Shows the unit of measurement. */
			msdyn_Unit: DevKit.Form.Controls.ControlLookup;
			/** Shows the unit schedule. */
			msdyn_UnitSchedule: DevKit.Form.Controls.ControlLookup;
		}
	}
	class Formmsdyn_journalline_Quick_Create extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_journalline_Quick_Create
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form msdyn_journalline_Quick_Create */
		Body: LuckyMokey.Formmsdyn_journalline_Quick_Create.Body;
	}
}
declare namespace OptionSet {
	namespace msdyn_journalline {
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
		enum msdyn_BillingStatus {
			/** 192350004 */
			Ready_to_Invoice,
			/** 690970000 */
			Work_order_closed_posted,
			/** 192350000 */
			Unbilled_Sales_Created,
			/** 192350001 */
			Customer_Invoice_Created,
			/** 192350002 */
			Customer_Invoice_Posted,
			/** 192350003 */
			Canceled
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