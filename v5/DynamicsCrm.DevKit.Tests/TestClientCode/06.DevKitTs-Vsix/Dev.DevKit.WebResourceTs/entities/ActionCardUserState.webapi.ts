/**
 * ActionCardUserState.webapi.ts - ActionCardUserState WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * ActionCardUserState WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IActionCardUserStateApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<IActionCardUserStateApi, 'FormattedValue'>]: string };
	/** Parent ActionCard Id. */
	ActionCardId: DevKit.Guid | null;
	/** Unique identifier for entity instances */
	ActionCardUserStateId: DevKit.Guid | null;
	/** Exchange rate for the currency associated with the ActionCardUserState with respect to the base currency. */
	readonly ExchangeRate: number | null;
	/** Unique identifier of the user or team who owns the state of this action card. */
	OwnerId: DevKit.Guid | null;
	/** Unique identifier for the business unit that owns the record */
	readonly OwningBusinessUnit: DevKit.Guid | null;
	/** Shows the Start Date */
	StartDate_UtcDateAndTime: Date | null;
	/** State of the Action Card */
	State: number | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** Exchange rate for the currency associated with the ActionCardUserState with respect to the base currency. */
	TransactionCurrencyId: DevKit.Guid | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
	readonly VersionNumber: number | null;
}

const ActionCardUserStateFieldConfig: DevKit.IWebApiFieldConfigMap = {
	ActionCardId: { schemaName: 'ActionCardId', logicalName: '_actioncardid_value', entityCollectionName: 'actioncard', entityLogicalName: 'actioncard' },
	ActionCardUserStateId: { logicalName: 'actioncarduserstateid' },
	ExchangeRate: { logicalName: 'exchangerate', readOnly: true, type: 'Number' },
	OwnerId: { schemaName: 'OwnerId', logicalName: '_ownerid_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OwningBusinessUnit: { schemaName: 'OwningBusinessUnit', logicalName: '_owningbusinessunit_value', readOnly: true, entityCollectionName: 'actioncard', entityLogicalName: 'actioncard' },
	StartDate_UtcDateAndTime: { logicalName: 'startdate', type: 'DateTime' },
	State: { logicalName: 'state', type: 'Integer' },
	TimeZoneRuleVersionNumber: { logicalName: 'timezoneruleversionnumber', type: 'Integer' },
	TransactionCurrencyId: { schemaName: 'TransactionCurrencyId', logicalName: '_transactioncurrencyid_value', entityCollectionName: 'transactioncurrencies', entityLogicalName: 'transactioncurrency' },
	UTCConversionTimeZoneCode: { logicalName: 'utcconversiontimezonecode', type: 'Integer' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * ActionCardUserState WebApi class for early-bound style coding
 * Usage: const actionCardUserState = new ActionCardUserStateApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class ActionCardUserStateApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IActionCardUserStateApi>(entity, 'actioncarduserstate', 'actioncarduserstates', ActionCardUserStateFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface ActionCardUserStateApi extends IActionCardUserStateApi { }
