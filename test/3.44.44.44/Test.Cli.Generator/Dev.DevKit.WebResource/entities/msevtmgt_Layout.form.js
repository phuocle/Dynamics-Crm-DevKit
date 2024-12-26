'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormLayout = function(executionContext, defaultWebResourceName) {
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
			msevtmgt_Capacity: {},
			msevtmgt_Description: {},
			msevtmgt_DisabledAccess: {},
			msevtmgt_DisabledCapacity: {},
			msevtmgt_FloorPlan: {},
			msevtmgt_Name: {},
			msevtmgt_Room: {},
			msevtmgt_Units: {},
			msevtmgt_UsableArea: {},
			notescontrol: {},
			OwnerId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {

		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			msevtmgt_Capacity: {},
			msevtmgt_DisabledAccess: {},
			msevtmgt_Room: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
		var navigation = {
			msevtmgt_event_layout: {},
			msevtmgt_layout_adx_inviteredemptions: {},
			msevtmgt_layout_adx_portalcomments: {},
			msevtmgt_layout_Appointments: {},
			msevtmgt_layout_Emails: {},
			msevtmgt_layout_msdyn_bookingalerts: {},
			msevtmgt_layout_msdyn_copilottranscripts: {},
			msevtmgt_layout_msdyn_ocliveworkitems: {},
			msevtmgt_layout_msdyn_ocoutboundmessages: {},
			msevtmgt_layout_msdyn_ocsessions: {},
			msevtmgt_layout_msdyn_ocvoicemails: {},
			msevtmgt_layout_msfp_alerts: {},
			msevtmgt_layout_msfp_surveyinvites: {},
			msevtmgt_layout_msfp_surveyresponses: {},
			msevtmgt_layout_PhoneCalls: {},
			msevtmgt_layout_ServiceAppointments: {},
			msevtmgt_layout_Tasks: {},
			msevtmgt_msevtmgt_layout_msevtmgt_venue: {},
			msevtmgt_session_layout: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormLayout_quick_create_form = function(executionContext, defaultWebResourceName) {
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
			msevtmgt_Capacity: {},
			msevtmgt_Description: {},
			msevtmgt_DisabledAccess: {},
			msevtmgt_FloorPlan: {},
			msevtmgt_Name: {},
			msevtmgt_Room: {}
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
	OptionSet.msevtmgt_Layout = {
		msevtmgt_DisabledAccess : {
			No: 100000002,
			Yes: 100000001
		},
		msevtmgt_FloorPlan : {
			Banquet: 100000007,
			Boardroom: 100000006,
			Booth: 100000010,
			Cabaret: 100000008,
			Classroom: 100000001,
			Cocktail: 100000009,
			Herringbone: 100000002,
			Hollow_square: 100000005,
			Horse_shoe: 100000004,
			Theater: 100000000,
			U_shape: 100000003
		},
		msevtmgt_Units : {
			Sq_feet: 100000001,
			Sq_meters: 100000000
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