/**
 * DocumentTemplate.webapi.ts - DocumentTemplate WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * DocumentTemplate WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IDocumentTemplateApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<IDocumentTemplateApi, 'FormattedValue'>]: string };
	/** Client data regarding this document template. */
	ClientData: string | null;
	/** Bytes of the document template. */
	Content: string | null;
	/** Unique identifier of the user who created the document template. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the document template was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the document template. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Additional information to describe the Document Template */
	Description: string | null;
	/** Unique identifier of the document template. */
	DocumentTemplateId: DevKit.Guid | null;
	/** Option set for selecting the type of the document template */
	DocumentType: number | null;
	/** Language of Document Template. */
	LanguageCode: number | null;
	/** Unique identifier of the user who last modified the document template. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the document template was last modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who modified the document template. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Name of the document template. */
	Name: string | null;
	/** Unique identifier of the organization associated with the web resource. */
	readonly OrganizationId: DevKit.Guid | null;
	/** Information about whether the document template is active. */
	Status: boolean | null;
	readonly VersionNumber: number | null;
}

const DocumentTemplateFieldConfig: DevKit.IWebApiFieldConfigMap = {
	ClientData: { logicalName: 'clientdata' },
	Content: { logicalName: 'content' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Description: { logicalName: 'description' },
	DocumentTemplateId: { logicalName: 'documenttemplateid' },
	DocumentType: { logicalName: 'documenttype', type: 'Integer' },
	LanguageCode: { logicalName: 'languagecode', type: 'Integer' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Name: { logicalName: 'name' },
	OrganizationId: { schemaName: 'OrganizationId', logicalName: '_organizationid_value', readOnly: true, entityCollectionName: 'organizations', entityLogicalName: 'organization' },
	Status: { logicalName: 'status', type: 'Boolean' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * DocumentTemplate WebApi class for early-bound style coding
 * Usage: const documentTemplate = new DocumentTemplateApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class DocumentTemplateApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IDocumentTemplateApi>(entity, 'documenttemplate', 'documenttemplates', DocumentTemplateFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface DocumentTemplateApi extends IDocumentTemplateApi { }
