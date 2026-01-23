/**
 * cardstateitem.webapi.ts - cardstateitem WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * cardstateitem WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IcardstateitemApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<IcardstateitemApi, 'FormattedValue'>]: string };
	/** Cache */
	Cache: string | null;
	/** Card ID */
	CardId: string | null;
	/** Card Instance ID */
	CardInstanceId: string | null;
	/** Unique identifier for entity instances */
	cardstateitemId: DevKit.Guid | null;
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
	/** The name of the custom entity. */
	name: string | null;
	/** Date and time that the record was migrated. */
	OverriddenCreatedOn_UtcDateOnly: Date | null;
	/** Logical partition id. A logical partition consists of a set of records with same partition id. */
	PartitionId: string | null;
	/** Scope */
	Scope: string | null;
	/** Time to live in seconds. */
	TTLInSeconds: number | null;
	/** Version Number */
	readonly VersionNumber: number | null;
}

const cardstateitemFieldConfig: DevKit.IWebApiFieldConfigMap = {
	Cache: { logicalName: 'cache' },
	CardId: { logicalName: 'cardid' },
	CardInstanceId: { logicalName: 'cardinstanceid' },
	cardstateitemId: { logicalName: 'cardstateitemid' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Data: { logicalName: 'data' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	name: { logicalName: 'name' },
	OverriddenCreatedOn_UtcDateOnly: { logicalName: 'overriddencreatedon', type: 'DateTime' },
	PartitionId: { logicalName: 'partitionid' },
	Scope: { logicalName: 'scope' },
	TTLInSeconds: { logicalName: 'ttlinseconds', type: 'Integer' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * cardstateitem WebApi class for early-bound style coding
 * Usage: const cardstateitem = new cardstateitemApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class cardstateitemApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IcardstateitemApi>(entity, 'cardstateitem', 'cardstateitems', cardstateitemFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface cardstateitemApi extends IcardstateitemApi { }
