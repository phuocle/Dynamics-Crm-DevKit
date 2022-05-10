'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdyn_knowledgearticletemplate_Main_Form = function(executionContext, defaultWebResourceName) {
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
			msdyn_Content: {},
			msdyn_Description: {},
			msdyn_isinternal: {},
			msdyn_keywords: {},
			msdyn_languagelocaleid: {},
			msdyn_LanguageLocaleIdName: {},
			msdyn_name: {},
			msdyn_subjectid: {},
			msdyn_title: {},
			OwnerId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			_92E59EE7_820A_42FC_907F_F86D2C4677C2: {
				Section: {
					_92E59EE7_820A_42FC_907F_F86D2C4677C2_SECTION_1: {},
					_92E59EE7_820A_42FC_907F_F86D2C4677C2_SECTION_2: {},
					Content: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var process = devKit.LoadProcess(formContext);
		form.Process = process;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_knowledgearticletemplate = {
		OwnerIdType : {
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