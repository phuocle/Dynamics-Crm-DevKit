/**
 * msdyn_historicalcaseharvestrun.webapi.ts - msdyn_historicalcaseharvestrun WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * msdyn_historicalcaseharvestrun WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface Imsdyn_historicalcaseharvestrunApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<Imsdyn_historicalcaseharvestrunApi, 'FormattedValue'>]: string };
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
	/** Additional details */
	msdyn_additionaldetails: string | null;
	/** Timestamp when all cases were identified for the run. */
	msdyn_caseidentificationcompletedon_UtcDateAndTime: Date | null;
	/** Conditions */
	msdyn_conditions: string | null;
	/** Field Mapping */
	msdyn_fieldmapping: string | null;
	/** Indicates what type of entity this harvest run is happening for */
	msdyn_harvestingdatatype: number | null;
	/** Knowledge Harvest Source Entity */
	msdyn_harvestsourceentity: string | null;
	/** Unique identifier for entity instances */
	msdyn_historicalcaseharvestrunId: DevKit.Guid | null;
	/** Page Index */
	msdyn_pageIndex: number | null;
	/** Pagination Marker */
	msdyn_paginationmarker: string | null;
	/** Total Articles Created */
	msdyn_totalarticlescreated: number | null;
	/** Total Cases Discovered */
	msdyn_totalcasesdiscovered: number | null;
	/** Total Cases Processed */
	msdyn_totalcasesprocessed: number | null;
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
	/** Date and time when the batch run process was started. */
	ProcessStartedOn_UtcDateAndTime: Date | null;
	/** Status of the historical case harvest runs */
	statecode: number | null;
	/** Reason for the status of the historical case harvest run */
	statuscode: number | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
	/** Version Number */
	readonly VersionNumber: number | null;
}

const msdyn_historicalcaseharvestrunFieldConfig: DevKit.IWebApiFieldConfigMap = {
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	msdyn_additionaldetails: { logicalName: 'msdyn_additionaldetails' },
	msdyn_caseidentificationcompletedon_UtcDateAndTime: { logicalName: 'msdyn_caseidentificationcompletedon', type: 'DateTime' },
	msdyn_conditions: { logicalName: 'msdyn_conditions' },
	msdyn_fieldmapping: { logicalName: 'msdyn_fieldmapping' },
	msdyn_harvestingdatatype: { logicalName: 'msdyn_harvestingdatatype', type: 'Integer' },
	msdyn_harvestsourceentity: { logicalName: 'msdyn_harvestsourceentity' },
	msdyn_historicalcaseharvestrunId: { logicalName: 'msdyn_historicalcaseharvestrunid' },
	msdyn_pageIndex: { logicalName: 'msdyn_pageIndex', type: 'Integer' },
	msdyn_paginationmarker: { logicalName: 'msdyn_paginationmarker' },
	msdyn_totalarticlescreated: { logicalName: 'msdyn_totalarticlescreated', type: 'Integer' },
	msdyn_totalcasesdiscovered: { logicalName: 'msdyn_totalcasesdiscovered', type: 'Integer' },
	msdyn_totalcasesprocessed: { logicalName: 'msdyn_totalcasesprocessed', type: 'Integer' },
	OverriddenCreatedOn_UtcDateOnly: { logicalName: 'overriddencreatedon', type: 'DateTime' },
	OwnerId: { schemaName: 'OwnerId', logicalName: '_ownerid_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OwningBusinessUnit: { schemaName: 'OwningBusinessUnit', logicalName: '_owningbusinessunit_value', readOnly: true, entityCollectionName: 'businessunits', entityLogicalName: 'businessunit' },
	OwningTeam: { schemaName: 'OwningTeam', logicalName: '_owningteam_value', readOnly: true, entityCollectionName: 'teams', entityLogicalName: 'team' },
	OwningUser: { schemaName: 'OwningUser', logicalName: '_owninguser_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ProcessStartedOn_UtcDateAndTime: { logicalName: 'processstartedon', type: 'DateTime' },
	statecode: { logicalName: 'statecode', type: 'Integer' },
	statuscode: { logicalName: 'statuscode', type: 'Integer' },
	TimeZoneRuleVersionNumber: { logicalName: 'timezoneruleversionnumber', type: 'Integer' },
	UTCConversionTimeZoneCode: { logicalName: 'utcconversiontimezonecode', type: 'Integer' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * msdyn_historicalcaseharvestrun WebApi class for early-bound style coding
 * Usage: const msdyn_historicalcaseharvestrun = new msdyn_historicalcaseharvestrunApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class msdyn_historicalcaseharvestrunApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<Imsdyn_historicalcaseharvestrunApi>(entity, 'msdyn_historicalcaseharvestrun', 'msdyn_historicalcaseharvestruns', msdyn_historicalcaseharvestrunFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface msdyn_historicalcaseharvestrunApi extends Imsdyn_historicalcaseharvestrunApi { }
