/**
 * synapselinkexternaltablestate.webapi.ts - synapselinkexternaltablestate WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * synapselinkexternaltablestate WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IsynapselinkexternaltablestateApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<IsynapselinkexternaltablestateApi, 'FormattedValue'>]: string };
	/** Unique identifier of the user who created the record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the record was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the record. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Unique identifier for Data Lake Folder associated with Synapse Link External Table State. */
	datalakefolder: DevKit.Guid | null;
	/** Name of the entity */
	EntityName2: string | null;
	/** Sequence number of the import that created this record. */
	ImportSequenceNumber: number | null;
	/** State of lakehouse shortcut creation for an entity */
	LakehouseShortcutState: number | null;
	/** Last SynchronizedOn Date time */
	LastSynchronizedOn_UtcDateAndTime: Date | null;
	/** Last data synchronization state */
	LastSyncState: number | null;
	/** Maximum record version synchronized to the lake */
	MaxRecordVersion: number | null;
	/** Metadata version */
	MetadataVersion: string | null;
	/** Last Synced Minimum Data Version */
	MinSyncedDataVersion: number | null;
	/** Unique identifier of the user who modified the record. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the record was modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who modified the record. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** The name of the custom entity. */
	name: string | null;
	/** Unique identifier for the organization */
	readonly OrganizationId: DevKit.Guid | null;
	/** Date and time that the record was migrated. */
	OverriddenCreatedOn_UtcDateOnly: Date | null;
	/** Record count synchronized to lake */
	RecordCount: number | null;
	/** Schema modified on date-time */
	SchemaModifiedOn_UtcDateAndTime: Date | null;
	/** Source Record Count */
	SourceRecordCount: number | null;
	/** Status of the Synapse Link External Table State */
	statecode: number | null;
	/** Reason for the status of the Synapse Link External Table State */
	statuscode: number | null;
	/** Synapse database name */
	SynapseDatabaseName: string | null;
	/** Unique identifier for entity instances */
	synapselinkexternaltablestateId: DevKit.Guid | null;
	/** Synapse workspace name */
	SynapseWorkspaceName: string | null;
	/** External table state */
	TableState: number | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** State of Trino registration for an entity */
	TrinoState: number | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
	/** Version Number */
	readonly VersionNumber: number | null;
}

const synapselinkexternaltablestateFieldConfig: DevKit.IWebApiFieldConfigMap = {
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	datalakefolder: { schemaName: 'datalakefolder', logicalName: '_datalakefolder_value', entityCollectionName: 'datalakefolders', entityLogicalName: 'datalakefolder' },
	EntityName2: { logicalName: 'entityname' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	LakehouseShortcutState: { logicalName: 'lakehouseshortcutstate', type: 'Integer' },
	LastSynchronizedOn_UtcDateAndTime: { logicalName: 'lastsynchronizedon', type: 'DateTime' },
	LastSyncState: { logicalName: 'lastsyncstate', type: 'Integer' },
	MaxRecordVersion: { logicalName: 'maxrecordversion', type: 'Integer' },
	MetadataVersion: { logicalName: 'metadataversion' },
	MinSyncedDataVersion: { logicalName: 'minsynceddataversion', type: 'Integer' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	name: { logicalName: 'name' },
	OrganizationId: { schemaName: 'OrganizationId', logicalName: '_organizationid_value', readOnly: true, entityCollectionName: 'organizations', entityLogicalName: 'organization' },
	OverriddenCreatedOn_UtcDateOnly: { logicalName: 'overriddencreatedon', type: 'DateTime' },
	RecordCount: { logicalName: 'recordcount', type: 'Integer' },
	SchemaModifiedOn_UtcDateAndTime: { logicalName: 'schemamodifiedon', type: 'DateTime' },
	SourceRecordCount: { logicalName: 'sourcerecordcount', type: 'Integer' },
	statecode: { logicalName: 'statecode', type: 'Integer' },
	statuscode: { logicalName: 'statuscode', type: 'Integer' },
	SynapseDatabaseName: { logicalName: 'synapsedatabasename' },
	synapselinkexternaltablestateId: { logicalName: 'synapselinkexternaltablestateid' },
	SynapseWorkspaceName: { logicalName: 'synapseworkspacename' },
	TableState: { logicalName: 'tablestate', type: 'Integer' },
	TimeZoneRuleVersionNumber: { logicalName: 'timezoneruleversionnumber', type: 'Integer' },
	TrinoState: { logicalName: 'trinostate', type: 'Integer' },
	UTCConversionTimeZoneCode: { logicalName: 'utcconversiontimezonecode', type: 'Integer' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * synapselinkexternaltablestate WebApi class for early-bound style coding
 * Usage: const synapselinkexternaltablestate = new synapselinkexternaltablestateApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class synapselinkexternaltablestateApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IsynapselinkexternaltablestateApi>(entity, 'synapselinkexternaltablestate', 'synapselinkexternaltablestates', synapselinkexternaltablestateFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface synapselinkexternaltablestateApi extends IsynapselinkexternaltablestateApi { }
