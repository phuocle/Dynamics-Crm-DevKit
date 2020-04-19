//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace Formmsdyn_upgradestep_Information {
		interface Tabs {
		}
		interface Body {
			/** Date and time when the record was created. */
			CreatedOn: DevKit.Form.Controls.ControlDateTime;
			/** Diagnostic output from an upgrade step */
			msdyn_Details: DevKit.Form.Controls.ControlString;
			/** Error text, if an error occurred during this step */
			msdyn_Errors: DevKit.Form.Controls.ControlString;
			/** Date/time when an upgrade step finished */
			msdyn_FinishedDate: DevKit.Form.Controls.ControlDateTime;
			/** Name of the method or stored procedure corresponding to an upgrade step */
			msdyn_Name: DevKit.Form.Controls.ControlString;
			/** Status/outcome of an upgrade step */
			msdyn_Status: DevKit.Form.Controls.ControlOptionSet;
			msdyn_StepID: DevKit.Form.Controls.ControlString;
		}
	}
	class Formmsdyn_upgradestep_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_upgradestep_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form msdyn_upgradestep_Information */
		Body: LuckyMokey.Formmsdyn_upgradestep_Information.Body;
	}
}
declare namespace OptionSet {
	namespace msdyn_upgradestep {
		enum msdyn_Status {
			/** 100000000 */
			Started,
			/** 100000001 */
			Success,
			/** 100000002 */
			Failure
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