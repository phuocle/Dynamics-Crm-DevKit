//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
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
			nav_msdyn_bookableresourcebooking_msdyn_bookingjournal_Booking: DevKit.Controls.NavigationItem,
			nav_msdyn_bookableresourcebooking_msdyn_bookingtimestamp_Booking: DevKit.Controls.NavigationItem,
			nav_msdyn_bookableresourcebooking_msdyn_fspp_bookingnotificationcode_BookableResourceBooking: DevKit.Controls.NavigationItem,
			nav_msdyn_bookableresourcebooking_msdyn_geofence_bookableresourcebookingid: DevKit.Controls.NavigationItem,
			nav_msdyn_bookableresourcebooking_msdyn_purchaseorder_Booking: DevKit.Controls.NavigationItem,
			nav_msdyn_bookableresourcebooking_msdyn_purchaseorderproduct_AssociateToBooking: DevKit.Controls.NavigationItem,
			nav_msdyn_bookableresourcebooking_msdyn_purchaseorderreceiptproduct_AssociateToBooking: DevKit.Controls.NavigationItem,
			nav_msdyn_bookableresourcebooking_msdyn_rtv_Booking: DevKit.Controls.NavigationItem,
			nav_msdyn_bookableresourcebooking_msdyn_timeentry_BookableResourceBooking: DevKit.Controls.NavigationItem,
			nav_msdyn_bookableresourcebooking_msdyn_workorderproduct_Booking: DevKit.Controls.NavigationItem,
			nav_msdyn_bookableresourcebooking_msdyn_workorderservice_Booking: DevKit.Controls.NavigationItem,
			nav_msdyn_bookableresourcebooking_msdyn_workorderservicetask_Booking: DevKit.Controls.NavigationItem,
			navActivities: DevKit.Controls.NavigationItem,
			navAsyncOperations: DevKit.Controls.NavigationItem,
			navAudit: DevKit.Controls.NavigationItem,
			navProcessSessions: DevKit.Controls.NavigationItem
		}
		interface Process extends DevKit.Controls.IProcess {
		}
		interface Grid {
			msdyn_quicknotescontrol: DevKit.Controls.Grid;
		}
	}
	class FormBooking_and_Work_Order extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form Booking_and_Work_Order Main Form
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
		/** The Process of form Booking_and_Work_Order */
		Process: DevKit.FormBooking_and_Work_Order.Process;
		/** The Grid of form Booking_and_Work_Order */
		Grid: DevKit.FormBooking_and_Work_Order.Grid;
		/** The SidePanes of form Booking_and_Work_Order */
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
			nav_msdyn_bookableresourcebooking_msdyn_bookingjournal_Booking: DevKit.Controls.NavigationItem,
			nav_msdyn_bookableresourcebooking_msdyn_bookingtimestamp_Booking: DevKit.Controls.NavigationItem,
			nav_msdyn_bookableresourcebooking_msdyn_purchaseorder_Booking: DevKit.Controls.NavigationItem,
			nav_msdyn_bookableresourcebooking_msdyn_purchaseorderproduct_AssociateToBooking: DevKit.Controls.NavigationItem,
			nav_msdyn_bookableresourcebooking_msdyn_purchaseorderreceiptproduct_AssociateToBooking: DevKit.Controls.NavigationItem,
			nav_msdyn_bookableresourcebooking_msdyn_rtv_Booking: DevKit.Controls.NavigationItem,
			nav_msdyn_bookableresourcebooking_msdyn_workorderproduct_Booking: DevKit.Controls.NavigationItem,
			nav_msdyn_bookableresourcebooking_msdyn_workorderservice_Booking: DevKit.Controls.NavigationItem,
			nav_msdyn_bookableresourcebooking_msdyn_workorderservicetask_Booking: DevKit.Controls.NavigationItem
		}
		interface Process extends DevKit.Controls.IProcess {
		}
		interface Grid {
			msdyn_quicknotescontrol: DevKit.Controls.Grid;
			TIMESTAMPS: DevKit.Controls.Grid;
		}
	}
	class FormBookableResourceBooking_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form BookableResourceBooking_Information Main Form
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
		/** The Process of form BookableResourceBooking_Information */
		Process: DevKit.FormBookableResourceBooking_Information.Process;
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
			nav_msdyn_bookableresourcebooking_msdyn_bookingjournal_Booking: DevKit.Controls.NavigationItem,
			nav_msdyn_bookableresourcebooking_msdyn_bookingtimestamp_Booking: DevKit.Controls.NavigationItem,
			nav_msdyn_bookableresourcebooking_msdyn_purchaseorder_Booking: DevKit.Controls.NavigationItem,
			nav_msdyn_bookableresourcebooking_msdyn_purchaseorderproduct_AssociateToBooking: DevKit.Controls.NavigationItem,
			nav_msdyn_bookableresourcebooking_msdyn_purchaseorderreceiptproduct_AssociateToBooking: DevKit.Controls.NavigationItem,
			nav_msdyn_bookableresourcebooking_msdyn_rtv_Booking: DevKit.Controls.NavigationItem,
			nav_msdyn_bookableresourcebooking_msdyn_workorderproduct_Booking: DevKit.Controls.NavigationItem,
			nav_msdyn_bookableresourcebooking_msdyn_workorderservice_Booking: DevKit.Controls.NavigationItem,
			nav_msdyn_bookableresourcebooking_msdyn_workorderservicetask_Booking: DevKit.Controls.NavigationItem,
			navAsyncOperations: DevKit.Controls.NavigationItem,
			navProcessSessions: DevKit.Controls.NavigationItem
		}
		interface quickForm_WorkOrderQuickView_Body {
			msdyn_Address1: DevKit.Controls.QuickView;
			msdyn_City: DevKit.Controls.QuickView;
			msdyn_Country: DevKit.Controls.QuickView;
			msdyn_CustomerAsset: DevKit.Controls.QuickView;
			msdyn_PostalCode: DevKit.Controls.QuickView;
			msdyn_PrimaryIncidentDescription: DevKit.Controls.QuickView;
			msdyn_PrimaryIncidentType: DevKit.Controls.QuickView;
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
		interface Process extends DevKit.Controls.IProcess {
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
		* DynamicsCrm.DevKit form Resource_Booking_Mobile_Deprecated Main Form
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
		/** The Process of form Resource_Booking_Mobile_Deprecated */
		Process: DevKit.FormResource_Booking_Mobile_Deprecated.Process;
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
		/** The entity object */
		Entity: any;
		/** The entity name */
		EntityName: string;
		/** The entity collection name */
		EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependant on the fields that are retrieved */
		"@odata.etag": string;
		/** Unique identifier of the resource booking. */
		BookableResourceBookingId: DevKit.WebApi.GuidValue;
		/** Select the status of the booking. */
		BookingStatus: DevKit.WebApi.LookupValue;
		/** Select whether the booking is solid or liquid. Solid bookings are firm and cannot be changed whereas liquid bookings can be changed. */
		BookingType: DevKit.WebApi.OptionSetValue;
		/** Unique identifier of the user who created the record. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the record. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Enter the duration of the booking. */
		Duration: DevKit.WebApi.IntegerValue;
		/** Enter the end date and time of the booking. */
		EndTime_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Exchange rate for the currency associated with the bookableresourcebooking with respect to the base currency. */
		ExchangeRate: DevKit.WebApi.DecimalValueReadonly;
		/** Shows the reference to the booking header record that represents the summary of bookings. */
		Header: DevKit.WebApi.LookupValue;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the user who modified the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who modified the record. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Defines whether this booking accepts changes propagated as cascading changes */
		msdyn_AcceptCascadeCrewChanges: DevKit.WebApi.BooleanValue;
		/** Shows the time that work started. */
		msdyn_ActualArrivalTime_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Shows the total travel duration. Calculated based on the difference between the Bookable Resource Booking's start time and actual arrival time. */
		msdyn_ActualTravelDuration: DevKit.WebApi.IntegerValue;
		/** Agreement Booking Date from where this Booking was generated */
		msdyn_AgreementBookingDate: DevKit.WebApi.LookupValue;
		/** Allow the time of this booking to be displayed on the schedule assistant as available. */
		msdyn_AllowOverlapping: DevKit.WebApi.BooleanValue;
		/** Unique identifier for Appointment associated with Bookable Resource Booking. */
		msdyn_AppointmentBookingId: DevKit.WebApi.LookupValue;
		/** The Base travel duration indicates the travel time without traffic */
		msdyn_BaseTravelDuration: DevKit.WebApi.IntegerValue;
		/** Shows the method used to create this booking. */
		msdyn_BookingMethod: DevKit.WebApi.OptionSetValue;
		/** A unique identifier for the booking setup metadata that is associated with a bookable resource booking. */
		msdyn_BookingSetupMetadataId: DevKit.WebApi.LookupValue;
		/** Defines whether changing any of the following fields (Start Time, End Time, Status) should cascade the changes to other bookings on this requirement that have the same start and end time. */
		msdyn_CascadeCrewChanges: DevKit.WebApi.BooleanValue;
		/** This field is populated by the Field Service solution to define to which crew a booking is connected. */
		msdyn_Crew: DevKit.WebApi.LookupValue;
		/** Crew Member Type */
		msdyn_CrewMemberType: DevKit.WebApi.OptionSetValue;
		/** Capacity that needs to take from resource capacity */
		msdyn_effort: DevKit.WebApi.DecimalValue;
		/** Estimated Arrival Time */
		msdyn_EstimatedArrivalTime_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Estimated Travel Duration */
		msdyn_EstimatedTravelDuration: DevKit.WebApi.IntegerValue;
		/** For internal use only. */
		msdyn_InternalFlags: DevKit.WebApi.StringValue;
		msdyn_Latitude: DevKit.WebApi.DoubleValue;
		msdyn_Longitude: DevKit.WebApi.DoubleValue;
		/** In this field you can enter the total miles the resource drove to the job site */
		msdyn_MilesTraveled: DevKit.WebApi.DoubleValue;
		/** Internal Use. This field is used to capture the time when the Booking was updated on mobile offline. */
		msdyn_OfflineTimestamp_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Prevents time stamp creation if the time stamp was already created on a mobile device. */
		msdyn_PreventTimestampCreation: DevKit.WebApi.BooleanValue;
		/** Project of booking detail record */
		msdyn_projectid: DevKit.WebApi.LookupValue;
		/** Project team member of booking detail record */
		msdyn_projectteamid: DevKit.WebApi.LookupValue;
		/** Internal For Quick note pcf control actions */
		msdyn_quickNoteAction: DevKit.WebApi.OptionSetValue;
		/** Requirement Group */
		msdyn_requirementgroupid: DevKit.WebApi.LookupValue;
		/** Requirement Group Set */
		msdyn_requirementgroupset: DevKit.WebApi.StringValue;
		/** Resource Category */
		msdyn_resourcecategoryid: DevKit.WebApi.LookupValue;
		/** Unique identifier for Resource associated with Resource Booking */
		msdyn_ResourceGroup: DevKit.WebApi.LookupValue;
		/** Resource Requirement */
		msdyn_ResourceRequirement: DevKit.WebApi.LookupValue;
		/** Unique identifier for Service Appointment associated with Resource Booking. */
		msdyn_serviceappointment: DevKit.WebApi.LookupValue;
		/** This field is used for capturing signature on Mobile (using the Pen Control) */
		msdyn_Signature: DevKit.WebApi.StringValue;
		/** Shows the automatically generated text of the time slot on the schedule board. */
		msdyn_SlotText: DevKit.WebApi.StringValue;
		msdyn_TimeGroupDetailSelected: DevKit.WebApi.LookupValue;
		/** Shows the total billable duration. If you leave this field blank the system automatically determines the billable duration by calculating the resource journal details. */
		msdyn_TotalBillableDuration: DevKit.WebApi.IntegerValue;
		/** Shows the total break duration. If you leave this field blank the system automatically determines the break duration by calculating the resource journal details. */
		msdyn_TotalBreakDuration: DevKit.WebApi.IntegerValue;
		/** Shows the total cost for this booking. */
		msdyn_TotalCost: DevKit.WebApi.MoneyValue;
		/** Value of the Total Cost in base currency. */
		msdyn_totalcost_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Shows the total duration that this booking was in progress. */
		msdyn_TotalDurationInProgress: DevKit.WebApi.IntegerValue;
		/** Travel Time Calculation */
		msdyn_TravelTimeCalculationType: DevKit.WebApi.OptionSetValue;
		msdyn_TravelTimeRescheduling: DevKit.WebApi.BooleanValue;
		/** For internal use only. */
		msdyn_URSInternalFlags: DevKit.WebApi.StringValue;
		msdyn_WorkLocation: DevKit.WebApi.OptionSetValue;
		/** Unique identifier for Work Order associated with Resource Booking. */
		msdyn_WorkOrder: DevKit.WebApi.LookupValue;
		/** Type a name for the booking. */
		Name: DevKit.WebApi.StringValue;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: DevKit.WebApi.LookupValue;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: DevKit.WebApi.LookupValue;
		/** Unique identifier for the business unit that owns the record */
		OwningBusinessUnit: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier for the team that owns the record. */
		OwningTeam: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier for the user that owns the record. */
		OwningUser: DevKit.WebApi.LookupValueReadonly;
		/** Contains the id of the process associated with the entity. */
		ProcessId: DevKit.WebApi.GuidValue;
		/** Shows the resource that is booked. */
		Resource: DevKit.WebApi.LookupValue;
		/** Contains the id of the stage where the entity is located. */
		StageId: DevKit.WebApi.GuidValue;
		/** Enter the start date and time of the booking. */
		StartTime_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Status of the Bookable Resource Booking */
		StateCode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the Bookable Resource Booking */
		StatusCode: DevKit.WebApi.OptionSetValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Exchange rate for the currency associated with the BookableResourceBooking with respect to the base currency. */
		TransactionCurrencyId: DevKit.WebApi.LookupValue;
		/** A comma separated list of string values representing the unique identifiers of stages in a Business Process Flow Instance in the order that they occur. */
		TraversedPath: DevKit.WebApi.StringValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Version Number */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
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
			Resource_Scheduling_Optimization,
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.00.00'}