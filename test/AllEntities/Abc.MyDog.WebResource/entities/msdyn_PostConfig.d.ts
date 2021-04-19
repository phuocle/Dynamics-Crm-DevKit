//@ts-check
///<reference path="devkit.d.ts" />
declare namespace MyDog {
	namespace Formmsdyn_PostConfig_Information {
		interface tab_tab_notification_Sections {
			tab_5_section_1: DevKit.Controls.Section;
		}
		interface tab_tab_notification extends DevKit.Controls.ITab {
			Section: tab_tab_notification_Sections;
		}
		interface Tabs {
			tab_notification: tab_tab_notification;
		}
		interface Body {
			Tab: Tabs;
			/** Enables or disables the wall on the entity form. */
			msdyn_ConfigureWall: DevKit.Controls.Boolean;
			/** Logical name of the entity configured by this object. */
			msdyn_EntityName: DevKit.Controls.String;
			/** Information about the success or failure of the configuration. */
			msdyn_Status: DevKit.Controls.String;
		}
		interface Footer extends DevKit.Controls.IFooter {
			/** Status of the Post Configuration */
			statecode: DevKit.Controls.OptionSet;
		}
		interface Navigation {
			nav_msdyn_postconfig_msdyn_postruleconfig: DevKit.Controls.NavigationItem,
			nav_msdyn_postconfig_wallsavedquery: DevKit.Controls.NavigationItem
		}
		interface Grid {
			ActivityFeedsRules: DevKit.Controls.Grid;
			Views: DevKit.Controls.Grid;
		}
	}
	class Formmsdyn_PostConfig_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_PostConfig_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_PostConfig_Information */
		Body: MyDog.Formmsdyn_PostConfig_Information.Body;
		/** The Footer section of form msdyn_PostConfig_Information */
		Footer: MyDog.Formmsdyn_PostConfig_Information.Footer;
		/** The Navigation of form msdyn_PostConfig_Information */
		Navigation: MyDog.Formmsdyn_PostConfig_Information.Navigation;
		/** The Grid of form msdyn_PostConfig_Information */
		Grid: MyDog.Formmsdyn_PostConfig_Information.Grid;
	}
}
declare namespace OptionSet {
	namespace msdyn_PostConfig {
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