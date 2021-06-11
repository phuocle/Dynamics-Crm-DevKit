//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_iottocaseprocess_Information {
		interface tab_StageStep12_Sections {
			StageStep11_section1: DevKit.Controls.Section;
		}
		interface tab_StageStep18_Sections {
			StageStep19_section1: DevKit.Controls.Section;
		}
		interface tab_StageStep24_Sections {
			StageStep27_section1: DevKit.Controls.Section;
		}
		interface tab_StageStep30_Sections {
		}
		interface tab_StageStep4_Sections {
			StageStep3_section1: DevKit.Controls.Section;
		}
		interface tab_StageStep12 extends DevKit.Controls.ITab {
			Section: tab_StageStep12_Sections;
		}
		interface tab_StageStep18 extends DevKit.Controls.ITab {
			Section: tab_StageStep18_Sections;
		}
		interface tab_StageStep24 extends DevKit.Controls.ITab {
			Section: tab_StageStep24_Sections;
		}
		interface tab_StageStep30 extends DevKit.Controls.ITab {
			Section: tab_StageStep30_Sections;
		}
		interface tab_StageStep4 extends DevKit.Controls.ITab {
			Section: tab_StageStep4_Sections;
		}
		interface Tabs {
			StageStep12: tab_StageStep12;
			StageStep18: tab_StageStep18;
			StageStep24: tab_StageStep24;
			StageStep30: tab_StageStep30;
			StageStep4: tab_StageStep4;
		}
		interface Body {
			Tab: Tabs;

		}
	}
	class Formmsdyn_iottocaseprocess_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_iottocaseprocess_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_iottocaseprocess_Information */
		Body: DevKit.Formmsdyn_iottocaseprocess_Information.Body;
	}
}
declare namespace OptionSet {
	namespace msdyn_iottocaseprocess {
		enum statecode {
			/** 0 */
			Active,
			/** 1 */
			Inactive
		}
		enum statuscode {
			/** 3 */
			Aborted,
			/** 1 */
			Active,
			/** 2 */
			Finished
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