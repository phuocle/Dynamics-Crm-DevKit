/**
 * componentchangesetpayload.webapi.ts - componentchangesetpayload WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * componentchangesetpayload WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IcomponentchangesetpayloadApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<IcomponentchangesetpayloadApi, 'FormattedValue'>]: string };
	/** Unique identifier for entity instances */
	componentchangesetpayloadId: DevKit.Guid | null;
	/** Unique identifier of the user who created the record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the record was created. */
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
	/** Name */
	Name: string | null;
	/** Date and time that the record was migrated. */
	OverriddenCreatedOn_UtcDateOnly: Date | null;
	/** Logical partition id. A logical partition consists of a set of records with same partition id. */
	PartitionId: string | null;
	/** Payload */
	readonly payload_name: string | null;
	/** Time to live in seconds. */
	TTLInSeconds: number | null;
	/** Version Number */
	readonly VersionNumber: number | null;
}

const componentchangesetpayloadFieldConfig: DevKit.IWebApiFieldConfigMap = {
	componentchangesetpayloadId: { logicalName: 'componentchangesetpayloadid' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Name: { logicalName: 'name' },
	OverriddenCreatedOn_UtcDateOnly: { logicalName: 'overriddencreatedon', type: 'DateTime' },
	PartitionId: { logicalName: 'partitionid' },
	payload_name: { logicalName: 'payload', readOnly: true },
	TTLInSeconds: { logicalName: 'ttlinseconds', type: 'Integer' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * componentchangesetpayload WebApi class for early-bound style coding
 * Usage: const componentchangesetpayload = new componentchangesetpayloadApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class componentchangesetpayloadApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IcomponentchangesetpayloadApi>(entity, 'componentchangesetpayload', 'componentchangesetpayloads', componentchangesetpayloadFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface componentchangesetpayloadApi extends IcomponentchangesetpayloadApi { }
