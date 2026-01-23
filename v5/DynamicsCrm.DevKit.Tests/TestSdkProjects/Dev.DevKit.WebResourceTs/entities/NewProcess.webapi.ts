/**
 * NewProcess.webapi.ts - NewProcess WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * NewProcess WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface INewProcessApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<INewProcessApi, 'FormattedValue'>]: string };
	/** Unique identifier of the active stage for the Business Process Flow instance. */
	ActiveStageId: DevKit.Guid | null;
	/** Date and time when current active stage is started. */
	ActiveStageStartedOn_UtcDateOnly: Date | null;
	/** Unique identifier for New Process bpf entity instances */
	BusinessProcessFlowInstanceId: DevKit.Guid | null;
	/** Date and time when current active stage is started. */
	CompletedOn_UtcDateOnly: Date | null;
	/** Shows who created the record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics CRM options. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Shows who created the record on behalf of another user. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Duration the business process flow was active. */
	readonly Duration: number | null;
	/** Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency. */
	readonly ExchangeRate: number | null;
	/** Unique identifier of the data import or data migration that created this record. */
	ImportSequenceNumber: number | null;
	/** Unique identifier of the Knowledge Article associated to the Business Process Flow instance. */
	KnowledgeArticleId: DevKit.Guid | null;
	/** Shows who last updated the record. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics CRM options. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Shows who last updated the record on behalf of another user. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Process Name. */
	Name: string | null;
	/** Unique identifier of the organization with which the SDK message request is associated. */
	readonly OrganizationId: DevKit.Guid | null;
	/** Date and time that the record was migrated. */
	OverriddenCreatedOn_UtcDateOnly: Date | null;
	/** Unique identifier of the workflow associated to the Business Process Flow instance. */
	ProcessId: DevKit.Guid | null;
	/** Shows whether the Delve action record is pending, completed, or tracking. */
	StateCode: number | null;
	/** Select the delve action record status. */
	StatusCode: number | null;
	/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
	TransactionCurrencyId: DevKit.Guid | null;
	/** Traversed Path */
	TraversedPath: string | null;
	/** Version number of the business process instance. */
	readonly VersionNumber: number | null;
}

const NewProcessFieldConfig: DevKit.IWebApiFieldConfigMap = {
	ActiveStageId: { schemaName: 'ActiveStageId', logicalName: '_activestageid_value', entityCollectionName: 'processstages', entityLogicalName: 'processstage' },
	ActiveStageStartedOn_UtcDateOnly: { logicalName: 'activestagestartedon', type: 'DateTime' },
	BusinessProcessFlowInstanceId: { logicalName: 'businessprocessflowinstanceid' },
	CompletedOn_UtcDateOnly: { logicalName: 'completedon', type: 'DateTime' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Duration: { logicalName: 'duration', readOnly: true, type: 'Integer' },
	ExchangeRate: { logicalName: 'exchangerate', readOnly: true, type: 'Number' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	KnowledgeArticleId: { schemaName: 'KnowledgeArticleId', logicalName: '_knowledgearticleid_value', entityCollectionName: 'knowledgearticles', entityLogicalName: 'knowledgearticle' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Name: { logicalName: 'name' },
	OrganizationId: { schemaName: 'OrganizationId', logicalName: '_organizationid_value', readOnly: true, entityCollectionName: 'organizations', entityLogicalName: 'organization' },
	OverriddenCreatedOn_UtcDateOnly: { logicalName: 'overriddencreatedon', type: 'DateTime' },
	ProcessId: { schemaName: 'ProcessId', logicalName: '_processid_value', entityCollectionName: 'workflows', entityLogicalName: 'workflow' },
	StateCode: { logicalName: 'statecode', type: 'Integer' },
	StatusCode: { logicalName: 'statuscode', type: 'Integer' },
	TransactionCurrencyId: { schemaName: 'TransactionCurrencyId', logicalName: '_transactioncurrencyid_value', entityCollectionName: 'transactioncurrencies', entityLogicalName: 'transactioncurrency' },
	TraversedPath: { logicalName: 'traversedpath' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * NewProcess WebApi class for early-bound style coding
 * Usage: const newProcess = new NewProcessApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class NewProcessApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<INewProcessApi>(entity, 'newprocess', 'newprocesses', NewProcessFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface NewProcessApi extends INewProcessApi { }
