/**
 * SyncAttributeMappingProfile.webapi.ts - SyncAttributeMappingProfile WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for SyncAttributeMappingProfile
 * All fields return string representation of their values
 */
export interface ISyncAttributeMappingProfileFormattedValue {
	readonly ComponentState: string;
	readonly CreatedBy: string;
	readonly CreatedOn_UtcDateAndTime: string;
	readonly CreatedOnBehalfBy: string;
	readonly Description: string;
	readonly IsManaged: string;
	readonly ModifiedBy: string;
	readonly ModifiedOn_UtcDateAndTime: string;
	readonly ModifiedOnBehalfBy: string;
	readonly Name: string;
	readonly OrganizationId: string;
	readonly OverwriteTime_UtcDateOnly: string;
	readonly SolutionId: string;
	readonly SupportingSolutionId: string;
	readonly SyncAttributeMappingProfileId: string;
	readonly SyncAttributeMappingProfileIdUnique: string;
	readonly VersionNumber: string;
}

/**
 * SyncAttributeMappingProfile WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface ISyncAttributeMappingProfileApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: ISyncAttributeMappingProfileFormattedValue;
	/** For internal use only. */
	readonly ComponentState: number | null;
	/** Unique identifier of the user who created the profile. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the profile was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the role. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Description of the Profile */
	Description: string | null;
	/** Indicates whether the solution component is part of a managed solution. */
	readonly IsManaged: boolean | null;
	/** Unique identifier of the user who last modified the profile. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the profile was last modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who last modified the profile. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Name of the profile. */
	Name: string | null;
	/** Unique identifier of the associated organization. */
	readonly OrganizationId: DevKit.Guid | null;
	/** For internal use only. */
	readonly OverwriteTime_UtcDateOnly: Date | null;
	/** Unique identifier of the associated solution. */
	readonly SolutionId: DevKit.Guid | null;
	/** For internal use only. */
	readonly SupportingSolutionId: DevKit.Guid | null;
	/** Unique identifier of the profile. */
	SyncAttributeMappingProfileId: DevKit.Guid | null;
	/** For internal use only. */
	readonly SyncAttributeMappingProfileIdUnique: DevKit.Guid | null;
	readonly VersionNumber: number | null;
}

const SyncAttributeMappingProfileFieldConfig: DevKit.IWebApiFieldConfigMap = {
	ComponentState: { logicalName: 'componentstate', readOnly: true, type: 'Integer' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Description: { logicalName: 'description' },
	IsManaged: { logicalName: 'ismanaged', readOnly: true, type: 'Boolean' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Name: { logicalName: 'name' },
	OrganizationId: { schemaName: 'OrganizationId', logicalName: '_organizationid_value', readOnly: true, entityCollectionName: 'organizations', entityLogicalName: 'organization' },
	OverwriteTime_UtcDateOnly: { logicalName: 'overwritetime', readOnly: true, type: 'DateTime' },
	SolutionId: { logicalName: 'solutionid', readOnly: true },
	SupportingSolutionId: { logicalName: 'supportingsolutionid', readOnly: true },
	SyncAttributeMappingProfileId: { logicalName: 'syncattributemappingprofileid' },
	SyncAttributeMappingProfileIdUnique: { logicalName: 'syncattributemappingprofileidunique', readOnly: true },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * SyncAttributeMappingProfile WebApi class for early-bound style coding
 * Usage: const syncAttributeMappingProfile = new SyncAttributeMappingProfileApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class SyncAttributeMappingProfileApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<ISyncAttributeMappingProfileApi>(entity, 'syncattributemappingprofile', 'syncattributemappingprofiles', SyncAttributeMappingProfileFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface SyncAttributeMappingProfileApi extends ISyncAttributeMappingProfileApi { }
