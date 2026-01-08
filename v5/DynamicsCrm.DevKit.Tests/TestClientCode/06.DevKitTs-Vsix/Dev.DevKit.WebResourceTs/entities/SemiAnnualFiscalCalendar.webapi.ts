/**
 * SemiAnnualFiscalCalendar.webapi.ts - SemiAnnualFiscalCalendar WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * SemiAnnualFiscalCalendar WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface ISemiAnnualFiscalCalendarApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<ISemiAnnualFiscalCalendarApi, 'FormattedValue'>]: string };
	/** Unique identifier of the business unit with which the calendar is associated. */
	readonly BusinessUnitId: DevKit.Guid | null;
	/** Unique identifier of the user who created the semiannual fiscal calendar. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the quota for the semiannual fiscal calendar was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the semiannualfiscalcalendar. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Date and time when the semiannual fiscal calendar sales quota takes effect. */
	EffectiveOn_UtcDateOnly: Date | null;
	/** Exchange rate for the currency associated with the semiannual fiscal calendar with respect to the base currency. */
	readonly ExchangeRate: number | null;
	/** Type of fiscal period used in the sales quota. */
	readonly FiscalPeriodType: number | null;
	/** Unique identifier of the data import or data migration that created this record. */
	ImportSequenceNumber: number | null;
	/** Unique identifier of the user who last modified the semiannual fiscal calendar. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the semiannual fiscal calendar was last modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who last modified the semiannualfiscalcalendar. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Sales quota for the first half of the fiscal year. */
	Period1: number | null;
	/** Base currency equivalent for the sales quota for the first half of the fiscal year. */
	readonly Period1_Base: number | null;
	/** Sales quota for the second half of the fiscal year. */
	Period7: number | null;
	/** Base currency equivalent of the sales quota for the second half of the fiscal year. */
	readonly Period7_Base: number | null;
	/** Unique identifier of the associated salesperson. */
	SalesPersonId: DevKit.Guid | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** Unique identifier of the currency associated with the semiannual fiscal calendar. */
	TransactionCurrencyId: DevKit.Guid | null;
	/** Unique identifier for the user who created the semiannual fiscal calendar. */
	UserFiscalCalendarId: DevKit.Guid | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
}

const SemiAnnualFiscalCalendarFieldConfig: DevKit.IWebApiFieldConfigMap = {
	BusinessUnitId: { schemaName: 'BusinessUnitId', logicalName: '_businessunitid_value', readOnly: true, entityCollectionName: 'businessunits', entityLogicalName: 'businessunit' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	EffectiveOn_UtcDateOnly: { logicalName: 'effectiveon', type: 'DateTime' },
	ExchangeRate: { logicalName: 'exchangerate', readOnly: true, type: 'Number' },
	FiscalPeriodType: { logicalName: 'fiscalperiodtype', readOnly: true, type: 'Integer' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Period1: { logicalName: 'firsthalf', type: 'Number' },
	Period1_Base: { logicalName: 'firsthalf_base', readOnly: true, type: 'Number' },
	Period7: { logicalName: 'secondhalf', type: 'Number' },
	Period7_Base: { logicalName: 'secondhalf_base', readOnly: true, type: 'Number' },
	SalesPersonId: { schemaName: 'SalesPersonId', logicalName: '_salespersonid_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	TimeZoneRuleVersionNumber: { logicalName: 'timezoneruleversionnumber', type: 'Integer' },
	TransactionCurrencyId: { schemaName: 'TransactionCurrencyId', logicalName: '_transactioncurrencyid_value', entityCollectionName: 'transactioncurrencies', entityLogicalName: 'transactioncurrency' },
	UserFiscalCalendarId: { logicalName: 'userfiscalcalendarid' },
	UTCConversionTimeZoneCode: { logicalName: 'utcconversiontimezonecode', type: 'Integer' },
};

/**
 * SemiAnnualFiscalCalendar WebApi class for early-bound style coding
 * Usage: const semiAnnualFiscalCalendar = new SemiAnnualFiscalCalendarApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class SemiAnnualFiscalCalendarApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<ISemiAnnualFiscalCalendarApi>(entity, 'semiannualfiscalcalendar', 'semiannualfiscalcalendars', SemiAnnualFiscalCalendarFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface SemiAnnualFiscalCalendarApi extends ISemiAnnualFiscalCalendarApi { }
