/**
 * datalakefolder.webapi.ts - datalakefolder WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * datalakefolder WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IdatalakefolderApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<IdatalakefolderApi, 'FormattedValue'>]: string };
	/** Azure Data Lake Access Type. */
	AccessType: string | null;
	/** Path to the CDM file. */
	CDMPath: string | null;
	/** Azure location where the compliance lake should be created. */
	ComplianceLakeLocation: string | null;
	/** For internal use only. */
	readonly ComponentIdUnique: DevKit.Guid | null;
	/** For internal use only. */
	readonly ComponentState: number | null;
	/** Azure Data Lake container endpoint for this folder. */
	containerendpoint: string | null;
	/** The security group for contributor access. */
	ContributorSecurityGroupId: DevKit.Guid | null;
	/** Unique identifier of the user who created the record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the record was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the record. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Unique Name for the entity. */
	datalakefolder_UniqueName: string | null;
	/** Unique identifier for entity instances */
	datalakefolderId: DevKit.Guid | null;
	/** Sub folder path to delta lake. */
	deltaLakePath: string | null;
	/** Extended Properties associated with this folder. */
	extendedproperties: string | null;
	/** Sequence number of the import that created this record. */
	ImportSequenceNumber: number | null;
	/** Indicates whether lake is used for compliance purposes or not. */
	IsComplianceLake: boolean | null;
	/** Indicates if folder data storage uses customer capacity. */
	iscustomercapacity: boolean | null;
	/** For internal use only. */
	IsCustomizable: string | null;
	/** Indicates if deep copy is enabled for folder. */
	isdeepcopyenabled: boolean | null;
	/** Indicates whether lake is managed or external. */
	IsExternalLake: boolean | null;
	/** Indicates whether external lake is read only. */
	IsExternalLakeReadOnly: boolean | null;
	/** Indicates whether the solution component is part of a managed solution. */
	readonly IsManaged: boolean | null;
	/** Indicates if folder data and metadata are visible to all applications, or only visible to the folder owner and applications with explicit permissions to the folder. */
	isprivate: boolean | null;
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
	/** The app id which owns this folder. The owning app id has full control i.e. read, write and execute permissions on the ADLS folder. */
	owningappid: DevKit.Guid | null;
	/** Unique identifier for the business unit that owns the record */
	readonly OwningBusinessUnit: DevKit.Guid | null;
	/** Unique identifier for the team that owns the record. */
	readonly OwningTeam: DevKit.Guid | null;
	/** Unique identifier for the user that owns the record. */
	readonly OwningUser: DevKit.Guid | null;
	/** Unique identifier of the parent folder for this folder. */
	parentfolderid: DevKit.Guid | null;
	/** Folder path in the Azure Data Lake container. */
	path: string | null;
	/** The security group for reader access. */
	ReaderSecurityGroupId: DevKit.Guid | null;
	/** Azure resource group of the storage account. */
	ResourceGroup: string | null;
	/** Indicates if folder is shared for readaccess for other FPAs. */
	sharedforreadaccess: boolean | null;
	/** Unique identifier of the associated solution. */
	readonly SolutionId: DevKit.Guid | null;
	/** Status of the Data Lake Folder */
	statecode: number | null;
	/** Reason for the status of the Data Lake Folder */
	statuscode: number | null;
	/** Azure subscription of the storage account. */
	Subscription: string | null;
	/** For internal use only. */
	readonly SupportingSolutionId: DevKit.Guid | null;
	/** Enable schema synchronization to Dataverse. */
	SynchronizeSchemaToDataverse: boolean | null;
	/** Enable schema synchronization to Synapse database. */
	SynchronizeSchemaToSynapseDb: boolean | null;
	/** Azure tenant of the storage account. */
	Tenant: string | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
	/** Version Number */
	readonly VersionNumber: number | null;
}

