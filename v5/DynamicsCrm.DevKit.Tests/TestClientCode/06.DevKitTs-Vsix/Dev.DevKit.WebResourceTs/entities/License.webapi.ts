/**
 * License.webapi.ts - License WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for License
 * All fields return string representation of their values
 */
export interface ILicenseFormattedValue {
	readonly InstalledOn_UtcDateOnly: string;
	readonly LicenseId: string;
	readonly LicenseKey: string;
	readonly LicenseType: string;
	readonly OrganizationId: string;
	readonly TimeZoneRuleVersionNumber: string;
	readonly UTCConversionTimeZoneCode: string;
}

/**
 * License WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface ILicenseApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: ILicenseFormattedValue;
	/** Date and time when the license was installed. */
	InstalledOn_UtcDateOnly: Date | null;
	/** Unique identifier of the license. */
	LicenseId: DevKit.Guid | null;
	/** Key for the license. */
	LicenseKey: string | null;
	/** Type of license, such as Professional, Standard, or Suite. */
	LicenseType: DevKit.Guid | null;
	/** Unique identifier of the organization associated with the license. */
	readonly OrganizationId: DevKit.Guid | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
}

const LicenseFieldConfig: DevKit.IWebApiFieldConfigMap = {
	InstalledOn_UtcDateOnly: { logicalName: 'installedon', type: 'DateTime' },
	LicenseId: { logicalName: 'licenseid' },
	LicenseKey: { logicalName: 'licensekey' },
	LicenseType: { logicalName: 'licensetype' },
	OrganizationId: { schemaName: 'OrganizationId', logicalName: '_organizationid_value', readOnly: true, entityCollectionName: 'organizations', entityLogicalName: 'organization' },
	TimeZoneRuleVersionNumber: { logicalName: 'timezoneruleversionnumber', type: 'Integer' },
	UTCConversionTimeZoneCode: { logicalName: 'utcconversiontimezonecode', type: 'Integer' },
};

/**
 * License WebApi class for early-bound style coding
 * Usage: const license = new LicenseApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class LicenseApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<ILicenseApi>(entity, 'license', 'licenses', LicenseFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface LicenseApi extends ILicenseApi { }
