/**
 * Subject.webapi.ts - Subject WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for Subject
 * All fields return string representation of their values
 */
export interface ISubjectFormattedValue {
	readonly CreatedBy: string;
	readonly CreatedByExternalParty: string;
	readonly CreatedOn_UtcDateAndTime: string;
	readonly CreatedOnBehalfBy: string;
	readonly Description: string;
	readonly FeatureMask: string;
	readonly ImportSequenceNumber: string;
	readonly ModifiedBy: string;
	readonly ModifiedByExternalParty: string;
	readonly ModifiedOn_UtcDateAndTime: string;
	readonly ModifiedOnBehalfBy: string;
	readonly OrganizationId: string;
	readonly OverriddenCreatedOn_UtcDateOnly: string;
	readonly ParentSubject: string;
	readonly SubjectId: string;
	readonly Title: string;
	readonly VersionNumber: string;
}

/**
 * Subject WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface ISubjectApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: ISubjectFormattedValue;
	/** Unique identifier of the user who created the subject. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Shows the external party who created the record. */
	readonly CreatedByExternalParty: DevKit.Guid | null;
	/** Date and time when the subject was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the subject. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Description of the subject. */
	Description: string | null;
	/** Information that specifies when the subject will be displayed in lists of subjects. */
	FeatureMask: number | null;
	/** Unique identifier of the data import or data migration that created this record. */
	ImportSequenceNumber: number | null;
	/** Unique identifier of the user who last modified the subject. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Shows the external party who modified the record. */
	readonly ModifiedByExternalParty: DevKit.Guid | null;
	/** Date and time when the subject was last modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who last modified the subject. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Unique identifier for the organization associated with the subject. */
	readonly OrganizationId: DevKit.Guid | null;
	/** Date and time that the record was migrated. */
	OverriddenCreatedOn_UtcDateOnly: Date | null;
	/** Unique identifier of the parent subject. */
	ParentSubject: DevKit.Guid | null;
	/** Unique identifier of the subject. */
	SubjectId: DevKit.Guid | null;
	/** Title of the subject. */
	Title: string | null;
	/** Version number of the subject. */
	readonly VersionNumber: number | null;
}

const SubjectFieldConfig: DevKit.IWebApiFieldConfigMap = {
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedByExternalParty: { schemaName: 'CreatedByExternalParty', logicalName: '_createdbyexternalparty_value', readOnly: true, entityCollectionName: 'externalparties', entityLogicalName: 'externalparty' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Description: { logicalName: 'description' },
	FeatureMask: { logicalName: 'featuremask', type: 'Integer' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedByExternalParty: { schemaName: 'ModifiedByExternalParty', logicalName: '_modifiedbyexternalparty_value', readOnly: true, entityCollectionName: 'externalparties', entityLogicalName: 'externalparty' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OrganizationId: { schemaName: 'OrganizationId', logicalName: '_organizationid_value', readOnly: true, entityCollectionName: 'organizations', entityLogicalName: 'organization' },
	OverriddenCreatedOn_UtcDateOnly: { logicalName: 'overriddencreatedon', type: 'DateTime' },
	ParentSubject: { schemaName: 'ParentSubject', logicalName: '_parentsubject_value', entityCollectionName: 'subjects', entityLogicalName: 'subject' },
	SubjectId: { logicalName: 'subjectid' },
	Title: { logicalName: 'title' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * Subject WebApi class for early-bound style coding
 * Usage: const subject = new SubjectApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class SubjectApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<ISubjectApi>(entity, 'subject', 'subjects', SubjectFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface SubjectApi extends ISubjectApi { }
