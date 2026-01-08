/**
 * adx_inviteredemption.webapi.ts - adx_inviteredemption WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for adx_inviteredemption
 * All fields return string representation of their values
 */
export interface Iadx_inviteredemptionFormattedValue {
	readonly ActivityAdditionalParams: string;
	readonly ActivityId: string;
	readonly ActualDurationMinutes: string;
	readonly ActualEnd_UtcDateAndTime: string;
	readonly ActualStart_UtcDateAndTime: string;
	readonly adx_ipAddress: string;
	readonly Community: string;
	readonly CreatedBy: string;
	readonly CreatedOn_UtcDateAndTime: string;
	readonly CreatedOnBehalfBy: string;
	readonly DeliveryLastAttemptedOn_UtcDateAndTime: string;
	readonly DeliveryPriorityCode: string;
	readonly Description: string;
	readonly ExchangeItemId: string;
	readonly ExchangeRate: string;
	readonly ExchangeWebLink: string;
	readonly ImportSequenceNumber: string;
	readonly InstanceTypeCode: string;
	readonly IsBilled: string;
	readonly IsMapiPrivate: string;
	readonly IsRegularActivity: string;
	readonly IsWorkflowCreated: string;
	readonly LastOnHoldTime_UtcDateAndTime: string;
	readonly LeftVoiceMail: string;
	readonly ModifiedBy: string;
	readonly ModifiedOn_UtcDateAndTime: string;
	readonly ModifiedOnBehalfBy: string;
	readonly OnHoldTime: string;
	readonly OverriddenCreatedOn_UtcDateOnly: string;
	readonly OwnerId: string;
	readonly OwningBusinessUnit: string;
	readonly OwningTeam: string;
	readonly OwningUser: string;
	readonly PostponeActivityProcessingUntil_UtcDateAndTime: string;
	readonly PriorityCode: string;
	readonly ProcessId: string;
	readonly RegardingObjectId: string;
	readonly ScheduledDurationMinutes: string;
	readonly ScheduledEnd_UtcDateAndTime: string;
	readonly ScheduledStart_UtcDateAndTime: string;
	readonly SenderMailboxId: string;
	readonly SentOn_UtcDateAndTime: string;
	readonly SeriesId: string;
	readonly SLAId: string;
	readonly SLAInvokedId: string;
	readonly SortDate_UtcDateAndTime: string;
	readonly StageId: string;
	readonly StateCode: string;
	readonly StatusCode: string;
	readonly Subject: string;
	readonly TimeZoneRuleVersionNumber: string;
	readonly TransactionCurrencyId: string;
	readonly TraversedPath: string;
	readonly UTCConversionTimeZoneCode: string;
	readonly VersionNumber: string;
}

