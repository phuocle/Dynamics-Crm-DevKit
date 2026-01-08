/**
 * msdyn_aiodlabel_msdyn_aiconfiguration.webapi.ts - msdyn_aiodlabel_msdyn_aiconfiguration WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for msdyn_aiodlabel_msdyn_aiconfiguration
 * All fields return string representation of their values
 */
export interface Imsdyn_aiodlabel_msdyn_aiconfigurationFormattedValue {
	readonly msdyn_aiconfigurationid: string;
	readonly msdyn_aiodlabel_msdyn_aiconfigurationId: string;
	readonly msdyn_aiodlabelid: string;
	readonly VersionNumber: string;
}

/**
 * msdyn_aiodlabel_msdyn_aiconfiguration WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface Imsdyn_aiodlabel_msdyn_aiconfigurationApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: Imsdyn_aiodlabel_msdyn_aiconfigurationFormattedValue;
	readonly msdyn_aiconfigurationid: DevKit.Guid | null;
	readonly msdyn_aiodlabel_msdyn_aiconfigurationId: DevKit.Guid | null;
	readonly msdyn_aiodlabelid: DevKit.Guid | null;
	readonly VersionNumber: number | null;
}

const msdyn_aiodlabel_msdyn_aiconfigurationFieldConfig: DevKit.IWebApiFieldConfigMap = {
	msdyn_aiconfigurationid: { logicalName: 'msdyn_aiconfigurationid', readOnly: true },
	msdyn_aiodlabel_msdyn_aiconfigurationId: { logicalName: 'msdyn_aiodlabel_msdyn_aiconfigurationid', readOnly: true },
	msdyn_aiodlabelid: { logicalName: 'msdyn_aiodlabelid', readOnly: true },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * msdyn_aiodlabel_msdyn_aiconfiguration WebApi class for early-bound style coding
 * Usage: const msdyn_aiodlabel_msdyn_aiconfiguration = new msdyn_aiodlabel_msdyn_aiconfigurationApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class msdyn_aiodlabel_msdyn_aiconfigurationApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<Imsdyn_aiodlabel_msdyn_aiconfigurationApi>(entity, 'msdyn_aiodlabel_msdyn_aiconfiguration', '', msdyn_aiodlabel_msdyn_aiconfigurationFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface msdyn_aiodlabel_msdyn_aiconfigurationApi extends Imsdyn_aiodlabel_msdyn_aiconfigurationApi { }
