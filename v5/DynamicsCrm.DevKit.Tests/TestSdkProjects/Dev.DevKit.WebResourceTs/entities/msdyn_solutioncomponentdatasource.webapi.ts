/**
 * msdyn_solutioncomponentdatasource.webapi.ts - msdyn_solutioncomponentdatasource WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * msdyn_solutioncomponentdatasource WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface Imsdyn_solutioncomponentdatasourceApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<Imsdyn_solutioncomponentdatasourceApi, 'FormattedValue'>]: string };
	/** msdyn_name */
	msdyn_name: string | null;
	/** Unique identifier for entity instances */
	msdyn_solutioncomponentdatasourceId: DevKit.Guid | null;
	/** Unique identifier for the organization */
	readonly OrganizationId: DevKit.Guid | null;
}

const msdyn_solutioncomponentdatasourceFieldConfig: DevKit.IWebApiFieldConfigMap = {
	msdyn_name: { logicalName: 'msdyn_name' },
	msdyn_solutioncomponentdatasourceId: { logicalName: 'msdyn_solutioncomponentdatasourceid' },
	OrganizationId: { logicalName: 'organizationid', readOnly: true },
};

/**
 * msdyn_solutioncomponentdatasource WebApi class for early-bound style coding
 * Usage: const msdyn_solutioncomponentdatasource = new msdyn_solutioncomponentdatasourceApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class msdyn_solutioncomponentdatasourceApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<Imsdyn_solutioncomponentdatasourceApi>(entity, 'msdyn_solutioncomponentdatasource', 'msdyn_solutioncomponentdatasources', msdyn_solutioncomponentdatasourceFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface msdyn_solutioncomponentdatasourceApi extends Imsdyn_solutioncomponentdatasourceApi { }
