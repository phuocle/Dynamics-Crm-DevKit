'use strict';
/** @namespace MyDog */
var MyDog;
(function (MyDog) {
	'use strict';
	MyDog.Formmsdyn_analysisresult_Information = function(executionContext, defaultWebResourceName) {
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
			AnalysisResultDetails: {},
			msdyn_AnalysisComponentType: {},
			msdyn_AnalysisJobId: {},
			msdyn_Category: {},
			msdyn_EntityName: {},
			msdyn_FileUri: {},
			msdyn_helplink: {},
			msdyn_Level: {},
			msdyn_Line: {},
			msdyn_Member: {},
			msdyn_Message: {},
			msdyn_Module: {},
			msdyn_name: {},
			msdyn_ReturnStatus: {},
			msdyn_RuleId: {},
			msdyn_RuleReferenceUri: {},
			msdyn_Severity: {},
			msdyn_Snippet: {},
			msdyn_SolutionHealthMessage: {},
			msdyn_Type: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {

		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			OwnerId: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
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
})(MyDog || (MyDog = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_analysisresult = {
		msdyn_AnalysisComponentType : {
			Organization_Health: 192350000,
			Component_Health: 192350001
		},
		msdyn_Category : {
			Accessibility: 192350008,
			Design: 192350004,
			Maintainability: 192350006,
			Online_Migration: 192350005,
			Performance: 192350000,
			Security: 192350003,
			Supportability: 192350007,
			Upgrade_Readiness: 192350001,
			Usage: 192350002
		},
		msdyn_ComponentType : {
			Web_Resources: 192350000,
			Plug_In: 192350001,
			Configuration: 192350002
		},
		msdyn_Level : {
			Error: 192350000,
			Warning: 192350001
		},
		msdyn_ReturnStatus : {
			Resolved: 192350003,
			Pass: 192350000,
			Fail: 192350001,
			Config_Error: 192350002,
			Warning: 192350004,
			Error: 192350005
		},
		msdyn_Severity : {
			Low: 192350000,
			Medium: 192350001,
			High: 192350002,
			Critical: 192350003
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