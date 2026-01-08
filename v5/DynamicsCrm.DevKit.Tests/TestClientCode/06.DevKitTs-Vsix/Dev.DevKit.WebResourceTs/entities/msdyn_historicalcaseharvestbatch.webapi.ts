/**
 * msdyn_historicalcaseharvestbatch.webapi.ts - msdyn_historicalcaseharvestbatch WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for msdyn_historicalcaseharvestbatch
 * All fields return string representation of their values
 */
export interface Imsdyn_historicalcaseharvestbatchFormattedValue {
	readonly CreatedBy: string;
	readonly CreatedOn_UtcDateAndTime: string;
	readonly CreatedOnBehalfBy: string;
	readonly ImportSequenceNumber: string;
	readonly ModifiedBy: string;
	readonly ModifiedOn_UtcDateAndTime: string;
	readonly ModifiedOnBehalfBy: string;
	readonly ModuleRunId: string;
	readonly msdyn_articlescreated: string;
	readonly msdyn_batchprocessingcompletedon_UtcDateAndTime: string;
	readonly msdyn_batchsize: string;
	readonly msdyn_casesskipped: string;
	readonly msdyn_historicalcaseharvestbatchId: string;
	readonly msdyn_historicalcaseharvestrunid: string;
	readonly msdyn_incidentids: string;
	readonly msdyn_name: string;
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
 * msdyn_historicalcaseharvestbatch WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface Imsdyn_historicalcaseharvestbatchApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: Imsdyn_historicalcaseharvestbatchFormattedValue;
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
	/** Unique identifier for data processing module run */
	ModuleRunId: DevKit.Guid | null;
	/** Articles Created */
	msdyn_articlescreated: number | null;
	/** Timestamp when the batch was completed. */
	msdyn_batchprocessingcompletedon_UtcDateAndTime: Date | null;
	/** Batch Size */
	msdyn_batchsize: number | null;
	/** Cases Skipped */
	msdyn_casesskipped: number | null;
	/** Unique identifier for entity instances */
	msdyn_historicalcaseharvestbatchId: DevKit.Guid | null;
	/** Unique Identifier of the run record the batch is linked to */
	msdyn_historicalcaseharvestrunid: DevKit.Guid | null;
	/** Incident IDs */
	msdyn_incidentids: string | null;
	/** name */
	msdyn_name: string | null;
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
	/** Status of the msdyn_historicalcaseharvestbatch */
	statecode: number | null;
	/** Reason for the status of the msdyn_historicalcaseharvestbatch */
	statuscode: number | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
	/** Version Number */
	readonly VersionNumber: number | null;
}

const msdyn_historicalcaseharvestbatchFieldConfig: DevKit.IWebApiFieldConfigMap = {
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModuleRunId: { logicalName: 'modulerunid' },
	msdyn_articlescreated: { logicalName: 'msdyn_articlescreated', type: 'Integer' },
	msdyn_batchprocessingcompletedon_UtcDateAndTime: { logicalName: 'msdyn_batchprocessingcompletedon', type: 'DateTime' },
	msdyn_batchsize: { logicalName: 'msdyn_batchsize', type: 'Integer' },
	msdyn_casesskipped: { logicalName: 'msdyn_casesskipped', type: 'Integer' },
	msdyn_historicalcaseharvestbatchId: { logicalName: 'msdyn_historicalcaseharvestbatchid' },
	msdyn_historicalcaseharvestrunid: { schemaName: 'msdyn_historicalcaseharvestrunid', logicalName: '_msdyn_historicalcaseharvestrunid_value', entityCollectionName: 'msdyn_historicalcaseharvestruns', entityLogicalName: 'msdyn_historicalcaseharvestrun' },
	msdyn_incidentids: { logicalName: 'msdyn_incidentids' },
	msdyn_name: { logicalName: 'msdyn_name' },
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
 * msdyn_historicalcaseharvestbatch WebApi class for early-bound style coding
 * Usage: const msdyn_historicalcaseharvestbatch = new msdyn_historicalcaseharvestbatchApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class msdyn_historicalcaseharvestbatchApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<Imsdyn_historicalcaseharvestbatchApi>(entity, 'msdyn_historicalcaseharvestbatch', 'msdyn_historicalcaseharvestbatchs', msdyn_historicalcaseharvestbatchFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface msdyn_historicalcaseharvestbatchApi extends Imsdyn_historicalcaseharvestbatchApi { }
