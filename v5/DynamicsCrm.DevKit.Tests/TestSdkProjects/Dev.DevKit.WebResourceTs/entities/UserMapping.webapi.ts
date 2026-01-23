/**
 * UserMapping.webapi.ts - UserMapping WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * UserMapping WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IUserMappingApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<IUserMappingApi, 'FormattedValue'>]: string };
	/** The Claim Type */
	ClaimType: string | null;
	/** Unique identifier of the user who created the record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the record was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the record. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Exchange rate for the currency associated with the UserMapping with respect to the base currency. */
	readonly ExchangeRate: number | null;
	/** Unique identifier of the user who modified the record. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the record was modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who modified the record. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Unique identifier for the organization */
	readonly OrganizationId: DevKit.Guid | null;
	/** The partner application for which this claim mapping is to be used. (exchange or sharepoint) */
	PartnerApplicationType: number | null;
	/** The user attribute. */
	SystemUserAttributeName: string | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** Exchange rate for the currency associated with the UserMapping with respect to the base currency. */
	TransactionCurrencyId: DevKit.Guid | null;
	/** Unique identifier for entity instances */
	UserMappingId: DevKit.Guid | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
	readonly VersionNumber: number | null;
}

const UserMappingFieldConfig: DevKit.IWebApiFieldConfigMap = {
	ClaimType: { logicalName: 'claimtype' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ExchangeRate: { logicalName: 'exchangerate', readOnly: true, type: 'Number' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OrganizationId: { schemaName: 'OrganizationId', logicalName: '_organizationid_value', readOnly: true, entityCollectionName: 'organizations', entityLogicalName: 'organization' },
	PartnerApplicationType: { logicalName: 'partnerapplicationtype', type: 'Integer' },
	SystemUserAttributeName: { logicalName: 'systemuserattributename' },
	TimeZoneRuleVersionNumber: { logicalName: 'timezoneruleversionnumber', type: 'Integer' },
	TransactionCurrencyId: { schemaName: 'TransactionCurrencyId', logicalName: '_transactioncurrencyid_value', entityCollectionName: 'transactioncurrencies', entityLogicalName: 'transactioncurrency' },
	UserMappingId: { logicalName: 'usermappingid' },
	UTCConversionTimeZoneCode: { logicalName: 'utcconversiontimezonecode', type: 'Integer' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * UserMapping WebApi class for early-bound style coding
 * Usage: const userMapping = new UserMappingApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class UserMappingApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IUserMappingApi>(entity, 'usermapping', 'usermappings', UserMappingFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface UserMappingApi extends IUserMappingApi { }
