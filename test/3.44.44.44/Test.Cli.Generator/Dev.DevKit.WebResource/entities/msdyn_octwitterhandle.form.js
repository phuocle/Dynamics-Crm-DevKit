'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdyn_octwitterhandle_Information = function(executionContext, defaultWebResourceName) {
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
			msdyn_enablefileattachmentsforagents: {},
			msdyn_enablefileattachmentsforcustomers: {},
			msdyn_FormsProButton: {},
			msdyn_liveworkstreamid: {},
			msdyn_name: {},
			msdyn_octwitterapplicationid: {},
			msdyn_octwitterscreenname: {},
			msdyn_octwitteruniquehandleid: {},
			msdyn_ocwidgetlanguage: {},
			msdyn_PostConversationSurvey: {},
			msdyn_PostConversationSurveyEnable: {},
			msdyn_PostConversationSurveyMessageText: {},
			msdyn_PostConversationSurveyMode: {},
			OwnerId: {},
			WebResource_postconversationsurveydisclaimer: {},
			WebResource_TwitterHandleInstruction: {},
			WebResource_TwitterSignin: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			_EB2B8734_9D0A_421F_9076_BA13303C27F6: {
				Section: {
					_BD72C452_4D7E_4715_956F_BC8E4E5C719D: {},
					_EB2B8734_9D0A_421F_9076_BA13303C27F6_SECTION_2: {}
				}
			},
			AutomatedMessages_tab: {
				Section: {
					tab_3_section_1: {}
				}
			},
			GeneralSetting_tab: {
				Section: {
					GeneralSetting_tab_fileattachment_section: {},
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
		var grid = {
			instance_CustomSystemMessage: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			msdyn_msdyn_octwitterhandle_msdyn_octwitterhandlesecret_octwitterhandleid: {}
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
	OptionSet.msdyn_octwitterhandle = {
		msdyn_PostConversationSurveyBotSurveyMode : {
			Insert_survey_in_conversation: 192350000,
			Send_survey_link_to_conversation: 192350001
		},
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