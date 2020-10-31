//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace Formmsdyn_iotdevicedatahistory_Information {
		interface Tabs {
		}
		interface Body {
			/** The connection status of the device (Disconnected or Connected) */
			msdyn_ConnectionState: DevKit.Form.Controls.ControlBoolean;
			/** Time when device connection status was last changed */
			msdyn_ConnectionStateUpdatedTime: DevKit.Form.Controls.ControlDateTime;
			/** The device for which the device data is */
			msdyn_Device: DevKit.Form.Controls.ControlLookup;
			/** Reported Properties from the Device */
			msdyn_DeviceReportedProperties: DevKit.Form.Controls.ControlString;
			/** Reported Properties from the Device */
			msdyn_DeviceReportedProperties_1: DevKit.Form.Controls.ControlString;
			/** The time of last device data pull */
			msdyn_LastActivityTime: DevKit.Form.Controls.ControlDateTime;
			/** The name of the custom entity. */
			msdyn_name: DevKit.Form.Controls.ControlString;
			/** Device Status (Disabled, Enabled or Not Found) */
			msdyn_Status: DevKit.Form.Controls.ControlOptionSet;
			/** A 128 character-long string that stores the reason for the device identity status. All UTF-8 characters are allowed. */
			msdyn_StatusReason: DevKit.Form.Controls.ControlString;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
		}
	}
	class Formmsdyn_iotdevicedatahistory_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_iotdevicedatahistory_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form msdyn_iotdevicedatahistory_Information */
		Body: LuckyMokey.Formmsdyn_iotdevicedatahistory_Information.Body;
	}
	class msdyn_iotdevicedatahistoryApi {
		/**
		* DynamicsCrm.DevKit msdyn_iotdevicedatahistoryApi
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
		/** The connection status of the device (Disconnected or Connected) */
		msdyn_ConnectionState: DevKit.WebApi.BooleanValue;
		/** Time when device connection status was last changed */
		msdyn_ConnectionStateUpdatedTime_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** The device for which the device data is */
		msdyn_Device: DevKit.WebApi.LookupValue;
		/** Reported Properties from the Device */
		msdyn_DeviceReportedProperties: DevKit.WebApi.StringValue;
		/** Unique identifier for entity instances */
		msdyn_iotdevicedatahistoryId: DevKit.WebApi.GuidValue;
		/** Identifier for the device in the IoT provider */
		msdyn_IoTHubDeviceId: DevKit.WebApi.StringValue;
		/** The time of last device data pull */
		msdyn_LastActivityTime_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** The name of the custom entity. */
		msdyn_name: DevKit.WebApi.StringValue;
		/** Device Status (Disabled, Enabled or Not Found) */
		msdyn_Status: DevKit.WebApi.OptionSetValue;
		/** A 128 character-long string that stores the reason for the device identity status. All UTF-8 characters are allowed. */
		msdyn_StatusReason: DevKit.WebApi.StringValue;
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
		/** Status of the IoT Device Data History */
		statecode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the IoT Device Data History */
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
	namespace msdyn_iotdevicedatahistory {
		enum msdyn_Status {
			/** 192350000 */
			Enabled,
			/** 192350001 */
			Disabled,
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
//{'JsForm':['Information'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}