/**
 * mspp_columnpermissionprofile_webrole.webapi.ts - mspp_columnpermissionprofile_webrole WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * mspp_columnpermissionprofile_webrole WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface Imspp_columnpermissionprofile_webroleApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<Imspp_columnpermissionprofile_webroleApi, 'FormattedValue'>]: string };
	readonly mspp_columnpermissionprofile_webroleId: DevKit.Guid | null;
	readonly mspp_columnpermissionprofileid: DevKit.Guid | null;
	readonly mspp_webroleid: DevKit.Guid | null;
	readonly VersionNumber: number | null;
}

const mspp_columnpermissionprofile_webroleFieldConfig: DevKit.IWebApiFieldConfigMap = {
	mspp_columnpermissionprofile_webroleId: { logicalName: 'mspp_columnpermissionprofile_webroleid', readOnly: true },
	mspp_columnpermissionprofileid: { logicalName: 'mspp_columnpermissionprofileid', readOnly: true },
	mspp_webroleid: { logicalName: 'mspp_webroleid', readOnly: true },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * mspp_columnpermissionprofile_webrole WebApi class for early-bound style coding
 * Usage: const mspp_columnpermissionprofile_webrole = new mspp_columnpermissionprofile_webroleApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class mspp_columnpermissionprofile_webroleApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<Imspp_columnpermissionprofile_webroleApi>(entity, 'mspp_columnpermissionprofile_webrole', '', mspp_columnpermissionprofile_webroleFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface mspp_columnpermissionprofile_webroleApi extends Imspp_columnpermissionprofile_webroleApi { }
