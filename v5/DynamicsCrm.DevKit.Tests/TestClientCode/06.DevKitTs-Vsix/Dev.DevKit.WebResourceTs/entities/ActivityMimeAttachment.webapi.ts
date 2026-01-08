/**
 * ActivityMimeAttachment.webapi.ts - ActivityMimeAttachment WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * ActivityMimeAttachment WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IActivityMimeAttachmentApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<IActivityMimeAttachmentApi, 'FormattedValue'>]: string };
	/** Unique identifier of the activity with which the attachment is associated. */
	ActivityId: DevKit.Guid | null;
	/** Unique identifier of the attachment. */
	ActivityMimeAttachmentId: DevKit.Guid | null;
	/** For internal use only. */
	ActivityMimeAttachmentIdUnique: DevKit.Guid | null;
	/** Descriptive subject for the activity. */
	readonly ActivitySubject: string | null;
	/** anonymous link */
	readonly AnonymousLink: string | null;
	/** For internal use only */
	AttachmentContentId: string | null;
	/** Unique identifier of the attachment with which this activitymimeattachment is associated. */
	AttachmentId: DevKit.Guid | null;
	/** Number of the attachment. */
	AttachmentNumber: number | null;
	/** Contents of the attachment. */
	Body: string | null;
	/** For internal use only. */
	readonly ComponentState: number | null;
	/** File name of the attachment. */
	FileName: string | null;
	/** File size of the attachment. */
	readonly FileSize: number | null;
	/** Indicates if this attachment is followed. */
	readonly IsFollowed: boolean | null;
	/** Indicates whether the solution component is part of a managed solution. */
	readonly IsManaged: boolean | null;
	/** MIME type of the attachment. */
	MimeType: string | null;
	/** Unique identifier of the record with which the attachment is associated */
	ObjectId: DevKit.Guid | null;
	/** For internal use only. */
	readonly OverwriteTime_UtcDateOnly: Date | null;
	/** Unique identifier of the user or team who owns the activity_mime_attachment. */
	readonly OwnerId: DevKit.Guid | null;
	/** Unique identifier of the business unit that owns the activity mime attachment. */
	readonly OwningBusinessUnit: DevKit.Guid | null;
	/** Unique identifier of the user who owns the activity mime attachment. */
	readonly OwningUser: DevKit.Guid | null;
	/** Unique identifier of the associated solution. */
	readonly SolutionId: DevKit.Guid | null;
	/** Descriptive subject for the attachment. */
	Subject: string | null;
	/** For internal use only. */
	readonly SupportingSolutionId: DevKit.Guid | null;
	/** Version number of the activity mime attachment. */
	readonly VersionNumber: number | null;
}

const ActivityMimeAttachmentFieldConfig: DevKit.IWebApiFieldConfigMap = {
	ActivityId: { schemaName: 'ActivityId', logicalName: '_activityid_value', entityCollectionName: 'activitypointers', entityLogicalName: 'activitypointer' },
	ActivityMimeAttachmentId: { logicalName: 'activitymimeattachmentid' },
	ActivityMimeAttachmentIdUnique: { logicalName: 'activitymimeattachmentidunique' },
	ActivitySubject: { logicalName: 'activitysubject', readOnly: true },
	AnonymousLink: { logicalName: 'anonymouslink', readOnly: true },
	AttachmentContentId: { logicalName: 'attachmentcontentid' },
	AttachmentId: { schemaName: 'AttachmentId', logicalName: '_attachmentid_value', entityCollectionName: 'attachments', entityLogicalName: 'attachment' },
	AttachmentNumber: { logicalName: 'attachmentnumber', type: 'Integer' },
	Body: { logicalName: 'body' },
	ComponentState: { logicalName: 'componentstate', readOnly: true, type: 'Integer' },
	FileName: { logicalName: 'filename' },
	FileSize: { logicalName: 'filesize', readOnly: true, type: 'Integer' },
	IsFollowed: { logicalName: 'isfollowed', readOnly: true, type: 'Boolean' },
	IsManaged: { logicalName: 'ismanaged', readOnly: true, type: 'Boolean' },
	MimeType: { logicalName: 'mimetype' },
	ObjectId: { schemaName: 'ObjectId', logicalName: '_objectid_value', entityCollectionName: 'activitypointers', entityLogicalName: 'activitypointer' },
	OverwriteTime_UtcDateOnly: { logicalName: 'overwritetime', readOnly: true, type: 'DateTime' },
	OwnerId: { schemaName: 'OwnerId', logicalName: '_ownerid_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OwningBusinessUnit: { schemaName: 'OwningBusinessUnit', logicalName: '_owningbusinessunit_value', readOnly: true, entityCollectionName: 'businessunits', entityLogicalName: 'businessunit' },
	OwningUser: { schemaName: 'OwningUser', logicalName: '_owninguser_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	SolutionId: { logicalName: 'solutionid', readOnly: true },
	Subject: { logicalName: 'subject' },
	SupportingSolutionId: { logicalName: 'supportingsolutionid', readOnly: true },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * ActivityMimeAttachment WebApi class for early-bound style coding
 * Usage: const activityMimeAttachment = new ActivityMimeAttachmentApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class ActivityMimeAttachmentApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IActivityMimeAttachmentApi>(entity, 'activitymimeattachment', 'activitymimeattachments', ActivityMimeAttachmentFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface ActivityMimeAttachmentApi extends IActivityMimeAttachmentApi { }
