//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_productivityagentscript_Information {
		interface tab__7F39D554_3EE1_42FD_9E13_39337380E4A8_Sections {
			_7F39D554_3EE1_42FD_9E13_39337380E4A8_SECTION_2: DevKit.Controls.Section;
		}
		interface tab__7F39D554_3EE1_42FD_9E13_39337380E4A8 extends DevKit.Controls.ITab {
			Section: tab__7F39D554_3EE1_42FD_9E13_39337380E4A8_Sections;
		}
		interface Tabs {
			_7F39D554_3EE1_42FD_9E13_39337380E4A8: tab__7F39D554_3EE1_42FD_9E13_39337380E4A8;
		}
		interface Body {
			Tab: Tabs;
			/** Description of the agent scrip */
			msdyn_description: DevKit.Controls.String;
			/** Language for agent script */
			msdyn_language: DevKit.Controls.Integer;
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** Unique Name for the entity. */
			msdyn_UniqueName: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Grid {
			AgentScriptSteps: DevKit.Controls.Grid;
		}
	}
	class Formmsdyn_productivityagentscript_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_productivityagentscript_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_productivityagentscript_Information */
		Body: DevKit.Formmsdyn_productivityagentscript_Information.Body;
		/** The Grid of form msdyn_productivityagentscript_Information */
		Grid: DevKit.Formmsdyn_productivityagentscript_Information.Grid;
	}
}
declare namespace OptionSet {
	namespace msdyn_productivityagentscript {
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