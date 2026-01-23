/**
 * agenttask.webapi.ts - agenttask WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * agenttask WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IagenttaskApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<IagenttaskApi, 'FormattedValue'>]: string };
	/** Lookup to Agent Feed Item */
	AgentFeedItemId: DevKit.Guid | null;
	/** Agentic Scenario */
	agenticscenario: DevKit.Guid | null;
	/** Unique identifier for entity instances */
	agenttaskId: DevKit.Guid | null;
	/** Assigned To */
	AssignedTo: string | null;
	/** Context */
	Context: string | null;
	/** Unique identifier of the user who created the record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the record was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the record. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Data */
	Data: string | null;
	/** Sequence number of the import that created this record. */
	ImportSequenceNumber: number | null;
	/** Unique identifier of the user who modified the record. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the record was modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who modified the record. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
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
	/** Logical partition id. A logical partition consists of a set of records with same partition id. */
	PartitionId: string | null;
	/** Priority */
	Priority: string | null;
	/** Requested By */
	RequestedBy: string | null;
	/** State */
	State: string | null;
	/** Title */
	Title: string | null;
	/** Time to live in seconds. */
	TTLInSeconds: number | null;
	/** Type */
	Type: string | null;
	/** Version Number */
	readonly VersionNumber: number | null;
}

const agenttaskFieldConfig: DevKit.IWebApiFieldConfigMap = {
	AgentFeedItemId: { schemaName: 'AgentFeedItemId', logicalName: '_agentfeeditemid_value', entityCollectionName: 'agentfeeditems', entityLogicalName: 'agentfeeditem' },
	agenticscenario: { schemaName: 'agenticscenario', logicalName: '_agenticscenario_value', entityCollectionName: 'agenticscenarios', entityLogicalName: 'agenticscenario' },
	agenttaskId: { logicalName: 'agenttaskid' },
	AssignedTo: { logicalName: 'assignedto' },
	Context: { logicalName: 'context' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Data: { logicalName: 'data' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OverriddenCreatedOn_UtcDateOnly: { logicalName: 'overriddencreatedon', type: 'DateTime' },
	OwnerId: { schemaName: 'OwnerId', logicalName: '_ownerid_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OwningBusinessUnit: { schemaName: 'OwningBusinessUnit', logicalName: '_owningbusinessunit_value', readOnly: true, entityCollectionName: 'businessunits', entityLogicalName: 'businessunit' },
	OwningTeam: { schemaName: 'OwningTeam', logicalName: '_owningteam_value', readOnly: true, entityCollectionName: 'teams', entityLogicalName: 'team' },
	OwningUser: { schemaName: 'OwningUser', logicalName: '_owninguser_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	PartitionId: { logicalName: 'partitionid' },
	Priority: { logicalName: 'priority' },
	RequestedBy: { logicalName: 'requestedby' },
	State: { logicalName: 'state' },
	Title: { logicalName: 'title' },
	TTLInSeconds: { logicalName: 'ttlinseconds', type: 'Integer' },
	Type: { logicalName: 'type' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * agenttask WebApi class for early-bound style coding
 * Usage: const agenttask = new agenttaskApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class agenttaskApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IagenttaskApi>(entity, 'agenttask', 'agenttasks', agenttaskFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface agenttaskApi extends IagenttaskApi { }
