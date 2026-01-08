/**
 * CardType.webapi.ts - CardType WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * CardType WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface ICardTypeApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<ICardTypeApi, 'FormattedValue'>]: string };
	/** For internal use only. */
	Actions: string | null;
	/** AdaptiveCard template. */
	AdaptiveCardTemplate: string | null;
	/** Bolean option for a cardtype. */
	BoolCardOption: boolean | null;
	/** The name of the custom entity. */
	CardName: string | null;
	/** The CardType ENUM value. */
	CardType2: number | null;
	/** The CardTypeIcon of the card. */
	CardTypeIcon: string | null;
	/** Unique identifier for entity instances */
	CardTypeId: DevKit.Guid | null;
	/** Determines on which client is this card available on. */
	ClientAvailability: number | null;
	/** Unique identifier of the user who created the record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the record was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the record. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Exchange rate for the currency associated with the CardType with respect to the base currency. */
	readonly ExchangeRate: number | null;
	/** GroupCategory dictates the grouping of cards in the Assistant. */
	GroupCategory: number | null;
	/** Specifies the card group type */
	GroupType: string | null;
	/** Specifies if the card type has snooze dismiss */
	HasSnoozeDismiss: boolean | null;
	/** Sequence number of the import that created this record. */
	ImportSequenceNumber: number | null;
	/** Any int option for a cardtype. */
	IntCardOption: number | null;
	/** IsBaseCard */
	IsBaseCard: boolean | null;
	/** IsEnabled */
	IsEnabled: boolean | null;
	/** IsLiveOnly */
	IsLiveOnly: boolean | null;
	/** IsPreviewCard */
	IsPreviewCard: boolean | null;
	/** This column is updated by the Plugin based on the last fetched data. */
	LastSyncTime_UtcDateAndTime: Date | null;
	/** Unique identifier of the user who modified the record. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the record was modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who modified the record. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Date and time that the record was migrated. */
	OverriddenCreatedOn_UtcDateOnly: Date | null;
	/** The Priority of the CardType */
	Priority: number | null;
	/** The publisher name of card type */
	PublisherName: string | null;
	/** This column is updated by the Plugin based on the last fetched data. */
	ScheduleTime_TimezoneDateAndTime: Date | null;
	/** The soft title of the card. */
	SoftTitle: string | null;
	/** Any string option for a cardtype. */
	StringCardOption: string | null;
	/** The summary text of the card. */
	SummaryText: string | null;
	/** Exchange rate for the currency associated with the CardType with respect to the base currency. */
	TransactionCurrencyId: DevKit.Guid | null;
	readonly VersionNumber: number | null;
}

const CardTypeFieldConfig: DevKit.IWebApiFieldConfigMap = {
	Actions: { logicalName: 'actions' },
	AdaptiveCardTemplate: { logicalName: 'adaptivecardtemplate' },
	BoolCardOption: { logicalName: 'boolcardoption', type: 'Boolean' },
	CardName: { logicalName: 'cardname' },
	CardType2: { logicalName: 'cardtype', type: 'Integer' },
	CardTypeIcon: { logicalName: 'cardtypeicon' },
	CardTypeId: { logicalName: 'cardtypeid' },
	ClientAvailability: { logicalName: 'clientavailability', type: 'Integer' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ExchangeRate: { logicalName: 'exchangerate', readOnly: true, type: 'Number' },
	GroupCategory: { logicalName: 'groupcategory', type: 'Integer' },
	GroupType: { logicalName: 'grouptype' },
	HasSnoozeDismiss: { logicalName: 'hassnoozedismiss', type: 'Boolean' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	IntCardOption: { logicalName: 'intcardoption', type: 'Integer' },
	IsBaseCard: { logicalName: 'isbasecard', type: 'Boolean' },
	IsEnabled: { logicalName: 'isenabled', type: 'Boolean' },
	IsLiveOnly: { logicalName: 'isliveonly', type: 'Boolean' },
	IsPreviewCard: { logicalName: 'ispreviewcard', type: 'Boolean' },
	LastSyncTime_UtcDateAndTime: { logicalName: 'lastsynctime', type: 'DateTime' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OverriddenCreatedOn_UtcDateOnly: { logicalName: 'overriddencreatedon', type: 'DateTime' },
	Priority: { logicalName: 'priority', type: 'Integer' },
	PublisherName: { logicalName: 'publishername' },
	ScheduleTime_TimezoneDateAndTime: { logicalName: 'scheduletime', type: 'DateTime' },
	SoftTitle: { logicalName: 'softtitle' },
	StringCardOption: { logicalName: 'stringcardoption' },
	SummaryText: { logicalName: 'summarytext' },
	TransactionCurrencyId: { schemaName: 'TransactionCurrencyId', logicalName: '_transactioncurrencyid_value', entityCollectionName: 'transactioncurrencies', entityLogicalName: 'transactioncurrency' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * CardType WebApi class for early-bound style coding
 * Usage: const cardType = new CardTypeApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class CardTypeApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<ICardTypeApi>(entity, 'cardtype', 'cardtypes', CardTypeFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface CardTypeApi extends ICardTypeApi { }
