﻿//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace Formmsdyusd_agentscriptaction_Information {
		interface tab_AdvancedTab_Sections {
			tab_3_section_1: DevKit.Form.Controls.ControlSection;
		}
		interface tab_AdvancedTab extends DevKit.Form.Controls.IControlTab {
			Section: tab_AdvancedTab_Sections;
		}
		interface Tabs {
			AdvancedTab: tab_AdvancedTab;
		}
		interface Body {
			Tab: Tabs;
			WebResource_ParameterInput: DevKit.Form.Controls.ControlWebResource;
			notescontrol: DevKit.Form.Controls.ControlNote;
			/** Unique identifier for UII Action associated with Agent Script Action. */
			msdyusd_Action: DevKit.Form.Controls.ControlLookup;
			msdyusd_ActionData: DevKit.Form.Controls.ControlString;
			/** Unique identifier for UII Hosted Application associated with Agent Script Action. */
			msdyusd_Application: DevKit.Form.Controls.ControlLookup;
			/** javascript expression.   Expression must evaluate to true or false.   If the expression throws an exception, it is assumed to be false and this action will not fire. */
			msdyusd_Condition: DevKit.Form.Controls.ControlString;
			/** The name of the custom entity. */
			msdyusd_name: DevKit.Form.Controls.ControlString;
			msdyusd_order: DevKit.Form.Controls.ControlInteger;
			/** Example: CTRL-T */
			msdyusd_ShortcutKey: DevKit.Form.Controls.ControlString;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
		}
		interface Footer {
			/** Status of the Agent Script Action */
			statecode: DevKit.Form.Controls.ControlOptionSet;
		}
		interface Navigation {
			nav_msdyusd_subactioncalls: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyusd_agentscriptaction_windowroute_MultipleMatches: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyusd_agentscriptaction_windowroute_NoMatchesAction: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyusd_agentscriptaction_windowroute_SingleMatchAction: DevKit.Form.Controls.ControlNavigationItem
		}
	}
	class Formmsdyusd_agentscriptaction_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form msdyusd_agentscriptaction_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form msdyusd_agentscriptaction_Information */
		Body: LuckyMokey.Formmsdyusd_agentscriptaction_Information.Body;
		/** The Footer section of form msdyusd_agentscriptaction_Information */
		Footer: LuckyMokey.Formmsdyusd_agentscriptaction_Information.Footer;
		/** The Navigation of form msdyusd_agentscriptaction_Information */
		Navigation: LuckyMokey.Formmsdyusd_agentscriptaction_Information.Navigation;
	}
}
declare namespace OptionSet {
	namespace msdyusd_agentscriptaction {
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