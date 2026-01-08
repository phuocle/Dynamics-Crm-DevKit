/**
 * SystemUserAuthorizationChangeTracker.webapi.ts - SystemUserAuthorizationChangeTracker WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * SystemUserAuthorizationChangeTracker WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface ISystemUserAuthorizationChangeTrackerApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<ISystemUserAuthorizationChangeTrackerApi, 'FormattedValue'>]: string };
	/** Date and time when the column ChangedVersionNumber was changed. */
	readonly ChangedOn_UtcDateAndTime: Date | null;
	/** Database time stamp when user authorization settings were changed */
	readonly ChangedVersionNumber: number | null;
	/** Date and time when the column ComputedVersionNumber was changed. */
	readonly ComputedOn_UtcDateAndTime: Date | null;
	/** Database time stamp when user authorization data were started recompute */
	readonly ComputedVersionNumber: number | null;
	/** Unique identifier for the user */
	SystemUserId: DevKit.Guid | null;
}

const SystemUserAuthorizationChangeTrackerFieldConfig: DevKit.IWebApiFieldConfigMap = {
	ChangedOn_UtcDateAndTime: { logicalName: 'changedon', readOnly: true, type: 'DateTime' },
	ChangedVersionNumber: { logicalName: 'changedversionnumber', readOnly: true, type: 'Integer' },
	ComputedOn_UtcDateAndTime: { logicalName: 'computedon', readOnly: true, type: 'DateTime' },
	ComputedVersionNumber: { logicalName: 'computedversionnumber', readOnly: true, type: 'Integer' },
	SystemUserId: { logicalName: 'systemuserid' },
};

/**
 * SystemUserAuthorizationChangeTracker WebApi class for early-bound style coding
 * Usage: const systemUserAuthorizationChangeTracker = new SystemUserAuthorizationChangeTrackerApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class SystemUserAuthorizationChangeTrackerApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<ISystemUserAuthorizationChangeTrackerApi>(entity, 'systemuserauthorizationchangetracker', 'systemuserauthorizationchangetrackers', SystemUserAuthorizationChangeTrackerFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface SystemUserAuthorizationChangeTrackerApi extends ISystemUserAuthorizationChangeTrackerApi { }
