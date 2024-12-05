'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsevtmgt_HotelRoomReservation_Information = function(executionContext, defaultWebResourceName) {
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
			msevtmgt_Attendee: {},
			msevtmgt_Attendee1: {},
			msevtmgt_EventTeamMemberId: {},
			msevtmgt_Guesttype: {},
			msevtmgt_HotelRoomAllocation: {},
			msevtmgt_HotelRoomAllocation1: {},
			msevtmgt_Name: {},
			msevtmgt_RewardsProgramNumber: {},
			msevtmgt_SpeakerId: {},
			msevtmgt_SpecialRequests: {},
			notescontrol: {},
			OwnerId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			_32E11295_AC97_44AD_A876_938FF71983B6: {
				Section: {
					_32E11295_AC97_44AD_A876_938FF71983B6_SECTION_3: {},
					_83D5A013_9BF6_4156_A782_1E2645C0AC7E: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var quickForm = {
			msevtmgt_EventRegistration: {
				msevtmgt_ContactId: {},
				msevtmgt_Name: {}
			},
			msevtmgt_HotelRoomAllocation: {
				msevtmgt_Event: {},
				msevtmgt_HotelProperty: {},
				msevtmgt_Name: {},
				msevtmgt_NumberOfRoomsAllocated: {},
				msevtmgt_PricePerRoom: {},
				msevtmgt_RoomType: {}
			}
		};
		devKit.LoadQuickForms(formContext, quickForm);
		form.QuickForm = quickForm;
		var navigation = {
			msevtmgt_hotelroomreservation_adx_inviteredemptions: {},
			msevtmgt_hotelroomreservation_adx_portalcomments: {},
			msevtmgt_hotelroomreservation_Appointments: {},
			msevtmgt_hotelroomreservation_Emails: {},
			msevtmgt_hotelroomreservation_msdyn_bookingalerts: {},
			msevtmgt_hotelroomreservation_msdyn_copilottranscripts: {},
			msevtmgt_hotelroomreservation_msdyn_ocliveworkitems: {},
			msevtmgt_hotelroomreservation_msdyn_ocoutboundmessages: {},
			msevtmgt_hotelroomreservation_msdyn_ocsessions: {},
			msevtmgt_hotelroomreservation_msdyn_ocvoicemails: {},
			msevtmgt_hotelroomreservation_msfp_alerts: {},
			msevtmgt_hotelroomreservation_msfp_surveyinvites: {},
			msevtmgt_hotelroomreservation_msfp_surveyresponses: {},
			msevtmgt_hotelroomreservation_PhoneCalls: {},
			msevtmgt_hotelroomreservation_ServiceAppointments: {},
			msevtmgt_hotelroomreservation_Tasks: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.Formmsevtmgt_HotelRoomReservation_Quick_Create_Form = function(executionContext, defaultWebResourceName) {
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
			msevtmgt_Attendee: {},
			msevtmgt_EventTeamMemberId: {},
			msevtmgt_Guesttype: {},
			msevtmgt_HotelRoomAllocation: {},
			msevtmgt_Name: {},
			msevtmgt_RewardsProgramNumber: {},
			msevtmgt_SpeakerId: {},
			msevtmgt_SpecialRequests: {}
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
	OptionSet.msevtmgt_HotelRoomReservation = {
		msevtmgt_Guesttype : {
			Attendee: 100000000,
			Event_team_member: 100000002,
			Speaker: 100000001
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