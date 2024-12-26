'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdyncrm_formpage_Information = function(executionContext, defaultWebResourceName) {
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
			msdyncrm_ConfirmationMessage: {},
			msdyncrm_errorImageUrl: {},
			msdyncrm_ErrorMessage: {},
			msdyncrm_externalformhosting_iframe: {},
			msdyncrm_externalhostingformat: {},
			msdyncrm_externalhostingformat_description: {},
			msdyncrm_javascriptcode_compound: {},
			msdyncrm_LimitExceededMessage: {},
			msdyncrm_marketingformId: {},
			msdyncrm_marketingformId1: {},
			msdyncrm_marketingpageid: {},
			msdyncrm_name: {},
			msdyncrm_RedirectURL: {},
			msdyncrm_successImageUrl: {},
			msdyncrm_websiteid: {},
			OwnerId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {

		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var quickForm = {
			MarketingFormQuickViewForm: {

			}
		};
		devKit.LoadQuickForms(formContext, quickForm);
		form.QuickForm = quickForm;
		var navigation = {

		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.Formmsdyncrm_formpage_Information2 = function(executionContext, defaultWebResourceName) {
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
			msdyncrm_ConfirmationMessage: {},
			msdyncrm_ErrorMessage: {},
			msdyncrm_LimitExceededMessage: {},
			msdyncrm_marketingformId: {},
			msdyncrm_name: {},
			msdyncrm_RedirectURL: {},
			msdyncrm_websiteid: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {

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
	OptionSet.msdyncrm_formpage = {
		msdyncrm_externalhostingformat : {
			I_want_to_host_it_as_a_script: 192350000,
			I_want_to_host_it_as_an_iframe: 192350001
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