/**
 * ImportLog.webapi.ts - ImportLog WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * ImportLog WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IImportLogApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<IImportLogApi, 'FormattedValue'>]: string };
	/** Additional information related to the error. */
	AdditionalInfo: string | null;
	/** Value in the column. */
	ColumnValue: string | null;
	/** Unique identifier of the user who created the import log. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the import log was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the importlog. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Description of an error. */
	ErrorDescription: string | null;
	/** Error code of an error. */
	ErrorNumber: number | null;
	/** Name of the column heading. */
	HeaderColumn: string | null;
	/** Unique identifier of the import data for this import log. */
	ImportDataId: DevKit.Guid | null;
	/** Unique identifier of the import file for this import log. */
	ImportFileId: DevKit.Guid | null;
	/** Unique identifier of the import log. */
	ImportLogId: DevKit.Guid | null;
	/** Original line number of the data used in this log. */
	LineNumber: number | null;
	/** Phase for which the log is recorded. */
	LogPhaseCode: number | null;
	/** Unique identifier of the user who last modified the import log. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the import log was last modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who last modified the importlog. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Unique identifier of the user or team who owns the import log. */
	OwnerId: DevKit.Guid | null;
	/** Business unit that owns the import log. */
	readonly OwningBusinessUnit: DevKit.Guid | null;
	/** Unique identifier of the team who owns the import log. */
	readonly OwningTeam: DevKit.Guid | null;
	/** Unique identifier of the user who owns the import log. */
	readonly OwningUser: DevKit.Guid | null;
	/** Sequence number of the error in this log. */
	readonly SequenceNumber: number | null;
	/** Status of the import log. */
	readonly StateCode: number | null;
	/** Reason for the status of the import log. */
	StatusCode: number | null;
}

const ImportLogFieldConfig: DevKit.IWebApiFieldConfigMap = {
	AdditionalInfo: { logicalName: 'additionalinfo' },
	ColumnValue: { logicalName: 'columnvalue' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ErrorDescription: { logicalName: 'errordescription' },
	ErrorNumber: { logicalName: 'errornumber', type: 'Integer' },
	HeaderColumn: { logicalName: 'headercolumn' },
	ImportDataId: { schemaName: 'ImportDataId', logicalName: '_importdataid_value', entityCollectionName: 'importdatas', entityLogicalName: 'importdata' },
	ImportFileId: { schemaName: 'ImportFileId', logicalName: '_importfileid_value', entityCollectionName: 'importfiles', entityLogicalName: 'importfile' },
	ImportLogId: { logicalName: 'importlogid' },
	LineNumber: { logicalName: 'linenumber', type: 'Integer' },
	LogPhaseCode: { logicalName: 'logphasecode', type: 'Integer' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OwnerId: { schemaName: 'OwnerId', logicalName: '_ownerid_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OwningBusinessUnit: { schemaName: 'OwningBusinessUnit', logicalName: '_owningbusinessunit_value', readOnly: true, entityCollectionName: 'businessunits', entityLogicalName: 'businessunit' },
	OwningTeam: { schemaName: 'OwningTeam', logicalName: '_owningteam_value', readOnly: true, entityCollectionName: 'teams', entityLogicalName: 'team' },
	OwningUser: { schemaName: 'OwningUser', logicalName: '_owninguser_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	SequenceNumber: { logicalName: 'sequencenumber', readOnly: true, type: 'Integer' },
	StateCode: { logicalName: 'statecode', readOnly: true, type: 'Integer' },
	StatusCode: { logicalName: 'statuscode', type: 'Integer' },
};

/**
 * ImportLog WebApi class for early-bound style coding
 * Usage: const importLog = new ImportLogApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class ImportLogApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IImportLogApi>(entity, 'importlog', 'importlogs', ImportLogFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface ImportLogApi extends IImportLogApi { }
