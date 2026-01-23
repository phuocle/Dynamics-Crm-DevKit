/**
 * ExternalParty.webapi.ts - ExternalParty WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * ExternalParty WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IExternalPartyApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<IExternalPartyApi, 'FormattedValue'>]: string };
	/** Contains the value that is used to detect and avoid duplicate external party records. */
	CorrelationKey: string | null;
	/** Unique identifier of the user who created the record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the record was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the record. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Shows the email address derived from the equivalent record that's enabled as the external party and shows the external user's email address. */
	EmailAddress: string | null;
	/** Exchange rate for the currency associated with the ExternalParty with respect to the base currency. */
	readonly ExchangeRate: number | null;
	/** Unique identifier for entity instances */
	ExternalPartyId: DevKit.Guid | null;
	/** Unique identifier of the External Party used when synchronizing customizations for the Microsoft Dynamics 365 client for Outlook */
	readonly ExternalPartyIdUnique: DevKit.Guid | null;
	/** Type the external party's first name. */
	FirstName: string | null;
	/** Type the full name of the external party. */
	FullName: string | null;
	/** Sequence number of the import that created this record. */
	ImportSequenceNumber: number | null;
	/** Shows the date when the external party was last disabled on. */
	LastDisabledOn_UtcDateOnly: Date | null;
	/** Shows the date when the external party was last enabled on. */
	LastEnabledOn_UtcDateOnly: Date | null;
	/** Type the external party's last name. */
	LastName: string | null;
	/** Type the external party's middle name. */
	MiddleName: string | null;
	/** Unique identifier of the user who modified the record. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the record was modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who modified the record. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Date and time that the record was migrated. */
	OverriddenCreatedOn_UtcDateOnly: Date | null;
	/** Unique identifier of the user or team who owns the record. */
	OwnerId: DevKit.Guid | null;
	/** Unique identifier for the business unit that owns the record */
	readonly OwningBusinessUnit: DevKit.Guid | null;
	/** Unique identifier for the team that owns the record. */
	readonly OwningTeam: DevKit.Guid | null;
	/** Unique identifier for the user that owns the record. */
	readonly OwningUser: DevKit.Guid | null;
	/** Shows whether the external party is enabled or disabled */
	StateCode: number | null;
	/** Select the external party status */
	StatusCode: number | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** Exchange rate for the currency associated with the ExternalParty with respect to the base currency. */
	TransactionCurrencyId: DevKit.Guid | null;
	/** Type of the external party. */
	Type: string | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
	readonly VersionNumber: number | null;
	/** Type the phonetic spelling of the external party's first name, if the name is specified in Japanese, to make sure the name is pronounced correctly in phone calls with the external party.. */
	YomiFirstName: string | null;
	/** Shows the combined Yomi first and last names of the external party so that the full phonetic name can be displayed in views and reports. */
	readonly YomiFullName: string | null;
	/** Type the phonetic spelling of the external party's last name, if the name is specified in Japanese, to make sure the name is pronounced correctly in phone calls with the external party. */
	YomiLastName: string | null;
	/** Type the phonetic spelling of the external party's middle name, if the name is specified in Japanese, to make sure the name is pronounced correctly in phone calls with the contact. */
	YomiMiddleName: string | null;
}

const ExternalPartyFieldConfig: DevKit.IWebApiFieldConfigMap = {
	CorrelationKey: { logicalName: 'correlationkey' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	EmailAddress: { logicalName: 'emailaddress' },
	ExchangeRate: { logicalName: 'exchangerate', readOnly: true, type: 'Number' },
	ExternalPartyId: { logicalName: 'externalpartyid' },
	ExternalPartyIdUnique: { logicalName: 'externalpartyidunique', readOnly: true },
	FirstName: { logicalName: 'firstname' },
	FullName: { logicalName: 'fullname' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	LastDisabledOn_UtcDateOnly: { logicalName: 'lastdisabledon', type: 'DateTime' },
	LastEnabledOn_UtcDateOnly: { logicalName: 'lastenabledon', type: 'DateTime' },
	LastName: { logicalName: 'lastname' },
	MiddleName: { logicalName: 'middlename' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OverriddenCreatedOn_UtcDateOnly: { logicalName: 'overriddencreatedon', type: 'DateTime' },
	OwnerId: { schemaName: 'OwnerId', logicalName: '_ownerid_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OwningBusinessUnit: { schemaName: 'OwningBusinessUnit', logicalName: '_owningbusinessunit_value', readOnly: true, entityCollectionName: 'businessunits', entityLogicalName: 'businessunit' },
	OwningTeam: { schemaName: 'OwningTeam', logicalName: '_owningteam_value', readOnly: true, entityCollectionName: 'teams', entityLogicalName: 'team' },
	OwningUser: { schemaName: 'OwningUser', logicalName: '_owninguser_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	StateCode: { logicalName: 'statecode', type: 'Integer' },
	StatusCode: { logicalName: 'statuscode', type: 'Integer' },
	TimeZoneRuleVersionNumber: { logicalName: 'timezoneruleversionnumber', type: 'Integer' },
	TransactionCurrencyId: { schemaName: 'TransactionCurrencyId', logicalName: '_transactioncurrencyid_value', entityCollectionName: 'transactioncurrencies', entityLogicalName: 'transactioncurrency' },
	Type: { logicalName: 'type' },
	UTCConversionTimeZoneCode: { logicalName: 'utcconversiontimezonecode', type: 'Integer' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
	YomiFirstName: { logicalName: 'yomifirstname' },
	YomiFullName: { logicalName: 'yomifullname', readOnly: true },
	YomiLastName: { logicalName: 'yomilastname' },
	YomiMiddleName: { logicalName: 'yomimiddlename' },
};

/**
 * ExternalParty WebApi class for early-bound style coding
 * Usage: const externalParty = new ExternalPartyApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class ExternalPartyApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IExternalPartyApi>(entity, 'externalparty', 'externalparties', ExternalPartyFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface ExternalPartyApi extends IExternalPartyApi { }
