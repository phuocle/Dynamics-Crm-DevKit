'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdyncrm_layoutstyle_Information = function(executionContext, defaultWebResourceName) {
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
			msdyncrm_backgroundimage: {},
			msdyncrm_backgroundpositionx: {},
			msdyncrm_backgroundpositiony: {},
			msdyncrm_backgroundsize: {},
			msdyncrm_bordercolor: {},
			msdyncrm_bordersize: {},
			msdyncrm_borderstyle2: {},
			msdyncrm_desktop: {},
			msdyncrm_emailcolorpalette: {},
			msdyncrm_equal: {},
			msdyncrm_image: {},
			msdyncrm_layout: {},
			msdyncrm_marginbottom: {},
			msdyncrm_marginleft: {},
			msdyncrm_marginright: {},
			msdyncrm_margintop: {},
			msdyncrm_mobile: {},
			msdyncrm_name: {},
			msdyncrm_paddingbottom: {},
			msdyncrm_paddingleft: {},
			msdyncrm_paddingright: {},
			msdyncrm_paddingtop: {},
			msdyncrm_roundedcorners: {},
			msdyncrm_sectionbackgroundcolor: {},
			msdyncrm_wrap: {},
			OwnerId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {

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
	DevKit.Formmsdyncrm_layoutstyle_Information2 = function(executionContext, defaultWebResourceName) {
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
			msdyncrm_backgroundimage: {},
			msdyncrm_backgroundimagefileid: {},
			msdyncrm_backgroundpositionx: {},
			msdyncrm_backgroundpositiony: {},
			msdyncrm_backgroundsize: {},
			msdyncrm_bordercolor: {},
			msdyncrm_bordersize: {},
			msdyncrm_borderstyle2: {},
			msdyncrm_desktop: {},
			msdyncrm_emailcolorpalette: {},
			msdyncrm_equal: {},
			msdyncrm_image: {},
			msdyncrm_layout: {},
			msdyncrm_marginbottom: {},
			msdyncrm_marginleft: {},
			msdyncrm_marginright: {},
			msdyncrm_margintop: {},
			msdyncrm_mobile: {},
			msdyncrm_name: {},
			msdyncrm_paddingbottom: {},
			msdyncrm_paddingleft: {},
			msdyncrm_paddingright: {},
			msdyncrm_paddingtop: {},
			msdyncrm_roundedcorners: {},
			msdyncrm_sectionbackgroundcolor: {},
			msdyncrm_wrap: {},
			OwnerId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {

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
	OptionSet.msdyncrm_layoutstyle = {
		msdyncrm_assetsprovider : {
			Commerce: 2,
			Digital_Assets: 1
		},
		msdyncrm_backgroundsize : {
			Contain: 164230001,
			Fill_Cover: 164230000
		},
		msdyncrm_backgroundtype : {
			Content_width: 164230001,
			Full_width: 164230000
		},
		msdyncrm_borderstyle : {
			Dashed: 164230003,
			Dotted: 164230002,
			Double: 164230004,
			None: 164230000,
			Solid: 164230001
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