//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class msdyn_OptimizationRequestApi {
		/**
		* DynamicsCrm.DevKit msdyn_OptimizationRequestApi
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
		CreatedBy: string;
		/** Date and time when the record was created. */
		CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the record. */
		CreatedOnBehalfBy: string;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Unique identifier of the user who modified the record. */
		ModifiedBy: string;
		/** Date and time when the record was modified. */
		ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record. */
		ModifiedOnBehalfBy: string;
		/** Apply Operation Id */
		msdyn_ApplyOperationId: string;
		msdyn_Name: string;
		msdyn_OptimizationErrors: string;
		/** Unique identifier for entity instances */
		msdyn_OptimizationRequestId: string;
		msdyn_OptimizationStatus: OptionSet.msdyn_OptimizationRequest.msdyn_OptimizationStatus;
		msdyn_OptimizationType: OptionSet.msdyn_OptimizationRequest.msdyn_OptimizationType;
		msdyn_Snapshot: string;
		msdyn_SuggestedSchedule: string;
		/** Optimization Id from Universal Scheduling Service */
		msdyn_UssOptimizationId: string;
		msdyn_UssSnapshot: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Unique identifier for the business unit that owns the record */
		readonly OwningBusinessUnit: string;
		/** Unique identifier for the team that owns the record. */
		OwningTeam: string;
		/** Unique identifier for the user that owns the record. */
		OwningUser: string;
		/** Logical partition id. A logical partition consists of a set of records with same partition id. */
		PartitionId: string;
		/** Time to live in seconds. */
		TTLInSeconds: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Unique identifier of the user who created the record. */
			readonly CreatedBy: string;
			/** Date and time when the record was created. */
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
			/** Apply Operation Id */
			readonly msdyn_ApplyOperationId: string;
			readonly msdyn_Name: string;
			readonly msdyn_OptimizationErrors: string;
			/** Unique identifier for entity instances */
			readonly msdyn_OptimizationRequestId: string;
			readonly msdyn_OptimizationStatus: string;
			readonly msdyn_OptimizationType: string;
			readonly msdyn_Snapshot: string;
			readonly msdyn_SuggestedSchedule: string;
			/** Optimization Id from Universal Scheduling Service */
			readonly msdyn_UssOptimizationId: string;
			readonly msdyn_UssSnapshot: string;
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
			/** Logical partition id. A logical partition consists of a set of records with same partition id. */
			readonly PartitionId: string;
			/** Time to live in seconds. */
			readonly TTLInSeconds: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace msdyn_OptimizationRequest {
		enum msdyn_OptimizationStatus {
			/** 772020003 */
			Canceled,
			/** 772020002 */
			Failed,
			/** 772020000 */
			Running,
			/** 772020001 */
			Succeeded
		}
		enum msdyn_OptimizationType {
			/** 772020000 */
			Single_Resource_Optimization
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