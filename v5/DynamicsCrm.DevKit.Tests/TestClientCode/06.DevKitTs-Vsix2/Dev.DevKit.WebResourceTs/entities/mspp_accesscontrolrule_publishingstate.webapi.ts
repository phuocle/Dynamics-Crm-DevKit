/**
 * mspp_accesscontrolrule_publishingstate.webapi.ts - mspp_accesscontrolrule_publishingstate WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * mspp_accesscontrolrule_publishingstate WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface Imspp_accesscontrolrule_publishingstateApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<Imspp_accesscontrolrule_publishingstateApi, 'FormattedValue'>]: string };
	readonly mspp_accesscontrolrule_publishingstateId: DevKit.Guid | null;
	readonly mspp_publishingstateid: DevKit.Guid | null;
	readonly mspp_webpageaccesscontrolruleid: DevKit.Guid | null;
	readonly VersionNumber: number | null;
}

const mspp_accesscontrolrule_publishingstateFieldConfig: DevKit.IWebApiFieldConfigMap = {
	mspp_accesscontrolrule_publishingstateId: { logicalName: 'mspp_accesscontrolrule_publishingstateid', readOnly: true },
	mspp_publishingstateid: { logicalName: 'mspp_publishingstateid', readOnly: true },
	mspp_webpageaccesscontrolruleid: { logicalName: 'mspp_webpageaccesscontrolruleid', readOnly: true },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * mspp_accesscontrolrule_publishingstate WebApi class for early-bound style coding
 * Usage: const mspp_accesscontrolrule_publishingstate = new mspp_accesscontrolrule_publishingstateApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class mspp_accesscontrolrule_publishingstateApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<Imspp_accesscontrolrule_publishingstateApi>(entity, 'mspp_accesscontrolrule_publishingstate', '', mspp_accesscontrolrule_publishingstateFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface mspp_accesscontrolrule_publishingstateApi extends Imspp_accesscontrolrule_publishingstateApi { }
