'use strict';
/** @namespace LuckyMokey */
var LuckyMokey;
(function (LuckyMokey) {
	'use strict';
	LuckyMokey.FormConversation_Form = function(executionContext, defaultWebResourceName) {
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
		return form;
	};
	LuckyMokey.FormCustomer_summary = function(executionContext, defaultWebResourceName) {
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
					tab_2_section_2_2: {}
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
		return form;
	};
})(LuckyMokey || (LuckyMokey = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_ocliveworkitem = {
		Community : {
			Facebook: 1,
			Twitter: 2,
			Other: 0
		},
		DeliveryPriorityCode : {
			Low: 0,
			Normal: 1,
			High: 2
		},
		InstanceTypeCode : {
			Not_Recurring: 0,
			Recurring_Master: 1,
			Recurring_Instance: 2,
			Recurring_Exception: 3,
			Recurring_Future_Exception: 4
		},
		msdyn_channel : {
			Entity_Records: 192350000,
			Live_chat: 192360000,
			Voice: 192370000,
			Video: 192380000,
			Co_browse: 192390000,
			Screen_sharing: 192400000,
			SMS: 192340000,
			Facebook: 192330000
		},
		msdyn_customersentimentlabel : {
			NA: 0,
			Very_negative: 7,
			Negative: 8,
			Slightly_negative: 9,
			Neutral: 10,
			Slightly_positive: 11,
			Positive: 12,
			Very_positive: 13
		},
		PriorityCode : {
			Low: 0,
			Normal: 1,
			High: 2
		},
		StateCode : {
			Open: 0,
			Active: 1,
			Waiting: 2,
			Closed: 3,
			Wrap_up: 4
		},
		StatusCode : {
			Open: 1,
			Active: 2,
			Waiting: 3,
			Closed: 4,
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