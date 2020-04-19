'use strict';
/** @namespace LuckyMokey */
var LuckyMokey;
(function (LuckyMokey) {
	'use strict';
	LuckyMokey.FormQueue_Information = function(executionContext, defaultWebResourceName) {
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
			DefaultMailbox: {},
			Description: {},
			EMailAddress: {},
			IncomingEmailFilteringMethod: {},
			Name: {},
			OwnerId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			general: {
				Section: {
					queue_information: {},
					incoming_email: {},
					email_configuration: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var quickForm = {

		};
		devKit.LoadQuickForms(formContext, quickForm);
		form.QuickForm = quickForm;
		var navigation = {

		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		return form;
	};
	LuckyMokey.FormOmnichannel_queue = function(executionContext, defaultWebResourceName) {
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
			Agents: {},
			msdyn_isomnichannelqueue: {},
			msdyn_priority: {},
			Name: {},
			OwnerId: {},
			QueueViewType: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			general: {
				Section: {
					queue_information: {},
					general_section_4: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			IncomingEmailFilteringMethod: {},
			QueueViewType: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
		var quickForm = {

		};
		devKit.LoadQuickForms(formContext, quickForm);
		form.QuickForm = quickForm;
		var navigation = {

		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		return form;
	};
	LuckyMokey.FormQueue = function(executionContext, defaultWebResourceName) {
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
			DefaultMailbox: {},
			Description: {},
			EMailAddress: {},
			IncomingEmailFilteringMethod: {},
			msdyn_isomnichannelqueue: {},
			Name: {},
			OwnerId: {},
			QueueItemsGrid: {},
			queuemembersgrid: {},
			QueueViewType: {},
			RecordCreationAndUpdateRuleGrid: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			general: {
				Section: {
					queue_information: {},
					general_section_7: {},
					incoming_email: {},
					RecordCreationAndUpdateRule: {},
					QueueItems: {},
					QueueMembers: {},
					QueueMembersNoRecord: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var quickForm = {

		};
		devKit.LoadQuickForms(formContext, quickForm);
		form.QuickForm = quickForm;
		var navigation = {

		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		return form;
	};
})(LuckyMokey || (LuckyMokey = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.Queue = {
		EmailRouterAccessApproval : {
			Empty: 0,
			Approved: 1,
			Pending_Approval: 2,
			Rejected: 3
		},
		IncomingEmailDeliveryMethod : {
			None: 0,
			Server_Side_Synchronization_or_Email_Router: 2,
			Forward_Mailbox: 3
		},
		IncomingEmailFilteringMethod : {
			All_email_messages: 0,
			Email_messages_in_response_to_Dynamics_365_email: 1,
			Email_messages_from_Dynamics_365_Leads_Contacts_and_Accounts: 2,
			Email_messages_from_Dynamics_365_records_that_are_email_enabled: 3,
			No_email_messages: 4
		},
		OutgoingEmailDeliveryMethod : {
			None: 0,
			Server_Side_Synchronization_or_Email_Router: 2
		},
		QueueTypeCode : {
			Default_Value: 1
		},
		QueueViewType : {
			Public: 0,
			Private: 1
		},
		StateCode : {
			Active: 0,
			Inactive: 1
		},
		StatusCode : {
			Inactive: 2,
			Active: 1
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