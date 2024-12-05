'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdynmkt_imagestyle_Information = function(executionContext, defaultWebResourceName) {
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
			msdynmkt_align: {},
			msdynmkt_alttext: {},
			msdynmkt_autowidth: {},
			msdynmkt_emailtext: {},
			msdynmkt_fileid: {},
			msdynmkt_fit: {},
			msdynmkt_height: {},
			msdynmkt_imagesource: {},
			msdynmkt_link: {},
			msdynmkt_marginbottom: {},
			msdynmkt_marginleft: {},
			msdynmkt_marginright: {},
			msdynmkt_margintop: {},
			msdynmkt_name: {},
			msdynmkt_noalttext: {},
			msdynmkt_originalheight: {},
			msdynmkt_originalwidth: {},
			msdynmkt_paddingbottom: {},
			msdynmkt_paddingleft: {},
			msdynmkt_paddingright: {},
			msdynmkt_paddingtop: {},
			msdynmkt_roundedcorners: {},
			msdynmkt_verticalalign: {},
			msdynmkt_width: {},
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
	DevKit.Formmsdynmkt_imagestyle_Information2 = function(executionContext, defaultWebResourceName) {
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
			msdynmkt_alias: {},
			msdynmkt_align: {},
			msdynmkt_alttext: {},
			msdynmkt_autowidth: {},
			msdynmkt_emailtext: {},
			msdynmkt_fileid: {},
			msdynmkt_fit: {},
			msdynmkt_height: {},
			msdynmkt_imagesource: {},
			msdynmkt_link: {},
			msdynmkt_marginbottom: {},
			msdynmkt_marginleft: {},
			msdynmkt_marginright: {},
			msdynmkt_margintop: {},
			msdynmkt_name: {},
			msdynmkt_noalttext: {},
			msdynmkt_originalheight: {},
			msdynmkt_originalwidth: {},
			msdynmkt_paddingbottom: {},
			msdynmkt_paddingleft: {},
			msdynmkt_paddingright: {},
			msdynmkt_paddingtop: {},
			msdynmkt_roundedcorners: {},
			msdynmkt_tracking: {},
			msdynmkt_verticalalign: {},
			msdynmkt_width: {},
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
	OptionSet.msdynmkt_imagestyle = {
		msdynmkt_assetsprovider : {
			Commerce: 2,
			Digital_Assets: 1
		},
		msdynmkt_fit : {
			Custom: 164230001,
			Fill: 164230000
		},
		msdynmkt_parentstatuscode : {
			Draft: 1,
			Inactive: 100,
			Live_editing: 3,
			Ready_to_send: 2
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