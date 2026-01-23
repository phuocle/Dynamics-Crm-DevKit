/**
 * TeamMembership.webapi.ts - TeamMembership WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * TeamMembership WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface ITeamMembershipApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<ITeamMembershipApi, 'FormattedValue'>]: string };
	readonly SystemUserId: DevKit.Guid | null;
	readonly TeamId: DevKit.Guid | null;
	/** Unique identifier of the team membership. */
	TeamMembershipId: DevKit.Guid | null;
	readonly VersionNumber: number | null;
}

const TeamMembershipFieldConfig: DevKit.IWebApiFieldConfigMap = {
	SystemUserId: { logicalName: 'systemuserid', readOnly: true },
	TeamId: { logicalName: 'teamid', readOnly: true },
	TeamMembershipId: { logicalName: 'teammembershipid' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * TeamMembership WebApi class for early-bound style coding
 * Usage: const teamMembership = new TeamMembershipApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class TeamMembershipApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<ITeamMembershipApi>(entity, 'teammembership', '', TeamMembershipFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface TeamMembershipApi extends ITeamMembershipApi { }
