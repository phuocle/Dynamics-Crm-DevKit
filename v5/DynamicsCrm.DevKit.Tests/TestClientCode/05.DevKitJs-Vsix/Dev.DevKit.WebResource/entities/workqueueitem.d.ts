//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	export class workqueueitemApi {
		/**
		* DynamicsCrm.DevKit workqueueitemApi
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
		/** The date and time when the work queue item was completed. */
		completedon_UtcDateOnly: Date | null;
		/** For internal use only. */
		readonly ComponentIdUnique: string | null;
		/** For internal use only. */
		readonly ComponentState: OptionSet.workqueueitem.ComponentState | null;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string | null;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string | null;
		/** The date and time after which the work queue item can be dequeued again. */
		delayuntil_UtcDateOnly: Date | null;
		/** The execution context contains a system-managed list of processing attempts, along with important debugging information. */
		executioncontext: string | null;
		/** The expiry date indicates the deadline when the work queue items has to be processed by. */
		expirydate_UtcDateAndTime: Date | null;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number | null;
		/** The input field contains the actual work item data used for processing by bots, humans, or integrations. */
		input: string | null;
		/** For internal use only. */
		IsCustomizable: string | null;
		/** Indicates whether the solution component is part of a managed solution. */
		readonly IsManaged: boolean | null;
		/** Machine User that processed the item. */
		machineuser: string | null;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string | null;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string | null;
		/** The name of the work queue item which is by default set to an auto number (e.g., 2023-02-13-000000001). */
		name: string | null;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date | null;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateAndTime: Date | null;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string | null;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string | null;
		/** Unique identifier for the business unit that owns the record */
		readonly OwningBusinessUnit: string | null;
		/** Unique identifier for the team that owns the record. */
		readonly OwningTeam: string | null;
		/** Unique identifier for the user that owns the record. */
		readonly OwningUser: string | null;
		/** The priority value determines the pick and processing order for work queue items in a work queue. A lower value corresponds to a higher priority with 1 being the highest. */
		priority: number | null;
		/** The duration of the processing in seconds. */
		processingduration: number | null;
		processingresult: string | null;
		/** The date and time when the processing has started. */
		processingstarttime_UtcDateOnly: Date | null;
		/** Unique identifier for the user that processed the item. */
		processinguser: string | null;
		/** Unique identifier for the processor (workflow, flowmachine, etc.) that processed the item. */
		processorid: string | null;
		/** The processor type allows to display if the item was processed through a cloud flow, a flow machine or another processor type. */
		processortype: OptionSet.workqueueitem.processortype | null;
		/** The number of times the item has been requeued. */
		requeuecount: number | null;
		/** The number of times the item has been retried. */
		retrycount: number | null;
		/** The SLA status provides more context for on the item processing status (In SLA, At Risk, Out of SLA). */
		slastatus: OptionSet.workqueueitem.slastatus | null;
		/** Date and time on which the work queue item starts to be at risk of SLA violation. */
		slathresholddate_UtcDateAndTime: Date | null;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string | null;
		/** The status of the work queue item (Queued, Processed, Exception etc.) */
		statecode: OptionSet.workqueueitem.statecode | null;
		/** The status reason provides more context for a set status (Queued, Processing, On hold etc.). */
		statuscode: OptionSet.workqueueitem.statuscode | null;
		/** For internal use only. */
		readonly SupportingSolutionId: string | null;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number | null;
		/** An identifier of the work queue item used to uniquely identify a work queue item inside a work queue. */
		uniqueidbyqueue: string | null;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number | null;
		/** Version Number */
		readonly VersionNumber: number | null;
		/** The work queue id of the parent work queue record. */
		workqueueid: string | null;
		/** Unique identifier for entity instances. */
		workqueueitemId: string | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			/** The date and time when the work queue item was completed. */
			readonly completedon_UtcDateOnly: string;
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
			/** The date and time after which the work queue item can be dequeued again. */
			readonly delayuntil_UtcDateOnly: string;
			/** The execution context contains a system-managed list of processing attempts, along with important debugging information. */
			readonly executioncontext: string;
			/** The expiry date indicates the deadline when the work queue items has to be processed by. */
			readonly expirydate_UtcDateAndTime: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** The input field contains the actual work item data used for processing by bots, humans, or integrations. */
			readonly input: string;
			/** For internal use only. */
			readonly IsCustomizable: string;
			/** Indicates whether the solution component is part of a managed solution. */
			readonly IsManaged: string;
			/** Machine User that processed the item. */
			readonly machineuser: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			/** The name of the work queue item which is by default set to an auto number (e.g., 2023-02-13-000000001). */
			readonly name: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** For internal use only. */
			readonly OverwriteTime_UtcDateAndTime: string;
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
			/** The priority value determines the pick and processing order for work queue items in a work queue. A lower value corresponds to a higher priority with 1 being the highest. */
			readonly priority: string;
			/** The duration of the processing in seconds. */
			readonly processingduration: string;
			readonly processingresult: string;
			/** The date and time when the processing has started. */
			readonly processingstarttime_UtcDateOnly: string;
			/** Unique identifier for the user that processed the item. */
			readonly processinguser: string;
			/** Unique identifier for the processor (workflow, flowmachine, etc.) that processed the item. */
			readonly processorid: string;
			/** The processor type allows to display if the item was processed through a cloud flow, a flow machine or another processor type. */
			readonly processortype: string;
			/** The number of times the item has been requeued. */
			readonly requeuecount: string;
			/** The number of times the item has been retried. */
			readonly retrycount: string;
			/** The SLA status provides more context for on the item processing status (In SLA, At Risk, Out of SLA). */
			readonly slastatus: string;
			/** Date and time on which the work queue item starts to be at risk of SLA violation. */
			readonly slathresholddate_UtcDateAndTime: string;
			/** Unique identifier of the associated solution. */
			readonly SolutionId: string;
			/** The status of the work queue item (Queued, Processed, Exception etc.) */
			readonly statecode: string;
			/** The status reason provides more context for a set status (Queued, Processing, On hold etc.). */
			readonly statuscode: string;
			/** For internal use only. */
			readonly SupportingSolutionId: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** An identifier of the work queue item used to uniquely identify a work queue item inside a work queue. */
			readonly uniqueidbyqueue: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
			/** The work queue id of the parent work queue record. */
			readonly workqueueid: string;
			/** Unique identifier for entity instances. */
			readonly workqueueitemId: string;
		}
	}
}
declare namespace OptionSet {
	namespace workqueueitem {
		enum ComponentState {
			/** Deleted = 2*/
			Deleted = 2,
			/** Deleted_Unpublished = 3*/
			Deleted_Unpublished = 3,
			/** Published = 0*/
			Published = 0,
			/** Unpublished = 1*/
			Unpublished = 1
		}
		enum processortype {
			/** Cloud_Flow = 1*/
			Cloud_Flow = 1,
			/** Flow_Machine = 2*/
			Flow_Machine = 2,
			/** None = 0*/
			None = 0
		}
		enum slastatus {
			/** AtRisk = 2*/
			AtRisk = 2,
			/** In = 1*/
			In = 1,
			/** NotSet = 0*/
			NotSet = 0,
			/** Out = 3*/
			Out = 3
		}
		enum statecode {
			/** Error = 4*/
			Error = 4,
			/** OnHold = 3*/
			OnHold = 3,
			/** Processed = 2*/
			Processed = 2,
			/** Processing = 1*/
			Processing = 1,
			/** Queued = 0*/
			Queued = 0
		}
		enum statuscode {
			/** BusinessException = 6*/
			BusinessException = 6,
			/** DeadLetter = 7*/
			DeadLetter = 7,
			/** GenericException = 4*/
			GenericException = 4,
			/** ITException = 5*/
			ITException = 5,
			/** Paused = 3*/
			Paused = 3,
			/** Processed = 2*/
			Processed = 2,
			/** Processing = 1*/
			Processing = 1,
			/** ProcessingTimeout = 8*/
			ProcessingTimeout = 8,
			/** Queued = 0*/
			Queued = 0
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