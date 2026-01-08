/**
 * GitConfigurationRetrievalDataSource.webapi.ts - GitConfigurationRetrievalDataSource WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for GitConfigurationRetrievalDataSource
 * All fields return string representation of their values
 */
export interface IGitConfigurationRetrievalDataSourceFormattedValue {
	readonly GitConfigurationRetrievalDataSourceId: string;
	readonly name: string;
}

/**
 * GitConfigurationRetrievalDataSource WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IGitConfigurationRetrievalDataSourceApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: IGitConfigurationRetrievalDataSourceFormattedValue;
	/** Unique identifier for entity instances */
	GitConfigurationRetrievalDataSourceId: DevKit.Guid | null;
	/** Name */
	name: string | null;
}

const GitConfigurationRetrievalDataSourceFieldConfig: DevKit.IWebApiFieldConfigMap = {
	GitConfigurationRetrievalDataSourceId: { logicalName: 'gitconfigurationretrievaldatasourceid' },
	name: { logicalName: 'name' },
};

/**
 * GitConfigurationRetrievalDataSource WebApi class for early-bound style coding
 * Usage: const gitConfigurationRetrievalDataSource = new GitConfigurationRetrievalDataSourceApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class GitConfigurationRetrievalDataSourceApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IGitConfigurationRetrievalDataSourceApi>(entity, 'gitconfigurationretrievaldatasource', 'gitconfigurationretrievaldatasources', GitConfigurationRetrievalDataSourceFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface GitConfigurationRetrievalDataSourceApi extends IGitConfigurationRetrievalDataSourceApi { }
