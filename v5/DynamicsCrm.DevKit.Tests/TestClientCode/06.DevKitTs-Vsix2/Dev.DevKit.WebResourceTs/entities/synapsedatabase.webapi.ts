/**
 * synapsedatabase.webapi.ts - synapsedatabase WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * synapsedatabase WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IsynapsedatabaseApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<IsynapsedatabaseApi, 'FormattedValue'>]: string };
	/** For internal use only. */
	readonly ComponentIdUnique: DevKit.Guid | null;
	/** For internal use only. */
	readonly ComponentState: number | null;
	/** Unique identifier of the user who created the record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the record was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the record. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Name of the Synapse database. */
	DatabaseName: string | null;
	/** Unique identifier for Data Lake Folder associated with Synapse Database. */
	datalakefolder: DevKit.Guid | null;
	/** The development endpoint for this Synapse database. */
	DevelopmentEndpoint: string | null;
	/** Sequence number of the import that created this record. */
	ImportSequenceNumber: number | null;
	/** For internal use only. */
	IsCustomizable: string | null;
	/** Indicates whether the solution component is part of a managed solution. */
	readonly IsManaged: boolean | null;
	/** Connection Id for the Lakehouse that contains shortcuts to the table. */
	LakehouseConnectionId: DevKit.Guid | null;
	/** Id for the Lakehouse that contains shortcuts to the table. */
	LakehouseId: DevKit.Guid | null;
	/** Id for the Power BI workspace that contains the Lakehouse */
	LakehouseWorkspaceId: DevKit.Guid | null;
	/** Unique identifier of the user who modified the record. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the record was modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who modified the record. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** The name of the custom entity. */
	name: string | null;
	/** Date and time that the record was migrated. */
	OverriddenCreatedOn_UtcDateOnly: Date | null;
	/** For internal use only. */
	readonly OverwriteTime_UtcDateAndTime: Date | null;
	/** Owner Id */
	OwnerId: DevKit.Guid | null;
	/** Unique identifier for the business unit that owns the record */
	readonly OwningBusinessUnit: DevKit.Guid | null;
	/** Unique identifier for the team that owns the record. */
	readonly OwningTeam: DevKit.Guid | null;
	/** Unique identifier for the user that owns the record. */
	readonly OwningUser: DevKit.Guid | null;
	/** Azure resource group of the Synapse database. */
	ResourceGroup: string | null;
	/** Schema prefix to use for the table names */
	SchemaPrefix: string | null;
	/** Serverless Sql Endpoint of the Synapse database. */
	ServerlessSqlEndpoint: string | null;
	/** Unique identifier of the associated solution. */
	readonly SolutionId: DevKit.Guid | null;
	/** Spark pool configuration */
	SparkPoolConfig: string | null;
	/** Status of the Synapse Database */
	statecode: number | null;
	/** Reason for the status of the Synapse Database */
	statuscode: number | null;
	/** Azure subscription for the Synapse database */
	Subscription: string | null;
	/** For internal use only. */
	readonly SupportingSolutionId: DevKit.Guid | null;
	/** Unique identifier for entity instances */
	synapsedatabaseId: DevKit.Guid | null;
	/** Azure tenant of the Synapse database */
	Tenant: string | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** Unique Name for the entity. */
	UniqueName: string | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
	/** Version Number */
	readonly VersionNumber: number | null;
	/** Workspace name of the Synapse database. */
	WorkspaceName: string | null;
}

const synapsedatabaseFieldConfig: DevKit.IWebApiFieldConfigMap = {
	ComponentIdUnique: { logicalName: 'componentidunique', readOnly: true },
	ComponentState: { logicalName: 'componentstate', readOnly: true, type: 'Integer' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	DatabaseName: { logicalName: 'databasename' },
	datalakefolder: { schemaName: 'datalakefolder', logicalName: '_datalakefolder_value', entityCollectionName: 'datalakefolders', entityLogicalName: 'datalakefolder' },
	DevelopmentEndpoint: { logicalName: 'developmentendpoint' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	IsCustomizable: { logicalName: 'iscustomizable' },
	IsManaged: { logicalName: 'ismanaged', readOnly: true, type: 'Boolean' },
	LakehouseConnectionId: { logicalName: 'lakehouseconnectionid' },
	LakehouseId: { logicalName: 'lakehouseid' },
	LakehouseWorkspaceId: { logicalName: 'lakehouseworkspaceid' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	name: { logicalName: 'name' },
	OverriddenCreatedOn_UtcDateOnly: { logicalName: 'overriddencreatedon', type: 'DateTime' },
	OverwriteTime_UtcDateAndTime: { logicalName: 'overwritetime', readOnly: true, type: 'DateTime' },
	OwnerId: { schemaName: 'OwnerId', logicalName: '_ownerid_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OwningBusinessUnit: { schemaName: 'OwningBusinessUnit', logicalName: '_owningbusinessunit_value', readOnly: true, entityCollectionName: 'businessunits', entityLogicalName: 'businessunit' },
	OwningTeam: { schemaName: 'OwningTeam', logicalName: '_owningteam_value', readOnly: true, entityCollectionName: 'teams', entityLogicalName: 'team' },
	OwningUser: { schemaName: 'OwningUser', logicalName: '_owninguser_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ResourceGroup: { logicalName: 'resourcegroup' },
	SchemaPrefix: { logicalName: 'schemaprefix' },
	ServerlessSqlEndpoint: { logicalName: 'serverlesssqlendpoint' },
	SolutionId: { logicalName: 'solutionid', readOnly: true },
	SparkPoolConfig: { logicalName: 'sparkpoolconfig' },
	statecode: { logicalName: 'statecode', type: 'Integer' },
	statuscode: { logicalName: 'statuscode', type: 'Integer' },
	Subscription: { logicalName: 'subscription' },
	SupportingSolutionId: { logicalName: 'supportingsolutionid', readOnly: true },
	synapsedatabaseId: { logicalName: 'synapsedatabaseid' },
	Tenant: { logicalName: 'tenant' },
	TimeZoneRuleVersionNumber: { logicalName: 'timezoneruleversionnumber', type: 'Integer' },
	UniqueName: { logicalName: 'uniquename' },
	UTCConversionTimeZoneCode: { logicalName: 'utcconversiontimezonecode', type: 'Integer' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
	WorkspaceName: { logicalName: 'workspacename' },
};

/**
 * synapsedatabase WebApi class for early-bound style coding
 * Usage: const synapsedatabase = new synapsedatabaseApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class synapsedatabaseApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IsynapsedatabaseApi>(entity, 'synapsedatabase', 'synapsedatabases', synapsedatabaseFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface synapsedatabaseApi extends IsynapsedatabaseApi { }
