/**
 * SocialActivity.webapi.ts - SocialActivity WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for SocialActivity
 * All fields return string representation of their values
 */
export interface ISocialActivityFormattedValue {
	readonly ActivityAdditionalParams: string;
	readonly ActivityId: string;
	readonly ActualDurationMinutes: string;
	readonly ActualEnd_UtcDateAndTime: string;
	readonly ActualStart_UtcDateAndTime: string;
	readonly Community: string;
	readonly CreatedBy: string;
	readonly CreatedOn_UtcDateAndTime: string;
	readonly CreatedOnBehalfBy: string;
	readonly Description: string;
	readonly DirectionCode: string;
	readonly ExchangeRate: string;
	readonly ImportSequenceNumber: string;
	readonly InResponseTo: string;
	readonly IsBilled: string;
	readonly IsRegularActivity: string;
	readonly IsWorkflowCreated: string;
	readonly LastOnHoldTime_UtcDateAndTime: string;
	readonly ModifiedBy: string;
	readonly ModifiedOn_UtcDateAndTime: string;
	readonly ModifiedOnBehalfBy: string;
	readonly OnHoldTime: string;
	readonly OverriddenCreatedOn_UtcDateOnly: string;
	readonly OwnerId: string;
	readonly OwningBusinessUnit: string;
	readonly OwningTeam: string;
	readonly OwningUser: string;
	readonly PostAuthor: string;
	readonly PostAuthorAccount: string;
	readonly PostedOn_UtcDateAndTime: string;
	readonly PostFromProfileId: string;
	readonly PostId: string;
	readonly PostMessageType: string;
	readonly PostToProfileId: string;
	readonly PostURL: string;
	readonly PriorityCode: string;
	readonly ProcessId: string;
	readonly RegardingObjectId: string;
	readonly ScheduledDurationMinutes: string;
	readonly ScheduledEnd_UtcDateAndTime: string;
	readonly ScheduledStart_UtcDateAndTime: string;
	readonly SentimentValue: string;
	readonly SLAId: string;
	readonly SLAInvokedId: string;
	readonly SocialAdditionalParams: string;
	readonly SortDate_UtcDateAndTime: string;
	readonly StageId: string;
	readonly StateCode: string;
	readonly StatusCode: string;
	readonly Subject: string;
	readonly ThreadId: string;
	readonly TimeZoneRuleVersionNumber: string;
	readonly TransactionCurrencyId: string;
	readonly TraversedPath: string;
	readonly UTCConversionTimeZoneCode: string;
	readonly VersionNumber: string;
}

