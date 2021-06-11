//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_inspectioninstance_Information {
		interface Tabs {
		}
		interface Body {
			msdyn_Completed: DevKit.Controls.String;
			/** Unique identifier for Customer Asset associated with Inspection. */
			msdyn_CustomerAssetId: DevKit.Controls.Lookup;
			/** Unique identifier for Inspection Response associated with Inspection. */
			msdyn_inspectionresponseid: DevKit.Controls.Lookup;
			/** Unique identifier for Inspection Template associated with Inspection. */
			msdyn_InspectionTemplateId: DevKit.Controls.Lookup;
			/** Unique identifier for Inspection Template Version associated with Inspection. */
			msdyn_InspectionTemplateVersionId: DevKit.Controls.Lookup;
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			msdyn_surveybounded: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
	}
	class Formmsdyn_inspectioninstance_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_inspectioninstance_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_inspectioninstance_Information */
		Body: DevKit.Formmsdyn_inspectioninstance_Information.Body;
	}
}
declare namespace OptionSet {
	namespace msdyn_inspectioninstance {
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