const datalakefolderFieldConfig: DevKit.IWebApiFieldConfigMap = {
	AccessType: { logicalName: 'accesstype' },
	CDMPath: { logicalName: 'cdmpath' },
	ComplianceLakeLocation: { logicalName: 'compliancelakelocation' },
	ComponentIdUnique: { logicalName: 'componentidunique', readOnly: true },
	ComponentState: { logicalName: 'componentstate', readOnly: true, type: 'Integer' },
	containerendpoint: { logicalName: 'containerendpoint' },
	ContributorSecurityGroupId: { logicalName: 'contributorsecuritygroupid' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	datalakefolder_UniqueName: { logicalName: 'datalakefolder_uniquename' },
	datalakefolderId: { logicalName: 'datalakefolderid' },
	deltaLakePath: { logicalName: 'deltaLakePath' },
	extendedproperties: { logicalName: 'extendedproperties' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	IsComplianceLake: { logicalName: 'iscompliancelake', type: 'Boolean' },
	iscustomercapacity: { logicalName: 'iscustomercapacity', type: 'Boolean' },
	IsCustomizable: { logicalName: 'iscustomizable' },
	isdeepcopyenabled: { logicalName: 'isdeepcopyenabled', type: 'Boolean' },
	IsExternalLake: { logicalName: 'isexternallake', type: 'Boolean' },
	IsExternalLakeReadOnly: { logicalName: 'isexternallakereadonly', type: 'Boolean' },
	IsManaged: { logicalName: 'ismanaged', readOnly: true, type: 'Boolean' },
	isprivate: { logicalName: 'isprivate', type: 'Boolean' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	name: { logicalName: 'name' },
	OverriddenCreatedOn_UtcDateOnly: { logicalName: 'overriddencreatedon', type: 'DateTime' },
	OverwriteTime_UtcDateAndTime: { logicalName: 'overwritetime', readOnly: true, type: 'DateTime' },
	OwnerId: { schemaName: 'OwnerId', logicalName: '_ownerid_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	owningappid: { logicalName: 'owningappid' },
	OwningBusinessUnit: { schemaName: 'OwningBusinessUnit', logicalName: '_owningbusinessunit_value', readOnly: true, entityCollectionName: 'businessunits', entityLogicalName: 'businessunit' },
	OwningTeam: { schemaName: 'OwningTeam', logicalName: '_owningteam_value', readOnly: true, entityCollectionName: 'teams', entityLogicalName: 'team' },
	OwningUser: { schemaName: 'OwningUser', logicalName: '_owninguser_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	parentfolderid: { schemaName: 'parentfolderid', logicalName: '_parentfolderid_value', entityCollectionName: 'datalakefolders', entityLogicalName: 'datalakefolder' },
	path: { logicalName: 'path' },
	ReaderSecurityGroupId: { logicalName: 'readersecuritygroupid' },
	ResourceGroup: { logicalName: 'resourcegroup' },
	sharedforreadaccess: { logicalName: 'sharedforreadaccess', type: 'Boolean' },
	SolutionId: { logicalName: 'solutionid', readOnly: true },
	statecode: { logicalName: 'statecode', type: 'Integer' },
	statuscode: { logicalName: 'statuscode', type: 'Integer' },
	Subscription: { logicalName: 'subscription' },
	SupportingSolutionId: { logicalName: 'supportingsolutionid', readOnly: true },
	SynchronizeSchemaToDataverse: { logicalName: 'synchronizeschematodataverse', type: 'Boolean' },
	SynchronizeSchemaToSynapseDb: { logicalName: 'synchronizeschematosynapsedb', type: 'Boolean' },
	Tenant: { logicalName: 'tenant' },
	TimeZoneRuleVersionNumber: { logicalName: 'timezoneruleversionnumber', type: 'Integer' },
	UTCConversionTimeZoneCode: { logicalName: 'utcconversiontimezonecode', type: 'Integer' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * datalakefolder WebApi class for early-bound style coding
 * Usage: const datalakefolder = new datalakefolderApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class datalakefolderApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IdatalakefolderApi>(entity, 'datalakefolder', 'datalakefolders', datalakefolderFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface datalakefolderApi extends IdatalakefolderApi { }
