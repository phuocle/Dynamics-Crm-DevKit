/**
 * mspp_publishingstatetransitionrule_webrole.webapi.ts - mspp_publishingstatetransitionrule_webrole WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * mspp_publishingstatetransitionrule_webrole WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface Imspp_publishingstatetransitionrule_webroleApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<Imspp_publishingstatetransitionrule_webroleApi, 'FormattedValue'>]: string };
	readonly mspp_publishingstatetransitionrule_webroleId: DevKit.Guid | null;
	readonly mspp_publishingstatetransitionruleid: DevKit.Guid | null;
	readonly mspp_webroleid: DevKit.Guid | null;
	readonly VersionNumber: number | null;
}

const mspp_publishingstatetransitionrule_webroleFieldConfig: DevKit.IWebApiFieldConfigMap = {
	mspp_publishingstatetransitionrule_webroleId: { logicalName: 'mspp_publishingstatetransitionrule_webroleid', readOnly: true },
	mspp_publishingstatetransitionruleid: { logicalName: 'mspp_publishingstatetransitionruleid', readOnly: true },
	mspp_webroleid: { logicalName: 'mspp_webroleid', readOnly: true },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * mspp_publishingstatetransitionrule_webrole WebApi class for early-bound style coding
 * Usage: const mspp_publishingstatetransitionrule_webrole = new mspp_publishingstatetransitionrule_webroleApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class mspp_publishingstatetransitionrule_webroleApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<Imspp_publishingstatetransitionrule_webroleApi>(entity, 'mspp_publishingstatetransitionrule_webrole', '', mspp_publishingstatetransitionrule_webroleFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface mspp_publishingstatetransitionrule_webroleApi extends Imspp_publishingstatetransitionrule_webroleApi { }
