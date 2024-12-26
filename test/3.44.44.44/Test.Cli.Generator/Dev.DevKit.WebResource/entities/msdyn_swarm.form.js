'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdyn_swarm_Information = function(executionContext, defaultWebResourceName) {
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
			msdyn_name: {},
			OwnerId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {

		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var navigation = {
			msdyn_msdyn_swarm_msdyn_swarmparticipant_swarmid: {},
			msdyn_msdyn_swarm_msdyn_swarmskill_swarmid: {},
			msdyn_swarm_adx_inviteredemptions: {},
			msdyn_swarm_adx_portalcomments: {},
			msdyn_swarm_Appointments: {},
			msdyn_swarm_Emails: {},
			msdyn_swarm_msdyn_bookingalerts: {},
			msdyn_swarm_msdyn_copilottranscripts: {},
			msdyn_swarm_msdyn_ocliveworkitems: {},
			msdyn_swarm_msdyn_ocoutboundmessages: {},
			msdyn_swarm_msdyn_ocsessions: {},
			msdyn_swarm_msdyn_ocvoicemails: {},
			msdyn_swarm_msfp_alerts: {},
			msdyn_swarm_msfp_surveyinvites: {},
			msdyn_swarm_msfp_surveyresponses: {},
			msdyn_swarm_PhoneCalls: {},
			msdyn_swarm_Posts: {},
			msdyn_swarm_ServiceAppointments: {},
			msdyn_swarm_Tasks: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormSwarm_form = function(executionContext, defaultWebResourceName) {
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
			msdyn_swarmrelatedrecordid: {},
			msdyn_swarmrelatedrecordid1: {},
			notescontrol: {},
			swarmingHubHostControl: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			Swarming: {
				Section: {
					Related_record_section: {},
					swarming_section: {}
				}
			},
			Timeline: {
				Section: {
					swarm_timeline_section: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			CreatedOn: {},
			msdyn_name: {},
			OwnerId: {},
			statuscode: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
		var navigation = {
			msdyn_msdyn_swarm_msdyn_swarmparticipant_swarmid: {},
			msdyn_msdyn_swarm_msdyn_swarmskill_swarmid: {},
			msdyn_swarm_adx_inviteredemptions: {},
			msdyn_swarm_adx_portalcomments: {},
			msdyn_swarm_Appointments: {},
			msdyn_swarm_Emails: {},
			msdyn_swarm_msdyn_bookingalerts: {},
			msdyn_swarm_msdyn_copilottranscripts: {},
			msdyn_swarm_msdyn_ocliveworkitems: {},
			msdyn_swarm_msdyn_ocoutboundmessages: {},
			msdyn_swarm_msdyn_ocsessions: {},
			msdyn_swarm_msdyn_ocvoicemails: {},
			msdyn_swarm_msfp_alerts: {},
			msdyn_swarm_msfp_surveyinvites: {},
			msdyn_swarm_msfp_surveyresponses: {},
			msdyn_swarm_PhoneCalls: {},
			msdyn_swarm_Posts: {},
			msdyn_swarm_ServiceAppointments: {},
			msdyn_swarm_Tasks: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormSwarm_full_page_control = function(executionContext, defaultWebResourceName) {
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
			msdyn_swarm: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			tab1_summary: {
				Section: {
					tab_3_section_1: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var navigation = {
			msdyn_msdyn_swarm_msdyn_swarmparticipant_swarmid: {},
			msdyn_msdyn_swarm_msdyn_swarmskill_swarmid: {},
			msdyn_swarm_adx_inviteredemptions: {},
			msdyn_swarm_adx_portalcomments: {},
			msdyn_swarm_Appointments: {},
			msdyn_swarm_Emails: {},
			msdyn_swarm_msdyn_bookingalerts: {},
			msdyn_swarm_msdyn_copilottranscripts: {},
			msdyn_swarm_msdyn_ocliveworkitems: {},
			msdyn_swarm_msdyn_ocoutboundmessages: {},
			msdyn_swarm_msdyn_ocsessions: {},
			msdyn_swarm_msdyn_ocvoicemails: {},
			msdyn_swarm_msfp_alerts: {},
			msdyn_swarm_msfp_surveyinvites: {},
			msdyn_swarm_msfp_surveyresponses: {},
			msdyn_swarm_PhoneCalls: {},
			msdyn_swarm_Posts: {},
			msdyn_swarm_ServiceAppointments: {},
			msdyn_swarm_Tasks: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormTimeline_swarm_form = function(executionContext, defaultWebResourceName) {
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
			notescontrol: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			tab1_summary: {
				Section: {
					tab_3_section_1: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var navigation = {
			msdyn_msdyn_swarm_msdyn_swarmparticipant_swarmid: {},
			msdyn_msdyn_swarm_msdyn_swarmskill_swarmid: {},
			msdyn_swarm_adx_inviteredemptions: {},
			msdyn_swarm_adx_portalcomments: {},
			msdyn_swarm_Appointments: {},
			msdyn_swarm_Emails: {},
			msdyn_swarm_msdyn_bookingalerts: {},
			msdyn_swarm_msdyn_copilottranscripts: {},
			msdyn_swarm_msdyn_ocliveworkitems: {},
			msdyn_swarm_msdyn_ocoutboundmessages: {},
			msdyn_swarm_msdyn_ocsessions: {},
			msdyn_swarm_msdyn_ocvoicemails: {},
			msdyn_swarm_msfp_alerts: {},
			msdyn_swarm_msfp_surveyinvites: {},
			msdyn_swarm_msfp_surveyresponses: {},
			msdyn_swarm_PhoneCalls: {},
			msdyn_swarm_Posts: {},
			msdyn_swarm_ServiceAppointments: {},
			msdyn_swarm_Tasks: {}
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
	OptionSet.msdyn_swarm = {
		msdyn_swarmrelatedrecordidIdType : {
		},
		statecode : {
			Active: 0,
			Cancelled: 2,
			Resolved: 1
		},
		statuscode : {
			Active: 192350000,
			Case_resolved: 192350002,
			Duplicate_swarm: 192350004,
			No_one_joined: 192350003,
			Resolved: 192350001,
			System_cancelled: 192350006,
			System_resolved: 192350005
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