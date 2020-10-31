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
	class msdyn_expenseApi {
		/**
		* DynamicsCrm.DevKit msdyn_expenseApi
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
		/** Enter the total amount for expense. */
		msdyn_Amount: DevKit.WebApi.MoneyValue;
		/** Value of the Amount in base currency. */
		msdyn_amount_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Shows the bookable resource.. */
		msdyn_bookableresource: DevKit.WebApi.LookupValue;
		/** Enter the expense category. */
		msdyn_ExpenseCategory: DevKit.WebApi.LookupValue;
		/** Shows the entity instances. */
		msdyn_expenseId: DevKit.WebApi.GuidValue;
		/** Shows the status of the expense entry. */
		msdyn_ExpenseStatus: DevKit.WebApi.OptionSetValue;
		/** The external comments of the expense entry. */
		msdyn_externaldescription: DevKit.WebApi.StringValue;
		/** Select the manager of the expense user. This field is used for approval. */
		msdyn_manager: DevKit.WebApi.LookupValue;
		/** Enter the expense's purpose. */
		msdyn_name: DevKit.WebApi.StringValue;
		/** Enter the Unit Price */
		msdyn_Price: DevKit.WebApi.MoneyValue;
		/** Value of the Price in base currency. */
		msdyn_price_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Enter the project. */
		msdyn_Project: DevKit.WebApi.LookupValue;
		/** Enter the Quantity */
		msdyn_Quantity: DevKit.WebApi.DecimalValue;
		/** Select the organizational unit at the time the entry was registered of the resource who had the expense. */
		msdyn_ResourceOrganizationalUnitId: DevKit.WebApi.LookupValue;
		/** Enter the sales tax amount. */
		msdyn_Salestaxamount: DevKit.WebApi.MoneyValue;
		/** Value of the Sales tax amount in base currency. */
		msdyn_salestaxamount_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Shows the status that the record will be transitioned to asynchronously. Currently, this is only implemented from submission to approved. */
		msdyn_targetExpenseStatus: DevKit.WebApi.OptionSetValue;
		/** Shows the total amount of the expense entry. */
		msdyn_totalamount: DevKit.WebApi.MoneyValueReadonly;
		/** Enter the value of the total amount in the base currency. */
		msdyn_totalamount_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Enter the date of the expense transaction. */
		msdyn_TransactionDate_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Enter the Unit */
		msdyn_Unit: DevKit.WebApi.LookupValue;
		/** Enter the Unit Group */
		msdyn_UnitGroup: DevKit.WebApi.LookupValue;
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
		/** Contains the id of the process associated with the entity. */
		processid: DevKit.WebApi.GuidValue;
		/** Contains the id of the stage where the entity is located. */
		stageid: DevKit.WebApi.GuidValue;
		/** Status of the Expense */
		statecode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the Expense */
		statuscode: DevKit.WebApi.OptionSetValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Shows the currency associated with the entity. */
		TransactionCurrencyId: DevKit.WebApi.LookupValue;
		/** A comma separated list of string values representing the unique identifiers of stages in a Business Process Flow Instance in the order that they occur. */
		traversedpath: DevKit.WebApi.StringValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Version Number */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
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
//{'JsForm':['Create Expense','Information'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}