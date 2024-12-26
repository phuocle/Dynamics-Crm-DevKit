'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsevtmgt_speakerengagement_Information = function(executionContext, defaultWebResourceName) {
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
			msevtmgt_description: {},
			msevtmgt_endtime: {},
			msevtmgt_event: {},
			msevtmgt_name: {},
			msevtmgt_Session: {},
			msevtmgt_Speaker: {},
			msevtmgt_Speakercost: {},
			msevtmgt_starttime: {},
			notescontrol: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			GeneralTab: {
				Section: {
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			OwnerId: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
		var navigation = {
			msevtmgt_speakerengagement_adx_inviteredemptions: {},
			msevtmgt_speakerengagement_adx_portalcomments: {},
			msevtmgt_speakerengagement_Appointments: {},
			msevtmgt_speakerengagement_Emails: {},
			msevtmgt_speakerengagement_msdyn_bookingalerts: {},
			msevtmgt_speakerengagement_msdyn_copilottranscripts: {},
			msevtmgt_speakerengagement_msdyn_ocliveworkitems: {},
			msevtmgt_speakerengagement_msdyn_ocoutboundmessages: {},
			msevtmgt_speakerengagement_msdyn_ocsessions: {},
			msevtmgt_speakerengagement_msdyn_ocvoicemails: {},
			msevtmgt_speakerengagement_msfp_alerts: {},
			msevtmgt_speakerengagement_msfp_surveyinvites: {},
			msevtmgt_speakerengagement_msfp_surveyresponses: {},
			msevtmgt_speakerengagement_PhoneCalls: {},
			msevtmgt_speakerengagement_ServiceAppointments: {},
			msevtmgt_speakerengagement_Tasks: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.Formmsevtmgt_speakerengagement_Quick_Create_Form = function(executionContext, defaultWebResourceName) {
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
			msevtmgt_event: {},
			msevtmgt_name: {},
			msevtmgt_Session: {},
			msevtmgt_Speaker: {},
			msevtmgt_Speakercost: {},
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
	OptionSet.msevtmgt_speakerengagement = {
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