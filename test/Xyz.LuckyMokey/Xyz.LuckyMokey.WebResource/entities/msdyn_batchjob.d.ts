//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace Formmsdyn_batchjob_Information {
		interface Tabs {
		}
		interface Body {
			msdyn_frequency: DevKit.Form.Controls.ControlOptionSet;
			msdyn_isactive: DevKit.Form.Controls.ControlBoolean;
			msdyn_JobType: DevKit.Form.Controls.ControlOptionSet;
			/** The name of the custom entity. */
			msdyn_name: DevKit.Form.Controls.ControlString;
		}
	}
	class Formmsdyn_batchjob_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_batchjob_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form msdyn_batchjob_Information */
		Body: LuckyMokey.Formmsdyn_batchjob_Information.Body;
	}
}
declare namespace OptionSet {
	namespace msdyn_batchjob {
		enum msdyn_frequency {
			/** 0 */
			Daily,
			/** 1 */
			Monthly
		}
		enum msdyn_JobType {
			/** 867380000 */
			None,
			/** 867380001 */
			Training,
			/** 867380005 */
			Waiting,
			/** 867380006 */
			Idle
		}
		enum msdyn_operationtype {
			/** 0 */
			None,
			/** 1 */
			Create,
			/** 2 */
			Update,
			/** 3 */
			Delete
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