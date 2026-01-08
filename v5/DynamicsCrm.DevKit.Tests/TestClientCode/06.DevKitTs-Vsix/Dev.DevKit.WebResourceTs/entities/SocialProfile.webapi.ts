/**
 * SocialProfile.webapi.ts - SocialProfile WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for SocialProfile
 * All fields return string representation of their values
 */
export interface ISocialProfileFormattedValue {
	readonly Blocked: string;
	readonly Community: string;
	readonly CreatedBy: string;
	readonly CreatedOn_UtcDateAndTime: string;
	readonly CreatedOnBehalfBy: string;
	readonly CustomerId: string;
	readonly ExchangeRate: string;
	readonly ImportSequenceNumber: string;
	readonly InfluenceScore: string;
	readonly ModifiedBy: string;
	readonly ModifiedOn_UtcDateAndTime: string;
	readonly ModifiedOnBehalfBy: string;
	readonly OverriddenCreatedOn_UtcDateOnly: string;
	readonly OwnerId: string;
	readonly OwningBusinessUnit: string;
	readonly OwningTeam: string;
	readonly OwningUser: string;
	readonly ProfileFullName: string;
	readonly ProfileLink: string;
	readonly ProfileName: string;
	readonly SocialProfileId: string;
	readonly StateCode: string;
	readonly StatusCode: string;
	readonly TimeZoneRuleVersionNumber: string;
	readonly TransactionCurrencyId: string;
	readonly UniqueProfileID: string;
	readonly UTCConversionTimeZoneCode: string;
	readonly VersionNumber: string;
}

/**
 * SocialProfile WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface ISocialProfileApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: ISocialProfileFormattedValue;
	/** Identifies if the social profile has been blocked. */
	Blocked: boolean | null;
	/** Identifies where the social profile originated from, such as Twitter, or Facebook. */
	Community: number | null;
	/** Unique identifier of the user who created the record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the record was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the record. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Shows the customer that this social profile belongs to. */
	CustomerId: DevKit.Guid | null;
	/** Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency. */
	readonly ExchangeRate: number | null;
	/** Unique identifier of the data import or data migration that created this record. */
	ImportSequenceNumber: number | null;
	/** Shows the score that determines the online social influence of the social profile. */
	InfluenceScore: number | null;
	/** Unique identifier of the user who modified the record. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the record was modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who modified the record. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Date and time that the record was migrated. */
	OverriddenCreatedOn_UtcDateOnly: Date | null;
	/** Shows the user or team that is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
	OwnerId: DevKit.Guid | null;
	/** Unique identifier for the business unit that owns the record */
	readonly OwningBusinessUnit: DevKit.Guid | null;
	/** Unique identifier of the team who owns the contact. */
	readonly OwningTeam: DevKit.Guid | null;
	/** Unique identifier of the user who owns the contact. */
	readonly OwningUser: DevKit.Guid | null;
	/** Shows the display name of the customer on this social profile. */
	ProfileFullName: string | null;
	/** Shows the customer that this social profile belongs to. */
	ProfileLink: string | null;
	/** Shows the name of the social profile on the corresponding social channel. */
	ProfileName: string | null;
	/** Unique Identifier of the social profile name. */
	SocialProfileId: DevKit.Guid | null;
	/** Status of the Social Profile */
	StateCode: number | null;
	/** Reason for the status of the Social Profile */
	StatusCode: number | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
	TransactionCurrencyId: DevKit.Guid | null;
	/** Unique ID of the Profile ID */
	UniqueProfileID: string | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
	/** Version number of the social profile. */
	readonly VersionNumber: number | null;
}

const SocialProfileFieldConfig: DevKit.IWebApiFieldConfigMap = {
	Blocked: { logicalName: 'blocked', type: 'Boolean' },
	Community: { logicalName: 'community', type: 'Integer' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CustomerId: { schemaName: 'CustomerId', logicalName: '_customerid_value', entityCollectionName: 'accounts', entityLogicalName: 'account' },
	ExchangeRate: { logicalName: 'exchangerate', readOnly: true, type: 'Number' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	InfluenceScore: { logicalName: 'influencescore', type: 'Number' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OverriddenCreatedOn_UtcDateOnly: { logicalName: 'overriddencreatedon', type: 'DateTime' },
	OwnerId: { schemaName: 'OwnerId', logicalName: '_ownerid_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OwningBusinessUnit: { schemaName: 'OwningBusinessUnit', logicalName: '_owningbusinessunit_value', readOnly: true, entityCollectionName: 'businessunits', entityLogicalName: 'businessunit' },
	OwningTeam: { schemaName: 'OwningTeam', logicalName: '_owningteam_value', readOnly: true, entityCollectionName: 'teams', entityLogicalName: 'team' },
	OwningUser: { schemaName: 'OwningUser', logicalName: '_owninguser_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ProfileFullName: { logicalName: 'profilefullname' },
	ProfileLink: { logicalName: 'profilelink' },
	ProfileName: { logicalName: 'profilename' },
	SocialProfileId: { logicalName: 'socialprofileid' },
	StateCode: { logicalName: 'statecode', type: 'Integer' },
	StatusCode: { logicalName: 'statuscode', type: 'Integer' },
	TimeZoneRuleVersionNumber: { logicalName: 'timezoneruleversionnumber', type: 'Integer' },
	TransactionCurrencyId: { schemaName: 'TransactionCurrencyId', logicalName: '_transactioncurrencyid_value', entityCollectionName: 'transactioncurrencies', entityLogicalName: 'transactioncurrency' },
	UniqueProfileID: { logicalName: 'uniqueprofileid' },
	UTCConversionTimeZoneCode: { logicalName: 'utcconversiontimezonecode', type: 'Integer' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * SocialProfile WebApi class for early-bound style coding
 * Usage: const socialProfile = new SocialProfileApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class SocialProfileApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<ISocialProfileApi>(entity, 'socialprofile', 'socialprofiles', SocialProfileFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface SocialProfileApi extends ISocialProfileApi { }
