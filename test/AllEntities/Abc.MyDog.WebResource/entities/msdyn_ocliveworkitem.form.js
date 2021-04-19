'use strict';
/** @namespace MyDog */
var MyDog;
(function (MyDog) {
	'use strict';
	MyDog.FormConversation_Form = function(executionContext, defaultWebResourceName) {
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
			msdyn_activeagentid: {},
			msdyn_cdsqueueid: {},
			msdyn_closedon: {},
			msdyn_createdon: {},
			msdyn_customer: {},
			msdyn_escalationcount: {},
			msdyn_liveworkstreamid: {},
			msdyn_modifiedon: {},
			msdyn_statusupdatedon: {},
			msdyn_title: {},
			msdyn_title_1: {},
			msdyn_TranscriptControl: {},
			msdyn_transfercount: {},
			RegardingObjectId: {},
			SessionDetails: {},
			StateCode: {},
			StatusCode: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			Details: {
				Section: {
					Details: {},
					Details_skills_5: {},
					tab_2_section_4: {},
					Details_section_4: {},
					tab_2_section_3: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var quickForm = {

		};
		devKit.LoadQuickForms(formContext, quickForm);
		form.QuickForm = quickForm;
		var grid = {
			SessionDetails: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			navConnections: {},
			navAudit: {},
			nav_msdyn_msdyn_ocliveworkitem_msdyn_ocliveworkitemcontextitem_ocliveworkitemid: {},
			nav_msdyn_msdyn_ocliveworkitem_msdyn_cdsentityengagementctx_liveworkitemid: {},
			nav_msdyn_msdyn_ocliveworkitem_msdyn_ocsession_liveworkstreamid: {},
			nav_msdyn_msdyn_ocliveworkitem_msdyn_transcript: {},
			nav_msdyn_msdyn_ocliveworkitem_msdyn_chatquestionnaireresponse: {},
			nav_msdyn_msdyn_ocliveworkitem_msdyn_livechatengagementctx_liveworkitemid: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		return form;
	};
	MyDog.FormCustomer_summary = function(executionContext, defaultWebResourceName) {
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
			KBSearchcontrol: {},
			msdyn_ConversationSummaryField: {},
			msdyn_customer: {},
			msdyn_customer_1: {},
			msdyn_customer_2: {},
			msdyn_IssueId: {},
			msdyn_IssueId_1: {},
			msdyn_TimelineControlField: {},
			notescontrol: {},
			OCSearchRuntimeControl: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			Details: {
				Section: {
					tab_2_section_1: {},
					Details_section_3: {},
					Details_section_4: {},
					tab_2_section_2: {}
				}
			},
			KBSearch: {
				Section: {
					tab_2_section_5: {}
				}
			},
			OCSearchRuntimeControl: {
				Section: {
					tab_3_section_5: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var quickForm = {
			CustomerProfile: {},
			IssueSnapshot: {},
			RecentCases: {}
		};
		devKit.LoadQuickForms(formContext, quickForm);
		form.QuickForm = quickForm;
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
	OptionSet.msdyn_ocliveworkitem = {
		Community : {
			Cortana: 5,
			Direct_Line: 6,
			Direct_Line_Speech: 8,
			Email: 9,
			Facebook: 1,
			GroupMe: 10,
			Kik: 11,
			Line: 3,
			Microsoft_Teams: 7,
			Other: 0,
			Skype: 13,
			Slack: 14,
			Telegram: 12,
			Twitter: 2,
			Wechat: 4,
			WhatsApp: 15
		},
		DeliveryPriorityCode : {
			High: 2,
			Low: 0,
			Normal: 1
		},
		InstanceTypeCode : {
			Not_Recurring: 0,
			Recurring_Exception: 3,
			Recurring_Future_Exception: 4,
			Recurring_Instance: 2,
			Recurring_Master: 1
		},
		msdyn_channel : {
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
		msdyn_customersentimentlabel : {
			NA: 0,
			Negative: 8,
			Neutral: 10,
			Positive: 12,
			Slightly_negative: 9,
			Slightly_positive: 11,
			Very_negative: 7,
			Very_positive: 13
		},
		msdyn_workstreamworkdistributionmode : {
			Pick: 192350001,
			Push: 192350000
		},
		PriorityCode : {
			High: 2,
			Low: 0,
			Normal: 1
		},
		StateCode : {
			Closed: 1,
			Open: 0,
			Resolved: 2,
			Scheduled: 3,
			Wrap_up_Deprecated: 4
		},
		StatusCode : {
			Active: 2,
			Closed: 4,
			Open: 1,
			Resolved: 6,
			Scheduled: 7,
			Waiting: 3,
			Wrap_up: 5
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