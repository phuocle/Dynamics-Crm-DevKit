'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdyn_oclinechannelconfig_Information = function(executionContext, defaultWebResourceName) {
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
			instance_CustomSystemMessage: {},
			msdyn_channelaccesstoken: {},
			msdyn_channelid: {},
			msdyn_channelsecret: {},
			msdyn_enablefileattachmentsforagents: {},
			msdyn_enablefileattachmentsforcustomers: {},
			msdyn_FormsProButton: {},
			msdyn_liveworkstreamid: {},
			msdyn_name: {},
			msdyn_ocwidgetlanguage: {},
			msdyn_PostConversationSurvey: {},
			msdyn_PostConversationSurveyEnable: {},
			msdyn_PostConversationSurveyMessageText: {},
			msdyn_PostConversationSurveyMode: {},
			msdyn_webhookurl: {},
			OwnerId: {},
			WebResource_LINECallbackUrl: {},
			WebResource_LINEInstructions: {},
			WebResource_postconversationsurveydisclaimer: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			_141626E8_75AE_4DE9_BFB5_760C1CEADBAD: {
				Section: {
					null_section_3: {},
					null_section_4: {}
				}
			},
			AutomatedMessages_tab: {
				Section: {
					tab_3_section_1: {}
				}
			},
			GeneralSetting_tab: {
				Section: {
					GeneralSetting_tab_FileAttachment_section: {},
					GeneralSetting_tab_GeneralInformation_section: {}
				}
			},
			survey_tab_1: {
				Section: {
					Survey_section_1: {}
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
			instance_CustomSystemMessage: {},
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
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_oclinechannelconfig = {
		msdyn_PostConversationSurveyMode : {
			Insert_survey_in_conversation: 192350000,
			Send_survey_link_to_conversation: 192350001
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