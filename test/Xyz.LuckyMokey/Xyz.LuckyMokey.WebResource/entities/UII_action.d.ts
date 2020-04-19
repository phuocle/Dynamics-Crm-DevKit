//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace FormUII_action_Information {
		interface tab_General_Sections {
			General: DevKit.Form.Controls.ControlSection;
			URLNavigation: DevKit.Form.Controls.ControlSection;
			Automation: DevKit.Form.Controls.ControlSection;
		}
		interface tab__80C2EEB7_9ADD_DE11_8E80_00155D289C61_Sections {
			_AAA1F133_9BDD_DE11_8E80_00155D289C61: DevKit.Form.Controls.ControlSection;
		}
		interface tab__49A2FDF8_1814_49B5_BE5A_E7CAC97E0EE3_Sections {
			_B4B540BD_52D0_4CC9_BD42_16F4DDAEDDAD: DevKit.Form.Controls.ControlSection;
		}
		interface tab_General extends DevKit.Form.Controls.IControlTab {
			Section: tab_General_Sections;
		}
		interface tab__80C2EEB7_9ADD_DE11_8E80_00155D289C61 extends DevKit.Form.Controls.IControlTab {
			Section: tab__80C2EEB7_9ADD_DE11_8E80_00155D289C61_Sections;
		}
		interface tab__49A2FDF8_1814_49B5_BE5A_E7CAC97E0EE3 extends DevKit.Form.Controls.IControlTab {
			Section: tab__49A2FDF8_1814_49B5_BE5A_E7CAC97E0EE3_Sections;
		}
		interface Tabs {
			General: tab_General;
			_80C2EEB7_9ADD_DE11_8E80_00155D289C61: tab__80C2EEB7_9ADD_DE11_8E80_00155D289C61;
			_49A2FDF8_1814_49B5_BE5A_E7CAC97E0EE3: tab__49A2FDF8_1814_49B5_BE5A_E7CAC97E0EE3;
		}
		interface Body {
			Tab: Tabs;
			notescontrol: DevKit.Form.Controls.ControlNote;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
			/** Determines the mode of automation for this action */
			UII_AutomationMode: DevKit.Form.Controls.ControlOptionSet;
			/** THis attribute captures the additional data in an xml format which can be used by the action. */
			UII_ExtensionsXML: DevKit.Form.Controls.ControlString;
			/** Every Action should be mapped to a Hosted Application. The Hosted Application can have many Actions. */
			uii_hostedapplicationid: DevKit.Form.Controls.ControlLookup;
			/** sets whether this action is executed as default action for the hosted application */
			UII_isDefault: DevKit.Form.Controls.ControlBoolean;
			/** Focus the application after the action is completed */
			UII_isFocussedApplication: DevKit.Form.Controls.ControlBoolean;
			/** Run automation asynchronously to desktop thread */
			UII_isRunModeAsynchronous: DevKit.Form.Controls.ControlBoolean;
			/** Specify the Method to be used to Navigate */
			UII_Method: DevKit.Form.Controls.ControlOptionSet;
			/** The name of the custom entity. */
			UII_name: DevKit.Form.Controls.ControlString;
			/** Speify the Query String needs to be added to the URL attribute. */
			UII_QueryString: DevKit.Form.Controls.ControlString;
			/** Specify the URL to which the hosted web application should navigate. */
			UII_URL: DevKit.Form.Controls.ControlString;
			/** Captures the Workflow Assembly Type. This is required when Workflow Automation mode is selected */
			UII_WorkflowAssemblyType: DevKit.Form.Controls.ControlString;
			/** When Workflow XAML mode is selected for automation mode, this attribute captures the XAML code */
			UII_WorkflowXAML: DevKit.Form.Controls.ControlString;
		}
		interface Footer {
			/** Status of the UII Action */
			statecode: DevKit.Form.Controls.ControlOptionSet;
		}
	}
	class FormUII_action_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form UII_action_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form UII_action_Information */
		Body: LuckyMokey.FormUII_action_Information.Body;
		/** The Footer section of form UII_action_Information */
		Footer: LuckyMokey.FormUII_action_Information.Footer;
	}
}
declare namespace OptionSet {
	namespace UII_action {
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
		enum UII_AutomationMode {
			/** 1 */
			No_Automation,
			/** 2 */
			Use_Workflow_Assembly,
			/** 3 */
			Use_Workflow_XAML
		}
		enum UII_Method {
			/** 1 */
			GET,
			/** 2 */
			POST
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