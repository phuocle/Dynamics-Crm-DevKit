//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	export class RecurringAppointmentMasterApi {
		/**
		* DynamicsCrm.DevKit RecurringAppointmentMasterApi
		* @param entity The entity object from OData response
		*/
		constructor(entity?: Record<string, any>)
		/**
		 * Get the raw value of an aliased field
		 * @param alias The alias field name
		 * @param isMultiOptionSet True if the field is a multi-option set
		 * @returns The raw value or null if not found
		 */
		getAliasedValue(alias: string, isMultiOptionSet?: boolean): any;
		/**
		 * Get the formatted value of an aliased field
		 * @param alias The alias field name
		 * @param isMultiOptionSet True if the field is a multi-option set
		 * @returns The formatted value or empty string if not found
		 */
		getAliasedFormattedValue(alias: string, isMultiOptionSet?: boolean): string | string[];
		/** The entity object for Create/Update operations*/
		readonly Entity: Record<string, any>;
		/** The OData entity object containing raw data*/
		readonly ODataEntity: Record<string, any>;
		/** The entity name */
		readonly EntityName: string;
		/** The entity collection name */
		readonly EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependent on the fields that are retrieved */
		readonly "@odata.etag": string;
		/** Unique identifier of the recurring appointment series. */
		ActivityId: string | null;
		/** Type a category to identify the recurring appointment type, such as status meeting or service call, to tie the appointment to a business group or function. */
		Category: string | null;
		/** Shows who created the record. */
		readonly CreatedBy: string | null;
		/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Shows who created the record on behalf of another user. */
		readonly CreatedOnBehalfBy: string | null;
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
		readonly ExpansionStateCode: OptionSet.RecurringAppointmentMaster.ExpansionStateCode | null;
		/** First day of week for the recurrence pattern. */
		FirstDayOfWeek: number | null;
		/** Unique Outlook identifier to correlate recurring appointment series across Exchange mailboxes. */
		GlobalObjectId: string | null;
		/** Unique identifier of the recurring appointment series for which the recurrence information was updated.  */
		readonly GroupId: string | null;
		/** Unique identifier of the data import or data migration that created this record. */
		ImportSequenceNumber: number | null;
		/** Specifies the recurring appointment series to occur on every Nth day of a month. Valid for monthly and yearly recurrence patterns only. */
		Instance: OptionSet.RecurringAppointmentMaster.Instance | null;
		/** Type of instance of a recurring appointment series. */
		readonly InstanceTypeCode: OptionSet.RecurringAppointmentMaster.InstanceTypeCode | null;
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
		readonly ModifiedBy: string | null;
		/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Shows who last updated the record on behalf of another user. */
		readonly ModifiedOnBehalfBy: string | null;
		/** Indicates the month of the year for the recurrence pattern. */
		MonthOfYear: OptionSet.RecurringAppointmentMaster.MonthOfYear | null;
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
		OnlineMeetingType: OptionSet.RecurringAppointmentMaster.OnlineMeetingType | null;
		/** Unique identifier of the Microsoft Office Outlook recurring appointment series owner that correlates to the PR_OWNER_APPT_ID MAPI property. */
		OutlookOwnerApptId: number | null;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date | null;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string | null;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string | null;
		/** Unique identifier of the business unit that owns the recurring appointment series. */
		readonly OwningBusinessUnit: string | null;
		/** Unique identifier of the team who owns the recurring appointment series. */
		readonly OwningTeam: string | null;
		/** Unique identifier of the user who owns the recurring appointment series. */
		readonly OwningUser: string | null;
		/** End date of the recurrence range. */
		PatternEndDate_UtcDateOnly: Date | null;
		/** Select the type of end date for the recurring appointment, such as no end date or the number of occurrences. */
		PatternEndType: OptionSet.RecurringAppointmentMaster.PatternEndType | null;
		/** Start date of the recurrence range. */
		PatternStartDate_UtcDateOnly: Date | null;
		/** Select the priority so that preferred customers or critical issues are handled quickly. */
		PriorityCode: OptionSet.RecurringAppointmentMaster.PriorityCode | null;
		/** Shows the ID of the process. */
		ProcessId: string | null;
		/** Select the pattern type for the recurring appointment to indicate whether the appointment occurs daily, weekly, monthly, or yearly. */
		RecurrencePatternType: OptionSet.RecurringAppointmentMaster.RecurrencePatternType | null;
		/** Unique identifier of the recurrence rule that is associated with the recurring appointment series. */
		readonly RuleId: string | null;
		/** Scheduled end time of the recurring appointment series. */
		readonly ScheduledEnd_UtcDateAndTime: Date | null;
		/** Scheduled start time of the recurring appointment series. */
		readonly ScheduledStart_UtcDateAndTime: Date | null;
		/** Indicates whether the recurring appointment series is active or inactive. */
		SeriesStatus: boolean | null;
		/** Shows the date and time by which the activities are sorted. */
		SortDate_UtcDateAndTime: Date | null;
		/** Shows the ID of the stage. */
		StageId: string | null;
		/** Start time of the recurring appointment series. */
		StartTime_UtcDateAndTime: Date | null;
		/** Shows whether the recurring appointment is open, scheduled, completed, or canceled. Completed and canceled appointments are read-only and can't be edited. */
		StateCode: OptionSet.RecurringAppointmentMaster.StateCode | null;
		/** Select the recurring appointment's status. */
		StatusCode: OptionSet.RecurringAppointmentMaster.StatusCode | null;
		/** Type a subcategory to identify the recurring appointment type and relate the activity to a specific product, sales region, business group, or other function. */
		Subcategory: string | null;
		/** Type a short description about the objective or primary topic of the recurring appointment. */
		Subject: string | null;
		/** For internal use only. */
		SubscriptionId: string | null;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number | null;
		/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
		TransactionCurrencyId: string | null;
		/** For internal use only. */
		TraversedPath: string | null;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number | null;
		readonly VersionNumber: number | null;
		/** The array of object that can cast object to ActivityPartyApi class */
		ActivityParties: Array<Record<string, any>> | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			/** Unique identifier of the recurring appointment series. */
			readonly ActivityId: string;
			/** Type a category to identify the recurring appointment type, such as status meeting or service call, to tie the appointment to a business group or function. */
			readonly Category: string;
			/** Shows who created the record. */
			readonly CreatedBy: string;
			/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Shows who created the record on behalf of another user. */
			readonly CreatedOnBehalfBy: string;
			/** The day of the month on which the recurring appointment occurs. */
			readonly DayOfMonth: string;
			/** Bitmask that represents the days of the week on which the recurring appointment occurs. */
			readonly DaysOfWeekMask: string;
			/** List of deleted instances of the recurring appointment series. */
			readonly DeletedExceptionsList: string;
			/** Type additional information to describe the recurring appointment, such as key talking points or objectives. */
			readonly Description: string;
			/** Duration of the recurring appointment series in minutes. */
			readonly Duration: string;
			/** Actual end date of the recurring appointment series based on the specified end date and recurrence pattern. */
			readonly EffectiveEndDate_UtcDateAndTime: string;
			/** Actual start date of the recurring appointment series based on the specified start date and recurrence pattern. */
			readonly EffectiveStartDate_UtcDateOnly: string;
			/** End time of the associated activity. */
			readonly EndTime_UtcDateAndTime: string;
			/** Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency. */
			readonly ExchangeRate: string;
			/** State code to indicate whether the recurring appointment series is expanded fully or partially. */
			readonly ExpansionStateCode: string;
			/** First day of week for the recurrence pattern. */
			readonly FirstDayOfWeek: string;
			/** Unique Outlook identifier to correlate recurring appointment series across Exchange mailboxes. */
			readonly GlobalObjectId: string;
			/** Unique identifier of the recurring appointment series for which the recurrence information was updated.  */
			readonly GroupId: string;
			/** Unique identifier of the data import or data migration that created this record. */
			readonly ImportSequenceNumber: string;
			/** Specifies the recurring appointment series to occur on every Nth day of a month. Valid for monthly and yearly recurrence patterns only. */
			readonly Instance: string;
			/** Type of instance of a recurring appointment series. */
			readonly InstanceTypeCode: string;
			/** Number of units of a given recurrence type between occurrences. */
			readonly Interval: string;
			/** Select whether the recurring appointment is an all-day event to make sure that the required resources are scheduled for the full day. */
			readonly IsAllDayEvent: string;
			/** Indicates whether the recurring appointment series was billed as part of resolving a case. */
			readonly IsBilled: string;
			/** For internal use only. */
			readonly IsMapiPrivate: string;
			/** Indicates whether the recurring appointment series should occur after every N months. Valid for monthly recurrence pattern only. */
			readonly IsNthMonthly: string;
			/** Indicates whether the recurring appointment series should occur after every N years. Valid for yearly recurrence pattern only. */
			readonly IsNthYearly: string;
			/** Displays whether or not this is an online meeting. */
			readonly IsOnlineMeeting: string;
			/** For internal use only. */
			readonly IsRegenerate: string;
			/** Indicates whether the activity is a regular activity type or event type. */
			readonly IsRegularActivity: string;
			/** For internal use only. */
			readonly IsUnsafe: string;
			/** Indicates whether the weekly recurrence pattern is a daily weekday pattern. Valid for weekly recurrence pattern only. */
			readonly IsWeekDayPattern: string;
			/** Indicates whether the recurring appointment series was created from a workflow rule. */
			readonly IsWorkflowCreated: string;
			/** Date of last expanded instance of a recurring appointment series. */
			readonly LastExpandedInstanceDate_UtcDateAndTime: string;
			/** Type the location where the recurring appointment will take place, such as a conference room or customer office. */
			readonly Location: string;
			/** Shows who last updated the record. */
			readonly ModifiedBy: string;
			/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Shows who last updated the record on behalf of another user. */
			readonly ModifiedOnBehalfBy: string;
			/** Indicates the month of the year for the recurrence pattern. */
			readonly MonthOfYear: string;
			/** Date of the next expanded instance of a recurring appointment series. */
			readonly NextExpansionInstanceDate_UtcDateAndTime: string;
			/** Number of appointment occurrences in a recurring appointment series. */
			readonly Occurrences: string;
			/** Shows the online meeting chat id. */
			readonly OnlineMeetingChatId: string;
			/** Shows the online meeting id. */
			readonly OnlineMeetingId: string;
			/** Shows the online meeting join url. */
			readonly OnlineMeetingJoinUrl: string;
			/** Displays the online meeting type. */
			readonly OnlineMeetingType: string;
			/** Unique identifier of the Microsoft Office Outlook recurring appointment series owner that correlates to the PR_OWNER_APPT_ID MAPI property. */
			readonly OutlookOwnerApptId: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Unique identifier of the business unit that owns the recurring appointment series. */
			readonly OwningBusinessUnit: string;
			/** Unique identifier of the team who owns the recurring appointment series. */
			readonly OwningTeam: string;
			/** Unique identifier of the user who owns the recurring appointment series. */
			readonly OwningUser: string;
			/** End date of the recurrence range. */
			readonly PatternEndDate_UtcDateOnly: string;
			/** Select the type of end date for the recurring appointment, such as no end date or the number of occurrences. */
			readonly PatternEndType: string;
			/** Start date of the recurrence range. */
			readonly PatternStartDate_UtcDateOnly: string;
			/** Select the priority so that preferred customers or critical issues are handled quickly. */
			readonly PriorityCode: string;
			/** Shows the ID of the process. */
			readonly ProcessId: string;
			/** Select the pattern type for the recurring appointment to indicate whether the appointment occurs daily, weekly, monthly, or yearly. */
			readonly RecurrencePatternType: string;
			/** Unique identifier of the recurrence rule that is associated with the recurring appointment series. */
			readonly RuleId: string;
			/** Scheduled end time of the recurring appointment series. */
			readonly ScheduledEnd_UtcDateAndTime: string;
			/** Scheduled start time of the recurring appointment series. */
			readonly ScheduledStart_UtcDateAndTime: string;
			/** Indicates whether the recurring appointment series is active or inactive. */
			readonly SeriesStatus: string;
			/** Shows the date and time by which the activities are sorted. */
			readonly SortDate_UtcDateAndTime: string;
			/** Shows the ID of the stage. */
			readonly StageId: string;
			/** Start time of the recurring appointment series. */
			readonly StartTime_UtcDateAndTime: string;
			/** Shows whether the recurring appointment is open, scheduled, completed, or canceled. Completed and canceled appointments are read-only and can't be edited. */
			readonly StateCode: string;
			/** Select the recurring appointment's status. */
			readonly StatusCode: string;
			/** Type a subcategory to identify the recurring appointment type and relate the activity to a specific product, sales region, business group, or other function. */
			readonly Subcategory: string;
			/** Type a short description about the objective or primary topic of the recurring appointment. */
			readonly Subject: string;
			/** For internal use only. */
			readonly SubscriptionId: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
			readonly TransactionCurrencyId: string;
			/** For internal use only. */
			readonly TraversedPath: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace RecurringAppointmentMaster {
		enum ActivityTypeCode {
			/** Appointment = 4201*/
			Appointment = 4201,
			/** Email = 4202*/
			Email = 4202,
			/** Fax = 4204*/
			Fax = 4204,
			/** Invite_Redemption = 10407*/
			Invite_Redemption = 10407,
			/** Letter = 4207*/
			Letter = 4207,
			/** Phone_Call = 4210*/
			Phone_Call = 4210,
			/** Portal_Comment = 10408*/
			Portal_Comment = 10408,
			/** Recurring_Appointment = 4251*/
			Recurring_Appointment = 4251,
			/** Task = 4212*/
			Task = 4212,
			/** Teams_chat = 10253*/
			Teams_chat = 10253
		}
		enum ExpansionStateCode {
			/** Full = 2*/
			Full = 2,
			/** Partial = 1*/
			Partial = 1,
			/** Unexpanded = 0*/
			Unexpanded = 0
		}
		enum Instance {
			/** First = 1*/
			First = 1,
			/** Fourth = 4*/
			Fourth = 4,
			/** Last = 5*/
			Last = 5,
			/** Second = 2*/
			Second = 2,
			/** Third = 3*/
			Third = 3
		}
		enum InstanceTypeCode {
			/** Not_Recurring = 0*/
			Not_Recurring = 0,
			/** Recurring_Exception = 3*/
			Recurring_Exception = 3,
			/** Recurring_Future_Exception = 4*/
			Recurring_Future_Exception = 4,
			/** Recurring_Instance = 2*/
			Recurring_Instance = 2,
			/** Recurring_Master = 1*/
			Recurring_Master = 1
		}
		enum MonthOfYear {
			/** April = 4*/
			April = 4,
			/** August = 8*/
			August = 8,
			/** December = 12*/
			December = 12,
			/** February = 2*/
			February = 2,
			/** Invalid_Month_Of_Year = 0*/
			Invalid_Month_Of_Year = 0,
			/** January = 1*/
			January = 1,
			/** July = 7*/
			July = 7,
			/** June = 6*/
			June = 6,
			/** March = 3*/
			March = 3,
			/** May = 5*/
			May = 5,
			/** November = 11*/
			November = 11,
			/** October = 10*/
			October = 10,
			/** September = 9*/
			September = 9
		}
		enum OnlineMeetingType {
			/** Teams_Meeting = 1*/
			Teams_Meeting = 1
		}
		enum PatternEndType {
			/** No_End_Date = 1*/
			No_End_Date = 1,
			/** Occurrences = 2*/
			Occurrences = 2,
			/** Pattern_End_Date = 3*/
			Pattern_End_Date = 3
		}
		enum PriorityCode {
			/** High = 2*/
			High = 2,
			/** Low = 0*/
			Low = 0,
			/** Normal = 1*/
			Normal = 1
		}
		enum RecurrencePatternType {
			/** Daily = 0*/
			Daily = 0,
			/** Monthly = 2*/
			Monthly = 2,
			/** Weekly = 1*/
			Weekly = 1,
			/** Yearly = 3*/
			Yearly = 3
		}
		enum RegardingObjectTypeCode {
		}
		enum StateCode {
			/** Canceled = 2*/
			Canceled = 2,
			/** Completed = 1*/
			Completed = 1,
			/** Open = 0*/
			Open = 0,
			/** Scheduled = 3*/
			Scheduled = 3
		}
		enum StatusCode {
			/** Busy = 5*/
			Busy = 5,
			/** Canceled = 4*/
			Canceled = 4,
			/** Completed = 3*/
			Completed = 3,
			/** Free = 1*/
			Free = 1,
			/** Out_of_Office = 6*/
			Out_of_Office = 6,
			/** Tentative = 2*/
			Tentative = 2
		}
		enum RollupState {
			/** NotCalculated = 0 - Attribute value is yet to be calculated */
			NotCalculated,
			/** Calculated = 1 - Attribute value has been calculated per the last update time in <AttributeSchemaName>_Date attribute */
			Calculated,
			/** OverflowError = 2 - Attribute value calculation lead to overflow error */
			OverflowError,
			/** OtherError = 3 - Attribute value calculation failed due to an internal error, next run of calculation job will likely fix it */
			OtherError,
			/** RetryLimitExceeded = 4 - Attribute value calculation failed because the maximum number of retry attempts to calculate the value were exceeded likely due to high number of concurrency and locking conflicts */
			RetryLimitExceeded,
			/** HierarchicalRecursionLimitReached = 5 - Attribute value calculation failed because maximum hierarchy depth limit for calculation was reached */
			HierarchicalRecursionLimitReached,
			/** LoopDetected = 6 - Attribute value calculation failed because a recursive loop was detected in the hierarchy of the record */
			LoopDetected
		}
	}
}