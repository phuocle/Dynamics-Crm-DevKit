//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace Formmsdyn_expense_Information {
		interface Tabs {
		}
		interface Body {
			notescontrol: DevKit.Form.Controls.ControlNote;
			/** Enter the total amount for expense. */
			msdyn_Amount: DevKit.Form.Controls.ControlMoney;
			/** Enter the expense category. */
			msdyn_ExpenseCategory: DevKit.Form.Controls.ControlLookup;
			/** Shows the status of the expense entry. */
			msdyn_ExpenseStatus: DevKit.Form.Controls.ControlOptionSet;
			/** The external comments of the expense entry. */
			msdyn_externaldescription: DevKit.Form.Controls.ControlString;
			/** Enter the expense's purpose. */
			msdyn_name: DevKit.Form.Controls.ControlString;
			/** Enter the Unit Price */
			msdyn_Price: DevKit.Form.Controls.ControlMoney;
			/** Enter the project. */
			msdyn_Project: DevKit.Form.Controls.ControlLookup;
			/** Enter the Quantity */
			msdyn_Quantity: DevKit.Form.Controls.ControlDecimal;
			/** Enter the sales tax amount. */
			msdyn_Salestaxamount: DevKit.Form.Controls.ControlMoney;
			/** Shows the total amount of the expense entry. */
			msdyn_totalamount: DevKit.Form.Controls.ControlMoney;
			/** Enter the date of the expense transaction. */
			msdyn_TransactionDate: DevKit.Form.Controls.ControlDate;
			/** Enter the Unit */
			msdyn_Unit: DevKit.Form.Controls.ControlLookup;
			/** Enter the Unit Group */
			msdyn_UnitGroup: DevKit.Form.Controls.ControlLookup;
			/** Shows the currency associated with the entity. */
			TransactionCurrencyId: DevKit.Form.Controls.ControlLookup;
		}
		interface Navigation {
			nav_msdyn_msdyn_expense_msdyn_expensereceipt_ExpenseId: DevKit.Form.Controls.ControlNavigationItem
		}
	}
	class Formmsdyn_expense_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_expense_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form msdyn_expense_Information */
		Body: LuckyMokey.Formmsdyn_expense_Information.Body;
		/** The Navigation of form msdyn_expense_Information */
		Navigation: LuckyMokey.Formmsdyn_expense_Information.Navigation;
	}
	namespace FormCreate_Expense {
		interface tab_tab_1_Sections {
			tab_1_column_1_section_1: DevKit.Form.Controls.ControlSection;
		}
		interface tab_tab_1 extends DevKit.Form.Controls.IControlTab {
			Section: tab_tab_1_Sections;
		}
		interface Tabs {
			tab_1: tab_tab_1;
		}
		interface Body {
			Tab: Tabs;
			/** Enter the total amount for expense. */
			msdyn_Amount: DevKit.Form.Controls.ControlMoney;
			/** Enter the expense category. */
			msdyn_ExpenseCategory: DevKit.Form.Controls.ControlLookup;
			/** The external comments of the expense entry. */
			msdyn_externaldescription: DevKit.Form.Controls.ControlString;
			/** Enter the expense's purpose. */
			msdyn_name: DevKit.Form.Controls.ControlString;
			/** Enter the Unit Price */
			msdyn_Price: DevKit.Form.Controls.ControlMoney;
			/** Enter the project. */
			msdyn_Project: DevKit.Form.Controls.ControlLookup;
			/** Enter the Quantity */
			msdyn_Quantity: DevKit.Form.Controls.ControlDecimal;
			/** Enter the sales tax amount. */
			msdyn_Salestaxamount: DevKit.Form.Controls.ControlMoney;
			/** Enter the date of the expense transaction. */
			msdyn_TransactionDate: DevKit.Form.Controls.ControlDate;
			/** Enter the Unit */
			msdyn_Unit: DevKit.Form.Controls.ControlLookup;
			/** Enter the Unit Group */
			msdyn_UnitGroup: DevKit.Form.Controls.ControlLookup;
			/** Shows the currency associated with the entity. */
			TransactionCurrencyId: DevKit.Form.Controls.ControlLookup;
		}
	}
	class FormCreate_Expense extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form Create_Expense
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Create_Expense */
		Body: LuckyMokey.FormCreate_Expense.Body;
	}
}
declare namespace OptionSet {
	namespace msdyn_expense {
		enum msdyn_ExpenseStatus {
			/** 192350000 */
			Draft,
			/** 192350001 */
			Submitted,
			/** 192350002 */
			Approved,
			/** 192350003 */
			Rejected,
			/** 192350004 */
			Posted,
			/** 192350005 */
			Paid,
			/** 192350006 */
			Recall_Requested
		}
		enum msdyn_targetExpenseStatus {
			/** 192350000 */
			Draft,
			/** 192350001 */
			Submitted,
			/** 192350002 */
			Approved,
			/** 192350003 */
			Rejected,
			/** 192350004 */
			Posted,
			/** 192350005 */
			Paid,
			/** 192350006 */
			Recall_Requested
		}
		enum statecode {
			/** 0 */
			Active,
			/** 1 */
			Inactive
		}
		enum statuscode {
			/** 867380000 */
			Draft,
			/** 867380001 */
			Rejected,
			/** 867380002 */
			Submitted,
			/** 867380003 */
			Approved,
			/** 867380004 */
			Posted,
			/** 867380005 */
			Paid
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
//{'JsForm':['Create Expense','Information'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false}