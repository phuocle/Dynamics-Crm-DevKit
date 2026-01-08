/**
 * msdyn_federatedarticleincident.webapi.ts - msdyn_federatedarticleincident WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * msdyn_federatedarticleincident WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface Imsdyn_federatedarticleincidentApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<Imsdyn_federatedarticleincidentApi, 'FormattedValue'>]: string };
	/** Unique identifier of the user who created the record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the record was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the record. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Sequence number of the import that created this record. */
	ImportSequenceNumber: number | null;
	/** Unique identifier of the user who modified the record. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the record was modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who modified the record. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** KMFederatedSearchArticleId */
	msdyn_federatedarticleid: DevKit.Guid | null;
	/** Unique identifier for entity instances */
	msdyn_federatedarticleincidentId: DevKit.Guid | null;
	/** IncidentId */
	msdyn_incidentid: DevKit.Guid | null;
	/** The name of the custom entity. */
	msdyn_name: string | null;
	/** Search Provider Article Id */
	msdyn_searchproviderarticleid: string | null;
	/** Unique identifier for the organization */
	readonly OrganizationId: DevKit.Guid | null;
	/** Date and time that the record was migrated. */
	OverriddenCreatedOn_UtcDateOnly: Date | null;
	/** Status of the KMFederatedSearchArticleIncident */
	statecode: number | null;
	/** Reason for the status of the KMFederatedSearchArticleIncident */
	statuscode: number | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
	/** Version Number */
	readonly VersionNumber: number | null;
}

const msdyn_federatedarticleincidentFieldConfig: DevKit.IWebApiFieldConfigMap = {
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	msdyn_federatedarticleid: { schemaName: 'msdyn_federatedarticleid', logicalName: '_msdyn_federatedarticleid_value', entityCollectionName: 'msdyn_federatedarticles', entityLogicalName: 'msdyn_federatedarticle' },
	msdyn_federatedarticleincidentId: { logicalName: 'msdyn_federatedarticleincidentid' },
	msdyn_incidentid: { logicalName: 'msdyn_incidentid' },
	msdyn_name: { logicalName: 'msdyn_name' },
	msdyn_searchproviderarticleid: { logicalName: 'msdyn_searchproviderarticleid' },
	OrganizationId: { schemaName: 'OrganizationId', logicalName: '_organizationid_value', readOnly: true, entityCollectionName: 'organizations', entityLogicalName: 'organization' },
	OverriddenCreatedOn_UtcDateOnly: { logicalName: 'overriddencreatedon', type: 'DateTime' },
	statecode: { logicalName: 'statecode', type: 'Integer' },
	statuscode: { logicalName: 'statuscode', type: 'Integer' },
	TimeZoneRuleVersionNumber: { logicalName: 'timezoneruleversionnumber', type: 'Integer' },
	UTCConversionTimeZoneCode: { logicalName: 'utcconversiontimezonecode', type: 'Integer' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * msdyn_federatedarticleincident WebApi class for early-bound style coding
 * Usage: const msdyn_federatedarticleincident = new msdyn_federatedarticleincidentApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class msdyn_federatedarticleincidentApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<Imsdyn_federatedarticleincidentApi>(entity, 'msdyn_federatedarticleincident', 'msdyn_federatedarticleincidents', msdyn_federatedarticleincidentFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface msdyn_federatedarticleincidentApi extends Imsdyn_federatedarticleincidentApi { }
