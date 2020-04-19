//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace Formmsdyn_consoleapplicationtemplateparameter_Information {
		interface Tabs {
		}
		interface Body {
			/** The name of the App Template Parameter. */
			msdyn_name: DevKit.Form.Controls.ControlString;
			/** The name of the template parameter */
			msdyn_ParameterName: DevKit.Form.Controls.ControlString;
			/** The template parameter value */
			msdyn_Value: DevKit.Form.Controls.ControlString;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
		}
	}
	class Formmsdyn_consoleapplicationtemplateparameter_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_consoleapplicationtemplateparameter_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form msdyn_consoleapplicationtemplateparameter_Information */
		Body: LuckyMokey.Formmsdyn_consoleapplicationtemplateparameter_Information.Body;
	}
}
declare namespace OptionSet {
	namespace msdyn_consoleapplicationtemplateparameter {
		enum msdyn_RuntimeType {
			/** 110000000 */
			string,
			/** 110000001 */
			number,
			/** 110000002 */
			boolean,
			/** 110000003 */
			json
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