//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	export class SiteMapApi {
		/**
		* DynamicsCrm.DevKit SiteMapApi
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
		readonly ComponentState: OptionSet.SiteMap.ComponentState | null;
		/** Shows who created the record. */
		readonly CreatedBy: string | null;
		/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics CRM options. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Shows who created the record on behalfÂ of another user. */
		readonly CreatedOnBehalfBy: string | null;
		/** Enable to allow sitemap groups to be collapsed. */
		EnableCollapsibleGroups: boolean | null;
		/** Information about whether the site map is associated with app module. */
		IsAppAware: boolean | null;
		readonly IsManaged: boolean | null;
		/** Shows who last updated the record. */
		readonly ModifiedBy: string | null;
		/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics CRM options. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Shows who last updated the record on behalf of another user. */
		readonly ModifiedOnBehalfBy: string | null;
		readonly OrganizationId: string | null;
		readonly OverwriteTime_UtcDateOnly: Date | null;
		/** Enable to show the home button in the sitemap. */
		ShowHome: boolean | null;
		/** Enable to show the pinned dropdown in the sitemap. */
		ShowPinned: boolean | null;
		/** Enable to show the recents dropdown in the sitemap. */
		ShowRecents: boolean | null;
		readonly SiteMapId: string | null;
		readonly SiteMapIdUnique: string | null;
		SiteMapName: string | null;
		SiteMapNameUnique: string | null;
		SiteMapXml: string | null;
		readonly SiteMapXmlManaged: string | null;
		readonly SolutionId: string | null;
		readonly SupportingSolutionId: string | null;
		readonly VersionNumber: number | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			readonly ComponentState: string;
			/** Shows who created the record. */
			readonly CreatedBy: string;
			/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics CRM options. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Shows who created the record on behalfÂ of another user. */
			readonly CreatedOnBehalfBy: string;
			/** Enable to allow sitemap groups to be collapsed. */
			readonly EnableCollapsibleGroups: string;
			/** Information about whether the site map is associated with app module. */
			readonly IsAppAware: string;
			readonly IsManaged: string;
			/** Shows who last updated the record. */
			readonly ModifiedBy: string;
			/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics CRM options. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Shows who last updated the record on behalf of another user. */
			readonly ModifiedOnBehalfBy: string;
			readonly OrganizationId: string;
			readonly OverwriteTime_UtcDateOnly: string;
			/** Enable to show the home button in the sitemap. */
			readonly ShowHome: string;
			/** Enable to show the pinned dropdown in the sitemap. */
			readonly ShowPinned: string;
			/** Enable to show the recents dropdown in the sitemap. */
			readonly ShowRecents: string;
			readonly SiteMapId: string;
			readonly SiteMapIdUnique: string;
			readonly SiteMapName: string;
			readonly SiteMapNameUnique: string;
			readonly SiteMapXml: string;
			readonly SiteMapXmlManaged: string;
			readonly SolutionId: string;
			readonly SupportingSolutionId: string;
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace SiteMap {
		enum ComponentState {
			/** Deleted = 2*/
			Deleted = 2,
			/** Deleted_Unpublished = 3*/
			Deleted_Unpublished = 3,
			/** Published = 0*/
			Published = 0,
			/** Unpublished = 1*/
			Unpublished = 1
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