/**
 * ConvertRuleItem.webapi.ts - ConvertRuleItem WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * ConvertRuleItem WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IConvertRuleItemApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<IConvertRuleItemApi, 'FormattedValue'>]: string };
	/** For internal use only. */
	readonly ComponentState: number | null;
	/** Identifies the step of the associated workflow */
	ConditionId: DevKit.Guid | null;
	/** Condition for convert rule item */
	ConditionXml: string | null;
	/** Unique identifier of the convert rule associated with the convert rule item. */
	ConvertRuleId: DevKit.Guid | null;
	/** Unique identifier for entity instances */
	ConvertRuleItemId: DevKit.Guid | null;
	/** For internal use only. */
	readonly ConvertRuleItemIdUnique: DevKit.Guid | null;
	/** Unique identifier of the user who created the record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the record was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Shows who created the record on behalf of another user. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Type additional information to describe the rule item for automatic record creation. */
	Description: string | null;
	/** Exchange rate for the currency associated with the queue with respect to the base currency. */
	readonly ExchangeRate: number | null;
	/** For internal use only. */
	readonly IsManaged: boolean | null;
	/** Unique identifier of the user who modified the record. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the record was modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Shows who created the record on behalf of another user. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Type a name or title of the rule item that is used for automatic record creation and update. */
	Name: string | null;
	/** For internal use only. */
	readonly OverwriteTime_UtcDateOnly: Date | null;
	/** Owner Id */
	OwnerId: DevKit.Guid | null;
	/** Shows the business unit that the convert rule item owner belongs to. */
	readonly OwningBusinessUnit: DevKit.Guid | null;
	/** Unique identifier of the user who owns the Convert Rule Item. */
	readonly OwningUser: DevKit.Guid | null;
	/** Set properties xml for convert rule item */
	PropertiesXml: string | null;
	/** Choose the queue that the rule is assigned to. */
	QueueId: DevKit.Guid | null;
	/** Sequence number of the convert rule item */
	SequenceNumber: number | null;
	/** Unique identifier of the associated solution. */
	readonly SolutionId: DevKit.Guid | null;
	/** For internal use only. */
	readonly SupportingSolutionId: DevKit.Guid | null;
	/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
	readonly TransactionCurrencyId: DevKit.Guid | null;
	/** Version number of the Covert Rule Item. */
	readonly VersionNumber: number | null;
	/** Workflow associated with the Convert Rule Item. */
	WorkflowId: DevKit.Guid | null;
}

const ConvertRuleItemFieldConfig: DevKit.IWebApiFieldConfigMap = {
	ComponentState: { logicalName: 'componentstate', readOnly: true, type: 'Integer' },
	ConditionId: { schemaName: 'ConditionId', logicalName: '_conditionid_value', entityCollectionName: 'workflows', entityLogicalName: 'workflow' },
	ConditionXml: { logicalName: 'conditionxml' },
	ConvertRuleId: { schemaName: 'ConvertRuleId', logicalName: '_convertruleid_value', entityCollectionName: 'convertrules', entityLogicalName: 'convertrule' },
	ConvertRuleItemId: { logicalName: 'convertruleitemid' },
	ConvertRuleItemIdUnique: { logicalName: 'convertruleitemidunique', readOnly: true },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Description: { logicalName: 'description' },
	ExchangeRate: { logicalName: 'exchangerate', readOnly: true, type: 'Number' },
	IsManaged: { logicalName: 'ismanaged', readOnly: true, type: 'Boolean' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Name: { logicalName: 'name' },
	OverwriteTime_UtcDateOnly: { logicalName: 'overwritetime', readOnly: true, type: 'DateTime' },
	OwnerId: { schemaName: 'OwnerId', logicalName: '_ownerid_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OwningBusinessUnit: { schemaName: 'OwningBusinessUnit', logicalName: '_owningbusinessunit_value', readOnly: true, entityCollectionName: 'businessunits', entityLogicalName: 'businessunit' },
	OwningUser: { schemaName: 'OwningUser', logicalName: '_owninguser_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	PropertiesXml: { logicalName: 'propertiesxml' },
	QueueId: { schemaName: 'QueueId', logicalName: '_queueid_value', entityCollectionName: 'queues', entityLogicalName: 'queue' },
	SequenceNumber: { logicalName: 'sequencenumber', type: 'Integer' },
	SolutionId: { logicalName: 'solutionid', readOnly: true },
	SupportingSolutionId: { logicalName: 'supportingsolutionid', readOnly: true },
	TransactionCurrencyId: { schemaName: 'TransactionCurrencyId', logicalName: '_transactioncurrencyid_value', readOnly: true, entityCollectionName: 'transactioncurrencies', entityLogicalName: 'transactioncurrency' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
	WorkflowId: { schemaName: 'WorkflowId', logicalName: '_workflowid_value', entityCollectionName: 'workflows', entityLogicalName: 'workflow' },
};

/**
 * ConvertRuleItem WebApi class for early-bound style coding
 * Usage: const convertRuleItem = new ConvertRuleItemApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class ConvertRuleItemApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IConvertRuleItemApi>(entity, 'convertruleitem', 'convertruleitems', ConvertRuleItemFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface ConvertRuleItemApi extends IConvertRuleItemApi { }
