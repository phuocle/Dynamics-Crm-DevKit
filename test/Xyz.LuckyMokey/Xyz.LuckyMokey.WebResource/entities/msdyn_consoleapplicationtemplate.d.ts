﻿//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace Formmsdyn_consoleapplicationtemplate_Information {
		interface tab__1C7CA199_5627_4DE2_B6C4_83D0BE0BE5BE_Sections {
			_1C7CA199_5627_4DE2_B6C4_83D0BE0BE5BE_SECTION_2: DevKit.Form.Controls.ControlSection;
		}
		interface tab__1C7CA199_5627_4DE2_B6C4_83D0BE0BE5BE extends DevKit.Form.Controls.IControlTab {
			Section: tab__1C7CA199_5627_4DE2_B6C4_83D0BE0BE5BE_Sections;
		}
		interface Tabs {
			_1C7CA199_5627_4DE2_B6C4_83D0BE0BE5BE: tab__1C7CA199_5627_4DE2_B6C4_83D0BE0BE5BE;
		}
		interface Body {
			Tab: Tabs;
			Parameters: DevKit.Form.Controls.ControlGrid;
			/** Description of the record */
			msdyn_description: DevKit.Form.Controls.ControlString;
			/** Display icon for the application. */
			msdyn_icon: DevKit.Form.Controls.ControlString;
			/** The name of the Application tab. */
			msdyn_name: DevKit.Form.Controls.ControlString;
			/** Type of the application. */
			msdyn_PageType: DevKit.Form.Controls.ControlLookup;
			/** Whether this tab can be closed */
			msdyn_Pinned: DevKit.Form.Controls.ControlBoolean;
			/** The title of the application displayed on this application tab panel. */
			msdyn_Title: DevKit.Form.Controls.ControlString;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
		}
		interface Navigation {
			nav_msdyn_msdyn_consoleapplicationtemplate_tags: DevKit.Form.Controls.ControlNavigationItem
		}
	}
	class Formmsdyn_consoleapplicationtemplate_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_consoleapplicationtemplate_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form msdyn_consoleapplicationtemplate_Information */
		Body: LuckyMokey.Formmsdyn_consoleapplicationtemplate_Information.Body;
		/** The Navigation of form msdyn_consoleapplicationtemplate_Information */
		Navigation: LuckyMokey.Formmsdyn_consoleapplicationtemplate_Information.Navigation;
	}
}
declare namespace OptionSet {
	namespace msdyn_consoleapplicationtemplate {
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