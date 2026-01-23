/**
 * SuggestionCardTemplate.webapi.ts - SuggestionCardTemplate WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * SuggestionCardTemplate WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface ISuggestionCardTemplateApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<ISuggestionCardTemplateApi, 'FormattedValue'>]: string };
	/** Unique identifier of the user who created the record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the record was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the record. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Exchange rate for the currency associated with the suggestioncardtemplate with respect to the base currency. */
	readonly ExchangeRate: number | null;
	/** Unique identifier of the user who modified the record. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the record was modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who modified the record. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** The name of the custom entity. */
	name: string | null;
	/** Unique identifier for the organization */
	readonly OrganizationId: DevKit.Guid | null;
	/** For internal use only. */
	StructuredLayout: string | null;
	/** Unique identifier for entity instances */
	SuggestionCardTemplateId: DevKit.Guid | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** Exchange rate for the currency associated with the suggestioncardtemplate with respect to the base currency. */
	TransactionCurrencyId: DevKit.Guid | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
}

const SuggestionCardTemplateFieldConfig: DevKit.IWebApiFieldConfigMap = {
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ExchangeRate: { logicalName: 'exchangerate', readOnly: true, type: 'Number' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	name: { logicalName: 'name' },
	OrganizationId: { schemaName: 'OrganizationId', logicalName: '_organizationid_value', readOnly: true, entityCollectionName: 'organizations', entityLogicalName: 'organization' },
	StructuredLayout: { logicalName: 'structuredlayout' },
	SuggestionCardTemplateId: { logicalName: 'suggestioncardtemplateid' },
	TimeZoneRuleVersionNumber: { logicalName: 'timezoneruleversionnumber', type: 'Integer' },
	TransactionCurrencyId: { schemaName: 'TransactionCurrencyId', logicalName: '_transactioncurrencyid_value', entityCollectionName: 'transactioncurrencies', entityLogicalName: 'transactioncurrency' },
	UTCConversionTimeZoneCode: { logicalName: 'utcconversiontimezonecode', type: 'Integer' },
};

/**
 * SuggestionCardTemplate WebApi class for early-bound style coding
 * Usage: const suggestionCardTemplate = new SuggestionCardTemplateApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class SuggestionCardTemplateApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<ISuggestionCardTemplateApi>(entity, 'suggestioncardtemplate', 'suggestioncardtemplates', SuggestionCardTemplateFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface SuggestionCardTemplateApi extends ISuggestionCardTemplateApi { }
