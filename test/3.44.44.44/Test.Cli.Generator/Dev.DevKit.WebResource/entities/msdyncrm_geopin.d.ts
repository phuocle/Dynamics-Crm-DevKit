//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyncrm_geopin_Information {
		interface Tabs {
		}
		interface Body {
			/** The name of the custom entity */
			msdyncrm_name: DevKit.Controls.String;
			/** Owner ID */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Navigation {

		}
	}
	class Formmsdyncrm_geopin_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyncrm_geopin_Information */
		Body: DevKit.Formmsdyncrm_geopin_Information.Body;
		/** The Navigation of form msdyncrm_geopin_Information */
		Navigation: DevKit.Formmsdyncrm_geopin_Information.Navigation;
		/** The SidePanes of form msdyncrm_geopin_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyncrm_geopinApi {
		/**
		* DynamicsCrm.DevKit msdyncrm_geopinApi
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
		msdyncrm_CenterLatitude: number;
		msdyncrm_CenterLongitude: number;
		/** City */
		msdyncrm_City: string;
		/** Unique ID for the contact associated with the Geo Pin */
		msdyncrm_ContactGeoPinsId: string;
		/** Country/Region */
		msdyncrm_Country: string;
		msdyncrm_customerjourney: string;
		/** Unique ID for entity instances */
		msdyncrm_geopinId: string;
		msdyncrm_kpi_email_clicked_count: number;
		msdyncrm_kpi_email_opened_count: number;
		msdyncrm_kpi_form_submitted_count: number;
		msdyncrm_kpi_redirect_link_clicked_count: number;
		msdyncrm_kpi_website_clicked_count: number;
		msdyncrm_kpi_website_visited_count: number;
		/** Unique ID for the lead associated with the geo pin */
		msdyncrm_LeadGeoPinsId: string;
		/** Unique ID for the marketing email associated with the geo pin */
		msdyncrm_MarketingEmailGeoPinsId: string;
		/** Unique ID for the marketing form associated with the geo pin */
		msdyncrm_marketingformGeoPinsId: string;
		/** Unique ID for the marketing page associated with the geo pin */
		msdyncrm_MarketingPageGeoPinsId: string;
		/** The name of the custom entity */
		msdyncrm_name: string;
		msdyncrm_NorthwestLatitude: number;
		msdyncrm_NorthwestLongitude: number;
		/** Postal code */
		msdyncrm_PostalCode: string;
		/** Unique ID for the redirect URL associated with the geo pin */
		msdyncrm_RedirectURLGeoPinsId: string;
		msdyncrm_requestbuilderservice_mktgeopins: string;
		msdyncrm_resultparserservice_mktgeopins: string;
		msdyncrm_serverId_marketing: string;
		msdyncrm_SoutheastLatitude: number;
		msdyncrm_SoutheastLongitude: number;
		/** State */
		msdyncrm_State: string;
		/** Unique ID for the website associated with the geo pin */
		msdyncrm_WebsiteGeoPinsId: string;
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
		/** Status of the geo pin */
		statecode: OptionSet.msdyncrm_geopin.statecode;
		/** Geo pin status reason */
		statuscode: OptionSet.msdyncrm_geopin.statuscode;
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
			readonly msdyncrm_CenterLatitude: string;
			readonly msdyncrm_CenterLongitude: string;
			/** City */
			readonly msdyncrm_City: string;
			/** Unique ID for the contact associated with the Geo Pin */
			readonly msdyncrm_ContactGeoPinsId: string;
			/** Country/Region */
			readonly msdyncrm_Country: string;
			readonly msdyncrm_customerjourney: string;
			/** Unique ID for entity instances */
			readonly msdyncrm_geopinId: string;
			readonly msdyncrm_kpi_email_clicked_count: string;
			readonly msdyncrm_kpi_email_opened_count: string;
			readonly msdyncrm_kpi_form_submitted_count: string;
			readonly msdyncrm_kpi_redirect_link_clicked_count: string;
			readonly msdyncrm_kpi_website_clicked_count: string;
			readonly msdyncrm_kpi_website_visited_count: string;
			/** Unique ID for the lead associated with the geo pin */
			readonly msdyncrm_LeadGeoPinsId: string;
			/** Unique ID for the marketing email associated with the geo pin */
			readonly msdyncrm_MarketingEmailGeoPinsId: string;
			/** Unique ID for the marketing form associated with the geo pin */
			readonly msdyncrm_marketingformGeoPinsId: string;
			/** Unique ID for the marketing page associated with the geo pin */
			readonly msdyncrm_MarketingPageGeoPinsId: string;
			/** The name of the custom entity */
			readonly msdyncrm_name: string;
			readonly msdyncrm_NorthwestLatitude: string;
			readonly msdyncrm_NorthwestLongitude: string;
			/** Postal code */
			readonly msdyncrm_PostalCode: string;
			/** Unique ID for the redirect URL associated with the geo pin */
			readonly msdyncrm_RedirectURLGeoPinsId: string;
			readonly msdyncrm_requestbuilderservice_mktgeopins: string;
			readonly msdyncrm_resultparserservice_mktgeopins: string;
			readonly msdyncrm_serverId_marketing: string;
			readonly msdyncrm_SoutheastLatitude: string;
			readonly msdyncrm_SoutheastLongitude: string;
			/** State */
			readonly msdyncrm_State: string;
			/** Unique ID for the website associated with the geo pin */
			readonly msdyncrm_WebsiteGeoPinsId: string;
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
			/** Status of the geo pin */
			readonly statecode: string;
			/** Geo pin status reason */
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
	namespace msdyncrm_geopin {
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