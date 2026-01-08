/**
 * MonthlyFiscalCalendar.webapi.ts - MonthlyFiscalCalendar WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for MonthlyFiscalCalendar
 * All fields return string representation of their values
 */
export interface IMonthlyFiscalCalendarFormattedValue {
	readonly BusinessUnitId: string;
	readonly CreatedBy: string;
	readonly CreatedOn_UtcDateAndTime: string;
	readonly CreatedOnBehalfBy: string;
	readonly EffectiveOn_UtcDateOnly: string;
	readonly ExchangeRate: string;
	readonly FiscalPeriodType: string;
	readonly ModifiedBy: string;
	readonly ModifiedOn_UtcDateAndTime: string;
	readonly ModifiedOnBehalfBy: string;
	readonly Period1: string;
	readonly Period1_Base: string;
	readonly Period10: string;
	readonly Period10_Base: string;
	readonly Period11: string;
	readonly Period11_Base: string;
	readonly Period12: string;
	readonly Period12_Base: string;
	readonly Period2: string;
	readonly Period2_Base: string;
	readonly Period3: string;
	readonly Period3_Base: string;
	readonly Period4: string;
	readonly Period4_Base: string;
	readonly Period5: string;
	readonly Period5_Base: string;
	readonly Period6: string;
	readonly Period6_Base: string;
	readonly Period7: string;
	readonly Period7_Base: string;
	readonly Period8: string;
	readonly Period8_Base: string;
	readonly Period9: string;
	readonly Period9_Base: string;
	readonly SalesPersonId: string;
	readonly TimeZoneRuleVersionNumber: string;
	readonly TransactionCurrencyId: string;
	readonly UserFiscalCalendarId: string;
	readonly UTCConversionTimeZoneCode: string;
}

/**
 * MonthlyFiscalCalendar WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IMonthlyFiscalCalendarApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: IMonthlyFiscalCalendarFormattedValue;
	readonly BusinessUnitId: DevKit.Guid | null;
	/** Unique identifier of the user who created the fiscal calendar. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the quota for the monthly fiscal calendar was modified. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the monthlyfiscalcalendar. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Date and time when the monthly fiscal calendar sales quota takes effect. */
	EffectiveOn_UtcDateOnly: Date | null;
	/** Exchange rate for the currency associated with the monthly fiscal calendar with respect to the base currency. */
	readonly ExchangeRate: number | null;
	/** Type of fiscal period used in the sales quota. */
	readonly FiscalPeriodType: number | null;
	/** Unique identifier of the user who last modified the quota for the monthly fiscal calendar. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the quota for the monthly fiscal calendar was last modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who last modified the monthlyfiscalcalendar. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Sales quota for the first month in the fiscal year. */
	Period1: number | null;
	/** Base currency equivalent of the sales quota for the first month in the fiscal year. */
	readonly Period1_Base: number | null;
	/** Sales quota for the tenth month in the fiscal year. */
	Period10: number | null;
	/** Base currency equivalent of the sales quota for the tenth month in the fiscal year. */
	readonly Period10_Base: number | null;
	/** Sales quota for the eleventh month in the fiscal year. */
	Period11: number | null;
	/** Base currency equivalent of the sales quota for the eleventh month in the fiscal year. */
	readonly Period11_Base: number | null;
	/** Sales quota for the twelfth month in the fiscal year. */
	Period12: number | null;
	/** Base currency equivalent of the sales quota for the twelfth month in the fiscal year. */
	readonly Period12_Base: number | null;
	/** Sales quota for the second month in the fiscal year. */
	Period2: number | null;
	/** Base currency equivalent of the sales quota for the second month in the fiscal year. */
	readonly Period2_Base: number | null;
	/** Sales quota for the third month in the fiscal year. */
	Period3: number | null;
	/** Base currency equivalent of the sales quota for the third month in the fiscal year. */
	readonly Period3_Base: number | null;
	/** Sales quota for the fourth month in the fiscal year. */
	Period4: number | null;
	/** Base currency equivalent of the sales quota for the fourth month in the fiscal year. */
	readonly Period4_Base: number | null;
	/** Sales quota for the fifth month in the fiscal year. */
	Period5: number | null;
	/** Base currency equivalent of the sales quota for the fifth month in the fiscal year. */
	readonly Period5_Base: number | null;
	/** Sales quota for the sixth month in the fiscal year. */
	Period6: number | null;
	/** Base currency equivalent of the sales quota for the sixth month in the fiscal year. */
	readonly Period6_Base: number | null;
	/** Sales quota for the seventh month in the fiscal year. */
	Period7: number | null;
	/** Base currency equivalent of the sales quota for the seventh month in the fiscal year. */
	readonly Period7_Base: number | null;
	/** Sales quota for the eighth month in the fiscal year. */
	Period8: number | null;
	/** Base currency equivalent of the sales quota for the eighth month in the fiscal year. */
	readonly Period8_Base: number | null;
	/** Sales quota for the ninth month in the fiscal year. */
	Period9: number | null;
	/** Base currency equivalent of the sales quota for the ninth month in the fiscal year. */
	readonly Period9_Base: number | null;
	/** Unique identifier of the associated salesperson. */
	SalesPersonId: DevKit.Guid | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** Unique identifier of the currency associated with the monthly fiscal calendar. */
	TransactionCurrencyId: DevKit.Guid | null;
	/** Unique identifier of the monthly fiscal calendar. */
	UserFiscalCalendarId: DevKit.Guid | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
}

