/**
 * Annotation.webapi.ts - Annotation WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Annotation WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IAnnotationApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<IAnnotationApi, 'FormattedValue'>]: string };
	/** Unique identifier of the note. */
	AnnotationId: DevKit.Guid | null;
	/** Unique identifier of the user who created the note. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the note was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the annotation. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Contents of the note's attachment. */
	DocumentBody: string | null;
	/** Dummy attribute associated with the note attachment */
	readonly DummyFileName: string | null;
	/** Dummy attribute associated with the note regarding */
	readonly DummyRegarding: string | null;
	/** File name of the note. */
	FileName: string | null;
	/** File pointer of the attachment. */
	readonly FilePointer: string | null;
	/** File size of the note. */
	readonly FileSize: number | null;
	/** Unique identifier of the data import or data migration that created this record. */
	ImportSequenceNumber: number | null;
	/** Specifies whether the note is an attachment. */
	IsDocument: boolean | null;
	readonly IsPrivate: boolean | null;
	/** Language identifier for the note. */
	LangId: string | null;
	/** MIME type of the note's attachment. */
	MimeType: string | null;
	/** Unique identifier of the user who last modified the note. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the note was last modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who last modified the annotation. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Text of the note. */
	NoteText: string | null;
	/** Unique identifier of the object with which the note is associated. */
	ObjectId: DevKit.Guid | null;
	/** Date and time that the record was migrated. */
	OverriddenCreatedOn_UtcDateOnly: Date | null;
	/** Unique identifier of the user or team who owns the note. */
	OwnerId: DevKit.Guid | null;
	/** Unique identifier of the business unit that owns the note. */
	readonly OwningBusinessUnit: DevKit.Guid | null;
	/** Unique identifier of the team who owns the note. */
	readonly OwningTeam: DevKit.Guid | null;
	/** Unique identifier of the user who owns the note. */
	readonly OwningUser: DevKit.Guid | null;
	/** Prefix of the file pointer in blob storage. */
	readonly Prefix: string | null;
	/** workflow step id associated with the note. */
	StepId: string | null;
	/** Storage pointer. */
	readonly StoragePointer: string | null;
	/** Subject associated with the note. */
	Subject: string | null;
	/** Version number of the note. */
	readonly VersionNumber: number | null;
}

const AnnotationFieldConfig: DevKit.IWebApiFieldConfigMap = {
	AnnotationId: { logicalName: 'annotationid' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	DocumentBody: { logicalName: 'documentbody' },
	DummyFileName: { logicalName: 'dummyfilename', readOnly: true },
	DummyRegarding: { logicalName: 'dummyregarding', readOnly: true },
	FileName: { logicalName: 'filename' },
	FilePointer: { logicalName: 'filepointer', readOnly: true },
	FileSize: { logicalName: 'filesize', readOnly: true, type: 'Integer' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	IsDocument: { logicalName: 'isdocument', type: 'Boolean' },
	IsPrivate: { logicalName: 'isprivate', readOnly: true, type: 'Boolean' },
	LangId: { logicalName: 'langid' },
	MimeType: { logicalName: 'mimetype' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	NoteText: { logicalName: 'notetext' },
	ObjectId: { schemaName: 'ObjectId', logicalName: '_objectid_value', entityCollectionName: 'accounts', entityLogicalName: 'account' },
	OverriddenCreatedOn_UtcDateOnly: { logicalName: 'overriddencreatedon', type: 'DateTime' },
	OwnerId: { schemaName: 'OwnerId', logicalName: '_ownerid_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OwningBusinessUnit: { schemaName: 'OwningBusinessUnit', logicalName: '_owningbusinessunit_value', readOnly: true, entityCollectionName: 'businessunits', entityLogicalName: 'businessunit' },
	OwningTeam: { schemaName: 'OwningTeam', logicalName: '_owningteam_value', readOnly: true, entityCollectionName: 'teams', entityLogicalName: 'team' },
	OwningUser: { schemaName: 'OwningUser', logicalName: '_owninguser_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Prefix: { logicalName: 'prefix', readOnly: true },
	StepId: { logicalName: 'stepid' },
	StoragePointer: { logicalName: 'storagepointer', readOnly: true },
	Subject: { logicalName: 'subject' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * Annotation WebApi class for early-bound style coding
 * Usage: const annotation = new AnnotationApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class AnnotationApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IAnnotationApi>(entity, 'annotation', 'annotations', AnnotationFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface AnnotationApi extends IAnnotationApi { }
