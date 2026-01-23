/**
 * SystemUserBusinessUnitEntityMap.webapi.ts - SystemUserBusinessUnitEntityMap WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * SystemUserBusinessUnitEntityMap WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface ISystemUserBusinessUnitEntityMapApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<ISystemUserBusinessUnitEntityMapApi, 'FormattedValue'>]: string };
	readonly BusinessUnitId: DevKit.Guid | null;
	readonly ReadPrivilegeDepth: number | null;
	/** Unique identifier of the SystemUserBusinessUnitEntityMap . */
	SystemUserBusinessUnitEntityMapId: DevKit.Guid | null;
	readonly SystemUserId: DevKit.Guid | null;
	readonly VersionNumber: number | null;
}

const SystemUserBusinessUnitEntityMapFieldConfig: DevKit.IWebApiFieldConfigMap = {
	BusinessUnitId: { logicalName: 'businessunitid', readOnly: true },
	ReadPrivilegeDepth: { logicalName: 'readprivilegedepth', readOnly: true, type: 'Integer' },
	SystemUserBusinessUnitEntityMapId: { logicalName: 'systemuserbusinessunitentitymapid' },
	SystemUserId: { logicalName: 'systemuserid', readOnly: true },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * SystemUserBusinessUnitEntityMap WebApi class for early-bound style coding
 * Usage: const systemUserBusinessUnitEntityMap = new SystemUserBusinessUnitEntityMapApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class SystemUserBusinessUnitEntityMapApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<ISystemUserBusinessUnitEntityMapApi>(entity, 'systemuserbusinessunitentitymap', '', SystemUserBusinessUnitEntityMapFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface SystemUserBusinessUnitEntityMapApi extends ISystemUserBusinessUnitEntityMapApi { }
