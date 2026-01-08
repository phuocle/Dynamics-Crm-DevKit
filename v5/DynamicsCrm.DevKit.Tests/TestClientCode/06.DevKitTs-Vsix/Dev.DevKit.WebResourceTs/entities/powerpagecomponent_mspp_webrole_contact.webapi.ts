/**
 * powerpagecomponent_mspp_webrole_contact.webapi.ts - powerpagecomponent_mspp_webrole_contact WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for powerpagecomponent_mspp_webrole_contact
 * All fields return string representation of their values
 */
export interface Ipowerpagecomponent_mspp_webrole_contactFormattedValue {
	readonly contactid: string;
	readonly powerpagecomponent_mspp_webrole_contactId: string;
	readonly powerpagecomponentid: string;
	readonly VersionNumber: string;
}

/**
 * powerpagecomponent_mspp_webrole_contact WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface Ipowerpagecomponent_mspp_webrole_contactApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: Ipowerpagecomponent_mspp_webrole_contactFormattedValue;
	readonly contactid: DevKit.Guid | null;
	readonly powerpagecomponent_mspp_webrole_contactId: DevKit.Guid | null;
	readonly powerpagecomponentid: DevKit.Guid | null;
	readonly VersionNumber: number | null;
}

const powerpagecomponent_mspp_webrole_contactFieldConfig: DevKit.IWebApiFieldConfigMap = {
	contactid: { logicalName: 'contactid', readOnly: true },
	powerpagecomponent_mspp_webrole_contactId: { logicalName: 'powerpagecomponent_mspp_webrole_contactid', readOnly: true },
	powerpagecomponentid: { logicalName: 'powerpagecomponentid', readOnly: true },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * powerpagecomponent_mspp_webrole_contact WebApi class for early-bound style coding
 * Usage: const powerpagecomponent_mspp_webrole_contact = new powerpagecomponent_mspp_webrole_contactApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class powerpagecomponent_mspp_webrole_contactApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<Ipowerpagecomponent_mspp_webrole_contactApi>(entity, 'powerpagecomponent_mspp_webrole_contact', '', powerpagecomponent_mspp_webrole_contactFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface powerpagecomponent_mspp_webrole_contactApi extends Ipowerpagecomponent_mspp_webrole_contactApi { }
