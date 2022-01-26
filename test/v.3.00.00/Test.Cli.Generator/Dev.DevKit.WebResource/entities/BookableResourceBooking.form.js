'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormBooking_and_Work_Order = function(executionContext, defaultWebResourceName) {
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
			msdyn_ActualArrivalTime1: {},
			msdyn_ActualTravelDuration: {},
			msdyn_ActualTravelDuration1: {},
			msdyn_AgreementBookingDate: {},
			msdyn_AllowOverlapping: {},
			msdyn_BookingMethod: {},
			msdyn_EstimatedArrivalTime: {},
			msdyn_EstimatedTravelDuration: {},
			msdyn_MilesTraveled: {},
			msdyn_OfflineTimestamp: {},
			msdyn_quickNoteAction: {},
			msdyn_quicknotescontrol: {},
			msdyn_ResourceGroup: {},
			msdyn_Signature: {},
			msdyn_TimeGroupDetailSelected: {},
			msdyn_WorkOrder: {},
			msdyn_WorkOrder1: {},
			msdyn_WorkOrder2: {},
			msdyn_WorkOrder3: {},
			Name: {},
			notescontrol: {},
			Resource: {},
			StartTime: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			fstab_customer: {
				Section: {
					fstab_customer_section_general: {},
					fstab_report_section_travel: {}
				}
			},
			fstab_fieldservice: {
				Section: {
					fstab_fieldservice_section_general: {},
					fstab_fieldservice_section_others: {}
				}
			},
			fstab_general: {
				Section: {
					fstab_general_section_others: {},
					fstab_general_section_summary: {}
				}
			},
			fstab_Notes: {
				Section: {
					fstab_notes_section_general: {},
					fstab_notes_section_quicknotes: {},
					fstab_notes_section_signature: {}
				}
			},
			fstab_service: {
				Section: {
					fstab_service_section_general: {}
				}
			},
			fstab_Timeline: {
				Section: {
					fstab_timeline_section_new: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var process = devKit.LoadProcess(formContext);
		form.Process = process;
		var grid = {
			msdyn_quicknotescontrol: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			nav_msdyn_bookableresourcebooking_msdyn_bookingjournal_Booking: {},
			nav_msdyn_bookableresourcebooking_msdyn_bookingtimestamp_Booking: {},
			nav_msdyn_bookableresourcebooking_msdyn_fspp_bookingnotificationcode_BookableResourceBooking: {},
			nav_msdyn_bookableresourcebooking_msdyn_geofence_bookableresourcebookingid: {},
			nav_msdyn_bookableresourcebooking_msdyn_purchaseorder_Booking: {},
			nav_msdyn_bookableresourcebooking_msdyn_purchaseorderproduct_AssociateToBooking: {},
			nav_msdyn_bookableresourcebooking_msdyn_purchaseorderreceiptproduct_AssociateToBooking: {},
			nav_msdyn_bookableresourcebooking_msdyn_rtv_Booking: {},
			nav_msdyn_bookableresourcebooking_msdyn_timeentry_BookableResourceBooking: {},
			nav_msdyn_bookableresourcebooking_msdyn_workorderproduct_Booking: {},
			nav_msdyn_bookableresourcebooking_msdyn_workorderservice_Booking: {},
			nav_msdyn_bookableresourcebooking_msdyn_workorderservicetask_Booking: {},
			navActivities: {},
			navAsyncOperations: {},
			navAudit: {},
			navProcessSessions: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormBookableResourceBooking_Information = function(executionContext, defaultWebResourceName) {
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
			msdyn_OfflineTimestamp: {},
			msdyn_PreventTimestampCreation: {},
			msdyn_quickNoteAction: {},
			msdyn_quicknotescontrol: {},
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
			FieldService: {
				Section: {
					FieldService_section_2: {},
					FieldService_section_3: {},
					FieldService_section_4: {},
					FieldService_section_5: {}
				}
			},
			tab_2: {
				Section: {
					tab_2_section_1: {},
					tab_2_section_2: {},
					tab_2_section_4: {},
					tab_2_section_5: {}
				}
			},
			tab_timeline: {
				Section: {
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var process = devKit.LoadProcess(formContext);
		form.Process = process;
		var grid = {
			msdyn_quicknotescontrol: {},
			TIMESTAMPS: {},
			TIMESTAMPS: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			nav_msdyn_bookableresourcebooking_msdyn_bookingjournal_Booking: {},
			nav_msdyn_bookableresourcebooking_msdyn_bookingtimestamp_Booking: {},
			nav_msdyn_bookableresourcebooking_msdyn_purchaseorder_Booking: {},
			nav_msdyn_bookableresourcebooking_msdyn_purchaseorderproduct_AssociateToBooking: {},
			nav_msdyn_bookableresourcebooking_msdyn_purchaseorderreceiptproduct_AssociateToBooking: {},
			nav_msdyn_bookableresourcebooking_msdyn_rtv_Booking: {},
			nav_msdyn_bookableresourcebooking_msdyn_workorderproduct_Booking: {},
			nav_msdyn_bookableresourcebooking_msdyn_workorderservice_Booking: {},
			nav_msdyn_bookableresourcebooking_msdyn_workorderservicetask_Booking: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormResource_Booking_Mobile_Deprecated = function(executionContext, defaultWebResourceName) {
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
			msdyn_quickNoteAction: {},
			msdyn_quicknotescontrol: {},
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
			FieldService: {
				Section: {
					FieldService_column_5_section_1: {},
					FieldService_column_6_section_1: {},
					FieldService_section_1: {},
					FieldService_section_2: {},
					FieldService_section_4: {},
					FieldService_section_5: {},
					FieldService_section_6: {}
				}
			},
			fstab_general: {
				Section: {
					fstab_general_section_general: {},
					fstab_general_section_misc: {},
					fstab_general_section_schedule: {},
					fstab_general_section_travel: {},
					fstab_note_section: {},
					tab_actions: {}
				}
			},
			fstab_signature: {
				Section: {
					fstab_signature_section_signature: {}
				}
			},
			fstab_timeline: {
				Section: {
					fstab_note_section_2: {}
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
		var process = devKit.LoadProcess(formContext);
		form.Process = process;
		var quickForm = {
			WorkOrderQuickView: {
				msdyn_Address1: {},
				msdyn_City: {},
				msdyn_Country: {},
				msdyn_CustomerAsset: {},
				msdyn_PostalCode: {},
				msdyn_PrimaryIncidentDescription: {},
				msdyn_PrimaryIncidentType: {},
				msdyn_ServiceAccount: {},
				msdyn_StateOrProvince: {},
				msdyn_TotalAmount: {},
				msdyn_TotalSalesTax: {}
			}
		};
		devKit.LoadQuickForms(formContext, quickForm);
		form.QuickForm = quickForm;
		var grid = {
			msdyn_quicknotescontrol: {},
			PRODUCTS: {},
			SERVICE_TASKS: {},
			SERVICES: {},
			ServiceTasks: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			nav_msdyn_bookableresourcebooking_msdyn_bookingjournal_Booking: {},
			nav_msdyn_bookableresourcebooking_msdyn_bookingtimestamp_Booking: {},
			nav_msdyn_bookableresourcebooking_msdyn_purchaseorder_Booking: {},
			nav_msdyn_bookableresourcebooking_msdyn_purchaseorderproduct_AssociateToBooking: {},
			nav_msdyn_bookableresourcebooking_msdyn_purchaseorderreceiptproduct_AssociateToBooking: {},
			nav_msdyn_bookableresourcebooking_msdyn_rtv_Booking: {},
			nav_msdyn_bookableresourcebooking_msdyn_workorderproduct_Booking: {},
			nav_msdyn_bookableresourcebooking_msdyn_workorderservice_Booking: {},
			nav_msdyn_bookableresourcebooking_msdyn_workorderservicetask_Booking: {},
			navAsyncOperations: {},
			navProcessSessions: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.BookableResourceBooking = {
		BookingType : {
			Liquid: 2,
			Solid: 1
		},
		msdyn_BookingMethod : {
			Manual: 690970003,
			Mobile: 690970002,
			Resource_Scheduling_Optimization: 192350000,
			Schedule_Assistant: 690970004,
			Schedule_Board: 690970001,
			System_Agreement_Schedule: 690970005
		},
		msdyn_CrewMemberType : {
			Leader: 192350000,
			Member: 192350001,
			None: 192350002
		},
		msdyn_quickNoteAction : {
			audio: 100000004,
			file: 100000005,
			none: 100000000,
			photo: 100000002,
			text: 100000001,
			video: 100000003
		},
		msdyn_TravelTimeCalculationType : {
			Approximate: 192350003,
			Bing_Maps_with_historical_traffic: 192350001,
			Bing_Maps_without_historical_traffic: 192350000,
			Custom_Map_Provider: 192350002
		},
		msdyn_WorkLocation : {
			Facility: 690970001,
			Location_Agnostic: 690970002,
			Onsite: 690970000
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