/**
 * SocialActivity WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface ISocialActivityApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: ISocialActivityFormattedValue;
	/** For internal use only. */
	ActivityAdditionalParams: string | null;
	/** Unique identifier of the activity. */
	ActivityId: DevKit.Guid | null;
	/** Actual duration of the activity in minutes. */
	ActualDurationMinutes: number | null;
	/** Actual end time of the activity. */
	ActualEnd_UtcDateAndTime: Date | null;
	/** Actual start time of the activity. */
	ActualStart_UtcDateAndTime: Date | null;
	/** Shows how contact about the social activity originated, such as from Twitter or Facebook. This field is read-only. */
	Community: number | null;
	/** Unique identifier of the user who created the activity. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the activity was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the activitypointer. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Shows information about the social post content. This field is read-only. */
	Description: string | null;
	/** Select the direction of the post as incoming or outbound. */
	DirectionCode: boolean | null;
	/** Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency. */
	readonly ExchangeRate: number | null;
	/** Sequence number of the import that created this record. */
	ImportSequenceNumber: number | null;
	/** Unique identifier for the responses to a post. For internal use only. */
	InResponseTo: string | null;
	/** Information regarding whether the activity was billed as part of resolving a case. */
	IsBilled: boolean | null;
	/** Information regarding whether the activity is a regular activity type or event type. */
	readonly IsRegularActivity: boolean | null;
	/** Information regarding whether the activity was created from a workflow rule. */
	IsWorkflowCreated: boolean | null;
	/** Contains the date and time stamp of the last on hold time. */
	LastOnHoldTime_UtcDateAndTime: Date | null;
	/** For internal use only. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** For internal use only. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Shows how long, in minutes, that the record was on hold. */
	readonly OnHoldTime: number | null;
	/** Date and time that the record was migrated. */
	OverriddenCreatedOn_UtcDateOnly: Date | null;
	/** Unique identifier of the user or team who owns the activity. */
	OwnerId: DevKit.Guid | null;
	/** Unique identifier of the business unit that owns the activity. */
	readonly OwningBusinessUnit: DevKit.Guid | null;
	/** Unique identifier of the team that owns the activity. */
	readonly OwningTeam: DevKit.Guid | null;
	/** Unique identifier of the user who owns the Activity. */
	readonly OwningUser: DevKit.Guid | null;
	/** Shows the contact or account that authored the post. */
	PostAuthor: DevKit.Guid | null;
	/** Shows the parent account of the author of the post. */
	PostAuthorAccount: DevKit.Guid | null;
	/** For internal use only. */
	PostedOn_UtcDateAndTime: Date | null;
	/** Shows the author of the post on the corresponding social channel. */
	PostFromProfileId: DevKit.Guid | null;
	/** Unique identifier of the post. For internal use only. */
	PostId: string | null;
	/** Shows if the social post originated as a private or public message. */
	PostMessageType: number | null;
	/** Shows the recipients of the social post. */
	PostToProfileId: string | null;
	/** Shows the URL of the post. */
	PostURL: string | null;
	/** Shows the priority so that preferred customers or critical issues are handled quickly. */
	PriorityCode: number | null;
	/** Unique identifier of the Process. */
	ProcessId: DevKit.Guid | null;
	/** Shows the record that the social activity relates to. */
	RegardingObjectId: DevKit.Guid | null;
	/** Scheduled duration of the activity, specified in minutes. */
	ScheduledDurationMinutes: number | null;
	/** Scheduled end time of the activity. */
	ScheduledEnd_UtcDateAndTime: Date | null;
	/** Scheduled start time of the activity. */
	ScheduledStart_UtcDateAndTime: Date | null;
	/** Value derived after assessing words commonly associated with a negative, neutral, or positive sentiment that occurs in a social post. Sentiment information can also be reported as numeric values. */
	SentimentValue: number | null;
	/** Choose the service level agreement (SLA) that you want to apply to the Social Activity record. */
	SLAId: DevKit.Guid | null;
	/** Last SLA that was applied to this Social Activity. This field is for internal use only. */
	readonly SLAInvokedId: DevKit.Guid | null;
	/** For internal use only. */
	SocialAdditionalParams: string | null;
	/** Shows the date and time by which the activities are sorted. */
	SortDate_UtcDateAndTime: Date | null;
	/** Unique identifier of the Stage. */
	StageId: DevKit.Guid | null;
	/** Shows whether the social activity completed. This field is read-only. */
	StateCode: number | null;
	/** Shows whether the social activity is completed, failed, or processing. This field is read-only. */
	StatusCode: number | null;
	/** Subject associated with the activity. */
	Subject: string | null;
	/** Unique identifier of the social conversation. For internal use only. */
	ThreadId: string | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
	TransactionCurrencyId: DevKit.Guid | null;
	/** For internal use only. */
	TraversedPath: string | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
	/** Version number of the social activity. */
	readonly VersionNumber: number | null;
}

