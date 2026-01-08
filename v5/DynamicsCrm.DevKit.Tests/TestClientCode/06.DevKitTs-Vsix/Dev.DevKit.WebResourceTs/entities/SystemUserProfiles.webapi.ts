/**
 * SystemUserProfiles.webapi.ts - SystemUserProfiles WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for SystemUserProfiles
 * All fields return string representation of their values
 */
export interface ISystemUserProfilesFormattedValue {
	readonly FieldSecurityProfileId: string;
	readonly SystemUserId: string;
	readonly SystemUserProfileId: string;
	readonly VersionNumber: string;
}

/**
 * SystemUserProfiles WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface ISystemUserProfilesApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: ISystemUserProfilesFormattedValue;
	readonly FieldSecurityProfileId: DevKit.Guid | null;
	readonly SystemUserId: DevKit.Guid | null;
	/** For internal use only. */
	SystemUserProfileId: DevKit.Guid | null;
	readonly VersionNumber: number | null;
}

const SystemUserProfilesFieldConfig: DevKit.IWebApiFieldConfigMap = {
	FieldSecurityProfileId: { logicalName: 'fieldsecurityprofileid', readOnly: true },
	SystemUserId: { logicalName: 'systemuserid', readOnly: true },
	SystemUserProfileId: { logicalName: 'systemuserprofileid' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * SystemUserProfiles WebApi class for early-bound style coding
 * Usage: const systemUserProfiles = new SystemUserProfilesApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class SystemUserProfilesApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<ISystemUserProfilesApi>(entity, 'systemuserprofiles', '', SystemUserProfilesFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface SystemUserProfilesApi extends ISystemUserProfilesApi { }
