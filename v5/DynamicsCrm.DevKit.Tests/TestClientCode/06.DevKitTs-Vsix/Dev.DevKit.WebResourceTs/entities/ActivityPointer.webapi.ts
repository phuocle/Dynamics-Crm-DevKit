/**
 * ActivityPointer.webapi.ts - ActivityPointer WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * ActivityPointer WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IActivityPointerApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<IActivityPointerApi, 'FormattedValue'>]: string };
	/** Additional information provided by the external application as JSON. For internal use only. */
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
	/** Date and time when the delivery of the activity was last attempted. */
	readonly DeliveryLastAttemptedOn_UtcDateAndTime: Date | null;
	/** Priority of delivery of the activity to the email server. */
	DeliveryPriorityCode: number | null;
	/** Description of the activity. */
	Description: string | null;
	/** File that contains description content. */
	readonly DescriptionBlobId_name: string | null;
	/** The message id of activity which is returned from Exchange Server. */
	ExchangeItemId: string | null;
	/** Exchange rate for the currency associated with the activitypointer with respect to the base currency. */
	readonly ExchangeRate: number | null;
	/** Shows the web link of Activity of type email. */
	ExchangeWebLink: string | null;
	/** Formatted scheduled end time of the activity. */
	readonly FormattedScheduledEnd_TimezoneDateAndTime: Date | null;
	/** Formatted scheduled start time of the activity. */
	readonly FormattedScheduledStart_TimezoneDateAndTime: Date | null;
	/** Type of instance of a recurring series. */
	readonly InstanceTypeCode: number | null;
	/** Information regarding whether the activity was billed as part of resolving a case. */
	IsBilled: boolean | null;
	/** For internal use only. */
	IsMapiPrivate: boolean | null;
	/** Information regarding whether the activity is a regular activity type or event type. */
	readonly IsRegularActivity: boolean | null;
	/** Information regarding whether the activity was created from a workflow rule. */
	IsWorkflowCreated: boolean | null;
	/** Contains the date and time stamp of the last on hold time. */
	LastOnHoldTime_UtcDateAndTime: Date | null;
	/** Left the voice mail */
	LeftVoiceMail: boolean | null;
	/** Unique identifier of user who last modified the activity. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when activity was last modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who last modified the activitypointer. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Shows how long, in minutes, that the record was on hold. */
	readonly OnHoldTime: number | null;
	/** Unique identifier of the user or team who owns the activity. */
	OwnerId: DevKit.Guid | null;
	/** Unique identifier of the business unit that owns the activity. */
	readonly OwningBusinessUnit: DevKit.Guid | null;
	/** Unique identifier of the team that owns the activity. */
	readonly OwningTeam: DevKit.Guid | null;
	/** Unique identifier of the user that owns the activity. */
	readonly OwningUser: DevKit.Guid | null;
	/** For internal use only. */
	readonly PostponeActivityProcessingUntil_UtcDateAndTime: Date | null;
	/** Priority of the activity. */
	PriorityCode: number | null;
	/** Unique identifier of the Process. */
	ProcessId: DevKit.Guid | null;
	/** Unique identifier of the object with which the activity is associated. */
	RegardingObjectId: DevKit.Guid | null;
	/** Scheduled duration of the activity, specified in minutes. */
	ScheduledDurationMinutes: number | null;
	/** Scheduled end time of the activity. */
	ScheduledEnd_UtcDateAndTime: Date | null;
	/** Scheduled start time of the activity. */
	ScheduledStart_UtcDateAndTime: Date | null;
	/** Unique identifier of the mailbox associated with the sender of the email message. */
	readonly SenderMailboxId: DevKit.Guid | null;
	/** Date and time when the activity was sent. */
	readonly SentOn_UtcDateAndTime: Date | null;
	/** Uniqueidentifier specifying the id of recurring series of an instance. */
	readonly SeriesId: DevKit.Guid | null;
	/** Choose the service level agreement (SLA) that you want to apply to the case record. */
	SLAId: DevKit.Guid | null;
	/** Last SLA that was applied to this case. This field is for internal use only. */
	readonly SLAInvokedId: DevKit.Guid | null;
	/** Shows the date and time by which the activities are sorted. */
	SortDate_UtcDateAndTime: Date | null;
	/** Unique identifier of the Stage. */
	StageId: DevKit.Guid | null;
	/** Status of the activity. */
	StateCode: number | null;
	/** Reason for the status of the activity. */
	StatusCode: number | null;
	/** Subject associated with the activity. */
	Subject: string | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** Unique identifier of the currency associated with the activitypointer. */
	TransactionCurrencyId: DevKit.Guid | null;
	/** For internal use only. */
	TraversedPath: string | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
	/** Version number of the activity. */
	readonly VersionNumber: number | null;
}

const ActivityPointerFieldConfig: DevKit.IWebApiFieldConfigMap = {
	ActivityAdditionalParams: { logicalName: 'activityadditionalparams' },
	ActivityId: { logicalName: 'activityid' },
	ActualDurationMinutes: { logicalName: 'actualdurationminutes', type: 'Integer' },
	ActualEnd_UtcDateAndTime: { logicalName: 'actualend', type: 'DateTime' },
	ActualStart_UtcDateAndTime: { logicalName: 'actualstart', type: 'DateTime' },
	Community: { logicalName: 'community', type: 'Integer' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	DeliveryLastAttemptedOn_UtcDateAndTime: { logicalName: 'deliverylastattemptedon', readOnly: true, type: 'DateTime' },
	DeliveryPriorityCode: { logicalName: 'deliveryprioritycode', type: 'Integer' },
	Description: { logicalName: 'description' },
	DescriptionBlobId_name: { logicalName: 'descriptionblobid', readOnly: true },
	ExchangeItemId: { logicalName: 'exchangeitemid' },
	ExchangeRate: { logicalName: 'exchangerate', readOnly: true, type: 'Number' },
	ExchangeWebLink: { logicalName: 'exchangeweblink' },
	FormattedScheduledEnd_TimezoneDateAndTime: { logicalName: 'formattedscheduledend', readOnly: true, type: 'DateTime' },
	FormattedScheduledStart_TimezoneDateAndTime: { logicalName: 'formattedscheduledstart', readOnly: true, type: 'DateTime' },
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
 * ActivityPointer WebApi class for early-bound style coding
 * Usage: const activityPointer = new ActivityPointerApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class ActivityPointerApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IActivityPointerApi>(entity, 'activitypointer', 'activitypointers', ActivityPointerFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface ActivityPointerApi extends IActivityPointerApi { }
