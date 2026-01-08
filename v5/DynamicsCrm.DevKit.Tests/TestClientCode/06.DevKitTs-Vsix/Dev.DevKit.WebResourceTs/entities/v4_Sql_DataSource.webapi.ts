/**
 * v4_Sql_DataSource.webapi.ts - v4_Sql_DataSource WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * v4_Sql_DataSource WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface Iv4_Sql_DataSourceApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<Iv4_Sql_DataSourceApi, 'FormattedValue'>]: string };
	/** Unique identifier for entity instances */
	v4_Sql_DataSourceId: DevKit.Guid | null;
	/** Sql DataSource */
	v4_Sql_DataSourceName: string | null;
}

const v4_Sql_DataSourceFieldConfig: DevKit.IWebApiFieldConfigMap = {
	v4_Sql_DataSourceId: { logicalName: 'v4_sql_datasourceid' },
	v4_Sql_DataSourceName: { logicalName: 'v4_sql_datasourcename' },
};

/**
 * v4_Sql_DataSource WebApi class for early-bound style coding
 * Usage: const v4_Sql_DataSource = new v4_Sql_DataSourceApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class v4_Sql_DataSourceApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<Iv4_Sql_DataSourceApi>(entity, 'v4_sql_datasource', 'v4_sql_datasources', v4_Sql_DataSourceFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface v4_Sql_DataSourceApi extends Iv4_Sql_DataSourceApi { }
