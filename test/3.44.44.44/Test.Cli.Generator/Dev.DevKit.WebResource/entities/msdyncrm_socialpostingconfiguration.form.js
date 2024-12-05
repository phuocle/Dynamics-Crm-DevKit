'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdyncrm_socialpostingconfiguration_Information = function(executionContext, defaultWebResourceName) {
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
			msdyncrm_expirydate: {},
			msdyncrm_name: {},
			msdyncrm_networkname: {},
			msdyncrm_Privacypolicy: {},
			msdyncrm_SocialChannel: {},
			msdyncrm_Termsofservice: {},
			msdyncrm_TokenType: {},
			msdyncrm_UserAccountDisabled: {},
			msdyncrm_UserName: {},
			msdyncrm_validationdate: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			msdyncrm_socialconfiguration_generaltab: {
				Section: {
					msdyncrm_socialconfiguration_generaltab_column_2_section_1: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			msdyncrm_connectstatus: {},
			OwnerId: {},
			statecode: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
		var navigation = {
			msdyncrm_msdyncrm_socialpostingconfiguration_msdyncrm_socialpost_socialconfiguration: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormSp_QuickCreateForm = function(executionContext, defaultWebResourceName) {
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
			msdyncrm_name: {},
			msdyncrm_SocialChannel: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			tab_1: {
				Section: {
					tab_1_column_1_section_1: {},
					tab_1_column_2_section_1: {},
					tab_1_column_3_section_1: {}
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
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyncrm_socialpostingconfiguration = {
		msdyncrm_SocialChannel : {
			Facebook: 270100001,
			Instagram: 270100003,
			LinkedIn: 270100002,
			Twitter: 270100000
		},
		msdyncrm_TokenType : {
			Page: 270100001,
			User: 270100000
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