/**
 * SourceControlComponent.webapi.ts - SourceControlComponent WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for SourceControlComponent
 * All fields return string representation of their values
 */
export interface ISourceControlComponentFormattedValue {
	readonly Action: string;
	readonly ComponentDisplayName: string;
	readonly ComponentId: string;
	readonly ComponentPath: string;
	readonly ComponentType: string;
	readonly ComponentTypeName: string;
	readonly CreatedBy: string;
	readonly CreatedOn_UtcDateAndTime: string;
	readonly CreatedOnBehalfBy: string;
	readonly ImportSequenceNumber: string;
	readonly IsCommitted: string;
	readonly ModifiedBy: string;
	readonly ModifiedOn_UtcDateAndTime: string;
	readonly ModifiedOnBehalfBy: string;
	readonly Name: string;
	readonly OverriddenCreatedOn_UtcDateOnly: string;
	readonly PartitionId: string;
	readonly SolutionComponentState: string;
	readonly SourceControlComponentId: string;
	readonly SourceControlComponentPayloadId: string;
	readonly TTLInSeconds: string;
	readonly UserAction: string;
	readonly VersionNumber: string;
}

/**
 * SourceControlComponent WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface ISourceControlComponentApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: ISourceControlComponentFormattedValue;
	/** Describes an action after syncing from git. */
	Action: number | null;
	/** Component Display Name */
	ComponentDisplayName: string | null;
	/** Component id of the component */
	ComponentId: DevKit.Guid | null;
	/** The path to the component */
	ComponentPath: string | null;
	/** Component type of the solution aware components */
	ComponentType: number | null;
	/** Component type Name of the solution aware components */
	ComponentTypeName: string | null;
	/** Unique identifier of the user who created the record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the record was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the record. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Sequence number of the import that created this record. */
	ImportSequenceNumber: number | null;
	/** Is component committed to the Git */
	IsCommitted: boolean | null;
	/** Unique identifier of the user who modified the record. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the record was modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who modified the record. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Name */
	Name: string | null;
	/** Date and time that the record was migrated. */
	OverriddenCreatedOn_UtcDateOnly: Date | null;
	/** Logical partition id. A logical partition consists of a set of records with same partition id. */
	PartitionId: string | null;
	/** Solution Component State */
	SolutionComponentState: number | null;
	/** Unique identifier for entity instances */
	SourceControlComponentId: DevKit.Guid | null;
	/** Unique identifier of Source Control Component Payload */
	SourceControlComponentPayloadId: DevKit.Guid | null;
	/** Time to live in seconds. */
	TTLInSeconds: number | null;
	/** Describes a user action to resolve a conflict. */
	UserAction: number | null;
	/** Version Number */
	readonly VersionNumber: number | null;
}

const SourceControlComponentFieldConfig: DevKit.IWebApiFieldConfigMap = {
	Action: { logicalName: 'action', type: 'Integer' },
	ComponentDisplayName: { logicalName: 'componentdisplayname' },
	ComponentId: { logicalName: 'componentid' },
	ComponentPath: { logicalName: 'componentpath' },
	ComponentType: { logicalName: 'componenttype', type: 'Integer' },
	ComponentTypeName: { logicalName: 'componenttypename' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	IsCommitted: { logicalName: 'iscommitted', type: 'Boolean' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Name: { logicalName: 'name' },
	OverriddenCreatedOn_UtcDateOnly: { logicalName: 'overriddencreatedon', type: 'DateTime' },
	PartitionId: { logicalName: 'partitionid' },
	SolutionComponentState: { logicalName: 'solutioncomponentstate', type: 'Integer' },
	SourceControlComponentId: { logicalName: 'sourcecontrolcomponentid' },
	SourceControlComponentPayloadId: { schemaName: 'SourceControlComponentPayloadId', logicalName: '_sourcecontrolcomponentpayloadid_value', entityCollectionName: 'sourcecontrolcomponentpayloads', entityLogicalName: 'sourcecontrolcomponentpayload' },
	TTLInSeconds: { logicalName: 'ttlinseconds', type: 'Integer' },
	UserAction: { logicalName: 'useraction', type: 'Integer' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * SourceControlComponent WebApi class for early-bound style coding
 * Usage: const sourceControlComponent = new SourceControlComponentApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class SourceControlComponentApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<ISourceControlComponentApi>(entity, 'sourcecontrolcomponent', 'sourcecontrolcomponents', SourceControlComponentFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface SourceControlComponentApi extends ISourceControlComponentApi { }
