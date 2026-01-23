/**
 * ChannelAccessProfile.webapi.ts - ChannelAccessProfile WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * ChannelAccessProfile WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IChannelAccessProfileApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<IChannelAccessProfileApi, 'FormattedValue'>]: string };
	/** Unique identifier for entity instances */
	ChannelAccessProfileId: DevKit.Guid | null;
	/** Unique identifier of the Channel Access Profile used when synchronizing customizations for the Microsoft Dynamics 365 client for Outlook */
	readonly ChannelAccessProfileIdUnique: DevKit.Guid | null;
	/** For internal use only. */
	readonly ComponentState: number | null;
	/** Unique identifier of the user who created the record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the record was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the record. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Select whether access to the email channel is allowed. */
	EmailAccess: boolean | null;
	/** Exchange rate for the currency associated with the ChannelAccessProfile with respect to the base currency. */
	readonly ExchangeRate: number | null;
	/** Select whether access to the Facebook channel is allowed. */
	FacebookAccess: boolean | null;
	/** For internal use only */
	readonly HavePrivilegesChanged: boolean | null;
	/** Sequence number of the import that created this record. */
	ImportSequenceNumber: number | null;
	/** Version in which the similarity rule is introduced. */
	IntroducedVersion: string | null;
	/** For internal use only. */
	IsGuestProfile: boolean | null;
	/** Is Managed */
	readonly IsManaged: boolean | null;
	/** Unique identifier of the user who modified the record. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the record was modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who modified the record. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Type a descriptive name for the channel access profile. */
	Name: string | null;
	/** Date and time that the record was migrated. */
	OverriddenCreatedOn_UtcDateOnly: Date | null;
	/** Date and time when the record was created. */
	readonly OverwriteTime_UtcDateOnly: Date | null;
	/** Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user or team. */
	OwnerId: DevKit.Guid | null;
	/** Unique identifier for the business unit that owns the record */
	readonly OwningBusinessUnit: DevKit.Guid | null;
	/** Unique identifier for the team that owns the record. */
	readonly OwningTeam: DevKit.Guid | null;
	/** Unique identifier for the user that owns the record. */
	readonly OwningUser: DevKit.Guid | null;
	/** Select whether access to the phone channel is allowed. */
	PhoneAccess: boolean | null;
	/** Select whether access to rate a knowledge article is allowed. */
	RateKnowledgeArticles: boolean | null;
	/** Unique identifier of the associated solution. */
	readonly SolutionId: DevKit.Guid | null;
	/** Shows whether the channel access profile is active or inactive. */
	StateCode: number | null;
	/** Select the the channel access profiles status. */
	StatusCode: number | null;
	/** Select whether access to submit feedback on knowledge articles is allowed. */
	SubmitFeedback: boolean | null;
	/** For internal use only. */
	readonly SupportingSolutionId: DevKit.Guid | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** Exchange rate for the currency associated with the ChannelAccessProfile with respect to the base currency. */
	TransactionCurrencyId: DevKit.Guid | null;
	/** Select whether access to the Twitter channel is allowed. */
	TwitterAccess: boolean | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
	readonly VersionNumber: number | null;
	/** Select whether access to view a knowledge article rating is allowed. */
	ViewArticleRating: boolean | null;
	/** Select whether access to view knowledge articles is allowed. */
	ViewKnowledgeArticles: boolean | null;
	/** Select whether access to the web channel is allowed. */
	WebAccess: boolean | null;
}

const ChannelAccessProfileFieldConfig: DevKit.IWebApiFieldConfigMap = {
	ChannelAccessProfileId: { logicalName: 'channelaccessprofileid' },
	ChannelAccessProfileIdUnique: { logicalName: 'channelaccessprofileidunique', readOnly: true },
	ComponentState: { logicalName: 'componentstate', readOnly: true, type: 'Integer' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	EmailAccess: { logicalName: 'emailaccess', type: 'Boolean' },
	ExchangeRate: { logicalName: 'exchangerate', readOnly: true, type: 'Number' },
	FacebookAccess: { logicalName: 'facebookaccess', type: 'Boolean' },
	HavePrivilegesChanged: { logicalName: 'haveprivilegeschanged', readOnly: true, type: 'Boolean' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	IntroducedVersion: { logicalName: 'introducedversion' },
	IsGuestProfile: { logicalName: 'isguestprofile', type: 'Boolean' },
	IsManaged: { logicalName: 'ismanaged', readOnly: true, type: 'Boolean' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Name: { logicalName: 'name' },
	OverriddenCreatedOn_UtcDateOnly: { logicalName: 'overriddencreatedon', type: 'DateTime' },
	OverwriteTime_UtcDateOnly: { logicalName: 'overwritetime', readOnly: true, type: 'DateTime' },
	OwnerId: { schemaName: 'OwnerId', logicalName: '_ownerid_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OwningBusinessUnit: { schemaName: 'OwningBusinessUnit', logicalName: '_owningbusinessunit_value', readOnly: true, entityCollectionName: 'businessunits', entityLogicalName: 'businessunit' },
	OwningTeam: { schemaName: 'OwningTeam', logicalName: '_owningteam_value', readOnly: true, entityCollectionName: 'teams', entityLogicalName: 'team' },
	OwningUser: { schemaName: 'OwningUser', logicalName: '_owninguser_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	PhoneAccess: { logicalName: 'phoneaccess', type: 'Boolean' },
	RateKnowledgeArticles: { logicalName: 'rateknowledgearticles', type: 'Boolean' },
	SolutionId: { logicalName: 'solutionid', readOnly: true },
	StateCode: { logicalName: 'statecode', type: 'Integer' },
	StatusCode: { logicalName: 'statuscode', type: 'Integer' },
	SubmitFeedback: { logicalName: 'submitfeedback', type: 'Boolean' },
	SupportingSolutionId: { logicalName: 'supportingsolutionid', readOnly: true },
	TimeZoneRuleVersionNumber: { logicalName: 'timezoneruleversionnumber', type: 'Integer' },
	TransactionCurrencyId: { schemaName: 'TransactionCurrencyId', logicalName: '_transactioncurrencyid_value', entityCollectionName: 'transactioncurrencies', entityLogicalName: 'transactioncurrency' },
	TwitterAccess: { logicalName: 'twitteraccess', type: 'Boolean' },
	UTCConversionTimeZoneCode: { logicalName: 'utcconversiontimezonecode', type: 'Integer' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
	ViewArticleRating: { logicalName: 'viewarticlerating', type: 'Boolean' },
	ViewKnowledgeArticles: { logicalName: 'viewknowledgearticles', type: 'Boolean' },
	WebAccess: { logicalName: 'webaccess', type: 'Boolean' },
};

/**
 * ChannelAccessProfile WebApi class for early-bound style coding
 * Usage: const channelAccessProfile = new ChannelAccessProfileApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class ChannelAccessProfileApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IChannelAccessProfileApi>(entity, 'channelaccessprofile', 'channelaccessprofiles', ChannelAccessProfileFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface ChannelAccessProfileApi extends IChannelAccessProfileApi { }
