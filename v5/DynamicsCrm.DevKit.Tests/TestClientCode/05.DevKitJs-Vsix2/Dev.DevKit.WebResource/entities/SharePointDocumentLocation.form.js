'use strict';
/** @namespace DevKit */
// @ts-ignore
var DevKit;
(function (/** @type {any} */ DevKit) {
	'use strict';
	DevKit.FormSharePointDocumentLocation_Information = function(executionContext, defaultWebResourceName) {
		const form = {
			body: ["AbsoluteURL", "Description", "LocationType", "Name", "OwnerId", "ParentSiteOrLocation", "RegardingObjectId", "RelativeUrl", "urloption"],
			bpf: [],
			dialog: [],
			grid: [],
			header: [],
			navigation: ["navSubDocumentLocations"],
			quick: [],
			tab: ["general____272EB814_0769_5EBE_3ED1_E95A0B16853E", "general___url_option"]
		};
		return devKit.LoadFormV2(executionContext, defaultWebResourceName, form);
	};
})(DevKit || (DevKit = /** @type {any} */ ({})));
/** @namespace OptionSet */
// @ts-ignore
var OptionSet;
(function (/** @type {any} */ OptionSet) {
	OptionSet.SharePointDocumentLocation = {
		LocationType: { Dedicated_for_OneNote_Integration: 1, General: 0 },
		ParentSiteOrLocationTypeCode: { },
		RegardingObjectTypeCode: { },
		ServiceType: { MS_Teams: 3, OneDrive: 1, Shared_with_me: 2, SharePoint: 0 },
		StateCode: { Active: 0, Inactive: 1 },
		StatusCode: { Active: 1, Inactive: 2 },
		RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
	};
})(OptionSet || (OptionSet = /** @type {any} */ ({})));