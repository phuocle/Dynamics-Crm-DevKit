//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class msdyn_integratedsearchproviderApi {
		/**
		* DynamicsCrm.DevKit msdyn_integratedsearchproviderApi
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
		/** Date and time of the external search provider creation */
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
		/** Languages allowed for ingestion */
		msdyn_allowedlanguages: string;
		/** Map external search provider fields and knowledge article table columns in Dataverse */
		msdyn_articlepropertiesmapping: string;
		/** Authentication type for the search provider */
		msdyn_authenticationtype: OptionSet.msdyn_integratedsearchprovider.msdyn_authenticationtype;
		/** Client ID for the OAuth */
		msdyn_clientid: string;
		/** Secret of the external search provider */
		msdyn_clientsecret: string;
		/** Type of the external search provider */
		msdyn_datasourcetype: OptionSet.msdyn_integratedsearchprovider.msdyn_datasourcetype;
		/** Description of the external search provider */
		msdyn_description: string;
		/** Information about the meta tags extracted from sample dataprovider html */
		msdyn_htmlmetatags: string;
		/** The reference to the sample html file uploaded for the integrated search provider */
		readonly msdyn_htmlsample_name: string;
		/** List of URLs that are allowed */
		msdyn_includedsitemapurls: string;
		/** Unique identifier for entity instances */
		msdyn_integratedsearchproviderId: string;
		/** Value is true when field mapping option is selected */
		msdyn_isfieldmappingoptionselected: boolean;
		/** Date and time at which the recent ingestion was started */
		msdyn_lastfetchtime_UtcDateAndTime: Date;
		/** Time interval for ingesting any articles that might have been missed during the sync and ingestion overlap */
		msdyn_lookbackperiod: OptionSet.msdyn_integratedsearchprovider.msdyn_lookbackperiod;
		/** Name of the external search provider */
		msdyn_name: string;
		/** Time interval for ingesting newly created and updated articles from the external search provider */
		msdyn_refreshschedule: OptionSet.msdyn_integratedsearchprovider.msdyn_refreshschedule;
		/** Resource ID for OAuth */
		msdyn_resourceid: string;
		/** Root URL of the website */
		msdyn_rooturl: string;
		/** Tenant ID for OAuth */
		msdyn_tenantid: string;
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
		/** State of the external search provider */
		statecode: OptionSet.msdyn_integratedsearchprovider.statecode;
		/** Reason for the status of the Integrated search provider */
		statuscode: OptionSet.msdyn_integratedsearchprovider.statuscode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Unique identifier of the user who created the record. */
			readonly CreatedBy: string;
			/** Date and time of the external search provider creation */
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
			/** Languages allowed for ingestion */
			readonly msdyn_allowedlanguages: string;
			/** Map external search provider fields and knowledge article table columns in Dataverse */
			readonly msdyn_articlepropertiesmapping: string;
			/** Authentication type for the search provider */
			readonly msdyn_authenticationtype: string;
			/** Client ID for the OAuth */
			readonly msdyn_clientid: string;
			/** Secret of the external search provider */
			readonly msdyn_clientsecret: string;
			/** Type of the external search provider */
			readonly msdyn_datasourcetype: string;
			/** Description of the external search provider */
			readonly msdyn_description: string;
			/** Information about the meta tags extracted from sample dataprovider html */
			readonly msdyn_htmlmetatags: string;
			/** The reference to the sample html file uploaded for the integrated search provider */
			readonly msdyn_htmlsample_name: string;
			/** List of URLs that are allowed */
			readonly msdyn_includedsitemapurls: string;
			/** Unique identifier for entity instances */
			readonly msdyn_integratedsearchproviderId: string;
			/** Value is true when field mapping option is selected */
			readonly msdyn_isfieldmappingoptionselected: string;
			/** Date and time at which the recent ingestion was started */
			readonly msdyn_lastfetchtime_UtcDateAndTime: string;
			/** Time interval for ingesting any articles that might have been missed during the sync and ingestion overlap */
			readonly msdyn_lookbackperiod: string;
			/** Name of the external search provider */
			readonly msdyn_name: string;
			/** Time interval for ingesting newly created and updated articles from the external search provider */
			readonly msdyn_refreshschedule: string;
			/** Resource ID for OAuth */
			readonly msdyn_resourceid: string;
			/** Root URL of the website */
			readonly msdyn_rooturl: string;
			/** Tenant ID for OAuth */
			readonly msdyn_tenantid: string;
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
			/** State of the external search provider */
			readonly statecode: string;
			/** Reason for the status of the Integrated search provider */
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
	namespace msdyn_integratedsearchprovider {
		enum msdyn_authenticationtype {
			/** 0 */
			None,
			/** 1 */
			OAuth
		}
		enum msdyn_datasourcetype {
			/** 0 */
			Website
		}
		enum msdyn_lookbackperiod {
			/** 6 */
			_1_hour,
			/** 1 */
			_2_hours,
			/** 5 */
			_30_mins,
			/** 2 */
			_4_hours,
			/** 3 */
			_6_hours,
			/** 4 */
			_8_hours,
			/** 0 */
			No_Lookback
		}
		enum msdyn_refreshschedule {
			/** 8 */
			_1_day,
			/** 4 */
			_1_hour,
			/** 1 */
			_15_mins,
			/** 9 */
			_2_days,
			/** 5 */
			_2_hours,
			/** 2 */
			_30_mins,
			/** 10 */
			_4_days,
			/** 6 */
			_4_hours,
			/** 3 */
			_45_mins,
			/** 11 */
			_7_days,
			/** 7 */
			_8_hours,
			/** 0 */
			No_refresh
		}
		enum statecode {
			/** 0 */
			Active,
			/** 1 */
			Inactive
		}
		enum statuscode {
			/** 3 */
			Draft,
			/** 1 */
			Ingestion_Ready,
			/** 2 */
			Validated
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.33.33.33'}