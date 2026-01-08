/**
 * BusinessUnitNewsArticle.webapi.ts - BusinessUnitNewsArticle WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * BusinessUnitNewsArticle WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IBusinessUnitNewsArticleApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<IBusinessUnitNewsArticleApi, 'FormattedValue'>]: string };
	/** Date and time for the announcement to become active. */
	ActiveOn_UtcDateOnly: Date | null;
	/** Date and time of the last day the announcement is active. */
	ActiveUntil_UtcDateOnly: Date | null;
	/** Title of the announcement. */
	ArticleTitle: string | null;
	/** Type of announcement. */
	ArticleTypeCode: number | null;
	/** URL for the Website on which the announcement is located. */
	ArticleUrl: string | null;
	/** Unique identifier of the announcement. */
	BusinessUnitNewsArticleId: DevKit.Guid | null;
	/** Unique identifier of the user who created the announcement. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the announcement was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the businessunitnewsarticle. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Unique identifier of the data import or data migration that created this record. */
	ImportSequenceNumber: number | null;
	/** Unique identifier of the user who last modified the announcement. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the announcement was last modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who last modified the businessunitnewsarticle. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Text for the announcement. */
	NewsArticle: string | null;
	/** Unique identifier of the organization associated with the announcement. */
	readonly OrganizationId: DevKit.Guid | null;
	/** Date and time that the record was migrated. */
	OverriddenCreatedOn_UtcDateOnly: Date | null;
	/** Information about whether to show the announcement on the Website home page. */
	ShowOnHomepage: boolean | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
	readonly VersionNumber: number | null;
}

const BusinessUnitNewsArticleFieldConfig: DevKit.IWebApiFieldConfigMap = {
	ActiveOn_UtcDateOnly: { logicalName: 'activeon', type: 'DateTime' },
	ActiveUntil_UtcDateOnly: { logicalName: 'activeuntil', type: 'DateTime' },
	ArticleTitle: { logicalName: 'articletitle' },
	ArticleTypeCode: { logicalName: 'articletypecode', type: 'Integer' },
	ArticleUrl: { logicalName: 'articleurl' },
	BusinessUnitNewsArticleId: { logicalName: 'businessunitnewsarticleid' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	NewsArticle: { logicalName: 'newsarticle' },
	OrganizationId: { schemaName: 'OrganizationId', logicalName: '_organizationid_value', readOnly: true, entityCollectionName: 'organizations', entityLogicalName: 'organization' },
	OverriddenCreatedOn_UtcDateOnly: { logicalName: 'overriddencreatedon', type: 'DateTime' },
	ShowOnHomepage: { logicalName: 'showonhomepage', type: 'Boolean' },
	TimeZoneRuleVersionNumber: { logicalName: 'timezoneruleversionnumber', type: 'Integer' },
	UTCConversionTimeZoneCode: { logicalName: 'utcconversiontimezonecode', type: 'Integer' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * BusinessUnitNewsArticle WebApi class for early-bound style coding
 * Usage: const businessUnitNewsArticle = new BusinessUnitNewsArticleApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class BusinessUnitNewsArticleApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IBusinessUnitNewsArticleApi>(entity, 'businessunitnewsarticle', 'businessunitnewsarticles', BusinessUnitNewsArticleFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface BusinessUnitNewsArticleApi extends IBusinessUnitNewsArticleApi { }
