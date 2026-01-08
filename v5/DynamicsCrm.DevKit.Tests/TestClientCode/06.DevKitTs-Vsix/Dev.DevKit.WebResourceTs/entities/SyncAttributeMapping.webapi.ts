/**
 * SyncAttributeMapping.webapi.ts - SyncAttributeMapping WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for SyncAttributeMapping
 * All fields return string representation of their values
 */
export interface ISyncAttributeMappingFormattedValue {
	readonly AllowedSyncDirection: string;
	readonly AttributeCRMName: string;
	readonly AttributeExchangeName: string;
	readonly ComponentState: string;
	readonly ComputedProperties: string;
	readonly DefaultSyncDirection: string;
	readonly IsComputed: string;
	readonly IsManaged: string;
	readonly MappingName: string;
	readonly OrganizationId: string;
	readonly OverwriteTime_UtcDateOnly: string;
	readonly ParentSyncAttributeMappingId: string;
	readonly SolutionId: string;
	readonly SupportingSolutionId: string;
	readonly SyncAttributeMappingId: string;
	readonly SyncAttributeMappingIdUnique: string;
	readonly SyncAttributeMappingProfileId: string;
	readonly SyncDirection: string;
}

/**
 * SyncAttributeMapping WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface ISyncAttributeMappingApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: ISyncAttributeMappingFormattedValue;
	/** Allowed Sync Directions */
	AllowedSyncDirection: number | null;
	/** CRM Attribute Name. */
	AttributeCRMName: string | null;
	/** Exchange Attribute Name. */
	AttributeExchangeName: string | null;
	/** For internal use only. */
	readonly ComponentState: number | null;
	/** Computed Properties. */
	ComputedProperties: string | null;
	/** Default Sync Direction */
	DefaultSyncDirection: number | null;
	/** Indicates whether the mapping is a computed property */
	readonly IsComputed: boolean | null;
	/** Indicates whether the solution component is part of a managed solution. */
	readonly IsManaged: boolean | null;
	/** Attribute Name. */
	MappingName: string | null;
	/** Unique identifier for the organization */
	readonly OrganizationId: DevKit.Guid | null;
	/** For internal use only. */
	readonly OverwriteTime_UtcDateOnly: Date | null;
	/** Parent Sync-Attribute Mapping to which this mapping belongs */
	ParentSyncAttributeMappingId: DevKit.Guid | null;
	/** Unique identifier of the associated solution. */
	readonly SolutionId: DevKit.Guid | null;
	/** For internal use only. */
	readonly SupportingSolutionId: DevKit.Guid | null;
	/** Unique identifier of the Sync-Attribute Mapping. */
	SyncAttributeMappingId: DevKit.Guid | null;
	/** For internal use only. */
	readonly SyncAttributeMappingIdUnique: DevKit.Guid | null;
	/** Unique identifier of profile to which this mapping belongs. */
	SyncAttributeMappingProfileId: DevKit.Guid | null;
	/** Sync Direction */
	SyncDirection: number | null;
}

const SyncAttributeMappingFieldConfig: DevKit.IWebApiFieldConfigMap = {
	AllowedSyncDirection: { logicalName: 'allowedsyncdirection', type: 'Integer' },
	AttributeCRMName: { logicalName: 'attributecrmname' },
	AttributeExchangeName: { logicalName: 'attributeexchangename' },
	ComponentState: { logicalName: 'componentstate', readOnly: true, type: 'Integer' },
	ComputedProperties: { logicalName: 'computedproperties' },
	DefaultSyncDirection: { logicalName: 'defaultsyncdirection', type: 'Integer' },
	IsComputed: { logicalName: 'iscomputed', readOnly: true, type: 'Boolean' },
	IsManaged: { logicalName: 'ismanaged', readOnly: true, type: 'Boolean' },
	MappingName: { logicalName: 'mappingname' },
	OrganizationId: { logicalName: 'organizationid', readOnly: true },
	OverwriteTime_UtcDateOnly: { logicalName: 'overwritetime', readOnly: true, type: 'DateTime' },
	ParentSyncAttributeMappingId: { schemaName: 'ParentSyncAttributeMappingId', logicalName: '_parentsyncattributemappingid_value', entityCollectionName: 'syncattributemappings', entityLogicalName: 'syncattributemapping' },
	SolutionId: { logicalName: 'solutionid', readOnly: true },
	SupportingSolutionId: { logicalName: 'supportingsolutionid', readOnly: true },
	SyncAttributeMappingId: { logicalName: 'syncattributemappingid' },
	SyncAttributeMappingIdUnique: { logicalName: 'syncattributemappingidunique', readOnly: true },
	SyncAttributeMappingProfileId: { schemaName: 'SyncAttributeMappingProfileId', logicalName: '_syncattributemappingprofileid_value', entityCollectionName: 'syncattributemappingprofiles', entityLogicalName: 'syncattributemappingprofile' },
	SyncDirection: { logicalName: 'syncdirection', type: 'Integer' },
};

/**
 * SyncAttributeMapping WebApi class for early-bound style coding
 * Usage: const syncAttributeMapping = new SyncAttributeMappingApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class SyncAttributeMappingApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<ISyncAttributeMappingApi>(entity, 'syncattributemapping', 'syncattributemappings', SyncAttributeMappingFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface SyncAttributeMappingApi extends ISyncAttributeMappingApi { }
