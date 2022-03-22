//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormRecurring_Appointment {
		interface Header extends DevKit.Controls.IHeader {
			/** Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
			OwnerId: DevKit.Controls.Lookup;
			/** Select the priority so that preferred customers or critical issues are handled quickly. */
			PriorityCode: DevKit.Controls.OptionSet;
			/** Shows whether the recurring appointment is open, scheduled, completed, or canceled. Completed and canceled appointments are read-only and can't be edited. */
			StateCode: DevKit.Controls.OptionSet;
		}
		interface tab_SUMMARY_TAB_Sections {
			appointment_description: DevKit.Controls.Section;
			general_information: DevKit.Controls.Section;
			tab_2_section_2: DevKit.Controls.Section;
		}
		interface tab_SUMMARY_TAB extends DevKit.Controls.ITab {
			Section: tab_SUMMARY_TAB_Sections;
		}
		interface Tabs {
			SUMMARY_TAB: tab_SUMMARY_TAB;
		}
		interface Body {
			Tab: Tabs;
			/** Type additional information to describe the recurring appointment, such as key talking points or objectives. */
			Description: DevKit.Controls.String;
			isonlinemeeting: DevKit.Controls.ActionCards;
			/** Type the location where the recurring appointment will take place, such as a conference room or customer office. */
			Location: DevKit.Controls.String;
			onlinemeetingjoinurl: DevKit.Controls.ActionCards;
			/** Enter the account, contact, lead, user, or other equipment resources that are not needed at the recurring appointment, but can optionally attend. */
			OptionalAttendees: DevKit.Controls.Lookup;
			/** Unique identifier of the object with which the recurring appointment series is associated. */
			RegardingObjectId: DevKit.Controls.Lookup;
			/** Enter the account, contact, lead, user, or other equipment resources that are required to attend the recurring appointment. */
			RequiredAttendees: DevKit.Controls.Lookup;
			/** Type a short description about the objective or primary topic of the recurring appointment. */
			Subject: DevKit.Controls.String;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class FormRecurring_Appointment extends DevKit.IForm {
		/**
		* Recurring Appointment [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Recurring_Appointment */
		Body: DevKit.FormRecurring_Appointment.Body;
		/** The Header section of form Recurring_Appointment */
		Header: DevKit.FormRecurring_Appointment.Header;
		/** The Process of form Recurring_Appointment */
		Process: DevKit.FormRecurring_Appointment.Process;
		/** The SidePanes of form Recurring_Appointment */
		SidePanes: DevKit.SidePanes;
	}
	class RecurringAppointmentMasterApi {
		/**
		* DynamicsCrm.DevKit RecurringAppointmentMasterApi
		* @param entity The entity object
		*/
		constructor(entity?: any);
		/**
		 * Get the value of alias
		 * @param alias the alias value
		 * @param isMultiOptionSet true if the alias is multi OptionSet
		 */
		getAliasedValue(alias: string, isMultiOptionSet?: boolean): any;
		/**
		 * Get the formatted value of alias
		 * @param alias the alias value
		 * @param isMultiOptionSet true if the alias is multi OptionSet
		 */
		getAliasedFormattedValue(alias: string, isMultiOptionSet?: boolean): string;
		/** The entity object for Create/Update */
		Entity: unknown;
		/** The OData entity object */
		ODataEntity: unknown;
		/** The entity name */
		EntityName: string;
		/** The entity collection name */
		EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependant on the fields that are retrieved */
		"@odata.etag": string;
		/** Unique identifier of the recurring appointment series. */
		ActivityId: string;
		/** Type a category to identify the recurring appointment type, such as status meeting or service call, to tie the appointment to a business group or function. */
		Category: string;
		/** Shows who created the record. */
		readonly CreatedBy: string;
		/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Shows who created the record on behalf of another user. */
		readonly CreatedOnBehalfBy: string;
		/** The day of the month on which the recurring appointment occurs. */
		DayOfMonth: number;
		/** Bitmask that represents the days of the week on which the recurring appointment occurs. */
		DaysOfWeekMask: number;
		/** List of deleted instances of the recurring appointment series. */
		readonly DeletedExceptionsList: string;
		/** Type additional information to describe the recurring appointment, such as key talking points or objectives. */
		Description: string;
		/** Duration of the recurring appointment series in minutes. */
		Duration: number;
		/** Actual end date of the recurring appointment series based on the specified end date and recurrence pattern. */
		EffectiveEndDate_UtcDateAndTime: Date;
		/** Actual start date of the recurring appointment series based on the specified start date and recurrence pattern. */
		EffectiveStartDate_UtcDateOnly: Date;
		/** End time of the associated activity. */
		EndTime_UtcDateAndTime: Date;
		/** Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency. */
		readonly ExchangeRate: number;
		/** State code to indicate whether the recurring appointment series is expanded fully or partially. */
		readonly ExpansionStateCode: OptionSet.RecurringAppointmentMaster.ExpansionStateCode;
		/** First day of week for the recurrence pattern. */
		FirstDayOfWeek: number;
		/** Unique Outlook identifier to correlate recurring appointment series across Exchange mailboxes. */
		GlobalObjectId: string;
		/** Unique identifier of the recurring appointment series for which the recurrence information was updated.  */
		readonly GroupId: string;
		/** Unique identifier of the data import or data migration that created this record. */
		ImportSequenceNumber: number;
		/** Specifies the recurring appointment series to occur on every Nth day of a month. Valid for monthly and yearly recurrence patterns only. */
		Instance: OptionSet.RecurringAppointmentMaster.Instance;
		/** Type of instance of a recurring appointment series. */
		readonly InstanceTypeCode: OptionSet.RecurringAppointmentMaster.InstanceTypeCode;
		/** Number of units of a given recurrence type between occurrences. */
		Interval: number;
		/** Select whether the recurring appointment is an all-day event to make sure that the required resources are scheduled for the full day. */
		IsAllDayEvent: boolean;
		/** Indicates whether the recurring appointment series was billed as part of resolving a case. */
		IsBilled: boolean;
		/** For internal use only. */
		IsMapiPrivate: boolean;
		/** Indicates whether the recurring appointment series should occur after every N months. Valid for monthly recurrence pattern only. */
		IsNthMonthly: boolean;
		/** Indicates whether the recurring appointment series should occur after every N years. Valid for yearly recurrence pattern only. */
		IsNthYearly: boolean;
		/** Displays whether or not this is an online meeting. */
		IsOnlineMeeting: boolean;
		/** For internal use only. */
		IsRegenerate: boolean;
		/** Indicates whether the activity is a regular activity type or event type. */
		readonly IsRegularActivity: boolean;
		/** For internal use only. */
		readonly IsUnsafe: number;
		/** Indicates whether the weekly recurrence pattern is a daily weekday pattern. Valid for weekly recurrence pattern only. */
		IsWeekDayPattern: boolean;
		/** Indicates whether the recurring appointment series was created from a workflow rule. */
		IsWorkflowCreated: boolean;
		/** Date of last expanded instance of a recurring appointment series. */
		readonly LastExpandedInstanceDate_UtcDateAndTime: Date;
		/** Type the location where the recurring appointment will take place, such as a conference room or customer office. */
		Location: string;
		/** Shows who last updated the record. */
		readonly ModifiedBy: string;
		/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Shows who last updated the record on behalf of another user. */
		readonly ModifiedOnBehalfBy: string;
		/** Indicates the month of the year for the recurrence pattern. */
		MonthOfYear: OptionSet.RecurringAppointmentMaster.MonthOfYear;
		/** Date of the next expanded instance of a recurring appointment series. */
		readonly NextExpansionInstanceDate_UtcDateAndTime: Date;
		/** Number of appointment occurrences in a recurring appointment series. */
		Occurrences: number;
		/** Shows the online meeting chat id. */
		OnlineMeetingChatId: string;
		/** Shows the online meeting id. */
		OnlineMeetingId: string;
		/** Shows the online meeting join url. */
		OnlineMeetingJoinUrl: string;
		/** Displays the online meeting type. */
		OnlineMeetingType: OptionSet.RecurringAppointmentMaster.OnlineMeetingType;
		/** Unique identifier of the Microsoft Office Outlook recurring appointment series owner that correlates to the PR_OWNER_APPT_ID MAPI property. */
		OutlookOwnerApptId: number;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Unique identifier of the business unit that owns the recurring appointment series. */
		readonly OwningBusinessUnit: string;
		/** Unique identifier of the team who owns the recurring appointment series. */
		readonly OwningTeam: string;
		/** Unique identifier of the user who owns the recurring appointment series. */
		readonly OwningUser: string;
		/** End date of the recurrence range. */
		PatternEndDate_UtcDateOnly: Date;
		/** Select the type of end date for the recurring appointment, such as no end date or the number of occurrences. */
		PatternEndType: OptionSet.RecurringAppointmentMaster.PatternEndType;
		/** Start date of the recurrence range. */
		PatternStartDate_UtcDateOnly: Date;
		/** Select the priority so that preferred customers or critical issues are handled quickly. */
		PriorityCode: OptionSet.RecurringAppointmentMaster.PriorityCode;
		/** Shows the ID of the process. */
		ProcessId: string;
		/** Select the pattern type for the recurring appointment to indicate whether the appointment occurs daily, weekly, monthly, or yearly. */
		RecurrencePatternType: OptionSet.RecurringAppointmentMaster.RecurrencePatternType;
		/** Unique identifier of the object with which the recurring appointment series is associated. */
		regardingobjectid_account_recurringappointmentmaster: string;
		/** Unique identifier of the object with which the recurring appointment series is associated. */
		regardingobjectid_bookableresourcebooking_recurringappointmentmaster: string;
		/** Unique identifier of the object with which the recurring appointment series is associated. */
		regardingobjectid_bookableresourcebookingheader_recurringappointmentmaster: string;
		/** Unique identifier of the object with which the recurring appointment series is associated. */
		regardingobjectid_bulkoperation_recurringappointmentmaster: string;
		/** Unique identifier of the object with which the recurring appointment series is associated. */
		regardingobjectid_campaign_recurringappointmentmaster: string;
		/** Unique identifier of the object with which the recurring appointment series is associated. */
		regardingobjectid_campaignactivity_recurringappointmentmaster: string;
		/** Unique identifier of the object with which the recurring appointment series is associated. */
		regardingobjectid_contact_recurringappointmentmaster: string;
		/** Unique identifier of the object with which the recurring appointment series is associated. */
		regardingobjectid_contract_recurringappointmentmaster: string;
		/** Unique identifier of the object with which the recurring appointment series is associated. */
		regardingobjectid_entitlement_recurringappointmentmaster: string;
		/** Unique identifier of the object with which the recurring appointment series is associated. */
		regardingobjectid_entitlementtemplate_recurringappointmentmaster: string;
		/** Unique identifier of the object with which the recurring appointment series is associated. */
		regardingobjectid_incident_recurringappointmentmaster: string;
		/** Unique identifier of the object with which the recurring appointment series is associated. */
		regardingobjectid_invoice_recurringappointmentmaster: string;
		/** Unique identifier of the object with which the recurring appointment series is associated. */
		regardingobjectid_knowledgearticle_recurringappointmentmaster: string;
		/** Unique identifier of the object with which the recurring appointment series is associated. */
		regardingobjectid_knowledgebaserecord_recurringappointmentmaster: string;
		/** Unique identifier of the object with which the recurring appointment series is associated. */
		regardingobjectid_lead_recurringappointmentmaster: string;
		/** Unique identifier of the object with which the recurring appointment series is associated. */
		regardingobjectid_msdyn_agreement_recurringappointmentmaster: string;
		/** Unique identifier of the object with which the recurring appointment series is associated. */
		regardingobjectid_msdyn_agreementbookingdate_recurringappointmentmaster: string;
		/** Unique identifier of the object with which the recurring appointment series is associated. */
		regardingobjectid_msdyn_agreementbookingincident_recurringappointmentmaster: string;
		/** Unique identifier of the object with which the recurring appointment series is associated. */
		regardingobjectid_msdyn_agreementbookingproduct_recurringappointmentmaster: string;
		/** Unique identifier of the object with which the recurring appointment series is associated. */
		regardingobjectid_msdyn_agreementbookingservice_recurringappointmentmaster: string;
		/** Unique identifier of the object with which the recurring appointment series is associated. */
		regardingobjectid_msdyn_agreementbookingservicetask_recurringappointmentmaster: string;
		/** Unique identifier of the object with which the recurring appointment series is associated. */
		regardingobjectid_msdyn_agreementbookingsetup_recurringappointmentmaster: string;
		/** Unique identifier of the object with which the recurring appointment series is associated. */
		regardingobjectid_msdyn_agreementinvoicedate_recurringappointmentmaster: string;
		/** Unique identifier of the object with which the recurring appointment series is associated. */
		regardingobjectid_msdyn_agreementinvoiceproduct_recurringappointmentmaster: string;
		/** Unique identifier of the object with which the recurring appointment series is associated. */
		regardingobjectid_msdyn_agreementinvoicesetup_recurringappointmentmaster: string;
		/** Unique identifier of the object with which the recurring appointment series is associated. */
		regardingobjectid_msdyn_bookingalertstatus_recurringappointmentmaster: string;
		/** Unique identifier of the object with which the recurring appointment series is associated. */
		regardingobjectid_msdyn_bookingrule_recurringappointmentmaster: string;
		/** Unique identifier of the object with which the recurring appointment series is associated. */
		regardingobjectid_msdyn_bookingtimestamp_recurringappointmentmaster: string;
		/** Unique identifier of the object with which the recurring appointment series is associated. */
		regardingobjectid_msdyn_customerasset_recurringappointmentmaster: string;
		/** Unique identifier of the object with which the recurring appointment series is associated. */
		regardingobjectid_msdyn_fieldservicesetting_recurringappointmentmaster: string;
		/** Unique identifier of the object with which the recurring appointment series is associated. */
		regardingobjectid_msdyn_incidenttypecharacteristic_recurringappointmentmaster: string;
		/** Unique identifier of the object with which the recurring appointment series is associated. */
		regardingobjectid_msdyn_incidenttypeproduct_recurringappointmentmaster: string;
		/** Unique identifier of the object with which the recurring appointment series is associated. */
		regardingobjectid_msdyn_incidenttypeservice_recurringappointmentmaster: string;
		/** Unique identifier of the object with which the recurring appointment series is associated. */
		regardingobjectid_msdyn_inventoryadjustment_recurringappointmentmaster: string;
		/** Unique identifier of the object with which the recurring appointment series is associated. */
		regardingobjectid_msdyn_inventoryadjustmentproduct_recurringappointmentmaster: string;
		/** Unique identifier of the object with which the recurring appointment series is associated. */
		regardingobjectid_msdyn_inventoryjournal_recurringappointmentmaster: string;
		/** Unique identifier of the object with which the recurring appointment series is associated. */
		regardingobjectid_msdyn_inventorytransfer_recurringappointmentmaster: string;
		/** Unique identifier of the object with which the recurring appointment series is associated. */
		regardingobjectid_msdyn_payment_recurringappointmentmaster: string;
		/** Unique identifier of the object with which the recurring appointment series is associated. */
		regardingobjectid_msdyn_paymentdetail_recurringappointmentmaster: string;
		/** Unique identifier of the object with which the recurring appointment series is associated. */
		regardingobjectid_msdyn_paymentmethod_recurringappointmentmaster: string;
		/** Unique identifier of the object with which the recurring appointment series is associated. */
		regardingobjectid_msdyn_paymentterm_recurringappointmentmaster: string;
		/** Unique identifier of the object with which the recurring appointment series is associated. */
		regardingobjectid_msdyn_playbookinstance_recurringappointmentmaster: string;
		/** Unique identifier of the object with which the recurring appointment series is associated. */
		regardingobjectid_msdyn_postalbum_recurringappointmentmaster: string;
		/** Unique identifier of the object with which the recurring appointment series is associated. */
		regardingobjectid_msdyn_postalcode_recurringappointmentmaster: string;
		/** Unique identifier of the object with which the recurring appointment series is associated. */
		regardingobjectid_msdyn_processnotes_recurringappointmentmaster: string;
		/** Unique identifier of the object with which the recurring appointment series is associated. */
		regardingobjectid_msdyn_productinventory_recurringappointmentmaster: string;
		/** Unique identifier of the object with which the recurring appointment series is associated. */
		regardingobjectid_msdyn_projectteam_recurringappointmentmaster: string;
		/** Unique identifier of the object with which the recurring appointment series is associated. */
		regardingobjectid_msdyn_purchaseorder_recurringappointmentmaster: string;
		/** Unique identifier of the object with which the recurring appointment series is associated. */
		regardingobjectid_msdyn_purchaseorderbill_recurringappointmentmaster: string;
		/** Unique identifier of the object with which the recurring appointment series is associated. */
		regardingobjectid_msdyn_purchaseorderproduct_recurringappointmentmaster: string;
		/** Unique identifier of the object with which the recurring appointment series is associated. */
		regardingobjectid_msdyn_purchaseorderreceipt_recurringappointmentmaster: string;
		/** Unique identifier of the object with which the recurring appointment series is associated. */
		regardingobjectid_msdyn_purchaseorderreceiptproduct_recurringappointmentmaster: string;
		/** Unique identifier of the object with which the recurring appointment series is associated. */
		regardingobjectid_msdyn_purchaseordersubstatus_recurringappointmentmaster: string;
		/** Unique identifier of the object with which the recurring appointment series is associated. */
		regardingobjectid_msdyn_quotebookingincident_recurringappointmentmaster: string;
		/** Unique identifier of the object with which the recurring appointment series is associated. */
		regardingobjectid_msdyn_quotebookingproduct_recurringappointmentmaster: string;
		/** Unique identifier of the object with which the recurring appointment series is associated. */
		regardingobjectid_msdyn_quotebookingservice_recurringappointmentmaster: string;
		/** Unique identifier of the object with which the recurring appointment series is associated. */
		regardingobjectid_msdyn_quotebookingservicetask_recurringappointmentmaster: string;
		/** Unique identifier of the object with which the recurring appointment series is associated. */
		regardingobjectid_msdyn_resourceterritory_recurringappointmentmaster: string;
		/** Unique identifier of the object with which the recurring appointment series is associated. */
		regardingobjectid_msdyn_rma_recurringappointmentmaster: string;
		/** Unique identifier of the object with which the recurring appointment series is associated. */
		regardingobjectid_msdyn_rmaproduct_recurringappointmentmaster: string;
		/** Unique identifier of the object with which the recurring appointment series is associated. */
		regardingobjectid_msdyn_rmareceipt_recurringappointmentmaster: string;
		/** Unique identifier of the object with which the recurring appointment series is associated. */
		regardingobjectid_msdyn_rmareceiptproduct_recurringappointmentmaster: string;
		/** Unique identifier of the object with which the recurring appointment series is associated. */
		regardingobjectid_msdyn_rmasubstatus_recurringappointmentmaster: string;
		/** Unique identifier of the object with which the recurring appointment series is associated. */
		regardingobjectid_msdyn_rtv_recurringappointmentmaster: string;
		/** Unique identifier of the object with which the recurring appointment series is associated. */
		regardingobjectid_msdyn_rtvproduct_recurringappointmentmaster: string;
		/** Unique identifier of the object with which the recurring appointment series is associated. */
		regardingobjectid_msdyn_rtvsubstatus_recurringappointmentmaster: string;
		/** Unique identifier of the object with which the recurring appointment series is associated. */
		regardingobjectid_msdyn_salessuggestion_recurringappointmentmaster: string;
		/** Unique identifier of the object with which the recurring appointment series is associated. */
		regardingobjectid_msdyn_shipvia_recurringappointmentmaster: string;
		/** Unique identifier of the object with which the recurring appointment series is associated. */
		regardingobjectid_msdyn_systemuserschedulersetting_recurringappointmentmaster: string;
		/** Unique identifier of the object with which the recurring appointment series is associated. */
		regardingobjectid_msdyn_timegroup_recurringappointmentmaster: string;
		/** Unique identifier of the object with which the recurring appointment series is associated. */
		regardingobjectid_msdyn_timegroupdetail_recurringappointmentmaster: string;
		/** Unique identifier of the object with which the recurring appointment series is associated. */
		regardingobjectid_msdyn_timeoffrequest_recurringappointmentmaster: string;
		/** Unique identifier of the object with which the recurring appointment series is associated. */
		regardingobjectid_msdyn_warehouse_recurringappointmentmaster: string;
		/** Unique identifier of the object with which the recurring appointment series is associated. */
		regardingobjectid_msdyn_workorder_recurringappointmentmaster: string;
		/** Unique identifier of the object with which the recurring appointment series is associated. */
		regardingobjectid_msdyn_workordercharacteristic_recurringappointmentmaster: string;
		/** Unique identifier of the object with which the recurring appointment series is associated. */
		regardingobjectid_msdyn_workorderincident_recurringappointmentmaster: string;
		/** Unique identifier of the object with which the recurring appointment series is associated. */
		regardingobjectid_msdyn_workorderproduct_recurringappointmentmaster: string;
		/** Unique identifier of the object with which the recurring appointment series is associated. */
		regardingobjectid_msdyn_workorderresourcerestriction_recurringappointmentmaster: string;
		/** Unique identifier of the object with which the recurring appointment series is associated. */
		regardingobjectid_msdyn_workorderservice_recurringappointmentmaster: string;
		/** Unique identifier of the object with which the recurring appointment series is associated. */
		regardingobjectid_msdyn_workorderservicetask_recurringappointmentmaster: string;
		/** Unique identifier of the object with which the recurring appointment series is associated. */
		regardingobjectid_opportunity_recurringappointmentmaster: string;
		/** Unique identifier of the object with which the recurring appointment series is associated. */
		regardingobjectid_quote_recurringappointmentmaster: string;
		/** Unique identifier of the object with which the recurring appointment series is associated. */
		regardingobjectid_salesorder_recurringappointmentmaster: string;
		/** Unique identifier of the object with which the recurring appointment series is associated. */
		regardingobjectid_site_recurringappointmentmaster: string;
		/** Unique identifier of the object with which the recurring appointment series is associated. */
		regardingobjectid_uii_action_recurringappointmentmaster: string;
		/** Unique identifier of the object with which the recurring appointment series is associated. */
		regardingobjectid_uii_hostedapplication_recurringappointmentmaster: string;
		/** Unique identifier of the object with which the recurring appointment series is associated. */
		regardingobjectid_uii_nonhostedapplication_recurringappointmentmaster: string;
		/** Unique identifier of the object with which the recurring appointment series is associated. */
		regardingobjectid_uii_option_recurringappointmentmaster: string;
		/** Unique identifier of the object with which the recurring appointment series is associated. */
		regardingobjectid_uii_savedsession_recurringappointmentmaster: string;
		/** Unique identifier of the object with which the recurring appointment series is associated. */
		regardingobjectid_uii_workflow_recurringappointmentmaster: string;
		/** Unique identifier of the object with which the recurring appointment series is associated. */
		regardingobjectid_uii_workflowstep_recurringappointmentmaster: string;
		/** Unique identifier of the object with which the recurring appointment series is associated. */
		regardingobjectid_uii_workflow_workflowstep_mapping_recurringappointmentmaster: string;
		/** Unique identifier of the recurrence rule that is associated with the recurring appointment series. */
		readonly RuleId: string;
		/** Scheduled end time of the recurring appointment series. */
		readonly ScheduledEnd_UtcDateAndTime: Date;
		/** Scheduled start time of the recurring appointment series. */
		readonly ScheduledStart_UtcDateAndTime: Date;
		/** Indicates whether the recurring appointment series is active or inactive. */
		SeriesStatus: boolean;
		/** Unique identifier for an associated service. */
		ServiceId: string;
		/** Shows the date and time by which the activities are sorted. */
		SortDate_UtcDateAndTime: Date;
		/** Shows the ID of the stage. */
		StageId: string;
		/** Start time of the recurring appointment series. */
		StartTime_UtcDateAndTime: Date;
		/** Shows whether the recurring appointment is open, scheduled, completed, or canceled. Completed and canceled appointments are read-only and can't be edited. */
		StateCode: OptionSet.RecurringAppointmentMaster.StateCode;
		/** Select the recurring appointment's status. */
		StatusCode: OptionSet.RecurringAppointmentMaster.StatusCode;
		/** Type a subcategory to identify the recurring appointment type and relate the activity to a specific product, sales region, business group, or other function. */
		Subcategory: string;
		/** Type a short description about the objective or primary topic of the recurring appointment. */
		Subject: string;
		/** For internal use only. */
		SubscriptionId: string;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
		TransactionCurrencyId: string;
		/** For internal use only. */
		TraversedPath: string;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		readonly VersionNumber: number;
		/** The array of object that can cast object to ActivityPartyApi class */
		ActivityParties: Array<unknown>;
	}
}
declare namespace OptionSet {
	namespace RecurringAppointmentMaster {
		enum ActivityTypeCode {
			/** 10086 */
			Activity_record_for_the_Teams_chat,
			/** 4201 */
			Appointment,
			/** 10404 */
			Booking_Alert,
			/** 4402 */
			Campaign_Activity,
			/** 4401 */
			Campaign_Response,
			/** 4206 */
			Case_Resolution,
			/** 10707 */
			Conversation,
			/** 10313 */
			Customer_Voice_alert,
			/** 10323 */
			Customer_Voice_survey_invite,
			/** 10325 */
			Customer_Voice_survey_response,
			/** 4202 */
			Email,
			/** 4204 */
			Fax,
			/** 4207 */
			Letter,
			/** 4208 */
			Opportunity_Close,
			/** 4209 */
			Order_Close,
			/** 10817 */
			Outbound_message,
			/** 4210 */
			Phone_Call,
			/** 10434 */
			Project_Service_Approval,
			/** 4406 */
			Quick_Campaign,
			/** 4211 */
			Quote_Close,
			/** 4251 */
			Recurring_Appointment,
			/** 4214 */
			Service_Activity,
			/** 10721 */
			Session,
			/** 4212 */
			Task
		}
		enum ExpansionStateCode {
			/** 2 */
			Full,
			/** 1 */
			Partial,
			/** 0 */
			Unexpanded
		}
		enum Instance {
			/** 1 */
			First,
			/** 4 */
			Fourth,
			/** 5 */
			Last,
			/** 2 */
			Second,
			/** 3 */
			Third
		}
		enum InstanceTypeCode {
			/** 0 */
			Not_Recurring,
			/** 3 */
			Recurring_Exception,
			/** 4 */
			Recurring_Future_Exception,
			/** 2 */
			Recurring_Instance,
			/** 1 */
			Recurring_Master
		}
		enum MonthOfYear {
			/** 4 */
			April,
			/** 8 */
			August,
			/** 12 */
			December,
			/** 2 */
			February,
			/** 0 */
			Invalid_Month_Of_Year,
			/** 1 */
			January,
			/** 7 */
			July,
			/** 6 */
			June,
			/** 3 */
			March,
			/** 5 */
			May,
			/** 11 */
			November,
			/** 10 */
			October,
			/** 9 */
			September
		}
		enum OnlineMeetingType {
			/** 1 */
			Teams_Meeting
		}
		enum PatternEndType {
			/** 1 */
			No_End_Date,
			/** 2 */
			Occurrences,
			/** 3 */
			Pattern_End_Date
		}
		enum PriorityCode {
			/** 2 */
			High,
			/** 0 */
			Low,
			/** 1 */
			Normal
		}
		enum RecurrencePatternType {
			/** 0 */
			Daily,
			/** 2 */
			Monthly,
			/** 1 */
			Weekly,
			/** 3 */
			Yearly
		}
		enum StateCode {
			/** 2 */
			Canceled,
			/** 1 */
			Completed,
			/** 0 */
			Open,
			/** 3 */
			Scheduled
		}
		enum StatusCode {
			/** 5 */
			Busy,
			/** 4 */
			Canceled,
			/** 3 */
			Completed,
			/** 1 */
			Free,
			/** 6 */
			Out_of_Office,
			/** 2 */
			Tentative
		}
		enum RollupState {
			/** 0 - Attribute value is yet to be calculated */
			NotCalculated,
			/** 1 - Attribute value has been calculated per the last update time in <AttributeSchemaName>_Date attribute */
			Calculated,
			/** 2 - Attribute value calculation lead to overflow error */
			OverflowError,
			/** 3 - Attribute value calculation failed due to an internal error, next run of calculation job will likely fix it */
			OtherError,
			/** 4 - Attribute value calculation failed because the maximum number of retry attempts to calculate the value were exceeded likely due to high number of concurrency and locking conflicts */
			RetryLimitExceeded,
			/** 5 - Attribute value calculation failed because maximum hierarchy depth limit for calculation was reached */
			HierarchicalRecursionLimitReached,
			/** 6 - Attribute value calculation failed because a recursive loop was detected in the hierarchy of the record */
			LoopDetected
		}
	}
}
//{'UseForm':true,'UseWebApi':true,'Version':'3.00.00','WebApiVersion':'2'}