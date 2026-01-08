/**
 * GitSolution.webapi.ts - GitSolution WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for GitSolution
 * All fields return string representation of their values
 */
export interface IGitSolutionFormattedValue {
	readonly BranchName: string;
	readonly GitSolutionId: string;
	readonly OrganizationName: string;
	readonly ProjectName: string;
	readonly RepositoryName: string;
	readonly RootFolderPath: string;
	readonly SolutionName: string;
	readonly SolutionVersion: string;
}

/**
 * GitSolution WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IGitSolutionApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: IGitSolutionFormattedValue;
	/** The name of the Git Branch. */
	BranchName: string | null;
	/** Unique identifier for entity instances */
	GitSolutionId: DevKit.Guid | null;
	/** Name of the Git Organization associated with Git Project. */
	OrganizationName: string | null;
	/** Name of Git Project associated with Git Repository. */
	ProjectName: string | null;
	/** Name of Git Repository associated with Git Solution. */
	RepositoryName: string | null;
	/** The root path of the directory containing solutions. */
	RootFolderPath: string | null;
	/** The name of the solution available in git. */
	SolutionName: string | null;
	/** The version of the solution available in git. */
	SolutionVersion: string | null;
}

const GitSolutionFieldConfig: DevKit.IWebApiFieldConfigMap = {
	BranchName: { logicalName: 'branchname' },
	GitSolutionId: { logicalName: 'gitsolutionid' },
	OrganizationName: { logicalName: 'organizationname' },
	ProjectName: { logicalName: 'projectname' },
	RepositoryName: { logicalName: 'repositoryname' },
	RootFolderPath: { logicalName: 'rootfolderpath' },
	SolutionName: { logicalName: 'solutionname' },
	SolutionVersion: { logicalName: 'solutionversion' },
};

/**
 * GitSolution WebApi class for early-bound style coding
 * Usage: const gitSolution = new GitSolutionApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class GitSolutionApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IGitSolutionApi>(entity, 'gitsolution', 'gitsolutions', GitSolutionFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface GitSolutionApi extends IGitSolutionApi { }
