'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdyn_livechatconfig_Information = function(executionContext, defaultWebResourceName) {
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
			CustomOOOHMessages: {},
			includeDomain: {},
			instance_CustomSystemMessage: {},
			msdyn_agentDisplayName: {},
			msdyn_AuthsettingsId: {},
			msdyn_AutoDetectLanguage: {},
			msdyn_avatarUrl: {},
			msdyn_averagewaittime_enabled: {},
			msdyn_callingoptions: {},
			msdyn_cobrowseprovider: {},
			msdyn_conversationmode: {},
			msdyn_conversationmodedisclaimer: {},
			msdyn_EmailTemplate: {},
			msdyn_enablechatreconnect: {},
			msdyn_Enablechattranscriptdownload: {},
			msdyn_Enablechattranscriptemail: {},
			msdyn_enablecobrowse: {},
			msdyn_Enablefileattachmentsforagents: {},
			msdyn_Enablefileattachmentsforcustomers: {},
			msdyn_enablescreensharing: {},
			msdyn_FormsProButton: {},
			msdyn_generalsubheading: {},
			msdyn_genericagentdisplayname: {},
			msdyn_infolabel: {},
			msdyn_livechattext: {},
			msdyn_liveworkstreamid: {},
			msdyn_liveworkstreamid1: {},
			msdyn_Mailbox: {},
			msdyn_name: {},
			msdyn_oc_geolocationprovider: {},
			msdyn_ocWidgetLanguage: {},
			msdyn_offlinewidgetsubtitle: {},
			msdyn_offlinewidgetthemecolor: {},
			msdyn_offlinewidgettitle: {},
			msdyn_operatinghourid: {},
			msdyn_persistentchattext: {},
			msdyn_portalurl: {},
			msdyn_positioninqueue_enabled: {},
			msdyn_postchatenabled: {},
			msdyn_PostConversationSurvey: {},
			msdyn_PostConversationSurveyEnable: {},
			msdyn_PostConversationSurveyMessageText: {},
			msdyn_PostConversationSurveyMode: {},
			msdyn_PrechatEnabled: {},
			msdyn_proactivechatenabled: {},
			msdyn_redirectionurl: {},
			msdyn_requestvisitorlocation: {},
			msdyn_screensharingprovider: {},
			msdyn_Showwidgetduringofflinehours: {},
			msdyn_timetoreconnectwithpreviousagent: {},
			msdyn_widgetAppId: {},
			msdyn_WidgetLocale: {},
			msdyn_widgetPosition: {},
			msdyn_WidgetSnippet: {},
			msdyn_widgetsoundnotification: {},
			msdyn_widgetSubtitle: {},
			msdyn_widgetThemeColor: {},
			msdyn_widgetTitle: {},
			msdyn_widgetvisualnotification: {},
			PostchatUnauthenticatedQuestions: {},
			PrechatUnauthenticatedQuestions: {},
			WebResource_Disclaimer: {},
			WebResource_ocpreviewterms: {},
			WebResource_postconversationsurveydisclaimer: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			AutomatedMessages_tab: {
				Section: {
					tab_9_section_1: {}
				}
			},
			tab_3: {
				Section: {
					offline_messagingsection: {},
					offline_section: {},
					online_section: {}
				}
			},
			tab_4: {
				Section: {
					Chat_Transcripts: {},
					File_attachments: {},
					tab_4_section_1: {},
					tab_4_section_3: {},
					tab_4_section_5: {},
					tab_4_section_6: {},
					tab_4_section_6_2: {},
					tab_4_section_8: {},
					tab_4_section_9: {}
				}
			},
			tab_5: {
				Section: {
					Survey_section_1: {},
					tab_5_section_1: {}
				}
			},
			tab_6: {
				Section: {
					location_tracking: {},
					tab_4_section_2: {},
					tab_4_section_4: {}
				}
			},
			tab_7: {
				Section: {
					tab_7_section_1: {}
				}
			},
			tab_8: {
				Section: {
					tab_8_section_1: {},
					tab_8_section_2: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			CreatedOn: {},
			OwnerId: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
		var process = devKit.LoadProcess(formContext);
		form.Process = process;
		var quickForm = {
			msdyn_reconnecttimelimit: {
				msdyn_AutoCloseAfterInactivity: {}
			}
		};
		devKit.LoadQuickForms(formContext, quickForm);
		form.QuickForm = quickForm;
		var grid = {
			CustomOOOHMessages: {},
			includeDomain: {},
			instance_CustomSystemMessage: {},
			PostchatUnauthenticatedQuestions: {},
			PrechatUnauthenticatedQuestions: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_livechatconfig = {
		msdyn_agentDisplayName : {
			First_name: 192350001,
			Full_name: 192350000,
			Last_name: 192350002,
			Nick_name: 192350003
		},
		msdyn_callingoptions : {
			No_calling: 192350000,
			Video_and_voice_calling: 192350001,
			Voice_only: 192350002
		},
		msdyn_conversationmode : {
			Live_Chat: 192350000,
			Persistent_Chat: 192350001
		},
		msdyn_Language : {
			Auto_Detect: 192350000,
			English: 192360014
		},
		msdyn_offlinewidgetthemecolor : {
			Black: 19236004,
			Blue: 19236002,
			Brown: 192350005,
			Clay: 192350006,
			Green: 19236003,
			Grey: 192350003,
			Orange: 192350001,
			Pink: 192350002,
			Purple: 192350007,
			Red: 19236001,
			Teal: 192360017,
			Violet: 192350004
		},
		msdyn_PostConversationSurveyBotSurveyMode : {
			Insert_survey_in_conversation: 192350000,
			Send_survey_link_to_conversation: 192350001
		},
		msdyn_PostConversationSurveyMode : {
			Insert_survey_in_conversation: 192350000,
			Send_survey_link_to_conversation: 192350001
		},
		msdyn_widgetPosition : {
			Bottom_left: 192236011,
			Bottom_right: 192236010
		},
		msdyn_widgetThemeColor : {
			Black: 19236004,
			Blue: 19236002,
			Brown: 192350005,
			Clay: 192350006,
			Green: 19236003,
			Grey: 192350003,
			Orange: 192350001,
			Pink: 192350002,
			Purple: 192350007,
			Red: 19236001,
			Teal: 192360017,
			Violet: 192350004
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