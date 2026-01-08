/**
 * ImportFile.webapi.ts - ImportFile WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for ImportFile
 * All fields return string representation of their values
 */
export interface IImportFileFormattedValue {
	readonly AdditionalHeaderRow: string;
	readonly CompletedOn_UtcDateOnly: string;
	readonly Content: string;
	readonly CreatedBy: string;
	readonly CreatedOn_UtcDateAndTime: string;
	readonly CreatedOnBehalfBy: string;
	readonly DataDelimiterCode: string;
	readonly EnableDuplicateDetection: string;
	readonly EntityKeyId: string;
	readonly FailureCount: string;
	readonly FieldDelimiterCode: string;
	readonly FileTypeCode: string;
	readonly HeaderRow: string;
	readonly ImportFileId: string;
	readonly ImportId: string;
	readonly ImportMapId: string;
	readonly IsFirstRowHeader: string;
	readonly ModifiedBy: string;
	readonly ModifiedOn_UtcDateAndTime: string;
	readonly ModifiedOnBehalfBy: string;
	readonly Name: string;
	readonly OwnerId: string;
	readonly OwningBusinessUnit: string;
	readonly OwningTeam: string;
	readonly OwningUser: string;
	readonly ParsedTableColumnPrefix: string;
	readonly ParsedTableColumnsNumber: string;
	readonly ParsedTableName: string;
	readonly PartialFailureCount: string;
	readonly ProcessCode: string;
	readonly ProcessingStatus: string;
	readonly ProgressCounter: string;
	readonly RecordsOwnerId: string;
	readonly RelatedEntityColumns: string;
	readonly Size: string;
	readonly Source: string;
	readonly SourceEntityName: string;
	readonly StateCode: string;
	readonly StatusCode: string;
	readonly SuccessCount: string;
	readonly TargetEntityName: string;
	readonly TimeZoneRuleVersionNumber: string;
	readonly TotalCount: string;
	readonly UpsertModeCode: string;
	readonly UseSystemMap: string;
	readonly UTCConversionTimeZoneCode: string;
}

/**
 * ImportFile WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IImportFileApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: IImportFileFormattedValue;
	/** Shows the secondary column headers. The additional headers are used during the process of transforming the import file into import data records. */
	readonly AdditionalHeaderRow: string | null;
	/** Shows the date and time when the import associated with the import file was completed. */
	readonly CompletedOn_UtcDateOnly: Date | null;
	/** Stores the content of the import file, stored as comma-separated values. */
	Content: string | null;
	/** Shows who created the record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Shows who created the record on behalf of another user. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Select the single-character data delimiter used in the import file. This is typically a single or double quotation mark. */
	DataDelimiterCode: number | null;
	/** Select whether duplicate-detection rules should be run against the import job. */
	EnableDuplicateDetection: boolean | null;
	/** Unique identifier of the Alternate key Id */
	EntityKeyId: DevKit.Guid | null;
	/** Shows the number of records in the import file that cannot be imported. */
	readonly FailureCount: number | null;
	/** Select the character that is used to separate each field in the import file. Typically, it is a comma. */
	FieldDelimiterCode: number | null;
	/** Shows the type of source file that is uploaded for import. */
	FileTypeCode: number | null;
	/** Shows a list of each column header in the import file separated by a comma. The header is used for parsing the file during the import job. */
	readonly HeaderRow: string | null;
	/** Unique identifier of the import file. */
	ImportFileId: DevKit.Guid | null;
	/** Choose the import job that the file was uploaded for. */
	ImportId: DevKit.Guid | null;
	/** Choose a data map to match the import file and its column headers with the record types and fields in Microsoft Dynamics 365. If the column headers in the file match the display names of the target fields in Microsoft Dynamics 365, we import the data automatically. If not, you can manually define matches during import. */
	ImportMapId: DevKit.Guid | null;
	/** Select whether the first row of the import file contains column headings, which are used for data mapping during the import job. */
	IsFirstRowHeader: boolean | null;
	/** Shows who last updated the record. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Shows who created the record on behalf of another user. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Shows the name of the import file. This name is based on the name of the uploaded file. */
	Name: string | null;
	/** Enter the user who is assigned to follow up with or manage the import file. This field is updated every time the import file is assigned to a different user. */
	OwnerId: DevKit.Guid | null;
	/** Shows the business unit that the record owner belongs to. */
	readonly OwningBusinessUnit: DevKit.Guid | null;
	/** Unique identifier of the team who owns the import file. */
	readonly OwningTeam: DevKit.Guid | null;
	/** Unique identifier of the user who owns the import file. */
	readonly OwningUser: DevKit.Guid | null;
	/** Shows the prefix applied to each column after the import file is parsed. */
	readonly ParsedTableColumnPrefix: string | null;
	/** Shows the number of columns included in the parsed import file. */
	readonly ParsedTableColumnsNumber: number | null;
	/** Shows the name of the table that contains the parsed data from the import file. */
	readonly ParsedTableName: string | null;
	/** Shows the number of records in this file that had failures during the import. */
	readonly PartialFailureCount: number | null;
	/** Tells whether the import file should be ignored or processed during the import. */
	ProcessCode: number | null;
	/** Shows the import file's processing status code. This indicates whether the data in the import file has been parsed, transformed, or imported. */
	readonly ProcessingStatus: number | null;
	/** Shows the progress code for the processing of the import file. This field is used when a paused import job is resumed. */
	readonly ProgressCounter: number | null;
	/** Choose the user that the records created during the import job should be assigned to. */
	RecordsOwnerId: DevKit.Guid | null;
	/** Shows the columns that are mapped to a related record type (entity) of the primary record type (entity) included in the import file. */
	RelatedEntityColumns: string | null;
	/** Shows the size of the import file, in kilobytes. */
	Size: string | null;
	/** Shows the name of the data source file uploaded in the import job. */
	Source: string | null;
	/** Shows the record type (entity) of the source data. */
	SourceEntityName: string | null;
	/** Shows the status of the import file record. By default, all records are active and can't be deactivated. */
	StateCode: number | null;
	/** Shows the reason code that explains the import file's status to identify the stage of the import process, from parsing the data to completed. */
	StatusCode: number | null;
	/** Shows the number of records in the import file that are imported successfully. */
	readonly SuccessCount: number | null;
	/** Select the target record type (entity) for the records that will be created during the import job. */
	TargetEntityName: string | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** Shows the total number of records in the import file. */
	readonly TotalCount: number | null;
	/** Select the value which is used for identify the upsert mode. By Default, it is a Create. */
	UpsertModeCode: number | null;
	/** Tells whether an automatic system map was applied to the import file, which automatically maps the import data to the target entity in Microsoft Dynamics 365. */
	UseSystemMap: boolean | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
}

