﻿//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class synapselinkprofileentityApi {
		/**
		* DynamicsCrm.DevKit synapselinkprofileentityApi
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
		/** Is append only mode */
		AppendOnlyMode: boolean;
		/** For internal use only. */
		readonly ComponentIdUnique: string;
		/** For internal use only. */
		readonly ComponentState: OptionSet.synapselinkprofileentity.ComponentState;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string;
		/** Is entity enabled */
		Enabled: boolean;
		/** Name of the entity */
		EntityName2: string;
		/** Source of the entity */
		EntitySource: OptionSet.synapselinkprofileentity.EntitySource;
		/** Type of the entity */
		EntityType: OptionSet.synapselinkprofileentity.EntityType;
		/** Extended properties */
		ExtendedProperties: string;
		/** Generate parquet */
		GenerateParquet: boolean;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** For internal use only. */
		IsCustomizable: string;
		/** Indicates whether the solution component is part of a managed solution. */
		readonly IsManaged: boolean;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string;
		/** The name of the custom entity. */
		name: string;
		/** Unique identifier for the organization */
		readonly OrganizationId: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateAndTime: Date;
		/** Partition strategy */
		PartitionStrategy: OptionSet.synapselinkprofileentity.PartitionStrategy;
		/** Unique identifier for Synapse Link Profile associated with Synapse Link Profile Entity. */
		profile: string;
		/** Record count per block */
		RecordCountPerBlock: number;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string;
		/** Status of the Synapse Link Profile Entity */
		statecode: OptionSet.synapselinkprofileentity.statecode;
		/** Reason for the status of the Synapse Link Profile Entity */
		statuscode: OptionSet.synapselinkprofileentity.statuscode;
		/** For internal use only. */
		readonly SupportingSolutionId: string;
		/** Unique identifier for entity instances */
		synapselinkprofileentityId: string;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Unique name */
		UniqueName: string;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Is append only mode */
			readonly AppendOnlyMode: string;
			/** For internal use only. */
			readonly ComponentIdUnique: string;
			/** For internal use only. */
			readonly ComponentState: string;
			/** Unique identifier of the user who created the record. */
			readonly CreatedBy: string;
			/** Date and time when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the record. */
			readonly CreatedOnBehalfBy: string;
			/** Is entity enabled */
			readonly Enabled: string;
			/** Name of the entity */
			readonly EntityName2: string;
			/** Source of the entity */
			readonly EntitySource: string;
			/** Type of the entity */
			readonly EntityType: string;
			/** Extended properties */
			readonly ExtendedProperties: string;
			/** Generate parquet */
			readonly GenerateParquet: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** For internal use only. */
			readonly IsCustomizable: string;
			/** Indicates whether the solution component is part of a managed solution. */
			readonly IsManaged: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			/** The name of the custom entity. */
			readonly name: string;
			/** Unique identifier for the organization */
			readonly OrganizationId: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** For internal use only. */
			readonly OverwriteTime_UtcDateAndTime: string;
			/** Partition strategy */
			readonly PartitionStrategy: string;
			/** Unique identifier for Synapse Link Profile associated with Synapse Link Profile Entity. */
			readonly profile: string;
			/** Record count per block */
			readonly RecordCountPerBlock: string;
			/** Unique identifier of the associated solution. */
			readonly SolutionId: string;
			/** Status of the Synapse Link Profile Entity */
			readonly statecode: string;
			/** Reason for the status of the Synapse Link Profile Entity */
			readonly statuscode: string;
			/** For internal use only. */
			readonly SupportingSolutionId: string;
			/** Unique identifier for entity instances */
			readonly synapselinkprofileentityId: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Unique name */
			readonly UniqueName: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace synapselinkprofileentity {
		enum ComponentState {
			/** 0 */
			Da_phat_hanh,
			/** 2 */
			Da_xoa,
			/** 3 */
			Da_xoa_Huy_phat_hanh,
			/** 1 */
			Huy_phat_hanh
		}
		enum EntitySource {
			/** 0 */
			Dataverse,
			/** 1 */
			FnOTables
		}
		enum EntityType {
			/** 0 */
			Requested
		}
		enum PartitionStrategy {
			/** 3 */
			FiveDay,
			/** 2 */
			HalfMonth,
			/** 1 */
			Month,
			/** 0 */
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