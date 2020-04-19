'use strict';
/** @namespace LuckyMokey */
var LuckyMokey;
(function (LuckyMokey) {
	'use strict';
	LuckyMokey.Formmsdyn_liveworkstream_Information = function(executionContext, defaultWebResourceName) {
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
			AttachmentRulesSubGrid: {},
			BotAssistedAgentGuidanceSubGrid: {},
			contextvariables: {},
			msdyn_AllowedPresences: {},
			msdyn_APIKey: {},
			msdyn_AssignWorkItemAfterDecline: {},
			msdyn_AutoCloseAfterInactivity: {},
			msdyn_CapacityRequired: {},
			msdyn_ConnectorsURL: {},
			msdyn_CustomerID: {},
			msdyn_enableautomatedmessages: {},
			msdyn_EntityRoutingConfigurationId: {},
			msdyn_LastValidationOn: {},
			msdyn_LastValidationStatus: {},
			msdyn_matchinglogic: {},
			msdyn_MaxConcurrentConnection: {},
			msdyn_name: {},
			msdyn_Notification: {},
			msdyn_notificationscenarioplaceholder: {},
			msdyn_Screenpoptimeout_optionSet: {},
			msdyn_sessionscenarioplaceholder: {},
			msdyn_smsprovider: {},
			msdyn_streamsource: {},
			msdyn_TelesignInboundURL: {},
			msdyn_TwilioInboundURL: {},
			msdyn_workdistributionmode: {},
			RuleItems: {},
			SMSNumbers: {},
			WebResource_HelpDialog: {},
			WebResource_TwilioDisclaimer: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			tab1_summary: {
				Section: {
					tab_3_section_1: {},
					tab1_summary_section_6: {}
				}
			},
			tab_3: {
				Section: {
					tab_3_section_2: {}
				}
			},
			smsSettings: {
				Section: {
					SMSProviderDetails: {},
					RESTAPIDetails: {},
					SMSConnectionParameters: {},
					MSFlowOutboundNotifications: {}
				}
			},
			smsNumbers: {
				Section: {
					tab_4_section_1: {}
				}
			},
			SkillAttachmentRulesTab: {
				Section: {
					SkillAttachmentSection: {}
				}
			},
			RoutingRuleItems: {
				Section: {
				}
			},
			BotAssistedAgentGuidance: {
				Section: {
					tab_4_section_1: {}
				}
			},
			tab_templates: {
				Section: {
					tab_templates_section_1: {},
					tab_templates_section_2: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			msdyn_streamsource: {},
			msdyn_workdistributionmode: {},
			OwnerId: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
		var quickForm = {

		};
		devKit.LoadQuickForms(formContext, quickForm);
		form.QuickForm = quickForm;
		var navigation = {

		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		return form;
	};
})(LuckyMokey || (LuckyMokey = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_liveworkstream = {
		msdyn_AllowedPresences : {
			Available: 192360000,
			Busy: 192360001,
			Busy_DND: 192360002,
			Away: 192360003,
			Offline: 192360004
		},
		msdyn_matchinglogic : {
			Exact_Match: 192350000,
			Closest_Match: 192350001
		},
		msdyn_Notification : {
			Directly_open_session: 100000000,
			Screen_pop_with_timeout: 100000001,
			Screen_pop_with_decline: 100000002
		},
		msdyn_Screenpoptimeout_optionSet : {
			_30: 30,
			_60: 60,
			_90: 90,
			_120: 120,
			_150: 150,
			_180: 180,
			_210: 210,
			_240: 240,
			_270: 270,
			_300: 300
		},
		msdyn_smsprovider : {
			TeleSign: 192350000
		},
		msdyn_streamsource : {
			Entity_Records: 192350000,
			Live_chat: 192360000,
			Voice: 192370000,
			Video: 192380000,
			Co_browse: 192390000,
			Screen_sharing: 192400000,
			SMS: 192340000,
			Facebook: 192330000
		},
		msdyn_workdistributionmode : {
			Push: 192350000,
			Pick: 192350001
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