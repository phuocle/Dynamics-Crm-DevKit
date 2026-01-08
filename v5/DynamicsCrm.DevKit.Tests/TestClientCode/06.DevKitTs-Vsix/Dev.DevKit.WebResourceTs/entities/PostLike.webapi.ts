/**
 * PostLike.webapi.ts - PostLike WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * PostLike WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IPostLikeApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<IPostLikeApi, 'FormattedValue'>]: string };
	/** Unique identifier of the user who created the record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the record was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the record. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Unique identifier of the organization associated with the solution. */
	readonly OrganizationId: DevKit.Guid | null;
	/** Unique identifier of the post with which the like is associated. */
	PostId: DevKit.Guid | null;
	/** Shows the ID of the post like. */
	PostLikeId: DevKit.Guid | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
}

const PostLikeFieldConfig: DevKit.IWebApiFieldConfigMap = {
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OrganizationId: { schemaName: 'OrganizationId', logicalName: '_organizationid_value', readOnly: true, entityCollectionName: 'organizations', entityLogicalName: 'organization' },
	PostId: { schemaName: 'PostId', logicalName: '_postid_value', entityCollectionName: 'posts', entityLogicalName: 'post' },
	PostLikeId: { logicalName: 'postlikeid' },
	TimeZoneRuleVersionNumber: { logicalName: 'timezoneruleversionnumber', type: 'Integer' },
	UTCConversionTimeZoneCode: { logicalName: 'utcconversiontimezonecode', type: 'Integer' },
};

/**
 * PostLike WebApi class for early-bound style coding
 * Usage: const postLike = new PostLikeApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class PostLikeApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IPostLikeApi>(entity, 'postlike', 'postlikes', PostLikeFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface PostLikeApi extends IPostLikeApi { }
