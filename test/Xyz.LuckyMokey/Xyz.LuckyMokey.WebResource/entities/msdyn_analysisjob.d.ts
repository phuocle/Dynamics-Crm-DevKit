//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace Formmsdyn_analysisjob_Information {
		interface Header {
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
		}
		interface tab__F1A26849_5CBD_4343_BE37_A5447D0EA5A6_Sections {
			_BFA242F2_7FBF_468A_85CA_6D52BD4193D1: DevKit.Form.Controls.ControlSection;
			_F1A26849_5CBD_4343_BE37_A5447D0EA5A6_SECTION_3: DevKit.Form.Controls.ControlSection;
			_F1A26849_5CBD_4343_BE37_A5447D0EA5A6_SECTION_2: DevKit.Form.Controls.ControlSection;
		}
		interface tab_summary_tab_Sections {
			tab_3_section_overview: DevKit.Form.Controls.ControlSection;
			_E6707165_9B00_4ABC_9DF3_D04E06FEC0F2_SECTION_4: DevKit.Form.Controls.ControlSection;
		}
		interface tab_tab_2_Sections {
			tab_2_section_1: DevKit.Form.Controls.ControlSection;
		}
		interface tab__F1A26849_5CBD_4343_BE37_A5447D0EA5A6 extends DevKit.Form.Controls.IControlTab {
			Section: tab__F1A26849_5CBD_4343_BE37_A5447D0EA5A6_Sections;
		}
		interface tab_summary_tab extends DevKit.Form.Controls.IControlTab {
			Section: tab_summary_tab_Sections;
		}
		interface tab_tab_2 extends DevKit.Form.Controls.IControlTab {
			Section: tab_tab_2_Sections;
		}
		interface Tabs {
			_F1A26849_5CBD_4343_BE37_A5447D0EA5A6: tab__F1A26849_5CBD_4343_BE37_A5447D0EA5A6;
			summary_tab: tab_summary_tab;
			tab_2: tab_tab_2;
		}
		interface Body {
			Tab: Tabs;
			AssociatedAnalysisResults: DevKit.Form.Controls.ControlGrid;
			msdyn_EndTime: DevKit.Form.Controls.ControlDateTime;
			msdyn_Exception: DevKit.Form.Controls.ControlString;
			/** The name of the custom entity. */
			msdyn_name: DevKit.Form.Controls.ControlString;
			msdyn_RuleFailCount: DevKit.Form.Controls.ControlInteger;
			msdyn_RuleFailCount_1: DevKit.Form.Controls.ControlInteger;
			msdyn_RulePassCount: DevKit.Form.Controls.ControlInteger;
			msdyn_RulePassCount_1: DevKit.Form.Controls.ControlInteger;
			msdyn_RuleRunCount: DevKit.Form.Controls.ControlInteger;
			msdyn_RuleRunCount_1: DevKit.Form.Controls.ControlInteger;
			msdyn_StartTime: DevKit.Form.Controls.ControlDateTime;
			msdyn_WarningCount: DevKit.Form.Controls.ControlInteger;
			msdyn_WarningCount_1: DevKit.Form.Controls.ControlInteger;
			/** Status of the Analysis Job */
			statecode: DevKit.Form.Controls.ControlOptionSet;
			/** Reason for the status of the Analysis Job */
			statuscode: DevKit.Form.Controls.ControlOptionSet;
		}
	}
	class Formmsdyn_analysisjob_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_analysisjob_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form msdyn_analysisjob_Information */
		Body: LuckyMokey.Formmsdyn_analysisjob_Information.Body;
		/** The Header section of form msdyn_analysisjob_Information */
		Header: LuckyMokey.Formmsdyn_analysisjob_Information.Header;
	}
}
declare namespace OptionSet {
	namespace msdyn_analysisjob {
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