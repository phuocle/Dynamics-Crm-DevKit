//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace Formmsdyn_quotelinetransactioncategory_Information {
		interface tab__EF926BB0_990D_4829_AB8F_D501A6A38C10_Sections {
			_EF926BB0_990D_4829_AB8F_D501A6A38C10_SECTION_2: DevKit.Form.Controls.ControlSection;
		}
		interface tab__EF926BB0_990D_4829_AB8F_D501A6A38C10 extends DevKit.Form.Controls.IControlTab {
			Section: tab__EF926BB0_990D_4829_AB8F_D501A6A38C10_Sections;
		}
		interface Tabs {
			_EF926BB0_990D_4829_AB8F_D501A6A38C10: tab__EF926BB0_990D_4829_AB8F_D501A6A38C10;
		}
		interface Body {
			Tab: Tabs;
			/** Select whether the transaction category will be charged to the customer. Valid values are Chargeable, Non-chargeable, Complimentary. Project transactions in chargeable categories only will affect the total on the eventual invoice */
			msdyn_BillingType: DevKit.Form.Controls.ControlOptionSet;
			/** Type the name of the custom entity. */
			msdyn_description: DevKit.Form.Controls.ControlString;
			/** Shows the transaction classification for this quote line. */
			msdyn_TransactionCategory: DevKit.Form.Controls.ControlLookup;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
		}
	}
	class Formmsdyn_quotelinetransactioncategory_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_quotelinetransactioncategory_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form msdyn_quotelinetransactioncategory_Information */
		Body: LuckyMokey.Formmsdyn_quotelinetransactioncategory_Information.Body;
	}
}
declare namespace OptionSet {
	namespace msdyn_quotelinetransactioncategory {
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