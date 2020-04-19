//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace Formmsdyn_transactiontype_Information {
		interface tab__FB738610_ECE5_4F2C_BE45_09EA8EB0CFE2_Sections {
			_FB738610_ECE5_4F2C_BE45_09EA8EB0CFE2_SECTION_2: DevKit.Form.Controls.ControlSection;
		}
		interface tab__FB738610_ECE5_4F2C_BE45_09EA8EB0CFE2 extends DevKit.Form.Controls.IControlTab {
			Section: tab__FB738610_ECE5_4F2C_BE45_09EA8EB0CFE2_Sections;
		}
		interface Tabs {
			_FB738610_ECE5_4F2C_BE45_09EA8EB0CFE2: tab__FB738610_ECE5_4F2C_BE45_09EA8EB0CFE2;
		}
		interface Body {
			Tab: Tabs;
			msdyn_DefaultUnit: DevKit.Form.Controls.ControlLookup;
			msdyn_TransactionClassification: DevKit.Form.Controls.ControlOptionSet;
			/** The code of the transaction type. */
			msdyn_TransactionTypeCode: DevKit.Form.Controls.ControlOptionSet;
			msdyn_UnitGroup: DevKit.Form.Controls.ControlLookup;
		}
		interface Navigation {
			nav_msdyn_msdyn_transactiontype_msdyn_contractlinescheduleofvalue_transactiontype: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_msdyn_transactiontype_msdyn_expense_TransactionType: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_msdyn_transactiontype_msdyn_quotelineanalyticsbreakdown_TransactionType: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_msdyn_transactiontype_msdyn_transactiontype_ParentTransactionType: DevKit.Form.Controls.ControlNavigationItem
		}
	}
	class Formmsdyn_transactiontype_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_transactiontype_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form msdyn_transactiontype_Information */
		Body: LuckyMokey.Formmsdyn_transactiontype_Information.Body;
		/** The Navigation of form msdyn_transactiontype_Information */
		Navigation: LuckyMokey.Formmsdyn_transactiontype_Information.Navigation;
	}
}
declare namespace OptionSet {
	namespace msdyn_transactiontype {
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
		enum msdyn_TransactionTypeCode {
			/** 192350000 */
			Cost,
			/** 192350004 */
			Project_Contract,
			/** 192350005 */
			Unbilled_Sales,
			/** 192350006 */
			Billed_Sales,
			/** 192350007 */
			Resourcing_Unit_Cost,
			/** 192350008 */
			Inter_Organizational_Sales
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