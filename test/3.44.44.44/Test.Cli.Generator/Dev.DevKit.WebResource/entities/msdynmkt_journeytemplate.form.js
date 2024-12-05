'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormJourney_Template = function(executionContext, defaultWebResourceName) {
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
			msdynmkt_description: {},
			msdynmkt_name: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {

		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			msdynmkt_name: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
		var navigation = {

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
	OptionSet.msdynmkt_journeytemplate = {
		ComponentState : {
			Deleted: 2,
			Deleted_Unpublished: 3,
			Published: 0,
			Unpublished: 1
		},
		msdynmkt_frequencycaptype : {
			Journey_Template_Frequency_Cap_Type_0: 0,
			Journey_Template_Frequency_Cap_Type_1: 1
		},
		msdynmkt_triggerType : {
			Journey_Template_Trigger_Type: 0,
			Journey_Template_Trigger_Type_1: 1,
			Journey_Template_Trigger_Type_2: 2,
			Journey_Template_Trigger_Type_3: 3
		},
		statecode : {
			Journey_Template_State_Code_0: 0,
			Journey_Template_State_Code_1: 1,
			Journey_Template_State_Code_4: 4
		},
		statuscode : {
			Journey_Template_Status_Code_1: 1,
			Journey_Template_Status_Code_2: 2,
			Journey_Template_Status_Code_6: 6
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