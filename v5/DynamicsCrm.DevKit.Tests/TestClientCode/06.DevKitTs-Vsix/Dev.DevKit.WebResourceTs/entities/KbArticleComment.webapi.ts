/**
 * KbArticleComment.webapi.ts - KbArticleComment WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for KbArticleComment
 * All fields return string representation of their values
 */
export interface IKbArticleCommentFormattedValue {
	readonly CommentText: string;
	readonly CreatedBy: string;
	readonly CreatedOn_UtcDateAndTime: string;
	readonly CreatedOnBehalfBy: string;
	readonly KbArticleCommentId: string;
	readonly KbArticleId: string;
	readonly ModifiedBy: string;
	readonly ModifiedOn_UtcDateAndTime: string;
	readonly ModifiedOnBehalfBy: string;
	readonly OrganizationId: string;
	readonly Title: string;
	readonly VersionNumber: string;
}

/**
 * KbArticleComment WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IKbArticleCommentApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: IKbArticleCommentFormattedValue;
	/** Comment text for the knowledge base article. */
	CommentText: string | null;
	/** Unique identifier of the user who created the knowledge base article comment. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the knowledge base article comment was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the kbarticlecomment. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Unique identifier of the knowledge base article comment. */
	KbArticleCommentId: DevKit.Guid | null;
	/** Unique identifier of the knowledge base article to which the comment applies. */
	KbArticleId: DevKit.Guid | null;
	/** Unique identifier of the user who last modified the knowledge base article comment. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the knowledge base article comment was last modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who last modified the kbarticlecomment. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Unique identifier of the organization with which the article comment is associated. */
	readonly OrganizationId: DevKit.Guid | null;
	/** Title of the knowledge base article comment. */
	Title: string | null;
	readonly VersionNumber: number | null;
}

const KbArticleCommentFieldConfig: DevKit.IWebApiFieldConfigMap = {
	CommentText: { logicalName: 'commenttext' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	KbArticleCommentId: { logicalName: 'kbarticlecommentid' },
	KbArticleId: { schemaName: 'KbArticleId', logicalName: '_kbarticleid_value', entityCollectionName: 'kbarticles', entityLogicalName: 'kbarticle' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OrganizationId: { logicalName: 'organizationid', readOnly: true },
	Title: { logicalName: 'title' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * KbArticleComment WebApi class for early-bound style coding
 * Usage: const kbArticleComment = new KbArticleCommentApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class KbArticleCommentApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IKbArticleCommentApi>(entity, 'kbarticlecomment', 'kbarticlecomments', KbArticleCommentFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface KbArticleCommentApi extends IKbArticleCommentApi { }
