//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormBusinessUnitNewsArticle_Information {
		interface tab_announcement_Sections {
			/** Additional Settings */
			additional_settings: DevKit.Controls.Section;
			/** Announcement Information */
			announcement_information: DevKit.Controls.Section;
		}
		/** Announcement */
		interface tab_announcement extends DevKit.Controls.ITab {
			Section: tab_announcement_Sections;
		}
		interface Tabs {
			/** Announcement */
			announcement: tab_announcement;
		}
		interface Body {
			Tab: Tabs;
			/** Date and time of the last day the announcement is active. */
			ActiveUntil: DevKit.Controls.DateOnly;
			/** Title of the announcement. */
			ArticleTitle: DevKit.Controls.String;
			/** URL for the Website on which the announcement is located. */
			ArticleUrl: DevKit.Controls.String;
			/** Text for the announcement. */
			NewsArticle: DevKit.Controls.String;
		}
	}
	export class FormBusinessUnitNewsArticle_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** The Body section of form BusinessUnitNewsArticle_Information */
		Body: DevKit.FormBusinessUnitNewsArticle_Information.Body;
	}
	export class BusinessUnitNewsArticleApi {
		/**
		* DynamicsCrm.DevKit BusinessUnitNewsArticleApi
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
		/** Date and time for the announcement to become active. */
		ActiveOn_UtcDateOnly: Date | null;
		/** Date and time of the last day the announcement is active. */
		ActiveUntil_UtcDateOnly: Date | null;
		/** Title of the announcement. */
		ArticleTitle: string | null;
		/** Type of announcement. */
		ArticleTypeCode: OptionSet.BusinessUnitNewsArticle.ArticleTypeCode | null;
		/** URL for the Website on which the announcement is located. */
		ArticleUrl: string | null;
		/** Unique identifier of the announcement. */
		BusinessUnitNewsArticleId: string | null;
		/** Unique identifier of the user who created the announcement. */
		readonly CreatedBy: string | null;
		/** Date and time when the announcement was created. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who created the businessunitnewsarticle. */
		readonly CreatedOnBehalfBy: string | null;
		/** Unique identifier of the data import or data migration that created this record. */
		ImportSequenceNumber: number | null;
		/** Unique identifier of the user who last modified the announcement. */
		readonly ModifiedBy: string | null;
		/** Date and time when the announcement was last modified. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who last modified the businessunitnewsarticle. */
		readonly ModifiedOnBehalfBy: string | null;
		/** Text for the announcement. */
		NewsArticle: string | null;
		/** Unique identifier of the organization associated with the announcement. */
		readonly OrganizationId: string | null;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date | null;
		/** Information about whether to show the announcement on the Website home page. */
		ShowOnHomepage: boolean | null;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number | null;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number | null;
		readonly VersionNumber: number | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			/** Date and time for the announcement to become active. */
			readonly ActiveOn_UtcDateOnly: string;
			/** Date and time of the last day the announcement is active. */
			readonly ActiveUntil_UtcDateOnly: string;
			/** Title of the announcement. */
			readonly ArticleTitle: string;
			/** Type of announcement. */
			readonly ArticleTypeCode: string;
			/** URL for the Website on which the announcement is located. */
			readonly ArticleUrl: string;
			/** Unique identifier of the announcement. */
			readonly BusinessUnitNewsArticleId: string;
			/** Unique identifier of the user who created the announcement. */
			readonly CreatedBy: string;
			/** Date and time when the announcement was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the businessunitnewsarticle. */
			readonly CreatedOnBehalfBy: string;
			/** Unique identifier of the data import or data migration that created this record. */
			readonly ImportSequenceNumber: string;
			/** Unique identifier of the user who last modified the announcement. */
			readonly ModifiedBy: string;
			/** Date and time when the announcement was last modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who last modified the businessunitnewsarticle. */
			readonly ModifiedOnBehalfBy: string;
			/** Text for the announcement. */
			readonly NewsArticle: string;
			/** Unique identifier of the organization associated with the announcement. */
			readonly OrganizationId: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Information about whether to show the announcement on the Website home page. */
			readonly ShowOnHomepage: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace BusinessUnitNewsArticle {
		enum ArticleTypeCode {
			/** All_Users = 1*/
			All_Users = 1,
			/** Sales_Users = 2*/
			Sales_Users = 2,
			/** Service_Users = 3*/
			Service_Users = 3
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