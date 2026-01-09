/**
 * AnnualFiscalCalendar.webapi.ts - AnnualFiscalCalendar WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * AnnualFiscalCalendar WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IAnnualFiscalCalendarApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<IAnnualFiscalCalendarApi, 'FormattedValue'>]: string };
	readonly BusinessUnitId: DevKit.Guid | null;
	/** Unique identifier of the user who created the quota for the annual fiscal calendar. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the quota for the annual fiscal calendar was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the annualfiscalcalendar. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Date and time when the fiscal calendar sales quota takes effect. */
	EffectiveOn_UtcDateOnly: Date | null;
	/** Exchange rate for the currency associated with the annual fiscal calendar with respect to the base currency. */
	readonly ExchangeRate: number | null;
	/** Type of fiscal period used in the sales quota. */
	readonly FiscalPeriodType: number | null;
	/** Unique identifier of the user who last modified the quota for the annual fiscal calendar. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the annual fiscal calendar was last modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who last modified the annualfiscalcalendar. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Sales quota for the first period in the fiscal year. */
	Period1: number | null;
	/** Base currency equivalent of the sales quota for the first period in the fiscal year. */
	readonly Period1_Base: number | null;
	/** Unique identifier of the sales person associated with the sales quota. */
	SalesPersonId: DevKit.Guid | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** Unique identifier of the currency associated with the annual fiscal calendar. */
	TransactionCurrencyId: DevKit.Guid | null;
	/** Unique identifier of the user associated with the annual fiscal calendar. */
	UserFiscalCalendarId: DevKit.Guid | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
}

const AnnualFiscalCalendarFieldConfig: DevKit.IWebApiFieldConfigMap = {
	BusinessUnitId: { schemaName: 'BusinessUnitId', logicalName: '_businessunitid_value', readOnly: true, entityCollectionName: 'businessunits', entityLogicalName: 'businessunit' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	EffectiveOn_UtcDateOnly: { logicalName: 'effectiveon', type: 'DateTime' },
	ExchangeRate: { logicalName: 'exchangerate', readOnly: true, type: 'Number' },
	FiscalPeriodType: { logicalName: 'fiscalperiodtype', readOnly: true, type: 'Integer' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Period1: { logicalName: 'annual', type: 'Number' },
	Period1_Base: { logicalName: 'annual_base', readOnly: true, type: 'Number' },
	SalesPersonId: { schemaName: 'SalesPersonId', logicalName: '_salespersonid_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	TimeZoneRuleVersionNumber: { logicalName: 'timezoneruleversionnumber', type: 'Integer' },
	TransactionCurrencyId: { schemaName: 'TransactionCurrencyId', logicalName: '_transactioncurrencyid_value', entityCollectionName: 'transactioncurrencies', entityLogicalName: 'transactioncurrency' },
	UserFiscalCalendarId: { logicalName: 'userfiscalcalendarid' },
	UTCConversionTimeZoneCode: { logicalName: 'utcconversiontimezonecode', type: 'Integer' },
};

/**
 * AnnualFiscalCalendar WebApi class for early-bound style coding
 * Usage: const annualFiscalCalendar = new AnnualFiscalCalendarApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class AnnualFiscalCalendarApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IAnnualFiscalCalendarApi>(entity, 'annualfiscalcalendar', 'annualfiscalcalendars', AnnualFiscalCalendarFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface AnnualFiscalCalendarApi extends IAnnualFiscalCalendarApi { }
