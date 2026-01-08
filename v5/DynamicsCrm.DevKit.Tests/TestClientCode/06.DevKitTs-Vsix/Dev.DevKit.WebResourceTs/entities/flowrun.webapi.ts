/**
 * flowrun.webapi.ts - flowrun WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for flowrun
 * All fields return string representation of their values
 */
export interface IflowrunFormattedValue {
	readonly CallingProductResourceId: string;
	readonly CallingProductRunId: string;
	readonly CallingProductType: string;
	readonly ClientTrackingId: string;
	readonly ConversationId: string;
	readonly CreatedBy: string;
	readonly CreatedOn_UtcDateAndTime: string;
	readonly CreatedOnBehalfBy: string;
	readonly DurationInMs: string;
	readonly EndTime_UtcDateAndTime: string;
	readonly ErrorCode: string;
	readonly ErrorMessage: string;
	readonly flowrunId: string;
	readonly ImportSequenceNumber: string;
	readonly IsPrimary: string;
	readonly ModernFlowType: string;
	readonly ModifiedBy: string;
	readonly ModifiedOn_UtcDateAndTime: string;
	readonly ModifiedOnBehalfBy: string;
	readonly name: string;
	readonly OverriddenCreatedOn_UtcDateOnly: string;
	readonly OwnerId: string;
	readonly OwningBusinessUnit: string;
	readonly OwningTeam: string;
	readonly OwningUser: string;
	readonly parentRunId: string;
	readonly PartitionId: string;
	readonly resourceId: string;
	readonly StartTime_UtcDateAndTime: string;
	readonly Status: string;
	readonly TimeZoneRuleVersionNumber: string;
	readonly TriggerType: string;
	readonly TTLInSeconds: string;
	readonly UTCConversionTimeZoneCode: string;
	readonly VersionNumber: string;
	readonly Workflow: string;
	readonly WorkflowId: string;
}

/**
 * flowrun WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IflowrunApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: IflowrunFormattedValue;
	/** The resource id of the caller */
	CallingProductResourceId: string | null;
	/** The run id of the caller */
	CallingProductRunId: string | null;
	/** The type of the product that triggered the run */
	CallingProductType: string | null;
	/** The client tracking id of the run */
	ClientTrackingId: string | null;
	/** Copilot Studio Conversation id */
	ConversationId: string | null;
	/** Unique identifier of the user who created the record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the record was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the record. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Duration of the run in milliseconds */
	DurationInMs: number | null;
	/** The date and time at which the flow run ended. */
	EndTime_UtcDateAndTime: Date | null;
	/** Error code when flow run fails */
	ErrorCode: string | null;
	/** Error message when flow run fails */
	ErrorMessage: string | null;
	/** Unique identifier of flow run */
	flowrunId: DevKit.Guid | null;
	/** Sequence number of the import that created this record. */
	ImportSequenceNumber: number | null;
	/** Primary run record indicator */
	IsPrimary: number | null;
	/** Type of the Power Automate Cloud Flow. */
	ModernFlowType: number | null;
	/** Unique identifier of the user who modified the record. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the record was modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who modified the record. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** The name of the custom entity. */
	name: string | null;
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
	/** Unique identifier of the parent run that triggered this run */
	parentRunId: string | null;
	/** Logical partition id. A logical partition consists of a set of records with same partition id. */
	PartitionId: string | null;
	/** Unique identifier of the runtime resource */
	resourceId: string | null;
	/** The date and time at which the flow run started */
	StartTime_UtcDateAndTime: Date | null;
	/** Status of the flow run */
	Status: string | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** Type of trigger in the flow run */
	TriggerType: string | null;
	/** Time to live in seconds. */
	TTLInSeconds: number | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
	/** Version Number */
	readonly VersionNumber: number | null;
	/** Unique identifier of the workflow with which the flow run is associated. */
	Workflow: DevKit.Guid | null;
	/** Unique identifier of the workflow associated with this run */
	WorkflowId: string | null;
}

const flowrunFieldConfig: DevKit.IWebApiFieldConfigMap = {
	CallingProductResourceId: { logicalName: 'callingproductresourceid' },
	CallingProductRunId: { logicalName: 'callingproductrunid' },
	CallingProductType: { logicalName: 'callingproducttype' },
	ClientTrackingId: { logicalName: 'clienttrackingid' },
	ConversationId: { logicalName: 'conversationid' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	DurationInMs: { logicalName: 'duration', type: 'Integer' },
	EndTime_UtcDateAndTime: { logicalName: 'endtime', type: 'DateTime' },
	ErrorCode: { logicalName: 'errorcode' },
	ErrorMessage: { logicalName: 'errormessage' },
	flowrunId: { logicalName: 'flowrunid' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	IsPrimary: { logicalName: 'isprimary', type: 'Integer' },
	ModernFlowType: { logicalName: 'modernflowtype', type: 'Integer' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	name: { logicalName: 'name' },
	OverriddenCreatedOn_UtcDateOnly: { logicalName: 'overriddencreatedon', type: 'DateTime' },
	OwnerId: { schemaName: 'OwnerId', logicalName: '_ownerid_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OwningBusinessUnit: { schemaName: 'OwningBusinessUnit', logicalName: '_owningbusinessunit_value', readOnly: true, entityCollectionName: 'businessunits', entityLogicalName: 'businessunit' },
	OwningTeam: { schemaName: 'OwningTeam', logicalName: '_owningteam_value', readOnly: true, entityCollectionName: 'teams', entityLogicalName: 'team' },
	OwningUser: { schemaName: 'OwningUser', logicalName: '_owninguser_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	parentRunId: { logicalName: 'parentrunid' },
	PartitionId: { logicalName: 'partitionid' },
	resourceId: { logicalName: 'resourceid' },
	StartTime_UtcDateAndTime: { logicalName: 'starttime', type: 'DateTime' },
	Status: { logicalName: 'status' },
	TimeZoneRuleVersionNumber: { logicalName: 'timezoneruleversionnumber', type: 'Integer' },
	TriggerType: { logicalName: 'triggertype' },
	TTLInSeconds: { logicalName: 'ttlinseconds', type: 'Integer' },
	UTCConversionTimeZoneCode: { logicalName: 'utcconversiontimezonecode', type: 'Integer' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
	Workflow: { schemaName: 'Workflow', logicalName: '_workflow_value', entityCollectionName: 'workflows', entityLogicalName: 'workflow' },
	WorkflowId: { logicalName: 'workflowid' },
};

/**
 * flowrun WebApi class for early-bound style coding
 * Usage: const flowrun = new flowrunApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class flowrunApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IflowrunApi>(entity, 'flowrun', 'flowruns', flowrunFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface flowrunApi extends IflowrunApi { }
