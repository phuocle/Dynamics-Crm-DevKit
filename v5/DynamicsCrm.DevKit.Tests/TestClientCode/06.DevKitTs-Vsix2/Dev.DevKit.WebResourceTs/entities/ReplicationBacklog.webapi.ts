/**
 * ReplicationBacklog.webapi.ts - ReplicationBacklog WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * ReplicationBacklog WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IReplicationBacklogApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<IReplicationBacklogApi, 'FormattedValue'>]: string };
	/** Additional data related to the replication backlog entry. For internal use only. */
	readonly Data: string | null;
	/** Unique identifier of the replication backlog entry. */
	readonly ReplicationBacklogId: DevKit.Guid | null;
	/** The type of replication backlog. */
	readonly ReplicationBacklogType: number | null;
	/** For internal use only. */
	readonly TargetDatacenterId: DevKit.Guid | null;
	/** Unique identifier of the target object */
	readonly TargetObjectId: DevKit.Guid | null;
}

const ReplicationBacklogFieldConfig: DevKit.IWebApiFieldConfigMap = {
	Data: { logicalName: 'data', readOnly: true },
	ReplicationBacklogId: { logicalName: 'replicationbacklogid', readOnly: true },
	ReplicationBacklogType: { logicalName: 'replicationbacklogtype', readOnly: true, type: 'Integer' },
	TargetDatacenterId: { logicalName: 'targetdatacenterid', readOnly: true },
	TargetObjectId: { schemaName: 'TargetObjectId', logicalName: '_targetobjectid_value', readOnly: true, entityCollectionName: 'reports', entityLogicalName: 'report' },
};

/**
 * ReplicationBacklog WebApi class for early-bound style coding
 * Usage: const replicationBacklog = new ReplicationBacklogApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class ReplicationBacklogApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IReplicationBacklogApi>(entity, 'replicationbacklog', 'replicationbacklogs', ReplicationBacklogFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface ReplicationBacklogApi extends IReplicationBacklogApi { }
