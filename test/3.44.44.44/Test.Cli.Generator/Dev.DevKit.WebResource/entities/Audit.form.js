'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormAudit_Information = function(executionContext, defaultWebResourceName) {
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
			CreatedOn: {},
			ObjectTypeCode: {},
			UserId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			General: {
				Section: {
					Section1: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var navigation = {

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
	OptionSet.Audit = {
		Action : {
			Activate: 4,
			Add_Item: 37,
			Add_Member: 31,
			Add_Members: 35,
			Add_Privileges_to_Role: 57,
			Add_Substitute: 39,
			Add_To_Queue: 52,
			ApplicationBasedAccessAllowed: 122,
			ApplicationBasedAccessDenied: 121,
			Approve: 28,
			Archive: 115,
			Assign: 13,
			Assign_Role_To_Team: 53,
			Assign_Role_To_User: 55,
			Associate_Entities: 33,
			Attribute_Audit_Started: 106,
			Attribute_Audit_Stopped: 109,
			Audit_Change_at_Attribute_Level: 103,
			Audit_Change_at_Entity_Level: 102,
			Audit_Change_at_Org_Level: 104,
			Audit_Disabled: 110,
			Audit_Enabled: 107,
			Audit_Log_Deletion: 111,
			Book: 50,
			Cancel: 17,
			Cascade: 11,
			Clone: 61,
			Close: 16,
			Complete: 18,
			Create: 1,
			Deactivate: 5,
			Delete: 3,
			Delete_Attribute: 101,
			Delete_Entity: 100,
			Disassociate_Entities: 34,
			Disqualify: 25,
			Enabled_for_organization: 63,
			Entity_Audit_Started: 105,
			Entity_Audit_Stopped: 108,
			Fulfill: 22,
			Generate_Quote_From_Opportunity: 51,
			Hold: 30,
			Import_Mappings: 60,
			Internal_Processing: 46,
			Invoice: 29,
			IPFirewallAcccesAllowed: 119,
			IPFirewallAcccesDenied: 118,
			Lose: 45,
			Merge: 12,
			Modify_Share: 48,
			Paid: 23,
			Qualify: 24,
			Reject: 27,
			Remove_Item: 38,
			Remove_Member: 32,
			Remove_Members: 36,
			Remove_Privileges_From_Role: 58,
			Remove_Role_From_Team: 54,
			Remove_Role_From_User: 56,
			Remove_Substitute: 40,
			Renew: 42,
			Reopen: 21,
			Replace_Privileges_In_Role: 59,
			Reschedule: 47,
			Resolve: 20,
			Restore: 120,
			Retain: 116,
			Retrieve: 15,
			Revise: 43,
			RollbackRetain: 117,
			Send_Direct_Email: 62,
			Set_State: 41,
			Share: 14,
			Submit: 26,
			Unknown: 0,
			Unshare: 49,
			Update: 2,
			Upsert: 6,
			User_Access_Audit_Started: 112,
			User_Access_Audit_Stopped: 113,
			User_Access_via_Web: 64,
			User_Access_via_Web_Services: 65,
			Win: 44
		},
		ObjectTypeCode : {
		},
		Operation : {
			Access: 4,
			Archive: 115,
			Create: 1,
			CustomOperation: 200,
			Delete: 3,
			Restore: 118,
			Retain: 116,
			RollbackRetain: 117,
			Update: 2,
			Upsert: 5
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