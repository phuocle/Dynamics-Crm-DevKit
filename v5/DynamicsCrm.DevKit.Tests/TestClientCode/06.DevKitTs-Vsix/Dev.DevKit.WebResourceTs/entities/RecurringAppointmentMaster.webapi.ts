/**
 * RecurringAppointmentMaster.webapi.ts - RecurringAppointmentMaster WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for RecurringAppointmentMaster
 * All fields return string representation of their values
 */
export interface IRecurringAppointmentMasterFormattedValue {
	readonly ActivityId: string;
	readonly Category: string;
	readonly CreatedBy: string;
	readonly CreatedOn_UtcDateAndTime: string;
	readonly CreatedOnBehalfBy: string;
	readonly DayOfMonth: string;
	readonly DaysOfWeekMask: string;
	readonly DeletedExceptionsList: string;
	readonly Description: string;
	readonly Duration: string;
	readonly EffectiveEndDate_UtcDateAndTime: string;
	readonly EffectiveStartDate_UtcDateOnly: string;
	readonly EndTime_UtcDateAndTime: string;
	readonly ExchangeRate: string;
	readonly ExpansionStateCode: string;
	readonly FirstDayOfWeek: string;
	readonly GlobalObjectId: string;
	readonly GroupId: string;
	readonly ImportSequenceNumber: string;
	readonly Instance: string;
	readonly InstanceTypeCode: string;
	readonly Interval: string;
	readonly IsAllDayEvent: string;
	readonly IsBilled: string;
	readonly IsMapiPrivate: string;
	readonly IsNthMonthly: string;
	readonly IsNthYearly: string;
	readonly IsOnlineMeeting: string;
	readonly IsRegenerate: string;
	readonly IsRegularActivity: string;
	readonly IsUnsafe: string;
	readonly IsWeekDayPattern: string;
	readonly IsWorkflowCreated: string;
	readonly LastExpandedInstanceDate_UtcDateAndTime: string;
	readonly Location: string;
	readonly ModifiedBy: string;
	readonly ModifiedOn_UtcDateAndTime: string;
	readonly ModifiedOnBehalfBy: string;
	readonly MonthOfYear: string;
	readonly NextExpansionInstanceDate_UtcDateAndTime: string;
	readonly Occurrences: string;
	readonly OnlineMeetingChatId: string;
	readonly OnlineMeetingId: string;
	readonly OnlineMeetingJoinUrl: string;
	readonly OnlineMeetingType: string;
	readonly OutlookOwnerApptId: string;
	readonly OverriddenCreatedOn_UtcDateOnly: string;
	readonly OwnerId: string;
	readonly OwningBusinessUnit: string;
	readonly OwningTeam: string;
	readonly OwningUser: string;
	readonly PatternEndDate_UtcDateOnly: string;
	readonly PatternEndType: string;
	readonly PatternStartDate_UtcDateOnly: string;
	readonly PriorityCode: string;
	readonly ProcessId: string;
	readonly RecurrencePatternType: string;
	readonly RegardingObjectId: string;
	readonly RuleId: string;
	readonly ScheduledEnd_UtcDateAndTime: string;
	readonly ScheduledStart_UtcDateAndTime: string;
	readonly SeriesStatus: string;
	readonly SortDate_UtcDateAndTime: string;
	readonly StageId: string;
	readonly StartTime_UtcDateAndTime: string;
	readonly StateCode: string;
	readonly StatusCode: string;
	readonly Subcategory: string;
	readonly Subject: string;
	readonly SubscriptionId: string;
	readonly TimeZoneRuleVersionNumber: string;
	readonly TransactionCurrencyId: string;
	readonly TraversedPath: string;
	readonly UTCConversionTimeZoneCode: string;
	readonly VersionNumber: string;
}

