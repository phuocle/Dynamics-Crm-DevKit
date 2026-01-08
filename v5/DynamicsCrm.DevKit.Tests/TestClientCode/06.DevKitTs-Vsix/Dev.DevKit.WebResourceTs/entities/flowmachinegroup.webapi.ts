/**
 * flowmachinegroup.webapi.ts - flowmachinegroup WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * flowmachinegroup WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IflowmachinegroupApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<IflowmachinegroupApi, 'FormattedValue'>]: string };
	/** For internal use only. */
	readonly ComponentIdUnique: DevKit.Guid | null;
	/** For internal use only. */
	readonly ComponentState: number | null;
	/** Unique identifier of the user who created the record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the record was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the record. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Description of this Group of Flow Machine */
	Description: string | null;
	/** If set, the date on which the machines of the group will be disconnected. */
	DisconnectionPlannedOn_UtcDateAndTime: Date | null;
	/** Setting for domain joining of machines in this group. */
	DomainSetting: number | null;
	/** Internal Use Only. */
	FlowGroupType: number | null;
	/** Unique identifier for entity instances */
	readonly flowmachinegroupId: DevKit.Guid | null;
	/** Unique identifier for Flow Machine Image associated with Flow Machine Group. */
	flowmachineimage: DevKit.Guid | null;
	/** Unique identifier for the Flow Machine Network associated with the Flow Machine Group. */
	flowmachinenetwork: DevKit.Guid | null;
	/** Internal Use Only. */
	GroupMetadata: string | null;
	/** Sequence number of the import that created this record. */
	ImportSequenceNumber: number | null;
	/** For internal use only. */
	IsCustomizable: string | null;
	/** Indicates whether the solution component is part of a managed solution. */
	readonly IsManaged: boolean | null;
	/** Creation date for group's primary key. */
	KeyCreationDate_TimezoneDateAndTime: Date | null;
	/** Grace period for machines and connections to update before a certificate rotation. In minutes. */
	KeyExpiryGracePeriod: number | null;
	/** Group Key Validity Period */
	KeyValidityPeriod: number | null;
	/** Last date at which a run has targeted the group. */
	LastRunDate_UtcDateAndTime: Date | null;
	/** Managed Version. */
	ManagedVersion: number | null;
	/** Management Type. */
	ManagementType: number | null;
	/** Maximum managed machine count. Only for use in managed machine groups. */
	MaxManagedMachineCount: number | null;
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
	/** For internal use only. */
	readonly OverwriteTime_UtcDateAndTime: Date | null;
	/** Owner Id */
	OwnerId: DevKit.Guid | null;
	/** Unique identifier for the business unit that owns the record */
	readonly OwningBusinessUnit: DevKit.Guid | null;
	/** Unique identifier for the team that owns the record. */
	readonly OwningTeam: DevKit.Guid | null;
	/** Unique identifier for the user that owns the record. */
	readonly OwningUser: DevKit.Guid | null;
	/** User who initiated the last password change. */
	PasswordChangedBy: DevKit.Guid | null;
	/** Date for latest password change. */
	PasswordChangedDate_UtcDateAndTime: Date | null;
	/** Indicates the preferred queuing type in a given machine group */
	PreferredQueuingType: number | null;
	/** Internal Use Only */
	PrimaryKeyPackage: string | null;
	/** Internal Use Only. */
	PrimaryPublicKey: string | null;
	/** Flow group provisioning error */
	ProvisioningError: string | null;
	/** The provisioning state of the managed machine group. */
	ProvisioningState: number | null;
	/** User who initiated a group key rotation. */
	RotationStartedBy: DevKit.Guid | null;
	/** Internal Use Only. */
	SecondaryKeyPackage: string | null;
	/** Internal Use Only. */
	SecondaryPublicKey: string | null;
	/** Unique identifier of the associated solution. */
	readonly SolutionId: DevKit.Guid | null;
	/** Status of the Flow Machine Group */
	statecode: number | null;
	/** Reason for the status of the Flow Machine Group */
	statuscode: number | null;
	/** For internal use only. */
	readonly SupportingSolutionId: DevKit.Guid | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** Indicates whether we will try to reuse non unlocked Windows sessions. Default value is No. */
	trytoreusewindowssession: boolean | null;
	/** Flow Machine Group Usage Type. */
	UsageType: number | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
	/** Version Number */
	readonly VersionNumber: number | null;
}

