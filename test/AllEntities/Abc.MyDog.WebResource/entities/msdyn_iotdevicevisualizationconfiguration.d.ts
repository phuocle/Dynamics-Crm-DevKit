//@ts-check
///<reference path="devkit.d.ts" />
declare namespace MyDog {
	namespace Formmsdyn_iotdevicevisualizationconfiguration_Information {
		interface Tabs {
		}
		interface Body {
			/** Action name for IoT device visualization */
			msdyn_actionname: DevKit.Controls.String;
			msdyn_Aggregation: DevKit.Controls.OptionSet;
			/** Device Event of device visualization */
			msdyn_DeviceEvent: DevKit.Controls.OptionSet;
			/** Visualizations shown for this device */
			msdyn_IoTDevice: DevKit.Controls.Lookup;
			/** Visualization shown for this device category */
			msdyn_IoTDeviceCategory: DevKit.Controls.Lookup;
			/** Property Definition */
			msdyn_Measurement: DevKit.Controls.Lookup;
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** Position of device visualization */
			msdyn_Position: DevKit.Controls.Integer;
			/** Time range unit for device visualization */
			msdyn_TimeRangeType: DevKit.Controls.OptionSet;
			/** Time range value for device visualization */
			msdyn_TimeRangeValue: DevKit.Controls.Integer;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
	}
	class Formmsdyn_iotdevicevisualizationconfiguration_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_iotdevicevisualizationconfiguration_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_iotdevicevisualizationconfiguration_Information */
		Body: MyDog.Formmsdyn_iotdevicevisualizationconfiguration_Information.Body;
	}
}
declare namespace OptionSet {
	namespace msdyn_iotdevicevisualizationconfiguration {
		enum msdyn_Aggregation {
			/** 192350001 */
			Avg,
			/** 192350005 */
			Count,
			/** 192350003 */
			Max,
			/** 192350002 */
			Min,
			/** 192350000 */
			None,
			/** 192350004 */
			Sum
		}
		enum msdyn_DeviceEvent {
			/** 192350001 */
			Case,
			/** 192350000 */
			IoT_Alert,
			/** 192350002 */
			Work_Order
		}
		enum msdyn_TimeRangeType {
			/** 192350001 */
			Days,
			/** 192350000 */
			Hours,
			/** 192350002 */
			Latest
		}
		enum msdyn_VisualizationConfigurationType {
			/** 192350000 */
			Configuration_1,
			/** 192350001 */
			Configuration_2,
			/** 192350002 */
			Configuration_3
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