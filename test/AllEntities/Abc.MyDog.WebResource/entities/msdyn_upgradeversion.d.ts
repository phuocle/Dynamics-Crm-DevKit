//@ts-check
///<reference path="devkit.d.ts" />
declare namespace MyDog {
	namespace Formmsdyn_upgradeversion_Information {
		interface Tabs {
		}
		interface Body {
			/** Date and time when the record was created. */
			CreatedOn: DevKit.Controls.DateTime;
			/** Date/time when a single-version upgrade finished */
			msdyn_Finished: DevKit.Controls.DateTime;
			/** Version that was installed before a single-version upgrade */
			msdyn_StartingVersion: DevKit.Controls.String;
			/** Status/outcome of a single-version upgrade */
			msdyn_Status: DevKit.Controls.OptionSet;
			/** Summary of a single-version upgrade */
			msdyn_summary: DevKit.Controls.String;
			/** Version that will be achieved by a single-version upgrade */
			msdyn_TargetVersion: DevKit.Controls.String;
		}
		interface Grid {
			UpgradeSteps: DevKit.Controls.Grid;
		}
	}
	class Formmsdyn_upgradeversion_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_upgradeversion_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_upgradeversion_Information */
		Body: MyDog.Formmsdyn_upgradeversion_Information.Body;
		/** The Grid of form msdyn_upgradeversion_Information */
		Grid: MyDog.Formmsdyn_upgradeversion_Information.Grid;
	}
}
declare namespace OptionSet {
	namespace msdyn_upgradeversion {
		enum msdyn_Status {
			/** 100000002 */
			Failure,
			/** 100000000 */
			Started,
			/** 100000001 */
			Success
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