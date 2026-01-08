/**
 * KnowledgeBaseRecord.webapi.ts - KnowledgeBaseRecord WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * KnowledgeBaseRecord WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IKnowledgeBaseRecordApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<IKnowledgeBaseRecordApi, 'FormattedValue'>]: string };
	/** Unique identifier of the user who created the record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the record was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the record. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Exchange rate for the currency associated with the knowledge base record with respect to the base currency. */
	readonly ExchangeRate: number | null;
	/** This field will be used to store the Unique ID of the associated Knowledge Base records */
	KnowledgeBaseRecordId: DevKit.Guid | null;
	/** Unique identifier of the user who modified the record. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the record was modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who modified the record. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Unique identifier for the organization */
	readonly OrganizationId: DevKit.Guid | null;
	/** Shows the internal Parature service desk URL of the knowledge base records. */
	PrivateUrl: string | null;
	/** Shows the public Parature portal URL of the knowledge base records. */
	PublicUrl: string | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** Shows the title of the knowledge base (KB) Record. */
	Title: string | null;
	/** Exchange rate for the currency associated with the Knowledge Base Record with respect to the base currency. */
	TransactionCurrencyId: DevKit.Guid | null;
	/** Shows the unique ID of the linked knowledge base (KB) article. */
	UniqueId: string | null;
	readonly VersionNumber: number | null;
}

const KnowledgeBaseRecordFieldConfig: DevKit.IWebApiFieldConfigMap = {
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ExchangeRate: { logicalName: 'exchangerate', readOnly: true, type: 'Number' },
	KnowledgeBaseRecordId: { logicalName: 'knowledgebaserecordid' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OrganizationId: { schemaName: 'OrganizationId', logicalName: '_organizationid_value', readOnly: true, entityCollectionName: 'organizations', entityLogicalName: 'organization' },
	PrivateUrl: { logicalName: 'privateurl' },
	PublicUrl: { logicalName: 'publicurl' },
	TimeZoneRuleVersionNumber: { logicalName: 'timezoneruleversionnumber', type: 'Integer' },
	Title: { logicalName: 'title' },
	TransactionCurrencyId: { schemaName: 'TransactionCurrencyId', logicalName: '_transactioncurrencyid_value', entityCollectionName: 'transactioncurrencies', entityLogicalName: 'transactioncurrency' },
	UniqueId: { logicalName: 'uniqueid' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * KnowledgeBaseRecord WebApi class for early-bound style coding
 * Usage: const knowledgeBaseRecord = new KnowledgeBaseRecordApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class KnowledgeBaseRecordApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IKnowledgeBaseRecordApi>(entity, 'knowledgebaserecord', 'knowledgebaserecords', KnowledgeBaseRecordFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface KnowledgeBaseRecordApi extends IKnowledgeBaseRecordApi { }
