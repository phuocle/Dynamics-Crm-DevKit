/**
 * flowsession.webapi.ts - flowsession WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for flowsession
 * All fields return string representation of their values
 */
export interface IflowsessionFormattedValue {
	readonly AdditionalContext_name: string;
	readonly CallbackUrl: string;
	readonly ClientTrackingId: string;
	readonly CompletedOn_UtcDateAndTime: string;
	readonly ConnectionId: string;
	readonly Context: string;
	readonly CorrelationId: string;
	readonly CreatedBy: string;
	readonly CreatedOn_UtcDateAndTime: string;
	readonly CreatedOnBehalfBy: string;
	readonly Credentials: string;
	readonly ErrorCode: string;
	readonly ErrorDetails: string;
	readonly ErrorInnerError: string;
	readonly ErrorMessage: string;
	readonly flowsessionId: string;
	readonly Gateway: string;
	readonly ImportSequenceNumber: string;
	readonly Inputs_name: string;
	readonly MachineGroupId: string;
	readonly MachineId: string;
	readonly MachinePercentCpuUsage: string;
	readonly MachinePercentRamUsage: string;
	readonly MachineRamUsage: string;
	readonly ModifiedBy: string;
	readonly ModifiedOn_UtcDateAndTime: string;
	readonly ModifiedOnBehalfBy: string;
	readonly Name: string;
	readonly Outputs_name: string;
	readonly OverriddenCreatedOn_UtcDateOnly: string;
	readonly OwnerId: string;
	readonly OwningBusinessUnit: string;
	readonly OwningTeam: string;
	readonly OwningUser: string;
	readonly ParentCloudFlowRunSequenceId: string;
	readonly ParentDesktopFlowRunGuid: string;
	readonly ParentDesktopFlowRunId: string;
	readonly ParentWorkflowId: string;
	readonly ProcessVersion: string;
	readonly RegardingObjectId: string;
	readonly RunDetails: string;
	readonly RunDuration: string;
	readonly RunExecutionDuration: string;
	readonly RunMode: string;
	readonly RunSessionMode: string;
	readonly RunWaitDuration: string;
	readonly SessionUsername: string;
	readonly SessionUserSID: string;
	readonly StartedOn_UtcDateAndTime: string;
	readonly statecode: string;
	readonly statuscode: string;
	readonly SubCategory: string;
	readonly TimeZoneRuleVersionNumber: string;
	readonly TriggerType: string;
	readonly UTCConversionTimeZoneCode: string;
	readonly VersionNumber: string;
}

