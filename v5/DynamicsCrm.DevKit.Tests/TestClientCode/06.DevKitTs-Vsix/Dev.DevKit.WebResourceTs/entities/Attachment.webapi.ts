/**
 * Attachment.webapi.ts - Attachment WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for Attachment
 * All fields return string representation of their values
 */
export interface IAttachmentFormattedValue {
	readonly AttachmentId: string;
	readonly Body: string;
	readonly FileName: string;
	readonly FilePointer: string;
	readonly FileSize: string;
	readonly MimeType: string;
	readonly Prefix: string;
	readonly StoragePointer: string;
	readonly Subject: string;
	readonly VersionNumber: string;
}

/**
 * Attachment WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IAttachmentApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: IAttachmentFormattedValue;
	/** Unique identifier of the attachment. */
	AttachmentId: DevKit.Guid | null;
	/** Contents of the attachment. */
	Body: string | null;
	/** File name of the attachment. */
	FileName: string | null;
	/** File pointer of the attachment. */
	readonly FilePointer: string | null;
	/** File size of the attachment. */
	readonly FileSize: number | null;
	/** MIME type of the attachment. */
	MimeType: string | null;
	/** Prefix of the file pointer in blob storage. */
	readonly Prefix: string | null;
	/** Storage pointer. */
	readonly StoragePointer: string | null;
	/** Subject associated with the attachment. */
	Subject: string | null;
	/** Version number of the attachment. */
	readonly VersionNumber: number | null;
}

const AttachmentFieldConfig: DevKit.IWebApiFieldConfigMap = {
	AttachmentId: { logicalName: 'attachmentid' },
	Body: { logicalName: 'body' },
	FileName: { logicalName: 'filename' },
	FilePointer: { logicalName: 'filepointer', readOnly: true },
	FileSize: { logicalName: 'filesize', readOnly: true, type: 'Integer' },
	MimeType: { logicalName: 'mimetype' },
	Prefix: { logicalName: 'prefix', readOnly: true },
	StoragePointer: { logicalName: 'storagepointer', readOnly: true },
	Subject: { logicalName: 'subject' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * Attachment WebApi class for early-bound style coding
 * Usage: const attachment = new AttachmentApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class AttachmentApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IAttachmentApi>(entity, 'attachment', 'attachments', AttachmentFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface AttachmentApi extends IAttachmentApi { }
