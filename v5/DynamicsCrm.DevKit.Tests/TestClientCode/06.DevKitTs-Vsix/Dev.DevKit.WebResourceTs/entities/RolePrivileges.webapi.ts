/**
 * RolePrivileges.webapi.ts - RolePrivileges WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for RolePrivileges
 * All fields return string representation of their values
 */
export interface IRolePrivilegesFormattedValue {
	readonly CanBeDeleted: string;
	readonly ComponentState: string;
	readonly IsManaged: string;
	readonly OverwriteTime_UtcDateOnly: string;
	readonly PrivilegeDepthMask: string;
	readonly PrivilegeId: string;
	readonly RecordFilterId: string;
	readonly RoleId: string;
	readonly RolePrivilegeId: string;
	readonly RolePrivilegeIdUnique: string;
	readonly SolutionId: string;
	readonly SupportingSolutionId: string;
	readonly VersionNumber: string;
}

/**
 * RolePrivileges WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IRolePrivilegesApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: IRolePrivilegesFormattedValue;
	/** Tells whether the role privilege can be deleted. */
	CanBeDeleted: string | null;
	/** For internal use only. */
	readonly ComponentState: number | null;
	readonly IsManaged: boolean | null;
	/** For internal use only. */
	readonly OverwriteTime_UtcDateOnly: Date | null;
	/** System-generated attribute that stores the privileges associated with the role. */
	PrivilegeDepthMask: number | null;
	/** Unique identifier of the privilege associated with the role. */
	readonly PrivilegeId: DevKit.Guid | null;
	/** Unique identifier for Record Filter associated with role privilege. */
	RecordFilterId: DevKit.Guid | null;
	/** Unique identifier of the role that is associated with the role privilege. */
	readonly RoleId: DevKit.Guid | null;
	/** Unique identifier of the role privilege. */
	RolePrivilegeId: DevKit.Guid | null;
	/** For internal use only. */
	readonly RolePrivilegeIdUnique: DevKit.Guid | null;
	/** Unique identifier of the associated solution. */
	readonly SolutionId: DevKit.Guid | null;
	/** For internal use only. */
	readonly SupportingSolutionId: DevKit.Guid | null;
	readonly VersionNumber: number | null;
}

const RolePrivilegesFieldConfig: DevKit.IWebApiFieldConfigMap = {
	CanBeDeleted: { logicalName: 'canbedeleted' },
	ComponentState: { logicalName: 'componentstate', readOnly: true, type: 'Integer' },
	IsManaged: { logicalName: 'ismanaged', readOnly: true, type: 'Boolean' },
	OverwriteTime_UtcDateOnly: { logicalName: 'overwritetime', readOnly: true, type: 'DateTime' },
	PrivilegeDepthMask: { logicalName: 'privilegedepthmask', type: 'Integer' },
	PrivilegeId: { logicalName: 'privilegeid', readOnly: true },
	RecordFilterId: { schemaName: 'RecordFilterId', logicalName: '_recordfilterid_value', entityCollectionName: 'recordfilters', entityLogicalName: 'recordfilter' },
	RoleId: { logicalName: 'roleid', readOnly: true },
	RolePrivilegeId: { logicalName: 'roleprivilegeid' },
	RolePrivilegeIdUnique: { logicalName: 'roleprivilegeidunique', readOnly: true },
	SolutionId: { logicalName: 'solutionid', readOnly: true },
	SupportingSolutionId: { logicalName: 'supportingsolutionid', readOnly: true },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * RolePrivileges WebApi class for early-bound style coding
 * Usage: const rolePrivileges = new RolePrivilegesApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class RolePrivilegesApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IRolePrivilegesApi>(entity, 'roleprivileges', '', RolePrivilegesFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface RolePrivilegesApi extends IRolePrivilegesApi { }
