/**
 * RoleTemplatePrivileges.webapi.ts - RoleTemplatePrivileges WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for RoleTemplatePrivileges
 * All fields return string representation of their values
 */
export interface IRoleTemplatePrivilegesFormattedValue {
	readonly IsBasic: string;
	readonly IsDeep: string;
	readonly IsGlobal: string;
	readonly IsLocal: string;
	readonly PrivilegeId: string;
	readonly RoleTemplateId: string;
	readonly RoleTemplatePrivilegeId: string;
	readonly Upgrading: string;
}

/**
 * RoleTemplatePrivileges WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IRoleTemplatePrivilegesApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: IRoleTemplatePrivilegesFormattedValue;
	/** Information about whether the role in the template applies to the user, the user's team, or objects shared by the user. */
	IsBasic: boolean | null;
	/** Information about whether the role in the template applies to child business units of the business unit associated with the user. */
	IsDeep: boolean | null;
	/** Information about whether the role in the template applies to the entire organization. */
	IsGlobal: boolean | null;
	/** Information about whether the role in the template applies to the user's business unit. */
	IsLocal: boolean | null;
	/** Unique identifier of the privilege assigned to the role template. */
	readonly PrivilegeId: DevKit.Guid | null;
	/** Unique identifier of the role template that is associated with the role privilege. */
	readonly RoleTemplateId: DevKit.Guid | null;
	/** Unique identifier of the role template privileges. */
	RoleTemplatePrivilegeId: DevKit.Guid | null;
	readonly Upgrading: boolean | null;
}

const RoleTemplatePrivilegesFieldConfig: DevKit.IWebApiFieldConfigMap = {
	IsBasic: { logicalName: 'isbasic', type: 'Boolean' },
	IsDeep: { logicalName: 'isdeep', type: 'Boolean' },
	IsGlobal: { logicalName: 'isglobal', type: 'Boolean' },
	IsLocal: { logicalName: 'islocal', type: 'Boolean' },
	PrivilegeId: { logicalName: 'privilegeid', readOnly: true },
	RoleTemplateId: { logicalName: 'roletemplateid', readOnly: true },
	RoleTemplatePrivilegeId: { logicalName: 'roletemplateprivilegeid' },
	Upgrading: { logicalName: 'upgrading', readOnly: true, type: 'Boolean' },
};

/**
 * RoleTemplatePrivileges WebApi class for early-bound style coding
 * Usage: const roleTemplatePrivileges = new RoleTemplatePrivilegesApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class RoleTemplatePrivilegesApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IRoleTemplatePrivilegesApi>(entity, 'roletemplateprivileges', '', RoleTemplatePrivilegesFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface RoleTemplatePrivilegesApi extends IRoleTemplatePrivilegesApi { }
