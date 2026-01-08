/**
 * componentversiondatasource.webapi.ts - componentversiondatasource WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for componentversiondatasource
 * All fields return string representation of their values
 */
export interface IcomponentversiondatasourceFormattedValue {
	readonly componentversiondatasourceId: string;
	readonly name: string;
}

/**
 * componentversiondatasource WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IcomponentversiondatasourceApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: IcomponentversiondatasourceFormattedValue;
	/** Unique identifier for entity instances */
	componentversiondatasourceId: DevKit.Guid | null;
	/** Name */
	name: string | null;
}

const componentversiondatasourceFieldConfig: DevKit.IWebApiFieldConfigMap = {
	componentversiondatasourceId: { logicalName: 'componentversiondatasourceid' },
	name: { logicalName: 'name' },
};

/**
 * componentversiondatasource WebApi class for early-bound style coding
 * Usage: const componentversiondatasource = new componentversiondatasourceApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class componentversiondatasourceApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IcomponentversiondatasourceApi>(entity, 'componentversiondatasource', 'componentversiondatasources', componentversiondatasourceFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface componentversiondatasourceApi extends IcomponentversiondatasourceApi { }
