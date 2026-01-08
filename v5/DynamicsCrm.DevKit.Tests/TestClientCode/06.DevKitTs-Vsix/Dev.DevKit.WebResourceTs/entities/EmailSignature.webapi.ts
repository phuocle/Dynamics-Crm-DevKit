/**
 * EmailSignature.webapi.ts - EmailSignature WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * EmailSignature WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IEmailSignatureApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<IEmailSignatureApi, 'FormattedValue'>]: string };
	/** Body text of the email signature. */
	Body: string | null;
	/** For internal use only. */
	readonly ComponentState: number | null;
	/** Unique identifier of the user who created the email signature. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the email signature was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the email signature. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Description of the email signature. */
	Description: string | null;
	/** Unique identifier of the email signature. */
	EmailSignatureId: DevKit.Guid | null;
	/** For internal use only. */
	GenerationTypeCode: number | null;
	/** Unique identifier of the data import or data migration that created this record. */
	ImportSequenceNumber: number | null;
	/** Information that specifies whether this component can be customized. */
	IsCustomizable: string | null;
	/** Information that specifies whether the email signature is default to the user. */
	IsDefault: boolean | null;
	/** Information about whether the email signature is personal or is available to all users. */
	IsPersonal: boolean | null;
	/** Language of the email signature. */
	LanguageCode: number | null;
	/** MIME type of the email signature. */
	MimeType: string | null;
	/** Unique identifier of the user who last modified the email signature. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the email signature was last modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who last modified the email signature. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Date and time that the record was migrated. */
	OverriddenCreatedOn_UtcDateOnly: Date | null;
	/** For internal use only. */
	readonly OverwriteTime_UtcDateOnly: Date | null;
	/** Unique identifier of the user or team who owns the email signature for the email activity. */
	OwnerId: DevKit.Guid | null;
	/** Unique identifier of the business unit that owns the email signature. */
	readonly OwningBusinessUnit: DevKit.Guid | null;
	/** Unique identifier of the team who owns the email signature. */
	readonly OwningTeam: DevKit.Guid | null;
	/** Unique identifier of the user who owns the email signature. */
	readonly OwningUser: DevKit.Guid | null;
	/** XML data for the body of the email signature. */
	PresentationXml: string | null;
	/** Safe html of email signature. */
	SafeHtml: string | null;
	/** Title of the email signature. */
	Title: string | null;
}

const EmailSignatureFieldConfig: DevKit.IWebApiFieldConfigMap = {
	Body: { logicalName: 'body' },
	ComponentState: { logicalName: 'componentstate', readOnly: true, type: 'Integer' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Description: { logicalName: 'description' },
	EmailSignatureId: { logicalName: 'emailsignatureid' },
	GenerationTypeCode: { logicalName: 'generationtypecode', type: 'Integer' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	IsCustomizable: { logicalName: 'iscustomizable' },
	IsDefault: { logicalName: 'isdefault', type: 'Boolean' },
	IsPersonal: { logicalName: 'ispersonal', type: 'Boolean' },
	LanguageCode: { logicalName: 'languagecode', type: 'Integer' },
	MimeType: { logicalName: 'mimetype' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OverriddenCreatedOn_UtcDateOnly: { logicalName: 'overriddencreatedon', type: 'DateTime' },
	OverwriteTime_UtcDateOnly: { logicalName: 'overwritetime', readOnly: true, type: 'DateTime' },
	OwnerId: { schemaName: 'OwnerId', logicalName: '_ownerid_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OwningBusinessUnit: { schemaName: 'OwningBusinessUnit', logicalName: '_owningbusinessunit_value', readOnly: true, entityCollectionName: 'businessunits', entityLogicalName: 'businessunit' },
	OwningTeam: { schemaName: 'OwningTeam', logicalName: '_owningteam_value', readOnly: true, entityCollectionName: 'teams', entityLogicalName: 'team' },
	OwningUser: { schemaName: 'OwningUser', logicalName: '_owninguser_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	PresentationXml: { logicalName: 'presentationxml' },
	SafeHtml: { logicalName: 'safehtml' },
	Title: { logicalName: 'title' },
};

/**
 * EmailSignature WebApi class for early-bound style coding
 * Usage: const emailSignature = new EmailSignatureApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class EmailSignatureApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IEmailSignatureApi>(entity, 'emailsignature', 'emailsignatures', EmailSignatureFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface EmailSignatureApi extends IEmailSignatureApi { }
