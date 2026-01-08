/**
 * PostComment.webapi.ts - PostComment WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for PostComment
 * All fields return string representation of their values
 */
export interface IPostCommentFormattedValue {
	readonly CreatedBy: string;
	readonly CreatedOn_UtcDateAndTime: string;
	readonly CreatedOnBehalfBy: string;
	readonly LargeText: string;
	readonly OrganizationId: string;
	readonly PostCommentId: string;
	readonly PostId: string;
	readonly Text: string;
	readonly TimeZoneRuleVersionNumber: string;
	readonly UTCConversionTimeZoneCode: string;
}

/**
 * PostComment WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IPostCommentApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: IPostCommentFormattedValue;
	/** Unique identifier of the user who created the record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the record was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the record. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Shows the text of a post comment. */
	LargeText: string | null;
	/** Unique identifier of the organization associated with the solution. */
	readonly OrganizationId: DevKit.Guid | null;
	/** Shows the ID of the post comment. */
	PostCommentId: DevKit.Guid | null;
	/** Unique identifier of the post with which the comment is associated. */
	PostId: DevKit.Guid | null;
	/** Text of the comment. */
	Text: string | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
}

const PostCommentFieldConfig: DevKit.IWebApiFieldConfigMap = {
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	LargeText: { logicalName: 'largetext' },
	OrganizationId: { schemaName: 'OrganizationId', logicalName: '_organizationid_value', readOnly: true, entityCollectionName: 'organizations', entityLogicalName: 'organization' },
	PostCommentId: { logicalName: 'postcommentid' },
	PostId: { schemaName: 'PostId', logicalName: '_postid_value', entityCollectionName: 'posts', entityLogicalName: 'post' },
	Text: { logicalName: 'text' },
	TimeZoneRuleVersionNumber: { logicalName: 'timezoneruleversionnumber', type: 'Integer' },
	UTCConversionTimeZoneCode: { logicalName: 'utcconversiontimezonecode', type: 'Integer' },
};

/**
 * PostComment WebApi class for early-bound style coding
 * Usage: const postComment = new PostCommentApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class PostCommentApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IPostCommentApi>(entity, 'postcomment', 'postcomments', PostCommentFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface PostCommentApi extends IPostCommentApi { }
