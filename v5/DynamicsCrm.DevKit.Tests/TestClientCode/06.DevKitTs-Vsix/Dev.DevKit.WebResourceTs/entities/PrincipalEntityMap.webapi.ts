/**
 * PrincipalEntityMap.webapi.ts - PrincipalEntityMap WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for PrincipalEntityMap
 * All fields return string representation of their values
 */
export interface IPrincipalEntityMapFormattedValue {
	readonly PrincipalEntityMapId: string;
	readonly PrincipalId: string;
	readonly VersionNumber: string;
}

/**
 * PrincipalEntityMap WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IPrincipalEntityMapApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: IPrincipalEntityMapFormattedValue;
	/** For internal use only. */
	PrincipalEntityMapId: DevKit.Guid | null;
	readonly PrincipalId: DevKit.Guid | null;
	readonly VersionNumber: number | null;
}

const PrincipalEntityMapFieldConfig: DevKit.IWebApiFieldConfigMap = {
	PrincipalEntityMapId: { logicalName: 'principalentitymapid' },
	PrincipalId: { logicalName: 'principalid', readOnly: true },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * PrincipalEntityMap WebApi class for early-bound style coding
 * Usage: const principalEntityMap = new PrincipalEntityMapApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class PrincipalEntityMapApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IPrincipalEntityMapApi>(entity, 'principalentitymap', '', PrincipalEntityMapFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface PrincipalEntityMapApi extends IPrincipalEntityMapApi { }
