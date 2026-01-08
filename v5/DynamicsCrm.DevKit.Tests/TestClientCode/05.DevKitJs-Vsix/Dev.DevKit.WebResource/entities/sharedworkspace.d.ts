//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	export class sharedworkspaceApi {
		/**
		* DynamicsCrm.DevKit sharedworkspaceApi
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
		/** Access token */
		readonly AccessToken: string | null;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string | null;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string | null;
		/** Discovery Endpoint */
		DiscoveryEndpoint: string | null;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number | null;
		/** The last time the workspace was managed. */
		LastManaged_TimezoneDateAndTime: Date | null;
		/** The last time the workspace was used */
		LastUsed_TimezoneDateAndTime: Date | null;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string | null;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string | null;
		/** The name of the container. */
		Name: string | null;
		/** Orderer Endpoint */
		OrdererEndpoint: string | null;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date | null;
		/** The documentId identifying the container */
		sharedworkspaceId: string | null;
		/** Status of the workspace */
		statecode: OptionSet.sharedworkspace.statecode | null;
		/** Reason for the status of the workspace. */
		statuscode: OptionSet.sharedworkspace.statuscode | null;
		/** Storage Endpoint */
		StorageEndpoint: string | null;
		/** The tenant where the workspace resides */
		TenantId: string | null;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number | null;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number | null;
		/** Version Number */
		readonly VersionNumber: number | null;
		/** The schema of the workspace */
		WorkspaceSchema: string | null;
		/** The version of the schema. */
		WorkspaceSchemaVersion: string | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
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
			/** Active = 0*/
			Active = 0,
			/** Inactive = 1*/
			Inactive = 1
		}
		enum statuscode {
			/** Active = 1*/
			Active = 1,
			/** Inactive = 2*/
			Inactive = 2
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