/**
 * flowsession WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IflowsessionApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: IflowsessionFormattedValue;
	/** Additional context about flow session. */
	readonly AdditionalContext_name: string | null;
	/** URL that will be called once the flow session is complete. */
	CallbackUrl: string | null;
	/** The client tracking id of the run */
	ClientTrackingId: string | null;
	/** The date and time at which the flow session was completed. */
	CompletedOn_UtcDateAndTime: Date | null;
	/** The id of the connection used in the Desktop Flow run. */
	ConnectionId: string | null;
	/** Context about flow session. */
	Context: string | null;
	/** Unique identifier used to correlate between multiple SDK requests and flow executions. */
	CorrelationId: string | null;
	/** Unique identifier of the user who created the record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the record was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the record. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Credentials related to this run. */
	Credentials: string | null;
	/** Error code describing the failure in flow session execution. */
	ErrorCode: string | null;
	/** Details of the failure in flow session execution. */
	ErrorDetails: string | null;
	/** Specific information about the failure in flow session execution. */
	ErrorInnerError: string | null;
	/** Message describing the failure in flow session execution. */
	ErrorMessage: string | null;
	/** Unique identifier for entity instances */
	flowsessionId: DevKit.Guid | null;
	/** The name of the gateway used. */
	Gateway: string | null;
	/** Sequence number of the import that created this record. */
	ImportSequenceNumber: number | null;
	/** Inputs provided for the flow session execution. */
	readonly Inputs_name: string | null;
	/** Flow Machine Group */
	MachineGroupId: DevKit.Guid | null;
	/** Flow Machine */
	MachineId: DevKit.Guid | null;
	/** The percentage of CPU utilization by the machine */
	MachinePercentCpuUsage: number | null;
	/** The percentage of RAM utilization by the machine */
	MachinePercentRamUsage: number | null;
	/** The machine RAM usage in Mo */
	MachineRamUsage: number | null;
	/** Unique identifier of the user who modified the record. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the record was modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who modified the record. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** The name of the custom entity. */
	Name: string | null;
	/** Outputs generated by the flow session execution. */
	readonly Outputs_name: string | null;
	/** Date and time that the record was migrated. */
	OverriddenCreatedOn_UtcDateOnly: Date | null;
	/** Owner Id */
	OwnerId: DevKit.Guid | null;
	/** Unique identifier for the business unit that owns the record */
	readonly OwningBusinessUnit: DevKit.Guid | null;
	/** Unique identifier for the team that owns the record. */
	readonly OwningTeam: DevKit.Guid | null;
	/** Unique identifier for the user that owns the record. */
	readonly OwningUser: DevKit.Guid | null;
	/** The sequence id of the parent cloud flow run, only used when the Desktop Flow was run by a cloud flow. */
	ParentCloudFlowRunSequenceId: string | null;
	/** The run id of the parent desktop flow run, only used when the Desktop Flow was run by a desktop flow. Used instead of Parent Desktop Flow Run Id when the field is available. Same purpose but keeping only the guid instead of doing a lookup. */
	ParentDesktopFlowRunGuid: DevKit.Guid | null;
	/** The run id of the parent desktop flow run, only used when the Desktop Flow was run by a desktop flow. */
	ParentDesktopFlowRunId: DevKit.Guid | null;
	/** Id of the parent workflow, cloud flow or desktop flow. */
	ParentWorkflowId: string | null;
	/** The version of the process with which the flow session is associated. */
	ProcessVersion: string | null;
	/** Unique identifier of the process with which the flow session is associated. */
	RegardingObjectId: DevKit.Guid | null;
	/** Details about the run. */
	RunDetails: string | null;
	/** Duration of the run. */
	RunDuration: number | null;
	/** Duration of the run execution. */
	RunExecutionDuration: number | null;
	/** Indicates the run mode of the desktop flow run. */
	RunMode: number | null;
	/** Indicates the run session mode of the desktop flow run. */
	RunSessionMode: number | null;
	/** Time the run spent waiting. */
	RunWaitDuration: number | null;
	/** The username used in the Desktop Flow run. */
	SessionUsername: string | null;
	/** The SID of the user used in the Desktop Flow run. */
	SessionUserSID: string | null;
	/** The date and time at which the flow session was started. */
	StartedOn_UtcDateAndTime: Date | null;
	/** Status of the FlowSession */
	statecode: number | null;
	/** Reason for the status of the FlowSession */
	statuscode: number | null;
	/** Sub-Category of the flow session. */
	SubCategory: number | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** Indicates the type of trigger used to run the desktop flow. */
	TriggerType: number | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
	/** Version Number */
	readonly VersionNumber: number | null;
}

