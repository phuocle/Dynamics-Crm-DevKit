'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsevtmgt_HotelRoomAllocation_Information = function(executionContext, defaultWebResourceName) {
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
			msevtmgt_AdditionalDetails: {},
			msevtmgt_Event: {},
			msevtmgt_HotelProperty: {},
			msevtmgt_HotelProperty1: {},
			msevtmgt_HotelProperty2: {},
			msevtmgt_Name: {},
			msevtmgt_NumberOfRoomsAllocated: {},
			msevtmgt_PricePerRoom: {},
			msevtmgt_PrimaryContact: {},
			msevtmgt_RoomReservations: {},
			msevtmgt_RoomType: {},
			notescontrol: {},
			OwnerId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			_E088DFD2_761A_443A_BDDB_C2D24AEAF2E2: {
				Section: {
					_E088DFD2_761A_443A_BDDB_C2D24AEAF2E2_SECTION_3: {},
					_E088DFD2_761A_443A_BDDB_C2D24AEAF2E2_SECTION_4: {}
				}
			},
			ReservationsTab: {
				Section: {
					ReservationsTab_section_1: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			msevtmgt_Event: {},
			msevtmgt_NumberOfRoomsLeft: {},
			msevtmgt_NumberofRoomsReserved: {},
			msevtmgt_RoomType: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
		var quickForm = {
			HotelGroup: {
				msevtmgt_HotelGroup: {}
			},
			HotelQuickViewForm: {
				msevtmgt_AddressLine1: {},
				msevtmgt_AddressLine2: {},
				msevtmgt_AddressLine3: {},
				msevtmgt_City: {},
				msevtmgt_Country: {},
				msevtmgt_Description: {},
				msevtmgt_Facilities: {},
				msevtmgt_HotelGroup: {},
				msevtmgt_Name: {},
				msevtmgt_PrimaryContact: {},
				msevtmgt_StateProvince: {},
				msevtmgt_ZIPPostalCode: {}
			}
		};
		devKit.LoadQuickForms(formContext, quickForm);
		form.QuickForm = quickForm;
		var grid = {
			msevtmgt_RoomReservations: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			msevtmgt_hotelroomallocation_adx_inviteredemptions: {},
			msevtmgt_hotelroomallocation_adx_portalcomments: {},
			msevtmgt_hotelroomallocation_Appointments: {},
			msevtmgt_hotelroomallocation_Emails: {},
			msevtmgt_hotelroomallocation_msdyn_bookingalerts: {},
			msevtmgt_hotelroomallocation_msdyn_copilottranscripts: {},
			msevtmgt_hotelroomallocation_msdyn_ocliveworkitems: {},
			msevtmgt_hotelroomallocation_msdyn_ocoutboundmessages: {},
			msevtmgt_hotelroomallocation_msdyn_ocsessions: {},
			msevtmgt_hotelroomallocation_msdyn_ocvoicemails: {},
			msevtmgt_hotelroomallocation_msfp_alerts: {},
			msevtmgt_hotelroomallocation_msfp_surveyinvites: {},
			msevtmgt_hotelroomallocation_msfp_surveyresponses: {},
			msevtmgt_hotelroomallocation_PhoneCalls: {},
			msevtmgt_hotelroomallocation_ServiceAppointments: {},
			msevtmgt_hotelroomallocation_Tasks: {},
			msevtmgt_msevtmgt_hotelroomallocation_msevtmgt_hotelroomreservation_HotelRoomAllocation: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.Formmsevtmgt_HotelRoomAllocation_Quick_Create_Form = function(executionContext, defaultWebResourceName) {
		var formContext = null;
		if (executionContext !== undefined)
		{
			if (executionContext.getFormContext === undefined) {
				formContext = executionContext;
			}
			else {
				formContext = executionContext.getFormContext();
			}
		}
		var form = devKit.LoadForm(formContext);
		var body = {
			msevtmgt_Event: {},
			msevtmgt_HotelProperty: {},
			msevtmgt_Name: {},
			msevtmgt_NumberOfRoomsAllocated: {},
			msevtmgt_PricePerRoom: {},
			msevtmgt_RoomType: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			GeneralTab: {
				Section: {
					GeneralTab_column_1_section_1: {},
					GeneralTab_column_2_section_1: {},
					GeneralTab_column_3_section_1: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msevtmgt_HotelRoomAllocation = {
		msevtmgt_RoomType : {
			Double_room: 100000001,
			Executive_suite: 100000003,
			Junior_suite: 100000002,
			Luxury_suite: 100000004,
			Single_room: 100000000
		},
		statecode : {
			Active: 0,
			Inactive: 1
		},
		statuscode : {
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