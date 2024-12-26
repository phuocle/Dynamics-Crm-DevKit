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
		interface Navigation {

		}
	}
	class Formmsdyn_customcontrolextendedsettings_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_customcontrolextendedsettings_Information */
		Body: DevKit.Formmsdyn_customcontrolextendedsettings_Information.Body;
		/** The Navigation of form msdyn_customcontrolextendedsettings_Information */
		Navigation: DevKit.Formmsdyn_customcontrolextendedsettings_Information.Navigation;
		/** The SidePanes of form msdyn_customcontrolextendedsettings_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_customcontrolextendedsettingsApi {
		/**
		* DynamicsCrm.DevKit msdyn_customcontrolextendedsettingsApi
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
		/** User data for the Copilot Hub control */
		msdyn_copilothub_settings: string;
		/** Unique identifier for entity instances */
		msdyn_customcontrolextendedsettingsId: string;
		/** The name of the custom entity. */
		msdyn_name: string;
		/** User configured personal settings for Rich Text Editor */
		msdyn_rte_userpersonalizationsettings: string;
		/** User configured display layout option for the Timeline control */
		msdyn_timeline_displaylayoutoption: string;
		/** User configured filter settings for TimelineWall */
		msdyn_timelineWall_bookmarks: string;
		/** User configured expand state for TimelineWall */
		msdyn_timelineWall_isAutoExpanded: boolean;
		/** Will the filter pane open by default on TimelineWall load */
		msdyn_timelineWall_isFilterPaneOpen: boolean;
		/** Is TimelineWall set to sort by newer to older records */
		msdyn_timelineWall_isSortOrderNewerToOlder: boolean;
		/** Search term to be applied on TimelineWall load */
		msdyn_timelineWall_searchTermApplied: string;
		/** User configured filter settings for TimelineWall */
		msdyn_timelineWall_userFilters: string;
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
		/** Status of the Timeline Wall Extended Setting */
		statecode: OptionSet.msdyn_customcontrolextendedsettings.statecode;
		/** Reason for the status of the Timeline Wall Extended Setting */
		statuscode: OptionSet.msdyn_customcontrolextendedsettings.statuscode;
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