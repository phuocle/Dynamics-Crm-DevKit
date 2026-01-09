/**
 * SystemUserLicenses.webapi.ts - SystemUserLicenses WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * SystemUserLicenses WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface ISystemUserLicensesApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<ISystemUserLicensesApi, 'FormattedValue'>]: string };
	readonly LicenseId: DevKit.Guid | null;
	readonly SystemUserId: DevKit.Guid | null;
	/** Unique identifier of the user licenses. */
	SystemUserLicenseId: DevKit.Guid | null;
	readonly VersionNumber: number | null;
}

const SystemUserLicensesFieldConfig: DevKit.IWebApiFieldConfigMap = {
	LicenseId: { logicalName: 'licenseid', readOnly: true },
	SystemUserId: { logicalName: 'systemuserid', readOnly: true },
	SystemUserLicenseId: { logicalName: 'systemuserlicenseid' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * SystemUserLicenses WebApi class for early-bound style coding
 * Usage: const systemUserLicenses = new SystemUserLicensesApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class SystemUserLicensesApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<ISystemUserLicensesApi>(entity, 'systemuserlicenses', '', SystemUserLicensesFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface SystemUserLicensesApi extends ISystemUserLicensesApi { }
