/**
 * msdyn_integratedsearchprovider.webapi.ts - msdyn_integratedsearchprovider WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for msdyn_integratedsearchprovider
 * All fields return string representation of their values
 */
export interface Imsdyn_integratedsearchproviderFormattedValue {
	readonly CreatedBy: string;
	readonly CreatedOn_UtcDateAndTime: string;
	readonly CreatedOnBehalfBy: string;
	readonly ImportSequenceNumber: string;
	readonly ModifiedBy: string;
	readonly ModifiedOn_UtcDateAndTime: string;
	readonly ModifiedOnBehalfBy: string;
	readonly msdyn_allowedlanguages: string;
	readonly msdyn_articlepropertiesmapping: string;
	readonly msdyn_authenticationtype: string;
	readonly msdyn_clientid: string;
	readonly msdyn_clientsecret: string;
	readonly msdyn_datasourcetype: string;
	readonly msdyn_description: string;
	readonly msdyn_htmlmetatags: string;
	readonly msdyn_htmlsample_name: string;
	readonly msdyn_includedsitemapurls: string;
	readonly msdyn_integratedsearchproviderId: string;
	readonly msdyn_isfieldmappingoptionselected: string;
	readonly msdyn_lastfetchtime_UtcDateAndTime: string;
	readonly msdyn_lookbackperiod: string;
	readonly msdyn_name: string;
	readonly msdyn_refreshschedule: string;
	readonly msdyn_resourceid: string;
	readonly msdyn_rooturl: string;
	readonly msdyn_tenantid: string;
	readonly OverriddenCreatedOn_UtcDateOnly: string;
	readonly OwnerId: string;
	readonly OwningBusinessUnit: string;
	readonly OwningTeam: string;
	readonly OwningUser: string;
	readonly statecode: string;
	readonly statuscode: string;
	readonly TimeZoneRuleVersionNumber: string;
	readonly UTCConversionTimeZoneCode: string;
	readonly VersionNumber: string;
}

/**
 * msdyn_integratedsearchprovider WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface Imsdyn_integratedsearchproviderApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: Imsdyn_integratedsearchproviderFormattedValue;
	/** Unique identifier of the user who created the record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time of the external search provider creation */
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
	/** Languages allowed for ingestion */
	msdyn_allowedlanguages: string | null;
	/** Map external search provider fields and knowledge article table columns in Dataverse */
	msdyn_articlepropertiesmapping: string | null;
	/** Authentication type for the search provider */
	msdyn_authenticationtype: number | null;
	/** Client ID for the OAuth */
	msdyn_clientid: string | null;
	/** Secret of the external search provider */
	msdyn_clientsecret: string | null;
	/** Type of the external search provider */
	msdyn_datasourcetype: number | null;
	/** Description of the external search provider */
	msdyn_description: string | null;
	/** Information about the meta tags extracted from sample dataprovider html */
	msdyn_htmlmetatags: string | null;
	/** The reference to the sample html file uploaded for the integrated search provider */
	readonly msdyn_htmlsample_name: string | null;
	/** List of URLs that are allowed */
	msdyn_includedsitemapurls: string | null;
	/** Unique identifier for entity instances */
	msdyn_integratedsearchproviderId: DevKit.Guid | null;
	/** Value is true when field mapping option is selected */
	msdyn_isfieldmappingoptionselected: boolean | null;
	/** Date and time at which the recent ingestion was started */
	msdyn_lastfetchtime_UtcDateAndTime: Date | null;
	/** Time interval for ingesting any articles that might have been missed during the sync and ingestion overlap */
	msdyn_lookbackperiod: number | null;
	/** Name of the external search provider */
	msdyn_name: string | null;
	/** Time interval for ingesting newly created and updated articles from the external search provider */
	msdyn_refreshschedule: number | null;
	/** Resource ID for OAuth */
	msdyn_resourceid: string | null;
	/** Root URL of the website */
	msdyn_rooturl: string | null;
	/** Tenant ID for OAuth */
	msdyn_tenantid: string | null;
	/** Date and time that the record was migrated. */
	OverriddenCreatedOn_UtcDateOnly: Date | null;
	/** Owner of the external search provider record */
	OwnerId: DevKit.Guid | null;
	/** Unique identifier for the business unit that owns the record */
	readonly OwningBusinessUnit: DevKit.Guid | null;
	/** Unique identifier for the team that owns the record. */
	readonly OwningTeam: DevKit.Guid | null;
	/** Unique identifier for the user that owns the record. */
	readonly OwningUser: DevKit.Guid | null;
	/** State of the external search provider */
	statecode: number | null;
	/** Reason for the status of the Integrated search provider */
	statuscode: number | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
	/** Version Number */
	readonly VersionNumber: number | null;
}

