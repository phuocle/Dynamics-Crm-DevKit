//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace Formmsdyn_forecastinstance_Information {
		interface tab_tab_Sections {
			section_1: DevKit.Form.Controls.ControlSection;
			tab_2_section_2: DevKit.Form.Controls.ControlSection;
		}
		interface tab_tab extends DevKit.Form.Controls.IControlTab {
			Section: tab_tab_Sections;
		}
		interface Tabs {
			tab: tab_tab;
		}
		interface Body {
			Tab: Tabs;
			/** Shows the actual value (money) achieved toward the target as of the last rollup date. */
			msdyn_actualamount: DevKit.Form.Controls.ControlMoney;
			/** Unique identifier for the forecast definition that is associated with the forecast. */
			msdyn_forecastdefinitionid: DevKit.Form.Controls.ControlLookup;
			/** Unique identifier for the forecast recurrence associated with the forecast. */
			msdyn_forecastrecurrenceid: DevKit.Form.Controls.ControlLookup;
			/** Shows the changed value of the best case rollup (Money type) as of the last rolled-up date. */
			msdyn_manualbestcaseamount: DevKit.Form.Controls.ControlMoney;
			/** Shows the changed value of the committed rollup (Money type) as of the last rolled-up date. */
			msdyn_manualcommittedamount: DevKit.Form.Controls.ControlMoney;
			/** Shows the changed value of the pipeline rollup (Money type) as of the last rolled-up date. */
			msdyn_manualpipelineamount: DevKit.Form.Controls.ControlMoney;
			/** Shows the percentage achieved against the target. */
			msdyn_percentageachieved: DevKit.Form.Controls.ControlDecimal;
			/** Select a target (Money type) to track a monetary amount, such as estimated revenue from an opportunity. */
			msdyn_targetamount: DevKit.Form.Controls.ControlMoney;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
		}
	}
	class Formmsdyn_forecastinstance_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_forecastinstance_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form msdyn_forecastinstance_Information */
		Body: LuckyMokey.Formmsdyn_forecastinstance_Information.Body;
	}
}
declare namespace OptionSet {
	namespace msdyn_forecastinstance {
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