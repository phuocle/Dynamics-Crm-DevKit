/**
 * adx_invitation_invitecontacts.webapi.ts - adx_invitation_invitecontacts WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * adx_invitation_invitecontacts WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface Iadx_invitation_invitecontactsApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<Iadx_invitation_invitecontactsApi, 'FormattedValue'>]: string };
	readonly adx_invitation_invitecontactsId: DevKit.Guid | null;
	readonly adx_invitationid: DevKit.Guid | null;
	readonly contactid: DevKit.Guid | null;
	readonly VersionNumber: number | null;
}

const adx_invitation_invitecontactsFieldConfig: DevKit.IWebApiFieldConfigMap = {
	adx_invitation_invitecontactsId: { logicalName: 'adx_invitation_invitecontactsid', readOnly: true },
	adx_invitationid: { logicalName: 'adx_invitationid', readOnly: true },
	contactid: { logicalName: 'contactid', readOnly: true },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * adx_invitation_invitecontacts WebApi class for early-bound style coding
 * Usage: const adx_invitation_invitecontacts = new adx_invitation_invitecontactsApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class adx_invitation_invitecontactsApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<Iadx_invitation_invitecontactsApi>(entity, 'adx_invitation_invitecontacts', '', adx_invitation_invitecontactsFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface adx_invitation_invitecontactsApi extends Iadx_invitation_invitecontactsApi { }
