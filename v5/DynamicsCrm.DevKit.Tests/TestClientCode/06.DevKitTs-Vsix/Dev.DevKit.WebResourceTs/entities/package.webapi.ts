/**
 * _package.webapi.ts - _package WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * _package WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface I_packageApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<I_packageApi, 'FormattedValue'>]: string };
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

const _packageFieldConfig: DevKit.IWebApiFieldConfigMap = {
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
 * _package WebApi class for early-bound style coding
 * Usage: const _package = new _packageApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class _packageApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<I_packageApi>(entity, 'package', 'packages', _packageFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface _packageApi extends I_packageApi { }
