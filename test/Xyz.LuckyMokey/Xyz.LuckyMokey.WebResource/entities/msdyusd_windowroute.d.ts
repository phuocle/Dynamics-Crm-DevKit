//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace Formmsdyusd_windowroute_Information {
		interface tab_GeneralTab_Sections {
			_B27D995D_EA0A_4463_9253_92F19878B844_SECTION_2: DevKit.Form.Controls.ControlSection;
		}
		interface tab_CTITab_Sections {
			CTI: DevKit.Form.Controls.ControlSection;
			NoMatchesTab: DevKit.Form.Controls.ControlSection;
			SingleMatchTab: DevKit.Form.Controls.ControlSection;
			MultipleMatchesTab: DevKit.Form.Controls.ControlSection;
		}
		interface tab_ResultTab_Sections {
			Result: DevKit.Form.Controls.ControlSection;
			EntitySearch: DevKit.Form.Controls.ControlSection;
			Tab: DevKit.Form.Controls.ControlSection;
			OptionsSection: DevKit.Form.Controls.ControlSection;
		}
		interface tab_tab_5_Sections {
			tab_5_section_2: DevKit.Form.Controls.ControlSection;
		}
		interface tab_GeneralTab extends DevKit.Form.Controls.IControlTab {
			Section: tab_GeneralTab_Sections;
		}
		interface tab_CTITab extends DevKit.Form.Controls.IControlTab {
			Section: tab_CTITab_Sections;
		}
		interface tab_ResultTab extends DevKit.Form.Controls.IControlTab {
			Section: tab_ResultTab_Sections;
		}
		interface tab_tab_5 extends DevKit.Form.Controls.IControlTab {
			Section: tab_tab_5_Sections;
		}
		interface Tabs {
			GeneralTab: tab_GeneralTab;
			CTITab: tab_CTITab;
			ResultTab: tab_ResultTab;
			tab_5: tab_tab_5;
		}
		interface Body {
			Tab: Tabs;
			CTISearches: DevKit.Form.Controls.ControlGrid;
			notescontrol: DevKit.Form.Controls.ControlNote;
			msdyusd_Action: DevKit.Form.Controls.ControlOptionSet;
			/** Unique identifier for UII Hosted Application associated with Window Route. */
			msdyusd_Application: DevKit.Form.Controls.ControlLookup;
			msdyusd_Condition: DevKit.Form.Controls.ControlString;
			msdyusd_DashboardFrame: DevKit.Form.Controls.ControlString;
			msdyusd_Destination: DevKit.Form.Controls.ControlOptionSet;
			msdyusd_Direction: DevKit.Form.Controls.ControlOptionSet;
			/** Unique identifier for Entity Numeric Mapping associated with Window Route. */
			msdyusd_Entity: DevKit.Form.Controls.ControlLookup;
			/** Unique identifier for Entity Search associated with Routing Rule. */
			msdyusd_EntitySearch: DevKit.Form.Controls.ControlLookup;
			msdyusd_field: DevKit.Form.Controls.ControlString;
			/** Unique identifier for UII Hosted Application associated with Window Route. */
			msdyusd_From: DevKit.Form.Controls.ControlLookup;
			/** Unique identifier for Entity Search associated with Window Route. */
			msdyusd_FromSearch: DevKit.Form.Controls.ControlLookup;
			msdyusd_HideNavBar: DevKit.Form.Controls.ControlBoolean;
			msdyusd_HideRibbon: DevKit.Form.Controls.ControlBoolean;
			/** Unique identifier for Entity Type associated with Routing Rule. */
			msdyusd_InitiatingActivity: DevKit.Form.Controls.ControlLookup;
			/** Unique identifier for Action Call associated with Routing Rule. */
			msdyusd_MultipleMatches: DevKit.Form.Controls.ControlLookup;
			msdyusd_MultipleMatchesDecision: DevKit.Form.Controls.ControlOptionSet;
			/** The name of the custom entity. */
			msdyusd_name: DevKit.Form.Controls.ControlString;
			msdyusd_NoMatchDecision: DevKit.Form.Controls.ControlOptionSet;
			/** Unique identifier for Action Call associated with Routing Rule. */
			msdyusd_NoMatchesAction: DevKit.Form.Controls.ControlLookup;
			msdyusd_Order: DevKit.Form.Controls.ControlInteger;
			msdyusd_RouteType: DevKit.Form.Controls.ControlOptionSet;
			/** Unique identifier for UII Hosted Application associated with Window Route. */
			msdyusd_showtab: DevKit.Form.Controls.ControlLookup;
			/** Unique identifier for Action Call associated with Routing Rule. */
			msdyusd_SingleMatchAction: DevKit.Form.Controls.ControlLookup;
			msdyusd_SingleMatchDecision: DevKit.Form.Controls.ControlOptionSet;
			msdyusd_SourceFrame: DevKit.Form.Controls.ControlString;
			msdyusd_url: DevKit.Form.Controls.ControlString;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
		}
		interface Footer {
			/** Status of the Window Route */
			statecode: DevKit.Form.Controls.ControlOptionSet;
		}
		interface Navigation {
			nav_msdyusd_windowroute_agentscriptaction: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyusd_windowroute_ctisearch: DevKit.Form.Controls.ControlNavigationItem
		}
	}
	class Formmsdyusd_windowroute_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form msdyusd_windowroute_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form msdyusd_windowroute_Information */
		Body: LuckyMokey.Formmsdyusd_windowroute_Information.Body;
		/** The Footer section of form msdyusd_windowroute_Information */
		Footer: LuckyMokey.Formmsdyusd_windowroute_Information.Footer;
		/** The Navigation of form msdyusd_windowroute_Information */
		Navigation: LuckyMokey.Formmsdyusd_windowroute_Information.Navigation;
	}
}
declare namespace OptionSet {
	namespace msdyusd_windowroute {
		enum msdyusd_Action {
			/** 803750004 */
			Default,
			/** 803750000 */
			Create_Session,
			/** 803750001 */
			Show_Outside,
			/** 803750002 */
			Route_Window,
			/** 803750003 */
			None,
			/** 803750005 */
			In_Place
		}
		enum msdyusd_Destination {
			/** 803750000 */
			Tab,
			/** 803750001 */
			Entity_Search
		}
		enum msdyusd_Direction {
			/** 0 */
			Outbound,
			/** 1 */
			Inbound,
			/** 2 */
			Both
		}
		enum msdyusd_MultipleMatchesDecision {
			/** 803750002 */
			Create_Session_then_Do_Action,
			/** 803750000 */
			Do_Action,
			/** 803750001 */
			Next_Rule
		}
		enum msdyusd_NoMatchDecision {
			/** 803750002 */
			Create_Session_then_Do_Action,
			/** 803750000 */
			Do_Action,
			/** 803750001 */
			Next_Rule
		}
		enum msdyusd_RouteType {
			/** 803750000 */
			Popup,
			/** 803750001 */
			OnLoad,
			/** 803750003 */
			In_Place,
			/** 803750002 */
			Menu_Chosen
		}
		enum msdyusd_SingleMatchDecision {
			/** 803750003 */
			Create_Session_Load_Match_then_Do_Action,
			/** 803750002 */
			Create_Session_then_Do_Action,
			/** 803750000 */
			Do_Action,
			/** 803750001 */
			Next_Rule
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