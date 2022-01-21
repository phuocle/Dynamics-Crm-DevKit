'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdyn_smsnumber_Information = function(executionContext, defaultWebResourceName) {
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
			msdyn_Description: {},
			msdyn_enablefileattachmentsforagents: {},
			msdyn_enablefileattachmentsforcustomers: {},
			msdyn_fileAttachmentsDisclaimer: {},
			msdyn_FormattedPhoneNumber: {},
			msdyn_FormsProButton: {},
			msdyn_LiveWorkStreamId: {},
			msdyn_number: {},
			msdyn_ocwidgetlanguage: {},
			msdyn_operatinghourid: {},
			msdyn_PostConversationSurvey: {},
			msdyn_PostConversationSurveyEnable: {},
			msdyn_PostConversationSurveyMessageText: {},
			msdyn_PostConversationSurveyMode: {},
			msdyn_Provider: {},
			msdyn_Type: {},
			OwnerId: {},
			WebResource_postconversationsurveydisclaimer: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			_47832BCE_E6F3_451A_890E_A808029434D3: {
				Section: {
					_986BC67E_459F_44BB_9487_23C5724DF2EE: {},
					GeneralSetting_tab_WorkDistribution_section: {}
				}
			},
			AutomatedMessages_tab: {
				Section: {
					tab_2_section_1: {}
				}
			},
			Survey: {
				Section: {
					tab_2_section_1_2: {}
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
	OptionSet.msdyn_smsnumber = {
		msdyn_PostConversationSurveyMode : {
			Insert_survey_in_conversation: 192350000,
			Send_survey_link_to_conversation: 192350001
		},
		msdyn_Provider : {
			TeleSign_App: 192350000
		},
		msdyn_Type : {
			Long_code: 192350000,
			Short_code: 192350001,
			Toll_free: 192350002
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