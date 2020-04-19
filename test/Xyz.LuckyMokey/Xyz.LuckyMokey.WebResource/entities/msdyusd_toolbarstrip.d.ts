//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace Formmsdyusd_toolbarstrip_Information {
		interface tab_Conditons_Sections {
			Conditons_section_2: DevKit.Form.Controls.ControlSection;
		}
		interface tab_Conditons extends DevKit.Form.Controls.IControlTab {
			Section: tab_Conditons_Sections;
		}
		interface Tabs {
			Conditons: tab_Conditons;
		}
		interface Body {
			Tab: Tabs;
			Buttons: DevKit.Form.Controls.ControlGrid;
			notescontrol: DevKit.Form.Controls.ControlNote;
			msdyusd_Autoload: DevKit.Form.Controls.ControlOptionSet;
			msdyusd_EnabledCondition: DevKit.Form.Controls.ControlString;
			/** The name of the custom entity. */
			msdyusd_name: DevKit.Form.Controls.ControlString;
			msdyusd_Order: DevKit.Form.Controls.ControlInteger;
			msdyusd_Title: DevKit.Form.Controls.ControlString;
			msdyusd_VisibleCondition: DevKit.Form.Controls.ControlString;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
		}
		interface Footer {
			/** Status of the Toolbar */
			statecode: DevKit.Form.Controls.ControlOptionSet;
		}
	}
	class Formmsdyusd_toolbarstrip_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form msdyusd_toolbarstrip_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form msdyusd_toolbarstrip_Information */
		Body: LuckyMokey.Formmsdyusd_toolbarstrip_Information.Body;
		/** The Footer section of form msdyusd_toolbarstrip_Information */
		Footer: LuckyMokey.Formmsdyusd_toolbarstrip_Information.Footer;
	}
}
declare namespace OptionSet {
	namespace msdyusd_toolbarstrip {
		enum msdyusd_Autoload {
			/** 803750001 */
			Application,
			/** 803750003 */
			Unified_Service_Desk_Control
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