/**
 * ExternalPartyItem.webapi.ts - ExternalPartyItem WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for ExternalPartyItem
 * All fields return string representation of their values
 */
export interface IExternalPartyItemFormattedValue {
	readonly ChannelAccessProfileId: string;
	readonly CreatedBy: string;
	readonly CreatedOn_UtcDateAndTime: string;
	readonly CreatedOnBehalfBy: string;
	readonly ExchangeRate: string;
	readonly ExternalPartyId: string;
	readonly ExternalPartyItemId: string;
	readonly ImportSequenceNumber: string;
	readonly IntroducedVersion: string;
	readonly LastDisabledOn_UtcDateOnly: string;
	readonly LastEnabledOn_UtcDateOnly: string;
	readonly ModifiedBy: string;
	readonly ModifiedOn_UtcDateAndTime: string;
	readonly ModifiedOnBehalfBy: string;
	readonly Name: string;
	readonly OverriddenCreatedOn_UtcDateOnly: string;
	readonly OwnerId: string;
	readonly OwningBusinessUnit: string;
	readonly OwningUser: string;
	readonly RegardingObjectId: string;
	readonly StateCode: string;
	readonly StatusCode: string;
	readonly TransactionCurrencyId: string;
	readonly VersionNumber: string;
}

/**
 * ExternalPartyItem WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IExternalPartyItemApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: IExternalPartyItemFormattedValue;
	/** Choose the channel access profile that's used to determine the permissions when CRM is accessed from an external channel. */
	ChannelAccessProfileId: DevKit.Guid | null;
	/** Unique identifier of the user who created the record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the record was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the record. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Exchange rate for the currency associated with the external party item with respect to the base currency. */
	readonly ExchangeRate: number | null;
	/** Type the external party record that this item is created for. */
	ExternalPartyId: DevKit.Guid | null;
	/** Unique identifier for external party instances */
	ExternalPartyItemId: DevKit.Guid | null;
	/** Sequence number of the import that created this record. */
	ImportSequenceNumber: number | null;
	/** Version in which the similarity rule is introduced. */
	IntroducedVersion: string | null;
	/** Shows the date and time when the external party item was last disabled for external channel access. */
	LastDisabledOn_UtcDateOnly: Date | null;
	/** Shows the date and time when the external party item was last enabled for external channel access. */
	LastEnabledOn_UtcDateOnly: Date | null;
	/** Unique identifier of the user who modified the record. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the record was modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who modified the record. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Type the name of the external party item. */
	Name: string | null;
	/** Date and time that the record was migrated. */
	OverriddenCreatedOn_UtcDateOnly: Date | null;
	/** Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user or team. */
	OwnerId: DevKit.Guid | null;
	/** Unique identifier for the business unit that owns the record */
	OwningBusinessUnit: DevKit.Guid | null;
	/** Unique identifier for the user that owns the record. */
	readonly OwningUser: DevKit.Guid | null;
	/** Choose the external party enabled record that is associated with this external party item. */
	RegardingObjectId: DevKit.Guid | null;
	/** Shows whether the external party item is enabled or disabled. */
	StateCode: number | null;
	/** Select the external party items status. */
	StatusCode: number | null;
	/** Exchange rate for the currency associated with the ExternalPartyItem with respect to the base currency. */
	TransactionCurrencyId: DevKit.Guid | null;
	readonly VersionNumber: number | null;
}

const ExternalPartyItemFieldConfig: DevKit.IWebApiFieldConfigMap = {
	ChannelAccessProfileId: { schemaName: 'ChannelAccessProfileId', logicalName: '_channelaccessprofileid_value', entityCollectionName: 'channelaccessprofiles', entityLogicalName: 'channelaccessprofile' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ExchangeRate: { logicalName: 'exchangerate', readOnly: true, type: 'Number' },
	ExternalPartyId: { schemaName: 'ExternalPartyId', logicalName: '_externalpartyid_value', entityCollectionName: 'externalparties', entityLogicalName: 'externalparty' },
	ExternalPartyItemId: { logicalName: 'externalpartyitemid' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	IntroducedVersion: { logicalName: 'introducedversion' },
	LastDisabledOn_UtcDateOnly: { logicalName: 'lastdisabledon', type: 'DateTime' },
	LastEnabledOn_UtcDateOnly: { logicalName: 'lastenabledon', type: 'DateTime' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Name: { logicalName: 'name' },
	OverriddenCreatedOn_UtcDateOnly: { logicalName: 'overriddencreatedon', type: 'DateTime' },
	OwnerId: { schemaName: 'OwnerId', logicalName: '_ownerid_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OwningBusinessUnit: { logicalName: 'owningbusinessunit' },
	OwningUser: { logicalName: 'owninguser', readOnly: true },
	RegardingObjectId: { schemaName: 'RegardingObjectId', logicalName: '_regardingobjectid_value', entityCollectionName: 'contacts', entityLogicalName: 'contact' },
	StateCode: { logicalName: 'statecode', type: 'Integer' },
	StatusCode: { logicalName: 'statuscode', type: 'Integer' },
	TransactionCurrencyId: { schemaName: 'TransactionCurrencyId', logicalName: '_transactioncurrencyid_value', entityCollectionName: 'transactioncurrencies', entityLogicalName: 'transactioncurrency' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * ExternalPartyItem WebApi class for early-bound style coding
 * Usage: const externalPartyItem = new ExternalPartyItemApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class ExternalPartyItemApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IExternalPartyItemApi>(entity, 'externalpartyitem', 'externalpartyitems', ExternalPartyItemFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface ExternalPartyItemApi extends IExternalPartyItemApi { }