/**
 * RecurringAppointmentMaster WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IRecurringAppointmentMasterApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: IRecurringAppointmentMasterFormattedValue;
	/** Unique identifier of the recurring appointment series. */
	ActivityId: DevKit.Guid | null;
	/** Type a category to identify the recurring appointment type, such as status meeting or service call, to tie the appointment to a business group or function. */
	Category: string | null;
	/** Shows who created the record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Shows who created the record on behalf of another user. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** The day of the month on which the recurring appointment occurs. */
	DayOfMonth: number | null;
	/** Bitmask that represents the days of the week on which the recurring appointment occurs. */
	DaysOfWeekMask: number | null;
	/** List of deleted instances of the recurring appointment series. */
	readonly DeletedExceptionsList: string | null;
	/** Type additional information to describe the recurring appointment, such as key talking points or objectives. */
	Description: string | null;
	/** Duration of the recurring appointment series in minutes. */
	Duration: number | null;
	/** Actual end date of the recurring appointment series based on the specified end date and recurrence pattern. */
	EffectiveEndDate_UtcDateAndTime: Date | null;
	/** Actual start date of the recurring appointment series based on the specified start date and recurrence pattern. */
	EffectiveStartDate_UtcDateOnly: Date | null;
	/** End time of the associated activity. */
	EndTime_UtcDateAndTime: Date | null;
	/** Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency. */
	readonly ExchangeRate: number | null;
	/** State code to indicate whether the recurring appointment series is expanded fully or partially. */
	readonly ExpansionStateCode: number | null;
	/** First day of week for the recurrence pattern. */
	FirstDayOfWeek: number | null;
	/** Unique Outlook identifier to correlate recurring appointment series across Exchange mailboxes. */
	GlobalObjectId: string | null;
	/** Unique identifier of the recurring appointment series for which the recurrence information was updated.  */
	readonly GroupId: DevKit.Guid | null;
	/** Unique identifier of the data import or data migration that created this record. */
	ImportSequenceNumber: number | null;
	/** Specifies the recurring appointment series to occur on every Nth day of a month. Valid for monthly and yearly recurrence patterns only. */
	Instance: number | null;
	/** Type of instance of a recurring appointment series. */
	readonly InstanceTypeCode: number | null;
	/** Number of units of a given recurrence type between occurrences. */
	Interval: number | null;
	/** Select whether the recurring appointment is an all-day event to make sure that the required resources are scheduled for the full day. */
	IsAllDayEvent: boolean | null;
	/** Indicates whether the recurring appointment series was billed as part of resolving a case. */
	IsBilled: boolean | null;
	/** For internal use only. */
	IsMapiPrivate: boolean | null;
	/** Indicates whether the recurring appointment series should occur after every N months. Valid for monthly recurrence pattern only. */
	IsNthMonthly: boolean | null;
	/** Indicates whether the recurring appointment series should occur after every N years. Valid for yearly recurrence pattern only. */
	IsNthYearly: boolean | null;
	/** Displays whether or not this is an online meeting. */
	IsOnlineMeeting: boolean | null;
	/** For internal use only. */
	IsRegenerate: boolean | null;
	/** Indicates whether the activity is a regular activity type or event type. */
	readonly IsRegularActivity: boolean | null;
	/** For internal use only. */
	readonly IsUnsafe: number | null;
	/** Indicates whether the weekly recurrence pattern is a daily weekday pattern. Valid for weekly recurrence pattern only. */
	IsWeekDayPattern: boolean | null;
	/** Indicates whether the recurring appointment series was created from a workflow rule. */
	IsWorkflowCreated: boolean | null;
	/** Date of last expanded instance of a recurring appointment series. */
	readonly LastExpandedInstanceDate_UtcDateAndTime: Date | null;
	/** Type the location where the recurring appointment will take place, such as a conference room or customer office. */
	Location: string | null;
	/** Shows who last updated the record. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Shows who last updated the record on behalf of another user. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Indicates the month of the year for the recurrence pattern. */
	MonthOfYear: number | null;
	/** Date of the next expanded instance of a recurring appointment series. */
	readonly NextExpansionInstanceDate_UtcDateAndTime: Date | null;
	/** Number of appointment occurrences in a recurring appointment series. */
	Occurrences: number | null;
	/** Shows the online meeting chat id. */
	OnlineMeetingChatId: string | null;
	/** Shows the online meeting id. */
	OnlineMeetingId: string | null;
	/** Shows the online meeting join url. */
	OnlineMeetingJoinUrl: string | null;
	/** Displays the online meeting type. */
	OnlineMeetingType: number | null;
	/** Unique identifier of the Microsoft Office Outlook recurring appointment series owner that correlates to the PR_OWNER_APPT_ID MAPI property. */
	OutlookOwnerApptId: number | null;
	/** Date and time that the record was migrated. */
	OverriddenCreatedOn_UtcDateOnly: Date | null;
	/** Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
	OwnerId: DevKit.Guid | null;
	/** Unique identifier of the business unit that owns the recurring appointment series. */
	readonly OwningBusinessUnit: DevKit.Guid | null;
	/** Unique identifier of the team who owns the recurring appointment series. */
	readonly OwningTeam: DevKit.Guid | null;
	/** Unique identifier of the user who owns the recurring appointment series. */
	readonly OwningUser: DevKit.Guid | null;
	/** End date of the recurrence range. */
	PatternEndDate_UtcDateOnly: Date | null;
	/** Select the type of end date for the recurring appointment, such as no end date or the number of occurrences. */
	PatternEndType: number | null;
	/** Start date of the recurrence range. */
	PatternStartDate_UtcDateOnly: Date | null;
	/** Select the priority so that preferred customers or critical issues are handled quickly. */
	PriorityCode: number | null;
	/** Shows the ID of the process. */
	ProcessId: DevKit.Guid | null;
	/** Select the pattern type for the recurring appointment to indicate whether the appointment occurs daily, weekly, monthly, or yearly. */
	RecurrencePatternType: number | null;
	/** Choose the record that the recurring appointment series relates to. */
	RegardingObjectId: DevKit.Guid | null;
	/** Unique identifier of the recurrence rule that is associated with the recurring appointment series. */
	readonly RuleId: DevKit.Guid | null;
	/** Scheduled end time of the recurring appointment series. */
	readonly ScheduledEnd_UtcDateAndTime: Date | null;
	/** Scheduled start time of the recurring appointment series. */
	readonly ScheduledStart_UtcDateAndTime: Date | null;
	/** Indicates whether the recurring appointment series is active or inactive. */
	SeriesStatus: boolean | null;
	/** Shows the date and time by which the activities are sorted. */
	SortDate_UtcDateAndTime: Date | null;
	/** Shows the ID of the stage. */
	StageId: DevKit.Guid | null;
	/** Start time of the recurring appointment series. */
	StartTime_UtcDateAndTime: Date | null;
	/** Shows whether the recurring appointment is open, scheduled, completed, or canceled. Completed and canceled appointments are read-only and can't be edited. */
	StateCode: number | null;
	/** Select the recurring appointment's status. */
	StatusCode: number | null;
	/** Type a subcategory to identify the recurring appointment type and relate the activity to a specific product, sales region, business group, or other function. */
	Subcategory: string | null;
	/** Type a short description about the objective or primary topic of the recurring appointment. */
	Subject: string | null;
	/** For internal use only. */
	SubscriptionId: DevKit.Guid | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
	TransactionCurrencyId: DevKit.Guid | null;
	/** For internal use only. */
	TraversedPath: string | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
	readonly VersionNumber: number | null;
}

