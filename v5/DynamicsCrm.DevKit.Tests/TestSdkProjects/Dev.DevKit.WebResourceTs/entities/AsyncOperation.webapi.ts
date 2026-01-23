/**
 * AsyncOperation.webapi.ts - AsyncOperation WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * AsyncOperation WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IAsyncOperationApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<IAsyncOperationApi, 'FormattedValue'>]: string };
	/** Unique identifier of the system job. */
	AsyncOperationId: DevKit.Guid | null;
	/** The breadcrumb record ID. */
	BreadcrumbId: DevKit.Guid | null;
	/** The origin of the caller. */
	CallerOrigin: string | null;
	/** Date and time when the system job was completed. */
	readonly CompletedOn_UtcDateAndTime: Date | null;
	/** Unique identifier used to correlate between multiple SDK requests and system jobs. */
	CorrelationId: DevKit.Guid | null;
	/** Last time the correlation depth was updated. */
	CorrelationUpdatedTime_UtcDateAndTime: Date | null;
	/** Unique identifier of the user who created the system job. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the system job was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the asyncoperation. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Unstructured data associated with the system job. */
	Data: string | null;
	/** File Id for the blob url used for file storage. */
	readonly DataBlobId_name: string | null;
	/** Execution of all operations with the same dependency token is serialized. */
	DependencyToken: string | null;
	/** Number of SDK calls made since the first call. */
	Depth: number | null;
	/** Error code returned from a canceled system job. */
	readonly ErrorCode: number | null;
	/** Time that the system job has taken to execute. */
	readonly ExecutionTimeSpan: number | null;
	/** The datetime when the Expander pipeline started. */
	ExpanderStartTime_UtcDateAndTime: Date | null;
	/** Message provided by the system job. */
	FriendlyMessage: string | null;
	/** Unique identifier of the host that owns this system job. */
	HostId: string | null;
	/** Indicates that the system job is waiting for an event. */
	readonly IsWaitingForEvent: boolean | null;
	/** Message related to the system job. */
	readonly Message: string | null;
	/** Name of the message that started this system job. */
	MessageName: string | null;
	/** Unique identifier of the user who last modified the system job. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the system job was last modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who last modified the asyncoperation. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Name of the system job. */
	Name: string | null;
	/** Type of the system job. */
	OperationType: number | null;
	/** Unique identifier of the user or team who owns the system job. */
	OwnerId: DevKit.Guid | null;
	/** Unique identifier of the business unit that owns the system job. */
	readonly OwningBusinessUnit: DevKit.Guid | null;
	/** Unique identifier of the owning extension with which the system job is associated. */
	OwningExtensionId: DevKit.Guid | null;
	/** Unique identifier of the team who owns the record. */
	readonly OwningTeam: DevKit.Guid | null;
	/** Unique identifier of the user who owns the record. */
	readonly OwningUser: DevKit.Guid | null;
	ParentPluginExecutionId: DevKit.Guid | null;
	/** Indicates whether the system job should run only after the specified date and time. */
	PostponeUntil_UtcDateAndTime: Date | null;
	/** Pattern of the system job's recurrence. */
	RecurrencePattern: string | null;
	/** Starting time in UTC for the recurrence pattern. */
	RecurrenceStartTime_UtcDateOnly: Date | null;
	/** Unique identifier of the object with which the system job is associated. */
	RegardingObjectId: DevKit.Guid | null;
	/** Unique identifier of the request that generated the system job. */
	RequestId: DevKit.Guid | null;
	/** Retain job history. */
	RetainJobHistory: boolean | null;
	/** Number of times to retry the system job. */
	readonly RetryCount: number | null;
	/** Root execution context of the job that trigerred async job. */
	RootExecutionContext: string | null;
	/** Order in which operations were submitted. */
	readonly Sequence: number | null;
	/** Date and time when the system job was started. */
	readonly StartedOn_UtcDateAndTime: Date | null;
	/** Status of the system job. */
	StateCode: number | null;
	/** Reason for the status of the system job. */
	StatusCode: number | null;
	/** The Subtype of the Async Job */
	readonly Subtype: number | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
	/** Unique identifier of the workflow activation related to the system job. */
	WorkflowActivationId: DevKit.Guid | null;
	/** Indicates whether the workflow instance was blocked when it was persisted. */
	readonly WorkflowIsBlocked: boolean | null;
	/** Name of a workflow stage. */
	readonly WorkflowStageName: string | null;
	/** State of the workflow job. */
	readonly WorkflowState: string | null;
	/** The workload name. */
	Workload: string | null;
}

