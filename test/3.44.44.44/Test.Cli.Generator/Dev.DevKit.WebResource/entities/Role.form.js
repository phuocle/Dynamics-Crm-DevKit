﻿'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormRole_Information = function(executionContext, defaultWebResourceName) {
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
			CreatedBy: {},
			CreatedOn: {},
			ModifiedBy: {},
			ModifiedOn: {},
			Name: {},
			ParentRoleId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			general: {
				Section: {
					role_information: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var navigation = {
			lk_msdyn_roleid: {},
			msdyn_role_msdyn_personasecurityrolemapping: {},
			msdyn_role_msdyn_servicecopilotpluginrole_roleid: {},
			role_msdyn_appprofilerolemapping: {},
			role_parent_role: {},
			role_parent_root_role: {}
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
	OptionSet.Role = {
		ComponentState : {
			Deleted: 2,
			Deleted_Unpublished: 3,
			Published: 0,
			Unpublished: 1
		},
		IsAutoAssigned : {
			No: 0,
			Yes: 1
		},
		IsInherited : {
			Direct_User_Basic_access_level_and_Team_privileges: 1,
			Team_privileges_only: 0
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