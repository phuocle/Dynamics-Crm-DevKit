//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace Formmsdyn_bpf_665e73aa18c247d886bfc50499c73b82_Information {
		interface tab_StageStep2_Sections {
			StageStep2_section1: DevKit.Form.Controls.ControlSection;
		}
		interface tab_StageStep16_Sections {
			StageStep16_section1: DevKit.Form.Controls.ControlSection;
		}
		interface tab_StageStep19_Sections {
			StageStep19_section1: DevKit.Form.Controls.ControlSection;
		}
		interface tab_StageStep29_Sections {
			StageStep29_section1: DevKit.Form.Controls.ControlSection;
		}
		interface tab_StageStep32_Sections {
			StageStep32_section1: DevKit.Form.Controls.ControlSection;
		}
		interface tab_StageStep35_Sections {
			StageStep35_section1: DevKit.Form.Controls.ControlSection;
		}
		interface tab_StageStep2 extends DevKit.Form.Controls.IControlTab {
			Section: tab_StageStep2_Sections;
		}
		interface tab_StageStep16 extends DevKit.Form.Controls.IControlTab {
			Section: tab_StageStep16_Sections;
		}
		interface tab_StageStep19 extends DevKit.Form.Controls.IControlTab {
			Section: tab_StageStep19_Sections;
		}
		interface tab_StageStep29 extends DevKit.Form.Controls.IControlTab {
			Section: tab_StageStep29_Sections;
		}
		interface tab_StageStep32 extends DevKit.Form.Controls.IControlTab {
			Section: tab_StageStep32_Sections;
		}
		interface tab_StageStep35 extends DevKit.Form.Controls.IControlTab {
			Section: tab_StageStep35_Sections;
		}
		interface Tabs {
			StageStep2: tab_StageStep2;
			StageStep16: tab_StageStep16;
			StageStep19: tab_StageStep19;
			StageStep29: tab_StageStep29;
			StageStep32: tab_StageStep32;
			StageStep35: tab_StageStep35;
		}
		interface Body {
			Tab: Tabs;

		}
	}
	class Formmsdyn_bpf_665e73aa18c247d886bfc50499c73b82_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_bpf_665e73aa18c247d886bfc50499c73b82_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form msdyn_bpf_665e73aa18c247d886bfc50499c73b82_Information */
		Body: LuckyMokey.Formmsdyn_bpf_665e73aa18c247d886bfc50499c73b82_Information.Body;
	}
}
declare namespace OptionSet {
	namespace msdyn_bpf_665e73aa18c247d886bfc50499c73b82 {
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