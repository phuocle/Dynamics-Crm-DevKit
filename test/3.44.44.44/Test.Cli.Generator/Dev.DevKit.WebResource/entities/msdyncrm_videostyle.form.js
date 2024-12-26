'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdyncrm_videostyle_Information = function(executionContext, defaultWebResourceName) {
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
			msdyncrm_alignment: {},
			msdyncrm_alttext: {},
			msdyncrm_autowidth: {},
			msdyncrm_height: {},
			msdyncrm_marginbottom: {},
			msdyncrm_marginleft: {},
			msdyncrm_marginright: {},
			msdyncrm_margintop: {},
			msdyncrm_name: {},
			msdyncrm_noalttext: {},
			msdyncrm_originalheight: {},
			msdyncrm_originalwidth: {},
			msdyncrm_paddingbottom: {},
			msdyncrm_paddingleft: {},
			msdyncrm_paddingright: {},
			msdyncrm_paddingtop: {},
			msdyncrm_roundedcorners: {},
			msdyncrm_verticalalign: {},
			msdyncrm_videoId: {},
			msdyncrm_videourl: {},
			msdyncrm_width: {},
			OwnerId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			_C08038F2_C9EB_4CEF_AE69_7E7FFA12F5D9: {
				Section: {
					_3A13E430_C838_4AC9_95BC_1B2E47A20896: {},
					Size_expanded: {},
					Spacing: {},
					Style: {},
					Video: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var navigation = {
			msdyncrm_msdyncrm_videostyle_msdyncrm_videostyle_videoid: {}
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
	OptionSet.msdyncrm_videostyle = {
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