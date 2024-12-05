//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
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
		interface Navigation {

		}
	}
	class Formmsdyn_iotdevicevisualizationconfiguration_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_iotdevicevisualizationconfiguration_Information */
		Body: DevKit.Formmsdyn_iotdevicevisualizationconfiguration_Information.Body;
		/** The Navigation of form msdyn_iotdevicevisualizationconfiguration_Information */
		Navigation: DevKit.Formmsdyn_iotdevicevisualizationconfiguration_Information.Navigation;
		/** The SidePanes of form msdyn_iotdevicevisualizationconfiguration_Information */
		SidePanes: DevKit.SidePanes;
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
		/** The entity object for Create/Update */
		Entity: unknown;
		/** The OData entity object */
		ODataEntity: unknown;
		/** The entity name */
		EntityName: string;
		/** The entity collection name */
		EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependant on the fields that are retrieved */
		"@odata.etag": string;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string;
		/** Action name for IoT device visualization */
		msdyn_actionname: string;
		msdyn_Aggregation: OptionSet.msdyn_iotdevicevisualizationconfiguration.msdyn_Aggregation;
		/** Device Event of device visualization */
		msdyn_DeviceEvent: OptionSet.msdyn_iotdevicevisualizationconfiguration.msdyn_DeviceEvent;
		/** Visualizations shown for this device */
		msdyn_IoTDevice: string;
		/** Visualization shown for this device category */
		msdyn_IoTDeviceCategory: string;
		/** Unique identifier for entity instances */
		msdyn_iotdevicevisualizationconfigurationId: string;
		/** Property Definition */
		msdyn_Measurement: string;
		/** The name of the custom entity. */
		msdyn_name: string;
		/** Position of device visualization */
		msdyn_Position: number;
		/** Time range unit for device visualization */
		msdyn_TimeRangeType: OptionSet.msdyn_iotdevicevisualizationconfiguration.msdyn_TimeRangeType;
		/** Time range value for device visualization */
		msdyn_TimeRangeValue: number;
		/** Visualization Configuration */
		msdyn_VisualizationConfigurationType: OptionSet.msdyn_iotdevicevisualizationconfiguration.msdyn_VisualizationConfigurationType;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Unique identifier for the business unit that owns the record */
		readonly OwningBusinessUnit: string;
		/** Unique identifier for the team that owns the record. */
		readonly OwningTeam: string;
		/** Unique identifier for the user that owns the record. */
		readonly OwningUser: string;
		/** Status of the IoT Device Visualization Configuration */
		statecode: OptionSet.msdyn_iotdevicevisualizationconfiguration.statecode;
		/** Reason for the status of the IoT Device Visualization Configuration */
		statuscode: OptionSet.msdyn_iotdevicevisualizationconfiguration.statuscode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Unique identifier of the user who created the record. */
			readonly CreatedBy: string;
			/** Date and time when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the record. */
			readonly CreatedOnBehalfBy: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			/** Action name for IoT device visualization */
			readonly msdyn_actionname: string;
			readonly msdyn_Aggregation: string;
			/** Device Event of device visualization */
			readonly msdyn_DeviceEvent: string;
			/** Visualizations shown for this device */
			readonly msdyn_IoTDevice: string;
			/** Visualization shown for this device category */
			readonly msdyn_IoTDeviceCategory: string;
			/** Unique identifier for entity instances */
			readonly msdyn_iotdevicevisualizationconfigurationId: string;
			/** Property Definition */
			readonly msdyn_Measurement: string;
			/** The name of the custom entity. */
			readonly msdyn_name: string;
			/** Position of device visualization */
			readonly msdyn_Position: string;
			/** Time range unit for device visualization */
			readonly msdyn_TimeRangeType: string;
			/** Time range value for device visualization */
			readonly msdyn_TimeRangeValue: string;
			/** Visualization Configuration */
			readonly msdyn_VisualizationConfigurationType: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Unique identifier for the business unit that owns the record */
			readonly OwningBusinessUnit: string;
			/** Unique identifier for the team that owns the record. */
			readonly OwningTeam: string;
			/** Unique identifier for the user that owns the record. */
			readonly OwningUser: string;
			/** Status of the IoT Device Visualization Configuration */
			readonly statecode: string;
			/** Reason for the status of the IoT Device Visualization Configuration */
			readonly statuscode: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.44.44.44'}