const MonthlyFiscalCalendarFieldConfig: DevKit.IWebApiFieldConfigMap = {
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
	Period1: { logicalName: 'month1', type: 'Number' },
	Period1_Base: { logicalName: 'month1_base', readOnly: true, type: 'Number' },
	Period10: { logicalName: 'month10', type: 'Number' },
	Period10_Base: { logicalName: 'month10_base', readOnly: true, type: 'Number' },
	Period11: { logicalName: 'month11', type: 'Number' },
	Period11_Base: { logicalName: 'month11_base', readOnly: true, type: 'Number' },
	Period12: { logicalName: 'month12', type: 'Number' },
	Period12_Base: { logicalName: 'month12_base', readOnly: true, type: 'Number' },
	Period2: { logicalName: 'month2', type: 'Number' },
	Period2_Base: { logicalName: 'month2_base', readOnly: true, type: 'Number' },
	Period3: { logicalName: 'month3', type: 'Number' },
	Period3_Base: { logicalName: 'month3_base', readOnly: true, type: 'Number' },
	Period4: { logicalName: 'month4', type: 'Number' },
	Period4_Base: { logicalName: 'month4_base', readOnly: true, type: 'Number' },
	Period5: { logicalName: 'month5', type: 'Number' },
	Period5_Base: { logicalName: 'month5_base', readOnly: true, type: 'Number' },
	Period6: { logicalName: 'month6', type: 'Number' },
	Period6_Base: { logicalName: 'month6_base', readOnly: true, type: 'Number' },
	Period7: { logicalName: 'month7', type: 'Number' },
	Period7_Base: { logicalName: 'month7_base', readOnly: true, type: 'Number' },
	Period8: { logicalName: 'month8', type: 'Number' },
	Period8_Base: { logicalName: 'month8_base', readOnly: true, type: 'Number' },
	Period9: { logicalName: 'month9', type: 'Number' },
	Period9_Base: { logicalName: 'month9_base', readOnly: true, type: 'Number' },
	SalesPersonId: { schemaName: 'SalesPersonId', logicalName: '_salespersonid_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	TimeZoneRuleVersionNumber: { logicalName: 'timezoneruleversionnumber', type: 'Integer' },
	TransactionCurrencyId: { schemaName: 'TransactionCurrencyId', logicalName: '_transactioncurrencyid_value', entityCollectionName: 'transactioncurrencies', entityLogicalName: 'transactioncurrency' },
	UserFiscalCalendarId: { logicalName: 'userfiscalcalendarid' },
	UTCConversionTimeZoneCode: { logicalName: 'utcconversiontimezonecode', type: 'Integer' },
};

/**
 * MonthlyFiscalCalendar WebApi class for early-bound style coding
 * Usage: const monthlyFiscalCalendar = new MonthlyFiscalCalendarApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class MonthlyFiscalCalendarApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IMonthlyFiscalCalendarApi>(entity, 'monthlyfiscalcalendar', 'monthlyfiscalcalendars', MonthlyFiscalCalendarFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface MonthlyFiscalCalendarApi extends IMonthlyFiscalCalendarApi { }
