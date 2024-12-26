'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsfp_survey_Information = function(executionContext, defaultWebResourceName) {
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
			CreatedOn: {},
			ModifiedBy: {},
			msfp_acceptanonymousresponses: {},
			msfp_description: {},
			msfp_friendlyname: {},
			msfp_name: {},
			msfp_otherproperties: {},
			msfp_project: {},
			msfp_sourcesurveyidentifier: {},
			msfp_sourcesurveymodifieddate: {},
			msfp_surveyurl: {},
			OwnerId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {

		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var navigation = {
			msdyn_msfp_survey_msdyn_livechatconfig_PostConversationSurvey: {},
			msdyn_msfp_survey_msdyn_livechatconfig_PostConversationSurveySeparateBotSurvey: {},
			msdyn_msfp_survey_msdyn_ocapplebusinessaccount_PostConversationSurvey: {},
			msdyn_msfp_survey_msdyn_ocapplebusinessaccount_PostConversationSurveySeparateBotSurvey: {},
			msdyn_msfp_survey_msdyn_occustommessagingchannel_PostConversationSurvey: {},
			msdyn_msfp_survey_msdyn_occustommessagingchannel_PostConversationSurveySeparateBotSurvey: {},
			msdyn_msfp_survey_msdyn_ocfbpage_PostConversationSurvey: {},
			msdyn_msfp_survey_msdyn_ocfbpage_PostConversationSurveySeparateBotSurvey: {},
			msdyn_msfp_survey_msdyn_ocgooglebusinessmessagesagentaccount_PostConversationSurvey: {},
			msdyn_msfp_survey_msdyn_ocgooglebusinessmessagesagentaccount_PostConversationSurveySeparateBotSurvey: {},
			msdyn_msfp_survey_msdyn_oclinechannelconfig_PostConversationSurvey: {},
			msdyn_msfp_survey_msdyn_oclinechannelconfig_PostConversationSurveySeparateBotSurvey: {},
			msdyn_msfp_survey_msdyn_ocsmschannelsetting_PostConversationSurvey: {},
			msdyn_msfp_survey_msdyn_ocsmschannelsetting_PostConversationSurveySeparateBotSurvey: {},
			msdyn_msfp_survey_msdyn_octeamschannelconfig_PostConversationSurvey: {},
			msdyn_msfp_survey_msdyn_octeamschannelconfig_PostConversationSurveySeparateBotSurvey: {},
			msdyn_msfp_survey_msdyn_octwitterhandle_PostConversationSurvey: {},
			msdyn_msfp_survey_msdyn_octwitterhandle_PostConversationSurveySeparateBotSurvey: {},
			msdyn_msfp_survey_msdyn_ocwechatchannelconfig_PostConversationSurvey: {},
			msdyn_msfp_survey_msdyn_ocwechatchannelconfig_PostConversationSurveySeparateBotSurvey: {},
			msdyn_msfp_survey_msdyn_ocwhatsappchannelnumber_PostConversationSurvey: {},
			msdyn_msfp_survey_msdyn_ocwhatsappchannelnumber_PostConversationSurveySeparateBotSurvey: {},
			msdyn_msfp_survey_msdyn_smsnumber_PostConversationSurvey: {},
			msdyn_msfp_survey_msdyn_surveysetting_survey: {},
			msdyncrm_msfp_survey_msdyncrm_deprecatedformsprosurveyactivity_formsprosurveyid: {},
			msfp_msfp_survey_msfp_alert_survey: {},
			msfp_msfp_survey_msfp_emailtemplate_surveyid: {},
			msfp_msfp_survey_msfp_fileresponse_survey: {},
			msfp_msfp_survey_msfp_question_Survey: {},
			msfp_msfp_survey_msfp_surveyinvite_surveyid: {},
			msfp_msfp_survey_msfp_surveyreminder_survey: {},
			msfp_msfp_survey_msfp_surveyresponse_surveyid: {}
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
	OptionSet.msfp_survey = {
		msdyn_mcsbotstatus : {
			Disconnected: 357890002,
			InProgress: 357890000,
			Ready: 357890001
		},
		msdyn_surveyprovider : {
			Customer_Voice: 600990000,
			Microsoft_Copilot_Studio: 600990001
		},
		statecode : {
			Active: 0,
			Inactive: 1
		},
		statuscode : {
			Active: 1,
			Deleted: 100000002,
			Draft: 100000000,
			Inactive: 2,
			Published: 100000003
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