/**
 * SystemUserRoles.webapi.ts - SystemUserRoles WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for SystemUserRoles
 * All fields return string representation of their values
 */
export interface ISystemUserRolesFormattedValue {
	readonly RoleId: string;
	readonly SystemUserId: string;
	readonly SystemUserRoleId: string;
	readonly VersionNumber: string;
}

/**
 * SystemUserRoles WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface ISystemUserRolesApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: ISystemUserRolesFormattedValue;
	readonly RoleId: DevKit.Guid | null;
	readonly SystemUserId: DevKit.Guid | null;
	/** For internal use only. */
	SystemUserRoleId: DevKit.Guid | null;
	readonly VersionNumber: number | null;
}

const SystemUserRolesFieldConfig: DevKit.IWebApiFieldConfigMap = {
	RoleId: { logicalName: 'roleid', readOnly: true },
	SystemUserId: { logicalName: 'systemuserid', readOnly: true },
	SystemUserRoleId: { logicalName: 'systemuserroleid' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * SystemUserRoles WebApi class for early-bound style coding
 * Usage: const systemUserRoles = new SystemUserRolesApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class SystemUserRolesApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<ISystemUserRolesApi>(entity, 'systemuserroles', '', SystemUserRolesFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface SystemUserRolesApi extends ISystemUserRolesApi { }
