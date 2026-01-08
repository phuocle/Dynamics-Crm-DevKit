/**
 * FederatedKnowledgeMetadataRefresh.webapi.ts - FederatedKnowledgeMetadataRefresh WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for FederatedKnowledgeMetadataRefresh
 * All fields return string representation of their values
 */
export interface IFederatedKnowledgeMetadataRefreshFormattedValue {
	readonly connectorid: string;
	readonly CreatedBy: string;
	readonly CreatedOn_UtcDateAndTime: string;
	readonly CreatedOnBehalfBy: string;
	readonly federatedjobtype: string;
	readonly FederatedKnowledgeMetadataRefreshId: string;
	readonly ImportSequenceNumber: string;
	readonly issuetype: string;
	readonly jobmessageid: string;
	readonly lastmetadatarefreshtimestamp_UtcDateAndTime: string;
	readonly lastsuccessfulmetadatarefreshtimestamp_UtcDateAndTime: string;
	readonly metadatarefreshstatus: string;
	readonly ModifiedBy: string;
	readonly ModifiedOn_UtcDateAndTime: string;
	readonly ModifiedOnBehalfBy: string;
	readonly numoffiledatacompleted: string;
	readonly OverriddenCreatedOn_UtcDateOnly: string;
	readonly OwnerId: string;
	readonly OwningBusinessUnit: string;
	readonly OwningTeam: string;
	readonly OwningUser: string;
	readonly searchconfigurationid: string;
	readonly searchconfigurationname: string;
	readonly statecode: string;
	readonly statuscode: string;
	readonly TimeZoneRuleVersionNumber: string;
	readonly totalfiledatacount: string;
	readonly UTCConversionTimeZoneCode: string;
	readonly VersionNumber: string;
}

/**
 * FederatedKnowledgeMetadataRefresh WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IFederatedKnowledgeMetadataRefreshApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: IFederatedKnowledgeMetadataRefreshFormattedValue;
	/** Connector Id */
	connectorid: string | null;
	/** Unique identifier of the user who created the record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the record was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the record. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Federated Job Type */
	federatedjobtype: number | null;
	/** Unique identifier for metadatarefresh for federated knowledge source */
	FederatedKnowledgeMetadataRefreshId: DevKit.Guid | null;
	/** Sequence number of the import that created this record. */
	ImportSequenceNumber: number | null;
	/** Issue Type for failed metadata refresh */
	issuetype: string | null;
	/** Job MessageId */
	jobmessageid: string | null;
	/** Last MetadataRefresh TimeStamp */
	lastmetadatarefreshtimestamp_UtcDateAndTime: Date | null;
	/** Last Successful MetadataRefresh Timestamp */
	lastsuccessfulmetadatarefreshtimestamp_UtcDateAndTime: Date | null;
	/** Stores the metadata refresh status */
	metadatarefreshstatus: string | null;
	/** Unique identifier of the user who modified the record. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the record was modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who modified the record. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Number Of Files Data Completed processing */
	numoffiledatacompleted: number | null;
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
	/** SearchConfigurationId for a knowledge sources */
	searchconfigurationid: DevKit.Guid | null;
	/** Unique Name for the Federated Knowledge Search Configuration. */
	searchconfigurationname: string | null;
	/** Status of the FederatedKnowledgeMetadataRefresh */
	statecode: number | null;
	/** Reason for the status of the FederatedKnowledgeMetadataRefresh */
	statuscode: number | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** Total count of files to be processed. */
	totalfiledatacount: number | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
	/** Version Number */
	readonly VersionNumber: number | null;
}

const FederatedKnowledgeMetadataRefreshFieldConfig: DevKit.IWebApiFieldConfigMap = {
	connectorid: { logicalName: 'connectorid' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	federatedjobtype: { logicalName: 'federatedjobtype', type: 'Integer' },
	FederatedKnowledgeMetadataRefreshId: { logicalName: 'federatedknowledgemetadatarefreshid' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	issuetype: { logicalName: 'issuetype' },
	jobmessageid: { logicalName: 'jobmessageid' },
	lastmetadatarefreshtimestamp_UtcDateAndTime: { logicalName: 'lastmetadatarefreshtimestamp', type: 'DateTime' },
	lastsuccessfulmetadatarefreshtimestamp_UtcDateAndTime: { logicalName: 'lastsuccessfulmetadatarefreshtimestamp', type: 'DateTime' },
	metadatarefreshstatus: { logicalName: 'metadatarefreshstatus' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	numoffiledatacompleted: { logicalName: 'numoffiledatacompleted', type: 'Integer' },
	OverriddenCreatedOn_UtcDateOnly: { logicalName: 'overriddencreatedon', type: 'DateTime' },
	OwnerId: { schemaName: 'OwnerId', logicalName: '_ownerid_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OwningBusinessUnit: { schemaName: 'OwningBusinessUnit', logicalName: '_owningbusinessunit_value', readOnly: true, entityCollectionName: 'businessunits', entityLogicalName: 'businessunit' },
	OwningTeam: { schemaName: 'OwningTeam', logicalName: '_owningteam_value', readOnly: true, entityCollectionName: 'teams', entityLogicalName: 'team' },
	OwningUser: { schemaName: 'OwningUser', logicalName: '_owninguser_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	searchconfigurationid: { logicalName: 'searchconfigurationid' },
	searchconfigurationname: { logicalName: 'searchconfigurationname' },
	statecode: { logicalName: 'statecode', type: 'Integer' },
	statuscode: { logicalName: 'statuscode', type: 'Integer' },
	TimeZoneRuleVersionNumber: { logicalName: 'timezoneruleversionnumber', type: 'Integer' },
	totalfiledatacount: { logicalName: 'totalfiledatacount', type: 'Integer' },
	UTCConversionTimeZoneCode: { logicalName: 'utcconversiontimezonecode', type: 'Integer' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * FederatedKnowledgeMetadataRefresh WebApi class for early-bound style coding
 * Usage: const federatedKnowledgeMetadataRefresh = new FederatedKnowledgeMetadataRefreshApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class FederatedKnowledgeMetadataRefreshApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IFederatedKnowledgeMetadataRefreshApi>(entity, 'federatedknowledgemetadatarefresh', 'federatedknowledgemetadatarefreshs', FederatedKnowledgeMetadataRefreshFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface FederatedKnowledgeMetadataRefreshApi extends IFederatedKnowledgeMetadataRefreshApi { }
