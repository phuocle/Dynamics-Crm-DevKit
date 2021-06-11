//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_productivityagentscriptstep_Information {
		interface Tabs {
		}
		interface Body {
			/** Action type for agent script step */
			msdyn_actiontype: DevKit.Controls.OptionSet;
			/** Unique identifier for agent script associated with agent script step. */
			msdyn_agentscriptid: DevKit.Controls.Lookup;
			/** Description for agent script step */
			msdyn_description: DevKit.Controls.String;
			/** Unique identifier for macro associated with agent script step */
			msdyn_macroactionid: DevKit.Controls.Lookup;
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** Display order */
			msdyn_order: DevKit.Controls.Integer;
			/** Unique identifier for target script associated with agent script step */
			msdyn_routeactionid: DevKit.Controls.Lookup;
			/** Instruction for text action type */
			msdyn_textinstruction: DevKit.Controls.String;
			/** Unique Name for the entity. */
			msdyn_UniqueName: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
	}
	class Formmsdyn_productivityagentscriptstep_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_productivityagentscriptstep_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_productivityagentscriptstep_Information */
		Body: DevKit.Formmsdyn_productivityagentscriptstep_Information.Body;
	}
}
declare namespace OptionSet {
	namespace msdyn_productivityagentscriptstep {
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
		enum msdyn_actiontype {
			/** 192350001 */
			Macro,
			/** 192350002 */
			Script,
			/** 192350000 */
			Text
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