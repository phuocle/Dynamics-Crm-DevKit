//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace Formmsdyn_transactioncategory_Information {
		interface tab__4EE119BD_DC5A_4657_9359_C0361849634A_Sections {
			_0DB3DC26_6905_4F70_AEA5_0465394A8256: DevKit.Form.Controls.ControlSection;
			_4EE119BD_DC5A_4657_9359_C0361849634A_SECTION_2: DevKit.Form.Controls.ControlSection;
		}
		interface tab__4EE119BD_DC5A_4657_9359_C0361849634A extends DevKit.Form.Controls.IControlTab {
			Section: tab__4EE119BD_DC5A_4657_9359_C0361849634A_Sections;
		}
		interface Tabs {
			_4EE119BD_DC5A_4657_9359_C0361849634A: tab__4EE119BD_DC5A_4657_9359_C0361849634A;
		}
		interface Body {
			Tab: Tabs;
			/** Select the default billing type of project transactions in this category. Valid values are Chargeable, Non chargeable or Complimentary. Only chargeable transactions will add to an invoice total */
			msdyn_BillingType: DevKit.Form.Controls.ControlOptionSet;
			msdyn_DefaultUnit: DevKit.Form.Controls.ControlLookup;
			/** Type the name of the custom entity. */
			msdyn_name: DevKit.Form.Controls.ControlString;
			/** Select the unit schedule that is associated with the transaction category. */
			msdyn_UnitGroup: DevKit.Form.Controls.ControlLookup;
		}
	}
	class Formmsdyn_transactioncategory_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_transactioncategory_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form msdyn_transactioncategory_Information */
		Body: LuckyMokey.Formmsdyn_transactioncategory_Information.Body;
	}
}
declare namespace OptionSet {
	namespace msdyn_transactioncategory {
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