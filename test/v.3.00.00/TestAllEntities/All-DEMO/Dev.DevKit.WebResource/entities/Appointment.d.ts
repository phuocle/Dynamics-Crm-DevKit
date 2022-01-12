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
			/** Type the location where the appointment will take place, such as a conference room or customer office. */
			Location: DevKit.Controls.String;
			/** Enter the account, contact, lead, user, or other equipment resources that are not needed at the appointment, but can optionally attend. */
			OptionalAttendees: DevKit.Controls.Lookup;
			/** Unique identifier of the object with which the appointment is associated. */
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
			attachmentsGrid: DevKit.Controls.Grid;
		}
	}
	class FormAppointment extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form Appointment Main Form
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
			/** Type the location where the appointment will take place, such as a conference room or customer office. */
			Location: DevKit.Controls.String;
			/** Enter the account, contact, lead, user, or other equipment resources that are not needed at the appointment, but can optionally attend. */
			OptionalAttendees: DevKit.Controls.Lookup;
			/** Unique identifier of the object with which the appointment is associated. */
			RegardingObjectId: DevKit.Controls.Lookup;
			/** Unique identifier of the object with which the appointment is associated. */
			RegardingObjectId_1: DevKit.Controls.Lookup;
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
			attachmentsGrid: DevKit.Controls.Grid;
		}
	}
	class FormAppointment_for_Interactive_experience extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form Appointment_for_Interactive_experience Main Form
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
			/** Type the location where the appointment will take place, such as a conference room or customer office. */
			Location: DevKit.Controls.String;
			/** Enter the account, contact, lead, user, or other equipment resources that are not needed at the appointment, but can optionally attend. */
			OptionalAttendees: DevKit.Controls.Lookup;
			/** Unique identifier of the object with which the appointment is associated. */
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
			attachmentsGrid: DevKit.Controls.Grid;
		}
	}
	class FormAppointment_Wizard extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form Appointment_Wizard Main Form
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
			/** Type the location where the appointment will take place, such as a conference room or customer office. */
			Location: DevKit.Controls.String;
			/** Enter the account, contact, lead, user, or other equipment resources that are not needed at the appointment, but can optionally attend. */
			OptionalAttendees: DevKit.Controls.Lookup;
			/** Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
			OwnerId: DevKit.Controls.Lookup;
			/** Select the priority so that preferred customers or critical issues are handled quickly. */
			PriorityCode: DevKit.Controls.OptionSet;
			/** Unique identifier of the object with which the appointment is associated. */
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
		* DynamicsCrm.DevKit form Appointment_quick_create_form Quick Create
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
		/** The entity object */
		Entity: any;
		/** The entity name */
		EntityName: string;
		/** The entity collection name */
		EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependant on the fields that are retrieved */
		"@odata.etag": string;
		/** For internal use only. */
		ActivityAdditionalParams: DevKit.WebApi.StringValue;
		/** Unique identifier of the appointment. */
		ActivityId: DevKit.WebApi.GuidValue;
		/** Shows the value selected in the Duration field on the appointment at the time that the appointment is closed as completed. The duration is used to report the time spent on the activity. */
		ActualDurationMinutes: DevKit.WebApi.IntegerValue;
		/** Enter the actual end date and time of the appointment. By default, it displays the date and time when the activity was completed or canceled, but can be edited to capture the actual duration of the appointment. */
		ActualEnd_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Enter the actual start date and time for the appointment. By default, it displays the date and time when the activity was created, but can be edited to capture the actual duration of the appointment. */
		ActualStart_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Shows the number of attachments on the appointment. */
		AttachmentCount: DevKit.WebApi.IntegerValueReadonly;
		/** Select the error code to identify issues with the outlook item recipients or attachments, such as blocked attachments. */
		AttachmentErrors: DevKit.WebApi.OptionSetValue;
		/** Type a category to identify the appointment type, such as sales demo, prospect call, or service call, to tie the appointment to a business group or function. */
		Category: DevKit.WebApi.StringValue;
		/** Shows who created the record. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows who created the record on behalf of another user. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Type additional information to describe the purpose of the appointment. */
		Description: DevKit.WebApi.StringValue;
		/** Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency. */
		ExchangeRate: DevKit.WebApi.DecimalValueReadonly;
		/** Shows the ID of the appointment in Microsoft Office Outlook. The ID is used to synchronize the appointment between Microsoft Dynamics 365 and the correct Exchange account. */
		GlobalObjectId: DevKit.WebApi.StringValue;
		/** Unique identifier of the data import or data migration that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Type of instance of a recurring series. */
		InstanceTypeCode: DevKit.WebApi.OptionSetValueReadonly;
		/** Select whether the appointment is an all-day event to make sure that the required resources are scheduled for the full day. */
		IsAllDayEvent: DevKit.WebApi.BooleanValue;
		/** Information regarding whether the appointment was billed as part of resolving a case. */
		IsBilled: DevKit.WebApi.BooleanValue;
		/** Information regarding whether the appointment is a draft. */
		IsDraft: DevKit.WebApi.BooleanValue;
		/** For internal use only. */
		IsMapiPrivate: DevKit.WebApi.BooleanValue;
		/** Displays whether or not this is an online meeting. */
		IsOnlineMeeting: DevKit.WebApi.BooleanValue;
		/** Information regarding whether the activity is a regular activity type or event type. */
		IsRegularActivity: DevKit.WebApi.BooleanValueReadonly;
		/** For internal use only. */
		IsUnsafe: DevKit.WebApi.IntegerValueReadonly;
		/** Information regarding whether the appointment was created from a workflow rule. */
		IsWorkflowCreated: DevKit.WebApi.BooleanValue;
		/** Contains the date and time stamp of the last on hold time. */
		LastOnHoldTime_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Type the location where the appointment will take place, such as a conference room or customer office. */
		Location: DevKit.WebApi.StringValue;
		/** Shows who last updated the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** For internal use only.  */
		ModifiedFieldsMask: DevKit.WebApi.StringValueReadonly;
		/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows who created the record on behalf of another user. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows how long, in minutes, that the record was on hold. */
		OnHoldTime: DevKit.WebApi.IntegerValueReadonly;
		/** Shows the online meeting chat id. */
		OnlineMeetingChatId: DevKit.WebApi.StringValue;
		/** Shows the online meeting id. */
		OnlineMeetingId: DevKit.WebApi.StringValue;
		/** Shows the online meeting join url. */
		OnlineMeetingJoinUrl: DevKit.WebApi.StringValue;
		/** Displays the online meeting type. */
		OnlineMeetingType: DevKit.WebApi.OptionSetValue;
		/** The original start date of the appointment. */
		OriginalStartDate_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the Microsoft Office Outlook appointment owner that correlates to the PR_OWNER_APPT_ID MAPI property. */
		OutlookOwnerApptId: DevKit.WebApi.IntegerValue;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: DevKit.WebApi.LookupValue;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: DevKit.WebApi.LookupValue;
		/** Shows the business unit that the record owner belongs to. */
		OwningBusinessUnit: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the team that owns the appointment. */
		OwningTeam: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the user that owns the appointment. */
		OwningUser: DevKit.WebApi.LookupValueReadonly;
		/** Select the priority so that preferred customers or critical issues are handled quickly. */
		PriorityCode: DevKit.WebApi.OptionSetValue;
		/** Shows the ID of the process. */
		ProcessId: DevKit.WebApi.GuidValue;
		/** Unique identifier of the object with which the appointment is associated. */
		regardingobjectid_account_appointment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the appointment is associated. */
		regardingobjectid_bookableresourcebooking_appointment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the appointment is associated. */
		regardingobjectid_bookableresourcebookingheader_appointment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the appointment is associated. */
		regardingobjectid_bulkoperation_appointment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the appointment is associated. */
		regardingobjectid_campaign_appointment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the appointment is associated. */
		regardingobjectid_campaignactivity_appointment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the appointment is associated. */
		regardingobjectid_contact_appointment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the appointment is associated. */
		regardingobjectid_contract_appointment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the appointment is associated. */
		regardingobjectid_entitlement_appointment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the appointment is associated. */
		regardingobjectid_entitlementtemplate_appointment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the appointment is associated. */
		regardingobjectid_incident_appointment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the appointment is associated. */
		regardingobjectid_invoice_appointment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the appointment is associated. */
		regardingobjectid_knowledgearticle_appointment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the appointment is associated. */
		regardingobjectid_knowledgebaserecord_appointment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the appointment is associated. */
		regardingobjectid_lead_appointment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the appointment is associated. */
		regardingobjectid_msdyn_agreement_appointment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the appointment is associated. */
		regardingobjectid_msdyn_agreementbookingdate_appointment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the appointment is associated. */
		regardingobjectid_msdyn_agreementbookingincident_appointment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the appointment is associated. */
		regardingobjectid_msdyn_agreementbookingproduct_appointment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the appointment is associated. */
		regardingobjectid_msdyn_agreementbookingservice_appointment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the appointment is associated. */
		regardingobjectid_msdyn_agreementbookingservicetask_appointment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the appointment is associated. */
		regardingobjectid_msdyn_agreementbookingsetup_appointment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the appointment is associated. */
		regardingobjectid_msdyn_agreementinvoicedate_appointment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the appointment is associated. */
		regardingobjectid_msdyn_agreementinvoiceproduct_appointment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the appointment is associated. */
		regardingobjectid_msdyn_agreementinvoicesetup_appointment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the appointment is associated. */
		regardingobjectid_msdyn_bookingalertstatus_appointment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the appointment is associated. */
		regardingobjectid_msdyn_bookingrule_appointment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the appointment is associated. */
		regardingobjectid_msdyn_bookingtimestamp_appointment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the appointment is associated. */
		regardingobjectid_msdyn_customerasset_appointment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the appointment is associated. */
		regardingobjectid_msdyn_fieldservicesetting_appointment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the appointment is associated. */
		regardingobjectid_msdyn_incidenttypecharacteristic_appointment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the appointment is associated. */
		regardingobjectid_msdyn_incidenttypeproduct_appointment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the appointment is associated. */
		regardingobjectid_msdyn_incidenttypeservice_appointment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the appointment is associated. */
		regardingobjectid_msdyn_inventoryadjustment_appointment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the appointment is associated. */
		regardingobjectid_msdyn_inventoryadjustmentproduct_appointment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the appointment is associated. */
		regardingobjectid_msdyn_inventoryjournal_appointment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the appointment is associated. */
		regardingobjectid_msdyn_inventorytransfer_appointment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the appointment is associated. */
		regardingobjectid_msdyn_payment_appointment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the appointment is associated. */
		regardingobjectid_msdyn_paymentdetail_appointment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the appointment is associated. */
		regardingobjectid_msdyn_paymentmethod_appointment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the appointment is associated. */
		regardingobjectid_msdyn_paymentterm_appointment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the appointment is associated. */
		regardingobjectid_msdyn_playbookinstance_appointment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the appointment is associated. */
		regardingobjectid_msdyn_postalbum_appointment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the appointment is associated. */
		regardingobjectid_msdyn_postalcode_appointment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the appointment is associated. */
		regardingobjectid_msdyn_processnotes_appointment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the appointment is associated. */
		regardingobjectid_msdyn_productinventory_appointment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the appointment is associated. */
		regardingobjectid_msdyn_projectteam_appointment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the appointment is associated. */
		regardingobjectid_msdyn_purchaseorder_appointment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the appointment is associated. */
		regardingobjectid_msdyn_purchaseorderbill_appointment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the appointment is associated. */
		regardingobjectid_msdyn_purchaseorderproduct_appointment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the appointment is associated. */
		regardingobjectid_msdyn_purchaseorderreceipt_appointment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the appointment is associated. */
		regardingobjectid_msdyn_purchaseorderreceiptproduct_appointment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the appointment is associated. */
		regardingobjectid_msdyn_purchaseordersubstatus_appointment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the appointment is associated. */
		regardingobjectid_msdyn_quotebookingincident_appointment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the appointment is associated. */
		regardingobjectid_msdyn_quotebookingproduct_appointment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the appointment is associated. */
		regardingobjectid_msdyn_quotebookingservice_appointment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the appointment is associated. */
		regardingobjectid_msdyn_quotebookingservicetask_appointment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the appointment is associated. */
		regardingobjectid_msdyn_resourceterritory_appointment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the appointment is associated. */
		regardingobjectid_msdyn_rma_appointment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the appointment is associated. */
		regardingobjectid_msdyn_rmaproduct_appointment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the appointment is associated. */
		regardingobjectid_msdyn_rmareceipt_appointment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the appointment is associated. */
		regardingobjectid_msdyn_rmareceiptproduct_appointment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the appointment is associated. */
		regardingobjectid_msdyn_rmasubstatus_appointment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the appointment is associated. */
		regardingobjectid_msdyn_rtv_appointment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the appointment is associated. */
		regardingobjectid_msdyn_rtvproduct_appointment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the appointment is associated. */
		regardingobjectid_msdyn_rtvsubstatus_appointment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the appointment is associated. */
		regardingobjectid_msdyn_shipvia_appointment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the appointment is associated. */
		regardingobjectid_msdyn_systemuserschedulersetting_appointment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the appointment is associated. */
		regardingobjectid_msdyn_timegroup_appointment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the appointment is associated. */
		regardingobjectid_msdyn_timegroupdetail_appointment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the appointment is associated. */
		regardingobjectid_msdyn_timeoffrequest_appointment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the appointment is associated. */
		regardingobjectid_msdyn_warehouse_appointment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the appointment is associated. */
		regardingobjectid_msdyn_workorder_appointment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the appointment is associated. */
		regardingobjectid_msdyn_workordercharacteristic_appointment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the appointment is associated. */
		regardingobjectid_msdyn_workorderincident_appointment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the appointment is associated. */
		regardingobjectid_msdyn_workorderproduct_appointment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the appointment is associated. */
		regardingobjectid_msdyn_workorderresourcerestriction_appointment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the appointment is associated. */
		regardingobjectid_msdyn_workorderservice_appointment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the appointment is associated. */
		regardingobjectid_msdyn_workorderservicetask_appointment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the appointment is associated. */
		regardingobjectid_opportunity_appointment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the appointment is associated. */
		regardingobjectid_quote_appointment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the appointment is associated. */
		regardingobjectid_salesorder_appointment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the appointment is associated. */
		regardingobjectid_site_appointment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the appointment is associated. */
		regardingobjectid_uii_action_appointment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the appointment is associated. */
		regardingobjectid_uii_hostedapplication_appointment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the appointment is associated. */
		regardingobjectid_uii_nonhostedapplication_appointment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the appointment is associated. */
		regardingobjectid_uii_option_appointment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the appointment is associated. */
		regardingobjectid_uii_savedsession_appointment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the appointment is associated. */
		regardingobjectid_uii_workflow_appointment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the appointment is associated. */
		regardingobjectid_uii_workflowstep_appointment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the appointment is associated. */
		regardingobjectid_uii_workflow_workflowstep_mapping_appointment: DevKit.WebApi.LookupValue;
		/** Shows the expected duration of the appointment, in minutes. */
		ScheduledDurationMinutes: DevKit.WebApi.IntegerValue;
		/** Enter the expected due date and time for the activity to be completed to provide details about the timing of the appointment. */
		ScheduledEnd_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Enter the expected start date and time for the activity to provide details about the timing of the appointment. */
		ScheduledStart_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Shows the ID of the recurring series of an instance. */
		SeriesId: DevKit.WebApi.GuidValueReadonly;
		/** Unique identifier for an associated service. */
		ServiceId: DevKit.WebApi.LookupValue;
		/** Choose the service level agreement (SLA) that you want to apply to the appointment record. */
		SLAId: DevKit.WebApi.LookupValue;
		/** Last SLA that was applied to this appointment. This field is for internal use only. */
		SLAInvokedId: DevKit.WebApi.LookupValueReadonly;
		/** Shows the date and time by which the activities are sorted. */
		SortDate_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Shows the ID of the stage. */
		StageId: DevKit.WebApi.GuidValue;
		/** Shows whether the appointment is open, completed, or canceled. Completed and canceled appointments are read-only and can't be edited. */
		StateCode: DevKit.WebApi.OptionSetValue;
		/** Select the appointment's status. */
		StatusCode: DevKit.WebApi.OptionSetValue;
		/** Type a subcategory to identify the appointment type and relate the activity to a specific product, sales region, business group, or other function. */
		Subcategory: DevKit.WebApi.StringValue;
		/** Type a short description about the objective or primary topic of the appointment. */
		Subject: DevKit.WebApi.StringValue;
		/** For internal use only. */
		SubscriptionId: DevKit.WebApi.GuidValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
		TransactionCurrencyId: DevKit.WebApi.LookupValue;
		/** For internal use only. */
		TraversedPath: DevKit.WebApi.StringValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Version number of the appointment. */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
		/** The array of object that can cast object to ActivityPartyApi class */
		ActivityParties: Array<any>;
	}
}
declare namespace OptionSet {
	namespace Appointment {
		enum ActivityTypeCode {
			/** 4201 */
			Appointment,
			/** 10386 */
			Booking_Alert,
			/** 4402 */
			Campaign_Activity,
			/** 4401 */
			Campaign_Response,
			/** 4206 */
			Case_Resolution,
			/** 10673 */
			Conversation,
			/** 10283 */
			Customer_Voice_alert,
			/** 10293 */
			Customer_Voice_survey_invite,
			/** 10295 */
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
			/** 10781 */
			Outbound_message,
			/** 4210 */
			Phone_Call,
			/** 10416 */
			Project_Service_Approval,
			/** 4406 */
			Quick_Campaign,
			/** 4211 */
			Quote_Close,
			/** 4251 */
			Recurring_Appointment,
			/** 4214 */
			Service_Activity,
			/** 10688 */
			Session,
			/** 4212 */
			Task
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.00.00'}