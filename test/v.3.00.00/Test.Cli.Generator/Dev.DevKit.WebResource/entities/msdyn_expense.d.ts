//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_expense_Information {
		interface Tabs {
		}
		interface Body {
			/** Enter the total amount for expense. */
			msdyn_Amount: DevKit.Controls.Money;
			/** Enter the expense category. */
			msdyn_ExpenseCategory: DevKit.Controls.Lookup;
			/** Shows the status of the expense entry. */
			msdyn_ExpenseStatus: DevKit.Controls.OptionSet;
			/** The external comments of the expense entry. */
			msdyn_externaldescription: DevKit.Controls.String;
			/** Enter the expense's purpose. */
			msdyn_name: DevKit.Controls.String;
			/** Enter the Unit Price */
			msdyn_Price: DevKit.Controls.Money;
			/** Enter the project. */
			msdyn_Project: DevKit.Controls.Lookup;
			/** Enter the Quantity */
			msdyn_Quantity: DevKit.Controls.Decimal;
			/** Enter the sales tax amount. */
			msdyn_Salestaxamount: DevKit.Controls.Money;
			/** Shows the total amount of the expense entry. */
			msdyn_totalamount: DevKit.Controls.Money;
			/** Enter the date of the expense transaction. */
			msdyn_TransactionDate: DevKit.Controls.Date;
			/** Enter the Unit */
			msdyn_Unit: DevKit.Controls.Lookup;
			/** Enter the Unit Group */
			msdyn_UnitGroup: DevKit.Controls.Lookup;
			notescontrol: DevKit.Controls.Note;
			/** Shows the currency associated with the entity. */
			TransactionCurrencyId: DevKit.Controls.Lookup;
		}
		interface Navigation {
			nav_msdyn_msdyn_expense_msdyn_expensereceipt_ExpenseId: DevKit.Controls.NavigationItem
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class Formmsdyn_expense_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_expense_Information */
		Body: DevKit.Formmsdyn_expense_Information.Body;
		/** The Navigation of form msdyn_expense_Information */
		Navigation: DevKit.Formmsdyn_expense_Information.Navigation;
		/** The Process of form msdyn_expense_Information */
		Process: DevKit.Formmsdyn_expense_Information.Process;
		/** The SidePanes of form msdyn_expense_Information */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormCreate_Expense {
		interface tab_tab_1_Sections {
			tab_1_column_1_section_1: DevKit.Controls.Section;
		}
		interface tab_tab_1 extends DevKit.Controls.ITab {
			Section: tab_tab_1_Sections;
		}
		interface Tabs {
			tab_1: tab_tab_1;
		}
		interface Body {
			Tab: Tabs;
			/** Enter the total amount for expense. */
			msdyn_Amount: DevKit.Controls.Money;
			/** Enter the expense category. */
			msdyn_ExpenseCategory: DevKit.Controls.Lookup;
			/** The external comments of the expense entry. */
			msdyn_externaldescription: DevKit.Controls.String;
			/** Enter the expense's purpose. */
			msdyn_name: DevKit.Controls.String;
			/** Enter the Unit Price */
			msdyn_Price: DevKit.Controls.Money;
			/** Enter the project. */
			msdyn_Project: DevKit.Controls.Lookup;
			/** Enter the Quantity */
			msdyn_Quantity: DevKit.Controls.Decimal;
			/** Enter the sales tax amount. */
			msdyn_Salestaxamount: DevKit.Controls.Money;
			/** Enter the date of the expense transaction. */
			msdyn_TransactionDate: DevKit.Controls.Date;
			/** Enter the Unit */
			msdyn_Unit: DevKit.Controls.Lookup;
			/** Enter the Unit Group */
			msdyn_UnitGroup: DevKit.Controls.Lookup;
			/** Shows the currency associated with the entity. */
			TransactionCurrencyId: DevKit.Controls.Lookup;
		}
	}
	class FormCreate_Expense extends DevKit.IForm {
		/**
		* Create Expense [Quick Create]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Create_Expense */
		Body: DevKit.FormCreate_Expense.Body;
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
		/** Enter the total amount for expense. */
		msdyn_Amount: number;
		/** Value of the Amount in base currency. */
		readonly msdyn_amount_Base: number;
		/** Shows the bookable resource.. */
		msdyn_bookableresource: string;
		/** Enter the expense category. */
		msdyn_ExpenseCategory: string;
		/** Shows the entity instances. */
		msdyn_expenseId: string;
		/** Shows the status of the expense entry. */
		msdyn_ExpenseStatus: OptionSet.msdyn_expense.msdyn_ExpenseStatus;
		/** The external comments of the expense entry. */
		msdyn_externaldescription: string;
		/** Select the manager of the expense user. This field is used for approval. */
		msdyn_manager: string;
		/** Enter the expense's purpose. */
		msdyn_name: string;
		/** Enter the Unit Price */
		msdyn_Price: number;
		/** Value of the Price in base currency. */
		readonly msdyn_price_Base: number;
		/** Enter the project. */
		msdyn_Project: string;
		/** Enter the Quantity */
		msdyn_Quantity: number;
		/** Select the organizational unit at the time the entry was registered of the resource who had the expense. */
		msdyn_ResourceOrganizationalUnitId: string;
		/** Enter the sales tax amount. */
		msdyn_Salestaxamount: number;
		/** Value of the Sales tax amount in base currency. */
		readonly msdyn_salestaxamount_Base: number;
		/** Shows the status that the record will be transitioned to asynchronously. Currently, this is only implemented from submission to approved. */
		msdyn_targetExpenseStatus: OptionSet.msdyn_expense.msdyn_targetExpenseStatus;
		/** Shows the total amount of the expense entry. */
		readonly msdyn_totalamount: number;
		/** Enter the value of the total amount in the base currency. */
		readonly msdyn_totalamount_Base: number;
		/** Enter the date of the expense transaction. */
		msdyn_TransactionDate_UtcDateOnly: Date;
		/** Enter the Unit */
		msdyn_Unit: string;
		/** Enter the Unit Group */
		msdyn_UnitGroup: string;
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
		/** Contains the id of the process associated with the entity. */
		processid: string;
		/** Contains the id of the stage where the entity is located. */
		stageid: string;
		/** Status of the Expense */
		statecode: OptionSet.msdyn_expense.statecode;
		/** Reason for the status of the Expense */
		statuscode: OptionSet.msdyn_expense.statuscode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Shows the currency associated with the entity. */
		TransactionCurrencyId: string;
		/** A comma separated list of string values representing the unique identifiers of stages in a Business Process Flow Instance in the order that they occur. */
		traversedpath: string;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
	}
}
declare namespace OptionSet {
	namespace msdyn_expense {
		enum msdyn_ExpenseStatus {
			/** 192350002 */
			Approved,
			/** 192350000 */
			Draft,
			/** 192350005 */
			Paid,
			/** 192350004 */
			Posted,
			/** 192350006 */
			Recall_Requested,
			/** 192350003 */
			Rejected,
			/** 192350001 */
			Submitted
		}
		enum msdyn_targetExpenseStatus {
			/** 192350002 */
			Approved,
			/** 192350000 */
			Draft,
			/** 192350005 */
			Paid,
			/** 192350004 */
			Posted,
			/** 192350006 */
			Recall_Requested,
			/** 192350003 */
			Rejected,
			/** 192350001 */
			Submitted
		}
		enum statecode {
			/** 0 */
			Active,
			/** 1 */
			Inactive
		}
		enum statuscode {
			/** 867380003 */
			Approved,
			/** 867380000 */
			Draft,
			/** 867380005 */
			Paid,
			/** 867380004 */
			Posted,
			/** 867380001 */
			Rejected,
			/** 867380002 */
			Submitted
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.00.00','WebApiVersion':'2'}