const flowsessionFieldConfig: DevKit.IWebApiFieldConfigMap = {
	AdditionalContext_name: { logicalName: 'additionalcontext', readOnly: true },
	CallbackUrl: { logicalName: 'callbackurl' },
	ClientTrackingId: { logicalName: 'clienttrackingid' },
	CompletedOn_UtcDateAndTime: { logicalName: 'completedon', type: 'DateTime' },
	ConnectionId: { logicalName: 'connectionid' },
	Context: { logicalName: 'context' },
	CorrelationId: { logicalName: 'correlationid' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Credentials: { logicalName: 'credentials' },
	ErrorCode: { logicalName: 'errorcode' },
	ErrorDetails: { logicalName: 'errordetails' },
	ErrorInnerError: { logicalName: 'errorinnererror' },
	ErrorMessage: { logicalName: 'errormessage' },
	flowsessionId: { logicalName: 'flowsessionid' },
	Gateway: { logicalName: 'gateway' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	Inputs_name: { logicalName: 'inputs', readOnly: true },
	MachineGroupId: { schemaName: 'MachineGroupId', logicalName: '_machinegroupid_value', entityCollectionName: 'flowmachinegroups', entityLogicalName: 'flowmachinegroup' },
	MachineId: { schemaName: 'MachineId', logicalName: '_machineid_value', entityCollectionName: 'flowmachines', entityLogicalName: 'flowmachine' },
	MachinePercentCpuUsage: { logicalName: 'machinepercentcpuusage', type: 'Number' },
	MachinePercentRamUsage: { logicalName: 'machinepercentramusage', type: 'Number' },
	MachineRamUsage: { logicalName: 'machineramusage', type: 'Integer' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Name: { logicalName: 'name' },
	Outputs_name: { logicalName: 'outputs', readOnly: true },
	OverriddenCreatedOn_UtcDateOnly: { logicalName: 'overriddencreatedon', type: 'DateTime' },
	OwnerId: { schemaName: 'OwnerId', logicalName: '_ownerid_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OwningBusinessUnit: { schemaName: 'OwningBusinessUnit', logicalName: '_owningbusinessunit_value', readOnly: true, entityCollectionName: 'businessunits', entityLogicalName: 'businessunit' },
	OwningTeam: { schemaName: 'OwningTeam', logicalName: '_owningteam_value', readOnly: true, entityCollectionName: 'teams', entityLogicalName: 'team' },
	OwningUser: { schemaName: 'OwningUser', logicalName: '_owninguser_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ParentCloudFlowRunSequenceId: { logicalName: 'parentcloudflowrunsequenceid' },
	ParentDesktopFlowRunGuid: { logicalName: 'parentdesktopflowrunguid' },
	ParentDesktopFlowRunId: { schemaName: 'ParentDesktopFlowRunId', logicalName: '_parentdesktopflowrunid_value', entityCollectionName: 'flowsessions', entityLogicalName: 'flowsession' },
	ParentWorkflowId: { logicalName: 'parentworkflowid' },
	ProcessVersion: { logicalName: 'processversion' },
	RegardingObjectId: { schemaName: 'RegardingObjectId', logicalName: '_regardingobjectid_value', entityCollectionName: 'workflows', entityLogicalName: 'workflow' },
	RunDetails: { logicalName: 'rundetails' },
	RunDuration: { logicalName: 'runduration', type: 'Integer' },
	RunExecutionDuration: { logicalName: 'runexecutionduration', type: 'Integer' },
	RunMode: { logicalName: 'runmode', type: 'Integer' },
	RunSessionMode: { logicalName: 'runsessionmode', type: 'Integer' },
	RunWaitDuration: { logicalName: 'runwaitduration', type: 'Integer' },
	SessionUsername: { logicalName: 'sessionusername' },
	SessionUserSID: { logicalName: 'sessionusersid' },
	StartedOn_UtcDateAndTime: { logicalName: 'startedon', type: 'DateTime' },
	statecode: { logicalName: 'statecode', type: 'Integer' },
	statuscode: { logicalName: 'statuscode', type: 'Integer' },
	SubCategory: { logicalName: 'subcategory', type: 'Integer' },
	TimeZoneRuleVersionNumber: { logicalName: 'timezoneruleversionnumber', type: 'Integer' },
	TriggerType: { logicalName: 'triggertype', type: 'Integer' },
	UTCConversionTimeZoneCode: { logicalName: 'utcconversiontimezonecode', type: 'Integer' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * flowsession WebApi class for early-bound style coding
 * Usage: const flowsession = new flowsessionApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class flowsessionApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IflowsessionApi>(entity, 'flowsession', 'flowsessions', flowsessionFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface flowsessionApi extends IflowsessionApi { }
