//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace Formmsdyn_upgradeversion_Information {
		interface Tabs {
		}
		interface Body {
			UpgradeSteps: DevKit.Form.Controls.ControlGrid;
			/** Date and time when the record was created. */
			CreatedOn: DevKit.Form.Controls.ControlDateTime;
			/** Date/time when a single-version upgrade finished */
			msdyn_Finished: DevKit.Form.Controls.ControlDateTime;
			/** Version that was installed before a single-version upgrade */
			msdyn_StartingVersion: DevKit.Form.Controls.ControlString;
			/** Status/outcome of a single-version upgrade */
			msdyn_Status: DevKit.Form.Controls.ControlOptionSet;
			/** Summary of a single-version upgrade */
			msdyn_summary: DevKit.Form.Controls.ControlString;
			/** Version that will be achieved by a single-version upgrade */
			msdyn_TargetVersion: DevKit.Form.Controls.ControlString;
		}
	}
	class Formmsdyn_upgradeversion_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_upgradeversion_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form msdyn_upgradeversion_Information */
		Body: LuckyMokey.Formmsdyn_upgradeversion_Information.Body;
	}
}
declare namespace OptionSet {
	namespace msdyn_upgradeversion {
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