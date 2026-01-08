/**
 * mspp_webpageaccesscontrolrule_webrole.webapi.ts - mspp_webpageaccesscontrolrule_webrole WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for mspp_webpageaccesscontrolrule_webrole
 * All fields return string representation of their values
 */
export interface Imspp_webpageaccesscontrolrule_webroleFormattedValue {
	readonly mspp_webpageaccesscontrolrule_webroleId: string;
	readonly mspp_webpageaccesscontrolruleid: string;
	readonly mspp_webroleid: string;
	readonly VersionNumber: string;
}

/**
 * mspp_webpageaccesscontrolrule_webrole WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface Imspp_webpageaccesscontrolrule_webroleApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: Imspp_webpageaccesscontrolrule_webroleFormattedValue;
	readonly mspp_webpageaccesscontrolrule_webroleId: DevKit.Guid | null;
	readonly mspp_webpageaccesscontrolruleid: DevKit.Guid | null;
	readonly mspp_webroleid: DevKit.Guid | null;
	readonly VersionNumber: number | null;
}

const mspp_webpageaccesscontrolrule_webroleFieldConfig: DevKit.IWebApiFieldConfigMap = {
	mspp_webpageaccesscontrolrule_webroleId: { logicalName: 'mspp_webpageaccesscontrolrule_webroleid', readOnly: true },
	mspp_webpageaccesscontrolruleid: { logicalName: 'mspp_webpageaccesscontrolruleid', readOnly: true },
	mspp_webroleid: { logicalName: 'mspp_webroleid', readOnly: true },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * mspp_webpageaccesscontrolrule_webrole WebApi class for early-bound style coding
 * Usage: const mspp_webpageaccesscontrolrule_webrole = new mspp_webpageaccesscontrolrule_webroleApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class mspp_webpageaccesscontrolrule_webroleApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<Imspp_webpageaccesscontrolrule_webroleApi>(entity, 'mspp_webpageaccesscontrolrule_webrole', '', mspp_webpageaccesscontrolrule_webroleFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface mspp_webpageaccesscontrolrule_webroleApi extends Imspp_webpageaccesscontrolrule_webroleApi { }
