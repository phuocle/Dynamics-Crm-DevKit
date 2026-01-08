'use strict';
/** @namespace DevKit */
// @ts-ignore
var DevKit;
(function (/** @type {any} */ DevKit) {
	'use strict';
	DevKit.FormChannel_Property_Group = function(executionContext, defaultWebResourceName) {
		const form = {
			body: ["CreatedOn", "Name", "propertiesGrid", "RegardingTypeCode"],
			bpf: [],
			dialog: [],
			grid: ["propertiesGrid"],
			header: [],
			navigation: [],
			quick: [],
			tab: ["property_bag_summary___property_bag_items_1", "property_bag_summary___property_bag_properties_1"]
		};
		return devKit.LoadFormV2(executionContext, defaultWebResourceName, form);
	};
})(DevKit || (DevKit = /** @type {any} */ ({})));
/** @namespace OptionSet */
// @ts-ignore
var OptionSet;
(function (/** @type {any} */ OptionSet) {
	OptionSet.ChannelPropertyGroup = {
		ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
		RegardingTypeCode: { Appointment: 4201, Email: 4202, Invite_Redemption: 10407, Phone_Call: 4210, Portal_Comment: 10408, Social_Activity: 4216, Task: 4212, Teams_chat: 10253 },
		statecode: { Active: 0, Inactive: 1 },
		statuscode: { Active: 1, Inactive: 2 },
		RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
	};
})(OptionSet || (OptionSet = /** @type {any} */ ({})));