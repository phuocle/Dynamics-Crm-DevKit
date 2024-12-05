'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsevtmgt_Hotel_Information = function(executionContext, defaultWebResourceName) {
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
			msevtmgt_AddressLine1: {},
			msevtmgt_AddressLine11: {},
			msevtmgt_AddressLine2: {},
			msevtmgt_AddressLine21: {},
			msevtmgt_AddressLine3: {},
			msevtmgt_AddressLine31: {},
			msevtmgt_City: {},
			msevtmgt_City1: {},
			msevtmgt_Country: {},
			msevtmgt_Country1: {},
			msevtmgt_Description: {},
			msevtmgt_Facilities: {},
			msevtmgt_HotelGroup: {},
			msevtmgt_HotelGroup1: {},
			msevtmgt_Name: {},
			msevtmgt_PrimaryContact: {},
			msevtmgt_PrimaryContact1: {},
			msevtmgt_RoomAllocations: {},
			msevtmgt_StateProvince: {},
			msevtmgt_StateProvince1: {},
			msevtmgt_Website: {},
			msevtmgt_ZIPPostalCode: {},
			msevtmgt_ZIPPostalCode1: {},
			notescontrol: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			_D81D6645_D5B5_4C03_A211_2F576722CA7D: {
				Section: {
					_D81D6645_D5B5_4C03_A211_2F576722CA7D_SECTION_3: {},
					_D81D6645_D5B5_4C03_A211_2F576722CA7D_SECTION_3_JP: {},
					_D81D6645_D5B5_4C03_A211_2F576722CA7D_SECTION_4: {}
				}
			},
			RoomTab: {
				Section: {
					RoomTab_section_1: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var quickForm = {
			msevtmgt_contact: {
				EMailAddress1: {},
				FirstName: {},
				LastName: {},
				MobilePhone: {},
				ParentCustomerId: {}
			},
			msevtmgt_eventvendor: {
				msevtmgt_Account: {},
				msevtmgt_name: {},
				msevtmgt_Type: {}
			}
		};
		devKit.LoadQuickForms(formContext, quickForm);
		form.QuickForm = quickForm;
		var grid = {
			msevtmgt_RoomAllocations: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			msevtmgt_hotel_adx_inviteredemptions: {},
			msevtmgt_hotel_adx_portalcomments: {},
			msevtmgt_hotel_Appointments: {},
			msevtmgt_hotel_Emails: {},
			msevtmgt_hotel_msdyn_bookingalerts: {},
			msevtmgt_hotel_msdyn_copilottranscripts: {},
			msevtmgt_hotel_msdyn_ocliveworkitems: {},
			msevtmgt_hotel_msdyn_ocoutboundmessages: {},
			msevtmgt_hotel_msdyn_ocsessions: {},
			msevtmgt_hotel_msdyn_ocvoicemails: {},
			msevtmgt_hotel_msfp_alerts: {},
			msevtmgt_hotel_msfp_surveyinvites: {},
			msevtmgt_hotel_msfp_surveyresponses: {},
			msevtmgt_hotel_PhoneCalls: {},
			msevtmgt_hotel_ServiceAppointments: {},
			msevtmgt_hotel_Tasks: {},
			msevtmgt_msevtmgt_hotel_hotelroomallocation_HotelProperty: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.Formmsevtmgt_Hotel_Quick_Create_Form = function(executionContext, defaultWebResourceName) {
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
			msevtmgt_AddressLine1: {},
			msevtmgt_AddressLine11: {},
			msevtmgt_AddressLine2: {},
			msevtmgt_AddressLine21: {},
			msevtmgt_AddressLine3: {},
			msevtmgt_AddressLine31: {},
			msevtmgt_City: {},
			msevtmgt_City1: {},
			msevtmgt_Country: {},
			msevtmgt_Country1: {},
			msevtmgt_Description: {},
			msevtmgt_Facilities: {},
			msevtmgt_HotelGroup: {},
			msevtmgt_Name: {},
			msevtmgt_PrimaryContact: {},
			msevtmgt_StateProvince: {},
			msevtmgt_StateProvince1: {},
			msevtmgt_ZIPPostalCode: {},
			msevtmgt_ZIPPostalCode1: {}
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
	OptionSet.msevtmgt_Hotel = {
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