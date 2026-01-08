/**
 * KnowledgeArticleViews.webapi.ts - KnowledgeArticleViews WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for KnowledgeArticleViews
 * All fields return string representation of their values
 */
export interface IKnowledgeArticleViewsFormattedValue {
	readonly CreatedBy: string;
	readonly CreatedOn_UtcDateAndTime: string;
	readonly CreatedOnBehalfBy: string;
	readonly ExchangeRate: string;
	readonly ImportSequenceNumber: string;
	readonly KnowledgeArticleId: string;
	readonly KnowledgeArticleView: string;
	readonly KnowledgeArticleViewsId: string;
	readonly Location: string;
	readonly ModifiedBy: string;
	readonly ModifiedOn_UtcDateAndTime: string;
	readonly ModifiedOnBehalfBy: string;
	readonly OverriddenCreatedOn_UtcDateOnly: string;
	readonly OwnerId: string;
	readonly OwningBusinessUnit: string;
	readonly OwningUser: string;
	readonly statecode: string;
	readonly statuscode: string;
	readonly TimeZoneRuleVersionNumber: string;
	readonly TransactionCurrencyId: string;
	readonly UTCConversionTimeZoneCode: string;
	readonly VersionNumber: string;
	readonly ViewDate_UtcDateOnly: string;
}

/**
 * KnowledgeArticleViews WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IKnowledgeArticleViewsApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: IKnowledgeArticleViewsFormattedValue;
	/** Shows who created the record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the record was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the record. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency. */
	readonly ExchangeRate: number | null;
	/** Unique identifier of the data import or data migration that created this record. */
	ImportSequenceNumber: number | null;
	/** Choose the Knowledge Article. */
	KnowledgeArticleId: DevKit.Guid | null;
	/** Number of Knowledge Article Views visited per day */
	KnowledgeArticleView: number | null;
	/** Unique identifier of the Knowledge Article Views */
	KnowledgeArticleViewsId: DevKit.Guid | null;
	/** Shows where the knowledge was used */
	Location: number | null;
	/** Shows who last updated the record. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who modified the record. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Date and time that the record was migrated. */
	OverriddenCreatedOn_UtcDateOnly: Date | null;
	/** Unique identifier of the user or team who owns the knowledge article views. */
	readonly OwnerId: DevKit.Guid | null;
	/** Unique identifier of the business unit that owns the knowledge article views. */
	readonly OwningBusinessUnit: DevKit.Guid | null;
	/** Unique identifier of the user who owns the knowledge article views. */
	readonly OwningUser: DevKit.Guid | null;
	/** Status of the Knowledge Article Views */
	statecode: number | null;
	/** Reason for the status of the Knowledge Article Views */
	statuscode: number | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
	readonly TransactionCurrencyId: DevKit.Guid | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
	readonly VersionNumber: number | null;
	/** Information about the Day */
	ViewDate_UtcDateOnly: Date | null;
}

const KnowledgeArticleViewsFieldConfig: DevKit.IWebApiFieldConfigMap = {
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ExchangeRate: { logicalName: 'exchangerate', readOnly: true, type: 'Number' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	KnowledgeArticleId: { schemaName: 'KnowledgeArticleId', logicalName: '_knowledgearticleid_value', entityCollectionName: 'knowledgearticles', entityLogicalName: 'knowledgearticle' },
	KnowledgeArticleView: { logicalName: 'knowledgearticleview', type: 'Integer' },
	KnowledgeArticleViewsId: { logicalName: 'knowledgearticleviewsid' },
	Location: { logicalName: 'location', type: 'Integer' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OverriddenCreatedOn_UtcDateOnly: { logicalName: 'overriddencreatedon', type: 'DateTime' },
	OwnerId: { schemaName: 'OwnerId', logicalName: '_ownerid_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OwningBusinessUnit: { logicalName: 'owningbusinessunit', readOnly: true },
	OwningUser: { logicalName: 'owninguser', readOnly: true },
	statecode: { logicalName: 'statecode', type: 'Integer' },
	statuscode: { logicalName: 'statuscode', type: 'Integer' },
	TimeZoneRuleVersionNumber: { logicalName: 'timezoneruleversionnumber', type: 'Integer' },
	TransactionCurrencyId: { schemaName: 'TransactionCurrencyId', logicalName: '_transactioncurrencyid_value', readOnly: true, entityCollectionName: 'transactioncurrencies', entityLogicalName: 'transactioncurrency' },
	UTCConversionTimeZoneCode: { logicalName: 'utcconversiontimezonecode', type: 'Integer' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
	ViewDate_UtcDateOnly: { logicalName: 'viewdate', type: 'DateTime' },
};

/**
 * KnowledgeArticleViews WebApi class for early-bound style coding
 * Usage: const knowledgeArticleViews = new KnowledgeArticleViewsApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class KnowledgeArticleViewsApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IKnowledgeArticleViewsApi>(entity, 'knowledgearticleviews', 'knowledgearticleviews', KnowledgeArticleViewsFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface KnowledgeArticleViewsApi extends IKnowledgeArticleViewsApi { }
