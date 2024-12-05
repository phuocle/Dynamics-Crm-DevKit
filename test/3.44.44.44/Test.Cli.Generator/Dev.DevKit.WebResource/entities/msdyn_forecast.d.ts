//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_forecast_Information {
		interface Tabs {
		}
		interface Body {
			/** Forecast Id */
			msdyn_name: DevKit.Controls.String;
		}
		interface Navigation {
			msdyn_msdyn_forecast_msdyn_adjustmenthistory_forecastid: DevKit.Controls.NavigationItem,
			msdyn_msdyn_forecast_msdyn_forecast_parentinstanceid: DevKit.Controls.NavigationItem,
			msdyn_msdyn_forecast_msdyn_forecastpredictiondata_forecastid: DevKit.Controls.NavigationItem
		}
	}
	class Formmsdyn_forecast_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_forecast_Information */
		Body: DevKit.Formmsdyn_forecast_Information.Body;
		/** The Navigation of form msdyn_forecast_Information */
		Navigation: DevKit.Formmsdyn_forecast_Information.Navigation;
		/** The SidePanes of form msdyn_forecast_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_forecastApi {
		/**
		* DynamicsCrm.DevKit msdyn_forecastApi
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
		/** AggregatedColumns */
		msdyn_aggregatedcolumns: string;
		/** ForecastConfigurationId */
		msdyn_forecastconfigurationid: string;
		/** Unique identifier for entity instances */
		msdyn_forecastId: string;
		/** ForecastRecurrenceId */
		msdyn_forecastrecurrenceid: string;
		/** HierarchyEntityRecord */
		msdyn_hierarchyentityrecord: string;
		/** Forecast Id */
		msdyn_name: string;
		/** OwnerId */
		msdyn_ownerid: string;
		/** ParentInstanceId */
		msdyn_parentinstanceid: string;
		/** RolledUpColumns */
		msdyn_rolledupcolumns: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Logical partition id. A logical partition consists of a set of records with same partition id. */
		PartitionId: string;
		/** Time to live in seconds. */
		TTLInSeconds: number;
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
			/** AggregatedColumns */
			readonly msdyn_aggregatedcolumns: string;
			/** ForecastConfigurationId */
			readonly msdyn_forecastconfigurationid: string;
			/** Unique identifier for entity instances */
			readonly msdyn_forecastId: string;
			/** ForecastRecurrenceId */
			readonly msdyn_forecastrecurrenceid: string;
			/** HierarchyEntityRecord */
			readonly msdyn_hierarchyentityrecord: string;
			/** Forecast Id */
			readonly msdyn_name: string;
			/** OwnerId */
			readonly msdyn_ownerid: string;
			/** ParentInstanceId */
			readonly msdyn_parentinstanceid: string;
			/** RolledUpColumns */
			readonly msdyn_rolledupcolumns: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Logical partition id. A logical partition consists of a set of records with same partition id. */
			readonly PartitionId: string;
			/** Time to live in seconds. */
			readonly TTLInSeconds: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace msdyn_forecast {
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