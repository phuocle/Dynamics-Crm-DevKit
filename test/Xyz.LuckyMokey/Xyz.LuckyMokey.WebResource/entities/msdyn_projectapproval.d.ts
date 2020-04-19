//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace Formmsdyn_projectapproval_Information {
		interface Header {
			/** Shows the name of the approver. */
			msdyn_ApprovedBy: DevKit.Form.Controls.ControlLookup;
			/** Shows the resource that the entry is submitted for. */
			msdyn_bookableresource: DevKit.Form.Controls.ControlLookup;
			/** Shows the stage of the record. */
			msdyn_recordstage: DevKit.Form.Controls.ControlOptionSet;
		}
		interface tab__6D5860C6_AEB2_4D17_9DB3_226A9D6466F5_Sections {
			_D55B3080_93D0_497A_A1C6_823D788E066A: DevKit.Form.Controls.ControlSection;
			_column_2_section_1: DevKit.Form.Controls.ControlSection;
		}
		interface tab__6D5860C6_AEB2_4D17_9DB3_226A9D6466F5 extends DevKit.Form.Controls.IControlTab {
			Section: tab__6D5860C6_AEB2_4D17_9DB3_226A9D6466F5_Sections;
		}
		interface Tabs {
			_6D5860C6_AEB2_4D17_9DB3_226A9D6466F5: tab__6D5860C6_AEB2_4D17_9DB3_226A9D6466F5;
		}
		interface Body {
			Tab: Tabs;
			/** Billing type for the project approval line. */
			msdyn_BillingType: DevKit.Form.Controls.ControlOptionSet;
			/** Shows the hours submitted for the transaction. */
			msdyn_CostQuantity: DevKit.Form.Controls.ControlDecimal;
			/** Expense Entry Id. */
			msdyn_ExpenseEntry: DevKit.Form.Controls.ControlLookup;
			ExpenseEntryDetail: DevKit.Form.Controls.ControlQuickView;
			/** Shows the external comments entered for the transaction. */
			msdyn_ExternalComments: DevKit.Form.Controls.ControlString;
			/** Shows whether the transaction has a receipt. */
			msdyn_hasreceipt: DevKit.Form.Controls.ControlBoolean;
			/** Shows the sales price of the transaction. */
			msdyn_SalesPrice: DevKit.Form.Controls.ControlMoney;
			/** Shows the billable hours for the transaction. */
			msdyn_SalesQuantity: DevKit.Form.Controls.ControlDecimal;
			/** Resource that has submitted the entry for approval. */
			msdyn_SubmittedBy: DevKit.Form.Controls.ControlLookup;
			/** Time Entry Id. */
			msdyn_TimeEntry: DevKit.Form.Controls.ControlLookup;
			TimeEntryDetail: DevKit.Form.Controls.ControlQuickView;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
		}
	}
	class Formmsdyn_projectapproval_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_projectapproval_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form msdyn_projectapproval_Information */
		Body: LuckyMokey.Formmsdyn_projectapproval_Information.Body;
		/** The Header section of form msdyn_projectapproval_Information */
		Header: LuckyMokey.Formmsdyn_projectapproval_Information.Header;
	}
}
declare namespace OptionSet {
	namespace msdyn_projectapproval {
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
		enum msdyn_EntryType {
			/** 0 */
			Time,
			/** 1 */
			Expense
		}
		enum msdyn_recordstage {
			/** 3 */
			Pending,
			/** 0 */
			Submitted,
			/** 1 */
			Rejected,
			/** 2 */
			Approved,
			/** 4 */
			Recall_Requested,
			/** 5 */
			Recall_Request_Approved,
			/** 6 */
			Recall_Request_Rejected
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
//{'JsForm':['Information'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false}