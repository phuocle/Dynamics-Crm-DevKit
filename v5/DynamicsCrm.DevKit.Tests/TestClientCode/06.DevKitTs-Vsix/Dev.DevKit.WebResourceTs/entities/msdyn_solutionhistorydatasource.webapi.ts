/**
 * msdyn_solutionhistorydatasource.webapi.ts - msdyn_solutionhistorydatasource WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for msdyn_solutionhistorydatasource
 * All fields return string representation of their values
 */
export interface Imsdyn_solutionhistorydatasourceFormattedValue {
	readonly msdyn_name: string;
	readonly msdyn_solutionhistorydatasourceId: string;
}

/**
 * msdyn_solutionhistorydatasource WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface Imsdyn_solutionhistorydatasourceApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: Imsdyn_solutionhistorydatasourceFormattedValue;
	/** Name */
	msdyn_name: string | null;
	/** Unique identifier for entity instances */
	msdyn_solutionhistorydatasourceId: DevKit.Guid | null;
}

const msdyn_solutionhistorydatasourceFieldConfig: DevKit.IWebApiFieldConfigMap = {
	msdyn_name: { logicalName: 'msdyn_name' },
	msdyn_solutionhistorydatasourceId: { logicalName: 'msdyn_solutionhistorydatasourceid' },
};

/**
 * msdyn_solutionhistorydatasource WebApi class for early-bound style coding
 * Usage: const msdyn_solutionhistorydatasource = new msdyn_solutionhistorydatasourceApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class msdyn_solutionhistorydatasourceApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<Imsdyn_solutionhistorydatasourceApi>(entity, 'msdyn_solutionhistorydatasource', 'msdyn_solutionhistorydatasources', msdyn_solutionhistorydatasourceFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface msdyn_solutionhistorydatasourceApi extends Imsdyn_solutionhistorydatasourceApi { }
