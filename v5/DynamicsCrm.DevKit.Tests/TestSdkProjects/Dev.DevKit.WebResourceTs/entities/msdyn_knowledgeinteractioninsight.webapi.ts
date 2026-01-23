/**
 * msdyn_knowledgeinteractioninsight.webapi.ts - msdyn_knowledgeinteractioninsight WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * msdyn_knowledgeinteractioninsight WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface Imsdyn_knowledgeinteractioninsightApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<Imsdyn_knowledgeinteractioninsightApi, 'FormattedValue'>]: string };
	/** Unique identifier of the user who created the record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the record was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the record. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Sequence number of the import that created this record. */
	ImportSequenceNumber: number | null;
	/** Unique identifier of the user who modified the record. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the record was modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who modified the record. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** The position of the article in the returned article list */
	msdyn_ArticleRank: number | null;
	/** The ID of the knowledge article record */
	msdyn_ArticleRecordId: string | null;
	/** Relevance score for the knowledge article returned by the search engine */
	msdyn_ArticleRelevance: number | null;
	/** Context of custom interactions */
	msdyn_InteractionContext: string | null;
	/** The type of interaction with the customer */
	msdyn_InteractionType: string | null;
	/** Unique identifier for entity instances */
	msdyn_knowledgeinteractioninsightId: DevKit.Guid | null;
	/** The related Record ID of the knowledge operation entity */
	msdyn_KnowledgeOperationId: string | null;
	/** The operation type performed, such as search or recommendation */
	msdyn_KnowledgeOperationType: string | null;
	/** Date and time of the interaction. */
	msdyn_TimeStamp_TimezoneDateAndTime: Date | null;
	/** Date and time that the record was migrated. */
	OverriddenCreatedOn_UtcDateOnly: Date | null;
	/** Owner Id */
	OwnerId: DevKit.Guid | null;
	/** Unique identifier for the business unit that owns the record */
	readonly OwningBusinessUnit: DevKit.Guid | null;
	/** Unique identifier for the team that owns the record. */
	readonly OwningTeam: DevKit.Guid | null;
	/** Unique identifier for the user that owns the record. */
	readonly OwningUser: DevKit.Guid | null;
	/** Status of the Knowledge Interaction Insight */
	statecode: number | null;
	/** Reason for the status of the Knowledge Interaction Insight */
	statuscode: number | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
	/** Version Number */
	readonly VersionNumber: number | null;
}

const msdyn_knowledgeinteractioninsightFieldConfig: DevKit.IWebApiFieldConfigMap = {
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	msdyn_ArticleRank: { logicalName: 'msdyn_articlerank', type: 'Integer' },
	msdyn_ArticleRecordId: { logicalName: 'msdyn_articlerecordid' },
	msdyn_ArticleRelevance: { logicalName: 'msdyn_articlerelevance', type: 'Number' },
	msdyn_InteractionContext: { logicalName: 'msdyn_interactioncontext' },
	msdyn_InteractionType: { logicalName: 'msdyn_interactiontype' },
	msdyn_knowledgeinteractioninsightId: { logicalName: 'msdyn_knowledgeinteractioninsightid' },
	msdyn_KnowledgeOperationId: { logicalName: 'msdyn_knowledgeoperationid' },
	msdyn_KnowledgeOperationType: { logicalName: 'msdyn_knowledgeoperationtype' },
	msdyn_TimeStamp_TimezoneDateAndTime: { logicalName: 'msdyn_timestamp', type: 'DateTime' },
	OverriddenCreatedOn_UtcDateOnly: { logicalName: 'overriddencreatedon', type: 'DateTime' },
	OwnerId: { schemaName: 'OwnerId', logicalName: '_ownerid_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OwningBusinessUnit: { schemaName: 'OwningBusinessUnit', logicalName: '_owningbusinessunit_value', readOnly: true, entityCollectionName: 'businessunits', entityLogicalName: 'businessunit' },
	OwningTeam: { schemaName: 'OwningTeam', logicalName: '_owningteam_value', readOnly: true, entityCollectionName: 'teams', entityLogicalName: 'team' },
	OwningUser: { schemaName: 'OwningUser', logicalName: '_owninguser_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	statecode: { logicalName: 'statecode', type: 'Integer' },
	statuscode: { logicalName: 'statuscode', type: 'Integer' },
	TimeZoneRuleVersionNumber: { logicalName: 'timezoneruleversionnumber', type: 'Integer' },
	UTCConversionTimeZoneCode: { logicalName: 'utcconversiontimezonecode', type: 'Integer' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * msdyn_knowledgeinteractioninsight WebApi class for early-bound style coding
 * Usage: const msdyn_knowledgeinteractioninsight = new msdyn_knowledgeinteractioninsightApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class msdyn_knowledgeinteractioninsightApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<Imsdyn_knowledgeinteractioninsightApi>(entity, 'msdyn_knowledgeinteractioninsight', 'msdyn_knowledgeinteractioninsights', msdyn_knowledgeinteractioninsightFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface msdyn_knowledgeinteractioninsightApi extends Imsdyn_knowledgeinteractioninsightApi { }
