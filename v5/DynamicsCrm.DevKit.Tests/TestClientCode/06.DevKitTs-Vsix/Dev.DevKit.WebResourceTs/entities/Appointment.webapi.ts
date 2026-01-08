/**
 * Appointment.webapi.ts - Appointment WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Appointment WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IAppointmentApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<IAppointmentApi, 'FormattedValue'>]: string };
	/** For internal use only. */
	ActivityAdditionalParams: string | null;
	/** Unique identifier of the appointment. */
	ActivityId: DevKit.Guid | null;
	/** Shows the value selected in the Duration field on the appointment at the time that the appointment is closed as completed. The duration is used to report the time spent on the activity. */
	ActualDurationMinutes: number | null;
	/** Enter the actual end date and time of the appointment. By default, it displays the date and time when the activity was completed or canceled, but can be edited to capture the actual duration of the appointment. */
	ActualEnd_UtcDateAndTime: Date | null;
	/** Enter the actual start date and time for the appointment. By default, it displays the date and time when the activity was created, but can be edited to capture the actual duration of the appointment. */
	ActualStart_UtcDateAndTime: Date | null;
	/** Shows the number of attachments on the appointment. */
	readonly AttachmentCount: number | null;
	/** Select the error code to identify issues with the outlook item recipients or attachments, such as blocked attachments. */
	AttachmentErrors: number | null;
	/** Type a category to identify the appointment type, such as sales demo, prospect call, or service call, to tie the appointment to a business group or function. */
	Category: string | null;
	/** Shows who created the record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Shows who created the record on behalf of another user. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Type additional information to describe the purpose of the appointment. */
	Description: string | null;
	/** Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency. */
	readonly ExchangeRate: number | null;
	/** Formatted scheduled end time of the appointment. */
	readonly FormattedScheduledEnd_TimezoneDateAndTime: Date | null;
	/** Formatted scheduled start time of the appointment. */
	readonly FormattedScheduledStart_TimezoneDateAndTime: Date | null;
	/** Shows the ID of the appointment in Microsoft Office Outlook. The ID is used to synchronize the appointment between Microsoft Dynamics 365 and the correct Exchange account. */
	GlobalObjectId: string | null;
	/** Unique identifier of the data import or data migration that created this record. */
	ImportSequenceNumber: number | null;
	/** Type of instance of a recurring series. */
	readonly InstanceTypeCode: number | null;
	/** Select whether the appointment is an all-day event to make sure that the required resources are scheduled for the full day. */
	IsAllDayEvent: boolean | null;
	/** Information regarding whether the appointment was billed as part of resolving a case. */
	IsBilled: boolean | null;
	/** Information regarding whether the appointment is a draft. */
	IsDraft: boolean | null;
	/** For internal use only. */
	IsMapiPrivate: boolean | null;
	/** Displays whether or not this is an online meeting. */
	IsOnlineMeeting: boolean | null;
	/** Information regarding whether the activity is a regular activity type or event type. */
	readonly IsRegularActivity: boolean | null;
	/** For internal use only. */
	readonly IsUnsafe: number | null;
	/** Information regarding whether the appointment was created from a workflow rule. */
	IsWorkflowCreated: boolean | null;
	/** Contains the date and time stamp of the last on hold time. */
	LastOnHoldTime_UtcDateAndTime: Date | null;
	/** Type the location where the appointment will take place, such as a conference room or customer office. */
	Location: string | null;
	/** Shows who last updated the record. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** For internal use only.  */
	readonly ModifiedFieldsMask: string | null;
	/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Shows who created the record on behalf of another user. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Shows how long, in minutes, that the record was on hold. */
	readonly OnHoldTime: number | null;
	/** Shows the online meeting chat id. */
	OnlineMeetingChatId: string | null;
	/** Shows the online meeting id. */
	OnlineMeetingId: string | null;
	/** Shows the online meeting join url. */
	OnlineMeetingJoinUrl: string | null;
	/** Displays the online meeting type. */
	OnlineMeetingType: number | null;
	/** The original start date of the appointment. */
	readonly OriginalStartDate_UtcDateAndTime: Date | null;
	/** Unique identifier of the Microsoft Office Outlook appointment owner that correlates to the PR_OWNER_APPT_ID MAPI property. */
	OutlookOwnerApptId: number | null;
	/** Date and time that the record was migrated. */
	OverriddenCreatedOn_UtcDateOnly: Date | null;
	/** Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
	OwnerId: DevKit.Guid | null;
	/** Shows the business unit that the record owner belongs to. */
	readonly OwningBusinessUnit: DevKit.Guid | null;
	/** Unique identifier of the team that owns the appointment. */
	readonly OwningTeam: DevKit.Guid | null;
	/** Unique identifier of the user that owns the appointment. */
	readonly OwningUser: DevKit.Guid | null;
	/** Select the priority so that preferred customers or critical issues are handled quickly. */
	PriorityCode: number | null;
	/** Shows the ID of the process. */
	ProcessId: DevKit.Guid | null;
	/** Choose the record that the appointment relates to. */
	RegardingObjectId: DevKit.Guid | null;
	/** Shows the expected duration of the appointment, in minutes. */
	ScheduledDurationMinutes: number | null;
	/** Enter the expected due date and time for the activity to be completed to provide details about the timing of the appointment. */
	ScheduledEnd_UtcDateAndTime: Date | null;
	/** Enter the expected start date and time for the activity to provide details about the timing of the appointment. */
	ScheduledStart_UtcDateAndTime: Date | null;
	/** Shows the ID of the recurring series of an instance. */
	readonly SeriesId: DevKit.Guid | null;
	/** Choose the service level agreement (SLA) that you want to apply to the appointment record. */
	SLAId: DevKit.Guid | null;
	/** Last SLA that was applied to this appointment. This field is for internal use only. */
	readonly SLAInvokedId: DevKit.Guid | null;
	/** Shows the date and time by which the activities are sorted. */
	SortDate_UtcDateAndTime: Date | null;
	/** Shows the ID of the stage. */
	StageId: DevKit.Guid | null;
	/** Shows whether the appointment is open, completed, or canceled. Completed and canceled appointments are read-only and can't be edited. */
	StateCode: number | null;
	/** Select the appointment's status. */
	StatusCode: number | null;
	/** Type a subcategory to identify the appointment type and relate the activity to a specific product, sales region, business group, or other function. */
	Subcategory: string | null;
	/** Type a short description about the objective or primary topic of the appointment. */
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
	/** Version number of the appointment. */
	readonly VersionNumber: number | null;
}

