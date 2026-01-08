/**
 * msdyn_knowledgesearchinsight.webapi.ts - msdyn_knowledgesearchinsight WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for msdyn_knowledgesearchinsight
 * All fields return string representation of their values
 */
export interface Imsdyn_knowledgesearchinsightFormattedValue {
	readonly CreatedBy: string;
	readonly CreatedOn_UtcDateAndTime: string;
	readonly CreatedOnBehalfBy: string;
	readonly ImportSequenceNumber: string;
	readonly ModifiedBy: string;
	readonly ModifiedOn_UtcDateAndTime: string;
	readonly ModifiedOnBehalfBy: string;
	readonly msdyn_ApplicationName: string;
	readonly msdyn_CorrelationId: string;
	readonly msdyn_CustomControlId: string;
	readonly msdyn_EntityRecordId: string;
	readonly msdyn_EntityType: string;
	readonly msdyn_Filters: string;
	readonly msdyn_InitiatedBy: string;
	readonly msdyn_knowledgesearchinsightId: string;
	readonly msdyn_ResponseTime: string;
	readonly msdyn_ResultCount: string;
	readonly msdyn_SearchProviderId: string;
	readonly msdyn_SearchProviderName: string;
	readonly msdyn_SearchTerm: string;
	readonly msdyn_SearchType: string;
	readonly msdyn_SortBy: string;
	readonly msdyn_TimeStamp_TimezoneDateAndTime: string;
	readonly OverriddenCreatedOn_UtcDateOnly: string;
	readonly OwnerId: string;
	readonly OwningBusinessUnit: string;
	readonly OwningTeam: string;
	readonly OwningUser: string;
	readonly statecode: string;
	readonly statuscode: string;
	readonly TimeZoneRuleVersionNumber: string;
	readonly UTCConversionTimeZoneCode: string;
	readonly VersionNumber: string;
}

/**
 * msdyn_knowledgesearchinsight WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface Imsdyn_knowledgesearchinsightApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: Imsdyn_knowledgesearchinsightFormattedValue;
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
	/** The name of the application where the knowledge search is performed. */
	msdyn_ApplicationName: string | null;
	/** Designed for federation search. Used to correlate the search that triggered different search records from different search providers. */
	msdyn_CorrelationId: string | null;
	/** The ID of control knowledge search where the search is performed. */
	msdyn_CustomControlId: string | null;
	/** Entity Record ID of the Entity Type */
	msdyn_EntityRecordId: string | null;
	/** Which kind of entity context the knowledge search performed */
	msdyn_EntityType: string | null;
	/** The filters selected when performing the search. */
	msdyn_Filters: string | null;
	/** Whether the search is initiated by the system automatically or manually initiated by the user. */
	msdyn_InitiatedBy: string | null;
	/** Unique identifier for entity instances */
	msdyn_knowledgesearchinsightId: DevKit.Guid | null;
	/** The time to return search results. */
	msdyn_ResponseTime: number | null;
	/** The total count of knowledge articles returned */
	msdyn_ResultCount: number | null;
	/** Designed for federation search. The ID of the federated search provider. */
	msdyn_SearchProviderId: string | null;
	/** Designed for federation search. The name of the federated search provider. */
	msdyn_SearchProviderName: string | null;
	/** The string typed in the search field */
	msdyn_SearchTerm: string | null;
	/** The type of search run, like full text search, relevance search, etc. */
	msdyn_SearchType: string | null;
	/** The sort selected when performing the search. */
	msdyn_SortBy: string | null;
	/** Date and time when the search is performed */
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
	/** Status of the Knowledge Search Insight */
	statecode: number | null;
	/** Reason for the status of the Knowledge Search Insight */
	statuscode: number | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
	/** Version Number */
	readonly VersionNumber: number | null;
}

const msdyn_knowledgesearchinsightFieldConfig: DevKit.IWebApiFieldConfigMap = {
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	msdyn_ApplicationName: { logicalName: 'msdyn_applicationname' },
	msdyn_CorrelationId: { logicalName: 'msdyn_correlationid' },
	msdyn_CustomControlId: { logicalName: 'msdyn_customcontrolid' },
	msdyn_EntityRecordId: { logicalName: 'msdyn_entityrecordid' },
	msdyn_EntityType: { logicalName: 'msdyn_entitytype' },
	msdyn_Filters: { logicalName: 'msdyn_filters' },
	msdyn_InitiatedBy: { logicalName: 'msdyn_initiatedby' },
	msdyn_knowledgesearchinsightId: { logicalName: 'msdyn_knowledgesearchinsightid' },
	msdyn_ResponseTime: { logicalName: 'msdyn_responsetime', type: 'Integer' },
	msdyn_ResultCount: { logicalName: 'msdyn_resultcount', type: 'Integer' },
	msdyn_SearchProviderId: { logicalName: 'msdyn_searchproviderid' },
	msdyn_SearchProviderName: { logicalName: 'msdyn_searchprovidername' },
	msdyn_SearchTerm: { logicalName: 'msdyn_searchterm' },
	msdyn_SearchType: { logicalName: 'msdyn_searchtype' },
	msdyn_SortBy: { logicalName: 'msdyn_sortby' },
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
 * msdyn_knowledgesearchinsight WebApi class for early-bound style coding
 * Usage: const msdyn_knowledgesearchinsight = new msdyn_knowledgesearchinsightApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class msdyn_knowledgesearchinsightApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<Imsdyn_knowledgesearchinsightApi>(entity, 'msdyn_knowledgesearchinsight', 'msdyn_knowledgesearchinsights', msdyn_knowledgesearchinsightFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface msdyn_knowledgesearchinsightApi extends Imsdyn_knowledgesearchinsightApi { }
