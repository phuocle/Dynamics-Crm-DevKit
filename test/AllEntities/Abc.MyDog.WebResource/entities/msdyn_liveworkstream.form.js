'use strict';
/** @namespace MyDog */
var MyDog;
(function (MyDog) {
	'use strict';
	MyDog.Formmsdyn_liveworkstream_Information = function(executionContext, defaultWebResourceName) {
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
			msdyn_allowedpresencehelptext: {},
			msdyn_AllowedPresences: {},
			msdyn_APIKey: {},
			msdyn_AssignWorkItemAfterDecline: {},
			msdyn_AutoCloseAfterInactivity: {},
			msdyn_CapacityRequired: {},
			msdyn_ConnectorsURL: {},
			msdyn_CustomerID: {},
			msdyn_enableagentaffinity: {},
			msdyn_enableagentAffinityhelptext: {},
			msdyn_enableselectingfrompushbasedworkstreams: {},
			msdyn_EntityRoutingConfigurationId: {},
			msdyn_LastValidationOn: {},
			msdyn_LastValidationStatus: {},
			msdyn_matchinglogic: {},
			msdyn_MaxConcurrentConnection: {},
			msdyn_name: {},
			msdyn_Notification: {},
			msdyn_notificationtemplate_consult: {},
			msdyn_notificationtemplate_incoming_auth: {},
			msdyn_notificationtemplate_incoming_unauth: {},
			msdyn_notificationtemplate_supervisorassign: {},
			msdyn_notificationtemplate_transfer: {},
			msdyn_Screenpoptimeout_optionSet: {},
			msdyn_sessiontemplate_default: {},
			msdyn_smsprovider: {},
			msdyn_streamsource: {},
			msdyn_TelesignInboundURL: {},
			msdyn_TwilioInboundURL: {},
			msdyn_workdistributionmode: {},
			quickreplies: {},
			RuleItems: {},
			SMSNumbers: {},
			WebResource_HelpDialog: {}
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
			tab_templates: {
				Section: {
					tab_templates_section_1: {},
					tab_templates_section_2: {}
				}
			},
			BotAssistedAgentGuidance: {
				Section: {
					tab_4_section_1: {}
				}
			},
			quickReplies: {
				Section: {
					tab_6_section_1: {}
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
		var grid = {
			contextvariables: {},
			SMSNumbers: {},
			AttachmentRulesSubGrid: {},
			RuleItems: {},
			BotAssistedAgentGuidanceSubGrid: {},
			quickreplies: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {

		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		return form;
	};
})(MyDog || (MyDog = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_liveworkstream = {
		msdyn_AllowedPresences : {
			Available: 192360000,
			Away: 192360003,
			Busy: 192360001,
			Busy_DND: 192360002,
			Offline: 192360004
		},
		msdyn_matchinglogic : {
			Closest_Match: 192350001,
			Exact_Match: 192350000
		},
		msdyn_Notification : {
			Directly_open_session: 100000000,
			Screen_pop_with_decline: 100000002,
			Screen_pop_with_timeout: 100000001
		},
		msdyn_Screenpoptimeout_optionSet : {
			_120: 120,
			_150: 150,
			_180: 180,
			_210: 210,
			_240: 240,
			_270: 270,
			_30: 30,
			_300: 300,
			_60: 60,
			_90: 90
		},
		msdyn_smsprovider : {
			TeleSign: 192350000,
			Twilio: 192350001
		},
		msdyn_streamsource : {
			Co_browse: 192390000,
			Custom: 192350002,
			Entity_Records: 192350000,
			Facebook: 192330000,
			LINE: 192310000,
			Live_chat: 192360000,
			Microsoft_Teams: 19241000,
			Screen_sharing: 192400000,
			SMS: 192340000,
			Twitter: 192350001,
			Video: 192380000,
			Voice: 192370000,
			WeChat: 192320000,
			WhatsApp: 192300000
		},
		msdyn_workdistributionmode : {
			Pick: 192350001,
			Push: 192350000
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