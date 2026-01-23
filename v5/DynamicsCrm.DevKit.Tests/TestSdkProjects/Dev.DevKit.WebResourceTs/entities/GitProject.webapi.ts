/**
 * GitProject.webapi.ts - GitProject WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * GitProject WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IGitProjectApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<IGitProjectApi, 'FormattedValue'>]: string };
	/** Unique identifier for entity instances */
	GitProjectId: DevKit.Guid | null;
	/** Name of the Git Organization associated with Git Project. */
	OrganizationName: string | null;
	/** The name of the Git Project. */
	ProjectName: string | null;
}

const GitProjectFieldConfig: DevKit.IWebApiFieldConfigMap = {
	GitProjectId: { logicalName: 'gitprojectid' },
	OrganizationName: { logicalName: 'organizationname' },
	ProjectName: { logicalName: 'projectname' },
};

/**
 * GitProject WebApi class for early-bound style coding
 * Usage: const gitProject = new GitProjectApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class GitProjectApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IGitProjectApi>(entity, 'gitproject', 'gitprojects', GitProjectFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface GitProjectApi extends IGitProjectApi { }
