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
		/** Copy newly introduced coordinates into bookable resource table. */
		msdyn_CopyGeoDataFromURS: boolean;
		/** Schematic name of the first date field for the configured entity. */
		msdyn_DateFilter1FieldName: string;
		msdyn_DateFilter1LastXDay: number;
		msdyn_DateFilter1NextXDay: number;
		/** Schematic name of the second date field for the configured entity. */
		msdyn_DateFilter2FieldName: string;
		msdyn_DateFilter2LastXDay: number;
		msdyn_DateFilter2NextXDay: number;
		/** Enables the entity's records to either represent geofences or be geotracked for entry and exit of geofences. */
		msdyn_EnabledAs: OptionSet.msdyn_entityconfiguration.msdyn_EnabledAs;
		/** Enable Trigger Filters */
		msdyn_EnableTriggerFilters: boolean;
		/** The entity that is configured as either a geofence or to be geotracked. */
		msdyn_Entity: string;
		/** Unique identifier of the entity configuration record. */
		msdyn_entityconfigurationId: string;
		/** Name of the configured entity's primary key field. */
		msdyn_EntityPrimaryKey: string;
		/** Schematic name of the latitude field for the configured entity. */
		msdyn_LatitudeFieldName: string;
		/** Schematic name of the longitude field for the configured entity. */
		msdyn_LongitudeFieldName: string;
		/** The name of the entity configuration record. */
		msdyn_name: string;
		/** Default radius for Geofences created for the configured entity type. */
		msdyn_Radius: number;
		/** Name of the relationship field for the configured entity. */
		msdyn_RelationshipFieldName: string;
		/** Schematic name of the timestamp field for the configured entity. */
		msdyn_timestampfieldname: string;
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
		/** Status of the Entity Configuration */
		statecode: OptionSet.msdyn_entityconfiguration.statecode;
		/** Reason for the status of the Entity Configuration */
		statuscode: OptionSet.msdyn_entityconfiguration.statuscode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.00.00','WebApiVersion':'2'}