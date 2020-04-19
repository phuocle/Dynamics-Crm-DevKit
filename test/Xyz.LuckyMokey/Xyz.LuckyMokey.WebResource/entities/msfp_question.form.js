'use strict';
/** @namespace LuckyMokey */
var LuckyMokey;
(function (LuckyMokey) {
	'use strict';
	LuckyMokey.Formmsfp_question_Information = function(executionContext, defaultWebResourceName) {
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
			OwnerId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {

		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
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
	OptionSet.msfp_question = {
		msfp_choicetype : {
			Single_choice: 647390000,
			Multi_choice: 647390001,
			none: 647390002
		},
		msfp_questiontype : {
			Choice: 647390000,
			Text: 647390001,
			Rating: 647390002,
			Date: 647390003,
			Ranking: 647390004,
			MatrixChoiceGroup: 647390005,
			MatrixChoice: 647390006,
			NPS: 647390007,
			File_Upload: 647390008,
			Number: 647390009,
			Date_and_time: 647390010,
			Drop_down: 647390011
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