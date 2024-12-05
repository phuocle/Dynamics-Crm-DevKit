'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsfp_question_Information = function(executionContext, defaultWebResourceName) {
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
			msfp_name: {},
			msfp_order: {},
			msfp_questiontext: {},
			msfp_questiontype: {},
			msfp_responserequired: {},
			msfp_sourcesurveyidentifier: {},
			msfp_subtitle: {},
			msfp_Survey: {},
			notescontrol: {},
			OwnerId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {

		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var navigation = {
			msfp_msfp_question_msfp_fileresponse_question: {},
			msfp_msfp_question_msfp_questionresponse_questionid: {}
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
	OptionSet.msfp_question = {
		msfp_choicetype : {
			Multi_choice: 647390001,
			none: 647390002,
			Single_choice: 647390000
		},
		msfp_questiontype : {
			Choice: 647390000,
			Date: 647390003,
			Date_and_time: 647390010,
			Drop_down: 647390011,
			File_Upload: 647390008,
			MatrixChoice: 647390006,
			MatrixChoiceGroup: 647390005,
			NPS: 647390007,
			Number: 647390009,
			Ranking: 647390004,
			Rating: 647390002,
			Text: 647390001
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