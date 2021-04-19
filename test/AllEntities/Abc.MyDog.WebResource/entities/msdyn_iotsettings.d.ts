//@ts-check
///<reference path="devkit.d.ts" />
declare namespace MyDog {
	namespace Formmsdyn_iotsettings_Information {
		interface Header extends DevKit.Controls.IHeader {
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface tab_General_Sections {
			Deployment: DevKit.Controls.Section;
			Command_Settings_Section: DevKit.Controls.Section;
			Other_Section: DevKit.Controls.Section;
			tab_2_section_2: DevKit.Controls.Section;
		}
		interface tab__EDDC3EA8_B755_416E_8D97_C3B1FEE65AAD_Sections {
			_E07187A8_1C2C_40FF_8C3A_05845B3A09F2: DevKit.Controls.Section;
			_EDDC3EA8_B755_416E_8D97_C3B1FEE65AAD_SECTION_2: DevKit.Controls.Section;
		}
		interface tab_AlertAggregationRulesTab_Sections {
			AlertAggregationRulesSection: DevKit.Controls.Section;
			tab_3_section_2: DevKit.Controls.Section;
		}
		interface tab_IoTProviderSettingsTab_Sections {
			DefaultIoTProviderInstanceSection: DevKit.Controls.Section;
			IoTProviderSettingsEmptySection: DevKit.Controls.Section;
		}
		interface tab_SuggestionsTab_Sections {
			SuggestionsSection: DevKit.Controls.Section;
			ModelStatusSection: DevKit.Controls.Section;
			SuggestionsEmptySection: DevKit.Controls.Section;
		}
		interface tab_General extends DevKit.Controls.ITab {
			Section: tab_General_Sections;
		}
		interface tab__EDDC3EA8_B755_416E_8D97_C3B1FEE65AAD extends DevKit.Controls.ITab {
			Section: tab__EDDC3EA8_B755_416E_8D97_C3B1FEE65AAD_Sections;
		}
		interface tab_AlertAggregationRulesTab extends DevKit.Controls.ITab {
			Section: tab_AlertAggregationRulesTab_Sections;
		}
		interface tab_IoTProviderSettingsTab extends DevKit.Controls.ITab {
			Section: tab_IoTProviderSettingsTab_Sections;
		}
		interface tab_SuggestionsTab extends DevKit.Controls.ITab {
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
			msdyn_CommandNameProperty: DevKit.Controls.String;
			/** This value will be used to specify the command parameters when sending device commands. Default property value is "Parameters" when this field is unspecified. */
			msdyn_CommandParametersProperty: DevKit.Controls.String;
			/** The IoT Provider Instance to which IoT Devices should belong by default. */
			msdyn_DefaultIoTProviderInstance: DevKit.Controls.Lookup;
			msdyn_DeploymentAppURL: DevKit.Controls.String;
			/** To specify the interval of scheduled device data pulls */
			msdyn_devicedatapullfrequency: DevKit.Controls.Integer;
			/** IoT suggestions provide you insights on priority level and incident type associated with an alert. */
			msdyn_EnableIoTSuggestions: DevKit.Controls.Boolean;
			/** IoT suggestions provide you insights on priority level and incident type associated with an alert. */
			msdyn_EnableIoTSuggestions_1: DevKit.Controls.Boolean;
			/** When this option is enabled, all Connected Field Service background processes will be processed through flows instead of the historic Connected Field Service workflows. */
			msdyn_EnhancedBackgroundProcessing: DevKit.Controls.Boolean;
			/** Select the columns that will be used to determine the aggregation of similar IoT alerts. */
			msdyn_IoTAlertAggregationRule: DevKit.Controls.String;
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** The next scheduled running time for device data pull */
			msdyn_NextDeviceDataPullTime: DevKit.Controls.DateTime;
			/** To turn on/off scheduled device data pulls, default is off */
			msdyn_ScheduledDeviceDataPull: DevKit.Controls.Boolean;
		}
	}
	class Formmsdyn_iotsettings_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_iotsettings_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_iotsettings_Information */
		Body: MyDog.Formmsdyn_iotsettings_Information.Body;
		/** The Header section of form msdyn_iotsettings_Information */
		Header: MyDog.Formmsdyn_iotsettings_Information.Header;
	}
}
declare namespace OptionSet {
	namespace msdyn_iotsettings {
		enum msdyn_defaultiotsource {
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