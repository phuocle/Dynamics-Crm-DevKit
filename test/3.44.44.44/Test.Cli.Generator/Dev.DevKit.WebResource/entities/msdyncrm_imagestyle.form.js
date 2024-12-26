'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdyncrm_imagestyle_Information = function(executionContext, defaultWebResourceName) {
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
			msdyncrm_align: {},
			msdyncrm_alttext: {},
			msdyncrm_autowidth: {},
			msdyncrm_fit: {},
			msdyncrm_height: {},
			msdyncrm_imagesource: {},
			msdyncrm_link: {},
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
			msdyncrm_width: {},
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
	DevKit.Formmsdyncrm_imagestyle_Information2 = function(executionContext, defaultWebResourceName) {
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
			msdyncrm_align: {},
			msdyncrm_alttext: {},
			msdyncrm_autowidth: {},
			msdyncrm_emailtext: {},
			msdyncrm_fileid: {},
			msdyncrm_fit: {},
			msdyncrm_height: {},
			msdyncrm_imagesource: {},
			msdyncrm_link: {},
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
			msdyncrm_tracking: {},
			msdyncrm_verticalalign: {},
			msdyncrm_width: {},
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
	DevKit.FormPopup_form = function(executionContext, defaultWebResourceName) {
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
			msdyncrm_align: {},
			msdyncrm_alttext: {},
			msdyncrm_fileid: {},
			msdyncrm_height: {},
			msdyncrm_imagesource: {},
			msdyncrm_name: {},
			msdyncrm_paddingleft: {},
			msdyncrm_paddingtop: {},
			msdyncrm_width: {},
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
	OptionSet.msdyncrm_imagestyle = {
		msdyncrm_fit : {
			Custom: 164230001,
			Fill: 164230000
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