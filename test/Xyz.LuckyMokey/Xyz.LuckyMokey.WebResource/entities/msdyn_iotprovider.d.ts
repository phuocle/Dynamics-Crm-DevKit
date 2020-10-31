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
	class msdyn_iotproviderApi {
		/**
		* DynamicsCrm.DevKit msdyn_iotproviderApi
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
		/** Name of the action to get readings from a device using this IoT Provider */
		msdyn_GetAggregatedDeviceReadingsAction: DevKit.WebApi.StringValue;
		/** Unique identifier for entity instances */
		msdyn_iotproviderId: DevKit.WebApi.GuidValue;
		/** The IoT source providing access to IoT functions. */
		msdyn_IoTSource: DevKit.WebApi.OptionSetValue;
		/** The name of the custom entity. */
		msdyn_name: DevKit.WebApi.StringValue;
		/** The name of the action for pulling data from a device using this IoT Provider. */
		msdyn_PullDeviceDataAction: DevKit.WebApi.StringValue;
		/** The name of the action to get time series readings from a device using this IoT Provider. */
		msdyn_QueryDeviceReadingsAction: DevKit.WebApi.StringValue;
		/** The name of the action for registering devices using this IoT Provider. */
		msdyn_RegisterAction: DevKit.WebApi.StringValue;
		/** The name of the action for sending a command to devices using this IoT Provider. */
		msdyn_SendCommandAction: DevKit.WebApi.StringValue;
		/** The name of the action for updating device data for a device using this IoT Provider. */
		msdyn_UpdateDeviceDataAction: DevKit.WebApi.StringValue;
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
		/** Status of the IoT Provider */
		statecode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the IoT Provider */
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
//{'JsForm':['Information'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}