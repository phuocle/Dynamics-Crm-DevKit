//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	export class msdyn_integratedsearchproviderApi {
		/**
		* DynamicsCrm.DevKit msdyn_integratedsearchproviderApi
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
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string | null;
		/** Date and time of the external search provider creation */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string | null;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number | null;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string | null;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string | null;
		/** Languages allowed for ingestion */
		msdyn_allowedlanguages: string | null;
		/** Map external search provider fields and knowledge article table columns in Dataverse */
		msdyn_articlepropertiesmapping: string | null;
		/** Authentication type for the search provider */
		msdyn_authenticationtype: OptionSet.msdyn_integratedsearchprovider.msdyn_authenticationtype | null;
		/** Client ID for the OAuth */
		msdyn_clientid: string | null;
		/** Secret of the external search provider */
		msdyn_clientsecret: string | null;
		/** Type of the external search provider */
		msdyn_datasourcetype: OptionSet.msdyn_integratedsearchprovider.msdyn_datasourcetype | null;
		/** Description of the external search provider */
		msdyn_description: string | null;
		/** Information about the meta tags extracted from sample dataprovider html */
		msdyn_htmlmetatags: string | null;
		/** The reference to the sample html file uploaded for the integrated search provider */
		readonly msdyn_htmlsample_name: string | null;
		/** List of URLs that are allowed */
		msdyn_includedsitemapurls: string | null;
		/** Unique identifier for entity instances */
		msdyn_integratedsearchproviderId: string | null;
		/** Value is true when field mapping option is selected */
		msdyn_isfieldmappingoptionselected: boolean | null;
		/** Date and time at which the recent ingestion was started */
		msdyn_lastfetchtime_UtcDateAndTime: Date | null;
		/** Time interval for ingesting any articles that might have been missed during the sync and ingestion overlap */
		msdyn_lookbackperiod: OptionSet.msdyn_integratedsearchprovider.msdyn_lookbackperiod | null;
		/** Name of the external search provider */
		msdyn_name: string | null;
		/** Time interval for ingesting newly created and updated articles from the external search provider */
		msdyn_refreshschedule: OptionSet.msdyn_integratedsearchprovider.msdyn_refreshschedule | null;
		/** Resource ID for OAuth */
		msdyn_resourceid: string | null;
		/** Root URL of the website */
		msdyn_rooturl: string | null;
		/** Tenant ID for OAuth */
		msdyn_tenantid: string | null;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date | null;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string | null;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string | null;
		/** Unique identifier for the business unit that owns the record */
		readonly OwningBusinessUnit: string | null;
		/** Unique identifier for the team that owns the record. */
		readonly OwningTeam: string | null;
		/** Unique identifier for the user that owns the record. */
		readonly OwningUser: string | null;
		/** State of the external search provider */
		statecode: OptionSet.msdyn_integratedsearchprovider.statecode | null;
		/** Reason for the status of the Integrated search provider */
		statuscode: OptionSet.msdyn_integratedsearchprovider.statuscode | null;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number | null;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number | null;
		/** Version Number */
		readonly VersionNumber: number | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
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
			/** None = 0*/
			None = 0,
			/** OAuth = 1*/
			OAuth = 1
		}
		enum msdyn_datasourcetype {
			/** Website = 0*/
			Website = 0
		}
		enum msdyn_lookbackperiod {
			/** _1_hour = 6*/
			_1_hour = 6,
			/** _2_hours = 1*/
			_2_hours = 1,
			/** _30_mins = 5*/
			_30_mins = 5,
			/** _4_hours = 2*/
			_4_hours = 2,
			/** _6_hours = 3*/
			_6_hours = 3,
			/** _8_hours = 4*/
			_8_hours = 4,
			/** No_Lookback = 0*/
			No_Lookback = 0
		}
		enum msdyn_refreshschedule {
			/** _1_day = 8*/
			_1_day = 8,
			/** _1_hour = 4*/
			_1_hour = 4,
			/** _15_mins = 1*/
			_15_mins = 1,
			/** _2_days = 9*/
			_2_days = 9,
			/** _2_hours = 5*/
			_2_hours = 5,
			/** _30_mins = 2*/
			_30_mins = 2,
			/** _4_days = 10*/
			_4_days = 10,
			/** _4_hours = 6*/
			_4_hours = 6,
			/** _45_mins = 3*/
			_45_mins = 3,
			/** _7_days = 11*/
			_7_days = 11,
			/** _8_hours = 7*/
			_8_hours = 7,
			/** No_refresh = 0*/
			No_refresh = 0
		}
		enum statecode {
			/** Active = 0*/
			Active = 0,
			/** Inactive = 1*/
			Inactive = 1
		}
		enum statuscode {
			/** Draft = 3*/
			Draft = 3,
			/** Ingestion_Ready = 1*/
			Ingestion_Ready = 1,
			/** Validated = 2*/
			Validated = 2
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