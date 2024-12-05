'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormRoom = function(executionContext, defaultWebResourceName) {
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
			msevtmgt_AVSupport: {},
			msevtmgt_Building: {},
			msevtmgt_Building1: {},
			msevtmgt_Capacity: {},
			msevtmgt_Description: {},
			msevtmgt_DisabledAccess: {},
			msevtmgt_InternetConnection: {},
			msevtmgt_Name: {},
			msevtmgt_VideoConferencing: {},
			msevtmgt_Whiteboard: {},
			notescontrol: {},
			OwnerId: {},
			RoomLayouts: {},
			RoomReservationsGrid: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			GeneralTab: {
				Section: {
					_6D22B45E_79CD_4F1B_83FC_341A07596546_SECTION_3: {},
					_6D22B45E_79CD_4F1B_83FC_341A07596546_SECTION_4: {},
					_6D22B45E_79CD_4F1B_83FC_341A07596546_SECTION_5: {},
					_BF00C7F8_95A0_40FB_B131_4A8998D070D1: {},
					_FA7317D8_DEDF_4BDC_8263_EF0BAB5D5D68: {}
				}
			},
			RoomReservationsTab: {
				Section: {
					RoomReservationsSection: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			msevtmgt_Building: {},
			msevtmgt_Capacity: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
		var quickForm = {
			BuildingSummary: {
				msevtmgt_AccessibleToilets: {},
				msevtmgt_AdditionalFacilities: {},
				msevtmgt_AddressLine1: {},
				msevtmgt_AddressLine2: {},
				msevtmgt_AddressLine3: {},
				msevtmgt_City: {},
				msevtmgt_Country: {},
				msevtmgt_Description: {},
				msevtmgt_DisabledAccess: {},
				msevtmgt_DisabledParking: {},
				msevtmgt_Name: {},
				msevtmgt_PrimaryContact: {},
				msevtmgt_StateProvince: {},
				OwnerId: {}
			}
		};
		devKit.LoadQuickForms(formContext, quickForm);
		form.QuickForm = quickForm;
		var grid = {
			RoomLayouts: {},
			RoomReservationsGrid: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			msevtmgt_event_room: {},
			msevtmgt_msevtmgt_room_msevtmgt_venue: {},
			msevtmgt_room_adx_inviteredemptions: {},
			msevtmgt_room_adx_portalcomments: {},
			msevtmgt_room_Appointments: {},
			msevtmgt_room_Emails: {},
			msevtmgt_room_msdyn_bookingalerts: {},
			msevtmgt_room_msdyn_copilottranscripts: {},
			msevtmgt_room_msdyn_ocliveworkitems: {},
			msevtmgt_room_msdyn_ocoutboundmessages: {},
			msevtmgt_room_msdyn_ocsessions: {},
			msevtmgt_room_msdyn_ocvoicemails: {},
			msevtmgt_room_msevtmgt_layout_Room: {},
			msevtmgt_room_msevtmgt_roomreservation: {},
			msevtmgt_room_msfp_alerts: {},
			msevtmgt_room_msfp_surveyinvites: {},
			msevtmgt_room_msfp_surveyresponses: {},
			msevtmgt_room_PhoneCalls: {},
			msevtmgt_room_ServiceAppointments: {},
			msevtmgt_room_Tasks: {},
			msevtmgt_session_room: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormRoom_quick_create_form = function(executionContext, defaultWebResourceName) {
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
			msevtmgt_Building: {},
			msevtmgt_Capacity: {},
			msevtmgt_Description: {},
			msevtmgt_DisabledAccess: {},
			msevtmgt_Name: {},
			msevtmgt_PrimaryContact: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			tab_1: {
				Section: {
					tab_1_column_1_section_1: {},
					tab_1_column_2_section_1: {},
					tab_1_column_3_section_1: {}
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
	OptionSet.msevtmgt_Room = {
		msevtmgt_AVSupport : {
			No: 100000001,
			Yes: 100000002
		},
		msevtmgt_DisabledAccess : {
			No: 100000001,
			Yes: 100000002
		},
		msevtmgt_InternetConnection : {
			No: 100000001,
			Yes: 100000002
		},
		msevtmgt_VideoConferencing : {
			No: 100000001,
			Yes: 100000002
		},
		msevtmgt_Whiteboard : {
			No: 100000001,
			Yes: 100000002
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