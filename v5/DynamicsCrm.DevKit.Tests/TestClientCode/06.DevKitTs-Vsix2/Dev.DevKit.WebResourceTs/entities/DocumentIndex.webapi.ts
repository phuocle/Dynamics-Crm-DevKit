/**
 * DocumentIndex.webapi.ts - DocumentIndex WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * DocumentIndex WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IDocumentIndexApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<IDocumentIndexApi, 'FormattedValue'>]: string };
	/** Unique identifier of the user who created the indexed article. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the indexed article was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the documentindex. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Choose the parent article for the document index item. The ID links the index to article information such as the article number, title, and keywords. */
	DocumentId: DevKit.Guid | null;
	/** Unique identifier of the indexed article. */
	DocumentIndexId: DevKit.Guid | null;
	/** For internal use only. */
	DocumentTypeCode: number | null;
	/** Shows which version of the knowledge article is the latest version. */
	IsLatestVersion: boolean | null;
	/** Tells whether the parent knowledge base article is published in Microsoft Dynamics 365, so that the keywords and article content are added to the search index. */
	IsPublished: boolean | null;
	/** Type the keywords for the article. The keywords are updated in the search index every time the article is published. */
	KeyWords: string | null;
	/** For system use only. */
	Location: string | null;
	/** Unique identifier of the user who last modified the indexed article. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the indexed article was last modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who last modified the documentindex. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** For internal use only. */
	Number: string | null;
	/** Choose the ID of the organization that the record is associated with. */
	readonly OrganizationId: DevKit.Guid | null;
	/** For internal use only. */
	SearchText: string | null;
	/** Shows the subject record selected on the parent knowledge base article. The ID is updated in the search index every time the article is published. */
	SubjectId: DevKit.Guid | null;
	/** Type the title of the parent knowledge base article. This is updated in the search index every time the article is published. */
	Title: string | null;
	readonly VersionNumber: number | null;
}

const DocumentIndexFieldConfig: DevKit.IWebApiFieldConfigMap = {
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	DocumentId: { schemaName: 'DocumentId', logicalName: '_documentid_value', entityCollectionName: 'kbarticles', entityLogicalName: 'kbarticle' },
	DocumentIndexId: { logicalName: 'documentindexid' },
	DocumentTypeCode: { logicalName: 'documenttypecode', type: 'Integer' },
	IsLatestVersion: { logicalName: 'islatestversion', type: 'Boolean' },
	IsPublished: { logicalName: 'ispublished', type: 'Boolean' },
	KeyWords: { logicalName: 'keywords' },
	Location: { logicalName: 'location' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Number: { logicalName: 'number' },
	OrganizationId: { schemaName: 'OrganizationId', logicalName: '_organizationid_value', readOnly: true, entityCollectionName: 'organizations', entityLogicalName: 'organization' },
	SearchText: { logicalName: 'searchtext' },
	SubjectId: { schemaName: 'SubjectId', logicalName: '_subjectid_value', entityCollectionName: 'subjects', entityLogicalName: 'subject' },
	Title: { logicalName: 'title' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * DocumentIndex WebApi class for early-bound style coding
 * Usage: const documentIndex = new DocumentIndexApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class DocumentIndexApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IDocumentIndexApi>(entity, 'documentindex', 'documentindexes', DocumentIndexFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface DocumentIndexApi extends IDocumentIndexApi { }
