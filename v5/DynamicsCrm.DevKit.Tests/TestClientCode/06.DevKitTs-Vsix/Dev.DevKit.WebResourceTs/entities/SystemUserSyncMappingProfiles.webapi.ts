/**
 * SystemUserSyncMappingProfiles.webapi.ts - SystemUserSyncMappingProfiles WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * SystemUserSyncMappingProfiles WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface ISystemUserSyncMappingProfilesApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<ISystemUserSyncMappingProfilesApi, 'FormattedValue'>]: string };
	readonly SyncAttributeMappingProfileId: DevKit.Guid | null;
	readonly SystemUserId: DevKit.Guid | null;
	/** For internal use only. */
	SystemUserSyncMappingProfileId: DevKit.Guid | null;
	readonly VersionNumber: number | null;
}

const SystemUserSyncMappingProfilesFieldConfig: DevKit.IWebApiFieldConfigMap = {
	SyncAttributeMappingProfileId: { logicalName: 'syncattributemappingprofileid', readOnly: true },
	SystemUserId: { logicalName: 'systemuserid', readOnly: true },
	SystemUserSyncMappingProfileId: { logicalName: 'systemusersyncmappingprofileid' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * SystemUserSyncMappingProfiles WebApi class for early-bound style coding
 * Usage: const systemUserSyncMappingProfiles = new SystemUserSyncMappingProfilesApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class SystemUserSyncMappingProfilesApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<ISystemUserSyncMappingProfilesApi>(entity, 'systemusersyncmappingprofiles', '', SystemUserSyncMappingProfilesFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface SystemUserSyncMappingProfilesApi extends ISystemUserSyncMappingProfilesApi { }
