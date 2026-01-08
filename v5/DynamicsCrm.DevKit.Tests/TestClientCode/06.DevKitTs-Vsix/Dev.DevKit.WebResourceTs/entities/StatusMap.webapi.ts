/**
 * StatusMap.webapi.ts - StatusMap WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * StatusMap WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IStatusMapApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<IStatusMapApi, 'FormattedValue'>]: string };
	IsDefault: boolean | null;
	readonly OrganizationId: DevKit.Guid | null;
	readonly State: number | null;
	readonly Status: number | null;
	/** Unique identifier of the status map. */
	StatusMapId: DevKit.Guid | null;
	readonly VersionNumber: number | null;
}

const StatusMapFieldConfig: DevKit.IWebApiFieldConfigMap = {
	IsDefault: { logicalName: 'isdefault', type: 'Boolean' },
	OrganizationId: { logicalName: 'organizationid', readOnly: true },
	State: { logicalName: 'state', readOnly: true, type: 'Integer' },
	Status: { logicalName: 'status', readOnly: true, type: 'Integer' },
	StatusMapId: { logicalName: 'statusmapid' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * StatusMap WebApi class for early-bound style coding
 * Usage: const statusMap = new StatusMapApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class StatusMapApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IStatusMapApi>(entity, 'statusmap', 'statusmaps', StatusMapFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface StatusMapApi extends IStatusMapApi { }
