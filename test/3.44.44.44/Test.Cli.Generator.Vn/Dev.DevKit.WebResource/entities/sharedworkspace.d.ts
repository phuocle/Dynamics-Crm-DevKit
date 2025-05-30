﻿//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class sharedworkspaceApi {
		/**
		* DynamicsCrm.DevKit sharedworkspaceApi
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
		/** Access token */
		readonly AccessToken: string;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string;
		/** Discovery Endpoint */
		DiscoveryEndpoint: string;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** The last time the workspace was managed. */
		LastManaged_TimezoneDateAndTime: Date;
		/** The last time the workspace was used */
		LastUsed_TimezoneDateAndTime: Date;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string;
		/** The name of the container. */
		Name: string;
		/** Orderer Endpoint */
		OrdererEndpoint: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** The documentId identifying the container */
		sharedworkspaceId: string;
		/** Status of the workspace */
		statecode: OptionSet.sharedworkspace.statecode;
		/** Reason for the status of the workspace. */
		statuscode: OptionSet.sharedworkspace.statuscode;
		/** Storage Endpoint */
		StorageEndpoint: string;
		/** The tenant where the workspace resides */
		TenantId: string;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		/** The schema of the workspace */
		WorkspaceSchema: string;
		/** The version of the schema. */
		WorkspaceSchemaVersion: string;
		readonly FormattedValue: {
			/** Access token */
			readonly AccessToken: string;
			/** Unique identifier of the user who created the record. */
			readonly CreatedBy: string;
			/** Date and time when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the record. */
			readonly CreatedOnBehalfBy: string;
			/** Discovery Endpoint */
			readonly DiscoveryEndpoint: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** The last time the workspace was managed. */
			readonly LastManaged_TimezoneDateAndTime: string;
			/** The last time the workspace was used */
			readonly LastUsed_TimezoneDateAndTime: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			/** The name of the container. */
			readonly Name: string;
			/** Orderer Endpoint */
			readonly OrdererEndpoint: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** The documentId identifying the container */
			readonly sharedworkspaceId: string;
			/** Status of the workspace */
			readonly statecode: string;
			/** Reason for the status of the workspace. */
			readonly statuscode: string;
			/** Storage Endpoint */
			readonly StorageEndpoint: string;
			/** The tenant where the workspace resides */
			readonly TenantId: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
			/** The schema of the workspace */
			readonly WorkspaceSchema: string;
			/** The version of the schema. */
			readonly WorkspaceSchemaVersion: string;
		}
	}
}
declare namespace OptionSet {
	namespace sharedworkspace {
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