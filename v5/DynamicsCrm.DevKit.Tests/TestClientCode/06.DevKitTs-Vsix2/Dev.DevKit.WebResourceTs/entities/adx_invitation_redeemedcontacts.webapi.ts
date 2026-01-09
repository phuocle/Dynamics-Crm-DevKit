/**
 * adx_invitation_redeemedcontacts.webapi.ts - adx_invitation_redeemedcontacts WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * adx_invitation_redeemedcontacts WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface Iadx_invitation_redeemedcontactsApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<Iadx_invitation_redeemedcontactsApi, 'FormattedValue'>]: string };
	readonly adx_invitation_redeemedcontactsId: DevKit.Guid | null;
	readonly adx_invitationid: DevKit.Guid | null;
	readonly contactid: DevKit.Guid | null;
	readonly VersionNumber: number | null;
}

const adx_invitation_redeemedcontactsFieldConfig: DevKit.IWebApiFieldConfigMap = {
	adx_invitation_redeemedcontactsId: { logicalName: 'adx_invitation_redeemedcontactsid', readOnly: true },
	adx_invitationid: { logicalName: 'adx_invitationid', readOnly: true },
	contactid: { logicalName: 'contactid', readOnly: true },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * adx_invitation_redeemedcontacts WebApi class for early-bound style coding
 * Usage: const adx_invitation_redeemedcontacts = new adx_invitation_redeemedcontactsApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class adx_invitation_redeemedcontactsApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<Iadx_invitation_redeemedcontactsApi>(entity, 'adx_invitation_redeemedcontacts', '', adx_invitation_redeemedcontactsFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface adx_invitation_redeemedcontactsApi extends Iadx_invitation_redeemedcontactsApi { }
