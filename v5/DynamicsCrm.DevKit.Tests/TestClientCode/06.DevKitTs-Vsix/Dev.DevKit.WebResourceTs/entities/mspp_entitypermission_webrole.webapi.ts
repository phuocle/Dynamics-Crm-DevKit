/**
 * mspp_entitypermission_webrole.webapi.ts - mspp_entitypermission_webrole WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for mspp_entitypermission_webrole
 * All fields return string representation of their values
 */
export interface Imspp_entitypermission_webroleFormattedValue {
	readonly mspp_entitypermission_webroleId: string;
	readonly mspp_entitypermissionid: string;
	readonly mspp_webroleid: string;
	readonly VersionNumber: string;
}

/**
 * mspp_entitypermission_webrole WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface Imspp_entitypermission_webroleApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: Imspp_entitypermission_webroleFormattedValue;
	readonly mspp_entitypermission_webroleId: DevKit.Guid | null;
	readonly mspp_entitypermissionid: DevKit.Guid | null;
	readonly mspp_webroleid: DevKit.Guid | null;
	readonly VersionNumber: number | null;
}

const mspp_entitypermission_webroleFieldConfig: DevKit.IWebApiFieldConfigMap = {
	mspp_entitypermission_webroleId: { logicalName: 'mspp_entitypermission_webroleid', readOnly: true },
	mspp_entitypermissionid: { logicalName: 'mspp_entitypermissionid', readOnly: true },
	mspp_webroleid: { logicalName: 'mspp_webroleid', readOnly: true },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * mspp_entitypermission_webrole WebApi class for early-bound style coding
 * Usage: const mspp_entitypermission_webrole = new mspp_entitypermission_webroleApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class mspp_entitypermission_webroleApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<Imspp_entitypermission_webroleApi>(entity, 'mspp_entitypermission_webrole', '', mspp_entitypermission_webroleFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface mspp_entitypermission_webroleApi extends Imspp_entitypermission_webroleApi { }
