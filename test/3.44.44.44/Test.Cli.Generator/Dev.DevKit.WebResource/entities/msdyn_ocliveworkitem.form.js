'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormActive_Conversation = function(executionContext, defaultWebResourceName) {
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
			msdyn_customer3: {},
			msdyn_customer4: {},
			msdyn_IssueId: {},
			msdyn_IssueId1: {},
			msdyn_IssueId2: {},
			msdyn_TimelineControlField: {},
			notescontrol: {},
			OCSearchRuntimeControl: {},
			Subject: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			Details: {
				Section: {
					Details_section_3: {},
					Details_section_4: {},
					Details_section_7: {},
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
		var header = {
			msdyn_cdsqueueid: {},
			msdyn_startedon: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
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
		var navigation = {
			msdyn_msdyn_ocliveworkitem_msdyn_cdsentityengagementctx_liveworkitemid: {},
			msdyn_msdyn_ocliveworkitem_msdyn_chatquestionnaireresponse: {},
			msdyn_msdyn_ocliveworkitem_msdyn_conversationinsight_ConversationId: {},
			msdyn_msdyn_ocliveworkitem_msdyn_conversationsummaryinteraction_conversationid: {},
			msdyn_msdyn_ocliveworkitem_msdyn_conversationtopic_conversation_conversationid: {},
			msdyn_msdyn_ocliveworkitem_msdyn_customengagementctx_liveworkitemid: {},
			msdyn_msdyn_ocliveworkitem_msdyn_effortpredictionresult_liveworkitemid: {},
			msdyn_msdyn_ocliveworkitem_msdyn_facebookengagementctx_liveworkitemid: {},
			msdyn_msdyn_ocliveworkitem_msdyn_intententity_objectid: {},
			msdyn_msdyn_ocliveworkitem_msdyn_intententityattribute_objectid: {},
			msdyn_msdyn_ocliveworkitem_msdyn_lineengagementctx_liveworkitemid: {},
			msdyn_msdyn_ocliveworkitem_msdyn_livechatengagementctx_liveworkitemid: {},
			msdyn_msdyn_ocliveworkitem_msdyn_ocapplemessagesforbusinessengagementctx_liveworkitemid: {},
			msdyn_msdyn_ocliveworkitem_msdyn_ocgatekeeperengagementctx_liveworkitemid: {},
			msdyn_msdyn_ocliveworkitem_msdyn_ocgooglebusinessmessagesengagementctx_liveworkitemid: {},
			msdyn_msdyn_ocliveworkitem_msdyn_ocliveworkitemcharacteristic_ocliveworkitemid: {},
			msdyn_msdyn_ocliveworkitem_msdyn_ocliveworkitemcontextitem_ocliveworkitemid: {},
			msdyn_msdyn_ocliveworkitem_msdyn_ocliveworkitemsentiment_ocliveworkitemid: {},
			msdyn_msdyn_ocliveworkitem_msdyn_ocphonecallengagementctx_liveworkitemid: {},
			msdyn_msdyn_ocliveworkitem_msdyn_ocrecording_liveworkitemid: {},
			msdyn_msdyn_ocliveworkitem_msdyn_ocrecording_liveworkitemid_recordingtarget: {},
			msdyn_msdyn_ocliveworkitem_msdyn_ocrequest_LiveWorkItemId: {},
			msdyn_msdyn_ocliveworkitem_msdyn_ocsession_liveworkstreamid: {},
			msdyn_msdyn_ocliveworkitem_msdyn_ocvoicemail: {},
			msdyn_msdyn_ocliveworkitem_msdyn_salesocmessage_conversationid: {},
			msdyn_msdyn_ocliveworkitem_msdyn_smsengagementctx_liveworkitemid: {},
			msdyn_msdyn_ocliveworkitem_msdyn_suggestioninteraction_msdyn_suggestionfor: {},
			msdyn_msdyn_ocliveworkitem_msdyn_suggestionrequestpayload: {},
			msdyn_msdyn_ocliveworkitem_msdyn_teamschannelengagementctx_liveworkitemid: {},
			msdyn_msdyn_ocliveworkitem_msdyn_teamsengagementctx_liveworkitemid: {},
			msdyn_msdyn_ocliveworkitem_msdyn_transcript: {},
			msdyn_msdyn_ocliveworkitem_msdyn_twitterengagementctx_liveworkitemid: {},
			msdyn_msdyn_ocliveworkitem_msdyn_unifiedroutingdiagnostic_ocliveworkitemid: {},
			msdyn_msdyn_ocliveworkitem_msdyn_unifiedroutingdiagnostic_targetobject: {},
			msdyn_msdyn_ocliveworkitem_msdyn_unifiedroutingrun_workitem: {},
			msdyn_msdyn_ocliveworkitem_msdyn_visitorjourney_ocliveworkitemid: {},
			msdyn_msdyn_ocliveworkitem_msdyn_wechatengagementctx_liveworkitemid: {},
			msdyn_msdyn_ocliveworkitem_msdyn_whatsappengagementctx_liveworkitemid: {},
			msdyn_msdyn_unifiedroutingrun_msdyn_ocliveworkitem_targetobject: {},
			msdyn_ocliveworkitem_Feedback: {},
			msdyn_ocliveworkitem_msdyn_conversationmessageblock_msdyn_ocliveworkitemid: {},
			msdyn_ocliveworkitem_msdyn_liveworkitemevent_liveworkitemid: {},
			msdyn_ocliveworkitem_msdyn_ocliveworkitemcapacityprofile: {},
			msdyn_ocliveworkitem_QueueItems: {},
			msdyn_readtracker_poly_msdyn_ocliveworkitem: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
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
			msdyn_title: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			AlternativeDetails: {
				Section: {
					General: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var navigation = {
			msdyn_msdyn_ocliveworkitem_msdyn_cdsentityengagementctx_liveworkitemid: {},
			msdyn_msdyn_ocliveworkitem_msdyn_chatquestionnaireresponse: {},
			msdyn_msdyn_ocliveworkitem_msdyn_conversationinsight_ConversationId: {},
			msdyn_msdyn_ocliveworkitem_msdyn_conversationsummaryinteraction_conversationid: {},
			msdyn_msdyn_ocliveworkitem_msdyn_conversationtopic_conversation_conversationid: {},
			msdyn_msdyn_ocliveworkitem_msdyn_customengagementctx_liveworkitemid: {},
			msdyn_msdyn_ocliveworkitem_msdyn_effortpredictionresult_liveworkitemid: {},
			msdyn_msdyn_ocliveworkitem_msdyn_facebookengagementctx_liveworkitemid: {},
			msdyn_msdyn_ocliveworkitem_msdyn_intententity_objectid: {},
			msdyn_msdyn_ocliveworkitem_msdyn_intententityattribute_objectid: {},
			msdyn_msdyn_ocliveworkitem_msdyn_lineengagementctx_liveworkitemid: {},
			msdyn_msdyn_ocliveworkitem_msdyn_livechatengagementctx_liveworkitemid: {},
			msdyn_msdyn_ocliveworkitem_msdyn_ocapplemessagesforbusinessengagementctx_liveworkitemid: {},
			msdyn_msdyn_ocliveworkitem_msdyn_ocgatekeeperengagementctx_liveworkitemid: {},
			msdyn_msdyn_ocliveworkitem_msdyn_ocgooglebusinessmessagesengagementctx_liveworkitemid: {},
			msdyn_msdyn_ocliveworkitem_msdyn_ocliveworkitemcharacteristic_ocliveworkitemid: {},
			msdyn_msdyn_ocliveworkitem_msdyn_ocliveworkitemcontextitem_ocliveworkitemid: {},
			msdyn_msdyn_ocliveworkitem_msdyn_ocliveworkitemsentiment_ocliveworkitemid: {},
			msdyn_msdyn_ocliveworkitem_msdyn_ocphonecallengagementctx_liveworkitemid: {},
			msdyn_msdyn_ocliveworkitem_msdyn_ocrecording_liveworkitemid: {},
			msdyn_msdyn_ocliveworkitem_msdyn_ocrecording_liveworkitemid_recordingtarget: {},
			msdyn_msdyn_ocliveworkitem_msdyn_ocrequest_LiveWorkItemId: {},
			msdyn_msdyn_ocliveworkitem_msdyn_ocsession_liveworkstreamid: {},
			msdyn_msdyn_ocliveworkitem_msdyn_ocvoicemail: {},
			msdyn_msdyn_ocliveworkitem_msdyn_salesocmessage_conversationid: {},
			msdyn_msdyn_ocliveworkitem_msdyn_smsengagementctx_liveworkitemid: {},
			msdyn_msdyn_ocliveworkitem_msdyn_suggestioninteraction_msdyn_suggestionfor: {},
			msdyn_msdyn_ocliveworkitem_msdyn_suggestionrequestpayload: {},
			msdyn_msdyn_ocliveworkitem_msdyn_teamschannelengagementctx_liveworkitemid: {},
			msdyn_msdyn_ocliveworkitem_msdyn_teamsengagementctx_liveworkitemid: {},
			msdyn_msdyn_ocliveworkitem_msdyn_transcript: {},
			msdyn_msdyn_ocliveworkitem_msdyn_twitterengagementctx_liveworkitemid: {},
			msdyn_msdyn_ocliveworkitem_msdyn_unifiedroutingdiagnostic_ocliveworkitemid: {},
			msdyn_msdyn_ocliveworkitem_msdyn_unifiedroutingdiagnostic_targetobject: {},
			msdyn_msdyn_ocliveworkitem_msdyn_unifiedroutingrun_workitem: {},
			msdyn_msdyn_ocliveworkitem_msdyn_visitorjourney_ocliveworkitemid: {},
			msdyn_msdyn_ocliveworkitem_msdyn_wechatengagementctx_liveworkitemid: {},
			msdyn_msdyn_ocliveworkitem_msdyn_whatsappengagementctx_liveworkitemid: {},
			msdyn_msdyn_unifiedroutingrun_msdyn_ocliveworkitem_targetobject: {},
			msdyn_ocliveworkitem_Feedback: {},
			msdyn_ocliveworkitem_msdyn_conversationmessageblock_msdyn_ocliveworkitemid: {},
			msdyn_ocliveworkitem_msdyn_liveworkitemevent_liveworkitemid: {},
			msdyn_ocliveworkitem_msdyn_ocliveworkitemcapacityprofile: {},
			msdyn_ocliveworkitem_QueueItems: {},
			msdyn_readtracker_poly_msdyn_ocliveworkitem: {}
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
	OptionSet.msdyn_ocliveworkitem = {
		ActivityTypeCode : {
			Appointment: 4201,
			Booking_Alert: 11000,
			Campaign_Activity: 4402,
			Campaign_Response: 4401,
			Case_Resolution: 4206,
			Conversation: 10691,
			Copilot_Transcript: 10877,
			Customer_Voice_alert: 10600,
			Customer_Voice_survey_invite: 10610,
			Customer_Voice_survey_response: 10612,
			Email: 4202,
			Fax: 4204,
			Invite_Redemption: 10310,
			Letter: 4207,
			Opportunity_Close: 4208,
			Order_Close: 4209,
			Outbound_message: 11063,
			Phone_Call: 4210,
			Portal_Comment: 10311,
			Quick_Campaign: 4406,
			Quote_Close: 4211,
			Recurring_Appointment: 4251,
			Service_Activity: 4214,
			Session: 10708,
			Task: 4212,
			Teams_chat: 10185,
			Voicemail: 11070
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
			Googles_Business_Messages: 192450001,
			LINE: 192310000,
			Live_chat: 192360000,
			Microsoft_Teams: 19241000,
			Screen_sharing: 192400000,
			SMS: 192340000,
			Twitter: 192350001,
			Video: 192380000,
			Voice: 192370000,
			Voice_call: 192440000,
			WeChat: 192320000,
			WhatsApp: 192300000
		},
		msdyn_conversationactivitystate : {
			Default: 0,
			Ended: 3,
			Hold: 2,
			Talk: 1
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
		msdyn_statuschangereason : {
			AgentMovedToWrapUp: 192350005,
			AssignedBySupervisor: 192350017,
			AutoClosedBySystem: 192350010,
			AutoClosedFromWaitingState: 192350009,
			AwaitingAgentAcceptance: 192350002,
			AwaitingAgentAssignment: 192350001,
			AwaitingCustomerResponse: 192350004,
			ClosedDueToFailure: 192350014,
			ClosedDueToOverflow: 192350011,
			ClosedInDataverseDirectlyByAdmin: 192350016,
			ConversationEndedByAgent: 192350008,
			ConversationEndedByBot: 192350013,
			CustomerDisconnectedOrLeftActiveConversation: 192350006,
			CustomerDisconnectedOrLeftOpenConversation: 192350012,
			CutomerMovedToWrapUp: 192350007,
			ForceClosedBySupervisor: 192350015,
			InConversation: 192350003
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