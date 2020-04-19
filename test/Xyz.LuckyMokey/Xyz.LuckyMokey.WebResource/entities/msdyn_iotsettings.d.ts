//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace Formmsdyn_iotsettings_Information {
		interface Header {
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
		}
		interface tab_General_Sections {
			Deployment: DevKit.Form.Controls.ControlSection;
			Command_Settings_Section: DevKit.Form.Controls.ControlSection;
			tab_2_section_2: DevKit.Form.Controls.ControlSection;
		}
		interface tab__EDDC3EA8_B755_416E_8D97_C3B1FEE65AAD_Sections {
			_E07187A8_1C2C_40FF_8C3A_05845B3A09F2: DevKit.Form.Controls.ControlSection;
			_EDDC3EA8_B755_416E_8D97_C3B1FEE65AAD_SECTION_2: DevKit.Form.Controls.ControlSection;
		}
		interface tab_AlertAggregationRulesTab_Sections {
			AlertAggregationRulesSection: DevKit.Form.Controls.ControlSection;
			tab_3_section_2: DevKit.Form.Controls.ControlSection;
		}
		interface tab_IoTProviderSettingsTab_Sections {
			DefaultIoTProviderInstanceSection: DevKit.Form.Controls.ControlSection;
			IoTProviderSettingsEmptySection: DevKit.Form.Controls.ControlSection;
		}
		interface tab_SuggestionsTab_Sections {
			SuggestionsSection: DevKit.Form.Controls.ControlSection;
			ModelStatusSection: DevKit.Form.Controls.ControlSection;
			SuggestionsEmptySection: DevKit.Form.Controls.ControlSection;
		}
		interface tab_General extends DevKit.Form.Controls.IControlTab {
			Section: tab_General_Sections;
		}
		interface tab__EDDC3EA8_B755_416E_8D97_C3B1FEE65AAD extends DevKit.Form.Controls.IControlTab {
			Section: tab__EDDC3EA8_B755_416E_8D97_C3B1FEE65AAD_Sections;
		}
		interface tab_AlertAggregationRulesTab extends DevKit.Form.Controls.IControlTab {
			Section: tab_AlertAggregationRulesTab_Sections;
		}
		interface tab_IoTProviderSettingsTab extends DevKit.Form.Controls.IControlTab {
			Section: tab_IoTProviderSettingsTab_Sections;
		}
		interface tab_SuggestionsTab extends DevKit.Form.Controls.IControlTab {
			Section: tab_SuggestionsTab_Sections;
		}
		interface Tabs {
			General: tab_General;
			_EDDC3EA8_B755_416E_8D97_C3B1FEE65AAD: tab__EDDC3EA8_B755_416E_8D97_C3B1FEE65AAD;
			AlertAggregationRulesTab: tab_AlertAggregationRulesTab;
			IoTProviderSettingsTab: tab_IoTProviderSettingsTab;
			SuggestionsTab: tab_SuggestionsTab;
		}
		interface Body {
			Tab: Tabs;
			/** This value will be used to specify the command name when sending device commands. Default property value is "CommandName" when this field is unspecified. */
			msdyn_CommandNameProperty: DevKit.Form.Controls.ControlString;
			/** This value will be used to specify the command parameters when sending device commands. Default property value is "Parameters" when this field is unspecified. */
			msdyn_CommandParametersProperty: DevKit.Form.Controls.ControlString;
			/** The IoT Provider Instance to which IoT Devices should belong by default. */
			msdyn_DefaultIoTProviderInstance: DevKit.Form.Controls.ControlLookup;
			msdyn_DeploymentAppURL: DevKit.Form.Controls.ControlString;
			/** To specify the interval of scheduled device data pulls */
			msdyn_devicedatapullfrequency: DevKit.Form.Controls.ControlInteger;
			/** IoT suggestions provide you insights on priority level and incident type associated with an alert. */
			msdyn_EnableIoTSuggestions: DevKit.Form.Controls.ControlBoolean;
			/** IoT suggestions provide you insights on priority level and incident type associated with an alert. */
			msdyn_EnableIoTSuggestions_1: DevKit.Form.Controls.ControlBoolean;
			/** Select the columns that will be used to determine the aggregation of similar IoT alerts. */
			msdyn_IoTAlertAggregationRule: DevKit.Form.Controls.ControlString;
			/** The name of the custom entity. */
			msdyn_name: DevKit.Form.Controls.ControlString;
			/** The next scheduled running time for device data pull */
			msdyn_NextDeviceDataPullTime: DevKit.Form.Controls.ControlDateTime;
			/** To turn on/off scheduled device data pulls, default is off */
			msdyn_ScheduledDeviceDataPull: DevKit.Form.Controls.ControlBoolean;
		}
	}
	class Formmsdyn_iotsettings_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_iotsettings_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form msdyn_iotsettings_Information */
		Body: LuckyMokey.Formmsdyn_iotsettings_Information.Body;
		/** The Header section of form msdyn_iotsettings_Information */
		Header: LuckyMokey.Formmsdyn_iotsettings_Information.Header;
	}
}
declare namespace OptionSet {
	namespace msdyn_iotsettings {
		enum msdyn_defaultiotsource {
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