﻿'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdyn_liveworkstream_Information = function(executionContext, defaultWebResourceName) {
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
			msdyn_capacityformat: {},
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
			BotAssistedAgentGuidance: {
				Section: {
					tab_4_section_1: {}
				}
			},
			quickReplies: {
				Section: {
					tab_6_section_1: {}
				}
			},
			RoutingRuleItems: {
				Section: {
				}
			},
			SkillAttachmentRulesTab: {
				Section: {
					SkillAttachmentSection: {}
				}
			},
			smsNumbers: {
				Section: {
					tab_4_section_1: {}
				}
			},
			smsSettings: {
				Section: {
					MSFlowOutboundNotifications: {},
					RESTAPIDetails: {},
					SMSConnectionParameters: {},
					SMSProviderDetails: {}
				}
			},
			tab_3: {
				Section: {
					tab_3_section_2: {}
				}
			},
			tab_templates: {
				Section: {
					tab_templates_section_1: {},
					tab_templates_section_2: {}
				}
			},
			tab1_summary: {
				Section: {
					tab_3_section_1: {},
					tab1_summary_section_6: {}
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
		var process = devKit.LoadProcess(formContext);
		form.Process = process;
		var grid = {
			AttachmentRulesSubGrid: {},
			BotAssistedAgentGuidanceSubGrid: {},
			contextvariables: {},
			quickreplies: {},
			RuleItems: {},
			SMSNumbers: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormInformation_New = function(executionContext, defaultWebResourceName) {
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
			msdyn_streamsource: {}
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
		var process = devKit.LoadProcess(formContext);
		form.Process = process;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
})(DevKit || (DevKit = {}));
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
		msdyn_capacityformat : {
			Profile_based: 192360000,
			Unit_based: 192350000
		},
		msdyn_conversationmode : {
			Live_Chat: 192350000,
			Persistent_Chat: 192350001
		},
		msdyn_direction : {
			Inbound: 0,
			Outbound: 1
		},
		msdyn_matchinglogic : {
			Closest_Match: 192350001,
			Exact_Match: 192350000
		},
		msdyn_mode : {
			Legacy: 717210000,
			Simplified: 717210001
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
			Apple_Messages_for_Business: 192450000,
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
		OwnerIdType : {
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