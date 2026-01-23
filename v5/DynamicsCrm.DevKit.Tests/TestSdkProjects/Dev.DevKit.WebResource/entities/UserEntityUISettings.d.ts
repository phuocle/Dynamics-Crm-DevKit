//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	export class UserEntityUISettingsApi {
		/**
		* DynamicsCrm.DevKit UserEntityUISettingsApi
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
		/** Describes which entities are most recently inserted into email for this entity */
		InsertIntoEmailMRUXml: string | null;
		/** Describes which forms are most recently viewed for this entity. */
		LastViewedFormXml: string | null;
		/** List of most recently used lookup references for this entity */
		LookupMRUXml: string | null;
		/** Describes which tabs are most recently used for this entity */
		MRUXml: string | null;
		/** Object Type Code */
		ObjectTypeCode: number | null;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string | null;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string | null;
		/** Unique identifier of the business unit that owns this. */
		readonly OwningBusinessUnit: string | null;
		/** Unique identifier of the team who owns this saved view. */
		readonly OwningTeam: string | null;
		/** Unique identifier of the user who owns this saved view. */
		readonly OwningUser: string | null;
		/** Describes the reading pane formatting of this entity */
		ReadingPaneXml: string | null;
		/** Describes which objects are most recently viewed for this entity */
		RecentlyViewedXml: string | null;
		/** Determines whether a record type is exposed in the Outlook Address Book */
		ShowInAddressBook: boolean | null;
		/** Describes the tab ordering for this entity */
		TabOrderXml: string | null;
		/** Unique identifier user entity */
		UserEntityUISettingsId: string | null;
		readonly VersionNumber: number | null;
		/** Data representing the view personalization settings */
		ViewPersonalizationSettings: string | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
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