'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormSetup = function(executionContext, defaultWebResourceName) {
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
			CreatedOn: {},
			ModifiedBy: {},
			msdyncrm_description: {},
			msdyncrm_entitytarget: {},
			msdyncrm_insights_placeholder: {},
			msdyncrm_ModelDefinition: {},
			msdyncrm_name: {},
			msdyncrm_sourcesystem: {},
			msgdpr_RequiredConsent: {},
			notescontrol: {},
			OwnerId: {},
			statuscode: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			DesignTab: {
				Section: {
					DesignTab_section_1: {}
				}
			},
			insights: {
				Section: {
					insights_section: {}
				}
			},
			SummaryTab: {
				Section: {
					_59A8F01B_2C1F_4431_8BB5_A83F85A19AF7: {},
					SummaryTab_section_2: {},
					SummaryTab_section_3: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			msdyncrm_name: {},
			statuscode: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
		var navigation = {
			msdyncrm_leadscoremodel_adx_inviteredemptions: {},
			msdyncrm_leadscoremodel_adx_portalcomments: {},
			msdyncrm_leadscoremodel_Appointments: {},
			msdyncrm_leadscoremodel_Emails: {},
			msdyncrm_leadscoremodel_Feedback: {},
			msdyncrm_leadscoremodel_msdyn_bookingalerts: {},
			msdyncrm_leadscoremodel_msdyn_copilottranscripts: {},
			msdyncrm_leadscoremodel_msdyn_ocliveworkitems: {},
			msdyncrm_leadscoremodel_msdyn_ocoutboundmessages: {},
			msdyncrm_leadscoremodel_msdyn_ocsessions: {},
			msdyncrm_leadscoremodel_msdyn_ocvoicemails: {},
			msdyncrm_leadscoremodel_msfp_alerts: {},
			msdyncrm_leadscoremodel_msfp_surveyinvites: {},
			msdyncrm_leadscoremodel_msfp_surveyresponses: {},
			msdyncrm_leadscoremodel_PhoneCalls: {},
			msdyncrm_leadscoremodel_ServiceAppointments: {},
			msdyncrm_leadscoremodel_Tasks: {},
			msdyncrm_msdyncrm_leadscoremodel_msdyncrm_leadscore_v2: {}
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
	OptionSet.msdyncrm_leadscoremodel = {
		msdyncrm_entitytarget : {
			Account: 1,
			Contact: 0
		},
		msdyncrm_sourcesystem : {
			Outbound_marketing: 100000001,
			Real_time_Journeys: 100000002
		},
		msgdpr_RequiredConsent : {
			_1_Consent: 587030001,
			_2_Transactional: 587030002,
			_3_Subscriptions: 587030003,
			_4_Marketing: 587030004,
			_5_Profiling: 587030005
		},
		statecode : {
			Active: 0,
			Inactive: 1
		},
		statuscode : {
			Draft: 192350000,
			Error: 192350010,
			Expired: 192350004,
			Going_live: 192350011,
			Live: 192350001,
			Stopping: 192350012
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