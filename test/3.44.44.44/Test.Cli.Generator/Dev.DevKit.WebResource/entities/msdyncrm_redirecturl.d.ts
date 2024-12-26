//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyncrm_redirecturl_Information {
		interface tab_GeneralInfoTab_Sections {
			_E4BFC3AF_D244_482C_8AE4_F85D8B4E1890_SECTION_4: DevKit.Controls.Section;
			_F42FA8F6_C22C_4667_9D93_D5A280626010: DevKit.Controls.Section;
		}
		interface tab_insights_Sections {
			insights_section: DevKit.Controls.Section;
		}
		interface tab_GeneralInfoTab extends DevKit.Controls.ITab {
			Section: tab_GeneralInfoTab_Sections;
		}
		interface tab_insights extends DevKit.Controls.ITab {
			Section: tab_insights_Sections;
		}
		interface Tabs {
			GeneralInfoTab: tab_GeneralInfoTab;
			insights: tab_insights;
		}
		interface Body {
			Tab: Tabs;
			/** Indicates the person who created this. */
			CreatedBy: DevKit.Controls.Lookup;
			/** Date and time when the record was created */
			CreatedOn: DevKit.Controls.DateTime;
			/** Date and time when the record was modified */
			ModifiedOn: DevKit.Controls.DateTime;
			/** The name of the custom entity */
			msdyncrm_name: DevKit.Controls.String;
			/** The original URL */
			msdyncrm_OriginalURL: DevKit.Controls.String;
			/** The redirecting URL */
			msdyncrm_RedirectingURL: DevKit.Controls.String;
			/** Owner ID */
			OwnerId: DevKit.Controls.Lookup;
			RedirectInsightsCtrl: DevKit.Controls.ActionCards;
			/** Status of the Redirect URL */
			statecode: DevKit.Controls.OptionSet;
		}
		interface Navigation {
			msdyncrm_msdyncrm_redirecturl_msdyncrm_geopin: DevKit.Controls.NavigationItem
		}
	}
	class Formmsdyncrm_redirecturl_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyncrm_redirecturl_Information */
		Body: DevKit.Formmsdyncrm_redirecturl_Information.Body;
		/** The Navigation of form msdyncrm_redirecturl_Information */
		Navigation: DevKit.Formmsdyncrm_redirecturl_Information.Navigation;
		/** The SidePanes of form msdyncrm_redirecturl_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyncrm_redirecturlApi {
		/**
		* DynamicsCrm.DevKit msdyncrm_redirecturlApi
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
		/** Indicates the person who created this. */
		readonly CreatedBy: string;
		/** Date and time when the record was created */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Indicates the person who created this for another person. */
		readonly CreatedOnBehalfBy: string;
		/** Sequence number of the import that created this record */
		ImportSequenceNumber: number;
		/** Indicates the person who modified this. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Indicates the person who modified this for another person. */
		readonly ModifiedOnBehalfBy: string;
		msdyncrm_insightsresults: string;
		msdyncrm_insightstimeline: string;
		/** The name of the custom entity */
		msdyncrm_name: string;
		/** The original URL */
		msdyncrm_OriginalURL: string;
		/** The redirecting URL */
		msdyncrm_RedirectingURL: string;
		/** Unique ID for entity instances */
		msdyncrm_redirecturlId: string;
		/** Date and time that the record was migrated */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Indicates the business unit that owns this. */
		readonly OwningBusinessUnit: string;
		/** Indicates the team that owns this. */
		readonly OwningTeam: string;
		/** Indicates the team that owns this. */
		readonly OwningUser: string;
		/** Status of the Redirect URL */
		statecode: OptionSet.msdyncrm_redirecturl.statecode;
		/** Redirect URL status reason */
		statuscode: OptionSet.msdyncrm_redirecturl.statuscode;
		/** For internal use only */
		TimeZoneRuleVersionNumber: number;
		/** Time-zone code that was in use when the record was created */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Indicates the person who created this. */
			readonly CreatedBy: string;
			/** Date and time when the record was created */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Indicates the person who created this for another person. */
			readonly CreatedOnBehalfBy: string;
			/** Sequence number of the import that created this record */
			readonly ImportSequenceNumber: string;
			/** Indicates the person who modified this. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Indicates the person who modified this for another person. */
			readonly ModifiedOnBehalfBy: string;
			readonly msdyncrm_insightsresults: string;
			readonly msdyncrm_insightstimeline: string;
			/** The name of the custom entity */
			readonly msdyncrm_name: string;
			/** The original URL */
			readonly msdyncrm_OriginalURL: string;
			/** The redirecting URL */
			readonly msdyncrm_RedirectingURL: string;
			/** Unique ID for entity instances */
			readonly msdyncrm_redirecturlId: string;
			/** Date and time that the record was migrated */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Indicates the business unit that owns this. */
			readonly OwningBusinessUnit: string;
			/** Indicates the team that owns this. */
			readonly OwningTeam: string;
			/** Indicates the team that owns this. */
			readonly OwningUser: string;
			/** Status of the Redirect URL */
			readonly statecode: string;
			/** Redirect URL status reason */
			readonly statuscode: string;
			/** For internal use only */
			readonly TimeZoneRuleVersionNumber: string;
			/** Time-zone code that was in use when the record was created */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace msdyncrm_redirecturl {
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