/**
 * Template.webapi.ts - Template WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for Template
 * All fields return string representation of their values
 */
export interface ITemplateFormattedValue {
	readonly Body: string;
	readonly ComponentState: string;
	readonly CreatedBy: string;
	readonly CreatedOn_UtcDateAndTime: string;
	readonly CreatedOnBehalfBy: string;
	readonly Description: string;
	readonly EntityImage: string;
	readonly EntityImageId: string;
	readonly GenerationTypeCode: string;
	readonly ImportSequenceNumber: string;
	readonly IntroducedVersion: string;
	readonly IsCustomizable: string;
	readonly IsManaged: string;
	readonly IsPersonal: string;
	readonly IsRecommended: string;
	readonly LanguageCode: string;
	readonly MimeType: string;
	readonly ModifiedBy: string;
	readonly ModifiedOn_UtcDateAndTime: string;
	readonly ModifiedOnBehalfBy: string;
	readonly OpenCount: string;
	readonly OpenRate: string;
	readonly OverwriteTime_UtcDateOnly: string;
	readonly OwnerId: string;
	readonly OwningBusinessUnit: string;
	readonly OwningTeam: string;
	readonly OwningUser: string;
	readonly PresentationXml: string;
	readonly ReplyCount: string;
	readonly ReplyRate: string;
	readonly SafeHtml: string;
	readonly SolutionId: string;
	readonly Subject: string;
	readonly SubjectPresentationXml: string;
	readonly SubjectSafeHtml: string;
	readonly SupportingSolutionId: string;
	readonly TemplateId: string;
	readonly TemplateIdUnique: string;
	readonly Title: string;
	readonly UsedCount: string;
	readonly VersionNumber: string;
}

/**
 * Template WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface ITemplateApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: ITemplateFormattedValue;
	/** Body text of the email template. */
	Body: string | null;
	/** For internal use only. */
	readonly ComponentState: number | null;
	/** Unique identifier of the user who created the email template. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the email template was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the template. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Description of the email template. */
	Description: string | null;
	/** Shows the default image for the record. */
	EntityImage: string | null;
	readonly EntityImageId: DevKit.Guid | null;
	/** For internal use only. */
	GenerationTypeCode: number | null;
	/** Unique identifier of the data import or data migration that created this record. */
	ImportSequenceNumber: number | null;
	/** Version in which the form is introduced. */
	IntroducedVersion: string | null;
	/** Information that specifies whether this component can be customized. */
	IsCustomizable: string | null;
	/** Indicates whether the solution component is part of a managed solution. */
	readonly IsManaged: boolean | null;
	/** Information about whether the template is personal or is available to all users. */
	IsPersonal: boolean | null;
	/** Indicates if a template is recommended by Dynamics 365. */
	readonly IsRecommended: boolean | null;
	/** Language of the email template. */
	LanguageCode: number | null;
	/** MIME type of the email template. */
	MimeType: string | null;
	/** Unique identifier of the user who last modified the template. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the email template was last modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who last modified the template. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** For internal use only. Shows the number of times emails that use this template have been opened. */
	readonly OpenCount: number | null;
	/** Shows the open rate of this template. This is based on number of opens on followed emails that use this template. */
	readonly OpenRate: number | null;
	/** For internal use only. */
	readonly OverwriteTime_UtcDateOnly: Date | null;
	/** Unique identifier of the user or team who owns the template for the email activity. */
	OwnerId: DevKit.Guid | null;
	/** Unique identifier of the business unit that owns the template. */
	readonly OwningBusinessUnit: DevKit.Guid | null;
	/** Unique identifier of the team who owns the template. */
	readonly OwningTeam: DevKit.Guid | null;
	/** Unique identifier of the user who owns the template. */
	readonly OwningUser: DevKit.Guid | null;
	/** XML data for the body of the email template. */
	PresentationXml: string | null;
	/** For internal use only. Shows the number of times emails that use this template have received replies. */
	readonly ReplyCount: number | null;
	/** Shows the reply rate for this template. This is based on number of replies received on followed emails that use this template. */
	readonly ReplyRate: number | null;
	/** Safe html of email template. */
	SafeHtml: string | null;
	/** Unique identifier of the associated solution. */
	readonly SolutionId: DevKit.Guid | null;
	/** Subject associated with the email template. */
	Subject: string | null;
	/** XML data for the subject of the email template. */
	SubjectPresentationXml: string | null;
	/** Safe html of email template subject. */
	SubjectSafeHtml: string | null;
	/** For internal use only. */
	readonly SupportingSolutionId: DevKit.Guid | null;
	/** Unique identifier of the template. */
	TemplateId: DevKit.Guid | null;
	/** For internal use only. */
	readonly TemplateIdUnique: DevKit.Guid | null;
	/** Title of the template. */
	Title: string | null;
	/** Shows the number of sent emails that use this template. */
	readonly UsedCount: number | null;
	/** Version number of the template. */
	readonly VersionNumber: number | null;
}

