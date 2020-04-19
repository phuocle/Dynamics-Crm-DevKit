'use strict';
/** @namespace LuckyStar */
var LuckyStar;
(function (LuckyStar) {
	'use strict';
	LuckyStar.Formmsdyn_solutionhistory_Information = function(executionContext, defaultWebResourceName) {
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
			msdyn_errorcode: {},
			msdyn_exceptionmessage: {},
			msdyn_ismanaged: {},
			msdyn_isoverwritecustomizations: {},
			msdyn_ispatch: {},
			msdyn_name: {},
			msdyn_operation: {},
			msdyn_publishername: {},
			msdyn_solutionversion: {},
			msdyn_suboperation: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			: {
				Section: {
					_91457836_8222_4BA7_AE4E_DC96312096E0_SECTION_2: {},
					_91457836_8222_4BA7_AE4E_DC96312096E0_SECTION_3: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			msdyn_endtime: {},
			msdyn_result: {},
			msdyn_starttime: {},
			msdyn_totaltime: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
		var footer = {
			msdyn_activityid: {}
		};
		devKit.LoadFields(formContext, footer, "footer_");
		form.Footer = footer;
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
})(LuckyStar || (LuckyStar = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_solutionhistory = {
		msdyn_operation : {
			Import: 0,
			Uninstall: 1,
			Export: 2,
			Publish: 3,
			PublishAll: 4,
			LanguageProvision: 5,
			ImportTranslation: 6,
			RibbonMetadataGeneration: 7,
			WorkflowSetState: 8,
			None: 9
		},
		msdyn_status : {
			Started: 0,
			Completed: 1
		},
		msdyn_suboperation : {
			None: 0,
			New: 1,
			Upgrade: 2,
			Update: 3,
			Delete: 4
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