const AsyncOperationFieldConfig: DevKit.IWebApiFieldConfigMap = {
	AsyncOperationId: { logicalName: 'asyncoperationid' },
	BreadcrumbId: { logicalName: 'breadcrumbid' },
	CallerOrigin: { logicalName: 'callerorigin' },
	CompletedOn_UtcDateAndTime: { logicalName: 'completedon', readOnly: true, type: 'DateTime' },
	CorrelationId: { logicalName: 'correlationid' },
	CorrelationUpdatedTime_UtcDateAndTime: { logicalName: 'correlationupdatedtime', type: 'DateTime' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Data: { logicalName: 'data' },
	DataBlobId_name: { logicalName: 'datablobid', readOnly: true },
	DependencyToken: { logicalName: 'dependencytoken' },
	Depth: { logicalName: 'depth', type: 'Integer' },
	ErrorCode: { logicalName: 'errorcode', readOnly: true, type: 'Integer' },
	ExecutionTimeSpan: { logicalName: 'executiontimespan', readOnly: true, type: 'Number' },
	ExpanderStartTime_UtcDateAndTime: { logicalName: 'expanderstarttime', type: 'DateTime' },
	FriendlyMessage: { logicalName: 'friendlymessage' },
	HostId: { logicalName: 'hostid' },
	IsWaitingForEvent: { logicalName: 'iswaitingforevent', readOnly: true, type: 'Boolean' },
	Message: { logicalName: 'message', readOnly: true },
	MessageName: { logicalName: 'messagename' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Name: { logicalName: 'name' },
	OperationType: { logicalName: 'operationtype', type: 'Integer' },
	OwnerId: { schemaName: 'OwnerId', logicalName: '_ownerid_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OwningBusinessUnit: { schemaName: 'OwningBusinessUnit', logicalName: '_owningbusinessunit_value', readOnly: true, entityCollectionName: 'businessunits', entityLogicalName: 'businessunit' },
	OwningExtensionId: { schemaName: 'OwningExtensionId', logicalName: '_owningextensionid_value', entityCollectionName: 'sdkmessageprocessingsteps', entityLogicalName: 'sdkmessageprocessingstep' },
	OwningTeam: { schemaName: 'OwningTeam', logicalName: '_owningteam_value', readOnly: true, entityCollectionName: 'teams', entityLogicalName: 'team' },
	OwningUser: { schemaName: 'OwningUser', logicalName: '_owninguser_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ParentPluginExecutionId: { logicalName: 'parentpluginexecutionid' },
	PostponeUntil_UtcDateAndTime: { logicalName: 'postponeuntil', type: 'DateTime' },
	RecurrencePattern: { logicalName: 'recurrencepattern' },
	RecurrenceStartTime_UtcDateOnly: { logicalName: 'recurrencestarttime', type: 'DateTime' },
	RegardingObjectId: { schemaName: 'RegardingObjectId', logicalName: '_regardingobjectid_value', entityCollectionName: 'accounts', entityLogicalName: 'account' },
	RequestId: { logicalName: 'requestid' },
	RetainJobHistory: { logicalName: 'retainjobhistory', type: 'Boolean' },
	RetryCount: { logicalName: 'retrycount', readOnly: true, type: 'Integer' },
	RootExecutionContext: { logicalName: 'rootexecutioncontext' },
	Sequence: { logicalName: 'sequence', readOnly: true, type: 'Integer' },
	StartedOn_UtcDateAndTime: { logicalName: 'startedon', readOnly: true, type: 'DateTime' },
	StateCode: { logicalName: 'statecode', type: 'Integer' },
	StatusCode: { logicalName: 'statuscode', type: 'Integer' },
	Subtype: { logicalName: 'subtype', readOnly: true, type: 'Integer' },
	TimeZoneRuleVersionNumber: { logicalName: 'timezoneruleversionnumber', type: 'Integer' },
	UTCConversionTimeZoneCode: { logicalName: 'utcconversiontimezonecode', type: 'Integer' },
	WorkflowActivationId: { schemaName: 'WorkflowActivationId', logicalName: '_workflowactivationid_value', entityCollectionName: 'workflows', entityLogicalName: 'workflow' },
	WorkflowIsBlocked: { logicalName: 'workflowisblocked', readOnly: true, type: 'Boolean' },
	WorkflowStageName: { logicalName: 'workflowstagename', readOnly: true },
	WorkflowState: { logicalName: 'workflowstate', readOnly: true },
	Workload: { logicalName: 'workload' },
};

/**
 * AsyncOperation WebApi class for early-bound style coding
 * Usage: const asyncOperation = new AsyncOperationApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class AsyncOperationApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IAsyncOperationApi>(entity, 'asyncoperation', 'asyncoperations', AsyncOperationFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface AsyncOperationApi extends IAsyncOperationApi { }
