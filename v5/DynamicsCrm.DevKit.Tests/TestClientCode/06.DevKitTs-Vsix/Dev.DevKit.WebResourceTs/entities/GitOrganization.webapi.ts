/**
 * GitOrganization.webapi.ts - GitOrganization WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for GitOrganization
 * All fields return string representation of their values
 */
export interface IGitOrganizationFormattedValue {
	readonly GitOrganizationId: string;
	readonly OrganizationName: string;
}

/**
 * GitOrganization WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IGitOrganizationApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: IGitOrganizationFormattedValue;
	/** Unique identifier for entity instances */
	GitOrganizationId: DevKit.Guid | null;
	/** The name of the Git organization. */
	OrganizationName: string | null;
}

const GitOrganizationFieldConfig: DevKit.IWebApiFieldConfigMap = {
	GitOrganizationId: { logicalName: 'gitorganizationid' },
	OrganizationName: { logicalName: 'organizationname' },
};

/**
 * GitOrganization WebApi class for early-bound style coding
 * Usage: const gitOrganization = new GitOrganizationApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class GitOrganizationApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IGitOrganizationApi>(entity, 'gitorganization', 'gitorganizations', GitOrganizationFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface GitOrganizationApi extends IGitOrganizationApi { }
