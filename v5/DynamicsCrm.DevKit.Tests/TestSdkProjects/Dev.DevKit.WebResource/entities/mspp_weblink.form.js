'use strict';
/** @namespace DevKit */
// @ts-ignore
var DevKit;
(function (/** @type {any} */ DevKit) {
	'use strict';
	DevKit.Formmspp_weblink_Information = function(executionContext, defaultWebResourceName) {
		const form = {
			body: ["mspp_description", "mspp_description1", "mspp_disablepagevalidation", "mspp_displayimageonly", "mspp_displayorder", "mspp_displaypagechildlinks", "mspp_externalurl", "mspp_imagealttext", "mspp_imageheight", "mspp_imageurl", "mspp_imagewidth", "mspp_name", "mspp_openinnewwindow", "mspp_pageid", "mspp_parentweblinkid", "mspp_publishingstateid", "mspp_robotsfollowlink", "mspp_weblinksetid"],
			bpf: [],
			dialog: [],
			grid: [],
			header: [],
			navigation: [],
			quick: [],
			tab: ["_FB562B86_E39C_490E_B7B2_D7C53D363325____5D983152_5327_4492_B286_B7446CF20F0D", "_FB562B86_E39C_490E_B7B2_D7C53D363325____A5DB4708_AB02_DE11_BDF3_0003FF48C0DB", "_FB562B86_E39C_490E_B7B2_D7C53D363325____FB562B86_E39C_490E_B7B2_D7C53D363325_SECTION_3", "_FB562B86_E39C_490E_B7B2_D7C53D363325___mspp_weblink_description_monacoEditor"]
		};
		return devKit.LoadFormV2(executionContext, defaultWebResourceName, form);
	};
})(DevKit || (DevKit = /** @type {any} */ ({})));
/** @namespace OptionSet */
// @ts-ignore
var OptionSet;
(function (/** @type {any} */ OptionSet) {
	OptionSet.mspp_weblink = {
		statecode: { Active: 0, Inactive: 1 },
		statuscode: { Active: 1, Inactive: 2 },
		RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
	};
})(OptionSet || (OptionSet = /** @type {any} */ ({})));