//@ts-check
///<reference path="devkit.d.ts" />
declare namespace MyDog {
	namespace Formmsdyn_sessiontemplate_Information {
		interface tab__F804DF38_FCA6_488A_928E_A5DCCA6FCA2B_Sections {
			_F804DF38_FCA6_488A_928E_A5DCCA6FCA2B_SECTION_2: DevKit.Controls.Section;
		}
		interface tab_Agent_scripts_Sections {
			tab_3_section_1: DevKit.Controls.Section;
			Agent_scripts_column_4_section_1: DevKit.Controls.Section;
		}
		interface tab__F804DF38_FCA6_488A_928E_A5DCCA6FCA2B extends DevKit.Controls.ITab {
			Section: tab__F804DF38_FCA6_488A_928E_A5DCCA6FCA2B_Sections;
		}
		interface tab_Agent_scripts extends DevKit.Controls.ITab {
			Section: tab_Agent_scripts_Sections;
		}
		interface Tabs {
			_F804DF38_FCA6_488A_928E_A5DCCA6FCA2B: tab__F804DF38_FCA6_488A_928E_A5DCCA6FCA2B;
			Agent_scripts: tab_Agent_scripts;
		}
		interface Body {
			Tab: Tabs;
			WebResource_Disclaimer: DevKit.Controls.WebResource;
			ismanaged: DevKit.Controls.ELSE3???;//ismanaged - B3AB1CC0-C437-4CB4-901F-DE6CE117730C -- FOR DEBUG 
			msdyn_anchortab: DevKit.Controls.Lookup;
			/** Description of the session. */
			msdyn_description: DevKit.Controls.String;
			/** Unique value to enable or disable build expression */
			msdyn_enablebuildexpression: DevKit.Controls.Boolean;
			msdyn_entity: DevKit.Controls.String;
			/** Stores expression JSON */
			msdyn_expressiondata: DevKit.Controls.String;
			/** The name of the session. */
			msdyn_name: DevKit.Controls.String;
			msdyn_panelstate: DevKit.Controls.OptionSet;
			msdyn_sessiontype: DevKit.Controls.ELSE3???;//msdyn_sessiontype - 064B32F8-446F-47F6-8079-32E8A650ACC4 -- FOR DEBUG 
			/** Title of the session. */
			msdyn_title: DevKit.Controls.String;
			/** Unique Name for the entity. */
			msdyn_UniqueName: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Grid {
			AdditionalTabs: DevKit.Controls.Grid;
			Agentscripts: DevKit.Controls.Grid;
		}
	}
	class Formmsdyn_sessiontemplate_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_sessiontemplate_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_sessiontemplate_Information */
		Body: MyDog.Formmsdyn_sessiontemplate_Information.Body;
		/** The Grid of form msdyn_sessiontemplate_Information */
		Grid: MyDog.Formmsdyn_sessiontemplate_Information.Grid;
	}
}
declare namespace OptionSet {
	namespace msdyn_sessiontemplate {
		enum ComponentState {
			/** 2 */
			Deleted,
			/** 3 */
			Deleted_Unpublished,
			/** 0 */
			Published,
			/** 1 */
			Unpublished
		}
		enum msdyn_panelstate {
			/** 162450002 */
			Docked,
			/** 162450001 */
			Hidden,
			/** 162450000 */
			Minimized
		}
		enum msdyn_sessiontype {
			/** 1 */
			Entity,
			/** 0 */
			Generic
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