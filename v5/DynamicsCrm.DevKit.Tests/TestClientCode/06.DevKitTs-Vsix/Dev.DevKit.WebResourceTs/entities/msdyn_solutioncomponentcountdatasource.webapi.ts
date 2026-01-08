/**
 * msdyn_solutioncomponentcountdatasource.webapi.ts - msdyn_solutioncomponentcountdatasource WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * msdyn_solutioncomponentcountdatasource WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface Imsdyn_solutioncomponentcountdatasourceApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<Imsdyn_solutioncomponentcountdatasourceApi, 'FormattedValue'>]: string };
	/** msdyn_name */
	msdyn_name: string | null;
	/** Unique identifier for entity instances */
	msdyn_solutioncomponentcountdatasourceId: DevKit.Guid | null;
	/** Unique identifier for the organization */
	readonly OrganizationId: DevKit.Guid | null;
}

const msdyn_solutioncomponentcountdatasourceFieldConfig: DevKit.IWebApiFieldConfigMap = {
	msdyn_name: { logicalName: 'msdyn_name' },
	msdyn_solutioncomponentcountdatasourceId: { logicalName: 'msdyn_solutioncomponentcountdatasourceid' },
	OrganizationId: { logicalName: 'organizationid', readOnly: true },
};

/**
 * msdyn_solutioncomponentcountdatasource WebApi class for early-bound style coding
 * Usage: const msdyn_solutioncomponentcountdatasource = new msdyn_solutioncomponentcountdatasourceApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class msdyn_solutioncomponentcountdatasourceApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<Imsdyn_solutioncomponentcountdatasourceApi>(entity, 'msdyn_solutioncomponentcountdatasource', 'msdyn_solutioncomponentcountdatasources', msdyn_solutioncomponentcountdatasourceFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface msdyn_solutioncomponentcountdatasourceApi extends Imsdyn_solutioncomponentcountdatasourceApi { }
