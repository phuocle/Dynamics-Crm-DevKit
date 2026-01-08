/**
 * FileAttachment.webapi.ts - FileAttachment WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * FileAttachment WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IFileAttachmentApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<IFileAttachmentApi, 'FormattedValue'>]: string };
	/** Body */
	readonly Body: string | null;
	/** Date and time when the attachment was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the file attachment. */
	FileAttachmentId: DevKit.Guid | null;
	/** File name of the attachment. */
	FileName: string | null;
	/** File pointer of the attachment. */
	readonly FilePointer: string | null;
	/** File size of the attachment in bytes. */
	readonly FileSizeInBytes: number | null;
	/** IsCommitted */
	readonly IsCommitted: boolean | null;
	/** MIME type of the attachment. */
	MimeType: string | null;
	/** Unique identifier of the object with which the attachment is associated. */
	ObjectId: DevKit.Guid | null;
	/** Prefix of the file pointer in blob storage. */
	readonly Prefix: string | null;
	/** Regarding attribute schema name of the attachment. */
	RegardingFieldName: string | null;
	/** Storage pointer. */
	readonly StoragePointer: string | null;
	/** Version number of the file attachment. */
	readonly VersionNumber: number | null;
}

const FileAttachmentFieldConfig: DevKit.IWebApiFieldConfigMap = {
	Body: { logicalName: 'body', readOnly: true },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	FileAttachmentId: { logicalName: 'fileattachmentid' },
	FileName: { logicalName: 'filename' },
	FilePointer: { logicalName: 'filepointer', readOnly: true },
	FileSizeInBytes: { logicalName: 'filesizeinbytes', readOnly: true, type: 'Integer' },
	IsCommitted: { logicalName: 'iscommitted', readOnly: true, type: 'Boolean' },
	MimeType: { logicalName: 'mimetype' },
	ObjectId: { schemaName: 'ObjectId', logicalName: '_objectid_value', entityCollectionName: 'activityfileattachments', entityLogicalName: 'activityfileattachment' },
	Prefix: { logicalName: 'prefix', readOnly: true },
	RegardingFieldName: { logicalName: 'regardingfieldname' },
	StoragePointer: { logicalName: 'storagepointer', readOnly: true },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * FileAttachment WebApi class for early-bound style coding
 * Usage: const fileAttachment = new FileAttachmentApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class FileAttachmentApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IFileAttachmentApi>(entity, 'fileattachment', 'fileattachments', FileAttachmentFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface FileAttachmentApi extends IFileAttachmentApi { }