/**
 * adx_inviteredemption WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface Iadx_inviteredemptionApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: Iadx_inviteredemptionFormattedValue;
	/** Additional information provided by the external application as JSON. For internal use only. */
	ActivityAdditionalParams: string | null;
	/** Shows the activity. */
	ActivityId: DevKit.Guid | null;
	/** Enter the actual duration of the activity in minutes. */
	ActualDurationMinutes: number | null;
	/** Enter the actual end time of the activity. */
	ActualEnd_UtcDateAndTime: Date | null;
	/** Enter the actual start time of the activity. */
	ActualStart_UtcDateAndTime: Date | null;
	/** IP Address */
	adx_ipAddress: string | null;
	/** Shows how contact about the social activity originated, such as from Twitter or Facebook. This field is read-only. */
	Community: number | null;
	/** Shows who created the activity. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Shows the date and time when the activity was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Shows who created the activity pointer on behalf of another user. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Shows the date and time when the delivery of the activity was last attempted. */
	readonly DeliveryLastAttemptedOn_UtcDateAndTime: Date | null;
	/** Shows the priority of delivery of the activity to the email server. */
	DeliveryPriorityCode: number | null;
	/** Description of the activity. */
	Description: string | null;
	/** The message id of activity which is returned from Exchange Server. */
	ExchangeItemId: string | null;
	/** Exchange rate for the currency associated with the activitypointer with respect to the base currency. */
	readonly ExchangeRate: number | null;
	/** Shows the web link of Activity of type email. */
	ExchangeWebLink: string | null;
	/** Shows the sequence number of the import that created this record. */
	ImportSequenceNumber: number | null;
	/** Shows the type of instance of a recurring series. */
	readonly InstanceTypeCode: number | null;
	/** Shows whether the activity was billed as part of resolving a case. */
	IsBilled: boolean | null;
	/** For internal use only. */
	IsMapiPrivate: boolean | null;
	/** Shows whether the activity is a regular activity type or event type. */
	readonly IsRegularActivity: boolean | null;
	/** Shows whether the activity was created from a workflow rule. */
	IsWorkflowCreated: boolean | null;
	/** Contains the date and time stamp of the last on hold time. */
	LastOnHoldTime_UtcDateAndTime: Date | null;
	/** Select if the voice mail was left. */
	LeftVoiceMail: boolean | null;
	/** Shows who last updated the activity. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Shows the date and time when activity was last modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Shows who last updated the activity pointer on behalf of another user. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Shows how long, in minutes, that the record was on hold. */
	readonly OnHoldTime: number | null;
	/** Shows the date and time that the record was migrated. */
	OverriddenCreatedOn_UtcDateOnly: Date | null;
	/** Enter the user or team who is assigned to manage or maintain the activity. This field is updated every time the activity is assigned to a different user. */
	OwnerId: DevKit.Guid | null;
	/** Shows the business unit that owns the activity. */
	readonly OwningBusinessUnit: DevKit.Guid | null;
	/** Unique identifier of the team that owns the activity. */
	readonly OwningTeam: DevKit.Guid | null;
	/** Unique identifier of the user that owns the activity. */
	readonly OwningUser: DevKit.Guid | null;
	/** For internal use only. */
	readonly PostponeActivityProcessingUntil_UtcDateAndTime: Date | null;
	/** Shows the priority of the activity. */
	PriorityCode: number | null;
	/** Shows the process. */
	ProcessId: DevKit.Guid | null;
	/** Unique identifier of the object with which the activity is associated. */
	RegardingObjectId: DevKit.Guid | null;
	/** Enter the scheduled duration of the activity, in minutes. */
	ScheduledDurationMinutes: number | null;
	/** Enter the scheduled end time of the activity. */
	ScheduledEnd_UtcDateAndTime: Date | null;
	/** Enter the scheduled end time of the activity. */
	ScheduledStart_UtcDateAndTime: Date | null;
	/** Unique identifier of the mailbox associated with the sender of the email message. */
	readonly SenderMailboxId: DevKit.Guid | null;
	/** Shows the date and time when the activity was sent. */
	readonly SentOn_UtcDateAndTime: Date | null;
	/** Shows the ID of the recurring series of an instance. */
	readonly SeriesId: DevKit.Guid | null;
	/** Choose the service level agreement (SLA) that you want to apply to the case record. */
	SLAId: DevKit.Guid | null;
	/** Last SLA that was applied to this case. This field is for internal use only. */
	readonly SLAInvokedId: DevKit.Guid | null;
	/** Shows the date and time by which the activities are sorted. */
	SortDate_UtcDateAndTime: Date | null;
	/** Shows the stage. */
	StageId: DevKit.Guid | null;
	/** Status of the activity. */
	StateCode: number | null;
	/** Select the activity's status. */
	StatusCode: number | null;
	/** Subject associated with the activity. */
	Subject: string | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** Unique identifier of the currency associated with the activitypointer. */
	TransactionCurrencyId: DevKit.Guid | null;
	/** For internal use only. */
	TraversedPath: string | null;
	/** Shows the time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
	/** Version number of the activity. */
	readonly VersionNumber: number | null;
}

