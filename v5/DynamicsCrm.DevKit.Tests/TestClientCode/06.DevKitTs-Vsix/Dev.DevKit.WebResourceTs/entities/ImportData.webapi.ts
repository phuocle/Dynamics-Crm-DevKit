/**
 * ImportData.webapi.ts - ImportData WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for ImportData
 * All fields return string representation of their values
 */
export interface IImportDataFormattedValue {
	readonly CreatedBy: string;
	readonly CreatedOn_UtcDateAndTime: string;
	readonly CreatedOnBehalfBy: string;
	readonly Data: string;
	readonly ErrorType: string;
	readonly HasError: string;
	readonly ImportDataId: string;
	readonly ImportFileId: string;
	readonly LineNumber: string;
	readonly ModifiedBy: string;
	readonly ModifiedOn_UtcDateAndTime: string;
	readonly ModifiedOnBehalfBy: string;
	readonly OwnerId: string;
	readonly OwningBusinessUnit: string;
	readonly OwningTeam: string;
	readonly OwningUser: string;
	readonly RecordId: string;
	readonly StateCode: string;
	readonly StatusCode: string;
}

/**
 * ImportData WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IImportDataApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: IImportDataFormattedValue;
	/** Unique identifier of the user who created the import data. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the import data was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the importdata. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Data row of the import file. */
	Data: string | null;
	/** Type of the import error. */
	ErrorType: number | null;
	/** Information about whether this import data has an error. */
	HasError: boolean | null;
	/** Unique identifier of the import data. */
	ImportDataId: DevKit.Guid | null;
	/** Unique identifier of the import file for this import data. */
	ImportFileId: DevKit.Guid | null;
	/** Original line number of the data present in the file. */
	LineNumber: number | null;
	/** Unique identifier of the user who last modified the import data. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the import data was last modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who last modified the importdata. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Unique identifier of the user or team who owns the import data. */
	OwnerId: DevKit.Guid | null;
	/** Business unit that owns the import data. */
	readonly OwningBusinessUnit: DevKit.Guid | null;
	/** Unique identifier of the team who owns the import data. */
	readonly OwningTeam: DevKit.Guid | null;
	/** Unique identifier of the user who owns the import data. */
	readonly OwningUser: DevKit.Guid | null;
	/** Unique identifier of the record. */
	RecordId: DevKit.Guid | null;
	/** Status of the import data. */
	readonly StateCode: number | null;
	/** Reason for the status of the import data. */
	StatusCode: number | null;
}

const ImportDataFieldConfig: DevKit.IWebApiFieldConfigMap = {
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Data: { logicalName: 'data' },
	ErrorType: { logicalName: 'errortype', type: 'Integer' },
	HasError: { logicalName: 'haserror', type: 'Boolean' },
	ImportDataId: { logicalName: 'importdataid' },
	ImportFileId: { schemaName: 'ImportFileId', logicalName: '_importfileid_value', entityCollectionName: 'importfiles', entityLogicalName: 'importfile' },
	LineNumber: { logicalName: 'linenumber', type: 'Integer' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OwnerId: { schemaName: 'OwnerId', logicalName: '_ownerid_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OwningBusinessUnit: { schemaName: 'OwningBusinessUnit', logicalName: '_owningbusinessunit_value', readOnly: true, entityCollectionName: 'businessunits', entityLogicalName: 'businessunit' },
	OwningTeam: { schemaName: 'OwningTeam', logicalName: '_owningteam_value', readOnly: true, entityCollectionName: 'teams', entityLogicalName: 'team' },
	OwningUser: { schemaName: 'OwningUser', logicalName: '_owninguser_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	RecordId: { logicalName: 'recordid' },
	StateCode: { logicalName: 'statecode', readOnly: true, type: 'Integer' },
	StatusCode: { logicalName: 'statuscode', type: 'Integer' },
};

/**
 * ImportData WebApi class for early-bound style coding
 * Usage: const importData = new ImportDataApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class ImportDataApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IImportDataApi>(entity, 'importdata', 'importdatas', ImportDataFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface ImportDataApi extends IImportDataApi { }
