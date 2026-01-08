/**
 * SystemUserManagerMap.webapi.ts - SystemUserManagerMap WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * SystemUserManagerMap WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface ISystemUserManagerMapApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<ISystemUserManagerMapApi, 'FormattedValue'>]: string };
	readonly HierarchyLevel: number | null;
	/** For internal use only. */
	ParentSystemUserId: DevKit.Guid | null;
	/** For internal use only. */
	SystemUserId: DevKit.Guid | null;
	/** For internal use only. */
	SystemUserManagerMapId: DevKit.Guid | null;
	readonly VersionNumber: number | null;
}

const SystemUserManagerMapFieldConfig: DevKit.IWebApiFieldConfigMap = {
	HierarchyLevel: { logicalName: 'hierarchylevel', readOnly: true, type: 'Integer' },
	ParentSystemUserId: { logicalName: 'parentsystemuserid' },
	SystemUserId: { logicalName: 'systemuserid' },
	SystemUserManagerMapId: { logicalName: 'systemusermanagermapid' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * SystemUserManagerMap WebApi class for early-bound style coding
 * Usage: const systemUserManagerMap = new SystemUserManagerMapApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class SystemUserManagerMapApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<ISystemUserManagerMapApi>(entity, 'systemusermanagermap', 'systemusermanagermaps', SystemUserManagerMapFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface SystemUserManagerMapApi extends ISystemUserManagerMapApi { }
