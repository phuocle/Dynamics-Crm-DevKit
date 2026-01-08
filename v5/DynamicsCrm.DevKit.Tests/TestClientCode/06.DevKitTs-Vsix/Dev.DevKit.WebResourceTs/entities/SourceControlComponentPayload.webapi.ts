/**
 * SourceControlComponentPayload.webapi.ts - SourceControlComponentPayload WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * SourceControlComponentPayload WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface ISourceControlComponentPayloadApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<ISourceControlComponentPayloadApi, 'FormattedValue'>]: string };
	/** Component id of the component */
	ComponentId: DevKit.Guid | null;
	/** Payload of the component */
	readonly ComponentPayload_name: string | null;
	/** Payload of the component in Git */
	readonly ComponentPayloadInGit_name: string | null;
	/** Unique identifier of the user who created the record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the record was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the record. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** This stores git hash id. */
	GitHashId: string | null;
	/** Sequence number of the import that created this record. */
	ImportSequenceNumber: number | null;
	/** This stores last sync hash id. */
	LastSyncHashId: string | null;
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
	/** List of solution identifiers where this component is present */
	ReferringSolutions: string | null;
	/** Unique identifier for entity instances */
	SourceControlComponentPayloadId: DevKit.Guid | null;
	/** Time to live in seconds. */
	TTLInSeconds: number | null;
	/** Version Number */
	readonly VersionNumber: number | null;
}

const SourceControlComponentPayloadFieldConfig: DevKit.IWebApiFieldConfigMap = {
	ComponentId: { logicalName: 'componentid' },
	ComponentPayload_name: { logicalName: 'componentpayload', readOnly: true },
	ComponentPayloadInGit_name: { logicalName: 'componentpayloadingit', readOnly: true },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	GitHashId: { logicalName: 'githashid' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	LastSyncHashId: { logicalName: 'lastsynchashid' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Name: { logicalName: 'name' },
	OverriddenCreatedOn_UtcDateOnly: { logicalName: 'overriddencreatedon', type: 'DateTime' },
	PartitionId: { logicalName: 'partitionid' },
	ReferringSolutions: { logicalName: 'referringsolutions' },
	SourceControlComponentPayloadId: { logicalName: 'sourcecontrolcomponentpayloadid' },
	TTLInSeconds: { logicalName: 'ttlinseconds', type: 'Integer' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * SourceControlComponentPayload WebApi class for early-bound style coding
 * Usage: const sourceControlComponentPayload = new SourceControlComponentPayloadApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class SourceControlComponentPayloadApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<ISourceControlComponentPayloadApi>(entity, 'sourcecontrolcomponentpayload', 'sourcecontrolcomponentpayloads', SourceControlComponentPayloadFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface SourceControlComponentPayloadApi extends ISourceControlComponentPayloadApi { }