const AppointmentFieldConfig: DevKit.IWebApiFieldConfigMap = {
	ActivityAdditionalParams: { logicalName: 'activityadditionalparams' },
	ActivityId: { logicalName: 'activityid' },
	ActualDurationMinutes: { logicalName: 'actualdurationminutes', type: 'Integer' },
	ActualEnd_UtcDateAndTime: { logicalName: 'actualend', type: 'DateTime' },
	ActualStart_UtcDateAndTime: { logicalName: 'actualstart', type: 'DateTime' },
	AttachmentCount: { logicalName: 'attachmentcount', readOnly: true, type: 'Integer' },
	AttachmentErrors: { logicalName: 'attachmenterrors', type: 'Integer' },
	Category: { logicalName: 'category' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Description: { logicalName: 'description' },
	ExchangeRate: { logicalName: 'exchangerate', readOnly: true, type: 'Number' },
	FormattedScheduledEnd_TimezoneDateAndTime: { logicalName: 'formattedscheduledend', readOnly: true, type: 'DateTime' },
	FormattedScheduledStart_TimezoneDateAndTime: { logicalName: 'formattedscheduledstart', readOnly: true, type: 'DateTime' },
	GlobalObjectId: { logicalName: 'globalobjectid' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	InstanceTypeCode: { logicalName: 'instancetypecode', readOnly: true, type: 'Integer' },
	IsAllDayEvent: { logicalName: 'isalldayevent', type: 'Boolean' },
	IsBilled: { logicalName: 'isbilled', type: 'Boolean' },
	IsDraft: { logicalName: 'isdraft', type: 'Boolean' },
	IsMapiPrivate: { logicalName: 'ismapiprivate', type: 'Boolean' },
	IsOnlineMeeting: { logicalName: 'isonlinemeeting', type: 'Boolean' },
	IsRegularActivity: { logicalName: 'isregularactivity', readOnly: true, type: 'Boolean' },
	IsUnsafe: { logicalName: 'isunsafe', readOnly: true, type: 'Integer' },
	IsWorkflowCreated: { logicalName: 'isworkflowcreated', type: 'Boolean' },
	LastOnHoldTime_UtcDateAndTime: { logicalName: 'lastonholdtime', type: 'DateTime' },
	Location: { logicalName: 'location' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedFieldsMask: { logicalName: 'modifiedfieldsmask', readOnly: true },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OnHoldTime: { logicalName: 'onholdtime', readOnly: true, type: 'Integer' },
	OnlineMeetingChatId: { logicalName: 'onlinemeetingchatid' },
	OnlineMeetingId: { logicalName: 'onlinemeetingid' },
	OnlineMeetingJoinUrl: { logicalName: 'onlinemeetingjoinurl' },
	OnlineMeetingType: { logicalName: 'onlinemeetingtype', type: 'Integer' },
	OriginalStartDate_UtcDateAndTime: { logicalName: 'originalstartdate', readOnly: true, type: 'DateTime' },
	OutlookOwnerApptId: { logicalName: 'outlookownerapptid', type: 'Integer' },
	OverriddenCreatedOn_UtcDateOnly: { logicalName: 'overriddencreatedon', type: 'DateTime' },
	OwnerId: { schemaName: 'OwnerId', logicalName: '_ownerid_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OwningBusinessUnit: { schemaName: 'OwningBusinessUnit', logicalName: '_owningbusinessunit_value', readOnly: true, entityCollectionName: 'businessunits', entityLogicalName: 'businessunit' },
	OwningTeam: { schemaName: 'OwningTeam', logicalName: '_owningteam_value', readOnly: true, entityCollectionName: 'teams', entityLogicalName: 'team' },
	OwningUser: { schemaName: 'OwningUser', logicalName: '_owninguser_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	PriorityCode: { logicalName: 'prioritycode', type: 'Integer' },
	ProcessId: { logicalName: 'processid' },
	RegardingObjectId: { schemaName: 'RegardingObjectId', logicalName: '_regardingobjectid_value', entityCollectionName: 'accounts', entityLogicalName: 'account' },
	ScheduledDurationMinutes: { logicalName: 'scheduleddurationminutes', type: 'Integer' },
	ScheduledEnd_UtcDateAndTime: { logicalName: 'scheduledend', type: 'DateTime' },
	ScheduledStart_UtcDateAndTime: { logicalName: 'scheduledstart', type: 'DateTime' },
	SeriesId: { logicalName: 'seriesid', readOnly: true },
	SLAId: { schemaName: 'SLAId', logicalName: '_slaid_value', entityCollectionName: 'slas', entityLogicalName: 'sla' },
	SLAInvokedId: { schemaName: 'SLAInvokedId', logicalName: '_slainvokedid_value', readOnly: true, entityCollectionName: 'slas', entityLogicalName: 'sla' },
	SortDate_UtcDateAndTime: { logicalName: 'sortdate', type: 'DateTime' },
	StageId: { logicalName: 'stageid' },
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
 * Appointment WebApi class for early-bound style coding
 * Usage: const appointment = new AppointmentApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class AppointmentApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IAppointmentApi>(entity, 'appointment', 'appointments', AppointmentFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface AppointmentApi extends IAppointmentApi { }
