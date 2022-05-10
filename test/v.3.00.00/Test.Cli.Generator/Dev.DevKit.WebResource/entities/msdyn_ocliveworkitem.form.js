'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormConversation_Form = function(executionContext, defaultWebResourceName) {
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
			msdyn_title1: {},
			msdyn_title2: {},
			msdyn_TranscriptControl: {},
			msdyn_transfercount: {},
			RegardingObjectId: {},
			SessionDetails: {},
			StateCode: {},
			StatusCode: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			AlternativeDetails: {
				Section: {
					General: {}
				}
			},
			Details: {
				Section: {
					Details: {},
					Details_section_4: {},
					Details_skills_5: {},
					tab_2_section_3: {},
					tab_2_section_4: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var process = devKit.LoadProcess(formContext);
		form.Process = process;
		var grid = {
			SessionDetails: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			nav_msdyn_msdyn_ocliveworkitem_msdyn_cdsentityengagementctx_liveworkitemid: {},
			nav_msdyn_msdyn_ocliveworkitem_msdyn_chatquestionnaireresponse: {},
			nav_msdyn_msdyn_ocliveworkitem_msdyn_livechatengagementctx_liveworkitemid: {},
			nav_msdyn_msdyn_ocliveworkitem_msdyn_ocliveworkitemcontextitem_ocliveworkitemid: {},
			nav_msdyn_msdyn_ocliveworkitem_msdyn_ocsession_liveworkstreamid: {},
			nav_msdyn_msdyn_ocliveworkitem_msdyn_transcript: {},
			navAudit: {},
			navConnections: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormCustomer_summary = function(executionContext, defaultWebResourceName) {
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
			msdyn_customer1: {},
			msdyn_customer2: {},
			msdyn_IssueId: {},
			msdyn_IssueId1: {},
			msdyn_TimelineControlField: {},
			notescontrol: {},
			OCSearchRuntimeControl: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			Details: {
				Section: {
					Details_section_3: {},
					Details_section_4: {},
					tab_2_section_1: {},
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
		var process = devKit.LoadProcess(formContext);
		form.Process = process;
		var quickForm = {
			CustomerProfile: {
				Address1_City: {},
				PrimaryContactId: {},
				Telephone1: {}
			},
			IssueSnapshot: {
				PriorityCode: {},
				StateCode: {},
				SubjectId: {}
			},
			RecentCases: {

			}
		};
		devKit.LoadQuickForms(formContext, quickForm);
		form.QuickForm = quickForm;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_ocliveworkitem = {
		ActivityTypeCode : {
			Activity_record_for_the_Teams_chat: 10088,
			Appointment: 4201,
			Booking_Alert: 10473,
			Campaign_Activity: 4402,
			Campaign_Response: 4401,
			Case_Resolution: 4206,
			Conversation: 10743,
			Customer_Voice_alert: 10330,
			Customer_Voice_survey_invite: 10340,
			Customer_Voice_survey_response: 10342,
			Email: 4202,
			Fax: 4204,
			Letter: 4207,
			Opportunity_Close: 4208,
			Order_Close: 4209,
			Outbound_message: 10857,
			Phone_Call: 4210,
			Project_Service_Approval: 10489,
			Quick_Campaign: 4406,
			Quote_Close: 4211,
			Recurring_Appointment: 4251,
			Service_Activity: 4214,
			Session: 10760,
			Task: 4212
		},
		Community : {
			Apple_Messages_For_Business: 16,
			Cortana: 5,
			Direct_Line: 6,
			Direct_Line_Speech: 8,
			Email: 9,
			Facebook: 1,
			Googles_Business_Messages: 17,
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
		msdyn_customerIdType : {
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
		msdyn_routableobjectidIdType : {
		},
		msdyn_urcustomersentimentlabel : {
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
		OwnerIdType : {
		},
		PriorityCode : {
			High: 2,
			Low: 0,
			Normal: 1
		},
		RegardingObjectTypeCode : {
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