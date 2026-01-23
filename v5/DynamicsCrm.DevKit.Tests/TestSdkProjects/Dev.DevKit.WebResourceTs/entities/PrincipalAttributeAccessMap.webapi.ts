/**
 * PrincipalAttributeAccessMap.webapi.ts - PrincipalAttributeAccessMap WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * PrincipalAttributeAccessMap WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IPrincipalAttributeAccessMapApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<IPrincipalAttributeAccessMapApi, 'FormattedValue'>]: string };
	AttributeId: DevKit.Guid | null;
	CreateAccess: number | null;
	/** Unique identifier of the principal attribute access. */
	PrincipalAttributeAccessMapId: DevKit.Guid | null;
	PrincipalId: DevKit.Guid | null;
	ReadAccess: number | null;
	readonly ReadUnMaskedAccess: number | null;
	UpdateAccess: number | null;
	readonly VersionNumber: number | null;
}

const PrincipalAttributeAccessMapFieldConfig: DevKit.IWebApiFieldConfigMap = {
	AttributeId: { logicalName: 'attributeid' },
	CreateAccess: { logicalName: 'createaccess', type: 'Integer' },
	PrincipalAttributeAccessMapId: { logicalName: 'principalattributeaccessmapid' },
	PrincipalId: { logicalName: 'principalid' },
	ReadAccess: { logicalName: 'readaccess', type: 'Integer' },
	ReadUnMaskedAccess: { logicalName: 'readunmaskedaccess', readOnly: true, type: 'Integer' },
	UpdateAccess: { logicalName: 'updateaccess', type: 'Integer' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * PrincipalAttributeAccessMap WebApi class for early-bound style coding
 * Usage: const principalAttributeAccessMap = new PrincipalAttributeAccessMapApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class PrincipalAttributeAccessMapApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IPrincipalAttributeAccessMapApi>(entity, 'principalattributeaccessmap', 'principalattributeaccessmaps', PrincipalAttributeAccessMapFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface PrincipalAttributeAccessMapApi extends IPrincipalAttributeAccessMapApi { }
