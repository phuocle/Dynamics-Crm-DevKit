/**
 * OfficeDocument.webapi.ts - OfficeDocument WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for OfficeDocument
 * All fields return string representation of their values
 */
export interface IOfficeDocumentFormattedValue {
	readonly ClientData: string;
	readonly Content: string;
	readonly CreatedBy: string;
	readonly CreatedOn_UtcDateAndTime: string;
	readonly CreatedOnBehalfBy: string;
	readonly DocumentType: string;
	readonly FileLockState: string;
	readonly FileSize: string;
	readonly ModifiedBy: string;
	readonly ModifiedOn_UtcDateAndTime: string;
	readonly ModifiedOnBehalfBy: string;
	readonly Name: string;
	readonly ObjectId: string;
	readonly OfficeDocumentId: string;
	readonly OwnerId: string;
	readonly SHA256: string;
	readonly VersionNumber: string;
}

/**
 * OfficeDocument WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IOfficeDocumentApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: IOfficeDocumentFormattedValue;
	/** Client data regarding this office document. */
	ClientData: string | null;
	/** Bytes of the office document. */
	Content: string | null;
	/** Unique identifier of the user who created the office document. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the office document was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the office document. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Option set for selecting the type of the office document */
	DocumentType: number | null;
	/** Lock state of file. */
	FileLockState: number | null;
	/** File Size. */
	FileSize: number | null;
	/** Unique identifier of the user who last modified the office document. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the office document was last modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who modified the office document. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Name of the office document. */
	Name: string | null;
	/** Object Id. */
	ObjectId: DevKit.Guid | null;
	/** Unique identifier of the office document. */
	OfficeDocumentId: DevKit.Guid | null;
	/** Unique identifier of the user or team who owns the office document. */
	OwnerId: DevKit.Guid | null;
	/** Stores the SHA256 Hash key value. */
	SHA256: string | null;
	readonly VersionNumber: number | null;
}

const OfficeDocumentFieldConfig: DevKit.IWebApiFieldConfigMap = {
	ClientData: { logicalName: 'clientdata' },
	Content: { logicalName: 'content' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	DocumentType: { logicalName: 'documenttype', type: 'Integer' },
	FileLockState: { logicalName: 'filelockstate', type: 'Integer' },
	FileSize: { logicalName: 'filesize', type: 'Integer' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Name: { logicalName: 'name' },
	ObjectId: { logicalName: 'objectid' },
	OfficeDocumentId: { logicalName: 'officedocumentid' },
	OwnerId: { schemaName: 'OwnerId', logicalName: '_ownerid_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	SHA256: { logicalName: 'sha256' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * OfficeDocument WebApi class for early-bound style coding
 * Usage: const officeDocument = new OfficeDocumentApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class OfficeDocumentApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IOfficeDocumentApi>(entity, 'officedocument', 'officedocuments', OfficeDocumentFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface OfficeDocumentApi extends IOfficeDocumentApi { }
