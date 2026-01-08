/**
 * flowmachine.webapi.ts - flowmachine WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for flowmachine
 * All fields return string representation of their values
 */
export interface IflowmachineFormattedValue {
	readonly AgentVersion: string;
	readonly ConnectivityConfiguration: string;
	readonly CreatedBy: string;
	readonly CreatedOn_UtcDateAndTime: string;
	readonly CreatedOnBehalfBy: string;
	readonly Description: string;
	readonly FlowMachineGroupId: string;
	readonly flowmachineId: string;
	readonly FlowMachineImageVersionId: string;
	readonly FlowMachineNetworkId: string;
	readonly HostedMachineError: string;
	readonly HostedMachineState: string;
	readonly HostingType: string;
	readonly ImportSequenceNumber: string;
	readonly KeyDeliveryStatus: string;
	readonly KeyReceivedDate_UtcDateAndTime: string;
	readonly LastHeartbeatDate_UtcDateAndTime: string;
	readonly LastKnownPictureInPictureSupport: string;
	readonly MachineMetadata: string;
	readonly ModifiedBy: string;
	readonly ModifiedOn_UtcDateAndTime: string;
	readonly ModifiedOnBehalfBy: string;
	readonly name: string;
	readonly OvercapacitySince_UtcDateAndTime: string;
	readonly OverriddenCreatedOn_UtcDateOnly: string;
	readonly OwnerId: string;
	readonly OwningBusinessUnit: string;
	readonly OwningTeam: string;
	readonly OwningUser: string;
	readonly SessionCapacity: string;
	readonly SnapshotStartedAt_UtcDateAndTime: string;
	readonly statecode: string;
	readonly statuscode: string;
	readonly TimeZoneRuleVersionNumber: string;
	readonly UTCConversionTimeZoneCode: string;
	readonly VersionNumber: string;
}

/**
 * flowmachine WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IflowmachineApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: IflowmachineFormattedValue;
	/** Version installed on the machine */
	AgentVersion: string | null;
	/** For Internal Use Only. */
	ConnectivityConfiguration: string | null;
	/** Unique identifier of the user who created the record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the record was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the record. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Description of the Flow Machine. */
	Description: string | null;
	/** Group of this Flow Machine. */
	FlowMachineGroupId: DevKit.Guid | null;
	/** Unique identifier for entity instances */
	readonly flowmachineId: DevKit.Guid | null;
	/** Unique identifier for Flow Machine Image Version associated with Flow Machine. */
	FlowMachineImageVersionId: DevKit.Guid | null;
	/** Unique identifier for Flow Machine Network associated with Flow Machine. */
	FlowMachineNetworkId: DevKit.Guid | null;
	/** Hosted flow machine error. */
	HostedMachineError: string | null;
	/** The state of the machine if it is hosted. */
	HostedMachineState: number | null;
	/** Flow Machine Hosting Type. */
	HostingType: number | null;
	/** Sequence number of the import that created this record. */
	ImportSequenceNumber: number | null;
	/** Delivery status of the machine's group's key. */
	KeyDeliveryStatus: number | null;
	/** Delivery date of the latest group key. */
	KeyReceivedDate_UtcDateAndTime: Date | null;
	/** Last date at which a heartbeat call was received from the machine. */
	LastHeartbeatDate_UtcDateAndTime: Date | null;
	/** Indicates the last known picture-in-picture feature support for the target record. Default value is Unknown. */
	LastKnownPictureInPictureSupport: number | null;
	/** For Internal Use Only. */
	MachineMetadata: string | null;
	/** Unique identifier of the user who modified the record. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the record was modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who modified the record. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** The Name of the Flow Machine. */
	name: string | null;
	/** Date and time of when the machine has been flagged as overcapacity. */
	OvercapacitySince_UtcDateAndTime: Date | null;
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
	/** Maximum Number of session in parallel. */
	SessionCapacity: number | null;
	/** Time at which the snapshot capture started for a Hosted Hachine */
	SnapshotStartedAt_UtcDateAndTime: Date | null;
	/** Status of the Flow Machine */
	statecode: number | null;
	/** Reason for the status of the Flow Machine */
	statuscode: number | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
	/** Version Number */
	readonly VersionNumber: number | null;
}

