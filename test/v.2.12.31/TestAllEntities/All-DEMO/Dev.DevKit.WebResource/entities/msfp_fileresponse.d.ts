//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsfp_fileresponse_Information {
		interface Tabs {
		}
		interface Body {
			msfp_file1: DevKit.Controls.File;
			msfp_file10: DevKit.Controls.File;
			msfp_file2: DevKit.Controls.File;
			msfp_file3: DevKit.Controls.File;
			msfp_file4: DevKit.Controls.File;
			msfp_file5: DevKit.Controls.File;
			msfp_file6: DevKit.Controls.File;
			msfp_file7: DevKit.Controls.File;
			msfp_file8: DevKit.Controls.File;
			msfp_file9: DevKit.Controls.File;
			/** The name of the custom entity. */
			msfp_name: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
	}
	class Formmsfp_fileresponse_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form msfp_fileresponse_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msfp_fileresponse_Information */
		Body: DevKit.Formmsfp_fileresponse_Information.Body;
	}
}
declare namespace OptionSet {
	namespace msfp_fileresponse {
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