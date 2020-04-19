//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace FormEnvironmentVariableDefinition_Information {
		interface Tabs {
		}
		interface Body {
			Values: DevKit.Form.Controls.ControlGrid;
			/** Default variable value to be used if no associated EnvironmentVariableValue entities exist. */
			DefaultValue: DevKit.Form.Controls.ControlString;
			/** Description of the variable definition. */
			Description: DevKit.Form.Controls.ControlString;
			/** Display Name of the variable definition. */
			DisplayName: DevKit.Form.Controls.ControlString;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
			/** Unique entity name. */
			SchemaName: DevKit.Form.Controls.ControlString;
			/** Environment variable value type. */
			Type: DevKit.Form.Controls.ControlOptionSet;
		}
	}
	class FormEnvironmentVariableDefinition_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form EnvironmentVariableDefinition_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form EnvironmentVariableDefinition_Information */
		Body: LuckyMokey.FormEnvironmentVariableDefinition_Information.Body;
	}
}
declare namespace OptionSet {
	namespace EnvironmentVariableDefinition {
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
		enum Type {
			/** 100000000 */
			String,
			/** 100000001 */
			Number,
			/** 100000002 */
			Boolean,
			/** 100000003 */
			JSON,
			/** 100000004 */
			Connection_reference
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