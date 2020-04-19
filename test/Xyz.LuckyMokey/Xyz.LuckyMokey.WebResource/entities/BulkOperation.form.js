'use strict';
/** @namespace LuckyMokey */
var LuckyMokey;
(function (LuckyMokey) {
	'use strict';
	LuckyMokey.FormQuick_Campaign = function(executionContext, defaultWebResourceName) {
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
			Description: {},
			excluded_accounts: {},
			excluded_contacts: {},
			excluded_leads: {},
			FailureCount: {},
			notescontrol: {},
			OwnerId: {},
			Responses: {},
			selected_accounts: {},
			selected_contacts: {},
			selected_leads: {},
			Subject: {},
			SuccessCount: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			Summary: {
				Section: {
					Information: {},
					RELATED_PANE: {},
					selectedMembers: {},
					excludedMembers: {}
				}
			},
			Responses: {
				Section: {
					Responses: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			CreatedOn: {},
			CreatedRecordTypeCode: {},
			StatusCode: {},
			TargetedRecordTypeCode: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
		var quickForm = {

		};
		devKit.LoadQuickForms(formContext, quickForm);
		form.QuickForm = quickForm;
		var navigation = {
			navRelationshipActivities: {},
			navRelationshipBulkOperationLogs: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		return form;
	};
	LuckyMokey.FormQuick_Campaign_deprecated = function(executionContext, defaultWebResourceName) {
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
			accounts: {},
			accounts_uci: {},
			contacts: {},
			contacts_uci: {},
			Description: {},
			excluded_accounts_uci: {},
			excluded_contacts_uci: {},
			excluded_leads_uci: {},
			FailureCount: {},
			leads: {},
			leads_uci: {},
			notescontrol: {},
			OwnerId: {},
			Responses: {},
			Subject: {},
			SuccessCount: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			Summary: {
				Section: {
					Information: {},
					RELATED_PANE: {},
					selectedMembers: {},
					excludedMembers: {}
				}
			},
			Responses: {
				Section: {
					Responses: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			CreatedOn: {},
			CreatedRecordTypeCode: {},
			StatusCode: {},
			TargetedRecordTypeCode: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
		var quickForm = {

		};
		devKit.LoadQuickForms(formContext, quickForm);
		form.QuickForm = quickForm;
		var navigation = {
			navRelationshipActivities: {},
			navRelationshipBulkOperationLogs: {}
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
	OptionSet.BulkOperation = {
		Community : {
			Facebook: 1,
			Twitter: 2,
			Other: 0
		},
		CreatedRecordTypeCode : {
			Phone_Call: 1,
			Fax: 2,
			Letter: 3,
			Email: 4,
			Appointment: 5,
			Send_Direct_Email: 6
		},
		DeliveryPriorityCode : {
			Low: 0,
			Normal: 1,
			High: 2
		},
		InstanceTypeCode : {
			Not_Recurring: 0,
			Recurring_Master: 1,
			Recurring_Instance: 2,
			Recurring_Exception: 3,
			Recurring_Future_Exception: 4
		},
		OperationTypeCode : {
			Create_Opportunities: 1,
			Create_Activities: 2,
			Send_Direct_Mail: 3,
			Distribute: 4,
			Execute: 5,
			Quick_Campaign: 7
		},
		PriorityCode : {
			Low: 0,
			Normal: 1,
			High: 2
		},
		StateCode : {
			Open: 0,
			Closed: 1,
			Canceled: 2
		},
		StatusCode : {
			Pending: 1,
			In_Progress: 2,
			Aborted: 3,
			Completed: 4,
			Canceled: 5
		},
		TargetedRecordTypeCode : {
			Account: 1,
			Contact: 2,
			Lead: 4
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