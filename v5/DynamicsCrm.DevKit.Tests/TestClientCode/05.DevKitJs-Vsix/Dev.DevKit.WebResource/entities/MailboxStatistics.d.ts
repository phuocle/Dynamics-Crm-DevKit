//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	export class MailboxStatisticsApi {
		/**
		* DynamicsCrm.DevKit MailboxStatisticsApi
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
		/** For internal use only. */
		readonly AsyncEventId: string | null;
		/** Items remaining in CRM to process after this synchronization cycle. */
		readonly CrmItemsBacklog: number | null;
		/** Time each exchange sync step is taking */
		readonly IndividualStepDurations: string | null;
		/** Number of items processed unsuccessfully. */
		readonly ItemsFailed: number | null;
		/** Number of items processed. */
		readonly ItemsProcessed: number | null;
		/** Name of Machine on which mailbox was processed */
		readonly MachineName: string | null;
		/** Regarding Mailbox. */
		readonly MailboxId: string | null;
		/** Completion time of the synchronization cycle. */
		readonly MailboxProcessCompletedOn_UtcDateAndTime: Date | null;
		/** Scheduled time of the synchronization cycle. */
		readonly MailboxProcessScheduledOn_UtcDateAndTime: Date | null;
		/** Start time of the synchronization cycle. */
		readonly MailboxProcessStartedOn_UtcDateAndTime: Date | null;
		readonly MailboxStatisticsId: string | null;
		/** Type of the mailbox operation */
		readonly OperationTypeId: OptionSet.MailboxStatistics.OperationTypeId | null;
		/** Unique identifier of the organization associated with the record. */
		readonly OrganizationId: string | null;
		/** Result of Mailbox processing cycle */
		readonly ProcessResult: boolean | null;
		/** Time it took to process the mailbox. */
		readonly ProcessTimeIntervalInMinutes: number | null;
		/** Time it took from the scheduled time to the actual start time to process the mailbox. */
		readonly ScheduledTimeIntervalInMinutes: number | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			/** For internal use only. */
			readonly AsyncEventId: string;
			/** Items remaining in CRM to process after this synchronization cycle. */
			readonly CrmItemsBacklog: string;
			/** Time each exchange sync step is taking */
			readonly IndividualStepDurations: string;
			/** Number of items processed unsuccessfully. */
			readonly ItemsFailed: string;
			/** Number of items processed. */
			readonly ItemsProcessed: string;
			/** Name of Machine on which mailbox was processed */
			readonly MachineName: string;
			/** Regarding Mailbox. */
			readonly MailboxId: string;
			/** Completion time of the synchronization cycle. */
			readonly MailboxProcessCompletedOn_UtcDateAndTime: string;
			/** Scheduled time of the synchronization cycle. */
			readonly MailboxProcessScheduledOn_UtcDateAndTime: string;
			/** Start time of the synchronization cycle. */
			readonly MailboxProcessStartedOn_UtcDateAndTime: string;
			readonly MailboxStatisticsId: string;
			/** Type of the mailbox operation */
			readonly OperationTypeId: string;
			/** Unique identifier of the organization associated with the record. */
			readonly OrganizationId: string;
			/** Result of Mailbox processing cycle */
			readonly ProcessResult: string;
			/** Time it took to process the mailbox. */
			readonly ProcessTimeIntervalInMinutes: string;
			/** Time it took from the scheduled time to the actual start time to process the mailbox. */
			readonly ScheduledTimeIntervalInMinutes: string;
		}
	}
}
declare namespace OptionSet {
	namespace MailboxStatistics {
		enum OperationTypeId {
			/** ACT = 2*/
			ACT = 2,
			/** Incoming_Email = 0*/
			Incoming_Email = 0,
			/** Outgoing_Email = 1*/
			Outgoing_Email = 1
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