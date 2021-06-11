//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_orderlinetransactionclassification_Information {
		interface tab__9E13D6C0_8769_4321_8ABC_80894F326D07_Sections {
			_9E13D6C0_8769_4321_8ABC_80894F326D07_SECTION_2: DevKit.Controls.Section;
		}
		interface tab_ResourceCategoriesTab_Sections {
			ResourceCategoriesSection: DevKit.Controls.Section;
		}
		interface tab_TransactionCategoriesTab_Sections {
			TransactionCategoriesSection: DevKit.Controls.Section;
		}
		interface tab__9E13D6C0_8769_4321_8ABC_80894F326D07 extends DevKit.Controls.ITab {
			Section: tab__9E13D6C0_8769_4321_8ABC_80894F326D07_Sections;
		}
		interface tab_ResourceCategoriesTab extends DevKit.Controls.ITab {
			Section: tab_ResourceCategoriesTab_Sections;
		}
		interface tab_TransactionCategoriesTab extends DevKit.Controls.ITab {
			Section: tab_TransactionCategoriesTab_Sections;
		}
		interface Tabs {
			_9E13D6C0_8769_4321_8ABC_80894F326D07: tab__9E13D6C0_8769_4321_8ABC_80894F326D07;
			ResourceCategoriesTab: tab_ResourceCategoriesTab;
			TransactionCategoriesTab: tab_TransactionCategoriesTab;
		}
		interface Body {
			Tab: Tabs;
			/** Select whether the transaction classification identified on the project contract line will be charged to the customer or not. Valid values are Chargeable, Non-chargeable and Complimentary.   */
			msdyn_BillingType: DevKit.Controls.OptionSet;
			/** Type the name of the custom entity. */
			msdyn_description: DevKit.Controls.String;
			/** Determines whether the transaction classification identified on the project contract line will be used to map costs in the classification to the project contract line to affect the gross margin calculation. */
			msdyn_Include: DevKit.Controls.Boolean;
			/** Transaction classification of the Project Contract line transaction */
			msdyn_TransactionClassification: DevKit.Controls.OptionSet;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Grid {
			ResourceCategoriesGrid: DevKit.Controls.Grid;
			TransactionCategoriesGrid: DevKit.Controls.Grid;
		}
	}
	class Formmsdyn_orderlinetransactionclassification_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_orderlinetransactionclassification_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_orderlinetransactionclassification_Information */
		Body: DevKit.Formmsdyn_orderlinetransactionclassification_Information.Body;
		/** The Grid of form msdyn_orderlinetransactionclassification_Information */
		Grid: DevKit.Formmsdyn_orderlinetransactionclassification_Information.Grid;
	}
}
declare namespace OptionSet {
	namespace msdyn_orderlinetransactionclassification {
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