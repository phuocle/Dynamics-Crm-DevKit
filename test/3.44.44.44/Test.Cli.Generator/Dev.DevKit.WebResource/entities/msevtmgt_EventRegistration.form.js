'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsevtmgt_EventRegistration_Information = function(executionContext, defaultWebResourceName) {
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
			AttendeePasses: {},
			Attendees: {},
			Checkins_by_Industry: {},
			Checkins_by_Role: {},
			Checkins_by_SessionType: {},
			CreatedOn: {},
			msevtmgt_Area: {},
			msevtmgt_CompanySize: {},
			msevtmgt_ContactId: {},
			msevtmgt_ContactId1: {},
			msevtmgt_EventId: {},
			msevtmgt_Industry: {},
			msevtmgt_iscanceled: {},
			msevtmgt_Name: {},
			msevtmgt_PrimaryRole: {},
			msevtmgt_qrcode: {},
			msevtmgt_registrationnotificationseen: {},
			msevtmgt_registrationstatus: {},
			msevtmgt_WebinarRegistrationID: {},
			msevtmgt_YearsInIndustry: {},
			notescontrol: {},
			OwnerId: {},
			Registration_Responses: {},
			Session_Registrations: {},
			Sessions_Eligible_With_Pass: {},
			WebResource_QRCodeWrapper: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			GeneralTab: {
				Section: {
					_0AC965CC_F4C1_44D5_B2A2_C7235987D6AB_SECTION_3: {},
					_0AC965CC_F4C1_44D5_B2A2_C7235987D6AB_SECTION_4: {},
					_B8FB35BE_1401_4F23_8A93_62E520C669AD: {}
				}
			},
			RegistrationResponsesTab: {
				Section: {
					registration_responses_section: {}
				}
			},
			SessionCheckinTab: {
				Section: {
					SessionCheckinTab_section_1: {},
					SessionCheckinTab_section_2: {}
				}
			},
			SessionEligibleTab: {
				Section: {
					eligible_sessions_section: {}
				}
			},
			SessionRegistrationTab: {
				Section: {
					session_registrations_section: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			CreatedBy: {},
			CreatedOn: {},
			statecode: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
		var quickForm = {
			CompanyForContact: {
				ParentCustomerId: {}
			}
		};
		devKit.LoadQuickForms(formContext, quickForm);
		form.QuickForm = quickForm;
		var grid = {
			AttendeePasses: {},
			Attendees: {},
			Checkins_by_Industry: {},
			Checkins_by_Role: {},
			Checkins_by_SessionType: {},
			Registration_Responses: {},
			Session_Registrations: {},
			Sessions_Eligible_With_Pass: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			msdynmkt_marketingformsubmission_eventregistration: {},
			msevtmgt_eventregistration_adx_inviteredemptions: {},
			msevtmgt_eventregistration_adx_portalcomments: {},
			msevtmgt_eventregistration_Appointments: {},
			msevtmgt_EventRegistration_AttendeePass: {},
			msevtmgt_eventregistration_Emails: {},
			msevtmgt_eventregistration_msdyn_bookingalerts: {},
			msevtmgt_eventregistration_msdyn_copilottranscripts: {},
			msevtmgt_eventregistration_msdyn_ocliveworkitems: {},
			msevtmgt_eventregistration_msdyn_ocoutboundmessages: {},
			msevtmgt_eventregistration_msdyn_ocsessions: {},
			msevtmgt_eventregistration_msdyn_ocvoicemails: {},
			msevtmgt_eventregistration_msevtmgt_checkin_RegistrationId: {},
			msevtmgt_EventRegistration_msevtmgt_eventpurchaseattendee: {},
			msevtmgt_eventregistration_msevtmgt_hotelroomreservation_Attendee: {},
			msevtmgt_eventregistration_msevtmgt_sessionregistration_RegistrationID: {},
			msevtmgt_EventRegistration_msevtmgt_Speaker: {},
			msevtmgt_eventregistration_msfp_alerts: {},
			msevtmgt_eventregistration_msfp_surveyinvites: {},
			msevtmgt_eventregistration_msfp_surveyresponses: {},
			msevtmgt_eventregistration_PhoneCalls: {},
			msevtmgt_eventregistration_ServiceAppointments: {},
			msevtmgt_eventregistration_Tasks: {},
			msevtmgt_msevtmgt_eventregistration_msevtmgt_registrationresponse_eventregistration: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormEvent_registration_quick_create = function(executionContext, defaultWebResourceName) {
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
			msevtmgt_ContactId: {},
			msevtmgt_EventId: {},
			msevtmgt_PrimaryRole: {}
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
	OptionSet.msevtmgt_EventRegistration = {
		msevtmgt_Area : {
			Administration: 100000000,
			Customer_service: 100000001,
			Executivemanagement: 100000002,
			Finance: 100000004,
			HR: 100000005,
			IT: 100000006,
			Legal: 100000007,
			Logistics: 100000003,
			Marketing: 100000008,
			Sales: 100000009
		},
		msevtmgt_CompanySize : {
			_10001_or_more: 100000008,
			_1001_to_2500: 100000005,
			_101_to_250: 100000002,
			_2501_to_5000: 100000006,
			_251_to_500: 100000003,
			_50_or_less: 100000000,
			_5001_to_10000: 100000007,
			_501_to_1000: 100000004,
			_51_to_100: 100000001
		},
		msevtmgt_Industry : {
			Architecture_and_engineering: 100000000,
			Financial_services: 100000001,
			Manufacturing: 100000002,
			Media_entertainment: 100000003,
			Other: 100000008,
			Professional_services: 100000004,
			Public_sector: 100000005,
			Retail: 100000006,
			Wholesale_and_distribution: 100000007
		},
		msevtmgt_internalregistrationstatus : {
			New: 100000000,
			Ready: 100000001
		},
		msevtmgt_PrimaryRole : {
			Attendee: 100000000,
			Journalist: 100000001,
			Other: 100000002
		},
		msevtmgt_publishingstate : {
			Failed_to_publish: 100000003,
			Parent_webinar_failed: 100000002,
			Pending: 100000000,
			Published: 100000001,
			Webinar_provider_error: 100000004
		},
		msevtmgt_SyncedWithProvider : {
			No: 100000001,
			Yes: 100000002
		},
		msevtmgt_YearsInIndustry : {
			_1_to_5_years: 100000001,
			_5_to_10_years: 100000002,
			Over_10_years: 100000003,
			Under_one_year: 100000000
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