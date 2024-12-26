'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdyncrm_generalstyles_Information = function(executionContext, defaultWebResourceName) {
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
			msdyncrm_bordercolor: {},
			msdyncrm_bordercolor1: {},
			msdyncrm_bordersize: {},
			msdyncrm_bordersize1: {},
			msdyncrm_borderstyle: {},
			msdyncrm_borderstyle1: {},
			msdyncrm_buttoncolor: {},
			msdyncrm_dividercolor: {},
			msdyncrm_dividerlinestyle: {},
			msdyncrm_dividersize: {},
			msdyncrm_emailcolorpalette: {},
			msdyncrm_emailwidth: {},
			msdyncrm_font: {},
			msdyncrm_fontsize: {},
			msdyncrm_heading1color: {},
			msdyncrm_heading1font: {},
			msdyncrm_heading1size: {},
			msdyncrm_heading2color: {},
			msdyncrm_heading2font: {},
			msdyncrm_heading2size: {},
			msdyncrm_heading3color: {},
			msdyncrm_heading3font: {},
			msdyncrm_heading3size: {},
			msdyncrm_innerbackgroundcolor: {},
			msdyncrm_lineheight: {},
			msdyncrm_name: {},
			msdyncrm_outerbackgroundcolor: {},
			msdyncrm_paragraphcolor: {},
			msdyncrm_paragraphfont: {},
			msdyncrm_paragraphsize: {},
			msdyncrm_plaintextfullwidth: {},
			msdyncrm_roundedcorners: {},
			msdyncrm_textdecoration: {},
			msdyncrm_textfontweight: {},
			msdyncrm_textitalicstyle: {},
			msdyncrm_textlinkfontweight: {},
			msdyncrm_textlinkitalicstyle: {},
			msdyncrm_textlinkstylecolor: {},
			msdyncrm_textlinktextdecoration: {},
			msdyncrm_textstylecolor: {},
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
	OptionSet.msdyncrm_generalstyles = {
		msdyncrm_dividerstyle : {
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