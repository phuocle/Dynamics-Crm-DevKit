//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace Formmsdyn_consoleapplicationsessiontemplate_Information {
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
			AdditionalTabs: DevKit.Form.Controls.ControlGrid;
			/** The anchor tab for this session. */
			msdyn_AnchorTab: DevKit.Form.Controls.ControlLookup;
			msdyn_description: DevKit.Form.Controls.ControlString;
			/** Display icon for the session. */
			msdyn_icon: DevKit.Form.Controls.ControlString;
			/** Name of the session. */
			msdyn_name: DevKit.Form.Controls.ControlString;
			/** Panel mode when a session is opened. */
			msdyn_PanelState: DevKit.Form.Controls.ControlOptionSet;
			/** Whether this session should be pinned. */
			msdyn_Pinned: DevKit.Form.Controls.ControlBoolean;
			/** Title of the session displayed in the session panel. */
			msdyn_Title: DevKit.Form.Controls.ControlString;
			/** Owner who created this session. */
			OwnerId: DevKit.Form.Controls.ControlLookup;
		}
		interface Navigation {
			nav_msdyn_msdyn_consoleapplicationsessiontemp_tag: DevKit.Form.Controls.ControlNavigationItem
		}
	}
	class Formmsdyn_consoleapplicationsessiontemplate_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_consoleapplicationsessiontemplate_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form msdyn_consoleapplicationsessiontemplate_Information */
		Body: LuckyMokey.Formmsdyn_consoleapplicationsessiontemplate_Information.Body;
		/** The Navigation of form msdyn_consoleapplicationsessiontemplate_Information */
		Navigation: LuckyMokey.Formmsdyn_consoleapplicationsessiontemplate_Information.Navigation;
	}
}
declare namespace OptionSet {
	namespace msdyn_consoleapplicationsessiontemplate {
		enum msdyn_PanelState {
			/** 100000000 */
			Docked,
			/** 100000001 */
			Minimized,
			/** 100000002 */
			Hidden
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