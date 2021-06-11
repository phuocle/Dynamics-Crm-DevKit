//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_unifiedroutingdiagnostic_Information {
		interface Tabs {
		}
		interface Body {
			/** Date and time when the rule execution was completed. */
			msdyn_completedon: DevKit.Controls.DateTime;
			/** Unique identifier for Decision rule set associated with unifiedroutingdiagnostic. */
			msdyn_decisionrulesetid: DevKit.Controls.Lookup;
			/** Evaluation */
			msdyn_evaluation: DevKit.Controls.String;
			/** Input data */
			msdyn_inputdata: DevKit.Controls.String;
			/** Name of the unifiedroutingdiagnostic record */
			msdyn_name: DevKit.Controls.String;
			/** Output data */
			msdyn_outputdata: DevKit.Controls.String;
			/** Rule type */
			msdyn_ruletype: DevKit.Controls.OptionSet;
			/** Date and time when the rule execution was started. */
			msdyn_startedon: DevKit.Controls.DateTime;
			/** Unique identifier for the target object associated with unifiedroutingdiagnostic. */
			msdyn_targetobject: DevKit.Controls.Lookup;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
	}
	class Formmsdyn_unifiedroutingdiagnostic_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_unifiedroutingdiagnostic_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_unifiedroutingdiagnostic_Information */
		Body: DevKit.Formmsdyn_unifiedroutingdiagnostic_Information.Body;
	}
}
declare namespace OptionSet {
	namespace msdyn_unifiedroutingdiagnostic {
		enum msdyn_ruletype {
			/** 6 */
			Assignment,
			/** 9 */
			Assignment_Selection_Criteria,
			/** 1 */
			Demand_Classification,
			/** 11 */
			Intake,
			/** 4 */
			ML,
			/** 5 */
			Prioritization,
			/** 2 */
			Route_To_Queue,
			/** 3 */
			Skill_Identification
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