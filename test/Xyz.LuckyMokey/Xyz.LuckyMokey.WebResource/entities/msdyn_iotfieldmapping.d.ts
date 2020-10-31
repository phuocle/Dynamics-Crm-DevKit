//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace Formmsdyn_iotfieldmapping_Information {
		interface tab__4D9E1ADB_E5B9_4215_99CE_9028EC28EDF5_Sections {
			_F16376E7_2BAA_42D4_9A1A_3443CF1688C0: DevKit.Form.Controls.ControlSection;
			_4D9E1ADB_E5B9_4215_99CE_9028EC28EDF5_SECTION_2: DevKit.Form.Controls.ControlSection;
		}
		interface tab__4D9E1ADB_E5B9_4215_99CE_9028EC28EDF5 extends DevKit.Form.Controls.IControlTab {
			Section: tab__4D9E1ADB_E5B9_4215_99CE_9028EC28EDF5_Sections;
		}
		interface Tabs {
			_4D9E1ADB_E5B9_4215_99CE_9028EC28EDF5: tab__4D9E1ADB_E5B9_4215_99CE_9028EC28EDF5;
		}
		interface Body {
			Tab: Tabs;
			/** The direct path or the key path to retrieve the desired information for mapping. */
			msdyn_DirectPathOrKeyPath: DevKit.Form.Controls.ControlString;
			/** The data format of the field specified to map to. */
			msdyn_FieldDataFormat: DevKit.Form.Controls.ControlOptionSet;
			/** The field schema name to map to. */
			msdyn_FieldName: DevKit.Form.Controls.ControlString;
			/** The type of the mapping. */
			msdyn_MappingType: DevKit.Form.Controls.ControlOptionSet;
			/** The ML model's input field name. */
			msdyn_ModelInputFieldName: DevKit.Form.Controls.ControlString;
			/** The search type of this mapping. */
			msdyn_SearchType: DevKit.Form.Controls.ControlOptionSet;
			/** The path of the value to be retrieved. */
			msdyn_ValuePath: DevKit.Form.Controls.ControlString;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
		}
	}
	class Formmsdyn_iotfieldmapping_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_iotfieldmapping_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form msdyn_iotfieldmapping_Information */
		Body: LuckyMokey.Formmsdyn_iotfieldmapping_Information.Body;
	}
	class msdyn_iotfieldmappingApi {
		/**
		* DynamicsCrm.DevKit msdyn_iotfieldmappingApi
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
		/** For internal use only. */
		ComponentIdUnique: DevKit.WebApi.GuidValueReadonly;
		/** For internal use only. */
		ComponentState: DevKit.WebApi.OptionSetValueReadonly;
		/** Unique identifier of the user who created the record. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the record. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** For internal use only. */
		IsCustomizable: DevKit.WebApi.ManagedPropertyValue;
		/** Indicates whether the solution component is part of a managed solution. */
		IsManaged: DevKit.WebApi.BooleanValueReadonly;
		/** Unique identifier of the user who modified the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who modified the record. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** The direct path or the key path to retrieve the desired information for mapping. */
		msdyn_DirectPathOrKeyPath: DevKit.WebApi.StringValue;
		/** The data format of the field specified to map to. */
		msdyn_FieldDataFormat: DevKit.WebApi.OptionSetValue;
		/** The field schema name to map to. */
		msdyn_FieldName: DevKit.WebApi.StringValue;
		/** Unique identifier for entity instances */
		msdyn_iotfieldmappingId: DevKit.WebApi.GuidValue;
		/** The type of the mapping. */
		msdyn_MappingType: DevKit.WebApi.OptionSetValue;
		/** The ML model's input field name. */
		msdyn_ModelInputFieldName: DevKit.WebApi.StringValue;
		/** The search type of this mapping. */
		msdyn_SearchType: DevKit.WebApi.OptionSetValue;
		/** The path of the value to be retrieved. */
		msdyn_ValuePath: DevKit.WebApi.StringValue;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** For internal use only. */
		OverwriteTime_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
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
		/** Unique identifier of the associated solution. */
		SolutionId: DevKit.WebApi.GuidValueReadonly;
		/** Status of the IoT Field Mapping */
		statecode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the IoT Field Mapping */
		statuscode: DevKit.WebApi.OptionSetValue;
		/** For internal use only. */
		SupportingSolutionId: DevKit.WebApi.GuidValueReadonly;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Version Number */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace msdyn_iotfieldmapping {
		enum ComponentState {
			/** 0 */
			Published,
			/** 1 */
			Unpublished,
			/** 2 */
			Deleted,
			/** 3 */
			Deleted_Unpublished
		}
		enum msdyn_FieldDataFormat {
			/** 192350000 */
			Direct,
			/** 192350001 */
			JSON
		}
		enum msdyn_MappingType {
			/** 192350000 */
			Device_identifier,
			/** 192350001 */
			Rule_identifier,
			/** 192350002 */
			Device_property
		}
		enum msdyn_SearchType {
			/** 192350000 */
			Direct_Path,
			/** 192350001 */
			Key_Value_Path
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