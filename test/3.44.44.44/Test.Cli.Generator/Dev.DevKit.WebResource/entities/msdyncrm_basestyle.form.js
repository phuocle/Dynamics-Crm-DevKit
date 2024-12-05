'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdyncrm_basestyle_Information = function(executionContext, defaultWebResourceName) {
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
			msdyncrm_backgroundColor: {},
			msdyncrm_backgroundImage: {},
			msdyncrm_borderColor: {},
			msdyncrm_borderRadius: {},
			msdyncrm_borderstyle: {},
			msdyncrm_borderWidth: {},
			msdyncrm_emailcolorpalette: {},
			msdyncrm_marginBottom: {},
			msdyncrm_marginLeft: {},
			msdyncrm_marginRight: {},
			msdyncrm_marginTop: {},
			msdyncrm_minHeight: {},
			msdyncrm_name: {},
			msdyncrm_paddingBottom: {},
			msdyncrm_paddingLeft: {},
			msdyncrm_paddingRight: {},
			msdyncrm_paddingTop: {},
			OwnerId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			_2774A41A_FC4E_4616_A4EA_A1B975E46892: {
				Section: {
					_8B9DE7A1_650A_4DD2_8BE1_FA228B831970: {},
					Size: {},
					Spacing: {},
					styles_section: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
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
	OptionSet.msdyncrm_basestyle = {
		msdyncrm_align : {
			Center: 164230002,
			Left: 164230001,
			None: 164230000,
			Right: 164230003
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