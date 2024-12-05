//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_wallsavedqueryusersettings_Information {
		interface Tabs {
		}
		interface Body {
			/** Information that indicates whether the corresponding view should be displayed on the personal wall for this user. */
			msdyn_isvisible: DevKit.Controls.Boolean;
			/** Name of the corresponding view. */
			msdyn_savedqueryname: DevKit.Controls.String;
			/** Unique identifier for User associated with Wall View User Setting. */
			msdyn_userid: DevKit.Controls.Lookup;
			/** Unique identifier for Wall View associated with Wall View User Setting. */
			msdyn_wallsavedqueryid: DevKit.Controls.Lookup;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Navigation {

		}
	}
	class Formmsdyn_wallsavedqueryusersettings_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_wallsavedqueryusersettings_Information */
		Body: DevKit.Formmsdyn_wallsavedqueryusersettings_Information.Body;
		/** The Navigation of form msdyn_wallsavedqueryusersettings_Information */
		Navigation: DevKit.Formmsdyn_wallsavedqueryusersettings_Information.Navigation;
		/** The SidePanes of form msdyn_wallsavedqueryusersettings_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_wallsavedqueryusersettingsApi {
		/**
		* DynamicsCrm.DevKit msdyn_wallsavedqueryusersettingsApi
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
		/** XML blob that stores personalization data for the user. */
		msdyn_data: string;
		/** Indicates that view is selected by default if value is greater than 0. Also contains information which specific filter is applied. */
		msdyn_default: number;
		/** Display name of the entity to which the corresponding views belong. */
		msdyn_entitydisplayname: string;
		/** Name of the entity to which the corresponding views belong. */
		msdyn_entityname: string;
		/** Indicates that wall should be included in response to avoid roundtrips to server */
		msdyn_includewallinresponse: boolean;
		/** Indicates that corresponding view is following view */
		msdyn_isfollowing: boolean;
		/** Indicates that the record is virtual */
		msdyn_IsVirtual: boolean;
		/** Information that indicates whether the corresponding view should be displayed on the personal wall for this user. */
		msdyn_isvisible: boolean;
		/** For internal use only. */
		msdyn_isvisiblebit: number;
		/** Virtual column which contains entity type code for the entities returned by corresponding savedquery */
		msdyn_otc: number;
		/** Name of the corresponding view. */
		msdyn_savedqueryname: string;
		/** Sort order to be used when displaying the filter on the user’s personal wall. */
		msdyn_sortorder: number;
		/** Reserved to support different view types. Currently not used. */
		msdyn_type: number;
		/** Unique identifier for User associated with Wall View User Setting. */
		msdyn_userid: string;
		/** Unique identifier for Wall View associated with Wall View User Setting. */
		msdyn_wallsavedqueryid: string;
		/** Unique identifier for entity instances */
		msdyn_wallsavedqueryusersettingsId: string;
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
		/** Status of the Wall View User Setting */
		statecode: OptionSet.msdyn_wallsavedqueryusersettings.statecode;
		/** Reason for the status of the Wall View User Setting */
		statuscode: OptionSet.msdyn_wallsavedqueryusersettings.statuscode;
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
			/** XML blob that stores personalization data for the user. */
			readonly msdyn_data: string;
			/** Indicates that view is selected by default if value is greater than 0. Also contains information which specific filter is applied. */
			readonly msdyn_default: string;
			/** Display name of the entity to which the corresponding views belong. */
			readonly msdyn_entitydisplayname: string;
			/** Name of the entity to which the corresponding views belong. */
			readonly msdyn_entityname: string;
			/** Indicates that wall should be included in response to avoid roundtrips to server */
			readonly msdyn_includewallinresponse: string;
			/** Indicates that corresponding view is following view */
			readonly msdyn_isfollowing: string;
			/** Indicates that the record is virtual */
			readonly msdyn_IsVirtual: string;
			/** Information that indicates whether the corresponding view should be displayed on the personal wall for this user. */
			readonly msdyn_isvisible: string;
			/** For internal use only. */
			readonly msdyn_isvisiblebit: string;
			/** Virtual column which contains entity type code for the entities returned by corresponding savedquery */
			readonly msdyn_otc: string;
			/** Name of the corresponding view. */
			readonly msdyn_savedqueryname: string;
			/** Sort order to be used when displaying the filter on the user’s personal wall. */
			readonly msdyn_sortorder: string;
			/** Reserved to support different view types. Currently not used. */
			readonly msdyn_type: string;
			/** Unique identifier for User associated with Wall View User Setting. */
			readonly msdyn_userid: string;
			/** Unique identifier for Wall View associated with Wall View User Setting. */
			readonly msdyn_wallsavedqueryid: string;
			/** Unique identifier for entity instances */
			readonly msdyn_wallsavedqueryusersettingsId: string;
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
			/** Status of the Wall View User Setting */
			readonly statecode: string;
			/** Reason for the status of the Wall View User Setting */
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
	namespace msdyn_wallsavedqueryusersettings {
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