const msdyn_integratedsearchproviderFieldConfig: DevKit.IWebApiFieldConfigMap = {
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	msdyn_allowedlanguages: { logicalName: 'msdyn_allowedlanguages' },
	msdyn_articlepropertiesmapping: { logicalName: 'msdyn_articlepropertiesmapping' },
	msdyn_authenticationtype: { logicalName: 'msdyn_authenticationtype', type: 'Integer' },
	msdyn_clientid: { logicalName: 'msdyn_clientid' },
	msdyn_clientsecret: { logicalName: 'msdyn_clientsecret' },
	msdyn_datasourcetype: { logicalName: 'msdyn_datasourcetype', type: 'Integer' },
	msdyn_description: { logicalName: 'msdyn_description' },
	msdyn_htmlmetatags: { logicalName: 'msdyn_htmlmetatags' },
	msdyn_htmlsample_name: { logicalName: 'msdyn_htmlsample', readOnly: true },
	msdyn_includedsitemapurls: { logicalName: 'msdyn_includedsitemapurls' },
	msdyn_integratedsearchproviderId: { logicalName: 'msdyn_integratedsearchproviderid' },
	msdyn_isfieldmappingoptionselected: { logicalName: 'msdyn_isfieldmappingoptionselected', type: 'Boolean' },
	msdyn_lastfetchtime_UtcDateAndTime: { logicalName: 'msdyn_lastfetchtime', type: 'DateTime' },
	msdyn_lookbackperiod: { logicalName: 'msdyn_lookbackperiod', type: 'Integer' },
	msdyn_name: { logicalName: 'msdyn_name' },
	msdyn_refreshschedule: { logicalName: 'msdyn_refreshschedule', type: 'Integer' },
	msdyn_resourceid: { logicalName: 'msdyn_resourceid' },
	msdyn_rooturl: { logicalName: 'msdyn_rooturl' },
	msdyn_tenantid: { logicalName: 'msdyn_tenantid' },
	OverriddenCreatedOn_UtcDateOnly: { logicalName: 'overriddencreatedon', type: 'DateTime' },
	OwnerId: { schemaName: 'OwnerId', logicalName: '_ownerid_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OwningBusinessUnit: { schemaName: 'OwningBusinessUnit', logicalName: '_owningbusinessunit_value', readOnly: true, entityCollectionName: 'businessunits', entityLogicalName: 'businessunit' },
	OwningTeam: { schemaName: 'OwningTeam', logicalName: '_owningteam_value', readOnly: true, entityCollectionName: 'teams', entityLogicalName: 'team' },
	OwningUser: { schemaName: 'OwningUser', logicalName: '_owninguser_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	statecode: { logicalName: 'statecode', type: 'Integer' },
	statuscode: { logicalName: 'statuscode', type: 'Integer' },
	TimeZoneRuleVersionNumber: { logicalName: 'timezoneruleversionnumber', type: 'Integer' },
	UTCConversionTimeZoneCode: { logicalName: 'utcconversiontimezonecode', type: 'Integer' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * msdyn_integratedsearchprovider WebApi class for early-bound style coding
 * Usage: const msdyn_integratedsearchprovider = new msdyn_integratedsearchproviderApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class msdyn_integratedsearchproviderApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<Imsdyn_integratedsearchproviderApi>(entity, 'msdyn_integratedsearchprovider', 'msdyn_integratedsearchproviders', msdyn_integratedsearchproviderFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface msdyn_integratedsearchproviderApi extends Imsdyn_integratedsearchproviderApi { }
