/**
 * UserSearchFacet.webapi.ts - UserSearchFacet WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * UserSearchFacet WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IUserSearchFacetApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<IUserSearchFacetApi, 'FormattedValue'>]: string };
	AttributeName: string | null;
	EntityName2: string | null;
	FacetOrder: number | null;
	SystemUserId: DevKit.Guid | null;
	UserSearchFacetId: DevKit.Guid | null;
}

const UserSearchFacetFieldConfig: DevKit.IWebApiFieldConfigMap = {
	AttributeName: { logicalName: 'attributename' },
	EntityName2: { logicalName: 'entityname' },
	FacetOrder: { logicalName: 'facetorder', type: 'Integer' },
	SystemUserId: { logicalName: 'systemuserid' },
	UserSearchFacetId: { logicalName: 'usersearchfacetid' },
};

/**
 * UserSearchFacet WebApi class for early-bound style coding
 * Usage: const userSearchFacet = new UserSearchFacetApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class UserSearchFacetApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IUserSearchFacetApi>(entity, 'usersearchfacet', 'usersearchfacets', UserSearchFacetFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface UserSearchFacetApi extends IUserSearchFacetApi { }
