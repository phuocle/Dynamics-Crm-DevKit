'use strict';
/** @namespace LuckyMokey */
var LuckyMokey;
(function (LuckyMokey) {
	'use strict';
	LuckyMokey.FormBookableResourceBooking_Information = function(executionContext, defaultWebResourceName) {
		var formContext = null;
		if (executionContext !== undefined) {
			if (executionContext.getFormContext === undefined) {
				formContext = executionContext;
			}
			else {
				formContext = executionContext.getFormContext();
			}
		}
		var form = devKit.LoadForm(formContext);
		var body = {
			BookingStatus: {},
			BookingType: {},
			Duration: {},
			EndTime: {},
			msdyn_AcceptCascadeCrewChanges: {},
			msdyn_ActualArrivalTime: {},
			msdyn_ActualTravelDuration: {},
			msdyn_AgreementBookingDate: {},
			msdyn_AllowOverlapping: {},
			msdyn_BookingMethod: {},
			msdyn_CascadeCrewChanges: {},
			msdyn_Crew: {},
			msdyn_CrewMemberType: {},
			msdyn_effort: {},
			msdyn_EstimatedArrivalTime: {},
			msdyn_EstimatedTravelDuration: {},
			msdyn_Latitude: {},
			msdyn_Longitude: {},
			msdyn_MilesTraveled: {},
			msdyn_PreventTimestampCreation: {},
			msdyn_ResourceGroup: {},
			msdyn_ResourceRequirement: {},
			msdyn_TimeGroupDetailSelected: {},
			msdyn_TotalBillableDuration: {},
			msdyn_TotalBreakDuration: {},
			msdyn_TotalCost: {},
			msdyn_TotalDurationInProgress: {},
			msdyn_WorkLocation: {},
			msdyn_WorkOrder: {},
			Name: {},
			notescontrol: {},
			Resource: {},
			StartTime: {},
			TIMESTAMPS: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			tab_2: {
				Section: {
					tab_2_section_1: {},
					tab_2_section_4: {},
					tab_2_section_2: {},
					tab_2_section_5: {}
				}
			},
			FieldService: {
				Section: {
					FieldService_section_5: {},
					FieldService_section_2: {},
					FieldService_section_4: {},
					FieldService_section_3: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var quickForm = {

		};
		devKit.LoadQuickForms(formContext, quickForm);
		form.QuickForm = quickForm;
		var navigation = {
			nav_msdyn_bookableresourcebooking_msdyn_workorderproduct_Booking: {},
			nav_msdyn_bookableresourcebooking_msdyn_bookingjournal_Booking: {},
			nav_msdyn_bookableresourcebooking_msdyn_bookingtimestamp_Booking: {},
			nav_msdyn_bookableresourcebooking_msdyn_workorderservice_Booking: {},
			nav_msdyn_bookableresourcebooking_msdyn_workorderservicetask_Booking: {},
			nav_msdyn_bookableresourcebooking_msdyn_purchaseorder_Booking: {},
			nav_msdyn_bookableresourcebooking_msdyn_purchaseorderproduct_AssociateToBooking: {},
			nav_msdyn_bookableresourcebooking_msdyn_purchaseorderreceiptproduct_AssociateToBooking: {},
			nav_msdyn_bookableresourcebooking_msdyn_rtv_Booking: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		return form;
	};
	LuckyMokey.FormResource_Booking_Mobile = function(executionContext, defaultWebResourceName) {
		var formContext = null;
		if (executionContext !== undefined) {
			if (executionContext.getFormContext === undefined) {
				formContext = executionContext;
			}
			else {
				formContext = executionContext.getFormContext();
			}
		}
		var form = devKit.LoadForm(formContext);
		var body = {
			BookingStatus: {},
			BookingType: {},
			Duration: {},
			EndTime: {},
			msdyn_ActualArrivalTime: {},
			msdyn_ActualTravelDuration: {},
			msdyn_AgreementBookingDate: {},
			msdyn_AllowOverlapping: {},
			msdyn_BookingMethod: {},
			msdyn_EstimatedArrivalTime: {},
			msdyn_EstimatedTravelDuration: {},
			msdyn_Latitude: {},
			msdyn_Longitude: {},
			msdyn_MilesTraveled: {},
			msdyn_OfflineTimestamp: {},
			msdyn_ResourceGroup: {},
			msdyn_Signature: {},
			msdyn_TimeGroupDetailSelected: {},
			msdyn_TotalBillableDuration: {},
			msdyn_TotalBreakDuration: {},
			msdyn_TotalCost: {},
			msdyn_TotalDurationInProgress: {},
			msdyn_WorkOrder: {},
			Name: {},
			notescontrol: {},
			PRODUCTS: {},
			Resource: {},
			SERVICE_TASKS: {},
			SERVICES: {},
			ServiceTasks: {},
			StartTime: {},
			TransactionCurrencyId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			fstab_general: {
				Section: {
					fstab_general_section_general: {},
					fstab_general_section_schedule: {},
					fstab_general_section_travel: {},
					fstab_general_section_misc: {},
					tab_actions: {},
					fstab_note_section: {}
				}
			},
			FieldService: {
				Section: {
					FieldService_section_1: {},
					FieldService_section_4: {},
					FieldService_section_2: {},
					FieldService_section_5: {},
					FieldService_section_6: {},
					FieldService_column_5_section_1: {},
					FieldService_column_6_section_1: {}
				}
			},
			fstab_signature: {
				Section: {
					fstab_signature_section_signature: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			BookingStatus: {},
			msdyn_WorkOrder: {},
			StartTime: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
		var quickForm = {
			WorkOrderQuickView: {}
		};
		devKit.LoadQuickForms(formContext, quickForm);
		form.QuickForm = quickForm;
		var navigation = {
			nav_msdyn_bookableresourcebooking_msdyn_workorderproduct_Booking: {},
			nav_msdyn_bookableresourcebooking_msdyn_bookingjournal_Booking: {},
			nav_msdyn_bookableresourcebooking_msdyn_bookingtimestamp_Booking: {},
			nav_msdyn_bookableresourcebooking_msdyn_workorderservice_Booking: {},
			nav_msdyn_bookableresourcebooking_msdyn_workorderservicetask_Booking: {},
			navAsyncOperations: {},
			navProcessSessions: {},
			nav_msdyn_bookableresourcebooking_msdyn_purchaseorder_Booking: {},
			nav_msdyn_bookableresourcebooking_msdyn_purchaseorderproduct_AssociateToBooking: {},
			nav_msdyn_bookableresourcebooking_msdyn_purchaseorderreceiptproduct_AssociateToBooking: {},
			nav_msdyn_bookableresourcebooking_msdyn_rtv_Booking: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		return form;
	};
})(LuckyMokey || (LuckyMokey = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.BookableResourceBooking = {
		BookingType : {
			Liquid: 2,
			Solid: 1
		},
		msdyn_BookingMethod : {
			System_Agreement_Schedule: 690970005,
			Schedule_Board: 690970001,
			Mobile: 690970002,
			Manual: 690970003,
			Schedule_Assistant: 690970004
		},
		msdyn_CrewMemberType : {
			Leader: 192350000,
			Member: 192350001,
			None: 192350002
		},
		msdyn_WorkLocation : {
			Onsite: 690970000,
			Facility: 690970001,
			Location_Agnostic: 690970002
		},
		StateCode : {
			Active: 0,
			Inactive: 1
		},
		StatusCode : {
			Active: 1,
			Inactive: 2
		},
        RollupState : {
            NotCalculated: 0,
            Calculated: 1,
            OverflowError: 2,
            OtherError: 3,
            RetryLimitExceeded: 4,
            HierarchicalRecursionLimitReached: 5,
            LoopDetected: 6
        }

	};
})(OptionSet || (OptionSet = {}));