const flowmachinegroupFieldConfig: DevKit.IWebApiFieldConfigMap = {
	ComponentIdUnique: { logicalName: 'componentidunique', readOnly: true },
	ComponentState: { logicalName: 'componentstate', readOnly: true, type: 'Integer' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Description: { logicalName: 'description' },
	DisconnectionPlannedOn_UtcDateAndTime: { logicalName: 'disconnectionplannedon', type: 'DateTime' },
	DomainSetting: { logicalName: 'domainsetting', type: 'Integer' },
	FlowGroupType: { logicalName: 'flowgrouptype', type: 'Integer' },
	flowmachinegroupId: { logicalName: 'flowmachinegroupid', readOnly: true },
	flowmachineimage: { schemaName: 'flowmachineimage', logicalName: '_flowmachineimage_value', entityCollectionName: 'flowmachineimages', entityLogicalName: 'flowmachineimage' },
	flowmachinenetwork: { schemaName: 'flowmachinenetwork', logicalName: '_flowmachinenetwork_value', entityCollectionName: 'flowmachinenetworks', entityLogicalName: 'flowmachinenetwork' },
	GroupMetadata: { logicalName: 'groupmetadata' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	IsCustomizable: { logicalName: 'iscustomizable' },
	IsManaged: { logicalName: 'ismanaged', readOnly: true, type: 'Boolean' },
	KeyCreationDate_TimezoneDateAndTime: { logicalName: 'keycreationdate', type: 'DateTime' },
	KeyExpiryGracePeriod: { logicalName: 'keyexpirygraceperiod', type: 'Integer' },
	KeyValidityPeriod: { logicalName: 'keyvalidityperiod', type: 'Integer' },
	LastRunDate_UtcDateAndTime: { logicalName: 'lastrundate', type: 'DateTime' },
	ManagedVersion: { logicalName: 'managedversion', type: 'Integer' },
	ManagementType: { logicalName: 'managementtype', type: 'Integer' },
	MaxManagedMachineCount: { logicalName: 'maxmanagedmachinecount', type: 'Integer' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	name: { logicalName: 'name' },
	OverriddenCreatedOn_UtcDateOnly: { logicalName: 'overriddencreatedon', type: 'DateTime' },
	OverwriteTime_UtcDateAndTime: { logicalName: 'overwritetime', readOnly: true, type: 'DateTime' },
	OwnerId: { schemaName: 'OwnerId', logicalName: '_ownerid_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OwningBusinessUnit: { schemaName: 'OwningBusinessUnit', logicalName: '_owningbusinessunit_value', readOnly: true, entityCollectionName: 'businessunits', entityLogicalName: 'businessunit' },
	OwningTeam: { schemaName: 'OwningTeam', logicalName: '_owningteam_value', readOnly: true, entityCollectionName: 'teams', entityLogicalName: 'team' },
	OwningUser: { schemaName: 'OwningUser', logicalName: '_owninguser_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	PasswordChangedBy: { schemaName: 'PasswordChangedBy', logicalName: '_passwordchangedby_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	PasswordChangedDate_UtcDateAndTime: { logicalName: 'passwordchangeddate', type: 'DateTime' },
	PreferredQueuingType: { logicalName: 'preferredqueuingtype', type: 'Integer' },
	PrimaryKeyPackage: { logicalName: 'primarykeypackage' },
	PrimaryPublicKey: { logicalName: 'primarypublickey' },
	ProvisioningError: { logicalName: 'provisioningerror' },
	ProvisioningState: { logicalName: 'provisioningstate', type: 'Integer' },
	RotationStartedBy: { schemaName: 'RotationStartedBy', logicalName: '_rotationstartedby_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	SecondaryKeyPackage: { logicalName: 'secondarykeypackage' },
	SecondaryPublicKey: { logicalName: 'secondarypublickey' },
	SolutionId: { logicalName: 'solutionid', readOnly: true },
	statecode: { logicalName: 'statecode', type: 'Integer' },
	statuscode: { logicalName: 'statuscode', type: 'Integer' },
	SupportingSolutionId: { logicalName: 'supportingsolutionid', readOnly: true },
	TimeZoneRuleVersionNumber: { logicalName: 'timezoneruleversionnumber', type: 'Integer' },
	trytoreusewindowssession: { logicalName: 'trytoreusewindowssession', type: 'Boolean' },
	UsageType: { logicalName: 'usagetype', type: 'Integer' },
	UTCConversionTimeZoneCode: { logicalName: 'utcconversiontimezonecode', type: 'Integer' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * flowmachinegroup WebApi class for early-bound style coding
 * Usage: const flowmachinegroup = new flowmachinegroupApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class flowmachinegroupApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IflowmachinegroupApi>(entity, 'flowmachinegroup', 'flowmachinegroups', flowmachinegroupFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface flowmachinegroupApi extends IflowmachinegroupApi { }
