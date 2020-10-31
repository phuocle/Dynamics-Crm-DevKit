//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace Formmsdyn_iotdevicevisualizationconfiguration_Information {
		interface Tabs {
		}
		interface Body {
			/** Action name for IoT device visualization */
			msdyn_actionname: DevKit.Form.Controls.ControlString;
			msdyn_Aggregation: DevKit.Form.Controls.ControlOptionSet;
			/** Device Event of device visualization */
			msdyn_DeviceEvent: DevKit.Form.Controls.ControlOptionSet;
			/** Visualizations shown for this device */
			msdyn_IoTDevice: DevKit.Form.Controls.ControlLookup;
			/** Visualization shown for this device category */
			msdyn_IoTDeviceCategory: DevKit.Form.Controls.ControlLookup;
			/** Property Definition */
			msdyn_Measurement: DevKit.Form.Controls.ControlLookup;
			/** The name of the custom entity. */
			msdyn_name: DevKit.Form.Controls.ControlString;
			/** Position of device visualization */
			msdyn_Position: DevKit.Form.Controls.ControlInteger;
			/** Time range unit for device visualization */
			msdyn_TimeRangeType: DevKit.Form.Controls.ControlOptionSet;
			/** Time range value for device visualization */
			msdyn_TimeRangeValue: DevKit.Form.Controls.ControlInteger;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
		}
	}
	class Formmsdyn_iotdevicevisualizationconfiguration_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_iotdevicevisualizationconfiguration_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form msdyn_iotdevicevisualizationconfiguration_Information */
		Body: LuckyMokey.Formmsdyn_iotdevicevisualizationconfiguration_Information.Body;
	}
	class msdyn_iotdevicevisualizationconfigurationApi {
		/**
		* DynamicsCrm.DevKit msdyn_iotdevicevisualizationconfigurationApi
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
		/** Action name for IoT device visualization */
		msdyn_actionname: DevKit.WebApi.StringValue;
		msdyn_Aggregation: DevKit.WebApi.OptionSetValue;
		/** Device Event of device visualization */
		msdyn_DeviceEvent: DevKit.WebApi.OptionSetValue;
		/** Visualizations shown for this device */
		msdyn_IoTDevice: DevKit.WebApi.LookupValue;
		/** Visualization shown for this device category */
		msdyn_IoTDeviceCategory: DevKit.WebApi.LookupValue;
		/** Unique identifier for entity instances */
		msdyn_iotdevicevisualizationconfigurationId: DevKit.WebApi.GuidValue;
		/** Property Definition */
		msdyn_Measurement: DevKit.WebApi.LookupValue;
		/** The name of the custom entity. */
		msdyn_name: DevKit.WebApi.StringValue;
		/** Position of device visualization */
		msdyn_Position: DevKit.WebApi.IntegerValue;
		/** Time range unit for device visualization */
		msdyn_TimeRangeType: DevKit.WebApi.OptionSetValue;
		/** Time range value for device visualization */
		msdyn_TimeRangeValue: DevKit.WebApi.IntegerValue;
		/** Visualization Configuration */
		msdyn_VisualizationConfigurationType: DevKit.WebApi.OptionSetValue;
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
		/** Status of the IoT Device Visualization Configuration */
		statecode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the IoT Device Visualization Configuration */
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
	namespace msdyn_iotdevicevisualizationconfiguration {
		enum msdyn_Aggregation {
			/** 192350000 */
			None,
			/** 192350001 */
			Avg,
			/** 192350002 */
			Min,
			/** 192350003 */
			Max,
			/** 192350004 */
			Sum,
			/** 192350005 */
			Count
		}
		enum msdyn_DeviceEvent {
			/** 192350000 */
			IoT_Alert,
			/** 192350001 */
			Case,
			/** 192350002 */
			Work_Order
		}
		enum msdyn_TimeRangeType {
			/** 192350000 */
			Hours,
			/** 192350001 */
			Days,
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
//{'JsForm':['Information'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}