const RecurringAppointmentMasterFieldConfig: DevKit.IWebApiFieldConfigMap = {
	ActivityId: { logicalName: 'activityid' },
	Category: { logicalName: 'category' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	DayOfMonth: { logicalName: 'dayofmonth', type: 'Integer' },
	DaysOfWeekMask: { logicalName: 'daysofweekmask', type: 'Integer' },
	DeletedExceptionsList: { logicalName: 'deletedexceptionslist', readOnly: true },
	Description: { logicalName: 'description' },
	Duration: { logicalName: 'duration', type: 'Integer' },
	EffectiveEndDate_UtcDateAndTime: { logicalName: 'effectiveenddate', type: 'DateTime' },
	EffectiveStartDate_UtcDateOnly: { logicalName: 'effectivestartdate', type: 'DateTime' },
	EndTime_UtcDateAndTime: { logicalName: 'endtime', type: 'DateTime' },
	ExchangeRate: { logicalName: 'exchangerate', readOnly: true, type: 'Number' },
	ExpansionStateCode: { logicalName: 'expansionstatecode', readOnly: true, type: 'Integer' },
	FirstDayOfWeek: { logicalName: 'firstdayofweek', type: 'Integer' },
	GlobalObjectId: { logicalName: 'globalobjectid' },
	GroupId: { schemaName: 'GroupId', logicalName: '_groupid_value', readOnly: true, entityCollectionName: 'recurringappointmentmasters', entityLogicalName: 'recurringappointmentmaster' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	Instance: { logicalName: 'instance', type: 'Integer' },
	InstanceTypeCode: { logicalName: 'instancetypecode', readOnly: true, type: 'Integer' },
	Interval: { logicalName: 'interval', type: 'Integer' },
	IsAllDayEvent: { logicalName: 'isalldayevent', type: 'Boolean' },
	IsBilled: { logicalName: 'isbilled', type: 'Boolean' },
	IsMapiPrivate: { logicalName: 'ismapiprivate', type: 'Boolean' },
	IsNthMonthly: { logicalName: 'isnthmonthly', type: 'Boolean' },
	IsNthYearly: { logicalName: 'isnthyearly', type: 'Boolean' },
	IsOnlineMeeting: { logicalName: 'isonlinemeeting', type: 'Boolean' },
	IsRegenerate: { logicalName: 'isregenerate', type: 'Boolean' },
	IsRegularActivity: { logicalName: 'isregularactivity', readOnly: true, type: 'Boolean' },
	IsUnsafe: { logicalName: 'isunsafe', readOnly: true, type: 'Integer' },
	IsWeekDayPattern: { logicalName: 'isweekdaypattern', type: 'Boolean' },
	IsWorkflowCreated: { logicalName: 'isworkflowcreated', type: 'Boolean' },
	LastExpandedInstanceDate_UtcDateAndTime: { logicalName: 'lastexpandedinstancedate', readOnly: true, type: 'DateTime' },
	Location: { logicalName: 'location' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	MonthOfYear: { logicalName: 'monthofyear', type: 'Integer' },
	NextExpansionInstanceDate_UtcDateAndTime: { logicalName: 'nextexpansioninstancedate', readOnly: true, type: 'DateTime' },
	Occurrences: { logicalName: 'occurrences', type: 'Integer' },
	OnlineMeetingChatId: { logicalName: 'onlinemeetingchatid' },
	OnlineMeetingId: { logicalName: 'onlinemeetingid' },
	OnlineMeetingJoinUrl: { logicalName: 'onlinemeetingjoinurl' },
	OnlineMeetingType: { logicalName: 'onlinemeetingtype', type: 'Integer' },
	OutlookOwnerApptId: { logicalName: 'outlookownerapptid', type: 'Integer' },
	OverriddenCreatedOn_UtcDateOnly: { logicalName: 'overriddencreatedon', type: 'DateTime' },
	OwnerId: { schemaName: 'OwnerId', logicalName: '_ownerid_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OwningBusinessUnit: { schemaName: 'OwningBusinessUnit', logicalName: '_owningbusinessunit_value', readOnly: true, entityCollectionName: 'businessunits', entityLogicalName: 'businessunit' },
	OwningTeam: { schemaName: 'OwningTeam', logicalName: '_owningteam_value', readOnly: true, entityCollectionName: 'teams', entityLogicalName: 'team' },
	OwningUser: { schemaName: 'OwningUser', logicalName: '_owninguser_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	PatternEndDate_UtcDateOnly: { logicalName: 'patternenddate', type: 'DateTime' },
	PatternEndType: { logicalName: 'patternendtype', type: 'Integer' },
	PatternStartDate_UtcDateOnly: { logicalName: 'patternstartdate', type: 'DateTime' },
	PriorityCode: { logicalName: 'prioritycode', type: 'Integer' },
	ProcessId: { logicalName: 'processid' },
	RecurrencePatternType: { logicalName: 'recurrencepatterntype', type: 'Integer' },
	RegardingObjectId: { schemaName: 'RegardingObjectId', logicalName: '_regardingobjectid_value', entityCollectionName: 'accounts', entityLogicalName: 'account' },
	RuleId: { schemaName: 'RuleId', logicalName: '_ruleid_value', readOnly: true, entityCollectionName: 'recurrencerules', entityLogicalName: 'recurrencerule' },
	ScheduledEnd_UtcDateAndTime: { logicalName: 'scheduledend', readOnly: true, type: 'DateTime' },
	ScheduledStart_UtcDateAndTime: { logicalName: 'scheduledstart', readOnly: true, type: 'DateTime' },
	SeriesStatus: { logicalName: 'seriesstatus', type: 'Boolean' },
	SortDate_UtcDateAndTime: { logicalName: 'sortdate', type: 'DateTime' },
	StageId: { logicalName: 'stageid' },
	StartTime_UtcDateAndTime: { logicalName: 'starttime', type: 'DateTime' },
	StateCode: { logicalName: 'statecode', type: 'Integer' },
	StatusCode: { logicalName: 'statuscode', type: 'Integer' },
	Subcategory: { logicalName: 'subcategory' },
	Subject: { logicalName: 'subject' },
	SubscriptionId: { logicalName: 'subscriptionid' },
	TimeZoneRuleVersionNumber: { logicalName: 'timezoneruleversionnumber', type: 'Integer' },
	TransactionCurrencyId: { schemaName: 'TransactionCurrencyId', logicalName: '_transactioncurrencyid_value', entityCollectionName: 'transactioncurrencies', entityLogicalName: 'transactioncurrency' },
	TraversedPath: { logicalName: 'traversedpath' },
	UTCConversionTimeZoneCode: { logicalName: 'utcconversiontimezonecode', type: 'Integer' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * RecurringAppointmentMaster WebApi class for early-bound style coding
 * Usage: const recurringAppointmentMaster = new RecurringAppointmentMasterApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class RecurringAppointmentMasterApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IRecurringAppointmentMasterApi>(entity, 'recurringappointmentmaster', 'recurringappointmentmasters', RecurringAppointmentMasterFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface RecurringAppointmentMasterApi extends IRecurringAppointmentMasterApi { }
