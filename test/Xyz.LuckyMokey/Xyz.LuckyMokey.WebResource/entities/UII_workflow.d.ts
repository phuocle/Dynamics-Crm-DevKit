//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace FormUII_workflow_Information {
		interface tab__EEEB4B58_0136_4906_AF09_B4875AD7374B_Sections {
			_F5299BA8_8CB6_4375_9982_F1ECEFE5CAD4: DevKit.Form.Controls.ControlSection;
		}
		interface tab__09646B07_3D6F_4D32_AFE9_D4E0D4EAB773_Sections {
			_CDAB4986_A675_4C28_A71C_DFD6CD9DC956: DevKit.Form.Controls.ControlSection;
		}
		interface tab__EEEB4B58_0136_4906_AF09_B4875AD7374B extends DevKit.Form.Controls.IControlTab {
			Section: tab__EEEB4B58_0136_4906_AF09_B4875AD7374B_Sections;
		}
		interface tab__09646B07_3D6F_4D32_AFE9_D4E0D4EAB773 extends DevKit.Form.Controls.IControlTab {
			Section: tab__09646B07_3D6F_4D32_AFE9_D4E0D4EAB773_Sections;
		}
		interface Tabs {
			_EEEB4B58_0136_4906_AF09_B4875AD7374B: tab__EEEB4B58_0136_4906_AF09_B4875AD7374B;
			_09646B07_3D6F_4D32_AFE9_D4E0D4EAB773: tab__09646B07_3D6F_4D32_AFE9_D4E0D4EAB773;
		}
		interface Body {
			Tab: Tabs;
			notescontrol: DevKit.Form.Controls.ControlNote;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
			/** Description to hold the information about the workflow. */
			UII_Description: DevKit.Form.Controls.ControlString;
			/** To mark if the workflow is a forced workflow. If it is a forced workflow , it will be executed for every customer session. */
			UII_isForcedWorkflow: DevKit.Form.Controls.ControlBoolean;
			/** The name of the workflow. */
			UII_name: DevKit.Form.Controls.ControlString;
		}
		interface Footer {
			/** Status of the UII Workflow */
			statecode: DevKit.Form.Controls.ControlOptionSet;
		}
	}
	class FormUII_workflow_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form UII_workflow_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form UII_workflow_Information */
		Body: LuckyMokey.FormUII_workflow_Information.Body;
		/** The Footer section of form UII_workflow_Information */
		Footer: LuckyMokey.FormUII_workflow_Information.Footer;
	}
}
declare namespace OptionSet {
	namespace UII_workflow {
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