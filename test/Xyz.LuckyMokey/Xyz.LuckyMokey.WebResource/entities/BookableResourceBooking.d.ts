//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace FormBookableResourceBooking_Information {
		interface tab_tab_2_Sections {
			tab_2_section_1: DevKit.Form.Controls.ControlSection;
			tab_2_section_4: DevKit.Form.Controls.ControlSection;
			tab_2_section_2: DevKit.Form.Controls.ControlSection;
			tab_2_section_5: DevKit.Form.Controls.ControlSection;
		}
		interface tab_FieldService_Sections {
			FieldService_section_5: DevKit.Form.Controls.ControlSection;
			FieldService_section_2: DevKit.Form.Controls.ControlSection;
			FieldService_section_4: DevKit.Form.Controls.ControlSection;
			FieldService_section_3: DevKit.Form.Controls.ControlSection;
		}
		interface tab_tab_2 extends DevKit.Form.Controls.IControlTab {
			Section: tab_tab_2_Sections;
		}
		interface tab_FieldService extends DevKit.Form.Controls.IControlTab {
			Section: tab_FieldService_Sections;
		}
		interface Tabs {
			tab_2: tab_tab_2;
			FieldService: tab_FieldService;
		}
		interface Body {
			Tab: Tabs;
			notescontrol: DevKit.Form.Controls.ControlNote;
			TIMESTAMPS: DevKit.Form.Controls.ControlGrid;
			/** Select the status of the booking. */
			BookingStatus: DevKit.Form.Controls.ControlLookup;
			/** Select whether the booking is solid or liquid. Solid bookings are firm and cannot be changed whereas liquid bookings can be changed. */
			BookingType: DevKit.Form.Controls.ControlOptionSet;
			/** Enter the duration of the booking. */
			Duration: DevKit.Form.Controls.ControlInteger;
			/** Enter the end date and time of the booking. */
			EndTime: DevKit.Form.Controls.ControlDateTime;
			/** Defines whether this booking accepts changes propagated as cascading changes */
			msdyn_AcceptCascadeCrewChanges: DevKit.Form.Controls.ControlBoolean;
			/** Shows the time that work started. */
			msdyn_ActualArrivalTime: DevKit.Form.Controls.ControlDateTime;
			/** Shows the total travel duration. If you leave this field blank the system automatically determines the travel duration by calculating the resource journal details. */
			msdyn_ActualTravelDuration: DevKit.Form.Controls.ControlInteger;
			/** Agreement Booking Date from where this Booking was generated */
			msdyn_AgreementBookingDate: DevKit.Form.Controls.ControlLookup;
			/** Allow the time of this booking to be displayed on the schedule assistant as available. */
			msdyn_AllowOverlapping: DevKit.Form.Controls.ControlBoolean;
			/** Shows the method used to create this booking. */
			msdyn_BookingMethod: DevKit.Form.Controls.ControlOptionSet;
			/** Defines whether changing any of the following fields (Start Time, End Time, Status) should cascade the changes to other bookings on this requirement that have the same start and end time. */
			msdyn_CascadeCrewChanges: DevKit.Form.Controls.ControlBoolean;
			/** This field is populated by the Field Service solution to define to which crew a booking is connected. */
			msdyn_Crew: DevKit.Form.Controls.ControlLookup;
			/** Crew Member Type */
			msdyn_CrewMemberType: DevKit.Form.Controls.ControlOptionSet;
			/** Capacity that needs to take from resource capacity */
			msdyn_effort: DevKit.Form.Controls.ControlDecimal;
			/** Estimated Arrival Time */
			msdyn_EstimatedArrivalTime: DevKit.Form.Controls.ControlDateTime;
			/** Estimated Travel Duration */
			msdyn_EstimatedTravelDuration: DevKit.Form.Controls.ControlInteger;
			msdyn_Latitude: DevKit.Form.Controls.ControlDouble;
			msdyn_Longitude: DevKit.Form.Controls.ControlDouble;
			/** In this field you can enter the total miles the resource drove to the job site */
			msdyn_MilesTraveled: DevKit.Form.Controls.ControlDouble;
			/** Prevents time stamp creation if the time stamp was already created on a mobile device. */
			msdyn_PreventTimestampCreation: DevKit.Form.Controls.ControlBoolean;
			/** Unique identifier for Resource associated with Resource Booking */
			msdyn_ResourceGroup: DevKit.Form.Controls.ControlLookup;
			/** Resource Requirement */
			msdyn_ResourceRequirement: DevKit.Form.Controls.ControlLookup;
			msdyn_TimeGroupDetailSelected: DevKit.Form.Controls.ControlLookup;
			/** Shows the total billable duration. If you leave this field blank the system automatically determines the billable duration by calculating the resource journal details. */
			msdyn_TotalBillableDuration: DevKit.Form.Controls.ControlInteger;
			/** Shows the total break duration. If you leave this field blank the system automatically determines the break duration by calculating the resource journal details. */
			msdyn_TotalBreakDuration: DevKit.Form.Controls.ControlInteger;
			/** Shows the total cost for this booking. */
			msdyn_TotalCost: DevKit.Form.Controls.ControlMoney;
			/** Shows the total duration that this booking was in progress. */
			msdyn_TotalDurationInProgress: DevKit.Form.Controls.ControlInteger;
			msdyn_WorkLocation: DevKit.Form.Controls.ControlOptionSet;
			/** Unique identifier for Work Order associated with Resource Booking. */
			msdyn_WorkOrder: DevKit.Form.Controls.ControlLookup;
			/** Type a name for the booking. */
			Name: DevKit.Form.Controls.ControlString;
			/** Shows the resource that is booked. */
			Resource: DevKit.Form.Controls.ControlLookup;
			/** Enter the start date and time of the booking. */
			StartTime: DevKit.Form.Controls.ControlDateTime;
		}
		interface Navigation {
			nav_msdyn_bookableresourcebooking_msdyn_workorderproduct_Booking: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_bookableresourcebooking_msdyn_bookingjournal_Booking: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_bookableresourcebooking_msdyn_bookingtimestamp_Booking: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_bookableresourcebooking_msdyn_workorderservice_Booking: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_bookableresourcebooking_msdyn_workorderservicetask_Booking: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_bookableresourcebooking_msdyn_purchaseorder_Booking: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_bookableresourcebooking_msdyn_purchaseorderproduct_AssociateToBooking: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_bookableresourcebooking_msdyn_purchaseorderreceiptproduct_AssociateToBooking: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_bookableresourcebooking_msdyn_rtv_Booking: DevKit.Form.Controls.ControlNavigationItem
		}
	}
	class FormBookableResourceBooking_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form BookableResourceBooking_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form BookableResourceBooking_Information */
		Body: LuckyMokey.FormBookableResourceBooking_Information.Body;
		/** The Navigation of form BookableResourceBooking_Information */
		Navigation: LuckyMokey.FormBookableResourceBooking_Information.Navigation;
	}
	namespace FormResource_Booking_Mobile {
		interface Header {
			/** Select the status of the booking. */
			BookingStatus: DevKit.Form.Controls.ControlLookup;
			/** Unique identifier for Work Order associated with Resource Booking. */
			msdyn_WorkOrder: DevKit.Form.Controls.ControlLookup;
			/** Enter the start date and time of the booking. */
			StartTime: DevKit.Form.Controls.ControlDateTime;
		}
		interface tab_fstab_general_Sections {
			fstab_general_section_general: DevKit.Form.Controls.ControlSection;
			fstab_general_section_schedule: DevKit.Form.Controls.ControlSection;
			fstab_general_section_travel: DevKit.Form.Controls.ControlSection;
			fstab_general_section_misc: DevKit.Form.Controls.ControlSection;
			tab_actions: DevKit.Form.Controls.ControlSection;
			fstab_note_section: DevKit.Form.Controls.ControlSection;
		}
		interface tab_FieldService_Sections {
			FieldService_section_1: DevKit.Form.Controls.ControlSection;
			FieldService_section_4: DevKit.Form.Controls.ControlSection;
			FieldService_section_2: DevKit.Form.Controls.ControlSection;
			FieldService_section_5: DevKit.Form.Controls.ControlSection;
			FieldService_section_6: DevKit.Form.Controls.ControlSection;
			FieldService_column_5_section_1: DevKit.Form.Controls.ControlSection;
			FieldService_column_6_section_1: DevKit.Form.Controls.ControlSection;
		}
		interface tab_fstab_signature_Sections {
			fstab_signature_section_signature: DevKit.Form.Controls.ControlSection;
		}
		interface tab_fstab_general extends DevKit.Form.Controls.IControlTab {
			Section: tab_fstab_general_Sections;
		}
		interface tab_FieldService extends DevKit.Form.Controls.IControlTab {
			Section: tab_FieldService_Sections;
		}
		interface tab_fstab_signature extends DevKit.Form.Controls.IControlTab {
			Section: tab_fstab_signature_Sections;
		}
		interface Tabs {
			fstab_general: tab_fstab_general;
			FieldService: tab_FieldService;
			fstab_signature: tab_fstab_signature;
		}
		interface Body {
			Tab: Tabs;
			PRODUCTS: DevKit.Form.Controls.ControlGrid;
			SERVICES: DevKit.Form.Controls.ControlGrid;
			SERVICE_TASKS: DevKit.Form.Controls.ControlGrid;
			notescontrol: DevKit.Form.Controls.ControlNote;
			ServiceTasks: DevKit.Form.Controls.ControlGrid;
			/** Select the status of the booking. */
			BookingStatus: DevKit.Form.Controls.ControlLookup;
			/** Select whether the booking is solid or liquid. Solid bookings are firm and cannot be changed whereas liquid bookings can be changed. */
			BookingType: DevKit.Form.Controls.ControlOptionSet;
			/** Enter the duration of the booking. */
			Duration: DevKit.Form.Controls.ControlInteger;
			/** Enter the end date and time of the booking. */
			EndTime: DevKit.Form.Controls.ControlDateTime;
			/** Shows the time that work started. */
			msdyn_ActualArrivalTime: DevKit.Form.Controls.ControlDateTime;
			/** Shows the total travel duration. If you leave this field blank the system automatically determines the travel duration by calculating the resource journal details. */
			msdyn_ActualTravelDuration: DevKit.Form.Controls.ControlInteger;
			/** Agreement Booking Date from where this Booking was generated */
			msdyn_AgreementBookingDate: DevKit.Form.Controls.ControlLookup;
			/** Allow the time of this booking to be displayed on the schedule assistant as available. */
			msdyn_AllowOverlapping: DevKit.Form.Controls.ControlBoolean;
			/** Shows the method used to create this booking. */
			msdyn_BookingMethod: DevKit.Form.Controls.ControlOptionSet;
			/** Estimated Arrival Time */
			msdyn_EstimatedArrivalTime: DevKit.Form.Controls.ControlDateTime;
			/** Estimated Travel Duration */
			msdyn_EstimatedTravelDuration: DevKit.Form.Controls.ControlInteger;
			msdyn_Latitude: DevKit.Form.Controls.ControlDouble;
			msdyn_Longitude: DevKit.Form.Controls.ControlDouble;
			/** In this field you can enter the total miles the resource drove to the job site */
			msdyn_MilesTraveled: DevKit.Form.Controls.ControlDouble;
			/** Internal Use. This field is used to capture the time when the Booking was updated on mobile offline. */
			msdyn_OfflineTimestamp: DevKit.Form.Controls.ControlDateTime;
			/** Unique identifier for Resource associated with Resource Booking */
			msdyn_ResourceGroup: DevKit.Form.Controls.ControlLookup;
			/** This field is used for capturing signature on Mobile (using the Pen Control) */
			msdyn_Signature: DevKit.Form.Controls.ControlString;
			msdyn_TimeGroupDetailSelected: DevKit.Form.Controls.ControlLookup;
			/** Shows the total billable duration. If you leave this field blank the system automatically determines the billable duration by calculating the resource journal details. */
			msdyn_TotalBillableDuration: DevKit.Form.Controls.ControlInteger;
			/** Shows the total break duration. If you leave this field blank the system automatically determines the break duration by calculating the resource journal details. */
			msdyn_TotalBreakDuration: DevKit.Form.Controls.ControlInteger;
			/** Shows the total cost for this booking. */
			msdyn_TotalCost: DevKit.Form.Controls.ControlMoney;
			/** Shows the total duration that this booking was in progress. */
			msdyn_TotalDurationInProgress: DevKit.Form.Controls.ControlInteger;
			WorkOrderQuickView: DevKit.Form.Controls.ControlQuickView;
			/** Type a name for the booking. */
			Name: DevKit.Form.Controls.ControlString;
			/** Shows the resource that is booked. */
			Resource: DevKit.Form.Controls.ControlLookup;
			/** Enter the start date and time of the booking. */
			StartTime: DevKit.Form.Controls.ControlDateTime;
			/** Exchange rate for the currency associated with the BookableResourceBooking with respect to the base currency. */
			TransactionCurrencyId: DevKit.Form.Controls.ControlLookup;
		}
		interface Navigation {
			nav_msdyn_bookableresourcebooking_msdyn_workorderproduct_Booking: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_bookableresourcebooking_msdyn_bookingjournal_Booking: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_bookableresourcebooking_msdyn_bookingtimestamp_Booking: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_bookableresourcebooking_msdyn_workorderservice_Booking: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_bookableresourcebooking_msdyn_workorderservicetask_Booking: DevKit.Form.Controls.ControlNavigationItem,
			navAsyncOperations: DevKit.Form.Controls.ControlNavigationItem,
			navProcessSessions: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_bookableresourcebooking_msdyn_purchaseorder_Booking: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_bookableresourcebooking_msdyn_purchaseorderproduct_AssociateToBooking: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_bookableresourcebooking_msdyn_purchaseorderreceiptproduct_AssociateToBooking: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_bookableresourcebooking_msdyn_rtv_Booking: DevKit.Form.Controls.ControlNavigationItem
		}
	}
	class FormResource_Booking_Mobile extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form Resource_Booking_Mobile
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Resource_Booking_Mobile */
		Body: LuckyMokey.FormResource_Booking_Mobile.Body;
		/** The Header section of form Resource_Booking_Mobile */
		Header: LuckyMokey.FormResource_Booking_Mobile.Header;
		/** The Navigation of form Resource_Booking_Mobile */
		Navigation: LuckyMokey.FormResource_Booking_Mobile.Navigation;
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
		/** Shows the total travel duration. If you leave this field blank the system automatically determines the travel duration by calculating the resource journal details. */
		msdyn_ActualTravelDuration: DevKit.WebApi.IntegerValue;
		/** Agreement Booking Date from where this Booking was generated */
		msdyn_AgreementBookingDate: DevKit.WebApi.LookupValue;
		/** Allow the time of this booking to be displayed on the schedule assistant as available. */
		msdyn_AllowOverlapping: DevKit.WebApi.BooleanValue;
		/** Unique identifier for Appointment associated with Bookable Resource Booking. */
		msdyn_AppointmentBookingId: DevKit.WebApi.LookupValue;
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
		/** Requirement Group */
		msdyn_requirementgroupid: DevKit.WebApi.LookupValue;
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
			/** 690970005 */
			System_Agreement_Schedule,
			/** 690970001 */
			Schedule_Board,
			/** 690970002 */
			Mobile,
			/** 690970003 */
			Manual,
			/** 690970004 */
			Schedule_Assistant
		}
		enum msdyn_CrewMemberType {
			/** 192350000 */
			Leader,
			/** 192350001 */
			Member,
			/** 192350002 */
			None
		}
		enum msdyn_WorkLocation {
			/** 690970000 */
			Onsite,
			/** 690970001 */
			Facility,
			/** 690970002 */
			Location_Agnostic
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
//{'JsForm':['Information','Resource Booking - Mobile'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}