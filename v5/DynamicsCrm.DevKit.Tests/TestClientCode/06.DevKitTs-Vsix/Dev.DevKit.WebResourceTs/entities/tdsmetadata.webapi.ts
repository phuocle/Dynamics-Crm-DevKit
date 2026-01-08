/**
 * tdsmetadata.webapi.ts - tdsmetadata WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for tdsmetadata
 * All fields return string representation of their values
 */
export interface ItdsmetadataFormattedValue {
	readonly CreatedBy: string;
	readonly CreatedOn_UtcDateAndTime: string;
	readonly CreatedOnBehalfBy: string;
	readonly entityupatetimestamp: string;
	readonly ImportSequenceNumber: string;
	readonly inittimestamp: string;
	readonly lastsynctimestamp: string;
	readonly ModifiedBy: string;
	readonly ModifiedOn_UtcDateAndTime: string;
	readonly ModifiedOnBehalfBy: string;
	readonly OverriddenCreatedOn_UtcDateOnly: string;
	readonly OwnerId: string;
	readonly OwningBusinessUnit: string;
	readonly OwningTeam: string;
	readonly OwningUser: string;
	readonly statecode: string;
	readonly statuscode: string;
	readonly tdsmetadataId: string;
	readonly tdsmetadataname: string;
	readonly tdsorginitializedtimestamp: string;
	readonly TimeZoneRuleVersionNumber: string;
	readonly UTCConversionTimeZoneCode: string;
	readonly VersionNumber: string;
	readonly viewgeneratedtimestamp: string;
}

/**
 * tdsmetadata WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface ItdsmetadataApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: ItdsmetadataFormattedValue;
	/** Unique identifier of the user who created the record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the record was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the record. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** EntityUpateTimeStamp */
	entityupatetimestamp: string | null;
	/** Sequence number of the import that created this record. */
	ImportSequenceNumber: number | null;
	/** InitTimeStamp */
	inittimestamp: string | null;
	/** LastSyncTimeStamp */
	lastsynctimestamp: string | null;
	/** Unique identifier of the user who modified the record. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the record was modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who modified the record. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
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
	/** Status of the TdsMetadata */
	statecode: number | null;
	/** Reason for the status of the TdsMetadata */
	statuscode: number | null;
	/** Unique identifier for entity instances */
	tdsmetadataId: DevKit.Guid | null;
	/** The name of the custom entity. */
	tdsmetadataname: string | null;
	/** TdsOrgInitializedTimeStamp */
	tdsorginitializedtimestamp: string | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
	/** Version Number */
	readonly VersionNumber: number | null;
	/** ViewGeneratedTimeStamp */
	viewgeneratedtimestamp: string | null;
}

const tdsmetadataFieldConfig: DevKit.IWebApiFieldConfigMap = {
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	entityupatetimestamp: { logicalName: 'entityupatetimestamp' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	inittimestamp: { logicalName: 'inittimestamp' },
	lastsynctimestamp: { logicalName: 'lastsynctimestamp' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OverriddenCreatedOn_UtcDateOnly: { logicalName: 'overriddencreatedon', type: 'DateTime' },
	OwnerId: { schemaName: 'OwnerId', logicalName: '_ownerid_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OwningBusinessUnit: { schemaName: 'OwningBusinessUnit', logicalName: '_owningbusinessunit_value', readOnly: true, entityCollectionName: 'businessunits', entityLogicalName: 'businessunit' },
	OwningTeam: { schemaName: 'OwningTeam', logicalName: '_owningteam_value', readOnly: true, entityCollectionName: 'teams', entityLogicalName: 'team' },
	OwningUser: { schemaName: 'OwningUser', logicalName: '_owninguser_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	statecode: { logicalName: 'statecode', type: 'Integer' },
	statuscode: { logicalName: 'statuscode', type: 'Integer' },
	tdsmetadataId: { logicalName: 'tdsmetadataid' },
	tdsmetadataname: { logicalName: 'tdsmetadataname' },
	tdsorginitializedtimestamp: { logicalName: 'tdsorginitializedtimestamp' },
	TimeZoneRuleVersionNumber: { logicalName: 'timezoneruleversionnumber', type: 'Integer' },
	UTCConversionTimeZoneCode: { logicalName: 'utcconversiontimezonecode', type: 'Integer' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
	viewgeneratedtimestamp: { logicalName: 'viewgeneratedtimestamp' },
};

/**
 * tdsmetadata WebApi class for early-bound style coding
 * Usage: const tdsmetadata = new tdsmetadataApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class tdsmetadataApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<ItdsmetadataApi>(entity, 'tdsmetadata', 'tdsmetadatas', tdsmetadataFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface tdsmetadataApi extends ItdsmetadataApi { }