const TemplateFieldConfig: DevKit.IWebApiFieldConfigMap = {
	Body: { logicalName: 'body' },
	ComponentState: { logicalName: 'componentstate', readOnly: true, type: 'Integer' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Description: { logicalName: 'description' },
	EntityImage: { logicalName: 'entityimage' },
	EntityImageId: { logicalName: 'entityimageid', readOnly: true },
	GenerationTypeCode: { logicalName: 'generationtypecode', type: 'Integer' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	IntroducedVersion: { logicalName: 'introducedversion' },
	IsCustomizable: { logicalName: 'iscustomizable' },
	IsManaged: { logicalName: 'ismanaged', readOnly: true, type: 'Boolean' },
	IsPersonal: { logicalName: 'ispersonal', type: 'Boolean' },
	IsRecommended: { logicalName: 'isrecommended', readOnly: true, type: 'Boolean' },
	LanguageCode: { logicalName: 'languagecode', type: 'Integer' },
	MimeType: { logicalName: 'mimetype' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OpenCount: { logicalName: 'opencount', readOnly: true, type: 'Integer' },
	OpenRate: { logicalName: 'openrate', readOnly: true, type: 'Integer' },
	OverwriteTime_UtcDateOnly: { logicalName: 'overwritetime', readOnly: true, type: 'DateTime' },
	OwnerId: { schemaName: 'OwnerId', logicalName: '_ownerid_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OwningBusinessUnit: { schemaName: 'OwningBusinessUnit', logicalName: '_owningbusinessunit_value', readOnly: true, entityCollectionName: 'businessunits', entityLogicalName: 'businessunit' },
	OwningTeam: { schemaName: 'OwningTeam', logicalName: '_owningteam_value', readOnly: true, entityCollectionName: 'teams', entityLogicalName: 'team' },
	OwningUser: { schemaName: 'OwningUser', logicalName: '_owninguser_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	PresentationXml: { logicalName: 'presentationxml' },
	ReplyCount: { logicalName: 'replycount', readOnly: true, type: 'Integer' },
	ReplyRate: { logicalName: 'replyrate', readOnly: true, type: 'Integer' },
	SafeHtml: { logicalName: 'safehtml' },
	SolutionId: { logicalName: 'solutionid', readOnly: true },
	Subject: { logicalName: 'subject' },
	SubjectPresentationXml: { logicalName: 'subjectpresentationxml' },
	SubjectSafeHtml: { logicalName: 'subjectsafehtml' },
	SupportingSolutionId: { logicalName: 'supportingsolutionid', readOnly: true },
	TemplateId: { logicalName: 'templateid' },
	TemplateIdUnique: { logicalName: 'templateidunique', readOnly: true },
	Title: { logicalName: 'title' },
	UsedCount: { logicalName: 'usedcount', readOnly: true, type: 'Integer' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * Template WebApi class for early-bound style coding
 * Usage: const template = new TemplateApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class TemplateApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<ITemplateApi>(entity, 'template', 'templates', TemplateFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface TemplateApi extends ITemplateApi { }
