/**
 * KbArticleTemplate.webapi.ts - KbArticleTemplate WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * KbArticleTemplate WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IKbArticleTemplateApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<IKbArticleTemplateApi, 'FormattedValue'>]: string };
	/** For internal use only. */
	readonly ComponentState: number | null;
	/** Unique identifier of the user who created the knowledge base article template. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the knowledge base article template was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the kbarticletemplate. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Description of the knowledge base article template. */
	Description: string | null;
	/** XML format of the knowledge base article template. */
	FormatXml: string | null;
	/** Unique identifier of the data import or data migration that created this record. */
	ImportSequenceNumber: number | null;
	/** Version in which the form is introduced. */
	IntroducedVersion: string | null;
	/** Information about whether the knowledge base article is active. */
	IsActive: boolean | null;
	/** Information that specifies whether this component can be customized. */
	IsCustomizable: string | null;
	readonly IsManaged: boolean | null;
	/** Unique identifier of the knowledge base article template. */
	KbArticleTemplateId: DevKit.Guid | null;
	/** For internal use only. */
	readonly KbArticleTemplateIdUnique: DevKit.Guid | null;
	/** Language of the Article Template */
	LanguageCode: number | null;
	/** Unique identifier of the user who last modified the knowledge base article template. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the knowledge base article template was last modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who last modified the kbarticletemplate. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Unique identifier of the organization associated with the template. */
	readonly OrganizationId: DevKit.Guid | null;
	/** Date and time that the record was migrated. */
	OverriddenCreatedOn_UtcDateOnly: Date | null;
	/** For internal use only. */
	readonly OverwriteTime_UtcDateOnly: Date | null;
	/** Unique identifier of the associated solution. */
	readonly SolutionId: DevKit.Guid | null;
	/** XML structure of the knowledge base article. */
	StructureXml: string | null;
	/** For internal use only. */
	readonly SupportingSolutionId: DevKit.Guid | null;
	/** Title of the knowledge base article template. */
	Title: string | null;
	readonly VersionNumber: number | null;
}

const KbArticleTemplateFieldConfig: DevKit.IWebApiFieldConfigMap = {
	ComponentState: { logicalName: 'componentstate', readOnly: true, type: 'Integer' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Description: { logicalName: 'description' },
	FormatXml: { logicalName: 'formatxml' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	IntroducedVersion: { logicalName: 'introducedversion' },
	IsActive: { logicalName: 'isactive', type: 'Boolean' },
	IsCustomizable: { logicalName: 'iscustomizable' },
	IsManaged: { logicalName: 'ismanaged', readOnly: true, type: 'Boolean' },
	KbArticleTemplateId: { logicalName: 'kbarticletemplateid' },
	KbArticleTemplateIdUnique: { logicalName: 'kbarticletemplateidunique', readOnly: true },
	LanguageCode: { logicalName: 'languagecode', type: 'Integer' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OrganizationId: { schemaName: 'OrganizationId', logicalName: '_organizationid_value', readOnly: true, entityCollectionName: 'organizations', entityLogicalName: 'organization' },
	OverriddenCreatedOn_UtcDateOnly: { logicalName: 'overriddencreatedon', type: 'DateTime' },
	OverwriteTime_UtcDateOnly: { logicalName: 'overwritetime', readOnly: true, type: 'DateTime' },
	SolutionId: { logicalName: 'solutionid', readOnly: true },
	StructureXml: { logicalName: 'structurexml' },
	SupportingSolutionId: { logicalName: 'supportingsolutionid', readOnly: true },
	Title: { logicalName: 'title' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * KbArticleTemplate WebApi class for early-bound style coding
 * Usage: const kbArticleTemplate = new KbArticleTemplateApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class KbArticleTemplateApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IKbArticleTemplateApi>(entity, 'kbarticletemplate', 'kbarticletemplates', KbArticleTemplateFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface KbArticleTemplateApi extends IKbArticleTemplateApi { }
