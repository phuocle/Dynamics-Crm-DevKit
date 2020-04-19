//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace Formflowsession_Information {
		interface Tabs {
		}
		interface Body {
			/** The name of the custom entity. */
			Name: DevKit.Form.Controls.ControlString;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
		}
	}
	class Formflowsession_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form flowsession_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form flowsession_Information */
		Body: LuckyMokey.Formflowsession_Information.Body;
	}
}
declare namespace OptionSet {
	namespace flowsession {
		enum statecode {
			/** 0 */
			Active,
			/** 1 */
			Inactive
		}
		enum statuscode {
			/** 0 */
			NotSpecified,
			/** 1 */
			Paused,
			/** 2 */
			Running,
			/** 3 */
			Waiting,
			/** 4 */
			Succeeded,
			/** 5 */
			Skipped,
			/** 6 */
			Suspended,
			/** 7 */
			Cancelled,
			/** 8 */
			Failed,
			/** 9 */
			Faulted,
			/** 10 */
			TimedOut,
			/** 11 */
			Aborted,
			/** 12 */
			Ignored,
			/** 13 */
			Deleted,
			/** 14 */
			Terminated
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