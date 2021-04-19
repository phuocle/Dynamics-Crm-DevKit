//@ts-check
///<reference path="devkit.d.ts" />
declare namespace MyDog {
	namespace Formmsdyusd_configuration_Information {
		interface tab_tab_3_Sections {
			tab_3_section_1: DevKit.Controls.Section;
			tab_3_section_2: DevKit.Controls.Section;
			tab_3_section_3: DevKit.Controls.Section;
		}
		interface tab_tab_4_Sections {
			tab_4_section_1: DevKit.Controls.Section;
			tab_4_section_2: DevKit.Controls.Section;
			tab_4_section_3: DevKit.Controls.Section;
		}
		interface tab_tab_5_Sections {
			tab_5_section_1: DevKit.Controls.Section;
			tab_5_section_2: DevKit.Controls.Section;
			tab_5_section_3: DevKit.Controls.Section;
		}
		interface tab_tab_6_Sections {
			tab_6_section_1: DevKit.Controls.Section;
			tab_6_section_2: DevKit.Controls.Section;
			tab_6_section_3: DevKit.Controls.Section;
		}
		interface tab_tab_3 extends DevKit.Controls.ITab {
			Section: tab_tab_3_Sections;
		}
		interface tab_tab_4 extends DevKit.Controls.ITab {
			Section: tab_tab_4_Sections;
		}
		interface tab_tab_5 extends DevKit.Controls.ITab {
			Section: tab_tab_5_Sections;
		}
		interface tab_tab_6 extends DevKit.Controls.ITab {
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
			/** Audit & Diagnostics Setting that is associated to this configuration. */
			msdyusd_auditanddiagnosticssettingfield: DevKit.Controls.Lookup;
			/** Caching value for configuration specific caching */
			msdyusd_ClientConfigCacheVersionNumber: DevKit.Controls.String;
			msdyusd_Description: DevKit.Controls.String;
			/** Is Default Configuration */
			msdyusd_isdefault: DevKit.Controls.Boolean;
			/** The name of the custom entity. */
			msdyusd_name: DevKit.Controls.String;
			/** UCI Settings that is associated to this configuration. */
			msdyusd_ucisettingsid: DevKit.Controls.Lookup;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Footer extends DevKit.Controls.IFooter {
			/** Status of the Configuration */
			statecode: DevKit.Controls.OptionSet;
		}
		interface Navigation {
			navAudit: DevKit.Controls.NavigationItem,
			navAsyncOperations: DevKit.Controls.NavigationItem,
			nav_msdyusd_configuration_users: DevKit.Controls.NavigationItem
		}
		interface Grid {
			usergrid: DevKit.Controls.Grid;
			HostedControls: DevKit.Controls.Grid;
			Events: DevKit.Controls.Grid;
			ActionCalls: DevKit.Controls.Grid;
			Toolbars: DevKit.Controls.Grid;
			WindowNavigationRules: DevKit.Controls.Grid;
			EntitySearches: DevKit.Controls.Grid;
			SessionLines: DevKit.Controls.Grid;
			AgentScripts: DevKit.Controls.Grid;
			Scriplets: DevKit.Controls.Grid;
			CustomizationFiles: DevKit.Controls.Grid;
			Forms: DevKit.Controls.Grid;
			Options: DevKit.Controls.Grid;
		}
	}
	class Formmsdyusd_configuration_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form msdyusd_configuration_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyusd_configuration_Information */
		Body: MyDog.Formmsdyusd_configuration_Information.Body;
		/** The Footer section of form msdyusd_configuration_Information */
		Footer: MyDog.Formmsdyusd_configuration_Information.Footer;
		/** The Navigation of form msdyusd_configuration_Information */
		Navigation: MyDog.Formmsdyusd_configuration_Information.Navigation;
		/** The Grid of form msdyusd_configuration_Information */
		Grid: MyDog.Formmsdyusd_configuration_Information.Grid;
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
//{'JsForm':['Information'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false,'Version':'2.12.31','JsFormVersion':'v2'}