//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class SiteMapApi {
		/**
		* DynamicsCrm.DevKit SiteMapApi
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
		readonly ComponentState: OptionSet.SiteMap.ComponentState;
		/** Shows who created the record. */
		readonly CreatedBy: string;
		/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics CRM options. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Shows who created the record on behalfÂ of another user. */
		readonly CreatedOnBehalfBy: string;
		/** Enable to allow sitemap groups to be collapsed. */
		EnableCollapsibleGroups: boolean;
		/** Information about whether the site map is associated with app module. */
		IsAppAware: boolean;
		readonly IsManaged: boolean;
		/** Shows who last updated the record. */
		readonly ModifiedBy: string;
		/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics CRM options. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Shows who last updated the record on behalf of another user. */
		readonly ModifiedOnBehalfBy: string;
		readonly OrganizationId: string;
		readonly OverwriteTime_UtcDateOnly: Date;
		/** Enable to show the home button in the sitemap. */
		ShowHome: boolean;
		/** Enable to show the pinned dropdown in the sitemap. */
		ShowPinned: boolean;
		/** Enable to show the recents dropdown in the sitemap. */
		ShowRecents: boolean;
		readonly SiteMapId: string;
		readonly SiteMapIdUnique: string;
		SiteMapName: string;
		SiteMapNameUnique: string;
		SiteMapXml: string;
		readonly SiteMapXmlManaged: string;
		readonly SolutionId: string;
		readonly SupportingSolutionId: string;
		readonly VersionNumber: number;
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
			/** 2 */
			Deleted,
			/** 3 */
			Deleted_Unpublished,
			/** 0 */
			Published,
			/** 1 */
			Unpublished
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