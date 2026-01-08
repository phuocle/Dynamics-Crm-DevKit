/**
 * mspcat_CatalogSubmissionFiles.webapi.ts - mspcat_CatalogSubmissionFiles WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * mspcat_CatalogSubmissionFiles WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface Imspcat_CatalogSubmissionFilesApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<Imspcat_CatalogSubmissionFilesApi, 'FormattedValue'>]: string };
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
	/** Unique identifier for entity instances */
	mspcat_CatalogSubmissionFilesId: DevKit.Guid | null;
	/** File Item description */
	mspcat_Description: string | null;
	/** File asset */
	readonly mspcat_File_name: string | null;
	/** Type of File Described */
	mspcat_FileType: number | null;
	/** Size of Image Described */
	mspcat_ImageSize: number | null;
	/** Name */
	mspcat_Name: string | null;
	/** Related Package Store Item. */
	mspcat_PackageStore: DevKit.Guid | null;
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
	/** Status of the Catalog Submission Files */
	statecode: number | null;
	/** Reason for the status of the Catalog Submission Files */
	statuscode: number | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
	/** Version Number */
	readonly VersionNumber: number | null;
}

const mspcat_CatalogSubmissionFilesFieldConfig: DevKit.IWebApiFieldConfigMap = {
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	mspcat_CatalogSubmissionFilesId: { logicalName: 'mspcat_catalogsubmissionfilesid' },
	mspcat_Description: { logicalName: 'mspcat_description' },
	mspcat_File_name: { logicalName: 'mspcat_file', readOnly: true },
	mspcat_FileType: { logicalName: 'mspcat_filetype', type: 'Integer' },
	mspcat_ImageSize: { logicalName: 'mspcat_imagesize', type: 'Integer' },
	mspcat_Name: { logicalName: 'mspcat_name' },
	mspcat_PackageStore: { schemaName: 'mspcat_PackageStore', logicalName: '_mspcat_packagestore_value', entityCollectionName: 'mspcat_packagestores', entityLogicalName: 'mspcat_packagestore' },
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
 * mspcat_CatalogSubmissionFiles WebApi class for early-bound style coding
 * Usage: const mspcat_CatalogSubmissionFiles = new mspcat_CatalogSubmissionFilesApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class mspcat_CatalogSubmissionFilesApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<Imspcat_CatalogSubmissionFilesApi>(entity, 'mspcat_catalogsubmissionfiles', 'mspcat_catalogsubmissionfileses', mspcat_CatalogSubmissionFilesFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface mspcat_CatalogSubmissionFilesApi extends Imspcat_CatalogSubmissionFilesApi { }
