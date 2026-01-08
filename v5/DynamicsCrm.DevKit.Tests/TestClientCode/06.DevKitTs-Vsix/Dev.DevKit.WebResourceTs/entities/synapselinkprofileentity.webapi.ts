/**
 * synapselinkprofileentity.webapi.ts - synapselinkprofileentity WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * synapselinkprofileentity WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IsynapselinkprofileentityApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<IsynapselinkprofileentityApi, 'FormattedValue'>]: string };
	/** Is append only mode */
	AppendOnlyMode: boolean | null;
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
	/** Is entity enabled */
	Enabled: boolean | null;
	/** Name of the entity */
	EntityName2: string | null;
	/** Source of the entity */
	EntitySource: number | null;
	/** Type of the entity */
	EntityType: number | null;
	/** Extended properties */
	ExtendedProperties: string | null;
	/** Generate parquet */
	GenerateParquet: boolean | null;
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
	/** Partition strategy */
	PartitionStrategy: number | null;
	/** Unique identifier for Synapse Link Profile associated with Synapse Link Profile Entity. */
	profile: DevKit.Guid | null;
	/** Record count per block */
	RecordCountPerBlock: number | null;
	/** Unique identifier of the associated solution. */
	readonly SolutionId: DevKit.Guid | null;
	/** Status of the Synapse Link Profile Entity */
	statecode: number | null;
	/** Reason for the status of the Synapse Link Profile Entity */
	statuscode: number | null;
	/** For internal use only. */
	readonly SupportingSolutionId: DevKit.Guid | null;
	/** Unique identifier for entity instances */
	synapselinkprofileentityId: DevKit.Guid | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** Unique name */
	UniqueName: string | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
	/** Version Number */
	readonly VersionNumber: number | null;
}

const synapselinkprofileentityFieldConfig: DevKit.IWebApiFieldConfigMap = {
	AppendOnlyMode: { logicalName: 'appendonlymode', type: 'Boolean' },
	ComponentIdUnique: { logicalName: 'componentidunique', readOnly: true },
	ComponentState: { logicalName: 'componentstate', readOnly: true, type: 'Integer' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Enabled: { logicalName: 'enabled', type: 'Boolean' },
	EntityName2: { logicalName: 'entityname' },
	EntitySource: { logicalName: 'entitysource', type: 'Integer' },
	EntityType: { logicalName: 'entitytype', type: 'Integer' },
	ExtendedProperties: { logicalName: 'extendedproperties' },
	GenerateParquet: { logicalName: 'generateparquet', type: 'Boolean' },
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
	PartitionStrategy: { logicalName: 'partitionstrategy', type: 'Integer' },
	profile: { schemaName: 'profile', logicalName: '_profile_value', entityCollectionName: 'synapselinkprofiles', entityLogicalName: 'synapselinkprofile' },
	RecordCountPerBlock: { logicalName: 'recordcountperblock', type: 'Integer' },
	SolutionId: { logicalName: 'solutionid', readOnly: true },
	statecode: { logicalName: 'statecode', type: 'Integer' },
	statuscode: { logicalName: 'statuscode', type: 'Integer' },
	SupportingSolutionId: { logicalName: 'supportingsolutionid', readOnly: true },
	synapselinkprofileentityId: { logicalName: 'synapselinkprofileentityid' },
	TimeZoneRuleVersionNumber: { logicalName: 'timezoneruleversionnumber', type: 'Integer' },
	UniqueName: { logicalName: 'uniquename' },
	UTCConversionTimeZoneCode: { logicalName: 'utcconversiontimezonecode', type: 'Integer' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * synapselinkprofileentity WebApi class for early-bound style coding
 * Usage: const synapselinkprofileentity = new synapselinkprofileentityApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class synapselinkprofileentityApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IsynapselinkprofileentityApi>(entity, 'synapselinkprofileentity', 'synapselinkprofileentities', synapselinkprofileentityFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface synapselinkprofileentityApi extends IsynapselinkprofileentityApi { }
