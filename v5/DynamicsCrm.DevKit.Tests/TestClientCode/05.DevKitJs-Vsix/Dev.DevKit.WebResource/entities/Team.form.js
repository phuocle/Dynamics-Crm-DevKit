'use strict';
/** @namespace DevKit */
// @ts-ignore
var DevKit;
(function (/** @type {any} */ DevKit) {
	'use strict';
	DevKit.FormTeam = function(executionContext, defaultWebResourceName) {
		const form = {
			body: ["AdministratorId", "AzureActiveDirectoryObjectId", "BusinessUnitId", "Description", "Members", "MembershipType", "Name", "TeamType"],
			bpf: [],
			dialog: [],
			grid: ["Members"],
			header: ["QueueId"],
			navigation: [],
			quick: [],
			tab: ["general___Description", "general___General", "general___TeamMembers"]
		};
		return devKit.LoadFormV2(executionContext, defaultWebResourceName, form);
	};
	DevKit.FormTeam_form_Business = function(executionContext, defaultWebResourceName) {
		const form = {
			body: ["AdministratorId", "BusinessUnitId", "Description", "Members", "Name", "TeamType"],
			bpf: [],
			dialog: [],
			grid: ["Members"],
			header: [],
			navigation: ["navAsyncOperations", "navAudit", "navConnections", "navFieldSecurityProfiles", "navMembers", "navProcessSessions", "navRoles"],
			quick: [],
			tab: ["general___Description", "general___General", "general___TeamMembers"]
		};
		return devKit.LoadFormV2(executionContext, defaultWebResourceName, form);
	};
})(DevKit || (DevKit = /** @type {any} */ ({})));
/** @namespace OptionSet */
// @ts-ignore
var OptionSet;
(function (/** @type {any} */ OptionSet) {
	OptionSet.Team = {
		MembershipType: { Guests: 3, Members: 1, Members_and_guests: 0, Owners: 2 },
		RegardingObjectTypeCode: { },
		TeamType: { Access: 1, Office_Group: 3, Owner: 0, Security_Group: 2 },
		RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
	};
})(OptionSet || (OptionSet = /** @type {any} */ ({})));