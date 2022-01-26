//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_entityconfiguration_Main_Form {
		interface Tabs {
		}
		interface Body {
			/** Copy newly introduced coordinates into bookable resource table. */
			msdyn_CopyGeoDataFromURS: DevKit.Controls.Boolean;
			/** Schematic name of the first date field for the configured entity. */
			msdyn_DateFilter1FieldName: DevKit.Controls.String;
			msdyn_DateFilter1LastXDay: DevKit.Controls.Integer;
			msdyn_DateFilter1NextXDay: DevKit.Controls.Integer;
			/** Schematic name of the second date field for the configured entity. */
			msdyn_DateFilter2FieldName: DevKit.Controls.String;
			msdyn_DateFilter2LastXDay: DevKit.Controls.Integer;
			msdyn_DateFilter2NextXDay: DevKit.Controls.Integer;
			/** Enables the entity's records to either represent geofences or be geotracked for entry and exit of geofences. */
			msdyn_EnabledAs: DevKit.Controls.OptionSet;
			/** Enable Trigger Filters */
			msdyn_EnableTriggerFilters: DevKit.Controls.Boolean;
			/** The entity that is configured as either a geofence or to be geotracked. */
			msdyn_Entity: DevKit.Controls.String;
			/** Schematic name of the latitude field for the configured entity. */
			msdyn_LatitudeFieldName: DevKit.Controls.String;
			/** Schematic name of the longitude field for the configured entity. */
			msdyn_LongitudeFieldName: DevKit.Controls.String;
			/** The name of the entity configuration record. */
			msdyn_name: DevKit.Controls.String;
			/** Default radius for Geofences created for the configured entity type. */
			msdyn_Radius: DevKit.Controls.Double;
			/** Schematic name of the timestamp field for the configured entity. */
			msdyn_timestampfieldname: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class Formmsdyn_entityconfiguration_Main_Form extends DevKit.IForm {
		/**
		* Main Form [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_entityconfiguration_Main_Form */
		Body: DevKit.Formmsdyn_entityconfiguration_Main_Form.Body;
		/** The Process of form msdyn_entityconfiguration_Main_Form */
		Process: DevKit.Formmsdyn_entityconfiguration_Main_Form.Process;
		/** The SidePanes of form msdyn_entityconfiguration_Main_Form */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_entityconfigurationApi {
		/**
		* DynamicsCrm.DevKit msdyn_entityconfigurationApi
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
		/** Copy newly introduced coordinates into bookable resource table. */
		msdyn_CopyGeoDataFromURS: DevKit.WebApi.BooleanValue;
		/** Schematic name of the first date field for the configured entity. */
		msdyn_DateFilter1FieldName: DevKit.WebApi.StringValue;
		msdyn_DateFilter1LastXDay: DevKit.WebApi.IntegerValue;
		msdyn_DateFilter1NextXDay: DevKit.WebApi.IntegerValue;
		/** Schematic name of the second date field for the configured entity. */
		msdyn_DateFilter2FieldName: DevKit.WebApi.StringValue;
		msdyn_DateFilter2LastXDay: DevKit.WebApi.IntegerValue;
		msdyn_DateFilter2NextXDay: DevKit.WebApi.IntegerValue;
		/** Enables the entity's records to either represent geofences or be geotracked for entry and exit of geofences. */
		msdyn_EnabledAs: DevKit.WebApi.OptionSetValue;
		/** Enable Trigger Filters */
		msdyn_EnableTriggerFilters: DevKit.WebApi.BooleanValue;
		/** The entity that is configured as either a geofence or to be geotracked. */
		msdyn_Entity: DevKit.WebApi.StringValue;
		/** Unique identifier of the entity configuration record. */
		msdyn_entityconfigurationId: DevKit.WebApi.GuidValue;
		/** Name of the configured entity's primary key field. */
		msdyn_EntityPrimaryKey: DevKit.WebApi.StringValue;
		/** Schematic name of the latitude field for the configured entity. */
		msdyn_LatitudeFieldName: DevKit.WebApi.StringValue;
		/** Schematic name of the longitude field for the configured entity. */
		msdyn_LongitudeFieldName: DevKit.WebApi.StringValue;
		/** The name of the entity configuration record. */
		msdyn_name: DevKit.WebApi.StringValue;
		/** Default radius for Geofences created for the configured entity type. */
		msdyn_Radius: DevKit.WebApi.DoubleValue;
		/** Name of the relationship field for the configured entity. */
		msdyn_RelationshipFieldName: DevKit.WebApi.StringValue;
		/** Schematic name of the timestamp field for the configured entity. */
		msdyn_timestampfieldname: DevKit.WebApi.StringValue;
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
		/** Status of the Entity Configuration */
		statecode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the Entity Configuration */
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
	namespace msdyn_entityconfiguration {
		enum msdyn_EnabledAs {
			/** 192350000 */
			Geofence,
			/** 192350001 */
			Geotracked
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