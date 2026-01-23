/**
 * v4_sql2_datasource.webapi.ts - v4_sql2_datasource WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * v4_sql2_datasource WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface Iv4_sql2_datasourceApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<Iv4_sql2_datasourceApi, 'FormattedValue'>]: string };
	/** Unique identifier for entity instances */
	v4_sql2_datasourceId: DevKit.Guid | null;
	/** Sql2 DataSource */
	v4_sql2_datasourceName: string | null;
}

const v4_sql2_datasourceFieldConfig: DevKit.IWebApiFieldConfigMap = {
	v4_sql2_datasourceId: { logicalName: 'v4_sql2_datasourceid' },
	v4_sql2_datasourceName: { logicalName: 'v4_sql2_datasourcename' },
};

/**
 * v4_sql2_datasource WebApi class for early-bound style coding
 * Usage: const v4_sql2_datasource = new v4_sql2_datasourceApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class v4_sql2_datasourceApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<Iv4_sql2_datasourceApi>(entity, 'v4_sql2_datasource', 'v4_sql2_datasources', v4_sql2_datasourceFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface v4_sql2_datasourceApi extends Iv4_sql2_datasourceApi { }
