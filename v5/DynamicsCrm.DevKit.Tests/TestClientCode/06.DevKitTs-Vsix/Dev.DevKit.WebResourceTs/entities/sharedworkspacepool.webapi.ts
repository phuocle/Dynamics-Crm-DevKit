/**
 * sharedworkspacepool.webapi.ts - sharedworkspacepool WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * sharedworkspacepool WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IsharedworkspacepoolApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<IsharedworkspacepoolApi, 'FormattedValue'>]: string };
	/** Enabled when the sharedworkspacepool record has been claimed */
	Claimed: boolean | null;
	/** Unique identifier of the user who created the record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the record was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the record. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Discovery Endpoint */
	DiscoveryEndpoint: string | null;
	/** Sequence number of the import that created this record. */
	ImportSequenceNumber: number | null;
	/** Unique identifier of the user who modified the record. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the record was modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who modified the record. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Name. Unused, but entity required to have a string PrimaryName field */
	Name: string | null;
	/** Orderer Endpoint */
	OrdererEndpoint: string | null;
	/** Date and time that the record was migrated. */
	OverriddenCreatedOn_UtcDateOnly: Date | null;
	/** Unique identifier for instance of entity. Corresponds to the FRS container Id */
	sharedworkspacepoolId: DevKit.Guid | null;
	/** Status of the workspace */
	statecode: number | null;
	/** Reason for the status of the Shared Workspace Pool */
	statuscode: number | null;
	/** Storage Endpoint */
	StorageEndpoint: string | null;
	/** The tenant where the workspace resides */
	TenantId: DevKit.Guid | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
	/** Version Number */
	readonly VersionNumber: number | null;
}

const sharedworkspacepoolFieldConfig: DevKit.IWebApiFieldConfigMap = {
	Claimed: { logicalName: 'claimed', type: 'Boolean' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	DiscoveryEndpoint: { logicalName: 'discoveryendpoint' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Name: { logicalName: 'name' },
	OrdererEndpoint: { logicalName: 'ordererendpoint' },
	OverriddenCreatedOn_UtcDateOnly: { logicalName: 'overriddencreatedon', type: 'DateTime' },
	sharedworkspacepoolId: { logicalName: 'sharedworkspacepoolid' },
	statecode: { logicalName: 'statecode', type: 'Integer' },
	statuscode: { logicalName: 'statuscode', type: 'Integer' },
	StorageEndpoint: { logicalName: 'storageendpoint' },
	TenantId: { logicalName: 'tenantid' },
	TimeZoneRuleVersionNumber: { logicalName: 'timezoneruleversionnumber', type: 'Integer' },
	UTCConversionTimeZoneCode: { logicalName: 'utcconversiontimezonecode', type: 'Integer' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * sharedworkspacepool WebApi class for early-bound style coding
 * Usage: const sharedworkspacepool = new sharedworkspacepoolApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class sharedworkspacepoolApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IsharedworkspacepoolApi>(entity, 'sharedworkspacepool', 'sharedworkspacepools', sharedworkspacepoolFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface sharedworkspacepoolApi extends IsharedworkspacepoolApi { }
