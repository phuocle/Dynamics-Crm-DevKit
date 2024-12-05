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
			appointment_description: DevKit.Controls.Section;
			attachments: DevKit.Controls.Section;
			general_information: DevKit.Controls.Section;
			scheduling_information: DevKit.Controls.Section;
			tab_2_section_2: DevKit.Controls.Section;
		}
		interface tab_tab_ci_call_summary_Sections {
			tab_ci_section_call_summary: DevKit.Controls.Section;
		}
		interface tab_tab_ci_notes_Sections {
			tab_ci_section_notes: DevKit.Controls.Section;
		}
		interface tab_tab_notes_Sections {
			timeline_section: DevKit.Controls.Section;
		}
		interface tab_appointment extends DevKit.Controls.ITab {
			Section: tab_appointment_Sections;
		}
		interface tab_tab_ci_call_summary extends DevKit.Controls.ITab {
			Section: tab_tab_ci_call_summary_Sections;
		}
		interface tab_tab_ci_notes extends DevKit.Controls.ITab {
			Section: tab_tab_ci_notes_Sections;
		}
		interface tab_tab_notes extends DevKit.Controls.ITab {
			Section: tab_tab_notes_Sections;
		}
		interface Tabs {
			appointment: tab_appointment;
			tab_ci_call_summary: tab_tab_ci_call_summary;
			tab_ci_notes: tab_tab_ci_notes;
			tab_notes: tab_tab_notes;
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
			/** Customer journey iteration */
			msdyncrm_associatedcustomerjourneyiteration: DevKit.Controls.Lookup;
			notescontrol: DevKit.Controls.Note;
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
			/** Type a short description about the objective or primary topic of the appointment. */
			Subject1: DevKit.Controls.String;
			/** Type a short description about the objective or primary topic of the appointment. */
			Subject2: DevKit.Controls.String;
		}
		interface Navigation {
			appointment_activity_mime_attachment: DevKit.Controls.NavigationItem,
			Appointment_QueueItem: DevKit.Controls.NavigationItem,
			msdyn_appointment_bookableresourcebooking: DevKit.Controls.NavigationItem,
			msdyn_appointment_msdyn_conversationinsight_conversationinsighttarget: DevKit.Controls.NavigationItem,
			msdyn_appointment_msdyn_externalrecord: DevKit.Controls.NavigationItem,
			msdyn_appointment_msdyn_ocrecording_recordingtarget: DevKit.Controls.NavigationItem,
			msdyn_appointment_msdyn_recording_appointment_activity: DevKit.Controls.NavigationItem,
			msdyn_appointment_msdyn_resourcerequirement: DevKit.Controls.NavigationItem,
			msdyn_appointment_msdyn_transcript_transcripttarget: DevKit.Controls.NavigationItem,
			msdyn_msdyn_conversationactionitem_appointment_msdyn_CreatedActivity: DevKit.Controls.NavigationItem,
			msdyn_msdyn_salescopilotinsight_appointment_msdyn_activityid: DevKit.Controls.NavigationItem,
			msdyn_msdyn_sciconversation_appointment_msdyn_RelatedActivity: DevKit.Controls.NavigationItem
		}
		interface Grid {
			attachmentsGrid: DevKit.Controls.Grid;
		}
	}
	class FormAppointment extends DevKit.IForm {
		/**
		* Appointment [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Appointment */
		Body: DevKit.FormAppointment.Body;
		/** The Header section of form Appointment */
		Header: DevKit.FormAppointment.Header;
		/** The Navigation of form Appointment */
		Navigation: DevKit.FormAppointment.Navigation;
		/** The Grid of form Appointment */
		Grid: DevKit.FormAppointment.Grid;
		/** The SidePanes of form Appointment */
		SidePanes: DevKit.SidePanes;
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
			appointment_description: DevKit.Controls.Section;
			tab_5_section_2: DevKit.Controls.Section;
			tab_5_section_3: DevKit.Controls.Section;
			tab_5_section_5: DevKit.Controls.Section;
		}
		interface tab_tab_5 extends DevKit.Controls.ITab {
			Section: tab_tab_5_Sections;
		}
		interface Tabs {
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
		interface Navigation {
			appointment_activity_mime_attachment: DevKit.Controls.NavigationItem,
			Appointment_QueueItem: DevKit.Controls.NavigationItem,
			msdyn_appointment_bookableresourcebooking: DevKit.Controls.NavigationItem,
			msdyn_appointment_msdyn_conversationinsight_conversationinsighttarget: DevKit.Controls.NavigationItem,
			msdyn_appointment_msdyn_externalrecord: DevKit.Controls.NavigationItem,
			msdyn_appointment_msdyn_ocrecording_recordingtarget: DevKit.Controls.NavigationItem,
			msdyn_appointment_msdyn_recording_appointment_activity: DevKit.Controls.NavigationItem,
			msdyn_appointment_msdyn_resourcerequirement: DevKit.Controls.NavigationItem,
			msdyn_appointment_msdyn_transcript_transcripttarget: DevKit.Controls.NavigationItem,
			msdyn_msdyn_conversationactionitem_appointment_msdyn_CreatedActivity: DevKit.Controls.NavigationItem,
			msdyn_msdyn_salescopilotinsight_appointment_msdyn_activityid: DevKit.Controls.NavigationItem,
			msdyn_msdyn_sciconversation_appointment_msdyn_RelatedActivity: DevKit.Controls.NavigationItem
		}
		interface Grid {
			attachmentsGrid: DevKit.Controls.Grid;
		}
	}
	class FormAppointment_for_Interactive_experience extends DevKit.IForm {
		/**
		* Appointment for Interactive experience [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Appointment_for_Interactive_experience */
		Body: DevKit.FormAppointment_for_Interactive_experience.Body;
		/** The Header section of form Appointment_for_Interactive_experience */
		Header: DevKit.FormAppointment_for_Interactive_experience.Header;
		/** The Navigation of form Appointment_for_Interactive_experience */
		Navigation: DevKit.FormAppointment_for_Interactive_experience.Navigation;
		/** The Grid of form Appointment_for_Interactive_experience */
		Grid: DevKit.FormAppointment_for_Interactive_experience.Grid;
		/** The SidePanes of form Appointment_for_Interactive_experience */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormAppointment_Wizard {
		interface Header extends DevKit.Controls.IHeader {
			/** Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
			OwnerId: DevKit.Controls.Lookup;
			/** Select the priority so that preferred customers or critical issues are handled quickly. */
			PriorityCode: DevKit.Controls.OptionSet;
		}
		interface tab_appointment_Sections {
			appointment_description: DevKit.Controls.Section;
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
		interface Navigation {
			appointment_activity_mime_attachment: DevKit.Controls.NavigationItem,
			Appointment_QueueItem: DevKit.Controls.NavigationItem,
			msdyn_appointment_bookableresourcebooking: DevKit.Controls.NavigationItem,
			msdyn_appointment_msdyn_conversationinsight_conversationinsighttarget: DevKit.Controls.NavigationItem,
			msdyn_appointment_msdyn_externalrecord: DevKit.Controls.NavigationItem,
			msdyn_appointment_msdyn_ocrecording_recordingtarget: DevKit.Controls.NavigationItem,
			msdyn_appointment_msdyn_recording_appointment_activity: DevKit.Controls.NavigationItem,
			msdyn_appointment_msdyn_resourcerequirement: DevKit.Controls.NavigationItem,
			msdyn_appointment_msdyn_transcript_transcripttarget: DevKit.Controls.NavigationItem,
			msdyn_msdyn_conversationactionitem_appointment_msdyn_CreatedActivity: DevKit.Controls.NavigationItem,
			msdyn_msdyn_salescopilotinsight_appointment_msdyn_activityid: DevKit.Controls.NavigationItem,
			msdyn_msdyn_sciconversation_appointment_msdyn_RelatedActivity: DevKit.Controls.NavigationItem
		}
		interface Grid {
			attachmentsGrid: DevKit.Controls.Grid;
		}
	}
	class FormAppointment_Wizard extends DevKit.IForm {
		/**
		* Wizard [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Appointment_Wizard */
		Body: DevKit.FormAppointment_Wizard.Body;
		/** The Header section of form Appointment_Wizard */
		Header: DevKit.FormAppointment_Wizard.Header;
		/** The Navigation of form Appointment_Wizard */
		Navigation: DevKit.FormAppointment_Wizard.Navigation;
		/** The Grid of form Appointment_Wizard */
		Grid: DevKit.FormAppointment_Wizard.Grid;
		/** The SidePanes of form Appointment_Wizard */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormAppointment_quick_create_form {
		interface tab_tab_1_Sections {
			tab_1_column_1_section_1: DevKit.Controls.Section;
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
	class FormAppointment_quick_create_form extends DevKit.IForm {
		/**
		* Appointment quick create form. [Quick Create]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Appointment_quick_create_form */
		Body: DevKit.FormAppointment_quick_create_form.Body;
	}
	class AppointmentApi {
		/**
		* DynamicsCrm.DevKit AppointmentApi
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
		/** For internal use only. */
		ActivityAdditionalParams: string;
		/** Unique identifier of the appointment. */
		ActivityId: string;
		/** Shows the value selected in the Duration field on the appointment at the time that the appointment is closed as completed. The duration is used to report the time spent on the activity. */
		ActualDurationMinutes: number;
		/** Enter the actual end date and time of the appointment. By default, it displays the date and time when the activity was completed or canceled, but can be edited to capture the actual duration of the appointment. */
		ActualEnd_UtcDateAndTime: Date;
		/** Enter the actual start date and time for the appointment. By default, it displays the date and time when the activity was created, but can be edited to capture the actual duration of the appointment. */
		ActualStart_UtcDateAndTime: Date;
		/** Shows the number of attachments on the appointment. */
		readonly AttachmentCount: number;
		/** Select the error code to identify issues with the outlook item recipients or attachments, such as blocked attachments. */
		AttachmentErrors: OptionSet.Appointment.AttachmentErrors;
		/** Type a category to identify the appointment type, such as sales demo, prospect call, or service call, to tie the appointment to a business group or function. */
		Category: string;
		/** Shows who created the record. */
		readonly CreatedBy: string;
		/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Shows who created the record on behalf of another user. */
		readonly CreatedOnBehalfBy: string;
		/** Type additional information to describe the purpose of the appointment. */
		Description: string;
		/** Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency. */
		readonly ExchangeRate: number;
		/** Formatted scheduled end time of the appointment. */
		readonly FormattedScheduledEnd_TimezoneDateAndTime: Date;
		/** Formatted scheduled start time of the appointment. */
		readonly FormattedScheduledStart_TimezoneDateAndTime: Date;
		/** Shows the ID of the appointment in Microsoft Office Outlook. The ID is used to synchronize the appointment between Microsoft Dynamics 365 and the correct Exchange account. */
		GlobalObjectId: string;
		/** Unique identifier of the data import or data migration that created this record. */
		ImportSequenceNumber: number;
		/** Type of instance of a recurring series. */
		readonly InstanceTypeCode: OptionSet.Appointment.InstanceTypeCode;
		/** Select whether the appointment is an all-day event to make sure that the required resources are scheduled for the full day. */
		IsAllDayEvent: boolean;
		/** Information regarding whether the appointment was billed as part of resolving a case. */
		IsBilled: boolean;
		/** Information regarding whether the appointment is a draft. */
		IsDraft: boolean;
		/** For internal use only. */
		IsMapiPrivate: boolean;
		/** Displays whether or not this is an online meeting. */
		IsOnlineMeeting: boolean;
		/** Information regarding whether the activity is a regular activity type or event type. */
		readonly IsRegularActivity: boolean;
		/** For internal use only. */
		readonly IsUnsafe: number;
		/** Information regarding whether the appointment was created from a workflow rule. */
		IsWorkflowCreated: boolean;
		/** Contains the date and time stamp of the last on hold time. */
		LastOnHoldTime_UtcDateAndTime: Date;
		/** Type the location where the appointment will take place, such as a conference room or customer office. */
		Location: string;
		/** Shows who last updated the record. */
		readonly ModifiedBy: string;
		/** For internal use only.  */
		readonly ModifiedFieldsMask: string;
		/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Shows who created the record on behalf of another user. */
		readonly ModifiedOnBehalfBy: string;
		msdyncrm_ActivityId: string;
		/** Customer journey iteration */
		msdyncrm_associatedcustomerjourneyiteration: string;
		/** Shows how long, in minutes, that the record was on hold. */
		readonly OnHoldTime: number;
		/** Shows the online meeting chat id. */
		OnlineMeetingChatId: string;
		/** Shows the online meeting id. */
		OnlineMeetingId: string;
		/** Shows the online meeting join url. */
		OnlineMeetingJoinUrl: string;
		/** Displays the online meeting type. */
		OnlineMeetingType: OptionSet.Appointment.OnlineMeetingType;
		/** The original start date of the appointment. */
		readonly OriginalStartDate_UtcDateAndTime: Date;
		/** Unique identifier of the Microsoft Office Outlook appointment owner that correlates to the PR_OWNER_APPT_ID MAPI property. */
		OutlookOwnerApptId: number;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Shows the business unit that the record owner belongs to. */
		readonly OwningBusinessUnit: string;
		/** Unique identifier of the team that owns the appointment. */
		readonly OwningTeam: string;
		/** Unique identifier of the user that owns the appointment. */
		readonly OwningUser: string;
		/** Select the priority so that preferred customers or critical issues are handled quickly. */
		PriorityCode: OptionSet.Appointment.PriorityCode;
		/** Shows the ID of the process. */
		ProcessId: string;
		/** Choose the record that the appointment relates to. */
		regardingobjectid_account_appointment: string;
		/** Choose the record that the appointment relates to. */
		regardingobjectid_adx_invitation_appointment: string;
		/** Choose the record that the appointment relates to. */
		regardingobjectid_bookableresourcebooking_appointment: string;
		/** Choose the record that the appointment relates to. */
		regardingobjectid_bookableresourcebookingheader_appointment: string;
		/** Choose the record that the appointment relates to. */
		regardingobjectid_bulkoperation_appointment: string;
		/** Choose the record that the appointment relates to. */
		regardingobjectid_campaign_appointment: string;
		/** Choose the record that the appointment relates to. */
		regardingobjectid_campaignactivity_appointment: string;
		/** Choose the record that the appointment relates to. */
		regardingobjectid_contact_appointment: string;
		/** Choose the record that the appointment relates to. */
		regardingobjectid_contract_appointment: string;
		/** Choose the record that the appointment relates to. */
		regardingobjectid_entitlement_appointment: string;
		/** Choose the record that the appointment relates to. */
		regardingobjectid_entitlementtemplate_appointment: string;
		/** Choose the record that the appointment relates to. */
		regardingobjectid_incident_appointment: string;
		/** Choose the record that the appointment relates to. */
		regardingobjectid_invoice_appointment: string;
		/** Choose the record that the appointment relates to. */
		regardingobjectid_knowledgearticle_appointment: string;
		/** Choose the record that the appointment relates to. */
		regardingobjectid_knowledgebaserecord_appointment: string;
		/** Choose the record that the appointment relates to. */
		regardingobjectid_lead_appointment: string;
		/** Choose the record that the appointment relates to. */
		regardingobjectid_msdyncrm_contentsettings_appointment: string;
		/** Choose the record that the appointment relates to. */
		regardingobjectid_msdyncrm_customerjourney_appointment: string;
		/** Choose the record that the appointment relates to. */
		regardingobjectid_msdyncrm_leadscoremodel_appointment: string;
		/** Choose the record that the appointment relates to. */
		regardingobjectid_msdyncrm_linkedinaccount_appointment: string;
		/** Choose the record that the appointment relates to. */
		regardingobjectid_msdyncrm_linkedinactivity_appointment: string;
		/** Choose the record that the appointment relates to. */
		regardingobjectid_msdyncrm_linkedinfieldmapping_appointment: string;
		/** Choose the record that the appointment relates to. */
		regardingobjectid_msdyncrm_linkedinform_appointment: string;
		/** Choose the record that the appointment relates to. */
		regardingobjectid_msdyncrm_linkedinformanswer_appointment: string;
		/** Choose the record that the appointment relates to. */
		regardingobjectid_msdyncrm_linkedinformquestion_appointment: string;
		/** Choose the record that the appointment relates to. */
		regardingobjectid_msdyncrm_linkedinformsubmission_appointment: string;
		/** Choose the record that the appointment relates to. */
		regardingobjectid_msdyncrm_linkedinleadmatchingstrategy_appointment: string;
		/** Choose the record that the appointment relates to. */
		regardingobjectid_msdyncrm_linkedinuserprofile_appointment: string;
		/** Choose the record that the appointment relates to. */
		regardingobjectid_msdyncrm_marketingdynamiccontentmetadata_appointment: string;
		/** Choose the record that the appointment relates to. */
		regardingobjectid_msdyncrm_marketingemaildynamiccontentmetadata_appointment: string;
		/** Choose the record that the appointment relates to. */
		regardingobjectid_msdyncrm_marketingemailtestsend_appointment: string;
		/** Choose the record that the appointment relates to. */
		regardingobjectid_msdyncrm_migration_appointment: string;
		/** Choose the record that the appointment relates to. */
		regardingobjectid_msdyncrm_uicconfig_appointment: string;
		/** Choose the record that the appointment relates to. */
		regardingobjectid_msdyn_agreement_appointment: string;
		/** Choose the record that the appointment relates to. */
		regardingobjectid_msdyn_agreementbookingdate_appointment: string;
		/** Choose the record that the appointment relates to. */
		regardingobjectid_msdyn_agreementbookingincident_appointment: string;
		/** Choose the record that the appointment relates to. */
		regardingobjectid_msdyn_agreementbookingproduct_appointment: string;
		/** Choose the record that the appointment relates to. */
		regardingobjectid_msdyn_agreementbookingservice_appointment: string;
		/** Choose the record that the appointment relates to. */
		regardingobjectid_msdyn_agreementbookingservicetask_appointment: string;
		/** Choose the record that the appointment relates to. */
		regardingobjectid_msdyn_agreementbookingsetup_appointment: string;
		/** Choose the record that the appointment relates to. */
		regardingobjectid_msdyn_agreementinvoicedate_appointment: string;
		/** Choose the record that the appointment relates to. */
		regardingobjectid_msdyn_agreementinvoiceproduct_appointment: string;
		/** Choose the record that the appointment relates to. */
		regardingobjectid_msdyn_agreementinvoicesetup_appointment: string;
		/** Choose the record that the appointment relates to. */
		regardingobjectid_msdyn_bookingalertstatus_appointment: string;
		/** Choose the record that the appointment relates to. */
		regardingobjectid_msdyn_bookingrule_appointment: string;
		/** Choose the record that the appointment relates to. */
		regardingobjectid_msdyn_bookingtimestamp_appointment: string;
		/** Choose the record that the appointment relates to. */
		regardingobjectid_msdyn_customerasset_appointment: string;
		/** Choose the record that the appointment relates to. */
		regardingobjectid_msdyn_fieldservicesetting_appointment: string;
		/** Choose the record that the appointment relates to. */
		regardingobjectid_msdyn_incidenttypecharacteristic_appointment: string;
		/** Choose the record that the appointment relates to. */
		regardingobjectid_msdyn_incidenttypeproduct_appointment: string;
		/** Choose the record that the appointment relates to. */
		regardingobjectid_msdyn_incidenttypeservice_appointment: string;
		/** Choose the record that the appointment relates to. */
		regardingobjectid_msdyn_inventoryadjustment_appointment: string;
		/** Choose the record that the appointment relates to. */
		regardingobjectid_msdyn_inventoryadjustmentproduct_appointment: string;
		/** Choose the record that the appointment relates to. */
		regardingobjectid_msdyn_inventoryjournal_appointment: string;
		/** Choose the record that the appointment relates to. */
		regardingobjectid_msdyn_inventorytransfer_appointment: string;
		/** Choose the record that the appointment relates to. */
		regardingobjectid_msdyn_payment_appointment: string;
		/** Choose the record that the appointment relates to. */
		regardingobjectid_msdyn_paymentdetail_appointment: string;
		/** Choose the record that the appointment relates to. */
		regardingobjectid_msdyn_paymentmethod_appointment: string;
		/** Choose the record that the appointment relates to. */
		regardingobjectid_msdyn_paymentterm_appointment: string;
		/** Choose the record that the appointment relates to. */
		regardingobjectid_msdyn_playbookinstance_appointment: string;
		/** Choose the record that the appointment relates to. */
		regardingobjectid_msdyn_postalbum_appointment: string;
		/** Choose the record that the appointment relates to. */
		regardingobjectid_msdyn_postalcode_appointment: string;
		/** Choose the record that the appointment relates to. */
		regardingobjectid_msdyn_productinventory_appointment: string;
		/** Choose the record that the appointment relates to. */
		regardingobjectid_msdyn_purchaseorder_appointment: string;
		/** Choose the record that the appointment relates to. */
		regardingobjectid_msdyn_purchaseorderbill_appointment: string;
		/** Choose the record that the appointment relates to. */
		regardingobjectid_msdyn_purchaseorderproduct_appointment: string;
		/** Choose the record that the appointment relates to. */
		regardingobjectid_msdyn_purchaseorderreceipt_appointment: string;
		/** Choose the record that the appointment relates to. */
		regardingobjectid_msdyn_purchaseorderreceiptproduct_appointment: string;
		/** Choose the record that the appointment relates to. */
		regardingobjectid_msdyn_purchaseordersubstatus_appointment: string;
		/** Choose the record that the appointment relates to. */
		regardingobjectid_msdyn_quotebookingincident_appointment: string;
		/** Choose the record that the appointment relates to. */
		regardingobjectid_msdyn_quotebookingproduct_appointment: string;
		/** Choose the record that the appointment relates to. */
		regardingobjectid_msdyn_quotebookingservice_appointment: string;
		/** Choose the record that the appointment relates to. */
		regardingobjectid_msdyn_quotebookingservicetask_appointment: string;
		/** Choose the record that the appointment relates to. */
		regardingobjectid_msdyn_resourceterritory_appointment: string;
		/** Choose the record that the appointment relates to. */
		regardingobjectid_msdyn_rma_appointment: string;
		/** Choose the record that the appointment relates to. */
		regardingobjectid_msdyn_rmaproduct_appointment: string;
		/** Choose the record that the appointment relates to. */
		regardingobjectid_msdyn_rmareceipt_appointment: string;
		/** Choose the record that the appointment relates to. */
		regardingobjectid_msdyn_rmareceiptproduct_appointment: string;
		/** Choose the record that the appointment relates to. */
		regardingobjectid_msdyn_rmasubstatus_appointment: string;
		/** Choose the record that the appointment relates to. */
		regardingobjectid_msdyn_rtv_appointment: string;
		/** Choose the record that the appointment relates to. */
		regardingobjectid_msdyn_rtvproduct_appointment: string;
		/** Choose the record that the appointment relates to. */
		regardingobjectid_msdyn_rtvsubstatus_appointment: string;
		/** Choose the record that the appointment relates to. */
		regardingobjectid_msdyn_salessuggestion_appointment: string;
		/** Choose the record that the appointment relates to. */
		regardingobjectid_msdyn_shipvia_appointment: string;
		/** Choose the record that the appointment relates to. */
		regardingobjectid_msdyn_swarm_appointment: string;
		/** Choose the record that the appointment relates to. */
		regardingobjectid_msdyn_systemuserschedulersetting_appointment: string;
		/** Choose the record that the appointment relates to. */
		regardingobjectid_msdyn_timegroup_appointment: string;
		/** Choose the record that the appointment relates to. */
		regardingobjectid_msdyn_timegroupdetail_appointment: string;
		/** Choose the record that the appointment relates to. */
		regardingobjectid_msdyn_timeoffrequest_appointment: string;
		/** Choose the record that the appointment relates to. */
		regardingobjectid_msdyn_warehouse_appointment: string;
		/** Choose the record that the appointment relates to. */
		regardingobjectid_msdyn_workorder_appointment: string;
		/** Choose the record that the appointment relates to. */
		regardingobjectid_msdyn_workordercharacteristic_appointment: string;
		/** Choose the record that the appointment relates to. */
		regardingobjectid_msdyn_workorderincident_appointment: string;
		/** Choose the record that the appointment relates to. */
		regardingobjectid_msdyn_workorderproduct_appointment: string;
		/** Choose the record that the appointment relates to. */
		regardingobjectid_msdyn_workorderresourcerestriction_appointment: string;
		/** Choose the record that the appointment relates to. */
		regardingobjectid_msdyn_workorderservice_appointment: string;
		/** Choose the record that the appointment relates to. */
		regardingobjectid_msdyn_workorderservicetask_appointment: string;
		/** Choose the record that the appointment relates to. */
		regardingobjectid_msevtmgt_checkin_appointment: string;
		/** Choose the record that the appointment relates to. */
		regardingobjectid_msevtmgt_event_appointment: string;
		/** Choose the record that the appointment relates to. */
		regardingobjectid_msevtmgt_eventpurchase_appointment: string;
		/** Choose the record that the appointment relates to. */
		regardingobjectid_msevtmgt_eventpurchaseattendee_appointment: string;
		/** Choose the record that the appointment relates to. */
		regardingobjectid_msevtmgt_eventpurchasepass_appointment: string;
		/** Choose the record that the appointment relates to. */
		regardingobjectid_msevtmgt_eventregistration_appointment: string;
		/** Choose the record that the appointment relates to. */
		regardingobjectid_msevtmgt_hotel_appointment: string;
		/** Choose the record that the appointment relates to. */
		regardingobjectid_msevtmgt_hotelroomallocation_appointment: string;
		/** Choose the record that the appointment relates to. */
		regardingobjectid_msevtmgt_hotelroomreservation_appointment: string;
		/** Choose the record that the appointment relates to. */
		regardingobjectid_msevtmgt_layout_appointment: string;
		/** Choose the record that the appointment relates to. */
		regardingobjectid_msevtmgt_room_appointment: string;
		/** Choose the record that the appointment relates to. */
		regardingobjectid_msevtmgt_session_appointment: string;
		/** Choose the record that the appointment relates to. */
		regardingobjectid_msevtmgt_sessionregistration_appointment: string;
		/** Choose the record that the appointment relates to. */
		regardingobjectid_msevtmgt_sessiontrack_appointment: string;
		/** Choose the record that the appointment relates to. */
		regardingobjectid_msevtmgt_speaker_appointment: string;
		/** Choose the record that the appointment relates to. */
		regardingobjectid_msevtmgt_speakerengagement_appointment: string;
		/** Choose the record that the appointment relates to. */
		regardingobjectid_msevtmgt_sponsorablearticle_appointment: string;
		/** Choose the record that the appointment relates to. */
		regardingobjectid_msevtmgt_sponsorship_appointment: string;
		/** Choose the record that the appointment relates to. */
		regardingobjectid_msevtmgt_venue_appointment: string;
		/** Choose the record that the appointment relates to. */
		regardingobjectid_msevtmgt_webinarconfiguration_appointment: string;
		/** Choose the record that the appointment relates to. */
		regardingobjectid_msevtmgt_webinarprovider_appointment: string;
		/** Choose the record that the appointment relates to. */
		regardingobjectid_mspp_adplacement_appointment: string;
		/** Choose the record that the appointment relates to. */
		regardingobjectid_mspp_pollplacement_appointment: string;
		/** Choose the record that the appointment relates to. */
		regardingobjectid_mspp_publishingstatetransitionrule_appointment: string;
		/** Choose the record that the appointment relates to. */
		regardingobjectid_mspp_redirect_appointment: string;
		/** Choose the record that the appointment relates to. */
		regardingobjectid_mspp_shortcut_appointment: string;
		/** Choose the record that the appointment relates to. */
		regardingobjectid_mspp_website_appointment: string;
		/** Choose the record that the appointment relates to. */
		regardingobjectid_opportunity_appointment: string;
		/** Choose the record that the appointment relates to. */
		regardingobjectid_quote_appointment: string;
		/** Choose the record that the appointment relates to. */
		regardingobjectid_salesorder_appointment: string;
		/** Choose the record that the appointment relates to. */
		regardingobjectid_site_appointment: string;
		/** Shows the expected duration of the appointment, in minutes. */
		ScheduledDurationMinutes: number;
		/** Enter the expected due date and time for the activity to be completed to provide details about the timing of the appointment. */
		ScheduledEnd_UtcDateAndTime: Date;
		/** Enter the expected start date and time for the activity to provide details about the timing of the appointment. */
		ScheduledStart_UtcDateAndTime: Date;
		/** Shows the ID of the recurring series of an instance. */
		readonly SeriesId: string;
		/** Unique identifier for an associated service. */
		ServiceId: string;
		/** Choose the service level agreement (SLA) that you want to apply to the appointment record. */
		SLAId: string;
		/** Last SLA that was applied to this appointment. This field is for internal use only. */
		readonly SLAInvokedId: string;
		/** Shows the date and time by which the activities are sorted. */
		SortDate_UtcDateAndTime: Date;
		/** Shows the ID of the stage. */
		StageId: string;
		/** Shows whether the appointment is open, completed, or canceled. Completed and canceled appointments are read-only and can't be edited. */
		StateCode: OptionSet.Appointment.StateCode;
		/** Select the appointment's status. */
		StatusCode: OptionSet.Appointment.StatusCode;
		/** Type a subcategory to identify the appointment type and relate the activity to a specific product, sales region, business group, or other function. */
		Subcategory: string;
		/** Type a short description about the objective or primary topic of the appointment. */
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
		/** Version number of the appointment. */
		readonly VersionNumber: number;
		/** The array of object that can cast object to ActivityPartyApi class */
		ActivityParties: Array<unknown>;
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
			readonly msdyncrm_ActivityId: string;
			/** Customer journey iteration */
			readonly msdyncrm_associatedcustomerjourneyiteration: string;
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
			/** Choose the record that the appointment relates to. */
			readonly regardingobjectid_account_appointment: string;
			/** Choose the record that the appointment relates to. */
			readonly regardingobjectid_adx_invitation_appointment: string;
			/** Choose the record that the appointment relates to. */
			readonly regardingobjectid_bookableresourcebooking_appointment: string;
			/** Choose the record that the appointment relates to. */
			readonly regardingobjectid_bookableresourcebookingheader_appointment: string;
			/** Choose the record that the appointment relates to. */
			readonly regardingobjectid_bulkoperation_appointment: string;
			/** Choose the record that the appointment relates to. */
			readonly regardingobjectid_campaign_appointment: string;
			/** Choose the record that the appointment relates to. */
			readonly regardingobjectid_campaignactivity_appointment: string;
			/** Choose the record that the appointment relates to. */
			readonly regardingobjectid_contact_appointment: string;
			/** Choose the record that the appointment relates to. */
			readonly regardingobjectid_contract_appointment: string;
			/** Choose the record that the appointment relates to. */
			readonly regardingobjectid_entitlement_appointment: string;
			/** Choose the record that the appointment relates to. */
			readonly regardingobjectid_entitlementtemplate_appointment: string;
			/** Choose the record that the appointment relates to. */
			readonly regardingobjectid_incident_appointment: string;
			/** Choose the record that the appointment relates to. */
			readonly regardingobjectid_invoice_appointment: string;
			/** Choose the record that the appointment relates to. */
			readonly regardingobjectid_knowledgearticle_appointment: string;
			/** Choose the record that the appointment relates to. */
			readonly regardingobjectid_knowledgebaserecord_appointment: string;
			/** Choose the record that the appointment relates to. */
			readonly regardingobjectid_lead_appointment: string;
			/** Choose the record that the appointment relates to. */
			readonly regardingobjectid_msdyncrm_contentsettings_appointment: string;
			/** Choose the record that the appointment relates to. */
			readonly regardingobjectid_msdyncrm_customerjourney_appointment: string;
			/** Choose the record that the appointment relates to. */
			readonly regardingobjectid_msdyncrm_leadscoremodel_appointment: string;
			/** Choose the record that the appointment relates to. */
			readonly regardingobjectid_msdyncrm_linkedinaccount_appointment: string;
			/** Choose the record that the appointment relates to. */
			readonly regardingobjectid_msdyncrm_linkedinactivity_appointment: string;
			/** Choose the record that the appointment relates to. */
			readonly regardingobjectid_msdyncrm_linkedinfieldmapping_appointment: string;
			/** Choose the record that the appointment relates to. */
			readonly regardingobjectid_msdyncrm_linkedinform_appointment: string;
			/** Choose the record that the appointment relates to. */
			readonly regardingobjectid_msdyncrm_linkedinformanswer_appointment: string;
			/** Choose the record that the appointment relates to. */
			readonly regardingobjectid_msdyncrm_linkedinformquestion_appointment: string;
			/** Choose the record that the appointment relates to. */
			readonly regardingobjectid_msdyncrm_linkedinformsubmission_appointment: string;
			/** Choose the record that the appointment relates to. */
			readonly regardingobjectid_msdyncrm_linkedinleadmatchingstrategy_appointment: string;
			/** Choose the record that the appointment relates to. */
			readonly regardingobjectid_msdyncrm_linkedinuserprofile_appointment: string;
			/** Choose the record that the appointment relates to. */
			readonly regardingobjectid_msdyncrm_marketingdynamiccontentmetadata_appointment: string;
			/** Choose the record that the appointment relates to. */
			readonly regardingobjectid_msdyncrm_marketingemaildynamiccontentmetadata_appointment: string;
			/** Choose the record that the appointment relates to. */
			readonly regardingobjectid_msdyncrm_marketingemailtestsend_appointment: string;
			/** Choose the record that the appointment relates to. */
			readonly regardingobjectid_msdyncrm_migration_appointment: string;
			/** Choose the record that the appointment relates to. */
			readonly regardingobjectid_msdyncrm_uicconfig_appointment: string;
			/** Choose the record that the appointment relates to. */
			readonly regardingobjectid_msdyn_agreement_appointment: string;
			/** Choose the record that the appointment relates to. */
			readonly regardingobjectid_msdyn_agreementbookingdate_appointment: string;
			/** Choose the record that the appointment relates to. */
			readonly regardingobjectid_msdyn_agreementbookingincident_appointment: string;
			/** Choose the record that the appointment relates to. */
			readonly regardingobjectid_msdyn_agreementbookingproduct_appointment: string;
			/** Choose the record that the appointment relates to. */
			readonly regardingobjectid_msdyn_agreementbookingservice_appointment: string;
			/** Choose the record that the appointment relates to. */
			readonly regardingobjectid_msdyn_agreementbookingservicetask_appointment: string;
			/** Choose the record that the appointment relates to. */
			readonly regardingobjectid_msdyn_agreementbookingsetup_appointment: string;
			/** Choose the record that the appointment relates to. */
			readonly regardingobjectid_msdyn_agreementinvoicedate_appointment: string;
			/** Choose the record that the appointment relates to. */
			readonly regardingobjectid_msdyn_agreementinvoiceproduct_appointment: string;
			/** Choose the record that the appointment relates to. */
			readonly regardingobjectid_msdyn_agreementinvoicesetup_appointment: string;
			/** Choose the record that the appointment relates to. */
			readonly regardingobjectid_msdyn_bookingalertstatus_appointment: string;
			/** Choose the record that the appointment relates to. */
			readonly regardingobjectid_msdyn_bookingrule_appointment: string;
			/** Choose the record that the appointment relates to. */
			readonly regardingobjectid_msdyn_bookingtimestamp_appointment: string;
			/** Choose the record that the appointment relates to. */
			readonly regardingobjectid_msdyn_customerasset_appointment: string;
			/** Choose the record that the appointment relates to. */
			readonly regardingobjectid_msdyn_fieldservicesetting_appointment: string;
			/** Choose the record that the appointment relates to. */
			readonly regardingobjectid_msdyn_incidenttypecharacteristic_appointment: string;
			/** Choose the record that the appointment relates to. */
			readonly regardingobjectid_msdyn_incidenttypeproduct_appointment: string;
			/** Choose the record that the appointment relates to. */
			readonly regardingobjectid_msdyn_incidenttypeservice_appointment: string;
			/** Choose the record that the appointment relates to. */
			readonly regardingobjectid_msdyn_inventoryadjustment_appointment: string;
			/** Choose the record that the appointment relates to. */
			readonly regardingobjectid_msdyn_inventoryadjustmentproduct_appointment: string;
			/** Choose the record that the appointment relates to. */
			readonly regardingobjectid_msdyn_inventoryjournal_appointment: string;
			/** Choose the record that the appointment relates to. */
			readonly regardingobjectid_msdyn_inventorytransfer_appointment: string;
			/** Choose the record that the appointment relates to. */
			readonly regardingobjectid_msdyn_payment_appointment: string;
			/** Choose the record that the appointment relates to. */
			readonly regardingobjectid_msdyn_paymentdetail_appointment: string;
			/** Choose the record that the appointment relates to. */
			readonly regardingobjectid_msdyn_paymentmethod_appointment: string;
			/** Choose the record that the appointment relates to. */
			readonly regardingobjectid_msdyn_paymentterm_appointment: string;
			/** Choose the record that the appointment relates to. */
			readonly regardingobjectid_msdyn_playbookinstance_appointment: string;
			/** Choose the record that the appointment relates to. */
			readonly regardingobjectid_msdyn_postalbum_appointment: string;
			/** Choose the record that the appointment relates to. */
			readonly regardingobjectid_msdyn_postalcode_appointment: string;
			/** Choose the record that the appointment relates to. */
			readonly regardingobjectid_msdyn_productinventory_appointment: string;
			/** Choose the record that the appointment relates to. */
			readonly regardingobjectid_msdyn_purchaseorder_appointment: string;
			/** Choose the record that the appointment relates to. */
			readonly regardingobjectid_msdyn_purchaseorderbill_appointment: string;
			/** Choose the record that the appointment relates to. */
			readonly regardingobjectid_msdyn_purchaseorderproduct_appointment: string;
			/** Choose the record that the appointment relates to. */
			readonly regardingobjectid_msdyn_purchaseorderreceipt_appointment: string;
			/** Choose the record that the appointment relates to. */
			readonly regardingobjectid_msdyn_purchaseorderreceiptproduct_appointment: string;
			/** Choose the record that the appointment relates to. */
			readonly regardingobjectid_msdyn_purchaseordersubstatus_appointment: string;
			/** Choose the record that the appointment relates to. */
			readonly regardingobjectid_msdyn_quotebookingincident_appointment: string;
			/** Choose the record that the appointment relates to. */
			readonly regardingobjectid_msdyn_quotebookingproduct_appointment: string;
			/** Choose the record that the appointment relates to. */
			readonly regardingobjectid_msdyn_quotebookingservice_appointment: string;
			/** Choose the record that the appointment relates to. */
			readonly regardingobjectid_msdyn_quotebookingservicetask_appointment: string;
			/** Choose the record that the appointment relates to. */
			readonly regardingobjectid_msdyn_resourceterritory_appointment: string;
			/** Choose the record that the appointment relates to. */
			readonly regardingobjectid_msdyn_rma_appointment: string;
			/** Choose the record that the appointment relates to. */
			readonly regardingobjectid_msdyn_rmaproduct_appointment: string;
			/** Choose the record that the appointment relates to. */
			readonly regardingobjectid_msdyn_rmareceipt_appointment: string;
			/** Choose the record that the appointment relates to. */
			readonly regardingobjectid_msdyn_rmareceiptproduct_appointment: string;
			/** Choose the record that the appointment relates to. */
			readonly regardingobjectid_msdyn_rmasubstatus_appointment: string;
			/** Choose the record that the appointment relates to. */
			readonly regardingobjectid_msdyn_rtv_appointment: string;
			/** Choose the record that the appointment relates to. */
			readonly regardingobjectid_msdyn_rtvproduct_appointment: string;
			/** Choose the record that the appointment relates to. */
			readonly regardingobjectid_msdyn_rtvsubstatus_appointment: string;
			/** Choose the record that the appointment relates to. */
			readonly regardingobjectid_msdyn_salessuggestion_appointment: string;
			/** Choose the record that the appointment relates to. */
			readonly regardingobjectid_msdyn_shipvia_appointment: string;
			/** Choose the record that the appointment relates to. */
			readonly regardingobjectid_msdyn_swarm_appointment: string;
			/** Choose the record that the appointment relates to. */
			readonly regardingobjectid_msdyn_systemuserschedulersetting_appointment: string;
			/** Choose the record that the appointment relates to. */
			readonly regardingobjectid_msdyn_timegroup_appointment: string;
			/** Choose the record that the appointment relates to. */
			readonly regardingobjectid_msdyn_timegroupdetail_appointment: string;
			/** Choose the record that the appointment relates to. */
			readonly regardingobjectid_msdyn_timeoffrequest_appointment: string;
			/** Choose the record that the appointment relates to. */
			readonly regardingobjectid_msdyn_warehouse_appointment: string;
			/** Choose the record that the appointment relates to. */
			readonly regardingobjectid_msdyn_workorder_appointment: string;
			/** Choose the record that the appointment relates to. */
			readonly regardingobjectid_msdyn_workordercharacteristic_appointment: string;
			/** Choose the record that the appointment relates to. */
			readonly regardingobjectid_msdyn_workorderincident_appointment: string;
			/** Choose the record that the appointment relates to. */
			readonly regardingobjectid_msdyn_workorderproduct_appointment: string;
			/** Choose the record that the appointment relates to. */
			readonly regardingobjectid_msdyn_workorderresourcerestriction_appointment: string;
			/** Choose the record that the appointment relates to. */
			readonly regardingobjectid_msdyn_workorderservice_appointment: string;
			/** Choose the record that the appointment relates to. */
			readonly regardingobjectid_msdyn_workorderservicetask_appointment: string;
			/** Choose the record that the appointment relates to. */
			readonly regardingobjectid_msevtmgt_checkin_appointment: string;
			/** Choose the record that the appointment relates to. */
			readonly regardingobjectid_msevtmgt_event_appointment: string;
			/** Choose the record that the appointment relates to. */
			readonly regardingobjectid_msevtmgt_eventpurchase_appointment: string;
			/** Choose the record that the appointment relates to. */
			readonly regardingobjectid_msevtmgt_eventpurchaseattendee_appointment: string;
			/** Choose the record that the appointment relates to. */
			readonly regardingobjectid_msevtmgt_eventpurchasepass_appointment: string;
			/** Choose the record that the appointment relates to. */
			readonly regardingobjectid_msevtmgt_eventregistration_appointment: string;
			/** Choose the record that the appointment relates to. */
			readonly regardingobjectid_msevtmgt_hotel_appointment: string;
			/** Choose the record that the appointment relates to. */
			readonly regardingobjectid_msevtmgt_hotelroomallocation_appointment: string;
			/** Choose the record that the appointment relates to. */
			readonly regardingobjectid_msevtmgt_hotelroomreservation_appointment: string;
			/** Choose the record that the appointment relates to. */
			readonly regardingobjectid_msevtmgt_layout_appointment: string;
			/** Choose the record that the appointment relates to. */
			readonly regardingobjectid_msevtmgt_room_appointment: string;
			/** Choose the record that the appointment relates to. */
			readonly regardingobjectid_msevtmgt_session_appointment: string;
			/** Choose the record that the appointment relates to. */
			readonly regardingobjectid_msevtmgt_sessionregistration_appointment: string;
			/** Choose the record that the appointment relates to. */
			readonly regardingobjectid_msevtmgt_sessiontrack_appointment: string;
			/** Choose the record that the appointment relates to. */
			readonly regardingobjectid_msevtmgt_speaker_appointment: string;
			/** Choose the record that the appointment relates to. */
			readonly regardingobjectid_msevtmgt_speakerengagement_appointment: string;
			/** Choose the record that the appointment relates to. */
			readonly regardingobjectid_msevtmgt_sponsorablearticle_appointment: string;
			/** Choose the record that the appointment relates to. */
			readonly regardingobjectid_msevtmgt_sponsorship_appointment: string;
			/** Choose the record that the appointment relates to. */
			readonly regardingobjectid_msevtmgt_venue_appointment: string;
			/** Choose the record that the appointment relates to. */
			readonly regardingobjectid_msevtmgt_webinarconfiguration_appointment: string;
			/** Choose the record that the appointment relates to. */
			readonly regardingobjectid_msevtmgt_webinarprovider_appointment: string;
			/** Choose the record that the appointment relates to. */
			readonly regardingobjectid_mspp_adplacement_appointment: string;
			/** Choose the record that the appointment relates to. */
			readonly regardingobjectid_mspp_pollplacement_appointment: string;
			/** Choose the record that the appointment relates to. */
			readonly regardingobjectid_mspp_publishingstatetransitionrule_appointment: string;
			/** Choose the record that the appointment relates to. */
			readonly regardingobjectid_mspp_redirect_appointment: string;
			/** Choose the record that the appointment relates to. */
			readonly regardingobjectid_mspp_shortcut_appointment: string;
			/** Choose the record that the appointment relates to. */
			readonly regardingobjectid_mspp_website_appointment: string;
			/** Choose the record that the appointment relates to. */
			readonly regardingobjectid_opportunity_appointment: string;
			/** Choose the record that the appointment relates to. */
			readonly regardingobjectid_quote_appointment: string;
			/** Choose the record that the appointment relates to. */
			readonly regardingobjectid_salesorder_appointment: string;
			/** Choose the record that the appointment relates to. */
			readonly regardingobjectid_site_appointment: string;
			/** Shows the expected duration of the appointment, in minutes. */
			readonly ScheduledDurationMinutes: string;
			/** Enter the expected due date and time for the activity to be completed to provide details about the timing of the appointment. */
			readonly ScheduledEnd_UtcDateAndTime: string;
			/** Enter the expected start date and time for the activity to provide details about the timing of the appointment. */
			readonly ScheduledStart_UtcDateAndTime: string;
			/** Shows the ID of the recurring series of an instance. */
			readonly SeriesId: string;
			/** Unique identifier for an associated service. */
			readonly ServiceId: string;
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
			/** 4201 */
			Appointment,
			/** 11000 */
			Booking_Alert,
			/** 4402 */
			Campaign_Activity,
			/** 4401 */
			Campaign_Response,
			/** 4206 */
			Case_Resolution,
			/** 10691 */
			Conversation,
			/** 10877 */
			Copilot_Transcript,
			/** 10600 */
			Customer_Voice_alert,
			/** 10610 */
			Customer_Voice_survey_invite,
			/** 10612 */
			Customer_Voice_survey_response,
			/** 4202 */
			Email,
			/** 4204 */
			Fax,
			/** 10310 */
			Invite_Redemption,
			/** 4207 */
			Letter,
			/** 4208 */
			Opportunity_Close,
			/** 4209 */
			Order_Close,
			/** 11063 */
			Outbound_message,
			/** 4210 */
			Phone_Call,
			/** 10311 */
			Portal_Comment,
			/** 4406 */
			Quick_Campaign,
			/** 4211 */
			Quote_Close,
			/** 4251 */
			Recurring_Appointment,
			/** 4214 */
			Service_Activity,
			/** 10708 */
			Session,
			/** 4212 */
			Task,
			/** 10185 */
			Teams_chat,
			/** 11070 */
			Voicemail
		}
		enum AttachmentErrors {
			/** 0 */
			None,
			/** 1 */
			The_appointment_was_saved_as_a_Microsoft_Dynamics_365_appointment_record_but_not_all_the_attachments_could_be_saved_with_it_An_attachment_cannot_be_saved_if_it_is_blocked_or_if_its_file_type_is_invalid
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
		enum OnlineMeetingType {
			/** 1 */
			Teams_Meeting
		}
		enum PriorityCode {
			/** 2 */
			High,
			/** 0 */
			Low,
			/** 1 */
			Normal
		}
		enum RegardingObjectTypeCode {
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.44.44.44'}