const SocialActivityFieldConfig: DevKit.IWebApiFieldConfigMap = {
	ActivityAdditionalParams: { logicalName: 'activityadditionalparams' },
	ActivityId: { logicalName: 'activityid' },
	ActualDurationMinutes: { logicalName: 'actualdurationminutes', type: 'Integer' },
	ActualEnd_UtcDateAndTime: { logicalName: 'actualend', type: 'DateTime' },
	ActualStart_UtcDateAndTime: { logicalName: 'actualstart', type: 'DateTime' },
	Community: { logicalName: 'community', type: 'Integer' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Description: { logicalName: 'description' },
	DirectionCode: { logicalName: 'directioncode', type: 'Boolean' },
	ExchangeRate: { logicalName: 'exchangerate', readOnly: true, type: 'Number' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	InResponseTo: { logicalName: 'inresponseto' },
	IsBilled: { logicalName: 'isbilled', type: 'Boolean' },
	IsRegularActivity: { logicalName: 'isregularactivity', readOnly: true, type: 'Boolean' },
	IsWorkflowCreated: { logicalName: 'isworkflowcreated', type: 'Boolean' },
	LastOnHoldTime_UtcDateAndTime: { logicalName: 'lastonholdtime', type: 'DateTime' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OnHoldTime: { logicalName: 'onholdtime', readOnly: true, type: 'Integer' },
	OverriddenCreatedOn_UtcDateOnly: { logicalName: 'overriddencreatedon', type: 'DateTime' },
	OwnerId: { schemaName: 'OwnerId', logicalName: '_ownerid_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OwningBusinessUnit: { schemaName: 'OwningBusinessUnit', logicalName: '_owningbusinessunit_value', readOnly: true, entityCollectionName: 'businessunits', entityLogicalName: 'businessunit' },
	OwningTeam: { schemaName: 'OwningTeam', logicalName: '_owningteam_value', readOnly: true, entityCollectionName: 'teams', entityLogicalName: 'team' },
	OwningUser: { schemaName: 'OwningUser', logicalName: '_owninguser_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	PostAuthor: { schemaName: 'PostAuthor', logicalName: '_postauthor_value', entityCollectionName: 'accounts', entityLogicalName: 'account' },
	PostAuthorAccount: { schemaName: 'PostAuthorAccount', logicalName: '_postauthoraccount_value', entityCollectionName: 'accounts', entityLogicalName: 'account' },
	PostedOn_UtcDateAndTime: { logicalName: 'postedon', type: 'DateTime' },
	PostFromProfileId: { schemaName: 'PostFromProfileId', logicalName: '_postfromprofileid_value', entityCollectionName: 'socialprofiles', entityLogicalName: 'socialprofile' },
	PostId: { logicalName: 'postid' },
	PostMessageType: { logicalName: 'postmessagetype', type: 'Integer' },
	PostToProfileId: { logicalName: 'posttoprofileid' },
	PostURL: { logicalName: 'posturl' },
	PriorityCode: { logicalName: 'prioritycode', type: 'Integer' },
	ProcessId: { logicalName: 'processid' },
	RegardingObjectId: { schemaName: 'RegardingObjectId', logicalName: '_regardingobjectid_value', entityCollectionName: 'accounts', entityLogicalName: 'account' },
	ScheduledDurationMinutes: { logicalName: 'scheduleddurationminutes', type: 'Integer' },
	ScheduledEnd_UtcDateAndTime: { logicalName: 'scheduledend', type: 'DateTime' },
	ScheduledStart_UtcDateAndTime: { logicalName: 'scheduledstart', type: 'DateTime' },
	SentimentValue: { logicalName: 'sentimentvalue', type: 'Number' },
	SLAId: { schemaName: 'SLAId', logicalName: '_slaid_value', entityCollectionName: 'slas', entityLogicalName: 'sla' },
	SLAInvokedId: { schemaName: 'SLAInvokedId', logicalName: '_slainvokedid_value', readOnly: true, entityCollectionName: 'slas', entityLogicalName: 'sla' },
	SocialAdditionalParams: { logicalName: 'socialadditionalparams' },
	SortDate_UtcDateAndTime: { logicalName: 'sortdate', type: 'DateTime' },
	StageId: { logicalName: 'stageid' },
	StateCode: { logicalName: 'statecode', type: 'Integer' },
	StatusCode: { logicalName: 'statuscode', type: 'Integer' },
	Subject: { logicalName: 'subject' },
	ThreadId: { logicalName: 'threadid' },
	TimeZoneRuleVersionNumber: { logicalName: 'timezoneruleversionnumber', type: 'Integer' },
	TransactionCurrencyId: { schemaName: 'TransactionCurrencyId', logicalName: '_transactioncurrencyid_value', entityCollectionName: 'transactioncurrencies', entityLogicalName: 'transactioncurrency' },
	TraversedPath: { logicalName: 'traversedpath' },
	UTCConversionTimeZoneCode: { logicalName: 'utcconversiontimezonecode', type: 'Integer' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * SocialActivity WebApi class for early-bound style coding
 * Usage: const socialActivity = new SocialActivityApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class SocialActivityApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<ISocialActivityApi>(entity, 'socialactivity', 'socialactivities', SocialActivityFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface SocialActivityApi extends ISocialActivityApi { }
