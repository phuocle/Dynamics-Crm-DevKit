/**
 * packagehistory.webapi.ts - packagehistory WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for packagehistory
 * All fields return string representation of their values
 */
export interface IpackagehistoryFormattedValue {
	readonly ApplicationId: string;
	readonly ApplicationName: string;
	readonly CatalogId: string;
	readonly CorrelationId: string;
	readonly CreatedBy: string;
	readonly CreatedOn_UtcDateAndTime: string;
	readonly CreatedOnBehalfBy: string;
	readonly DeployAsUserId: string;
	readonly DeploymentLog_name: string;
	readonly DeploymentMessageId: string;
	readonly ExecutionName: string;
	readonly ImportSequenceNumber: string;
	readonly IsClusterOperation: string;
	readonly ModifiedBy: string;
	readonly ModifiedOn_UtcDateAndTime: string;
	readonly ModifiedOnBehalfBy: string;
	readonly OperationId: string;
	readonly OrganizationId: string;
	readonly OverriddenCreatedOn_UtcDateOnly: string;
	readonly PackageFile_name: string;
	readonly packagehistoryId: string;
	readonly PackageId: string;
	readonly PackageInstanceId: string;
	readonly PackageType: string;
	readonly Priority: string;
	readonly PublisherId: string;
	readonly PublisherName: string;
	readonly Settings: string;
	readonly StageValue: string;
	readonly statecode: string;
	readonly statuscode: string;
	readonly StatusMessage: string;
	readonly TimeZoneRuleVersionNumber: string;
	readonly UniqueName: string;
	readonly UTCConversionTimeZoneCode: string;
	readonly Version: string;
	readonly VersionNumber: string;
}

/**
 * packagehistory WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IpackagehistoryApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: IpackagehistoryFormattedValue;
	/** Unique identifier for the application installed */
	ApplicationId: DevKit.Guid | null;
	/** The application name of the target for installation */
	ApplicationName: string | null;
	/** The catalog that acted as the source for the artifact */
	CatalogId: string | null;
	/** The correlationId for this process */
	CorrelationId: string | null;
	/** Unique identifier of the user who created the record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the record was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the record. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** deploy package as given user (azureactivedirectoryobjectid) */
	DeployAsUserId: string | null;
	/** Stores the package deployment logs for an installation */
	readonly DeploymentLog_name: string | null;
	/** Stores Deployment MessageId for the queued package. */
	DeploymentMessageId: string | null;
	/** The display name for this operation */
	ExecutionName: string | null;
	/** Sequence number of the import that created this record. */
	ImportSequenceNumber: number | null;
	/** Indicates whether this package history record represents a cluster operation */
	IsClusterOperation: boolean | null;
	/** Unique identifier of the user who modified the record. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the record was modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who modified the record. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** OperationId */
	OperationId: DevKit.Guid | null;
	/** Unique identifier for the organization */
	readonly OrganizationId: DevKit.Guid | null;
	/** Date and time that the record was migrated. */
	OverriddenCreatedOn_UtcDateOnly: Date | null;
	/** Stores the package file for installation */
	readonly PackageFile_name: string | null;
	/** Unique identifier for a single package history execution */
	packagehistoryId: DevKit.Guid | null;
	/** Unique identifier for the package to install */
	PackageId: DevKit.Guid | null;
	/** PackageInstanceId */
	PackageInstanceId: DevKit.Guid | null;
	/** Type of the package */
	PackageType: number | null;
	/** Priority level for the package */
	Priority: number | null;
	/** Publisher Id */
	PublisherId: DevKit.Guid | null;
	/** The publisher name of the target for installation */
	PublisherName: string | null;
	/** Deployment Package settings value. */
	Settings: string | null;
	/** Stage of the operation */
	StageValue: number | null;
	/** Status of the operation */
	statecode: number | null;
	/** Reason for the status of the operation */
	statuscode: number | null;
	/** Status for the orchestration */
	StatusMessage: string | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** The unique name of the target for installation */
	UniqueName: string | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
	/** The version of the target for installation */
	Version: string | null;
	/** Version Number */
	readonly VersionNumber: number | null;
}

const packagehistoryFieldConfig: DevKit.IWebApiFieldConfigMap = {
	ApplicationId: { logicalName: 'applicationid' },
	ApplicationName: { logicalName: 'applicationname' },
	CatalogId: { logicalName: 'catalogid' },
	CorrelationId: { logicalName: 'correlationid' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	DeployAsUserId: { logicalName: 'deployasuserid' },
	DeploymentLog_name: { logicalName: 'deploymentlog', readOnly: true },
	DeploymentMessageId: { logicalName: 'deploymentmessageid' },
	ExecutionName: { logicalName: 'executionname' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	IsClusterOperation: { logicalName: 'isclusteroperation', type: 'Boolean' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OperationId: { logicalName: 'operationid' },
	OrganizationId: { schemaName: 'OrganizationId', logicalName: '_organizationid_value', readOnly: true, entityCollectionName: 'organizations', entityLogicalName: 'organization' },
	OverriddenCreatedOn_UtcDateOnly: { logicalName: 'overriddencreatedon', type: 'DateTime' },
	PackageFile_name: { logicalName: 'packagefile', readOnly: true },
	packagehistoryId: { logicalName: 'packagehistoryid' },
	PackageId: { logicalName: 'packageid' },
	PackageInstanceId: { logicalName: 'packageinstanceid' },
	PackageType: { logicalName: 'packagetype', type: 'Integer' },
	Priority: { logicalName: 'priority', type: 'Integer' },
	PublisherId: { logicalName: 'publisherid' },
	PublisherName: { logicalName: 'publishername' },
	Settings: { logicalName: 'settings' },
	StageValue: { logicalName: 'stagevalue', type: 'Integer' },
	statecode: { logicalName: 'statecode', type: 'Integer' },
	statuscode: { logicalName: 'statuscode', type: 'Integer' },
	StatusMessage: { logicalName: 'statusmessage' },
	TimeZoneRuleVersionNumber: { logicalName: 'timezoneruleversionnumber', type: 'Integer' },
	UniqueName: { logicalName: 'uniquename' },
	UTCConversionTimeZoneCode: { logicalName: 'utcconversiontimezonecode', type: 'Integer' },
	Version: { logicalName: 'version' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * packagehistory WebApi class for early-bound style coding
 * Usage: const packagehistory = new packagehistoryApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class packagehistoryApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IpackagehistoryApi>(entity, 'packagehistory', 'packagehistories', packagehistoryFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface packagehistoryApi extends IpackagehistoryApi { }
