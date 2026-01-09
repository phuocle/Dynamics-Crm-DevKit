/**
 * adx_invitation_mspp_webrole_powerpagecomponent.webapi.ts - adx_invitation_mspp_webrole_powerpagecomponent WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * adx_invitation_mspp_webrole_powerpagecomponent WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface Iadx_invitation_mspp_webrole_powerpagecomponentApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<Iadx_invitation_mspp_webrole_powerpagecomponentApi, 'FormattedValue'>]: string };
	readonly adx_invitation_mspp_webrole_powerpagecomponentId: DevKit.Guid | null;
	readonly adx_invitationid: DevKit.Guid | null;
	readonly powerpagecomponentid: DevKit.Guid | null;
	readonly VersionNumber: number | null;
}

const adx_invitation_mspp_webrole_powerpagecomponentFieldConfig: DevKit.IWebApiFieldConfigMap = {
	adx_invitation_mspp_webrole_powerpagecomponentId: { logicalName: 'adx_invitation_mspp_webrole_powerpagecomponentid', readOnly: true },
	adx_invitationid: { logicalName: 'adx_invitationid', readOnly: true },
	powerpagecomponentid: { logicalName: 'powerpagecomponentid', readOnly: true },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * adx_invitation_mspp_webrole_powerpagecomponent WebApi class for early-bound style coding
 * Usage: const adx_invitation_mspp_webrole_powerpagecomponent = new adx_invitation_mspp_webrole_powerpagecomponentApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class adx_invitation_mspp_webrole_powerpagecomponentApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<Iadx_invitation_mspp_webrole_powerpagecomponentApi>(entity, 'adx_invitation_mspp_webrole_powerpagecomponent', '', adx_invitation_mspp_webrole_powerpagecomponentFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface adx_invitation_mspp_webrole_powerpagecomponentApi extends Iadx_invitation_mspp_webrole_powerpagecomponentApi { }
