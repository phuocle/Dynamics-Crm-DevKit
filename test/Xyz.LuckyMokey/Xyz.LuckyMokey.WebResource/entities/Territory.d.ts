//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace FormTerritory_Information {
		interface tab_general_Sections {
			territory_information: DevKit.Form.Controls.ControlSection;
			description: DevKit.Form.Controls.ControlSection;
		}
		interface tab_subterritories_tab_Sections {
			territory_tab1_section_1: DevKit.Form.Controls.ControlSection;
		}
		interface tab_general extends DevKit.Form.Controls.IControlTab {
			Section: tab_general_Sections;
		}
		interface tab_subterritories_tab extends DevKit.Form.Controls.IControlTab {
			Section: tab_subterritories_tab_Sections;
		}
		interface Tabs {
			general: tab_general;
			subterritories_tab: tab_subterritories_tab;
		}
		interface Body {
			Tab: Tabs;
			territories_subgrid: DevKit.Form.Controls.ControlGrid;
			/** Description of the territory. */
			Description: DevKit.Form.Controls.ControlString;
			/** Unique identifier of the manager of the territory. */
			ManagerId: DevKit.Form.Controls.ControlLookup;
			/** Name of the territory. */
			Name: DevKit.Form.Controls.ControlString;
			/** Choose the parent for this territory. */
			ParentTerritoryId: DevKit.Form.Controls.ControlLookup;
		}
		interface Navigation {
			nav_msdyn_territory_account_ServiceTerritory: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_territory_msdyn_workorder_ServiceTerritory: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_territory_msdyn_resourceterritory_Territory: DevKit.Form.Controls.ControlNavigationItem
		}
	}
	class FormTerritory_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form Territory_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Territory_Information */
		Body: LuckyMokey.FormTerritory_Information.Body;
		/** The Navigation of form Territory_Information */
		Navigation: LuckyMokey.FormTerritory_Information.Navigation;
	}
}
declare namespace OptionSet {
	namespace Territory {
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