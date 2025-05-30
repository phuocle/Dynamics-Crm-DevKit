﻿//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class organizationdatasyncsubscriptionentityApi {
		/**
		* DynamicsCrm.DevKit organizationdatasyncsubscriptionentityApi
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
		BlobPartitionBy: OptionSet.organizationdatasyncsubscriptionentity.BlobPartitionBy;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		InheritsFromOtc: number;
		IsActivity: boolean;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string;
		/** The name of the custom entity. */
		name: string;
		ObjectTypeCode: number;
		/** Unique identifier for OrganizationDataSyncSubscription associated with OrganizationDataSyncSubscriptionEntity. */
		OrganizationDataSyncSubscriptioId: string;
		/** Unique identifier for OrganizationDataSyncSubscription associated with OrganizationDataSyncSubscriptionEntity. */
		OrganizationDataSyncSubscription: string;
		/** Unique identifier for entity instances */
		organizationdatasyncsubscriptionentityId: string;
		/** Unique identifier for the organization */
		readonly OrganizationId: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Status of the OrganizationDataSyncSubscriptionEntity */
		statecode: OptionSet.organizationdatasyncsubscriptionentity.statecode;
		/** Reason for the status of the OrganizationDataSyncSubscriptionEntity */
		statuscode: OptionSet.organizationdatasyncsubscriptionentity.statuscode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version number of OrganizationDataSyncSubscriptionEntity. */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			readonly BlobPartitionBy: string;
			/** Unique identifier of the user who created the record. */
			readonly CreatedBy: string;
			/** Date and time when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the record. */
			readonly CreatedOnBehalfBy: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			readonly InheritsFromOtc: string;
			readonly IsActivity: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			/** The name of the custom entity. */
			readonly name: string;
			readonly ObjectTypeCode: string;
			/** Unique identifier for OrganizationDataSyncSubscription associated with OrganizationDataSyncSubscriptionEntity. */
			readonly OrganizationDataSyncSubscriptioId: string;
			/** Unique identifier for OrganizationDataSyncSubscription associated with OrganizationDataSyncSubscriptionEntity. */
			readonly OrganizationDataSyncSubscription: string;
			/** Unique identifier for entity instances */
			readonly organizationdatasyncsubscriptionentityId: string;
			/** Unique identifier for the organization */
			readonly OrganizationId: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Status of the OrganizationDataSyncSubscriptionEntity */
			readonly statecode: string;
			/** Reason for the status of the OrganizationDataSyncSubscriptionEntity */
			readonly statuscode: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version number of OrganizationDataSyncSubscriptionEntity. */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace organizationdatasyncsubscriptionentity {
		enum BlobPartitionBy {
			/** 1 */
			Day,
			/** 2 */
			Month,
			/** 0 */
			None,
			/** 3 */
			Year
		}
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.33.33.33'}