/**
 * mspp_websiteaccess_webrole.webapi.ts - mspp_websiteaccess_webrole WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for mspp_websiteaccess_webrole
 * All fields return string representation of their values
 */
export interface Imspp_websiteaccess_webroleFormattedValue {
	readonly mspp_webroleid: string;
	readonly mspp_websiteaccess_webroleId: string;
	readonly mspp_websiteaccessid: string;
	readonly VersionNumber: string;
}

/**
 * mspp_websiteaccess_webrole WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface Imspp_websiteaccess_webroleApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: Imspp_websiteaccess_webroleFormattedValue;
	readonly mspp_webroleid: DevKit.Guid | null;
	readonly mspp_websiteaccess_webroleId: DevKit.Guid | null;
	readonly mspp_websiteaccessid: DevKit.Guid | null;
	readonly VersionNumber: number | null;
}

const mspp_websiteaccess_webroleFieldConfig: DevKit.IWebApiFieldConfigMap = {
	mspp_webroleid: { logicalName: 'mspp_webroleid', readOnly: true },
	mspp_websiteaccess_webroleId: { logicalName: 'mspp_websiteaccess_webroleid', readOnly: true },
	mspp_websiteaccessid: { logicalName: 'mspp_websiteaccessid', readOnly: true },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * mspp_websiteaccess_webrole WebApi class for early-bound style coding
 * Usage: const mspp_websiteaccess_webrole = new mspp_websiteaccess_webroleApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class mspp_websiteaccess_webroleApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<Imspp_websiteaccess_webroleApi>(entity, 'mspp_websiteaccess_webrole', '', mspp_websiteaccess_webroleFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface mspp_websiteaccess_webroleApi extends Imspp_websiteaccess_webroleApi { }
