﻿//@ts-check
///<reference path="devkit.d.ts" />
declare namespace MyDog {
	namespace Formmsdyn_iotdeviceproperty_Information {
		interface Header extends DevKit.Controls.IHeader {
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface tab__8A17D0C4_79FC_45E0_8EA0_90216679A8A0_Sections {
			_8A17D0C4_79FC_45E0_8EA0_90216679A8A0_SECTION_2: DevKit.Controls.Section;
		}
		interface tab__8A17D0C4_79FC_45E0_8EA0_90216679A8A0 extends DevKit.Controls.ITab {
			Section: tab__8A17D0C4_79FC_45E0_8EA0_90216679A8A0_Sections;
		}
		interface Tabs {
			_8A17D0C4_79FC_45E0_8EA0_90216679A8A0: tab__8A17D0C4_79FC_45E0_8EA0_90216679A8A0;
		}
		interface Body {
			Tab: Tabs;
			msdyn_DeviceCategory: DevKit.Controls.Lookup;
			/** True if this property is marked as a tag for the device; False if this property is a device property. */
			msdyn_IsTag: DevKit.Controls.Boolean;
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			msdyn_Property: DevKit.Controls.Lookup;
		}
	}
	class Formmsdyn_iotdeviceproperty_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_iotdeviceproperty_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_iotdeviceproperty_Information */
		Body: MyDog.Formmsdyn_iotdeviceproperty_Information.Body;
		/** The Header section of form msdyn_iotdeviceproperty_Information */
		Header: MyDog.Formmsdyn_iotdeviceproperty_Information.Header;
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
//{'JsForm':['Information'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false,'Version':'2.12.31','JsFormVersion':'v2'}