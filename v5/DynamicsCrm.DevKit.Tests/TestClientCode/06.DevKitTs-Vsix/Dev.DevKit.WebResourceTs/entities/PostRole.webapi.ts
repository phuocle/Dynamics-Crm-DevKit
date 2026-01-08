/**
 * PostRole.webapi.ts - PostRole WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for PostRole
 * All fields return string representation of their values
 */
export interface IPostRoleFormattedValue {
	readonly OrganizationId: string;
	readonly PostId: string;
	readonly PostRoleId: string;
	readonly RegardingObjectId: string;
	readonly Type: string;
}

/**
 * PostRole WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IPostRoleApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: IPostRoleFormattedValue;
	/** Unique identifier of the organization associated with the solution. */
	readonly OrganizationId: DevKit.Guid | null;
	/** Unique identifier of the post with which the post role is associated. */
	PostId: DevKit.Guid | null;
	/** Unique identifier of the post role. */
	PostRoleId: DevKit.Guid | null;
	/** Choose the record that the post role relates to. */
	RegardingObjectId: DevKit.Guid | null;
	/** Select the role type for the post. */
	Type: number | null;
}

const PostRoleFieldConfig: DevKit.IWebApiFieldConfigMap = {
	OrganizationId: { schemaName: 'OrganizationId', logicalName: '_organizationid_value', readOnly: true, entityCollectionName: 'organizations', entityLogicalName: 'organization' },
	PostId: { schemaName: 'PostId', logicalName: '_postid_value', entityCollectionName: 'posts', entityLogicalName: 'post' },
	PostRoleId: { logicalName: 'postroleid' },
	RegardingObjectId: { schemaName: 'RegardingObjectId', logicalName: '_regardingobjectid_value', entityCollectionName: 'accounts', entityLogicalName: 'account' },
	Type: { logicalName: 'type', type: 'Integer' },
};

/**
 * PostRole WebApi class for early-bound style coding
 * Usage: const postRole = new PostRoleApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class PostRoleApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IPostRoleApi>(entity, 'postrole', 'postroles', PostRoleFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface PostRoleApi extends IPostRoleApi { }