const ImportFileFieldConfig: DevKit.IWebApiFieldConfigMap = {
	AdditionalHeaderRow: { logicalName: 'additionalheaderrow', readOnly: true },
	CompletedOn_UtcDateOnly: { logicalName: 'completedon', readOnly: true, type: 'DateTime' },
	Content: { logicalName: 'content' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	DataDelimiterCode: { logicalName: 'datadelimitercode', type: 'Integer' },
	EnableDuplicateDetection: { logicalName: 'enableduplicatedetection', type: 'Boolean' },
	EntityKeyId: { logicalName: 'entitykeyid' },
	FailureCount: { logicalName: 'failurecount', readOnly: true, type: 'Integer' },
	FieldDelimiterCode: { logicalName: 'fielddelimitercode', type: 'Integer' },
	FileTypeCode: { logicalName: 'filetypecode', type: 'Integer' },
	HeaderRow: { logicalName: 'headerrow', readOnly: true },
	ImportFileId: { logicalName: 'importfileid' },
	ImportId: { schemaName: 'ImportId', logicalName: '_importid_value', entityCollectionName: 'imports', entityLogicalName: 'import' },
	ImportMapId: { schemaName: 'ImportMapId', logicalName: '_importmapid_value', entityCollectionName: 'importmaps', entityLogicalName: 'importmap' },
	IsFirstRowHeader: { logicalName: 'isfirstrowheader', type: 'Boolean' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Name: { logicalName: 'name' },
	OwnerId: { schemaName: 'OwnerId', logicalName: '_ownerid_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OwningBusinessUnit: { schemaName: 'OwningBusinessUnit', logicalName: '_owningbusinessunit_value', readOnly: true, entityCollectionName: 'businessunits', entityLogicalName: 'businessunit' },
	OwningTeam: { schemaName: 'OwningTeam', logicalName: '_owningteam_value', readOnly: true, entityCollectionName: 'teams', entityLogicalName: 'team' },
	OwningUser: { schemaName: 'OwningUser', logicalName: '_owninguser_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ParsedTableColumnPrefix: { logicalName: 'parsedtablecolumnprefix', readOnly: true },
	ParsedTableColumnsNumber: { logicalName: 'parsedtablecolumnsnumber', readOnly: true, type: 'Integer' },
	ParsedTableName: { logicalName: 'parsedtablename', readOnly: true },
	PartialFailureCount: { logicalName: 'partialfailurecount', readOnly: true, type: 'Integer' },
	ProcessCode: { logicalName: 'processcode', type: 'Integer' },
	ProcessingStatus: { logicalName: 'processingstatus', readOnly: true, type: 'Integer' },
	ProgressCounter: { logicalName: 'progresscounter', readOnly: true, type: 'Integer' },
	RecordsOwnerId: { schemaName: 'RecordsOwnerId', logicalName: '_recordsownerid_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	RelatedEntityColumns: { logicalName: 'relatedentitycolumns' },
	Size: { logicalName: 'size' },
	Source: { logicalName: 'source' },
	SourceEntityName: { logicalName: 'sourceentityname' },
	StateCode: { logicalName: 'statecode', type: 'Integer' },
	StatusCode: { logicalName: 'statuscode', type: 'Integer' },
	SuccessCount: { logicalName: 'successcount', readOnly: true, type: 'Integer' },
	TargetEntityName: { logicalName: 'targetentityname' },
	TimeZoneRuleVersionNumber: { logicalName: 'timezoneruleversionnumber', type: 'Integer' },
	TotalCount: { logicalName: 'totalcount', readOnly: true, type: 'Integer' },
	UpsertModeCode: { logicalName: 'upsertmodecode', type: 'Integer' },
	UseSystemMap: { logicalName: 'usesystemmap', type: 'Boolean' },
	UTCConversionTimeZoneCode: { logicalName: 'utcconversiontimezonecode', type: 'Integer' },
};

/**
 * ImportFile WebApi class for early-bound style coding
 * Usage: const importFile = new ImportFileApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class ImportFileApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IImportFileApi>(entity, 'importfile', 'importfiles', ImportFileFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface ImportFileApi extends IImportFileApi { }
