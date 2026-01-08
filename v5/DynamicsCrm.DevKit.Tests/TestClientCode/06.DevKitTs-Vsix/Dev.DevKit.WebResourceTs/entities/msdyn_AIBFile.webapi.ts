/**
 * msdyn_AIBFile.webapi.ts - msdyn_AIBFile WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * msdyn_AIBFile WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface Imsdyn_AIBFileApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<Imsdyn_AIBFileApi, 'FormattedValue'>]: string };
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
	/** AI Builder Datasets Container */
	msdyn_AIBDatasetsContainerId: DevKit.Guid | null;
	/** Unique identifier for entity instances */
	msdyn_AIBFileId: DevKit.Guid | null;
	/** Checksum */
	msdyn_Checksum: string | null;
	/** File */
	readonly msdyn_File_name: string | null;
	/** Image */
	msdyn_Image: string | null;
	readonly msdyn_ImageId: DevKit.Guid | null;
	/** ImportMetadata */
	msdyn_ImportMetadata: string | null;
	/** MimeType */
	msdyn_MimeType: string | null;
	/** Required name field */
	msdyn_Name: string | null;
	/** Size */
	msdyn_Size: number | null;
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
	/** Status of the AI Builder File */
	statecode: number | null;
	/** Reason for the status of the AI Builder File */
	statuscode: number | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
	/** Version Number */
	readonly VersionNumber: number | null;
}

const msdyn_AIBFileFieldConfig: DevKit.IWebApiFieldConfigMap = {
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	msdyn_AIBDatasetsContainerId: { schemaName: 'msdyn_AIBDatasetsContainerId', logicalName: '_msdyn_aibdatasetscontainerid_value', entityCollectionName: 'msdyn_aibdatasetscontainers', entityLogicalName: 'msdyn_aibdatasetscontainer' },
	msdyn_AIBFileId: { logicalName: 'msdyn_aibfileid' },
	msdyn_Checksum: { logicalName: 'msdyn_checksum' },
	msdyn_File_name: { logicalName: 'msdyn_file', readOnly: true },
	msdyn_Image: { logicalName: 'msdyn_image' },
	msdyn_ImageId: { logicalName: 'msdyn_imageid', readOnly: true },
	msdyn_ImportMetadata: { logicalName: 'msdyn_importmetadata' },
	msdyn_MimeType: { logicalName: 'msdyn_mimetype' },
	msdyn_Name: { logicalName: 'msdyn_name' },
	msdyn_Size: { logicalName: 'msdyn_size', type: 'Integer' },
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
 * msdyn_AIBFile WebApi class for early-bound style coding
 * Usage: const msdyn_AIBFile = new msdyn_AIBFileApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class msdyn_AIBFileApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<Imsdyn_AIBFileApi>(entity, 'msdyn_aibfile', 'msdyn_aibfiles', msdyn_AIBFileFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface msdyn_AIBFileApi extends Imsdyn_AIBFileApi { }
