//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	export class EventExpanderBreadcrumbApi {
		/**
		* DynamicsCrm.DevKit EventExpanderBreadcrumbApi
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
		/** Date and time when the event expander breadcrumb was completed. */
		CompletedOn_UtcDateAndTime: Date | null;
		/** Unique identifier used to correlate. */
		CorrelationId: string | null;
		/** Unique identifier of the user who created the record. */
		CreatedBy: string | null;
		/** Date and time when the record was created. */
		CreatedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string | null;
		/** The event payload. */
		Data: string | null;
		/** File Id for the blob url used for file storage. */
		DataBlobId: string | null;
		/** The error code of error for event expander breadcrumb in case of failure. */
		ErrorCode: number | null;
		/** Unique identifier for  entity instances. */
		EventExpanderBreadcrumbId: string | null;
		/** The datetime when the Expander pipeline started. */
		ExpanderStartTime_UtcDateAndTime: Date | null;
		/** The friendly message for end user. */
		FriendlyMessage: string | null;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number | null;
		/** Unique identifier of the user who last modified the record. */
		ModifiedBy: string | null;
		/** Date and time when the event expander breadcrumb was last modified. */
		ModifiedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string | null;
		/** The name of the event expander breadcrumb. */
		Name: string | null;
		/** The number of times breadcrumb has been retried. */
		OperationType: number | null;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date | null;
		/** Logical partition id. A logical partition consists of a set of records with same partition id. */
		PartitionId: string | null;
		/** Indicates whether the event should run only after the specified date and time. */
		PostponeUntil_UtcDateAndTime: Date | null;
		/** The number of times breadcrumb has been retried. */
		RetryCount: number | null;
		/** Date and time when the event expander breadcrumb was started. */
		StartedOn_UtcDateAndTime: Date | null;
		/** The status of event expander breadcrumb. */
		StateCode: OptionSet.EventExpanderBreadcrumb.StateCode | null;
		/** The status reason for event expander breadcrumb. */
		StatusCode: OptionSet.EventExpanderBreadcrumb.StatusCode | null;
		/** Time to live in seconds. */
		TTLInSeconds: number | null;
		/** Version Number */
		readonly VersionNumber: number | null;
		/** The name of the workload. */
		Workload: string | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
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
			/** Completed = 3*/
			Completed = 3,
			/** Locked = 2*/
			Locked = 2,
			/** Ready = 0*/
			Ready = 0
		}
		enum StatusCode {
			/** Canceled = 32*/
			Canceled = 32,
			/** Canceling = 22*/
			Canceling = 22,
			/** Failed = 31*/
			Failed = 31,
			/** In_Progress = 20*/
			In_Progress = 20,
			/** Succeeded = 30*/
			Succeeded = 30,
			/** Waiting_For_Resources = 0*/
			Waiting_For_Resources = 0
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