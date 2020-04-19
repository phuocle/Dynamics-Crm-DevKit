//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace Formmsdyn_iotdevice_Information {
		interface Header {
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
		}
		interface tab__1BCFF70D_5615_4084_953F_2196583D6E79_Sections {
			_A9378EBB_2FCC_41B7_8039_B2B2A89490E2: DevKit.Form.Controls.ControlSection;
			DeviceStatusSection: DevKit.Form.Controls.ControlSection;
			DeviceSettingsSection: DevKit.Form.Controls.ControlSection;
			Device_Summary_Visualization: DevKit.Form.Controls.ControlSection;
			Connected_Device_Readings: DevKit.Form.Controls.ControlSection;
		}
		interface tab_Device_Data_Sections {
			Device_Data: DevKit.Form.Controls.ControlSection;
		}
		interface tab_AlertsTab_Sections {
			AlertsSection: DevKit.Form.Controls.ControlSection;
		}
		interface tab_DeviceInsightsTab_Sections {
			DeviceInsightsSection: DevKit.Form.Controls.ControlSection;
		}
		interface tab_CommandsTab_Sections {
			CommandsSection: DevKit.Form.Controls.ControlSection;
		}
		interface tab_RegistrationHistory_Sections {
			RegistrationHistorySection: DevKit.Form.Controls.ControlSection;
		}
		interface tab__1BCFF70D_5615_4084_953F_2196583D6E79 extends DevKit.Form.Controls.IControlTab {
			Section: tab__1BCFF70D_5615_4084_953F_2196583D6E79_Sections;
		}
		interface tab_Device_Data extends DevKit.Form.Controls.IControlTab {
			Section: tab_Device_Data_Sections;
		}
		interface tab_AlertsTab extends DevKit.Form.Controls.IControlTab {
			Section: tab_AlertsTab_Sections;
		}
		interface tab_DeviceInsightsTab extends DevKit.Form.Controls.IControlTab {
			Section: tab_DeviceInsightsTab_Sections;
		}
		interface tab_CommandsTab extends DevKit.Form.Controls.IControlTab {
			Section: tab_CommandsTab_Sections;
		}
		interface tab_RegistrationHistory extends DevKit.Form.Controls.IControlTab {
			Section: tab_RegistrationHistory_Sections;
		}
		interface Tabs {
			_1BCFF70D_5615_4084_953F_2196583D6E79: tab__1BCFF70D_5615_4084_953F_2196583D6E79;
			Device_Data: tab_Device_Data;
			AlertsTab: tab_AlertsTab;
			DeviceInsightsTab: tab_DeviceInsightsTab;
			CommandsTab: tab_CommandsTab;
			RegistrationHistory: tab_RegistrationHistory;
		}
		interface Body {
			Tab: Tabs;
			WebResource_PowerBIDevice: DevKit.Form.Controls.ControlWebResource;
			DeviceDataHistory: DevKit.Form.Controls.ControlGrid;
			AlertsGrid: DevKit.Form.Controls.ControlGrid;
			CommandsGrid: DevKit.Form.Controls.ControlGrid;
			RegistrationHistory: DevKit.Form.Controls.ControlGrid;
			/** Parent customer of this device */
			msdyn_Account: DevKit.Form.Controls.ControlLookup;
			/** The device category that this IoT device belongs to. */
			msdyn_Category: DevKit.Form.Controls.ControlLookup;
			/** The connection status of the device (Disconnected or Connected) */
			msdyn_ConnectionState: DevKit.Form.Controls.ControlBoolean;
			/** Device ID used to register with the IoT provider. */
			msdyn_DeviceId: DevKit.Form.Controls.ControlString;
			/** Device ID used to register with the IoT provider. */
			msdyn_DeviceId_1: DevKit.Form.Controls.ControlString;
			/** Device ID used to register with the IoT provider. */
			msdyn_DeviceId_2: DevKit.Form.Controls.ControlString;
			/** Reported Properties data for Device */
			msdyn_DeviceReportedProperties: DevKit.Form.Controls.ControlString;
			/** Reported Properties data for Device */
			msdyn_DeviceReportedProperties_1: DevKit.Form.Controls.ControlString;
			/** The editable properties for a device. */
			msdyn_DeviceSettings: DevKit.Form.Controls.ControlString;
			/** The editable properties for a device. */
			msdyn_DeviceSettings_1: DevKit.Form.Controls.ControlString;
			/** The IoT Provider Instance to which this device belongs. */
			msdyn_IoTProviderInstance: DevKit.Form.Controls.ControlLookup;
			/** Select “Yes” if this device is simulated for testing and development purposes. Select “No” if this is a real device.​ */
			msdyn_IsSimulated: DevKit.Form.Controls.ControlOptionSet;
			/** The last activity time of the device */
			msdyn_LastActivityTime: DevKit.Form.Controls.ControlDateTime;
			/** The name of the custom entity. */
			msdyn_name: DevKit.Form.Controls.ControlString;
			/** A message field that explains the IoT Registration Status. */
			msdyn_RegistrationMessage: DevKit.Form.Controls.ControlString;
			/** A status field that denotes whether the device is registered with the IoT provider. */
			msdyn_RegistrationStatus: DevKit.Form.Controls.ControlOptionSet;
			/** Identifying Tags for the Device */
			msdyn_Tags: DevKit.Form.Controls.ControlString;
			/** Identifying Tags for the Device */
			msdyn_Tags_1: DevKit.Form.Controls.ControlString;
			/** The device's time zone. */
			msdyn_Timezone: DevKit.Form.Controls.ControlInteger;
		}
	}
	class Formmsdyn_iotdevice_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_iotdevice_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form msdyn_iotdevice_Information */
		Body: LuckyMokey.Formmsdyn_iotdevice_Information.Body;
		/** The Header section of form msdyn_iotdevice_Information */
		Header: LuckyMokey.Formmsdyn_iotdevice_Information.Header;
	}
	namespace FormIoT_Device_MFD {
		interface tab__D56B7A88_6981_4F4B_9AE2_6D1AEC457231_Sections {
			_804F2D0A_D93D_400B_9A90_B1C0D9992B5F: DevKit.Form.Controls.ControlSection;
			_column_2_section_1: DevKit.Form.Controls.ControlSection;
			_column_3_section_1: DevKit.Form.Controls.ControlSection;
			Device_Data: DevKit.Form.Controls.ControlSection;
		}
		interface tab__D56B7A88_6981_4F4B_9AE2_6D1AEC457231 extends DevKit.Form.Controls.IControlTab {
			Section: tab__D56B7A88_6981_4F4B_9AE2_6D1AEC457231_Sections;
		}
		interface Tabs {
			_D56B7A88_6981_4F4B_9AE2_6D1AEC457231: tab__D56B7A88_6981_4F4B_9AE2_6D1AEC457231;
		}
		interface Body {
			Tab: Tabs;
			DeviceDataHistory: DevKit.Form.Controls.ControlGrid;
			/** The connection status of the device (Disconnected or Connected) */
			msdyn_ConnectionState: DevKit.Form.Controls.ControlBoolean;
			/** Reported Properties data for Device */
			msdyn_DeviceReportedProperties: DevKit.Form.Controls.ControlString;
			/** The editable properties for a device. */
			msdyn_DeviceSettings: DevKit.Form.Controls.ControlString;
			/** The last activity time of the device */
			msdyn_LastActivityTime: DevKit.Form.Controls.ControlDateTime;
			/** The name of the custom entity. */
			msdyn_name: DevKit.Form.Controls.ControlString;
			/** Identifying Tags for the Device */
			msdyn_Tags: DevKit.Form.Controls.ControlString;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
		}
	}
	class FormIoT_Device_MFD extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form IoT_Device_MFD
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form IoT_Device_MFD */
		Body: LuckyMokey.FormIoT_Device_MFD.Body;
	}
}
declare namespace OptionSet {
	namespace msdyn_iotdevice {
		enum msdyn_IsSimulated {
			/** 192350000 */
			Yes,
			/** 192350001 */
			No
		}
		enum msdyn_RegistrationStatus {
			/** 192350000 */
			Unknown,
			/** 192350001 */
			Unregistered,
			/** 192350002 */
			In_Progress,
			/** 192350003 */
			Registered,
			/** 192350004 */
			Error
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
//{'JsForm':['Information','IoT Device MFD'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false}