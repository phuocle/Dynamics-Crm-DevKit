'use strict';
/** @namespace DevKitV4 */
var DevKitV4;
(function (DevKitV4) {
	'use strict';
	DevKitV4.FormTask = function(executionContext, defaultWebResourceName) {
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
			ActualDurationMinutes: {},
			Description: {},
			RegardingObjectId: {},
			Subject: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			TASK_TAB: {
				Section: {
					Description: {},
					tab_2_section_2: {},
					TASK: {},
					task_details: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			OwnerId: {},
			PriorityCode: {},
			ScheduledEnd: {},
			StateCode: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
		var navigation = {
			Task_QueueItem: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKitV4.FormTask_for_Interactive_experience = function(executionContext, defaultWebResourceName) {
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
			ActualDurationMinutes: {},
			Description: {},
			RegardingObjectId: {},
			RegardingObjectId1: {},
			Subject: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			tab_4: {
				Section: {
					tab_3_section_3: {},
					tab_4_section_2: {},
					tab_4_section_4: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			OwnerId: {},
			PriorityCode: {},
			ScheduledEnd: {},
			StateCode: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
		var navigation = {
			Task_QueueItem: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKitV4.FormTask_quick_create_form = function(executionContext, defaultWebResourceName) {
		var formContext = null;
		if (executionContext !== undefined)
		{
			if (executionContext.getFormContext === undefined) {
				formContext = executionContext;
			}
			else {
				formContext = executionContext.getFormContext();
			}
		}
		var form = devKit.LoadForm(formContext);
		var body = {
			ActualDurationMinutes: {},
			Description: {},
			OwnerId: {},
			PriorityCode: {},
			RegardingObjectId: {},
			ScheduledEnd: {},
			Subject: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			createtask: {
				Section: {
					task: {},
					task_2: {},
					task_3: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
})(DevKitV4 || (DevKitV4 = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.Task = {
		ActivityTypeCode : {
			Appointment: 4201,
			Customer_Voice_alert: 10611,
			Customer_Voice_survey_invite: 10612,
			Customer_Voice_survey_response: 10613,
			Email: 4202,
			Fax: 4204,
			Invite_Redemption: 10315,
			Letter: 4207,
			Phone_Call: 4210,
			Portal_Comment: 10316,
			Recurring_Appointment: 4251,
			Task: 4212,
			Teams_chat: 10187
		},
		PriorityCode : {
			High: 2,
			Low: 0,
			Normal: 1
		},
		RegardingObjectTypeCode : {
		},
		StateCode : {
			Canceled: 2,
			Completed: 1,
			Open: 0
		},
		StatusCode : {
			Canceled: 6,
			Completed: 5,
			Deferred: 7,
			In_Progress: 3,
			Not_Started: 2,
			Waiting_on_someone_else: 4
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