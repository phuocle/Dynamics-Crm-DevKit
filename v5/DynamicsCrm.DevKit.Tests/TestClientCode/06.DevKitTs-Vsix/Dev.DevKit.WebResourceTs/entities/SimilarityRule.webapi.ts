/**
 * SimilarityRule.webapi.ts - SimilarityRule WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * SimilarityRule WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface ISimilarityRuleApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<ISimilarityRuleApi, 'FormattedValue'>]: string };
	/** Generated Fetch xml from Active rule and rule conditions. */
	ActiveRuleFetchXML: string | null;
	/** Record type of the record being evaluated for potential similarities. */
	BaseEntityName: string | null;
	/** Record type of the record being evaluated for potential similarities. */
	readonly BaseEntityTypeCode: number | null;
	/** For internal use only. */
	readonly ComponentState: number | null;
	/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the record. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Description of the similarity detection rule. */
	Description: string | null;
	/** Exchange rate for the currency associated with the SimilarityRule with respect to the base currency. */
	readonly ExchangeRate: number | null;
	/** Determines whether to flag inactive records as similarities */
	ExcludeInactiveRecords: boolean | null;
	/** Fetch Xml */
	FetchXmlList: string | null;
	/** Sequence number of the import that created this record. */
	ImportSequenceNumber: number | null;
	/** Version in which the similarity rule is introduced. */
	IntroducedVersion: string | null;
	/** Is Managed */
	readonly IsManaged: boolean | null;
	/** Record type of the records being evaluated as potential similarities. */
	MatchingEntityName: string | null;
	/** Record type of the records being evaluated as potential similarities. */
	readonly MatchingEntityTypeCode: number | null;
	/** Enter the maximum number of keywords and key phrases to use with text analytics. */
	MaxKeyWords: number | null;
	/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who modified the record. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** The name of the custom entity. */
	name: string | null;
	/** Enter the maximum number of words in a key phrase to use with text analytics. */
	NgramSize: number | null;
	/** Unique identifier for the organization */
	readonly OrganizationId: DevKit.Guid | null;
	/** Date and time that the record was migrated. */
	OverriddenCreatedOn_UtcDateOnly: Date | null;
	/** Date and time when the record was created. */
	readonly OverwriteTime_UtcDateOnly: Date | null;
	/** ConditionXml for similarity rule conditions. */
	RuleConditionXml: string | null;
	/** Unique identifier for entity instances */
	SimilarityRuleId: DevKit.Guid | null;
	/** Unique identifier of the Similarity Rule used when synchronizing customizations for the Microsoft Dynamics 365 client for Outlook */
	readonly SimilarityRuleIdUnique: DevKit.Guid | null;
	/** Unique identifier of the associated solution. */
	readonly SolutionId: DevKit.Guid | null;
	/** Status of the Similarity Rule */
	statecode: number | null;
	/** Reason for the status of the Similarity Rule */
	statuscode: number | null;
	/** For internal use only. */
	readonly SupportingSolutionId: DevKit.Guid | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** Exchange rate for the currency associated with the SimilarityRule with respect to the base currency. */
	TransactionCurrencyId: DevKit.Guid | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
	readonly VersionNumber: number | null;
}

const SimilarityRuleFieldConfig: DevKit.IWebApiFieldConfigMap = {
	ActiveRuleFetchXML: { logicalName: 'activerulefetchxml' },
	BaseEntityName: { logicalName: 'baseentityname' },
	BaseEntityTypeCode: { logicalName: 'baseentitytypecode', readOnly: true, type: 'Integer' },
	ComponentState: { logicalName: 'componentstate', readOnly: true, type: 'Integer' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Description: { logicalName: 'description' },
	ExchangeRate: { logicalName: 'exchangerate', readOnly: true, type: 'Number' },
	ExcludeInactiveRecords: { logicalName: 'excludeinactiverecords', type: 'Boolean' },
	FetchXmlList: { logicalName: 'fetchxmllist' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	IntroducedVersion: { logicalName: 'introducedversion' },
	IsManaged: { logicalName: 'ismanaged', readOnly: true, type: 'Boolean' },
	MatchingEntityName: { logicalName: 'matchingentityname' },
	MatchingEntityTypeCode: { logicalName: 'matchingentitytypecode', readOnly: true, type: 'Integer' },
	MaxKeyWords: { logicalName: 'maxkeywords', type: 'Integer' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	name: { logicalName: 'name' },
	NgramSize: { logicalName: 'ngramsize', type: 'Integer' },
	OrganizationId: { schemaName: 'OrganizationId', logicalName: '_organizationid_value', readOnly: true, entityCollectionName: 'organizations', entityLogicalName: 'organization' },
	OverriddenCreatedOn_UtcDateOnly: { logicalName: 'overriddencreatedon', type: 'DateTime' },
	OverwriteTime_UtcDateOnly: { logicalName: 'overwritetime', readOnly: true, type: 'DateTime' },
	RuleConditionXml: { logicalName: 'ruleconditionxml' },
	SimilarityRuleId: { logicalName: 'similarityruleid' },
	SimilarityRuleIdUnique: { logicalName: 'similarityruleidunique', readOnly: true },
	SolutionId: { logicalName: 'solutionid', readOnly: true },
	statecode: { logicalName: 'statecode', type: 'Integer' },
	statuscode: { logicalName: 'statuscode', type: 'Integer' },
	SupportingSolutionId: { logicalName: 'supportingsolutionid', readOnly: true },
	TimeZoneRuleVersionNumber: { logicalName: 'timezoneruleversionnumber', type: 'Integer' },
	TransactionCurrencyId: { schemaName: 'TransactionCurrencyId', logicalName: '_transactioncurrencyid_value', entityCollectionName: 'transactioncurrencies', entityLogicalName: 'transactioncurrency' },
	UTCConversionTimeZoneCode: { logicalName: 'utcconversiontimezonecode', type: 'Integer' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * SimilarityRule WebApi class for early-bound style coding
 * Usage: const similarityRule = new SimilarityRuleApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class SimilarityRuleApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<ISimilarityRuleApi>(entity, 'similarityrule', 'similarityrules', SimilarityRuleFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface SimilarityRuleApi extends ISimilarityRuleApi { }
