//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace FormGoalRollupQuery_Information {
		interface tab_rule_Sections {
			section_1: DevKit.Form.Controls.ControlSection;
			criteria: DevKit.Form.Controls.ControlSection;
			Rule_Conditions: DevKit.Form.Controls.ControlSection;
		}
		interface tab_rule extends DevKit.Form.Controls.IControlTab {
			Section: tab_rule_Sections;
		}
		interface Tabs {
			rule: tab_rule;
		}
		interface Body {
			Tab: Tabs;
			ruleconditioncontrol: DevKit.Form.Controls.ControlIFrame;
			queryeditor_uc: DevKit.Form.Controls.ControlActionCards;
			/** Type a descriptive name for the goal rollup query. */
			Name: DevKit.Form.Controls.ControlString;
			/** Type a descriptive name for the goal rollup query. */
			Name_1: DevKit.Form.Controls.ControlString;
			/** Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
			OwnerId: DevKit.Form.Controls.ControlLookup;
			/** Enter the record type of the rollup query. */
			QueryEntityType: DevKit.Form.Controls.ControlString;
			queryentitytype_uc: DevKit.Form.Controls.ControlActionCards;
		}
	}
	class FormGoalRollupQuery_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form GoalRollupQuery_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form GoalRollupQuery_Information */
		Body: LuckyMokey.FormGoalRollupQuery_Information.Body;
	}
}
declare namespace OptionSet {
	namespace GoalRollupQuery {
		enum StateCode {
			/** 0 */
			Active,
			/** 1 */
			Inactive
		}
		enum StatusCode {
			/** 0 */
			Open,
			/** 1 */
			Closed
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