const adx_inviteredemptionFieldConfig: DevKit.IWebApiFieldConfigMap = {
	ActivityAdditionalParams: { logicalName: 'activityadditionalparams' },
	ActivityId: { logicalName: 'activityid' },
	ActualDurationMinutes: { logicalName: 'actualdurationminutes', type: 'Integer' },
	ActualEnd_UtcDateAndTime: { logicalName: 'actualend', type: 'DateTime' },
	ActualStart_UtcDateAndTime: { logicalName: 'actualstart', type: 'DateTime' },
	adx_ipAddress: { logicalName: 'adx_ipaddress' },
	Community: { logicalName: 'community', type: 'Integer' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	DeliveryLastAttemptedOn_UtcDateAndTime: { logicalName: 'deliverylastattemptedon', readOnly: true, type: 'DateTime' },
	DeliveryPriorityCode: { logicalName: 'deliveryprioritycode', type: 'Integer' },
	Description: { logicalName: 'description' },
	ExchangeItemId: { logicalName: 'exchangeitemid' },
	ExchangeRate: { logicalName: 'exchangerate', readOnly: true, type: 'Number' },
	ExchangeWebLink: { logicalName: 'exchangeweblink' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	InstanceTypeCode: { logicalName: 'instancetypecode', readOnly: true, type: 'Integer' },
	IsBilled: { logicalName: 'isbilled', type: 'Boolean' },
	IsMapiPrivate: { logicalName: 'ismapiprivate', type: 'Boolean' },
	IsRegularActivity: { logicalName: 'isregularactivity', readOnly: true, type: 'Boolean' },
	IsWorkflowCreated: { logicalName: 'isworkflowcreated', type: 'Boolean' },
	LastOnHoldTime_UtcDateAndTime: { logicalName: 'lastonholdtime', type: 'DateTime' },
	LeftVoiceMail: { logicalName: 'leftvoicemail', type: 'Boolean' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OnHoldTime: { logicalName: 'onholdtime', readOnly: true, type: 'Integer' },
	OverriddenCreatedOn_UtcDateOnly: { logicalName: 'overriddencreatedon', type: 'DateTime' },
	OwnerId: { schemaName: 'OwnerId', logicalName: '_ownerid_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OwningBusinessUnit: { schemaName: 'OwningBusinessUnit', logicalName: '_owningbusinessunit_value', readOnly: true, entityCollectionName: 'businessunits', entityLogicalName: 'businessunit' },
	OwningTeam: { schemaName: 'OwningTeam', logicalName: '_owningteam_value', readOnly: true, entityCollectionName: 'teams', entityLogicalName: 'team' },
	OwningUser: { schemaName: 'OwningUser', logicalName: '_owninguser_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	PostponeActivityProcessingUntil_UtcDateAndTime: { logicalName: 'postponeactivityprocessinguntil', readOnly: true, type: 'DateTime' },
	PriorityCode: { logicalName: 'prioritycode', type: 'Integer' },
	ProcessId: { logicalName: 'processid' },
	RegardingObjectId: { schemaName: 'RegardingObjectId', logicalName: '_regardingobjectid_value', entityCollectionName: 'accounts', entityLogicalName: 'account' },
	ScheduledDurationMinutes: { logicalName: 'scheduleddurationminutes', type: 'Integer' },
	ScheduledEnd_UtcDateAndTime: { logicalName: 'scheduledend', type: 'DateTime' },
	ScheduledStart_UtcDateAndTime: { logicalName: 'scheduledstart', type: 'DateTime' },
	SenderMailboxId: { schemaName: 'SenderMailboxId', logicalName: '_sendermailboxid_value', readOnly: true, entityCollectionName: 'mailboxes', entityLogicalName: 'mailbox' },
	SentOn_UtcDateAndTime: { logicalName: 'senton', readOnly: true, type: 'DateTime' },
	SeriesId: { logicalName: 'seriesid', readOnly: true },
	SLAId: { schemaName: 'SLAId', logicalName: '_slaid_value', entityCollectionName: 'slas', entityLogicalName: 'sla' },
	SLAInvokedId: { schemaName: 'SLAInvokedId', logicalName: '_slainvokedid_value', readOnly: true, entityCollectionName: 'slas', entityLogicalName: 'sla' },
	SortDate_UtcDateAndTime: { logicalName: 'sortdate', type: 'DateTime' },
	StageId: { logicalName: 'stageid' },
	StateCode: { logicalName: 'statecode', type: 'Integer' },
	StatusCode: { logicalName: 'statuscode', type: 'Integer' },
	Subject: { logicalName: 'subject' },
	TimeZoneRuleVersionNumber: { logicalName: 'timezoneruleversionnumber', type: 'Integer' },
	TransactionCurrencyId: { schemaName: 'TransactionCurrencyId', logicalName: '_transactioncurrencyid_value', entityCollectionName: 'transactioncurrencies', entityLogicalName: 'transactioncurrency' },
	TraversedPath: { logicalName: 'traversedpath' },
	UTCConversionTimeZoneCode: { logicalName: 'utcconversiontimezonecode', type: 'Integer' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * adx_inviteredemption WebApi class for early-bound style coding
 * Usage: const adx_inviteredemption = new adx_inviteredemptionApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class adx_inviteredemptionApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<Iadx_inviteredemptionApi>(entity, 'adx_inviteredemption', 'adx_inviteredemptions', adx_inviteredemptionFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface adx_inviteredemptionApi extends Iadx_inviteredemptionApi { }
