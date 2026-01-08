/**
 * KbArticle.webapi.ts - KbArticle WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * KbArticle WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IKbArticleApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<IKbArticleApi, 'FormattedValue'>]: string };
	/** The average rating of this article. */
	adx_averagerating: number | null;
	/** The average rating of this article, rounded to a whole number (positive integer). */
	adx_averagerating_int: number | null;
	/** The number of negative vote ratings applied to this article. */
	adx_downvotes: number | null;
	/** Rating Count */
	adx_ratingcount: number | null;
	/** The sum of the values of all ratings applied to this article. */
	adx_ratingsum: number | null;
	/** The number of positive vote ratings applied to this article. */
	adx_upvotes: number | null;
	/** Shows the article content and formatting, stored as XML. */
	ArticleXml: string | null;
	/** Comments regarding the knowledge base article. */
	Comments: string | null;
	/** Description of the content of the knowledge base article. */
	readonly Content: string | null;
	/** Unique identifier of the user who created the knowledge base article. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the knowledge base article was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the article. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Type additional information that describes the knowledge base article. */
	Description: string | null;
	/** The default image for the entity. */
	EntityImage: string | null;
	/** For internal use only. */
	readonly EntityImageId: DevKit.Guid | null;
	/** Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency. */
	readonly ExchangeRate: number | null;
	/** Unique identifier of the data import or data migration that created this record. */
	ImportSequenceNumber: number | null;
	/** Shows the ID of the article. */
	KbArticleId: DevKit.Guid | null;
	/** Choose the template that you want to use as a base for creating the new article. */
	KbArticleTemplateId: DevKit.Guid | null;
	/** Keywords to be used for searches in knowledge base articles. */
	KeyWords: string | null;
	/** Select which language the article must be available in. This list is based on the list of language packs that are installed in your Microsoft Dynamics 365 environment. */
	LanguageCode: number | null;
	/** Unique identifier of the user who last modified the knowledge base article. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the knowledge base article was last modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who last modified the kbarticle. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** If set to Yes, the article will be visible and searchable on portals connected to this organization. */
	msa_publishtoweb: boolean | null;
	/** Knowledge base article number. */
	readonly Number: string | null;
	/** Unique identifier of the organization associated with the article. */
	readonly OrganizationId: DevKit.Guid | null;
	/** Date and time that the record was migrated. */
	OverriddenCreatedOn_UtcDateOnly: Date | null;
	/** Shows whether the knowledge base article is in draft, unapproved, or published status. Published articles are read-only and can't be edited unless they are unpublished. */
	StateCode: number | null;
	/** Select the article's status. */
	StatusCode: number | null;
	/** Choose the subject of the article to assist with article searches. You can configure subjects under Business Management in the Settings area. */
	SubjectId: DevKit.Guid | null;
	/** Type a subject or descriptive name for the article to assist with article searches. */
	Title: string | null;
	/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
	TransactionCurrencyId: DevKit.Guid | null;
	/** Title of the knowledge base article. */
	readonly VersionNumber: number | null;
}

const KbArticleFieldConfig: DevKit.IWebApiFieldConfigMap = {
	adx_averagerating: { logicalName: 'adx_averagerating', type: 'Number' },
	adx_averagerating_int: { logicalName: 'adx_averagerating_int', type: 'Integer' },
	adx_downvotes: { logicalName: 'adx_downvotes', type: 'Integer' },
	adx_ratingcount: { logicalName: 'adx_ratingcount', type: 'Integer' },
	adx_ratingsum: { logicalName: 'adx_ratingsum', type: 'Integer' },
	adx_upvotes: { logicalName: 'adx_upvotes', type: 'Integer' },
	ArticleXml: { logicalName: 'articlexml' },
	Comments: { logicalName: 'comments' },
	Content: { logicalName: 'content', readOnly: true },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Description: { logicalName: 'description' },
	EntityImage: { logicalName: 'entityimage' },
	EntityImageId: { logicalName: 'entityimageid', readOnly: true },
	ExchangeRate: { logicalName: 'exchangerate', readOnly: true, type: 'Number' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	KbArticleId: { logicalName: 'kbarticleid' },
	KbArticleTemplateId: { schemaName: 'KbArticleTemplateId', logicalName: '_kbarticletemplateid_value', entityCollectionName: 'kbarticletemplates', entityLogicalName: 'kbarticletemplate' },
	KeyWords: { logicalName: 'keywords' },
	LanguageCode: { logicalName: 'languagecode', type: 'Integer' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	msa_publishtoweb: { logicalName: 'msa_publishtoweb', type: 'Boolean' },
	Number: { logicalName: 'number', readOnly: true },
	OrganizationId: { schemaName: 'OrganizationId', logicalName: '_organizationid_value', readOnly: true, entityCollectionName: 'organizations', entityLogicalName: 'organization' },
	OverriddenCreatedOn_UtcDateOnly: { logicalName: 'overriddencreatedon', type: 'DateTime' },
	StateCode: { logicalName: 'statecode', type: 'Integer' },
	StatusCode: { logicalName: 'statuscode', type: 'Integer' },
	SubjectId: { schemaName: 'SubjectId', logicalName: '_subjectid_value', entityCollectionName: 'subjects', entityLogicalName: 'subject' },
	Title: { logicalName: 'title' },
	TransactionCurrencyId: { schemaName: 'TransactionCurrencyId', logicalName: '_transactioncurrencyid_value', entityCollectionName: 'transactioncurrencies', entityLogicalName: 'transactioncurrency' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * KbArticle WebApi class for early-bound style coding
 * Usage: const kbArticle = new KbArticleApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class KbArticleApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IKbArticleApi>(entity, 'kbarticle', 'kbarticles', KbArticleFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface KbArticleApi extends IKbArticleApi { }
