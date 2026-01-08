/**
 * package.webapi.ts - package WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for package
 * All fields return string representation of their values
 */
export interface IpackageFormattedValue {
	readonly AppId: string;
	readonly ApplicationName: string;
	readonly CatalogId: string;
	readonly CreatedBy: string;
	readonly CreatedOn_UtcDateAndTime: string;
	readonly CreatedOnBehalfBy: string;
	readonly DeploymentLog_name: string;
	readonly ImportSequenceNumber: string;
	readonly InstalledOn_UtcDateAndTime: string;
	readonly ModifiedBy: string;
	readonly ModifiedOn_UtcDateAndTime: string;
	readonly ModifiedOnBehalfBy: string;
	readonly OrganizationId: string;
	readonly OverriddenCreatedOn_UtcDateOnly: string;
	readonly packageId: string;
	readonly PackageInstanceId: string;
	readonly PackageInstanceOperationId: string;
	readonly PackageUniqueName: string;
	readonly PackageVersion: string;
	readonly PublisherId: string;
	readonly PublisherName: string;
	readonly statecode: string;
	readonly statuscode: string;
	readonly TimeZoneRuleVersionNumber: string;
	readonly TPSPackageId: string;
	readonly UTCConversionTimeZoneCode: string;
	readonly VersionNumber: string;
}

/**
 * package WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IpackageApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: IpackageFormattedValue;
	/** AppId */
	AppId: DevKit.Guid | null;
	/** ApplicationName */
	ApplicationName: string | null;
	/** The Catalog identifier for packages installed from a Catalog */
	CatalogId: string | null;
	/** Unique identifier of the user who created the record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the record was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the record. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Stores the package deployment logs for an installation */
	readonly DeploymentLog_name: string | null;
	/** Sequence number of the import that created this record. */
	ImportSequenceNumber: number | null;
	/** Date and time when the package was first installed. */
	InstalledOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the user who modified the record. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the record was modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who modified the record. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Unique identifier for the organization */
	readonly OrganizationId: DevKit.Guid | null;
	/** Date and time that the record was migrated. */
	OverriddenCreatedOn_UtcDateOnly: Date | null;
	/** Unique identifier for entity instances */
	packageId: DevKit.Guid | null;
	/** PackageInstanceId */
	PackageInstanceId: DevKit.Guid | null;
	/** PackageInstanceOperationId */
	PackageInstanceOperationId: DevKit.Guid | null;
	/** The unique name of the package. */
	PackageUniqueName: string | null;
	/** PackageVersion */
	PackageVersion: string | null;
	/** PublisherId */
	PublisherId: DevKit.Guid | null;
	/** PublisherName */
	PublisherName: string | null;
	/** Status of the Package */
	statecode: number | null;
	/** Reason for the status of the Package */
	statuscode: number | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** TPSPackageId */
	TPSPackageId: DevKit.Guid | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
	/** Version Number */
	readonly VersionNumber: number | null;
}

const packageFieldConfig: DevKit.IWebApiFieldConfigMap = {
	AppId: { logicalName: 'appid' },
	ApplicationName: { logicalName: 'applicationname' },
	CatalogId: { logicalName: 'catalogid' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	DeploymentLog_name: { logicalName: 'deploymentlog', readOnly: true },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	InstalledOn_UtcDateAndTime: { logicalName: 'installedon', type: 'DateTime' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OrganizationId: { schemaName: 'OrganizationId', logicalName: '_organizationid_value', readOnly: true, entityCollectionName: 'organizations', entityLogicalName: 'organization' },
	OverriddenCreatedOn_UtcDateOnly: { logicalName: 'overriddencreatedon', type: 'DateTime' },
	packageId: { logicalName: 'packageid' },
	PackageInstanceId: { logicalName: 'packageinstanceid' },
	PackageInstanceOperationId: { logicalName: 'packageinstanceoperationid' },
	PackageUniqueName: { logicalName: 'packageuniquename' },
	PackageVersion: { logicalName: 'packageversion' },
	PublisherId: { logicalName: 'publisherid' },
	PublisherName: { logicalName: 'publishername' },
	statecode: { logicalName: 'statecode', type: 'Integer' },
	statuscode: { logicalName: 'statuscode', type: 'Integer' },
	TimeZoneRuleVersionNumber: { logicalName: 'timezoneruleversionnumber', type: 'Integer' },
	TPSPackageId: { logicalName: 'tpspackageid' },
	UTCConversionTimeZoneCode: { logicalName: 'utcconversiontimezonecode', type: 'Integer' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * package WebApi class for early-bound style coding
 * Usage: const package = new packageApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class packageApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IpackageApi>(entity, 'package', 'packages', packageFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface packageApi extends IpackageApi { }
