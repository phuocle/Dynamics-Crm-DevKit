/**
 * QuarterlyFiscalCalendar.webapi.ts - QuarterlyFiscalCalendar WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for QuarterlyFiscalCalendar
 * All fields return string representation of their values
 */
export interface IQuarterlyFiscalCalendarFormattedValue {
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
	readonly Period4: string;
	readonly Period4_Base: string;
	readonly Period7: string;
	readonly Period7_Base: string;
	readonly SalesPersonId: string;
	readonly TimeZoneRuleVersionNumber: string;
	readonly TransactionCurrencyId: string;
	readonly UserFiscalCalendarId: string;
	readonly UTCConversionTimeZoneCode: string;
}

/**
 * QuarterlyFiscalCalendar WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IQuarterlyFiscalCalendarApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: IQuarterlyFiscalCalendarFormattedValue;
	readonly BusinessUnitId: DevKit.Guid | null;
	/** Unique identifier of the user who created the quarterly fiscal calendar. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the quota for the quarterly fiscal calendar was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the quarterlyfiscalcalendar. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Date and time when the quarterly fiscal calendar sales quota takes effect. */
	EffectiveOn_UtcDateOnly: Date | null;
	/** Exchange rate for the currency associated with the quarterly fiscal calendar with respect to the base currency. */
	readonly ExchangeRate: number | null;
	/** Type of fiscal period used in the sales quota. */
	readonly FiscalPeriodType: number | null;
	/** Unique identifier of the user who last modified the quarterly fiscal calendar. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the quarterly fiscal calendar was last modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who last modified the quarterlyfiscalcalendar. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Sales quota for the first quarter in the fiscal year. */
	Period1: number | null;
	/** Base currency equivalent of the sales quota for the first quarter in the fiscal year. */
	readonly Period1_Base: number | null;
	/** Sales quota for the fourth quarter in the fiscal year. */
	Period10: number | null;
	/** Base currency equivalent of the sales quota for the fourth quarter in the fiscal year. */
	readonly Period10_Base: number | null;
	/** Sales quota for the second quarter in the fiscal year. */
	Period4: number | null;
	/** Base currency equivalent of the sales quota for the second quarter in the fiscal year */
	readonly Period4_Base: number | null;
	/** Sales quota for the third quarter in the fiscal year. */
	Period7: number | null;
	/** Base currency equivalent of the sales quota for the third quarter in the fiscal year. */
	readonly Period7_Base: number | null;
	/** Unique identifier of the associated salesperson. */
	SalesPersonId: DevKit.Guid | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** Unique identifier of the currency associated with the quarterly fiscal calendar. */
	TransactionCurrencyId: DevKit.Guid | null;
	/** Unique identifier of the quarterly fiscal calendar. */
	UserFiscalCalendarId: DevKit.Guid | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
}

const QuarterlyFiscalCalendarFieldConfig: DevKit.IWebApiFieldConfigMap = {
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
	Period1: { logicalName: 'quarter1', type: 'Number' },
	Period1_Base: { logicalName: 'quarter1_base', readOnly: true, type: 'Number' },
	Period10: { logicalName: 'quarter4', type: 'Number' },
	Period10_Base: { logicalName: 'quarter4_base', readOnly: true, type: 'Number' },
	Period4: { logicalName: 'quarter2', type: 'Number' },
	Period4_Base: { logicalName: 'quarter2_base', readOnly: true, type: 'Number' },
	Period7: { logicalName: 'quarter3', type: 'Number' },
	Period7_Base: { logicalName: 'quarter3_base', readOnly: true, type: 'Number' },
	SalesPersonId: { schemaName: 'SalesPersonId', logicalName: '_salespersonid_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	TimeZoneRuleVersionNumber: { logicalName: 'timezoneruleversionnumber', type: 'Integer' },
	TransactionCurrencyId: { schemaName: 'TransactionCurrencyId', logicalName: '_transactioncurrencyid_value', entityCollectionName: 'transactioncurrencies', entityLogicalName: 'transactioncurrency' },
	UserFiscalCalendarId: { logicalName: 'userfiscalcalendarid' },
	UTCConversionTimeZoneCode: { logicalName: 'utcconversiontimezonecode', type: 'Integer' },
};

/**
 * QuarterlyFiscalCalendar WebApi class for early-bound style coding
 * Usage: const quarterlyFiscalCalendar = new QuarterlyFiscalCalendarApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class QuarterlyFiscalCalendarApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IQuarterlyFiscalCalendarApi>(entity, 'quarterlyfiscalcalendar', 'quarterlyfiscalcalendars', QuarterlyFiscalCalendarFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface QuarterlyFiscalCalendarApi extends IQuarterlyFiscalCalendarApi { }
