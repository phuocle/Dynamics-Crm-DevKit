'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formpowerpagecomponent_Information = function(executionContext, defaultWebResourceName) {
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
			content: {},
			filecontent: {},
			name: {},
			OwnerId: {},
			powerpagecomponenttype: {},
			powerpageparentcomponentid: {},
			powerpagesiteid: {},
			powerpagesitelanguageid: {},
			statecode: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {

		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var navigation = {
			powerpagecomponent_mspp_webformid_adx_webformsession: {},
			powerpagecomponent_mspp_webformstepid_adx_webformsession: {}
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
	OptionSet.powerpagecomponent = {
		ComponentState : {
			Deleted: 2,
			Deleted_Unpublished: 3,
			Published: 0,
			Unpublished: 1
		},
		powerpagecomponenttype : {
			Ad_Placement: 26,
			Advanced_Form: 19,
			Advanced_Form_Metadata: 21,
			Advanced_Form_Step: 20,
			Basic_Form: 15,
			Basic_Form_Metadata: 16,
			Bot_Consumer: 27,
			Cloud_Flow: 33,
			Column_Permission: 29,
			Column_Permission_Profile: 28,
			Content_Snippet: 7,
			List: 17,
			Page_Template: 6,
			Poll_Placement: 24,
			Publishing_State: 1,
			Publishing_State_Transition_Rule: 31,
			Redirect: 30,
			Shortcut: 32,
			Site_Marker: 13,
			Site_Setting: 9,
			Table_Permission: 18,
			UX_Component: 34,
			Web_File: 3,
			Web_Link: 5,
			Web_Link_Set: 4,
			Web_Page: 2,
			Web_Page_Access_Control_Rule: 10,
			Web_Role: 11,
			Web_Template: 8,
			Website_Access: 12
		},
		statecode : {
			Active: 0,
			Inactive: 1
		},
		statuscode : {
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