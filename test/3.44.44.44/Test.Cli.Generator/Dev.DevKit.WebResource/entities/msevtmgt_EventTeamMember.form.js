'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormEvent_team_member = function(executionContext, defaultWebResourceName) {
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
			EventsOverview: {},
			HotelRoomReservationsGrid: {},
			msevtmgt_Company: {},
			msevtmgt_Contact: {},
			msevtmgt_Contact1: {},
			msevtmgt_Description: {},
			msevtmgt_Email: {},
			msevtmgt_MemberType: {},
			msevtmgt_Name: {},
			msevtmgt_Phone: {},
			msevtmgt_Role: {},
			msevtmgt_User: {},
			OwnerId: {},
			SessionsOverview: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			_C248B7E9_11AB_4751_BDA5_E4E17E977412: {
				Section: {
					_C248B7E9_11AB_4751_BDA5_E4E17E977412_SECTION_3: {},
					_C248B7E9_11AB_4751_BDA5_E4E17E977412_SECTION_4: {},
					SessionsSection: {}
				}
			},
			HotelRoomReservationsTab: {
				Section: {
					HotelRoomReservationsSection: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			msevtmgt_MemberType: {},
			msevtmgt_Role: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
		var quickForm = {
			contactlookupquickviewform: {
				EMailAddress1: {},
				ParentCustomerId: {},
				Telephone1: {}
			}
		};
		devKit.LoadQuickForms(formContext, quickForm);
		form.QuickForm = quickForm;
		var grid = {
			EventsOverview: {},
			HotelRoomReservationsGrid: {},
			SessionsOverview: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			msevtmgt_eventteammember_hotelroomreservation: {},
			msevtmgt_EventTeamMember_msevtmgt_Session_Producer: {},
			msevtmgt_msevtmgt_eventteammember_msevtmgt_event_producer: {}
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
	OptionSet.msevtmgt_EventTeamMember = {
		msevtmgt_MemberType : {
			External_team_member: 100000001,
			Internal_team_member: 100000000
		},
		msevtmgt_Role : {
			Accommodation_management: 100000005,
			Catering_management: 100000008,
			Equipment_management: 100000009,
			Marketingevent_promotion: 100000006,
			Registration_management: 100000003,
			Security_management: 100000004,
			Session_Management: 100000001,
			Speaker_management: 100000002,
			Sponsorship_management: 100000007,
			Venue_management: 100000000
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