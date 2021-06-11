//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyusd_toolbarstrip_Information {
		interface tab_Conditions_Sections {
			Conditons_section_2: DevKit.Controls.Section;
		}
		interface tab_Styles_Sections {
			Custom_Styles: DevKit.Controls.Section;
		}
		interface tab_Conditions extends DevKit.Controls.ITab {
			Section: tab_Conditions_Sections;
		}
		interface tab_Styles extends DevKit.Controls.ITab {
			Section: tab_Styles_Sections;
		}
		interface Tabs {
			Conditions: tab_Conditions;
			Styles: tab_Styles;
		}
		interface Body {
			Tab: Tabs;
			msdyusd_Autoload: DevKit.Controls.OptionSet;
			/** Resource dictionary providing custom styles for a toolbar */
			msdyusd_CustomStyles: DevKit.Controls.String;
			msdyusd_EnabledCondition: DevKit.Controls.String;
			/** The name of the custom entity. */
			msdyusd_name: DevKit.Controls.String;
			msdyusd_Order: DevKit.Controls.Integer;
			msdyusd_Title: DevKit.Controls.String;
			msdyusd_VisibleCondition: DevKit.Controls.String;
			notescontrol: DevKit.Controls.Note;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Footer extends DevKit.Controls.IFooter {
			/** Status of the Toolbar */
			statecode: DevKit.Controls.OptionSet;
		}
		interface Grid {
			Buttons: DevKit.Controls.Grid;
		}
	}
	class Formmsdyusd_toolbarstrip_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form msdyusd_toolbarstrip_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyusd_toolbarstrip_Information */
		Body: DevKit.Formmsdyusd_toolbarstrip_Information.Body;
		/** The Footer section of form msdyusd_toolbarstrip_Information */
		Footer: DevKit.Formmsdyusd_toolbarstrip_Information.Footer;
		/** The Grid of form msdyusd_toolbarstrip_Information */
		Grid: DevKit.Formmsdyusd_toolbarstrip_Information.Grid;
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
//{'JsForm':['Information'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false,'Version':'2.12.31','JsFormVersion':'v2'}