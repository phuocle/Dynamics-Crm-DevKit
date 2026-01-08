/**
 * msdyn_connectordatasource_environmentva.webapi.ts - msdyn_connectordatasource_environmentva WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * msdyn_connectordatasource_environmentva WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface Imsdyn_connectordatasource_environmentvaApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<Imsdyn_connectordatasource_environmentvaApi, 'FormattedValue'>]: string };
	readonly environmentvariabledefinitionid: DevKit.Guid | null;
	readonly msdyn_connectordatasource_environmentvaId: DevKit.Guid | null;
	readonly msdyn_connectordatasourceid: DevKit.Guid | null;
	readonly VersionNumber: number | null;
}

const msdyn_connectordatasource_environmentvaFieldConfig: DevKit.IWebApiFieldConfigMap = {
	environmentvariabledefinitionid: { logicalName: 'environmentvariabledefinitionid', readOnly: true },
	msdyn_connectordatasource_environmentvaId: { logicalName: 'msdyn_connectordatasource_environmentvaid', readOnly: true },
	msdyn_connectordatasourceid: { logicalName: 'msdyn_connectordatasourceid', readOnly: true },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * msdyn_connectordatasource_environmentva WebApi class for early-bound style coding
 * Usage: const msdyn_connectordatasource_environmentva = new msdyn_connectordatasource_environmentvaApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class msdyn_connectordatasource_environmentvaApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<Imsdyn_connectordatasource_environmentvaApi>(entity, 'msdyn_connectordatasource_environmentva', '', msdyn_connectordatasource_environmentvaFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface msdyn_connectordatasource_environmentvaApi extends Imsdyn_connectordatasource_environmentvaApi { }
