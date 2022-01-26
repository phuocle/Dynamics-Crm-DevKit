//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_iotsettings_Information {
		interface Header extends DevKit.Controls.IHeader {
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface tab__EDDC3EA8_B755_416E_8D97_C3B1FEE65AAD_Sections {
			_E07187A8_1C2C_40FF_8C3A_05845B3A09F2: DevKit.Controls.Section;
			_EDDC3EA8_B755_416E_8D97_C3B1FEE65AAD_SECTION_2: DevKit.Controls.Section;
		}
		interface tab_AlertAggregationRulesTab_Sections {
			AlertAggregationRulesSection: DevKit.Controls.Section;
			tab_3_section_2: DevKit.Controls.Section;
		}
		interface tab_General_Sections {
			Command_Settings_Section: DevKit.Controls.Section;
			Deployment: DevKit.Controls.Section;
			Other_Section: DevKit.Controls.Section;
			tab_2_section_2: DevKit.Controls.Section;
		}
		interface tab_IoTProviderSettingsTab_Sections {
			DefaultIoTProviderInstanceSection: DevKit.Controls.Section;
			IoTProviderSettingsEmptySection: DevKit.Controls.Section;
		}
		interface tab_SuggestionsTab_Sections {
			ModelStatusSection: DevKit.Controls.Section;
			SuggestionsEmptySection: DevKit.Controls.Section;
			SuggestionsSection: DevKit.Controls.Section;
		}
		interface tab__EDDC3EA8_B755_416E_8D97_C3B1FEE65AAD extends DevKit.Controls.ITab {
			Section: tab__EDDC3EA8_B755_416E_8D97_C3B1FEE65AAD_Sections;
		}
		interface tab_AlertAggregationRulesTab extends DevKit.Controls.ITab {
			Section: tab_AlertAggregationRulesTab_Sections;
		}
		interface tab_General extends DevKit.Controls.ITab {
			Section: tab_General_Sections;
		}
		interface tab_IoTProviderSettingsTab extends DevKit.Controls.ITab {
			Section: tab_IoTProviderSettingsTab_Sections;
		}
		interface tab_SuggestionsTab extends DevKit.Controls.ITab {
			Section: tab_SuggestionsTab_Sections;
		}
		interface Tabs {
			_EDDC3EA8_B755_416E_8D97_C3B1FEE65AAD: tab__EDDC3EA8_B755_416E_8D97_C3B1FEE65AAD;
			AlertAggregationRulesTab: tab_AlertAggregationRulesTab;
			General: tab_General;
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
			msdyn_EnableIoTSuggestions1: DevKit.Controls.Boolean;
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
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class Formmsdyn_iotsettings_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_iotsettings_Information */
		Body: DevKit.Formmsdyn_iotsettings_Information.Body;
		/** The Header section of form msdyn_iotsettings_Information */
		Header: DevKit.Formmsdyn_iotsettings_Information.Header;
		/** The Process of form msdyn_iotsettings_Information */
		Process: DevKit.Formmsdyn_iotsettings_Information.Process;
		/** The SidePanes of form msdyn_iotsettings_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_iotsettingsApi {
		/**
		* DynamicsCrm.DevKit msdyn_iotsettingsApi
		* @param entity The entity object
		*/
		constructor(entity?: any);
		/**
		 * Get the value of alias
		 * @param alias the alias value
		 * @param isMultiOptionSet true if the alias is multi OptionSet
		 */
		getAliasedValue(alias: string, isMultiOptionSet?: boolean): any;
		/**
		 * Get the formatted value of alias
		 * @param alias the alias value
		 * @param isMultiOptionSet true if the alias is multi OptionSet
		 */
		getAliasedFormattedValue(alias: string, isMultiOptionSet?: boolean): string;
		/** The entity object */
		Entity: any;
		/** The entity name */
		EntityName: string;
		/** The entity collection name */
		EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependant on the fields that are retrieved */
		"@odata.etag": string;
		/** Unique identifier of the user who created the record. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the record. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the user who modified the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who modified the record. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** This value will be used to specify the command name when sending device commands. Default property value is "CommandName" when this field is unspecified. */
		msdyn_CommandNameProperty: DevKit.WebApi.StringValue;
		/** This value will be used to specify the command parameters when sending device commands. Default property value is "Parameters" when this field is unspecified. */
		msdyn_CommandParametersProperty: DevKit.WebApi.StringValue;
		/** The IoT Provider Instance to which IoT Devices should belong by default. */
		msdyn_DefaultIoTProviderInstance: DevKit.WebApi.LookupValue;
		/** This field is used to know the source of IoT for this organization. Example : IoT Suite or IoT Central or Others. */
		msdyn_defaultiotsource: DevKit.WebApi.OptionSetValue;
		msdyn_DeploymentAppURL: DevKit.WebApi.StringValue;
		/** To specify the interval of scheduled device data pulls */
		msdyn_devicedatapullfrequency: DevKit.WebApi.IntegerValue;
		/** IoT suggestions provide you insights on priority level and incident type associated with an alert. */
		msdyn_EnableIoTSuggestions: DevKit.WebApi.BooleanValue;
		/** When this option is enabled, all Connected Field Service background processes will be processed through flows instead of the historic Connected Field Service workflows. */
		msdyn_EnhancedBackgroundProcessing: DevKit.WebApi.BooleanValue;
		/** Select the columns that will be used to determine the aggregation of similar IoT alerts. */
		msdyn_IoTAlertAggregationRule: DevKit.WebApi.StringValue;
		/** Unique identifier for entity instances */
		msdyn_iotsettingsId: DevKit.WebApi.GuidValue;
		/** The name of the custom entity. */
		msdyn_name: DevKit.WebApi.StringValue;
		/** The next scheduled running time for device data pull */
		msdyn_NextDeviceDataPullTime_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** To turn on/off scheduled device data pulls, default is off */
		msdyn_ScheduledDeviceDataPull: DevKit.WebApi.BooleanValue;
		msdyn_ShowWelcome: DevKit.WebApi.BooleanValue;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: DevKit.WebApi.LookupValue;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: DevKit.WebApi.LookupValue;
		/** Unique identifier for the business unit that owns the record */
		OwningBusinessUnit: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier for the team that owns the record. */
		OwningTeam: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier for the user that owns the record. */
		OwningUser: DevKit.WebApi.LookupValueReadonly;
		/** Status of the IoTSettings */
		statecode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the IoTSettings */
		statuscode: DevKit.WebApi.OptionSetValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Version Number */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.00.00'}