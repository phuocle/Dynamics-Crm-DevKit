//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace Formmsdyusd_configuration_Information {
		interface tab_tab_3_Sections {
			tab_3_section_1: DevKit.Form.Controls.ControlSection;
			tab_3_section_2: DevKit.Form.Controls.ControlSection;
			tab_3_section_3: DevKit.Form.Controls.ControlSection;
		}
		interface tab_tab_4_Sections {
			tab_4_section_1: DevKit.Form.Controls.ControlSection;
			tab_4_section_2: DevKit.Form.Controls.ControlSection;
			tab_4_section_3: DevKit.Form.Controls.ControlSection;
		}
		interface tab_tab_5_Sections {
			tab_5_section_1: DevKit.Form.Controls.ControlSection;
			tab_5_section_2: DevKit.Form.Controls.ControlSection;
			tab_5_section_3: DevKit.Form.Controls.ControlSection;
		}
		interface tab_tab_6_Sections {
			tab_6_section_1: DevKit.Form.Controls.ControlSection;
			tab_6_section_2: DevKit.Form.Controls.ControlSection;
			tab_6_section_3: DevKit.Form.Controls.ControlSection;
		}
		interface tab_tab_3 extends DevKit.Form.Controls.IControlTab {
			Section: tab_tab_3_Sections;
		}
		interface tab_tab_4 extends DevKit.Form.Controls.IControlTab {
			Section: tab_tab_4_Sections;
		}
		interface tab_tab_5 extends DevKit.Form.Controls.IControlTab {
			Section: tab_tab_5_Sections;
		}
		interface tab_tab_6 extends DevKit.Form.Controls.IControlTab {
			Section: tab_tab_6_Sections;
		}
		interface Tabs {
			tab_3: tab_tab_3;
			tab_4: tab_tab_4;
			tab_5: tab_tab_5;
			tab_6: tab_tab_6;
		}
		interface Body {
			Tab: Tabs;
			usergrid: DevKit.Form.Controls.ControlGrid;
			HostedControls: DevKit.Form.Controls.ControlGrid;
			Events: DevKit.Form.Controls.ControlGrid;
			ActionCalls: DevKit.Form.Controls.ControlGrid;
			Toolbars: DevKit.Form.Controls.ControlGrid;
			WindowNavigationRules: DevKit.Form.Controls.ControlGrid;
			EntitySearches: DevKit.Form.Controls.ControlGrid;
			SessionLines: DevKit.Form.Controls.ControlGrid;
			AgentScripts: DevKit.Form.Controls.ControlGrid;
			Scriplets: DevKit.Form.Controls.ControlGrid;
			CustomizationFiles: DevKit.Form.Controls.ControlGrid;
			Forms: DevKit.Form.Controls.ControlGrid;
			Options: DevKit.Form.Controls.ControlGrid;
			/** Audit & Diagnostics Setting that is associated to this configuration. */
			msdyusd_auditanddiagnosticssettingfield: DevKit.Form.Controls.ControlLookup;
			msdyusd_Description: DevKit.Form.Controls.ControlString;
			/** Is Default Configuration */
			msdyusd_isdefault: DevKit.Form.Controls.ControlBoolean;
			/** The name of the custom entity. */
			msdyusd_name: DevKit.Form.Controls.ControlString;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
		}
		interface Footer {
			/** Status of the Configuration */
			statecode: DevKit.Form.Controls.ControlOptionSet;
		}
		interface Navigation {
			navAudit: DevKit.Form.Controls.ControlNavigationItem,
			navAsyncOperations: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyusd_configuration_users: DevKit.Form.Controls.ControlNavigationItem
		}
	}
	class Formmsdyusd_configuration_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form msdyusd_configuration_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form msdyusd_configuration_Information */
		Body: LuckyMokey.Formmsdyusd_configuration_Information.Body;
		/** The Footer section of form msdyusd_configuration_Information */
		Footer: LuckyMokey.Formmsdyusd_configuration_Information.Footer;
		/** The Navigation of form msdyusd_configuration_Information */
		Navigation: LuckyMokey.Formmsdyusd_configuration_Information.Navigation;
	}
}
declare namespace OptionSet {
	namespace msdyusd_configuration {
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