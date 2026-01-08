/**
 * powerpagecomponent_webrole_systemuser.webapi.ts - powerpagecomponent_webrole_systemuser WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for powerpagecomponent_webrole_systemuser
 * All fields return string representation of their values
 */
export interface Ipowerpagecomponent_webrole_systemuserFormattedValue {
	readonly powerpagecomponent_webrole_systemuserId: string;
	readonly powerpagecomponentid: string;
	readonly systemuserid: string;
	readonly VersionNumber: string;
}

/**
 * powerpagecomponent_webrole_systemuser WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface Ipowerpagecomponent_webrole_systemuserApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: Ipowerpagecomponent_webrole_systemuserFormattedValue;
	readonly powerpagecomponent_webrole_systemuserId: DevKit.Guid | null;
	readonly powerpagecomponentid: DevKit.Guid | null;
	readonly systemuserid: DevKit.Guid | null;
	readonly VersionNumber: number | null;
}

const powerpagecomponent_webrole_systemuserFieldConfig: DevKit.IWebApiFieldConfigMap = {
	powerpagecomponent_webrole_systemuserId: { logicalName: 'powerpagecomponent_webrole_systemuserid', readOnly: true },
	powerpagecomponentid: { logicalName: 'powerpagecomponentid', readOnly: true },
	systemuserid: { logicalName: 'systemuserid', readOnly: true },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * powerpagecomponent_webrole_systemuser WebApi class for early-bound style coding
 * Usage: const powerpagecomponent_webrole_systemuser = new powerpagecomponent_webrole_systemuserApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class powerpagecomponent_webrole_systemuserApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<Ipowerpagecomponent_webrole_systemuserApi>(entity, 'powerpagecomponent_webrole_systemuser', '', powerpagecomponent_webrole_systemuserFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface powerpagecomponent_webrole_systemuserApi extends Ipowerpagecomponent_webrole_systemuserApi { }
