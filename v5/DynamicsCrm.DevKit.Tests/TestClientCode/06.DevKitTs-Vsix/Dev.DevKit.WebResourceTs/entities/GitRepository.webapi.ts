/**
 * GitRepository.webapi.ts - GitRepository WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for GitRepository
 * All fields return string representation of their values
 */
export interface IGitRepositoryFormattedValue {
	readonly DefaultBranch: string;
	readonly GitRepositoryId: string;
	readonly OrganizationName: string;
	readonly ProjectName: string;
	readonly RepositoryName: string;
}

/**
 * GitRepository WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IGitRepositoryApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: IGitRepositoryFormattedValue;
	/** Name of Git Default Git Branch with Git Repository. */
	DefaultBranch: string | null;
	/** Unique identifier for entity instances */
	GitRepositoryId: DevKit.Guid | null;
	/** Name of the Git Organization associated with Git Project. */
	OrganizationName: string | null;
	/** Name of Git Project associated with Git Repository. */
	ProjectName: string | null;
	/** The name of the Git Repository. */
	RepositoryName: string | null;
}

const GitRepositoryFieldConfig: DevKit.IWebApiFieldConfigMap = {
	DefaultBranch: { logicalName: 'defaultbranch' },
	GitRepositoryId: { logicalName: 'gitrepositoryid' },
	OrganizationName: { logicalName: 'organizationname' },
	ProjectName: { logicalName: 'projectname' },
	RepositoryName: { logicalName: 'repositoryname' },
};

/**
 * GitRepository WebApi class for early-bound style coding
 * Usage: const gitRepository = new GitRepositoryApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class GitRepositoryApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IGitRepositoryApi>(entity, 'gitrepository', 'gitrepositories', GitRepositoryFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface GitRepositoryApi extends IGitRepositoryApi { }
