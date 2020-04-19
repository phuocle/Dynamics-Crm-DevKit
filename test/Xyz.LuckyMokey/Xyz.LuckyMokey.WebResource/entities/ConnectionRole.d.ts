//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace FormConnectionRole_Information {
		interface tab_general_Sections {
			step1: DevKit.Form.Controls.ControlSection;
			step2: DevKit.Form.Controls.ControlSection;
			_B0A70B0D_568C_10D3_1A3D_01C997A061C1: DevKit.Form.Controls.ControlSection;
		}
		interface tab_reciprocalroles_Sections {
			roleGrid: DevKit.Form.Controls.ControlSection;
		}
		interface tab_general extends DevKit.Form.Controls.IControlTab {
			Section: tab_general_Sections;
		}
		interface tab_reciprocalroles extends DevKit.Form.Controls.IControlTab {
			Section: tab_reciprocalroles_Sections;
		}
		interface Tabs {
			general: tab_general;
			reciprocalroles: tab_reciprocalroles;
		}
		interface Body {
			Tab: Tabs;
			reciprocalRoleGrid: DevKit.Form.Controls.ControlGrid;
			/** Categories for connection roles. */
			Category: DevKit.Form.Controls.ControlOptionSet;
			/** Description of the connection role. */
			Description: DevKit.Form.Controls.ControlString;
			/** Name of the connection role. */
			Name: DevKit.Form.Controls.ControlString;
		}
	}
	class FormConnectionRole_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form ConnectionRole_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form ConnectionRole_Information */
		Body: LuckyMokey.FormConnectionRole_Information.Body;
	}
}
declare namespace OptionSet {
	namespace ConnectionRole {
		enum Category {
			/** 1 */
			Business,
			/** 2 */
			Family,
			/** 3 */
			Social,
			/** 4 */
			Sales,
			/** 5 */
			Other,
			/** 1000 */
			Stakeholder,
			/** 1001 */
			Sales_Team,
			/** 1002 */
			Service
		}
		enum ComponentState {
			/** 0 */
			Published,
			/** 1 */
			Unpublished,
			/** 2 */
			Deleted,
			/** 3 */
			Deleted_Unpublished
		}
		enum StateCode {
			/** 0 */
			Active,
			/** 1 */
			Inactive
		}
		enum StatusCode {
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