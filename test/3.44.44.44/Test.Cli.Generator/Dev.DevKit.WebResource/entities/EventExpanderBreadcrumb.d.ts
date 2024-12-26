//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class EventExpanderBreadcrumbApi {
		/**
		* DynamicsCrm.DevKit EventExpanderBreadcrumbApi
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
		/** Date and time when the event expander breadcrumb was completed. */
		CompletedOn_UtcDateAndTime: Date;
		/** Unique identifier used to correlate. */
		CorrelationId: string;
		/** Unique identifier of the user who created the record. */
		CreatedBy: string;
		/** Date and time when the record was created. */
		CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string;
		/** The event payload. */
		Data: string;
		/** File Id for the blob url used for file storage. */
		DataBlobId: string;
		/** The error code of error for event expander breadcrumb in case of failure. */
		ErrorCode: number;
		/** Unique identifier for  entity instances. */
		EventExpanderBreadcrumbId: string;
		/** The datetime when the Expander pipeline started. */
		ExpanderStartTime_UtcDateAndTime: Date;
		/** The friendly message for end user. */
		FriendlyMessage: string;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Unique identifier of the user who last modified the record. */
		ModifiedBy: string;
		/** Date and time when the event expander breadcrumb was last modified. */
		ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string;
		/** The name of the event expander breadcrumb. */
		Name: string;
		/** The number of times breadcrumb has been retried. */
		OperationType: number;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Logical partition id. A logical partition consists of a set of records with same partition id. */
		PartitionId: string;
		/** Indicates whether the event should run only after the specified date and time. */
		PostponeUntil_UtcDateAndTime: Date;
		/** The number of times breadcrumb has been retried. */
		RetryCount: number;
		/** Date and time when the event expander breadcrumb was started. */
		StartedOn_UtcDateAndTime: Date;
		/** The status of event expander breadcrumb. */
		StateCode: OptionSet.EventExpanderBreadcrumb.StateCode;
		/** The status reason for event expander breadcrumb. */
		StatusCode: OptionSet.EventExpanderBreadcrumb.StatusCode;
		/** Time to live in seconds. */
		TTLInSeconds: number;
		/** Version Number */
		readonly VersionNumber: number;
		/** The name of the workload. */
		Workload: string;
		readonly FormattedValue: {
			/** Date and time when the event expander breadcrumb was completed. */
			readonly CompletedOn_UtcDateAndTime: string;
			/** Unique identifier used to correlate. */
			readonly CorrelationId: string;
			/** Unique identifier of the user who created the record. */
			readonly CreatedBy: string;
			/** Date and time when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the record. */
			readonly CreatedOnBehalfBy: string;
			/** The event payload. */
			readonly Data: string;
			/** File Id for the blob url used for file storage. */
			readonly DataBlobId: string;
			/** The error code of error for event expander breadcrumb in case of failure. */
			readonly ErrorCode: string;
			/** Unique identifier for  entity instances. */
			readonly EventExpanderBreadcrumbId: string;
			/** The datetime when the Expander pipeline started. */
			readonly ExpanderStartTime_UtcDateAndTime: string;
			/** The friendly message for end user. */
			readonly FriendlyMessage: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Unique identifier of the user who last modified the record. */
			readonly ModifiedBy: string;
			/** Date and time when the event expander breadcrumb was last modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			/** The name of the event expander breadcrumb. */
			readonly Name: string;
			/** The number of times breadcrumb has been retried. */
			readonly OperationType: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Logical partition id. A logical partition consists of a set of records with same partition id. */
			readonly PartitionId: string;
			/** Indicates whether the event should run only after the specified date and time. */
			readonly PostponeUntil_UtcDateAndTime: string;
			/** The number of times breadcrumb has been retried. */
			readonly RetryCount: string;
			/** Date and time when the event expander breadcrumb was started. */
			readonly StartedOn_UtcDateAndTime: string;
			/** The status of event expander breadcrumb. */
			readonly StateCode: string;
			/** The status reason for event expander breadcrumb. */
			readonly StatusCode: string;
			/** Time to live in seconds. */
			readonly TTLInSeconds: string;
			/** Version Number */
			readonly VersionNumber: string;
			/** The name of the workload. */
			readonly Workload: string;
		}
	}
}
declare namespace OptionSet {
	namespace EventExpanderBreadcrumb {
		enum StateCode {
			/** 3 */
			Completed,
			/** 2 */
			Locked,
			/** 0 */
			Ready
		}
		enum StatusCode {
			/** 32 */
			Canceled,
			/** 22 */
			Canceling,
			/** 31 */
			Failed,
			/** 20 */
			In_Progress,
			/** 30 */
			Succeeded,
			/** 0 */
			Waiting_For_Resources
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