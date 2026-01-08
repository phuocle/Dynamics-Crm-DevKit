/**
 * synapselinkprofile.webapi.ts - synapselinkprofile WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for synapselinkprofile
 * All fields return string representation of their values
 */
export interface IsynapselinkprofileFormattedValue {
	readonly ActivationTime_UtcDateAndTime: string;
	readonly ComponentIdUnique: string;
	readonly ComponentState: string;
	readonly CopyAttachments: string;
	readonly CopyFiles: string;
	readonly CreatedBy: string;
	readonly CreatedOn_UtcDateAndTime: string;
	readonly CreatedOnBehalfBy: string;
	readonly datalakefolder: string;
	readonly DestinationSyncState: string;
	readonly ExtendedProperties: string;
	readonly ImportSequenceNumber: string;
	readonly IsCustomizable: string;
	readonly IsManaged: string;
	readonly ModifiedBy: string;
	readonly ModifiedOn_UtcDateAndTime: string;
	readonly ModifiedOnBehalfBy: string;
	readonly name: string;
	readonly OrganizationId: string;
	readonly OverriddenCreatedOn_UtcDateOnly: string;
	readonly OverwriteTime_UtcDateAndTime: string;
	readonly ProfileState: string;
	readonly ProfileType: string;
	readonly ProfileUpdatedTime_UtcDateAndTime: string;
	readonly ProfileVersion: string;
	readonly SnapshotsToPersist: string;
	readonly SolutionId: string;
	readonly statecode: string;
	readonly statuscode: string;
	readonly SupportingSolutionId: string;
	readonly synapselinkprofileId: string;
	readonly TimeZoneRuleVersionNumber: string;
	readonly UniqueName: string;
	readonly UTCConversionTimeZoneCode: string;
	readonly VersionNumber: string;
}

/**
 * synapselinkprofile WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IsynapselinkprofileApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: IsynapselinkprofileFormattedValue;
	/** Activation time of profile */
	ActivationTime_UtcDateAndTime: Date | null;
	/** For internal use only. */
	readonly ComponentIdUnique: DevKit.Guid | null;
	/** For internal use only. */
	readonly ComponentState: number | null;
	/** Enable Copy Attachments */
	CopyAttachments: boolean | null;
	/** Enable Copy Files */
	CopyFiles: boolean | null;
	/** Unique identifier of the user who created the record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the record was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the record. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Unique identifier for Data Lake Folder associated with Synapse Link Profile. */
	datalakefolder: DevKit.Guid | null;
	/** Sync state of the profile */
	DestinationSyncState: number | null;
	/** Extended properties */
	ExtendedProperties: string | null;
	/** Sequence number of the import that created this record. */
	ImportSequenceNumber: number | null;
	/** For internal use only. */
	IsCustomizable: string | null;
	/** Indicates whether the solution component is part of a managed solution. */
	readonly IsManaged: boolean | null;
	/** Unique identifier of the user who modified the record. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the record was modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who modified the record. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** The name of the custom entity. */
	name: string | null;
	/** Unique identifier for the organization */
	readonly OrganizationId: DevKit.Guid | null;
	/** Date and time that the record was migrated. */
	OverriddenCreatedOn_UtcDateOnly: Date | null;
	/** For internal use only. */
	readonly OverwriteTime_UtcDateAndTime: Date | null;
	/** State of the profile */
	ProfileState: number | null;
	/** Type of profile */
	ProfileType: number | null;
	/** Profile Updated Time */
	ProfileUpdatedTime_UtcDateAndTime: Date | null;
	/** Profile version */
	ProfileVersion: string | null;
	/** Number of snapshots To persist */
	SnapshotsToPersist: number | null;
	/** Unique identifier of the associated solution. */
	readonly SolutionId: DevKit.Guid | null;
	/** Status of the Synapse Link Profile */
	statecode: number | null;
	/** Reason for the status of the Synapse Link Profile */
	statuscode: number | null;
	/** For internal use only. */
	readonly SupportingSolutionId: DevKit.Guid | null;
	/** Unique identifier for entity instances */
	synapselinkprofileId: DevKit.Guid | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** Unique name */
	UniqueName: string | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
	/** Version Number */
	readonly VersionNumber: number | null;
}

const synapselinkprofileFieldConfig: DevKit.IWebApiFieldConfigMap = {
	ActivationTime_UtcDateAndTime: { logicalName: 'activationtime', type: 'DateTime' },
	ComponentIdUnique: { logicalName: 'componentidunique', readOnly: true },
	ComponentState: { logicalName: 'componentstate', readOnly: true, type: 'Integer' },
	CopyAttachments: { logicalName: 'copyattachments', type: 'Boolean' },
	CopyFiles: { logicalName: 'copyfiles', type: 'Boolean' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	datalakefolder: { schemaName: 'datalakefolder', logicalName: '_datalakefolder_value', entityCollectionName: 'datalakefolders', entityLogicalName: 'datalakefolder' },
	DestinationSyncState: { logicalName: 'destinationsyncstate', type: 'Integer' },
	ExtendedProperties: { logicalName: 'extendedproperties' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	IsCustomizable: { logicalName: 'iscustomizable' },
	IsManaged: { logicalName: 'ismanaged', readOnly: true, type: 'Boolean' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	name: { logicalName: 'name' },
	OrganizationId: { schemaName: 'OrganizationId', logicalName: '_organizationid_value', readOnly: true, entityCollectionName: 'organizations', entityLogicalName: 'organization' },
	OverriddenCreatedOn_UtcDateOnly: { logicalName: 'overriddencreatedon', type: 'DateTime' },
	OverwriteTime_UtcDateAndTime: { logicalName: 'overwritetime', readOnly: true, type: 'DateTime' },
	ProfileState: { logicalName: 'profilestate', type: 'Integer' },
	ProfileType: { logicalName: 'profiletype', type: 'Integer' },
	ProfileUpdatedTime_UtcDateAndTime: { logicalName: 'profileupdatedtime', type: 'DateTime' },
	ProfileVersion: { logicalName: 'profileversion' },
	SnapshotsToPersist: { logicalName: 'snapshotstopersist', type: 'Integer' },
	SolutionId: { logicalName: 'solutionid', readOnly: true },
	statecode: { logicalName: 'statecode', type: 'Integer' },
	statuscode: { logicalName: 'statuscode', type: 'Integer' },
	SupportingSolutionId: { logicalName: 'supportingsolutionid', readOnly: true },
	synapselinkprofileId: { logicalName: 'synapselinkprofileid' },
	TimeZoneRuleVersionNumber: { logicalName: 'timezoneruleversionnumber', type: 'Integer' },
	UniqueName: { logicalName: 'uniquename' },
	UTCConversionTimeZoneCode: { logicalName: 'utcconversiontimezonecode', type: 'Integer' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * synapselinkprofile WebApi class for early-bound style coding
 * Usage: const synapselinkprofile = new synapselinkprofileApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class synapselinkprofileApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IsynapselinkprofileApi>(entity, 'synapselinkprofile', 'synapselinkprofiles', synapselinkprofileFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface synapselinkprofileApi extends IsynapselinkprofileApi { }
