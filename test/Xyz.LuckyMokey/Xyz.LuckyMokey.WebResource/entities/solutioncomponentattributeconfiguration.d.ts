//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace Formsolutioncomponentattributeconfiguration_Information {
		interface Tabs {
		}
		interface Body {
			EncodingFormat: DevKit.Form.Controls.ControlOptionSet;
			FileExtension: DevKit.Form.Controls.ControlString;
			IsExportDisabled: DevKit.Form.Controls.ControlBoolean;
			IsExportedAsFile: DevKit.Form.Controls.ControlBoolean;
			/** The name of the custom entity. */
			name: DevKit.Form.Controls.ControlString;
			/** Unique identifier for the Solution Component Configuration associated with Solution Component Attribute Configuration. */
			SolutionComponentConfigurationId: DevKit.Form.Controls.ControlLookup;
		}
	}
	class Formsolutioncomponentattributeconfiguration_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form solutioncomponentattributeconfiguration_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form solutioncomponentattributeconfiguration_Information */
		Body: LuckyMokey.Formsolutioncomponentattributeconfiguration_Information.Body;
	}
}
declare namespace OptionSet {
	namespace solutioncomponentattributeconfiguration {
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
		enum EncodingFormat {
			/** 0 */
			None,
			/** 1 */
			Base64,
			/** 2 */
			UTF8
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