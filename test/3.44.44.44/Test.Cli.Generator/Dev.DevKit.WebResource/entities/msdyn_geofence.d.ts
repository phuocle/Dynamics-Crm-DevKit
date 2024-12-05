//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_geofence_Main_Form {
		interface Tabs {
		}
		interface Body {
			/** Indicates if the geotracked record is inside or outside the geofence. */
			msdyn_GeotrackedRecordStatus: DevKit.Controls.OptionSet;
			/** The name of the Geofence. */
			msdyn_name: DevKit.Controls.String;
			/** The radius of the radial geofence. */
			msdyn_Radius: DevKit.Controls.Double;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Navigation {
			msdyn_msdyn_geofence_msdyn_geofenceevent_geofence: DevKit.Controls.NavigationItem
		}
	}
	class Formmsdyn_geofence_Main_Form extends DevKit.IForm {
		/**
		* Main Form [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_geofence_Main_Form */
		Body: DevKit.Formmsdyn_geofence_Main_Form.Body;
		/** The Navigation of form msdyn_geofence_Main_Form */
		Navigation: DevKit.Formmsdyn_geofence_Main_Form.Navigation;
		/** The SidePanes of form msdyn_geofence_Main_Form */
		SidePanes: DevKit.SidePanes;
	}
	namespace Formmsdyn_geofence_New_Form {
		interface tab_tab_1_Sections {
			tab_1_column_1_section_1: DevKit.Controls.Section;
			tab_1_column_2_section_1: DevKit.Controls.Section;
			tab_1_column_3_section_1: DevKit.Controls.Section;
		}
		interface tab_tab_1 extends DevKit.Controls.ITab {
			Section: tab_tab_1_Sections;
		}
		interface Tabs {
			tab_1: tab_tab_1;
		}
		interface Body {
			Tab: Tabs;
			/** The name of the Geofence. */
			msdyn_name: DevKit.Controls.String;
			/** The radius of the radial geofence. */
			msdyn_Radius: DevKit.Controls.Double;
		}
	}
	class Formmsdyn_geofence_New_Form extends DevKit.IForm {
		/**
		* New Form [Quick Create]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_geofence_New_Form */
		Body: DevKit.Formmsdyn_geofence_New_Form.Body;
	}
	class msdyn_geofenceApi {
		/**
		* DynamicsCrm.DevKit msdyn_geofenceApi
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
		/** Unique identifier for the Bookable Resource Booking record. */
		msdyn_bookableresourcebookingid: string;
		/** Unique identifier for Geofences. */
		msdyn_geofenceId: string;
		/** Indicates if the geotracked record is inside or outside the geofence. */
		msdyn_GeotrackedRecordStatus: OptionSet.msdyn_geofence.msdyn_GeotrackedRecordStatus;
		/** The geotracked record status timestamp. */
		msdyn_GeotrackedRecordStatusTimestamp_UtcDateAndTime: Date;
		/** The name of the Geofence. */
		msdyn_name: string;
		/** The radius of the radial geofence. */
		msdyn_Radius: number;
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
		/** Status of the Geofence */
		statecode: OptionSet.msdyn_geofence.statecode;
		/** Reason for the status of the Geofence */
		statuscode: OptionSet.msdyn_geofence.statuscode;
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
			/** Unique identifier for the Bookable Resource Booking record. */
			readonly msdyn_bookableresourcebookingid: string;
			/** Unique identifier for Geofences. */
			readonly msdyn_geofenceId: string;
			/** Indicates if the geotracked record is inside or outside the geofence. */
			readonly msdyn_GeotrackedRecordStatus: string;
			/** The geotracked record status timestamp. */
			readonly msdyn_GeotrackedRecordStatusTimestamp_UtcDateAndTime: string;
			/** The name of the Geofence. */
			readonly msdyn_name: string;
			/** The radius of the radial geofence. */
			readonly msdyn_Radius: string;
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
			/** Status of the Geofence */
			readonly statecode: string;
			/** Reason for the status of the Geofence */
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
	namespace msdyn_geofence {
		enum msdyn_GeotrackedRecordStatus {
			/** 192350001 */
			Inside,
			/** 192350000 */
			Outside
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