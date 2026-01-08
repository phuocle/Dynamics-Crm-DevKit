/**
 * sharedworkspaceaccesstoken2.webapi.ts - sharedworkspaceaccesstoken2 WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * sharedworkspaceaccesstoken2 WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface Isharedworkspaceaccesstoken2Api extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<Isharedworkspaceaccesstoken2Api, 'FormattedValue'>]: string };
	/** Unique identifier of the user who created the record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when entity was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the record. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Sequence number of the import that created this record. */
	ImportSequenceNumber: number | null;
	/** Unique identifier of the user who modified the record. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the record was modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who modified the record. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Logical object partition id to be used by an elastic table row. */
	ObjectPartitionId: string | null;
	/** Date and time that the record was migrated. */
	OverriddenCreatedOn_UtcDateOnly: Date | null;
	/** Logical partition id. A logical partition consists of a set of records with same partition id. */
	PartitionId: string | null;
	/** Unique identifier for entity instances */
	sharedworkspaceaccesstoken2Id: DevKit.Guid | null;
	/** Shared Workspace Id */
	SharedWorkspaceId: string | null;
	/** System User identifier */
	SystemUserId: string | null;
	/** The tenant where the workspace resides */
	TenantId: string | null;
	/** Access Token Id */
	TokenId: string | null;
	/** After the specified number of seconds the access token will be deleted */
	TTLInSeconds: number | null;
	/** Version Number */
	readonly VersionNumber: number | null;
}

const sharedworkspaceaccesstoken2FieldConfig: DevKit.IWebApiFieldConfigMap = {
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ObjectPartitionId: { logicalName: 'objectpartitionid' },
	OverriddenCreatedOn_UtcDateOnly: { logicalName: 'overriddencreatedon', type: 'DateTime' },
	PartitionId: { logicalName: 'partitionid' },
	sharedworkspaceaccesstoken2Id: { logicalName: 'sharedworkspaceaccesstoken2id' },
	SharedWorkspaceId: { logicalName: 'sharedworkspaceid' },
	SystemUserId: { logicalName: 'systemuserid' },
	TenantId: { logicalName: 'tenantid' },
	TokenId: { logicalName: 'tokenid' },
	TTLInSeconds: { logicalName: 'ttlinseconds', type: 'Integer' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * sharedworkspaceaccesstoken2 WebApi class for early-bound style coding
 * Usage: const sharedworkspaceaccesstoken2 = new sharedworkspaceaccesstoken2Api(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class sharedworkspaceaccesstoken2Api {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<Isharedworkspaceaccesstoken2Api>(entity, 'sharedworkspaceaccesstoken2', 'sharedworkspaceaccesstoken2s', sharedworkspaceaccesstoken2FieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface sharedworkspaceaccesstoken2Api extends Isharedworkspaceaccesstoken2Api { }
