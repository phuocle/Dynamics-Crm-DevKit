/**
 * synapselinkprofileentitystate.webapi.ts - synapselinkprofileentitystate WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for synapselinkprofileentitystate
 * All fields return string representation of their values
 */
export interface IsynapselinkprofileentitystateFormattedValue {
	readonly AdditionTime_UtcDateAndTime: string;
	readonly CreatedBy: string;
	readonly CreatedOn_UtcDateAndTime: string;
	readonly CreatedOnBehalfBy: string;
	readonly CrmRecordCount: string;
	readonly CrmRecordCountModifiedTime_UtcDateAndTime: string;
	readonly EntityName2: string;
	readonly EntitySource: string;
	readonly EntityType: string;
	readonly ImportSequenceNumber: string;
	readonly InitialSyncDataCompletedTime_UtcDateAndTime: string;
	readonly InitialSyncMetadataCreatedTime_UtcDateAndTime: string;
	readonly InitialSyncProcessCompletedTime_UtcDateAndTime: string;
	readonly InitialSyncState: string;
	readonly LakeRecordCount: string;
	readonly LakeRecordCountModifiedTime_UtcDateAndTime: string;
	readonly LastSyncedDataTime_UtcDateAndTime: string;
	readonly LastSyncedDataVersion: string;
	readonly LastSyncedMetadataTime_UtcDateAndTime: string;
	readonly LastSyncedMetadataVersion: string;
	readonly MetadataState: string;
	readonly MinSyncedDataVersion: string;
	readonly ModifiedBy: string;
	readonly ModifiedOn_UtcDateAndTime: string;
	readonly ModifiedOnBehalfBy: string;
	readonly name: string;
	readonly OrganizationId: string;
	readonly OverriddenCreatedOn_UtcDateOnly: string;
	readonly profile: string;
	readonly profileentity: string;
	readonly SourceRecordCount: string;
	readonly statecode: string;
	readonly statuscode: string;
	readonly synapselinkprofileentitystateId: string;
	readonly SynapseTableCreationState: string;
	readonly SyncState: string;
	readonly TimeZoneRuleVersionNumber: string;
	readonly UTCConversionTimeZoneCode: string;
	readonly VersionNumber: string;
}

/**
 * synapselinkprofileentitystate WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IsynapselinkprofileentitystateApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: IsynapselinkprofileentitystateFormattedValue;
	/** Addition time of entity */
	AdditionTime_UtcDateAndTime: Date | null;
	/** Unique identifier of the user who created the record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the record was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the record. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** CRM record count */
	CrmRecordCount: number | null;
	/** CRM record count modified time for entity */
	CrmRecordCountModifiedTime_UtcDateAndTime: Date | null;
	/** Name of the entity */
	EntityName2: string | null;
	/** Source of the entity */
	EntitySource: number | null;
	/** Type of the entity */
	EntityType: number | null;
	/** Sequence number of the import that created this record. */
	ImportSequenceNumber: number | null;
	/** Initial sync data completed time */
	InitialSyncDataCompletedTime_UtcDateAndTime: Date | null;
	/** Initial sync metadata created time */
	InitialSyncMetadataCreatedTime_UtcDateAndTime: Date | null;
	/** Initial sync process completed time */
	InitialSyncProcessCompletedTime_UtcDateAndTime: Date | null;
	/** Initial sync state */
	InitialSyncState: number | null;
	/** Lake record count */
	LakeRecordCount: number | null;
	/** Lake record count modified time for entity */
	LakeRecordCountModifiedTime_UtcDateAndTime: Date | null;
	/** Last synced data time */
	LastSyncedDataTime_UtcDateAndTime: Date | null;
	/** Last synced data version */
	LastSyncedDataVersion: string | null;
	/** Last synced metadata time */
	LastSyncedMetadataTime_UtcDateAndTime: Date | null;
	/** Last synced metadata version */
	LastSyncedMetadataVersion: string | null;
	/** Metadata state */
	MetadataState: number | null;
	/** Last Synced Minimum Data Version */
	MinSyncedDataVersion: number | null;
	/** Unique identifier of the user who modified the record. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the record was modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who modified the record. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** The name of the custom entity. */
	name: string | null;
	/** Unique identifier for the organization */
	readonly OrganizationId: DevKit.Guid | null;
	/** Date and time that the record was migrated. */
	OverriddenCreatedOn_UtcDateOnly: Date | null;
	/** Unique identifier for Synapse Link Profile associated with Synapse Link Profile Entity State. */
	profile: DevKit.Guid | null;
	/** Unique identifier for Synapse Link Profile Entity associated with Synapse Link Profile Entity State. */
	profileentity: DevKit.Guid | null;
	/** Source Record count */
	SourceRecordCount: number | null;
	/** Status of the Synapse Link Profile Entity State */
	statecode: number | null;
	/** Reason for the status of the Synapse Link Profile Entity State */
	statuscode: number | null;
	/** Unique identifier for entity instances */
	synapselinkprofileentitystateId: DevKit.Guid | null;
	/** Synapse table creation state */
	SynapseTableCreationState: number | null;
	/** Entity sync state */
	SyncState: number | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
	/** Version Number */
	readonly VersionNumber: number | null;
}

