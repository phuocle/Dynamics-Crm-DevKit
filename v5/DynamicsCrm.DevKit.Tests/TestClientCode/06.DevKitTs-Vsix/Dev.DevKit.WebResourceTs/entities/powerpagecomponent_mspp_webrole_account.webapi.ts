/**
 * powerpagecomponent_mspp_webrole_account.webapi.ts - powerpagecomponent_mspp_webrole_account WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * powerpagecomponent_mspp_webrole_account WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface Ipowerpagecomponent_mspp_webrole_accountApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<Ipowerpagecomponent_mspp_webrole_accountApi, 'FormattedValue'>]: string };
	readonly accountid: DevKit.Guid | null;
	readonly powerpagecomponent_mspp_webrole_accountId: DevKit.Guid | null;
	readonly powerpagecomponentid: DevKit.Guid | null;
	readonly VersionNumber: number | null;
}

const powerpagecomponent_mspp_webrole_accountFieldConfig: DevKit.IWebApiFieldConfigMap = {
	accountid: { logicalName: 'accountid', readOnly: true },
	powerpagecomponent_mspp_webrole_accountId: { logicalName: 'powerpagecomponent_mspp_webrole_accountid', readOnly: true },
	powerpagecomponentid: { logicalName: 'powerpagecomponentid', readOnly: true },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * powerpagecomponent_mspp_webrole_account WebApi class for early-bound style coding
 * Usage: const powerpagecomponent_mspp_webrole_account = new powerpagecomponent_mspp_webrole_accountApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class powerpagecomponent_mspp_webrole_accountApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<Ipowerpagecomponent_mspp_webrole_accountApi>(entity, 'powerpagecomponent_mspp_webrole_account', '', powerpagecomponent_mspp_webrole_accountFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface powerpagecomponent_mspp_webrole_accountApi extends Ipowerpagecomponent_mspp_webrole_accountApi { }
