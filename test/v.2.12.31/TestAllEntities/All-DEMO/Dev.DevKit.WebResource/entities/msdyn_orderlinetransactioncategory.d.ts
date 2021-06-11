//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_orderlinetransactioncategory_Information {
		interface tab__30783780_16CD_4133_8C75_2D96CDE84194_Sections {
			_30783780_16CD_4133_8C75_2D96CDE84194_SECTION_2: DevKit.Controls.Section;
		}
		interface tab__30783780_16CD_4133_8C75_2D96CDE84194 extends DevKit.Controls.ITab {
			Section: tab__30783780_16CD_4133_8C75_2D96CDE84194_Sections;
		}
		interface Tabs {
			_30783780_16CD_4133_8C75_2D96CDE84194: tab__30783780_16CD_4133_8C75_2D96CDE84194;
		}
		interface Body {
			Tab: Tabs;
			/** Select whether this category will be charged to the customer or not. Only transactions logged for chargeable categories will add to the invoice total */
			msdyn_BillingType: DevKit.Controls.OptionSet;
			/** Type the name of the custom entity. */
			msdyn_description: DevKit.Controls.String;
			/** Transaction category of the Project Contract line transaction */
			msdyn_TransactionCategory: DevKit.Controls.Lookup;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
	}
	class Formmsdyn_orderlinetransactioncategory_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_orderlinetransactioncategory_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_orderlinetransactioncategory_Information */
		Body: DevKit.Formmsdyn_orderlinetransactioncategory_Information.Body;
	}
}
declare namespace OptionSet {
	namespace msdyn_orderlinetransactioncategory {
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