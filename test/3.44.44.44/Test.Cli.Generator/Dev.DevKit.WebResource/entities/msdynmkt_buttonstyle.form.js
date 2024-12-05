'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormCustom_Link_Popup = function(executionContext, defaultWebResourceName) {
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
			msdynmkt_buttontext: {},
			msdynmkt_linkto: {},
			msdynmkt_target: {},
			msdynmkt_tracking: {}
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
	DevKit.FormHTML_Link_Popup = function(executionContext, defaultWebResourceName) {
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
			msdynmkt_linkto: {},
			msdynmkt_target: {},
			msdynmkt_tracking: {}
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
	DevKit.Formmsdynmkt_buttonstyle_Information = function(executionContext, defaultWebResourceName) {
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
			msdynmkt_alignment: {},
			msdynmkt_bordercolor: {},
			msdynmkt_bordersize: {},
			msdynmkt_borderstyle: {},
			msdynmkt_buttoncolor: {},
			msdynmkt_buttontext: {},
			msdynmkt_emailcolorpalette: {},
			msdynmkt_fittotext: {},
			msdynmkt_fontfamily: {},
			msdynmkt_fontitalicstyle: {},
			msdynmkt_fontsize: {},
			msdynmkt_fontweight: {},
			msdynmkt_height: {},
			msdynmkt_linkto: {},
			msdynmkt_marginbottom: {},
			msdynmkt_marginleft: {},
			msdynmkt_marginright: {},
			msdynmkt_margintop: {},
			msdynmkt_name: {},
			msdynmkt_paddingbottom: {},
			msdynmkt_paddingleft: {},
			msdynmkt_paddingright: {},
			msdynmkt_paddingtop: {},
			msdynmkt_roundedcorners: {},
			msdynmkt_target: {},
			msdynmkt_textdecoration: {},
			msdynmkt_textstylecolor: {},
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
	OptionSet.msdynmkt_buttonstyle = {
		msdynmkt_parentstatuscode : {
			Draft: 1,
			Inactive: 100,
			Live_editing: 3,
			Ready_to_send: 2
		},
		msdynmkt_target : {
			_blank: 164230001,
			_parent: 164230002,
			_self: 164230000,
			_top: 164230003
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