/**
 * PersonalDocumentTemplate.webapi.ts - PersonalDocumentTemplate WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for PersonalDocumentTemplate
 * All fields return string representation of their values
 */
export interface IPersonalDocumentTemplateFormattedValue {
	readonly ClientData: string;
	readonly Content: string;
	readonly CreatedBy: string;
	readonly CreatedOn_UtcDateAndTime: string;
	readonly CreatedOnBehalfBy: string;
	readonly Description: string;
	readonly DocumentType: string;
	readonly LanguageCode: string;
	readonly ModifiedBy: string;
	readonly ModifiedOn_UtcDateAndTime: string;
	readonly ModifiedOnBehalfBy: string;
	readonly Name: string;
	readonly OwnerId: string;
	readonly OwningBusinessUnit: string;
	readonly OwningTeam: string;
	readonly OwningUser: string;
	readonly PersonalDocumentTemplateId: string;
	readonly Status: string;
	readonly VersionNumber: string;
}

/**
 * PersonalDocumentTemplate WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IPersonalDocumentTemplateApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: IPersonalDocumentTemplateFormattedValue;
	/** Client data regarding this personal document template. */
	ClientData: string | null;
	/** Bytes of the personal document template. */
	Content: string | null;
	/** Unique identifier of the user who created the personal document template. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the personal document template was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the personal document template. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Additional information to describe the Personal Document Template */
	Description: string | null;
	/** Option set for selecting the type of the personal document template */
	DocumentType: number | null;
	/** Language of Personal Document Template. */
	LanguageCode: number | null;
	/** Unique identifier of the user who last modified the personal document template. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the personal document template was last modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who modified the personal document template. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Name of the personal document template. */
	Name: string | null;
	/** Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
	OwnerId: DevKit.Guid | null;
	/** Unique identifier of the business unit that owns the personal document template. */
	readonly OwningBusinessUnit: DevKit.Guid | null;
	/** Unique identifier of the team who owns the personal document template. */
	readonly OwningTeam: DevKit.Guid | null;
	/** Unique identifier of the user who owns the personal document template. */
	readonly OwningUser: DevKit.Guid | null;
	/** Unique identifier of the personal document template. */
	PersonalDocumentTemplateId: DevKit.Guid | null;
	/** Information about whether the personal document template is active. */
	Status: boolean | null;
	readonly VersionNumber: number | null;
}

const PersonalDocumentTemplateFieldConfig: DevKit.IWebApiFieldConfigMap = {
	ClientData: { logicalName: 'clientdata' },
	Content: { logicalName: 'content' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Description: { logicalName: 'description' },
	DocumentType: { logicalName: 'documenttype', type: 'Integer' },
	LanguageCode: { logicalName: 'languagecode', type: 'Integer' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Name: { logicalName: 'name' },
	OwnerId: { schemaName: 'OwnerId', logicalName: '_ownerid_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OwningBusinessUnit: { schemaName: 'OwningBusinessUnit', logicalName: '_owningbusinessunit_value', readOnly: true, entityCollectionName: 'businessunits', entityLogicalName: 'businessunit' },
	OwningTeam: { schemaName: 'OwningTeam', logicalName: '_owningteam_value', readOnly: true, entityCollectionName: 'teams', entityLogicalName: 'team' },
	OwningUser: { schemaName: 'OwningUser', logicalName: '_owninguser_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	PersonalDocumentTemplateId: { logicalName: 'personaldocumenttemplateid' },
	Status: { logicalName: 'status', type: 'Boolean' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * PersonalDocumentTemplate WebApi class for early-bound style coding
 * Usage: const personalDocumentTemplate = new PersonalDocumentTemplateApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class PersonalDocumentTemplateApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IPersonalDocumentTemplateApi>(entity, 'personaldocumenttemplate', 'personaldocumenttemplates', PersonalDocumentTemplateFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface PersonalDocumentTemplateApi extends IPersonalDocumentTemplateApi { }
