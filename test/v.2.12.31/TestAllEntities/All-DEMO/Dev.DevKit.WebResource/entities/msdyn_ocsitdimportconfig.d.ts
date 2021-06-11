//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_ocsitdimportconfig_Information {
		interface Tabs {
		}
		interface Body {
			msdyn_loadstatus: DevKit.Controls.OptionSet;
			/** The name of the data loading config. */
			msdyn_name: DevKit.Controls.String;
			/**  Skill finder model */
			msdyn_ocskillidentmlmodelid: DevKit.Controls.Lookup;
			/** No of records imported at given point of time from this import config */
			msdyn_recordsimported: DevKit.Controls.Integer;
			/** No of records skipped because of no or bad training data */
			msdyn_recordsskipped: DevKit.Controls.Integer;
			/** Total no of records imported from this import config */
			msdyn_totalrecordstoimport: DevKit.Controls.Integer;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
	}
	class Formmsdyn_ocsitdimportconfig_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_ocsitdimportconfig_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_ocsitdimportconfig_Information */
		Body: DevKit.Formmsdyn_ocsitdimportconfig_Information.Body;
	}
}
declare namespace OptionSet {
	namespace msdyn_ocsitdimportconfig {
		enum msdyn_importconfigtype {
			/** 617690000 */
			Conversation
		}
		enum msdyn_loadstatus {
			/** 192350002 */
			Load_completed,
			/** 192350003 */
			Load_failed,
			/** 192350001 */
			Loading_training_data,
			/** 192350000 */
			Triggering_load
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