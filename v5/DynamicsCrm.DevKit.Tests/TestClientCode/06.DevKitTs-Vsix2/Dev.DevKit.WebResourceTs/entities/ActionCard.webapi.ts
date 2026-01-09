/**
 * ActionCard.webapi.ts - ActionCard WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * ActionCard WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IActionCardApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<IActionCardApi, 'FormattedValue'>]: string };
	/** Unique identifier of the action card. */
	ActionCardId: DevKit.Guid | null;
	/** The CardType ENUM value. */
	CardType: number | null;
	/** Unique identifier of the card type. */
	CardTypeId: DevKit.Guid | null;
	/** Unique identifier of the user who created the action card. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when action card was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the action card. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Json formatted string for generic purpose. */
	Data: string | null;
	/** Card Description */
	Description: string | null;
	/** Exchange rate for the currency associated with the action card with respect to the base currency. */
	readonly ExchangeRate: number | null;
	/** Shows the Expiry Date */
	ExpiryDate_UtcDateAndTime: Date | null;
	/** Sequence number of the import that created this record. */
	ImportSequenceNumber: number | null;
	/** Unique identifier of the user who last modified the action card. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when action card was last modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who last modified action card. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Date and time that the record was migrated. */
	OverriddenCreatedOn_UtcDateOnly: Date | null;
	/** Unique identifier of the user or team who owns the action card. */
	OwnerId: DevKit.Guid | null;
	/** Unique identifier of the business unit that owns the action card. */
	readonly OwningBusinessUnit: DevKit.Guid | null;
	/** Unique identifier of the team who owns the action card. */
	readonly OwningTeam: DevKit.Guid | null;
	/** Unique identifier of the user who owns the action card. */
	readonly OwningUser: DevKit.Guid | null;
	/** ParentRegardingObjectId of the ActionCard */
	ParentRegardingObjectId: DevKit.Guid | null;
	/** Json formatted string for parent regarding object. */
	ParentRegardingObjectIdData: string | null;
	/** Priority of the ActionCard */
	Priority: number | null;
	/** Shows the record ID. */
	RecordId: DevKit.Guid | null;
	/** RecordIdObjectTypeCode2 of the ActionCard */
	RecordIdObjectTypeCode2: number | null;
	/** For internal use only. */
	ReferenceTokens: string | null;
	/** Choose the record that the card relates to. */
	RegardingObjectId: DevKit.Guid | null;
	/** Source for the Action Card */
	Source: number | null;
	/** Shows the Start Date */
	StartDate_UtcDateAndTime: Date | null;
	/** State of the Action Card */
	State: number | null;
	/** Title of the ActionCard */
	Title: string | null;
	/** Unique identifier of the currency associated with the action card. */
	TransactionCurrencyId: DevKit.Guid | null;
	/** Version number of the action card. */
	readonly VersionNumber: number | null;
	/** Select whether the visibility should be set to public/private. */
	Visibility: boolean | null;
}

const ActionCardFieldConfig: DevKit.IWebApiFieldConfigMap = {
	ActionCardId: { logicalName: 'actioncardid' },
	CardType: { logicalName: 'cardtype', type: 'Integer' },
	CardTypeId: { schemaName: 'CardTypeId', logicalName: '_cardtypeid_value', entityCollectionName: 'cardtypes', entityLogicalName: 'cardtype' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Data: { logicalName: 'data' },
	Description: { logicalName: 'description' },
	ExchangeRate: { logicalName: 'exchangerate', readOnly: true, type: 'Number' },
	ExpiryDate_UtcDateAndTime: { logicalName: 'expirydate', type: 'DateTime' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OverriddenCreatedOn_UtcDateOnly: { logicalName: 'overriddencreatedon', type: 'DateTime' },
	OwnerId: { schemaName: 'OwnerId', logicalName: '_ownerid_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OwningBusinessUnit: { schemaName: 'OwningBusinessUnit', logicalName: '_owningbusinessunit_value', readOnly: true, entityCollectionName: 'businessunits', entityLogicalName: 'businessunit' },
	OwningTeam: { schemaName: 'OwningTeam', logicalName: '_owningteam_value', readOnly: true, entityCollectionName: 'teams', entityLogicalName: 'team' },
	OwningUser: { schemaName: 'OwningUser', logicalName: '_owninguser_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ParentRegardingObjectId: { logicalName: 'parentregardingobjectid' },
	ParentRegardingObjectIdData: { logicalName: 'parentregardingobjectiddata' },
	Priority: { logicalName: 'priority', type: 'Integer' },
	RecordId: { logicalName: 'recordid' },
	RecordIdObjectTypeCode2: { logicalName: 'recordidobjecttypecode2', type: 'Integer' },
	ReferenceTokens: { logicalName: 'referencetokens' },
	RegardingObjectId: { schemaName: 'RegardingObjectId', logicalName: '_regardingobjectid_value', entityCollectionName: 'accounts', entityLogicalName: 'account' },
	Source: { logicalName: 'source', type: 'Integer' },
	StartDate_UtcDateAndTime: { logicalName: 'startdate', type: 'DateTime' },
	State: { logicalName: 'state', type: 'Integer' },
	Title: { logicalName: 'title' },
	TransactionCurrencyId: { schemaName: 'TransactionCurrencyId', logicalName: '_transactioncurrencyid_value', entityCollectionName: 'transactioncurrencies', entityLogicalName: 'transactioncurrency' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
	Visibility: { logicalName: 'visibility', type: 'Boolean' },
};

/**
 * ActionCard WebApi class for early-bound style coding
 * Usage: const actionCard = new ActionCardApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class ActionCardApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IActionCardApi>(entity, 'actioncard', 'actioncard', ActionCardFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface ActionCardApi extends IActionCardApi { }
