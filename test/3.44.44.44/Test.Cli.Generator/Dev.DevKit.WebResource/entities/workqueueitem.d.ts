//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class workqueueitemApi {
		/**
		* DynamicsCrm.DevKit workqueueitemApi
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
		/** The date and time when the work queue item was completed. */
		completedon_UtcDateOnly: Date;
		/** For internal use only. */
		readonly ComponentIdUnique: string;
		/** For internal use only. */
		readonly ComponentState: OptionSet.workqueueitem.ComponentState;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string;
		/** The date and time after which the work queue item can be dequeued again. */
		delayuntil_UtcDateOnly: Date;
		/** The execution context contains a system-managed list of processing attempts, along with important debugging information. */
		executioncontext: string;
		/** The expiry date indicates the deadline when the work queue items has to be processed by. */
		expirydate_UtcDateOnly: Date;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** The input field contains the actual work item data used for processing by bots, humans, or integrations. */
		input: string;
		/** For internal use only. */
		IsCustomizable: string;
		/** Indicates whether the solution component is part of a managed solution. */
		readonly IsManaged: boolean;
		/** Machine User that processed the item. */
		machineuser: string;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string;
		/** The name of the work queue item which is by default set to an auto number (e.g., 2023-02-13-000000001). */
		name: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateAndTime: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Unique identifier for the business unit that owns the record */
		readonly OwningBusinessUnit: string;
		/** Unique identifier for the team that owns the record. */
		readonly OwningTeam: string;
		/** Unique identifier for the user that owns the record. */
		readonly OwningUser: string;
		/** The priority value determines the pick and processing order for work queue items in a work queue. A lower value corresponds to a higher priority with 1 being the highest. */
		priority: number;
		/** The duration of the processing in seconds. */
		processingduration: number;
		processingresult: string;
		/** The date and time when the processing has started. */
		processingstarttime_UtcDateOnly: Date;
		/** Unique identifier for the user that processed the item. */
		processinguser: string;
		/** Unique identifier for the processor (workflow, flowmachine, etc.) that processed the item. */
		processorid: string;
		/** The processor type allows to display if the item was processed through a cloud flow, a flow machine or another processor type. */
		processortype: OptionSet.workqueueitem.processortype;
		/** The number of times the item has been requeued. */
		requeuecount: number;
		/** The number of times the item has been retried. */
		retrycount: number;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string;
		/** The status of the work queue item (Queued, Processed, Exception etc.) */
		statecode: OptionSet.workqueueitem.statecode;
		/** The status reason provides more context for a set status (Queued, Processing, On hold etc.). */
		statuscode: OptionSet.workqueueitem.statuscode;
		/** For internal use only. */
		readonly SupportingSolutionId: string;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** An identifier of the work queue item used to uniquely identify a work queue item inside a work queue. */
		uniqueidbyqueue: string;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		/** The work queue id of the parent work queue record. */
		workqueueid: string;
		/** Unique identifier for entity instances. */
		workqueueitemId: string;
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
			readonly expirydate_UtcDateOnly: string;
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
			/** 2 */
			Deleted,
			/** 3 */
			Deleted_Unpublished,
			/** 0 */
			Published,
			/** 1 */
			Unpublished
		}
		enum processortype {
			/** 1 */
			Cloud_Flow,
			/** 2 */
			Flow_Machine,
			/** 0 */
			None
		}
		enum statecode {
			/** 4 */
			Error,
			/** 3 */
			OnHold,
			/** 2 */
			Processed,
			/** 1 */
			Processing,
			/** 0 */
			Queued
		}
		enum statuscode {
			/** 6 */
			BusinessException,
			/** 7 */
			DeadLetter,
			/** 4 */
			GenericException,
			/** 5 */
			ITException,
			/** 3 */
			Paused,
			/** 2 */
			Processed,
			/** 1 */
			Processing,
			/** 8 */
			ProcessingTimeout,
			/** 0 */
			Queued
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