/**
 * TransactionCurrency.webapi.ts - TransactionCurrency WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for TransactionCurrency
 * All fields return string representation of their values
 */
export interface ITransactionCurrencyFormattedValue {
	readonly CreatedBy: string;
	readonly CreatedOn_UtcDateAndTime: string;
	readonly CreatedOnBehalfBy: string;
	readonly CurrencyName: string;
	readonly CurrencyPrecision: string;
	readonly CurrencySymbol: string;
	readonly CurrencyType: string;
	readonly EntityImage: string;
	readonly EntityImageId: string;
	readonly ExchangeRate: string;
	readonly ImportSequenceNumber: string;
	readonly ISOCurrencyCode: string;
	readonly ModifiedBy: string;
	readonly ModifiedOn_UtcDateAndTime: string;
	readonly ModifiedOnBehalfBy: string;
	readonly OrganizationId: string;
	readonly OverriddenCreatedOn_UtcDateOnly: string;
	readonly StateCode: string;
	readonly StatusCode: string;
	readonly TransactionCurrencyId: string;
	readonly UniqueDscId: string;
	readonly VersionNumber: string;
}

/**
 * TransactionCurrency WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface ITransactionCurrencyApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: ITransactionCurrencyFormattedValue;
	/** Unique identifier of the user who created the transaction currency. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the transaction currency was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the transactioncurrency. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Name of the transaction currency. */
	CurrencyName: string | null;
	/** Number of decimal places that can be used for currency. */
	CurrencyPrecision: number | null;
	/** Symbol for the transaction currency. */
	CurrencySymbol: string | null;
	/** Currency type that can be used for new currency. */
	CurrencyType: number | null;
	/** The default image for the entity. */
	EntityImage: string | null;
	/** For internal use only. */
	readonly EntityImageId: DevKit.Guid | null;
	/** Exchange rate between the transaction currency and the base currency. */
	ExchangeRate: number | null;
	/** Unique identifier of the data import or data migration that created this record. */
	ImportSequenceNumber: number | null;
	/** ISO currency code for the transaction currency. */
	ISOCurrencyCode: string | null;
	/** Unique identifier of the user who last modified the transaction currency. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the transaction currency was last modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who last modified the transactioncurrency. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Unique identifier of the organization associated with the transaction currency. */
	readonly OrganizationId: DevKit.Guid | null;
	/** Date and time that the record was migrated. */
	OverriddenCreatedOn_UtcDateOnly: Date | null;
	/** Status of the transaction currency. */
	StateCode: number | null;
	/** Reason for the status of the transaction currency. */
	StatusCode: number | null;
	/** Unique identifier of the transaction currency. */
	TransactionCurrencyId: DevKit.Guid | null;
	/** For internal use only. */
	readonly UniqueDscId: DevKit.Guid | null;
	/** Version number of the transaction currency. */
	readonly VersionNumber: number | null;
}

const TransactionCurrencyFieldConfig: DevKit.IWebApiFieldConfigMap = {
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CurrencyName: { logicalName: 'currencyname' },
	CurrencyPrecision: { logicalName: 'currencyprecision', type: 'Integer' },
	CurrencySymbol: { logicalName: 'currencysymbol' },
	CurrencyType: { logicalName: 'currencytype', type: 'Integer' },
	EntityImage: { logicalName: 'entityimage' },
	EntityImageId: { logicalName: 'entityimageid', readOnly: true },
	ExchangeRate: { logicalName: 'exchangerate', type: 'Number' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	ISOCurrencyCode: { logicalName: 'isocurrencycode' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OrganizationId: { schemaName: 'OrganizationId', logicalName: '_organizationid_value', readOnly: true, entityCollectionName: 'organizations', entityLogicalName: 'organization' },
	OverriddenCreatedOn_UtcDateOnly: { logicalName: 'overriddencreatedon', type: 'DateTime' },
	StateCode: { logicalName: 'statecode', type: 'Integer' },
	StatusCode: { logicalName: 'statuscode', type: 'Integer' },
	TransactionCurrencyId: { logicalName: 'transactioncurrencyid' },
	UniqueDscId: { logicalName: 'uniquedscid', readOnly: true },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * TransactionCurrency WebApi class for early-bound style coding
 * Usage: const transactionCurrency = new TransactionCurrencyApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class TransactionCurrencyApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<ITransactionCurrencyApi>(entity, 'transactioncurrency', 'transactioncurrencies', TransactionCurrencyFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface TransactionCurrencyApi extends ITransactionCurrencyApi { }
