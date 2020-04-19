//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace FormUII_workflowstep_Information {
		interface tab__080D630E_8F55_4E0B_93F0_102387CD98B6_Sections {
			_4BE7B1CC_9622_4B8A_84C7_D492F17F3433: DevKit.Form.Controls.ControlSection;
		}
		interface tab__D9B6F1CF_99A4_4BC9_97D5_2F0134F08CD1_Sections {
			_52123ABB_ABE5_4404_A906_B991B61DF58E: DevKit.Form.Controls.ControlSection;
		}
		interface tab__080D630E_8F55_4E0B_93F0_102387CD98B6 extends DevKit.Form.Controls.IControlTab {
			Section: tab__080D630E_8F55_4E0B_93F0_102387CD98B6_Sections;
		}
		interface tab__D9B6F1CF_99A4_4BC9_97D5_2F0134F08CD1 extends DevKit.Form.Controls.IControlTab {
			Section: tab__D9B6F1CF_99A4_4BC9_97D5_2F0134F08CD1_Sections;
		}
		interface Tabs {
			_080D630E_8F55_4E0B_93F0_102387CD98B6: tab__080D630E_8F55_4E0B_93F0_102387CD98B6;
			_D9B6F1CF_99A4_4BC9_97D5_2F0134F08CD1: tab__D9B6F1CF_99A4_4BC9_97D5_2F0134F08CD1;
		}
		interface Body {
			Tab: Tabs;
			notescontrol: DevKit.Form.Controls.ControlNote;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
			/** Every Action can be mapped to a Workflow Step. Single Action can be mapped to multiple Workflow Steps. */
			uii_actionid: DevKit.Form.Controls.ControlLookup;
			/** Description holds the information about the workflow step. */
			UII_Description: DevKit.Form.Controls.ControlString;
			/** Workflow Step shall be mapped to Hosted Application. */
			uii_hostedapplicationworkflowstepid: DevKit.Form.Controls.ControlLookup;
			/** The name of the workflow step . */
			UII_name: DevKit.Form.Controls.ControlString;
		}
		interface Footer {
			/** Status of the UII Workflow Step */
			statecode: DevKit.Form.Controls.ControlOptionSet;
		}
	}
	class FormUII_workflowstep_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form UII_workflowstep_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form UII_workflowstep_Information */
		Body: LuckyMokey.FormUII_workflowstep_Information.Body;
		/** The Footer section of form UII_workflowstep_Information */
		Footer: LuckyMokey.FormUII_workflowstep_Information.Footer;
	}
}
declare namespace OptionSet {
	namespace UII_workflowstep {
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