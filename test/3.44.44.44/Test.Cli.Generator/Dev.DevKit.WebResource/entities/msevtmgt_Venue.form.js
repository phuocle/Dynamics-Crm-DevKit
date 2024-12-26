'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormVenue = function(executionContext, defaultWebResourceName) {
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
			AllVenueEvents: {},
			mapcontrol: {},
			msevtmgt_AccessibleToilets: {},
			msevtmgt_AdditionalFacilities: {},
			msevtmgt_AddressComposite: {},
			msevtmgt_AddressComposite1: {},
			msevtmgt_AddressLine1: {},
			msevtmgt_AddressLine11: {},
			msevtmgt_AddressLine2: {},
			msevtmgt_AddressLine21: {},
			msevtmgt_AddressLine3: {},
			msevtmgt_AddressLine31: {},
			msevtmgt_BuildingId: {},
			msevtmgt_BuildingId1: {},
			msevtmgt_City: {},
			msevtmgt_City1: {},
			msevtmgt_Cost: {},
			msevtmgt_Country: {},
			msevtmgt_Country1: {},
			msevtmgt_Description: {},
			msevtmgt_DisabledAccess: {},
			msevtmgt_DisabledParking: {},
			msevtmgt_Email: {},
			msevtmgt_layoutId: {},
			msevtmgt_layoutId1: {},
			msevtmgt_Name: {},
			msevtmgt_PostalCode: {},
			msevtmgt_PostalCode1: {},
			msevtmgt_PublicTelephoneAvailable: {},
			msevtmgt_RoomId: {},
			msevtmgt_RoomId1: {},
			msevtmgt_StateProvince: {},
			msevtmgt_StateProvince1: {},
			msevtmgt_Telephone1: {},
			msevtmgt_Telephone2: {},
			msevtmgt_Telephone3: {},
			msevtmgt_Website: {},
			msevtmgt_WifiAvailable: {},
			msevtmgt_WifiPassword: {},
			msevtmgt_WifiSSID: {},
			notescontrol: {},
			OwnerId: {},
			SubVenues: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			_DEB4BE92_D318_4F2D_819C_CB273A7415AC: {
				Section: {
					_4A049790_4139_4BCE_B4F8_80722AB41334: {},
					_DEB4BE92_D318_4F2D_819C_CB273A7415AC_SECTION_3: {},
					_DEB4BE92_D318_4F2D_819C_CB273A7415AC_SECTION_4: {}
				}
			},
			LocationTab: {
				Section: {
					LocationTab_section_1: {}
				}
			},
			SubVenuesTab: {
				Section: {
					MapSection: {},
					SubVenuesTab_section_1: {},
					SubVenuesTab_section_1_jp: {},
					SubVenuesTab_section_3: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			msevtmgt_City: {},
			msevtmgt_PrimaryContact: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
		var quickForm = {
			BuildingCapacity: {
				msevtmgt_EstimatedCapacity: {}
			},
			LayoutCapacity: {
				msevtmgt_Capacity: {}
			},
			RoomCapacity: {
				msevtmgt_Capacity: {}
			}
		};
		devKit.LoadQuickForms(formContext, quickForm);
		form.QuickForm = quickForm;
		var grid = {
			AllVenueEvents: {},
			SubVenues: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			msevtmgt_msevtmgt_venue_msevtmgt_venue: {},
			msevtmgt_venue_adx_inviteredemptions: {},
			msevtmgt_venue_adx_portalcomments: {},
			msevtmgt_venue_Appointments: {},
			msevtmgt_venue_Emails: {},
			msevtmgt_venue_msdyn_bookingalerts: {},
			msevtmgt_venue_msdyn_copilottranscripts: {},
			msevtmgt_venue_msdyn_ocliveworkitems: {},
			msevtmgt_venue_msdyn_ocoutboundmessages: {},
			msevtmgt_venue_msdyn_ocsessions: {},
			msevtmgt_venue_msdyn_ocvoicemails: {},
			msevtmgt_venue_msevtmgt_event_PrimaryVenue: {},
			msevtmgt_Venue_msevtmgt_Session_Venue: {},
			msevtmgt_venue_msfp_alerts: {},
			msevtmgt_venue_msfp_surveyinvites: {},
			msevtmgt_venue_msfp_surveyresponses: {},
			msevtmgt_venue_PhoneCalls: {},
			msevtmgt_venue_ServiceAppointments: {},
			msevtmgt_venue_Tasks: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.Formmsevtmgt_Venue_New_Form = function(executionContext, defaultWebResourceName) {
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
			msevtmgt_BuildingId: {},
			msevtmgt_Cost: {},
			msevtmgt_Description: {},
			msevtmgt_layoutId: {},
			msevtmgt_Name: {},
			msevtmgt_RoomId: {}
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
	OptionSet.msevtmgt_Venue = {
		msevtmgt_AccessibleToilets : {
			No: 100000002,
			Yes: 100000001
		},
		msevtmgt_DisabledAccess : {
			No: 100000002,
			Yes: 100000001
		},
		msevtmgt_DisabledParking : {
			No: 100000002,
			Yes: 100000001
		},
		msevtmgt_PublicTelephoneAvailable : {
			No: 100000002,
			Yes: 100000001
		},
		msevtmgt_WifiAvailable : {
			No: 100000002,
			Yes: 100000001
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