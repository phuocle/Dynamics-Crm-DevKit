//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	export class organizationdatasyncsubscriptionApi {
		/**
		* DynamicsCrm.DevKit organizationdatasyncsubscriptionApi
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
		AadApplicationId: string | null;
		BlobPartitionBy: OptionSet.organizationdatasyncsubscription.BlobPartitionBy | null;
		CanSyncAllMetadata: boolean | null;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string | null;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string | null;
		DataEndpointPostingType: OptionSet.organizationdatasyncsubscription.DataEndpointPostingType | null;
		DataProcessingType: OptionSet.organizationdatasyncsubscription.DataProcessingType | null;
		EndpointSettings: string | null;
		EntityFilters: string | null;
		EntitySettings: string | null;
		FullSyncOnly: boolean | null;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number | null;
		IsOutOfBoxSubscription: boolean | null;
		MigrationState: OptionSet.organizationdatasyncsubscription.MigrationState | null;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string | null;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string | null;
		/** The name of the custom entity. */
		name: string | null;
		NeedCopyAttachmentsToBlob: boolean | null;
		NeedToCopyFilesToBlob: boolean | null;
		NewEntities: string | null;
		NewFnoTables: string | null;
		/** Unique identifier for entity instances */
		organizationdatasyncsubscriptionId: string | null;
		/** Unique identifier for the organization */
		readonly OrganizationId: string | null;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date | null;
		PartnerPrefix: string | null;
		/** Status of the OrganizationDataSyncSubscription */
		statecode: OptionSet.organizationdatasyncsubscription.statecode | null;
		/** Reason for the status of the OrganizationDataSyncSubscription */
		statuscode: OptionSet.organizationdatasyncsubscription.statuscode | null;
		SubscribedToAllEntities: boolean | null;
		SubscriptionEndpointStatus: number | null;
		SubscriptionEntities: string | null;
		SubscriptionFnoTables: string | null;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number | null;
		UnsubscribedEntities: string | null;
		UnsubscribedFnoTables: string | null;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number | null;
		/** Version number of OrganizationDataSyncSubscription. */
		readonly VersionNumber: number | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
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
			/** Day = 1*/
			Day = 1,
			/** Month = 2*/
			Month = 2,
			/** None = 0*/
			None = 0,
			/** Year = 3*/
			Year = 3
		}
		enum DataEndpointPostingType {
			/** DefaultEndpoint = 0*/
			DefaultEndpoint = 0,
			/** HTTPS = 2*/
			HTTPS = 2,
			/** ServiceBusEventHub = 3*/
			ServiceBusEventHub = 3,
			/** ServiceBusTopic = 1*/
			ServiceBusTopic = 1
		}
		enum DataProcessingType {
			/** Batch = 2*/
			Batch = 2,
			/** Mixed = 3*/
			Mixed = 3,
			/** NotificationOnly = 4*/
			NotificationOnly = 4,
			/** Streaming = 1*/
			Streaming = 1,
			/** Unknown = 0*/
			Unknown = 0
		}
		enum MigrationState {
			/** DsfCloudService = 0*/
			DsfCloudService = 0,
			/** DsfSdk = 1*/
			DsfSdk = 1
		}
		enum statecode {
			/** Active = 0*/
			Active = 0,
			/** Inactive = 1*/
			Inactive = 1
		}
		enum statuscode {
			/** Activated = 4*/
			Activated = 4,
			/** Deactivated = 5*/
			Deactivated = 5,
			/** Uninitialized = 3*/
			Uninitialized = 3
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