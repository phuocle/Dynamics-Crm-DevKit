'use strict';
/** @namespace MyDog */
var MyDog;
(function (MyDog) {
	'use strict';
	MyDog.Formmsdyn_ocwhatsappchannelnumber_Information = function(executionContext, defaultWebResourceName) {
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
			instance_MessageTemplate: {},
			msdyn_enablefileattachmentsforagents: {},
			msdyn_enablefileattachmentsforcustomers: {},
			msdyn_FormsProButton: {},
			msdyn_liveworkstreamid: {},
			msdyn_name: {},
			msdyn_ocwhatsappaccountid: {},
			msdyn_ocwidgetlanguage: {},
			msdyn_organizationphonenumber: {},
			msdyn_PostConversationSurvey: {},
			msdyn_PostConversationSurveyEnable: {},
			msdyn_PostConversationSurveyMessageText: {},
			msdyn_PostConversationSurveyMode: {},
			OwnerId: {},
			WebResource_Disclaimer: {},
			WebResource_postconversationsurveydisclaimer: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			_E70B3C65_8301_40E9_854E_BAFF33EEA2EA: {
				Section: {
					Section1_PhoneNumberDetails: {},
					Section2_WorkDistribution: {}
				}
			},
			GeneralSetting_tab: {
				Section: {
					GeneralSetting_tab_GeneralInformation_section: {},
					GeneralSetting_tab_FileAttachment_section: {}
				}
			},
			AutomatedMessages_tab: {
				Section: {
					tab_3_section_1: {}
				}
			},
			MessageTemplates_tab: {
				Section: {
					tab_4_section_1: {}
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
		var quickForm = {

		};
		devKit.LoadQuickForms(formContext, quickForm);
		form.QuickForm = quickForm;
		var grid = {
			instance_CustomSystemMessage: {},
			instance_MessageTemplate: {},
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
})(MyDog || (MyDog = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_ocwhatsappchannelnumber = {
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