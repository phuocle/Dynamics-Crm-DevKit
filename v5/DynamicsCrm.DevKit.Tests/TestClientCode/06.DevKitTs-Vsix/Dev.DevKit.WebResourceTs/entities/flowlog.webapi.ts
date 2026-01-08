/**
 * flowlog.webapi.ts - flowlog WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for flowlog
 * All fields return string representation of their values
 */
export interface IflowlogFormattedValue {
	readonly cloudflowid: string;
	readonly cloudflowrunid: string;
	readonly CreatedBy: string;
	readonly CreatedOn_UtcDateAndTime: string;
	readonly CreatedOnBehalfBy: string;
	readonly data: string;
	readonly desktopflowid: string;
	readonly Duration: string;
	readonly flowlogId: string;
	readonly flowmachinegroupid: string;
	readonly flowmachineid: string;
	readonly flowsessionid: string;
	readonly ImportSequenceNumber: string;
	readonly InputsLocalizedNames: string;
	readonly level: string;
	readonly LogIndex: string;
	readonly ModifiedBy: string;
	readonly ModifiedOn_UtcDateAndTime: string;
	readonly ModifiedOnBehalfBy: string;
	readonly Name: string;
	readonly OutputsLocalizedNames: string;
	readonly OverriddenCreatedOn_UtcDateOnly: string;
	readonly OwnerId: string;
	readonly OwningBusinessUnit: string;
	readonly OwningTeam: string;
	readonly OwningUser: string;
	readonly parentobjectid: string;
	readonly PartitionId: string;
	readonly TTLInSeconds: string;
	readonly type: string;
	readonly VersionNumber: string;
	readonly workqueueid: string;
	readonly workqueueitemid: string;
}

/**
 * flowlog WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IflowlogApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: IflowlogFormattedValue;
	/** The Power Automate Cloud Flow Id this log is linked to. */
	cloudflowid: DevKit.Guid | null;
	/** The Power Automate Cloud Flow run this log is linked to. */
	cloudflowrunid: DevKit.Guid | null;
	/** Unique identifier of the user who created the record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the record was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the record. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** The logged data. */
	data: string | null;
	/** The Desktop Flow Id this log is linked to. */
	desktopflowid: DevKit.Guid | null;
	/** Duration of the action in millisecond. */
	Duration: number | null;
	/** Unique identifier for entity instances */
	flowlogId: DevKit.Guid | null;
	flowmachinegroupid: DevKit.Guid | null;
	flowmachineid: DevKit.Guid | null;
	/** The Power Automate Desktop Flow Session this log belongs to. */
	flowsessionid: DevKit.Guid | null;
	/** Sequence number of the import that created this record. */
	ImportSequenceNumber: number | null;
	/** Array of the names of the inputs. */
	InputsLocalizedNames: string | null;
	/** The level of the log. */
	level: number | null;
	/** Index of the log within the flow excution */
	LogIndex: number | null;
	/** Unique identifier of the user who modified the record. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the record was modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who modified the record. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** The name of the log. */
	Name: string | null;
	/** Array of the names of the outputs. */
	OutputsLocalizedNames: string | null;
	/** Date and time that the record was migrated. */
	OverriddenCreatedOn_UtcDateOnly: Date | null;
	/** Owner Id */
	readonly OwnerId: DevKit.Guid | null;
	/** Unique identifier for the business unit that owns the record */
	readonly OwningBusinessUnit: DevKit.Guid | null;
	/** Unique identifier for the team that owns the record. */
	readonly OwningTeam: DevKit.Guid | null;
	/** Unique identifier for the user that owns the record. */
	readonly OwningUser: DevKit.Guid | null;
	/** The id of the parent object. */
	parentobjectid: DevKit.Guid | null;
	/** Logical partition id. A logical partition consists of a set of records with same partition id. */
	PartitionId: string | null;
	/** Time to live in seconds. */
	TTLInSeconds: number | null;
	/** The type of the log. */
	type: number | null;
	/** Version Number */
	readonly VersionNumber: number | null;
	/** The Work Queue this log is linked to. */
	workqueueid: DevKit.Guid | null;
	/** The Work Queue Item this log is linked to. */
	workqueueitemid: DevKit.Guid | null;
}

const flowlogFieldConfig: DevKit.IWebApiFieldConfigMap = {
	cloudflowid: { schemaName: 'cloudflowid', logicalName: '_cloudflowid_value', entityCollectionName: 'workflows', entityLogicalName: 'workflow' },
	cloudflowrunid: { schemaName: 'cloudflowrunid', logicalName: '_cloudflowrunid_value', entityCollectionName: 'flowruns', entityLogicalName: 'flowrun' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	data: { logicalName: 'data' },
	desktopflowid: { schemaName: 'desktopflowid', logicalName: '_desktopflowid_value', entityCollectionName: 'workflows', entityLogicalName: 'workflow' },
	Duration: { logicalName: 'duration', type: 'Integer' },
	flowlogId: { logicalName: 'flowlogid' },
	flowmachinegroupid: { schemaName: 'flowmachinegroupid', logicalName: '_flowmachinegroupid_value', entityCollectionName: 'flowmachinegroups', entityLogicalName: 'flowmachinegroup' },
	flowmachineid: { schemaName: 'flowmachineid', logicalName: '_flowmachineid_value', entityCollectionName: 'flowmachines', entityLogicalName: 'flowmachine' },
	flowsessionid: { schemaName: 'flowsessionid', logicalName: '_flowsessionid_value', entityCollectionName: 'flowsessions', entityLogicalName: 'flowsession' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	InputsLocalizedNames: { logicalName: 'inputslocalizednames' },
	level: { logicalName: 'level', type: 'Integer' },
	LogIndex: { logicalName: 'logindex', type: 'Integer' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Name: { logicalName: 'name' },
	OutputsLocalizedNames: { logicalName: 'outputslocalizednames' },
	OverriddenCreatedOn_UtcDateOnly: { logicalName: 'overriddencreatedon', type: 'DateTime' },
	OwnerId: { schemaName: 'OwnerId', logicalName: '_ownerid_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OwningBusinessUnit: { logicalName: 'owningbusinessunit', readOnly: true },
	OwningTeam: { logicalName: 'owningteam', readOnly: true },
	OwningUser: { logicalName: 'owninguser', readOnly: true },
	parentobjectid: { schemaName: 'parentobjectid', logicalName: '_parentobjectid_value', entityCollectionName: 'flowmachinegroups', entityLogicalName: 'flowmachinegroup' },
	PartitionId: { logicalName: 'partitionid' },
	TTLInSeconds: { logicalName: 'ttlinseconds', type: 'Integer' },
	type: { logicalName: 'type', type: 'Integer' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
	workqueueid: { schemaName: 'workqueueid', logicalName: '_workqueueid_value', entityCollectionName: 'workqueues', entityLogicalName: 'workqueue' },
	workqueueitemid: { schemaName: 'workqueueitemid', logicalName: '_workqueueitemid_value', entityCollectionName: 'workqueueitems', entityLogicalName: 'workqueueitem' },
};

/**
 * flowlog WebApi class for early-bound style coding
 * Usage: const flowlog = new flowlogApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class flowlogApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IflowlogApi>(entity, 'flowlog', 'flowlogs', flowlogFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface flowlogApi extends IflowlogApi { }
