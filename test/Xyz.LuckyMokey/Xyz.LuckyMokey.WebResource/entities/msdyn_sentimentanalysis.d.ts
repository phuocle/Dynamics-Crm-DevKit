//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace Formmsdyn_sentimentanalysis_Information {
		interface Tabs {
		}
		interface Body {
			msdyn_thresholdalertsenabled_disclaimer: DevKit.Form.Controls.ControlWebResource;
			msdyn_additionallanguagesenabled: DevKit.Form.Controls.ControlBoolean;
			/** The agent threshold for Sentiment threshold alerts */
			msdyn_agentthreshold: DevKit.Form.Controls.ControlOptionSet;
			msdyn_enabled: DevKit.Form.Controls.ControlBoolean;
			/** The name of the custom entity. */
			msdyn_name: DevKit.Form.Controls.ControlString;
			/** The supervisor threshold for Sentiment threshold alerts */
			msdyn_supervisorthreshold: DevKit.Form.Controls.ControlOptionSet;
			/** The Supervisor Sentiment Threshold Alert Timeout in Seconds */
			msdyn_supervisorthresholdalerttimeoutseconds: DevKit.Form.Controls.ControlInteger;
			msdyn_thresholdalertsenabled: DevKit.Form.Controls.ControlBoolean;
		}
	}
	class Formmsdyn_sentimentanalysis_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_sentimentanalysis_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form msdyn_sentimentanalysis_Information */
		Body: LuckyMokey.Formmsdyn_sentimentanalysis_Information.Body;
	}
}
declare namespace OptionSet {
	namespace msdyn_sentimentanalysis {
		enum msdyn_agentthreshold {
			/** 0 */
			Disabled,
			/** 7 */
			Very_negative,
			/** 8 */
			Negative,
			/** 9 */
			Slightly_negative
		}
		enum msdyn_supervisorthreshold {
			/** 0 */
			Disabled,
			/** 7 */
			Very_negative,
			/** 8 */
			Negative,
			/** 9 */
			Slightly_negative
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