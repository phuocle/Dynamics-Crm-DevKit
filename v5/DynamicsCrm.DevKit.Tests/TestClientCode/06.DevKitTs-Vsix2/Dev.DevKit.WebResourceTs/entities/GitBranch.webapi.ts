/**
 * GitBranch.webapi.ts - GitBranch WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * GitBranch WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IGitBranchApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<IGitBranchApi, 'FormattedValue'>]: string };
	/** The name of the Git Branch. */
	BranchName: string | null;
	/** Unique identifier for entity instances */
	GitBranchId: DevKit.Guid | null;
	/** Current Git Commit Id of the Git Branch. */
	GitCommitId: string | null;
	/** Name of the Git Organization associated with Git Project. */
	OrganizationName: string | null;
	/** Name of Git Project associated with Git Repository. */
	ProjectName: string | null;
	/** Name of Git Repository associated with Git Branch. */
	RepositoryName: string | null;
	/** Name of the Git upstream branch from which the branch is created */
	UpstreamBranchName: string | null;
}

const GitBranchFieldConfig: DevKit.IWebApiFieldConfigMap = {
	BranchName: { logicalName: 'branchname' },
	GitBranchId: { logicalName: 'gitbranchid' },
	GitCommitId: { logicalName: 'gitcommitid' },
	OrganizationName: { logicalName: 'organizationname' },
	ProjectName: { logicalName: 'projectname' },
	RepositoryName: { logicalName: 'repositoryname' },
	UpstreamBranchName: { logicalName: 'upstreambranchname' },
};

/**
 * GitBranch WebApi class for early-bound style coding
 * Usage: const gitBranch = new GitBranchApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class GitBranchApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IGitBranchApi>(entity, 'gitbranch', 'gitbranchs', GitBranchFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface GitBranchApi extends IGitBranchApi { }
