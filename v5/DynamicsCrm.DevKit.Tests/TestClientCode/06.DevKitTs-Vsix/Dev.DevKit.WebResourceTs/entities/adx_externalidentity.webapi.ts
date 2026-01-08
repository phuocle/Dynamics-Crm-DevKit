/**
 * adx_externalidentity.webapi.ts - adx_externalidentity WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for adx_externalidentity
 * All fields return string representation of their values
 */
export interface Iadx_externalidentityFormattedValue {
	readonly adx_contactid: string;
	readonly adx_externalidentityId: string;
	readonly adx_identityprovidername: string;
	readonly adx_username: string;
	readonly CreatedBy: string;
	readonly CreatedOn_UtcDateAndTime: string;
	readonly CreatedOnBehalfBy: string;
	readonly ImportSequenceNumber: string;
	readonly ModifiedBy: string;
	readonly ModifiedOn_UtcDateAndTime: string;
	readonly ModifiedOnBehalfBy: string;
	readonly OrganizationId: string;
	readonly OverriddenCreatedOn_UtcDateOnly: string;
	readonly statecode: string;
	readonly statuscode: string;
	readonly TimeZoneRuleVersionNumber: string;
	readonly UTCConversionTimeZoneCode: string;
	readonly VersionNumber: string;
}

/**
 * adx_externalidentity WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface Iadx_externalidentityApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: Iadx_externalidentityFormattedValue;
	/** Unique identifier for Contact associated with External Identity. */
	adx_contactid: DevKit.Guid | null;
	/** Shows the entity instances. */
	adx_externalidentityId: DevKit.Guid | null;
	/** Identity Provider */
	adx_identityprovidername: string | null;
	/** Shows the name of the custom entity. */
	adx_username: string | null;
	/** Shows the user who created the record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Shows the date and time when the record was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Shows the delegate user who created the record. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Shows the sequence number of the import that created this record. */
	ImportSequenceNumber: number | null;
	/** Shows the user who modified the record. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Shows the date and time when the record was modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Shows the delegate user who modified the record. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Shows the organization. */
	readonly OrganizationId: DevKit.Guid | null;
	/** Shows the date and time that the record was migrated. */
	OverriddenCreatedOn_UtcDateOnly: Date | null;
	/** Shows whether the external identity is active or inactive. Inactive records are read-only and can't be edited unless they are reactivated. */
	statecode: number | null;
	/** Select the external identity's status. */
	statuscode: number | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** Shows the time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
	/** Version Number */
	readonly VersionNumber: number | null;
}

const adx_externalidentityFieldConfig: DevKit.IWebApiFieldConfigMap = {
	adx_contactid: { schemaName: 'adx_contactid', logicalName: '_adx_contactid_value', entityCollectionName: 'contacts', entityLogicalName: 'contact' },
	adx_externalidentityId: { logicalName: 'adx_externalidentityid' },
	adx_identityprovidername: { logicalName: 'adx_identityprovidername' },
	adx_username: { logicalName: 'adx_username' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OrganizationId: { schemaName: 'OrganizationId', logicalName: '_organizationid_value', readOnly: true, entityCollectionName: 'organizations', entityLogicalName: 'organization' },
	OverriddenCreatedOn_UtcDateOnly: { logicalName: 'overriddencreatedon', type: 'DateTime' },
	statecode: { logicalName: 'statecode', type: 'Integer' },
	statuscode: { logicalName: 'statuscode', type: 'Integer' },
	TimeZoneRuleVersionNumber: { logicalName: 'timezoneruleversionnumber', type: 'Integer' },
	UTCConversionTimeZoneCode: { logicalName: 'utcconversiontimezonecode', type: 'Integer' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * adx_externalidentity WebApi class for early-bound style coding
 * Usage: const adx_externalidentity = new adx_externalidentityApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class adx_externalidentityApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<Iadx_externalidentityApi>(entity, 'adx_externalidentity', 'adx_externalidentities', adx_externalidentityFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface adx_externalidentityApi extends Iadx_externalidentityApi { }
