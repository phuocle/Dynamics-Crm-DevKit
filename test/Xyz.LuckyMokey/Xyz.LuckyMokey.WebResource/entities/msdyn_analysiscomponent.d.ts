//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace Formmsdyn_analysiscomponent_Information {
		interface tab_tab_2_Sections {
			tab_2_section_1: DevKit.Form.Controls.ControlSection;
			tab_2_section_2: DevKit.Form.Controls.ControlSection;
		}
		interface tab_tab_2 extends DevKit.Form.Controls.IControlTab {
			Section: tab_tab_2_Sections;
		}
		interface Tabs {
			tab_2: tab_tab_2;
		}
		interface Body {
			Tab: Tabs;
			msdyn_AnalysisComponentType: DevKit.Form.Controls.ControlOptionSet;
			/** The parent Analysis Job that analyzed this particular Analysis Component. */
			msdyn_AnalysisJobId: DevKit.Form.Controls.ControlLookup;
			msdyn_ComponentId: DevKit.Form.Controls.ControlString;
			msdyn_ComponentName: DevKit.Form.Controls.ControlString;
			msdyn_ComponentType: DevKit.Form.Controls.ControlOptionSet;
			msdyn_ErrorCount: DevKit.Form.Controls.ControlInteger;
			/** The name of the custom entity. */
			msdyn_name: DevKit.Form.Controls.ControlString;
			msdyn_RetryCount: DevKit.Form.Controls.ControlInteger;
			msdyn_RuleFailCount: DevKit.Form.Controls.ControlInteger;
			msdyn_RulePassCount: DevKit.Form.Controls.ControlInteger;
			msdyn_RulePassRate: DevKit.Form.Controls.ControlInteger;
			/** The Solution Health Rule Set for which this is analysis component is for. */
			msdyn_SolutionHealthRuleSetId: DevKit.Form.Controls.ControlLookup;
			msdyn_WarningCount: DevKit.Form.Controls.ControlInteger;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
			/** Reason for the status of the Analysis Component */
			statuscode: DevKit.Form.Controls.ControlOptionSet;
		}
	}
	class Formmsdyn_analysiscomponent_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_analysiscomponent_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form msdyn_analysiscomponent_Information */
		Body: LuckyMokey.Formmsdyn_analysiscomponent_Information.Body;
	}
}
declare namespace OptionSet {
	namespace msdyn_analysiscomponent {
		enum msdyn_AnalysisComponentType {
			/** 192350001 */
			Component_Health,
			/** 192350000 */
			Organization_Health
		}
		enum msdyn_ComponentType {
			/** 192350000 */
			Solution,
			/** 192350001 */
			Entity,
			/** 192350002 */
			View,
			/** 192350003 */
			Form,
			/** 192350004 */
			Plugin,
			/** 192350005 */
			Configuration
		}
		enum statecode {
			/** 0 */
			Active,
			/** 1 */
			Inactive
		}
		enum statuscode {
			/** 1 */
			Pending,
			/** 192350000 */
			Running,
			/** 192350001 */
			Complete,
			/** 192350002 */
			Exception,
			/** 192350003 */
			Completed_With_Exceptions,
			/** 2 */
			Canceled
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