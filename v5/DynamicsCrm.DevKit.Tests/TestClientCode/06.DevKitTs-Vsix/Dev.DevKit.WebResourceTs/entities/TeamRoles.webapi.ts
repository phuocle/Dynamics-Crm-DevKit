/**
 * TeamRoles.webapi.ts - TeamRoles WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * TeamRoles WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface ITeamRolesApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<ITeamRolesApi, 'FormattedValue'>]: string };
	readonly RoleId: DevKit.Guid | null;
	readonly TeamId: DevKit.Guid | null;
	/** For internal use only. */
	TeamRoleId: DevKit.Guid | null;
	readonly VersionNumber: number | null;
}

const TeamRolesFieldConfig: DevKit.IWebApiFieldConfigMap = {
	RoleId: { logicalName: 'roleid', readOnly: true },
	TeamId: { logicalName: 'teamid', readOnly: true },
	TeamRoleId: { logicalName: 'teamroleid' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * TeamRoles WebApi class for early-bound style coding
 * Usage: const teamRoles = new TeamRolesApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class TeamRolesApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<ITeamRolesApi>(entity, 'teamroles', '', TeamRolesFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface TeamRolesApi extends ITeamRolesApi { }
