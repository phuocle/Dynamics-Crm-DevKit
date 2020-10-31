'use strict';
/** @namespace LuckyMokey */
var LuckyMokey;
(function (LuckyMokey) {
	'use strict';
	LuckyMokey.Formmsdyn_livechatconfig_Information = function(executionContext, defaultWebResourceName) {
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
			includeDomain: {},
			msdyn_agentDisplayName: {},
			msdyn_AuthsettingsId: {},
			msdyn_AutoDetectLanguage: {},
			msdyn_avatarUrl: {},
			msdyn_cobrowseprovider: {},
			msdyn_Duringnonoperatinghours: {},
			msdyn_EmailTemplate: {},
			msdyn_Enablechattranscriptdownload: {},
			msdyn_Enablechattranscriptemail: {},
			msdyn_enablecobrowse: {},
			msdyn_Enablefileattachmentsforagents: {},
			msdyn_Enablefileattachmentsforcustomers: {},
			msdyn_enablescreensharing: {},
			msdyn_genericagentdisplayname: {},
			msdyn_infolabel: {},
			msdyn_liveworkstreamid: {},
			msdyn_Mailbox: {},
			msdyn_name: {},
			msdyn_oc_geolocationprovider: {},
			msdyn_operatinghourid: {},
			msdyn_positioninqueue_enabled: {},
			msdyn_postchatenabled: {},
			msdyn_PrechatEnabled: {},
			msdyn_proactivechatenabled: {},
			msdyn_requestvisitorlocation: {},
			msdyn_screensharingprovider: {},
			msdyn_widgetAppId: {},
			msdyn_WidgetLocale: {},
			msdyn_widgetPosition: {},
			msdyn_WidgetSnippet: {},
			msdyn_widgetSubtitle: {},
			msdyn_widgetThemeColor: {},
			msdyn_widgetTitle: {},
			PostchatUnauthenticatedQuestions: {},
			PrechatUnauthenticatedQuestions: {},
			WebResource_Disclaimer: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			tab_4: {
				Section: {
					tab_4_section_1: {},
					tab_4_section_5: {},
					tab_4_section_6: {},
					File_attachments: {},
					Chat_Transcripts: {},
					tab_4_section_6_2: {},
					tab_4_section_3: {}
				}
			},
			tab_3: {
				Section: {
					tab_3_section_1: {}
				}
			},
			tab_5: {
				Section: {
					tab_5_section_1: {}
				}
			},
			tab_7: {
				Section: {
					tab_7_section_1: {}
				}
			},
			tab_6: {
				Section: {
					tab_4_section_4: {},
					tab_4_section_2: {},
					location_tracking: {}
				}
			},
			tab_8: {
				Section: {
					tab_8_section_1: {}
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
	OptionSet.msdyn_livechatconfig = {
		msdyn_agentDisplayName : {
			Full_name: 192350000,
			First_name: 192350001,
			Last_name: 192350002,
			Nick_name: 192350003
		},
		msdyn_callingoptions : {
			No_calling: 192350000,
			Video_and_voice_calling: 192350001,
			Voice_only: 192350002
		},
		msdyn_Language : {
			Auto_Detect: 192350000,
			English: 192360014
		},
		msdyn_widgetPosition : {
			Bottom_right: 192236010,
			Bottom_left: 192236011
		},
		msdyn_widgetThemeColor : {
			Red: 19236001,
			Teal: 192360017,
			Blue: 19236002,
			Green: 19236003,
			Black: 19236004,
			Orange: 192350001,
			Pink: 192350002,
			Grey: 192350003,
			Violet: 192350004,
			Brown: 192350005,
			Clay: 192350006,
			Purple: 192350007
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