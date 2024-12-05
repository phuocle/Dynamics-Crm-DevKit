//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class organizationdatasyncsubscriptionApi {
		/**
		* DynamicsCrm.DevKit organizationdatasyncsubscriptionApi
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
		AadApplicationId: string;
		BlobPartitionBy: OptionSet.organizationdatasyncsubscription.BlobPartitionBy;
		CanSyncAllMetadata: boolean;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string;
		DataEndpointPostingType: OptionSet.organizationdatasyncsubscription.DataEndpointPostingType;
		DataProcessingType: OptionSet.organizationdatasyncsubscription.DataProcessingType;
		EndpointSettings: string;
		EntityFilters: string;
		EntitySettings: string;
		FullSyncOnly: boolean;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		IsOutOfBoxSubscription: boolean;
		MigrationState: OptionSet.organizationdatasyncsubscription.MigrationState;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string;
		/** The name of the custom entity. */
		name: string;
		NeedCopyAttachmentsToBlob: boolean;
		NeedToCopyFilesToBlob: boolean;
		NewEntities: string;
		NewFnoTables: string;
		/** Unique identifier for entity instances */
		organizationdatasyncsubscriptionId: string;
		/** Unique identifier for the organization */
		readonly OrganizationId: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		PartnerPrefix: string;
		/** Status of the OrganizationDataSyncSubscription */
		statecode: OptionSet.organizationdatasyncsubscription.statecode;
		/** Reason for the status of the OrganizationDataSyncSubscription */
		statuscode: OptionSet.organizationdatasyncsubscription.statuscode;
		SubscribedToAllEntities: boolean;
		SubscriptionEndpointStatus: number;
		SubscriptionEntities: string;
		SubscriptionFnoTables: string;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		UnsubscribedEntities: string;
		UnsubscribedFnoTables: string;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version number of OrganizationDataSyncSubscription. */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			readonly AadApplicationId: string;
			readonly BlobPartitionBy: string;
			readonly CanSyncAllMetadata: string;
			/** Unique identifier of the user who created the record. */
			readonly CreatedBy: string;
			/** Date and time when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the record. */
			readonly CreatedOnBehalfBy: string;
			readonly DataEndpointPostingType: string;
			readonly DataProcessingType: string;
			readonly EndpointSettings: string;
			readonly EntityFilters: string;
			readonly EntitySettings: string;
			readonly FullSyncOnly: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			readonly IsOutOfBoxSubscription: string;
			readonly MigrationState: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			/** The name of the custom entity. */
			readonly name: string;
			readonly NeedCopyAttachmentsToBlob: string;
			readonly NeedToCopyFilesToBlob: string;
			readonly NewEntities: string;
			readonly NewFnoTables: string;
			/** Unique identifier for entity instances */
			readonly organizationdatasyncsubscriptionId: string;
			/** Unique identifier for the organization */
			readonly OrganizationId: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			readonly PartnerPrefix: string;
			/** Status of the OrganizationDataSyncSubscription */
			readonly statecode: string;
			/** Reason for the status of the OrganizationDataSyncSubscription */
			readonly statuscode: string;
			readonly SubscribedToAllEntities: string;
			readonly SubscriptionEndpointStatus: string;
			readonly SubscriptionEntities: string;
			readonly SubscriptionFnoTables: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			readonly UnsubscribedEntities: string;
			readonly UnsubscribedFnoTables: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version number of OrganizationDataSyncSubscription. */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace organizationdatasyncsubscription {
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
		enum DataEndpointPostingType {
			/** 0 */
			DefaultEndpoint,
			/** 2 */
			HTTPS,
			/** 3 */
			ServiceBusEventHub,
			/** 1 */
			ServiceBusTopic
		}
		enum DataProcessingType {
			/** 2 */
			Batch,
			/** 3 */
			Mixed,
			/** 4 */
			NotificationOnly,
			/** 1 */
			Streaming,
			/** 0 */
			Unknown
		}
		enum MigrationState {
			/** 0 */
			DsfCloudService,
			/** 1 */
			DsfSdk
		}
		enum statecode {
			/** 0 */
			Active,
			/** 1 */
			Inactive
		}
		enum statuscode {
			/** 4 */
			Activated,
			/** 5 */
			Deactivated,
			/** 3 */
			Uninitialized
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