const flowmachineFieldConfig: DevKit.IWebApiFieldConfigMap = {
	AgentVersion: { logicalName: 'agentversion' },
	ConnectivityConfiguration: { logicalName: 'connectivityconfiguration' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Description: { logicalName: 'description' },
	FlowMachineGroupId: { schemaName: 'FlowMachineGroupId', logicalName: '_flowmachinegroupid_value', entityCollectionName: 'flowmachinegroups', entityLogicalName: 'flowmachinegroup' },
	flowmachineId: { logicalName: 'flowmachineid', readOnly: true },
	FlowMachineImageVersionId: { schemaName: 'FlowMachineImageVersionId', logicalName: '_flowmachineimageversionid_value', entityCollectionName: 'flowmachineimageversions', entityLogicalName: 'flowmachineimageversion' },
	FlowMachineNetworkId: { schemaName: 'FlowMachineNetworkId', logicalName: '_flowmachinenetworkid_value', entityCollectionName: 'flowmachinenetworks', entityLogicalName: 'flowmachinenetwork' },
	HostedMachineError: { logicalName: 'hostedmachineerror' },
	HostedMachineState: { logicalName: 'hostedmachinestate', type: 'Integer' },
	HostingType: { logicalName: 'hostingtype', type: 'Integer' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	KeyDeliveryStatus: { logicalName: 'keydeliverystatus', type: 'Integer' },
	KeyReceivedDate_UtcDateAndTime: { logicalName: 'keyreceiveddate', type: 'DateTime' },
	LastHeartbeatDate_UtcDateAndTime: { logicalName: 'lastheartbeatdate', type: 'DateTime' },
	LastKnownPictureInPictureSupport: { logicalName: 'lastknownpictureinpicturesupport', type: 'Integer' },
	MachineMetadata: { logicalName: 'machinemetadata' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	name: { logicalName: 'name' },
	OvercapacitySince_UtcDateAndTime: { logicalName: 'overcapacitysince', type: 'DateTime' },
	OverriddenCreatedOn_UtcDateOnly: { logicalName: 'overriddencreatedon', type: 'DateTime' },
	OwnerId: { schemaName: 'OwnerId', logicalName: '_ownerid_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OwningBusinessUnit: { schemaName: 'OwningBusinessUnit', logicalName: '_owningbusinessunit_value', readOnly: true, entityCollectionName: 'businessunits', entityLogicalName: 'businessunit' },
	OwningTeam: { schemaName: 'OwningTeam', logicalName: '_owningteam_value', readOnly: true, entityCollectionName: 'teams', entityLogicalName: 'team' },
	OwningUser: { schemaName: 'OwningUser', logicalName: '_owninguser_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	SessionCapacity: { logicalName: 'sessioncapacity', type: 'Integer' },
	SnapshotStartedAt_UtcDateAndTime: { logicalName: 'snapshotstartedat', type: 'DateTime' },
	statecode: { logicalName: 'statecode', type: 'Integer' },
	statuscode: { logicalName: 'statuscode', type: 'Integer' },
	TimeZoneRuleVersionNumber: { logicalName: 'timezoneruleversionnumber', type: 'Integer' },
	UTCConversionTimeZoneCode: { logicalName: 'utcconversiontimezonecode', type: 'Integer' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * flowmachine WebApi class for early-bound style coding
 * Usage: const flowmachine = new flowmachineApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class flowmachineApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IflowmachineApi>(entity, 'flowmachine', 'flowmachines', flowmachineFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface flowmachineApi extends IflowmachineApi { }
