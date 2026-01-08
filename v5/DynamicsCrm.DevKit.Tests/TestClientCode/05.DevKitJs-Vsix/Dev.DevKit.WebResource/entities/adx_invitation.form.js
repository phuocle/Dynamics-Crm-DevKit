'use strict';
/** @namespace DevKit */
// @ts-ignore
var DevKit;
(function (/** @type {any} */ DevKit) {
	'use strict';
	DevKit.FormInformation_Enhanced = function(executionContext, defaultWebResourceName) {
		const form = {
			body: ["adx_assignToAccount", "adx_expiryDate", "adx_invitationCode", "adx_inviteContact", "adx_invitercontact", "adx_maximumRedemptions", "adx_name", "adx_redeemedContact", "adx_redemptions", "adx_redemptionWorkflow", "adx_type", "InviteContacts", "notescontrol", "OwnerId", "PowerPageComponent_AssignToWebRoles", "RedeemedContacts"],
			bpf: [],
			dialog: [],
			grid: ["InviteContacts", "PowerPageComponent_AssignToWebRoles", "RedeemedContacts"],
			header: ["statuscode"],
			navigation: ["nav_adx_invitation_invitecontacts", "nav_adx_invitation_redeemedcontacts", "navConnections"],
			quick: [],
			tab: ["invitation_advanced_tab____62B474B9_CC48_4B2F_8FD8_B190D697DCE8", "invitation_general_tab____26C36B89_7F53_4CED_9D97_934A779815E6", "invitation_general_tab____656F2307_E1F2_4515_AEB4_4F9AF287D4A4_SECTION_5", "invitation_general_tab___invitee_section", "invitation_general_tab___invitees_section", "invitation_general_tab___redemption_section", "invitation_general_tab___redemptions_section"]
		};
		return devKit.LoadFormV2(executionContext, defaultWebResourceName, form);
	};
})(DevKit || (DevKit = /** @type {any} */ ({})));
/** @namespace OptionSet */
// @ts-ignore
var OptionSet;
(function (/** @type {any} */ OptionSet) {
	OptionSet.adx_invitation = {
		adx_type: { Group: 756150001, Single: 756150000 },
		statecode: { Active: 0, Inactive: 1 },
		statuscode: { Inactive: 2, New: 1, Redeemed: 756150001, Sent: 756150000 },
		RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
	};
})(OptionSet || (OptionSet = /** @type {any} */ ({})));