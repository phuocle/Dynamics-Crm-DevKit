'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormSponsorship = function(executionContext, defaultWebResourceName) {
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
			event_information_summary: {},
			msevtmgt_Description: {},
			msevtmgt_Event: {},
			msevtmgt_Event1: {},
			msevtmgt_Name: {},
			msevtmgt_Sponsor: {},
			msevtmgt_SponsorshipAmount: {},
			msevtmgt_SponsorshipCategory: {},
			msevtmgt_SponsorshipType: {},
			notescontrol: {},
			OwnerId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			_1F446D03_F3A5_48B0_83C9_BAE7DD7BEED8: {
				Section: {
					_1F446D03_F3A5_48B0_83C9_BAE7DD7BEED8_SECTION_3: {},
					_1F446D03_F3A5_48B0_83C9_BAE7DD7BEED8_SECTION_4: {},
					_4EABCD18_9CA9_4B53_BC34_51EFAF27EE29: {},
					_5E6F0C41_B9B3_4550_956F_3A71CFCDA998: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			msevtmgt_Event: {},
			msevtmgt_Sponsor: {},
			msevtmgt_SponsorshipCategory: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
		var quickForm = {
			EventInformation: {
				msevtmgt_building: {},
				msevtmgt_EventEndDate: {},
				msevtmgt_EventStartDate: {},
				msevtmgt_Name: {},
				msevtmgt_PrimaryGoal: {}
			}
		};
		devKit.LoadQuickForms(formContext, quickForm);
		form.QuickForm = quickForm;
		var grid = {
			event_information_summary: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			msevtmgt_sponsorablearticle_sponsorship: {},
			msevtmgt_sponsorship_adx_inviteredemptions: {},
			msevtmgt_sponsorship_adx_portalcomments: {},
			msevtmgt_sponsorship_Appointments: {},
			msevtmgt_sponsorship_Emails: {},
			msevtmgt_sponsorship_msdyn_bookingalerts: {},
			msevtmgt_sponsorship_msdyn_copilottranscripts: {},
			msevtmgt_sponsorship_msdyn_ocliveworkitems: {},
			msevtmgt_sponsorship_msdyn_ocoutboundmessages: {},
			msevtmgt_sponsorship_msdyn_ocsessions: {},
			msevtmgt_sponsorship_msdyn_ocvoicemails: {},
			msevtmgt_sponsorship_msfp_alerts: {},
			msevtmgt_sponsorship_msfp_surveyinvites: {},
			msevtmgt_sponsorship_msfp_surveyresponses: {},
			msevtmgt_sponsorship_PhoneCalls: {},
			msevtmgt_sponsorship_ServiceAppointments: {},
			msevtmgt_sponsorship_Tasks: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.Formmsevtmgt_Sponsorship_Quick_Create_Form = function(executionContext, defaultWebResourceName) {
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
			msevtmgt_Description: {},
			msevtmgt_Event: {},
			msevtmgt_Name: {},
			msevtmgt_Sponsor: {},
			msevtmgt_SponsorshipAmount: {},
			msevtmgt_SponsorshipCategory: {},
			msevtmgt_SponsorshipType: {},
			OwnerId: {}
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
	OptionSet.msevtmgt_Sponsorship = {
		msevtmgt_SponsorshipCategory : {
			Bronze: 100000003,
			Gold: 100000001,
			Platinum: 100000000,
			Silver: 100000002
		},
		msevtmgt_SponsorshipType : {
			Equipment: 100000002,
			Monetary: 100000000,
			Services: 100000001
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