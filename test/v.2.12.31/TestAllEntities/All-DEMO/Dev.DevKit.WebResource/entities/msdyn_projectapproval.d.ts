//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_projectapproval_Information {
		interface Header extends DevKit.Controls.IHeader {
			/** Shows the name of the approver. */
			msdyn_ApprovedBy: DevKit.Controls.Lookup;
			/** Shows the resource that the entry is submitted for. */
			msdyn_bookableresource: DevKit.Controls.Lookup;
			/** Shows the stage of the record. */
			msdyn_recordstage: DevKit.Controls.OptionSet;
		}
		interface tab__6D5860C6_AEB2_4D17_9DB3_226A9D6466F5_Sections {
			_column_2_section_1: DevKit.Controls.Section;
			_D55B3080_93D0_497A_A1C6_823D788E066A: DevKit.Controls.Section;
		}
		interface tab__6D5860C6_AEB2_4D17_9DB3_226A9D6466F5 extends DevKit.Controls.ITab {
			Section: tab__6D5860C6_AEB2_4D17_9DB3_226A9D6466F5_Sections;
		}
		interface Tabs {
			_6D5860C6_AEB2_4D17_9DB3_226A9D6466F5: tab__6D5860C6_AEB2_4D17_9DB3_226A9D6466F5;
		}
		interface Body {
			Tab: Tabs;
			/** Billing type for the project approval line. */
			msdyn_BillingType: DevKit.Controls.OptionSet;
			/** Shows the hours submitted for the transaction. */
			msdyn_CostQuantity: DevKit.Controls.Decimal;
			/** Expense Entry Id. */
			msdyn_ExpenseEntry: DevKit.Controls.Lookup;
			/** Shows the external comments entered for the transaction. */
			msdyn_ExternalComments: DevKit.Controls.String;
			/** Shows whether the transaction has a receipt. */
			msdyn_hasreceipt: DevKit.Controls.Boolean;
			/** Shows the sales price of the transaction. */
			msdyn_SalesPrice: DevKit.Controls.Money;
			/** Shows the billable hours for the transaction. */
			msdyn_SalesQuantity: DevKit.Controls.Decimal;
			/** Resource that has submitted the entry for approval. */
			msdyn_SubmittedBy: DevKit.Controls.Lookup;
			/** Time Entry Id. */
			msdyn_TimeEntry: DevKit.Controls.Lookup;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface quickForm_ExpenseEntryDetail_Body {
			msdyn_Amount: DevKit.Controls.QuickView;
			msdyn_ExpenseCategory: DevKit.Controls.QuickView;
			msdyn_externaldescription: DevKit.Controls.QuickView;
			msdyn_Price: DevKit.Controls.QuickView;
			msdyn_Project: DevKit.Controls.QuickView;
			msdyn_Quantity: DevKit.Controls.QuickView;
			msdyn_Salestaxamount: DevKit.Controls.QuickView;
			msdyn_totalamount: DevKit.Controls.QuickView;
			msdyn_TransactionDate: DevKit.Controls.QuickView;
			msdyn_Unit: DevKit.Controls.QuickView;
			msdyn_UnitGroup: DevKit.Controls.QuickView;
			TransactionCurrencyId: DevKit.Controls.QuickView;
		}
		interface quickForm_TimeEntryDetail_Body {
			msdyn_date: DevKit.Controls.QuickView;
			msdyn_description: DevKit.Controls.QuickView;
			msdyn_duration: DevKit.Controls.QuickView;
			msdyn_project: DevKit.Controls.QuickView;
			msdyn_projectTask: DevKit.Controls.QuickView;
			msdyn_resourceCategory: DevKit.Controls.QuickView;
			msdyn_type: DevKit.Controls.QuickView;
		}
		interface quickForm_ExpenseEntryDetail extends DevKit.Controls.IQuickView {
			Body: quickForm_ExpenseEntryDetail_Body;
		}
		interface quickForm_TimeEntryDetail extends DevKit.Controls.IQuickView {
			Body: quickForm_TimeEntryDetail_Body;
		}
		interface QuickForm {
			ExpenseEntryDetail: quickForm_ExpenseEntryDetail;
			TimeEntryDetail: quickForm_TimeEntryDetail;
		}
	}
	class Formmsdyn_projectapproval_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_projectapproval_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_projectapproval_Information */
		Body: DevKit.Formmsdyn_projectapproval_Information.Body;
		/** The Header section of form msdyn_projectapproval_Information */
		Header: DevKit.Formmsdyn_projectapproval_Information.Header;
		/** The QuickForm of form msdyn_projectapproval_Information */
		QuickForm: DevKit.Formmsdyn_projectapproval_Information.QuickForm;
	}
}
declare namespace OptionSet {
	namespace msdyn_projectapproval {
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
		enum msdyn_EntryType {
			/** 1 */
			Expense,
			/** 0 */
			Time
		}
		enum msdyn_recordstage {
			/** 2 */
			Approved,
			/** 3 */
			Pending,
			/** 5 */
			Recall_Request_Approved,
			/** 6 */
			Recall_Request_Rejected,
			/** 4 */
			Recall_Requested,
			/** 1 */
			Rejected,
			/** 0 */
			Submitted
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
//{'JsForm':['Information'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false,'Version':'2.12.31','JsFormVersion':'v2'}