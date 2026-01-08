/**
 * TeamSyncAttributeMappingProfiles.webapi.ts - TeamSyncAttributeMappingProfiles WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * TeamSyncAttributeMappingProfiles WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface ITeamSyncAttributeMappingProfilesApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<ITeamSyncAttributeMappingProfilesApi, 'FormattedValue'>]: string };
	readonly SyncAttributeMappingProfileId: DevKit.Guid | null;
	readonly TeamId: DevKit.Guid | null;
	/** For internal use only. */
	TeamSyncAttributeMappingProfileId: DevKit.Guid | null;
	readonly VersionNumber: number | null;
}

const TeamSyncAttributeMappingProfilesFieldConfig: DevKit.IWebApiFieldConfigMap = {
	SyncAttributeMappingProfileId: { logicalName: 'syncattributemappingprofileid', readOnly: true },
	TeamId: { logicalName: 'teamid', readOnly: true },
	TeamSyncAttributeMappingProfileId: { logicalName: 'teamsyncattributemappingprofileid' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * TeamSyncAttributeMappingProfiles WebApi class for early-bound style coding
 * Usage: const teamSyncAttributeMappingProfiles = new TeamSyncAttributeMappingProfilesApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class TeamSyncAttributeMappingProfilesApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<ITeamSyncAttributeMappingProfilesApi>(entity, 'teamsyncattributemappingprofiles', 'teamsyncattributemappingprofilescollection', TeamSyncAttributeMappingProfilesFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface TeamSyncAttributeMappingProfilesApi extends ITeamSyncAttributeMappingProfilesApi { }
