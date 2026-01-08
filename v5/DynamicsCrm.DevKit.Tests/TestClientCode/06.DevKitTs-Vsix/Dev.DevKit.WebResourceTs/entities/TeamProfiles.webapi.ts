/**
 * TeamProfiles.webapi.ts - TeamProfiles WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * TeamProfiles WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface ITeamProfilesApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<ITeamProfilesApi, 'FormattedValue'>]: string };
	readonly FieldSecurityProfileId: DevKit.Guid | null;
	readonly TeamId: DevKit.Guid | null;
	/** For internal use only. */
	TeamProfileId: DevKit.Guid | null;
	readonly VersionNumber: number | null;
}

const TeamProfilesFieldConfig: DevKit.IWebApiFieldConfigMap = {
	FieldSecurityProfileId: { logicalName: 'fieldsecurityprofileid', readOnly: true },
	TeamId: { logicalName: 'teamid', readOnly: true },
	TeamProfileId: { logicalName: 'teamprofileid' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * TeamProfiles WebApi class for early-bound style coding
 * Usage: const teamProfiles = new TeamProfilesApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class TeamProfilesApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<ITeamProfilesApi>(entity, 'teamprofiles', 'teamprofilescollection', TeamProfilesFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface TeamProfilesApi extends ITeamProfilesApi { }
