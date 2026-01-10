//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormAppointment {
		interface Header extends DevKit.Controls.IHeader {
			/** Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
			OwnerId: DevKit.Controls.Lookup;
			/** Select the priority so that preferred customers or critical issues are handled quickly. */
			PriorityCode: DevKit.Controls.OptionSet;
			/** Shows whether the appointment is open, completed, or canceled. Completed and canceled appointments are read-only and can't be edited. */
			StateCode: DevKit.Controls.OptionSet;
		}
		interface tab_appointment_Sections {
			/** Description */
			appointment_description: DevKit.Controls.Section;
			/** Attachments */
			attachments: DevKit.Controls.Section;
			general_information: DevKit.Controls.Section;
			/** Scheduling Information */
			scheduling_information: DevKit.Controls.Section;
			/** Section */
			tab_2_section_2: DevKit.Controls.Section;
		}
		/** Appointment */
		interface tab_appointment extends DevKit.Controls.ITab {
			Section: tab_appointment_Sections;
		}
		interface Tabs {
			/** Appointment */
			appointment: tab_appointment;
		}
		interface Body {
			Tab: Tabs;
			/** Type additional information to describe the purpose of the appointment. */
			Description: DevKit.Controls.String;
			/** Select whether the appointment is an all-day event to make sure that the required resources are scheduled for the full day. */
			IsAllDayEvent: DevKit.Controls.Boolean;
			isonlinemeeting: DevKit.Controls.ActionCards;
			/** Type the location where the appointment will take place, such as a conference room or customer office. */
			Location: DevKit.Controls.String;
			onlinemeetingjoinurl: DevKit.Controls.ActionCards;
			/** Enter the account, contact, lead, user, or other equipment resources that are not needed at the appointment, but can optionally attend. */
			OptionalAttendees: DevKit.Controls.Lookup;
			/** Choose the record that the appointment relates to. */
			RegardingObjectId: DevKit.Controls.Lookup;
			/** Enter the account, contact, lead, user, or other equipment resources that are required to attend the appointment. */
			requiredattendees: DevKit.Controls.Lookup;
			/** Shows the expected duration of the appointment, in minutes. */
			ScheduledDurationMinutes: DevKit.Controls.Integer;
			/** Enter the expected due date and time for the activity to be completed to provide details about the timing of the appointment. */
			ScheduledEnd: DevKit.Controls.DateTime;
			/** Enter the expected start date and time for the activity to provide details about the timing of the appointment. */
			ScheduledStart: DevKit.Controls.DateTime;
			/** Type a short description about the objective or primary topic of the appointment. */
			Subject: DevKit.Controls.String;
		}
		interface Grid {
			/** Attachment */
			attachmentsGrid: DevKit.Controls.Grid;
		}
	}
	export class FormAppointment extends DevKit.IForm {
		/**
		* Appointment [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** The Body section of form Appointment */
		Body: DevKit.FormAppointment.Body;
		/** The Header section of form Appointment */
		Header: DevKit.FormAppointment.Header;
		/** The Grid of form Appointment */
		Grid: DevKit.FormAppointment.Grid;
	}
	namespace FormAppointment_for_Interactive_experience {
		interface Header extends DevKit.Controls.IHeader {
			/** Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
			OwnerId: DevKit.Controls.Lookup;
			/** Select the priority so that preferred customers or critical issues are handled quickly. */
			PriorityCode: DevKit.Controls.OptionSet;
			/** Enter the expected due date and time for the activity to be completed to provide details about the timing of the appointment. */
			ScheduledEnd: DevKit.Controls.DateTime;
			/** Shows whether the appointment is open, completed, or canceled. Completed and canceled appointments are read-only and can't be edited. */
			StateCode: DevKit.Controls.OptionSet;
		}
		interface tab_tab_5_Sections {
			/** Description */
			appointment_description: DevKit.Controls.Section;
			/** DETAILS */
			tab_5_section_2: DevKit.Controls.Section;
			/** ATTACHMENTS */
			tab_5_section_3: DevKit.Controls.Section;
			/** Regarding */
			tab_5_section_5: DevKit.Controls.Section;
		}
		/** Appointment */
		interface tab_tab_5 extends DevKit.Controls.ITab {
			Section: tab_tab_5_Sections;
		}
		interface Tabs {
			/** Appointment */
			tab_5: tab_tab_5;
		}
		interface Body {
			Tab: Tabs;
			/** Type additional information to describe the purpose of the appointment. */
			Description: DevKit.Controls.String;
			/** Select whether the appointment is an all-day event to make sure that the required resources are scheduled for the full day. */
			IsAllDayEvent: DevKit.Controls.Boolean;
			isonlinemeeting: DevKit.Controls.ActionCards;
			/** Type the location where the appointment will take place, such as a conference room or customer office. */
			Location: DevKit.Controls.String;
			onlinemeetingjoinurl: DevKit.Controls.ActionCards;
			/** Enter the account, contact, lead, user, or other equipment resources that are not needed at the appointment, but can optionally attend. */
			OptionalAttendees: DevKit.Controls.Lookup;
			/** Choose the record that the appointment relates to. */
			RegardingObjectId: DevKit.Controls.Lookup;
			/** Choose the record that the appointment relates to. */
			RegardingObjectId1: DevKit.Controls.Lookup;
			/** Enter the account, contact, lead, user, or other equipment resources that are required to attend the appointment. */
			requiredattendees: DevKit.Controls.Lookup;
			/** Shows the expected duration of the appointment, in minutes. */
			ScheduledDurationMinutes: DevKit.Controls.Integer;
			/** Enter the expected due date and time for the activity to be completed to provide details about the timing of the appointment. */
			ScheduledEnd: DevKit.Controls.DateTime;
			/** Enter the expected start date and time for the activity to provide details about the timing of the appointment. */
			ScheduledStart: DevKit.Controls.DateTime;
			/** Type a short description about the objective or primary topic of the appointment. */
			Subject: DevKit.Controls.String;
		}
		interface Grid {
			/** ATTACHMENTS */
			attachmentsGrid: DevKit.Controls.Grid;
		}
	}
	export class FormAppointment_for_Interactive_experience extends DevKit.IForm {
		/**
		* Appointment for Interactive experience [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** The Body section of form Appointment_for_Interactive_experience */
		Body: DevKit.FormAppointment_for_Interactive_experience.Body;
		/** The Header section of form Appointment_for_Interactive_experience */
		Header: DevKit.FormAppointment_for_Interactive_experience.Header;
		/** The Grid of form Appointment_for_Interactive_experience */
		Grid: DevKit.FormAppointment_for_Interactive_experience.Grid;
	}
	namespace FormAppointment_Wizard {
		interface Header extends DevKit.Controls.IHeader {
			/** Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
			OwnerId: DevKit.Controls.Lookup;
			/** Select the priority so that preferred customers or critical issues are handled quickly. */
			PriorityCode: DevKit.Controls.OptionSet;
		}
		interface tab_appointment_Sections {
			/** Description */
			appointment_description: DevKit.Controls.Section;
			/** Attachments */
			attachments: DevKit.Controls.Section;
			general_information: DevKit.Controls.Section;
			Hidden_Section: DevKit.Controls.Section;
			scheduling_information: DevKit.Controls.Section;
		}
		interface tab_appointment extends DevKit.Controls.ITab {
			Section: tab_appointment_Sections;
		}
		interface Tabs {
			appointment: tab_appointment;
		}
		interface Body {
			Tab: Tabs;
			/** Type additional information to describe the purpose of the appointment. */
			Description: DevKit.Controls.String;
			/** Select whether the appointment is an all-day event to make sure that the required resources are scheduled for the full day. */
			IsAllDayEvent: DevKit.Controls.Boolean;
			isonlinemeeting: DevKit.Controls.ActionCards;
			/** Type the location where the appointment will take place, such as a conference room or customer office. */
			Location: DevKit.Controls.String;
			onlinemeetingjoinurl: DevKit.Controls.ActionCards;
			/** Enter the account, contact, lead, user, or other equipment resources that are not needed at the appointment, but can optionally attend. */
			OptionalAttendees: DevKit.Controls.Lookup;
			/** Choose the record that the appointment relates to. */
			RegardingObjectId: DevKit.Controls.Lookup;
			/** Enter the account, contact, lead, user, or other equipment resources that are required to attend the appointment. */
			requiredattendees: DevKit.Controls.Lookup;
			/** Shows the expected duration of the appointment, in minutes. */
			ScheduledDurationMinutes: DevKit.Controls.Integer;
			/** Enter the expected due date and time for the activity to be completed to provide details about the timing of the appointment. */
			ScheduledEnd: DevKit.Controls.DateTime;
			/** Enter the expected start date and time for the activity to provide details about the timing of the appointment. */
			ScheduledStart: DevKit.Controls.DateTime;
			/** Select the appointment's status. */
			StatusCode: DevKit.Controls.OptionSet;
			/** Type a short description about the objective or primary topic of the appointment. */
			Subject: DevKit.Controls.String;
		}
		interface Grid {
			/** Attachment */
			attachmentsGrid: DevKit.Controls.Grid;
		}
	}
	export class FormAppointment_Wizard extends DevKit.IForm {
		/**
		* Wizard [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** The Body section of form Appointment_Wizard */
		Body: DevKit.FormAppointment_Wizard.Body;
		/** The Header section of form Appointment_Wizard */
		Header: DevKit.FormAppointment_Wizard.Header;
		/** The Grid of form Appointment_Wizard */
		Grid: DevKit.FormAppointment_Wizard.Grid;
	}
	namespace FormAppointment_quick_create_form {
		interface tab_tab_1_Sections {
			tab_1_column_1_section_1: DevKit.Controls.Section;
			/** APPOINTMENT DETAILS */
			tab_1_column_2_section_1: DevKit.Controls.Section;
			tab_1_column_3_section_1: DevKit.Controls.Section;
		}
		interface tab_tab_1 extends DevKit.Controls.ITab {
			Section: tab_tab_1_Sections;
		}
		interface Tabs {
			tab_1: tab_tab_1;
		}
		interface Body {
			Tab: Tabs;
			/** Type additional information to describe the purpose of the appointment. */
			Description: DevKit.Controls.String;
			/** Select whether the appointment is an all-day event to make sure that the required resources are scheduled for the full day. */
			IsAllDayEvent: DevKit.Controls.Boolean;
			isonlinemeeting: DevKit.Controls.ActionCards;
			/** Type the location where the appointment will take place, such as a conference room or customer office. */
			Location: DevKit.Controls.String;
			/** Enter the account, contact, lead, user, or other equipment resources that are not needed at the appointment, but can optionally attend. */
			OptionalAttendees: DevKit.Controls.Lookup;
			/** Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
			OwnerId: DevKit.Controls.Lookup;
			/** Select the priority so that preferred customers or critical issues are handled quickly. */
			PriorityCode: DevKit.Controls.OptionSet;
			/** Choose the record that the appointment relates to. */
			RegardingObjectId: DevKit.Controls.Lookup;
			/** Enter the account, contact, lead, user, or other equipment resources that are required to attend the appointment. */
			requiredattendees: DevKit.Controls.Lookup;
			/** Shows the expected duration of the appointment, in minutes. */
			ScheduledDurationMinutes: DevKit.Controls.Integer;
			/** Enter the expected due date and time for the activity to be completed to provide details about the timing of the appointment. */
			ScheduledEnd: DevKit.Controls.DateTime;
			/** Enter the expected start date and time for the activity to provide details about the timing of the appointment. */
			ScheduledStart: DevKit.Controls.DateTime;
			/** Type a short description about the objective or primary topic of the appointment. */
			Subject: DevKit.Controls.String;
		}
	}
	export class FormAppointment_quick_create_form extends DevKit.IForm {
		/**
		* Appointment quick create form. [Quick Create]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** The Body section of form Appointment_quick_create_form */
		Body: DevKit.FormAppointment_quick_create_form.Body;
	}
	export class AppointmentApi {
		/**
		* DynamicsCrm.DevKit AppointmentApi
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
		/** For internal use only. */
		ActivityAdditionalParams: string | null;
		/** Unique identifier of the appointment. */
		ActivityId: string | null;
		/** Shows the value selected in the Duration field on the appointment at the time that the appointment is closed as completed. The duration is used to report the time spent on the activity. */
		ActualDurationMinutes: number | null;
		/** Enter the actual end date and time of the appointment. By default, it displays the date and time when the activity was completed or canceled, but can be edited to capture the actual duration of the appointment. */
		ActualEnd_UtcDateAndTime: Date | null;
		/** Enter the actual start date and time for the appointment. By default, it displays the date and time when the activity was created, but can be edited to capture the actual duration of the appointment. */
		ActualStart_UtcDateAndTime: Date | null;
		/** Shows the number of attachments on the appointment. */
		readonly AttachmentCount: number | null;
		/** Select the error code to identify issues with the outlook item recipients or attachments, such as blocked attachments. */
		AttachmentErrors: OptionSet.Appointment.AttachmentErrors | null;
		/** Type a category to identify the appointment type, such as sales demo, prospect call, or service call, to tie the appointment to a business group or function. */
		Category: string | null;
		/** Shows who created the record. */
		readonly CreatedBy: string | null;
		/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Shows who created the record on behalf of another user. */
		readonly CreatedOnBehalfBy: string | null;
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
		readonly InstanceTypeCode: OptionSet.Appointment.InstanceTypeCode | null;
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
		readonly ModifiedBy: string | null;
		/** For internal use only.  */
		readonly ModifiedFieldsMask: string | null;
		/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Shows who created the record on behalf of another user. */
		readonly ModifiedOnBehalfBy: string | null;
		/** Shows how long, in minutes, that the record was on hold. */
		readonly OnHoldTime: number | null;
		/** Shows the online meeting chat id. */
		OnlineMeetingChatId: string | null;
		/** Shows the online meeting id. */
		OnlineMeetingId: string | null;
		/** Shows the online meeting join url. */
		OnlineMeetingJoinUrl: string | null;
		/** Displays the online meeting type. */
		OnlineMeetingType: OptionSet.Appointment.OnlineMeetingType | null;
		/** The original start date of the appointment. */
		readonly OriginalStartDate_UtcDateAndTime: Date | null;
		/** Unique identifier of the Microsoft Office Outlook appointment owner that correlates to the PR_OWNER_APPT_ID MAPI property. */
		OutlookOwnerApptId: number | null;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date | null;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string | null;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string | null;
		/** Shows the business unit that the record owner belongs to. */
		readonly OwningBusinessUnit: string | null;
		/** Unique identifier of the team that owns the appointment. */
		readonly OwningTeam: string | null;
		/** Unique identifier of the user that owns the appointment. */
		readonly OwningUser: string | null;
		/** Select the priority so that preferred customers or critical issues are handled quickly. */
		PriorityCode: OptionSet.Appointment.PriorityCode | null;
		/** Shows the ID of the process. */
		ProcessId: string | null;
		/** Shows the expected duration of the appointment, in minutes. */
		ScheduledDurationMinutes: number | null;
		/** Enter the expected due date and time for the activity to be completed to provide details about the timing of the appointment. */
		ScheduledEnd_UtcDateAndTime: Date | null;
		/** Enter the expected start date and time for the activity to provide details about the timing of the appointment. */
		ScheduledStart_UtcDateAndTime: Date | null;
		/** Shows the ID of the recurring series of an instance. */
		readonly SeriesId: string | null;
		/** Choose the service level agreement (SLA) that you want to apply to the appointment record. */
		SLAId: string | null;
		/** Last SLA that was applied to this appointment. This field is for internal use only. */
		readonly SLAInvokedId: string | null;
		/** Shows the date and time by which the activities are sorted. */
		SortDate_UtcDateAndTime: Date | null;
		/** Shows the ID of the stage. */
		StageId: string | null;
		/** Shows whether the appointment is open, completed, or canceled. Completed and canceled appointments are read-only and can't be edited. */
		StateCode: OptionSet.Appointment.StateCode | null;
		/** Select the appointment's status. */
		StatusCode: OptionSet.Appointment.StatusCode | null;
		/** Type a subcategory to identify the appointment type and relate the activity to a specific product, sales region, business group, or other function. */
		Subcategory: string | null;
		/** Type a short description about the objective or primary topic of the appointment. */
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
		/** Version number of the appointment. */
		readonly VersionNumber: number | null;
		/** The array of object that can cast object to ActivityPartyApi class */
		ActivityParties: Array<Record<string, any>> | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			/** For internal use only. */
			readonly ActivityAdditionalParams: string;
			/** Unique identifier of the appointment. */
			readonly ActivityId: string;
			/** Shows the value selected in the Duration field on the appointment at the time that the appointment is closed as completed. The duration is used to report the time spent on the activity. */
			readonly ActualDurationMinutes: string;
			/** Enter the actual end date and time of the appointment. By default, it displays the date and time when the activity was completed or canceled, but can be edited to capture the actual duration of the appointment. */
			readonly ActualEnd_UtcDateAndTime: string;
			/** Enter the actual start date and time for the appointment. By default, it displays the date and time when the activity was created, but can be edited to capture the actual duration of the appointment. */
			readonly ActualStart_UtcDateAndTime: string;
			/** Shows the number of attachments on the appointment. */
			readonly AttachmentCount: string;
			/** Select the error code to identify issues with the outlook item recipients or attachments, such as blocked attachments. */
			readonly AttachmentErrors: string;
			/** Type a category to identify the appointment type, such as sales demo, prospect call, or service call, to tie the appointment to a business group or function. */
			readonly Category: string;
			/** Shows who created the record. */
			readonly CreatedBy: string;
			/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Shows who created the record on behalf of another user. */
			readonly CreatedOnBehalfBy: string;
			/** Type additional information to describe the purpose of the appointment. */
			readonly Description: string;
			/** Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency. */
			readonly ExchangeRate: string;
			/** Formatted scheduled end time of the appointment. */
			readonly FormattedScheduledEnd_TimezoneDateAndTime: string;
			/** Formatted scheduled start time of the appointment. */
			readonly FormattedScheduledStart_TimezoneDateAndTime: string;
			/** Shows the ID of the appointment in Microsoft Office Outlook. The ID is used to synchronize the appointment between Microsoft Dynamics 365 and the correct Exchange account. */
			readonly GlobalObjectId: string;
			/** Unique identifier of the data import or data migration that created this record. */
			readonly ImportSequenceNumber: string;
			/** Type of instance of a recurring series. */
			readonly InstanceTypeCode: string;
			/** Select whether the appointment is an all-day event to make sure that the required resources are scheduled for the full day. */
			readonly IsAllDayEvent: string;
			/** Information regarding whether the appointment was billed as part of resolving a case. */
			readonly IsBilled: string;
			/** Information regarding whether the appointment is a draft. */
			readonly IsDraft: string;
			/** For internal use only. */
			readonly IsMapiPrivate: string;
			/** Displays whether or not this is an online meeting. */
			readonly IsOnlineMeeting: string;
			/** Information regarding whether the activity is a regular activity type or event type. */
			readonly IsRegularActivity: string;
			/** For internal use only. */
			readonly IsUnsafe: string;
			/** Information regarding whether the appointment was created from a workflow rule. */
			readonly IsWorkflowCreated: string;
			/** Contains the date and time stamp of the last on hold time. */
			readonly LastOnHoldTime_UtcDateAndTime: string;
			/** Type the location where the appointment will take place, such as a conference room or customer office. */
			readonly Location: string;
			/** Shows who last updated the record. */
			readonly ModifiedBy: string;
			/** For internal use only.  */
			readonly ModifiedFieldsMask: string;
			/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Shows who created the record on behalf of another user. */
			readonly ModifiedOnBehalfBy: string;
			/** Shows how long, in minutes, that the record was on hold. */
			readonly OnHoldTime: string;
			/** Shows the online meeting chat id. */
			readonly OnlineMeetingChatId: string;
			/** Shows the online meeting id. */
			readonly OnlineMeetingId: string;
			/** Shows the online meeting join url. */
			readonly OnlineMeetingJoinUrl: string;
			/** Displays the online meeting type. */
			readonly OnlineMeetingType: string;
			/** The original start date of the appointment. */
			readonly OriginalStartDate_UtcDateAndTime: string;
			/** Unique identifier of the Microsoft Office Outlook appointment owner that correlates to the PR_OWNER_APPT_ID MAPI property. */
			readonly OutlookOwnerApptId: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Shows the business unit that the record owner belongs to. */
			readonly OwningBusinessUnit: string;
			/** Unique identifier of the team that owns the appointment. */
			readonly OwningTeam: string;
			/** Unique identifier of the user that owns the appointment. */
			readonly OwningUser: string;
			/** Select the priority so that preferred customers or critical issues are handled quickly. */
			readonly PriorityCode: string;
			/** Shows the ID of the process. */
			readonly ProcessId: string;
			/** Shows the expected duration of the appointment, in minutes. */
			readonly ScheduledDurationMinutes: string;
			/** Enter the expected due date and time for the activity to be completed to provide details about the timing of the appointment. */
			readonly ScheduledEnd_UtcDateAndTime: string;
			/** Enter the expected start date and time for the activity to provide details about the timing of the appointment. */
			readonly ScheduledStart_UtcDateAndTime: string;
			/** Shows the ID of the recurring series of an instance. */
			readonly SeriesId: string;
			/** Choose the service level agreement (SLA) that you want to apply to the appointment record. */
			readonly SLAId: string;
			/** Last SLA that was applied to this appointment. This field is for internal use only. */
			readonly SLAInvokedId: string;
			/** Shows the date and time by which the activities are sorted. */
			readonly SortDate_UtcDateAndTime: string;
			/** Shows the ID of the stage. */
			readonly StageId: string;
			/** Shows whether the appointment is open, completed, or canceled. Completed and canceled appointments are read-only and can't be edited. */
			readonly StateCode: string;
			/** Select the appointment's status. */
			readonly StatusCode: string;
			/** Type a subcategory to identify the appointment type and relate the activity to a specific product, sales region, business group, or other function. */
			readonly Subcategory: string;
			/** Type a short description about the objective or primary topic of the appointment. */
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
			/** Version number of the appointment. */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace Appointment {
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
		enum AttachmentErrors {
			/** None = 0*/
			None = 0,
			/** The_appointment_was_saved_as_a_Microsoft_Dynamics_365_appointment_record_but_not_all_the_attachments_could_be_saved_with_it_An_attachment_cannot_be_saved_if_it_is_blocked_or_if_its_file_type_is_invalid = 1*/
			The_appointment_was_saved_as_a_Microsoft_Dynamics_365_appointment_record_but_not_all_the_attachments_could_be_saved_with_it_An_attachment_cannot_be_saved_if_it_is_blocked_or_if_its_file_type_is_invalid = 1
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
		enum OnlineMeetingType {
			/** Teams_Meeting = 1*/
			Teams_Meeting = 1
		}
		enum PriorityCode {
			/** High = 2*/
			High = 2,
			/** Low = 0*/
			Low = 0,
			/** Normal = 1*/
			Normal = 1
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