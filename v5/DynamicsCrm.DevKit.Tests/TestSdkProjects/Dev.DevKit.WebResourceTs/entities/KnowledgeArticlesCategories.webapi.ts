/**
 * KnowledgeArticlesCategories.webapi.ts - KnowledgeArticlesCategories WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * KnowledgeArticlesCategories WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IKnowledgeArticlesCategoriesApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<IKnowledgeArticlesCategoriesApi, 'FormattedValue'>]: string };
	readonly CategoryId: DevKit.Guid | null;
	/** Unique identifier of the Category for the knowledge article. */
	KnowledgeArticleCategoryId: DevKit.Guid | null;
	readonly KnowledgeArticleId: DevKit.Guid | null;
	readonly VersionNumber: number | null;
}

const KnowledgeArticlesCategoriesFieldConfig: DevKit.IWebApiFieldConfigMap = {
	CategoryId: { logicalName: 'categoryid', readOnly: true },
	KnowledgeArticleCategoryId: { logicalName: 'knowledgearticlecategoryid' },
	KnowledgeArticleId: { logicalName: 'knowledgearticleid', readOnly: true },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * KnowledgeArticlesCategories WebApi class for early-bound style coding
 * Usage: const knowledgeArticlesCategories = new KnowledgeArticlesCategoriesApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class KnowledgeArticlesCategoriesApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IKnowledgeArticlesCategoriesApi>(entity, 'knowledgearticlescategories', '', KnowledgeArticlesCategoriesFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface KnowledgeArticlesCategoriesApi extends IKnowledgeArticlesCategoriesApi { }
