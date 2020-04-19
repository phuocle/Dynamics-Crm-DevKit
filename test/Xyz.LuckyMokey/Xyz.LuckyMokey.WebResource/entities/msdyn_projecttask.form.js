'use strict';
/** @namespace LuckyMokey */
var LuckyMokey;
(function (LuckyMokey) {
	'use strict';
	LuckyMokey.Formmsdyn_projecttask_Information = function(executionContext, defaultWebResourceName) {
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
			msdyn_description: {},
			msdyn_duration: {},
			msdyn_Effort: {},
			msdyn_parenttask: {},
			msdyn_project: {},
			msdyn_scheduleddurationminutes: {},
			msdyn_scheduledend: {},
			msdyn_scheduledstart: {},
			msdyn_subject: {},
			msdyn_transactioncategory: {},
			msdyn_WBSID: {},
			notescontrol: {},
			OwnerId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			_7A08287E_9B25_4EE0_A2DD_288055BD63A7: {
				Section: {
					_4FDEB155_C726_4210_A41F_97CE03BD0A9D: {},
					notes_section: {}
				}
			},
			tab_2: {
				Section: {
					tab_2_section_1: {},
					tab_2_section_2: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			msdyn_project: {},
			OwnerId: {},
			statecode: {}
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
})(LuckyMokey || (LuckyMokey = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_projecttask = {
		msdyn_AggregationDirection : {
			Upstream: 0,
			Downstream: 1,
			Both: 2
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