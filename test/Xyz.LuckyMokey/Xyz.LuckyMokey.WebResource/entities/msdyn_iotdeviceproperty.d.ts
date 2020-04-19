//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace Formmsdyn_iotdeviceproperty_Information {
		interface Header {
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
		}
		interface tab__8A17D0C4_79FC_45E0_8EA0_90216679A8A0_Sections {
			_8A17D0C4_79FC_45E0_8EA0_90216679A8A0_SECTION_2: DevKit.Form.Controls.ControlSection;
		}
		interface tab__8A17D0C4_79FC_45E0_8EA0_90216679A8A0 extends DevKit.Form.Controls.IControlTab {
			Section: tab__8A17D0C4_79FC_45E0_8EA0_90216679A8A0_Sections;
		}
		interface Tabs {
			_8A17D0C4_79FC_45E0_8EA0_90216679A8A0: tab__8A17D0C4_79FC_45E0_8EA0_90216679A8A0;
		}
		interface Body {
			Tab: Tabs;
			msdyn_DeviceCategory: DevKit.Form.Controls.ControlLookup;
			/** True if this property is marked as a tag for the device; False if this property is a device property. */
			msdyn_IsTag: DevKit.Form.Controls.ControlBoolean;
			/** The name of the custom entity. */
			msdyn_name: DevKit.Form.Controls.ControlString;
			msdyn_Property: DevKit.Form.Controls.ControlLookup;
		}
	}
	class Formmsdyn_iotdeviceproperty_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_iotdeviceproperty_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form msdyn_iotdeviceproperty_Information */
		Body: LuckyMokey.Formmsdyn_iotdeviceproperty_Information.Body;
		/** The Header section of form msdyn_iotdeviceproperty_Information */
		Header: LuckyMokey.Formmsdyn_iotdeviceproperty_Information.Header;
	}
}
declare namespace OptionSet {
	namespace msdyn_iotdeviceproperty {
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