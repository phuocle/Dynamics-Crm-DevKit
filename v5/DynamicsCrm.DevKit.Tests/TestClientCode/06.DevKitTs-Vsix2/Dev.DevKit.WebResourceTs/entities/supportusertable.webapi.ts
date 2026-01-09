/**
 * supportusertable.webapi.ts - supportusertable WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * supportusertable WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IsupportusertableApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<IsupportusertableApi, 'FormattedValue'>]: string };
	/** AAD ObjectId of the support user. */
	AADUserObjectId: string | null;
	/** Unique identifier of the user who created the record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the record was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the record. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Status of the record for deletion */
	EnabledforSoftDelete: number | null;
	/** Expiration time for the User access. */
	ExpiryDateTime_UtcDateAndTime: Date | null;
	/** IdentityProvider */
	IdentityProvider: string | null;
	/** Sequence number of the import that created this record. */
	ImportSequenceNumber: number | null;
	/** Status of the User record. */
	IsActive: number | null;
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
	/** Status of the SupportUserTable */
	statecode: number | null;
	/** Reason for the status of the SupportUserTable */
	statuscode: number | null;
	/** Unique identifier for entity instances */
	supportusertableId: DevKit.Guid | null;
	/** TenantId */
	TenantId: string | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** UPN */
	UPN: string | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
	/** Version Number */
	readonly VersionNumber: number | null;
}

const supportusertableFieldConfig: DevKit.IWebApiFieldConfigMap = {
	AADUserObjectId: { logicalName: 'aaduserobjectid' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	EnabledforSoftDelete: { logicalName: 'enabledforsoftdelete', type: 'Integer' },
	ExpiryDateTime_UtcDateAndTime: { logicalName: 'expirydatetime', type: 'DateTime' },
	IdentityProvider: { logicalName: 'identityprovider' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	IsActive: { logicalName: 'isactive', type: 'Integer' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OrganizationId: { schemaName: 'OrganizationId', logicalName: '_organizationid_value', readOnly: true, entityCollectionName: 'organizations', entityLogicalName: 'organization' },
	OverriddenCreatedOn_UtcDateOnly: { logicalName: 'overriddencreatedon', type: 'DateTime' },
	statecode: { logicalName: 'statecode', type: 'Integer' },
	statuscode: { logicalName: 'statuscode', type: 'Integer' },
	supportusertableId: { logicalName: 'supportusertableid' },
	TenantId: { logicalName: 'tenantid' },
	TimeZoneRuleVersionNumber: { logicalName: 'timezoneruleversionnumber', type: 'Integer' },
	UPN: { logicalName: 'upn' },
	UTCConversionTimeZoneCode: { logicalName: 'utcconversiontimezonecode', type: 'Integer' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * supportusertable WebApi class for early-bound style coding
 * Usage: const supportusertable = new supportusertableApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class supportusertableApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IsupportusertableApi>(entity, 'supportusertable', 'supportusertables', supportusertableFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface supportusertableApi extends IsupportusertableApi { }
