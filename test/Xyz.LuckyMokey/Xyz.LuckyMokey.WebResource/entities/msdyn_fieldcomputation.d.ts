//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace Formmsdyn_fieldcomputation_Information {
		interface Header {
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
		}
		interface tab__B74A3450_5DC5_412A_A7CA_2847A660F299_Sections {
			_7B7B4CF3_6D9F_4DA9_8E24_A71B75677633: DevKit.Form.Controls.ControlSection;
			_B74A3450_5DC5_412A_A7CA_2847A660F299_SECTION_2: DevKit.Form.Controls.ControlSection;
		}
		interface tab__B74A3450_5DC5_412A_A7CA_2847A660F299 extends DevKit.Form.Controls.IControlTab {
			Section: tab__B74A3450_5DC5_412A_A7CA_2847A660F299_Sections;
		}
		interface Tabs {
			_B74A3450_5DC5_412A_A7CA_2847A660F299: tab__B74A3450_5DC5_412A_A7CA_2847A660F299;
		}
		interface Body {
			Tab: Tabs;
			/** Stores an enum value that indicates the supported sales document line field will be the target computed field. */
			msdyn_ComputedField: DevKit.Form.Controls.ControlOptionSet;
			/** Stores the name of the computed transaction field and product property computation mapping. */
			msdyn_name: DevKit.Form.Controls.ControlString;
			/** Transaction product identifier. */
			msdyn_ProductId: DevKit.Form.Controls.ControlLookup;
			/** Product dynamic property identifier. */
			msdyn_PropertyId: DevKit.Form.Controls.ControlLookup;
		}
	}
	class Formmsdyn_fieldcomputation_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_fieldcomputation_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form msdyn_fieldcomputation_Information */
		Body: LuckyMokey.Formmsdyn_fieldcomputation_Information.Body;
		/** The Header section of form msdyn_fieldcomputation_Information */
		Header: LuckyMokey.Formmsdyn_fieldcomputation_Information.Header;
	}
}
declare namespace OptionSet {
	namespace msdyn_fieldcomputation {
		enum msdyn_ComputedField {
			/** 192350001 */
			Quantity
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