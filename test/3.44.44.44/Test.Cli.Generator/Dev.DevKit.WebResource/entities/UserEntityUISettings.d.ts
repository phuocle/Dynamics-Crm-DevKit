//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class UserEntityUISettingsApi {
		/**
		* DynamicsCrm.DevKit UserEntityUISettingsApi
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
		/** Describes which entities are most recently inserted into email for this entity */
		InsertIntoEmailMRUXml: string;
		/** Describes which forms are most recently viewed for this entity. */
		LastViewedFormXml: string;
		/** List of most recently used lookup references for this entity */
		LookupMRUXml: string;
		/** Describes which tabs are most recently used for this entity */
		MRUXml: string;
		/** Object Type Code */
		ObjectTypeCode: number;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Unique identifier of the business unit that owns this. */
		readonly OwningBusinessUnit: string;
		/** Unique identifier of the team who owns this saved view. */
		readonly OwningTeam: string;
		/** Unique identifier of the user who owns this saved view. */
		readonly OwningUser: string;
		/** Describes the reading pane formatting of this entity */
		ReadingPaneXml: string;
		/** Describes which objects are most recently viewed for this entity */
		RecentlyViewedXml: string;
		/** Determines whether a record type is exposed in the Outlook Address Book */
		ShowInAddressBook: boolean;
		/** Describes the tab ordering for this entity */
		TabOrderXml: string;
		/** Unique identifier user entity */
		UserEntityUISettingsId: string;
		readonly VersionNumber: number;
		/** Data representing the view personalization settings */
		ViewPersonalizationSettings: string;
		readonly FormattedValue: {
			/** Describes which entities are most recently inserted into email for this entity */
			readonly InsertIntoEmailMRUXml: string;
			/** Describes which forms are most recently viewed for this entity. */
			readonly LastViewedFormXml: string;
			/** List of most recently used lookup references for this entity */
			readonly LookupMRUXml: string;
			/** Describes which tabs are most recently used for this entity */
			readonly MRUXml: string;
			/** Object Type Code */
			readonly ObjectTypeCode: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Unique identifier of the business unit that owns this. */
			readonly OwningBusinessUnit: string;
			/** Unique identifier of the team who owns this saved view. */
			readonly OwningTeam: string;
			/** Unique identifier of the user who owns this saved view. */
			readonly OwningUser: string;
			/** Describes the reading pane formatting of this entity */
			readonly ReadingPaneXml: string;
			/** Describes which objects are most recently viewed for this entity */
			readonly RecentlyViewedXml: string;
			/** Determines whether a record type is exposed in the Outlook Address Book */
			readonly ShowInAddressBook: string;
			/** Describes the tab ordering for this entity */
			readonly TabOrderXml: string;
			/** Unique identifier user entity */
			readonly UserEntityUISettingsId: string;
			readonly VersionNumber: string;
			/** Data representing the view personalization settings */
			readonly ViewPersonalizationSettings: string;
		}
	}
}
declare namespace OptionSet {
	namespace UserEntityUISettings {
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