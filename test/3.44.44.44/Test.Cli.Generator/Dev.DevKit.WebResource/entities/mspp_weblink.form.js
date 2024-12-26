'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmspp_weblink_Information = function(executionContext, defaultWebResourceName) {
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
			mspp_description: {},
			mspp_description1: {},
			mspp_disablepagevalidation: {},
			mspp_displayimageonly: {},
			mspp_displayorder: {},
			mspp_displaypagechildlinks: {},
			mspp_externalurl: {},
			mspp_imagealttext: {},
			mspp_imageheight: {},
			mspp_imageurl: {},
			mspp_imagewidth: {},
			mspp_name: {},
			mspp_openinnewwindow: {},
			mspp_pageid: {},
			mspp_parentweblinkid: {},
			mspp_publishingstateid: {},
			mspp_robotsfollowlink: {},
			mspp_weblinksetid: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			_FB562B86_E39C_490E_B7B2_D7C53D363325: {
				Section: {
					_5D983152_5327_4492_B286_B7446CF20F0D: {},
					_A5DB4708_AB02_DE11_BDF3_0003FF48C0DB: {},
					_FB562B86_E39C_490E_B7B2_D7C53D363325_SECTION_3: {},
					mspp_weblink_description_monacoEditor: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var navigation = {
			mspp_weblink_weblink: {}
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
	OptionSet.mspp_weblink = {
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