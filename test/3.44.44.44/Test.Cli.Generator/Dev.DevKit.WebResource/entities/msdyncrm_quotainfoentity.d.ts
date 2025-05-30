﻿//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyncrm_quotainfoentity_Information {
		interface Tabs {
		}
		interface Body {
			/** The tenant quota field */
			msdyncrm_quotainfoentityname: DevKit.Controls.String;
		}
		interface Navigation {

		}
	}
	class Formmsdyncrm_quotainfoentity_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyncrm_quotainfoentity_Information */
		Body: DevKit.Formmsdyncrm_quotainfoentity_Information.Body;
		/** The Navigation of form msdyncrm_quotainfoentity_Information */
		Navigation: DevKit.Formmsdyncrm_quotainfoentity_Information.Navigation;
		/** The SidePanes of form msdyncrm_quotainfoentity_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyncrm_quotainfoentityApi {
		/**
		* DynamicsCrm.DevKit msdyncrm_quotainfoentityApi
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
		msdyncrm_quotainfo_last_refreshed_UtcDateAndTime: Date;
		msdyncrm_quotainfo_quota_amount: string;
		/** Unique ID for entity instances */
		msdyncrm_quotainfoentityId: string;
		/** The tenant quota field */
		msdyncrm_quotainfoentityname: string;
		/** Unique ID for the organization */
		readonly OrganizationId: string;
		/** Date and time when the record was migrated */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Status of the quota info entity */
		statecode: OptionSet.msdyncrm_quotainfoentity.statecode;
		/** Reason for the status of the quota info entity */
		statuscode: OptionSet.msdyncrm_quotainfoentity.statuscode;
		/** For internal use only */
		TimeZoneRuleVersionNumber: number;
		/** The time-zone code that was in use when the record was created */
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
			readonly msdyncrm_quotainfo_last_refreshed_UtcDateAndTime: string;
			readonly msdyncrm_quotainfo_quota_amount: string;
			/** Unique ID for entity instances */
			readonly msdyncrm_quotainfoentityId: string;
			/** The tenant quota field */
			readonly msdyncrm_quotainfoentityname: string;
			/** Unique ID for the organization */
			readonly OrganizationId: string;
			/** Date and time when the record was migrated */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Status of the quota info entity */
			readonly statecode: string;
			/** Reason for the status of the quota info entity */
			readonly statuscode: string;
			/** For internal use only */
			readonly TimeZoneRuleVersionNumber: string;
			/** The time-zone code that was in use when the record was created */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace msdyncrm_quotainfoentity {
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