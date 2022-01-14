'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdyn_occustommessagingchannel_Information = function(executionContext, defaultWebResourceName) {
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
			msdyn_custombotchannelregistration: {},
			msdyn_enablefileattachmentsforagents: {},
			msdyn_enablefileattachmentsforcustomers: {},
			msdyn_FormsProButton: {},
			msdyn_liveworkstreamid: {},
			msdyn_name: {},
			msdyn_occustomchannelid: {},
			msdyn_ocwidgetlanguage: {},
			msdyn_PostConversationSurvey: {},
			msdyn_PostConversationSurveyEnable: {},
			msdyn_PostConversationSurveyMessageText: {},
			msdyn_PostConversationSurveyMode: {},
			OwnerId: {},
			WebResource_postconversationsurveydisclaimer: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			_45F9845C_5BC0_4347_9E80_6BAB551CAF30: {
				Section: {
					_45F9845C_5BC0_4347_9E80_6BAB551CAF30_SECTION_2: {},
					_5A2D173B_E554_4181_B34B_787B6B78850C: {}
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
			Survey: {
				Section: {
					Survey_section_1: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var process = devKit.LoadProcess(formContext);
		form.Process = process;
		var grid = {
			instance_CustomSystemMessage: {},
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
	OptionSet.msdyn_occustommessagingchannel = {
		msdyn_occustomchannelid : {
			Direct_Line: 192350000,
			Kik: 192350001,
			Telegram: 192350002
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