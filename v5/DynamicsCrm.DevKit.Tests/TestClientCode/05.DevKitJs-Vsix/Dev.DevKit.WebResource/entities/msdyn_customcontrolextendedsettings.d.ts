//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_customcontrolextendedsettings_Information {
		interface Tabs {
		}
		interface Body {
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
	}
	export class Formmsdyn_customcontrolextendedsettings_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** The Body section of form msdyn_customcontrolextendedsettings_Information */
		Body: DevKit.Formmsdyn_customcontrolextendedsettings_Information.Body;
	}
	export class msdyn_customcontrolextendedsettingsApi {
		/**
		* DynamicsCrm.DevKit msdyn_customcontrolextendedsettingsApi
		* @param entity The entity object from OData response
		*/
		constructor(entity?: Record<string, any>)
		/**
		 * Get the raw value of an aliased field
		 * @param alias The alias field name
		 * @param isMultiOptionSet True if the field is a multi-option set
		 * @returns The raw value or null if not found
		 */
		getAliasedValue(alias: string, isMultiOptionSet?: boolean): any;
		/**
		 * Get the formatted value of an aliased field
		 * @param alias The alias field name
		 * @param isMultiOptionSet True if the field is a multi-option set
		 * @returns The formatted value or empty string if not found
		 */
		getAliasedFormattedValue(alias: string, isMultiOptionSet?: boolean): string | string[];
		/** The entity object for Create/Update operations*/
		readonly Entity: Record<string, any>;
		/** The OData entity object containing raw data*/
		readonly ODataEntity: Record<string, any>;
		/** The entity name */
		readonly EntityName: string;
		/** The entity collection name */
		readonly EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependent on the fields that are retrieved */
		readonly "@odata.etag": string;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string | null;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string | null;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number | null;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string | null;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string | null;
		/** User data for the Copilot Hub control */
		msdyn_copilothub_settings: string | null;
		/** Unique identifier for entity instances */
		msdyn_customcontrolextendedsettingsId: string | null;
		/** The name of the custom entity. */
		msdyn_name: string | null;
		/** User configured personal settings for Rich Text Editor */
		msdyn_rte_userpersonalizationsettings: string | null;
		/** User configured display layout option for the Timeline control */
		msdyn_timeline_displaylayoutoption: string | null;
		/** User configured filter settings for TimelineWall */
		msdyn_timelineWall_bookmarks: string | null;
		/** User configured expand state for TimelineWall */
		msdyn_timelineWall_isAutoExpanded: boolean | null;
		/** Will the filter pane open by default on TimelineWall load */
		msdyn_timelineWall_isFilterPaneOpen: boolean | null;
		/** Is TimelineWall set to sort by newer to older records */
		msdyn_timelineWall_isSortOrderNewerToOlder: boolean | null;
		/** Search term to be applied on TimelineWall load */
		msdyn_timelineWall_searchTermApplied: string | null;
		/** User configured filter settings for TimelineWall */
		msdyn_timelineWall_userFilters: string | null;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date | null;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string | null;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string | null;
		/** Unique identifier for the business unit that owns the record */
		readonly OwningBusinessUnit: string | null;
		/** Unique identifier for the team that owns the record. */
		readonly OwningTeam: string | null;
		/** Unique identifier for the user that owns the record. */
		readonly OwningUser: string | null;
		/** Status of the Timeline Wall Extended Setting */
		statecode: OptionSet.msdyn_customcontrolextendedsettings.statecode | null;
		/** Reason for the status of the Timeline Wall Extended Setting */
		statuscode: OptionSet.msdyn_customcontrolextendedsettings.statuscode | null;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number | null;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number | null;
		/** Version Number */
		readonly VersionNumber: number | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
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
			/** User data for the Copilot Hub control */
			readonly msdyn_copilothub_settings: string;
			/** Unique identifier for entity instances */
			readonly msdyn_customcontrolextendedsettingsId: string;
			/** The name of the custom entity. */
			readonly msdyn_name: string;
			/** User configured personal settings for Rich Text Editor */
			readonly msdyn_rte_userpersonalizationsettings: string;
			/** User configured display layout option for the Timeline control */
			readonly msdyn_timeline_displaylayoutoption: string;
			/** User configured filter settings for TimelineWall */
			readonly msdyn_timelineWall_bookmarks: string;
			/** User configured expand state for TimelineWall */
			readonly msdyn_timelineWall_isAutoExpanded: string;
			/** Will the filter pane open by default on TimelineWall load */
			readonly msdyn_timelineWall_isFilterPaneOpen: string;
			/** Is TimelineWall set to sort by newer to older records */
			readonly msdyn_timelineWall_isSortOrderNewerToOlder: string;
			/** Search term to be applied on TimelineWall load */
			readonly msdyn_timelineWall_searchTermApplied: string;
			/** User configured filter settings for TimelineWall */
			readonly msdyn_timelineWall_userFilters: string;
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
			/** Status of the Timeline Wall Extended Setting */
			readonly statecode: string;
			/** Reason for the status of the Timeline Wall Extended Setting */
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
	namespace msdyn_customcontrolextendedsettings {
		enum statecode {
			/** Active = 0*/
			Active = 0,
			/** Inactive = 1*/
			Inactive = 1
		}
		enum statuscode {
			/** Active = 1*/
			Active = 1,
			/** Inactive = 2*/
			Inactive = 2
		}
		enum RollupState {
			/** NotCalculated = 0 - Attribute value is yet to be calculated */
			NotCalculated,
			/** Calculated = 1 - Attribute value has been calculated per the last update time in <AttributeSchemaName>_Date attribute */
			Calculated,
			/** OverflowError = 2 - Attribute value calculation lead to overflow error */
			OverflowError,
			/** OtherError = 3 - Attribute value calculation failed due to an internal error, next run of calculation job will likely fix it */
			OtherError,
			/** RetryLimitExceeded = 4 - Attribute value calculation failed because the maximum number of retry attempts to calculate the value were exceeded likely due to high number of concurrency and locking conflicts */
			RetryLimitExceeded,
			/** HierarchicalRecursionLimitReached = 5 - Attribute value calculation failed because maximum hierarchy depth limit for calculation was reached */
			HierarchicalRecursionLimitReached,
			/** LoopDetected = 6 - Attribute value calculation failed because a recursive loop was detected in the hierarchy of the record */
			LoopDetected
		}
	}
}