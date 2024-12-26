'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormDeveloper_information = function(executionContext, defaultWebResourceName) {
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
			ApiTokenControl: {},
			DevInformationControl: {},
			msdynmkt_apitoken: {},
			msdynmkt_mobileappchannelinstanceId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {

		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var navigation = {
			msdyn_ChannelInstance_extendedentityid_msdynmkt_mobileappchannelinstance: {},
			msdynmkt_mobileappchannelinstance_pushmobiledevice: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.Formmsdynmkt_mobileappchannelinstance_Information = function(executionContext, defaultWebResourceName) {
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
			FileLoaderControl: {},
			msdynmkt_apikey: {},
			msdynmkt_applicationmode: {},
			msdynmkt_authenticationmode: {},
			msdynmkt_bundleid: {},
			msdynmkt_certificate1: {},
			msdynmkt_certificate2: {},
			msdynmkt_certificate3: {},
			msdynmkt_certificate4: {},
			msdynmkt_certificate5: {},
			msdynmkt_certificatename: {},
			msdynmkt_fcmauthenticationmode: {},
			msdynmkt_keyid: {},
			msdynmkt_password: {},
			msdynmkt_serviceaccountjson1: {},
			msdynmkt_serviceaccountjson2: {},
			msdynmkt_serviceaccountjson3: {},
			msdynmkt_serviceaccountjson4: {},
			msdynmkt_serviceaccountjson5: {},
			msdynmkt_serviceaccountjsonname: {},
			msdynmkt_signingkey: {},
			msdynmkt_teamid: {},
			ServiceAccountJsonLoaderControl: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {

		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var navigation = {
			msdyn_ChannelInstance_extendedentityid_msdynmkt_mobileappchannelinstance: {},
			msdynmkt_mobileappchannelinstance_pushmobiledevice: {}
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
	OptionSet.msdynmkt_mobileappchannelinstance = {
		msdynmkt_applicationmode : {
			Production: 0,
			Sandbox: 1
		},
		msdynmkt_authenticationmode : {
			Certificate: 0,
			Token: 1
		},
		msdynmkt_fcmauthenticationmode : {
			Api_Key: 0,
			Service_Account_Json: 1
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