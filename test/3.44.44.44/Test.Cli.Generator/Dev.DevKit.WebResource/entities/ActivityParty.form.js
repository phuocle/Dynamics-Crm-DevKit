'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.ActivityParty = {
		InstanceTypeCode : {
			Not_Recurring: 0,
			Recurring_Exception: 3,
			Recurring_Future_Exception: 4,
			Recurring_Instance: 2,
			Recurring_Master: 1
		},
		ParticipationTypeMask : {
			BCC_Recipient: 4,
			CC_Recipient: 3,
			Chat_Participant: 12,
			Customer: 11,
			Optional_attendee: 6,
			Organizer: 7,
			Owner: 9,
			Regarding: 8,
			Related: 13,
			Required_attendee: 5,
			Resource: 10,
			Sender: 1,
			To_Recipient: 2
		},
		PartyObjectTypeCode : {
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