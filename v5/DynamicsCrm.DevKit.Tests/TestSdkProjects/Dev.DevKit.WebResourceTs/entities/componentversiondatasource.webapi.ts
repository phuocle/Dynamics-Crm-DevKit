/**
 * componentversiondatasource.webapi.ts - componentversiondatasource WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * componentversiondatasource WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IcomponentversiondatasourceApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<IcomponentversiondatasourceApi, 'FormattedValue'>]: string };
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
