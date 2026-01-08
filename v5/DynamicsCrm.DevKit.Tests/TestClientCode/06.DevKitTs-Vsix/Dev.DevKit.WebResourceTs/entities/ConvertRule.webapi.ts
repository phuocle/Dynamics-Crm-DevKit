/**
 * ConvertRule.webapi.ts - ConvertRule WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * ConvertRule WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IConvertRuleApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<IConvertRuleApi, 'FormattedValue'>]: string };
	/** Choose whether items from unknown senders should be converted to records. */
	AllowUnknownSender: boolean | null;
	/** channel property group associated with the convert rule. */
	ChannelPropertyGroupId: DevKit.Guid | null;
	/** Choose whether cases should be created for customers with active entitlements. */
	CheckActiveEntitlement: boolean | null;
	/** Information whether record needs to be created for black listed social profiles. */
	CheckBlockedSocialProfile: boolean | null;
	/** Information whether record needs to be created for direct messages. */
	CheckDirectMessages: boolean | null;
	/** Choose whether an item related to a resolved case should be converted to a case. */
	CheckIfResolved: boolean | null;
	/** For internal use only. */
	readonly ComponentState: number | null;
	/** Unique identifier for entity instances */
	ConvertRuleId: DevKit.Guid | null;
	/** For internal use only. */
	readonly ConvertRuleIdUnique: DevKit.Guid | null;
	/** Unique identifier of the user who created the record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the record was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the record. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Type additional information to describe the rule for creating records automatically. */
	Description: string | null;
	/** Exchange rate for the currency associated with the queue with respect to the base currency. */
	readonly ExchangeRate: number | null;
	/** For internal use only. */
	readonly IsManaged: boolean | null;
	/** Unique identifier of the user who modified the record. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the record was modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who modified the record. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Type a title or name of the queue for which the setting is defined. */
	Name: string | null;
	/** For internal use only. */
	readonly OverwriteTime_UtcDateOnly: Date | null;
	/** Owner Id */
	OwnerId: DevKit.Guid | null;
	/** Shows the business unit that the convert rule owner belongs to. */
	readonly OwningBusinessUnit: DevKit.Guid | null;
	/** Unique identifier for the team that owns the record. */
	OwningTeam: DevKit.Guid | null;
	/** Unique identifier for the user that owns the record. */
	OwningUser: DevKit.Guid | null;
	/** Choose the queue that the rule is assigned to. */
	QueueId: DevKit.Guid | null;
	/** Record Version */
	readonly RecordVersion: string | null;
	/** If you want to create a new case for an item associated with a resolved case, type how long a case must remain resolved before a new case is created for the associated item. */
	ResolvedSince: number | null;
	/** Choose the email template to use to create an automatic response to the customer. */
	ResponseTemplateId: DevKit.Guid | null;
	/** Choose whether to send an automatic email response to the customer after a record is created. */
	SendAutomaticResponse: boolean | null;
	/** Unique identifier of the associated solution. */
	readonly SolutionId: DevKit.Guid | null;
	/** Source of the record. */
	SourceTypeCode: number | null;
	/** Status of the Convert Rule */
	StateCode: number | null;
	/** Reason for the status of the Convert Rule */
	StatusCode: number | null;
	/** For internal use only. */
	readonly SupportingSolutionId: DevKit.Guid | null;
	/** Unique identifier of the currency associated with the queue. */
	TransactionCurrencyId: DevKit.Guid | null;
	/** Version number of the convert rule. */
	readonly VersionNumber: number | null;
	/** Shows the workflow for this rule. */
	WorkflowId: DevKit.Guid | null;
}

const ConvertRuleFieldConfig: DevKit.IWebApiFieldConfigMap = {
	AllowUnknownSender: { logicalName: 'allowunknownsender', type: 'Boolean' },
	ChannelPropertyGroupId: { schemaName: 'ChannelPropertyGroupId', logicalName: '_channelpropertygroupid_value', entityCollectionName: 'channelpropertygroups', entityLogicalName: 'channelpropertygroup' },
	CheckActiveEntitlement: { logicalName: 'checkactiveentitlement', type: 'Boolean' },
	CheckBlockedSocialProfile: { logicalName: 'checkblockedsocialprofile', type: 'Boolean' },
	CheckDirectMessages: { logicalName: 'checkdirectmessages', type: 'Boolean' },
	CheckIfResolved: { logicalName: 'checkifresolved', type: 'Boolean' },
	ComponentState: { logicalName: 'componentstate', readOnly: true, type: 'Integer' },
	ConvertRuleId: { logicalName: 'convertruleid' },
	ConvertRuleIdUnique: { logicalName: 'convertruleidunique', readOnly: true },
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
	OwningTeam: { schemaName: 'OwningTeam', logicalName: '_owningteam_value', entityCollectionName: 'teams', entityLogicalName: 'team' },
	OwningUser: { schemaName: 'OwningUser', logicalName: '_owninguser_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	QueueId: { schemaName: 'QueueId', logicalName: '_queueid_value', entityCollectionName: 'queues', entityLogicalName: 'queue' },
	RecordVersion: { logicalName: 'recordversion', readOnly: true },
	ResolvedSince: { logicalName: 'resolvedsince', type: 'Integer' },
	ResponseTemplateId: { schemaName: 'ResponseTemplateId', logicalName: '_responsetemplateid_value', entityCollectionName: 'templates', entityLogicalName: 'template' },
	SendAutomaticResponse: { logicalName: 'sendautomaticresponse', type: 'Boolean' },
	SolutionId: { logicalName: 'solutionid', readOnly: true },
	SourceTypeCode: { logicalName: 'sourcetypecode', type: 'Integer' },
	StateCode: { logicalName: 'statecode', type: 'Integer' },
	StatusCode: { logicalName: 'statuscode', type: 'Integer' },
	SupportingSolutionId: { logicalName: 'supportingsolutionid', readOnly: true },
	TransactionCurrencyId: { schemaName: 'TransactionCurrencyId', logicalName: '_transactioncurrencyid_value', entityCollectionName: 'transactioncurrencies', entityLogicalName: 'transactioncurrency' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
	WorkflowId: { schemaName: 'WorkflowId', logicalName: '_workflowid_value', entityCollectionName: 'workflows', entityLogicalName: 'workflow' },
};

/**
 * ConvertRule WebApi class for early-bound style coding
 * Usage: const convertRule = new ConvertRuleApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class ConvertRuleApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IConvertRuleApi>(entity, 'convertrule', 'convertrules', ConvertRuleFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface ConvertRuleApi extends IConvertRuleApi { }
