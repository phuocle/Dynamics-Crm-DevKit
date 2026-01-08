/**
 * msdyn_timelinepin.webapi.ts - msdyn_timelinepin WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for msdyn_timelinepin
 * All fields return string representation of their values
 */
export interface Imsdyn_timelinepinFormattedValue {
	readonly CreatedBy: string;
	readonly CreatedOn_UtcDateAndTime: string;
	readonly CreatedOnBehalfBy: string;
	readonly ImportSequenceNumber: string;
	readonly ModifiedBy: string;
	readonly ModifiedOn_UtcDateAndTime: string;
	readonly ModifiedOnBehalfBy: string;
	readonly msdyn_formrecordid: string;
	readonly msdyn_name: string;
	readonly msdyn_pinnedrecordid: string;
	readonly msdyn_pinnedrecordlogicalname: string;
	readonly msdyn_timelinecontrolid: string;
	readonly msdyn_timelinepinId: string;
	readonly OverriddenCreatedOn_UtcDateOnly: string;
	readonly PartitionId: string;
	readonly TTLInSeconds: string;
	readonly VersionNumber: string;
}

/**
 * msdyn_timelinepin WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface Imsdyn_timelinepinApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: Imsdyn_timelinepinFormattedValue;
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
	/** Id of the record from the form. */
	msdyn_formrecordid: string | null;
	/** Name */
	msdyn_name: string | null;
	/** Id of the pinned record on timeline. */
	msdyn_pinnedrecordid: string | null;
	/** Entity Logical Name of pinned record on timeline. */
	msdyn_pinnedrecordlogicalname: string | null;
	/** Id of the timeline control for the pinned item. */
	msdyn_timelinecontrolid: string | null;
	/** Unique identifier for entity instances */
	msdyn_timelinepinId: DevKit.Guid | null;
	/** Date and time that the record was migrated. */
	OverriddenCreatedOn_UtcDateOnly: Date | null;
	/** Logical partition id. A logical partition consists of a set of records with same partition id. */
	PartitionId: string | null;
	/** Time to live in seconds. */
	TTLInSeconds: number | null;
	/** Version Number */
	readonly VersionNumber: number | null;
}

const msdyn_timelinepinFieldConfig: DevKit.IWebApiFieldConfigMap = {
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	msdyn_formrecordid: { logicalName: 'msdyn_formrecordid' },
	msdyn_name: { logicalName: 'msdyn_name' },
	msdyn_pinnedrecordid: { logicalName: 'msdyn_pinnedrecordid' },
	msdyn_pinnedrecordlogicalname: { logicalName: 'msdyn_pinnedrecordlogicalname' },
	msdyn_timelinecontrolid: { logicalName: 'msdyn_timelinecontrolid' },
	msdyn_timelinepinId: { logicalName: 'msdyn_timelinepinid' },
	OverriddenCreatedOn_UtcDateOnly: { logicalName: 'overriddencreatedon', type: 'DateTime' },
	PartitionId: { logicalName: 'partitionid' },
	TTLInSeconds: { logicalName: 'ttlinseconds', type: 'Integer' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * msdyn_timelinepin WebApi class for early-bound style coding
 * Usage: const msdyn_timelinepin = new msdyn_timelinepinApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class msdyn_timelinepinApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<Imsdyn_timelinepinApi>(entity, 'msdyn_timelinepin', 'msdyn_timelinepins', msdyn_timelinepinFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface msdyn_timelinepinApi extends Imsdyn_timelinepinApi { }
