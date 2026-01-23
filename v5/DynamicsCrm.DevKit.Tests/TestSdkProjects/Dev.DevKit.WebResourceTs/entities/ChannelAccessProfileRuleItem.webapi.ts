/**
 * ChannelAccessProfileRuleItem.webapi.ts - ChannelAccessProfileRuleItem WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * ChannelAccessProfileRuleItem WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IChannelAccessProfileRuleItemApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<IChannelAccessProfileRuleItemApi, 'FormattedValue'>]: string };
	/** Choose the channel access profile that the item is assigned to. */
	AssociatedChannelAccessProfile: DevKit.Guid | null;
	/** Shows the channel access profile rule associated with this channel access profile rule item. */
	ChannelAccessProfileRuleId: DevKit.Guid | null;
	/** Unique identifier for entity instances */
	ChannelAccessProfileRuleItemId: DevKit.Guid | null;
	/** Unique identifier of the channel access profile rule item. */
	readonly ChannelAccessProfileRuleItemIdUnique: DevKit.Guid | null;
	/** For internal use only. */
	readonly ComponentState: number | null;
	/** Condition for Rule item */
	ConditionXml: string | null;
	/** Shows who created the record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Shows who created the record on behalf of another user. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Type additional information to describe the channel access profile rule item. */
	Description: string | null;
	/** Exchange rate for the currency associated with the channel access profile rule item with respect to the base currency. */
	readonly ExchangeRate: number | null;
	/** Version in which the channel access profile rule item is introduced. */
	IntroducedVersion: string | null;
	/** Is Managed */
	readonly IsManaged: boolean | null;
	/** Shows who last updated the record */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Shows who last updated the record on behalf of another user. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Type a descriptive name for the channel access profile rule item. */
	Name: string | null;
	/** Date and time when the record was created. */
	readonly OverwriteTime_UtcDateOnly: Date | null;
	/** Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user or team. */
	OwnerId: DevKit.Guid | null;
	/** Unique identifier for the business unit that owns the record */
	readonly OwningBusinessUnit: DevKit.Guid | null;
	/** Unique identifier for the user that owns the record. */
	readonly OwningUser: DevKit.Guid | null;
	/** Sequence number of the Channel access profile rule item */
	SequenceNumber: number | null;
	/** Unique identifier of the associated solution. */
	readonly SolutionId: DevKit.Guid | null;
	/** For internal use only. */
	readonly SupportingSolutionId: DevKit.Guid | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** Exchange rate for the currency associated with the channel access profile rule item with respect to the base currency. */
	TransactionCurrencyId: DevKit.Guid | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
	readonly VersionNumber: number | null;
}

const ChannelAccessProfileRuleItemFieldConfig: DevKit.IWebApiFieldConfigMap = {
	AssociatedChannelAccessProfile: { schemaName: 'AssociatedChannelAccessProfile', logicalName: '_associatedchannelaccessprofile_value', entityCollectionName: 'channelaccessprofiles', entityLogicalName: 'channelaccessprofile' },
	ChannelAccessProfileRuleId: { schemaName: 'ChannelAccessProfileRuleId', logicalName: '_channelaccessprofileruleid_value', entityCollectionName: 'channelaccessprofilerules', entityLogicalName: 'channelaccessprofilerule' },
	ChannelAccessProfileRuleItemId: { logicalName: 'channelaccessprofileruleitemid' },
	ChannelAccessProfileRuleItemIdUnique: { logicalName: 'channelaccessprofileruleitemidunique', readOnly: true },
	ComponentState: { logicalName: 'componentstate', readOnly: true, type: 'Integer' },
	ConditionXml: { logicalName: 'conditionxml' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Description: { logicalName: 'description' },
	ExchangeRate: { logicalName: 'exchangerate', readOnly: true, type: 'Number' },
	IntroducedVersion: { logicalName: 'introducedversion' },
	IsManaged: { logicalName: 'ismanaged', readOnly: true, type: 'Boolean' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Name: { logicalName: 'name' },
	OverwriteTime_UtcDateOnly: { logicalName: 'overwritetime', readOnly: true, type: 'DateTime' },
	OwnerId: { schemaName: 'OwnerId', logicalName: '_ownerid_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OwningBusinessUnit: { logicalName: 'owningbusinessunit', readOnly: true },
	OwningUser: { logicalName: 'owninguser', readOnly: true },
	SequenceNumber: { logicalName: 'sequencenumber', type: 'Integer' },
	SolutionId: { logicalName: 'solutionid', readOnly: true },
	SupportingSolutionId: { logicalName: 'supportingsolutionid', readOnly: true },
	TimeZoneRuleVersionNumber: { logicalName: 'timezoneruleversionnumber', type: 'Integer' },
	TransactionCurrencyId: { schemaName: 'TransactionCurrencyId', logicalName: '_transactioncurrencyid_value', entityCollectionName: 'transactioncurrencies', entityLogicalName: 'transactioncurrency' },
	UTCConversionTimeZoneCode: { logicalName: 'utcconversiontimezonecode', type: 'Integer' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * ChannelAccessProfileRuleItem WebApi class for early-bound style coding
 * Usage: const channelAccessProfileRuleItem = new ChannelAccessProfileRuleItemApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class ChannelAccessProfileRuleItemApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IChannelAccessProfileRuleItemApi>(entity, 'channelaccessprofileruleitem', 'channelaccessprofileruleitems', ChannelAccessProfileRuleItemFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface ChannelAccessProfileRuleItemApi extends IChannelAccessProfileRuleItemApi { }
