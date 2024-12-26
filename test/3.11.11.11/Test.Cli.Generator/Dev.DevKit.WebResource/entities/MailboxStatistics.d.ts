//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class MailboxStatisticsApi {
		/**
		* DynamicsCrm.DevKit MailboxStatisticsApi
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
		/** For internal use only. */
		readonly AsyncEventId: string;
		/** Items remaining in CRM to process after this synchronization cycle. */
		readonly CrmItemsBacklog: number;
		/** Time each exchange sync step is taking */
		readonly IndividualStepDurations: string;
		/** Number of items processed unsuccessfully. */
		readonly ItemsFailed: number;
		/** Number of items processed. */
		readonly ItemsProcessed: number;
		/** Name of Machine on which mailbox was processed */
		readonly MachineName: string;
		/** Regarding Mailbox. */
		readonly MailboxId: string;
		/** Completion time of the synchronization cycle. */
		readonly MailboxProcessCompletedOn_UtcDateAndTime: Date;
		/** Scheduled time of the synchronization cycle. */
		readonly MailboxProcessScheduledOn_UtcDateAndTime: Date;
		/** Start time of the synchronization cycle. */
		readonly MailboxProcessStartedOn_UtcDateAndTime: Date;
		readonly MailboxStatisticsId: string;
		/** Type of the mailbox operation */
		readonly OperationTypeId: OptionSet.MailboxStatistics.OperationTypeId;
		/** Unique identifier of the organization associated with the record. */
		readonly OrganizationId: string;
		/** Result of Mailbox processing cycle */
		readonly ProcessResult: boolean;
		/** Time it took to process the mailbox. */
		readonly ProcessTimeIntervalInMinutes: number;
		/** Time it took from the scheduled time to the actual start time to process the mailbox. */
		readonly ScheduledTimeIntervalInMinutes: number;
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
			/** 2 */
			ACT,
			/** 0 */
			Incoming_Email,
			/** 1 */
			Outgoing_Email
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
//{'UseForm':false,'UseWebApi':true,'Version':'3.11.11','WebApiVersion':'2'}