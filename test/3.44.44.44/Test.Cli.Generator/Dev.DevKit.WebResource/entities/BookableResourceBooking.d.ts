//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormBooking_M365 {
		interface Tabs {
		}
		interface Body {
			/** Select the status of the booking. */
			BookingStatus: DevKit.Controls.Lookup;
			/** Select whether the booking is solid or liquid. Solid bookings are firm and cannot be changed whereas liquid bookings can be changed. */
			BookingType: DevKit.Controls.OptionSet;
			/** Enter the duration of the booking. */
			Duration: DevKit.Controls.Integer;
			/** Enter the end date and time of the booking. */
			EndTime: DevKit.Controls.DateTime;
			/** Shows the time that work started. */
			msdyn_ActualArrivalTime: DevKit.Controls.DateTime;
			/** Shows the resource that is booked. */
			Resource: DevKit.Controls.Lookup;
			/** Enter the start date and time of the booking. */
			StartTime: DevKit.Controls.DateTime;
		}
		interface Navigation {
			bookableresourcebooking_adx_inviteredemptions: DevKit.Controls.NavigationItem,
			bookableresourcebooking_adx_portalcomments: DevKit.Controls.NavigationItem,
			bookableresourcebooking_Appointments: DevKit.Controls.NavigationItem,
			bookableresourcebooking_BulkOperations: DevKit.Controls.NavigationItem,
			bookableresourcebooking_CampaignActivities: DevKit.Controls.NavigationItem,
			bookableresourcebooking_CampaignResponses: DevKit.Controls.NavigationItem,
			bookableresourcebooking_Emails: DevKit.Controls.NavigationItem,
			bookableresourcebooking_IncidentResolutions: DevKit.Controls.NavigationItem,
			bookableresourcebooking_msdyn_bookingalerts: DevKit.Controls.NavigationItem,
			bookableresourcebooking_msdyn_copilottranscripts: DevKit.Controls.NavigationItem,
			bookableresourcebooking_msdyn_ocliveworkitems: DevKit.Controls.NavigationItem,
			bookableresourcebooking_msdyn_ocoutboundmessages: DevKit.Controls.NavigationItem,
			bookableresourcebooking_msdyn_ocsessions: DevKit.Controls.NavigationItem,
			bookableresourcebooking_msdyn_ocvoicemails: DevKit.Controls.NavigationItem,
			bookableresourcebooking_msfp_alerts: DevKit.Controls.NavigationItem,
			bookableresourcebooking_msfp_surveyinvites: DevKit.Controls.NavigationItem,
			bookableresourcebooking_msfp_surveyresponses: DevKit.Controls.NavigationItem,
			bookableresourcebooking_OpportunityCloses: DevKit.Controls.NavigationItem,
			bookableresourcebooking_OrderCloses: DevKit.Controls.NavigationItem,
			bookableresourcebooking_PhoneCalls: DevKit.Controls.NavigationItem,
			bookableresourcebooking_QuoteCloses: DevKit.Controls.NavigationItem,
			bookableresourcebooking_ServiceAppointments: DevKit.Controls.NavigationItem,
			bookableresourcebooking_Tasks: DevKit.Controls.NavigationItem,
			msdyn_bookableresourcebooking_msdyn_bookingjournal_Booking: DevKit.Controls.NavigationItem,
			msdyn_bookableresourcebooking_msdyn_bookingtimestamp_Booking: DevKit.Controls.NavigationItem,
			msdyn_bookableresourcebooking_msdyn_geofence_bookableresourcebookingid: DevKit.Controls.NavigationItem,
			msdyn_bookableresourcebooking_msdyn_purchaseorder_Booking: DevKit.Controls.NavigationItem,
			msdyn_bookableresourcebooking_msdyn_purchaseorderproduct_AssociateToBooking: DevKit.Controls.NavigationItem,
			msdyn_bookableresourcebooking_msdyn_purchaseorderreceiptproduct_AssociateToBooking: DevKit.Controls.NavigationItem,
			msdyn_bookableresourcebooking_msdyn_rtv_Booking: DevKit.Controls.NavigationItem,
			msdyn_bookableresourcebooking_msdyn_timeentry_BookableResourceBooking: DevKit.Controls.NavigationItem,
			msdyn_bookableresourcebooking_msdyn_workorderproduct_Booking: DevKit.Controls.NavigationItem,
			msdyn_bookableresourcebooking_msdyn_workorderservice_Booking: DevKit.Controls.NavigationItem,
			msdyn_bookableresourcebooking_msdyn_workorderservicetask_Booking: DevKit.Controls.NavigationItem,
			msdyn_bookableresourcebookingquicknote_bookableresourcebooking: DevKit.Controls.NavigationItem
		}
	}
	class FormBooking_M365 extends DevKit.IForm {
		/**
		* Booking (M365) [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Booking_M365 */
		Body: DevKit.FormBooking_M365.Body;
		/** The Navigation of form Booking_M365 */
		Navigation: DevKit.FormBooking_M365.Navigation;
		/** The SidePanes of form Booking_M365 */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormBooking_and_Work_Order {
		interface tab_fstab_customer_Sections {
			fstab_customer_section_general: DevKit.Controls.Section;
			fstab_report_section_travel: DevKit.Controls.Section;
		}
		interface tab_fstab_fieldservice_Sections {
			fstab_fieldservice_section_general: DevKit.Controls.Section;
			fstab_fieldservice_section_others: DevKit.Controls.Section;
		}
		interface tab_fstab_general_Sections {
			fstab_general_section_copilot: DevKit.Controls.Section;
			fstab_general_section_others: DevKit.Controls.Section;
			fstab_general_section_summary: DevKit.Controls.Section;
		}
		interface tab_fstab_Notes_Sections {
			fstab_notes_section_general: DevKit.Controls.Section;
			fstab_notes_section_quicknotes: DevKit.Controls.Section;
			fstab_notes_section_signature: DevKit.Controls.Section;
		}
		interface tab_fstab_service_Sections {
			fstab_service_section_general: DevKit.Controls.Section;
		}
		interface tab_fstab_Timeline_Sections {
			fstab_timeline_section_new: DevKit.Controls.Section;
		}
		interface tab_fstab_customer extends DevKit.Controls.ITab {
			Section: tab_fstab_customer_Sections;
		}
		interface tab_fstab_fieldservice extends DevKit.Controls.ITab {
			Section: tab_fstab_fieldservice_Sections;
		}
		interface tab_fstab_general extends DevKit.Controls.ITab {
			Section: tab_fstab_general_Sections;
		}
		interface tab_fstab_Notes extends DevKit.Controls.ITab {
			Section: tab_fstab_Notes_Sections;
		}
		interface tab_fstab_service extends DevKit.Controls.ITab {
			Section: tab_fstab_service_Sections;
		}
		interface tab_fstab_Timeline extends DevKit.Controls.ITab {
			Section: tab_fstab_Timeline_Sections;
		}
		interface Tabs {
			fstab_customer: tab_fstab_customer;
			fstab_fieldservice: tab_fstab_fieldservice;
			fstab_general: tab_fstab_general;
			fstab_Notes: tab_fstab_Notes;
			fstab_service: tab_fstab_service;
			fstab_Timeline: tab_fstab_Timeline;
		}
		interface Body {
			Tab: Tabs;
			/** Select the status of the booking. */
			BookingStatus: DevKit.Controls.Lookup;
			/** Select whether the booking is solid or liquid. Solid bookings are firm and cannot be changed whereas liquid bookings can be changed. */
			BookingType: DevKit.Controls.OptionSet;
			/** Enter the duration of the booking. */
			Duration: DevKit.Controls.Integer;
			/** Enter the end date and time of the booking. */
			EndTime: DevKit.Controls.DateTime;
			/** Shows the time that work started. */
			msdyn_ActualArrivalTime: DevKit.Controls.DateTime;
			/** Shows the time that work started. */
			msdyn_ActualArrivalTime1: DevKit.Controls.DateTime;
			/** Shows the total travel duration. Calculated based on the difference between the Bookable Resource Booking's start time and actual arrival time. */
			msdyn_ActualTravelDuration: DevKit.Controls.Integer;
			/** Shows the total travel duration. Calculated based on the difference between the Bookable Resource Booking's start time and actual arrival time. */
			msdyn_ActualTravelDuration1: DevKit.Controls.Integer;
			/** Agreement Booking Date from where this Booking was generated */
			msdyn_AgreementBookingDate: DevKit.Controls.Lookup;
			/** Allow the time of this booking to be displayed on the schedule assistant as available. */
			msdyn_AllowOverlapping: DevKit.Controls.Boolean;
			/** Shows the method used to create this booking. */
			msdyn_BookingMethod: DevKit.Controls.OptionSet;
			/** Estimated Arrival Time */
			msdyn_EstimatedArrivalTime: DevKit.Controls.DateTime;
			/** Estimated Travel Duration */
			msdyn_EstimatedTravelDuration: DevKit.Controls.Integer;
			/** In this field you can enter the total miles the resource drove to the job site */
			msdyn_MilesTraveled: DevKit.Controls.Double;
			/** Internal Use. This field is used to capture the time when the Booking was updated on mobile offline. */
			msdyn_OfflineTimestamp: DevKit.Controls.DateTime;
			/** Internal For Quick note pcf control actions */
			msdyn_quickNoteAction: DevKit.Controls.OptionSet;
			/** Internal For Quick note pcf control actions */
			msdyn_quickNoteAction1: DevKit.Controls.OptionSet;
			/** Unique identifier for Resource associated with Resource Booking */
			msdyn_ResourceGroup: DevKit.Controls.Lookup;
			/** This field is used for capturing signature on Mobile (using the Pen Control) */
			msdyn_Signature: DevKit.Controls.String;
			msdyn_TimeGroupDetailSelected: DevKit.Controls.Lookup;
			/** Unique identifier for Work Order associated with Resource Booking. */
			msdyn_WorkOrder: DevKit.Controls.Lookup;
			/** Unique identifier for Work Order associated with Resource Booking. */
			msdyn_WorkOrder1: DevKit.Controls.Lookup;
			/** Unique identifier for Work Order associated with Resource Booking. */
			msdyn_WorkOrder2: DevKit.Controls.Lookup;
			/** Unique identifier for Work Order associated with Resource Booking. */
			msdyn_WorkOrder3: DevKit.Controls.Lookup;
			/** Type a name for the booking. */
			Name: DevKit.Controls.String;
			notescontrol: DevKit.Controls.Note;
			/** Shows the resource that is booked. */
			Resource: DevKit.Controls.Lookup;
			/** Enter the start date and time of the booking. */
			StartTime: DevKit.Controls.DateTime;
		}
		interface Navigation {
			bookableresourcebooking_adx_inviteredemptions: DevKit.Controls.NavigationItem,
			bookableresourcebooking_adx_portalcomments: DevKit.Controls.NavigationItem,
			bookableresourcebooking_Appointments: DevKit.Controls.NavigationItem,
			bookableresourcebooking_BulkOperations: DevKit.Controls.NavigationItem,
			bookableresourcebooking_CampaignActivities: DevKit.Controls.NavigationItem,
			bookableresourcebooking_CampaignResponses: DevKit.Controls.NavigationItem,
			bookableresourcebooking_Emails: DevKit.Controls.NavigationItem,
			bookableresourcebooking_IncidentResolutions: DevKit.Controls.NavigationItem,
			bookableresourcebooking_msdyn_bookingalerts: DevKit.Controls.NavigationItem,
			bookableresourcebooking_msdyn_copilottranscripts: DevKit.Controls.NavigationItem,
			bookableresourcebooking_msdyn_ocliveworkitems: DevKit.Controls.NavigationItem,
			bookableresourcebooking_msdyn_ocoutboundmessages: DevKit.Controls.NavigationItem,
			bookableresourcebooking_msdyn_ocsessions: DevKit.Controls.NavigationItem,
			bookableresourcebooking_msdyn_ocvoicemails: DevKit.Controls.NavigationItem,
			bookableresourcebooking_msfp_alerts: DevKit.Controls.NavigationItem,
			bookableresourcebooking_msfp_surveyinvites: DevKit.Controls.NavigationItem,
			bookableresourcebooking_msfp_surveyresponses: DevKit.Controls.NavigationItem,
			bookableresourcebooking_OpportunityCloses: DevKit.Controls.NavigationItem,
			bookableresourcebooking_OrderCloses: DevKit.Controls.NavigationItem,
			bookableresourcebooking_PhoneCalls: DevKit.Controls.NavigationItem,
			bookableresourcebooking_QuoteCloses: DevKit.Controls.NavigationItem,
			bookableresourcebooking_ServiceAppointments: DevKit.Controls.NavigationItem,
			bookableresourcebooking_Tasks: DevKit.Controls.NavigationItem,
			msdyn_bookableresourcebooking_msdyn_bookingjournal_Booking: DevKit.Controls.NavigationItem,
			msdyn_bookableresourcebooking_msdyn_bookingtimestamp_Booking: DevKit.Controls.NavigationItem,
			msdyn_bookableresourcebooking_msdyn_geofence_bookableresourcebookingid: DevKit.Controls.NavigationItem,
			msdyn_bookableresourcebooking_msdyn_purchaseorder_Booking: DevKit.Controls.NavigationItem,
			msdyn_bookableresourcebooking_msdyn_purchaseorderproduct_AssociateToBooking: DevKit.Controls.NavigationItem,
			msdyn_bookableresourcebooking_msdyn_purchaseorderreceiptproduct_AssociateToBooking: DevKit.Controls.NavigationItem,
			msdyn_bookableresourcebooking_msdyn_rtv_Booking: DevKit.Controls.NavigationItem,
			msdyn_bookableresourcebooking_msdyn_timeentry_BookableResourceBooking: DevKit.Controls.NavigationItem,
			msdyn_bookableresourcebooking_msdyn_workorderproduct_Booking: DevKit.Controls.NavigationItem,
			msdyn_bookableresourcebooking_msdyn_workorderservice_Booking: DevKit.Controls.NavigationItem,
			msdyn_bookableresourcebooking_msdyn_workorderservicetask_Booking: DevKit.Controls.NavigationItem,
			msdyn_bookableresourcebookingquicknote_bookableresourcebooking: DevKit.Controls.NavigationItem
		}
		interface Grid {
			msdyn_quicknotescontrol: DevKit.Controls.Grid;
		}
	}
	class FormBooking_and_Work_Order extends DevKit.IForm {
		/**
		* Booking and Work Order [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Booking_and_Work_Order */
		Body: DevKit.FormBooking_and_Work_Order.Body;
		/** The Navigation of form Booking_and_Work_Order */
		Navigation: DevKit.FormBooking_and_Work_Order.Navigation;
		/** The Grid of form Booking_and_Work_Order */
		Grid: DevKit.FormBooking_and_Work_Order.Grid;
		/** The SidePanes of form Booking_and_Work_Order */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormFSM_Native_Booking {
		interface tab_generalTab_Sections {
			assetsSection: DevKit.Controls.Section;
			detailsSection: DevKit.Controls.Section;
			statusSection: DevKit.Controls.Section;
			summarySection: DevKit.Controls.Section;
		}
		interface tab_productsTab_Sections {
			productsSection: DevKit.Controls.Section;
		}
		interface tab_serviceTab_Sections {
			servicesSection: DevKit.Controls.Section;
		}
		interface tab_taskTab_Sections {
			bookingStatusSection2: DevKit.Controls.Section;
			serviceTaskSection: DevKit.Controls.Section;
		}
		interface tab_timelineTab_Sections {
			timelineSection: DevKit.Controls.Section;
		}
		interface tab_generalTab extends DevKit.Controls.ITab {
			Section: tab_generalTab_Sections;
		}
		interface tab_productsTab extends DevKit.Controls.ITab {
			Section: tab_productsTab_Sections;
		}
		interface tab_serviceTab extends DevKit.Controls.ITab {
			Section: tab_serviceTab_Sections;
		}
		interface tab_taskTab extends DevKit.Controls.ITab {
			Section: tab_taskTab_Sections;
		}
		interface tab_timelineTab extends DevKit.Controls.ITab {
			Section: tab_timelineTab_Sections;
		}
		interface Tabs {
			generalTab: tab_generalTab;
			productsTab: tab_productsTab;
			serviceTab: tab_serviceTab;
			taskTab: tab_taskTab;
			timelineTab: tab_timelineTab;
		}
		interface Body {
			Tab: Tabs;
			/** Select the status of the booking. */
			BookingStatus: DevKit.Controls.Lookup;
			/** Select the status of the booking. */
			BookingStatus1: DevKit.Controls.Lookup;
			/** Select the status of the booking. */
			BookingStatus2: DevKit.Controls.Lookup;
			/** Select whether the booking is solid or liquid. Solid bookings are firm and cannot be changed whereas liquid bookings can be changed. */
			BookingType: DevKit.Controls.OptionSet;
			/** Select whether the booking is solid or liquid. Solid bookings are firm and cannot be changed whereas liquid bookings can be changed. */
			BookingType1: DevKit.Controls.OptionSet;
			/** Enter the duration of the booking. */
			Duration: DevKit.Controls.Integer;
			/** Enter the end date and time of the booking. */
			EndTime: DevKit.Controls.DateTime;
			/** Unique identifier of the user who modified the record. */
			ModifiedBy: DevKit.Controls.Lookup;
			/** Shows the time that work started. */
			msdyn_ActualArrivalTime: DevKit.Controls.DateTime;
			/** Shows the total travel duration. Calculated based on the difference between the Bookable Resource Booking's start time and actual arrival time. */
			msdyn_ActualTravelDuration: DevKit.Controls.Integer;
			/** Estimated Arrival Time */
			msdyn_EstimatedArrivalTime: DevKit.Controls.DateTime;
			/** Unique identifier for Work Order associated with Resource Booking. */
			msdyn_WorkOrder: DevKit.Controls.Lookup;
			/** Type a name for the booking. */
			Name: DevKit.Controls.String;
			notescontrol: DevKit.Controls.Note;
			/** Shows the resource that is booked. */
			Resource: DevKit.Controls.Lookup;
			/** Enter the start date and time of the booking. */
			StartTime: DevKit.Controls.DateTime;
			/** Enter the start date and time of the booking. */
			StartTime1: DevKit.Controls.DateTime;
			/** Status of the Bookable Resource Booking */
			StateCode: DevKit.Controls.OptionSet;
		}
		interface Navigation {
			bookableresourcebooking_adx_inviteredemptions: DevKit.Controls.NavigationItem,
			bookableresourcebooking_adx_portalcomments: DevKit.Controls.NavigationItem,
			bookableresourcebooking_Appointments: DevKit.Controls.NavigationItem,
			bookableresourcebooking_BulkOperations: DevKit.Controls.NavigationItem,
			bookableresourcebooking_CampaignActivities: DevKit.Controls.NavigationItem,
			bookableresourcebooking_CampaignResponses: DevKit.Controls.NavigationItem,
			bookableresourcebooking_Emails: DevKit.Controls.NavigationItem,
			bookableresourcebooking_IncidentResolutions: DevKit.Controls.NavigationItem,
			bookableresourcebooking_msdyn_bookingalerts: DevKit.Controls.NavigationItem,
			bookableresourcebooking_msdyn_copilottranscripts: DevKit.Controls.NavigationItem,
			bookableresourcebooking_msdyn_ocliveworkitems: DevKit.Controls.NavigationItem,
			bookableresourcebooking_msdyn_ocoutboundmessages: DevKit.Controls.NavigationItem,
			bookableresourcebooking_msdyn_ocsessions: DevKit.Controls.NavigationItem,
			bookableresourcebooking_msdyn_ocvoicemails: DevKit.Controls.NavigationItem,
			bookableresourcebooking_msfp_alerts: DevKit.Controls.NavigationItem,
			bookableresourcebooking_msfp_surveyinvites: DevKit.Controls.NavigationItem,
			bookableresourcebooking_msfp_surveyresponses: DevKit.Controls.NavigationItem,
			bookableresourcebooking_OpportunityCloses: DevKit.Controls.NavigationItem,
			bookableresourcebooking_OrderCloses: DevKit.Controls.NavigationItem,
			bookableresourcebooking_PhoneCalls: DevKit.Controls.NavigationItem,
			bookableresourcebooking_QuoteCloses: DevKit.Controls.NavigationItem,
			bookableresourcebooking_ServiceAppointments: DevKit.Controls.NavigationItem,
			bookableresourcebooking_Tasks: DevKit.Controls.NavigationItem,
			msdyn_bookableresourcebooking_msdyn_bookingjournal_Booking: DevKit.Controls.NavigationItem,
			msdyn_bookableresourcebooking_msdyn_bookingtimestamp_Booking: DevKit.Controls.NavigationItem,
			msdyn_bookableresourcebooking_msdyn_geofence_bookableresourcebookingid: DevKit.Controls.NavigationItem,
			msdyn_bookableresourcebooking_msdyn_purchaseorder_Booking: DevKit.Controls.NavigationItem,
			msdyn_bookableresourcebooking_msdyn_purchaseorderproduct_AssociateToBooking: DevKit.Controls.NavigationItem,
			msdyn_bookableresourcebooking_msdyn_purchaseorderreceiptproduct_AssociateToBooking: DevKit.Controls.NavigationItem,
			msdyn_bookableresourcebooking_msdyn_rtv_Booking: DevKit.Controls.NavigationItem,
			msdyn_bookableresourcebooking_msdyn_timeentry_BookableResourceBooking: DevKit.Controls.NavigationItem,
			msdyn_bookableresourcebooking_msdyn_workorderproduct_Booking: DevKit.Controls.NavigationItem,
			msdyn_bookableresourcebooking_msdyn_workorderservice_Booking: DevKit.Controls.NavigationItem,
			msdyn_bookableresourcebooking_msdyn_workorderservicetask_Booking: DevKit.Controls.NavigationItem,
			msdyn_bookableresourcebookingquicknote_bookableresourcebooking: DevKit.Controls.NavigationItem
		}
		interface quickForm_QuickviewControl1674503228092_Body {
			msdyn_Address1: DevKit.Controls.QuickView;
			msdyn_City: DevKit.Controls.QuickView;
			msdyn_Country: DevKit.Controls.QuickView;
			msdyn_CustomerAsset: DevKit.Controls.QuickView;
			msdyn_FunctionalLocation: DevKit.Controls.QuickView;
			msdyn_PostalCode: DevKit.Controls.QuickView;
			msdyn_PrimaryIncidentDescription: DevKit.Controls.QuickView;
			msdyn_PrimaryIncidentType: DevKit.Controls.QuickView;
			msdyn_ReportedByContact: DevKit.Controls.QuickView;
			msdyn_ServiceAccount: DevKit.Controls.QuickView;
			msdyn_StateOrProvince: DevKit.Controls.QuickView;
			msdyn_TotalAmount: DevKit.Controls.QuickView;
			msdyn_TotalSalesTax: DevKit.Controls.QuickView;
		}
		interface quickForm_QuickviewControl1674503228092 extends DevKit.Controls.IQuickView {
			Body: quickForm_QuickviewControl1674503228092_Body;
		}
		interface QuickForm {
			QuickviewControl1674503228092: quickForm_QuickviewControl1674503228092;
		}
		interface Grid {
			serviceTasksGrid: DevKit.Controls.Grid;
			workOrderProductsGrid: DevKit.Controls.Grid;
			workOrderServicesGrid: DevKit.Controls.Grid;
		}
	}
	class FormFSM_Native_Booking extends DevKit.IForm {
		/**
		* FSM Native Booking [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form FSM_Native_Booking */
		Body: DevKit.FormFSM_Native_Booking.Body;
		/** The Navigation of form FSM_Native_Booking */
		Navigation: DevKit.FormFSM_Native_Booking.Navigation;
		/** The QuickForm of form FSM_Native_Booking */
		QuickForm: DevKit.FormFSM_Native_Booking.QuickForm;
		/** The Grid of form FSM_Native_Booking */
		Grid: DevKit.FormFSM_Native_Booking.Grid;
		/** The SidePanes of form FSM_Native_Booking */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormBookableResourceBooking_Information {
		interface tab_FieldService_Sections {
			FieldService_section_2: DevKit.Controls.Section;
			FieldService_section_3: DevKit.Controls.Section;
			FieldService_section_4: DevKit.Controls.Section;
			FieldService_section_5: DevKit.Controls.Section;
		}
		interface tab_tab_2_Sections {
			tab_2_section_1: DevKit.Controls.Section;
			tab_2_section_2: DevKit.Controls.Section;
			tab_2_section_4: DevKit.Controls.Section;
			tab_2_section_5: DevKit.Controls.Section;
		}
		interface tab_tab_timeline_Sections {
		}
		interface tab_FieldService extends DevKit.Controls.ITab {
			Section: tab_FieldService_Sections;
		}
		interface tab_tab_2 extends DevKit.Controls.ITab {
			Section: tab_tab_2_Sections;
		}
		interface tab_tab_timeline extends DevKit.Controls.ITab {
			Section: tab_tab_timeline_Sections;
		}
		interface Tabs {
			FieldService: tab_FieldService;
			tab_2: tab_tab_2;
			tab_timeline: tab_tab_timeline;
		}
		interface Body {
			Tab: Tabs;
			/** Select the status of the booking. */
			BookingStatus: DevKit.Controls.Lookup;
			/** Select whether the booking is solid or liquid. Solid bookings are firm and cannot be changed whereas liquid bookings can be changed. */
			BookingType: DevKit.Controls.OptionSet;
			/** Enter the duration of the booking. */
			Duration: DevKit.Controls.Integer;
			/** Enter the end date and time of the booking. */
			EndTime: DevKit.Controls.DateTime;
			/** Defines whether this booking accepts changes propagated as cascading changes */
			msdyn_AcceptCascadeCrewChanges: DevKit.Controls.Boolean;
			/** Shows the time that work started. */
			msdyn_ActualArrivalTime: DevKit.Controls.DateTime;
			/** Shows the total travel duration. Calculated based on the difference between the Bookable Resource Booking's start time and actual arrival time. */
			msdyn_ActualTravelDuration: DevKit.Controls.Integer;
			/** Agreement Booking Date from where this Booking was generated */
			msdyn_AgreementBookingDate: DevKit.Controls.Lookup;
			/** Allow the time of this booking to be displayed on the schedule assistant as available. */
			msdyn_AllowOverlapping: DevKit.Controls.Boolean;
			/** Shows the method used to create this booking. */
			msdyn_BookingMethod: DevKit.Controls.OptionSet;
			/** Defines whether changing any of the following fields (Start Time, End Time, Status) should cascade the changes to other bookings on this requirement that have the same start and end time. */
			msdyn_CascadeCrewChanges: DevKit.Controls.Boolean;
			/** This field is populated by the Field Service solution to define to which crew a booking is connected. */
			msdyn_Crew: DevKit.Controls.Lookup;
			/** Crew Member Type */
			msdyn_CrewMemberType: DevKit.Controls.OptionSet;
			/** Capacity that needs to take from resource capacity */
			msdyn_effort: DevKit.Controls.Decimal;
			/** Estimated Arrival Time */
			msdyn_EstimatedArrivalTime: DevKit.Controls.DateTime;
			/** Estimated Travel Duration */
			msdyn_EstimatedTravelDuration: DevKit.Controls.Integer;
			msdyn_Latitude: DevKit.Controls.Double;
			msdyn_Longitude: DevKit.Controls.Double;
			/** In this field you can enter the total miles the resource drove to the job site */
			msdyn_MilesTraveled: DevKit.Controls.Double;
			/** Internal Use. This field is used to capture the time when the Booking was updated on mobile offline. */
			msdyn_OfflineTimestamp: DevKit.Controls.DateTime;
			/** Prevents time stamp creation if the time stamp was already created on a mobile device. */
			msdyn_PreventTimestampCreation: DevKit.Controls.Boolean;
			/** Internal For Quick note pcf control actions */
			msdyn_quickNoteAction: DevKit.Controls.OptionSet;
			/** Unique identifier for Resource associated with Resource Booking */
			msdyn_ResourceGroup: DevKit.Controls.Lookup;
			/** Resource Requirement */
			msdyn_ResourceRequirement: DevKit.Controls.Lookup;
			msdyn_TimeGroupDetailSelected: DevKit.Controls.Lookup;
			/** Shows the total billable duration. If you leave this field blank the system automatically determines the billable duration by calculating the resource journal details. */
			msdyn_TotalBillableDuration: DevKit.Controls.Integer;
			/** Shows the total break duration. If you leave this field blank the system automatically determines the break duration by calculating the resource journal details. */
			msdyn_TotalBreakDuration: DevKit.Controls.Integer;
			/** Shows the total cost for this booking. */
			msdyn_TotalCost: DevKit.Controls.Money;
			/** Shows the total duration that this booking was in progress. */
			msdyn_TotalDurationInProgress: DevKit.Controls.Integer;
			msdyn_WorkLocation: DevKit.Controls.OptionSet;
			/** Unique identifier for Work Order associated with Resource Booking. */
			msdyn_WorkOrder: DevKit.Controls.Lookup;
			/** Type a name for the booking. */
			Name: DevKit.Controls.String;
			notescontrol: DevKit.Controls.Note;
			/** Shows the resource that is booked. */
			Resource: DevKit.Controls.Lookup;
			/** Enter the start date and time of the booking. */
			StartTime: DevKit.Controls.DateTime;
		}
		interface Navigation {
			bookableresourcebooking_adx_inviteredemptions: DevKit.Controls.NavigationItem,
			bookableresourcebooking_adx_portalcomments: DevKit.Controls.NavigationItem,
			bookableresourcebooking_Appointments: DevKit.Controls.NavigationItem,
			bookableresourcebooking_BulkOperations: DevKit.Controls.NavigationItem,
			bookableresourcebooking_CampaignActivities: DevKit.Controls.NavigationItem,
			bookableresourcebooking_CampaignResponses: DevKit.Controls.NavigationItem,
			bookableresourcebooking_Emails: DevKit.Controls.NavigationItem,
			bookableresourcebooking_IncidentResolutions: DevKit.Controls.NavigationItem,
			bookableresourcebooking_msdyn_bookingalerts: DevKit.Controls.NavigationItem,
			bookableresourcebooking_msdyn_copilottranscripts: DevKit.Controls.NavigationItem,
			bookableresourcebooking_msdyn_ocliveworkitems: DevKit.Controls.NavigationItem,
			bookableresourcebooking_msdyn_ocoutboundmessages: DevKit.Controls.NavigationItem,
			bookableresourcebooking_msdyn_ocsessions: DevKit.Controls.NavigationItem,
			bookableresourcebooking_msdyn_ocvoicemails: DevKit.Controls.NavigationItem,
			bookableresourcebooking_msfp_alerts: DevKit.Controls.NavigationItem,
			bookableresourcebooking_msfp_surveyinvites: DevKit.Controls.NavigationItem,
			bookableresourcebooking_msfp_surveyresponses: DevKit.Controls.NavigationItem,
			bookableresourcebooking_OpportunityCloses: DevKit.Controls.NavigationItem,
			bookableresourcebooking_OrderCloses: DevKit.Controls.NavigationItem,
			bookableresourcebooking_PhoneCalls: DevKit.Controls.NavigationItem,
			bookableresourcebooking_QuoteCloses: DevKit.Controls.NavigationItem,
			bookableresourcebooking_ServiceAppointments: DevKit.Controls.NavigationItem,
			bookableresourcebooking_Tasks: DevKit.Controls.NavigationItem,
			msdyn_bookableresourcebooking_msdyn_bookingjournal_Booking: DevKit.Controls.NavigationItem,
			msdyn_bookableresourcebooking_msdyn_bookingtimestamp_Booking: DevKit.Controls.NavigationItem,
			msdyn_bookableresourcebooking_msdyn_geofence_bookableresourcebookingid: DevKit.Controls.NavigationItem,
			msdyn_bookableresourcebooking_msdyn_purchaseorder_Booking: DevKit.Controls.NavigationItem,
			msdyn_bookableresourcebooking_msdyn_purchaseorderproduct_AssociateToBooking: DevKit.Controls.NavigationItem,
			msdyn_bookableresourcebooking_msdyn_purchaseorderreceiptproduct_AssociateToBooking: DevKit.Controls.NavigationItem,
			msdyn_bookableresourcebooking_msdyn_rtv_Booking: DevKit.Controls.NavigationItem,
			msdyn_bookableresourcebooking_msdyn_timeentry_BookableResourceBooking: DevKit.Controls.NavigationItem,
			msdyn_bookableresourcebooking_msdyn_workorderproduct_Booking: DevKit.Controls.NavigationItem,
			msdyn_bookableresourcebooking_msdyn_workorderservice_Booking: DevKit.Controls.NavigationItem,
			msdyn_bookableresourcebooking_msdyn_workorderservicetask_Booking: DevKit.Controls.NavigationItem,
			msdyn_bookableresourcebookingquicknote_bookableresourcebooking: DevKit.Controls.NavigationItem
		}
		interface Grid {
			msdyn_quicknotescontrol: DevKit.Controls.Grid;
			TIMESTAMPS: DevKit.Controls.Grid;
		}
	}
	class FormBookableResourceBooking_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form BookableResourceBooking_Information */
		Body: DevKit.FormBookableResourceBooking_Information.Body;
		/** The Navigation of form BookableResourceBooking_Information */
		Navigation: DevKit.FormBookableResourceBooking_Information.Navigation;
		/** The Grid of form BookableResourceBooking_Information */
		Grid: DevKit.FormBookableResourceBooking_Information.Grid;
		/** The SidePanes of form BookableResourceBooking_Information */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormResource_Booking_Mobile_Deprecated {
		interface Header extends DevKit.Controls.IHeader {
			/** Select the status of the booking. */
			BookingStatus: DevKit.Controls.Lookup;
			/** Unique identifier for Work Order associated with Resource Booking. */
			msdyn_WorkOrder: DevKit.Controls.Lookup;
			/** Enter the start date and time of the booking. */
			StartTime: DevKit.Controls.DateTime;
		}
		interface tab_FieldService_Sections {
			FieldService_column_5_section_1: DevKit.Controls.Section;
			FieldService_column_6_section_1: DevKit.Controls.Section;
			FieldService_section_1: DevKit.Controls.Section;
			FieldService_section_2: DevKit.Controls.Section;
			FieldService_section_4: DevKit.Controls.Section;
			FieldService_section_5: DevKit.Controls.Section;
			FieldService_section_6: DevKit.Controls.Section;
		}
		interface tab_fstab_general_Sections {
			fstab_general_section_general: DevKit.Controls.Section;
			fstab_general_section_misc: DevKit.Controls.Section;
			fstab_general_section_schedule: DevKit.Controls.Section;
			fstab_general_section_travel: DevKit.Controls.Section;
			fstab_note_section: DevKit.Controls.Section;
			tab_actions: DevKit.Controls.Section;
		}
		interface tab_fstab_signature_Sections {
			fstab_signature_section_signature: DevKit.Controls.Section;
		}
		interface tab_fstab_timeline_Sections {
			fstab_note_section_2: DevKit.Controls.Section;
		}
		interface tab_FieldService extends DevKit.Controls.ITab {
			Section: tab_FieldService_Sections;
		}
		interface tab_fstab_general extends DevKit.Controls.ITab {
			Section: tab_fstab_general_Sections;
		}
		interface tab_fstab_signature extends DevKit.Controls.ITab {
			Section: tab_fstab_signature_Sections;
		}
		interface tab_fstab_timeline extends DevKit.Controls.ITab {
			Section: tab_fstab_timeline_Sections;
		}
		interface Tabs {
			FieldService: tab_FieldService;
			fstab_general: tab_fstab_general;
			fstab_signature: tab_fstab_signature;
			fstab_timeline: tab_fstab_timeline;
		}
		interface Body {
			Tab: Tabs;
			/** Select the status of the booking. */
			BookingStatus: DevKit.Controls.Lookup;
			/** Select whether the booking is solid or liquid. Solid bookings are firm and cannot be changed whereas liquid bookings can be changed. */
			BookingType: DevKit.Controls.OptionSet;
			/** Enter the duration of the booking. */
			Duration: DevKit.Controls.Integer;
			/** Enter the end date and time of the booking. */
			EndTime: DevKit.Controls.DateTime;
			/** Shows the time that work started. */
			msdyn_ActualArrivalTime: DevKit.Controls.DateTime;
			/** Shows the total travel duration. Calculated based on the difference between the Bookable Resource Booking's start time and actual arrival time. */
			msdyn_ActualTravelDuration: DevKit.Controls.Integer;
			/** Agreement Booking Date from where this Booking was generated */
			msdyn_AgreementBookingDate: DevKit.Controls.Lookup;
			/** Allow the time of this booking to be displayed on the schedule assistant as available. */
			msdyn_AllowOverlapping: DevKit.Controls.Boolean;
			/** Shows the method used to create this booking. */
			msdyn_BookingMethod: DevKit.Controls.OptionSet;
			/** Estimated Arrival Time */
			msdyn_EstimatedArrivalTime: DevKit.Controls.DateTime;
			/** Estimated Travel Duration */
			msdyn_EstimatedTravelDuration: DevKit.Controls.Integer;
			msdyn_Latitude: DevKit.Controls.Double;
			msdyn_Longitude: DevKit.Controls.Double;
			/** In this field you can enter the total miles the resource drove to the job site */
			msdyn_MilesTraveled: DevKit.Controls.Double;
			/** Internal Use. This field is used to capture the time when the Booking was updated on mobile offline. */
			msdyn_OfflineTimestamp: DevKit.Controls.DateTime;
			/** Internal For Quick note pcf control actions */
			msdyn_quickNoteAction: DevKit.Controls.OptionSet;
			/** Unique identifier for Resource associated with Resource Booking */
			msdyn_ResourceGroup: DevKit.Controls.Lookup;
			/** This field is used for capturing signature on Mobile (using the Pen Control) */
			msdyn_Signature: DevKit.Controls.String;
			msdyn_TimeGroupDetailSelected: DevKit.Controls.Lookup;
			/** Shows the total billable duration. If you leave this field blank the system automatically determines the billable duration by calculating the resource journal details. */
			msdyn_TotalBillableDuration: DevKit.Controls.Integer;
			/** Shows the total break duration. If you leave this field blank the system automatically determines the break duration by calculating the resource journal details. */
			msdyn_TotalBreakDuration: DevKit.Controls.Integer;
			/** Shows the total cost for this booking. */
			msdyn_TotalCost: DevKit.Controls.Money;
			/** Shows the total duration that this booking was in progress. */
			msdyn_TotalDurationInProgress: DevKit.Controls.Integer;
			/** Type a name for the booking. */
			Name: DevKit.Controls.String;
			notescontrol: DevKit.Controls.Note;
			/** Shows the resource that is booked. */
			Resource: DevKit.Controls.Lookup;
			/** Enter the start date and time of the booking. */
			StartTime: DevKit.Controls.DateTime;
			/** Exchange rate for the currency associated with the BookableResourceBooking with respect to the base currency. */
			TransactionCurrencyId: DevKit.Controls.Lookup;
		}
		interface Navigation {
			bookableresourcebooking_adx_inviteredemptions: DevKit.Controls.NavigationItem,
			bookableresourcebooking_adx_portalcomments: DevKit.Controls.NavigationItem,
			bookableresourcebooking_Appointments: DevKit.Controls.NavigationItem,
			bookableresourcebooking_BulkOperations: DevKit.Controls.NavigationItem,
			bookableresourcebooking_CampaignActivities: DevKit.Controls.NavigationItem,
			bookableresourcebooking_CampaignResponses: DevKit.Controls.NavigationItem,
			bookableresourcebooking_Emails: DevKit.Controls.NavigationItem,
			bookableresourcebooking_IncidentResolutions: DevKit.Controls.NavigationItem,
			bookableresourcebooking_msdyn_bookingalerts: DevKit.Controls.NavigationItem,
			bookableresourcebooking_msdyn_copilottranscripts: DevKit.Controls.NavigationItem,
			bookableresourcebooking_msdyn_ocliveworkitems: DevKit.Controls.NavigationItem,
			bookableresourcebooking_msdyn_ocoutboundmessages: DevKit.Controls.NavigationItem,
			bookableresourcebooking_msdyn_ocsessions: DevKit.Controls.NavigationItem,
			bookableresourcebooking_msdyn_ocvoicemails: DevKit.Controls.NavigationItem,
			bookableresourcebooking_msfp_alerts: DevKit.Controls.NavigationItem,
			bookableresourcebooking_msfp_surveyinvites: DevKit.Controls.NavigationItem,
			bookableresourcebooking_msfp_surveyresponses: DevKit.Controls.NavigationItem,
			bookableresourcebooking_OpportunityCloses: DevKit.Controls.NavigationItem,
			bookableresourcebooking_OrderCloses: DevKit.Controls.NavigationItem,
			bookableresourcebooking_PhoneCalls: DevKit.Controls.NavigationItem,
			bookableresourcebooking_QuoteCloses: DevKit.Controls.NavigationItem,
			bookableresourcebooking_ServiceAppointments: DevKit.Controls.NavigationItem,
			bookableresourcebooking_Tasks: DevKit.Controls.NavigationItem,
			msdyn_bookableresourcebooking_msdyn_bookingjournal_Booking: DevKit.Controls.NavigationItem,
			msdyn_bookableresourcebooking_msdyn_bookingtimestamp_Booking: DevKit.Controls.NavigationItem,
			msdyn_bookableresourcebooking_msdyn_geofence_bookableresourcebookingid: DevKit.Controls.NavigationItem,
			msdyn_bookableresourcebooking_msdyn_purchaseorder_Booking: DevKit.Controls.NavigationItem,
			msdyn_bookableresourcebooking_msdyn_purchaseorderproduct_AssociateToBooking: DevKit.Controls.NavigationItem,
			msdyn_bookableresourcebooking_msdyn_purchaseorderreceiptproduct_AssociateToBooking: DevKit.Controls.NavigationItem,
			msdyn_bookableresourcebooking_msdyn_rtv_Booking: DevKit.Controls.NavigationItem,
			msdyn_bookableresourcebooking_msdyn_timeentry_BookableResourceBooking: DevKit.Controls.NavigationItem,
			msdyn_bookableresourcebooking_msdyn_workorderproduct_Booking: DevKit.Controls.NavigationItem,
			msdyn_bookableresourcebooking_msdyn_workorderservice_Booking: DevKit.Controls.NavigationItem,
			msdyn_bookableresourcebooking_msdyn_workorderservicetask_Booking: DevKit.Controls.NavigationItem,
			msdyn_bookableresourcebookingquicknote_bookableresourcebooking: DevKit.Controls.NavigationItem
		}
		interface quickForm_WorkOrderQuickView_Body {
			msdyn_Address1: DevKit.Controls.QuickView;
			msdyn_City: DevKit.Controls.QuickView;
			msdyn_Country: DevKit.Controls.QuickView;
			msdyn_CustomerAsset: DevKit.Controls.QuickView;
			msdyn_FunctionalLocation: DevKit.Controls.QuickView;
			msdyn_PostalCode: DevKit.Controls.QuickView;
			msdyn_PrimaryIncidentDescription: DevKit.Controls.QuickView;
			msdyn_PrimaryIncidentType: DevKit.Controls.QuickView;
			msdyn_ReportedByContact: DevKit.Controls.QuickView;
			msdyn_ServiceAccount: DevKit.Controls.QuickView;
			msdyn_StateOrProvince: DevKit.Controls.QuickView;
			msdyn_TotalAmount: DevKit.Controls.QuickView;
			msdyn_TotalSalesTax: DevKit.Controls.QuickView;
		}
		interface quickForm_WorkOrderQuickView extends DevKit.Controls.IQuickView {
			Body: quickForm_WorkOrderQuickView_Body;
		}
		interface QuickForm {
			WorkOrderQuickView: quickForm_WorkOrderQuickView;
		}
		interface Grid {
			msdyn_quicknotescontrol: DevKit.Controls.Grid;
			PRODUCTS: DevKit.Controls.Grid;
			SERVICE_TASKS: DevKit.Controls.Grid;
			SERVICES: DevKit.Controls.Grid;
			ServiceTasks: DevKit.Controls.Grid;
		}
	}
	class FormResource_Booking_Mobile_Deprecated extends DevKit.IForm {
		/**
		* Resource Booking - Mobile (Deprecated) [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Resource_Booking_Mobile_Deprecated */
		Body: DevKit.FormResource_Booking_Mobile_Deprecated.Body;
		/** The Header section of form Resource_Booking_Mobile_Deprecated */
		Header: DevKit.FormResource_Booking_Mobile_Deprecated.Header;
		/** The Navigation of form Resource_Booking_Mobile_Deprecated */
		Navigation: DevKit.FormResource_Booking_Mobile_Deprecated.Navigation;
		/** The QuickForm of form Resource_Booking_Mobile_Deprecated */
		QuickForm: DevKit.FormResource_Booking_Mobile_Deprecated.QuickForm;
		/** The Grid of form Resource_Booking_Mobile_Deprecated */
		Grid: DevKit.FormResource_Booking_Mobile_Deprecated.Grid;
		/** The SidePanes of form Resource_Booking_Mobile_Deprecated */
		SidePanes: DevKit.SidePanes;
	}
	class BookableResourceBookingApi {
		/**
		* DynamicsCrm.DevKit BookableResourceBookingApi
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
		/** Unique identifier of the resource booking. */
		BookableResourceBookingId: string;
		/** Select the status of the booking. */
		BookingStatus: string;
		/** Select whether the booking is solid or liquid. Solid bookings are firm and cannot be changed whereas liquid bookings can be changed. */
		BookingType: OptionSet.BookableResourceBooking.BookingType;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string;
		/** Enter the duration of the booking. */
		Duration: number;
		/** Enter the end date and time of the booking. */
		EndTime_UtcDateAndTime: Date;
		/** Exchange rate for the currency associated with the bookableresourcebooking with respect to the base currency. */
		readonly ExchangeRate: number;
		/** Shows the reference to the booking header record that represents the summary of bookings. */
		Header: string;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string;
		/** Defines whether this booking accepts changes propagated as cascading changes */
		msdyn_AcceptCascadeCrewChanges: boolean;
		/** Shows the time that work started. */
		msdyn_ActualArrivalTime_UtcDateAndTime: Date;
		/** Shows the total travel duration. Calculated based on the difference between the Bookable Resource Booking's start time and actual arrival time. */
		msdyn_ActualTravelDuration: number;
		/** Agreement Booking Date from where this Booking was generated */
		msdyn_AgreementBookingDate: string;
		/** Allow the time of this booking to be displayed on the schedule assistant as available. */
		msdyn_AllowOverlapping: boolean;
		/** Unique identifier for Appointment associated with Bookable Resource Booking. */
		msdyn_AppointmentBookingId: string;
		/** The Base travel duration indicates the travel time without traffic */
		msdyn_BaseTravelDuration: number;
		/** Shows the method used to create this booking. */
		msdyn_BookingMethod: OptionSet.BookableResourceBooking.msdyn_BookingMethod;
		/** A unique identifier for the booking setup metadata that is associated with a bookable resource booking. */
		msdyn_BookingSetupMetadataId: string;
		/** Defines whether changing any of the following fields (Start Time, End Time, Status) should cascade the changes to other bookings on this requirement that have the same start and end time. */
		msdyn_CascadeCrewChanges: boolean;
		/** This field is populated by the Field Service solution to define to which crew a booking is connected. */
		msdyn_Crew: string;
		/** Crew Member Type */
		msdyn_CrewMemberType: OptionSet.BookableResourceBooking.msdyn_CrewMemberType;
		/** Capacity that needs to take from resource capacity */
		msdyn_effort: number;
		/** Estimated Arrival Time */
		msdyn_EstimatedArrivalTime_UtcDateAndTime: Date;
		/** Estimated Travel Duration */
		msdyn_EstimatedTravelDuration: number;
		/** For internal use only. */
		msdyn_InternalFlags: string;
		msdyn_Latitude: number;
		msdyn_Longitude: number;
		/** In this field you can enter the total miles the resource drove to the job site */
		msdyn_MilesTraveled: number;
		/** Internal Use. This field is used to capture the time when the Booking was updated on mobile offline. */
		msdyn_OfflineTimestamp_UtcDateAndTime: Date;
		/** Prevents time stamp creation if the time stamp was already created on a mobile device. */
		msdyn_PreventTimestampCreation: boolean;
		/** Internal For Quick note pcf control actions */
		msdyn_quickNoteAction: OptionSet.BookableResourceBooking.msdyn_quickNoteAction;
		/** Requirement Group */
		msdyn_requirementgroupid: string;
		/** Requirement Group Set */
		msdyn_requirementgroupset: string;
		/** Unique identifier for Resource associated with Resource Booking */
		msdyn_ResourceGroup: string;
		/** Resource Requirement */
		msdyn_ResourceRequirement: string;
		/** Unique identifier for Service Appointment associated with Resource Booking. */
		msdyn_serviceappointment: string;
		/** This field is used for capturing signature on Mobile (using the Pen Control) */
		msdyn_Signature: string;
		/** Shows the automatically generated text of the time slot on the schedule board. */
		msdyn_SlotText: string;
		msdyn_TimeGroupDetailSelected: string;
		/** Shows the total billable duration. If you leave this field blank the system automatically determines the billable duration by calculating the resource journal details. */
		msdyn_TotalBillableDuration: number;
		/** Shows the total break duration. If you leave this field blank the system automatically determines the break duration by calculating the resource journal details. */
		msdyn_TotalBreakDuration: number;
		/** Shows the total cost for this booking. */
		msdyn_TotalCost: number;
		/** Value of the Total Cost in base currency. */
		readonly msdyn_totalcost_Base: number;
		/** Shows the total duration that this booking was in progress. */
		msdyn_TotalDurationInProgress: number;
		/** Travel Time Calculation */
		msdyn_TravelTimeCalculationType: OptionSet.BookableResourceBooking.msdyn_TravelTimeCalculationType;
		msdyn_TravelTimeRescheduling: boolean;
		/** For internal use only. */
		msdyn_URSInternalFlags: string;
		msdyn_WorkLocation: OptionSet.BookableResourceBooking.msdyn_WorkLocation;
		/** Unique identifier for Work Order associated with Resource Booking. */
		msdyn_WorkOrder: string;
		/** Type a name for the booking. */
		Name: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Unique identifier for the business unit that owns the record */
		readonly OwningBusinessUnit: string;
		/** Unique identifier for the team that owns the record. */
		readonly OwningTeam: string;
		/** Unique identifier for the user that owns the record. */
		readonly OwningUser: string;
		/** Contains the id of the process associated with the entity. */
		ProcessId: string;
		/** Shows the resource that is booked. */
		Resource: string;
		/** Contains the id of the stage where the entity is located. */
		StageId: string;
		/** Enter the start date and time of the booking. */
		StartTime_UtcDateAndTime: Date;
		/** Status of the Bookable Resource Booking */
		StateCode: OptionSet.BookableResourceBooking.StateCode;
		/** Reason for the status of the Bookable Resource Booking */
		StatusCode: OptionSet.BookableResourceBooking.StatusCode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Exchange rate for the currency associated with the BookableResourceBooking with respect to the base currency. */
		TransactionCurrencyId: string;
		/** A comma separated list of string values representing the unique identifiers of stages in a Business Process Flow Instance in the order that they occur. */
		TraversedPath: string;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Unique identifier of the resource booking. */
			readonly BookableResourceBookingId: string;
			/** Select the status of the booking. */
			readonly BookingStatus: string;
			/** Select whether the booking is solid or liquid. Solid bookings are firm and cannot be changed whereas liquid bookings can be changed. */
			readonly BookingType: string;
			/** Unique identifier of the user who created the record. */
			readonly CreatedBy: string;
			/** Date and time when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the record. */
			readonly CreatedOnBehalfBy: string;
			/** Enter the duration of the booking. */
			readonly Duration: string;
			/** Enter the end date and time of the booking. */
			readonly EndTime_UtcDateAndTime: string;
			/** Exchange rate for the currency associated with the bookableresourcebooking with respect to the base currency. */
			readonly ExchangeRate: string;
			/** Shows the reference to the booking header record that represents the summary of bookings. */
			readonly Header: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			/** Defines whether this booking accepts changes propagated as cascading changes */
			readonly msdyn_AcceptCascadeCrewChanges: string;
			/** Shows the time that work started. */
			readonly msdyn_ActualArrivalTime_UtcDateAndTime: string;
			/** Shows the total travel duration. Calculated based on the difference between the Bookable Resource Booking's start time and actual arrival time. */
			readonly msdyn_ActualTravelDuration: string;
			/** Agreement Booking Date from where this Booking was generated */
			readonly msdyn_AgreementBookingDate: string;
			/** Allow the time of this booking to be displayed on the schedule assistant as available. */
			readonly msdyn_AllowOverlapping: string;
			/** Unique identifier for Appointment associated with Bookable Resource Booking. */
			readonly msdyn_AppointmentBookingId: string;
			/** The Base travel duration indicates the travel time without traffic */
			readonly msdyn_BaseTravelDuration: string;
			/** Shows the method used to create this booking. */
			readonly msdyn_BookingMethod: string;
			/** A unique identifier for the booking setup metadata that is associated with a bookable resource booking. */
			readonly msdyn_BookingSetupMetadataId: string;
			/** Defines whether changing any of the following fields (Start Time, End Time, Status) should cascade the changes to other bookings on this requirement that have the same start and end time. */
			readonly msdyn_CascadeCrewChanges: string;
			/** This field is populated by the Field Service solution to define to which crew a booking is connected. */
			readonly msdyn_Crew: string;
			/** Crew Member Type */
			readonly msdyn_CrewMemberType: string;
			/** Capacity that needs to take from resource capacity */
			readonly msdyn_effort: string;
			/** Estimated Arrival Time */
			readonly msdyn_EstimatedArrivalTime_UtcDateAndTime: string;
			/** Estimated Travel Duration */
			readonly msdyn_EstimatedTravelDuration: string;
			/** For internal use only. */
			readonly msdyn_InternalFlags: string;
			readonly msdyn_Latitude: string;
			readonly msdyn_Longitude: string;
			/** In this field you can enter the total miles the resource drove to the job site */
			readonly msdyn_MilesTraveled: string;
			/** Internal Use. This field is used to capture the time when the Booking was updated on mobile offline. */
			readonly msdyn_OfflineTimestamp_UtcDateAndTime: string;
			/** Prevents time stamp creation if the time stamp was already created on a mobile device. */
			readonly msdyn_PreventTimestampCreation: string;
			/** Internal For Quick note pcf control actions */
			readonly msdyn_quickNoteAction: string;
			/** Requirement Group */
			readonly msdyn_requirementgroupid: string;
			/** Requirement Group Set */
			readonly msdyn_requirementgroupset: string;
			/** Unique identifier for Resource associated with Resource Booking */
			readonly msdyn_ResourceGroup: string;
			/** Resource Requirement */
			readonly msdyn_ResourceRequirement: string;
			/** Unique identifier for Service Appointment associated with Resource Booking. */
			readonly msdyn_serviceappointment: string;
			/** This field is used for capturing signature on Mobile (using the Pen Control) */
			readonly msdyn_Signature: string;
			/** Shows the automatically generated text of the time slot on the schedule board. */
			readonly msdyn_SlotText: string;
			readonly msdyn_TimeGroupDetailSelected: string;
			/** Shows the total billable duration. If you leave this field blank the system automatically determines the billable duration by calculating the resource journal details. */
			readonly msdyn_TotalBillableDuration: string;
			/** Shows the total break duration. If you leave this field blank the system automatically determines the break duration by calculating the resource journal details. */
			readonly msdyn_TotalBreakDuration: string;
			/** Shows the total cost for this booking. */
			readonly msdyn_TotalCost: string;
			/** Value of the Total Cost in base currency. */
			readonly msdyn_totalcost_Base: string;
			/** Shows the total duration that this booking was in progress. */
			readonly msdyn_TotalDurationInProgress: string;
			/** Travel Time Calculation */
			readonly msdyn_TravelTimeCalculationType: string;
			readonly msdyn_TravelTimeRescheduling: string;
			/** For internal use only. */
			readonly msdyn_URSInternalFlags: string;
			readonly msdyn_WorkLocation: string;
			/** Unique identifier for Work Order associated with Resource Booking. */
			readonly msdyn_WorkOrder: string;
			/** Type a name for the booking. */
			readonly Name: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Unique identifier for the business unit that owns the record */
			readonly OwningBusinessUnit: string;
			/** Unique identifier for the team that owns the record. */
			readonly OwningTeam: string;
			/** Unique identifier for the user that owns the record. */
			readonly OwningUser: string;
			/** Contains the id of the process associated with the entity. */
			readonly ProcessId: string;
			/** Shows the resource that is booked. */
			readonly Resource: string;
			/** Contains the id of the stage where the entity is located. */
			readonly StageId: string;
			/** Enter the start date and time of the booking. */
			readonly StartTime_UtcDateAndTime: string;
			/** Status of the Bookable Resource Booking */
			readonly StateCode: string;
			/** Reason for the status of the Bookable Resource Booking */
			readonly StatusCode: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Exchange rate for the currency associated with the BookableResourceBooking with respect to the base currency. */
			readonly TransactionCurrencyId: string;
			/** A comma separated list of string values representing the unique identifiers of stages in a Business Process Flow Instance in the order that they occur. */
			readonly TraversedPath: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace BookableResourceBooking {
		enum BookingType {
			/** 2 */
			Liquid,
			/** 1 */
			Solid
		}
		enum msdyn_BookingMethod {
			/** 690970003 */
			Manual,
			/** 690970002 */
			Mobile,
			/** 192350000 */
			Optimization,
			/** 690970004 */
			Schedule_Assistant,
			/** 690970001 */
			Schedule_Board,
			/** 690970005 */
			System_Agreement_Schedule
		}
		enum msdyn_CrewMemberType {
			/** 192350000 */
			Leader,
			/** 192350001 */
			Member,
			/** 192350002 */
			None
		}
		enum msdyn_quickNoteAction {
			/** 100000004 */
			audio,
			/** 100000005 */
			file,
			/** 100000000 */
			none,
			/** 100000002 */
			photo,
			/** 100000001 */
			text,
			/** 100000003 */
			video
		}
		enum msdyn_TravelTimeCalculationType {
			/** 192350003 */
			Approximate,
			/** 192350001 */
			Bing_Maps_with_historical_traffic,
			/** 192350000 */
			Bing_Maps_without_historical_traffic,
			/** 192350002 */
			Custom_Map_Provider
		}
		enum msdyn_WorkLocation {
			/** 690970001 */
			Facility,
			/** 690970002 */
			Location_Agnostic,
			/** 690970000 */
			Onsite
		}
		enum StateCode {
			/** 0 */
			Active,
			/** 1 */
			Inactive
		}
		enum StatusCode {
			/** 1 */
			Active,
			/** 2 */
			Inactive
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