//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace Formmsdyn_opportunitylinetransactionclassificatio_Information {
		interface tab__0F5B7EFE_11D1_4FA3_AE3A_1A5C1126822D_Sections {
			_0F5B7EFE_11D1_4FA3_AE3A_1A5C1126822D_SECTION_2: DevKit.Form.Controls.ControlSection;
		}
		interface tab_ResourceCategoriesTab_Sections {
			ResourceCategoriesSection: DevKit.Form.Controls.ControlSection;
		}
		interface tab_TransactionCategoriesTab_Sections {
			TransactionCategoriesSection: DevKit.Form.Controls.ControlSection;
		}
		interface tab__0F5B7EFE_11D1_4FA3_AE3A_1A5C1126822D extends DevKit.Form.Controls.IControlTab {
			Section: tab__0F5B7EFE_11D1_4FA3_AE3A_1A5C1126822D_Sections;
		}
		interface tab_ResourceCategoriesTab extends DevKit.Form.Controls.IControlTab {
			Section: tab_ResourceCategoriesTab_Sections;
		}
		interface tab_TransactionCategoriesTab extends DevKit.Form.Controls.IControlTab {
			Section: tab_TransactionCategoriesTab_Sections;
		}
		interface Tabs {
			_0F5B7EFE_11D1_4FA3_AE3A_1A5C1126822D: tab__0F5B7EFE_11D1_4FA3_AE3A_1A5C1126822D;
			ResourceCategoriesTab: tab_ResourceCategoriesTab;
			TransactionCategoriesTab: tab_TransactionCategoriesTab;
		}
		interface Body {
			Tab: Tabs;
			RolesGrid: DevKit.Form.Controls.ControlGrid;
			TransactionCategoriesGrid: DevKit.Form.Controls.ControlGrid;
			/** Select whether the transaction classification identified on the opportunity line will be charged to the customer or not. Valid values are Chargeable, Non-chargeable and Complimentary.   */
			msdyn_BillingType: DevKit.Form.Controls.ControlOptionSet;
			/** Type the name of the custom entity. */
			msdyn_description: DevKit.Form.Controls.ControlString;
			/** Select whether the transaction classification identified on the opportunity line will be used to map costs in the classification to the opportunity line to affect the gross margin calculation. */
			msdyn_Include: DevKit.Form.Controls.ControlBoolean;
			/** Select the transaction classifications that apply to the opportunity line. Select the transaction classifications are broadly 4 types: Select the time, Expense, Material and Fee */
			msdyn_TransactionClassification: DevKit.Form.Controls.ControlOptionSet;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
		}
	}
	class Formmsdyn_opportunitylinetransactionclassificatio_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_opportunitylinetransactionclassificatio_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form msdyn_opportunitylinetransactionclassificatio_Information */
		Body: LuckyMokey.Formmsdyn_opportunitylinetransactionclassificatio_Information.Body;
	}
}
declare namespace OptionSet {
	namespace msdyn_opportunitylinetransactionclassificatio {
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