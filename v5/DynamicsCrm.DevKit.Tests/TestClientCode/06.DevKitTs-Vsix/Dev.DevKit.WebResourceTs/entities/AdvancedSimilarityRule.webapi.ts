/**
 * AdvancedSimilarityRule.webapi.ts - AdvancedSimilarityRule WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * AdvancedSimilarityRule WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IAdvancedSimilarityRuleApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<IAdvancedSimilarityRuleApi, 'FormattedValue'>]: string };
	/** Unique identifier for entity instances */
	AdvancedSimilarityRuleId: DevKit.Guid | null;
	/** Unique identifier of the Advanced Similarity Rule used when synchronizing customizations for the Microsoft Dynamics 365 client for Outlook */
	readonly AdvancedSimilarityRuleIdUnique: DevKit.Guid | null;
	/** Unique identifier for AzureServiceConnection associated with AdvancedSimilarityRule. */
	AzureServiceConnectionId: DevKit.Guid | null;
	/** For internal use only. */
	readonly ComponentState: number | null;
	/** Unique identifier of the user who created the Advanced Similarity Rules. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the record. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Enter a description for the Advanced Similarity Rule */
	Description: string | null;
	/** entity */
	Entity2: string | null;
	/** For internal use only. */
	ExactMatchList: string | null;
	/** For internal use only. */
	FetchXmlList: string | null;
	/** Filter Result By Status */
	FilterResultByStatus: number | null;
	/** Filter Result By Status */
	FilterResultByStatusDisplayName: string | null;
	/** Use Text Analytics for Target Match */
	IsAzureMLRequired: boolean | null;
	/** Is Manageed */
	readonly IsManaged: boolean | null;
	/** Enter the maximum number of keywords and key phrases to use with text analytics. */
	MaxNumberKeyphrases: number | null;
	/** Unique identifier of the user who modified the Advanced Similarity Rules. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who last modified the advanced similarity rules. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Type a logical name for the similarity configuration */
	name: string | null;
	/** Enter the maximum number of words in a key phrase to use with text analytics. */
	NgramSize: number | null;
	/** Unique identifier of the organization associated with the advanced similarity rules */
	readonly OrganizationId: DevKit.Guid | null;
	/** Date and time when the record was created. */
	readonly OverwriteTime_UtcDateOnly: Date | null;
	/** Unique identifier of the associated solution. */
	readonly SolutionId: DevKit.Guid | null;
	/** Status of the advanced similarity rules */
	StateCode: number | null;
	/** Reason for the status of the advanced similarity rules */
	StatusCode: number | null;
	/** For internal use only. */
	readonly SupportingSolutionId: DevKit.Guid | null;
}

const AdvancedSimilarityRuleFieldConfig: DevKit.IWebApiFieldConfigMap = {
	AdvancedSimilarityRuleId: { logicalName: 'advancedsimilarityruleid' },
	AdvancedSimilarityRuleIdUnique: { logicalName: 'advancedsimilarityruleidunique', readOnly: true },
	AzureServiceConnectionId: { schemaName: 'AzureServiceConnectionId', logicalName: '_azureserviceconnectionid_value', entityCollectionName: 'azureserviceconnections', entityLogicalName: 'azureserviceconnection' },
	ComponentState: { logicalName: 'componentstate', readOnly: true, type: 'Integer' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Description: { logicalName: 'description' },
	Entity2: { logicalName: 'entity' },
	ExactMatchList: { logicalName: 'exactmatchlist' },
	FetchXmlList: { logicalName: 'fetchxmllist' },
	FilterResultByStatus: { logicalName: 'filterresultbystatus', type: 'Integer' },
	FilterResultByStatusDisplayName: { logicalName: 'filterresultbystatusdisplayname' },
	IsAzureMLRequired: { logicalName: 'isazuremlrequired', type: 'Boolean' },
	IsManaged: { logicalName: 'ismanaged', readOnly: true, type: 'Boolean' },
	MaxNumberKeyphrases: { logicalName: 'maxnumberkeyphrases', type: 'Integer' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	name: { logicalName: 'name' },
	NgramSize: { logicalName: 'ngramsize', type: 'Integer' },
	OrganizationId: { schemaName: 'OrganizationId', logicalName: '_organizationid_value', readOnly: true, entityCollectionName: 'organizations', entityLogicalName: 'organization' },
	OverwriteTime_UtcDateOnly: { logicalName: 'overwritetime', readOnly: true, type: 'DateTime' },
	SolutionId: { logicalName: 'solutionid', readOnly: true },
	StateCode: { logicalName: 'statecode', type: 'Integer' },
	StatusCode: { logicalName: 'statuscode', type: 'Integer' },
	SupportingSolutionId: { logicalName: 'supportingsolutionid', readOnly: true },
};

/**
 * AdvancedSimilarityRule WebApi class for early-bound style coding
 * Usage: const advancedSimilarityRule = new AdvancedSimilarityRuleApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class AdvancedSimilarityRuleApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IAdvancedSimilarityRuleApi>(entity, 'advancedsimilarityrule', 'advancedsimilarityrules', AdvancedSimilarityRuleFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface AdvancedSimilarityRuleApi extends IAdvancedSimilarityRuleApi { }
