//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace Formmsdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_Information {
		interface tab_StageStep2_Sections {
			StageStep2_section1: DevKit.Form.Controls.ControlSection;
		}
		interface tab_StageStep10_Sections {
			StageStep10_section1: DevKit.Form.Controls.ControlSection;
		}
		interface tab_StageStep17_Sections {
			StageStep17_section1: DevKit.Form.Controls.ControlSection;
		}
		interface tab_StageStep24_Sections {
			StageStep24_section1: DevKit.Form.Controls.ControlSection;
		}
		interface tab_StageStep29_Sections {
			StageStep29_section1: DevKit.Form.Controls.ControlSection;
		}
		interface tab_StageStep2 extends DevKit.Form.Controls.IControlTab {
			Section: tab_StageStep2_Sections;
		}
		interface tab_StageStep10 extends DevKit.Form.Controls.IControlTab {
			Section: tab_StageStep10_Sections;
		}
		interface tab_StageStep17 extends DevKit.Form.Controls.IControlTab {
			Section: tab_StageStep17_Sections;
		}
		interface tab_StageStep24 extends DevKit.Form.Controls.IControlTab {
			Section: tab_StageStep24_Sections;
		}
		interface tab_StageStep29 extends DevKit.Form.Controls.IControlTab {
			Section: tab_StageStep29_Sections;
		}
		interface Tabs {
			StageStep2: tab_StageStep2;
			StageStep10: tab_StageStep10;
			StageStep17: tab_StageStep17;
			StageStep24: tab_StageStep24;
			StageStep29: tab_StageStep29;
		}
		interface Body {
			Tab: Tabs;

		}
	}
	class Formmsdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_Information */
		Body: LuckyMokey.Formmsdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_Information.Body;
	}
}
declare namespace OptionSet {
	namespace msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b {
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
			Finished,
			/** 3 */
			Aborted
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