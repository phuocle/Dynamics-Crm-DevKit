'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormQueue_Information = function(executionContext, defaultWebResourceName) {
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
					email_configuration: {},
					incoming_email: {},
					queue_information: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var navigation = {
			convertrule_queue: {},
			email_acceptingentity_queue: {},
			mailbox_regarding_queue: {},
			msdyn_liveworkstream_defaultqueue_Queue: {},
			msdyn_queue_msdyn_assignmentconfiguration_queueid: {},
			msdyn_queue_msdyn_liveconversation: {},
			msdyn_queue_msdyn_liveworkstream_msdyn_bot_queue: {},
			msdyn_queue_msdyn_liveworkstream_queueid: {},
			msdyn_queue_msdyn_ocliveworkitem_queueid: {},
			msdyn_queue_msdyn_ocsession_queueid: {},
			msdyn_queue_msdyn_originatingqueue_queueid: {},
			msdyn_queue_msdyn_salesroutingrun_ownerassigned: {},
			msdyn_queue_msdyn_salesroutingrun_previousowner: {},
			msdyn_queue_msdyn_sessionparticipant_msdyn_cdsqueueid: {},
			msdyn_queue_msdyn_unifiedroutingrun_queue: {},
			msdyn_queue_ocruleitem: {},
			msdyn_rulesetdependencymapping_queue_msdyn_referencedpolymorphicentityid: {},
			queue_convertruleitem: {},
			Queue_Email_EmailSender: {},
			queue_entries: {},
			queue_msdyn_entityId_msdyn_activeicdextension: {},
			queue_msdyn_entityId_msdyn_entityWorkstreamMap: {},
			queue_msdyn_entityId_msdyn_icdextension: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormOmnichannel_queue = function(executionContext, defaultWebResourceName) {
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
			msdyn_operatinghourid: {},
			msdyn_priority: {},
			msdyn_queuetype: {},
			Name: {},
			OwnerId: {},
			QueueViewType: {},
			WebResource_ocpreviewterms: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			general: {
				Section: {
					general_section_4: {},
					queue_information: {}
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
		var grid = {
			Agents: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			convertrule_queue: {},
			email_acceptingentity_queue: {},
			mailbox_regarding_queue: {},
			msdyn_liveworkstream_defaultqueue_Queue: {},
			msdyn_queue_msdyn_assignmentconfiguration_queueid: {},
			msdyn_queue_msdyn_liveconversation: {},
			msdyn_queue_msdyn_liveworkstream_msdyn_bot_queue: {},
			msdyn_queue_msdyn_liveworkstream_queueid: {},
			msdyn_queue_msdyn_ocliveworkitem_queueid: {},
			msdyn_queue_msdyn_ocsession_queueid: {},
			msdyn_queue_msdyn_originatingqueue_queueid: {},
			msdyn_queue_msdyn_salesroutingrun_ownerassigned: {},
			msdyn_queue_msdyn_salesroutingrun_previousowner: {},
			msdyn_queue_msdyn_sessionparticipant_msdyn_cdsqueueid: {},
			msdyn_queue_msdyn_unifiedroutingrun_queue: {},
			msdyn_queue_ocruleitem: {},
			msdyn_rulesetdependencymapping_queue_msdyn_referencedpolymorphicentityid: {},
			queue_convertruleitem: {},
			Queue_Email_EmailSender: {},
			queue_entries: {},
			queue_msdyn_entityId_msdyn_activeicdextension: {},
			queue_msdyn_entityId_msdyn_entityWorkstreamMap: {},
			queue_msdyn_entityId_msdyn_icdextension: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormQueue = function(executionContext, defaultWebResourceName) {
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
			EmailSignature: {},
			IncomingEmailFilteringMethod: {},
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
					incoming_email: {},
					queue_information: {},
					QueueItems: {},
					QueueMembers: {},
					QueueMembersNoRecord: {},
					RecordCreationAndUpdateRule: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var grid = {
			QueueItemsGrid: {},
			queuemembersgrid: {},
			RecordCreationAndUpdateRuleGrid: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			convertrule_queue: {},
			email_acceptingentity_queue: {},
			mailbox_regarding_queue: {},
			msdyn_liveworkstream_defaultqueue_Queue: {},
			msdyn_queue_msdyn_assignmentconfiguration_queueid: {},
			msdyn_queue_msdyn_liveconversation: {},
			msdyn_queue_msdyn_liveworkstream_msdyn_bot_queue: {},
			msdyn_queue_msdyn_liveworkstream_queueid: {},
			msdyn_queue_msdyn_ocliveworkitem_queueid: {},
			msdyn_queue_msdyn_ocsession_queueid: {},
			msdyn_queue_msdyn_originatingqueue_queueid: {},
			msdyn_queue_msdyn_salesroutingrun_ownerassigned: {},
			msdyn_queue_msdyn_salesroutingrun_previousowner: {},
			msdyn_queue_msdyn_sessionparticipant_msdyn_cdsqueueid: {},
			msdyn_queue_msdyn_unifiedroutingrun_queue: {},
			msdyn_queue_ocruleitem: {},
			msdyn_rulesetdependencymapping_queue_msdyn_referencedpolymorphicentityid: {},
			queue_convertruleitem: {},
			Queue_Email_EmailSender: {},
			queue_entries: {},
			queue_msdyn_entityId_msdyn_activeicdextension: {},
			queue_msdyn_entityId_msdyn_entityWorkstreamMap: {},
			queue_msdyn_entityId_msdyn_icdextension: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormQueue_Hub_Form = function(executionContext, defaultWebResourceName) {
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
			msdyn_name1: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			UsersTab: {
				Section: {
					tab_2_section_1: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var navigation = {
			convertrule_queue: {},
			email_acceptingentity_queue: {},
			mailbox_regarding_queue: {},
			msdyn_liveworkstream_defaultqueue_Queue: {},
			msdyn_queue_msdyn_assignmentconfiguration_queueid: {},
			msdyn_queue_msdyn_liveconversation: {},
			msdyn_queue_msdyn_liveworkstream_msdyn_bot_queue: {},
			msdyn_queue_msdyn_liveworkstream_queueid: {},
			msdyn_queue_msdyn_ocliveworkitem_queueid: {},
			msdyn_queue_msdyn_ocsession_queueid: {},
			msdyn_queue_msdyn_originatingqueue_queueid: {},
			msdyn_queue_msdyn_salesroutingrun_ownerassigned: {},
			msdyn_queue_msdyn_salesroutingrun_previousowner: {},
			msdyn_queue_msdyn_sessionparticipant_msdyn_cdsqueueid: {},
			msdyn_queue_msdyn_unifiedroutingrun_queue: {},
			msdyn_queue_ocruleitem: {},
			msdyn_rulesetdependencymapping_queue_msdyn_referencedpolymorphicentityid: {},
			queue_convertruleitem: {},
			Queue_Email_EmailSender: {},
			queue_entries: {},
			queue_msdyn_entityId_msdyn_activeicdextension: {},
			queue_msdyn_entityId_msdyn_entityWorkstreamMap: {},
			queue_msdyn_entityId_msdyn_icdextension: {}
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
	OptionSet.Queue = {
		EmailRouterAccessApproval : {
			Approved: 1,
			Empty: 0,
			Pending_Approval: 2,
			Rejected: 3
		},
		IncomingEmailDeliveryMethod : {
			Forward_Mailbox: 3,
			None: 0,
			Server_Side_Synchronization_or_Email_Router: 2
		},
		IncomingEmailFilteringMethod : {
			All_email_messages: 0,
			Email_messages_from_Dynamics_365_Leads_Contacts_and_Accounts: 2,
			Email_messages_from_Dynamics_365_records_that_are_email_enabled: 3,
			Email_messages_in_response_to_Dynamics_365_email: 1,
			No_email_messages: 4
		},
		msdyn_assignmentstrategy : {
			Custom_Assignment_Configuration: 192350002,
			Longest_Idle: 192350003,
			Omnichannel_Assignment: 192350000,
			Round_Robin: 192350001
		},
		msdyn_queuetype : {
			Entity: 192350001,
			Messaging: 192350000,
			Voice: 192350002
		},
		OutgoingEmailDeliveryMethod : {
			None: 0,
			Server_Side_Synchronization_or_Email_Router: 2
		},
		QueueTypeCode : {
			Default_Value: 1
		},
		QueueViewType : {
			Private: 1,
			Public: 0
		},
		StateCode : {
			Active: 0,
			Inactive: 1
		},
		StatusCode : {
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