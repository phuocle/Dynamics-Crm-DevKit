/**
 * ElasticFileAttachment.webapi.ts - ElasticFileAttachment WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for ElasticFileAttachment
 * All fields return string representation of their values
 */
export interface IElasticFileAttachmentFormattedValue {
	readonly CreatedOn_UtcDateAndTime: string;
	readonly ElasticFileAttachmentId: string;
	readonly FileName: string;
	readonly FilePointer: string;
	readonly FileSizeInBytes: string;
	readonly ImportSequenceNumber: string;
	readonly MimeType: string;
	readonly ObjectId: string;
	readonly OverriddenCreatedOn_UtcDateOnly: string;
	readonly PartitionId: string;
	readonly Prefix: string;
	readonly RegardingFieldName: string;
	readonly StoragePointer: string;
	readonly TTLInSeconds: string;
	readonly VersionNumber: string;
}

/**
 * ElasticFileAttachment WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IElasticFileAttachmentApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: IElasticFileAttachmentFormattedValue;
	/** Date and time when the attachment was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the elastic file attachment. */
	ElasticFileAttachmentId: DevKit.Guid | null;
	/** File name of the attachment. */
	FileName: string | null;
	/** File pointer of the attachment. */
	readonly FilePointer: string | null;
	/** File size of the attachment in bytes. */
	readonly FileSizeInBytes: number | null;
	/** Sequence number of the import that created this record. */
	ImportSequenceNumber: number | null;
	/** MIME type of the attachment. */
	MimeType: string | null;
	/** Unique identifier of the object with which the attachment is associated. */
	ObjectId: DevKit.Guid | null;
	/** Date and time that the record was migrated. */
	OverriddenCreatedOn_UtcDateOnly: Date | null;
	/** Logical partition id. A logical partition consists of a set of records with same partition id. */
	PartitionId: string | null;
	/** Prefix of the file pointer in blob storage. */
	readonly Prefix: string | null;
	/** Regarding attribute schema name of the attachment. */
	RegardingFieldName: string | null;
	/** Storage pointer. */
	readonly StoragePointer: string | null;
	/** Time to live in seconds. */
	TTLInSeconds: number | null;
	/** Version number of the file attachment. */
	readonly VersionNumber: number | null;
}

const ElasticFileAttachmentFieldConfig: DevKit.IWebApiFieldConfigMap = {
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	ElasticFileAttachmentId: { logicalName: 'elasticfileattachmentid' },
	FileName: { logicalName: 'filename' },
	FilePointer: { logicalName: 'filepointer', readOnly: true },
	FileSizeInBytes: { logicalName: 'filesizeinbytes', readOnly: true, type: 'Integer' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	MimeType: { logicalName: 'mimetype' },
	ObjectId: { schemaName: 'ObjectId', logicalName: '_objectid_value', entityCollectionName: 'componentchangesetpayloads', entityLogicalName: 'componentchangesetpayload' },
	OverriddenCreatedOn_UtcDateOnly: { logicalName: 'overriddencreatedon', type: 'DateTime' },
	PartitionId: { logicalName: 'partitionid' },
	Prefix: { logicalName: 'prefix', readOnly: true },
	RegardingFieldName: { logicalName: 'regardingfieldname' },
	StoragePointer: { logicalName: 'storagepointer', readOnly: true },
	TTLInSeconds: { logicalName: 'ttlinseconds', type: 'Integer' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * ElasticFileAttachment WebApi class for early-bound style coding
 * Usage: const elasticFileAttachment = new ElasticFileAttachmentApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class ElasticFileAttachmentApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IElasticFileAttachmentApi>(entity, 'elasticfileattachment', 'elasticfileattachments', ElasticFileAttachmentFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface ElasticFileAttachmentApi extends IElasticFileAttachmentApi { }
