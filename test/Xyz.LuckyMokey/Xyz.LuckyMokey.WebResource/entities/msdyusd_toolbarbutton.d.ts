//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace Formmsdyusd_toolbarbutton_Information {
		interface tab_tab_3_Sections {
			tab_3_section_2: DevKit.Form.Controls.ControlSection;
		}
		interface tab_tab_3 extends DevKit.Form.Controls.IControlTab {
			Section: tab_tab_3_Sections;
		}
		interface Tabs {
			tab_3: tab_tab_3;
		}
		interface Body {
			Tab: Tabs;
			Actions: DevKit.Form.Controls.ControlGrid;
			notescontrol: DevKit.Form.Controls.ControlNote;
			msdyusd_ButtonText: DevKit.Form.Controls.ControlString;
			msdyusd_EnabledCondition: DevKit.Form.Controls.ControlString;
			msdyusd_Image: DevKit.Form.Controls.ControlString;
			/** The name of the custom entity. */
			msdyusd_name: DevKit.Form.Controls.ControlString;
			msdyusd_order: DevKit.Form.Controls.ControlInteger;
			/** Unique identifier for UII Hosted Application associated with Toolbar Button. */
			msdyusd_showtab: DevKit.Form.Controls.ControlLookup;
			msdyusd_Tooltip: DevKit.Form.Controls.ControlString;
			msdyusd_VisibleCondition: DevKit.Form.Controls.ControlString;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
		}
		interface Footer {
			/** Status of the ToolbarButton */
			statecode: DevKit.Form.Controls.ControlOptionSet;
		}
		interface Navigation {
			nav_msdyusd_toolbarbutton_agentscriptaction: DevKit.Form.Controls.ControlNavigationItem
		}
	}
	class Formmsdyusd_toolbarbutton_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form msdyusd_toolbarbutton_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form msdyusd_toolbarbutton_Information */
		Body: LuckyMokey.Formmsdyusd_toolbarbutton_Information.Body;
		/** The Footer section of form msdyusd_toolbarbutton_Information */
		Footer: LuckyMokey.Formmsdyusd_toolbarbutton_Information.Footer;
		/** The Navigation of form msdyusd_toolbarbutton_Information */
		Navigation: LuckyMokey.Formmsdyusd_toolbarbutton_Information.Navigation;
	}
}
declare namespace OptionSet {
	namespace msdyusd_toolbarbutton {
		enum msdyusd_EnableCondition {
			/** 803750000 */
			Always,
			/** 803750001 */
			Customer_Session,
			/** 803750002 */
			Script_Expression
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