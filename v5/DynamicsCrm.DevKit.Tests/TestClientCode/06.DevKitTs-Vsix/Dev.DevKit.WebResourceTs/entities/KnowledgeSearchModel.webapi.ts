/**
 * KnowledgeSearchModel.webapi.ts - KnowledgeSearchModel WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for KnowledgeSearchModel
 * All fields return string representation of their values
 */
export interface IKnowledgeSearchModelFormattedValue {
	readonly AzureServiceConnectionId: string;
	readonly ComponentState: string;
	readonly CreatedBy: string;
	readonly CreatedOn_UtcDateAndTime: string;
	readonly CreatedOnBehalfBy: string;
	readonly Description: string;
	readonly Entity2: string;
	readonly FetchXmlList: string;
	readonly IsManaged: string;
	readonly KnowledgeSearchModelId: string;
	readonly KnowledgeSearchModelIdUnique: string;
	readonly MaxKeyWords: string;
	readonly ModifiedBy: string;
	readonly ModifiedOn_UtcDateAndTime: string;
	readonly ModifiedOnBehalfBy: string;
	readonly Name: string;
	readonly NgramSize: string;
	readonly OrganizationId: string;
	readonly OverwriteTime_UtcDateOnly: string;
	readonly SolutionId: string;
	readonly StateCode: string;
	readonly StatusCode: string;
	readonly SupportingSolutionId: string;
}

/**
 * KnowledgeSearchModel WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IKnowledgeSearchModelApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: IKnowledgeSearchModelFormattedValue;
	/** Unique identifier for AzureServiceConnection associated with KnowledgeSearchModel. */
	AzureServiceConnectionId: DevKit.Guid | null;
	/** For internal use only. */
	readonly ComponentState: number | null;
	/** Unique identifier of the user who created the Knowledge Search Model. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the Knowledge Search Model was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the knowledge search Model. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Enter a description for the search configuration */
	Description: string | null;
	/** entity */
	Entity2: string | null;
	/** FetchXml. */
	FetchXmlList: string | null;
	/** Is Manageed */
	readonly IsManaged: boolean | null;
	/** Unique identifier for entity instances */
	KnowledgeSearchModelId: DevKit.Guid | null;
	/** Unique identifier of the Knowledge Search Model used when synchronizing customizations for the Microsoft Dynamics 365 client for Outlook */
	readonly KnowledgeSearchModelIdUnique: DevKit.Guid | null;
	/** Enter the maximum number of keywords or key phrases to be determined using text analytics. */
	MaxKeyWords: number | null;
	/** Unique identifier of the user who modified the Knowledge Search Model. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the Knowledge Search model was last modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who last modified the knowledge search model. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Type a logical name for the search configuration. */
	Name: string | null;
	/** Enter the maximum number of key phrase words to use in a topic. */
	NgramSize: number | null;
	/** Unique identifier of the organization associated with the Knowledge Search Model entity. */
	readonly OrganizationId: DevKit.Guid | null;
	/** Date and time when the record was created. */
	readonly OverwriteTime_UtcDateOnly: Date | null;
	/** Unique identifier of the associated solution. */
	readonly SolutionId: DevKit.Guid | null;
	/** Status of the Knowledge Search Model */
	StateCode: number | null;
	/** Reason for the status of the Knowledge Search Model */
	StatusCode: number | null;
	/** For internal use only. */
	readonly SupportingSolutionId: DevKit.Guid | null;
}

const KnowledgeSearchModelFieldConfig: DevKit.IWebApiFieldConfigMap = {
	AzureServiceConnectionId: { schemaName: 'AzureServiceConnectionId', logicalName: '_azureserviceconnectionid_value', entityCollectionName: 'azureserviceconnections', entityLogicalName: 'azureserviceconnection' },
	ComponentState: { logicalName: 'componentstate', readOnly: true, type: 'Integer' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Description: { logicalName: 'description' },
	Entity2: { logicalName: 'entity' },
	FetchXmlList: { logicalName: 'fetchxmllist' },
	IsManaged: { logicalName: 'ismanaged', readOnly: true, type: 'Boolean' },
	KnowledgeSearchModelId: { logicalName: 'knowledgesearchmodelid' },
	KnowledgeSearchModelIdUnique: { logicalName: 'knowledgesearchmodelidunique', readOnly: true },
	MaxKeyWords: { logicalName: 'maxkeywords', type: 'Integer' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Name: { logicalName: 'name' },
	NgramSize: { logicalName: 'ngramsize', type: 'Integer' },
	OrganizationId: { schemaName: 'OrganizationId', logicalName: '_organizationid_value', readOnly: true, entityCollectionName: 'organizations', entityLogicalName: 'organization' },
	OverwriteTime_UtcDateOnly: { logicalName: 'overwritetime', readOnly: true, type: 'DateTime' },
	SolutionId: { logicalName: 'solutionid', readOnly: true },
	StateCode: { logicalName: 'statecode', type: 'Integer' },
	StatusCode: { logicalName: 'statuscode', type: 'Integer' },
	SupportingSolutionId: { logicalName: 'supportingsolutionid', readOnly: true },
};

/**
 * KnowledgeSearchModel WebApi class for early-bound style coding
 * Usage: const knowledgeSearchModel = new KnowledgeSearchModelApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class KnowledgeSearchModelApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IKnowledgeSearchModelApi>(entity, 'knowledgesearchmodel', 'knowledgesearchmodels', KnowledgeSearchModelFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface KnowledgeSearchModelApi extends IKnowledgeSearchModelApi { }
