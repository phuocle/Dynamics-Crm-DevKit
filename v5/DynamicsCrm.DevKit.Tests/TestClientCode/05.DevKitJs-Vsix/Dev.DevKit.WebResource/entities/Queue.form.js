'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormQueue_Information = function(executionContext, defaultWebResourceName) {
		const form = {
			body: ["DefaultMailbox", "Description", "EMailAddress", "IncomingEmailFilteringMethod", "Name", "OwnerId"],
			bpf: [],
			dialog: [],
			grid: [],
			header: [],
			navigation: ["navActivities"],
			quick: [],
			tab: ["general___email_configuration", "general___incoming_email", "general___queue_information"]
		};
		return devKit.LoadFormV2(executionContext, defaultWebResourceName, form);
	};
	DevKit.FormQueue = function(executionContext, defaultWebResourceName) {
		const form = {
			body: ["DefaultMailbox", "Description", "EMailAddress", "IncomingEmailFilteringMethod", "Name", "OwnerId", "QueueItemsGrid", "queuemembersgrid", "QueueViewType", "RecordCreationAndUpdateRuleGrid"],
			bpf: [],
			dialog: [],
			grid: ["QueueItemsGrid", "queuemembersgrid", "RecordCreationAndUpdateRuleGrid"],
			header: [],
			navigation: ["navActivities"],
			quick: [],
			tab: ["general___incoming_email", "general___queue_information", "general___QueueItems", "general___QueueMembers", "general___QueueMembersNoRecord", "general___RecordCreationAndUpdateRule"]
		};
		return devKit.LoadFormV2(executionContext, defaultWebResourceName, form);
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.Queue = {
		EmailRouterAccessApproval: { Approved: 1, Empty: 0, Pending_Approval: 2, Rejected: 3 },
		IncomingEmailDeliveryMethod: { Forward_Mailbox: 3, None: 0, Server_Side_Synchronization_or_Email_Router: 2 },
		IncomingEmailFilteringMethod: { All_email_messages: 0, Email_messages_from_Dynamics_365_Leads_Contacts_and_Accounts: 2, Email_messages_from_Dynamics_365_records_that_are_email_enabled: 3, Email_messages_in_response_to_Dynamics_365_email: 1, No_email_messages: 4 },
		OutgoingEmailDeliveryMethod: { None: 0, Server_Side_Synchronization_or_Email_Router: 2 },
		QueueTypeCode: { Default_Value: 1 },
		QueueViewType: { Private: 1, Public: 0 },
		StateCode: { Active: 0, Inactive: 1 },
		StatusCode: { Active: 1, Inactive: 2 },
		RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
	};
})(OptionSet || (OptionSet = {}));