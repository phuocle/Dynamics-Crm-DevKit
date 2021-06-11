//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_schedulingfeatureflag_Information {
		interface Tabs {
		}
		interface Body {
			/** Date and time when the record was created. */
			CreatedOn: DevKit.Controls.DateTime;
			/** This is brief detail about the feature flag */
			msdyn_Description: DevKit.Controls.String;
			/** Whether or not this feature is active. */
			msdyn_Enabled: DevKit.Controls.OptionSet;
			/** The name of the feature flag. */
			msdyn_name: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Status of the SchedulingFeatureFlag */
			statecode: DevKit.Controls.OptionSet;
		}
	}
	class Formmsdyn_schedulingfeatureflag_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_schedulingfeatureflag_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_schedulingfeatureflag_Information */
		Body: DevKit.Formmsdyn_schedulingfeatureflag_Information.Body;
	}
	namespace FormTroubleshooting {
		interface Tabs {
		}
		interface Body {
			/** Date and time when the record was created. */
			CreatedOn: DevKit.Controls.DateTime;
			/** This is brief detail about the feature flag */
			msdyn_Description: DevKit.Controls.String;
			/** Whether or not this feature is active. */
			msdyn_Enabled: DevKit.Controls.OptionSet;
			/** The name of the feature flag. */
			msdyn_name: DevKit.Controls.String;
			/** Addition information related to feature flag */
			msdyn_Value: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Status of the SchedulingFeatureFlag */
			statecode: DevKit.Controls.OptionSet;
		}
	}
	class FormTroubleshooting extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form Troubleshooting
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Troubleshooting */
		Body: DevKit.FormTroubleshooting.Body;
	}
}
declare namespace OptionSet {
	namespace msdyn_schedulingfeatureflag {
		enum ComponentState {
			/** 2 */
			Deleted,
			/** 3 */
			Deleted_Unpublished,
			/** 0 */
			Published,
			/** 1 */
			Unpublished
		}
		enum msdyn_Enabled {
			/** 192350001 */
			No,
			/** 192350000 */
			Yes
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
//{'JsForm':['Information','Troubleshooting'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false,'Version':'2.12.31','JsFormVersion':'v2'}