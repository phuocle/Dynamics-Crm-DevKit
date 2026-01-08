'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormFeedback = function(executionContext, defaultWebResourceName) {
		const form = {
			body: ["ClosedBy", "ClosedOn", "Comments", "CreatedBy", "CreatedByContact", "CreatedOn", "MaxRating", "MinRating", "Rating", "RegardingObjectId", "Source", "Title"],
			bpf: [],
			dialog: [],
			grid: [],
			header: ["NormalizedRating", "OwnerId", "StatusCode"],
			navigation: [],
			quick: [],
			tab: ["general___feedback_Contacts", "general___feedback_Details"]
		};
		return devKit.LoadFormV2(executionContext, defaultWebResourceName, form);
	};
	DevKit.FormFeedback_MainIC = function(executionContext, defaultWebResourceName) {
		const form = {
			body: ["ClosedBy", "ClosedOn", "Comments", "CreatedBy", "CreatedByContact", "MaxRating", "MinRating", "NormalizedRating", "Rating", "RegardingObjectId", "Source", "Title"],
			bpf: [],
			dialog: [],
			grid: [],
			header: ["CreatedOn", "OwnerId", "StateCode", "StatusCode"],
			navigation: [],
			quick: [],
			tab: ["general___Content", "general___Content_2", "general___General_Info"]
		};
		return devKit.LoadFormV2(executionContext, defaultWebResourceName, form);
	};
	DevKit.FormNew_Comment_Form = function(executionContext, defaultWebResourceName) {
		const form = {
			body: ["Comments"],
			bpf: [],
			dialog: [],
			grid: [],
			header: [],
			navigation: [],
			quick: [],
			tab: ["general___feedback_Details"]
		};
		return devKit.LoadFormV2(executionContext, defaultWebResourceName, form);
	};
	DevKit.Formsimple_contact_us_form = function(executionContext, defaultWebResourceName) {
		const form = {
			body: ["Adx_ContactEmail", "Adx_CreatedByContact", "Comments", "Title"],
			bpf: [],
			dialog: [],
			grid: [],
			header: ["NormalizedRating", "OwnerId", "StatusCode"],
			navigation: [],
			quick: [],
			tab: ["Your_details___CONTACT_INFORMATION"]
		};
		return devKit.LoadFormV2(executionContext, defaultWebResourceName, form);
	};
	DevKit.FormFeedback_Quick_Create = function(executionContext, defaultWebResourceName) {
		const form = {
			body: ["Comments", "CreatedByContact", "MaxRating", "MinRating", "OwnerId", "Rating", "RegardingObjectId", "Source", "StatusCode", "Title"],
			bpf: [],
			dialog: [],
			grid: [],
			header: [],
			navigation: [],
			quick: [],
			tab: ["general___feedback_Contacts", "general___feedback_Details"]
		};
		return devKit.LoadFormV2(executionContext, defaultWebResourceName, form);
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.Feedback = {
		msdyn_ContextObjectIdType: { },
		RegardingObjectTypeCode: { },
		Source: { Internal: 0, Portal: 1 },
		StateCode: { Closed: 1, Open: 0 },
		StatusCode: { Accepted: 2, Closed: 3, Proposed: 1, Rejected: 4 },
		RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
	};
})(OptionSet || (OptionSet = {}));