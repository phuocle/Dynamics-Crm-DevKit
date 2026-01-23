/**
 * msdyn_dmssyncrequest.webapi.ts - msdyn_dmssyncrequest WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * msdyn_dmssyncrequest WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface Imsdyn_dmssyncrequestApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<Imsdyn_dmssyncrequestApi, 'FormattedValue'>]: string };
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
	/** Additional properties json property bag. */
	msdyn_AdditionalProperties: string | null;
	/** Correlation Id */
	msdyn_CorrelationId: string | null;
	/** Unique identifier for entity instances */
	msdyn_dmssyncrequestId: DevKit.Guid | null;
	/** Entity mapping. */
	msdyn_EntityMapping: string | null;
	/** Request Type */
	msdyn_RequestType: string | null;
	/** The primary attribute for the DMS Sync Request entity. */
	msdyn_RequestUniqueName: string | null;
	/** Sync parameters. */
	msdyn_SyncParameters: string | null;
	/** Sync Scenario */
	msdyn_SyncScenario: string | null;
	/** User Object Id */
	msdyn_UserObjectId: string | null;
	/** User Tenant Id */
	msdyn_UserTenantId: string | null;
	/** Date and time that the record was migrated. */
	OverriddenCreatedOn_UtcDateOnly: Date | null;
	/** Owner Id */
	OwnerId: DevKit.Guid | null;
	/** Unique identifier for the business unit that owns the record */
	readonly OwningBusinessUnit: DevKit.Guid | null;
	/** Unique identifier for the team that owns the record. */
	readonly OwningTeam: DevKit.Guid | null;
	/** Unique identifier for the user that owns the record. */
	readonly OwningUser: DevKit.Guid | null;
	/** Status of the DMS Sync Request */
	statecode: number | null;
	/** Reason for the status of the DMS Sync Request */
	statuscode: number | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
	/** Version Number */
	readonly VersionNumber: number | null;
}

const msdyn_dmssyncrequestFieldConfig: DevKit.IWebApiFieldConfigMap = {
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	msdyn_AdditionalProperties: { logicalName: 'msdyn_additionalproperties' },
	msdyn_CorrelationId: { logicalName: 'msdyn_correlationid' },
	msdyn_dmssyncrequestId: { logicalName: 'msdyn_dmssyncrequestid' },
	msdyn_EntityMapping: { logicalName: 'msdyn_entitymapping' },
	msdyn_RequestType: { logicalName: 'msdyn_requesttype' },
	msdyn_RequestUniqueName: { logicalName: 'msdyn_requestuniquename' },
	msdyn_SyncParameters: { logicalName: 'msdyn_syncparameters' },
	msdyn_SyncScenario: { logicalName: 'msdyn_syncscenario' },
	msdyn_UserObjectId: { logicalName: 'msdyn_userobjectid' },
	msdyn_UserTenantId: { logicalName: 'msdyn_usertenantid' },
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
 * msdyn_dmssyncrequest WebApi class for early-bound style coding
 * Usage: const msdyn_dmssyncrequest = new msdyn_dmssyncrequestApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class msdyn_dmssyncrequestApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<Imsdyn_dmssyncrequestApi>(entity, 'msdyn_dmssyncrequest', 'msdyn_dmssyncrequests', msdyn_dmssyncrequestFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface msdyn_dmssyncrequestApi extends Imsdyn_dmssyncrequestApi { }
