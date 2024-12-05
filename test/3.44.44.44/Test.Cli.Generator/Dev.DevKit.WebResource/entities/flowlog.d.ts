//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class flowlogApi {
		/**
		* DynamicsCrm.DevKit flowlogApi
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
		/** The Power Automate Cloud Flow Id this log is linked to. */
		cloudflowid: string;
		/** The Power Automate Cloud Flow run this log is linked to. */
		cloudflowrunid: string;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string;
		/** The logged data. */
		data: string;
		/** The Desktop Flow Id this log is linked to. */
		desktopflowid: string;
		/** Unique identifier for entity instances */
		flowlogId: string;
		flowmachinegroupid: string;
		flowmachineid: string;
		/** The Power Automate Desktop Flow Session this log belongs to. */
		flowsessionid: string;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** The level of the log. */
		level: OptionSet.flowlog.level;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string;
		/** The name of the log. */
		Name: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		readonly OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		readonly OwnerId_team: string;
		/** The id of the parent object. */
		parentobjectid_flowmachinegroup: string;
		/** The id of the parent object. */
		parentobjectid: string;
		/** The id of the parent object. */
		parentobjectid_workqueue: string;
		/** Logical partition id. A logical partition consists of a set of records with same partition id. */
		PartitionId: string;
		/** Time to live in seconds. */
		TTLInSeconds: number;
		/** The type of the log. */
		type: OptionSet.flowlog.type;
		/** Version Number */
		readonly VersionNumber: number;
		/** The Work Queue this log is linked to. */
		workqueueid: string;
		/** The Work Queue Item this log is linked to. */
		workqueueitemid: string;
		readonly FormattedValue: {
			/** The Power Automate Cloud Flow Id this log is linked to. */
			readonly cloudflowid: string;
			/** The Power Automate Cloud Flow run this log is linked to. */
			readonly cloudflowrunid: string;
			/** Unique identifier of the user who created the record. */
			readonly CreatedBy: string;
			/** Date and time when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the record. */
			readonly CreatedOnBehalfBy: string;
			/** The logged data. */
			readonly data: string;
			/** The Desktop Flow Id this log is linked to. */
			readonly desktopflowid: string;
			/** Unique identifier for entity instances */
			readonly flowlogId: string;
			readonly flowmachinegroupid: string;
			readonly flowmachineid: string;
			/** The Power Automate Desktop Flow Session this log belongs to. */
			readonly flowsessionid: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** The level of the log. */
			readonly level: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			/** The name of the log. */
			readonly Name: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** The id of the parent object. */
			readonly parentobjectid_flowmachinegroup: string;
			/** The id of the parent object. */
			readonly parentobjectid: string;
			/** The id of the parent object. */
			readonly parentobjectid_workqueue: string;
			/** Logical partition id. A logical partition consists of a set of records with same partition id. */
			readonly PartitionId: string;
			/** Time to live in seconds. */
			readonly TTLInSeconds: string;
			/** The type of the log. */
			readonly type: string;
			/** Version Number */
			readonly VersionNumber: string;
			/** The Work Queue this log is linked to. */
			readonly workqueueid: string;
			/** The Work Queue Item this log is linked to. */
			readonly workqueueitemid: string;
		}
	}
}
declare namespace OptionSet {
	namespace flowlog {
		enum level {
			/** 100000001 */
			Debug,
			/** 100000004 */
			Error,
			/** 100000002 */
			Info,
			/** 100000000 */
			Verbose,
			/** 100000003 */
			Warning
		}
		enum parentobjectidIdType {
		}
		enum type {
			/** 100000000 */
			CustomLog,
			/** 100000300 */
			DesktopFlowOrchestrationRepairSessionMismatchRequest,
			/** 100000301 */
			DesktopFlowOrchestrationRepairSessionMismatchResponse,
			/** 100000001 */
			DesktopFlowRunAction,
			/** 100000004 */
			DesktopFlowRunQueueAssigned,
			/** 100000005 */
			DesktopFlowRunQueueAssignFailed,
			/** 100000003 */
			DesktopFlowRunQueued,
			/** 100000002 */
			DesktopFlowRunQueuePriorityChanged,
			/** 100000007 */
			DesktopFlowRunQueueRunCompleted,
			/** 100000006 */
			DesktopFlowRunQueueRunConfirmed,
			/** 100000100 */
			DesktopFlowRunUnattendedRepairUISelectorRequest,
			/** 100000101 */
			DesktopFlowRunUnattendedRepairUISelectorResponse,
			/** 100000200 */
			WorkqueueFlowSession,
			/** 100000201 */
			WorkqueueProcessorLog
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