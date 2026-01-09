/**
 * UserFiscalCalendar.webapi.ts - UserFiscalCalendar WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * UserFiscalCalendar WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IUserFiscalCalendarApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<IUserFiscalCalendarApi, 'FormattedValue'>]: string };
	/** Unique identifier of the business unit with which the user fiscal calendar is associated. */
	readonly BusinessUnitId: DevKit.Guid | null;
	/** Unique identifier of the user who created the fiscal calendar. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the fiscal calendar was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the userfiscalcalendar. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Date and time when the fiscal calendar takes effect. */
	EffectiveOn_UtcDateOnly: Date | null;
	/** Exchange rate for the currency associated with the user fiscal calendar with respect to the base currency. */
	readonly ExchangeRate: number | null;
	/** Type of fiscal period used in the fiscal calendar. */
	readonly FiscalPeriodType: number | null;
	/** Unique identifier of the data import or data migration that created this record. */
	ImportSequenceNumber: number | null;
	/** Unique identifier of the user who last modified the fiscal calendar. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the fiscal calendar was last modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who last modified the userfiscalcalendar. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Sales quota for the first period in the fiscal year. */
	Period1: number | null;
	/** Base currency equivalent of the sales quota for the first period in the fiscal year. */
	readonly Period1_Base: number | null;
	/** Sales quota for the tenth period in the fiscal year. */
	Period10: number | null;
	/** Base currency equivalent of the sales quota for the tenth period in the fiscal year. */
	readonly Period10_Base: number | null;
	/** Sales quota for the eleventh period in the fiscal year. */
	Period11: number | null;
	/** Base currency equivalent of the sales quota for the eleventh period in the fiscal year. */
	readonly Period11_Base: number | null;
	/** Sales quota for the twelfth period in the fiscal year. */
	Period12: number | null;
	/** Base currency equivalent of the sales quota for the twelfth period in the fiscal year. */
	readonly Period12_Base: number | null;
	/** Sales quota for the thirteenth period in the fiscal year. */
	Period13: number | null;
	/** Base currency equivalent of the sales quota for the thirteenth period in the fiscal year. */
	readonly Period13_Base: number | null;
	/** Sales quota for the second period in the fiscal year. */
	Period2: number | null;
	/** Base currency equivalent of the sales quota for the second period in the fiscal year. */
	readonly Period2_Base: number | null;
	/** Sales quota for the third period in the fiscal year. */
	Period3: number | null;
	/** Base currency equivalent of the sales quota for the third period in the fiscal year. */
	readonly Period3_Base: number | null;
	/** Sales quota for the fourth period in the fiscal year. */
	Period4: number | null;
	/** Base currency equivalent of the sales quota for the fourth period in the fiscal year. */
	readonly Period4_Base: number | null;
	/** Sales quota for the fifth period in the fiscal year. */
	Period5: number | null;
	/** Base currency equivalent of the sales quota for the fifth period in the fiscal year. */
	readonly Period5_Base: number | null;
	/** Sales quota for the sixth period in the fiscal year. */
	Period6: number | null;
	/** Base currency equivalent of the sales quota for the sixth period in the fiscal year. */
	readonly Period6_Base: number | null;
	/** Sales quota for the seventh period in the fiscal year. */
	Period7: number | null;
	/** Base currency equivalent of the sales quota for the seventh period in the fiscal year. */
	readonly Period7_Base: number | null;
	/** Sales quota for the eighth period in the fiscal year. */
	Period8: number | null;
	/** Base currency equivalent of the sales quota for the eighth period in the fiscal year. */
	readonly Period8_Base: number | null;
	/** Sales quota for the ninth period in the fiscal year. */
	Period9: number | null;
	/** Base currency equivalent of the sales quota for the ninth period in the fiscal year. */
	readonly Period9_Base: number | null;
	/** Unique identifier of the salesperson to whom the fiscal calendar is assigned. */
	SalesPersonId: DevKit.Guid | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** Unique identifier of the currency associated with the user fiscal calendar. */
	TransactionCurrencyId: DevKit.Guid | null;
	/** Unique identifier for the fiscal calendar. */
	UserFiscalCalendarId: DevKit.Guid | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
}

const UserFiscalCalendarFieldConfig: DevKit.IWebApiFieldConfigMap = {
	BusinessUnitId: { logicalName: 'businessunitid', readOnly: true },
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
	Period1: { logicalName: 'period1', type: 'Number' },
	Period1_Base: { logicalName: 'period1_base', readOnly: true, type: 'Number' },
	Period10: { logicalName: 'period10', type: 'Number' },
	Period10_Base: { logicalName: 'period10_base', readOnly: true, type: 'Number' },
	Period11: { logicalName: 'period11', type: 'Number' },
	Period11_Base: { logicalName: 'period11_base', readOnly: true, type: 'Number' },
	Period12: { logicalName: 'period12', type: 'Number' },
	Period12_Base: { logicalName: 'period12_base', readOnly: true, type: 'Number' },
	Period13: { logicalName: 'period13', type: 'Number' },
	Period13_Base: { logicalName: 'period13_base', readOnly: true, type: 'Number' },
	Period2: { logicalName: 'period2', type: 'Number' },
	Period2_Base: { logicalName: 'period2_base', readOnly: true, type: 'Number' },
	Period3: { logicalName: 'period3', type: 'Number' },
	Period3_Base: { logicalName: 'period3_base', readOnly: true, type: 'Number' },
	Period4: { logicalName: 'period4', type: 'Number' },
	Period4_Base: { logicalName: 'period4_base', readOnly: true, type: 'Number' },
	Period5: { logicalName: 'period5', type: 'Number' },
	Period5_Base: { logicalName: 'period5_base', readOnly: true, type: 'Number' },
	Period6: { logicalName: 'period6', type: 'Number' },
	Period6_Base: { logicalName: 'period6_base', readOnly: true, type: 'Number' },
	Period7: { logicalName: 'period7', type: 'Number' },
	Period7_Base: { logicalName: 'period7_base', readOnly: true, type: 'Number' },
	Period8: { logicalName: 'period8', type: 'Number' },
	Period8_Base: { logicalName: 'period8_base', readOnly: true, type: 'Number' },
	Period9: { logicalName: 'period9', type: 'Number' },
	Period9_Base: { logicalName: 'period9_base', readOnly: true, type: 'Number' },
	SalesPersonId: { schemaName: 'SalesPersonId', logicalName: '_salespersonid_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	TimeZoneRuleVersionNumber: { logicalName: 'timezoneruleversionnumber', type: 'Integer' },
	TransactionCurrencyId: { schemaName: 'TransactionCurrencyId', logicalName: '_transactioncurrencyid_value', entityCollectionName: 'transactioncurrencies', entityLogicalName: 'transactioncurrency' },
	UserFiscalCalendarId: { logicalName: 'userfiscalcalendarid' },
	UTCConversionTimeZoneCode: { logicalName: 'utcconversiontimezonecode', type: 'Integer' },
};

/**
 * UserFiscalCalendar WebApi class for early-bound style coding
 * Usage: const userFiscalCalendar = new UserFiscalCalendarApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class UserFiscalCalendarApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IUserFiscalCalendarApi>(entity, 'userfiscalcalendar', 'userfiscalcalendars', UserFiscalCalendarFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface UserFiscalCalendarApi extends IUserFiscalCalendarApi { }
