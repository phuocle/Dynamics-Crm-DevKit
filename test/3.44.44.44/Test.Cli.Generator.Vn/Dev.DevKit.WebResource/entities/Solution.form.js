'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormThong_tin = function(executionContext, defaultWebResourceName) {
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
			ConfigurationPageId: {},
			Description: {},
			FriendlyName: {},
			IFRAME_SolutionsMarketplace: {},
			InstalledOn: {},
			IsManaged: {},
			PublisherId: {},
			UniqueName: {},
			Version: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			_9129B06A_8446_77D8_2BD2_027C5006BE41: {
				Section: {
					solutionmarketplacesection: {}
				}
			},
			general: {
				Section: {
					description: {},
					solution_information: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var navigation = {
			solution_fieldsecurityprofile: {},
			solution_parent_solution: {},
			solution_role: {},
			solution_solutioncomponent: {},
			user_settings_preferred_solution: {}
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
	OptionSet.Solution = {
		SolutionType : {
			Anh_chup_nhanh: 1,
			Khong_co: 0,
			Noi_bo: 2
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