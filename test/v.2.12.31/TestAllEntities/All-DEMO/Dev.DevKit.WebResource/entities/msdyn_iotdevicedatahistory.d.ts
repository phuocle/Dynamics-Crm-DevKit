//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_iotdevicedatahistory_Information {
		interface Tabs {
		}
		interface Body {
			/** The connection status of the device (Disconnected or Connected) */
			msdyn_ConnectionState: DevKit.Controls.Boolean;
			/** Time when device connection status was last changed */
			msdyn_ConnectionStateUpdatedTime: DevKit.Controls.DateTime;
			/** The device for which the device data is */
			msdyn_Device: DevKit.Controls.Lookup;
			/** Reported Properties from the Device */
			msdyn_DeviceReportedProperties: DevKit.Controls.String;
			/** Reported Properties from the Device */
			msdyn_DeviceReportedProperties_1: DevKit.Controls.String;
			/** The time of last device data pull */
			msdyn_LastActivityTime: DevKit.Controls.DateTime;
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** Device Status (Disabled, Enabled or Not Found) */
			msdyn_Status: DevKit.Controls.OptionSet;
			/** A 128 character-long string that stores the reason for the device identity status. All UTF-8 characters are allowed. */
			msdyn_StatusReason: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
	}
	class Formmsdyn_iotdevicedatahistory_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_iotdevicedatahistory_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_iotdevicedatahistory_Information */
		Body: DevKit.Formmsdyn_iotdevicedatahistory_Information.Body;
	}
}
declare namespace OptionSet {
	namespace msdyn_iotdevicedatahistory {
		enum msdyn_Status {
			/** 192350001 */
			Disabled,
			/** 192350000 */
			Enabled,
			/** 192350002 */
			Not_Found
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