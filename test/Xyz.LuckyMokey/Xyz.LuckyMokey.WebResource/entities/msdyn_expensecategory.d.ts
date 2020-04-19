//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace Formmsdyn_expensecategory_Information {
		interface Tabs {
		}
		interface Body {
			/** Select the Transaction Category associated with Expense Category. */
			msdyn_ExpenseCategoryuId: DevKit.Form.Controls.ControlLookup;
			/** Enter the type of expense */
			msdyn_ExpenseType: DevKit.Form.Controls.ControlOptionSet;
			/** Type the name of the custom entity. */
			msdyn_name: DevKit.Form.Controls.ControlString;
			/** Shows whether the expense entry requires a receipt. */
			msdyn_ReceiptRequired: DevKit.Form.Controls.ControlOptionSet;
		}
	}
	class Formmsdyn_expensecategory_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_expensecategory_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form msdyn_expensecategory_Information */
		Body: LuckyMokey.Formmsdyn_expensecategory_Information.Body;
	}
}
declare namespace OptionSet {
	namespace msdyn_expensecategory {
		enum msdyn_ExpenseType {
			/** 192350001 */
			Car_Rental,
			/** 192350002 */
			Meal,
			/** 192350003 */
			Airline,
			/** 192350004 */
			Entertainment,
			/** 192350005 */
			Gift,
			/** 192350006 */
			Conference,
			/** 192350007 */
			Miscellaneous,
			/** 192350008 */
			Mileage,
			/** 192350009 */
			Per_diem,
			/** 192350000 */
			Hotel
		}
		enum msdyn_ReceiptRequired {
			/** 192350000 */
			Optional,
			/** 192350001 */
			Mandatory
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