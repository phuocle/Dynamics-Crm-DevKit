//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace Formmsdyn_entitlementapplication_Information {
		interface Tabs {
		}
		interface Body {
			/** Entitlement Application record will only drive automatic application when the work was performed for this Customer Asset Category. If populated with other fields, then both must be true. */
			msdyn_assetcategory: DevKit.Form.Controls.ControlLookup;
			/** Entitlement Application record will only drive automatic application when the work was performed for this customer asset. If populated with other fields, both must be true. */
			msdyn_customerasset: DevKit.Form.Controls.ControlLookup;
			/** Entitlement Application record will only drive automatic application for this related Entitlement. */
			msdyn_entitlement: DevKit.Form.Controls.ControlLookup;
			/** Entitlement Application record will only drive automatic application when the work was performed related to this incident type. If populated with other fields, both must be true. */
			msdyn_incidenttype: DevKit.Form.Controls.ControlLookup;
			/** The name of entitlement application name */
			msdyn_name: DevKit.Form.Controls.ControlString;
			/** Entitlement Application record will only drive automatic application when the work was performed for this service account. If populated with other fields, both must be true. */
			msdyn_serviceaccount: DevKit.Form.Controls.ControlLookup;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
		}
	}
	class Formmsdyn_entitlementapplication_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_entitlementapplication_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form msdyn_entitlementapplication_Information */
		Body: LuckyMokey.Formmsdyn_entitlementapplication_Information.Body;
	}
}
declare namespace OptionSet {
	namespace msdyn_entitlementapplication {
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