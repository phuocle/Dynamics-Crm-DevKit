//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	export class flowlogApi {
		/**
		* DynamicsCrm.DevKit flowlogApi
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
		/** The Power Automate Cloud Flow Id this log is linked to. */
		cloudflowid: string | null;
		/** The Power Automate Cloud Flow run this log is linked to. */
		cloudflowrunid: string | null;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string | null;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string | null;
		/** The logged data. */
		data: string | null;
		/** The Desktop Flow Id this log is linked to. */
		desktopflowid: string | null;
		/** Duration of the action in millisecond. */
		Duration: number | null;
		/** Unique identifier for entity instances */
		flowlogId: string | null;
		flowmachinegroupid: string | null;
		flowmachineid: string | null;
		/** The Power Automate Desktop Flow Session this log belongs to. */
		flowsessionid: string | null;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number | null;
		/** Array of the names of the inputs. */
		InputsLocalizedNames: string | null;
		/** The level of the log. */
		level: OptionSet.flowlog.level | null;
		/** Index of the log within the flow excution */
		LogIndex: number | null;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string | null;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string | null;
		/** The name of the log. */
		Name: string | null;
		/** Array of the names of the outputs. */
		OutputsLocalizedNames: string | null;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date | null;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		readonly OwnerId_systemuser: string | null;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		readonly OwnerId_team: string | null;
		/** Logical partition id. A logical partition consists of a set of records with same partition id. */
		PartitionId: string | null;
		/** Time to live in seconds. */
		TTLInSeconds: number | null;
		/** The type of the log. */
		type: OptionSet.flowlog.type | null;
		/** Version Number */
		readonly VersionNumber: number | null;
		/** The Work Queue this log is linked to. */
		workqueueid: string | null;
		/** The Work Queue Item this log is linked to. */
		workqueueitemid: string | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
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
			/** Duration of the action in millisecond. */
			readonly Duration: string;
			/** Unique identifier for entity instances */
			readonly flowlogId: string;
			readonly flowmachinegroupid: string;
			readonly flowmachineid: string;
			/** The Power Automate Desktop Flow Session this log belongs to. */
			readonly flowsessionid: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Array of the names of the inputs. */
			readonly InputsLocalizedNames: string;
			/** The level of the log. */
			readonly level: string;
			/** Index of the log within the flow excution */
			readonly LogIndex: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			/** The name of the log. */
			readonly Name: string;
			/** Array of the names of the outputs. */
			readonly OutputsLocalizedNames: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
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
			/** Debug = 100000001*/
			Debug = 100000001,
			/** Error = 100000004*/
			Error = 100000004,
			/** Info = 100000002*/
			Info = 100000002,
			/** Verbose = 100000000*/
			Verbose = 100000000,
			/** Warning = 100000003*/
			Warning = 100000003
		}
		enum parentobjectidIdType {
		}
		enum type {
			/** CuaHumanInTheLoopRequest = 100000403*/
			CuaHumanInTheLoopRequest = 100000403,
			/** CuaReasoningStep = 100000401*/
			CuaReasoningStep = 100000401,
			/** CuaStartSession = 100000400*/
			CuaStartSession = 100000400,
			/** CuaWaitOrCompleteSession = 100000402*/
			CuaWaitOrCompleteSession = 100000402,
			/** CustomLog = 100000000*/
			CustomLog = 100000000,
			/** DesktopFlowOrchestrationRepairSessionMismatchRequest = 100000300*/
			DesktopFlowOrchestrationRepairSessionMismatchRequest = 100000300,
			/** DesktopFlowOrchestrationRepairSessionMismatchResponse = 100000301*/
			DesktopFlowOrchestrationRepairSessionMismatchResponse = 100000301,
			/** DesktopFlowOrchestrationRepairWindowsIdentityIncorrectRequest = 100000310*/
			DesktopFlowOrchestrationRepairWindowsIdentityIncorrectRequest = 100000310,
			/** DesktopFlowOrchestrationRepairWindowsIdentityIncorrectResponse = 100000311*/
			DesktopFlowOrchestrationRepairWindowsIdentityIncorrectResponse = 100000311,
			/** DesktopFlowRunAction = 100000001*/
			DesktopFlowRunAction = 100000001,
			/** DesktopFlowRunQueueAssigned = 100000004*/
			DesktopFlowRunQueueAssigned = 100000004,
			/** DesktopFlowRunQueueAssignFailed = 100000005*/
			DesktopFlowRunQueueAssignFailed = 100000005,
			/** DesktopFlowRunQueued = 100000003*/
			DesktopFlowRunQueued = 100000003,
			/** DesktopFlowRunQueuePriorityChanged = 100000002*/
			DesktopFlowRunQueuePriorityChanged = 100000002,
			/** DesktopFlowRunQueueRunCompleted = 100000007*/
			DesktopFlowRunQueueRunCompleted = 100000007,
			/** DesktopFlowRunQueueRunConfirmed = 100000006*/
			DesktopFlowRunQueueRunConfirmed = 100000006,
			/** DesktopFlowRunUnattendedRepairUISelectorRequest = 100000100*/
			DesktopFlowRunUnattendedRepairUISelectorRequest = 100000100,
			/** DesktopFlowRunUnattendedRepairUISelectorResponse = 100000101*/
			DesktopFlowRunUnattendedRepairUISelectorResponse = 100000101,
			/** WorkqueueFlowSession = 100000200*/
			WorkqueueFlowSession = 100000200,
			/** WorkqueueProcessorLog = 100000201*/
			WorkqueueProcessorLog = 100000201
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