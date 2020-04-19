//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace Formmsdyn_iotprovider_Information {
		interface Header {
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
		}
		interface tab_General_Sections {
			ActionNamesSection: DevKit.Form.Controls.ControlSection;
			_6CF7B2C6_4BBF_4CFA_AA41_CDE683AAC5D2_SECTION_2: DevKit.Form.Controls.ControlSection;
		}
		interface tab_General extends DevKit.Form.Controls.IControlTab {
			Section: tab_General_Sections;
		}
		interface Tabs {
			General: tab_General;
		}
		interface Body {
			Tab: Tabs;
			/** The IoT source providing access to IoT functions. */
			msdyn_IoTSource: DevKit.Form.Controls.ControlOptionSet;
			/** The name of the custom entity. */
			msdyn_name: DevKit.Form.Controls.ControlString;
			/** The name of the action for pulling data from a device using this IoT Provider. */
			msdyn_PullDeviceDataAction: DevKit.Form.Controls.ControlString;
			/** The name of the action to get time series readings from a device using this IoT Provider. */
			msdyn_QueryDeviceReadingsAction: DevKit.Form.Controls.ControlString;
			/** The name of the action for registering devices using this IoT Provider. */
			msdyn_RegisterAction: DevKit.Form.Controls.ControlString;
			/** The name of the action for sending a command to devices using this IoT Provider. */
			msdyn_SendCommandAction: DevKit.Form.Controls.ControlString;
			/** The name of the action for updating device data for a device using this IoT Provider. */
			msdyn_UpdateDeviceDataAction: DevKit.Form.Controls.ControlString;
		}
	}
	class Formmsdyn_iotprovider_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_iotprovider_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form msdyn_iotprovider_Information */
		Body: LuckyMokey.Formmsdyn_iotprovider_Information.Body;
		/** The Header section of form msdyn_iotprovider_Information */
		Header: LuckyMokey.Formmsdyn_iotprovider_Information.Header;
	}
}
declare namespace OptionSet {
	namespace msdyn_iotprovider {
		enum msdyn_IoTSource {
			/** 192350000 */
			Other,
			/** 192350001 */
			Azure_IoT_Suite,
			/** 192350002 */
			Azure_IoT_Central
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
//{'JsForm':['Information'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false}