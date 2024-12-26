//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyncrm_marketingconfiguration_Information {
		interface Tabs {
		}
		interface Body {
			/** Date and time when the record was modified */
			ModifiedOn: DevKit.Controls.DateTime;
			/** The name of the marketing configuration entity */
			msdyncrm_name: DevKit.Controls.String;
		}
		interface Navigation {

		}
	}
	class Formmsdyncrm_marketingconfiguration_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyncrm_marketingconfiguration_Information */
		Body: DevKit.Formmsdyncrm_marketingconfiguration_Information.Body;
		/** The Navigation of form msdyncrm_marketingconfiguration_Information */
		Navigation: DevKit.Formmsdyncrm_marketingconfiguration_Information.Navigation;
		/** The SidePanes of form msdyncrm_marketingconfiguration_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyncrm_marketingconfigurationApi {
		/**
		* DynamicsCrm.DevKit msdyncrm_marketingconfigurationApi
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
		msdyncrm_configcacheexpirationdate_UtcDateAndTime: Date;
		msdyncrm_ConfigCacheExpirationPeriodInMs: number;
		msdyncrm_default: boolean;
		msdyncrm_FirstTimeSetupUrl: string;
		msdyncrm_httptimeout: number;
		msdyncrm_isemailtemplatesconsented: boolean;
		msdyncrm_IsInstallComplete: boolean;
		msdyncrm_IsMarketingListAvailableInApp: boolean;
		/** Unique ID for entity instances */
		msdyncrm_marketingconfigurationId: string;
		msdyncrm_maxretryattempts: number;
		msdyncrm_MktSvcDiscoveryEndpointUrl: string;
		/** The name of the marketing configuration entity */
		msdyncrm_name: string;
		/** The configuration JSON */
		msdyncrm_organization_config: string;
		msdyncrm_realtimediscoveryendpointurl: string;
		msdyncrm_realtimetokenauthenticationresource: string;
		msdyncrm_realtimeusebasicauth: boolean;
		/** The organization setup status json */
		msdyncrm_setupstatus: string;
		msdyncrm_tokenauthenticationresource: string;
		msdyncrm_UseBasicAuth: boolean;
		/** Unique ID of the organization */
		readonly OrganizationId: string;
		/** Date and time that the record was migrated */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Status of the marketing configuration */
		statecode: OptionSet.msdyncrm_marketingconfiguration.statecode;
		/** Marketing configuration status reason */
		statuscode: OptionSet.msdyncrm_marketingconfiguration.statuscode;
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
			readonly msdyncrm_configcacheexpirationdate_UtcDateAndTime: string;
			readonly msdyncrm_ConfigCacheExpirationPeriodInMs: string;
			readonly msdyncrm_default: string;
			readonly msdyncrm_FirstTimeSetupUrl: string;
			readonly msdyncrm_httptimeout: string;
			readonly msdyncrm_isemailtemplatesconsented: string;
			readonly msdyncrm_IsInstallComplete: string;
			readonly msdyncrm_IsMarketingListAvailableInApp: string;
			/** Unique ID for entity instances */
			readonly msdyncrm_marketingconfigurationId: string;
			readonly msdyncrm_maxretryattempts: string;
			readonly msdyncrm_MktSvcDiscoveryEndpointUrl: string;
			/** The name of the marketing configuration entity */
			readonly msdyncrm_name: string;
			/** The configuration JSON */
			readonly msdyncrm_organization_config: string;
			readonly msdyncrm_realtimediscoveryendpointurl: string;
			readonly msdyncrm_realtimetokenauthenticationresource: string;
			readonly msdyncrm_realtimeusebasicauth: string;
			/** The organization setup status json */
			readonly msdyncrm_setupstatus: string;
			readonly msdyncrm_tokenauthenticationresource: string;
			readonly msdyncrm_UseBasicAuth: string;
			/** Unique ID of the organization */
			readonly OrganizationId: string;
			/** Date and time that the record was migrated */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Status of the marketing configuration */
			readonly statecode: string;
			/** Marketing configuration status reason */
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
	namespace msdyncrm_marketingconfiguration {
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