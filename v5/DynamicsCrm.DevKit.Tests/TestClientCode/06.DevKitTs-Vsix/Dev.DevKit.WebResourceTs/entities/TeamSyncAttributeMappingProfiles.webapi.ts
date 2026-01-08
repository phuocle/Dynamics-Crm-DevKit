/**
 * TeamSyncAttributeMappingProfiles.webapi.ts - TeamSyncAttributeMappingProfiles WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for TeamSyncAttributeMappingProfiles
 * All fields return string representation of their values
 */
export interface ITeamSyncAttributeMappingProfilesFormattedValue {
	readonly SyncAttributeMappingProfileId: string;
	readonly TeamId: string;
	readonly TeamSyncAttributeMappingProfileId: string;
	readonly VersionNumber: string;
}

/**
 * TeamSyncAttributeMappingProfiles WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface ITeamSyncAttributeMappingProfilesApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: ITeamSyncAttributeMappingProfilesFormattedValue;
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