const synapselinkprofileentitystateFieldConfig: DevKit.IWebApiFieldConfigMap = {
	AdditionTime_UtcDateAndTime: { logicalName: 'additiontime', type: 'DateTime' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CrmRecordCount: { logicalName: 'crmrecordcount', type: 'Integer' },
	CrmRecordCountModifiedTime_UtcDateAndTime: { logicalName: 'crmrecordcountmodifiedtime', type: 'DateTime' },
	EntityName2: { logicalName: 'entityname' },
	EntitySource: { logicalName: 'entitysource', type: 'Integer' },
	EntityType: { logicalName: 'entitytype', type: 'Integer' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	InitialSyncDataCompletedTime_UtcDateAndTime: { logicalName: 'initialsyncdatacompletedtime', type: 'DateTime' },
	InitialSyncMetadataCreatedTime_UtcDateAndTime: { logicalName: 'initialsyncmetadatacreatedtime', type: 'DateTime' },
	InitialSyncProcessCompletedTime_UtcDateAndTime: { logicalName: 'initialsyncprocesscompletedtime', type: 'DateTime' },
	InitialSyncState: { logicalName: 'initialsyncstate', type: 'Integer' },
	LakeRecordCount: { logicalName: 'lakerecordcount', type: 'Integer' },
	LakeRecordCountModifiedTime_UtcDateAndTime: { logicalName: 'lakerecordcountmodifiedtime', type: 'DateTime' },
	LastSyncedDataTime_UtcDateAndTime: { logicalName: 'lastsynceddatatime', type: 'DateTime' },
	LastSyncedDataVersion: { logicalName: 'lastsynceddataversion' },
	LastSyncedMetadataTime_UtcDateAndTime: { logicalName: 'lastsyncedmetadatatime', type: 'DateTime' },
	LastSyncedMetadataVersion: { logicalName: 'lastsyncedmetadataversion' },
	MetadataState: { logicalName: 'metadatastate', type: 'Integer' },
	MinSyncedDataVersion: { logicalName: 'minsynceddataversion', type: 'Integer' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	name: { logicalName: 'name' },
	OrganizationId: { schemaName: 'OrganizationId', logicalName: '_organizationid_value', readOnly: true, entityCollectionName: 'organizations', entityLogicalName: 'organization' },
	OverriddenCreatedOn_UtcDateOnly: { logicalName: 'overriddencreatedon', type: 'DateTime' },
	profile: { schemaName: 'profile', logicalName: '_profile_value', entityCollectionName: 'synapselinkprofiles', entityLogicalName: 'synapselinkprofile' },
	profileentity: { schemaName: 'profileentity', logicalName: '_profileentity_value', entityCollectionName: 'synapselinkprofileentities', entityLogicalName: 'synapselinkprofileentity' },
	SourceRecordCount: { logicalName: 'sourcerecordcount', type: 'Integer' },
	statecode: { logicalName: 'statecode', type: 'Integer' },
	statuscode: { logicalName: 'statuscode', type: 'Integer' },
	synapselinkprofileentitystateId: { logicalName: 'synapselinkprofileentitystateid' },
	SynapseTableCreationState: { logicalName: 'synapsetablecreationstate', type: 'Integer' },
	SyncState: { logicalName: 'syncstate', type: 'Integer' },
	TimeZoneRuleVersionNumber: { logicalName: 'timezoneruleversionnumber', type: 'Integer' },
	UTCConversionTimeZoneCode: { logicalName: 'utcconversiontimezonecode', type: 'Integer' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * synapselinkprofileentitystate WebApi class for early-bound style coding
 * Usage: const synapselinkprofileentitystate = new synapselinkprofileentitystateApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class synapselinkprofileentitystateApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IsynapselinkprofileentitystateApi>(entity, 'synapselinkprofileentitystate', 'synapselinkprofileentitystates', synapselinkprofileentitystateFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface synapselinkprofileentitystateApi extends IsynapselinkprofileentitystateApi { }
