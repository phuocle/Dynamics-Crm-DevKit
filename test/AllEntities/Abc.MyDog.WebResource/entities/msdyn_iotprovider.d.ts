//@ts-check
///<reference path="devkit.d.ts" />
declare namespace MyDog {
	namespace Formmsdyn_iotprovider_Information {
		interface Header extends DevKit.Controls.IHeader {
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface tab_General_Sections {
			ActionNamesSection: DevKit.Controls.Section;
			_6CF7B2C6_4BBF_4CFA_AA41_CDE683AAC5D2_SECTION_2: DevKit.Controls.Section;
		}
		interface tab_General extends DevKit.Controls.ITab {
			Section: tab_General_Sections;
		}
		interface Tabs {
			General: tab_General;
		}
		interface Body {
			Tab: Tabs;
			/** The IoT source providing access to IoT functions. */
			msdyn_IoTSource: DevKit.Controls.OptionSet;
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** The name of the action for pulling data from a device using this IoT Provider. */
			msdyn_PullDeviceDataAction: DevKit.Controls.String;
			/** The name of the action to get time series readings from a device using this IoT Provider. */
			msdyn_QueryDeviceReadingsAction: DevKit.Controls.String;
			/** The name of the action for registering devices using this IoT Provider. */
			msdyn_RegisterAction: DevKit.Controls.String;
			/** The name of the action for sending a command to devices using this IoT Provider. */
			msdyn_SendCommandAction: DevKit.Controls.String;
			/** The name of the action for updating device data for a device using this IoT Provider. */
			msdyn_UpdateDeviceDataAction: DevKit.Controls.String;
		}
	}
	class Formmsdyn_iotprovider_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_iotprovider_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_iotprovider_Information */
		Body: MyDog.Formmsdyn_iotprovider_Information.Body;
		/** The Header section of form msdyn_iotprovider_Information */
		Header: MyDog.Formmsdyn_iotprovider_Information.Header;
	}
}
declare namespace OptionSet {
	namespace msdyn_iotprovider {
		enum msdyn_IoTSource {
			/** 192350002 */
			Azure_IoT_Central,
			/** 192350001 */
			Azure_IoT_Suite,
			/** 192350000 */
			Other
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