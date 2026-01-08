/**
 * RoutingRuleItem.webapi.ts - RoutingRuleItem WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * RoutingRuleItem WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IRoutingRuleItemApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<IRoutingRuleItemApi, 'FormattedValue'>]: string };
	/** Show who is assigned on item. */
	AssignObjectId: DevKit.Guid | null;
	/** Shows the date and time when the item was last assigned to a user. */
	AssignObjectIdModifiedOn_UtcDateOnly: Date | null;
	/** For internal use only. */
	readonly ComponentState: number | null;
	/** Condition for Rule item */
	ConditionXml: string | null;
	/** Unique identifier of the user who created the record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the record was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the record. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Type additional information to describe the rule item. */
	Description: string | null;
	/** Exchange rate for the currency associated with the routing rule item with respect to the base currency. */
	readonly ExchangeRate: number | null;
	/** For internal use only. */
	readonly IsManaged: boolean | null;
	/** Unique identifier of the user who modified the record. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the record was modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who modified the record. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Name of the Routing Rule Item. */
	Name: string | null;
	/** Unique identifier of the organization associated with the routing rule item. */
	readonly OrganizationId: DevKit.Guid | null;
	/** For internal use only. */
	readonly OverwriteTime_UtcDateOnly: Date | null;
	/** Owner Id */
	OwnerId: DevKit.Guid | null;
	/** Unique identifier for the business unit that owns the record */
	readonly OwningBusinessUnit: DevKit.Guid | null;
	/** Unique identifier for the user that owns the record. */
	readonly OwningUser: DevKit.Guid | null;
	/** Choose the Queue that the item is assigned to. */
	RoutedQueueId: DevKit.Guid | null;
	/** Unique identifier for Routing Rule associated with Rule Item. */
	RoutingRuleId: DevKit.Guid | null;
	/** Unique identifier for entity instances */
	RoutingRuleItemId: DevKit.Guid | null;
	/** For internal use only. */
	readonly RoutingRuleItemIdUnique: DevKit.Guid | null;
	/** Sequence number of the routing rule item */
	SequenceNumber: number | null;
	/** Unique identifier of the associated solution. */
	readonly SolutionId: DevKit.Guid | null;
	/** For internal use only. */
	readonly SupportingSolutionId: DevKit.Guid | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** Unique identifier of the currency associated with the Routing Rule. */
	TransactionCurrencyId: DevKit.Guid | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
	/** Version number of the Routing Rule Item. */
	readonly VersionNumber: number | null;
}

const RoutingRuleItemFieldConfig: DevKit.IWebApiFieldConfigMap = {
	AssignObjectId: { schemaName: 'AssignObjectId', logicalName: '_assignobjectid_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	AssignObjectIdModifiedOn_UtcDateOnly: { logicalName: 'assignobjectidmodifiedon', type: 'DateTime' },
	ComponentState: { logicalName: 'componentstate', readOnly: true, type: 'Integer' },
	ConditionXml: { logicalName: 'conditionxml' },
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
	OrganizationId: { schemaName: 'OrganizationId', logicalName: '_organizationid_value', readOnly: true, entityCollectionName: 'organizations', entityLogicalName: 'organization' },
	OverwriteTime_UtcDateOnly: { logicalName: 'overwritetime', readOnly: true, type: 'DateTime' },
	OwnerId: { schemaName: 'OwnerId', logicalName: '_ownerid_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OwningBusinessUnit: { schemaName: 'OwningBusinessUnit', logicalName: '_owningbusinessunit_value', readOnly: true, entityCollectionName: 'businessunits', entityLogicalName: 'businessunit' },
	OwningUser: { schemaName: 'OwningUser', logicalName: '_owninguser_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	RoutedQueueId: { schemaName: 'RoutedQueueId', logicalName: '_routedqueueid_value', entityCollectionName: 'queues', entityLogicalName: 'queue' },
	RoutingRuleId: { schemaName: 'RoutingRuleId', logicalName: '_routingruleid_value', entityCollectionName: 'routingrules', entityLogicalName: 'routingrule' },
	RoutingRuleItemId: { logicalName: 'routingruleitemid' },
	RoutingRuleItemIdUnique: { logicalName: 'routingruleitemidunique', readOnly: true },
	SequenceNumber: { logicalName: 'sequencenumber', type: 'Integer' },
	SolutionId: { logicalName: 'solutionid', readOnly: true },
	SupportingSolutionId: { logicalName: 'supportingsolutionid', readOnly: true },
	TimeZoneRuleVersionNumber: { logicalName: 'timezoneruleversionnumber', type: 'Integer' },
	TransactionCurrencyId: { schemaName: 'TransactionCurrencyId', logicalName: '_transactioncurrencyid_value', entityCollectionName: 'transactioncurrencies', entityLogicalName: 'transactioncurrency' },
	UTCConversionTimeZoneCode: { logicalName: 'utcconversiontimezonecode', type: 'Integer' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * RoutingRuleItem WebApi class for early-bound style coding
 * Usage: const routingRuleItem = new RoutingRuleItemApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class RoutingRuleItemApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IRoutingRuleItemApi>(entity, 'routingruleitem', 'routingruleitems', RoutingRuleItemFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface RoutingRuleItemApi extends IRoutingRuleItemApi { }
